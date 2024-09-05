!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t(require("React"), require("ReactDOM"));
  else if ("function" == typeof define && define.amd)
    define(["React", "ReactDOM"], t);
  else {
    var n =
      "object" == typeof exports
        ? t(require("React"), require("ReactDOM"))
        : t(e.React, e.ReactDOM);
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(self, (e, t) =>
  (() => {
    "use strict";
    var n = {
        883: (t) => {
          t.exports = e;
        },
        845: (e) => {
          e.exports = t;
        },
      },
      r = {};
    function o(e) {
      var t = r[e];
      if (void 0 !== t) return t.exports;
      var s = (r[e] = { exports: {} });
      return n[e](s, s.exports, o), s.exports;
    }
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
      (o.d = (e, t) => {
        for (var n in t)
          o.o(t, n) &&
            !o.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
    var s = o(883),
      i = o.n(s),
      a = o(845),
      c = o.n(a),
      p = Object.defineProperty,
      u = (e, t, n) => (
        ((e, t, n) => {
          t in e
            ? p(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        })(e, "symbol" != typeof t ? t + "" : t, n),
        n
      );
    const l = {
      string: { stringify: (e) => e, parse: (e) => e },
      number: { stringify: (e) => `${e}`, parse: (e) => parseFloat(e) },
      boolean: {
        stringify: (e) => (e ? "true" : "false"),
        parse: (e) => /^[ty1-9]/i.test(e),
      },
      function: {
        stringify: (e) => e.name,
        parse: (e, t, n) => {
          const r =
            typeof window < "u" && e in window
              ? window[e]
              : typeof global < "u" && e in global
              ? global[e]
              : void 0;
          return "function" == typeof r ? r.bind(n) : void 0;
        },
      },
      json: {
        stringify: (e) => JSON.stringify(e),
        parse: (e) => JSON.parse(e),
      },
    };
    function f(e) {
      return e.replace(
        /([a-z0-9])([A-Z])/g,
        (e, t, n) => `${t}-${n.toLowerCase()}`
      );
    }
    const d = Symbol.for("r2wc.render"),
      h = Symbol.for("r2wc.connected"),
      m = Symbol.for("r2wc.context"),
      b = Symbol.for("r2wc.props");
    function y(e, t, n) {
      var r, o, s;
      t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []);
      const i = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props),
        a = {},
        c = {},
        p = {};
      for (const e of i) {
        a[e] = Array.isArray(t.props) ? "string" : t.props[e];
        const n = f(e);
        (c[e] = n), (p[n] = e);
      }
      class y extends HTMLElement {
        constructor() {
          super(),
            u(this, r, !0),
            u(this, o),
            u(this, s, {}),
            u(this, "container"),
            t.shadow
              ? (this.container = this.attachShadow({ mode: t.shadow }))
              : (this.container = this),
            (this[b].container = this.container);
          for (const e of i) {
            const t = c[e],
              n = this.getAttribute(t),
              r = a[e],
              o = r ? l[r] : null;
            null != o && o.parse && n && (this[b][e] = o.parse(n, t, this));
          }
        }
        static get observedAttributes() {
          return Object.keys(p);
        }
        connectedCallback() {
          (this[h] = !0), this[d]();
        }
        disconnectedCallback() {
          (this[h] = !1), this[m] && n.unmount(this[m]), delete this[m];
        }
        attributeChangedCallback(e, t, n) {
          const r = p[e],
            o = a[r],
            s = o ? l[o] : null;
          r in a &&
            null != s &&
            s.parse &&
            n &&
            ((this[b][r] = s.parse(n, e, this)), this[d]());
        }
        [((r = h), (o = m), (s = b), d)]() {
          this[h] &&
            (this[m]
              ? n.update(this[m], this[b])
              : (this[m] = n.mount(this.container, e, this[b])));
        }
      }
      for (const e of i) {
        const t = c[e],
          n = a[e];
        Object.defineProperty(y.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get() {
            return this[b][e];
          },
          set(r) {
            this[b][e] = r;
            const o = n ? l[n] : null;
            if (null != o && o.stringify) {
              const e = o.stringify(r, t, this);
              this.getAttribute(t) !== e && this.setAttribute(t, e);
            } else this[d]();
          },
        });
      }
      return y;
    }
    function g(e, t, n, r = {}) {
      return y(e, r, {
        mount: function (e, r, o) {
          const s = t.createElement(r, o);
          if ("createRoot" in n) {
            const t = n.createRoot(e);
            return t.render(s), { container: e, root: t, ReactComponent: r };
          }
          if ("render" in n)
            return n.render(s, e), { container: e, ReactComponent: r };
          throw new Error("Invalid ReactDOM instance provided.");
        },
        unmount: function ({ container: e, root: t }) {
          t
            ? t.unmount()
            : "unmountComponentAtNode" in n && n.unmountComponentAtNode(e);
        },
        update: function ({ container: e, root: r, ReactComponent: o }, s) {
          const i = t.createElement(o, s);
          r ? r.render(i) : "render" in n && n.render(i, e);
        },
      });
    }
    class w extends i().Component {
      render() {
        return i().createElement("div", null, "Hello, ", this.props.name, "!");
      }
    }
    class v extends i().Component {
      render() {
        return i().createElement(
          "button",
          { onClick: () => alert("Button clicked!") },
          this.props.name
        );
      }
    }
    const x = g(w, i(), c(), { props: ["name"] }),
      O = g(v, i(), c(), { props: ["name"] });
    return (
      customElements.define("hello-world", x),
      customElements.define("my-button", O),
      {}
    );
  })()
);
