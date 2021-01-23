(window.Modernizr = (function (e, t, n) {
  function i(e) {
    _.cssText = e;
  }
  function r(e, t) {
    return i(x.join(e + ";") + (t || ""));
  }
  function s(e, t) {
    return typeof e === t;
  }
  function o(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function a(e, t) {
    for (var i in e) {
      var r = e[i];
      if (!o(r, "-") && _[r] !== n) return "pfx" == t ? r : !0;
    }
    return !1;
  }
  function l(e, t, i) {
    for (var r in e) {
      var o = t[e[r]];
      if (o !== n)
        return i === !1 ? e[r] : s(o, "function") ? o.bind(i || t) : o;
    }
    return !1;
  }
  function c(e, t, n) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      r = (e + " " + E.join(i + " ") + i).split(" ");
    return s(t, "string") || s(t, "undefined")
      ? a(r, t)
      : ((r = (e + " " + k.join(i + " ") + i).split(" ")), l(r, t, n));
  }
  function u() {
    (f.input = (function (n) {
      for (var i = 0, r = n.length; r > i; i++) P[n[i]] = !!(n[i] in b);
      return (
        P.list &&
          (P.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)),
        P
      );
    })(
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      )
    )),
      (f.inputtypes = (function (e) {
        for (var i, r, s, o = 0, a = e.length; a > o; o++)
          b.setAttribute("type", (r = e[o])),
            (i = "text" !== b.type),
            i &&
              ((b.value = T),
              (b.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(r) && b.style.WebkitAppearance !== n
                ? (v.appendChild(b),
                  (s = t.defaultView),
                  (i =
                    s.getComputedStyle &&
                    "textfield" !==
                      s.getComputedStyle(b, null).WebkitAppearance &&
                    0 !== b.offsetHeight),
                  v.removeChild(b))
                : /^(search|tel)$/.test(r) ||
                  (i = /^(url|email)$/.test(r)
                    ? b.checkValidity && b.checkValidity() === !1
                    : b.value != T)),
            (A[e[o]] = !!i);
        return A;
      })(
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        )
      ));
  }
  var d,
    p,
    h = "2.8.3",
    f = {},
    g = !0,
    v = t.documentElement,
    m = "modernizr",
    y = t.createElement(m),
    _ = y.style,
    b = t.createElement("input"),
    T = ":)",
    S = {}.toString,
    x = " -webkit- -moz- -o- -ms- ".split(" "),
    w = "Webkit Moz O ms",
    E = w.split(" "),
    k = w.toLowerCase().split(" "),
    C = { svg: "http://www.w3.org/2000/svg" },
    j = {},
    A = {},
    P = {},
    L = [],
    N = L.slice,
    D = function (e, n, i, r) {
      var s,
        o,
        a,
        l,
        c = t.createElement("div"),
        u = t.body,
        d = u || t.createElement("body");
      if (parseInt(i, 10))
        for (; i--; )
          (a = t.createElement("div")),
            (a.id = r ? r[i] : m + (i + 1)),
            c.appendChild(a);
      return (
        (s = ["&#173;", '<style id="s', m, '">', e, "</style>"].join("")),
        (c.id = m),
        ((u ? c : d).innerHTML += s),
        d.appendChild(c),
        u ||
          ((d.style.background = ""),
          (d.style.overflow = "hidden"),
          (l = v.style.overflow),
          (v.style.overflow = "hidden"),
          v.appendChild(d)),
        (o = n(c, e)),
        u
          ? c.parentNode.removeChild(c)
          : (d.parentNode.removeChild(d), (v.style.overflow = l)),
        !!o
      );
    },
    H = function (t) {
      var n = e.matchMedia || e.msMatchMedia;
      if (n) return (n(t) && n(t).matches) || !1;
      var i;
      return (
        D(
          "@media " + t + " { #" + m + " { position: absolute; } }",
          function (t) {
            i =
              "absolute" ==
              (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)
                .position;
          }
        ),
        i
      );
    },
    R = (function () {
      function e(e, r) {
        (r = r || t.createElement(i[e] || "div")), (e = "on" + e);
        var o = e in r;
        return (
          o ||
            (r.setAttribute || (r = t.createElement("div")),
            r.setAttribute &&
              r.removeAttribute &&
              (r.setAttribute(e, ""),
              (o = s(r[e], "function")),
              s(r[e], "undefined") || (r[e] = n),
              r.removeAttribute(e))),
          (r = null),
          o
        );
      }
      var i = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img",
      };
      return e;
    })(),
    M = {}.hasOwnProperty;
  (p =
    s(M, "undefined") || s(M.call, "undefined")
      ? function (e, t) {
          return t in e && s(e.constructor.prototype[t], "undefined");
        }
      : function (e, t) {
          return M.call(e, t);
        }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError();
        var n = N.call(arguments, 1),
          i = function () {
            if (this instanceof i) {
              var r = function () {};
              r.prototype = t.prototype;
              var s = new r(),
                o = t.apply(s, n.concat(N.call(arguments)));
              return Object(o) === o ? o : s;
            }
            return t.apply(e, n.concat(N.call(arguments)));
          };
        return i;
      }),
    (j.flexbox = function () {
      return c("flexWrap");
    }),
    (j.flexboxlegacy = function () {
      return c("boxDirection");
    }),
    (j.canvas = function () {
      var e = t.createElement("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    (j.canvastext = function () {
      return !(
        !f.canvas ||
        !s(t.createElement("canvas").getContext("2d").fillText, "function")
      );
    }),
    (j.webgl = function () {
      return !!e.WebGLRenderingContext;
    }),
    (j.touch = function () {
      var n;
      return (
        "ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch)
          ? (n = !0)
          : D(
              [
                "@media (",
                x.join("touch-enabled),("),
                m,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (e) {
                n = 9 === e.offsetTop;
              }
            ),
        n
      );
    }),
    (j.geolocation = function () {
      return "geolocation" in navigator;
    }),
    (j.postmessage = function () {
      return !!e.postMessage;
    }),
    (j.websqldatabase = function () {
      return !!e.openDatabase;
    }),
    (j.indexedDB = function () {
      return !!c("indexedDB", e);
    }),
    (j.hashchange = function () {
      return R("hashchange", e) && (t.documentMode === n || t.documentMode > 7);
    }),
    (j.history = function () {
      return !(!e.history || !history.pushState);
    }),
    (j.draganddrop = function () {
      var e = t.createElement("div");
      return "draggable" in e || ("ondragstart" in e && "ondrop" in e);
    }),
    (j.websockets = function () {
      return "WebSocket" in e || "MozWebSocket" in e;
    }),
    (j.rgba = function () {
      return (
        i("background-color:rgba(150,255,150,.5)"), o(_.backgroundColor, "rgba")
      );
    }),
    (j.hsla = function () {
      return (
        i("background-color:hsla(120,40%,100%,.5)"),
        o(_.backgroundColor, "rgba") || o(_.backgroundColor, "hsla")
      );
    }),
    (j.multiplebgs = function () {
      return (
        i("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(_.background)
      );
    }),
    (j.backgroundsize = function () {
      return c("backgroundSize");
    }),
    (j.borderimage = function () {
      return c("borderImage");
    }),
    (j.borderradius = function () {
      return c("borderRadius");
    }),
    (j.boxshadow = function () {
      return c("boxShadow");
    }),
    (j.textshadow = function () {
      return "" === t.createElement("div").style.textShadow;
    }),
    (j.opacity = function () {
      return r("opacity:.55"), /^0.55$/.test(_.opacity);
    }),
    (j.cssanimations = function () {
      return c("animationName");
    }),
    (j.csscolumns = function () {
      return c("columnCount");
    }),
    (j.cssgradients = function () {
      var e = "background-image:",
        t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        n = "linear-gradient(left top,#9f9, white);";
      return (
        i(
          (e + "-webkit- ".split(" ").join(t + e) + x.join(n + e)).slice(
            0,
            -e.length
          )
        ),
        o(_.backgroundImage, "gradient")
      );
    }),
    (j.cssreflections = function () {
      return c("boxReflect");
    }),
    (j.csstransforms = function () {
      return !!c("transform");
    }),
    (j.csstransforms3d = function () {
      var e = !!c("perspective");
      return (
        e &&
          "webkitPerspective" in v.style &&
          D(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (t, n) {
              e = 9 === t.offsetLeft && 3 === t.offsetHeight;
            }
          ),
        e
      );
    }),
    (j.csstransitions = function () {
      return c("transition");
    }),
    (j.fontface = function () {
      var e;
      return (
        D(
          '@font-face {font-family:"font";src:url("https://")}',
          function (n, i) {
            var r = t.getElementById("smodernizr"),
              s = r.sheet || r.styleSheet,
              o = s
                ? s.cssRules && s.cssRules[0]
                  ? s.cssRules[0].cssText
                  : s.cssText || ""
                : "";
            e = /src/i.test(o) && 0 === o.indexOf(i.split(" ")[0]);
          }
        ),
        e
      );
    }),
    (j.generatedcontent = function () {
      var e;
      return (
        D(
          [
            "#",
            m,
            "{font:0/0 a}#",
            m,
            ':after{content:"',
            T,
            '";visibility:hidden;font:3px/1 a}',
          ].join(""),
          function (t) {
            e = t.offsetHeight >= 3;
          }
        ),
        e
      );
    }),
    (j.video = function () {
      var e = t.createElement("video"),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, "")),
          (n.h264 = e
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, "")),
          (n.webm = e
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, "")));
      } catch (i) {}
      return n;
    }),
    (j.audio = function () {
      var e = t.createElement("audio"),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, "")),
          (n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, "")),
          (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
          (n.m4a = (
            e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
          ).replace(/^no$/, "")));
      } catch (i) {}
      return n;
    }),
    (j.localstorage = function () {
      try {
        return localStorage.setItem(m, m), localStorage.removeItem(m), !0;
      } catch (e) {
        return !1;
      }
    }),
    (j.sessionstorage = function () {
      try {
        return sessionStorage.setItem(m, m), sessionStorage.removeItem(m), !0;
      } catch (e) {
        return !1;
      }
    }),
    (j.webworkers = function () {
      return !!e.Worker;
    }),
    (j.applicationcache = function () {
      return !!e.applicationCache;
    }),
    (j.svg = function () {
      return (
        !!t.createElementNS && !!t.createElementNS(C.svg, "svg").createSVGRect
      );
    }),
    (j.inlinesvg = function () {
      var e = t.createElement("div");
      return (
        (e.innerHTML = "<svg/>"),
        (e.firstChild && e.firstChild.namespaceURI) == C.svg
      );
    }),
    (j.smil = function () {
      return (
        !!t.createElementNS &&
        /SVGAnimate/.test(S.call(t.createElementNS(C.svg, "animate")))
      );
    }),
    (j.svgclippaths = function () {
      return (
        !!t.createElementNS &&
        /SVGClipPath/.test(S.call(t.createElementNS(C.svg, "clipPath")))
      );
    });
  for (var $ in j)
    p(j, $) &&
      ((d = $.toLowerCase()), (f[d] = j[$]()), L.push((f[d] ? "" : "no-") + d));
  return (
    f.input || u(),
    (f.addTest = function (e, t) {
      if ("object" == typeof e) for (var i in e) p(e, i) && f.addTest(i, e[i]);
      else {
        if (((e = e.toLowerCase()), f[e] !== n)) return f;
        (t = "function" == typeof t ? t() : t),
          "undefined" != typeof g &&
            g &&
            (v.className += " " + (t ? "" : "no-") + e),
          (f[e] = t);
      }
      return f;
    }),
    i(""),
    (y = b = null),
    (function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          i = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          i.insertBefore(n.lastChild, i.firstChild)
        );
      }
      function i() {
        var e = y.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function r(e) {
        var t = m[e[g]];
        return t || ((t = {}), v++, (e[g] = v), (m[v] = t)), t;
      }
      function s(e, n, i) {
        if ((n || (n = t), u)) return n.createElement(e);
        i || (i = r(n));
        var s;
        return (
          (s = i.cache[e]
            ? i.cache[e].cloneNode()
            : f.test(e)
            ? (i.cache[e] = i.createElem(e)).cloneNode()
            : i.createElem(e)),
          !s.canHaveChildren || h.test(e) || s.tagUrn
            ? s
            : i.frag.appendChild(s)
        );
      }
      function o(e, n) {
        if ((e || (e = t), u)) return e.createDocumentFragment();
        n = n || r(e);
        for (
          var s = n.frag.cloneNode(), o = 0, a = i(), l = a.length;
          l > o;
          o++
        )
          s.createElement(a[o]);
        return s;
      }
      function a(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return y.shivMethods ? s(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              i()
                .join()
                .replace(/[\w\-]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(y, t.frag));
      }
      function l(e) {
        e || (e = t);
        var i = r(e);
        return (
          !y.shivCSS ||
            c ||
            i.hasCSS ||
            (i.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          u || a(e, i),
          e
        );
      }
      var c,
        u,
        d = "3.7.0",
        p = e.html5 || {},
        h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g = "_html5shiv",
        v = 0,
        m = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (c = "hidden" in e),
            (u =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (c = !0), (u = !0);
        }
      })();
      var y = {
        elements:
          p.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: d,
        shivCSS: p.shivCSS !== !1,
        supportsUnknownElements: u,
        shivMethods: p.shivMethods !== !1,
        type: "default",
        shivDocument: l,
        createElement: s,
        createDocumentFragment: o,
      };
      (e.html5 = y), l(t);
    })(this, t),
    (f._version = h),
    (f._prefixes = x),
    (f._domPrefixes = k),
    (f._cssomPrefixes = E),
    (f.mq = H),
    (f.hasEvent = R),
    (f.testProp = function (e) {
      return a([e]);
    }),
    (f.testAllProps = c),
    (f.testStyles = D),
    (f.prefixed = function (e, t, n) {
      return t ? c(e, t, n) : c(e, "pfx");
    }),
    (v.className =
      v.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (g ? " js " + L.join(" ") : "")),
    f
  );
})(this, this.document)),
  (function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
      var t = e.length,
        n = Z.type(e);
      return "function" === n || Z.isWindow(e)
        ? !1
        : 1 === e.nodeType && t
        ? !0
        : "array" === n ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e);
    }
    function i(e, t, n) {
      if (Z.isFunction(t))
        return Z.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        });
      if (t.nodeType)
        return Z.grep(e, function (e) {
          return (e === t) !== n;
        });
      if ("string" == typeof t) {
        if (ae.test(t)) return Z.filter(t, e, n);
        t = Z.filter(t, e);
      }
      return Z.grep(e, function (e) {
        return B.call(t, e) >= 0 !== n;
      });
    }
    function r(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function s(e) {
      var t = (fe[e] = {});
      return (
        Z.each(e.match(he) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function o() {
      K.removeEventListener("DOMContentLoaded", o, !1),
        e.removeEventListener("load", o, !1),
        Z.ready();
    }
    function a() {
      Object.defineProperty((this.cache = {}), 0, {
        get: function () {
          return {};
        },
      }),
        (this.expando = Z.expando + a.uid++);
    }
    function l(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(be, "-$1").toLowerCase()),
          (n = e.getAttribute(i)),
          "string" == typeof n)
        ) {
          try {
            n =
              "true" === n
                ? !0
                : "false" === n
                ? !1
                : "null" === n
                ? null
                : +n + "" === n
                ? +n
                : _e.test(n)
                ? Z.parseJSON(n)
                : n;
          } catch (r) {}
          ye.set(e, t, n);
        } else n = void 0;
      return n;
    }
    function c() {
      return !0;
    }
    function u() {
      return !1;
    }
    function d() {
      try {
        return K.activeElement;
      } catch (e) {}
    }
    function p(e, t) {
      return Z.nodeName(e, "table") &&
        Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function h(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function f(e) {
      var t = Me.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function g(e, t) {
      for (var n = 0, i = e.length; i > n; n++)
        me.set(e[n], "globalEval", !t || me.get(t[n], "globalEval"));
    }
    function v(e, t) {
      var n, i, r, s, o, a, l, c;
      if (1 === t.nodeType) {
        if (
          me.hasData(e) &&
          ((s = me.access(e)), (o = me.set(t, s)), (c = s.events))
        ) {
          delete o.handle, (o.events = {});
          for (r in c)
            for (n = 0, i = c[r].length; i > n; n++) Z.event.add(t, r, c[r][n]);
        }
        ye.hasData(e) &&
          ((a = ye.access(e)), (l = Z.extend({}, a)), ye.set(t, l));
      }
    }
    function m(e, t) {
      var n = e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
      return void 0 === t || (t && Z.nodeName(e, t)) ? Z.merge([e], n) : n;
    }
    function y(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && we.test(e.type)
        ? (t.checked = e.checked)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
    function _(t, n) {
      var i,
        r = Z(n.createElement(t)).appendTo(n.body),
        s =
          e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0]))
            ? i.display
            : Z.css(r[0], "display");
      return r.detach(), s;
    }
    function b(e) {
      var t = K,
        n = qe[e];
      return (
        n ||
          ((n = _(e, t)),
          ("none" !== n && n) ||
            ((Ie = (
              Ie || Z("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement)),
            (t = Ie[0].contentDocument),
            t.write(),
            t.close(),
            (n = _(e, t)),
            Ie.detach()),
          (qe[e] = n)),
        n
      );
    }
    function T(e, t, n) {
      var i,
        r,
        s,
        o,
        a = e.style;
      return (
        (n = n || We(e)),
        n && (o = n.getPropertyValue(t) || n[t]),
        n &&
          ("" !== o || Z.contains(e.ownerDocument, e) || (o = Z.style(e, t)),
          Ue.test(o) &&
            Fe.test(t) &&
            ((i = a.width),
            (r = a.minWidth),
            (s = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = o),
            (o = n.width),
            (a.width = i),
            (a.minWidth = r),
            (a.maxWidth = s))),
        void 0 !== o ? o + "" : o
      );
    }
    function S(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function x(e, t) {
      if (t in e) return t;
      for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ge.length; r--; )
        if (((t = Ge[r] + n), t in e)) return t;
      return i;
    }
    function w(e, t, n) {
      var i = ze.exec(t);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function E(e, t, n, i, r) {
      for (
        var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          o = 0;
        4 > s;
        s += 2
      )
        "margin" === n && (o += Z.css(e, n + Se[s], !0, r)),
          i
            ? ("content" === n && (o -= Z.css(e, "padding" + Se[s], !0, r)),
              "margin" !== n &&
                (o -= Z.css(e, "border" + Se[s] + "Width", !0, r)))
            : ((o += Z.css(e, "padding" + Se[s], !0, r)),
              "padding" !== n &&
                (o += Z.css(e, "border" + Se[s] + "Width", !0, r)));
      return o;
    }
    function k(e, t, n) {
      var i = !0,
        r = "width" === t ? e.offsetWidth : e.offsetHeight,
        s = We(e),
        o = "border-box" === Z.css(e, "boxSizing", !1, s);
      if (0 >= r || null == r) {
        if (
          ((r = T(e, t, s)),
          (0 > r || null == r) && (r = e.style[t]),
          Ue.test(r))
        )
          return r;
        (i = o && (J.boxSizingReliable() || r === e.style[t])),
          (r = parseFloat(r) || 0);
      }
      return r + E(e, t, n || (o ? "border" : "content"), i, s) + "px";
    }
    function C(e, t) {
      for (var n, i, r, s = [], o = 0, a = e.length; a > o; o++)
        (i = e[o]),
          i.style &&
            ((s[o] = me.get(i, "olddisplay")),
            (n = i.style.display),
            t
              ? (s[o] || "none" !== n || (i.style.display = ""),
                "" === i.style.display &&
                  xe(i) &&
                  (s[o] = me.access(i, "olddisplay", b(i.nodeName))))
              : ((r = xe(i)),
                ("none" === n && r) ||
                  me.set(i, "olddisplay", r ? n : Z.css(i, "display"))));
      for (o = 0; a > o; o++)
        (i = e[o]),
          i.style &&
            ((t && "none" !== i.style.display && "" !== i.style.display) ||
              (i.style.display = t ? s[o] || "" : "none"));
      return e;
    }
    function j(e, t, n, i, r) {
      return new j.prototype.init(e, t, n, i, r);
    }
    function A() {
      return (
        setTimeout(function () {
          Je = void 0;
        }),
        (Je = Z.now())
      );
    }
    function P(e, t) {
      var n,
        i = 0,
        r = { height: e };
      for (t = t ? 1 : 0; 4 > i; i += 2 - t)
        (n = Se[i]), (r["margin" + n] = r["padding" + n] = e);
      return t && (r.opacity = r.width = e), r;
    }
    function L(e, t, n) {
      for (
        var i, r = (nt[t] || []).concat(nt["*"]), s = 0, o = r.length;
        o > s;
        s++
      )
        if ((i = r[s].call(n, t, e))) return i;
    }
    function N(e, t, n) {
      var i,
        r,
        s,
        o,
        a,
        l,
        c,
        u,
        d = this,
        p = {},
        h = e.style,
        f = e.nodeType && xe(e),
        g = me.get(e, "fxshow");
      n.queue ||
        ((a = Z._queueHooks(e, "fx")),
        null == a.unqueued &&
          ((a.unqueued = 0),
          (l = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || l();
          })),
        a.unqueued++,
        d.always(function () {
          d.always(function () {
            a.unqueued--, Z.queue(e, "fx").length || a.empty.fire();
          });
        })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
          (c = Z.css(e, "display")),
          (u = "none" === c ? me.get(e, "olddisplay") || b(e.nodeName) : c),
          "inline" === u &&
            "none" === Z.css(e, "float") &&
            (h.display = "inline-block")),
        n.overflow &&
          ((h.overflow = "hidden"),
          d.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          }));
      for (i in t)
        if (((r = t[i]), Qe.exec(r))) {
          if (
            (delete t[i],
            (s = s || "toggle" === r),
            r === (f ? "hide" : "show"))
          ) {
            if ("show" !== r || !g || void 0 === g[i]) continue;
            f = !0;
          }
          p[i] = (g && g[i]) || Z.style(e, i);
        } else c = void 0;
      if (Z.isEmptyObject(p))
        "inline" === ("none" === c ? b(e.nodeName) : c) && (h.display = c);
      else {
        g ? "hidden" in g && (f = g.hidden) : (g = me.access(e, "fxshow", {})),
          s && (g.hidden = !f),
          f
            ? Z(e).show()
            : d.done(function () {
                Z(e).hide();
              }),
          d.done(function () {
            var t;
            me.remove(e, "fxshow");
            for (t in p) Z.style(e, t, p[t]);
          });
        for (i in p)
          (o = L(f ? g[i] : 0, i, d)),
            i in g ||
              ((g[i] = o.start),
              f &&
                ((o.end = o.start),
                (o.start = "width" === i || "height" === i ? 1 : 0)));
      }
    }
    function D(e, t) {
      var n, i, r, s, o;
      for (n in e)
        if (
          ((i = Z.camelCase(n)),
          (r = t[i]),
          (s = e[n]),
          Z.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
          n !== i && ((e[i] = s), delete e[n]),
          (o = Z.cssHooks[i]),
          o && "expand" in o)
        ) {
          (s = o.expand(s)), delete e[i];
          for (n in s) n in e || ((e[n] = s[n]), (t[n] = r));
        } else t[i] = r;
    }
    function H(e, t, n) {
      var i,
        r,
        s = 0,
        o = tt.length,
        a = Z.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (r) return !1;
          for (
            var t = Je || A(),
              n = Math.max(0, c.startTime + c.duration - t),
              i = n / c.duration || 0,
              s = 1 - i,
              o = 0,
              l = c.tweens.length;
            l > o;
            o++
          )
            c.tweens[o].run(s);
          return (
            a.notifyWith(e, [c, s, n]),
            1 > s && l ? n : (a.resolveWith(e, [c]), !1)
          );
        },
        c = a.promise({
          elem: e,
          props: Z.extend({}, t),
          opts: Z.extend(!0, { specialEasing: {} }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Je || A(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = Z.Tween(
              e,
              c.opts,
              t,
              n,
              c.opts.specialEasing[t] || c.opts.easing
            );
            return c.tweens.push(i), i;
          },
          stop: function (t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; i > n; n++) c.tweens[n].run(1);
            return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this;
          },
        }),
        u = c.props;
      for (D(u, c.opts.specialEasing); o > s; s++)
        if ((i = tt[s].call(c, e, u, c.opts))) return i;
      return (
        Z.map(u, L, c),
        Z.isFunction(c.opts.start) && c.opts.start.call(e, c),
        Z.fx.timer(Z.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    function R(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var i,
          r = 0,
          s = t.toLowerCase().match(he) || [];
        if (Z.isFunction(n))
          for (; (i = s[r++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
              : (e[i] = e[i] || []).push(n);
      };
    }
    function M(e, t, n, i) {
      function r(a) {
        var l;
        return (
          (s[a] = !0),
          Z.each(e[a] || [], function (e, a) {
            var c = a(t, n, i);
            return "string" != typeof c || o || s[c]
              ? o
                ? !(l = c)
                : void 0
              : (t.dataTypes.unshift(c), r(c), !1);
          }),
          l
        );
      }
      var s = {},
        o = e === _t;
      return r(t.dataTypes[0]) || (!s["*"] && r("*"));
    }
    function $(e, t) {
      var n,
        i,
        r = Z.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && Z.extend(!0, e, i), e;
    }
    function O(e, t, n) {
      for (var i, r, s, o, a = e.contents, l = e.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === i &&
            (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
        for (r in a)
          if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break;
          }
      if (l[0] in n) s = l[0];
      else {
        for (r in n) {
          if (!l[0] || e.converters[r + " " + l[0]]) {
            s = r;
            break;
          }
          o || (o = r);
        }
        s = s || o;
      }
      return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0;
    }
    function I(e, t, n, i) {
      var r,
        s,
        o,
        a,
        l,
        c = {},
        u = e.dataTypes.slice();
      if (u[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
      for (s = u.shift(); s; )
        if (
          (e.responseFields[s] && (n[e.responseFields[s]] = t),
          !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (l = s),
          (s = u.shift()))
        )
          if ("*" === s) s = l;
          else if ("*" !== l && l !== s) {
            if (((o = c[l + " " + s] || c["* " + s]), !o))
              for (r in c)
                if (
                  ((a = r.split(" ")),
                  a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]]))
                ) {
                  o === !0
                    ? (o = c[r])
                    : c[r] !== !0 && ((s = a[0]), u.unshift(a[1]));
                  break;
                }
            if (o !== !0)
              if (o && e["throws"]) t = o(t);
              else
                try {
                  t = o(t);
                } catch (d) {
                  return {
                    state: "parsererror",
                    error: o ? d : "No conversion from " + l + " to " + s,
                  };
                }
          }
      return { state: "success", data: t };
    }
    function q(e, t, n, i) {
      var r;
      if (Z.isArray(t))
        Z.each(t, function (t, r) {
          n || wt.test(e)
            ? i(e, r)
            : q(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i);
        });
      else if (n || "object" !== Z.type(t)) i(e, t);
      else for (r in t) q(e + "[" + r + "]", t[r], n, i);
    }
    function F(e) {
      return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var U = [],
      W = U.slice,
      X = U.concat,
      z = U.push,
      B = U.indexOf,
      V = {},
      Y = V.toString,
      G = V.hasOwnProperty,
      J = {},
      K = e.document,
      Q = "2.1.3",
      Z = function (e, t) {
        return new Z.fn.init(e, t);
      },
      ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      te = /^-ms-/,
      ne = /-([\da-z])/gi,
      ie = function (e, t) {
        return t.toUpperCase();
      };
    (Z.fn = Z.prototype = {
      jquery: Q,
      constructor: Z,
      selector: "",
      length: 0,
      toArray: function () {
        return W.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : W.call(this);
      },
      pushStack: function (e) {
        var t = Z.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return Z.each(this, e, t);
      },
      map: function (e) {
        return this.pushStack(
          Z.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(W.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: z,
      sort: U.sort,
      splice: U.splice,
    }),
      (Z.extend = Z.fn.extend = function () {
        var e,
          t,
          n,
          i,
          r,
          s,
          o = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof o && ((c = o), (o = arguments[a] || {}), a++),
            "object" == typeof o || Z.isFunction(o) || (o = {}),
            a === l && ((o = this), a--);
          l > a;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = o[t]),
                (i = e[t]),
                o !== i &&
                  (c && i && (Z.isPlainObject(i) || (r = Z.isArray(i)))
                    ? (r
                        ? ((r = !1), (s = n && Z.isArray(n) ? n : []))
                        : (s = n && Z.isPlainObject(n) ? n : {}),
                      (o[t] = Z.extend(c, s, i)))
                    : void 0 !== i && (o[t] = i));
        return o;
      }),
      Z.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === Z.type(e);
        },
        isArray: Array.isArray,
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0;
        },
        isPlainObject: function (e) {
          return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e)
            ? !1
            : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf")
            ? !1
            : !0;
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? V[Y.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (e) {
          var t,
            n = eval;
          (e = Z.trim(e)),
            e &&
              (1 === e.indexOf("use strict")
                ? ((t = K.createElement("script")),
                  (t.text = e),
                  K.head.appendChild(t).parentNode.removeChild(t))
                : n(e));
        },
        camelCase: function (e) {
          return e.replace(te, "ms-").replace(ne, ie);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t, i) {
          var r,
            s = 0,
            o = e.length,
            a = n(e);
          if (i) {
            if (a) for (; o > s && ((r = t.apply(e[s], i)), r !== !1); s++);
            else for (s in e) if (((r = t.apply(e[s], i)), r === !1)) break;
          } else if (a)
            for (; o > s && ((r = t.call(e[s], s, e[s])), r !== !1); s++);
          else for (s in e) if (((r = t.call(e[s], s, e[s])), r === !1)) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(ee, "");
        },
        makeArray: function (e, t) {
          var i = t || [];
          return (
            null != e &&
              (n(Object(e))
                ? Z.merge(i, "string" == typeof e ? [e] : e)
                : z.call(i, e)),
            i
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : B.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, r = e.length; n > i; i++)
            e[r++] = t[i];
          return (e.length = r), e;
        },
        grep: function (e, t, n) {
          for (var i, r = [], s = 0, o = e.length, a = !n; o > s; s++)
            (i = !t(e[s], s)), i !== a && r.push(e[s]);
          return r;
        },
        map: function (e, t, i) {
          var r,
            s = 0,
            o = e.length,
            a = n(e),
            l = [];
          if (a) for (; o > s; s++) (r = t(e[s], s, i)), null != r && l.push(r);
          else for (s in e) (r = t(e[s], s, i)), null != r && l.push(r);
          return X.apply([], l);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, i, r;
          return (
            "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
            Z.isFunction(e)
              ? ((i = W.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(W.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || Z.guid++),
                r)
              : void 0
          );
        },
        now: Date.now,
        support: J,
      }),
      Z.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (e, t) {
          V["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var re = (function (e) {
      function t(e, t, n, i) {
        var r, s, o, a, l, c, d, h, f, g;
        if (
          ((t ? t.ownerDocument || t : q) !== N && L(t),
          (t = t || N),
          (n = n || []),
          (a = t.nodeType),
          "string" != typeof e || !e || (1 !== a && 9 !== a && 11 !== a))
        )
          return n;
        if (!i && H) {
          if (11 !== a && (r = ye.exec(e)))
            if ((o = r[1])) {
              if (9 === a) {
                if (((s = t.getElementById(o)), !s || !s.parentNode)) return n;
                if (s.id === o) return n.push(s), n;
              } else if (
                t.ownerDocument &&
                (s = t.ownerDocument.getElementById(o)) &&
                O(t, s) &&
                s.id === o
              )
                return n.push(s), n;
            } else {
              if (r[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
              if ((o = r[3]) && T.getElementsByClassName)
                return Q.apply(n, t.getElementsByClassName(o)), n;
            }
          if (T.qsa && (!R || !R.test(e))) {
            if (
              ((h = d = I),
              (f = t),
              (g = 1 !== a && e),
              1 === a && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                c = E(e),
                  (d = t.getAttribute("id"))
                    ? (h = d.replace(be, "\\$&"))
                    : t.setAttribute("id", h),
                  h = "[id='" + h + "'] ",
                  l = c.length;
                l--;

              )
                c[l] = h + p(c[l]);
              (f = (_e.test(e) && u(t.parentNode)) || t), (g = c.join(","));
            }
            if (g)
              try {
                return Q.apply(n, f.querySelectorAll(g)), n;
              } catch (v) {
              } finally {
                d || t.removeAttribute("id");
              }
          }
        }
        return C(e.replace(le, "$1"), t, n, i);
      }
      function n() {
        function e(n, i) {
          return (
            t.push(n + " ") > S.cacheLength && delete e[t.shift()],
            (e[n + " "] = i)
          );
        }
        var t = [];
        return e;
      }
      function i(e) {
        return (e[I] = !0), e;
      }
      function r(e) {
        var t = N.createElement("div");
        try {
          return !!e(t);
        } catch (n) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function s(e, t) {
        for (var n = e.split("|"), i = e.length; i--; ) S.attrHandle[n[i]] = t;
      }
      function o(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || V) - (~e.sourceIndex || V);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function a(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e;
        };
      }
      function l(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function c(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, i) {
              for (var r, s = e([], n.length, t), o = s.length; o--; )
                n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
            })
          );
        });
      }
      function u(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function d() {}
      function p(e) {
        for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
        return i;
      }
      function h(e, t, n) {
        var i = t.dir,
          r = n && "parentNode" === i,
          s = U++;
        return t.first
          ? function (t, n, s) {
              for (; (t = t[i]); ) if (1 === t.nodeType || r) return e(t, n, s);
            }
          : function (t, n, o) {
              var a,
                l,
                c = [F, s];
              if (o) {
                for (; (t = t[i]); )
                  if ((1 === t.nodeType || r) && e(t, n, o)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || r) {
                    if (
                      ((l = t[I] || (t[I] = {})),
                      (a = l[i]) && a[0] === F && a[1] === s)
                    )
                      return (c[2] = a[2]);
                    if (((l[i] = c), (c[2] = e(t, n, o)))) return !0;
                  }
            };
      }
      function f(e) {
        return e.length > 1
          ? function (t, n, i) {
              for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function g(e, n, i) {
        for (var r = 0, s = n.length; s > r; r++) t(e, n[r], i);
        return i;
      }
      function v(e, t, n, i, r) {
        for (var s, o = [], a = 0, l = e.length, c = null != t; l > a; a++)
          (s = e[a]) && (!n || n(s, i, r)) && (o.push(s), c && t.push(a));
        return o;
      }
      function m(e, t, n, r, s, o) {
        return (
          r && !r[I] && (r = m(r)),
          s && !s[I] && (s = m(s, o)),
          i(function (i, o, a, l) {
            var c,
              u,
              d,
              p = [],
              h = [],
              f = o.length,
              m = i || g(t || "*", a.nodeType ? [a] : a, []),
              y = !e || (!i && t) ? m : v(m, p, e, a, l),
              _ = n ? (s || (i ? e : f || r) ? [] : o) : y;
            if ((n && n(y, _, a, l), r))
              for (c = v(_, h), r(c, [], a, l), u = c.length; u--; )
                (d = c[u]) && (_[h[u]] = !(y[h[u]] = d));
            if (i) {
              if (s || e) {
                if (s) {
                  for (c = [], u = _.length; u--; )
                    (d = _[u]) && c.push((y[u] = d));
                  s(null, (_ = []), c, l);
                }
                for (u = _.length; u--; )
                  (d = _[u]) &&
                    (c = s ? ee(i, d) : p[u]) > -1 &&
                    (i[c] = !(o[c] = d));
              }
            } else (_ = v(_ === o ? _.splice(f, _.length) : _)), s ? s(null, o, _, l) : Q.apply(o, _);
          })
        );
      }
      function y(e) {
        for (
          var t,
            n,
            i,
            r = e.length,
            s = S.relative[e[0].type],
            o = s || S.relative[" "],
            a = s ? 1 : 0,
            l = h(
              function (e) {
                return e === t;
              },
              o,
              !0
            ),
            c = h(
              function (e) {
                return ee(t, e) > -1;
              },
              o,
              !0
            ),
            u = [
              function (e, n, i) {
                var r =
                  (!s && (i || n !== j)) ||
                  ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return (t = null), r;
              },
            ];
          r > a;
          a++
        )
          if ((n = S.relative[e[a].type])) u = [h(f(u), n)];
          else {
            if (((n = S.filter[e[a].type].apply(null, e[a].matches)), n[I])) {
              for (i = ++a; r > i && !S.relative[e[i].type]; i++);
              return m(
                a > 1 && f(u),
                a > 1 &&
                  p(
                    e
                      .slice(0, a - 1)
                      .concat({ value: " " === e[a - 2].type ? "*" : "" })
                  ).replace(le, "$1"),
                n,
                i > a && y(e.slice(a, i)),
                r > i && y((e = e.slice(i))),
                r > i && p(e)
              );
            }
            u.push(n);
          }
        return f(u);
      }
      function _(e, n) {
        var r = n.length > 0,
          s = e.length > 0,
          o = function (i, o, a, l, c) {
            var u,
              d,
              p,
              h = 0,
              f = "0",
              g = i && [],
              m = [],
              y = j,
              _ = i || (s && S.find.TAG("*", c)),
              b = (F += null == y ? 1 : Math.random() || 0.1),
              T = _.length;
            for (c && (j = o !== N && o); f !== T && null != (u = _[f]); f++) {
              if (s && u) {
                for (d = 0; (p = e[d++]); )
                  if (p(u, o, a)) {
                    l.push(u);
                    break;
                  }
                c && (F = b);
              }
              r && ((u = !p && u) && h--, i && g.push(u));
            }
            if (((h += f), r && f !== h)) {
              for (d = 0; (p = n[d++]); ) p(g, m, o, a);
              if (i) {
                if (h > 0) for (; f--; ) g[f] || m[f] || (m[f] = J.call(l));
                m = v(m);
              }
              Q.apply(l, m),
                c && !i && m.length > 0 && h + n.length > 1 && t.uniqueSort(l);
            }
            return c && ((F = b), (j = y)), g;
          };
        return r ? i(o) : o;
      }
      var b,
        T,
        S,
        x,
        w,
        E,
        k,
        C,
        j,
        A,
        P,
        L,
        N,
        D,
        H,
        R,
        M,
        $,
        O,
        I = "sizzle" + 1 * new Date(),
        q = e.document,
        F = 0,
        U = 0,
        W = n(),
        X = n(),
        z = n(),
        B = function (e, t) {
          return e === t && (P = !0), 0;
        },
        V = 1 << 31,
        Y = {}.hasOwnProperty,
        G = [],
        J = G.pop,
        K = G.push,
        Q = G.push,
        Z = G.slice,
        ee = function (e, t) {
          for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
          return -1;
        },
        te =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        re = ie.replace("w", "w#"),
        se =
          "\\[" +
          ne +
          "*(" +
          ie +
          ")(?:" +
          ne +
          "*([*^$|!~]?=)" +
          ne +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          re +
          "))|)" +
          ne +
          "*\\]",
        oe =
          ":(" +
          ie +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          se +
          ")*)|.*)\\)|)",
        ae = new RegExp(ne + "+", "g"),
        le = new RegExp(
          "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
          "g"
        ),
        ce = new RegExp("^" + ne + "*," + ne + "*"),
        ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        pe = new RegExp(oe),
        he = new RegExp("^" + re + "$"),
        fe = {
          ID: new RegExp("^#(" + ie + ")"),
          CLASS: new RegExp("^\\.(" + ie + ")"),
          TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + se),
          PSEUDO: new RegExp("^" + oe),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ne +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ne +
              "*(?:([+-]|)" +
              ne +
              "*(\\d+)|))" +
              ne +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + te + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ne +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ne +
              "*((?:-\\d)?\\d*)" +
              ne +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ge = /^(?:input|select|textarea|button)$/i,
        ve = /^h\d$/i,
        me = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _e = /[+~]/,
        be = /'|\\/g,
        Te = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        Se = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n
            ? t
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        xe = function () {
          L();
        };
      try {
        Q.apply((G = Z.call(q.childNodes)), q.childNodes),
          G[q.childNodes.length].nodeType;
      } catch (we) {
        Q = {
          apply: G.length
            ? function (e, t) {
                K.apply(e, Z.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      (T = t.support = {}),
        (w = t.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return t ? "HTML" !== t.nodeName : !1;
        }),
        (L = t.setDocument = function (e) {
          var t,
            n,
            i = e ? e.ownerDocument || e : q;
          return i !== N && 9 === i.nodeType && i.documentElement
            ? ((N = i),
              (D = i.documentElement),
              (n = i.defaultView),
              n &&
                n !== n.top &&
                (n.addEventListener
                  ? n.addEventListener("unload", xe, !1)
                  : n.attachEvent && n.attachEvent("onunload", xe)),
              (H = !w(i)),
              (T.attributes = r(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (T.getElementsByTagName = r(function (e) {
                return (
                  e.appendChild(i.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (T.getElementsByClassName = me.test(i.getElementsByClassName)),
              (T.getById = r(function (e) {
                return (
                  (D.appendChild(e).id = I),
                  !i.getElementsByName || !i.getElementsByName(I).length
                );
              })),
              T.getById
                ? ((S.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && H) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (S.filter.ID = function (e) {
                    var t = e.replace(Te, Se);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete S.find.ID,
                  (S.filter.ID = function (e) {
                    var t = e.replace(Te, Se);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (S.find.TAG = T.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : T.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      r = 0,
                      s = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = s[r++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return s;
                  }),
              (S.find.CLASS =
                T.getElementsByClassName &&
                function (e, t) {
                  return H ? t.getElementsByClassName(e) : void 0;
                }),
              (M = []),
              (R = []),
              (T.qsa = me.test(i.querySelectorAll)) &&
                (r(function (e) {
                  (D.appendChild(e).innerHTML =
                    "<a id='" +
                    I +
                    "'></a><select id='" +
                    I +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      R.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      R.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + I + "-]").length ||
                      R.push("~="),
                    e.querySelectorAll(":checked").length || R.push(":checked"),
                    e.querySelectorAll("a#" + I + "+*").length ||
                      R.push(".#.+[+~]");
                }),
                r(function (e) {
                  var t = i.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      R.push("name" + ne + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      R.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    R.push(",.*:");
                })),
              (T.matchesSelector = me.test(
                ($ =
                  D.matches ||
                  D.webkitMatchesSelector ||
                  D.mozMatchesSelector ||
                  D.oMatchesSelector ||
                  D.msMatchesSelector)
              )) &&
                r(function (e) {
                  (T.disconnectedMatch = $.call(e, "div")),
                    $.call(e, "[s!='']:x"),
                    M.push("!=", oe);
                }),
              (R = R.length && new RegExp(R.join("|"))),
              (M = M.length && new RegExp(M.join("|"))),
              (t = me.test(D.compareDocumentPosition)),
              (O =
                t || me.test(D.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (B = t
                ? function (e, t) {
                    if (e === t) return (P = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n
                      ? n
                      : ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n ||
                        (!T.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === i || (e.ownerDocument === q && O(q, e))
                            ? -1
                            : t === i || (t.ownerDocument === q && O(q, t))
                            ? 1
                            : A
                            ? ee(A, e) - ee(A, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  }
                : function (e, t) {
                    if (e === t) return (P = !0), 0;
                    var n,
                      r = 0,
                      s = e.parentNode,
                      a = t.parentNode,
                      l = [e],
                      c = [t];
                    if (!s || !a)
                      return e === i
                        ? -1
                        : t === i
                        ? 1
                        : s
                        ? -1
                        : a
                        ? 1
                        : A
                        ? ee(A, e) - ee(A, t)
                        : 0;
                    if (s === a) return o(e, t);
                    for (n = e; (n = n.parentNode); ) l.unshift(n);
                    for (n = t; (n = n.parentNode); ) c.unshift(n);
                    for (; l[r] === c[r]; ) r++;
                    return r
                      ? o(l[r], c[r])
                      : l[r] === q
                      ? -1
                      : c[r] === q
                      ? 1
                      : 0;
                  }),
              i)
            : N;
        }),
        (t.matches = function (e, n) {
          return t(e, null, null, n);
        }),
        (t.matchesSelector = function (e, n) {
          if (
            ((e.ownerDocument || e) !== N && L(e),
            (n = n.replace(de, "='$1']")),
            T.matchesSelector && H && (!M || !M.test(n)) && (!R || !R.test(n)))
          )
            try {
              var i = $.call(e, n);
              if (
                i ||
                T.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (r) {}
          return t(n, N, null, [e]).length > 0;
        }),
        (t.contains = function (e, t) {
          return (e.ownerDocument || e) !== N && L(e), O(e, t);
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== N && L(e);
          var n = S.attrHandle[t.toLowerCase()],
            i =
              n && Y.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
          return void 0 !== i
            ? i
            : T.attributes || !H
            ? e.getAttribute(t)
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
        (t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (t.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            r = 0;
          if (
            ((P = !T.detectDuplicates),
            (A = !T.sortStable && e.slice(0)),
            e.sort(B),
            P)
          ) {
            for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
            for (; i--; ) e.splice(n[i], 1);
          }
          return (A = null), e;
        }),
        (x = t.getText = function (e) {
          var t,
            n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += x(e);
            } else if (3 === r || 4 === r) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += x(t);
          return n;
        }),
        (S = t.selectors = {
          cacheLength: 50,
          createPseudo: i,
          match: fe,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(Te, Se)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(Te, Se)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return fe.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      pe.test(n) &&
                      (t = E(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(Te, Se).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = W[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                  W(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, i) {
              return function (r) {
                var s = t.attr(r, e);
                return null == s
                  ? "!=" === n
                  : n
                  ? ((s += ""),
                    "=" === n
                      ? s === i
                      : "!=" === n
                      ? s !== i
                      : "^=" === n
                      ? i && 0 === s.indexOf(i)
                      : "*=" === n
                      ? i && s.indexOf(i) > -1
                      : "$=" === n
                      ? i && s.slice(-i.length) === i
                      : "~=" === n
                      ? (" " + s.replace(ae, " ") + " ").indexOf(i) > -1
                      : "|=" === n
                      ? s === i || s.slice(0, i.length + 1) === i + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (e, t, n, i, r) {
              var s = "nth" !== e.slice(0, 3),
                o = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === i && 0 === r
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      p,
                      h,
                      f,
                      g = s !== o ? "nextSibling" : "previousSibling",
                      v = t.parentNode,
                      m = a && t.nodeName.toLowerCase(),
                      y = !l && !a;
                    if (v) {
                      if (s) {
                        for (; g; ) {
                          for (d = t; (d = d[g]); )
                            if (
                              a
                                ? d.nodeName.toLowerCase() === m
                                : 1 === d.nodeType
                            )
                              return !1;
                          f = g = "only" === e && !f && "nextSibling";
                        }
                        return !0;
                      }
                      if (((f = [o ? v.firstChild : v.lastChild]), o && y)) {
                        for (
                          u = v[I] || (v[I] = {}),
                            c = u[e] || [],
                            h = c[0] === F && c[1],
                            p = c[0] === F && c[2],
                            d = h && v.childNodes[h];
                          (d = (++h && d && d[g]) || (p = h = 0) || f.pop());

                        )
                          if (1 === d.nodeType && ++p && d === t) {
                            u[e] = [F, h, p];
                            break;
                          }
                      } else if (
                        y &&
                        (c = (t[I] || (t[I] = {}))[e]) &&
                        c[0] === F
                      )
                        p = c[1];
                      else
                        for (
                          ;
                          (d = (++h && d && d[g]) || (p = h = 0) || f.pop()) &&
                          ((a
                            ? d.nodeName.toLowerCase() !== m
                            : 1 !== d.nodeType) ||
                            !++p ||
                            (y && ((d[I] || (d[I] = {}))[e] = [F, p]),
                            d !== t));

                        );
                      return (p -= r), p === i || (p % i === 0 && p / i >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var r,
                s =
                  S.pseudos[e] ||
                  S.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return s[I]
                ? s(n)
                : s.length > 1
                ? ((r = [e, e, "", n]),
                  S.setFilters.hasOwnProperty(e.toLowerCase())
                    ? i(function (e, t) {
                        for (var i, r = s(e, n), o = r.length; o--; )
                          (i = ee(e, r[o])), (e[i] = !(t[i] = r[o]));
                      })
                    : function (e) {
                        return s(e, 0, r);
                      })
                : s;
            },
          },
          pseudos: {
            not: i(function (e) {
              var t = [],
                n = [],
                r = k(e.replace(le, "$1"));
              return r[I]
                ? i(function (e, t, n, i) {
                    for (var s, o = r(e, null, i, []), a = e.length; a--; )
                      (s = o[a]) && (e[a] = !(t[a] = s));
                  })
                : function (e, i, s) {
                    return (
                      (t[0] = e), r(t, null, s, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: i(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: i(function (e) {
              return (
                (e = e.replace(Te, Se)),
                function (t) {
                  return (t.textContent || t.innerText || x(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: i(function (e) {
              return (
                he.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(Te, Se).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = H
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()),
                        n === e || 0 === n.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === D;
            },
            focus: function (e) {
              return (
                e === N.activeElement &&
                (!N.hasFocus || N.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return e.disabled === !1;
            },
            disabled: function (e) {
              return e.disabled === !0;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !S.pseudos.empty(e);
            },
            header: function (e) {
              return ve.test(e.nodeName);
            },
            input: function (e) {
              return ge.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: c(function () {
              return [0];
            }),
            last: c(function (e, t) {
              return [t - 1];
            }),
            eq: c(function (e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: c(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: c(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: c(function (e, t, n) {
              for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: c(function (e, t, n) {
              for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }),
        (S.pseudos.nth = S.pseudos.eq);
      for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        S.pseudos[b] = a(b);
      for (b in { submit: !0, reset: !0 }) S.pseudos[b] = l(b);
      return (
        (d.prototype = S.filters = S.pseudos),
        (S.setFilters = new d()),
        (E = t.tokenize = function (e, n) {
          var i,
            r,
            s,
            o,
            a,
            l,
            c,
            u = X[e + " "];
          if (u) return n ? 0 : u.slice(0);
          for (a = e, l = [], c = S.preFilter; a; ) {
            (!i || (r = ce.exec(a))) &&
              (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
              (i = !1),
              (r = ue.exec(a)) &&
                ((i = r.shift()),
                s.push({ value: i, type: r[0].replace(le, " ") }),
                (a = a.slice(i.length)));
            for (o in S.filter)
              !(r = fe[o].exec(a)) ||
                (c[o] && !(r = c[o](r))) ||
                ((i = r.shift()),
                s.push({ value: i, type: o, matches: r }),
                (a = a.slice(i.length)));
            if (!i) break;
          }
          return n ? a.length : a ? t.error(e) : X(e, l).slice(0);
        }),
        (k = t.compile = function (e, t) {
          var n,
            i = [],
            r = [],
            s = z[e + " "];
          if (!s) {
            for (t || (t = E(e)), n = t.length; n--; )
              (s = y(t[n])), s[I] ? i.push(s) : r.push(s);
            (s = z(e, _(r, i))), (s.selector = e);
          }
          return s;
        }),
        (C = t.select = function (e, t, n, i) {
          var r,
            s,
            o,
            a,
            l,
            c = "function" == typeof e && e,
            d = !i && E((e = c.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              ((s = d[0] = d[0].slice(0)),
              s.length > 2 &&
                "ID" === (o = s[0]).type &&
                T.getById &&
                9 === t.nodeType &&
                H &&
                S.relative[s[1].type])
            ) {
              if (
                ((t = (S.find.ID(o.matches[0].replace(Te, Se), t) || [])[0]),
                !t)
              )
                return n;
              c && (t = t.parentNode), (e = e.slice(s.shift().value.length));
            }
            for (
              r = fe.needsContext.test(e) ? 0 : s.length;
              r-- && ((o = s[r]), !S.relative[(a = o.type)]);

            )
              if (
                (l = S.find[a]) &&
                (i = l(
                  o.matches[0].replace(Te, Se),
                  (_e.test(s[0].type) && u(t.parentNode)) || t
                ))
              ) {
                if ((s.splice(r, 1), (e = i.length && p(s)), !e))
                  return Q.apply(n, i), n;
                break;
              }
          }
          return (
            (c || k(e, d))(i, t, !H, n, (_e.test(e) && u(t.parentNode)) || t), n
          );
        }),
        (T.sortStable = I.split("").sort(B).join("") === I),
        (T.detectDuplicates = !!P),
        L(),
        (T.sortDetached = r(function (e) {
          return 1 & e.compareDocumentPosition(N.createElement("div"));
        })),
        r(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          s("type|href|height|width", function (e, t, n) {
            return n
              ? void 0
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (T.attributes &&
          r(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          s("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase()
              ? void 0
              : e.defaultValue;
          }),
        r(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          s(te, function (e, t, n) {
            var i;
            return n
              ? void 0
              : e[t] === !0
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
        t
      );
    })(e);
    (Z.find = re),
      (Z.expr = re.selectors),
      (Z.expr[":"] = Z.expr.pseudos),
      (Z.unique = re.uniqueSort),
      (Z.text = re.getText),
      (Z.isXMLDoc = re.isXML),
      (Z.contains = re.contains);
    var se = Z.expr.match.needsContext,
      oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ae = /^.[^:#\[\.,]*$/;
    (Z.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? Z.find.matchesSelector(i, e)
            ? [i]
            : []
          : Z.find.matches(
              e,
              Z.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      Z.fn.extend({
        find: function (e) {
          var t,
            n = this.length,
            i = [],
            r = this;
          if ("string" != typeof e)
            return this.pushStack(
              Z(e).filter(function () {
                for (t = 0; n > t; t++) if (Z.contains(r[t], this)) return !0;
              })
            );
          for (t = 0; n > t; t++) Z.find(e, r[t], i);
          return (
            (i = this.pushStack(n > 1 ? Z.unique(i) : i)),
            (i.selector = this.selector ? this.selector + " " + e : e),
            i
          );
        },
        filter: function (e) {
          return this.pushStack(i(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(i(this, e || [], !0));
        },
        is: function (e) {
          return !!i(
            this,
            "string" == typeof e && se.test(e) ? Z(e) : e || [],
            !1
          ).length;
        },
      });
    var le,
      ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ue = (Z.fn.init = function (e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
          if (
            ((n =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : ce.exec(e)),
            !n || (!n[1] && t))
          )
            return !t || t.jquery
              ? (t || le).find(e)
              : this.constructor(t).find(e);
          if (n[1]) {
            if (
              ((t = t instanceof Z ? t[0] : t),
              Z.merge(
                this,
                Z.parseHTML(
                  n[1],
                  t && t.nodeType ? t.ownerDocument || t : K,
                  !0
                )
              ),
              oe.test(n[1]) && Z.isPlainObject(t))
            )
              for (n in t)
                Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
          }
          return (
            (i = K.getElementById(n[2])),
            i && i.parentNode && ((this.length = 1), (this[0] = i)),
            (this.context = K),
            (this.selector = e),
            this
          );
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : Z.isFunction(e)
          ? "undefined" != typeof le.ready
            ? le.ready(e)
            : e(Z)
          : (void 0 !== e.selector &&
              ((this.selector = e.selector), (this.context = e.context)),
            Z.makeArray(e, this));
      });
    (ue.prototype = Z.fn), (le = Z(K));
    var de = /^(?:parents|prev(?:Until|All))/,
      pe = { children: !0, contents: !0, next: !0, prev: !0 };
    Z.extend({
      dir: function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (r && Z(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    }),
      Z.fn.extend({
        has: function (e) {
          var t = Z(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          for (
            var n,
              i = 0,
              r = this.length,
              s = [],
              o =
                se.test(e) || "string" != typeof e
                  ? Z(e, t || this.context)
                  : 0;
            r > i;
            i++
          )
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (o
                  ? o.index(n) > -1
                  : 1 === n.nodeType && Z.find.matchesSelector(n, e))
              ) {
                s.push(n);
                break;
              }
          return this.pushStack(s.length > 1 ? Z.unique(s) : s);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? B.call(Z(e), this[0])
              : B.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
      Z.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return Z.dir(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n);
          },
          next: function (e) {
            return r(e, "nextSibling");
          },
          prev: function (e) {
            return r(e, "previousSibling");
          },
          nextAll: function (e) {
            return Z.dir(e, "nextSibling");
          },
          prevAll: function (e) {
            return Z.dir(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n);
          },
          siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return Z.sibling(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes);
          },
        },
        function (e, t) {
          Z.fn[e] = function (n, i) {
            var r = Z.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (i = n),
              i && "string" == typeof i && (r = Z.filter(i, r)),
              this.length > 1 &&
                (pe[e] || Z.unique(r), de.test(e) && r.reverse()),
              this.pushStack(r)
            );
          };
        }
      );
    var he = /\S+/g,
      fe = {};
    (Z.Callbacks = function (e) {
      e = "string" == typeof e ? fe[e] || s(e) : Z.extend({}, e);
      var t,
        n,
        i,
        r,
        o,
        a,
        l = [],
        c = !e.once && [],
        u = function (s) {
          for (
            t = e.memory && s, n = !0, a = r || 0, r = 0, o = l.length, i = !0;
            l && o > a;
            a++
          )
            if (l[a].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
              t = !1;
              break;
            }
          (i = !1),
            l && (c ? c.length && u(c.shift()) : t ? (l = []) : d.disable());
        },
        d = {
          add: function () {
            if (l) {
              var n = l.length;
              !(function s(t) {
                Z.each(t, function (t, n) {
                  var i = Z.type(n);
                  "function" === i
                    ? (e.unique && d.has(n)) || l.push(n)
                    : n && n.length && "string" !== i && s(n);
                });
              })(arguments),
                i ? (o = l.length) : t && ((r = n), u(t));
            }
            return this;
          },
          remove: function () {
            return (
              l &&
                Z.each(arguments, function (e, t) {
                  for (var n; (n = Z.inArray(t, l, n)) > -1; )
                    l.splice(n, 1), i && (o >= n && o--, a >= n && a--);
                }),
              this
            );
          },
          has: function (e) {
            return e ? Z.inArray(e, l) > -1 : !(!l || !l.length);
          },
          empty: function () {
            return (l = []), (o = 0), this;
          },
          disable: function () {
            return (l = c = t = void 0), this;
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return (c = void 0), t || d.disable(), this;
          },
          locked: function () {
            return !c;
          },
          fireWith: function (e, t) {
            return (
              !l ||
                (n && !c) ||
                ((t = t || []),
                (t = [e, t.slice ? t.slice() : t]),
                i ? c.push(t) : u(t)),
              this
            );
          },
          fire: function () {
            return d.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!n;
          },
        };
      return d;
    }),
      Z.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
              ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
              ["notify", "progress", Z.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return r.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return Z.Deferred(function (n) {
                  Z.each(t, function (t, s) {
                    var o = Z.isFunction(e[t]) && e[t];
                    r[s[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && Z.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[s[0] + "With"](
                            this === i ? n.promise() : this,
                            o ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                }).promise();
              },
              promise: function (e) {
                return null != e ? Z.extend(e, i) : i;
              },
            },
            r = {};
          return (
            (i.pipe = i.then),
            Z.each(t, function (e, s) {
              var o = s[2],
                a = s[3];
              (i[s[1]] = o.add),
                a &&
                  o.add(
                    function () {
                      n = a;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock
                  ),
                (r[s[0]] = function () {
                  return (
                    r[s[0] + "With"](this === r ? i : this, arguments), this
                  );
                }),
                (r[s[0] + "With"] = o.fireWith);
            }),
            i.promise(r),
            e && e.call(r, r),
            r
          );
        },
        when: function (e) {
          var t,
            n,
            i,
            r = 0,
            s = W.call(arguments),
            o = s.length,
            a = 1 !== o || (e && Z.isFunction(e.promise)) ? o : 0,
            l = 1 === a ? e : Z.Deferred(),
            c = function (e, n, i) {
              return function (r) {
                (n[e] = this),
                  (i[e] = arguments.length > 1 ? W.call(arguments) : r),
                  i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
              };
            };
          if (o > 1)
            for (
              t = new Array(o), n = new Array(o), i = new Array(o);
              o > r;
              r++
            )
              s[r] && Z.isFunction(s[r].promise)
                ? s[r]
                    .promise()
                    .done(c(r, i, s))
                    .fail(l.reject)
                    .progress(c(r, n, t))
                : --a;
          return a || l.resolveWith(i, s), l.promise();
        },
      });
    var ge;
    (Z.fn.ready = function (e) {
      return Z.ready.promise().done(e), this;
    }),
      Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? Z.readyWait++ : Z.ready(!0);
        },
        ready: function (e) {
          (e === !0 ? --Z.readyWait : Z.isReady) ||
            ((Z.isReady = !0),
            (e !== !0 && --Z.readyWait > 0) ||
              (ge.resolveWith(K, [Z]),
              Z.fn.triggerHandler &&
                (Z(K).triggerHandler("ready"), Z(K).off("ready"))));
        },
      }),
      (Z.ready.promise = function (t) {
        return (
          ge ||
            ((ge = Z.Deferred()),
            "complete" === K.readyState
              ? setTimeout(Z.ready)
              : (K.addEventListener("DOMContentLoaded", o, !1),
                e.addEventListener("load", o, !1))),
          ge.promise(t)
        );
      }),
      Z.ready.promise();
    var ve = (Z.access = function (e, t, n, i, r, s, o) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === Z.type(n)) {
        r = !0;
        for (a in n) Z.access(e, t, a, n[a], !0, s, o);
      } else if (
        void 0 !== i &&
        ((r = !0),
        Z.isFunction(i) || (o = !0),
        c &&
          (o
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(Z(e), n);
              }))),
        t)
      )
        for (; l > a; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : c ? t.call(e) : l ? t(e[0], n) : s;
    });
    (Z.acceptData = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }),
      (a.uid = 1),
      (a.accepts = Z.acceptData),
      (a.prototype = {
        key: function (e) {
          if (!a.accepts(e)) return 0;
          var t = {},
            n = e[this.expando];
          if (!n) {
            n = a.uid++;
            try {
              (t[this.expando] = { value: n }), Object.defineProperties(e, t);
            } catch (i) {
              (t[this.expando] = n), Z.extend(e, t);
            }
          }
          return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function (e, t, n) {
          var i,
            r = this.key(e),
            s = this.cache[r];
          if ("string" == typeof t) s[t] = n;
          else if (Z.isEmptyObject(s)) Z.extend(this.cache[r], t);
          else for (i in t) s[i] = t[i];
          return s;
        },
        get: function (e, t) {
          var n = this.cache[this.key(e)];
          return void 0 === t ? n : n[t];
        },
        access: function (e, t, n) {
          var i;
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? ((i = this.get(e, t)),
              void 0 !== i ? i : this.get(e, Z.camelCase(t)))
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i,
            r,
            s = this.key(e),
            o = this.cache[s];
          if (void 0 === t) this.cache[s] = {};
          else {
            Z.isArray(t)
              ? (i = t.concat(t.map(Z.camelCase)))
              : ((r = Z.camelCase(t)),
                t in o
                  ? (i = [t, r])
                  : ((i = r), (i = i in o ? [i] : i.match(he) || []))),
              (n = i.length);
            for (; n--; ) delete o[i[n]];
          }
        },
        hasData: function (e) {
          return !Z.isEmptyObject(this.cache[e[this.expando]] || {});
        },
        discard: function (e) {
          e[this.expando] && delete this.cache[e[this.expando]];
        },
      });
    var me = new a(),
      ye = new a(),
      _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      be = /([A-Z])/g;
    Z.extend({
      hasData: function (e) {
        return ye.hasData(e) || me.hasData(e);
      },
      data: function (e, t, n) {
        return ye.access(e, t, n);
      },
      removeData: function (e, t) {
        ye.remove(e, t);
      },
      _data: function (e, t, n) {
        return me.access(e, t, n);
      },
      _removeData: function (e, t) {
        me.remove(e, t);
      },
    }),
      Z.fn.extend({
        data: function (e, t) {
          var n,
            i,
            r,
            s = this[0],
            o = s && s.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((r = ye.get(s)), 1 === s.nodeType && !me.get(s, "hasDataAttrs"))
            ) {
              for (n = o.length; n--; )
                o[n] &&
                  ((i = o[n].name),
                  0 === i.indexOf("data-") &&
                    ((i = Z.camelCase(i.slice(5))), l(s, i, r[i])));
              me.set(s, "hasDataAttrs", !0);
            }
            return r;
          }
          return "object" == typeof e
            ? this.each(function () {
                ye.set(this, e);
              })
            : ve(
                this,
                function (t) {
                  var n,
                    i = Z.camelCase(e);
                  if (s && void 0 === t) {
                    if (((n = ye.get(s, e)), void 0 !== n)) return n;
                    if (((n = ye.get(s, i)), void 0 !== n)) return n;
                    if (((n = l(s, i, void 0)), void 0 !== n)) return n;
                  } else
                    this.each(function () {
                      var n = ye.get(this, i);
                      ye.set(this, i, t),
                        -1 !== e.indexOf("-") &&
                          void 0 !== n &&
                          ye.set(this, e, t);
                    });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            ye.remove(this, e);
          });
        },
      }),
      Z.extend({
        queue: function (e, t, n) {
          var i;
          return e
            ? ((t = (t || "fx") + "queue"),
              (i = me.get(e, t)),
              n &&
                (!i || Z.isArray(n)
                  ? (i = me.access(e, t, Z.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = Z.queue(e, t),
            i = n.length,
            r = n.shift(),
            s = Z._queueHooks(e, t),
            o = function () {
              Z.dequeue(e, t);
            };
          "inprogress" === r && ((r = n.shift()), i--),
            r &&
              ("fx" === t && n.unshift("inprogress"),
              delete s.stop,
              r.call(e, o, s)),
            !i && s && s.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            me.get(e, n) ||
            me.access(e, n, {
              empty: Z.Callbacks("once memory").add(function () {
                me.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      Z.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? Z.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var n = Z.queue(this, e, t);
                  Z._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            Z.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            i = 1,
            r = Z.Deferred(),
            s = this,
            o = this.length,
            a = function () {
              --i || r.resolveWith(s, [s]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            o--;

          )
            (n = me.get(s[o], e + "queueHooks")),
              n && n.empty && (i++, n.empty.add(a));
          return a(), r.promise(t);
        },
      });
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Se = ["Top", "Right", "Bottom", "Left"],
      xe = function (e, t) {
        return (
          (e = t || e),
          "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        );
      },
      we = /^(?:checkbox|radio)$/i;
    !(function () {
      var e = K.createDocumentFragment(),
        t = e.appendChild(K.createElement("div")),
        n = K.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        (J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (J.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    var Ee = "undefined";
    J.focusinBubbles = "onfocusin" in e;
    var ke = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu)|click/,
      je = /^(?:focusinfocus|focusoutblur)$/,
      Ae = /^([^.]*)(?:\.(.+)|)$/;
    (Z.event = {
      global: {},
      add: function (e, t, n, i, r) {
        var s,
          o,
          a,
          l,
          c,
          u,
          d,
          p,
          h,
          f,
          g,
          v = me.get(e);
        if (v)
          for (
            n.handler && ((s = n), (n = s.handler), (r = s.selector)),
              n.guid || (n.guid = Z.guid++),
              (l = v.events) || (l = v.events = {}),
              (o = v.handle) ||
                (o = v.handle = function (t) {
                  return typeof Z !== Ee && Z.event.triggered !== t.type
                    ? Z.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
              t = (t || "").match(he) || [""],
              c = t.length;
            c--;

          )
            (a = Ae.exec(t[c]) || []),
              (h = g = a[1]),
              (f = (a[2] || "").split(".").sort()),
              h &&
                ((d = Z.event.special[h] || {}),
                (h = (r ? d.delegateType : d.bindType) || h),
                (d = Z.event.special[h] || {}),
                (u = Z.extend(
                  {
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && Z.expr.match.needsContext.test(r),
                    namespace: f.join("."),
                  },
                  s
                )),
                (p = l[h]) ||
                  ((p = l[h] = []),
                  (p.delegateCount = 0),
                  (d.setup && d.setup.call(e, i, f, o) !== !1) ||
                    (e.addEventListener && e.addEventListener(h, o, !1))),
                d.add &&
                  (d.add.call(e, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                (Z.event.global[h] = !0));
      },
      remove: function (e, t, n, i, r) {
        var s,
          o,
          a,
          l,
          c,
          u,
          d,
          p,
          h,
          f,
          g,
          v = me.hasData(e) && me.get(e);
        if (v && (l = v.events)) {
          for (t = (t || "").match(he) || [""], c = t.length; c--; )
            if (
              ((a = Ae.exec(t[c]) || []),
              (h = g = a[1]),
              (f = (a[2] || "").split(".").sort()),
              h)
            ) {
              for (
                d = Z.event.special[h] || {},
                  h = (i ? d.delegateType : d.bindType) || h,
                  p = l[h] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  o = s = p.length;
                s--;

              )
                (u = p[s]),
                  (!r && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (p.splice(s, 1),
                    u.selector && p.delegateCount--,
                    d.remove && d.remove.call(e, u));
              o &&
                !p.length &&
                ((d.teardown && d.teardown.call(e, f, v.handle) !== !1) ||
                  Z.removeEvent(e, h, v.handle),
                delete l[h]);
            } else for (h in l) Z.event.remove(e, h + t[c], n, i, !0);
          Z.isEmptyObject(l) && (delete v.handle, me.remove(e, "events"));
        }
      },
      trigger: function (t, n, i, r) {
        var s,
          o,
          a,
          l,
          c,
          u,
          d,
          p = [i || K],
          h = G.call(t, "type") ? t.type : t,
          f = G.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((o = a = i = i || K),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !je.test(h + Z.event.triggered) &&
            (h.indexOf(".") >= 0 &&
              ((f = h.split(".")), (h = f.shift()), f.sort()),
            (c = h.indexOf(":") < 0 && "on" + h),
            (t = t[Z.expando] ? t : new Z.Event(h, "object" == typeof t && t)),
            (t.isTrigger = r ? 2 : 3),
            (t.namespace = f.join(".")),
            (t.namespace_re = t.namespace
              ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (n = null == n ? [t] : Z.makeArray(n, [t])),
            (d = Z.event.special[h] || {}),
            r || !d.trigger || d.trigger.apply(i, n) !== !1))
        ) {
          if (!r && !d.noBubble && !Z.isWindow(i)) {
            for (
              l = d.delegateType || h, je.test(l + h) || (o = o.parentNode);
              o;
              o = o.parentNode
            )
              p.push(o), (a = o);
            a === (i.ownerDocument || K) &&
              p.push(a.defaultView || a.parentWindow || e);
          }
          for (s = 0; (o = p[s++]) && !t.isPropagationStopped(); )
            (t.type = s > 1 ? l : d.bindType || h),
              (u = (me.get(o, "events") || {})[t.type] && me.get(o, "handle")),
              u && u.apply(o, n),
              (u = c && o[c]),
              u &&
                u.apply &&
                Z.acceptData(o) &&
                ((t.result = u.apply(o, n)),
                t.result === !1 && t.preventDefault());
          return (
            (t.type = h),
            r ||
              t.isDefaultPrevented() ||
              (d._default && d._default.apply(p.pop(), n) !== !1) ||
              !Z.acceptData(i) ||
              (c &&
                Z.isFunction(i[h]) &&
                !Z.isWindow(i) &&
                ((a = i[c]),
                a && (i[c] = null),
                (Z.event.triggered = h),
                i[h](),
                (Z.event.triggered = void 0),
                a && (i[c] = a))),
            t.result
          );
        }
      },
      dispatch: function (e) {
        e = Z.event.fix(e);
        var t,
          n,
          i,
          r,
          s,
          o = [],
          a = W.call(arguments),
          l = (me.get(this, "events") || {})[e.type] || [],
          c = Z.event.special[e.type] || {};
        if (
          ((a[0] = e),
          (e.delegateTarget = this),
          !c.preDispatch || c.preDispatch.call(this, e) !== !1)
        ) {
          for (
            o = Z.event.handlers.call(this, e, l), t = 0;
            (r = o[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = r.elem, n = 0;
              (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();

            )
              (!e.namespace_re || e.namespace_re.test(s.namespace)) &&
                ((e.handleObj = s),
                (e.data = s.data),
                (i = (
                  (Z.event.special[s.origType] || {}).handle || s.handler
                ).apply(r.elem, a)),
                void 0 !== i &&
                  (e.result = i) === !1 &&
                  (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          r,
          s,
          o = [],
          a = t.delegateCount,
          l = e.target;
        if (a && l.nodeType && (!e.button || "click" !== e.type))
          for (; l !== this; l = l.parentNode || this)
            if (l.disabled !== !0 || "click" !== e.type) {
              for (i = [], n = 0; a > n; n++)
                (s = t[n]),
                  (r = s.selector + " "),
                  void 0 === i[r] &&
                    (i[r] = s.needsContext
                      ? Z(r, this).index(l) >= 0
                      : Z.find(r, this, null, [l]).length),
                  i[r] && i.push(s);
              i.length && o.push({ elem: l, handlers: i });
            }
        return a < t.length && o.push({ elem: this, handlers: t.slice(a) }), o;
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
        filter: function (e, t) {
          var n,
            i,
            r,
            s = t.button;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((n = e.target.ownerDocument || K),
              (i = n.documentElement),
              (r = n.body),
              (e.pageX =
                t.clientX +
                ((i && i.scrollLeft) || (r && r.scrollLeft) || 0) -
                ((i && i.clientLeft) || (r && r.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((i && i.scrollTop) || (r && r.scrollTop) || 0) -
                ((i && i.clientTop) || (r && r.clientTop) || 0))),
            e.which ||
              void 0 === s ||
              (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
            e
          );
        },
      },
      fix: function (e) {
        if (e[Z.expando]) return e;
        var t,
          n,
          i,
          r = e.type,
          s = e,
          o = this.fixHooks[r];
        for (
          o ||
            (this.fixHooks[r] = o = Ce.test(r)
              ? this.mouseHooks
              : ke.test(r)
              ? this.keyHooks
              : {}),
            i = o.props ? this.props.concat(o.props) : this.props,
            e = new Z.Event(s),
            t = i.length;
          t--;

        )
          (n = i[t]), (e[n] = s[n]);
        return (
          e.target || (e.target = K),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          o.filter ? o.filter(e, s) : e
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== d() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === d() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              Z.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return Z.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, n, i) {
        var r = Z.extend(new Z.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {},
        });
        i ? Z.event.trigger(r, null, t) : Z.event.dispatch.call(t, r),
          r.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
      }),
      (Z.Event = function (e, t) {
        return this instanceof Z.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && e.returnValue === !1)
                    ? c
                    : u))
              : (this.type = e),
            t && Z.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Z.now()),
            void (this[Z.expando] = !0))
          : new Z.Event(e, t);
      }),
      (Z.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = c),
            e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = c),
            e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = c),
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      Z.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                i = this,
                r = e.relatedTarget,
                s = e.handleObj;
              return (
                (!r || (r !== i && !Z.contains(i, r))) &&
                  ((e.type = s.origType),
                  (n = s.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      J.focusinBubbles ||
        Z.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0);
          };
          Z.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this,
                r = me.access(i, t);
              r || i.addEventListener(e, n, !0), me.access(i, t, (r || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                r = me.access(i, t) - 1;
              r
                ? me.access(i, t, r)
                : (i.removeEventListener(e, n, !0), me.remove(i, t));
            },
          };
        }),
      Z.fn.extend({
        on: function (e, t, n, i, r) {
          var s, o;
          if ("object" == typeof e) {
            "string" != typeof t && ((n = n || t), (t = void 0));
            for (o in e) this.on(o, t, n, e[o], r);
            return this;
          }
          if (
            (null == n && null == i
              ? ((i = t), (n = t = void 0))
              : null == i &&
                ("string" == typeof t
                  ? ((i = n), (n = void 0))
                  : ((i = n), (n = t), (t = void 0))),
            i === !1)
          )
            i = u;
          else if (!i) return this;
          return (
            1 === r &&
              ((s = i),
              (i = function (e) {
                return Z().off(e), s.apply(this, arguments);
              }),
              (i.guid = s.guid || (s.guid = Z.guid++))),
            this.each(function () {
              Z.event.add(this, e, i, n, t);
            })
          );
        },
        one: function (e, t, n, i) {
          return this.on(e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, r;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              Z(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (r in e) this.off(r, t, e[r]);
            return this;
          }
          return (
            (t === !1 || "function" == typeof t) && ((n = t), (t = void 0)),
            n === !1 && (n = u),
            this.each(function () {
              Z.event.remove(this, e, n, t);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            Z.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          return n ? Z.event.trigger(e, t, n, !0) : void 0;
        },
      });
    var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Le = /<([\w:]+)/,
      Ne = /<|&#?\w+;/,
      De = /<(?:script|style|link)/i,
      He = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Re = /^$|\/(?:java|ecma)script/i,
      Me = /^true\/(.*)/,
      $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Oe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Oe.optgroup = Oe.option),
      (Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead),
      (Oe.th = Oe.td),
      Z.extend({
        clone: function (e, t, n) {
          var i,
            r,
            s,
            o,
            a = e.cloneNode(!0),
            l = Z.contains(e.ownerDocument, e);
          if (
            !(
              J.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              Z.isXMLDoc(e)
            )
          )
            for (o = m(a), s = m(e), i = 0, r = s.length; r > i; i++)
              y(s[i], o[i]);
          if (t)
            if (n)
              for (
                s = s || m(e), o = o || m(a), i = 0, r = s.length;
                r > i;
                i++
              )
                v(s[i], o[i]);
            else v(e, a);
          return (
            (o = m(a, "script")), o.length > 0 && g(o, !l && m(e, "script")), a
          );
        },
        buildFragment: function (e, t, n, i) {
          for (
            var r,
              s,
              o,
              a,
              l,
              c,
              u = t.createDocumentFragment(),
              d = [],
              p = 0,
              h = e.length;
            h > p;
            p++
          )
            if (((r = e[p]), r || 0 === r))
              if ("object" === Z.type(r)) Z.merge(d, r.nodeType ? [r] : r);
              else if (Ne.test(r)) {
                for (
                  s = s || u.appendChild(t.createElement("div")),
                    o = (Le.exec(r) || ["", ""])[1].toLowerCase(),
                    a = Oe[o] || Oe._default,
                    s.innerHTML = a[1] + r.replace(Pe, "<$1></$2>") + a[2],
                    c = a[0];
                  c--;

                )
                  s = s.lastChild;
                Z.merge(d, s.childNodes),
                  (s = u.firstChild),
                  (s.textContent = "");
              } else d.push(t.createTextNode(r));
          for (u.textContent = "", p = 0; (r = d[p++]); )
            if (
              (!i || -1 === Z.inArray(r, i)) &&
              ((l = Z.contains(r.ownerDocument, r)),
              (s = m(u.appendChild(r), "script")),
              l && g(s),
              n)
            )
              for (c = 0; (r = s[c++]); ) Re.test(r.type || "") && n.push(r);
          return u;
        },
        cleanData: function (e) {
          for (
            var t, n, i, r, s = Z.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          ) {
            if (
              Z.acceptData(n) &&
              ((r = n[me.expando]), r && (t = me.cache[r]))
            ) {
              if (t.events)
                for (i in t.events)
                  s[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
              me.cache[r] && delete me.cache[r];
            }
            delete ye.cache[n[ye.expando]];
          }
        },
      }),
      Z.fn.extend({
        text: function (e) {
          return ve(
            this,
            function (e) {
              return void 0 === e
                ? Z.text(this)
                : this.empty().each(function () {
                    (1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType) &&
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = p(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = p(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        remove: function (e, t) {
          for (
            var n, i = e ? Z.filter(e, this) : this, r = 0;
            null != (n = i[r]);
            r++
          )
            t || 1 !== n.nodeType || Z.cleanData(m(n)),
              n.parentNode &&
                (t && Z.contains(n.ownerDocument, n) && g(m(n, "script")),
                n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (Z.cleanData(m(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null == e ? !1 : e),
            (t = null == t ? e : t),
            this.map(function () {
              return Z.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return ve(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !De.test(e) &&
                !Oe[(Le.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = e.replace(Pe, "<$1></$2>");
                try {
                  for (; i > n; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (Z.cleanData(m(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (r) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = arguments[0];
          return (
            this.domManip(arguments, function (t) {
              (e = this.parentNode),
                Z.cleanData(m(this)),
                e && e.replaceChild(t, this);
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
          );
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (e, t) {
          e = X.apply([], e);
          var n,
            i,
            r,
            s,
            o,
            a,
            l = 0,
            c = this.length,
            u = this,
            d = c - 1,
            p = e[0],
            g = Z.isFunction(p);
          if (
            g ||
            (c > 1 && "string" == typeof p && !J.checkClone && He.test(p))
          )
            return this.each(function (n) {
              var i = u.eq(n);
              g && (e[0] = p.call(this, n, i.html())), i.domManip(e, t);
            });
          if (
            c &&
            ((n = Z.buildFragment(e, this[0].ownerDocument, !1, this)),
            (i = n.firstChild),
            1 === n.childNodes.length && (n = i),
            i)
          ) {
            for (r = Z.map(m(n, "script"), h), s = r.length; c > l; l++)
              (o = n),
                l !== d &&
                  ((o = Z.clone(o, !0, !0)), s && Z.merge(r, m(o, "script"))),
                t.call(this[l], o, l);
            if (s)
              for (
                a = r[r.length - 1].ownerDocument, Z.map(r, f), l = 0;
                s > l;
                l++
              )
                (o = r[l]),
                  Re.test(o.type || "") &&
                    !me.access(o, "globalEval") &&
                    Z.contains(a, o) &&
                    (o.src
                      ? Z._evalUrl && Z._evalUrl(o.src)
                      : Z.globalEval(o.textContent.replace($e, "")));
          }
          return this;
        },
      }),
      Z.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          Z.fn[e] = function (e) {
            for (var n, i = [], r = Z(e), s = r.length - 1, o = 0; s >= o; o++)
              (n = o === s ? this : this.clone(!0)),
                Z(r[o])[t](n),
                z.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var Ie,
      qe = {},
      Fe = /^margin/,
      Ue = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
      We = function (t) {
        return t.ownerDocument.defaultView.opener
          ? t.ownerDocument.defaultView.getComputedStyle(t, null)
          : e.getComputedStyle(t, null);
      };
    !(function () {
      function t() {
        (o.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (o.innerHTML = ""),
          r.appendChild(s);
        var t = e.getComputedStyle(o, null);
        (n = "1%" !== t.top), (i = "4px" === t.width), r.removeChild(s);
      }
      var n,
        i,
        r = K.documentElement,
        s = K.createElement("div"),
        o = K.createElement("div");
      o.style &&
        ((o.style.backgroundClip = "content-box"),
        (o.cloneNode(!0).style.backgroundClip = ""),
        (J.clearCloneStyle = "content-box" === o.style.backgroundClip),
        (s.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        s.appendChild(o),
        e.getComputedStyle &&
          Z.extend(J, {
            pixelPosition: function () {
              return t(), n;
            },
            boxSizingReliable: function () {
              return null == i && t(), i;
            },
            reliableMarginRight: function () {
              var t,
                n = o.appendChild(K.createElement("div"));
              return (
                (n.style.cssText = o.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (n.style.marginRight = n.style.width = "0"),
                (o.style.width = "1px"),
                r.appendChild(s),
                (t = !parseFloat(e.getComputedStyle(n, null).marginRight)),
                r.removeChild(s),
                o.removeChild(n),
                t
              );
            },
          }));
    })(),
      (Z.swap = function (e, t, n, i) {
        var r,
          s,
          o = {};
        for (s in t) (o[s] = e.style[s]), (e.style[s] = t[s]);
        r = n.apply(e, i || []);
        for (s in t) e.style[s] = o[s];
        return r;
      });
    var Xe = /^(none|table(?!-c[ea]).+)/,
      ze = new RegExp("^(" + Te + ")(.*)$", "i"),
      Be = new RegExp("^([+-])=(" + Te + ")", "i"),
      Ve = { position: "absolute", visibility: "hidden", display: "block" },
      Ye = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = T(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r,
            s,
            o,
            a = Z.camelCase(t),
            l = e.style;
          return (
            (t = Z.cssProps[a] || (Z.cssProps[a] = x(l, a))),
            (o = Z.cssHooks[t] || Z.cssHooks[a]),
            void 0 === n
              ? o && "get" in o && void 0 !== (r = o.get(e, !1, i))
                ? r
                : l[t]
              : ((s = typeof n),
                "string" === s &&
                  (r = Be.exec(n)) &&
                  ((n = (r[1] + 1) * r[2] + parseFloat(Z.css(e, t))),
                  (s = "number")),
                null != n &&
                  n === n &&
                  ("number" !== s || Z.cssNumber[a] || (n += "px"),
                  J.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
                    (l[t] = n)),
                void 0)
          );
        }
      },
      css: function (e, t, n, i) {
        var r,
          s,
          o,
          a = Z.camelCase(t);
        return (
          (t = Z.cssProps[a] || (Z.cssProps[a] = x(e.style, a))),
          (o = Z.cssHooks[t] || Z.cssHooks[a]),
          o && "get" in o && (r = o.get(e, !0, n)),
          void 0 === r && (r = T(e, t, i)),
          "normal" === r && t in Ye && (r = Ye[t]),
          "" === n || n
            ? ((s = parseFloat(r)), n === !0 || Z.isNumeric(s) ? s || 0 : r)
            : r
        );
      },
    }),
      Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
          get: function (e, n, i) {
            return n
              ? Xe.test(Z.css(e, "display")) && 0 === e.offsetWidth
                ? Z.swap(e, Ve, function () {
                    return k(e, t, i);
                  })
                : k(e, t, i)
              : void 0;
          },
          set: function (e, n, i) {
            var r = i && We(e);
            return w(
              e,
              n,
              i
                ? E(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, r), r)
                : 0
            );
          },
        };
      }),
      (Z.cssHooks.marginRight = S(J.reliableMarginRight, function (e, t) {
        return t
          ? Z.swap(e, { display: "inline-block" }, T, [e, "marginRight"])
          : void 0;
      })),
      Z.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (Z.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n];
              4 > i;
              i++
            )
              r[e + Se[i] + t] = s[i] || s[i - 2] || s[0];
            return r;
          },
        }),
          Fe.test(e) || (Z.cssHooks[e + t].set = w);
      }),
      Z.fn.extend({
        css: function (e, t) {
          return ve(
            this,
            function (e, t, n) {
              var i,
                r,
                s = {},
                o = 0;
              if (Z.isArray(t)) {
                for (i = We(e), r = t.length; r > o; o++)
                  s[t[o]] = Z.css(e, t[o], !1, i);
                return s;
              }
              return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
        show: function () {
          return C(this, !0);
        },
        hide: function () {
          return C(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                xe(this) ? Z(this).show() : Z(this).hide();
              });
        },
      }),
      (Z.Tween = j),
      (j.prototype = {
        constructor: j,
        init: function (e, t, n, i, r, s) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = r || "swing"),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = s || (Z.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = j.propHooks[this.prop];
          return e && e.get ? e.get(this) : j.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = j.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t = Z.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : j.propHooks._default.set(this),
            this
          );
        },
      }),
      (j.prototype.init.prototype = j.prototype),
      (j.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return null == e.elem[e.prop] ||
              (e.elem.style && null != e.elem.style[e.prop])
              ? ((t = Z.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
              : e.elem[e.prop];
          },
          set: function (e) {
            Z.fx.step[e.prop]
              ? Z.fx.step[e.prop](e)
              : e.elem.style &&
                (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop])
              ? Z.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
      (Z.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
      }),
      (Z.fx = j.prototype.init),
      (Z.fx.step = {});
    var Je,
      Ke,
      Qe = /^(?:toggle|show|hide)$/,
      Ze = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
      et = /queueHooks$/,
      tt = [N],
      nt = {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t),
              i = n.cur(),
              r = Ze.exec(t),
              s = (r && r[3]) || (Z.cssNumber[e] ? "" : "px"),
              o =
                (Z.cssNumber[e] || ("px" !== s && +i)) &&
                Ze.exec(Z.css(n.elem, e)),
              a = 1,
              l = 20;
            if (o && o[3] !== s) {
              (s = s || o[3]), (r = r || []), (o = +i || 1);
              do (a = a || ".5"), (o /= a), Z.style(n.elem, e, o + s);
              while (a !== (a = n.cur() / i) && 1 !== a && --l);
            }
            return (
              r &&
                ((o = n.start = +o || +i || 0),
                (n.unit = s),
                (n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2])),
              n
            );
          },
        ],
      };
    (Z.Animation = Z.extend(H, {
      tweener: function (e, t) {
        Z.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
        for (var n, i = 0, r = e.length; r > i; i++)
          (n = e[i]), (nt[n] = nt[n] || []), nt[n].unshift(t);
      },
      prefilter: function (e, t) {
        t ? tt.unshift(e) : tt.push(e);
      },
    })),
      (Z.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? Z.extend({}, e)
            : {
                complete: n || (!n && t) || (Z.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !Z.isFunction(t) && t),
              };
        return (
          (i.duration = Z.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in Z.fx.speeds
            ? Z.fx.speeds[i.duration]
            : Z.fx.speeds._default),
          (null == i.queue || i.queue === !0) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            Z.isFunction(i.old) && i.old.call(this),
              i.queue && Z.dequeue(this, i.queue);
          }),
          i
        );
      }),
      Z.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(xe)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function (e, t, n, i) {
          var r = Z.isEmptyObject(e),
            s = Z.speed(t, n, i),
            o = function () {
              var t = H(this, Z.extend({}, e), s);
              (r || me.get(this, "finish")) && t.stop(!0);
            };
          return (
            (o.finish = o),
            r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
          );
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                r = null != e && e + "queueHooks",
                s = Z.timers,
                o = me.get(this);
              if (r) o[r] && o[r].stop && i(o[r]);
              else for (r in o) o[r] && o[r].stop && et.test(r) && i(o[r]);
              for (r = s.length; r--; )
                s[r].elem !== this ||
                  (null != e && s[r].queue !== e) ||
                  (s[r].anim.stop(n), (t = !1), s.splice(r, 1));
              (t || !n) && Z.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || "fx"),
            this.each(function () {
              var t,
                n = me.get(this),
                i = n[e + "queue"],
                r = n[e + "queueHooks"],
                s = Z.timers,
                o = i ? i.length : 0;
              for (
                n.finish = !0,
                  Z.queue(this, e, []),
                  r && r.stop && r.stop.call(this, !0),
                  t = s.length;
                t--;

              )
                s[t].elem === this &&
                  s[t].queue === e &&
                  (s[t].anim.stop(!0), s.splice(t, 1));
              for (t = 0; o > t; t++)
                i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      Z.each(["toggle", "show", "hide"], function (e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function (e, i, r) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(P(t, !0), e, i, r);
        };
      }),
      Z.each(
        {
          slideDown: P("show"),
          slideUp: P("hide"),
          slideToggle: P("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          Z.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        }
      ),
      (Z.timers = []),
      (Z.fx.tick = function () {
        var e,
          t = 0,
          n = Z.timers;
        for (Je = Z.now(); t < n.length; t++)
          (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), (Je = void 0);
      }),
      (Z.fx.timer = function (e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop();
      }),
      (Z.fx.interval = 13),
      (Z.fx.start = function () {
        Ke || (Ke = setInterval(Z.fx.tick, Z.fx.interval));
      }),
      (Z.fx.stop = function () {
        clearInterval(Ke), (Ke = null);
      }),
      (Z.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (Z.fn.delay = function (e, t) {
        return (
          (e = Z.fx ? Z.fx.speeds[e] || e : e),
          (t = t || "fx"),
          this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
              clearTimeout(i);
            };
          })
        );
      }),
      (function () {
        var e = K.createElement("input"),
          t = K.createElement("select"),
          n = t.appendChild(K.createElement("option"));
        (e.type = "checkbox"),
          (J.checkOn = "" !== e.value),
          (J.optSelected = n.selected),
          (t.disabled = !0),
          (J.optDisabled = !n.disabled),
          (e = K.createElement("input")),
          (e.value = "t"),
          (e.type = "radio"),
          (J.radioValue = "t" === e.value);
      })();
    var it,
      rt,
      st = Z.expr.attrHandle;
    Z.fn.extend({
      attr: function (e, t) {
        return ve(this, Z.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          Z.removeAttr(this, e);
        });
      },
    }),
      Z.extend({
        attr: function (e, t, n) {
          var i,
            r,
            s = e.nodeType;
          if (e && 3 !== s && 8 !== s && 2 !== s)
            return typeof e.getAttribute === Ee
              ? Z.prop(e, t, n)
              : ((1 === s && Z.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (i =
                    Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? rt : it))),
                void 0 === n
                  ? i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : ((r = Z.find.attr(e, t)), null == r ? void 0 : r)
                  : null !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : void Z.removeAttr(e, t));
        },
        removeAttr: function (e, t) {
          var n,
            i,
            r = 0,
            s = t && t.match(he);
          if (s && 1 === e.nodeType)
            for (; (n = s[r++]); )
              (i = Z.propFix[n] || n),
                Z.expr.match.bool.test(n) && (e[i] = !1),
                e.removeAttribute(n);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!J.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
      }),
      (rt = {
        set: function (e, t, n) {
          return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = st[t] || Z.find.attr;
        st[t] = function (e, t, i) {
          var r, s;
          return (
            i ||
              ((s = st[t]),
              (st[t] = r),
              (r = null != n(e, t, i) ? t.toLowerCase() : null),
              (st[t] = s)),
            r
          );
        };
      });
    var ot = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
      prop: function (e, t) {
        return ve(this, Z.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[Z.propFix[e] || e];
        });
      },
    }),
      Z.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (e, t, n) {
          var i,
            r,
            s,
            o = e.nodeType;
          if (e && 3 !== o && 8 !== o && 2 !== o)
            return (
              (s = 1 !== o || !Z.isXMLDoc(e)),
              s && ((t = Z.propFix[t] || t), (r = Z.propHooks[t])),
              void 0 !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              return e.hasAttribute("tabindex") || ot.test(e.nodeName) || e.href
                ? e.tabIndex
                : -1;
            },
          },
        },
      }),
      J.optSelected ||
        (Z.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
        }),
      Z.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          Z.propFix[this.toLowerCase()] = this;
        }
      );
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          s,
          o,
          a = "string" == typeof e && e,
          l = 0,
          c = this.length;
        if (Z.isFunction(e))
          return this.each(function (t) {
            Z(this).addClass(e.call(this, t, this.className));
          });
        if (a)
          for (t = (e || "").match(he) || []; c > l; l++)
            if (
              ((n = this[l]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(at, " ")
                  : " ")))
            ) {
              for (s = 0; (r = t[s++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              (o = Z.trim(i)), n.className !== o && (n.className = o);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          s,
          o,
          a = 0 === arguments.length || ("string" == typeof e && e),
          l = 0,
          c = this.length;
        if (Z.isFunction(e))
          return this.each(function (t) {
            Z(this).removeClass(e.call(this, t, this.className));
          });
        if (a)
          for (t = (e || "").match(he) || []; c > l; l++)
            if (
              ((n = this[l]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(at, " ")
                  : "")))
            ) {
              for (s = 0; (r = t[s++]); )
                for (; i.indexOf(" " + r + " ") >= 0; )
                  i = i.replace(" " + r + " ", " ");
              (o = e ? Z.trim(i) : ""), n.className !== o && (n.className = o);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : Z.isFunction(e)
          ? this.each(function (n) {
              Z(this).toggleClass(e.call(this, n, this.className, t), t);
            })
          : this.each(function () {
              if ("string" === n)
                for (
                  var t, i = 0, r = Z(this), s = e.match(he) || [];
                  (t = s[i++]);

                )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (n === Ee || "boolean" === n) &&
                  (this.className &&
                    me.set(this, "__className__", this.className),
                  (this.className =
                    this.className || e === !1
                      ? ""
                      : me.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
          if (
            1 === this[n].nodeType &&
            (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0
          )
            return !0;
        return !1;
      },
    });
    var lt = /\r/g;
    Z.fn.extend({
      val: function (e) {
        var t,
          n,
          i,
          r = this[0];
        {
          if (arguments.length)
            return (
              (i = Z.isFunction(e)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  ((r = i ? e.call(this, n, Z(this).val()) : e),
                  null == r
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : Z.isArray(r) &&
                      (r = Z.map(r, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  (t =
                    Z.valHooks[this.type] ||
                    Z.valHooks[this.nodeName.toLowerCase()]),
                  (t && "set" in t && void 0 !== t.set(this, r, "value")) ||
                    (this.value = r));
              })
            );
          if (r)
            return (
              (t = Z.valHooks[r.type] || Z.valHooks[r.nodeName.toLowerCase()]),
              t && "get" in t && void 0 !== (n = t.get(r, "value"))
                ? n
                : ((n = r.value),
                  "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
            );
        }
      },
    }),
      Z.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = Z.find.attr(e, "value");
              return null != t ? t : Z.trim(Z.text(e));
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n,
                  i = e.options,
                  r = e.selectedIndex,
                  s = "select-one" === e.type || 0 > r,
                  o = s ? null : [],
                  a = s ? r + 1 : i.length,
                  l = 0 > r ? a : s ? r : 0;
                a > l;
                l++
              )
                if (
                  ((n = i[l]),
                  (n.selected || l === r) &&
                    (J.optDisabled
                      ? !n.disabled
                      : null === n.getAttribute("disabled")) &&
                    (!n.parentNode.disabled ||
                      !Z.nodeName(n.parentNode, "optgroup")))
                ) {
                  if (((t = Z(n).val()), s)) return t;
                  o.push(t);
                }
              return o;
            },
            set: function (e, t) {
              for (
                var n, i, r = e.options, s = Z.makeArray(t), o = r.length;
                o--;

              )
                (i = r[o]),
                  (i.selected = Z.inArray(i.value, s) >= 0) && (n = !0);
              return n || (e.selectedIndex = -1), s;
            },
          },
        },
      }),
      Z.each(["radio", "checkbox"], function () {
        (Z.valHooks[this] = {
          set: function (e, t) {
            return Z.isArray(t)
              ? (e.checked = Z.inArray(Z(e).val(), t) >= 0)
              : void 0;
          },
        }),
          J.checkOn ||
            (Z.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      Z.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (e, t) {
          Z.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      ),
      Z.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
      });
    var ct = Z.now(),
      ut = /\?/;
    (Z.parseJSON = function (e) {
      return JSON.parse(e + "");
    }),
      (Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
          (n = new DOMParser()), (t = n.parseFromString(e, "text/xml"));
        } catch (i) {
          t = void 0;
        }
        return (
          (!t || t.getElementsByTagName("parsererror").length) &&
            Z.error("Invalid XML: " + e),
          t
        );
      });
    var dt = /#.*$/,
      pt = /([?&])_=[^&]*/,
      ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      gt = /^(?:GET|HEAD)$/,
      vt = /^\/\//,
      mt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      yt = {},
      _t = {},
      bt = "*/".concat("*"),
      Tt = e.location.href,
      St = mt.exec(Tt.toLowerCase()) || [];
    Z.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt,
        type: "GET",
        isLocal: ft.test(St[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": bt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": Z.parseJSON,
          "text xml": Z.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $($(e, Z.ajaxSettings), t) : $(Z.ajaxSettings, e);
      },
      ajaxPrefilter: R(yt),
      ajaxTransport: R(_t),
      ajax: function (e, t) {
        function n(e, t, n, o) {
          var l,
            u,
            m,
            y,
            b,
            S = t;
          2 !== _ &&
            ((_ = 2),
            a && clearTimeout(a),
            (i = void 0),
            (s = o || ""),
            (T.readyState = e > 0 ? 4 : 0),
            (l = (e >= 200 && 300 > e) || 304 === e),
            n && (y = O(d, T, n)),
            (y = I(d, y, T, l)),
            l
              ? (d.ifModified &&
                  ((b = T.getResponseHeader("Last-Modified")),
                  b && (Z.lastModified[r] = b),
                  (b = T.getResponseHeader("etag")),
                  b && (Z.etag[r] = b)),
                204 === e || "HEAD" === d.type
                  ? (S = "nocontent")
                  : 304 === e
                  ? (S = "notmodified")
                  : ((S = y.state), (u = y.data), (m = y.error), (l = !m)))
              : ((m = S), (e || !S) && ((S = "error"), 0 > e && (e = 0))),
            (T.status = e),
            (T.statusText = (t || S) + ""),
            l ? f.resolveWith(p, [u, S, T]) : f.rejectWith(p, [T, S, m]),
            T.statusCode(v),
            (v = void 0),
            c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, d, l ? u : m]),
            g.fireWith(p, [T, S]),
            c &&
              (h.trigger("ajaxComplete", [T, d]),
              --Z.active || Z.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var i,
          r,
          s,
          o,
          a,
          l,
          c,
          u,
          d = Z.ajaxSetup({}, t),
          p = d.context || d,
          h = d.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
          f = Z.Deferred(),
          g = Z.Callbacks("once memory"),
          v = d.statusCode || {},
          m = {},
          y = {},
          _ = 0,
          b = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === _) {
                if (!o)
                  for (o = {}; (t = ht.exec(s)); ) o[t[1].toLowerCase()] = t[2];
                t = o[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === _ ? s : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return _ || ((e = y[n] = y[n] || e), (m[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return _ || (d.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > _) for (t in e) v[t] = [v[t], e[t]];
                else T.always(e[T.status]);
              return this;
            },
            abort: function (e) {
              var t = e || b;
              return i && i.abort(t), n(0, t), this;
            },
          };
        if (
          ((f.promise(T).complete = g.add),
          (T.success = T.done),
          (T.error = T.fail),
          (d.url = ((e || d.url || Tt) + "")
            .replace(dt, "")
            .replace(vt, St[1] + "//")),
          (d.type = t.method || t.type || d.method || d.type),
          (d.dataTypes = Z.trim(d.dataType || "*")
            .toLowerCase()
            .match(he) || [""]),
          null == d.crossDomain &&
            ((l = mt.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !l ||
              (l[1] === St[1] &&
                l[2] === St[2] &&
                (l[3] || ("http:" === l[1] ? "80" : "443")) ===
                  (St[3] || ("http:" === St[1] ? "80" : "443")))
            ))),
          d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = Z.param(d.data, d.traditional)),
          M(yt, d, t, T),
          2 === _)
        )
          return T;
        (c = Z.event && d.global),
          c && 0 === Z.active++ && Z.event.trigger("ajaxStart"),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !gt.test(d.type)),
          (r = d.url),
          d.hasContent ||
            (d.data &&
              ((r = d.url += (ut.test(r) ? "&" : "?") + d.data), delete d.data),
            d.cache === !1 &&
              (d.url = pt.test(r)
                ? r.replace(pt, "$1_=" + ct++)
                : r + (ut.test(r) ? "&" : "?") + "_=" + ct++)),
          d.ifModified &&
            (Z.lastModified[r] &&
              T.setRequestHeader("If-Modified-Since", Z.lastModified[r]),
            Z.etag[r] && T.setRequestHeader("If-None-Match", Z.etag[r])),
          ((d.data && d.hasContent && d.contentType !== !1) || t.contentType) &&
            T.setRequestHeader("Content-Type", d.contentType),
          T.setRequestHeader(
            "Accept",
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  ("*" !== d.dataTypes[0] ? ", " + bt + "; q=0.01" : "")
              : d.accepts["*"]
          );
        for (u in d.headers) T.setRequestHeader(u, d.headers[u]);
        if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === _))
          return T.abort();
        b = "abort";
        for (u in { success: 1, error: 1, complete: 1 }) T[u](d[u]);
        if ((i = M(_t, d, t, T))) {
          (T.readyState = 1),
            c && h.trigger("ajaxSend", [T, d]),
            d.async &&
              d.timeout > 0 &&
              (a = setTimeout(function () {
                T.abort("timeout");
              }, d.timeout));
          try {
            (_ = 1), i.send(m, n);
          } catch (S) {
            if (!(2 > _)) throw S;
            n(-1, S);
          }
        } else n(-1, "No Transport");
        return T;
      },
      getJSON: function (e, t, n) {
        return Z.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return Z.get(e, void 0, t, "script");
      },
    }),
      Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, i, r) {
          return (
            Z.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
            Z.ajax({ url: e, type: t, dataType: r, data: n, success: i })
          );
        };
      }),
      (Z._evalUrl = function (e) {
        return Z.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      Z.fn.extend({
        wrapAll: function (e) {
          var t;
          return Z.isFunction(e)
            ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t));
              })
            : (this[0] &&
                ((t = Z(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (e) {
          return Z.isFunction(e)
            ? this.each(function (t) {
                Z(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = Z(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = Z.isFunction(e);
          return this.each(function (n) {
            Z(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0;
      }),
      (Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e);
      });
    var xt = /%20/g,
      wt = /\[\]$/,
      Et = /\r?\n/g,
      kt = /^(?:submit|button|image|reset|file)$/i,
      Ct = /^(?:input|select|textarea|keygen)/i;
    (Z.param = function (e, t) {
      var n,
        i = [],
        r = function (e, t) {
          (t = Z.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional),
        Z.isArray(e) || (e.jquery && !Z.isPlainObject(e)))
      )
        Z.each(e, function () {
          r(this.name, this.value);
        });
      else for (n in e) q(n, e[n], t, r);
      return i.join("&").replace(xt, "+");
    }),
      Z.fn.extend({
        serialize: function () {
          return Z.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = Z.prop(this, "elements");
            return e ? Z.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !Z(this).is(":disabled") &&
                Ct.test(this.nodeName) &&
                !kt.test(e) &&
                (this.checked || !we.test(e))
              );
            })
            .map(function (e, t) {
              var n = Z(this).val();
              return null == n
                ? null
                : Z.isArray(n)
                ? Z.map(n, function (e) {
                    return { name: t.name, value: e.replace(Et, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Et, "\r\n") };
            })
            .get();
        },
      }),
      (Z.ajaxSettings.xhr = function () {
        try {
          return new XMLHttpRequest();
        } catch (e) {}
      });
    var jt = 0,
      At = {},
      Pt = { 0: 200, 1223: 204 },
      Lt = Z.ajaxSettings.xhr();
    e.attachEvent &&
      e.attachEvent("onunload", function () {
        for (var e in At) At[e]();
      }),
      (J.cors = !!Lt && "withCredentials" in Lt),
      (J.ajax = Lt = !!Lt),
      Z.ajaxTransport(function (e) {
        var t;
        return J.cors || (Lt && !e.crossDomain)
          ? {
              send: function (n, i) {
                var r,
                  s = e.xhr(),
                  o = ++jt;
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (r in e.xhrFields) s[r] = e.xhrFields[r];
                e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    n["X-Requested-With"] ||
                    (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) s.setRequestHeader(r, n[r]);
                (t = function (e) {
                  return function () {
                    t &&
                      (delete At[o],
                      (t = s.onload = s.onerror = null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? i(s.status, s.statusText)
                        : i(
                            Pt[s.status] || s.status,
                            s.statusText,
                            "string" == typeof s.responseText
                              ? { text: s.responseText }
                              : void 0,
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (s.onerror = t("error")),
                  (t = At[o] = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (a) {
                  if (t) throw a;
                }
              },
              abort: function () {
                t && t();
              },
            }
          : void 0;
      }),
      Z.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (e) {
            return Z.globalEval(e), e;
          },
        },
      }),
      Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function (i, r) {
              (t = Z("<script>")
                .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && r("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                K.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var Nt = [],
      Dt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Nt.pop() || Z.expando + "_" + ct++;
        return (this[e] = !0), e;
      },
    }),
      Z.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r,
          s,
          o,
          a =
            t.jsonp !== !1 &&
            (Dt.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                !(t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                Dt.test(t.data) &&
                "data");
        return a || "jsonp" === t.dataTypes[0]
          ? ((r = t.jsonpCallback = Z.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(Dt, "$1" + r))
              : t.jsonp !== !1 &&
                (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            (t.converters["script json"] = function () {
              return o || Z.error(r + " was not called"), o[0];
            }),
            (t.dataTypes[0] = "json"),
            (s = e[r]),
            (e[r] = function () {
              o = arguments;
            }),
            i.always(function () {
              (e[r] = s),
                t[r] && ((t.jsonpCallback = n.jsonpCallback), Nt.push(r)),
                o && Z.isFunction(s) && s(o[0]),
                (o = s = void 0);
            }),
            "script")
          : void 0;
      }),
      (Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || K);
        var i = oe.exec(e),
          r = !n && [];
        return i
          ? [t.createElement(i[1])]
          : ((i = Z.buildFragment([e], t, r)),
            r && r.length && Z(r).remove(),
            Z.merge([], i.childNodes));
      });
    var Ht = Z.fn.load;
    (Z.fn.load = function (e, t, n) {
      if ("string" != typeof e && Ht) return Ht.apply(this, arguments);
      var i,
        r,
        s,
        o = this,
        a = e.indexOf(" ");
      return (
        a >= 0 && ((i = Z.trim(e.slice(a))), (e = e.slice(0, a))),
        Z.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        o.length > 0 &&
          Z.ajax({ url: e, type: r, dataType: "html", data: t })
            .done(function (e) {
              (s = arguments),
                o.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e);
            })
            .complete(
              n &&
                function (e, t) {
                  o.each(n, s || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
      Z.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          Z.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
          return e === t.elem;
        }).length;
      });
    var Rt = e.document.documentElement;
    (Z.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          s,
          o,
          a,
          l,
          c,
          u = Z.css(e, "position"),
          d = Z(e),
          p = {};
        "static" === u && (e.style.position = "relative"),
          (a = d.offset()),
          (s = Z.css(e, "top")),
          (l = Z.css(e, "left")),
          (c =
            ("absolute" === u || "fixed" === u) &&
            (s + l).indexOf("auto") > -1),
          c
            ? ((i = d.position()), (o = i.top), (r = i.left))
            : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
          Z.isFunction(t) && (t = t.call(e, n, a)),
          null != t.top && (p.top = t.top - a.top + o),
          null != t.left && (p.left = t.left - a.left + r),
          "using" in t ? t.using.call(e, p) : d.css(p);
      },
    }),
      Z.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  Z.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i = this[0],
            r = { top: 0, left: 0 },
            s = i && i.ownerDocument;
          if (s)
            return (
              (t = s.documentElement),
              Z.contains(t, i)
                ? (typeof i.getBoundingClientRect !== Ee &&
                    (r = i.getBoundingClientRect()),
                  (n = F(s)),
                  {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft,
                  })
                : r
            );
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = this[0],
              i = { top: 0, left: 0 };
            return (
              "fixed" === Z.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  Z.nodeName(e[0], "html") || (i = e.offset()),
                  (i.top += Z.css(e[0], "borderTopWidth", !0)),
                  (i.left += Z.css(e[0], "borderLeftWidth", !0))),
              {
                top: t.top - i.top - Z.css(n, "marginTop", !0),
                left: t.left - i.left - Z.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent || Rt;
              e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");

            )
              e = e.offsetParent;
            return e || Rt;
          });
        },
      }),
      Z.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, n) {
          var i = "pageYOffset" === n;
          Z.fn[t] = function (r) {
            return ve(
              this,
              function (t, r, s) {
                var o = F(t);
                return void 0 === s
                  ? o
                    ? o[n]
                    : t[r]
                  : void (o
                      ? o.scrollTo(i ? e.pageXOffset : s, i ? s : e.pageYOffset)
                      : (t[r] = s));
              },
              t,
              r,
              arguments.length,
              null
            );
          };
        }
      ),
      Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = S(J.pixelPosition, function (e, n) {
          return n
            ? ((n = T(e, t)), Ue.test(n) ? Z(e).position()[t] + "px" : n)
            : void 0;
        });
      }),
      Z.each({ Height: "height", Width: "width" }, function (e, t) {
        Z.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, i) {
            Z.fn[i] = function (i, r) {
              var s = arguments.length && (n || "boolean" != typeof i),
                o = n || (i === !0 || r === !0 ? "margin" : "border");
              return ve(
                this,
                function (t, n, i) {
                  var r;
                  return Z.isWindow(t)
                    ? t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((r = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        r["scroll" + e],
                        t.body["offset" + e],
                        r["offset" + e],
                        r["client" + e]
                      ))
                    : void 0 === i
                    ? Z.css(t, n, o)
                    : Z.style(t, n, i, o);
                },
                t,
                s ? i : void 0,
                s,
                null
              );
            };
          }
        );
      }),
      (Z.fn.size = function () {
        return this.length;
      }),
      (Z.fn.andSelf = Z.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return Z;
        });
    var Mt = e.jQuery,
      $t = e.$;
    return (
      (Z.noConflict = function (t) {
        return (
          e.$ === Z && (e.$ = $t), t && e.jQuery === Z && (e.jQuery = Mt), Z
        );
      }),
      typeof t === Ee && (e.jQuery = e.$ = Z),
      Z
    );
  }),
  (this.createjs = this.createjs || {}),
  (function () {
    var e = (createjs.SoundJS = createjs.SoundJS || {});
    (e.version = "0.6.0"), (e.buildDate = "Thu, 11 Dec 2014 23:32:09 GMT");
  })(),
  (this.createjs = this.createjs || {}),
  (createjs.extend = function (e, t) {
    "use strict";
    function n() {
      this.constructor = e;
    }
    return (n.prototype = t.prototype), (e.prototype = new n());
  }),
  (this.createjs = this.createjs || {}),
  (createjs.promote = function (e, t) {
    "use strict";
    var n = e.prototype,
      i = (Object.getPrototypeOf && Object.getPrototypeOf(n)) || n.__proto__;
    if (i) {
      n[(t += "_") + "constructor"] = i.constructor;
      for (var r in i)
        n.hasOwnProperty(r) && "function" == typeof i[r] && (n[t + r] = i[r]);
    }
    return e;
  }),
  (this.createjs = this.createjs || {}),
  (createjs.indexOf = function (e, t) {
    "use strict";
    for (var n = 0, i = e.length; i > n; n++) if (t === e[n]) return n;
    return -1;
  }),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    createjs.proxy = function (e, t) {
      var n = Array.prototype.slice.call(arguments, 2);
      return function () {
        return e.apply(t, Array.prototype.slice.call(arguments, 0).concat(n));
      };
    };
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var e = Object.defineProperty ? !0 : !1,
      t = {};
    try {
      Object.defineProperty(t, "bar", {
        get: function () {
          return this._bar;
        },
        set: function (e) {
          this._bar = e;
        },
      });
    } catch (n) {
      e = !1;
    }
    createjs.definePropertySupported = e;
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e() {
      throw "BrowserDetect cannot be instantiated";
    }
    var t = (e.agent = window.navigator.userAgent);
    (e.isWindowPhone =
      t.indexOf("IEMobile") > -1 || t.indexOf("Windows Phone") > -1),
      (e.isFirefox = t.indexOf("Firefox") > -1),
      (e.isOpera = null != window.opera),
      (e.isChrome = t.indexOf("Chrome") > -1),
      (e.isIOS =
        (t.indexOf("iPod") > -1 ||
          t.indexOf("iPhone") > -1 ||
          t.indexOf("iPad") > -1) &&
        !e.isWindowPhone),
      (e.isAndroid = t.indexOf("Android") > -1 && !e.isWindowPhone),
      (e.isBlackberry = t.indexOf("Blackberry") > -1),
      (createjs.BrowserDetect = e);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e() {
      (this._listeners = null), (this._captureListeners = null);
    }
    var t = e.prototype;
    (e.initialize = function (e) {
      (e.addEventListener = t.addEventListener),
        (e.on = t.on),
        (e.removeEventListener = e.off = t.removeEventListener),
        (e.removeAllEventListeners = t.removeAllEventListeners),
        (e.hasEventListener = t.hasEventListener),
        (e.dispatchEvent = t.dispatchEvent),
        (e._dispatchEvent = t._dispatchEvent),
        (e.willTrigger = t.willTrigger);
    }),
      (t.addEventListener = function (e, t, n) {
        var i;
        i = n
          ? (this._captureListeners = this._captureListeners || {})
          : (this._listeners = this._listeners || {});
        var r = i[e];
        return (
          r && this.removeEventListener(e, t, n),
          (r = i[e]),
          r ? r.push(t) : (i[e] = [t]),
          t
        );
      }),
      (t.on = function (e, t, n, i, r, s) {
        return (
          t.handleEvent && ((n = n || t), (t = t.handleEvent)),
          (n = n || this),
          this.addEventListener(
            e,
            function (e) {
              t.call(n, e, r), i && e.remove();
            },
            s
          )
        );
      }),
      (t.removeEventListener = function (e, t, n) {
        var i = n ? this._captureListeners : this._listeners;
        if (i) {
          var r = i[e];
          if (r)
            for (var s = 0, o = r.length; o > s; s++)
              if (r[s] == t) {
                1 == o ? delete i[e] : r.splice(s, 1);
                break;
              }
        }
      }),
      (t.off = t.removeEventListener),
      (t.removeAllEventListeners = function (e) {
        e
          ? (this._listeners && delete this._listeners[e],
            this._captureListeners && delete this._captureListeners[e])
          : (this._listeners = this._captureListeners = null);
      }),
      (t.dispatchEvent = function (e) {
        if ("string" == typeof e) {
          var t = this._listeners;
          if (!t || !t[e]) return !1;
          e = new createjs.Event(e);
        } else e.target && e.clone && (e = e.clone());
        try {
          e.target = this;
        } catch (n) {}
        if (e.bubbles && this.parent) {
          for (var i = this, r = [i]; i.parent; ) r.push((i = i.parent));
          var s,
            o = r.length;
          for (s = o - 1; s >= 0 && !e.propagationStopped; s--)
            r[s]._dispatchEvent(e, 1 + (0 == s));
          for (s = 1; o > s && !e.propagationStopped; s++)
            r[s]._dispatchEvent(e, 3);
        } else this._dispatchEvent(e, 2);
        return e.defaultPrevented;
      }),
      (t.hasEventListener = function (e) {
        var t = this._listeners,
          n = this._captureListeners;
        return !!((t && t[e]) || (n && n[e]));
      }),
      (t.willTrigger = function (e) {
        for (var t = this; t; ) {
          if (t.hasEventListener(e)) return !0;
          t = t.parent;
        }
        return !1;
      }),
      (t.toString = function () {
        return "[EventDispatcher]";
      }),
      (t._dispatchEvent = function (e, t) {
        var n,
          i = 1 == t ? this._captureListeners : this._listeners;
        if (e && i) {
          var r = i[e.type];
          if (!r || !(n = r.length)) return;
          try {
            e.currentTarget = this;
          } catch (s) {}
          try {
            e.eventPhase = t;
          } catch (s) {}
          (e.removed = !1), (r = r.slice());
          for (var o = 0; n > o && !e.immediatePropagationStopped; o++) {
            var a = r[o];
            a.handleEvent ? a.handleEvent(e) : a(e),
              e.removed && (this.off(e.type, a, 1 == t), (e.removed = !1));
          }
        }
      }),
      (createjs.EventDispatcher = e);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t, n) {
      (this.type = e),
        (this.target = null),
        (this.currentTarget = null),
        (this.eventPhase = 0),
        (this.bubbles = !!t),
        (this.cancelable = !!n),
        (this.timeStamp = new Date().getTime()),
        (this.defaultPrevented = !1),
        (this.propagationStopped = !1),
        (this.immediatePropagationStopped = !1),
        (this.removed = !1);
    }
    var t = e.prototype;
    (t.preventDefault = function () {
      this.defaultPrevented = this.cancelable && !0;
    }),
      (t.stopPropagation = function () {
        this.propagationStopped = !0;
      }),
      (t.stopImmediatePropagation = function () {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      }),
      (t.remove = function () {
        this.removed = !0;
      }),
      (t.clone = function () {
        return new e(this.type, this.bubbles, this.cancelable);
      }),
      (t.set = function (e) {
        for (var t in e) this[t] = e[t];
        return this;
      }),
      (t.toString = function () {
        return "[Event (type=" + this.type + ")]";
      }),
      (createjs.Event = e);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t, n) {
      this.Event_constructor("error"),
        (this.title = e),
        (this.message = t),
        (this.data = n);
    }
    var t = createjs.extend(e, createjs.Event);
    (t.clone = function () {
      return new createjs.ErrorEvent(this.title, this.message, this.data);
    }),
      (createjs.ErrorEvent = createjs.promote(e, "Event"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t) {
      this.Event_constructor("progress"),
        (this.loaded = e),
        (this.total = null == t ? 1 : t),
        (this.progress = 0 == t ? 0 : this.loaded / this.total);
    }
    var t = createjs.extend(e, createjs.Event);
    (t.clone = function () {
      return new createjs.ProgressEvent(this.loaded, this.total);
    }),
      (createjs.ProgressEvent = createjs.promote(e, "Event"));
  })(window),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e() {
      (this.src = null),
        (this.type = null),
        (this.id = null),
        (this.maintainOrder = !1),
        (this.callback = null),
        (this.data = null),
        (this.method = createjs.LoadItem.GET),
        (this.values = null),
        (this.headers = null),
        (this.withCredentials = !1),
        (this.mimeType = null),
        (this.crossOrigin = "Anonymous"),
        (this.loadTimeout = 8e3);
    }
    var t = (e.prototype = {}),
      n = e;
    (n.create = function (t) {
      if ("string" == typeof t) {
        var i = new e();
        return (i.src = t), i;
      }
      if (t instanceof n) return t;
      if (t instanceof Object) return t;
      throw new Error("Type not recognized.");
    }),
      (t.set = function (e) {
        for (var t in e) this[t] = e[t];
        return this;
      }),
      (createjs.LoadItem = n);
  })(),
  (function () {
    var e = {};
    (e.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i),
      (e.RELATIVE_PATT = /^[.\/]*?\//i),
      (e.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i),
      (e.parseURI = function (t) {
        var n = { absolute: !1, relative: !1 };
        if (null == t) return n;
        var i = t.indexOf("?");
        i > -1 && (t = t.substr(0, i));
        var r;
        return (
          e.ABSOLUTE_PATT.test(t)
            ? (n.absolute = !0)
            : e.RELATIVE_PATT.test(t) && (n.relative = !0),
          (r = t.match(e.EXTENSION_PATT)) && (n.extension = r[1].toLowerCase()),
          n
        );
      }),
      (e.formatQueryString = function (e, t) {
        if (null == e) throw new Error("You must specify data.");
        var n = [];
        for (var i in e) n.push(i + "=" + escape(e[i]));
        return t && (n = n.concat(t)), n.join("&");
      }),
      (e.buildPath = function (e, t) {
        if (null == t) return e;
        var n = [],
          i = e.indexOf("?");
        if (-1 != i) {
          var r = e.slice(i + 1);
          n = n.concat(r.split("&"));
        }
        return -1 != i
          ? e.slice(0, i) + "?" + this._formatQueryString(t, n)
          : e + "?" + this._formatQueryString(t, n);
      }),
      (e.isCrossDomain = function (e) {
        var t = document.createElement("a");
        t.href = e.src;
        var n = document.createElement("a");
        n.href = location.href;
        var i =
          "" != t.hostname &&
          (t.port != n.port ||
            t.protocol != n.protocol ||
            t.hostname != n.hostname);
        return i;
      }),
      (e.isLocal = function (e) {
        var t = document.createElement("a");
        return (t.href = e.src), "" == t.hostname && "file:" == t.protocol;
      }),
      (e.isBinary = function (e) {
        switch (e) {
          case createjs.AbstractLoader.IMAGE:
          case createjs.AbstractLoader.BINARY:
            return !0;
          default:
            return !1;
        }
      }),
      (e.isImageTag = function (e) {
        return e instanceof HTMLImageElement;
      }),
      (e.isAudioTag = function (e) {
        return window.HTMLAudioElement ? e instanceof HTMLAudioElement : !1;
      }),
      (e.isVideoTag = function (e) {
        return window.HTMLVideoElement ? e instanceof HTMLVideoElement : void 0;
      }),
      (e.isText = function (e) {
        switch (e) {
          case createjs.AbstractLoader.TEXT:
          case createjs.AbstractLoader.JSON:
          case createjs.AbstractLoader.MANIFEST:
          case createjs.AbstractLoader.XML:
          case createjs.AbstractLoader.CSS:
          case createjs.AbstractLoader.SVG:
          case createjs.AbstractLoader.JAVASCRIPT:
            return !0;
          default:
            return !1;
        }
      }),
      (e.getTypeByExtension = function (e) {
        if (null == e) return createjs.AbstractLoader.TEXT;
        switch (e.toLowerCase()) {
          case "jpeg":
          case "jpg":
          case "gif":
          case "png":
          case "webp":
          case "bmp":
            return createjs.AbstractLoader.IMAGE;
          case "ogg":
          case "mp3":
          case "webm":
            return createjs.AbstractLoader.SOUND;
          case "mp4":
          case "webm":
          case "ts":
            return createjs.AbstractLoader.VIDEO;
          case "json":
            return createjs.AbstractLoader.JSON;
          case "xml":
            return createjs.AbstractLoader.XML;
          case "css":
            return createjs.AbstractLoader.CSS;
          case "js":
            return createjs.AbstractLoader.JAVASCRIPT;
          case "svg":
            return createjs.AbstractLoader.SVG;
          default:
            return createjs.AbstractLoader.TEXT;
        }
      }),
      (createjs.RequestUtils = e);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t, n) {
      this.EventDispatcher_constructor(),
        (this.loaded = !1),
        (this.canceled = !1),
        (this.progress = 0),
        (this.type = n),
        (this.resultFormatter = null),
        (this._item = e ? createjs.LoadItem.create(e) : null),
        (this._preferXHR = t),
        (this._result = null),
        (this._rawResult = null),
        (this._loadedItems = null),
        (this._tagSrcAttribute = null),
        (this._tag = null);
    }
    var t = createjs.extend(e, createjs.EventDispatcher),
      n = e;
    (n.POST = "POST"),
      (n.GET = "GET"),
      (n.BINARY = "binary"),
      (n.CSS = "css"),
      (n.IMAGE = "image"),
      (n.JAVASCRIPT = "javascript"),
      (n.JSON = "json"),
      (n.JSONP = "jsonp"),
      (n.MANIFEST = "manifest"),
      (n.SOUND = "sound"),
      (n.VIDEO = "video"),
      (n.SPRITESHEET = "spritesheet"),
      (n.SVG = "svg"),
      (n.TEXT = "text"),
      (n.XML = "xml"),
      (t.getItem = function () {
        return this._item;
      }),
      (t.getResult = function (e) {
        return e ? this._rawResult : this._result;
      }),
      (t.getTag = function () {
        return this._tag;
      }),
      (t.setTag = function (e) {
        this._tag = e;
      }),
      (t.load = function () {
        this._createRequest(),
          this._request.on("complete", this, this),
          this._request.on("progress", this, this),
          this._request.on("loadStart", this, this),
          this._request.on("abort", this, this),
          this._request.on("timeout", this, this),
          this._request.on("error", this, this);
        var e = new createjs.Event("initialize");
        (e.loader = this._request), this.dispatchEvent(e), this._request.load();
      }),
      (t.cancel = function () {
        (this.canceled = !0), this.destroy();
      }),
      (t.destroy = function () {
        this._request &&
          (this._request.removeAllEventListeners(), this._request.destroy()),
          (this._request = null),
          (this._item = null),
          (this._rawResult = null),
          (this._result = null),
          (this._loadItems = null),
          this.removeAllEventListeners();
      }),
      (t.getLoadedItems = function () {
        return this._loadedItems;
      }),
      (t._createRequest = function () {
        this._request = this._preferXHR
          ? new createjs.XHRRequest(this._item)
          : new createjs.TagRequest(
              this._item,
              this._tag || this._createTag(),
              this._tagSrcAttribute
            );
      }),
      (t._createTag = function () {
        return null;
      }),
      (t._sendLoadStart = function () {
        this._isCanceled() || this.dispatchEvent("loadstart");
      }),
      (t._sendProgress = function (e) {
        if (!this._isCanceled()) {
          var t = null;
          "number" == typeof e
            ? ((this.progress = e),
              (t = new createjs.ProgressEvent(this.progress)))
            : ((t = e),
              (this.progress = e.loaded / e.total),
              (t.progress = this.progress),
              (isNaN(this.progress) || 1 / 0 == this.progress) &&
                (this.progress = 0)),
            this.hasEventListener("progress") && this.dispatchEvent(t);
        }
      }),
      (t._sendComplete = function () {
        if (!this._isCanceled()) {
          this.loaded = !0;
          var e = new createjs.Event("complete");
          (e.rawResult = this._rawResult),
            null != this._result && (e.result = this._result),
            this.dispatchEvent(e);
        }
      }),
      (t._sendError = function (e) {
        !this._isCanceled() &&
          this.hasEventListener("error") &&
          (null == e && (e = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),
          this.dispatchEvent(e));
      }),
      (t._isCanceled = function () {
        return null == window.createjs || this.canceled ? !0 : !1;
      }),
      (t.resultFormatter = null),
      (t.handleEvent = function (e) {
        switch (e.type) {
          case "complete":
            this._rawResult = e.target._response;
            var t = this.resultFormatter && this.resultFormatter(this),
              n = this;
            t instanceof Function
              ? t(function (e) {
                  (n._result = e), n._sendComplete();
                })
              : ((this._result = t || this._rawResult), this._sendComplete());
            break;
          case "progress":
            this._sendProgress(e);
            break;
          case "error":
            this._sendError(e);
            break;
          case "loadstart":
            this._sendLoadStart();
            break;
          case "abort":
          case "timeout":
            this._isCanceled() || this.dispatchEvent(e.type);
        }
      }),
      (t.buildPath = function (e, t) {
        return createjs.RequestUtils.buildPath(e, t);
      }),
      (t.toString = function () {
        return "[PreloadJS AbstractLoader]";
      }),
      (createjs.AbstractLoader = createjs.promote(e, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t, n) {
      this.AbstractLoader_constructor(e, t, n),
        (this.resultFormatter = this._formatResult),
        (this._tagSrcAttribute = "src");
    }
    var t = createjs.extend(e, createjs.AbstractLoader);
    (t.load = function () {
      this._tag || (this._tag = this._createTag(this._item.src)),
        (this._tag.preload = "auto"),
        this._tag.load(),
        this.AbstractLoader_load();
    }),
      (t._createTag = function () {}),
      (t._createRequest = function () {
        this._request = this._preferXHR
          ? new createjs.XHRRequest(this._item)
          : new createjs.MediaTagRequest(
              this._item,
              this._tag || this._createTag(),
              this._tagSrcAttribute
            );
      }),
      (t._formatResult = function (e) {
        return (
          this._tag.removeEventListener &&
            this._tag.removeEventListener(
              "canplaythrough",
              this._loadedHandler
            ),
          (this._tag.onstalled = null),
          this._preferXHR && (e.getTag().src = e.getResult(!0)),
          e.getTag()
        );
      }),
      (createjs.AbstractMediaLoader = createjs.promote(e, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var e = function (e) {
        this._item = e;
      },
      t = createjs.extend(e, createjs.EventDispatcher);
    (t.load = function () {}),
      (t.destroy = function () {}),
      (t.cancel = function () {}),
      (createjs.AbstractRequest = createjs.promote(e, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t, n) {
      this.AbstractRequest_constructor(e),
        (this._tag = t),
        (this._tagSrcAttribute = n),
        (this._loadedHandler = createjs.proxy(this._handleTagComplete, this)),
        (this._addedToDOM = !1),
        (this._startTagVisibility = null);
    }
    var t = createjs.extend(e, createjs.AbstractRequest);
    (t.load = function () {
      null == this._tag.parentNode &&
        (window.document.body.appendChild(this._tag), (this._addedToDOM = !0)),
        (this._tag.onload = createjs.proxy(this._handleTagComplete, this)),
        (this._tag.onreadystatechange = createjs.proxy(
          this._handleReadyStateChange,
          this
        ));
      var e = new createjs.Event("initialize");
      (e.loader = this._tag),
        this.dispatchEvent(e),
        this._hideTag(),
        (this._tag[this._tagSrcAttribute] = this._item.src);
    }),
      (t.destroy = function () {
        this._clean(), (this._tag = null), this.AbstractRequest_destroy();
      }),
      (t._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var e = this._tag;
        ("loaded" == e.readyState || "complete" == e.readyState) &&
          this._handleTagComplete();
      }),
      (t._handleTagComplete = function () {
        (this._rawResult = this._tag),
          (this._result =
            (this.resultFormatter && this.resultFormatter(this)) ||
            this._rawResult),
          this._clean(),
          this._showTag(),
          this.dispatchEvent("complete");
      }),
      (t._clean = function () {
        (this._tag.onload = null),
          (this._tag.onreadystatechange = null),
          this._addedToDOM &&
            null != this._tag.parentNode &&
            this._tag.parentNode.removeChild(this._tag);
      }),
      (t._hideTag = function () {
        (this._startTagVisibility = this._tag.style.visibility),
          (this._tag.style.visibility = "hidden");
      }),
      (t._showTag = function () {
        this._tag.style.visibility = this._startTagVisibility;
      }),
      (t._handleStalled = function () {}),
      (createjs.TagRequest = createjs.promote(e, "AbstractRequest"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t, n) {
      this.AbstractRequest_constructor(e),
        (this._tag = t),
        (this._tagSrcAttribute = n),
        (this._loadedHandler = createjs.proxy(this._handleTagComplete, this));
    }
    var t = createjs.extend(e, createjs.TagRequest);
    (t.load = function () {
      (this._tag.onstalled = createjs.proxy(this._handleStalled, this)),
        (this._tag.onprogress = createjs.proxy(this._handleProgress, this)),
        this._tag.addEventListener &&
          this._tag.addEventListener("canplaythrough", this._loadedHandler, !1),
        this.TagRequest_load();
    }),
      (t._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var e = this._tag;
        ("loaded" == e.readyState || "complete" == e.readyState) &&
          this._handleTagComplete();
      }),
      (t._handleStalled = function () {}),
      (t._handleProgress = function (e) {
        if (e && !(e.loaded > 0 && 0 == e.total)) {
          var t = new createjs.ProgressEvent(e.loaded, e.total);
          this.dispatchEvent(t);
        }
      }),
      (t._clean = function () {
        this._tag.removeEventListener &&
          this._tag.removeEventListener("canplaythrough", this._loadedHandler),
          (this._tag.onstalled = null),
          (this._tag.onprogress = null),
          this.TagRequest__clean();
      }),
      (createjs.MediaTagRequest = createjs.promote(e, "TagRequest"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e) {
      this.AbstractRequest_constructor(e),
        (this._request = null),
        (this._loadTimeout = null),
        (this._xhrLevel = 1),
        (this._response = null),
        (this._rawResponse = null),
        (this._canceled = !1),
        (this._handleLoadStartProxy = createjs.proxy(
          this._handleLoadStart,
          this
        )),
        (this._handleProgressProxy = createjs.proxy(
          this._handleProgress,
          this
        )),
        (this._handleAbortProxy = createjs.proxy(this._handleAbort, this)),
        (this._handleErrorProxy = createjs.proxy(this._handleError, this)),
        (this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this)),
        (this._handleLoadProxy = createjs.proxy(this._handleLoad, this)),
        (this._handleReadyStateChangeProxy = createjs.proxy(
          this._handleReadyStateChange,
          this
        )),
        !this._createXHR(e);
    }
    var t = createjs.extend(e, createjs.AbstractRequest);
    (e.ACTIVEX_VERSIONS = [
      "Msxml2.XMLHTTP.6.0",
      "Msxml2.XMLHTTP.5.0",
      "Msxml2.XMLHTTP.4.0",
      "MSXML2.XMLHTTP.3.0",
      "MSXML2.XMLHTTP",
      "Microsoft.XMLHTTP",
    ]),
      (t.getResult = function (e) {
        return e && this._rawResponse ? this._rawResponse : this._response;
      }),
      (t.cancel = function () {
        (this.canceled = !0), this._clean(), this._request.abort();
      }),
      (t.load = function () {
        if (null == this._request) return void this._handleError();
        this._request.addEventListener(
          "loadstart",
          this._handleLoadStartProxy,
          !1
        ),
          this._request.addEventListener(
            "progress",
            this._handleProgressProxy,
            !1
          ),
          this._request.addEventListener("abort", this._handleAbortProxy, !1),
          this._request.addEventListener("error", this._handleErrorProxy, !1),
          this._request.addEventListener(
            "timeout",
            this._handleTimeoutProxy,
            !1
          ),
          this._request.addEventListener("load", this._handleLoadProxy, !1),
          this._request.addEventListener(
            "readystatechange",
            this._handleReadyStateChangeProxy,
            !1
          ),
          1 == this._xhrLevel &&
            (this._loadTimeout = setTimeout(
              createjs.proxy(this._handleTimeout, this),
              this._item.loadTimeout
            ));
        try {
          this._item.values && this._item.method != createjs.AbstractLoader.GET
            ? this._item.method == createjs.AbstractLoader.POST &&
              this._request.send(
                createjs.RequestUtils.formatQueryString(this._item.values)
              )
            : this._request.send();
        } catch (e) {
          this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, e));
        }
      }),
      (t.setResponseType = function (e) {
        this._request.responseType = e;
      }),
      (t.getAllResponseHeaders = function () {
        return this._request.getAllResponseHeaders instanceof Function
          ? this._request.getAllResponseHeaders()
          : null;
      }),
      (t.getResponseHeader = function (e) {
        return this._request.getResponseHeader instanceof Function
          ? this._request.getResponseHeader(e)
          : null;
      }),
      (t._handleProgress = function (e) {
        if (e && !(e.loaded > 0 && 0 == e.total)) {
          var t = new createjs.ProgressEvent(e.loaded, e.total);
          this.dispatchEvent(t);
        }
      }),
      (t._handleLoadStart = function () {
        clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart");
      }),
      (t._handleAbort = function (e) {
        this._clean(),
          this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, e));
      }),
      (t._handleError = function (e) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent(e.message));
      }),
      (t._handleReadyStateChange = function () {
        4 == this._request.readyState && this._handleLoad();
      }),
      (t._handleLoad = function () {
        if (!this.loaded) {
          this.loaded = !0;
          var e = this._checkError();
          if (e) return void this._handleError(e);
          (this._response = this._getResponse()),
            this._clean(),
            this.dispatchEvent(new createjs.Event("complete"));
        }
      }),
      (t._handleTimeout = function (e) {
        this._clean(),
          this.dispatchEvent(
            new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, e)
          );
      }),
      (t._checkError = function () {
        var e = parseInt(this._request.status);
        switch (e) {
          case 404:
          case 0:
            return new Error(e);
        }
        return null;
      }),
      (t._getResponse = function () {
        if (null != this._response) return this._response;
        if (null != this._request.response) return this._request.response;
        try {
          if (null != this._request.responseText)
            return this._request.responseText;
        } catch (e) {}
        try {
          if (null != this._request.responseXML)
            return this._request.responseXML;
        } catch (e) {}
        return null;
      }),
      (t._createXHR = function (e) {
        var t = createjs.RequestUtils.isCrossDomain(e),
          n = {},
          i = null;
        if (window.XMLHttpRequest)
          (i = new XMLHttpRequest()),
            t &&
              void 0 === i.withCredentials &&
              window.XDomainRequest &&
              (i = new XDomainRequest());
        else {
          for (var r = 0, o = s.ACTIVEX_VERSIONS.length; o > r; r++) {
            s.ACTIVEX_VERSIONS[r];
            try {
              i = new ActiveXObject(axVersions);
              break;
            } catch (a) {}
          }
          if (null == i) return !1;
        }
        e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType),
          (this._xhrLevel = "string" == typeof i.responseType ? 2 : 1);
        var l = null;
        if (
          ((l =
            e.method == createjs.AbstractLoader.GET
              ? createjs.RequestUtils.buildPath(e.src, e.values)
              : e.src),
          i.open(e.method || createjs.AbstractLoader.GET, l, !0),
          t &&
            i instanceof XMLHttpRequest &&
            1 == this._xhrLevel &&
            (n.Origin = location.origin),
          e.values &&
            e.method == createjs.AbstractLoader.POST &&
            (n["Content-Type"] = "application/x-www-form-urlencoded"),
          t ||
            n["X-Requested-With"] ||
            (n["X-Requested-With"] = "XMLHttpRequest"),
          e.headers)
        )
          for (var c in e.headers) n[c] = e.headers[c];
        for (c in n) i.setRequestHeader(c, n[c]);
        return (
          i instanceof XMLHttpRequest &&
            void 0 !== e.withCredentials &&
            (i.withCredentials = e.withCredentials),
          (this._request = i),
          !0
        );
      }),
      (t._clean = function () {
        clearTimeout(this._loadTimeout),
          this._request.removeEventListener(
            "loadstart",
            this._handleLoadStartProxy
          ),
          this._request.removeEventListener(
            "progress",
            this._handleProgressProxy
          ),
          this._request.removeEventListener("abort", this._handleAbortProxy),
          this._request.removeEventListener("error", this._handleErrorProxy),
          this._request.removeEventListener(
            "timeout",
            this._handleTimeoutProxy
          ),
          this._request.removeEventListener("load", this._handleLoadProxy),
          this._request.removeEventListener(
            "readystatechange",
            this._handleReadyStateChangeProxy
          );
      }),
      (t.toString = function () {
        return "[PreloadJS XHRRequest]";
      }),
      (createjs.XHRRequest = createjs.promote(e, "AbstractRequest"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t) {
      this.AbstractMediaLoader_constructor(e, t, createjs.AbstractLoader.SOUND),
        createjs.RequestUtils.isAudioTag(e)
          ? (this._tag = e)
          : createjs.RequestUtils.isAudioTag(e.src)
          ? (this._tag = e)
          : createjs.RequestUtils.isAudioTag(e.tag) &&
            (this._tag = createjs.RequestUtils.isAudioTag(e) ? e : e.src),
        null != this._tag && (this._preferXHR = !1);
    }
    var t = createjs.extend(e, createjs.AbstractMediaLoader),
      n = e;
    (n.canLoadItem = function (e) {
      return e.type == createjs.AbstractLoader.SOUND;
    }),
      (t._createTag = function (e) {
        var t = document.createElement("audio");
        return (t.autoplay = !1), (t.preload = "none"), (t.src = e), t;
      }),
      (createjs.SoundLoader = createjs.promote(e, "AbstractMediaLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e() {
      throw "Sound cannot be instantiated";
    }
    function t(e, t) {
      this.init(e, t);
    }
    var n = e;
    (n.INTERRUPT_ANY = "any"),
      (n.INTERRUPT_EARLY = "early"),
      (n.INTERRUPT_LATE = "late"),
      (n.INTERRUPT_NONE = "none"),
      (n.PLAY_INITED = "playInited"),
      (n.PLAY_SUCCEEDED = "playSucceeded"),
      (n.PLAY_INTERRUPTED = "playInterrupted"),
      (n.PLAY_FINISHED = "playFinished"),
      (n.PLAY_FAILED = "playFailed"),
      (n.SUPPORTED_EXTENSIONS = [
        "mp3",
        "ogg",
        "mpeg",
        "wav",
        "m4a",
        "mp4",
        "aiff",
        "wma",
        "mid",
      ]),
      (n.EXTENSION_MAP = { m4a: "mp4" }),
      (n.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/),
      (n.defaultInterruptBehavior = n.INTERRUPT_NONE),
      (n.alternateExtensions = []),
      (n.activePlugin = null),
      (n._pluginsRegistered = !1),
      (n._lastID = 0),
      (n._masterVolume = 1),
      (n._masterMute = !1),
      (n._instances = []),
      (n._idHash = {}),
      (n._preloadHash = {}),
      (n.addEventListener = null),
      (n.removeEventListener = null),
      (n.removeAllEventListeners = null),
      (n.dispatchEvent = null),
      (n.hasEventListener = null),
      (n._listeners = null),
      createjs.EventDispatcher.initialize(n),
      (n.getPreloadHandlers = function () {
        return {
          callback: createjs.proxy(n.initLoad, n),
          types: ["sound"],
          extensions: n.SUPPORTED_EXTENSIONS,
        };
      }),
      (n._handleLoadComplete = function (e) {
        var t = e.target.getItem().src;
        if (n._preloadHash[t])
          for (var i = 0, r = n._preloadHash[t].length; r > i; i++) {
            var s = n._preloadHash[t][i];
            if (((n._preloadHash[t][i] = !0), n.hasEventListener("fileload"))) {
              var e = new createjs.Event("fileload");
              (e.src = s.src),
                (e.id = s.id),
                (e.data = s.data),
                (e.sprite = s.sprite),
                n.dispatchEvent(e);
            }
          }
      }),
      (n._handleLoadError = function (e) {
        var t = e.target.getItem().src;
        if (n._preloadHash[t])
          for (var i = 0, r = n._preloadHash[t].length; r > i; i++) {
            var s = n._preloadHash[t][i];
            if (
              ((n._preloadHash[t][i] = !1), n.hasEventListener("fileerror"))
            ) {
              var e = new createjs.Event("fileerror");
              (e.src = s.src),
                (e.id = s.id),
                (e.data = s.data),
                (e.sprite = s.sprite),
                n.dispatchEvent(e);
            }
          }
      }),
      (n._registerPlugin = function (e) {
        return e.isSupported() ? ((n.activePlugin = new e()), !0) : !1;
      }),
      (n.registerPlugins = function (e) {
        n._pluginsRegistered = !0;
        for (var t = 0, i = e.length; i > t; t++)
          if (n._registerPlugin(e[t])) return !0;
        return !1;
      }),
      (n.initializeDefaultPlugins = function () {
        return null != n.activePlugin
          ? !0
          : n._pluginsRegistered
          ? !1
          : n.registerPlugins([
              createjs.WebAudioPlugin,
              createjs.HTMLAudioPlugin,
            ])
          ? !0
          : !1;
      }),
      (n.isReady = function () {
        return null != n.activePlugin;
      }),
      (n.getCapabilities = function () {
        return null == n.activePlugin ? null : n.activePlugin._capabilities;
      }),
      (n.getCapability = function (e) {
        return null == n.activePlugin ? null : n.activePlugin._capabilities[e];
      }),
      (n.initLoad = function (e) {
        return n._registerSound(e);
      }),
      (n._registerSound = function (e) {
        if (!n.initializeDefaultPlugins()) return !1;
        var i = n._parsePath(e.src);
        if (null == i) return !1;
        (e.src = i.src), (e.type = "sound");
        var r = e.data,
          s = n.activePlugin.defaultNumChannels || null;
        if (
          null != r &&
          (isNaN(r.channels)
            ? isNaN(r) || (s = parseInt(r))
            : (s = parseInt(r.channels)),
          r.audioSprite)
        )
          for (var o, a = r.audioSprite.length; a--; )
            (o = r.audioSprite[a]),
              (n._idHash[o.id] = {
                src: e.src,
                startTime: parseInt(o.startTime),
                duration: parseInt(o.duration),
              });
        null != e.id && (n._idHash[e.id] = { src: e.src });
        var l = n.activePlugin.register(e, s);
        return (
          t.create(e.src, s),
          null != r && isNaN(r)
            ? (e.data.channels = s || t.maxPerChannel())
            : (e.data = s || t.maxPerChannel()),
          l.type && (e.type = l.type),
          l
        );
      }),
      (n.registerSound = function (e, t, i, r) {
        var s = { src: e, id: t, data: i };
        e instanceof Object && ((r = t), (s = e)),
          (s = createjs.LoadItem.create(s)),
          null != r && (s.src = r + e);
        var o = n._registerSound(s);
        if (!o) return !1;
        if (
          (n._preloadHash[s.src] || (n._preloadHash[s.src] = []),
          n._preloadHash[s.src].push(s),
          1 == n._preloadHash[s.src].length)
        )
          o.on("complete", createjs.proxy(this._handleLoadComplete, this)),
            o.on("error", createjs.proxy(this._handleLoadError, this)),
            n.activePlugin.preload(o);
        else if (1 == n._preloadHash[s.src][0]) return !0;
        return s;
      }),
      (n.registerSounds = function (e, t) {
        var n = [];
        e.path && (t ? (t += e.path) : (t = e.path));
        for (var i = 0, r = e.length; r > i; i++)
          n[i] = createjs.Sound.registerSound(e[i].src, e[i].id, e[i].data, t);
        return n;
      }),
      (n.registerManifest = function (e, t) {
        try {
          console.log(
            "createjs.Sound.registerManifest is deprecated, please use createjs.Sound.registerSounds."
          );
        } catch (n) {}
        return this.registerSounds(e, t);
      }),
      (n.removeSound = function (e, i) {
        if (null == n.activePlugin) return !1;
        e instanceof Object && (e = e.src),
          (e = n._getSrcById(e).src),
          null != i && (e = i + e);
        var r = n._parsePath(e);
        if (null == r) return !1;
        e = r.src;
        for (var s in n._idHash) n._idHash[s].src == e && delete n._idHash[s];
        return (
          t.removeSrc(e),
          delete n._preloadHash[e],
          n.activePlugin.removeSound(e),
          !0
        );
      }),
      (n.removeSounds = function (e, t) {
        var n = [];
        e.path && (t ? (t += e.path) : (t = e.path));
        for (var i = 0, r = e.length; r > i; i++)
          n[i] = createjs.Sound.removeSound(e[i].src, t);
        return n;
      }),
      (n.removeManifest = function (e, t) {
        try {
          console.log(
            "createjs.Sound.removeManifest is deprecated, please use createjs.Sound.removeSounds."
          );
        } catch (i) {}
        return n.removeSounds(e, t);
      }),
      (n.removeAllSounds = function () {
        (n._idHash = {}),
          (n._preloadHash = {}),
          t.removeAll(),
          n.activePlugin && n.activePlugin.removeAllSounds();
      }),
      (n.loadComplete = function (e) {
        if (!n.isReady()) return !1;
        var t = n._parsePath(e);
        return (
          (e = t ? n._getSrcById(t.src).src : n._getSrcById(e).src),
          1 == n._preloadHash[e][0]
        );
      }),
      (n._parsePath = function (e) {
        "string" != typeof e && (e = e.toString());
        var t = e.match(n.FILE_PATTERN);
        if (null == t) return !1;
        for (var i = t[4], r = t[5], s = n.getCapabilities(), o = 0; !s[r]; )
          if (
            ((r = n.alternateExtensions[o++]), o > n.alternateExtensions.length)
          )
            return null;
        e = e.replace("." + t[5], "." + r);
        var a = { name: i, src: e, extension: r };
        return a;
      }),
      (n.play = function (e, t, i, r, s, o, a, l, c) {
        t instanceof Object &&
          ((i = t.delay),
          (r = t.offset),
          (s = t.loop),
          (o = t.volume),
          (a = t.pan),
          (l = t.startTime),
          (c = t.duration),
          (t = t.interrupt));
        var u = n.createInstance(e, l, c),
          d = n._playInstance(u, t, i, r, s, o, a);
        return d || u._playFailed(), u;
      }),
      (n.createInstance = function (e, i, r) {
        if (!n.initializeDefaultPlugins())
          return new createjs.DefaultSoundInstance(e, i, r);
        e = n._getSrcById(e);
        var s = n._parsePath(e.src),
          o = null;
        return (
          null != s && null != s.src
            ? (t.create(s.src),
              null == i && (i = e.startTime),
              (o = n.activePlugin.create(s.src, i, r || e.duration)))
            : (o = new createjs.DefaultSoundInstance(e, i, r)),
          (o.uniqueId = n._lastID++),
          o
        );
      }),
      (n.setVolume = function (e) {
        if (null == Number(e)) return !1;
        if (
          ((e = Math.max(0, Math.min(1, e))),
          (n._masterVolume = e),
          !this.activePlugin ||
            !this.activePlugin.setVolume ||
            !this.activePlugin.setVolume(e))
        )
          for (var t = this._instances, i = 0, r = t.length; r > i; i++)
            t[i].setMasterVolume(e);
      }),
      (n.getVolume = function () {
        return n._masterVolume;
      }),
      (n.setMute = function (e) {
        if (null == e) return !1;
        if (
          ((this._masterMute = e),
          !this.activePlugin ||
            !this.activePlugin.setMute ||
            !this.activePlugin.setMute(e))
        )
          for (var t = this._instances, n = 0, i = t.length; i > n; n++)
            t[n].setMasterMute(e);
        return !0;
      }),
      (n.getMute = function () {
        return this._masterMute;
      }),
      (n.stop = function () {
        for (var e = this._instances, t = e.length; t--; ) e[t].stop();
      }),
      (n._playInstance = function (e, t, i, r, s, o, a) {
        if (
          (t instanceof Object &&
            ((i = t.delay),
            (r = t.offset),
            (s = t.loop),
            (o = t.volume),
            (a = t.pan),
            (t = t.interrupt)),
          (t = t || n.defaultInterruptBehavior),
          null == i && (i = 0),
          null == r && (r = e.getPosition()),
          null == s && (s = e.loop),
          null == o && (o = e.volume),
          null == a && (a = e.pan),
          0 == i)
        ) {
          var l = n._beginPlaying(e, t, r, s, o, a);
          if (!l) return !1;
        } else {
          var c = setTimeout(function () {
            n._beginPlaying(e, t, r, s, o, a);
          }, i);
          e.delayTimeoutId = c;
        }
        return this._instances.push(e), !0;
      }),
      (n._beginPlaying = function (e, n, i, r, s, o) {
        if (!t.add(e, n)) return !1;
        var a = e._beginPlaying(i, r, s, o);
        if (!a) {
          var l = createjs.indexOf(this._instances, e);
          return l > -1 && this._instances.splice(l, 1), !1;
        }
        return !0;
      }),
      (n._getSrcById = function (e) {
        return n._idHash[e] || { src: e };
      }),
      (n._playFinished = function (e) {
        t.remove(e);
        var n = createjs.indexOf(this._instances, e);
        n > -1 && this._instances.splice(n, 1);
      }),
      (createjs.Sound = e),
      (t.channels = {}),
      (t.create = function (e, n) {
        var i = t.get(e);
        return null == i ? ((t.channels[e] = new t(e, n)), !0) : !1;
      }),
      (t.removeSrc = function (e) {
        var n = t.get(e);
        return null == n ? !1 : (n._removeAll(), delete t.channels[e], !0);
      }),
      (t.removeAll = function () {
        for (var e in t.channels) t.channels[e]._removeAll();
        t.channels = {};
      }),
      (t.add = function (e, n) {
        var i = t.get(e.src);
        return null == i ? !1 : i._add(e, n);
      }),
      (t.remove = function (e) {
        var n = t.get(e.src);
        return null == n ? !1 : (n._remove(e), !0);
      }),
      (t.maxPerChannel = function () {
        return i.maxDefault;
      }),
      (t.get = function (e) {
        return t.channels[e];
      });
    var i = t.prototype;
    (i.constructor = t),
      (i.src = null),
      (i.max = null),
      (i.maxDefault = 100),
      (i.length = 0),
      (i.init = function (e, t) {
        (this.src = e),
          (this.max = t || this.maxDefault),
          -1 == this.max && (this.max = this.maxDefault),
          (this._instances = []);
      }),
      (i._get = function (e) {
        return this._instances[e];
      }),
      (i._add = function (e, t) {
        return this._getSlot(t, e)
          ? (this._instances.push(e), this.length++, !0)
          : !1;
      }),
      (i._remove = function (e) {
        var t = createjs.indexOf(this._instances, e);
        return -1 == t ? !1 : (this._instances.splice(t, 1), this.length--, !0);
      }),
      (i._removeAll = function () {
        for (var e = this.length - 1; e >= 0; e--) this._instances[e].stop();
      }),
      (i._getSlot = function (t) {
        var n, i;
        if (t != e.INTERRUPT_NONE && ((i = this._get(0)), null == i)) return !0;
        for (var r = 0, s = this.max; s > r; r++) {
          if (((n = this._get(r)), null == n)) return !0;
          if (
            n.playState == e.PLAY_FINISHED ||
            n.playState == e.PLAY_INTERRUPTED ||
            n.playState == e.PLAY_FAILED
          ) {
            i = n;
            break;
          }
          t != e.INTERRUPT_NONE &&
            ((t == e.INTERRUPT_EARLY && n.getPosition() < i.getPosition()) ||
              (t == e.INTERRUPT_LATE && n.getPosition() > i.getPosition())) &&
            (i = n);
        }
        return null != i ? (i._interrupt(), this._remove(i), !0) : !1;
      }),
      (i.toString = function () {
        return "[Sound SoundChannel]";
      });
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var e = function (e, t, n, i) {
        this.EventDispatcher_constructor(),
          (this.src = e),
          (this.uniqueId = -1),
          (this.playState = null),
          (this.delayTimeoutId = null),
          (this._startTime = Math.max(0, t || 0)),
          (this._volume = 1),
          createjs.definePropertySupported &&
            Object.defineProperty(this, "volume", {
              get: this.getVolume,
              set: this.setVolume,
            }),
          (this._pan = 0),
          createjs.definePropertySupported &&
            Object.defineProperty(this, "pan", {
              get: this.getPan,
              set: this.setPan,
            }),
          (this._duration = Math.max(0, n || 0)),
          createjs.definePropertySupported &&
            Object.defineProperty(this, "duration", {
              get: this.getDuration,
              set: this.setDuration,
            }),
          (this._playbackResource = null),
          createjs.definePropertySupported &&
            Object.defineProperty(this, "playbackResource", {
              get: this.getPlaybackResource,
              set: this.setPlaybackResource,
            }),
          i !== !1 && i !== !0 && this.setPlaybackResource(i),
          (this._position = 0),
          createjs.definePropertySupported &&
            Object.defineProperty(this, "position", {
              get: this.getPosition,
              set: this.setPosition,
            }),
          (this._loop = 0),
          createjs.definePropertySupported &&
            Object.defineProperty(this, "loop", {
              get: this.getLoop,
              set: this.setLoop,
            }),
          (this._muted = !1),
          createjs.definePropertySupported &&
            Object.defineProperty(this, "muted", {
              get: this.getMuted,
              set: this.setMuted,
            }),
          (this._paused = !1),
          createjs.definePropertySupported &&
            Object.defineProperty(this, "paused", {
              get: this.getPaused,
              set: this.setPaused,
            });
      },
      t = createjs.extend(e, createjs.EventDispatcher);
    (t.play = function (e, t, n, i, r, s) {
      return this.playState == createjs.Sound.PLAY_SUCCEEDED
        ? (e instanceof Object &&
            ((n = e.offset), (i = e.loop), (r = e.volume), (s = e.pan)),
          null != n && this.setPosition(n),
          null != i && this.setLoop(i),
          null != r && this.setVolume(r),
          null != s && this.setPan(s),
          void (this._paused && this.setPaused(!1)))
        : (this._cleanUp(),
          createjs.Sound._playInstance(this, e, t, n, i, r, s),
          this);
    }),
      (t.pause = function () {
        return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED
          ? !1
          : (this.setPaused(!0), !0);
      }),
      (t.resume = function () {
        return this._paused ? (this.setPaused(!1), !0) : !1;
      }),
      (t.stop = function () {
        return (
          (this._position = 0),
          (this._paused = !1),
          this._handleStop(),
          this._cleanUp(),
          (this.playState = createjs.Sound.PLAY_FINISHED),
          this
        );
      }),
      (t.destroy = function () {
        this._cleanUp(),
          (this.src = null),
          (this.playbackResource = null),
          this.removeAllEventListeners();
      }),
      (t.toString = function () {
        return "[AbstractSoundInstance]";
      }),
      (t.getPaused = function () {
        return this._paused;
      }),
      (t.setPaused = function (e) {
        return (e !== !0 && e !== !1) ||
          this._paused == e ||
          (1 == e && this.playState != createjs.Sound.PLAY_SUCCEEDED)
          ? void 0
          : ((this._paused = e),
            e ? this._pause() : this._resume(),
            clearTimeout(this.delayTimeoutId),
            this);
      }),
      (t.setVolume = function (e) {
        return e == this._volume
          ? this
          : ((this._volume = Math.max(0, Math.min(1, e))),
            this._muted || this._updateVolume(),
            this);
      }),
      (t.getVolume = function () {
        return this._volume;
      }),
      (t.setMute = function (e) {
        this.setMuted(e);
      }),
      (t.getMute = function () {
        return this._muted;
      }),
      (t.setMuted = function (e) {
        return e === !0 || e === !1
          ? ((this._muted = e), this._updateVolume(), this)
          : void 0;
      }),
      (t.getMuted = function () {
        return this._muted;
      }),
      (t.setPan = function (e) {
        return e == this._pan
          ? this
          : ((this._pan = Math.max(-1, Math.min(1, e))),
            this._updatePan(),
            this);
      }),
      (t.getPan = function () {
        return this._pan;
      }),
      (t.getPosition = function () {
        return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED
          ? this._position
          : this._calculateCurrentPosition();
      }),
      (t.setPosition = function (e) {
        return (
          (this._position = Math.max(0, e)),
          this.playState == createjs.Sound.PLAY_SUCCEEDED &&
            this._updatePosition(),
          this
        );
      }),
      (t.getDuration = function () {
        return this._duration;
      }),
      (t.setDuration = function (e) {
        return e == this._duration
          ? this
          : ((this._duration = Math.max(0, e || 0)),
            this._updateDuration(),
            this);
      }),
      (t.setPlaybackResource = function (e) {
        return (
          (this._playbackResource = e),
          0 == this._duration && this._setDurationFromSource(),
          this
        );
      }),
      (t.getPlaybackResource = function () {
        return this._playbackResource;
      }),
      (t.getLoop = function () {
        return this._loop;
      }),
      (t.setLoop = function (e) {
        null != this._playbackResource &&
          (0 != this._loop && 0 == e && this._removeLooping(e),
          0 == this._loop && 0 != e && this._addLooping(e)),
          (this._loop = e);
      }),
      (t._sendEvent = function (e) {
        var t = new createjs.Event(e);
        this.dispatchEvent(t);
      }),
      (t._cleanUp = function () {
        clearTimeout(this.delayTimeoutId),
          this._handleCleanUp(),
          (this._paused = !1),
          createjs.Sound._playFinished(this);
      }),
      (t._interrupt = function () {
        this._cleanUp(),
          (this.playState = createjs.Sound.PLAY_INTERRUPTED),
          this._sendEvent("interrupted");
      }),
      (t._beginPlaying = function (e, t, n, i) {
        return (
          this.setPosition(e),
          this.setLoop(t),
          this.setVolume(n),
          this.setPan(i),
          null != this._playbackResource && this._position < this._duration
            ? ((this._paused = !1),
              this._handleSoundReady(),
              (this.playState = createjs.Sound.PLAY_SUCCEEDED),
              this._sendEvent("succeeded"),
              !0)
            : (this._playFailed(), !1)
        );
      }),
      (t._playFailed = function () {
        this._cleanUp(),
          (this.playState = createjs.Sound.PLAY_FAILED),
          this._sendEvent("failed");
      }),
      (t._handleSoundComplete = function () {
        return (
          (this._position = 0),
          0 != this._loop
            ? (this._loop--, this._handleLoop(), void this._sendEvent("loop"))
            : (this._cleanUp(),
              (this.playState = createjs.Sound.PLAY_FINISHED),
              void this._sendEvent("complete"))
        );
      }),
      (t._handleSoundReady = function () {}),
      (t._updateVolume = function () {}),
      (t._updatePan = function () {}),
      (t._updateDuration = function () {}),
      (t._setDurationFromSource = function () {}),
      (t._calculateCurrentPosition = function () {}),
      (t._updatePosition = function () {}),
      (t._removeLooping = function () {}),
      (t._addLooping = function () {}),
      (t._pause = function () {}),
      (t._resume = function () {}),
      (t._handleStop = function () {}),
      (t._handleCleanUp = function () {}),
      (t._handleLoop = function () {}),
      (createjs.AbstractSoundInstance = createjs.promote(e, "EventDispatcher")),
      (createjs.DefaultSoundInstance = createjs.AbstractSoundInstance);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var e = function () {
        (this._capabilities = null),
          (this._loaders = {}),
          (this._audioSources = {}),
          (this._soundInstances = {}),
          this._loaderClass,
          this._soundInstanceClass;
      },
      t = e.prototype;
    (e._capabilities = null),
      (e.isSupported = function () {
        return !0;
      }),
      (t.register = function (e) {
        if (
          ((this._audioSources[e.src] = !0),
          (this._soundInstances[e.src] = []),
          this._loaders[e.src])
        )
          return this._loaders[e.src];
        var t = new this._loaderClass(e);
        return (
          t.on("complete", createjs.proxy(this._handlePreloadComplete, this)),
          (this._loaders[e.src] = t),
          t
        );
      }),
      (t.preload = function (e) {
        e.on("error", createjs.proxy(this._handlePreloadError, this)), e.load();
      }),
      (t.isPreloadStarted = function (e) {
        return null != this._audioSources[e];
      }),
      (t.isPreloadComplete = function (e) {
        return !(null == this._audioSources[e] || 1 == this._audioSources[e]);
      }),
      (t.removeSound = function (e) {
        if (this._soundInstances[e]) {
          for (var t = this._soundInstances[e].length; t--; ) {
            var n = this._soundInstances[e][t];
            n.destroy();
          }
          delete this._soundInstances[e],
            delete this._audioSources[e],
            this._loaders[e] && this._loaders[e].destroy(),
            delete this._loaders[e];
        }
      }),
      (t.removeAllSounds = function () {
        for (var e in this._audioSources) this.removeSound(e);
      }),
      (t.create = function (e, t, n) {
        this.isPreloadStarted(e) || this.preload(this.register(e));
        var i = new this._soundInstanceClass(e, t, n, this._audioSources[e]);
        return this._soundInstances[e].push(i), i;
      }),
      (t.setVolume = function (e) {
        return (this._volume = e), this._updateVolume(), !0;
      }),
      (t.getVolume = function () {
        return this._volume;
      }),
      (t.setMute = function () {
        return this._updateVolume(), !0;
      }),
      (t.toString = function () {
        return "[AbstractPlugin]";
      }),
      (t._handlePreloadComplete = function (e) {
        var t = e.target.getItem().src;
        this._audioSources[t] = e.result;
        for (var n = 0, i = this._soundInstances[t].length; i > n; n++) {
          var r = this._soundInstances[t][n];
          r.setPlaybackResource(this._audioSources[t]);
        }
      }),
      (t._handlePreloadError = function () {}),
      (t._updateVolume = function () {}),
      (createjs.AbstractPlugin = e);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e) {
      this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.SOUND);
    }
    var t = createjs.extend(e, createjs.AbstractLoader);
    (e.context = null),
      (t.toString = function () {
        return "[WebAudioLoader]";
      }),
      (t._createRequest = function () {
        (this._request = new createjs.XHRRequest(this._item, !1)),
          this._request.setResponseType("arraybuffer");
      }),
      (t._sendComplete = function () {
        e.context.decodeAudioData(
          this._rawResult,
          createjs.proxy(this._handleAudioDecoded, this),
          createjs.proxy(this._handleError, this)
        );
      }),
      (t._handleAudioDecoded = function (e) {
        (this._result = e), this.AbstractLoader__sendComplete();
      }),
      (createjs.WebAudioLoader = createjs.promote(e, "AbstractLoader"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t, i, r) {
      this.AbstractSoundInstance_constructor(e, t, i, r),
        (this.gainNode = n.context.createGain()),
        (this.panNode = n.context.createPanner()),
        (this.panNode.panningModel = n._panningModel),
        this.panNode.connect(this.gainNode),
        (this.sourceNode = null),
        (this._soundCompleteTimeout = null),
        (this._sourceNodeNext = null),
        (this._playbackStartTime = 0),
        (this._endedHandler = createjs.proxy(this._handleSoundComplete, this));
    }
    var t = createjs.extend(e, createjs.AbstractSoundInstance),
      n = e;
    (n.context = null),
      (n.destinationNode = null),
      (n._panningModel = "equalpower"),
      (t.destroy = function () {
        this.AbstractSoundInstance_destroy(),
          this.panNode.disconnect(0),
          (this.panNode = null),
          this.gainNode.disconnect(0),
          (this.gainNode = null);
      }),
      (t.toString = function () {
        return "[WebAudioSoundInstance]";
      }),
      (t._updatePan = function () {
        this.panNode.setPosition(this._pan, 0, -0.5);
      }),
      (t._removeLooping = function () {
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
      }),
      (t._addLooping = function () {
        this.playState == createjs.Sound.PLAY_SUCCEEDED &&
          (this._sourceNodeNext = this._createAndPlayAudioNode(
            this._playbackStartTime,
            0
          ));
      }),
      (t._setDurationFromSource = function () {
        this._duration = 1e3 * this.playbackResource.duration;
      }),
      (t._handleCleanUp = function () {
        this.sourceNode &&
          this.playState == createjs.Sound.PLAY_SUCCEEDED &&
          ((this.sourceNode = this._cleanUpAudioNode(this.sourceNode)),
          (this._sourceNodeNext = this._cleanUpAudioNode(
            this._sourceNodeNext
          ))),
          0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0),
          clearTimeout(this._soundCompleteTimeout),
          (this._playbackStartTime = 0);
      }),
      (t._cleanUpAudioNode = function (e) {
        return e && (e.stop(0), e.disconnect(0), (e = null)), e;
      }),
      (t._handleSoundReady = function () {
        this.gainNode.connect(n.destinationNode);
        var e = 0.001 * this._duration,
          t = 0.001 * this._position;
        (this.sourceNode = this._createAndPlayAudioNode(
          n.context.currentTime - e,
          t
        )),
          (this._playbackStartTime = this.sourceNode.startTime - t),
          (this._soundCompleteTimeout = setTimeout(
            this._endedHandler,
            1e3 * (e - t)
          )),
          0 != this._loop &&
            (this._sourceNodeNext = this._createAndPlayAudioNode(
              this._playbackStartTime,
              0
            ));
      }),
      (t._createAndPlayAudioNode = function (e, t) {
        var i = n.context.createBufferSource();
        (i.buffer = this.playbackResource), i.connect(this.panNode);
        var r = 0.001 * this._duration;
        return (
          (i.startTime = e + r),
          i.start(i.startTime, t + 0.001 * this._startTime, r - t),
          i
        );
      }),
      (t._pause = function () {
        (this._position =
          1e3 * (n.context.currentTime - this._playbackStartTime)),
          (this.sourceNode = this._cleanUpAudioNode(this.sourceNode)),
          (this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)),
          0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0),
          clearTimeout(this._soundCompleteTimeout);
      }),
      (t._resume = function () {
        this._handleSoundReady();
      }),
      (t._updateVolume = function () {
        var e = this._muted ? 0 : this._volume;
        e != this.gainNode.gain.value && (this.gainNode.gain.value = e);
      }),
      (t._calculateCurrentPosition = function () {
        return 1e3 * (n.context.currentTime - this._playbackStartTime);
      }),
      (t._updatePosition = function () {
        (this.sourceNode = this._cleanUpAudioNode(this.sourceNode)),
          (this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)),
          clearTimeout(this._soundCompleteTimeout),
          this._paused || this._handleSoundReady();
      }),
      (t._handleLoop = function () {
        this._cleanUpAudioNode(this.sourceNode),
          (this.sourceNode = this._sourceNodeNext),
          (this._playbackStartTime = this.sourceNode.startTime),
          (this._sourceNodeNext = this._createAndPlayAudioNode(
            this._playbackStartTime,
            0
          )),
          (this._soundCompleteTimeout = setTimeout(
            this._endedHandler,
            this._duration
          ));
      }),
      (t._updateDuration = function () {
        this._pause(), this._resume();
      }),
      (createjs.WebAudioSoundInstance = createjs.promote(
        e,
        "AbstractSoundInstance"
      ));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e() {
      this.AbstractPlugin_constructor(),
        (this._panningModel = n._panningModel),
        (this._volume = 1),
        (this.context = n.context),
        (this.dynamicsCompressorNode = this.context.createDynamicsCompressor()),
        this.dynamicsCompressorNode.connect(this.context.destination),
        (this.gainNode = this.context.createGain()),
        this.gainNode.connect(this.dynamicsCompressorNode),
        (createjs.WebAudioSoundInstance.destinationNode = this.gainNode),
        (this._capabilities = n._capabilities),
        (this._loaderClass = createjs.WebAudioLoader),
        (this._soundInstanceClass = createjs.WebAudioSoundInstance),
        this._addPropsToClasses();
    }
    var t = createjs.extend(e, createjs.AbstractPlugin),
      n = e;
    (n._capabilities = null),
      (n._panningModel = "equalpower"),
      (n.context = null),
      (n.isSupported = function () {
        var e =
          createjs.BrowserDetect.isIOS ||
          createjs.BrowserDetect.isAndroid ||
          createjs.BrowserDetect.isBlackberry;
        return "file:" != location.protocol || e || this._isFileXHRSupported()
          ? (n._generateCapabilities(), null == n.context ? !1 : !0)
          : !1;
      }),
      (n.playEmptySound = function () {
        var e = n.context.createBufferSource();
        (e.buffer = n.context.createBuffer(1, 1, 22050)),
          e.connect(n.context.destination),
          e.start(0, 0, 0);
      }),
      (n._isFileXHRSupported = function () {
        var e = !0,
          t = new XMLHttpRequest();
        try {
          t.open("GET", "WebAudioPluginTest.fail", !1);
        } catch (n) {
          return (e = !1);
        }
        (t.onerror = function () {
          e = !1;
        }),
          (t.onload = function () {
            e =
              404 == this.status ||
              200 == this.status ||
              (0 == this.status && "" != this.response);
          });
        try {
          t.send();
        } catch (n) {
          e = !1;
        }
        return e;
      }),
      (n._generateCapabilities = function () {
        if (null == n._capabilities) {
          var e = document.createElement("audio");
          if (null == e.canPlayType) return null;
          if (null == n.context)
            if (window.AudioContext) n.context = new AudioContext();
            else {
              if (!window.webkitAudioContext) return null;
              n.context = new webkitAudioContext();
            }
          n._compatibilitySetUp(),
            n.playEmptySound(),
            (n._capabilities = { panning: !0, volume: !0, tracks: -1 });
          for (
            var t = createjs.Sound.SUPPORTED_EXTENSIONS,
              i = createjs.Sound.EXTENSION_MAP,
              r = 0,
              s = t.length;
            s > r;
            r++
          ) {
            var o = t[r],
              a = i[o] || o;
            n._capabilities[o] =
              ("no" != e.canPlayType("audio/" + o) &&
                "" != e.canPlayType("audio/" + o)) ||
              ("no" != e.canPlayType("audio/" + a) &&
                "" != e.canPlayType("audio/" + a));
          }
          n.context.destination.numberOfChannels < 2 &&
            (n._capabilities.panning = !1);
        }
      }),
      (n._compatibilitySetUp = function () {
        if (((n._panningModel = "equalpower"), !n.context.createGain)) {
          n.context.createGain = n.context.createGainNode;
          var e = n.context.createBufferSource();
          (e.__proto__.start = e.__proto__.noteGrainOn),
            (e.__proto__.stop = e.__proto__.noteOff),
            (n._panningModel = 0);
        }
      }),
      (t.toString = function () {
        return "[WebAudioPlugin]";
      }),
      (t._addPropsToClasses = function () {
        var e = this._soundInstanceClass;
        (e.context = this.context),
          (e.destinationNode = this.gainNode),
          (e._panningModel = this._panningModel),
          (this._loaderClass.context = this.context);
      }),
      (t._updateVolume = function () {
        var e = createjs.Sound._masterMute ? 0 : this._volume;
        e != this.gainNode.gain.value && (this.gainNode.gain.value = e);
      }),
      (createjs.WebAudioPlugin = createjs.promote(e, "AbstractPlugin"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e) {
      (this.src = e),
        (this.length = 0),
        (this.available = 0),
        (this.tags = []),
        (this.duration = 0);
    }
    var t = e.prototype;
    t.constructor = e;
    var n = e;
    (n.tags = {}),
      (n.get = function (t) {
        var i = n.tags[t];
        return null == i && (i = n.tags[t] = new e(t)), i;
      }),
      (n.remove = function (e) {
        var t = n.tags[e];
        return null == t ? !1 : (t.removeAll(), delete n.tags[e], !0);
      }),
      (n.getInstance = function (e) {
        var t = n.tags[e];
        return null == t ? null : t.get();
      }),
      (n.setInstance = function (e, t) {
        var i = n.tags[e];
        return null == i ? null : i.set(t);
      }),
      (n.getDuration = function (e) {
        var t = n.tags[e];
        return null == t ? 0 : t.getDuration();
      }),
      (t.add = function (e) {
        this.tags.push(e), this.length++, this.available++;
      }),
      (t.removeAll = function () {
        for (var e; this.length--; )
          (e = this.tags[this.length]),
            e.parentNode && e.parentNode.removeChild(e),
            delete this.tags[this.length];
        (this.src = null), (this.tags.length = 0);
      }),
      (t.get = function () {
        if (0 == this.tags.length) return null;
        this.available = this.tags.length;
        var e = this.tags.pop();
        return null == e.parentNode && document.body.appendChild(e), e;
      }),
      (t.set = function (e) {
        var t = createjs.indexOf(this.tags, e);
        -1 == t && this.tags.push(e), (this.available = this.tags.length);
      }),
      (t.getDuration = function () {
        return (
          this.duration ||
            (this.duration = 1e3 * this.tags[this.tags.length - 1].duration),
          this.duration
        );
      }),
      (t.toString = function () {
        return "[HTMLAudioTagPool]";
      }),
      (createjs.HTMLAudioTagPool = e);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e(e, t, n, i) {
      this.AbstractSoundInstance_constructor(e, t, n, i),
        (this._audioSpriteStopTime = null),
        (this._delayTimeoutId = null),
        (this._endedHandler = createjs.proxy(this._handleSoundComplete, this)),
        (this._readyHandler = createjs.proxy(this._handleTagReady, this)),
        (this._stalledHandler = createjs.proxy(this.playFailed, this)),
        (this._audioSpriteEndHandler = createjs.proxy(
          this._handleAudioSpriteLoop,
          this
        )),
        (this._loopHandler = createjs.proxy(this._handleSoundComplete, this)),
        n
          ? (this._audioSpriteStopTime = 0.001 * (t + n))
          : (this._duration = createjs.HTMLAudioTagPool.getDuration(this.src));
    }
    var t = createjs.extend(e, createjs.AbstractSoundInstance);
    (t.setMasterVolume = function () {
      this._updateVolume();
    }),
      (t.setMasterMute = function () {
        this._updateVolume();
      }),
      (t.toString = function () {
        return "[HTMLAudioSoundInstance]";
      }),
      (t._removeLooping = function () {
        null != this._playbackResource &&
          ((this._playbackResource.loop = !1),
          this._playbackResource.removeEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._loopHandler,
            !1
          ));
      }),
      (t._addLooping = function () {
        null == this._playbackResource ||
          this._audioSpriteStopTime ||
          (this._playbackResource.addEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._loopHandler,
            !1
          ),
          (this._playbackResource.loop = !0));
      }),
      (t._handleCleanUp = function () {
        var e = this._playbackResource;
        if (null != e) {
          e.pause(),
            (e.loop = !1),
            e.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_ENDED,
              this._endedHandler,
              !1
            ),
            e.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_READY,
              this._readyHandler,
              !1
            ),
            e.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_STALLED,
              this._stalledHandler,
              !1
            ),
            e.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_SEEKED,
              this._loopHandler,
              !1
            ),
            e.removeEventListener(
              createjs.HTMLAudioPlugin._TIME_UPDATE,
              this._audioSpriteEndHandler,
              !1
            );
          try {
            e.currentTime = this._startTime;
          } catch (t) {}
          createjs.HTMLAudioTagPool.setInstance(this.src, e),
            (this._playbackResource = null);
        }
      }),
      (t._beginPlaying = function (e, t, n, i) {
        return (
          (this._playbackResource = createjs.HTMLAudioTagPool.getInstance(
            this.src
          )),
          this.AbstractSoundInstance__beginPlaying(e, t, n, i)
        );
      }),
      (t._handleSoundReady = function () {
        if (4 !== this._playbackResource.readyState) {
          var e = this._playbackResource;
          return (
            e.addEventListener(
              createjs.HTMLAudioPlugin._AUDIO_READY,
              this._readyHandler,
              !1
            ),
            e.addEventListener(
              createjs.HTMLAudioPlugin._AUDIO_STALLED,
              this._stalledHandler,
              !1
            ),
            (e.preload = "auto"),
            void e.load()
          );
        }
        this._updateVolume(),
          (this._playbackResource.currentTime =
            0.001 * (this._startTime + this._position)),
          this._audioSpriteStopTime
            ? this._playbackResource.addEventListener(
                createjs.HTMLAudioPlugin._TIME_UPDATE,
                this._audioSpriteEndHandler,
                !1
              )
            : (this._playbackResource.addEventListener(
                createjs.HTMLAudioPlugin._AUDIO_ENDED,
                this._endedHandler,
                !1
              ),
              0 != this._loop &&
                (this._playbackResource.addEventListener(
                  createjs.HTMLAudioPlugin._AUDIO_SEEKED,
                  this._loopHandler,
                  !1
                ),
                (this._playbackResource.loop = !0))),
          this._playbackResource.play();
      }),
      (t._handleTagReady = function () {
        this._playbackResource.removeEventListener(
          createjs.HTMLAudioPlugin._AUDIO_READY,
          this._readyHandler,
          !1
        ),
          this._playbackResource.removeEventListener(
            createjs.HTMLAudioPlugin._AUDIO_STALLED,
            this._stalledHandler,
            !1
          ),
          this._handleSoundReady();
      }),
      (t._pause = function () {
        this._playbackResource.pause();
      }),
      (t._resume = function () {
        this._playbackResource.play();
      }),
      (t._updateVolume = function () {
        if (null != this._playbackResource) {
          var e =
            this._muted || createjs.Sound._masterMute
              ? 0
              : this._volume * createjs.Sound._masterVolume;
          e != this._playbackResource.volume &&
            (this._playbackResource.volume = e);
        }
      }),
      (t._calculateCurrentPosition = function () {
        return 1e3 * this._playbackResource.currentTime - this._startTime;
      }),
      (t._updatePosition = function () {
        this._playbackResource.removeEventListener(
          createjs.HTMLAudioPlugin._AUDIO_SEEKED,
          this._loopHandler,
          !1
        ),
          this._playbackResource.addEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._handleSetPositionSeek,
            !1
          );
        try {
          this._playbackResource.currentTime =
            0.001 * (this._position + this._startTime);
        } catch (e) {
          this._handleSetPositionSeek(null);
        }
      }),
      (t._handleSetPositionSeek = function () {
        null != this._playbackResource &&
          (this._playbackResource.removeEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._handleSetPositionSeek,
            !1
          ),
          this._playbackResource.addEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._loopHandler,
            !1
          ));
      }),
      (t._handleAudioSpriteLoop = function () {
        this._playbackResource.currentTime <= this._audioSpriteStopTime ||
          (this._playbackResource.pause(),
          0 == this._loop
            ? this._handleSoundComplete(null)
            : ((this._position = 0),
              this._loop--,
              (this._playbackResource.currentTime = 0.001 * this._startTime),
              this._paused || this._playbackResource.play(),
              this._sendEvent("loop")));
      }),
      (t._handleLoop = function () {
        0 == this._loop &&
          ((this._playbackResource.loop = !1),
          this._playbackResource.removeEventListener(
            createjs.HTMLAudioPlugin._AUDIO_SEEKED,
            this._loopHandler,
            !1
          ));
      }),
      (t._updateDuration = function () {
        (this._audioSpriteStopTime = 0.001 * (startTime + duration)),
          this.playState == createjs.Sound.PLAY_SUCCEEDED &&
            (this._playbackResource.removeEventListener(
              createjs.HTMLAudioPlugin._AUDIO_ENDED,
              this._endedHandler,
              !1
            ),
            this._playbackResource.addEventListener(
              createjs.HTMLAudioPlugin._TIME_UPDATE,
              this._audioSpriteEndHandler,
              !1
            ));
      }),
      (createjs.HTMLAudioSoundInstance = createjs.promote(
        e,
        "AbstractSoundInstance"
      ));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function e() {
      this.AbstractPlugin_constructor(),
        (this.defaultNumChannels = 2),
        (this._capabilities = n._capabilities),
        (this._loaderClass = createjs.SoundLoader),
        (this._soundInstanceClass = createjs.HTMLAudioSoundInstance);
    }
    var t = createjs.extend(e, createjs.AbstractPlugin),
      n = e;
    (n.MAX_INSTANCES = 30),
      (n._AUDIO_READY = "canplaythrough"),
      (n._AUDIO_ENDED = "ended"),
      (n._AUDIO_SEEKED = "seeked"),
      (n._AUDIO_STALLED = "stalled"),
      (n._TIME_UPDATE = "timeupdate"),
      (n._capabilities = null),
      (n.enableIOS = !1),
      (n.isSupported = function () {
        return n._generateCapabilities(), null == n._capabilities ? !1 : !0;
      }),
      (n._generateCapabilities = function () {
        if (null == n._capabilities) {
          var e = document.createElement("audio");
          if (null == e.canPlayType) return null;
          n._capabilities = { panning: !0, volume: !0, tracks: -1 };
          for (
            var t = createjs.Sound.SUPPORTED_EXTENSIONS,
              i = createjs.Sound.EXTENSION_MAP,
              r = 0,
              s = t.length;
            s > r;
            r++
          ) {
            var o = t[r],
              a = i[o] || o;
            n._capabilities[o] =
              ("no" != e.canPlayType("audio/" + o) &&
                "" != e.canPlayType("audio/" + o)) ||
              ("no" != e.canPlayType("audio/" + a) &&
                "" != e.canPlayType("audio/" + a));
          }
        }
      }),
      (t.register = function (e, t) {
        for (
          var n = createjs.HTMLAudioTagPool.get(e.src), i = null, r = 0;
          t > r;
          r++
        )
          (i = this._createTag(e.src)), n.add(i);
        var s = this.AbstractPlugin_register(e, t);
        return s.setTag(i), s;
      }),
      (t.removeSound = function (e) {
        this.AbstractPlugin_removeSound(e), createjs.HTMLAudioTagPool.remove(e);
      }),
      (t.create = function (e, t, n) {
        var i = this.AbstractPlugin_create(e, t, n);
        return i.setPlaybackResource(null), i;
      }),
      (t.toString = function () {
        return "[HTMLAudioPlugin]";
      }),
      (t.setVolume = t.getVolume = t.setMute = null),
      (t._createTag = function (e) {
        var t = document.createElement("audio");
        return (t.autoplay = !1), (t.preload = "none"), (t.src = e), t;
      }),
      (createjs.HTMLAudioPlugin = createjs.promote(e, "AbstractPlugin"));
  })(),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = window.Slick || {};
    (t = (function () {
      function t(t, i) {
        var r,
          s,
          o,
          a = this;
        if (
          ((a.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: e(t),
            appendDots: e(t),
            arrows: !0,
            asNavFor: null,
            prevArrow:
              '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
            nextArrow:
              '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (e, t) {
              return (
                '<button type="button" data-role="none">' +
                (t + 1) +
                "</button>"
              );
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: 0.35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rtl: !1,
            slide: "",
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            variableWidth: !1,
            vertical: !1,
            waitForAnimate: !0,
          }),
          (a.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
          }),
          e.extend(a, a.initials),
          (a.activeBreakpoint = null),
          (a.animType = null),
          (a.animProp = null),
          (a.breakpoints = []),
          (a.breakpointSettings = []),
          (a.cssTransitions = !1),
          (a.hidden = "hidden"),
          (a.paused = !1),
          (a.positionProp = null),
          (a.respondTo = null),
          (a.shouldClick = !0),
          (a.$slider = e(t)),
          (a.$slidesCache = null),
          (a.transformType = null),
          (a.transitionType = null),
          (a.visibilityChange = "visibilitychange"),
          (a.windowWidth = 0),
          (a.windowTimer = null),
          (r = e(t).data("slick") || {}),
          (a.options = e.extend({}, a.defaults, r, i)),
          (a.currentSlide = a.options.initialSlide),
          (a.originalSettings = a.options),
          (s = a.options.responsive || null),
          s && s.length > -1)
        ) {
          a.respondTo = a.options.respondTo || "window";
          for (o in s)
            s.hasOwnProperty(o) &&
              (a.breakpoints.push(s[o].breakpoint),
              (a.breakpointSettings[s[o].breakpoint] = s[o].settings));
          a.breakpoints.sort(function (e, t) {
            return a.options.mobileFirst === !0 ? e - t : t - e;
          });
        }
        "undefined" != typeof document.mozHidden
          ? ((a.hidden = "mozHidden"),
            (a.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.msHidden
          ? ((a.hidden = "msHidden"),
            (a.visibilityChange = "msvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((a.hidden = "webkitHidden"),
            (a.visibilityChange = "webkitvisibilitychange")),
          (a.autoPlay = e.proxy(a.autoPlay, a)),
          (a.autoPlayClear = e.proxy(a.autoPlayClear, a)),
          (a.changeSlide = e.proxy(a.changeSlide, a)),
          (a.clickHandler = e.proxy(a.clickHandler, a)),
          (a.selectHandler = e.proxy(a.selectHandler, a)),
          (a.setPosition = e.proxy(a.setPosition, a)),
          (a.swipeHandler = e.proxy(a.swipeHandler, a)),
          (a.dragHandler = e.proxy(a.dragHandler, a)),
          (a.keyHandler = e.proxy(a.keyHandler, a)),
          (a.autoPlayIterator = e.proxy(a.autoPlayIterator, a)),
          (a.instanceUid = n++),
          (a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          a.init(),
          a.checkResponsive(!0);
      }
      var n = 0;
      return t;
    })()),
      (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var r = this;
        if ("boolean" == typeof n) (i = n), (n = null);
        else if (0 > n || n >= r.slideCount) return !1;
        r.unload(),
          "number" == typeof n
            ? 0 === n && 0 === r.$slides.length
              ? e(t).appendTo(r.$slideTrack)
              : i
              ? e(t).insertBefore(r.$slides.eq(n))
              : e(t).insertAfter(r.$slides.eq(n))
            : i === !0
            ? e(t).prependTo(r.$slideTrack)
            : e(t).appendTo(r.$slideTrack),
          (r.$slides = r.$slideTrack.children(this.options.slide)),
          r.$slideTrack.children(this.options.slide).detach(),
          r.$slideTrack.append(r.$slides),
          r.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t);
          }),
          (r.$slidesCache = r.$slides),
          r.reinit();
      }),
      (t.prototype.animateHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          e.options.adaptiveHeight === !0 &&
          e.options.vertical === !1
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          r = this;
        r.animateHeight(),
          r.options.rtl === !0 && r.options.vertical === !1 && (t = -t),
          r.transformsEnabled === !1
            ? r.options.vertical === !1
              ? r.$slideTrack.animate(
                  { left: t },
                  r.options.speed,
                  r.options.easing,
                  n
                )
              : r.$slideTrack.animate(
                  { top: t },
                  r.options.speed,
                  r.options.easing,
                  n
                )
            : r.cssTransitions === !1
            ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft),
              e({ animStart: r.currentLeft }).animate(
                { animStart: t },
                {
                  duration: r.options.speed,
                  easing: r.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      r.options.vertical === !1
                        ? ((i[r.animType] = "translate(" + e + "px, 0px)"),
                          r.$slideTrack.css(i))
                        : ((i[r.animType] = "translate(0px," + e + "px)"),
                          r.$slideTrack.css(i));
                  },
                  complete: function () {
                    n && n.call();
                  },
                }
              ))
            : (r.applyTransition(),
              (t = Math.ceil(t)),
              r.options.vertical === !1
                ? (i[r.animType] = "translate3d(" + t + "px, 0px, 0px)")
                : (i[r.animType] = "translate3d(0px," + t + "px, 0px)"),
              r.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  r.disableTransition(), n.call();
                }, r.options.speed));
      }),
      (t.prototype.asNavFor = function (t) {
        var n = this,
          i =
            null !== n.options.asNavFor
              ? e(n.options.asNavFor).slick("getSlick")
              : null;
        null !== i && i.slideHandler(t, !0);
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        t.options.fade === !1
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer),
          e.slideCount > e.options.slidesToShow &&
            e.paused !== !0 &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this;
        e.options.infinite === !1
          ? 1 === e.direction
            ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0),
              e.slideHandler(e.currentSlide + e.options.slidesToScroll))
            : (e.currentSlide - 1 === 0 && (e.direction = 1),
              e.slideHandler(e.currentSlide - e.options.slidesToScroll))
          : e.slideHandler(e.currentSlide + e.options.slidesToScroll);
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        t.options.arrows === !0 &&
          t.slideCount > t.options.slidesToShow &&
          ((t.$prevArrow = e(t.options.prevArrow)),
          (t.$nextArrow = e(t.options.nextArrow)),
          t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.appendTo(t.options.appendArrows),
          t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.appendTo(t.options.appendArrows),
          t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"));
      }),
      (t.prototype.buildDots = function () {
        var t,
          n,
          i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
          for (
            n = '<ul class="' + i.options.dotsClass + '">', t = 0;
            t <= i.getDotCount();
            t += 1
          )
            n += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
          (n += "</ul>"),
            (i.$dots = e(n).appendTo(i.options.appendDots)),
            i.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false");
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t);
          }),
          (t.$slidesCache = t.$slides),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          t.$slideTrack.css("opacity", 0),
          (t.options.centerMode === !0 || t.options.swipeToSlide === !0) &&
            (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.options.accessibility === !0 && t.$list.prop("tabIndex", 0),
          t.setSlideClasses(
            "number" == typeof this.currentSlide ? this.currentSlide : 0
          ),
          t.options.draggable === !0 && t.$list.addClass("draggable");
      }),
      (t.prototype.checkResponsive = function (t) {
        var n,
          i,
          r,
          s = this,
          o = s.$slider.width(),
          a = window.innerWidth || e(window).width();
        if (
          ("window" === s.respondTo
            ? (r = a)
            : "slider" === s.respondTo
            ? (r = o)
            : "min" === s.respondTo && (r = Math.min(a, o)),
          s.originalSettings.responsive &&
            s.originalSettings.responsive.length > -1 &&
            null !== s.originalSettings.responsive)
        ) {
          i = null;
          for (n in s.breakpoints)
            s.breakpoints.hasOwnProperty(n) &&
              (s.originalSettings.mobileFirst === !1
                ? r < s.breakpoints[n] && (i = s.breakpoints[n])
                : r > s.breakpoints[n] && (i = s.breakpoints[n]));
          null !== i
            ? null !== s.activeBreakpoint
              ? i !== s.activeBreakpoint &&
                ((s.activeBreakpoint = i),
                "unslick" === s.breakpointSettings[i]
                  ? s.unslick()
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[i]
                    )),
                    t === !0 && (s.currentSlide = s.options.initialSlide),
                    s.refresh()))
              : ((s.activeBreakpoint = i),
                "unslick" === s.breakpointSettings[i]
                  ? s.unslick()
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[i]
                    )),
                    t === !0 && (s.currentSlide = s.options.initialSlide),
                    s.refresh()))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              t === !0 && (s.currentSlide = s.options.initialSlide),
              s.refresh());
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i,
          r,
          s,
          o = this,
          a = e(t.target);
        switch (
          (a.is("a") && t.preventDefault(),
          (s = o.slideCount % o.options.slidesToScroll !== 0),
          (i = s
            ? 0
            : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (r =
              0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide - r, !1, n);
            break;
          case "next":
            (r = 0 === i ? o.options.slidesToScroll : i),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide + r, !1, n);
            break;
          case "index":
            var l =
              0 === t.data.index
                ? 0
                : t.data.index ||
                  e(t.target).parent().index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(l), !1, n);
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t,
          n,
          i = this;
        if (((t = i.getNavigableIndexes()), (n = 0), e > t[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var r in t) {
            if (e < t[r]) {
              e = n;
              break;
            }
            n = t[r];
          }
        return e;
      }),
      (t.prototype.clickHandler = function (e) {
        var t = this;
        t.shouldClick === !1 &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (t.prototype.destroy = function () {
        var t = this;
        t.autoPlayClear(),
          (t.touchObject = {}),
          e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            "object" != typeof t.options.prevArrow &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            "object" != typeof t.options.nextArrow &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-center slick-visible")
            .attr("aria-hidden", "true")
            .removeAttr("data-slick-index")
            .css({
              position: "",
              left: "",
              top: "",
              zIndex: "",
              opacity: "",
              width: "",
            }),
          t.$slider.removeClass("slick-slider"),
          t.$slider.removeClass("slick-initialized"),
          t.$list.off(".slick"),
          e(window).off(".slick-" + t.instanceUid),
          e(document).off(".slick-" + t.instanceUid),
          t.$slider.html(t.$slides);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ""),
          t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this;
        n.cssTransitions === !1
          ? (n.$slides.eq(e).css({ zIndex: 1e3 }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: 1e3 }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e &&
          (t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(e).appendTo(t.$slideTrack),
          t.reinit());
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        var e = this;
        return e.currentSlide;
      }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (e.options.infinite === !0)
          i = Math.ceil(e.slideCount / e.options.slidesToScroll);
        else if (e.options.centerMode === !0) i = e.slideCount;
        else
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToShow),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        return i - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          n,
          i,
          r = this,
          s = 0;
        return (
          (r.slideOffset = 0),
          (n = r.$slides.first().outerHeight()),
          r.options.infinite === !0
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (s = n * r.options.slidesToShow * -1)),
              r.slideCount % r.options.slidesToScroll !== 0 &&
                e + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (e > r.slideCount
                  ? ((r.slideOffset =
                      (r.options.slidesToShow - (e - r.slideCount)) *
                      r.slideWidth *
                      -1),
                    (s =
                      (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                  : ((r.slideOffset =
                      (r.slideCount % r.options.slidesToScroll) *
                      r.slideWidth *
                      -1),
                    (s = (r.slideCount % r.options.slidesToScroll) * n * -1))))
            : e + r.options.slidesToShow > r.slideCount &&
              ((r.slideOffset =
                (e + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (s = (e + r.options.slidesToShow - r.slideCount) * n)),
          r.slideCount <= r.options.slidesToShow &&
            ((r.slideOffset = 0), (s = 0)),
          r.options.centerMode === !0 && r.options.infinite === !0
            ? (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2) -
                r.slideWidth)
            : r.options.centerMode === !0 &&
              ((r.slideOffset = 0),
              (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (t =
            r.options.vertical === !1
              ? e * r.slideWidth * -1 + r.slideOffset
              : e * n * -1 + s),
          r.options.variableWidth === !0 &&
            ((i =
              r.slideCount <= r.options.slidesToShow ||
              r.options.infinite === !1
                ? r.$slideTrack.children(".slick-slide").eq(e)
                : r.$slideTrack
                    .children(".slick-slide")
                    .eq(e + r.options.slidesToShow)),
            (t = i[0] ? -1 * i[0].offsetLeft : 0),
            r.options.centerMode === !0 &&
              ((i =
                r.options.infinite === !1
                  ? r.$slideTrack.children(".slick-slide").eq(e)
                  : r.$slideTrack
                      .children(".slick-slide")
                      .eq(e + r.options.slidesToShow + 1)),
              (t = i[0] ? -1 * i[0].offsetLeft : 0),
              (t += (r.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        var t = this;
        return t.options[e];
      }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          r = [];
        for (
          t.options.infinite === !1
            ? ((e = t.slideCount - t.options.slidesToShow + 1),
              t.options.centerMode === !0 && (e = t.slideCount))
            : ((n = -1 * t.slideCount),
              (i = -1 * t.slideCount),
              (e = 2 * t.slideCount));
          e > n;

        )
          r.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return r;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          n,
          i,
          r = this;
        return (
          (i =
            r.options.centerMode === !0
              ? r.slideWidth * Math.floor(r.options.slidesToShow / 2)
              : 0),
          r.options.swipeToSlide === !0
            ? (r.$slideTrack.find(".slick-slide").each(function (t, s) {
                return s.offsetLeft - i + e(s).outerWidth() / 2 >
                  -1 * r.swipeLeft
                  ? ((n = s), !1)
                  : void 0;
              }),
              (t =
                Math.abs(e(n).attr("data-slick-index") - r.currentSlide) || 1))
            : r.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        var n = this;
        n.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
      }),
      (t.prototype.init = function () {
        var t = this;
        e(t.$slider).hasClass("slick-initialized") ||
          (e(t.$slider).addClass("slick-initialized"),
          t.buildOut(),
          t.setProps(),
          t.startLoad(),
          t.loadSlider(),
          t.initializeEvents(),
          t.updateArrows(),
          t.updateDots()),
          t.$slider.trigger("init", [t]);
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.on(
            "click.slick",
            { message: "previous" },
            e.changeSlide
          ),
          e.$nextArrow.on("click.slick", { message: "next" }, e.changeSlide));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        t.options.dots === !0 &&
          t.slideCount > t.options.slidesToShow &&
          e("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          t.options.dots === !0 &&
            t.options.pauseOnDotsHover === !0 &&
            t.options.autoplay === !0 &&
            e("li", t.$dots)
              .on("mouseenter.slick", function () {
                (t.paused = !0), t.autoPlayClear();
              })
              .on("mouseleave.slick", function () {
                (t.paused = !1), t.autoPlay();
              });
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          t.options.autoplay === !0 &&
            (e(document).on(t.visibilityChange, function () {
              t.visibility();
            }),
            t.options.pauseOnHover === !0 &&
              (t.$list.on("mouseenter.slick", function () {
                (t.paused = !0), t.autoPlayClear();
              }),
              t.$list.on("mouseleave.slick", function () {
                (t.paused = !1), t.autoPlay();
              }))),
          t.options.accessibility === !0 &&
            t.$list.on("keydown.slick", t.keyHandler),
          t.options.focusOnSelect === !0 &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          e(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            function () {
              t.checkResponsive(), t.setPosition();
            }
          ),
          e(window).on("resize.slick.slick-" + t.instanceUid, function () {
            e(window).width() !== t.windowWidth &&
              (clearTimeout(t.windowDelay),
              (t.windowDelay = window.setTimeout(function () {
                (t.windowWidth = e(window).width()),
                  t.checkResponsive(),
                  t.setPosition();
              }, 50)));
          }),
          e("*[draggable!=true]", t.$slideTrack).on("dragstart", function (e) {
            e.preventDefault();
          }),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          e.options.dots === !0 &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show(),
          e.options.autoplay === !0 && e.autoPlay();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        37 === e.keyCode && t.options.accessibility === !0
          ? t.changeSlide({ data: { message: "previous" } })
          : 39 === e.keyCode &&
            t.options.accessibility === !0 &&
            t.changeSlide({ data: { message: "next" } });
      }),
      (t.prototype.lazyLoad = function () {
        function t(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
              n = e(this).attr("data-lazy");
            t.load(function () {
              t.animate({ opacity: 1 }, 200);
            })
              .css({ opacity: 0 })
              .attr("src", n)
              .removeAttr("data-lazy")
              .removeClass("slick-loading");
          });
        }
        var n,
          i,
          r,
          s,
          o = this;
        o.options.centerMode === !0
          ? o.options.infinite === !0
            ? ((r = o.currentSlide + (o.options.slidesToShow / 2 + 1)),
              (s = r + o.options.slidesToShow + 2))
            : ((r = Math.max(
                0,
                o.currentSlide - (o.options.slidesToShow / 2 + 1)
              )),
              (s = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide))
          : ((r = o.options.infinite
              ? o.options.slidesToShow + o.currentSlide
              : o.currentSlide),
            (s = r + o.options.slidesToShow),
            o.options.fade === !0 && (r > 0 && r--, s <= o.slideCount && s++)),
          (n = o.$slider.find(".slick-slide").slice(r, s)),
          t(n),
          o.slideCount <= o.options.slidesToShow
            ? ((i = o.$slider.find(".slick-slide")), t(i))
            : o.currentSlide >= o.slideCount - o.options.slidesToShow
            ? ((i = o.$slider
                .find(".slick-cloned")
                .slice(0, o.options.slidesToShow)),
              t(i))
            : 0 === o.currentSlide &&
              ((i = o.$slider
                .find(".slick-cloned")
                .slice(-1 * o.options.slidesToShow)),
              t(i));
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext = function () {
        var e = this;
        e.changeSlide({ data: { message: "next" } });
      }),
      (t.prototype.pause = t.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), (e.paused = !0);
      }),
      (t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        (e.paused = !1), e.autoPlay();
      }),
      (t.prototype.postSlide = function (e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]),
          (t.animating = !1),
          t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay === !0 && t.paused === !1 && t.autoPlay();
      }),
      (t.prototype.prev = t.prototype.slickPrev = function () {
        var e = this;
        e.changeSlide({ data: { message: "previous" } });
      }),
      (t.prototype.progressiveLazyLoad = function () {
        var t,
          n,
          i = this;
        (t = e("img[data-lazy]", i.$slider).length),
          t > 0 &&
            ((n = e("img[data-lazy]", i.$slider).first()),
            n
              .attr("src", n.attr("data-lazy"))
              .removeClass("slick-loading")
              .load(function () {
                n.removeAttr("data-lazy"),
                  i.progressiveLazyLoad(),
                  i.options.adaptiveHeight === !0 && i.setPosition();
              })
              .error(function () {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad();
              }));
      }),
      (t.prototype.refresh = function () {
        var t = this,
          n = t.currentSlide;
        t.destroy(),
          e.extend(t, t.initials),
          t.init(),
          t.changeSlide({ data: { message: "index", index: n } }, !0);
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.options.focusOnSelect === !0 &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(0),
          t.setPosition(),
          t.$slider.trigger("reInit", [t]);
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this;
        return (
          "boolean" == typeof e
            ? ((t = e), (e = t === !0 ? 0 : i.slideCount - 1))
            : (e = t === !0 ? --e : e),
          i.slideCount < 1 || 0 > e || e > i.slideCount - 1
            ? !1
            : (i.unload(),
              n === !0
                ? i.$slideTrack.children().remove()
                : i.$slideTrack.children(this.options.slide).eq(e).remove(),
              (i.$slides = i.$slideTrack.children(this.options.slide)),
              i.$slideTrack.children(this.options.slide).detach(),
              i.$slideTrack.append(i.$slides),
              (i.$slidesCache = i.$slides),
              void i.reinit())
        );
      }),
      (t.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          r = {};
        i.options.rtl === !0 && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (r[i.positionProp] = e),
          i.transformsEnabled === !1
            ? i.$slideTrack.css(r)
            : ((r = {}),
              i.cssTransitions === !1
                ? ((r[i.animType] = "translate(" + t + ", " + n + ")"),
                  i.$slideTrack.css(r))
                : ((r[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                  i.$slideTrack.css(r)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        if (
          (e.options.vertical === !1
            ? e.options.centerMode === !0 &&
              e.$list.css({ padding: "0px " + e.options.centerPadding })
            : (e.$list.height(
                e.$slides.first().outerHeight(!0) * e.options.slidesToShow
              ),
              e.options.centerMode === !0 &&
                e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          e.options.vertical === !1 && e.options.variableWidth === !1)
        )
          (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
            e.$slideTrack.width(
              Math.ceil(
                e.slideWidth * e.$slideTrack.children(".slick-slide").length
              )
            );
        else if (e.options.variableWidth === !0) {
          var t = 0;
          (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
            e.$slideTrack.children(".slick-slide").each(function () {
              t += e.listWidth;
            }),
            e.$slideTrack.width(Math.ceil(t) + 1);
        } else
          (e.slideWidth = Math.ceil(e.listWidth)),
            e.$slideTrack.height(
              Math.ceil(
                e.$slides.first().outerHeight(!0) *
                  e.$slideTrack.children(".slick-slide").length
              )
            );
        var n = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - n);
      }),
      (t.prototype.setFade = function () {
        var t,
          n = this;
        n.$slides.each(function (i, r) {
          (t = n.slideWidth * i * -1),
            n.options.rtl === !0
              ? e(r).css({
                  position: "relative",
                  right: t,
                  top: 0,
                  zIndex: 800,
                  opacity: 0,
                })
              : e(r).css({
                  position: "relative",
                  left: t,
                  top: 0,
                  zIndex: 800,
                  opacity: 0,
                });
        }),
          n.$slides.eq(n.currentSlide).css({ zIndex: 900, opacity: 1 });
      }),
      (t.prototype.setHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          e.options.adaptiveHeight === !0 &&
          e.options.vertical === !1
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption = function (e, t, n) {
        var i = this;
        (i.options[e] = t), n === !0 && (i.unload(), i.reinit());
      }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          e.options.fade === !1
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = e.options.vertical === !0 ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 !== t.WebkitTransition ||
            void 0 !== t.MozTransition ||
            void 0 !== t.msTransition) &&
            e.options.useCSS === !0 &&
            (e.cssTransitions = !0),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            e.animType !== !1 &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled = null !== e.animType && e.animType !== !1);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          r,
          s = this;
        s.$slider
          .find(".slick-slide")
          .removeClass("slick-active")
          .attr("aria-hidden", "true")
          .removeClass("slick-center"),
          (n = s.$slider.find(".slick-slide")),
          s.options.centerMode === !0
            ? ((t = Math.floor(s.options.slidesToShow / 2)),
              s.options.infinite === !0 &&
                (e >= t && e <= s.slideCount - 1 - t
                  ? s.$slides
                      .slice(e - t, e + t + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((i = s.options.slidesToShow + e),
                    n
                      .slice(i - t + 1, i + t + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === e
                  ? n
                      .eq(n.length - 1 - s.options.slidesToShow)
                      .addClass("slick-center")
                  : e === s.slideCount - 1 &&
                    n.eq(s.options.slidesToShow).addClass("slick-center")),
              s.$slides.eq(e).addClass("slick-center"))
            : e >= 0 && e <= s.slideCount - s.options.slidesToShow
            ? s.$slides
                .slice(e, e + s.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : n.length <= s.options.slidesToShow
            ? n.addClass("slick-active").attr("aria-hidden", "false")
            : ((r = s.slideCount % s.options.slidesToShow),
              (i = s.options.infinite === !0 ? s.options.slidesToShow + e : e),
              s.options.slidesToShow == s.options.slidesToScroll &&
              s.slideCount - e < s.options.slidesToShow
                ? n
                    .slice(i - (s.options.slidesToShow - r), i + r)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : n
                    .slice(i, i + s.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
          "ondemand" === s.options.lazyLoad && s.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          n,
          i,
          r = this;
        if (
          (r.options.fade === !0 && (r.options.centerMode = !1),
          r.options.infinite === !0 &&
            r.options.fade === !1 &&
            ((n = null), r.slideCount > r.options.slidesToShow))
        ) {
          for (
            i =
              r.options.centerMode === !0
                ? r.options.slidesToShow + 1
                : r.options.slidesToShow,
              t = r.slideCount;
            t > r.slideCount - i;
            t -= 1
          )
            (n = t - 1),
              e(r.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n - r.slideCount)
                .prependTo(r.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; i > t; t += 1)
            (n = t),
              e(r.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n + r.slideCount)
                .appendTo(r.$slideTrack)
                .addClass("slick-cloned");
          r.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = parseInt(
            e(t.target).parents(".slick-slide").attr("data-slick-index")
          );
        return (
          i || (i = 0),
          n.slideCount <= n.options.slidesToShow
            ? (n.$slider
                .find(".slick-slide")
                .removeClass("slick-active")
                .attr("aria-hidden", "true"),
              n.$slides
                .eq(i)
                .addClass("slick-active")
                .attr("aria-hidden", "false"),
              n.options.centerMode === !0 &&
                (n.$slider.find(".slick-slide").removeClass("slick-center"),
                n.$slides.eq(i).addClass("slick-center")),
              void n.asNavFor(i))
            : void n.slideHandler(i)
        );
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          r,
          s,
          o,
          a = null,
          l = this;
        return (
          (t = t || !1),
          (l.animating === !0 && l.options.waitForAnimate === !0) ||
          (l.options.fade === !0 && l.currentSlide === e) ||
          l.slideCount <= l.options.slidesToShow
            ? void 0
            : (t === !1 && l.asNavFor(e),
              (i = e),
              (a = l.getLeft(i)),
              (o = l.getLeft(l.currentSlide)),
              (l.currentLeft = null === l.swipeLeft ? o : l.swipeLeft),
              l.options.infinite === !1 &&
              l.options.centerMode === !1 &&
              (0 > e || e > l.getDotCount() * l.options.slidesToScroll)
                ? void (
                    l.options.fade === !1 &&
                    ((i = l.currentSlide),
                    n !== !0
                      ? l.animateSlide(o, function () {
                          l.postSlide(i);
                        })
                      : l.postSlide(i))
                  )
                : l.options.infinite === !1 &&
                  l.options.centerMode === !0 &&
                  (0 > e || e > l.slideCount - l.options.slidesToScroll)
                ? void (
                    l.options.fade === !1 &&
                    ((i = l.currentSlide),
                    n !== !0
                      ? l.animateSlide(o, function () {
                          l.postSlide(i);
                        })
                      : l.postSlide(i))
                  )
                : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer),
                  (r =
                    0 > i
                      ? l.slideCount % l.options.slidesToScroll !== 0
                        ? l.slideCount -
                          (l.slideCount % l.options.slidesToScroll)
                        : l.slideCount + i
                      : i >= l.slideCount
                      ? l.slideCount % l.options.slidesToScroll !== 0
                        ? 0
                        : i - l.slideCount
                      : i),
                  (l.animating = !0),
                  l.$slider.trigger("beforeChange", [l, l.currentSlide, r]),
                  (s = l.currentSlide),
                  (l.currentSlide = r),
                  l.setSlideClasses(l.currentSlide),
                  l.updateDots(),
                  l.updateArrows(),
                  l.options.fade === !0
                    ? (n !== !0
                        ? l.fadeSlide(r, function () {
                            l.postSlide(r);
                          })
                        : l.postSlide(r),
                      void l.animateHeight())
                    : void (n !== !0
                        ? l.animateSlide(a, function () {
                            l.postSlide(r);
                          })
                        : l.postSlide(r))))
        );
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          e.options.dots === !0 &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          r = this;
        return (
          (e = r.touchObject.startX - r.touchObject.curX),
          (t = r.touchObject.startY - r.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)),
          0 > i && (i = 360 - Math.abs(i)),
          45 >= i && i >= 0
            ? r.options.rtl === !1
              ? "left"
              : "right"
            : 360 >= i && i >= 315
            ? r.options.rtl === !1
              ? "left"
              : "right"
            : i >= 135 && 225 >= i
            ? r.options.rtl === !1
              ? "right"
              : "left"
            : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function (e) {
        var t,
          n = this;
        if (
          ((n.dragging = !1),
          (n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0),
          void 0 === n.touchObject.curX)
        )
          return !1;
        if (
          (n.touchObject.edgeHit === !0 &&
            n.$slider.trigger("edge", [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        )
          switch (n.swipeDirection()) {
            case "left":
              (t = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                n.slideHandler(t),
                (n.currentDirection = 0),
                (n.touchObject = {}),
                n.$slider.trigger("swipe", [n, "left"]);
              break;
            case "right":
              (t = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                n.slideHandler(t),
                (n.currentDirection = 1),
                (n.touchObject = {}),
                n.$slider.trigger("swipe", [n, "right"]);
          }
        else
          n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            t.options.swipe === !1 ||
            ("ontouchend" in document && t.options.swipe === !1) ||
            (t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          r,
          s,
          o = this;
        return (
          (s = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !o.dragging || (s && 1 !== s.length)
            ? !1
            : ((t = o.getLeft(o.currentSlide)),
              (o.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX),
              (o.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY),
              (o.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(o.touchObject.curX - o.touchObject.startX, 2)
                )
              )),
              (n = o.swipeDirection()),
              "vertical" !== n
                ? (void 0 !== e.originalEvent &&
                    o.touchObject.swipeLength > 4 &&
                    e.preventDefault(),
                  (r =
                    (o.options.rtl === !1 ? 1 : -1) *
                    (o.touchObject.curX > o.touchObject.startX ? 1 : -1)),
                  (i = o.touchObject.swipeLength),
                  (o.touchObject.edgeHit = !1),
                  o.options.infinite === !1 &&
                    ((0 === o.currentSlide && "right" === n) ||
                      (o.currentSlide >= o.getDotCount() && "left" === n)) &&
                    ((i = o.touchObject.swipeLength * o.options.edgeFriction),
                    (o.touchObject.edgeHit = !0)),
                  o.options.vertical === !1
                    ? (o.swipeLeft = t + i * r)
                    : (o.swipeLeft =
                        t + i * (o.$list.height() / o.listWidth) * r),
                  o.options.fade === !0 || o.options.touchMove === !1
                    ? !1
                    : o.animating === !0
                    ? ((o.swipeLeft = null), !1)
                    : void o.setCSS(o.swipeLeft))
                : void 0)
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          n = this;
        return 1 !== n.touchObject.fingerCount ||
          n.slideCount <= n.options.slidesToShow
          ? ((n.touchObject = {}), !1)
          : (void 0 !== e.originalEvent &&
              void 0 !== e.originalEvent.touches &&
              (t = e.originalEvent.touches[0]),
            (n.touchObject.startX = n.touchObject.curX =
              void 0 !== t ? t.pageX : e.clientX),
            (n.touchObject.startY = n.touchObject.curY =
              void 0 !== t ? t.pageY : e.clientY),
            void (n.dragging = !0));
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
      (t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            "object" != typeof t.options.prevArrow &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            "object" != typeof t.options.nextArrow &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (t.prototype.unslick = function () {
        var e = this;
        e.destroy();
      }),
      (t.prototype.updateArrows = function () {
        var e,
          t = this;
        (e = Math.floor(t.options.slidesToShow / 2)),
          t.options.arrows === !0 &&
            t.options.infinite !== !0 &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow.removeClass("slick-disabled"),
            t.$nextArrow.removeClass("slick-disabled"),
            0 === t.currentSlide
              ? (t.$prevArrow.addClass("slick-disabled"),
                t.$nextArrow.removeClass("slick-disabled"))
              : t.currentSlide >= t.slideCount - t.options.slidesToShow &&
                t.options.centerMode === !1
              ? (t.$nextArrow.addClass("slick-disabled"),
                t.$prevArrow.removeClass("slick-disabled"))
              : t.currentSlide >= t.slideCount - 1 &&
                t.options.centerMode === !0 &&
                (t.$nextArrow.addClass("slick-disabled"),
                t.$prevArrow.removeClass("slick-disabled")));
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots
            .find("li")
            .removeClass("slick-active")
            .attr("aria-hidden", "true"),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active")
            .attr("aria-hidden", "false"));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        document[e.hidden]
          ? ((e.paused = !0), e.autoPlayClear())
          : ((e.paused = !1), e.autoPlay());
      }),
      (e.fn.slick = function () {
        var e,
          n = this,
          i = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = n.length,
          o = 0;
        for (o; s > o; o++)
          if (
            ("object" == typeof i || "undefined" == typeof i
              ? (n[o].slick = new t(n[o], i))
              : (e = n[o].slick[i].apply(n[o].slick, r)),
            "undefined" != typeof e)
          )
            return e;
        return n;
      }),
      e(function () {
        e("[data-slick]").slick();
      });
  });
