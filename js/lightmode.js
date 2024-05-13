document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.querySelector('body');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const logo = document.querySelector('.logo');
  const logoInverted = document.querySelector('.logo-inverted');
  const darkIcon = themeToggleBtn.querySelector('.dark-icon');
  const lightIcon = themeToggleBtn.querySelector('.light-icon');
  const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');

  function applyTheme(isDark) {
    if (isDark) {
      lightIcon.style.display = 'none';
      darkIcon.style.display = 'block';
      logo.style.display = 'block';
      logoInverted.style.display = 'none';
      bodyElement.classList.remove('lightmode');
      themeColorMetaTag.setAttribute('content', '#232F25'); // Dark theme color
    } else {
      lightIcon.style.display = 'block';
      darkIcon.style.display = 'none';
      logo.style.display = 'none';
      logoInverted.style.display = 'block';
      bodyElement.classList.add('lightmode');
      themeColorMetaTag.setAttribute('content', '#DAD0D9'); // Light theme color
    }
  }

  function toggleTheme() {
    const isCurrentlyDark = !bodyElement.classList.contains('lightmode');
    const newTheme = !isCurrentlyDark ? 'dark' : 'light';
    applyTheme(!isCurrentlyDark);
    localStorage.setItem('userTheme', newTheme);
    checkAndClearUserSetting(newTheme);
  }

  // Function to clear the user setting if it matches the device setting
  function checkAndClearUserSetting(newTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ((newTheme === 'dark' && prefersDark) || (newTheme === 'light' && !prefersDark)) {
      localStorage.removeItem('userTheme'); // Remove setting if it matches the device theme
    }
  }

  // Initial theme setup
  const userSetTheme = localStorage.getItem('userTheme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (userSetTheme) {
    applyTheme(userSetTheme === 'dark');
    checkAndClearUserSetting(userSetTheme); // Check if the initial setting needs to be cleared
  } else {
    applyTheme(prefersDark);
  }

  // Listen for button clicks to manually change the theme
  themeToggleBtn.addEventListener('click', () => {
    toggleTheme();
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    // Only react to system changes if there's no user preference
    if (!localStorage.getItem('userTheme')) {
      applyTheme(event.matches);
    }
  });
});
