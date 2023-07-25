/**
 * @license
 *
 * DHTMLX Kanban v.1.5.1
 *
 * This software is covered by DHTMLX Evaluation License and purposed only for evaluation.
 * Contact sales@dhtmlx.com to get Commercial or Enterprise license.
 * Usage without proper license is prohibited.
 *
 * (c) XB Software.
 */
var kanban = function (e) {
   "use strict";

   function t() {}
   const n = e => e;

   function o(e, t) {
      for (const n in t) e[n] = t[n];
      return e
   }

   function r(e) {
      return e()
   }

   function l() {
      return Object.create(null)
   }

   function s(e) {
      e.forEach(r)
   }

   function i(e) {
      return "function" == typeof e
   }

   function c(e, t) {
      return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
   }
   let a;

   function d(e, t) {
      return a || (a = document.createElement("a")), a.href = t, e === a.href
   }

   function u(e, ...n) {
      if (null == e) return t;
      const o = e.subscribe(...n);
      return o.unsubscribe ? () => o.unsubscribe() : o
   }

   function p(e, t, n) {
      e.$$.on_destroy.push(u(t, n))
   }

   function f(e, t, n, o) {
      if (e) {
         const r = m(e, t, n, o);
         return e[0](r)
      }
   }

   function m(e, t, n, r) {
      return e[1] && r ? o(n.ctx.slice(), e[1](r(t))) : n.ctx
   }

   function $(e, t, n, o) {
      if (e[2] && o) {
         const r = e[2](o(n));
         if (void 0 === t.dirty) return r;
         if ("object" == typeof r) {
            const e = [],
               n = Math.max(t.dirty.length, r.length);
            for (let o = 0; o < n; o += 1) e[o] = t.dirty[o] | r[o];
            return e
         }
         return t.dirty | r
      }
      return t.dirty
   }

   function h(e, t, n, o, r, l) {
      if (r) {
         const s = m(t, n, o, l);
         e.p(s, r)
      }
   }

   function g(e) {
      if (e.ctx.length > 32) {
         const t = [],
            n = e.ctx.length / 32;
         for (let e = 0; e < n; e++) t[e] = -1;
         return t
      }
      return -1
   }

   function v(e) {
      const t = {};
      for (const n in e) "$" !== n[0] && (t[n] = e[n]);
      return t
   }

   function w(e, t) {
      const n = {};
      t = new Set(t);
      for (const o in e) t.has(o) || "$" === o[0] || (n[o] = e[o]);
      return n
   }

   function b(e) {
      const t = {};
      for (const n in e) t[n] = !0;
      return t
   }

   function y(e) {
      return null == e ? "" : e
   }

   function x(e, t, n) {
      return e.set(n), t
   }

   function k(e) {
      return e && i(e.destroy) ? e.destroy : t
   }
   const S = "undefined" != typeof window;
   let I = S ? () => window.performance.now() : () => Date.now(),
      _ = S ? e => requestAnimationFrame(e) : t;
   const M = new Set;

   function C(e) {
      M.forEach((t => {
         t.c(e) || (M.delete(t), t.f())
      })), 0 !== M.size && _(C)
   }

   function T(e, t) {
      e.appendChild(t)
   }

   function D(e) {
      if (!e) return document;
      const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
      return t && t.host ? t : e.ownerDocument
   }

   function E(e) {
      const t = O("style");
      return function (e, t) {
         T(e.head || e, t), t.sheet
      }(D(e), t), t.sheet
   }

   function N(e, t, n) {
      e.insertBefore(t, n || null)
   }

   function L(e) {
      e.parentNode && e.parentNode.removeChild(e)
   }

   function H(e, t) {
      for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
   }

   function O(e) {
      return document.createElement(e)
   }

   function A(e) {
      return document.createElementNS("http://www.w3.org/2000/svg", e)
   }

   function R(e) {
      return document.createTextNode(e)
   }

   function F() {
      return R(" ")
   }

   function z() {
      return R("")
   }

   function j(e, t, n, o) {
      return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o)
   }

   function q(e) {
      return function (t) {
         return t.preventDefault(), e.call(this, t)
      }
   }

   function P(e) {
      return function (t) {
         return t.stopPropagation(), e.call(this, t)
      }
   }

   function K(e, t, n) {
      null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
   }

   function V(e) {
      return "" === e ? null : +e
   }

   function U(e, t) {
      t = "" + t, e.data !== t && (e.data = t)
   }

   function Y(e, t) {
      e.value = null == t ? "" : t
   }

   function G(e, t, n, o) {
      null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, o ? "important" : "")
   }

   function B(e, t, n) {
      for (let n = 0; n < e.options.length; n += 1) {
         const o = e.options[n];
         if (o.__value === t) return void(o.selected = !0)
      }
      n && void 0 === t || (e.selectedIndex = -1)
   }
   let W;

   function J() {
      if (void 0 === W) {
         W = !1;
         try {
            "undefined" != typeof window && window.parent && window.parent.document
         } catch (e) {
            W = !0
         }
      }
      return W
   }

   function X(e, t, n) {
      e.classList[n ? "add" : "remove"](t)
   }

   function Z(e, t, {
      bubbles: n = !1,
      cancelable: o = !1
   } = {}) {
      const r = document.createEvent("CustomEvent");
      return r.initCustomEvent(e, n, o, t), r
   }
   class Q {
      constructor(e = !1) {
         this.is_svg = !1, this.is_svg = e, this.e = this.n = null
      }
      c(e) {
         this.h(e)
      }
      m(e, t, n = null) {
         this.e || (this.is_svg ? this.e = A(t.nodeName) : this.e = O(11 === t.nodeType ? "TEMPLATE" : t.nodeName), this.t = "TEMPLATE" !== t.tagName ? t : t.content, this.c(e)), this.i(n)
      }
      h(e) {
         this.e.innerHTML = e, this.n = Array.from("TEMPLATE" === this.e.nodeName ? this.e.content.childNodes : this.e.childNodes)
      }
      i(e) {
         for (let t = 0; t < this.n.length; t += 1) N(this.t, this.n[t], e)
      }
      p(e) {
         this.d(), this.h(e), this.i(this.a)
      }
      d() {
         this.n.forEach(L)
      }
   }

   function ee(e, t) {
      return new e(t)
   }
   const te = new Map;
   let ne, oe = 0;

   function re(e, t, n, o, r, l, s, i = 0) {
      const c = 16.666 / o;
      let a = "{\n";
      for (let e = 0; e <= 1; e += c) {
         const o = t + (n - t) * l(e);
         a += 100 * e + `%{${s(o,1-o)}}\n`
      }
      const d = a + `100% {${s(n,1-n)}}\n}`,
         u = `__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(d)}_${i}`,
         p = D(e),
         {
            stylesheet: f,
            rules: m
         } = te.get(p) || function (e, t) {
            const n = {
               stylesheet: E(t),
               rules: {}
            };
            return te.set(e, n), n
         }(p, e);
      m[u] || (m[u] = !0, f.insertRule(`@keyframes ${u} ${d}`, f.cssRules.length));
      const $ = e.style.animation || "";
      return e.style.animation = `${$?`${$}, `:""}${u} ${o}ms linear ${r}ms 1 both`, oe += 1, u
   }

   function le(e, t) {
      const n = (e.style.animation || "").split(", "),
         o = n.filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")),
         r = n.length - o.length;
      r && (e.style.animation = o.join(", "), oe -= r, oe || _((() => {
         oe || (te.forEach((e => {
            const {
               ownerNode: t
            } = e.stylesheet;
            t && L(t)
         })), te.clear())
      })))
   }

   function se(e) {
      ne = e
   }

   function ie() {
      if (!ne) throw new Error("Function called outside component initialization");
      return ne
   }

   function ce(e) {
      ie().$$.on_mount.push(e)
   }

   function ae(e) {
      ie().$$.after_update.push(e)
   }

   function de(e) {
      ie().$$.on_destroy.push(e)
   }

   function ue() {
      const e = ie();
      return (t, n, {
         cancelable: o = !1
      } = {}) => {
         const r = e.$$.callbacks[t];
         if (r) {
            const l = Z(t, n, {
               cancelable: o
            });
            return r.slice().forEach((t => {
               t.call(e, l)
            })), !l.defaultPrevented
         }
         return !0
      }
   }

   function pe(e, t) {
      return ie().$$.context.set(e, t), t
   }

   function fe(e) {
      return ie().$$.context.get(e)
   }

   function me(e, t) {
      const n = e.$$.callbacks[t.type];
      n && n.slice().forEach((e => e.call(this, t)))
   }
   const $e = [],
      he = [];
   let ge = [];
   const ve = [],
      we = Promise.resolve();
   let be = !1;

   function ye() {
      be || (be = !0, we.then(Ce))
   }

   function xe() {
      return ye(), we
   }

   function ke(e) {
      ge.push(e)
   }

   function Se(e) {
      ve.push(e)
   }
   const Ie = new Set;
   let _e, Me = 0;

   function Ce() {
      if (0 !== Me) return;
      const e = ne;
      do {
         try {
            for (; Me < $e.length;) {
               const e = $e[Me];
               Me++, se(e), Te(e.$$)
            }
         } catch (e) {
            throw $e.length = 0, Me = 0, e
         }
         for (se(null), $e.length = 0, Me = 0; he.length;) he.pop()();
         for (let e = 0; e < ge.length; e += 1) {
            const t = ge[e];
            Ie.has(t) || (Ie.add(t), t())
         }
         ge.length = 0
      } while ($e.length);
      for (; ve.length;) ve.pop()();
      be = !1, Ie.clear(), se(e)
   }

   function Te(e) {
      if (null !== e.fragment) {
         e.update(), s(e.before_update);
         const t = e.dirty;
         e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ke)
      }
   }

   function De(e, t, n) {
      e.dispatchEvent(Z(`${t?"intro":"outro"}${n}`))
   }
   const Ee = new Set;
   let Ne;

   function Le() {
      Ne = {
         r: 0,
         c: [],
         p: Ne
      }
   }

   function He() {
      Ne.r || s(Ne.c), Ne = Ne.p
   }

   function Oe(e, t) {
      e && e.i && (Ee.delete(e), e.i(t))
   }

   function Ae(e, t, n, o) {
      if (e && e.o) {
         if (Ee.has(e)) return;
         Ee.add(e), Ne.c.push((() => {
            Ee.delete(e), o && (n && e.d(1), o())
         })), e.o(t)
      } else o && o()
   }
   const Re = {
      duration: 0
   };

   function Fe(e, o, r, l) {
      const c = {
         direction: "both"
      };
      let a = o(e, r, c),
         d = l ? 0 : 1,
         u = null,
         p = null,
         f = null;

      function m() {
         f && le(e, f)
      }

      function $(e, t) {
         const n = e.b - d;
         return t *= Math.abs(n), {
            a: d,
            b: e.b,
            d: n,
            duration: t,
            start: e.start,
            end: e.start + t,
            group: e.group
         }
      }

      function h(o) {
         const {
            delay: r = 0,
            duration: l = 300,
            easing: i = n,
            tick: c = t,
            css: h
         } = a || Re, g = {
            start: I() + r,
            b: o
         };
         o || (g.group = Ne, Ne.r += 1), u || p ? p = g : (h && (m(), f = re(e, d, o, l, r, i, h)), o && c(0, 1), u = $(g, l), ke((() => De(e, o, "start"))), function (e) {
            let t;
            0 === M.size && _(C), new Promise((n => {
               M.add(t = {
                  c: e,
                  f: n
               })
            }))
         }((t => {
            if (p && t > p.start && (u = $(p, l), p = null, De(e, u.b, "start"), h && (m(), f = re(e, d, u.b, u.duration, 0, i, a.css))), u)
               if (t >= u.end) c(d = u.b, 1 - d), De(e, u.b, "end"), p || (u.b ? m() : --u.group.r || s(u.group.c)), u = null;
               else if (t >= u.start) {
               const e = t - u.start;
               d = u.a + u.d * i(e / u.duration), c(d, 1 - d)
            }
            return !(!u && !p)
         })))
      }
      return {
         run(e) {
            i(a) ? (_e || (_e = Promise.resolve(), _e.then((() => {
               _e = null
            }))), _e).then((() => {
               a = a(c), h(e)
            })) : h(e)
         },
         end() {
            m(), u = p = null
         }
      }
   }
   const ze = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;

   function je(e, t) {
      e.d(1), t.delete(e.key)
   }

   function qe(e, t) {
      Ae(e, 1, 1, (() => {
         t.delete(e.key)
      }))
   }

   function Pe(e, t, n, o, r, l, i, c, a, d, u, p) {
      let f = e.length,
         m = l.length,
         $ = f;
      const h = {};
      for (; $--;) h[e[$].key] = $;
      const g = [],
         v = new Map,
         w = new Map,
         b = [];
      for ($ = m; $--;) {
         const e = p(r, l, $),
            s = n(e);
         let c = i.get(s);
         c ? o && b.push((() => c.p(e, t))) : (c = d(s, e), c.c()), v.set(s, g[$] = c), s in h && w.set(s, Math.abs($ - h[s]))
      }
      const y = new Set,
         x = new Set;

      function k(e) {
         Oe(e, 1), e.m(c, u), i.set(e.key, e), u = e.first, m--
      }
      for (; f && m;) {
         const t = g[m - 1],
            n = e[f - 1],
            o = t.key,
            r = n.key;
         t === n ? (u = t.first, f--, m--) : v.has(r) ? !i.has(o) || y.has(o) ? k(t) : x.has(r) ? f-- : w.get(o) > w.get(r) ? (x.add(o), k(t)) : (y.add(r), f--) : (a(n, i), f--)
      }
      for (; f--;) {
         const t = e[f];
         v.has(t.key) || a(t, i)
      }
      for (; m;) k(g[m - 1]);
      return s(b), g
   }

   function Ke(e, t) {
      const n = {},
         o = {},
         r = {
            $$scope: 1
         };
      let l = e.length;
      for (; l--;) {
         const s = e[l],
            i = t[l];
         if (i) {
            for (const e in s) e in i || (o[e] = 1);
            for (const e in i) r[e] || (n[e] = i[e], r[e] = 1);
            e[l] = i
         } else
            for (const e in s) r[e] = 1
      }
      for (const e in o) e in n || (n[e] = void 0);
      return n
   }

   function Ve(e) {
      return "object" == typeof e && null !== e ? e : {}
   }

   function Ue(e, t, n) {
      const o = e.$$.props[t];
      void 0 !== o && (e.$$.bound[o] = n, n(e.$$.ctx[o]))
   }

   function Ye(e) {
      e && e.c()
   }

   function Ge(e, t, n, o) {
      const {
         fragment: l,
         after_update: c
      } = e.$$;
      l && l.m(t, n), o || ke((() => {
         const t = e.$$.on_mount.map(r).filter(i);
         e.$$.on_destroy ? e.$$.on_destroy.push(...t) : s(t), e.$$.on_mount = []
      })), c.forEach(ke)
   }

   function Be(e, t) {
      const n = e.$$;
      null !== n.fragment && (! function (e) {
         const t = [],
            n = [];
         ge.forEach((o => -1 === e.indexOf(o) ? t.push(o) : n.push(o))), n.forEach((e => e())), ge = t
      }(n.after_update), s(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
   }

   function We(e, n, o, r, i, c, a, d = [-1]) {
      const u = ne;
      se(e);
      const p = e.$$ = {
         fragment: null,
         ctx: [],
         props: c,
         update: t,
         not_equal: i,
         bound: l(),
         on_mount: [],
         on_destroy: [],
         on_disconnect: [],
         before_update: [],
         after_update: [],
         context: new Map(n.context || (u ? u.$$.context : [])),
         callbacks: l(),
         dirty: d,
         skip_bound: !1,
         root: n.target || u.$$.root
      };
      a && a(p.root);
      let f = !1;
      if (p.ctx = o ? o(e, n.props || {}, ((t, n, ...o) => {
            const r = o.length ? o[0] : n;
            return p.ctx && i(p.ctx[t], p.ctx[t] = r) && (!p.skip_bound && p.bound[t] && p.bound[t](r), f && function (e, t) {
               -1 === e.$$.dirty[0] && ($e.push(e), ye(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
            }(e, t)), n
         })) : [], p.update(), f = !0, s(p.before_update), p.fragment = !!r && r(p.ctx), n.target) {
         if (n.hydrate) {
            const e = function (e) {
               return Array.from(e.childNodes)
            }(n.target);
            p.fragment && p.fragment.l(e), e.forEach(L)
         } else p.fragment && p.fragment.c();
         n.intro && Oe(e.$$.fragment), Ge(e, n.target, n.anchor, n.customElement), Ce()
      }
      se(u)
   }
   class Je {
      $destroy() {
         Be(this, 1), this.$destroy = t
      }
      $on(e, n) {
         if (!i(n)) return t;
         const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
         return o.push(n), () => {
            const e = o.indexOf(n); - 1 !== e && o.splice(e, 1)
         }
      }
      $set(e) {
         var t;
         this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
      }
   }
   var Xe = {
      kanban: {
         Save: "Save",
         Close: "Close",
         Delete: "Delete",
         Name: "Name",
         Description: "Description",
         Type: "Type",
         "Start date": "Start date",
         "End date": "End date",
         Result: "Result",
         "No results": "No results",
         Search: "Search",
         "Search in": "Search in",
         "Add new row": "Add new row",
         "Add new column": "Add new column",
         "Add new card": "Add new card",
         "Edit card": "Edit card",
         Edit: "Edit",
         Everywhere: "Everywhere",
         Label: "Label",
         Status: "Status",
         Color: "Color",
         Date: "Date",
         Priority: "Priority",
         Progress: "Progress",
         Users: "Users",
         Untitled: "Untitled",
         Rename: "Rename",
         "Move up": "Move up",
         "Move down": "Move down",
         "Move left": "Move left",
         "Move right": "Move right",
         Sort: "Sort",
         "Label (a-z)": "Label (a-z)",
         "Label (z-a)": "Label (z-a)",
         "Description (a-z)": "Description (a-z)",
         "Description (z-a)": "Description (z-a)",
         Duplicate: "Duplicate",
         "Duplicate of": "Duplicate of",
         "Relates to": "Relates to",
         "Depends on": "Depends on",
         "Is required for": "Is required for",
         Duplicates: "Duplicates",
         "Is duplicated by": "Is duplicated by",
         "Parent for": "Parent for",
         "SubTask of": "SubTask of",
         Cancel: "Cancel",
         "Link task": "Link task",
         "Select a relation": "Select a relation",
         "Select a task": "Select a task",
         "Would you like to delete this comment?": "Would you like to delete this comment?",
         "No comments yet": "No comments yet",
         "Would you like to delete this card?": "Would you like to delete this card?"
      }
   };
   const Ze = {
      core: {
         ok: "OK",
         cancel: "Cancel"
      },
      calendar: {
         monthFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         monthShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         dayFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
         dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
         hours: "Hours",
         minutes: "Minutes",
         done: "Done",
         clear: "Clear",
         today: "Today",
         am: ["am", "AM"],
         pm: ["pm", "PM"],
         weekStart: 7,
         timeFormat: 24
      }
   };
   let Qe = (new Date).valueOf();
   const et = () => Qe++;

   function tt() {
      return "temp://" + Qe++
   }

   function nt(e) {
      return "string" == typeof e && 20 === e.length && parseInt(e.substr(7)) > 1e12
   }
   class ot {
      _setter;
      _routes;
      _triggers;
      _sources;
      _prev;
      _parsers;
      constructor(e, t, n) {
         this._setter = e, this._routes = t, this._parsers = n, this._prev = {}, this._triggers = new Map, this._sources = new Map, this._routes.forEach((e => {
            e.in.forEach((t => {
               const n = this._triggers.get(t) || [];
               n.push(e), this._triggers.set(t, n)
            })), e.out.forEach((t => {
               const n = this._sources.get(t) || {};
               e.in.forEach((e => n[e] = !0)), this._sources.set(t, n)
            }))
         })), this._routes.forEach((e => {
            e.length = Math.max(...e.in.map((e => rt(e, this._sources, 1))))
         }))
      }
      init(e) {
         const t = {};
         for (const n in e)
            if (this._prev[n] !== e[n]) {
               const o = this._parsers[n];
               t[n] = o ? o(e[n]) : e[n]
            } this._prev = this._prev ? {
            ...this._prev,
            ...e
         } : {
            ...e
         }, this.setState(t)
      }
      setState(e, t) {
         this._setter(e);
         const n = !t;
         t = t || [];
         for (const n in e) {
            const e = this._triggers.get(n);
            e && e.forEach((e => {
               -1 == t.indexOf(e) && t.push(e)
            }))
         }
         n && this._execNext(t)
      }
      _execNext(e) {
         for (; e.length;) {
            e.sort(((e, t) => e.length < t.length ? 1 : -1));
            const t = e[e.length - 1];
            e.splice(e.length - 1), t.exec(e)
         }
      }
   }

   function rt(e, t, n) {
      const o = t.get(e);
      if (!o) return n;
      const r = Object.keys(o).map((e => rt(e, t, n + 1)));
      return Math.max(...r)
   }
   class lt {
      _state;
      _values;
      _writable;
      constructor(e) {
         this._writable = e, this._values = {}, this._state = {}
      }
      setState(e) {
         const t = this._state;
         for (const n in e) t[n] ? t[n].set(e[n]) : this._state[n] = this._wrapWritable(n, e[n]), this._values[n] = e[n]
      }
      getState() {
         return this._values
      }
      getReactive() {
         return this._state
      }
      _wrapWritable(e, t) {
         const n = this._writable(t);
         return n.subscribe((t => {
            this._values[e] = t
         })), n
      }
   }
   class st {
      _handlers;
      _nextHandler;
      constructor() {
         this._nextHandler = () => null, this._handlers = {}, this.exec = this.exec.bind(this)
      }
      on(e, t) {
         const n = this._handlers[e];
         this._handlers[e] = n ? function (e) {
            it(n, e)(t(e))
         } : n => {
            it(this._nextHandler, n, e)(t(n))
         }
      }
      exec(e, t) {
         const n = this._handlers[e];
         n ? n(t) : this._nextHandler(e, t)
      }
      setNext(e) {
         this._nextHandler = e
      }
   }

   function it(e, t, n) {
      return o => {
         !1 !== o && (o && o.then ? o.then(it(e, t, n)) : n ? e(n, t) : e(t))
      }
   }
   class ct {
      _dispatch;
      _nextHandler;
      constructor(e) {
         this._nextHandler = () => null, this._dispatch = e, this.exec = this.exec.bind(this)
      }
      exec(e, t) {
         this._dispatch(e, t), this._nextHandler && this._nextHandler(e, t)
      }
      setNext(e) {
         this._nextHandler = e
      }
   }

   function at(e, t = "data-id") {
      let n = e;
      for (!n.tagName && e.target && (n = e.target); n;) {
         if (n.getAttribute) {
            if (n.getAttribute(t)) return n
         }
         n = n.parentNode
      }
      return null
   }

   function dt(e, t = "data-id") {
      const n = at(e, t);
      return n ? function (e) {
         if ("string" == typeof e) {
            const t = 1 * e;
            if (!isNaN(t)) return t
         }
         return e
      }(n.getAttribute(t)) : null
   }

   function ut(e, t) {
      let n = null;
      e.addEventListener("click", (function (e) {
         const o = at(e);
         if (!o) return;
         const r = parseInt(o.dataset.id);
         let l, s = e.target;
         for (; s != o;) {
            if (l = s.dataset ? s.dataset.action : null, l) {
               t[l] && t[l](r, e), n = (new Date).valueOf();
               break
            }
            s = s.parentNode
         }
         t.click && !l && t.click(r, e)
      })), e.addEventListener("dblclick", (function (e) {
         if (n && (new Date).valueOf() - n < 200) return;
         const o = dt(e);
         o && t.dblclick && t.dblclick(o, e)
      }))
   }
   let pt = (new Date).valueOf();

   function ft() {
      return pt += 1, pt
   }

   function mt(e) {
      return e < 10 ? "0" + e : e.toString()
   }
   const $t = ["", ""];

   function ht(e, t, n) {
      switch (e) {
         case "%d":
            return mt(t.getDate());
         case "%m":
            return mt(t.getMonth() + 1);
         case "%j":
            return t.getDate();
         case "%n":
            return t.getMonth() + 1;
         case "%y":
            return mt(t.getFullYear() % 100);
         case "%Y":
            return t.getFullYear();
         case "%D":
            return n.dayShort[t.getDay()];
         case "%l":
            return n.dayFull[t.getDay()];
         case "%M":
            return n.monthShort[t.getMonth()];
         case "%F":
            return n.monthFull[t.getMonth()];
         case "%h":
            return mt((t.getHours() + 11) % 12 + 1);
         case "%g":
            return (t.getHours() + 11) % 12 + 1;
         case "%G":
            return t.getHours();
         case "%H":
            return mt(t.getHours());
         case "%i":
            return mt(t.getMinutes());
         case "%a":
            return ((t.getHours() > 11 ? n.pm : n.am) || $t)[0];
         case "%A":
            return ((t.getHours() > 11 ? n.pm : n.am) || $t)[1];
         case "%s":
            return mt(t.getSeconds());
         case "%S":
            return function (e) {
               const t = mt(e);
               return 2 == t.length ? "0" + t : t
            }(t.getMilliseconds());
         case "%W":
            return mt(function (e) {
               let t = e.getDay();
               0 === t && (t = 7);
               const n = new Date(e.valueOf());
               n.setDate(e.getDate() + (4 - t));
               const o = n.getFullYear(),
                  r = Math.floor((n.getTime() - new Date(o, 0, 1).getTime()) / 864e5);
               return 1 + Math.floor(r / 7)
            }(t));
         case "%c": {
            let e = t.getFullYear() + "";
            return e += "-" + mt(t.getMonth() + 1), e += "-" + mt(t.getDate()), e += "T", e += mt(t.getHours()), e += ":" + mt(t.getMinutes()), e += ":" + mt(t.getSeconds()), e
         }
         default:
            return e
      }
   }
   const gt = /%[a-zA-Z]/g;

   function vt(e) {
      return e && "object" == typeof e && !Array.isArray(e)
   }

   function wt(e, t) {
      for (const n in t) {
         const o = t[n];
         vt(e[n]) && vt(o) ? e[n] = wt({
            ...e[n]
         }, t[n]) : e[n] = t[n]
      }
      return e
   }

   function bt(e) {
      return {
         getGroup(t) {
            const n = e[t];
            return e => n && n[e] || e
         },
         getRaw: () => e,
         extend(t, n) {
            if (!t) return this;
            let o;
            return o = n ? wt({
               ...t
            }, e) : wt({
               ...e
            }, t), bt(o)
         }
      }
   }

   function yt(e) {
      let n, o, r;
      return {
         c() {
            n = O("textarea"), K(n, "id", e[1]), n.disabled = e[3], K(n, "placeholder", e[2]), K(n, "class", "svelte-po3n73"), X(n, "error", e[4])
         },
         m(t, l) {
            N(t, n, l), Y(n, e[0]), o || (r = j(n, "input", e[5]), o = !0)
         },
         p(e, [t]) {
            2 & t && K(n, "id", e[1]), 8 & t && (n.disabled = e[3]), 4 & t && K(n, "placeholder", e[2]), 1 & t && Y(n, e[0]), 16 & t && X(n, "error", e[4])
         },
         i: t,
         o: t,
         d(e) {
            e && L(n), o = !1, r()
         }
      }
   }

   function xt(e, t, n) {
      let {
         value: o = ""
      } = t, {
         id: r = ft()
      } = t, {
         placeholder: l = ""
      } = t, {
         disabled: s = !1
      } = t, {
         error: i = !1
      } = t;
      return e.$$set = e => {
         "value" in e && n(0, o = e.value), "id" in e && n(1, r = e.id), "placeholder" in e && n(2, l = e.placeholder), "disabled" in e && n(3, s = e.disabled), "error" in e && n(4, i = e.error)
      }, [o, r, l, s, i, function () {
         o = this.value, n(0, o)
      }]
   }
   class kt extends Je {
      constructor(e) {
         super(), We(this, e, xt, yt, c, {
            value: 0,
            id: 1,
            placeholder: 2,
            disabled: 3,
            error: 4
         })
      }
   }

   function St(e) {
      let t, n;
      return {
         c() {
            t = O("i"), K(t, "class", n = y(e[2]) + " svelte-3m78jz")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            4 & o && n !== (n = y(e[2]) + " svelte-3m78jz") && K(t, "class", n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function It(e) {
      let t, n, o, r, l, s, c = e[2] && St(e);
      const a = e[6].default,
         d = f(a, e, e[5], null);
      return {
         c() {
            t = O("button"), c && c.c(), n = F(), d && d.c(), K(t, "class", o = y(e[0]) + " svelte-3m78jz"), t.disabled = e[3], X(t, "icon", !e[4] || !e[4].default)
         },
         m(o, a) {
            N(o, t, a), c && c.m(t, null), T(t, n), d && d.m(t, null), r = !0, l || (s = j(t, "click", (function () {
               i(e[1]) && e[1].apply(this, arguments)
            })), l = !0)
         },
         p(l, [s]) {
            (e = l)[2] ? c ? c.p(e, s) : (c = St(e), c.c(), c.m(t, n)): c && (c.d(1), c = null), d && d.p && (!r || 32 & s) && h(d, a, e, e[5], r ? $(a, e[5], s, null) : g(e[5]), null), (!r || 1 & s && o !== (o = y(e[0]) + " svelte-3m78jz")) && K(t, "class", o), (!r || 8 & s) && (t.disabled = e[3]), (!r || 17 & s) && X(t, "icon", !e[4] || !e[4].default)
         },
         i(e) {
            r || (Oe(d, e), r = !0)
         },
         o(e) {
            Ae(d, e), r = !1
         },
         d(e) {
            e && L(t), c && c.d(), d && d.d(e), l = !1, s()
         }
      }
   }

   function _t(e, t, n) {
      let {
         $$slots: r = {},
         $$scope: l
      } = t, {
         type: s = ""
      } = t, {
         click: i
      } = t, {
         icon: c = ""
      } = t, {
         disabled: a = !1
      } = t;
      const d = t.$$slots;
      return e.$$set = e => {
         n(7, t = o(o({}, t), v(e))), "type" in e && n(0, s = e.type), "click" in e && n(1, i = e.click), "icon" in e && n(2, c = e.icon), "disabled" in e && n(3, a = e.disabled), "$$scope" in e && n(5, l = e.$$scope)
      }, t = v(t), [s, i, c, a, d, l, r]
   }
   let Mt = class extends Je {
      constructor(e) {
         super(), We(this, e, _t, It, c, {
            type: 0,
            click: 1,
            icon: 2,
            disabled: 3
         })
      }
   };

   function Ct(e) {
      let t, n;
      return {
         c() {
            t = O("span"), n = R(e[2]), K(t, "class", "svelte-1v5nu6d")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            4 & t && U(n, e[2])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Tt(e) {
      let n, o, r, l, s, i, c, a, d = e[2] && Ct(e);
      return {
         c() {
            n = O("div"), o = O("input"), r = F(), l = O("label"), s = O("span"), i = F(), d && d.c(), K(o, "type", "checkbox"), K(o, "id", e[1]), o.disabled = e[5], o.value = e[3], o.checked = e[0], K(o, "class", "svelte-1v5nu6d"), K(s, "class", "svelte-1v5nu6d"), K(l, "for", e[1]), K(l, "class", "svelte-1v5nu6d"), K(n, "style", e[4]), K(n, "class", "svelte-1v5nu6d")
         },
         m(t, u) {
            N(t, n, u), T(n, o), T(n, r), T(n, l), T(l, s), T(l, i), d && d.m(l, null), c || (a = j(o, "change", e[6]), c = !0)
         },
         p(e, [t]) {
            2 & t && K(o, "id", e[1]), 32 & t && (o.disabled = e[5]), 8 & t && (o.value = e[3]), 1 & t && (o.checked = e[0]), e[2] ? d ? d.p(e, t) : (d = Ct(e), d.c(), d.m(l, null)) : d && (d.d(1), d = null), 2 & t && K(l, "for", e[1]), 16 & t && K(n, "style", e[4])
         },
         i: t,
         o: t,
         d(e) {
            e && L(n), d && d.d(), c = !1, a()
         }
      }
   }

   function Dt(e, t, n) {
      const o = ue();
      let {
         id: r = ft()
      } = t, {
         label: l = ""
      } = t, {
         value: s = ""
      } = t, {
         checked: i = !1
      } = t, {
         style: c = ""
      } = t, {
         disabled: a = !1
      } = t;
      return e.$$set = e => {
         "id" in e && n(1, r = e.id), "label" in e && n(2, l = e.label), "value" in e && n(3, s = e.value), "checked" in e && n(0, i = e.checked), "style" in e && n(4, c = e.style), "disabled" in e && n(5, a = e.disabled)
      }, [i, r, l, s, c, a, function ({
         target: e
      }) {
         n(0, i = e.checked), o("change", {
            value: s,
            checked: i
         })
      }]
   }
   class Et extends Je {
      constructor(e) {
         super(), We(this, e, Dt, Tt, c, {
            id: 1,
            label: 2,
            value: 3,
            checked: 0,
            style: 4,
            disabled: 5
         })
      }
   }
   const {
      document: Nt
   } = ze;

   function Lt(e) {
      let t, n, o, r, l, s;
      const i = e[8].default,
         c = f(i, e, e[7], null);
      return {
         c() {
            t = F(), n = O("div"), c && c.c(), K(n, "class", o = `dropdown ${e[0]}-${e[1]} svelte-1iqv09v`), G(n, "width", e[2])
         },
         m(o, i) {
            N(o, t, i), N(o, n, i), c && c.m(n, null), e[9](n), r = !0, l || (s = j(Nt.body, "mousedown", e[4]), l = !0)
         },
         p(e, [t]) {
            c && c.p && (!r || 128 & t) && h(c, i, e, e[7], r ? $(i, e[7], t, null) : g(e[7]), null), (!r || 3 & t && o !== (o = `dropdown ${e[0]}-${e[1]} svelte-1iqv09v`)) && K(n, "class", o), (!r || 4 & t) && G(n, "width", e[2])
         },
         i(e) {
            r || (Oe(c, e), r = !0)
         },
         o(e) {
            Ae(c, e), r = !1
         },
         d(o) {
            o && L(t), o && L(n), c && c.d(o), e[9](null), l = !1, s()
         }
      }
   }

   function Ht(e, t, n) {
      let o, {
            $$slots: r = {},
            $$scope: l
         } = t,
         {
            position: s = "bottom"
         } = t,
         {
            align: i = "start"
         } = t,
         {
            autoFit: c = !0
         } = t,
         {
            cancel: a = null
         } = t,
         {
            width: d = "100%"
         } = t;
      return ae((() => {
         if (c) {
            const e = o.getBoundingClientRect(),
               t = document.body.getBoundingClientRect();
            return e.right >= t.right && n(1, i = "end"), e.bottom >= t.bottom && n(0, s = "top"), `${s}-${i}`
         }
      })), e.$$set = e => {
         "position" in e && n(0, s = e.position), "align" in e && n(1, i = e.align), "autoFit" in e && n(5, c = e.autoFit), "cancel" in e && n(6, a = e.cancel), "width" in e && n(2, d = e.width), "$$scope" in e && n(7, l = e.$$scope)
      }, [s, i, d, o, function (e) {
         o.contains(e.target) || a && a(e)
      }, c, a, l, r, function (e) {
         he[e ? "unshift" : "push"]((() => {
            o = e, n(3, o)
         }))
      }]
   }
   class Ot extends Je {
      constructor(e) {
         super(), We(this, e, Ht, Lt, c, {
            position: 0,
            align: 1,
            autoFit: 5,
            cancel: 6,
            width: 2
         })
      }
   }

   function At(e, t, n) {
      const o = e.slice();
      return o[14] = t[n], o
   }

   function Rt(e) {
      let n, o, r;
      return {
         c() {
            n = O("i"), K(n, "class", "clear wxi-close svelte-kstavy")
         },
         m(t, l) {
            N(t, n, l), o || (r = j(n, "click", P(e[9])), o = !0)
         },
         p: t,
         d(e) {
            e && L(n), o = !1, r()
         }
      }
   }

   function Ft(e) {
      let n;
      return {
         c() {
            n = O("div"), K(n, "class", "empty selected svelte-kstavy")
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function zt(e) {
      let t;
      return {
         c() {
            t = O("div"), K(t, "class", "color selected svelte-kstavy"), G(t, "background-color", e[0] || "#00a037")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            1 & n && G(t, "background-color", e[0] || "#00a037")
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function jt(e) {
      let t, n;
      return t = new Ot({
         props: {
            cancel: e[13],
            $$slots: {
               default: [Pt]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            128 & n && (o.cancel = e[13]), 131074 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function qt(e) {
      let t, n, o;

      function r() {
         return e[12](e[14])
      }
      return {
         c() {
            t = O("div"), K(t, "class", "color svelte-kstavy"), G(t, "background-color", e[14])
         },
         m(e, l) {
            N(e, t, l), n || (o = j(t, "click", P(r)), n = !0)
         },
         p(n, o) {
            e = n, 2 & o && G(t, "background-color", e[14])
         },
         d(e) {
            e && L(t), n = !1, o()
         }
      }
   }

   function Pt(e) {
      let t, n, o, r, l, s = e[1],
         i = [];
      for (let t = 0; t < s.length; t += 1) i[t] = qt(At(e, s, t));
      return {
         c() {
            t = O("div"), n = O("div"), o = F();
            for (let e = 0; e < i.length; e += 1) i[e].c();
            K(n, "class", "empty svelte-kstavy"), K(t, "class", "colors svelte-kstavy")
         },
         m(s, c) {
            N(s, t, c), T(t, n), T(t, o);
            for (let e = 0; e < i.length; e += 1) i[e] && i[e].m(t, null);
            r || (l = j(n, "click", P(e[11])), r = !0)
         },
         p(e, n) {
            if (258 & n) {
               let o;
               for (s = e[1], o = 0; o < s.length; o += 1) {
                  const r = At(e, s, o);
                  i[o] ? i[o].p(r, n) : (i[o] = qt(r), i[o].c(), i[o].m(t, null))
               }
               for (; o < i.length; o += 1) i[o].d(1);
               i.length = s.length
            }
         },
         d(e) {
            e && L(t), H(i, e), r = !1, l()
         }
      }
   }

   function Kt(e) {
      let t, n, o, r, l, s, i, c, a = e[3] && e[0] && !e[5] && Rt(e);

      function d(e, t) {
         return e[0] ? zt : Ft
      }
      let u = d(e),
         p = u(e),
         f = e[7] && jt(e);
      return {
         c() {
            t = O("div"), n = O("input"), o = F(), a && a.c(), r = F(), p.c(), l = F(), f && f.c(), n.value = e[0], n.readOnly = !0, K(n, "id", e[2]), K(n, "placeholder", e[4]), n.disabled = e[5], K(n, "class", "svelte-kstavy"), X(n, "error", e[6]), X(n, "focus", e[7]), K(t, "class", "color-picker svelte-kstavy")
         },
         m(d, u) {
            N(d, t, u), T(t, n), T(t, o), a && a.m(t, null), T(t, r), p.m(t, null), T(t, l), f && f.m(t, null), s = !0, i || (c = j(t, "click", e[10]), i = !0)
         },
         p(e, [o]) {
            (!s || 1 & o && n.value !== e[0]) && (n.value = e[0]), (!s || 4 & o) && K(n, "id", e[2]), (!s || 16 & o) && K(n, "placeholder", e[4]), (!s || 32 & o) && (n.disabled = e[5]), (!s || 64 & o) && X(n, "error", e[6]), (!s || 128 & o) && X(n, "focus", e[7]), e[3] && e[0] && !e[5] ? a ? a.p(e, o) : (a = Rt(e), a.c(), a.m(t, r)) : a && (a.d(1), a = null), u === (u = d(e)) && p ? p.p(e, o) : (p.d(1), p = u(e), p && (p.c(), p.m(t, l))), e[7] ? f ? (f.p(e, o), 128 & o && Oe(f, 1)) : (f = jt(e), f.c(), Oe(f, 1), f.m(t, null)) : f && (Le(), Ae(f, 1, 1, (() => {
               f = null
            })), He())
         },
         i(e) {
            s || (Oe(f), s = !0)
         },
         o(e) {
            Ae(f), s = !1
         },
         d(e) {
            e && L(t), a && a.d(), p.d(), f && f.d(), i = !1, c()
         }
      }
   }

   function Vt(e, t, n) {
      let o, {
            colors: r = ["#00a037", "#df282f", "#fd772c", "#6d4bce", "#b26bd3", "#c87095", "#90564d", "#eb2f89", "#ea77c0", "#777676", "#a9a8a8", "#9bb402", "#e7a90b", "#0bbed7", "#038cd9"]
         } = t,
         {
            value: l = ""
         } = t,
         {
            id: s = ft()
         } = t,
         {
            clear: i = !0
         } = t,
         {
            placeholder: c = ""
         } = t,
         {
            disabled: a = !1
         } = t,
         {
            error: d = !1
         } = t;

      function u(e) {
         n(0, l = e), n(7, o = null)
      }
      return e.$$set = e => {
         "colors" in e && n(1, r = e.colors), "value" in e && n(0, l = e.value), "id" in e && n(2, s = e.id), "clear" in e && n(3, i = e.clear), "placeholder" in e && n(4, c = e.placeholder), "disabled" in e && n(5, a = e.disabled), "error" in e && n(6, d = e.error)
      }, [l, r, s, i, c, a, d, o, u, function () {
         n(0, l = null)
      }, function () {
         if (a) return !1;
         n(7, o = !0)
      }, () => u(""), e => u(e), () => n(7, o = null)]
   }
   class Ut extends Je {
      constructor(e) {
         super(), We(this, e, Vt, Kt, c, {
            colors: 1,
            value: 0,
            id: 2,
            clear: 3,
            placeholder: 4,
            disabled: 5,
            error: 6
         })
      }
   }

   function Yt(e, t, n) {
      const o = e.slice();
      return o[13] = t[n], o[15] = n, o
   }
   const Gt = e => ({
         option: 1 & e
      }),
      Bt = e => ({
         option: e[13]
      });

   function Wt(e) {
      let t, n;
      return t = new Ot({
         props: {
            cancel: e[8],
            $$slots: {
               default: [Qt]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            519 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Jt(e) {
      let n;
      return {
         c() {
            n = O("div"), n.textContent = "No data", K(n, "class", "no-data svelte-1kld9sh")
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Xt(e) {
      let t, n, o = [],
         r = new Map,
         l = e[0];
      const s = e => e[13].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = Yt(e, l, t),
            i = s(n);
         r.set(i, o[t] = Zt(i, n))
      }
      return {
         c() {
            for (let e = 0; e < o.length; e += 1) o[e].c();
            t = z()
         },
         m(e, r) {
            for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(e, r);
            N(e, t, r), n = !0
         },
         p(e, n) {
            517 & n && (l = e[0], Le(), o = Pe(o, n, s, 1, e, l, r, t.parentNode, qe, Zt, t, Yt), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            for (let t = 0; t < o.length; t += 1) o[t].d(e);
            e && L(t)
         }
      }
   }

   function Zt(e, t) {
      let n, o, r, l;
      const s = t[6].default,
         i = f(s, t, t[9], Bt),
         c = i || function (e) {
            let t, n = e[13].name + "";
            return {
               c() {
                  t = R(n)
               },
               m(e, n) {
                  N(e, t, n)
               },
               p(e, o) {
                  1 & o && n !== (n = e[13].name + "") && U(t, n)
               },
               d(e) {
                  e && L(t)
               }
            }
         }(t);
      return {
         key: e,
         first: null,
         c() {
            n = O("div"), c && c.c(), o = F(), K(n, "class", "item svelte-1kld9sh"), K(n, "data-id", r = t[13].id), X(n, "focus", t[15] === t[2]), this.first = n
         },
         m(e, t) {
            N(e, n, t), c && c.m(n, null), T(n, o), l = !0
         },
         p(e, o) {
            t = e, i ? i.p && (!l || 513 & o) && h(i, s, t, t[9], l ? $(s, t[9], o, Gt) : g(t[9]), Bt) : c && c.p && (!l || 1 & o) && c.p(t, l ? o : -1), (!l || 1 & o && r !== (r = t[13].id)) && K(n, "data-id", r), (!l || 5 & o) && X(n, "focus", t[15] === t[2])
         },
         i(e) {
            l || (Oe(c, e), l = !0)
         },
         o(e) {
            Ae(c, e), l = !1
         },
         d(e) {
            e && L(n), c && c.d(e)
         }
      }
   }

   function Qt(e) {
      let t, n, o, r, l, i;
      const c = [Xt, Jt],
         a = [];

      function d(e, t) {
         return e[0].length ? 0 : 1
      }
      return n = d(e), o = a[n] = c[n](e), {
         c() {
            t = O("div"), o.c(), K(t, "class", "list svelte-1kld9sh")
         },
         m(o, s) {
            N(o, t, s), a[n].m(t, null), e[7](t), r = !0, l || (i = [j(t, "click", P(e[5])), j(t, "mousemove", e[3])], l = !0)
         },
         p(e, r) {
            let l = n;
            n = d(e), n === l ? a[n].p(e, r) : (Le(), Ae(a[l], 1, 1, (() => {
               a[l] = null
            })), He(), o = a[n], o ? o.p(e, r) : (o = a[n] = c[n](e), o.c()), Oe(o, 1), o.m(t, null))
         },
         i(e) {
            r || (Oe(o), r = !0)
         },
         o(e) {
            Ae(o), r = !1
         },
         d(o) {
            o && L(t), a[n].d(), e[7](null), l = !1, s(i)
         }
      }
   }

   function en(e) {
      let t, n, o = null !== e[2] && Wt(e);
      return {
         c() {
            o && o.c(), t = z()
         },
         m(e, r) {
            o && o.m(e, r), N(e, t, r), n = !0
         },
         p(e, [n]) {
            null !== e[2] ? o ? (o.p(e, n), 4 & n && Oe(o, 1)) : (o = Wt(e), o.c(), Oe(o, 1), o.m(t.parentNode, t)) : o && (Le(), Ae(o, 1, 1, (() => {
               o = null
            })), He())
         },
         i(e) {
            n || (Oe(o), n = !0)
         },
         o(e) {
            Ae(o), n = !1
         },
         d(e) {
            o && o.d(e), e && L(t)
         }
      }
   }

   function tn(e, t, n) {
      let o, {
            $$slots: r = {},
            $$scope: l
         } = t,
         {
            items: s = []
         } = t,
         i = null;
      const c = ue(),
         {
            move: a,
            keydown: d,
            init: u,
            navigate: p
         } = function () {
            let e, t, n, o, r = null,
               l = !1;
            const s = e => {
                  r = e, l = null !== r, n(r)
               },
               i = (n, o) => {
                  const l = null === n ? null : Math.max(0, Math.min(r + n, t.length - 1));
                  if (l !== r && (s(l), r && e)) {
                     const t = e.querySelectorAll(".list > .item")[r];
                     t && (t.scrollIntoView({
                        block: "nearest"
                     }), o && o.preventDefault())
                  }
               };
            return {
               move: e => {
                  const n = dt(e),
                     o = t.findIndex((e => e.id == n));
                  o !== r && s(o)
               },
               keydown: e => {
                  switch (e.code) {
                     case "Enter":
                        l ? o() : s(0);
                        break;
                     case "Space":
                        !l && s(0);
                        break;
                     case "Escape":
                     case "Tab":
                        n(r = null);
                        break;
                     case "ArrowDown":
                        l ? i(1, e) : s(0);
                        break;
                     case "ArrowUp":
                        l ? i(-1, e) : s(0)
                  }
               },
               init: (r, l, s, i) => {
                  e = r, t = l, n = s, o = i
               },
               navigate: i
            }
         }(),
         f = () => c("select", {
            id: s[i]?.id
         });
      ce((() => {
         c("ready", {
            navigate: p,
            keydown: d,
            move: a
         })
      }));
      return e.$$set = e => {
         "items" in e && n(0, s = e.items), "$$scope" in e && n(9, l = e.$$scope)
      }, e.$$.update = () => {
         3 & e.$$.dirty && u(o, s, (e => n(2, i = e)), f)
      }, [s, o, i, a, p, f, r, function (e) {
         he[e ? "unshift" : "push"]((() => {
            o = e, n(1, o)
         }))
      }, () => p(null), l]
   }
   let nn = class extends Je {
      constructor(e) {
         super(), We(this, e, tn, en, c, {
            items: 0
         })
      }
   };
   const on = e => ({
         option: 4194304 & e
      }),
      rn = e => ({
         option: e[22]
      });

   function ln(e) {
      let t, n;
      return t = new nn({
         props: {
            items: e[5],
            $$slots: {
               default: [sn, ({
                  option: e
               }) => ({
                  22: e
               }), ({
                  option: e
               }) => e ? 4194304 : 0]
            },
            $$scope: {
               ctx: e
            }
         }
      }), t.$on("ready", e[8]), t.$on("select", e[9]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            32 & n && (o.items = e[5]), 4718592 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function sn(e) {
      let t;
      const n = e[15].default,
         o = f(n, e, e[19], rn),
         r = o || function (e) {
            let t, n = e[22].name + "";
            return {
               c() {
                  t = R(n)
               },
               m(e, n) {
                  N(e, t, n)
               },
               p(e, o) {
                  4194304 & o && n !== (n = e[22].name + "") && U(t, n)
               },
               d(e) {
                  e && L(t)
               }
            }
         }(e);
      return {
         c() {
            r && r.c()
         },
         m(e, n) {
            r && r.m(e, n), t = !0
         },
         p(e, l) {
            o ? o.p && (!t || 4718592 & l) && h(o, n, e, e[19], t ? $(n, e[19], l, on) : g(e[19]), rn) : r && r.p && (!t || 4194304 & l) && r.p(e, t ? l : -1)
         },
         i(e) {
            t || (Oe(r, e), t = !0)
         },
         o(e) {
            Ae(r, e), t = !1
         },
         d(e) {
            r && r.d(e)
         }
      }
   }

   function cn(e) {
      let t, n, o, r, l, i, c, a, d = !e[2] && ln(e);
      return {
         c() {
            t = O("div"), n = O("input"), o = F(), r = O("i"), l = F(), d && d.c(), K(n, "id", e[0]), n.disabled = e[2], K(n, "placeholder", e[1]), K(n, "class", "svelte-16909t2"), X(n, "error", e[3]), K(r, "class", "icon wxi-angle-down svelte-16909t2"), K(t, "class", "combo svelte-16909t2")
         },
         m(s, u) {
            N(s, t, u), T(t, n), Y(n, e[4]), T(t, o), T(t, r), T(t, l), d && d.m(t, null), i = !0, c || (a = [j(n, "input", e[16]), j(n, "input", e[10]), j(t, "click", e[17]), j(t, "keydown", e[18])], c = !0)
         },
         p(e, [o]) {
            (!i || 1 & o) && K(n, "id", e[0]), (!i || 4 & o) && (n.disabled = e[2]), (!i || 2 & o) && K(n, "placeholder", e[1]), 16 & o && n.value !== e[4] && Y(n, e[4]), (!i || 8 & o) && X(n, "error", e[3]), e[2] ? d && (Le(), Ae(d, 1, 1, (() => {
               d = null
            })), He()) : d ? (d.p(e, o), 4 & o && Oe(d, 1)) : (d = ln(e), d.c(), Oe(d, 1), d.m(t, null))
         },
         i(e) {
            i || (Oe(d), i = !0)
         },
         o(e) {
            Ae(d), i = !1
         },
         d(e) {
            e && L(t), d && d.d(), c = !1, s(a)
         }
      }
   }

   function an(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t, {
         value: l = ""
      } = t, {
         id: s = ft()
      } = t, {
         options: i = []
      } = t, {
         textField: c = "label"
      } = t, {
         placeholder: a = ""
      } = t, {
         disabled: d = !1
      } = t, {
         error: u = !1
      } = t;
      const p = ue();
      let f, m, $, h = "",
         g = null,
         v = [];
      return e.$$set = e => {
         "value" in e && n(11, l = e.value), "id" in e && n(0, s = e.id), "options" in e && n(12, i = e.options), "textField" in e && n(13, c = e.textField), "placeholder" in e && n(1, a = e.placeholder), "disabled" in e && n(2, d = e.disabled), "error" in e && n(3, u = e.error), "$$scope" in e && n(19, r = e.$$scope)
      }, e.$$.update = () => {
         30720 & e.$$.dirty && $ != l && (n(4, h = l || 0 === l ? i.find((e => e.id === l))[c] : ""), n(14, $ = l)), 4096 & e.$$.dirty && n(5, v = i)
      }, [s, a, d, u, h, v, f, m, function (e) {
         n(6, f = e.detail.navigate), n(7, m = e.detail.keydown)
      }, function (e) {
         const t = e.detail.id;
         (t || 0 === t) && (g = v.find((e => e.id === t)), n(4, h = g[c]), n(11, l = g.id), n(5, v = i), f(null), p("select", {
            selected: g
         }))
      }, function () {
         n(5, v = h ? i.filter((e => e[c].toLowerCase().includes(h.toLowerCase()))) : i), v.length ? f(0) : f(null)
      }, l, i, c, $, o, function () {
         h = this.value, n(4, h), n(14, $), n(11, l), n(12, i), n(13, c)
      }, () => f(0), e => m(e), r]
   }
   class dn extends Je {
      constructor(e) {
         super(), We(this, e, an, cn, c, {
            value: 11,
            id: 0,
            options: 12,
            textField: 13,
            placeholder: 1,
            disabled: 2,
            error: 3
         })
      }
   }

   function un(e) {
      let t, n, o;
      return {
         c() {
            t = O("input"), K(t, "id", e[1]), t.readOnly = e[2], t.disabled = e[5], K(t, "placeholder", e[4]), K(t, "style", e[7]), K(t, "class", "svelte-165ewa7"), X(t, "error", e[6])
         },
         m(r, l) {
            N(r, t, l), Y(t, e[0]), e[19](t), n || (o = [j(t, "input", e[18]), j(t, "input", e[20])], n = !0)
         },
         p(e, n) {
            2 & n && K(t, "id", e[1]), 4 & n && (t.readOnly = e[2]), 32 & n && (t.disabled = e[5]), 16 & n && K(t, "placeholder", e[4]), 128 & n && K(t, "style", e[7]), 1 & n && t.value !== e[0] && Y(t, e[0]), 64 & n && X(t, "error", e[6])
         },
         d(r) {
            r && L(t), e[19](null), n = !1, s(o)
         }
      }
   }

   function pn(e) {
      let t, n, o;
      return {
         c() {
            t = O("input"), K(t, "id", e[1]), t.readOnly = e[2], t.disabled = e[5], K(t, "placeholder", e[4]), K(t, "type", "number"), K(t, "style", e[7]), K(t, "class", "svelte-165ewa7"), X(t, "error", e[6])
         },
         m(r, l) {
            N(r, t, l), Y(t, e[0]), e[16](t), n || (o = [j(t, "input", e[15]), j(t, "input", e[17])], n = !0)
         },
         p(e, n) {
            2 & n && K(t, "id", e[1]), 4 & n && (t.readOnly = e[2]), 32 & n && (t.disabled = e[5]), 16 & n && K(t, "placeholder", e[4]), 128 & n && K(t, "style", e[7]), 1 & n && V(t.value) !== e[0] && Y(t, e[0]), 64 & n && X(t, "error", e[6])
         },
         d(r) {
            r && L(t), e[16](null), n = !1, s(o)
         }
      }
   }

   function fn(e) {
      let t, n, o;
      return {
         c() {
            t = O("input"), K(t, "id", e[1]), t.readOnly = e[2], t.disabled = e[5], K(t, "placeholder", e[4]), K(t, "type", "password"), K(t, "style", e[7]), K(t, "class", "svelte-165ewa7"), X(t, "error", e[6])
         },
         m(r, l) {
            N(r, t, l), Y(t, e[0]), e[13](t), n || (o = [j(t, "input", e[12]), j(t, "input", e[14])], n = !0)
         },
         p(e, n) {
            2 & n && K(t, "id", e[1]), 4 & n && (t.readOnly = e[2]), 32 & n && (t.disabled = e[5]), 16 & n && K(t, "placeholder", e[4]), 128 & n && K(t, "style", e[7]), 1 & n && t.value !== e[0] && Y(t, e[0]), 64 & n && X(t, "error", e[6])
         },
         d(r) {
            r && L(t), e[13](null), n = !1, s(o)
         }
      }
   }

   function mn(e) {
      let n;

      function o(e, t) {
         return "password" == e[3] ? fn : "number" == e[3] ? pn : un
      }
      let r = o(e),
         l = r(e);
      return {
         c() {
            l.c(), n = z()
         },
         m(e, t) {
            l.m(e, t), N(e, n, t)
         },
         p(e, [t]) {
            r === (r = o(e)) && l ? l.p(e, t) : (l.d(1), l = r(e), l && (l.c(), l.m(n.parentNode, n)))
         },
         i: t,
         o: t,
         d(e) {
            l.d(e), e && L(n)
         }
      }
   }

   function $n(e, t, n) {
      let {
         value: o = ""
      } = t, {
         id: r = ft()
      } = t, {
         readonly: l = !1
      } = t, {
         focus: s = !1
      } = t, {
         select: i = !1
      } = t, {
         type: c = "text"
      } = t, {
         placeholder: a = ""
      } = t, {
         disabled: d = !1
      } = t, {
         error: u = !1
      } = t, {
         inputStyle: p = ""
      } = t;
      const f = ue();
      let m;
      ce((() => {
         setTimeout((() => {
            s && m && m.focus(), i && m && m.select()
         }), 1)
      }));
      return e.$$set = e => {
         "value" in e && n(0, o = e.value), "id" in e && n(1, r = e.id), "readonly" in e && n(2, l = e.readonly), "focus" in e && n(10, s = e.focus), "select" in e && n(11, i = e.select), "type" in e && n(3, c = e.type), "placeholder" in e && n(4, a = e.placeholder), "disabled" in e && n(5, d = e.disabled), "error" in e && n(6, u = e.error), "inputStyle" in e && n(7, p = e.inputStyle)
      }, [o, r, l, c, a, d, u, p, m, f, s, i, function () {
         o = this.value, n(0, o)
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            m = e, n(8, m)
         }))
      }, () => f("input", {
         value: o
      }), function () {
         o = V(this.value), n(0, o)
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            m = e, n(8, m)
         }))
      }, () => f("input", {
         value: o
      }), function () {
         o = this.value, n(0, o)
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            m = e, n(8, m)
         }))
      }, () => f("input", {
         value: o
      })]
   }
   class hn extends Je {
      constructor(e) {
         super(), We(this, e, $n, mn, c, {
            value: 0,
            id: 1,
            readonly: 2,
            focus: 10,
            select: 11,
            type: 3,
            placeholder: 4,
            disabled: 5,
            error: 6,
            inputStyle: 7
         })
      }
   }

   function gn(e) {
      let n;
      return {
         c() {
            n = O("span"), K(n, "class", "spacer svelte-1qaa08h")
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function vn(e) {
      let n, o, r;
      return {
         c() {
            n = O("i"), K(n, "class", "pager wxi-angle-left svelte-1qaa08h")
         },
         m(t, l) {
            N(t, n, l), o || (r = j(n, "click", e[8]), o = !0)
         },
         p: t,
         d(e) {
            e && L(n), o = !1, r()
         }
      }
   }

   function wn(e) {
      let n;
      return {
         c() {
            n = O("span"), K(n, "class", "spacer svelte-1qaa08h")
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function bn(e) {
      let n, o, r;
      return {
         c() {
            n = O("i"), K(n, "class", "pager wxi-angle-right svelte-1qaa08h")
         },
         m(t, l) {
            N(t, n, l), o || (r = j(n, "click", e[9]), o = !0)
         },
         p: t,
         d(e) {
            e && L(n), o = !1, r()
         }
      }
   }

   function yn(e) {
      let n, o, r, l, s, i, c;

      function a(e, t) {
         return "right" != e[1] ? vn : gn
      }
      let d = a(e),
         u = d(e);

      function p(e, t) {
         return "left" != e[1] ? bn : wn
      }
      let f = p(e),
         m = f(e);
      return {
         c() {
            n = O("div"), u.c(), o = F(), r = O("span"), l = R(e[2]), s = F(), m.c(), K(r, "class", "label svelte-1qaa08h"), K(n, "class", "header svelte-1qaa08h")
         },
         m(t, a) {
            N(t, n, a), u.m(n, null), T(n, o), T(n, r), T(r, l), T(n, s), m.m(n, null), i || (c = j(r, "click", e[4]), i = !0)
         },
         p(e, [t]) {
            d === (d = a(e)) && u ? u.p(e, t) : (u.d(1), u = d(e), u && (u.c(), u.m(n, o))), 4 & t && U(l, e[2]), f === (f = p(e)) && m ? m.p(e, t) : (m.d(1), m = f(e), m && (m.c(), m.m(n, null)))
         },
         i: t,
         o: t,
         d(e) {
            e && L(n), u.d(), m.d(), i = !1, c()
         }
      }
   }

   function xn(e, t, n) {
      const o = ue(),
         r = fe("wx-i18n").getRaw().calendar.monthFull;
      let l, s, i, {
            date: c
         } = t,
         {
            type: a
         } = t,
         {
            part: d
         } = t;
      return e.$$set = e => {
         "date" in e && n(5, c = e.date), "type" in e && n(0, a = e.type), "part" in e && n(1, d = e.part)
      }, e.$$.update = () => {
         if (225 & e.$$.dirty) switch (n(6, l = c.getMonth()), n(7, s = c.getFullYear()), a) {
            case "month":
               n(2, i = `${r[l]} ${s}`);
               break;
            case "year":
               n(2, i = s);
               break;
            case "duodecade": {
               const e = s - s % 10;
               n(2, i = `${e} - ${e+9}`);
               break
            }
         }
      }, [a, d, i, o, function () {
         o("shift", {
            diff: 0,
            type: a
         })
      }, c, l, s, () => o("shift", {
         diff: -1,
         type: a
      }), () => o("shift", {
         diff: 1,
         type: a
      })]
   }
   let kn = class extends Je {
      constructor(e) {
         super(), We(this, e, xn, yn, c, {
            date: 5,
            type: 0,
            part: 1
         })
      }
   };

   function Sn(e) {
      let t, n, o, r;
      const l = e[2].default,
         s = f(l, e, e[1], null);
      return {
         c() {
            t = O("button"), s && s.c(), K(t, "class", "svelte-1tj7yhm")
         },
         m(l, c) {
            N(l, t, c), s && s.m(t, null), n = !0, o || (r = j(t, "click", (function () {
               i(e[0]) && e[0].apply(this, arguments)
            })), o = !0)
         },
         p(t, [o]) {
            e = t, s && s.p && (!n || 2 & o) && h(s, l, e, e[1], n ? $(l, e[1], o, null) : g(e[1]), null)
         },
         i(e) {
            n || (Oe(s, e), n = !0)
         },
         o(e) {
            Ae(s, e), n = !1
         },
         d(e) {
            e && L(t), s && s.d(e), o = !1, r()
         }
      }
   }

   function In(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t, {
         click: l
      } = t;
      return e.$$set = e => {
         "click" in e && n(0, l = e.click), "$$scope" in e && n(1, r = e.$$scope)
      }, [l, r, o]
   }
   class _n extends Je {
      constructor(e) {
         super(), We(this, e, In, Sn, c, {
            click: 0
         })
      }
   }

   function Mn(e, t, n) {
      const o = e.slice();
      return o[17] = t[n], o
   }

   function Cn(e, t, n) {
      const o = e.slice();
      return o[17] = t[n], o
   }

   function Tn(e) {
      let n, o, r = e[17] + "";
      return {
         c() {
            n = O("div"), o = R(r), K(n, "class", "weekday svelte-102f3tn")
         },
         m(e, t) {
            N(e, n, t), T(n, o)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Dn(e, t) {
      let n, o, r, l, s, i = t[17].day + "";
      return {
         key: e,
         first: null,
         c() {
            n = O("div"), o = R(i), r = F(), K(n, "class", l = "day " + t[17].css + " svelte-102f3tn"), K(n, "data-id", s = t[17].date), X(n, "out", !t[17].in), this.first = n
         },
         m(e, t) {
            N(e, n, t), T(n, o), T(n, r)
         },
         p(e, r) {
            t = e, 1 & r && i !== (i = t[17].day + "") && U(o, i), 1 & r && l !== (l = "day " + t[17].css + " svelte-102f3tn") && K(n, "class", l), 1 & r && s !== (s = t[17].date) && K(n, "data-id", s), 1 & r && X(n, "out", !t[17].in)
         },
         d(e) {
            e && L(n)
         }
      }
   }

   function En(e) {
      let n, o, r, l, s, i, c = [],
         a = new Map,
         d = e[1],
         u = [];
      for (let t = 0; t < d.length; t += 1) u[t] = Tn(Cn(e, d, t));
      let p = e[0];
      const f = e => e[17].date;
      for (let t = 0; t < p.length; t += 1) {
         let n = Mn(e, p, t),
            o = f(n);
         a.set(o, c[t] = Dn(o, n))
      }
      return {
         c() {
            n = O("div"), o = O("div");
            for (let e = 0; e < u.length; e += 1) u[e].c();
            r = F(), l = O("div");
            for (let e = 0; e < c.length; e += 1) c[e].c();
            K(o, "class", "weekdays svelte-102f3tn"), K(l, "class", "days svelte-102f3tn")
         },
         m(t, a) {
            N(t, n, a), T(n, o);
            for (let e = 0; e < u.length; e += 1) u[e] && u[e].m(o, null);
            T(n, r), T(n, l);
            for (let e = 0; e < c.length; e += 1) c[e] && c[e].m(l, null);
            s || (i = k(ut.call(null, l, e[2])), s = !0)
         },
         p(e, [t]) {
            if (2 & t) {
               let n;
               for (d = e[1], n = 0; n < d.length; n += 1) {
                  const r = Cn(e, d, n);
                  u[n] ? u[n].p(r, t) : (u[n] = Tn(r), u[n].c(), u[n].m(o, null))
               }
               for (; n < u.length; n += 1) u[n].d(1);
               u.length = d.length
            }
            1 & t && (p = e[0], c = Pe(c, t, f, 1, e, p, a, l, je, Dn, null, Mn))
         },
         i: t,
         o: t,
         d(e) {
            e && L(n), H(u, e);
            for (let e = 0; e < c.length; e += 1) c[e].d();
            s = !1, i()
         }
      }
   }

   function Nn(e) {
      const t = e.getDay();
      return 0 === t || 6 === t
   }

   function Ln(e, t, n) {
      let {
         value: o
      } = t, {
         current: r
      } = t, {
         cancel: l
      } = t, {
         select: s
      } = t, {
         part: i
      } = t, {
         markers: c = null
      } = t;
      const a = fe("wx-i18n").getRaw().calendar,
         d = (a.weekStart || 7) % 7,
         u = a.dayShort.slice(d).concat(a.dayShort.slice(0, d));
      let p, f;
      const m = (e, t, n) => new Date(e.getFullYear(), e.getMonth() + (t || 0), e.getDate() + (n || 0));
      let $ = "normal" !== i;
      const h = {
         click: function (e, t) {
            s && (t.stopPropagation(), s(new Date(new Date(e))));
            l && l()
         }
      };
      return e.$$set = e => {
         "value" in e && n(3, o = e.value), "current" in e && n(4, r = e.current), "cancel" in e && n(5, l = e.cancel), "select" in e && n(6, s = e.select), "part" in e && n(7, i = e.part), "markers" in e && n(8, c = e.markers)
      }, e.$$.update = () => {
         if (921 & e.$$.dirty) {
            n(9, f = "normal" == i ? [o ? m(o).valueOf() : 0] : o ? [o.start ? m(o.start).valueOf() : 0, o.end ? m(o.end).valueOf() : 0] : [0, 0]);
            const e = function () {
                  const e = m(r, 0, 1 - r.getDate());
                  return e.setDate(e.getDate() - (e.getDay() - (d - 7)) % 7), e
               }(),
               t = function () {
                  const e = m(r, 1, -r.getDate());
                  return e.setDate(e.getDate() + (6 - e.getDay() + d) % 7), e
               }(),
               l = r.getMonth();
            n(0, p = []);
            for (let n = e; n <= t; n.setDate(n.getDate() + 1)) {
               const e = {
                  day: n.getDate(),
                  in: n.getMonth() === l,
                  date: n.valueOf()
               };
               let t = "";
               if (t += e.in ? "" : " inactive", t += f.indexOf(e.date) > -1 ? " selected" : "", $) {
                  const n = e.date == f[0],
                     o = e.date == f[1];
                  n && !o ? t += " left" : o && !n && (t += " right"), e.date > f[0] && e.date < f[1] && (t += " inrange")
               }
               if (t += Nn(n) ? " weekend" : "", c) {
                  const e = c(n);
                  e && (t += " " + e)
               }
               p.push({
                  ...e,
                  css: t
               })
            }
         }
      }, [p, u, h, o, r, l, s, i, c, f]
   }

   function Hn(e, t, n) {
      const o = e.slice();
      return o[9] = t[n], o[11] = n, o
   }

   function On(e) {
      let t, n, o, r = e[9] + "";
      return {
         c() {
            t = O("div"), n = R(r), o = F(), K(t, "class", "month svelte-1nvkxt9"), K(t, "data-id", e[11]), X(t, "current", e[1] === e[11])
         },
         m(e, r) {
            N(e, t, r), T(t, n), T(t, o)
         },
         p(e, n) {
            2 & n && X(t, "current", e[1] === e[11])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function An(e) {
      let n, o = e[2].done + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Rn(e) {
      let t, n, o, r, l, s, i, c = e[3],
         a = [];
      for (let t = 0; t < c.length; t += 1) a[t] = On(Hn(e, c, t));
      return r = new _n({
         props: {
            click: e[0],
            $$slots: {
               default: [An]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div");
            for (let e = 0; e < a.length; e += 1) a[e].c();
            n = F(), o = O("div"), Ye(r.$$.fragment), K(t, "class", "months svelte-1nvkxt9"), K(o, "class", "buttons svelte-1nvkxt9")
         },
         m(c, d) {
            N(c, t, d);
            for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, null);
            N(c, n, d), N(c, o, d), Ge(r, o, null), l = !0, s || (i = k(ut.call(null, t, e[4])), s = !0)
         },
         p(e, [n]) {
            if (10 & n) {
               let o;
               for (c = e[3], o = 0; o < c.length; o += 1) {
                  const r = Hn(e, c, o);
                  a[o] ? a[o].p(r, n) : (a[o] = On(r), a[o].c(), a[o].m(t, null))
               }
               for (; o < a.length; o += 1) a[o].d(1);
               a.length = c.length
            }
            const o = {};
            1 & n && (o.click = e[0]), 4096 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), r.$set(o)
         },
         i(e) {
            l || (Oe(r.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(r.$$.fragment, e), l = !1
         },
         d(e) {
            e && L(t), H(a, e), e && L(n), e && L(o), Be(r), s = !1, i()
         }
      }
   }

   function Fn(e, t, n) {
      let {
         value: o
      } = t, {
         current: r
      } = t, {
         cancel: l
      } = t, {
         part: s
      } = t;
      const i = fe("wx-i18n").getRaw().calendar,
         c = i.monthShort;
      let a;
      const d = {
         click: function (e) {
            (e || 0 === e) && (r.setMonth(e), n(6, r));
            "normal" === s && n(5, o = new Date(r));
            l()
         }
      };
      return e.$$set = e => {
         "value" in e && n(5, o = e.value), "current" in e && n(6, r = e.current), "cancel" in e && n(0, l = e.cancel), "part" in e && n(7, s = e.part)
      }, e.$$.update = () => {
         224 & e.$$.dirty && ("normal" !== s && o ? "left" === s && o.start ? n(1, a = o.start.getMonth()) : "right" === s && o.end ? n(1, a = o.end.getMonth()) : n(1, a = r.getMonth()) : n(1, a = r.getMonth()))
      }, [l, a, i, c, d, o, r, s]
   }

   function zn(e, t, n) {
      const o = e.slice();
      return o[9] = t[n], o[11] = n, o
   }

   function jn(e) {
      let t, n, o, r, l = e[9] + "";
      return {
         c() {
            t = O("div"), n = R(l), o = F(), K(t, "class", "year svelte-62ny1k"), K(t, "data-id", r = e[9]), X(t, "current", e[2] == e[9]), X(t, "prev-decade", 0 === e[11]), X(t, "next-decade", 11 === e[11])
         },
         m(e, r) {
            N(e, t, r), T(t, n), T(t, o)
         },
         p(e, o) {
            2 & o && l !== (l = e[9] + "") && U(n, l), 2 & o && r !== (r = e[9]) && K(t, "data-id", r), 6 & o && X(t, "current", e[2] == e[9])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function qn(e) {
      let n, o = e[3].done + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Pn(e) {
      let t, n, o, r, l, s, i, c = e[1],
         a = [];
      for (let t = 0; t < c.length; t += 1) a[t] = jn(zn(e, c, t));
      return r = new _n({
         props: {
            click: e[0],
            $$slots: {
               default: [qn]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div");
            for (let e = 0; e < a.length; e += 1) a[e].c();
            n = F(), o = O("div"), Ye(r.$$.fragment), K(t, "class", "years svelte-62ny1k"), K(o, "class", "buttons svelte-62ny1k")
         },
         m(c, d) {
            N(c, t, d);
            for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, null);
            N(c, n, d), N(c, o, d), Ge(r, o, null), l = !0, s || (i = k(ut.call(null, t, e[4])), s = !0)
         },
         p(e, [n]) {
            if (6 & n) {
               let o;
               for (c = e[1], o = 0; o < c.length; o += 1) {
                  const r = zn(e, c, o);
                  a[o] ? a[o].p(r, n) : (a[o] = jn(r), a[o].c(), a[o].m(t, null))
               }
               for (; o < a.length; o += 1) a[o].d(1);
               a.length = c.length
            }
            const o = {};
            1 & n && (o.click = e[0]), 4096 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), r.$set(o)
         },
         i(e) {
            l || (Oe(r.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(r.$$.fragment, e), l = !1
         },
         d(e) {
            e && L(t), H(a, e), e && L(n), e && L(o), Be(r), s = !1, i()
         }
      }
   }

   function Kn(e, t, n) {
      const o = fe("wx-i18n").getRaw().calendar;
      let r, l, {
            value: s
         } = t,
         {
            current: i
         } = t,
         {
            cancel: c
         } = t,
         {
            part: a
         } = t;
      const d = {
         click: function (e) {
            e && (i.setFullYear(e), n(5, i));
            "normal" === a && n(6, s = new Date(i));
            c()
         }
      };
      return e.$$set = e => {
         "value" in e && n(6, s = e.value), "current" in e && n(5, i = e.current), "cancel" in e && n(0, c = e.cancel), "part" in e && n(7, a = e.part)
      }, e.$$.update = () => {
         if (38 & e.$$.dirty) {
            n(2, l = i.getFullYear());
            const e = l - l % 10 - 1,
               t = e + 12;
            n(1, r = []);
            for (let n = e; n < t; ++n) r.push(n)
         }
      }, [c, r, l, o, d, i, s, a]
   }
   const Vn = {
      month: {
         component: class extends Je {
            constructor(e) {
               super(), We(this, e, Ln, En, c, {
                  value: 3,
                  current: 4,
                  cancel: 5,
                  select: 6,
                  part: 7,
                  markers: 8
               })
            }
         },
         next: function (e) {
            return (e = new Date(e)).setMonth(e.getMonth() + 1), e
         },
         prev: function (e) {
            let t = new Date(e);
            t.setMonth(e.getMonth() - 1);
            for (; e.getMonth() === t.getMonth();) t.setDate(t.getDate() - 1);
            return t
         }
      },
      year: {
         component: class extends Je {
            constructor(e) {
               super(), We(this, e, Fn, Rn, c, {
                  value: 5,
                  current: 6,
                  cancel: 0,
                  part: 7
               })
            }
         },
         next: function (e) {
            return (e = new Date(e)).setFullYear(e.getFullYear() + 1), e
         },
         prev: function (e) {
            return (e = new Date(e)).setFullYear(e.getFullYear() - 1), e
         }
      },
      duodecade: {
         component: class extends Je {
            constructor(e) {
               super(), We(this, e, Kn, Pn, c, {
                  value: 6,
                  current: 5,
                  cancel: 0,
                  part: 7
               })
            }
         },
         next: function (e) {
            return (e = new Date(e)).setFullYear(e.getFullYear() + 10), e
         },
         prev: function (e) {
            return (e = new Date(e)).setFullYear(e.getFullYear() - 10), e
         }
      }
   };

   function Un(e) {
      let t, n, o, r, l, s, i, c, a = e[2] && Yn(e);
      return r = new _n({
         props: {
            click: e[14],
            $$slots: {
               default: [Bn]
            },
            $$scope: {
               ctx: e
            }
         }
      }), i = new _n({
         props: {
            click: e[15],
            $$slots: {
               default: [Wn]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div"), a && a.c(), n = F(), o = O("div"), Ye(r.$$.fragment), l = F(), s = O("div"), Ye(i.$$.fragment), K(o, "class", "button-item svelte-sor66p"), K(s, "class", "button-item svelte-sor66p"), K(t, "class", "buttons svelte-sor66p")
         },
         m(e, d) {
            N(e, t, d), a && a.m(t, null), T(t, n), T(t, o), Ge(r, o, null), T(t, l), T(t, s), Ge(i, s, null), c = !0
         },
         p(e, o) {
            e[2] ? a ? (a.p(e, o), 4 & o && Oe(a, 1)) : (a = Yn(e), a.c(), Oe(a, 1), a.m(t, n)) : a && (Le(), Ae(a, 1, 1, (() => {
               a = null
            })), He());
            const l = {};
            131072 & o && (l.$$scope = {
               dirty: o,
               ctx: e
            }), r.$set(l);
            const s = {};
            131072 & o && (s.$$scope = {
               dirty: o,
               ctx: e
            }), i.$set(s)
         },
         i(e) {
            c || (Oe(a), Oe(r.$$.fragment, e), Oe(i.$$.fragment, e), c = !0)
         },
         o(e) {
            Ae(a), Ae(r.$$.fragment, e), Ae(i.$$.fragment, e), c = !1
         },
         d(e) {
            e && L(t), a && a.d(), Be(r), Be(i)
         }
      }
   }

   function Yn(e) {
      let t, n, o;
      return n = new _n({
         props: {
            click: e[13],
            $$slots: {
               default: [Gn]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), K(t, "class", "button-item svelte-sor66p")
         },
         m(e, r) {
            N(e, t, r), Ge(n, t, null), o = !0
         },
         p(e, t) {
            const o = {};
            131072 & t && (o.$$scope = {
               dirty: t,
               ctx: e
            }), n.$set(o)
         },
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function Gn(e) {
      let n, o = e[7]("done") + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Bn(e) {
      let n, o = e[7]("clear") + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Wn(e) {
      let n, o = e[7]("today") + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Jn(e) {
      let t, n, o, r, l, s, i, c, a;
      o = new kn({
         props: {
            date: e[1],
            part: e[3],
            type: e[6]
         }
      }), o.$on("shift", e[12]);
      var d = Vn[e[6]].component;

      function u(e) {
         return {
            props: {
               value: e[0],
               current: e[1],
               part: e[3],
               markers: e[4],
               select: e[11],
               cancel: e[9]
            }
         }
      }
      d && (s = ee(d, u(e)));
      let p = "month" === e[6] && e[5] && Un(e);
      return {
         c() {
            t = O("div"), n = O("div"), Ye(o.$$.fragment), r = F(), l = O("div"), s && Ye(s.$$.fragment), i = F(), p && p.c(), K(n, "class", "wrap svelte-sor66p"), K(t, "class", c = "calendar " + ("normal" !== e[3] ? "part" : "") + " svelte-sor66p")
         },
         m(e, c) {
            N(e, t, c), T(t, n), Ge(o, n, null), T(n, r), T(n, l), s && Ge(s, l, null), T(l, i), p && p.m(l, null), a = !0
         },
         p(e, [n]) {
            const r = {};
            2 & n && (r.date = e[1]), 8 & n && (r.part = e[3]), 64 & n && (r.type = e[6]), o.$set(r);
            const f = {};
            if (1 & n && (f.value = e[0]), 2 & n && (f.current = e[1]), 8 & n && (f.part = e[3]), 16 & n && (f.markers = e[4]), 64 & n && d !== (d = Vn[e[6]].component)) {
               if (s) {
                  Le();
                  const e = s;
                  Ae(e.$$.fragment, 1, 0, (() => {
                     Be(e, 1)
                  })), He()
               }
               d ? (s = ee(d, u(e)), Ye(s.$$.fragment), Oe(s.$$.fragment, 1), Ge(s, l, i)) : s = null
            } else d && s.$set(f);
            "month" === e[6] && e[5] ? p ? (p.p(e, n), 96 & n && Oe(p, 1)) : (p = Un(e), p.c(), Oe(p, 1), p.m(l, null)) : p && (Le(), Ae(p, 1, 1, (() => {
               p = null
            })), He()), (!a || 8 & n && c !== (c = "calendar " + ("normal" !== e[3] ? "part" : "") + " svelte-sor66p")) && K(t, "class", c)
         },
         i(e) {
            a || (Oe(o.$$.fragment, e), s && Oe(s.$$.fragment, e), Oe(p), a = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), s && Ae(s.$$.fragment, e), Ae(p), a = !1
         },
         d(e) {
            e && L(t), Be(o), s && Be(s), p && p.d()
         }
      }
   }

   function Xn(e, t, n) {
      const o = ue(),
         r = fe("wx-i18n").getGroup("calendar");
      let {
         value: l
      } = t, {
         current: s
      } = t, {
         done: i = !1
      } = t, {
         part: c = "normal"
      } = t, {
         markers: a = null
      } = t, {
         buttons: d = !0
      } = t, u = "month";

      function p(e, t) {
         e.preventDefault(), o("change", {
            value: t
         })
      }

      function f(e) {
         0 == e.diff ? "month" === u ? n(6, u = "year") : "year" === u && n(6, u = "duodecade") : o("shift", e)
      }
      return e.$$set = e => {
         "value" in e && n(0, l = e.value), "current" in e && n(1, s = e.current), "done" in e && n(2, i = e.done), "part" in e && n(3, c = e.part), "markers" in e && n(4, a = e.markers), "buttons" in e && n(5, d = e.buttons)
      }, [l, s, i, c, a, d, u, r, p, function () {
         "duodecade" === u ? n(6, u = "year") : "year" === u && n(6, u = "month")
      }, f, function (e) {
         o("change", {
            select: !0,
            value: e
         })
      }, e => f(e.detail), e => p(e, -1), e => p(e, null), e => p(e, new Date)]
   }
   class Zn extends Je {
      constructor(e) {
         super(), We(this, e, Xn, Jn, c, {
            value: 0,
            current: 1,
            done: 2,
            part: 3,
            markers: 4,
            buttons: 5
         })
      }
   }

   function Qn(e) {
      let t, n;
      return t = new Zn({
         props: {
            value: e[0],
            current: e[1],
            markers: e[2],
            buttons: e[3]
         }
      }), t.$on("shift", e[6]), t.$on("change", e[7]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, [n]) {
            const o = {};
            1 & n && (o.value = e[0]), 2 & n && (o.current = e[1]), 4 & n && (o.markers = e[2]), 8 & n && (o.buttons = e[3]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function eo(e, t, n) {
      const o = ue();
      let {
         value: r
      } = t, {
         current: l
      } = t, {
         markers: s = null
      } = t, {
         buttons: i = !0
      } = t;

      function c({
         diff: e,
         type: t
      }) {
         const o = Vn[t];
         n(1, l = e > 0 ? o.next(l) : o.prev(l))
      }

      function a(e) {
         const t = e.value;
         t ? (n(1, l = new Date(t)), n(0, r = new Date(t))) : n(0, r = null), o("change", {
            value: r
         })
      }
      return e.$$set = e => {
         "value" in e && n(0, r = e.value), "current" in e && n(1, l = e.current), "markers" in e && n(2, s = e.markers), "buttons" in e && n(3, i = e.buttons)
      }, e.$$.update = () => {
         1 & e.$$.dirty && (l || n(1, l = r || new Date))
      }, [r, l, s, i, c, a, e => c(e.detail), e => a(e.detail)]
   }
   class to extends Je {
      constructor(e) {
         super(), We(this, e, eo, Qn, c, {
            value: 0,
            current: 1,
            markers: 2,
            buttons: 3
         })
      }
   }

   function no(e) {
      let t, n;
      return t = new Ot({
         props: {
            cancel: e[10],
            width: e[4],
            align: e[5],
            autoFit: !!e[5],
            $$slots: {
               default: [oo]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            16 & n && (o.width = e[4]), 32 & n && (o.align = e[5]), 32 & n && (o.autoFit = !!e[5]), 32897 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function oo(e) {
      let t, n;
      return t = new to({
         props: {
            buttons: e[7],
            value: e[0]
         }
      }), t.$on("change", e[11]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            128 & n && (o.buttons = e[7]), 1 & n && (o.value = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function ro(e) {
      let t, n, o, r, l, i, c, a;
      n = new hn({
         props: {
            value: e[0] ? e[9](e[0]) : e[0],
            id: e[1],
            readonly: !0,
            disabled: e[2],
            error: e[3],
            placeholder: e[6],
            inputStyle: "cursor: pointer; width: 100%; padding-right: calc(var(--wx-input-icon-size) + var(--wx-input-icon-indent) * 2);"
         }
      });
      let d = e[8] && !e[2] && no(e);
      return {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), r = O("i"), l = F(), d && d.c(), K(r, "class", "icon wxi-calendar svelte-lhok4w"), K(t, "class", "datepicker svelte-lhok4w"), X(t, "disabled", e[2]), X(t, "error", e[3])
         },
         m(s, u) {
            N(s, t, u), Ge(n, t, null), T(t, o), T(t, r), T(t, l), d && d.m(t, null), i = !0, c || (a = [j(window, "scroll", e[10]), j(t, "click", e[13])], c = !0)
         },
         p(e, [o]) {
            const r = {};
            1 & o && (r.value = e[0] ? e[9](e[0]) : e[0]), 2 & o && (r.id = e[1]), 4 & o && (r.disabled = e[2]), 8 & o && (r.error = e[3]), 64 & o && (r.placeholder = e[6]), n.$set(r), e[8] && !e[2] ? d ? (d.p(e, o), 260 & o && Oe(d, 1)) : (d = no(e), d.c(), Oe(d, 1), d.m(t, null)) : d && (Le(), Ae(d, 1, 1, (() => {
               d = null
            })), He()), (!i || 4 & o) && X(t, "disabled", e[2]), (!i || 8 & o) && X(t, "error", e[3])
         },
         i(e) {
            i || (Oe(n.$$.fragment, e), Oe(d), i = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), Ae(d), i = !1
         },
         d(e) {
            e && L(t), Be(n), d && d.d(), c = !1, s(a)
         }
      }
   }

   function lo(e, t, n) {
      let {
         value: o
      } = t, {
         id: r = ft()
      } = t, {
         disabled: l = !1
      } = t, {
         error: s = !1
      } = t, {
         width: i = "unset"
      } = t, {
         align: c = "start"
      } = t, {
         placeholder: a = ""
      } = t, {
         format: d = "%m/%d/%Y"
      } = t, {
         buttons: u
      } = t;
      const p = fe("wx-i18n").getRaw().calendar;
      let f, m = "function" == typeof d ? d : function (e, t) {
         return "function" == typeof e ? e : function (n) {
            return n ? (n.getMonth || (n = new Date(n)), e.replace(gt, (e => ht(e, n, t)))) : ""
         }
      }(d, p);

      function $() {
         n(8, f = !1)
      }
      return e.$$set = e => {
         "value" in e && n(0, o = e.value), "id" in e && n(1, r = e.id), "disabled" in e && n(2, l = e.disabled), "error" in e && n(3, s = e.error), "width" in e && n(4, i = e.width), "align" in e && n(5, c = e.align), "placeholder" in e && n(6, a = e.placeholder), "format" in e && n(12, d = e.format), "buttons" in e && n(7, u = e.buttons)
      }, [o, r, l, s, i, c, a, u, f, m, $, function (e) {
         const t = e.detail.value;
         n(0, o = t), setTimeout($, 1)
      }, d, () => n(8, f = !0)]
   }
   class so extends Je {
      constructor(e) {
         super(), We(this, e, lo, ro, c, {
            value: 0,
            id: 1,
            disabled: 2,
            error: 3,
            width: 4,
            align: 5,
            placeholder: 6,
            format: 12,
            buttons: 7
         })
      }
   }

   function io(e) {
      let t, n, o, r, l, s, i;
      return o = new Zn({
         props: {
            value: {
               start: e[0],
               end: e[1]
            },
            current: e[5],
            markers: e[3],
            buttons: !1,
            part: "left"
         }
      }), o.$on("shift", e[11]), o.$on("change", e[12]), s = new Zn({
         props: {
            value: {
               start: e[0],
               end: e[1]
            },
            current: e[6],
            markers: e[3],
            done: e[2],
            buttons: e[4],
            part: "right"
         }
      }), s.$on("shift", e[13]), s.$on("change", e[14]), {
         c() {
            t = O("div"), n = O("div"), Ye(o.$$.fragment), r = F(), l = O("div"), Ye(s.$$.fragment), K(n, "class", "half svelte-y4vzbo"), K(l, "class", "half svelte-y4vzbo"), K(t, "class", "calendars svelte-y4vzbo")
         },
         m(e, c) {
            N(e, t, c), T(t, n), Ge(o, n, null), T(t, r), T(t, l), Ge(s, l, null), i = !0
         },
         p(e, [t]) {
            const n = {};
            3 & t && (n.value = {
               start: e[0],
               end: e[1]
            }), 32 & t && (n.current = e[5]), 8 & t && (n.markers = e[3]), o.$set(n);
            const r = {};
            3 & t && (r.value = {
               start: e[0],
               end: e[1]
            }), 64 & t && (r.current = e[6]), 8 & t && (r.markers = e[3]), 4 & t && (r.done = e[2]), 16 & t && (r.buttons = e[4]), s.$set(r)
         },
         i(e) {
            i || (Oe(o.$$.fragment, e), Oe(s.$$.fragment, e), i = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), Ae(s.$$.fragment, e), i = !1
         },
         d(e) {
            e && L(t), Be(o), Be(s)
         }
      }
   }

   function co(e, t, n) {
      const o = new Date(e);
      return o.setMonth(o.getMonth() + t), n && o.valueOf() == n.valueOf() ? n : o
   }

   function ao(e, t, n) {
      const o = ue();
      let r, l, {
            start: s
         } = t,
         {
            end: i
         } = t,
         {
            done: c
         } = t,
         {
            current: a
         } = t,
         {
            markers: d = null
         } = t,
         {
            buttons: u = !0
         } = t;

      function p({
         diff: e,
         type: t
      }) {
         const o = Vn[t];
         e > 0 ? n(6, l = o.next(l)) : e < 0 && n(5, r = o.prev(r))
      }

      function f(e) {
         $(e), s && n(5, r = new Date(s))
      }

      function m(e) {
         $(e), i && n(6, l = new Date(i))
      }

      function $(e) {
         const t = e.value,
            r = -1 === t;
         r || (e.select ? !s || i ? (n(0, s = t), n(1, i = null)) : s > t ? (n(1, i = s), n(0, s = t)) : n(1, i = t) : t ? (n(0, s = new Date(t)), n(1, i = new Date(t))) : n(0, s = n(1, i = null))), !r && c || o("change", {
            start: s,
            end: i
         })
      }
      return e.$$set = e => {
         "start" in e && n(0, s = e.start), "end" in e && n(1, i = e.end), "done" in e && n(2, c = e.done), "current" in e && n(10, a = e.current), "markers" in e && n(3, d = e.markers), "buttons" in e && n(4, u = e.buttons)
      }, e.$$.update = () => {
         var t;
         1 & e.$$.dirty && n(5, r = (t = s) ? new Date(t) : a || new Date), 32 & e.$$.dirty && r && n(6, l = co(r, 1)), 64 & e.$$.dirty && l && n(5, r = co(l, -1))
      }, [s, i, c, d, u, r, l, p, f, m, a, e => p(e.detail), e => f(e.detail), e => p(e.detail), e => m(e.detail)]
   }
   class uo extends Je {
      constructor(e) {
         super(), We(this, e, ao, io, c, {
            start: 0,
            end: 1,
            done: 2,
            current: 10,
            markers: 3,
            buttons: 4
         })
      }
   }

   function po(e, t, n) {
      const o = e.slice();
      return o[8] = t[n], o
   }

   function fo(e, t) {
      let n, o, r, l = t[8][t[1]] + "";
      return {
         key: e,
         first: null,
         c() {
            n = O("option"), o = R(l), n.__value = r = t[8].id, n.value = n.__value, K(n, "class", "svelte-1355qs9"), this.first = n
         },
         m(e, t) {
            N(e, n, t), T(n, o)
         },
         p(e, s) {
            t = e, 6 & s && l !== (l = t[8][t[1]] + "") && U(o, l), 4 & s && r !== (r = t[8].id) && (n.__value = r, n.value = n.__value)
         },
         d(e) {
            e && L(n)
         }
      }
   }

   function mo(e) {
      let t, n;
      return {
         c() {
            t = O("div"), n = R(e[3]), K(t, "class", "placeholder svelte-1355qs9")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            8 & t && U(n, e[3])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function $o(e) {
      let n, o, r, l, s, i, c, a = [],
         d = new Map,
         u = e[2];
      const p = e => e[8].id;
      for (let t = 0; t < u.length; t += 1) {
         let n = po(e, u, t),
            o = p(n);
         d.set(o, a[t] = fo(o, n))
      }
      let f = (!e[0] || 0 !== e[0]) && mo(e);
      return {
         c() {
            n = O("div"), o = O("select");
            for (let e = 0; e < a.length; e += 1) a[e].c();
            r = F(), f && f.c(), l = F(), s = O("i"), K(o, "id", e[6]), o.disabled = e[4], K(o, "class", "svelte-1355qs9"), void 0 === e[0] && ke((() => e[7].call(o))), X(o, "error", e[5]), K(s, "class", "icon wxi-angle-down svelte-1355qs9"), K(n, "class", "svelte-1355qs9")
         },
         m(t, d) {
            N(t, n, d), T(n, o);
            for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(o, null);
            B(o, e[0], !0), T(n, r), f && f.m(n, null), T(n, l), T(n, s), i || (c = j(o, "change", e[7]), i = !0)
         },
         p(e, [t]) {
            6 & t && (u = e[2], a = Pe(a, t, p, 1, e, u, d, o, je, fo, null, po)), 64 & t && K(o, "id", e[6]), 16 & t && (o.disabled = e[4]), 5 & t && B(o, e[0]), 32 & t && X(o, "error", e[5]), e[0] && 0 === e[0] ? f && (f.d(1), f = null) : f ? f.p(e, t) : (f = mo(e), f.c(), f.m(n, l))
         },
         i: t,
         o: t,
         d(e) {
            e && L(n);
            for (let e = 0; e < a.length; e += 1) a[e].d();
            f && f.d(), i = !1, c()
         }
      }
   }

   function ho(e, t, n) {
      let {
         label: o = "label"
      } = t, {
         value: r = ""
      } = t, {
         options: l = []
      } = t, {
         placeholder: s = ""
      } = t, {
         disabled: i = !1
      } = t, {
         error: c = !1
      } = t, {
         id: a = ft()
      } = t;
      return e.$$set = e => {
         "label" in e && n(1, o = e.label), "value" in e && n(0, r = e.value), "options" in e && n(2, l = e.options), "placeholder" in e && n(3, s = e.placeholder), "disabled" in e && n(4, i = e.disabled), "error" in e && n(5, c = e.error), "id" in e && n(6, a = e.id)
      }, [r, o, l, s, i, c, a, function () {
         r = function (e) {
            const t = e.querySelector(":checked");
            return t && t.__value
         }(this), n(0, r), n(2, l)
      }]
   }
   class go extends Je {
      constructor(e) {
         super(), We(this, e, ho, $o, c, {
            label: 1,
            value: 0,
            options: 2,
            placeholder: 3,
            disabled: 4,
            error: 5,
            id: 6
         })
      }
   }

   function vo(e) {
      let t, n;
      return {
         c() {
            t = O("label"), n = R(e[2]), K(t, "for", e[1]), K(t, "class", "svelte-yw8n7a")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, o) {
            4 & o && U(n, e[2]), 2 & o && K(t, "for", e[1])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function wo(e) {
      let n, o, r, l, i, c, a, d = e[2] && vo(e);
      return {
         c() {
            n = O("div"), d && d.c(), o = F(), r = O("div"), l = O("input"), K(l, "id", e[1]), K(l, "type", "range"), K(l, "min", e[4]), K(l, "max", e[5]), K(l, "step", e[6]), l.disabled = e[7], K(l, "style", e[8]), K(l, "class", "svelte-yw8n7a"), K(r, "class", "svelte-yw8n7a"), K(n, "class", "slider svelte-yw8n7a"), K(n, "style", i = e[3] ? `width: ${e[3]}` : "")
         },
         m(t, s) {
            N(t, n, s), d && d.m(n, null), T(n, o), T(n, r), T(r, l), Y(l, e[0]), c || (a = [j(l, "change", e[10]), j(l, "input", e[10])], c = !0)
         },
         p(e, [t]) {
            e[2] ? d ? d.p(e, t) : (d = vo(e), d.c(), d.m(n, o)) : d && (d.d(1), d = null), 2 & t && K(l, "id", e[1]), 16 & t && K(l, "min", e[4]), 32 & t && K(l, "max", e[5]), 64 & t && K(l, "step", e[6]), 128 & t && (l.disabled = e[7]), 256 & t && K(l, "style", e[8]), 1 & t && Y(l, e[0]), 8 & t && i !== (i = e[3] ? `width: ${e[3]}` : "") && K(n, "style", i)
         },
         i: t,
         o: t,
         d(e) {
            e && L(n), d && d.d(), c = !1, s(a)
         }
      }
   }

   function bo(e, t, n) {
      let {
         id: o = ft()
      } = t, {
         label: r = ""
      } = t, {
         width: l = ""
      } = t, {
         min: s = 0
      } = t, {
         max: i = 100
      } = t, {
         value: c = 0
      } = t, {
         step: a = 1
      } = t, {
         disabled: d = !1
      } = t, u = 0, p = "";
      return e.$$set = e => {
         "id" in e && n(1, o = e.id), "label" in e && n(2, r = e.label), "width" in e && n(3, l = e.width), "min" in e && n(4, s = e.min), "max" in e && n(5, i = e.max), "value" in e && n(0, c = e.value), "step" in e && n(6, a = e.step), "disabled" in e && n(7, d = e.disabled)
      }, e.$$.update = () => {
         689 & e.$$.dirty && (n(9, u = (c - s) / (i - s) * 100 + "%"), n(8, p = d ? "" : `background: linear-gradient(90deg, var(--wx-slider-primary) 0% ${u}, var(--wx-slider-background) ${u} 100%);`), isNaN(c) && n(0, c = 0))
      }, [c, o, r, l, s, i, a, d, p, u, function () {
         c = V(this.value), n(0, c), n(4, s), n(5, i), n(7, d), n(9, u)
      }]
   }
   class yo extends Je {
      constructor(e) {
         super(), We(this, e, bo, wo, c, {
            id: 1,
            label: 2,
            width: 3,
            min: 4,
            max: 5,
            value: 0,
            step: 6,
            disabled: 7
         })
      }
   }

   function xo(e, {
      delay: t = 0,
      duration: o = 400,
      easing: r = n
   } = {}) {
      const l = +getComputedStyle(e).opacity;
      return {
         delay: t,
         duration: o,
         easing: r,
         css: e => "opacity: " + e * l
      }
   }

   function ko(e) {
      let t, n, o, r, l, s, i, c, a, d, u, p = e[0].text + "";
      return {
         c() {
            t = O("div"), n = O("div"), o = R(p), r = F(), l = O("div"), s = O("i"), K(n, "class", "text svelte-1rtnb7d"), K(s, "class", "close wxi-close svelte-1rtnb7d"), K(l, "class", "button svelte-1rtnb7d"), K(t, "class", i = "message " + (e[0].type ? e[0].type : "") + " svelte-1rtnb7d"), K(t, "role", "status"), K(t, "aria-live", "polite")
         },
         m(i, c) {
            N(i, t, c), T(t, n), T(n, o), T(t, r), T(t, l), T(l, s), a = !0, d || (u = j(s, "click", e[1]), d = !0)
         },
         p(e, [n]) {
            (!a || 1 & n) && p !== (p = e[0].text + "") && U(o, p), (!a || 1 & n && i !== (i = "message " + (e[0].type ? e[0].type : "") + " svelte-1rtnb7d")) && K(t, "class", i)
         },
         i(e) {
            a || (ke((() => {
               a && (c || (c = Fe(t, xo, {}, !0)), c.run(1))
            })), a = !0)
         },
         o(e) {
            c || (c = Fe(t, xo, {}, !1)), c.run(0), a = !1
         },
         d(e) {
            e && L(t), e && c && c.end(), d = !1, u()
         }
      }
   }

   function So(e, t, n) {
      let {
         notice: o = {}
      } = t;
      return e.$$set = e => {
         "notice" in e && n(0, o = e.notice)
      }, [o, function () {
         o.remove && o.remove()
      }]
   }
   class Io extends Je {
      constructor(e) {
         super(), We(this, e, So, ko, c, {
            notice: 0
         })
      }
   }

   function _o(e, t, n) {
      const o = e.slice();
      return o[1] = t[n], o
   }

   function Mo(e, t) {
      let n, o, r;
      return o = new Io({
         props: {
            notice: t[1]
         }
      }), {
         key: e,
         first: null,
         c() {
            n = z(), Ye(o.$$.fragment), this.first = n
         },
         m(e, t) {
            N(e, n, t), Ge(o, e, t), r = !0
         },
         p(e, n) {
            t = e;
            const r = {};
            1 & n && (r.notice = t[1]), o.$set(r)
         },
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(n), Be(o, e)
         }
      }
   }

   function Co(e) {
      let t, n, o = [],
         r = new Map,
         l = e[0];
      const s = e => e[1].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = _o(e, l, t),
            i = s(n);
         r.set(i, o[t] = Mo(i, n))
      }
      return {
         c() {
            t = O("div");
            for (let e = 0; e < o.length; e += 1) o[e].c();
            K(t, "class", "area svelte-8aeoij")
         },
         m(e, r) {
            N(e, t, r);
            for (let e = 0; e < o.length; e += 1) o[e] && o[e].m(t, null);
            n = !0
         },
         p(e, [n]) {
            1 & n && (l = e[0], Le(), o = Pe(o, n, s, 1, e, l, r, t, qe, Mo, null, _o), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            e && L(t);
            for (let e = 0; e < o.length; e += 1) o[e].d()
         }
      }
   }

   function To(e, t, n) {
      let {
         data: o
      } = t;
      return e.$$set = e => {
         "data" in e && n(0, o = e.data)
      }, [o]
   }
   class Do extends Je {
      constructor(e) {
         super(), We(this, e, To, Co, c, {
            data: 0
         })
      }
   }

   function Eo(e, t, n) {
      const o = e.slice();
      return o[11] = t[n], o
   }
   const No = e => ({}),
      Lo = e => ({}),
      Ho = e => ({}),
      Oo = e => ({});

   function Ao(e) {
      let t, n;
      return {
         c() {
            t = O("div"), n = R(e[0]), K(t, "class", "header svelte-1abqk9k")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            1 & t && U(n, e[0])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Ro(e) {
      let t, n = e[5](e[11]) + "";
      return {
         c() {
            t = R(n)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            8 & o && n !== (n = e[5](e[11]) + "") && U(t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Fo(e) {
      let t, n, o, r;

      function l() {
         return e[8](e[11])
      }
      return n = new Mt({
         props: {
            type: "block " + ("ok" === e[11] ? "primary" : "secondary"),
            click: l,
            $$slots: {
               default: [Ro]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), K(t, "class", "button svelte-1abqk9k")
         },
         m(e, l) {
            N(e, t, l), Ge(n, t, null), T(t, o), r = !0
         },
         p(t, o) {
            e = t;
            const r = {};
            8 & o && (r.type = "block " + ("ok" === e[11] ? "primary" : "secondary")), 14 & o && (r.click = l), 1032 & o && (r.$$scope = {
               dirty: o,
               ctx: e
            }), n.$set(r)
         },
         i(e) {
            r || (Oe(n.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function zo(e) {
      let t, n, o, r, l, s, i, c, a;
      const d = e[7].title,
         u = f(d, e, e[10], Oo),
         p = u || function (e) {
            let t, n = e[0] && Ao(e);
            return {
               c() {
                  n && n.c(), t = z()
               },
               m(e, o) {
                  n && n.m(e, o), N(e, t, o)
               },
               p(e, o) {
                  e[0] ? n ? n.p(e, o) : (n = Ao(e), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
               },
               d(e) {
                  n && n.d(e), e && L(t)
               }
            }
         }(e),
         m = e[7].default,
         v = f(m, e, e[10], null),
         w = e[7].buttons,
         b = f(w, e, e[10], Lo),
         y = b || function (e) {
            let t, n, o = e[3],
               r = [];
            for (let t = 0; t < o.length; t += 1) r[t] = Fo(Eo(e, o, t));
            const l = e => Ae(r[e], 1, 1, (() => {
               r[e] = null
            }));
            return {
               c() {
                  t = O("div");
                  for (let e = 0; e < r.length; e += 1) r[e].c();
                  K(t, "class", "buttons svelte-1abqk9k")
               },
               m(e, o) {
                  N(e, t, o);
                  for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(t, null);
                  n = !0
               },
               p(e, n) {
                  if (46 & n) {
                     let s;
                     for (o = e[3], s = 0; s < o.length; s += 1) {
                        const l = Eo(e, o, s);
                        r[s] ? (r[s].p(l, n), Oe(r[s], 1)) : (r[s] = Fo(l), r[s].c(), Oe(r[s], 1), r[s].m(t, null))
                     }
                     for (Le(), s = o.length; s < r.length; s += 1) l(s);
                     He()
                  }
               },
               i(e) {
                  if (!n) {
                     for (let e = 0; e < o.length; e += 1) Oe(r[e]);
                     n = !0
                  }
               },
               o(e) {
                  r = r.filter(Boolean);
                  for (let e = 0; e < r.length; e += 1) Ae(r[e]);
                  n = !1
               },
               d(e) {
                  e && L(t), H(r, e)
               }
            }
         }(e);
      return {
         c() {
            t = O("div"), n = O("div"), p && p.c(), o = F(), r = O("div"), v && v.c(), l = F(), y && y.c(), K(n, "class", "box svelte-1abqk9k"), K(t, "class", "modal svelte-1abqk9k"), K(t, "tabindex", "0")
         },
         m(s, d) {
            N(s, t, d), T(t, n), p && p.m(n, null), T(n, o), T(n, r), v && v.m(r, null), T(n, l), y && y.m(n, null), e[9](t), i = !0, c || (a = j(t, "keydown", e[6]), c = !0)
         },
         p(e, [t]) {
            u ? u.p && (!i || 1024 & t) && h(u, d, e, e[10], i ? $(d, e[10], t, Ho) : g(e[10]), Oo) : p && p.p && (!i || 1 & t) && p.p(e, i ? t : -1), v && v.p && (!i || 1024 & t) && h(v, m, e, e[10], i ? $(m, e[10], t, null) : g(e[10]), null), b ? b.p && (!i || 1024 & t) && h(b, w, e, e[10], i ? $(w, e[10], t, No) : g(e[10]), Lo) : y && y.p && (!i || 14 & t) && y.p(e, i ? t : -1)
         },
         i(e) {
            i || (Oe(p, e), Oe(v, e), Oe(y, e), ke((() => {
               i && (s || (s = Fe(t, xo, {
                  duration: 100
               }, !0)), s.run(1))
            })), i = !0)
         },
         o(e) {
            Ae(p, e), Ae(v, e), Ae(y, e), s || (s = Fe(t, xo, {
               duration: 100
            }, !1)), s.run(0), i = !1
         },
         d(n) {
            n && L(t), p && p.d(n), v && v.d(n), y && y.d(n), e[9](null), n && s && s.end(), c = !1, a()
         }
      }
   }

   function jo(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t;
      const l = fe("wx-i18n").getGroup("core");
      let s, {
            title: i = ""
         } = t,
         {
            ok: c
         } = t,
         {
            cancel: a
         } = t,
         {
            buttons: d = ["cancel", "ok"]
         } = t;
      ce((() => {
         s.focus()
      }));
      return e.$$set = e => {
         "title" in e && n(0, i = e.title), "ok" in e && n(1, c = e.ok), "cancel" in e && n(2, a = e.cancel), "buttons" in e && n(3, d = e.buttons), "$$scope" in e && n(10, r = e.$$scope)
      }, [i, c, a, d, s, l, function (e) {
         switch (e.code) {
            case "Enter": {
               const t = e.target.tagName;
               if ("TEXTAREA" === t || "BUTTON" === t) return;
               c();
               break
            }
            case "Escape":
               a()
         }
      }, o, e => "ok" === e ? c() : a(), function (e) {
         he[e ? "unshift" : "push"]((() => {
            s = e, n(4, s)
         }))
      }, r]
   }
   class qo extends Je {
      constructor(e) {
         super(), We(this, e, jo, zo, c, {
            title: 0,
            ok: 1,
            cancel: 2,
            buttons: 3
         })
      }
   }

   function Po(e) {
      let t, n;
      return t = new qo({
         props: {
            title: e[0].title,
            buttons: e[0].buttons,
            ok: e[0].resolve,
            cancel: e[0].reject,
            $$slots: {
               default: [Ko]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.title = e[0].title), 1 & n && (o.buttons = e[0].buttons), 1 & n && (o.ok = e[0].resolve), 1 & n && (o.cancel = e[0].reject), 9 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ko(e) {
      let t, n = e[0].message + "";
      return {
         c() {
            t = R(n)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            1 & o && n !== (n = e[0].message + "") && U(t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Vo(e) {
      let t, n, o, r;
      const l = e[2].default,
         s = f(l, e, e[3], null);
      let i = e[0] && Po(e);
      return o = new Do({
         props: {
            data: e[1]
         }
      }), {
         c() {
            s && s.c(), t = F(), i && i.c(), n = F(), Ye(o.$$.fragment)
         },
         m(e, l) {
            s && s.m(e, l), N(e, t, l), i && i.m(e, l), N(e, n, l), Ge(o, e, l), r = !0
         },
         p(e, [t]) {
            s && s.p && (!r || 8 & t) && h(s, l, e, e[3], r ? $(l, e[3], t, null) : g(e[3]), null), e[0] ? i ? (i.p(e, t), 1 & t && Oe(i, 1)) : (i = Po(e), i.c(), Oe(i, 1), i.m(n.parentNode, n)) : i && (Le(), Ae(i, 1, 1, (() => {
               i = null
            })), He());
            const c = {};
            2 & t && (c.data = e[1]), o.$set(c)
         },
         i(e) {
            r || (Oe(s, e), Oe(i), Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(s, e), Ae(i), Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            s && s.d(e), e && L(t), i && i.d(e), e && L(n), Be(o, e)
         }
      }
   }

   function Uo(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t, l = null;
      let s = [];
      return pe("wx-helpers", {
         showNotice: function (e) {
            (e = {
               ...e
            }).id = e.id || ft(), e.remove = () => n(1, s = s.filter((t => t.id !== e.id))), -1 != e.expire && setTimeout(e.remove, e.expire || 5e3), n(1, s = [...s, e])
         },
         showModal: function (e) {
            return n(0, l = {
               ...e
            }), new Promise(((e, t) => {
               n(0, l.resolve = t => {
                  n(0, l = null), e(t)
               }, l), n(0, l.reject = e => {
                  n(0, l = null), t(e)
               }, l)
            }))
         }
      }), e.$$set = e => {
         "$$scope" in e && n(3, r = e.$$scope)
      }, [l, s, o, r]
   }
   class Yo extends Je {
      constructor(e) {
         super(), We(this, e, Uo, Vo, c, {})
      }
   }
   const Go = e => ({}),
      Bo = e => ({
         id: e[5]
      });

   function Wo(e) {
      let t, n;
      return {
         c() {
            t = O("label"), n = R(e[0]), K(t, "for", e[5]), K(t, "class", "svelte-1b27mb4")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            1 & t && U(n, e[0])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Jo(e) {
      let t, n, o, r, l, s, i, c = e[0] && Wo(e);
      const a = e[7].default,
         d = f(a, e, e[6], Bo);
      return {
         c() {
            t = O("div"), c && c.c(), n = F(), o = O("div"), d && d.c(), K(o, "class", r = "field-control " + e[4] + " svelte-1b27mb4"), K(t, "class", l = "field " + e[1] + " svelte-1b27mb4"), K(t, "style", s = e[2] ? `width: ${e[2]}` : ""), X(t, "error", e[3])
         },
         m(e, r) {
            N(e, t, r), c && c.m(t, null), T(t, n), T(t, o), d && d.m(o, null), i = !0
         },
         p(e, [u]) {
            e[0] ? c ? c.p(e, u) : (c = Wo(e), c.c(), c.m(t, n)) : c && (c.d(1), c = null), d && d.p && (!i || 64 & u) && h(d, a, e, e[6], i ? $(a, e[6], u, Go) : g(e[6]), Bo), (!i || 16 & u && r !== (r = "field-control " + e[4] + " svelte-1b27mb4")) && K(o, "class", r), (!i || 2 & u && l !== (l = "field " + e[1] + " svelte-1b27mb4")) && K(t, "class", l), (!i || 4 & u && s !== (s = e[2] ? `width: ${e[2]}` : "")) && K(t, "style", s), (!i || 10 & u) && X(t, "error", e[3])
         },
         i(e) {
            i || (Oe(d, e), i = !0)
         },
         o(e) {
            Ae(d, e), i = !1
         },
         d(e) {
            e && L(t), c && c.d(), d && d.d(e)
         }
      }
   }

   function Xo(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t, {
         label: l = ""
      } = t, {
         position: s = ""
      } = t, {
         width: i = ""
      } = t, {
         error: c = !1
      } = t, {
         type: a = ""
      } = t, d = ft();
      return e.$$set = e => {
         "label" in e && n(0, l = e.label), "position" in e && n(1, s = e.position), "width" in e && n(2, i = e.width), "error" in e && n(3, c = e.error), "type" in e && n(4, a = e.type), "$$scope" in e && n(6, r = e.$$scope)
      }, [l, s, i, c, a, d, r, o]
   }
   class Zo extends Je {
      constructor(e) {
         super(), We(this, e, Xo, Jo, c, {
            label: 0,
            position: 1,
            width: 2,
            error: 3,
            type: 4
         })
      }
   }
   const Qo = e => ({}),
      er = e => ({
         mount: e[1]
      });

   function tr(e) {
      let t, n, o, r;
      const l = e[5].default,
         s = f(l, e, e[4], er);
      return {
         c() {
            t = O("div"), n = O("div"), s && s.c(), K(n, "class", o = "wx-" + e[0] + "-theme svelte-nejz1p"), K(t, "class", "wx-clone svelte-nejz1p")
         },
         m(o, l) {
            N(o, t, l), T(t, n), s && s.m(n, null), e[6](n), r = !0
         },
         p(e, [t]) {
            s && s.p && (!r || 16 & t) && h(s, l, e, e[4], r ? $(l, e[4], t, Qo) : g(e[4]), er), (!r || 1 & t && o !== (o = "wx-" + e[0] + "-theme svelte-nejz1p")) && K(n, "class", o)
         },
         i(e) {
            r || (Oe(s, e), r = !0)
         },
         o(e) {
            Ae(s, e), r = !1
         },
         d(n) {
            n && L(t), s && s.d(n), e[6](null)
         }
      }
   }

   function nr(e, t, n) {
      let o, {
            $$slots: r = {},
            $$scope: l
         } = t,
         {
            theme: s = ""
         } = t,
         {
            target: i = document.body
         } = t,
         c = [];
      return "" === s && (s = fe("wx-theme")), ce((() => {
         i.appendChild(o), c && c.forEach((e => e()))
      })), de((() => {
         o && o.parentNode && o.parentNode.removeChild(o)
      })), e.$$set = e => {
         "theme" in e && n(0, s = e.theme), "target" in e && n(3, i = e.target), "$$scope" in e && n(4, l = e.$$scope)
      }, [s, e => {
         c && c.push(e)
      }, o, i, l, r, function (e) {
         he[e ? "unshift" : "push"]((() => {
            o = e, n(2, o)
         }))
      }]
   }
   class or extends Je {
      constructor(e) {
         super(), We(this, e, nr, tr, c, {
            theme: 0,
            target: 3,
            mount: 1
         })
      }
      get mount() {
         return this.$$.ctx[1]
      }
   }
   const rr = e => ({}),
      lr = e => ({
         open: e[9]
      });

   function sr(e) {
      let n, o, r, l, i, c;
      const a = e[15].default,
         d = f(a, e, e[14], lr),
         u = d || function (e) {
            let n, o, r, l, s, i;
            return {
               c() {
                  n = O("div"), o = O("span"), r = R("Drop files here or\n\t\t\t\t"), l = O("span"), l.textContent = "select files", K(l, "class", "action svelte-1v47mbj"), K(n, "class", "dropzone svelte-1v47mbj")
               },
               m(t, c) {
                  N(t, n, c), T(n, o), T(o, r), T(o, l), s || (i = j(l, "click", e[9]), s = !0)
               },
               p: t,
               d(e) {
                  e && L(n), s = !1, i()
               }
            }
         }(e);
      return {
         c() {
            n = O("div"), o = O("input"), r = F(), u && u.c(), K(o, "type", "file"), K(o, "accept", e[0]), o.disabled = e[1], o.multiple = e[2], K(o, "class", "svelte-1v47mbj"), K(n, "class", "label svelte-1v47mbj"), X(n, "active", e[4])
         },
         m(t, s) {
            N(t, n, s), T(n, o), e[17](o), T(n, r), u && u.m(n, null), l = !0, i || (c = [j(o, "change", e[5]), j(n, "dragenter", e[7]), j(n, "dragleave", e[8]), j(n, "dragover", q(e[16])), j(n, "drop", q(e[6]))], i = !0)
         },
         p(e, [t]) {
            (!l || 1 & t) && K(o, "accept", e[0]), (!l || 2 & t) && (o.disabled = e[1]), (!l || 4 & t) && (o.multiple = e[2]), d && d.p && (!l || 16384 & t) && h(d, a, e, e[14], l ? $(a, e[14], t, rr) : g(e[14]), lr), (!l || 16 & t) && X(n, "active", e[4])
         },
         i(e) {
            l || (Oe(u, e), l = !0)
         },
         o(e) {
            Ae(u, e), l = !1
         },
         d(t) {
            t && L(n), e[17](null), u && u.d(t), i = !1, s(c)
         }
      }
   }

   function ir(e, t, n) {
      let o, r, {
            $$slots: l = {},
            $$scope: s
         } = t,
         {
            data: i
         } = t,
         {
            accept: c = ""
         } = t,
         {
            disabled: a = !1
         } = t,
         {
            multiple: d = !0
         } = t,
         {
            folder: u = !1
         } = t,
         {
            uploadURL: p = ""
         } = t,
         {
            ready: f = new Promise((() => ({})))
         } = t,
         m = 0;

      function $(e, t) {
         if (t = t || "", e.isFile) e.file((e => h(e)));
         else if (e.isDirectory) {
            e.createReader().readEntries((e => e.forEach((e => {
               $(e, t + e.name + "/")
            }))))
         }
      }

      function h(e) {
         const t = {
            id: ft(),
            status: "client",
            name: e.name,
            file: e
         };
         n(10, i = d ? [...i, t] : [t])
      }

      function g() {
         const e = i.filter((e => "client" === e.status));
         if (!e.length) return;
         const t = "function" == typeof p ? p(e) : function (e) {
            return e.map((e => {
               const t = new FormData;
               return t.append("upload", e.file), fetch(p, {
                  method: "POST",
                  body: t
               }).then((e => e.json())).then((e => e), (() => ({
                  id: e.id,
                  status: "error"
               }))).catch((e => console.log(e)))
            }))
         }(e);
         n(11, f = Promise.all(t).then((e => {
            e.forEach((e => {
               e.status = e.status || "server", v(e.id, e)
            }))
         })).catch((e => {
            console.log(e)
         })))
      }

      function v(e, t) {
         const o = i.findIndex((t => t.id === e));
         n(10, i[o] = {
            ...i[o],
            ...t
         }, i)
      }
      return ce((() => {
         n(3, o.webkitdirectory = u, o)
      })), e.$$set = e => {
         "data" in e && n(10, i = e.data), "accept" in e && n(0, c = e.accept), "disabled" in e && n(1, a = e.disabled), "multiple" in e && n(2, d = e.multiple), "folder" in e && n(12, u = e.folder), "uploadURL" in e && n(13, p = e.uploadURL), "ready" in e && n(11, f = e.ready), "$$scope" in e && n(14, s = e.$$scope)
      }, [c, a, d, o, r, function (e) {
         Array.from(e.target.files).forEach((e => h(e))), g()
      }, function (e) {
         Array.from(e.dataTransfer.items).forEach((e => {
            const t = e.webkitGetAsEntry();
            t && $(t)
         })), n(4, r = !1), m = 0, g()
      }, function () {
         0 === m && n(4, r = !0), m++
      }, function () {
         m--, 0 === m && n(4, r = !1)
      }, function () {
         o.click()
      }, i, f, u, p, s, l, function (t) {
         me.call(this, e, t)
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            o = e, n(3, o)
         }))
      }]
   }
   class cr extends Je {
      constructor(e) {
         super(), We(this, e, ir, sr, c, {
            data: 10,
            accept: 0,
            disabled: 1,
            multiple: 2,
            folder: 12,
            uploadURL: 13,
            ready: 11
         })
      }
   }

   function ar(e) {
      let n, o;
      return {
         c() {
            n = new Q(!1), o = z(), n.a = o
         },
         m(e, t) {
            n.m("<style>\n@font-face {\nfont-family: 'Roboto';\nfont-style: normal;\nfont-weight: 400;\nsrc: local(''),\n    url('https://cdn.dhtmlx.com/fonts/roboto/regular.woff2') format('woff2'),\n    url('https://cdn.dhtmlx.com/fonts/roboto/regular.woff') format('woff');\n}\n@font-face {\nfont-family: 'Roboto';\nfont-style: normal;\nfont-weight: 500;\nsrc: local(''),\n    url('https://cdn.dhtmlx.com/fonts/roboto/500.woff2') format('woff2'),\n    url('https://cdn.dhtmlx.com/fonts/roboto/500.woff') format('woff');\n}</style>", e, t), N(e, o, t)
         },
         p: t,
         i: t,
         o: t,
         d(e) {
            e && L(o), e && n.d()
         }
      }
   }
   class dr extends Je {
      constructor(e) {
         super(), We(this, e, null, ar, c, {})
      }
   }

   function ur(e) {
      let t, n, o, r, l, s;
      return o = new dr({}), {
         c() {
            t = O("link"), n = F(), Ye(o.$$.fragment), r = F(), l = O("link"), K(t, "rel", "preconnect"), K(t, "href", "https://cdn.webix.com"), K(t, "crossorigin", ""), K(l, "rel", "stylesheet"), K(l, "href", "https://cdn.dhtmlx.com/fonts/wxi/wx-icons.css")
         },
         m(e, i) {
            N(e, t, i), N(e, n, i), Ge(o, e, i), N(e, r, i), N(e, l, i), s = !0
         },
         i(e) {
            s || (Oe(o.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(t), e && L(n), Be(o, e), e && L(r), e && L(l)
         }
      }
   }

   function pr(e) {
      let t, n, o, r = e[1] && e[1].default && function (e) {
            let t, n;
            const o = e[3].default,
               r = f(o, e, e[2], null);
            return {
               c() {
                  t = O("div"), r && r.c(), K(t, "class", "wx-material-theme"), G(t, "height", "100%")
               },
               m(e, o) {
                  N(e, t, o), r && r.m(t, null), n = !0
               },
               p(e, t) {
                  r && r.p && (!n || 4 & t) && h(r, o, e, e[2], n ? $(o, e[2], t, null) : g(e[2]), null)
               },
               i(e) {
                  n || (Oe(r, e), n = !0)
               },
               o(e) {
                  Ae(r, e), n = !1
               },
               d(e) {
                  e && L(t), r && r.d(e)
               }
            }
         }(e),
         l = e[0] && ur();
      return {
         c() {
            r && r.c(), t = F(), l && l.c(), n = z()
         },
         m(e, s) {
            r && r.m(e, s), N(e, t, s), l && l.m(document.head, null), T(document.head, n), o = !0
         },
         p(e, [t]) {
            e[1] && e[1].default && r.p(e, t), e[0] ? l ? 1 & t && Oe(l, 1) : (l = ur(), l.c(), Oe(l, 1), l.m(n.parentNode, n)) : l && (Le(), Ae(l, 1, 1, (() => {
               l = null
            })), He())
         },
         i(e) {
            o || (Oe(r), Oe(l), o = !0)
         },
         o(e) {
            Ae(r), Ae(l), o = !1
         },
         d(e) {
            r && r.d(e), e && L(t), l && l.d(e), L(n)
         }
      }
   }

   function fr(e, t, n) {
      let {
         $$slots: r = {},
         $$scope: l
      } = t, {
         fonts: s = !0
      } = t;
      const i = t.$$slots;
      return pe("wx-theme", "material"), e.$$set = e => {
         n(4, t = o(o({}, t), v(e))), "fonts" in e && n(0, s = e.fonts), "$$scope" in e && n(2, l = e.$$scope)
      }, t = v(t), [s, i, l, r]
   }
   class mr extends Je {
      constructor(e) {
         super(), We(this, e, fr, pr, c, {
            fonts: 0
         })
      }
   }

   function $r(e) {
      let n, o;
      return {
         c() {
            n = new Q(!1), o = z(), n.a = o
         },
         m(e, t) {
            n.m("<style>\n@font-face {\nfont-family: 'Open Sans';\nfont-style: normal;\nfont-weight: 500;\nsrc: local(''),\n      url('https://cdn.dhtmlx.com/fonts/open-sans/500.woff2') format('woff2'),\n      url('https://cdn.dhtmlx.com/fonts/open-sans/500.woff') format('woff');\n}\n@font-face {\nfont-family: 'Open Sans';\nfont-style: normal;\nfont-weight: 400;\nsrc: local(''),\n      url('https://cdn.dhtmlx.com/fonts/open-sans/regular.woff2') format('woff2'),\n      url('https://cdn.dhtmlx.com/fonts/open-sans/regular.woff') format('woff');\n}\n@font-face {\nfont-family: 'Open Sans';\nfont-style: normal;\nfont-weight: 600;\nsrc: local(''),\n      url('https://cdn.dhtmlx.com/fonts/open-sans/600.woff2') format('woff2'),\n      url('https://cdn.dhtmlx.com/fonts/open-sans/600.woff') format('woff');\n}\n@font-face {\nfont-family: 'Open Sans';\nfont-style: normal;\nfont-weight: 700;\nsrc: local(''),\n      url('https://cdn.dhtmlx.com/fonts/open-sans/700.woff2') format('woff2'),\n      url('https://cdn.dhtmlx.com/fonts/open-sans/700.woff') format('woff');\n}</style>", e, t), N(e, o, t)
         },
         p: t,
         i: t,
         o: t,
         d(e) {
            e && L(o), e && n.d()
         }
      }
   }
   class hr extends Je {
      constructor(e) {
         super(), We(this, e, null, $r, c, {})
      }
   }

   function gr(e) {
      let t, n, o, r, l, s;
      return o = new hr({}), {
         c() {
            t = O("link"), n = F(), Ye(o.$$.fragment), r = F(), l = O("link"), K(t, "rel", "preconnect"), K(t, "href", "https://cdn.webix.com"), K(t, "crossorigin", ""), K(l, "rel", "stylesheet"), K(l, "href", "https://cdn.dhtmlx.com/fonts/wxi/wx-icons.css")
         },
         m(e, i) {
            N(e, t, i), N(e, n, i), Ge(o, e, i), N(e, r, i), N(e, l, i), s = !0
         },
         i(e) {
            s || (Oe(o.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(t), e && L(n), Be(o, e), e && L(r), e && L(l)
         }
      }
   }

   function vr(e) {
      let t, n, o, r = e[1] && e[1].default && function (e) {
            let t, n;
            const o = e[3].default,
               r = f(o, e, e[2], null);
            return {
               c() {
                  t = O("div"), r && r.c(), K(t, "class", "wx-willow-theme"), G(t, "height", "100%")
               },
               m(e, o) {
                  N(e, t, o), r && r.m(t, null), n = !0
               },
               p(e, t) {
                  r && r.p && (!n || 4 & t) && h(r, o, e, e[2], n ? $(o, e[2], t, null) : g(e[2]), null)
               },
               i(e) {
                  n || (Oe(r, e), n = !0)
               },
               o(e) {
                  Ae(r, e), n = !1
               },
               d(e) {
                  e && L(t), r && r.d(e)
               }
            }
         }(e),
         l = e[0] && gr();
      return {
         c() {
            r && r.c(), t = F(), l && l.c(), n = z()
         },
         m(e, s) {
            r && r.m(e, s), N(e, t, s), l && l.m(document.head, null), T(document.head, n), o = !0
         },
         p(e, [t]) {
            e[1] && e[1].default && r.p(e, t), e[0] ? l ? 1 & t && Oe(l, 1) : (l = gr(), l.c(), Oe(l, 1), l.m(n.parentNode, n)) : l && (Le(), Ae(l, 1, 1, (() => {
               l = null
            })), He())
         },
         i(e) {
            o || (Oe(r), Oe(l), o = !0)
         },
         o(e) {
            Ae(r), Ae(l), o = !1
         },
         d(e) {
            r && r.d(e), e && L(t), l && l.d(e), L(n)
         }
      }
   }

   function wr(e, t, n) {
      let {
         $$slots: r = {},
         $$scope: l
      } = t, {
         fonts: s = !0
      } = t;
      const i = t.$$slots;
      return pe("wx-theme", "willow"), e.$$set = e => {
         n(4, t = o(o({}, t), v(e))), "fonts" in e && n(0, s = e.fonts), "$$scope" in e && n(2, l = e.$$scope)
      }, t = v(t), [s, i, l, r]
   }
   class br extends Je {
      constructor(e) {
         super(), We(this, e, wr, vr, c, {
            fonts: 0
         })
      }
   }

   function yr(e) {
      let t, n, o, r, l, s;
      return o = new hr({}), {
         c() {
            t = O("link"), n = F(), Ye(o.$$.fragment), r = F(), l = O("link"), K(t, "rel", "preconnect"), K(t, "href", "https://cdn.webix.com"), K(t, "crossorigin", ""), K(l, "rel", "stylesheet"), K(l, "href", "https://cdn.dhtmlx.com/fonts/wxi/wx-icons.css")
         },
         m(e, i) {
            N(e, t, i), N(e, n, i), Ge(o, e, i), N(e, r, i), N(e, l, i), s = !0
         },
         i(e) {
            s || (Oe(o.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(t), e && L(n), Be(o, e), e && L(r), e && L(l)
         }
      }
   }

   function xr(e) {
      let t, n, o, r = e[1] && e[1].default && function (e) {
            let t, n;
            const o = e[3].default,
               r = f(o, e, e[2], null);
            return {
               c() {
                  t = O("div"), r && r.c(), K(t, "class", "wx-willow-dark-theme"), G(t, "height", "100%")
               },
               m(e, o) {
                  N(e, t, o), r && r.m(t, null), n = !0
               },
               p(e, t) {
                  r && r.p && (!n || 4 & t) && h(r, o, e, e[2], n ? $(o, e[2], t, null) : g(e[2]), null)
               },
               i(e) {
                  n || (Oe(r, e), n = !0)
               },
               o(e) {
                  Ae(r, e), n = !1
               },
               d(e) {
                  e && L(t), r && r.d(e)
               }
            }
         }(e),
         l = e[0] && yr();
      return {
         c() {
            r && r.c(), t = F(), l && l.c(), n = z()
         },
         m(e, s) {
            r && r.m(e, s), N(e, t, s), l && l.m(document.head, null), T(document.head, n), o = !0
         },
         p(e, [t]) {
            e[1] && e[1].default && r.p(e, t), e[0] ? l ? 1 & t && Oe(l, 1) : (l = yr(), l.c(), Oe(l, 1), l.m(n.parentNode, n)) : l && (Le(), Ae(l, 1, 1, (() => {
               l = null
            })), He())
         },
         i(e) {
            o || (Oe(r), Oe(l), o = !0)
         },
         o(e) {
            Ae(r), Ae(l), o = !1
         },
         d(e) {
            r && r.d(e), e && L(t), l && l.d(e), L(n)
         }
      }
   }

   function kr(e, t, n) {
      let {
         $$slots: r = {},
         $$scope: l
      } = t, {
         fonts: s = !0
      } = t;
      const i = t.$$slots;
      return pe("wx-theme", "willow-dark"), e.$$set = e => {
         n(4, t = o(o({}, t), v(e))), "fonts" in e && n(0, s = e.fonts), "$$scope" in e && n(2, l = e.$$scope)
      }, t = v(t), [s, i, l, r]
   }
   class Sr extends Je {
      constructor(e) {
         super(), We(this, e, kr, xr, c, {
            fonts: 0
         })
      }
   }
   const Ir = {
      core: {
         ok: "OK",
         cancel: "Cancel"
      },
      calendar: {
         monthFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         monthShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         dayFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
         dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
         hours: "Hours",
         minutes: "Minutes",
         done: "Done",
         clear: "Clear",
         today: "Today",
         am: ["am", "AM"],
         pm: ["pm", "PM"],
         weekStart: 7,
         timeFormat: 24
      }
   };

   function _r(e) {
      let t;
      const n = e[3].default,
         o = f(n, e, e[2], null);
      return {
         c() {
            o && o.c()
         },
         m(e, n) {
            o && o.m(e, n), t = !0
         },
         p(e, [r]) {
            o && o.p && (!t || 4 & r) && h(o, n, e, e[2], t ? $(n, e[2], r, null) : g(e[2]), null)
         },
         i(e) {
            t || (Oe(o, e), t = !0)
         },
         o(e) {
            Ae(o, e), t = !1
         },
         d(e) {
            o && o.d(e)
         }
      }
   }

   function Mr(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t, {
         words: l = null
      } = t, {
         optional: s = !1
      } = t, i = fe("wx-i18n");
      return i || (i = bt(Ir)), i = i.extend(l, s), pe("wx-i18n", i), e.$$set = e => {
         "words" in e && n(0, l = e.words), "optional" in e && n(1, s = e.optional), "$$scope" in e && n(2, r = e.$$scope)
      }, [l, s, r, o]
   }
   class Cr extends Je {
      constructor(e) {
         super(), We(this, e, Mr, _r, c, {
            words: 0,
            optional: 1
         })
      }
   }
   const Tr = [];

   function Dr(e, n = t) {
      let o;
      const r = new Set;

      function l(t) {
         if (c(e, t) && (e = t, o)) {
            const t = !Tr.length;
            for (const t of r) t[1](), Tr.push(t, e);
            if (t) {
               for (let e = 0; e < Tr.length; e += 2) Tr[e][0](Tr[e + 1]);
               Tr.length = 0
            }
         }
      }
      return {
         set: l,
         update: function (t) {
            l(t(e))
         },
         subscribe: function (s, i = t) {
            const c = [s, i];
            return r.add(c), 1 === r.size && (o = n(l) || t), s(e), () => {
               r.delete(c), 0 === r.size && o && (o(), o = null)
            }
         }
      }
   }

   function Er(e) {
      (function () {
         if ("undefined" == typeof window) return !0;
         const e = location.hostname,
            t = ["ZGh0bWx4LmNvbQ==", "ZGh0bWx4Y29kZS5jb20=", "d2ViaXhjb2RlLmNvbQ==", "d2ViaXguaW8=", "cmVwbC5jbw=="];
         for (let n = 0; n < t.length; n++) {
            const o = window.atob(t[n]);
            if (o === e || e.endsWith("." + o)) return !0
         }
         return !1
      })() || setTimeout((function () {
         if ("undefined" != typeof window && new Date > 1692859553000 + 864e6 && Math.random() > .8) {
            const t = window.atob("IFlvdXIgdHJpYWwgaGFzIGV4cGlyZWQuIFBsZWFzZSBwdXJjaGFzZSB0aGUgY29tbWVyY2lhbCBsaWNlbnNlIGZvciB0aGUgS2FuYmFuIHdpZGdldCBhdCBodHRwczovL2RodG1seC5jb20="),
               {
                  columns: n
               } = e.getState();
            n.forEach((e => e.label += t)), e.setState({
               columns: n
            })
         }
      }), 36e3)
   }
   const Nr = {
         label: {
            show: !0
         },
         description: {
            show: !1
         },
         progress: {
            show: !1
         },
         start_date: {
            show: !1
         },
         end_date: {
            show: !1
         },
         users: {
            show: !1
         },
         priority: {
            show: !1,
            values: [{
               id: 1,
               color: "#FE6158",
               label: "high"
            }, {
               id: 2,
               color: "#F1B941",
               label: "medium"
            }, {
               id: 3,
               color: "#77D257",
               label: "low"
            }]
         },
         color: {
            show: !1,
            values: ["#33B0B4", "#0096FA", "#F1B941"]
         },
         cover: {
            show: !1
         },
         attached: {
            show: !1
         },
         menu: {
            show: !0
         }
      },
      Lr = [{
         key: "label",
         type: "text",
         label: "Label"
      }, {
         key: "description",
         type: "textarea",
         label: "Description"
      }, {
         type: "combo",
         label: "Priority",
         key: "priority"
      }, {
         type: "color",
         label: "Color",
         key: "color"
      }, {
         type: "progress",
         key: "progress",
         label: "Progress"
      }, {
         type: "date",
         key: "start_date",
         label: "Start date"
      }, {
         type: "date",
         key: "end_date",
         label: "End date"
      }, {
         type: "multiselect",
         key: "users",
         label: "Users"
      }],
      Hr = {
         debounce: 100,
         autoSave: !0
      },
      Or = {
         kanban: "wx-kanban",
         toolbar: "wx-kanban-toolbar",
         editor: "wx-kanban-editor",
         content: "wx-kanban-content",
         scrollableContent: "wx-kanban-scrollable-content"
      },
      Ar = {
         "wxi-message": {
            path: "M8.88 22.2C8.586 22.2 8.303 22.083 8.095 21.875 7.887 21.667 7.77 21.384 7.77 21.09V17.76H3.33C2.741 17.76 2.177 17.526 1.76 17.11 1.344 16.694 1.11 16.129 1.11 15.54V2.22C1.11.988 2.109 0 3.33 0H21.09C21.679 0 22.244.234 22.66.65 23.076 1.067 23.31 1.631 23.31 2.22V15.54C23.31 16.129 23.076 16.694 22.66 17.11 22.244 17.526 21.679 17.76 21.09 17.76H14.319L10.212 21.878C9.99 22.089 9.713 22.2 9.435 22.2H8.88ZM9.99 15.54V18.959L13.409 15.54H21.09V2.22H3.33V15.54H9.99Z"
         },
         "wxi-like": {
            path: "M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"
         }
      },
      Rr = ({
         store: e
      }) => {
         const {
            readonly: t
         } = e.getState(), n = [{
            id: "duplicate-card",
            icon: "wxi-content-copy",
            text: "Duplicate"
         }, {
            id: "delete-card",
            icon: "wxi-delete-outline",
            text: "Delete"
         }];
         return !t?.select && t?.edit ? [{
            id: "set-edit",
            icon: "wxi-edit-outline",
            text: "Edit"
         }, ...n] : n
      },
      Fr = ({
         columns: e,
         columnIndex: t
      }) => [{
         id: "add-card",
         icon: "wxi-plus",
         text: "Add new card"
      }, {
         id: "set-edit",
         icon: "wxi-edit-outline",
         text: "Rename"
      }, {
         id: "move-column:left",
         icon: "wxi-arrow-left",
         text: "Move left",
         disabled: t <= 0
      }, {
         id: "move-column:right",
         icon: "wxi-arrow-right",
         text: "Move right",
         disabled: t >= e.length - 1
      }, {
         id: "delete-column",
         icon: "wxi-delete-outline",
         text: "Delete"
      }],
      zr = ({
         rows: e,
         rowIndex: t
      }) => [{
         id: "set-edit",
         icon: "wxi-edit-outline",
         text: "Rename"
      }, {
         id: "move-row:up",
         icon: "wxi-arrow-up",
         text: "Move up",
         disabled: t <= 0
      }, {
         id: "move-row:down",
         icon: "wxi-arrow-down",
         text: "Move down",
         disabled: t >= e.length - 1
      }, {
         id: "delete-row",
         icon: "wxi-delete-outline",
         text: "Delete"
      }];

   function jr(e, t) {
      return !(!e || !t) && e == t
   }

   function qr(e, t) {
      return !!e?.find((e => jr(e, t)))
   }

   function Pr(e, t) {
      return `${e}` + (t ? `:${t}` : "")
   }

   function Kr(e) {
      return e.split(/(?<!temp):(?!\/\/)/)
   }

   function Vr(e, t, n) {
      return n ? e[t] + ":" + e[n] : e[t]
   }

   function Ur(e) {
      var t;
      const {
         shape: n,
         defaultMenuItems: o,
         store: r
      } = e, l = n || {};
      if (!1 === l.menu) return {
         menu: {
            show: !1,
            items: () => null
         }
      };
      if (l.menu || (l.menu = {}), Array.isArray(l.menu.items)) {
         const e = [...l.menu.items];
         l.menu.items = () => e
      }
      const s = l.menu.items || o;
      return l.menu.items = e => {
         let t = s({
            ...e,
            store: r
         });
         return t && (t = Yr(t)), t
      }, (t = l.menu).show ?? (t.show = !0), l
   }

   function Yr(e) {
      return e.map((e => {
         const t = {
            ...e
         };
         return e.items && (t.data = e.items), t.data && (t.data = Yr(t.data)), e.label && (t.text = e.label), t
      }))
   }

   function Gr(e, t) {
      const {
         cards: n,
         columnKey: o,
         sort: r
      } = e;
      if (!r) return n;
      const l = n.reduce(((e, t) => (e[t[o]] = e[t[o]] || [], e[t[o]].push(t), e)), {}),
         s = (e, t) => `${"function"==typeof t?t(e):e[t]}`;
      return Object.keys(l).forEach((e => {
         let n;
         if (n = "columns" in r ? r.columns[e] || {} : r, n.by) {
            t = t || (e => {
               const {
                  dir: t
               } = e, n = e.by;
               return (e, o) => {
                  const r = s(e, n),
                     l = s(o, n);
                  return "desc" === t ? l.localeCompare(r, void 0, {
                     numeric: !0
                  }) : r.localeCompare(l, void 0, {
                     numeric: !0
                  })
               }
            });
            l[e].sort(t(n))
         }
      })), Object.values(l).flat()
   }
   let Br = 0;

   function Wr(e, {
      id: t,
      before: n,
      columnId: o,
      rowId: r
   }) {
      const l = e.getState(),
         s = l.columnKey,
         i = l.rowKey,
         c = l.cards.findIndex((e => jr(e.id, t)));
      if (c < 0) return;
      if (!l.cardsMap[Pr(o, r)]) return;
      if (jr(t, n)) return;
      const a = l.cards[c],
         d = Pr(o, r) === Vr(a, s, i),
         u = jr(o, a[s]);
      if (e.getState().areasMeta[Pr(o, r)].noFreeSpace && !u && !d) return;
      const p = l.cards.splice(c, 1)[0],
         f = {
            ...p
         },
         m = l.cardsMap[Vr(f, l.columnKey, l.rowKey)] || [],
         $ = m.findIndex((e => jr(e.id, t))) || 0,
         h = m[$ + 1] || {};
      if (p[s] = o, i && r && (p[i] = r), n) {
         const e = l.cards.findIndex((e => jr(e.id, n)));
         l.cards.splice(e, 0, p)
      } else l.cards.push(p);
      return l.sort && (l.cards = Gr({
         ...l,
         cards: l.cards
      }, e.sortRule)), e.setState({
         cards: l.cards
      }), () => {
         const n = f[s],
            o = i && f[i];
         e.in.exec("move-card", {
            id: t,
            before: h.id,
            columnId: n,
            rowId: o,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function Jr(e, t) {
      const n = t.card || {},
         o = t.id || n.id || tt(),
         r = e.getState(),
         l = r.columnKey,
         s = r.rowKey,
         i = t.rowId || s && n[s] || r.rows[0].id;
      i && !t.rowId && (t.rowId = i);
      const c = t.columnId || n[l] || r.columns[0].id;
      if (r.areasMeta[Pr(c, i)].noFreeSpace) return !1;
      const a = {
         [l]: c,
         id: o,
         ...n
      };
      s && (a[s] = i);
      let d = r.cards;
      return d.push(a), r.sort && (d = Gr({
         ...r,
         cards: d
      }, e.sortRule)), e.setState({
         cards: d
      }), t.before && Wr(e, {
         ...t,
         id: o
      }), !1 !== t.select && e.in.exec("select-card", {
         id: o
      }), t.card = a, t.id = o, () => {
         e.in.exec("delete-card", {
            id: o,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function Xr(e, {
      id: t,
      card: n,
      replace: o
   }) {
      const r = e.getState();
      let l, s = r.cards.map((e => jr(e.id, t) ? (l = {
         ...e
      }, o ? {
         id: t,
         ...n
      } : {
         ...e,
         ...n
      }) : e));
      return r.sort && (s = Gr({
         ...r,
         cards: s
      }, e.sortRule)), e.setState({
         cards: s
      }), () => {
         e.in.exec("update-card", {
            id: t,
            card: l,
            replace: !0,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function Zr(e, {
      id: t,
      card: n
   }) {
      const {
         cards: o,
         columnKey: r
      } = e.getState(), l = o.find((e => jr(e.id, t)));
      if (l) {
         const o = {
            ...l,
            id: tt(),
            ...n || {}
         };
         e.in.exec("add-card", {
            columnId: o[r],
            before: t,
            card: o
         })
      }
   }

   function Qr(e, {
      id: t
   }) {
      e.in.exec("unselect-card", {
         id: t
      });
      const n = e.getState(),
         o = n.cards.findIndex((e => jr(e.id, t))),
         r = n.cards[o],
         l = n.cards[o + 1]?.id,
         s = n.cards.filter((e => !jr(e.id, t)));
      return e.setState({
         cards: s
      }), () => {
         e.in.exec("add-card", {
            columnId: r[n.columnKey],
            before: l,
            card: r,
            $meta: {
               skipHistory: !0,
               restore: t
            }
         })
      }
   }

   function el(e, {
      id: t,
      before: n
   }) {
      const {
         columns: o
      } = e.getState(), r = o.findIndex((e => jr(e.id, t))), l = o[r + 1]?.id, s = o.splice(r, 1)[0];
      if (n) {
         const e = o.findIndex((e => jr(e.id, n)));
         o.splice(e, 0, s)
      } else o.push(s);
      return e.setState({
         columns: o
      }), () => {
         e.in.exec("move-column", {
            id: t,
            before: l,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function tl(e, t) {
      const n = t.id || t.column?.id || tt(),
         o = e.getState().columns,
         r = {
            id: n,
            label: "Untitled",
            ...t.column || {}
         };
      return o.push(r), e.setState({
         columns: o
      }), t.before && el(e, {
         ...t,
         id: n
      }), e.in.exec("scroll", {
         to: "column",
         id: n
      }), t.id = n, t.column = r, () => {
         e.in.exec("delete-column", {
            id: n,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function nl(e, t) {
      const n = e.getState();
      let o;
      const r = t.id || t.column?.id,
         l = n.columns.map((e => jr(e.id, r) ? (o = {
            ...e
         }, t.replace ? {
            id: r,
            ...t.column
         } : {
            ...e,
            ...t.column
         }) : e));
      return e.setState({
         columns: l
      }), () => {
         e.in.exec("update-column", {
            column: o,
            replace: !0,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function ol(e, {
      id: t
   }) {
      if (t) {
         const n = e.getState(),
            o = n.columns.findIndex((e => jr(e.id, t))),
            r = n.columns[o],
            l = n.columns[o + 1]?.id,
            s = n.columns.filter((e => !jr(e.id, t)));
         return e.setState({
            columns: s
         }), () => {
            e.in.exec("add-column", {
               column: r,
               before: l,
               $meta: {
                  skipHistory: !0,
                  restore: t
               }
            })
         }
      }
   }

   function rl(e, {
      id: t,
      before: n
   }) {
      const {
         rows: o,
         rowKey: r
      } = e.getState();
      if (!r) return;
      const l = o.findIndex((e => jr(e.id, t))),
         s = o[l + 1]?.id,
         i = o.splice(l, 1)[0];
      if (n) {
         const e = o.findIndex((e => jr(e.id, n)));
         o.splice(e, 0, i)
      } else o.push(i);
      return e.setState({
         rows: o
      }), () => {
         e.in.exec("move-row", {
            id: t,
            before: s,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function ll(e, t) {
      const n = e.getState(),
         o = n.rows,
         r = t.id || t.row?.id || tt(),
         l = {
            id: r,
            label: "Untitled",
            collapsed: !1,
            ...t.row || {}
         };
      if (o.push(l), !n.rowKey) {
         const e = n.rowKey = "rowKey";
         n.rows[0] = {
            id: "default",
            label: "Untitled"
         }, n.cards.map((t => {
            t[e] = "default"
         }))
      }
      return e.setState({
         rows: o,
         rowKey: n.rowKey
      }), t.before && rl(e, {
         id: r,
         before: t.before
      }), e.in.exec("scroll", {
         to: "row",
         id: r
      }), t.id = r, t.row = l, () => {
         e.in.exec("delete-row", {
            id: r,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function sl(e, t) {
      const n = e.getState();
      let o;
      const r = t.id || t.row?.id,
         l = n.rows.map((e => jr(e.id, r) ? (o = {
            ...e
         }, t.replace ? {
            id: r,
            ...t.row
         } : {
            ...e,
            ...t.row
         }) : e));
      return e.setState({
         rows: l
      }), () => {
         e.in.exec("update-row", {
            row: o,
            replace: !0,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function il(e, {
      id: t
   }) {
      if (t) {
         const n = e.getState(),
            {
               rows: o
            } = n,
            r = o.findIndex((e => jr(e.id, t))),
            l = o[r],
            s = o[r + 1]?.id;
         return o.splice(r, 1), e.setState({
            rows: o
         }), () => {
            e.in.exec("add-row", {
               row: l,
               before: s,
               $meta: {
                  skipHistory: !0,
                  restore: t
               }
            })
         }
      }
   }

   function cl(e, {
      id: t,
      columnId: n,
      rowId: o,
      before: r,
      source: l,
      dragItemsCoords: s,
      dropAreasCoords: i
   }) {
      const {
         areasMeta: c,
         cardsMeta: a,
         layout: d
      } = e.getState();
      i?.forEach((e => {
         e.id && (c[e.id].height = "default:lazy" !== d ? e.height : null)
      }));
      [...l].forEach((e => {
         const t = a[e] || {};
         t.dragging = !0, a[e] = t
      }));
      const u = Pr(n, o);
      e.setState({
         dragItemId: t,
         dragItemsCoords: s,
         overAreaId: u,
         before: r,
         areasMeta: c,
         cardsMeta: a
      })
   }

   function al(e, {
      rowId: t,
      columnId: n,
      before: o
   }) {
      if (!n) return;
      const {
         areasMeta: r
      } = e.getState(), l = Pr(n, t), s = r[l], i = jr(l, Pr(s.columnId || "", s.rowId));
      s.noFreeSpace && !i || e.setState({
         overAreaId: l,
         before: o
      })
   }

   function dl(e, {
      id: t,
      columnId: n,
      rowId: o,
      before: r,
      source: l
   }) {
      if (!n) return;
      const s = {
            dragItemsCoords: null,
            dragItemId: null,
            before: null,
            overAreaId: null,
            areasMeta: {}
         },
         {
            areasMeta: i,
            cardsMeta: c
         } = e.getState(),
         a = Pr(n, o);
      if (a && t) {
         const n = i[a],
            {
               columnId: o,
               rowId: s
            } = n;
         if (l.length > 1) {
            const t = et();
            l.forEach((n => {
               e.in.exec("move-card", {
                  id: n,
                  columnId: o,
                  rowId: s,
                  before: r,
                  $meta: {
                     batch: t
                  }
               });
               const l = c[n];
               l && (l.dragging = !1)
            }))
         } else {
            e.in.exec("move-card", {
               id: t,
               columnId: o,
               rowId: s,
               before: r
            });
            const n = c[t];
            n && (n.dragging = !1)
         }
      }
      s.cardsMeta = c;
      const d = e.getState().areasMeta;
      Object.keys(d).forEach((e => {
         s.areasMeta[e] = {
            ...d[e],
            height: null
         }
      })), e.setState(s)
   }

   function ul(e, {
      id: t,
      groupMode: n
   }) {
      const {
         selected: o,
         search: r
      } = e.getState();
      if (t) {
         let l = null;
         if (n) {
            if (l = o ? [...o] : [], l.includes(t)) return void e.in.exec("unselect-card", {
               id: t
            });
            l.push(t)
         } else l = [t];
         r && e.in.exec("set-search", {
            value: null
         }), e.setState({
            selected: l
         }), l.length > 1 ? e.in.exec("set-edit", null) : e.in.exec("set-edit", {
            cardId: t
         })
      }
   }

   function pl(e, {
      id: t
   }) {
      const n = e.getState().selected;
      if (n) {
         if (e.in.exec("set-edit", null), !t) return void e.setState({
            selected: null
         });
         const o = n.filter((e => !jr(e, t)));
         e.setState({
            selected: o
         })
      }
   }

   function fl(e, t) {
      return `${e}`.toLowerCase().includes(`${t}`.toLowerCase())
   }

   function ml(e, t, n) {
      return n ? fl(e[n] || "", t) : fl(e.label || "", t) || fl(e.description || "", t)
   }

   function $l(e, {
      value: t,
      by: n,
      searchRule: o
   }) {
      const r = e.getState(),
         l = t?.trim(),
         s = r.cardsMeta;
      let i = {
         value: t,
         by: n
      };
      if (l) {
         const e = function (e) {
            return Object.keys(e.cardsMap).reduce(((t, n) => t.concat(e.cardsMap[n])), [])
         }(r);
         e.map((e => {
            const t = s[e.id] = s[e.id] || {};
            (o || ml)(e, l, n) ? (t.found = !0, t.dimmed = !1) : (t.found = !1, t.dimmed = !0)
         }))
      } else Object.keys(s).forEach((e => {
         const t = s[e];
         t && (delete t.dimmed, delete t.found)
      })), i = null;
      e.setState({
         cardsMeta: s,
         search: i
      })
   }

   function hl(e, t) {
      e.setState({
         scroll: t
      })
   }

   function gl(e, t) {
      if (!t) return void e.setState({
         sort: null
      });
      const n = e.getState(),
         o = t.columnId,
         r = t.by || "label",
         l = t.dir || "asc",
         s = t.preserve || !1;
      let i = n.sort || {};
      o ? ("column" in i == !1 && (i = {
         columns: {}
      }), i.columns[o] = {
         by: r,
         dir: l,
         preserve: s
      }) : i = {
         dir: l,
         by: r,
         preserve: s
      };
      const c = Gr({
         ...n,
         sort: i
      }, e.sortRule);
      s ? e.setState({
         sort: i,
         cards: c
      }) : e.setState({
         cards: c
      })
   }

   function vl(e, t) {
      e.setState({
         edit: t
      })
   }

   function wl(e, {
      id: t,
      cardId: n,
      comment: o
   }) {
      if (n) {
         const r = e.getState(),
            {
               currentUser: l
            } = r,
            s = t || o.id || tt(),
            i = n || o.cardId;
         if (!i || !l) return;
         const c = r.cards.map((e => jr(e.id, i) ? {
            ...e,
            comments: [...e.comments || [], {
               ...o,
               id: s,
               cardId: i,
               userId: l,
               date: o.date || new Date
            }]
         } : e));
         return e.setState({
            cards: c
         }), () => {
            e.in.exec("delete-comment", {
               id: s,
               cardId: i,
               $meta: {
                  skipHistory: !0
               }
            })
         }
      }
   }

   function bl(e, {
      cardId: t,
      id: n,
      comment: o
   }) {
      if (t) {
         const r = e.getState(),
            l = n || o.id,
            s = t || o.cardId;
         if (!l || !s) return;
         let i = {};
         const c = r.cards.map((e => jr(e.id, s) ? {
            ...e,
            comments: (e.comments || []).map((e => jr(e.id, l) ? (i = {
               ...e
            }, {
               ...e,
               ...o
            }) : e))
         } : e));
         return e.setState({
            cards: c
         }), () => {
            e.in.exec("update-comment", {
               id: l,
               cardId: s,
               comment: i,
               $meta: {
                  skipHistory: !0
               }
            })
         }
      }
   }

   function yl(e, {
      cardId: t,
      id: n
   }) {
      if (t) {
         const o = e.getState();
         if (!n || !t) return;
         let r = {};
         const l = o.cards.map((e => jr(e.id, t) ? {
            ...e,
            comments: (e.comments || []).filter((e => !jr(e.id, n) || (r = {
               ...e
            }, !1)))
         } : e));
         return e.setState({
            cards: l
         }), () => {
            e.in.exec("add-comment", {
               id: n,
               cardId: t,
               comment: r,
               $meta: {
                  skipHistory: !0
               }
            })
         }
      }
   }

   function xl(e, {
      id: t,
      link: n
   }) {
      const o = e.getState().links,
         r = t || n.id || tt();
      if (o.find((e => jr(r, e.id)))) return;
      const l = {
         ...n,
         id: r
      };
      return o.push(l), e.setState({
         links: o
      }), () => {
         e.in.exec("delete-link", {
            id: r,
            $meta: {
               skipHistory: !0
            }
         })
      }
   }

   function kl(e, {
      id: t
   }) {
      if (t) {
         const n = e.getState(),
            o = n.links.find((e => jr(e.id, t))),
            r = n.links.filter((e => !jr(e.id, t)));
         return e.setState({
            links: r
         }), () => {
            e.in.exec("add-link", {
               id: t,
               link: o,
               $meta: {
                  skipHistory: !0
               }
            })
         }
      }
   }

   function Sl(e, {
      cardId: t
   }) {
      const n = e.getState(),
         {
            currentUser: o
         } = n;
      if (!t || !o) return;
      const r = n.cards.map((e => jr(e.id, t) ? {
         ...e,
         votes: [...e.votes || [], o]
      } : e));
      e.setState({
         cards: r
      })
   }

   function Il(e, {
      cardId: t
   }) {
      const n = e.getState(),
         {
            currentUser: o
         } = n;
      if (!t || !o) return;
      const r = n.cards.map((e => jr(e.id, t) ? {
         ...e,
         votes: (e.votes || []).filter((e => !jr(e, o)))
      } : e));
      e.setState({
         cards: r
      })
   }
   class _l extends lt {
      constructor(e, t) {
         super(e), Er(this), this.in = new st, this.out = new st, this.in.setNext(this.out.exec), this.config = {
            history: !0,
            ...t || {}
         }, this._router = new ot(super.setState.bind(this), [{
            in: ["cards", "rows", "columns", "columnKey", "rowKey"],
            out: ["areasMeta", "cardsMap"],
            exec: e => {
               const t = this.getState(),
                  {
                     rows: n,
                     columns: o,
                     columnKey: r,
                     rowKey: l,
                     cards: s
                  } = t,
                  i = {},
                  c = {};
               if (!r) return {
                  cardsMap: c,
                  areasMeta: i
               };
               s.map((e => {
                  const t = Vr(e, r, l);
                  c[t] = c[t] || [], c[t]?.push(e)
               })), o.map((e => {
                  c[e.id] = c[e.id] || [], l && n.map((t => {
                     const n = Pr(e.id, t.id);
                     i[n] = {
                        columnId: e.id,
                        rowId: t.id,
                        column: e,
                        row: t,
                        cardsCount: 0
                     }, c[n] = c[n] || [], c[e.id] = c[e.id]?.concat(c[n] || [])
                  })), i[e.id] = {
                     columnId: e.id,
                     column: e,
                     cardsCount: 0
                  }
               })), this._computeLimits({
                  areasMeta: i,
                  cardsMap: c
               }), this.setState({
                  areasMeta: i,
                  cardsMap: c
               }, e)
            }
         }], {}), this._initStructure();
         const n = {
            "add-card": Jr,
            "update-card": Xr,
            "move-card": Wr,
            "duplicate-card": Zr,
            "delete-card": Qr,
            "add-column": tl,
            "update-column": nl,
            "move-column": el,
            "delete-column": ol,
            "add-row": ll,
            "update-row": sl,
            "move-row": rl,
            "delete-row": il,
            "start-drag-card": cl,
            "drag-card": al,
            "end-drag-card": dl,
            "set-search": $l,
            "select-card": ul,
            "unselect-card": pl,
            scroll: hl,
            "set-sort": gl,
            "set-edit": vl,
            "add-comment": wl,
            "update-comment": bl,
            "delete-comment": yl,
            "add-link": xl,
            "delete-link": kl,
            "add-vote": Sl,
            "delete-vote": Il
         };
         this._setHandlers(n)
      }
      setState(e, t) {
         this._router.setState(e, t)
      }
      init(e) {
         const {
            cards: t = [],
            links: n = [],
            columns: o = [],
            rows: r,
            columnKey: l = "column",
            rowKey: s = "",
            sort: i = null,
            readonly: c = !1,
            ...a
         } = e, d = this._normalizeReadonlyConfig(c);
         let u = this._normalizeCards(t);
         const p = (n || []).map((e => ({
            ...e
         })));
         i && (u = Gr({
            columnKey: l,
            sort: i,
            cards: u
         }, this.sortRule));
         const f = o.map((e => ({
               ...e
            }))),
            m = (s && r || [{
               id: ""
            }]).map((e => ({
               ...e
            }))),
            {
               cardShape: $,
               columnShape: h,
               rowShape: g
            } = this._normalizeShapes({
               ...e,
               cards: u,
               readonly: d
            }),
            v = {
               ...a,
               cards: u,
               links: p,
               columns: f,
               columnKey: l,
               rowKey: s,
               rows: m,
               cardShape: $,
               columnShape: h,
               rowShape: g,
               readonly: d
            };
         this._router.init(v), this.setState({
            edit: null,
            selected: null
         })
      }
      undo() {
         const {
            history: e
         } = this.getState(), t = e.undo.pop();
         if (t)
            if ("object" == typeof t) t.undo(), e.redo.push({
               ev: t.ev,
               key: t.key
            });
            else if ("number" == typeof t) {
            const n = e.batches[t];
            for (let e = n.length - 1; e >= 0; e--) n[e].undo();
            e.redo.push(t)
         }
         this.setState({
            history: e
         })
      }
      redo() {
         const {
            history: e
         } = this.getState(), t = [...e.redo], n = t.pop();
         if (n)
            if ("object" == typeof n) {
               const {
                  ev: o,
                  key: r
               } = n;
               this.in.exec(r, o), this.setState({
                  history: {
                     ...e,
                     redo: t
                  }
               })
            } else if ("number" == typeof n) {
            const o = e.batches[n];
            delete e.batches[n], o.forEach((e => {
               const {
                  ev: t,
                  key: n
               } = e;
               this.in.exec(n, t)
            })), this.setState({
               history: {
                  ...e,
                  redo: t
               }
            })
         }
      }
      _setHandlers(e) {
         const {
            history: t
         } = this.getState();
         Object.keys(e).forEach((n => {
            this.in.on(n, (o => {
               var r, l;
               const s = e[n](this, o),
                  i = o?.$meta;
               this.config.history && s && !i?.skipHistory && (i?.batch ? ((r = t.batches)[l = i.batch] ?? (r[l] = []), t.batches[i.batch].push({
                  undo: s,
                  key: n,
                  ev: o
               }), t.undo.includes(i.batch) || t.undo.push(i.batch)) : t.undo.push({
                  undo: s,
                  key: n,
                  ev: o
               }), t.redo.forEach((e => {
                  "string" == typeof e && delete t.batches[e]
               })), t.redo = [], this.setState({
                  history: t
               }))
            }))
         }))
      }
      _initStructure() {
         this.setState({
            columnKey: "column",
            rowKey: "",
            columns: [],
            rows: [],
            cards: [],
            cardsMap: {},
            cardsMeta: {},
            cardShape: Nr,
            columnShape: {},
            rowShape: {},
            areasMeta: {},
            dragItemsCoords: null,
            dragItemId: null,
            before: null,
            overAreaId: null,
            selected: null,
            search: null,
            scroll: null,
            sort: null,
            edit: null,
            readonly: null,
            cardHeight: null,
            layout: "default:default",
            history: {
               undo: [],
               redo: [],
               batches: {}
            },
            currentUser: null,
            links: []
         })
      }
      _computeLimits({
         areasMeta: e,
         cardsMap: t
      }) {
         for (const n in e) {
            const o = e[n],
               r = o.column,
               l = o.rowId;
            let s = 0;
            r.limit && (s = "object" == typeof r.limit ? l ? r.limit[l] || 0 : Object.keys(r.limit).reduce(((e, t) => e + r.limit[t]), 0) : r.limit);
            const i = t[n];
            i && (o.cardsCount = i.length, o.totalLimit = s, o.isOverLimit = !!s && i.length > s, o.noFreeSpace = r.strictLimit && !!s && i.length >= s)
         }
      }
      _normalizeCards(e) {
         return e.map((e => {
            const t = e.id || et();
            return {
               ...e,
               id: t
            }
         }))
      }
      _normalizeShapes(e) {
         const {
            cardShape: t = Nr,
            columnShape: n,
            rowShape: o,
            readonly: r
         } = e;
         for (const e in t) "boolean" == typeof t[e] && (t[e] = {
            show: t[e]
         });
         let l = Object.keys(t).reduce(((e, n) => {
            const o = Nr[n];
            return e[n] = o ? {
               ...o,
               ...t[n]
            } : t[n], e
         }), {});
         r && (r.edit || (l.menu = l.menu || {}, l.menu.show = !1)), l = function (e) {
            return e.users?.values && e.users.values.forEach((e => {
               if (!e.id) throw "Please provide user IDs";
               e.avatar || (e.avatarColor = ["#00D19A", "#2F77E3", "#FFC975"][Math.floor(Br++ % 3)])
            })), e
         }(l), l = Ur({
            store: this,
            shape: l,
            defaultMenuItems: Rr
         });
         return {
            cardShape: l,
            columnShape: Ur({
               store: this,
               shape: n,
               defaultMenuItems: Fr
            }),
            rowShape: Ur({
               store: this,
               shape: o,
               defaultMenuItems: zr
            })
         }
      }
      _normalizeReadonlyConfig(e) {
         let t = {
            add: !0,
            dnd: !0,
            edit: !0,
            select: !0
         };
         return "object" == typeof e ? t = {
            ...t,
            ...e
         } : !0 === e && Object.keys(t).forEach((e => {
            t[e] = !1
         })), t
      }
   }

   function Ml(e, t) {
      return e >= t[0] && e <= t[1]
   }

   function Cl(e, t, n) {
      const o = t.x - n.x,
         r = t.y - n.y;
      return {
         x: e.x - o,
         y: e.y - r
      }
   }

   function Tl(e) {
      const t = {};
      if (t.target = e.target, "touches" in e) {
         const n = e.touches[0];
         t.touches = e.touches, t.clientX = n.clientX, t.clientY = n.clientY
      } else t.clientX = e.clientX, t.clientY = e.clientY;
      return t
   }

   function Dl(e, t = "data-id") {
      let n = !e.tagName && e.target ? e.target : e;
      for (; n;) {
         if (n.getAttribute) {
            if (n.getAttribute(t)) return n
         }
         n = n.parentNode
      }
      return null
   }

   function El(e, t = "data-id") {
      const n = Dl(e, t);
      return n ? n.getAttribute(t) : null
   }

   function Nl(e, t = "data-id") {
      const n = Dl(e, t);
      return n ? function (e) {
         if ("string" == typeof e) {
            const t = 1 * e;
            if (!isNaN(t)) return t
         }
         return e
      }(n.getAttribute(t)) : null
   }

   function Ll(e, t, n) {
      const o = document.createElement("DIV");
      o.className = "wx-theme", e.appendChild(o);
      let r = window.getComputedStyle(o).getPropertyValue("--wx-theme-name");
      return e.removeChild(o), (t && t !== r || !t && !r && n) && (r && e.classList.remove(`wx-${r}-theme`), r = t || n, e.classList.add(`wx-${r}-theme`)), r
   }

   function Hl(e, t) {
      if (t.readonly) return;
      let n, o;
      const r = e;
      let l, s, i, c, a, d, u, p, f, m;
      const $ = (e, n) => {
            t.api.exec(e, n), t.onAction && t.onAction(e, n)
         },
         {
            data: h
         } = t.api.getStores();

      function g(e) {
         if (s && clearTimeout(s), l) {
            const t = l.getBoundingClientRect(),
               n = {
                  x: l.scrollLeft,
                  y: l.scrollTop
               },
               o = 50;
            e.clientX > t.width + t.left - o && l.scrollTo(n.x + o, n.y), e.clientX < t.left + o && l.scrollTo(n.x - o, n.y), e.clientY > t.height + t.top - o && l.scrollTo(n.x, n.y + o), e.clientY < t.top + o && l.scrollTo(n.x, n.y - o), s = setTimeout((() => {
               g(e)
            }), 100)
         }
      }

      function v(e) {
         const t = {},
            n = u.find((t => function (e, t) {
               const {
                  x: n,
                  y: o
               } = e, r = Ml(n, [t.x, t.right]), l = Ml(o, [t.y, t.bottom]);
               return r && l
            }(e, t)))?.id;
         if (n) {
            const [o, r] = Kr(n);
            t.overAreaId = {
               rowId: r,
               columnId: o
            };
            const l = d[n];
            t.before = l.find((t => Ml(e.y, [t.y, t.bottom])))?.id
         }
         return t
      }

      function w(e, t, o, r, l) {
         if (e.touches && e.touches.length > 1) return;
         const s = r.itemId; - 1 === l?.indexOf(s) && ($("select-card", {
               id: s
            }), l = [s]), i = Cl(t, r, a[s]),
            function (e) {
               const t = document.querySelector(".wx-kanban");
               t.classList.add(".wx-dragged"), e && e.length > 1 && t.style.setProperty("--wx-kanban-dragged-cards-count", JSON.stringify(`${e.length}`));
               t.appendChild(n), n.classList.add("wx-dragged-card"), n.style.position = "fixed", n.style.left = i.x + "px", n.style.top = i.y + "px", document.body.classList.add("wx-ondrag")
            }(l);
         const c = v(o);
         f = c.before, p = c.overAreaId, m = l || [s], $("start-drag-card", {
            id: s,
            rowId: p.rowId,
            columnId: p.columnId,
            before: f,
            source: m,
            dragItemsCoords: a,
            dropAreasCoords: u
         })
      }

      function b(e) {
         const t = Tl(e);
         if (t.touches && t.touches.length > 1 || "button" in e && 0 !== e.button) return;
         const s = Dl(t.target, "data-drag-item");
         if (l = r.querySelector(`[data-kanban-id="${Or.content}"]`), s) {
            const i = Nl(s, "data-drag-item"),
               p = Nl(t.target, "data-drag-item"),
               f = h.getState().selected,
               m = f && f.length > 1 ? [...f, i] : [i],
               $ = function (e, t, n = !1) {
                  const o = Array.from(e.querySelectorAll("[data-drop-area]")),
                     r = Array.isArray(t) ? t : [t],
                     l = e.querySelector(`[data-drag-item='${r[r.length-1]}']`),
                     s = l?.offsetHeight || 300,
                     i = {},
                     c = [],
                     a = o.reduce(((e, t) => {
                        const o = JSON.parse(JSON.stringify(t.getBoundingClientRect())),
                           l = t.getAttribute("data-drop-area"),
                           a = Array.from(t.querySelectorAll("[data-drag-item]")),
                           d = [],
                           u = a.reduce(((e, t) => {
                              const n = JSON.parse(JSON.stringify(t.getBoundingClientRect())),
                                 o = t.getAttribute("data-drag-item"),
                                 l = e[e.length - 1],
                                 s = l?.bottom ?? n.y,
                                 c = {
                                    ...n,
                                    y: s,
                                    id: o
                                 };
                              return i[o] = c, e.push(c), qr(r, o) || d.push(o), e
                           }), []),
                           p = d.map(((e, t) => ({
                              ...u[t],
                              id: e
                           })));
                        if (!n) {
                           const e = t.offsetParent,
                              n = 30;
                           t.offsetTop + t.offsetHeight + n >= e.scrollHeight && (o.bottom += s + n, o.height += s + n)
                        }
                        return c.push({
                           ...o,
                           id: l
                        }), e[l] = p, e
                     }), {});
                  return {
                     dragItemsCoords: i,
                     dropAreasCoords: c,
                     dropAreaItemsCoords: a
                  }
               }(r, m);
            a = $.dragItemsCoords, u = $.dropAreasCoords, d = $.dropAreaItemsCoords, n = s.cloneNode(!0), o = "touches" in e ? {
               up: "touchend",
               move: "touchmove"
            } : {
               up: "mouseup",
               move: "mousemove"
            }, document.addEventListener(o.move, y), document.addEventListener(o.up, x), c = {
               x: t.clientX,
               y: t.clientY,
               itemId: i,
               itemsId: m,
               itemRect: a[i],
               areaId: p,
               scroll: {
                  x: l.scrollLeft,
                  y: l.scrollTop
               }
            }
         }
      }

      function y(e) {
         e.preventDefault(), e.stopPropagation();
         const t = Tl(e);
         if (g(t), !c) return;
         const o = h.getState(),
            {
               selected: r,
               dragItemId: s
            } = o,
            d = function (e, t, n) {
               const o = n.scroll,
                  r = t.scrollLeft,
                  l = t.scrollTop;
               return {
                  x: e.clientX + (r - o.x),
                  y: e.clientY + (l - o.y)
               }
            }(t, l, c),
            u = {
               x: t.clientX,
               y: t.clientY
            };
         !s && function (e, t, n = 5) {
            return Math.abs(t.x - e.x) > n || Math.abs(t.y - e.y) > n
         }(c, u) && w(t, u, d, c, r), s && function (e, t, o, r) {
            const {
               dragItemId: l
            } = e, s = a[r.itemId];
            i = Cl(t, r, s), n.style.left = i.x + "px", n.style.top = i.y + "px";
            const c = v(o),
               d = {
                  id: l,
                  rowId: p.rowId,
                  columnId: p.columnId,
                  before: f,
                  source: m
               };
            !c.overAreaId?.columnId || d.rowId === c.overAreaId?.rowId && d.columnId === c.overAreaId?.columnId || (p = c.overAreaId, d.rowId = p.rowId, d.columnId = p.columnId), f !== c.before && (f = d.before = c.before), $("drag-card", d)
         }(o, u, d, c)
      }

      function x() {
         document.removeEventListener(o.move, y), document.removeEventListener(o.up, x),
            function () {
               const e = document.querySelector(".wx-kanban");
               n.parentNode && e.removeChild(n), document.body.classList.remove("wx-ondrag"), e.style.removeProperty("--wx-kanban-dragged-cards-count"), e.classList.remove(".wx-dragged"), n = null
            }(), s && clearTimeout(s);
         const {
            dragItemId: e
         } = h.getState();
         e && $("end-drag-card", {
            id: e,
            rowId: p.rowId,
            columnId: p.columnId,
            before: f,
            source: m
         }), c = null
      }
      return r.addEventListener("mousedown", b), r.addEventListener("touchstart", b), r.addEventListener("dragstart", (e => e.preventDefault())), {
         destroy() {
            r.removeEventListener("mousedown", b), r.removeEventListener("touchstart", b)
         }
      }
   }

   function Ol(e, t) {
      if (t.readonly) return;
      let n;
      const {
         api: o
      } = t, r = e => {
         n = e.target
      };
      o.on("select-card", (({
         id: e
      }) => {
         n || setTimeout((() => {
            o.exec("scroll", {
               to: "card",
               id: e
            })
         }), 100)
      }));
      const l = e => {
         if (!n) return;
         if (El(e.target, "data-ignore-selection")) return;
         const t = Nl(n, "data-drag-item"),
            r = Nl(n, "data-kanban-id"),
            l = e.metaKey || e.ctrlKey,
            s = e.shiftKey;
         n === e.target && r !== Or.editor && function (e) {
            const {
               itemId: t,
               groupMode: n,
               rangeMode: o,
               api: r
            } = e, {
               cardsMap: l,
               columnKey: s
            } = r.getState(), {
               selected: i
            } = r.getState();
            if (!t && i?.length) return void r.exec("unselect-card", {
               id: null
            });
            if (o && i?.length) {
               const e = r.getCard(t),
                  n = r.getCard(i[i.length - 1]),
                  o = function (e, t, n) {
                     if (!e || !t || !n) return !1;
                     return jr(e[n], t[n])
                  }(e, n, s);
               if (o) {
                  const o = Object.keys(l).filter((t => Kr(t)[0] === e[s])).reduce(((e, t) => {
                        const n = l[t];
                        return e.concat(n)
                     }), []),
                     c = o.findIndex((e => jr(e.id, t))),
                     a = o.findIndex((e => jr(e.id, n?.id))),
                     d = Math.min(c, a),
                     u = Math.max(c, a);
                  return void o.slice(d, u + 1).forEach((e => {
                     -1 === i.indexOf(e.id) && r.exec("select-card", {
                        id: e.id,
                        groupMode: !0
                     })
                  }))
               }
            }
            r.exec("select-card", {
               id: t,
               groupMode: n
            })
         }({
            itemId: t,
            groupMode: l,
            rangeMode: s,
            api: o
         }), n = null
      };
      return e.addEventListener("mousedown", r), e.addEventListener("mouseup", l), {
         destroy() {
            e.removeEventListener("mousedown", r), e.removeEventListener("mouseup", l)
         }
      }
   }

   function Al(e, t) {
      const {
         api: n,
         tick: o = (() => new Promise((e => {
            requestAnimationFrame((() => {
               e()
            }))
         })))
      } = t, r = n.getReactiveState().scroll, l = {
         card: "data-drag-item",
         column: "data-column-header",
         row: "data-row-header"
      };
      r?.subscribe((t => {
         if (t) {
            const {
               to: n,
               id: s,
               options: i
            } = t;
            (function (t, n) {
               return new Promise((r => {
                  o().then((() => {
                     const o = e.querySelector(t);
                     o && (o.scrollIntoView(n || {
                        behavior: "smooth",
                        block: "nearest",
                        inline: "nearest"
                     }), r(!0)), r(!1)
                  }))
               }))
            })(`[${l[n]}="${s}"]`, i).then((e => {
               e && r.set(null)
            })).catch()
         }
      }))
   }

   function Rl(e) {
      let t = !1;

      function n(e) {
         1 === e.buttons && (t = !0)
      }

      function o() {
         t = !1, r && r()
      }
      let r = null;

      function l(n) {
         t && (r && r(), r = function (e, t, n = {
            shift: 20
         }) {
            let o = null;
            return function r() {
               if (t) {
                  const l = t.getBoundingClientRect(),
                     s = {
                        x: t.scrollLeft,
                        y: t.scrollTop
                     },
                     {
                        shift: i
                     } = n;
                  e.clientX > l.width + l.left - i && t.scrollTo(s.x + i, s.y), e.clientX < l.left + i && t.scrollTo(s.x - i, s.y), e.clientY > l.height + l.top - i && t.scrollTo(s.x, s.y + i), e.clientY < l.top + i && t.scrollTo(s.x, s.y - i), o = setTimeout((() => {
                     r()
                  }), 100)
               }
            }(), () => {
               o && clearTimeout(o)
            }
         }(n, e))
      }

      function s() {
         r && (r(), r = null), t = !1
      }
      return document.body.addEventListener("mousemove", l), document.body.addEventListener("mouseup", s), e.addEventListener("mousedown", n), e.addEventListener("mouseover", n), e.addEventListener("mouseleave", o), {
         destroy: () => {
            document.body.removeEventListener("mousemove", l), document.body.removeEventListener("mouseup", s), e.removeEventListener("mousedown", n), e.removeEventListener("mouseover", n), e.removeEventListener("mouseleave", o)
         }
      }
   }

   function Fl(e, t) {
      if (t.readonly) return;
      const n = t.locale,
         {
            api: o
         } = t,
         r = t.onAction;
      let l = t.inFocus || !1;

      function s(e) {
         if (l) {
            const t = `${e.ctrlKey||e.metaKey?"ctrl+":""}${e.shiftKey?"shift+":""}${e.code.replace("Key","").toLowerCase()}`;
            ! function (e, t) {
               switch (e) {
                  case "delete":
                     o.getState().selected?.forEach((e => {
                        o.exec("delete-card", {
                           id: e
                        })
                     }));
                     break;
                  case "ctrl+d":
                     t.preventDefault(), o.getState().selected?.forEach((e => {
                        const t = o.getCard(e);
                        o.exec("duplicate-card", {
                           id: e,
                           card: {
                              label: `${n("Duplicate of")} ${t?.label}`
                           }
                        })
                     }));
                     break;
                  case "ctrl+z":
                     t.preventDefault(), o.getStores().data.undo();
                     break;
                  case "ctrl+shift+z":
                  case "ctrl+y":
                     t.preventDefault(), o.getStores().data.redo()
               }
            }(t, e), r && r("keydown", {
               hotkey: t
            })
         }
      }

      function i(e) {
         const t = El(e.target, "data-wx-widget");
         l = t === Or.kanban || t === Or.toolbar, r && r("set-focus", {
            inFocus: l
         })
      }
      return document.addEventListener("keydown", s), document.addEventListener("mousedown", i), {
         destroy: () => {
            document.removeEventListener("keydown", s), document.removeEventListener("mousedown", i)
         }
      }
   }

   function zl(e) {
      switch (e) {
         case "jpg":
         case "jpeg":
         case "gif":
         case "png":
         case "bmp":
         case "tiff":
         case "pcx":
         case "svg":
         case "ico":
            return !0;
         default:
            return !1
      }
   }
   class jl {
      constructor(e) {
         this._store = e
      }
      json(e) {
         const {
            cards: t,
            links: n,
            columns: o,
            rows: r
         } = this._store.getState(), l = {
            cards: t,
            links: n,
            columns: o
         };
         r.length > 0 && (l.rows = r), this._save(l, `${e||"kanban-export"}`, "json")
      }
      _save(e, t, n) {
         const o = document.createElement("a");
         document.body.appendChild(o), o.style.display = "none";
         const r = JSON.stringify(e),
            l = new Blob([r], {
               type: "octet/stream"
            }),
            s = window.URL.createObjectURL(l);
         o.href = s, o.download = `${t}.${n}`, o.click(), window.URL.revokeObjectURL(s), document.body.removeChild(o)
      }
   }

   function ql(e, t) {
      const {
         container: n,
         at: o,
         position: r = "top",
         align: l = "start"
      } = t, s = function (e) {
         if ("string" == typeof e) return document.querySelector(e);
         return e
      }(n) || document.body;
      if (o) {
         e.style.position = "absolute";
         const t = o.getBoundingClientRect();
         e.style.top = `${t[r]}px`, e.style.left = `${t["start"===l?"left":"right"]}px`
      }
      return s.appendChild(e), {
         destroy() {
            e.remove()
         }
      }
   }

   function Pl(e) {
      let t, n, o, r;
      return {
         c() {
            t = O("i"), K(t, "class", n = "wx-icon " + e[0] + " svelte-p36u8h"), G(t, "font-size", e[1] + "px"), X(t, "wx-spin", e[2]), X(t, "wx-clickable", e[4])
         },
         m(n, l) {
            N(n, t, l), o || (r = j(t, "click", (function () {
               i(e[3]) && e[3].apply(this, arguments)
            })), o = !0)
         },
         p(o, r) {
            e = o, 1 & r && n !== (n = "wx-icon " + e[0] + " svelte-p36u8h") && K(t, "class", n), 2 & r && G(t, "font-size", e[1] + "px"), 5 & r && X(t, "wx-spin", e[2]), 17 & r && X(t, "wx-clickable", e[4])
         },
         d(e) {
            e && L(t), o = !1, r()
         }
      }
   }

   function Kl(e) {
      let t, n, o, r, l, s;
      return {
         c() {
            t = O("i"), n = A("svg"), o = A("path"), K(o, "d", r = Ar[e[0]].path), K(n, "xmlns", "http://www.w3.org/2000/svg"), K(n, "viewBox", "0 0 24 24"), K(n, "width", e[1]), K(n, "height", e[1]), K(n, "fill", "currentColor"), K(t, "class", "wx-icon svelte-p36u8h"), G(t, "font-size", e[1] + "px"), X(t, "wx-spin", e[2]), X(t, "wx-clickable", e[4])
         },
         m(r, c) {
            N(r, t, c), T(t, n), T(n, o), l || (s = j(t, "click", (function () {
               i(e[3]) && e[3].apply(this, arguments)
            })), l = !0)
         },
         p(l, s) {
            e = l, 1 & s && r !== (r = Ar[e[0]].path) && K(o, "d", r), 2 & s && K(n, "width", e[1]), 2 & s && K(n, "height", e[1]), 2 & s && G(t, "font-size", e[1] + "px"), 4 & s && X(t, "wx-spin", e[2]), 16 & s && X(t, "wx-clickable", e[4])
         },
         d(e) {
            e && L(t), l = !1, s()
         }
      }
   }

   function Vl(e) {
      let n;

      function o(e, t) {
         return Ar[e[0]] ? Kl : Pl
      }
      let r = o(e),
         l = r(e);
      return {
         c() {
            l.c(), n = z()
         },
         m(e, t) {
            l.m(e, t), N(e, n, t)
         },
         p(e, [t]) {
            r === (r = o(e)) && l ? l.p(e, t) : (l.d(1), l = r(e), l && (l.c(), l.m(n.parentNode, n)))
         },
         i: t,
         o: t,
         d(e) {
            l.d(e), e && L(n)
         }
      }
   }

   function Ul(e, t, n) {
      let {
         name: o
      } = t, {
         size: r = 20
      } = t, {
         spin: l = !1
      } = t, {
         click: s = null
      } = t, {
         clickable: i = !!s
      } = t;
      return e.$$set = e => {
         "name" in e && n(0, o = e.name), "size" in e && n(1, r = e.size), "spin" in e && n(2, l = e.spin), "click" in e && n(3, s = e.click), "clickable" in e && n(4, i = e.clickable)
      }, [o, r, l, s, i]
   }
   class Yl extends Je {
      constructor(e) {
         super(), We(this, e, Ul, Vl, c, {
            name: 0,
            size: 1,
            spin: 2,
            click: 3,
            clickable: 4
         })
      }
   }

   function Gl(e) {
      if ("string" == typeof e) {
         const t = 1 * e;
         if (!isNaN(t)) return t
      }
      return e
   }

   function Bl(e, t) {
      const n = ["click", "contextmenu"],
         o = n => {
            !e || e.contains(n.target) || n.defaultPrevented || t(n)
         };
      return n.forEach((e => document.addEventListener(e, o, !0))), {
         destroy() {
            n.forEach((e => document.removeEventListener(e, o, !0)))
         }
      }
   }
   let Wl = (new Date).valueOf();

   function Jl() {
      return Wl += 1, Wl
   }

   function Xl(e) {
      return e < 10 ? "0" + e : e.toString()
   }
   const Zl = ["", ""];

   function Ql(e, t, n) {
      switch (e) {
         case "%d":
            return Xl(t.getDate());
         case "%m":
            return Xl(t.getMonth() + 1);
         case "%j":
            return t.getDate();
         case "%n":
            return t.getMonth() + 1;
         case "%y":
            return Xl(t.getFullYear() % 100);
         case "%Y":
            return t.getFullYear();
         case "%D":
            return n.dayShort[t.getDay()];
         case "%l":
            return n.dayFull[t.getDay()];
         case "%M":
            return n.monthShort[t.getMonth()];
         case "%F":
            return n.monthFull[t.getMonth()];
         case "%h":
            return Xl((t.getHours() + 11) % 12 + 1);
         case "%g":
            return (t.getHours() + 11) % 12 + 1;
         case "%G":
            return t.getHours();
         case "%H":
            return Xl(t.getHours());
         case "%i":
            return Xl(t.getMinutes());
         case "%a":
            return ((t.getHours() > 11 ? n.pm : n.am) || Zl)[0];
         case "%A":
            return ((t.getHours() > 11 ? n.pm : n.am) || Zl)[1];
         case "%s":
            return Xl(t.getSeconds());
         case "%S":
            return function (e) {
               const t = Xl(e);
               return 2 == t.length ? "0" + t : t
            }(t.getMilliseconds());
         case "%W":
            return Xl(function (e) {
               let t = e.getDay();
               0 === t && (t = 7);
               const n = new Date(e.valueOf());
               n.setDate(e.getDate() + (4 - t));
               const o = n.getFullYear(),
                  r = Math.floor((n.getTime() - new Date(o, 0, 1).getTime()) / 864e5);
               return 1 + Math.floor(r / 7)
            }(t));
         case "%c": {
            let e = t.getFullYear() + "";
            return e += "-" + Xl(t.getMonth() + 1), e += "-" + Xl(t.getDate()), e += "T", e += Xl(t.getHours()), e += ":" + Xl(t.getMinutes()), e += ":" + Xl(t.getSeconds()), e
         }
         default:
            return e
      }
   }
   const es = /%[a-zA-Z]/g;

   function ts(e, t) {
      return "function" == typeof e ? e : function (n) {
         return n ? (n.getMonth || (n = new Date(n)), e.replace(es, (e => Ql(e, n, t)))) : ""
      }
   }

   function ns(e) {
      return e && "object" == typeof e && !Array.isArray(e)
   }

   function os(e, t) {
      for (const n in t) {
         const o = t[n];
         ns(e[n]) && ns(o) ? e[n] = os({
            ...e[n]
         }, t[n]) : e[n] = t[n]
      }
      return e
   }

   function rs(e) {
      return {
         getGroup(t) {
            const n = e[t];
            return e => n && n[e] || e
         },
         getRaw: () => e,
         extend(t, n) {
            if (!t) return this;
            let o;
            return o = n ? os({
               ...t
            }, e) : os({
               ...e
            }, t), rs(o)
         }
      }
   }

   function ls(e, t) {
      e.forEach((e => {
         t(e), e.data && e.data.length && ls(e.data, t)
      }))
   }

   function ss(e, t) {
      const n = [];
      return e.forEach((e => {
         if (e.data) {
            const o = ss(e.data, t);
            o.length && n.push({
               ...e,
               data: o
            })
         } else t(e) && n.push(e)
      })), n
   }
   let is = 1;

   function cs(e) {
      return ls(e, (e => {
         e.id = e.id || is++
      })), e
   }
   const as = {};

   function ds(e) {
      return as[e]
   }

   function us(e) {
      let t, n;
      return {
         c() {
            t = O("i"), K(t, "class", n = "icon " + e[0].icon + " svelte-m1kace")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            1 & o && n !== (n = "icon " + e[0].icon + " svelte-m1kace") && K(t, "class", n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ps(e) {
      let n, o, r = e[0].text + "";
      return {
         c() {
            n = O("span"), o = R(r), K(n, "class", "value svelte-m1kace")
         },
         m(e, t) {
            N(e, n, t), T(n, o)
         },
         p(e, t) {
            1 & t && r !== (r = e[0].text + "") && U(o, r)
         },
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function fs(e) {
      let t, n, o;
      var r = ds(e[0].type);

      function l(e) {
         return {
            props: {
               item: e[0]
            }
         }
      }
      return r && (t = ee(r, l(e))), {
         c() {
            t && Ye(t.$$.fragment), n = z()
         },
         m(e, r) {
            t && Ge(t, e, r), N(e, n, r), o = !0
         },
         p(e, o) {
            const s = {};
            if (1 & o && (s.item = e[0]), 1 & o && r !== (r = ds(e[0].type))) {
               if (t) {
                  Le();
                  const e = t;
                  Ae(e.$$.fragment, 1, 0, (() => {
                     Be(e, 1)
                  })), He()
               }
               r ? (t = ee(r, l(e)), Ye(t.$$.fragment), Oe(t.$$.fragment, 1), Ge(t, n.parentNode, n)) : t = null
            } else r && t.$set(s)
         },
         i(e) {
            o || (t && Oe(t.$$.fragment, e), o = !0)
         },
         o(e) {
            t && Ae(t.$$.fragment, e), o = !1
         },
         d(e) {
            e && L(n), t && Be(t, e)
         }
      }
   }

   function ms(e) {
      let t, n, o = e[0].subtext + "";
      return {
         c() {
            t = O("span"), n = R(o), K(t, "class", "subtext svelte-m1kace")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            1 & t && o !== (o = e[0].subtext + "") && U(n, o)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function $s(e) {
      let t;
      return {
         c() {
            t = O("i"), K(t, "class", "sub-icon wxi-angle-right svelte-m1kace")
         },
         m(e, n) {
            N(e, t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function hs(e) {
      let t, n, o, r, l, i, c, a, d, u, p, f = e[0].icon && us(e);
      const m = [fs, ps],
         $ = [];

      function h(e, t) {
         return e[0].type ? 0 : 1
      }
      o = h(e), r = $[o] = m[o](e);
      let g = e[0].subtext && ms(e),
         v = e[0].data && $s();
      return {
         c() {
            t = O("div"), f && f.c(), n = F(), r.c(), l = F(), g && g.c(), i = F(), v && v.c(), K(t, "class", c = "item " + (e[0].css || "") + " svelte-m1kace"), K(t, "data-id", a = e[0].id)
         },
         m(r, s) {
            N(r, t, s), f && f.m(t, null), T(t, n), $[o].m(t, null), T(t, l), g && g.m(t, null), T(t, i), v && v.m(t, null), d = !0, u || (p = [j(t, "mouseenter", e[1]), j(t, "click", e[4])], u = !0)
         },
         p(e, [s]) {
            e[0].icon ? f ? f.p(e, s) : (f = us(e), f.c(), f.m(t, n)) : f && (f.d(1), f = null);
            let u = o;
            o = h(e), o === u ? $[o].p(e, s) : (Le(), Ae($[u], 1, 1, (() => {
               $[u] = null
            })), He(), r = $[o], r ? r.p(e, s) : (r = $[o] = m[o](e), r.c()), Oe(r, 1), r.m(t, l)), e[0].subtext ? g ? g.p(e, s) : (g = ms(e), g.c(), g.m(t, i)) : g && (g.d(1), g = null), e[0].data ? v || (v = $s(), v.c(), v.m(t, null)) : v && (v.d(1), v = null), (!d || 1 & s && c !== (c = "item " + (e[0].css || "") + " svelte-m1kace")) && K(t, "class", c), (!d || 1 & s && a !== (a = e[0].id)) && K(t, "data-id", a)
         },
         i(e) {
            d || (Oe(r), d = !0)
         },
         o(e) {
            Ae(r), d = !1
         },
         d(e) {
            e && L(t), f && f.d(), $[o].d(), g && g.d(), v && v.d(), u = !1, s(p)
         }
      }
   }

   function gs(e, t, n) {
      let {
         item: o
      } = t, {
         showSub: r = !1
      } = t, {
         activeItem: l = null
      } = t;
      return e.$$set = e => {
         "item" in e && n(0, o = e.item), "showSub" in e && n(2, r = e.showSub), "activeItem" in e && n(3, l = e.activeItem)
      }, [o, function () {
         n(2, r = !!o.data && o.id), n(3, l = this)
      }, r, l, function (t) {
         me.call(this, e, t)
      }]
   }
   class vs extends Je {
      constructor(e) {
         super(), We(this, e, gs, hs, c, {
            item: 0,
            showSub: 2,
            activeItem: 3
         })
      }
   }

   function ws(e, t, n) {
      const o = e.slice();
      return o[27] = t[n], o
   }

   function bs(e) {
      let t, n, o, r;

      function l(t) {
         e[16](t)
      }

      function s(t) {
         e[17](t)
      }
      let i = {
         item: e[27]
      };
      return void 0 !== e[6] && (i.showSub = e[6]), void 0 !== e[7] && (i.activeItem = e[7]), t = new vs({
         props: i
      }), he.push((() => Ue(t, "showSub", l))), he.push((() => Ue(t, "activeItem", s))), t.$on("click", (function (...t) {
         return e[18](e[27], ...t)
      })), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, n) {
            Ge(t, e, n), r = !0
         },
         p(r, l) {
            e = r;
            const s = {};
            4 & l && (s.item = e[27]), !n && 64 & l && (n = !0, s.showSub = e[6], Se((() => n = !1))), !o && 128 & l && (o = !0, s.activeItem = e[7], Se((() => o = !1))), t.$set(s)
         },
         i(e) {
            r || (Oe(t.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), r = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function ys(e) {
      let n;
      return {
         c() {
            n = O("div"), K(n, "class", "separator svelte-9lfyly")
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function xs(e) {
      let t, n;
      return t = new _s({
         props: {
            relativeTo: e[8],
            options: e[27].data,
            level: e[3] + 1,
            at: "right",
            parent: e[7]
         }
      }), t.$on("click", e[19]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            256 & n && (o.relativeTo = e[8]), 4 & n && (o.options = e[27].data), 8 & n && (o.level = e[3] + 1), 128 & n && (o.parent = e[7]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function ks(e, t) {
      let n, o, r, l, s, i;
      const c = [ys, bs],
         a = [];

      function d(e, t) {
         return "separator" === e[27].type ? 0 : 1
      }
      o = d(t), r = a[o] = c[o](t);
      let u = t[27].data && t[6] === t[27].id && xs(t);
      return {
         key: e,
         first: null,
         c() {
            n = z(), r.c(), l = F(), u && u.c(), s = z(), this.first = n
         },
         m(e, t) {
            N(e, n, t), a[o].m(e, t), N(e, l, t), u && u.m(e, t), N(e, s, t), i = !0
         },
         p(e, n) {
            let i = o;
            o = d(t = e), o === i ? a[o].p(t, n) : (Le(), Ae(a[i], 1, 1, (() => {
               a[i] = null
            })), He(), r = a[o], r ? r.p(t, n) : (r = a[o] = c[o](t), r.c()), Oe(r, 1), r.m(l.parentNode, l)), t[27].data && t[6] === t[27].id ? u ? (u.p(t, n), 68 & n && Oe(u, 1)) : (u = xs(t), u.c(), Oe(u, 1), u.m(s.parentNode, s)) : u && (Le(), Ae(u, 1, 1, (() => {
               u = null
            })), He())
         },
         i(e) {
            i || (Oe(r), Oe(u), i = !0)
         },
         o(e) {
            Ae(r), Ae(u), i = !1
         },
         d(e) {
            e && L(n), a[o].d(e), e && L(l), u && u.d(e), e && L(s)
         }
      }
   }

   function Ss(e) {
      let t, n, o, r, l, i = [],
         c = new Map,
         a = e[2];
      const d = e => e[27].id;
      for (let t = 0; t < a.length; t += 1) {
         let n = ws(e, a, t),
            o = d(n);
         c.set(o, i[t] = ks(o, n))
      }
      return {
         c() {
            t = O("div");
            for (let e = 0; e < i.length; e += 1) i[e].c();
            K(t, "class", n = "menu " + (e[3] > 1 ? "sub" : "") + " svelte-9lfyly"), G(t, "top", e[1] + "px"), G(t, "left", e[0] + "px"), G(t, "width", e[5]), K(t, "data-level", e[3])
         },
         m(n, s) {
            N(n, t, s);
            for (let e = 0; e < i.length; e += 1) i[e] && i[e].m(t, null);
            e[20](t), o = !0, r || (l = [k(Bl.call(null, t, e[11])), j(t, "mouseleave", e[10])], r = !0)
         },
         p(e, [r]) {
            988 & r && (a = e[2], Le(), i = Pe(i, r, d, 1, e, a, c, t, qe, ks, null, ws), He()), (!o || 8 & r && n !== (n = "menu " + (e[3] > 1 ? "sub" : "") + " svelte-9lfyly")) && K(t, "class", n), (!o || 2 & r) && G(t, "top", e[1] + "px"), (!o || 1 & r) && G(t, "left", e[0] + "px"), (!o || 32 & r) && G(t, "width", e[5]), (!o || 8 & r) && K(t, "data-level", e[3])
         },
         i(e) {
            if (!o) {
               for (let e = 0; e < a.length; e += 1) Oe(i[e]);
               o = !0
            }
         },
         o(e) {
            for (let e = 0; e < i.length; e += 1) Ae(i[e]);
            o = !1
         },
         d(n) {
            n && L(t);
            for (let e = 0; e < i.length; e += 1) i[e].d();
            e[20](null), r = !1, s(l)
         }
      }
   }

   function Is(e, t, n) {
      const o = ue();
      let r, l, s, i, c, a, d, u, {
            options: p
         } = t,
         {
            level: f = 1
         } = t,
         {
            left: m = 0
         } = t,
         {
            top: $ = 0
         } = t,
         {
            at: h = "bottom"
         } = t,
         {
            parent: g = null
         } = t,
         {
            relativeTo: v = document.body
         } = t,
         {
            mount: w
         } = t,
         {
            object: b = null
         } = t;

      function y() {
         if (!u) return;
         const e = document.body.getBoundingClientRect(),
            t = u.getBoundingClientRect();
         let o = i;
         const r = t.bottom - e.bottom;
         r > 0 && n(1, $ -= r);
         t.right - e.right > 0 && ("right" !== h ? n(0, m = l.right - t.width) : o = !0), o && n(0, m = (f > 1 ? 0 : l.left) - t.width);
         const s = m - e.left;
         s < 0 && f < 2 && n(0, "left" !== h ? m -= s : m = f > 1 ? l.width : l.right)
      }
      w && w(y), ce(y);
      return e.$$set = e => {
         "options" in e && n(2, p = e.options), "level" in e && n(3, f = e.level), "left" in e && n(0, m = e.left), "top" in e && n(1, $ = e.top), "at" in e && n(12, h = e.at), "parent" in e && n(13, g = e.parent), "relativeTo" in e && n(14, v = e.relativeTo), "mount" in e && n(15, w = e.mount), "object" in e && n(4, b = e.object)
      }, e.$$.update = () => {
         4 & e.$$.dirty && cs(p), 4096 & e.$$.dirty && (s = -1 !== h.indexOf("bottom")), 4096 & e.$$.dirty && (i = -1 !== h.indexOf("left")), 4096 & e.$$.dirty && (c = -1 !== h.indexOf("fit")), 8192 & e.$$.dirty && function (e) {
            if (!e || "point" === h) return;
            l = e.getBoundingClientRect();
            const t = v.getBoundingClientRect();
            n(0, m = ("right" === h ? l.right + (f ? 0 : 1) : l.left) - t.left), n(1, $ = (s ? l.bottom + 1 : l.top) - t.top), n(5, r = c ? l.width + "px" : "auto"), n(0, m += v.scrollLeft), n(1, $ += v.scrollTop)
         }(g)
      }, [m, $, p, f, b, r, a, d, u, o, function () {
         n(6, a = !1)
      }, function () {
         o("click", {
            action: null
         })
      }, h, g, v, w, function (e) {
         a = e, n(6, a)
      }, function (e) {
         d = e, n(7, d)
      }, (e, t) => {
         if (!e.data && !t.defaultPrevented) {
            const t = {
               item: b,
               action: e
            };
            e.handler && e.handler(t), o("click", t)
         }
      }, function (t) {
         me.call(this, e, t)
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            u = e, n(8, u)
         }))
      }]
   }
   class _s extends Je {
      constructor(e) {
         super(), We(this, e, Is, Ss, c, {
            options: 2,
            level: 3,
            left: 0,
            top: 1,
            at: 12,
            parent: 13,
            relativeTo: 14,
            mount: 15,
            object: 4
         })
      }
   }

   function Ms(e) {
      let t, n;
      return t = new or({
         props: {
            target: e[1],
            $$slots: {
               default: [Cs, ({
                  mount: e
               }) => ({
                  20: e
               }), ({
                  mount: e
               }) => e ? 1048576 : 0]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            2 & n && (o.target = e[1]), 1114239 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Cs(e) {
      let t, n;
      return t = new _s({
         props: {
            at: e[0],
            top: e[6],
            left: e[5],
            mount: e[20],
            parent: e[4],
            relativeTo: e[1],
            object: e[3],
            options: e[2]
         }
      }), t.$on("click", e[8]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.at = e[0]), 64 & n && (o.top = e[6]), 32 & n && (o.left = e[5]), 1048576 & n && (o.mount = e[20]), 16 & n && (o.parent = e[4]), 2 & n && (o.relativeTo = e[1]), 8 & n && (o.object = e[3]), 4 & n && (o.options = e[2]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ts(e) {
      let t, n, o, r = e[7] && e[7].default && function (e) {
            let t, n, o, r;
            const l = e[15].default,
               s = f(l, e, e[16], null);
            return {
               c() {
                  t = O("div"), s && s.c(), K(t, "data-menu-ignore", "true")
               },
               m(l, i) {
                  N(l, t, i), s && s.m(t, null), n = !0, o || (r = j(t, "contextmenu", e[9]), o = !0)
               },
               p(e, t) {
                  s && s.p && (!n || 65536 & t) && h(s, l, e, e[16], n ? $(l, e[16], t, null) : g(e[16]), null)
               },
               i(e) {
                  n || (Oe(s, e), n = !0)
               },
               o(e) {
                  Ae(s, e), n = !1
               },
               d(e) {
                  e && L(t), s && s.d(e), o = !1, r()
               }
            }
         }(e),
         l = e[4] && Ms(e);
      return {
         c() {
            r && r.c(), t = F(), l && l.c(), n = z()
         },
         m(e, s) {
            r && r.m(e, s), N(e, t, s), l && l.m(e, s), N(e, n, s), o = !0
         },
         p(e, [t]) {
            e[7] && e[7].default && r.p(e, t), e[4] ? l ? (l.p(e, t), 16 & t && Oe(l, 1)) : (l = Ms(e), l.c(), Oe(l, 1), l.m(n.parentNode, n)) : l && (Le(), Ae(l, 1, 1, (() => {
               l = null
            })), He())
         },
         i(e) {
            o || (Oe(r), Oe(l), o = !0)
         },
         o(e) {
            Ae(r), Ae(l), o = !1
         },
         d(e) {
            r && r.d(e), e && L(t), l && l.d(e), e && L(n)
         }
      }
   }

   function Ds(e, t, n) {
      let {
         $$slots: r = {},
         $$scope: l
      } = t;
      const s = ue(),
         i = t.$$slots;
      let {
         options: c
      } = t, {
         at: a = "bottom"
      } = t, {
         resolver: d = null
      } = t, {
         dataKey: u = "contextId"
      } = t, {
         filter: p = null
      } = t;
      const f = y;
      let {
         relativeTo: m
      } = t;
      var $, h = null,
         g = null;
      let w = 0,
         b = 0;

      function y(e, t) {
         if (!e) return void n(4, g = null);
         const o = e.target;
         o && o.dataset && o.dataset.menuIgnore || (n(5, w = e.clientX + 1), n(6, b = e.clientY + 1), n(3, h = void 0 !== t ? t : function (e, t) {
            let n = null;
            for (; e && e.dataset && !n;) n = e.dataset[t], e = e.parentNode;
            return n ? Gl(n) : null
         }(o, u)), d && (n(3, h = d(h, e)), !h) || (null !== h && p && n(2, $ = ss(c, (e => p(e, h)))), n(4, g = o), e.preventDefault()))
      }
      return e.$$set = e => {
         n(19, t = o(o({}, t), v(e))), "options" in e && n(10, c = e.options), "at" in e && n(0, a = e.at), "resolver" in e && n(11, d = e.resolver), "dataKey" in e && n(12, u = e.dataKey), "filter" in e && n(13, p = e.filter), "relativeTo" in e && n(1, m = e.relativeTo), "$$scope" in e && n(16, l = e.$$scope)
      }, e.$$.update = () => {
         1024 & e.$$.dirty && n(2, $ = c)
      }, t = v(t), [a, m, $, h, g, w, b, i, function (e) {
         n(4, g = null), s("click", e.detail)
      }, y, c, d, u, p, f, r, l]
   }
   class Es extends Je {
      constructor(e) {
         super(), We(this, e, Ds, Ts, c, {
            options: 10,
            at: 0,
            resolver: 11,
            dataKey: 12,
            filter: 13,
            handler: 14,
            relativeTo: 1
         })
      }
      get handler() {
         return this.$$.ctx[14]
      }
   }

   function Ns(e) {
      let t, n;
      return t = new or({
         props: {
            target: e[2],
            $$slots: {
               default: [Ls, ({
                  mount: e
               }) => ({
                  10: e
               }), ({
                  mount: e
               }) => e ? 1024 : 0]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4 & n && (o.target = e[2]), 1295 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ls(e) {
      let t, n;
      return t = new _s({
         props: {
            at: e[1],
            mount: e[10],
            parent: e[3],
            options: e[0],
            relativeTo: e[2]
         }
      }), t.$on("click", e[4]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            2 & n && (o.at = e[1]), 1024 & n && (o.mount = e[10]), 8 & n && (o.parent = e[3]), 1 & n && (o.options = e[0]), 4 & n && (o.relativeTo = e[2]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Hs(e) {
      let t, n, o, r, l, s;
      const i = e[7].default,
         c = f(i, e, e[8], null);
      let a = e[3] && Ns(e);
      return {
         c() {
            t = O("div"), c && c.c(), n = F(), a && a.c(), o = z(), K(t, "data-menu-ignore", "true")
         },
         m(i, d) {
            N(i, t, d), c && c.m(t, null), N(i, n, d), a && a.m(i, d), N(i, o, d), r = !0, l || (s = j(t, "click", e[5]), l = !0)
         },
         p(e, [t]) {
            c && c.p && (!r || 256 & t) && h(c, i, e, e[8], r ? $(i, e[8], t, null) : g(e[8]), null), e[3] ? a ? (a.p(e, t), 8 & t && Oe(a, 1)) : (a = Ns(e), a.c(), Oe(a, 1), a.m(o.parentNode, o)) : a && (Le(), Ae(a, 1, 1, (() => {
               a = null
            })), He())
         },
         i(e) {
            r || (Oe(c, e), Oe(a), r = !0)
         },
         o(e) {
            Ae(c, e), Ae(a), r = !1
         },
         d(e) {
            e && L(t), c && c.d(e), e && L(n), a && a.d(e), e && L(o), l = !1, s()
         }
      }
   }

   function Os(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t;
      const l = ue();
      let {
         options: s
      } = t, {
         at: i = "bottom"
      } = t, {
         relativeTo: c
      } = t;
      var a = null;
      return e.$$set = e => {
         "options" in e && n(0, s = e.options), "at" in e && n(1, i = e.at), "relativeTo" in e && n(2, c = e.relativeTo), "$$scope" in e && n(8, r = e.$$scope)
      }, [s, i, c, a, function (e) {
         n(3, a = null), l("click", e.detail)
      }, function (e) {
         const t = e.target;
         t.dataset.menuIgnore || n(3, a = t)
      }, e => {
         n(3, a = e.target), e.preventDefault()
      }, o, r]
   }
   class As extends Je {
      constructor(e) {
         super(), We(this, e, Os, Hs, c, {
            options: 0,
            at: 1,
            relativeTo: 2,
            handler: 6
         })
      }
      get handler() {
         return this.$$.ctx[6]
      }
   }

   function Rs(e) {
      let t, n, o, r, l, s, i, c, a;

      function d(e, t) {
         return e[2] ? zs : Fs
      }
      n = new Yl({
         props: {
            name: e[0].collapsed ? "wxi-angle-right" : "wxi-angle-down",
            size: 18,
            clickable: !0,
            click: e[8]
         }
      });
      let u = d(e),
         p = u(e),
         f = e[7] && js(e);
      return {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), r = O("div"), p.c(), l = F(), f && f.c(), s = z(), K(t, "class", "wx-label-icon svelte-30nbk4"), K(r, "class", "wx-label-text svelte-30nbk4")
         },
         m(d, u) {
            N(d, t, u), Ge(n, t, null), N(d, o, u), N(d, r, u), p.m(r, null), N(d, l, u), f && f.m(d, u), N(d, s, u), i = !0, c || (a = j(r, "dblclick", e[14]), c = !0)
         },
         p(e, t) {
            const o = {};
            1 & t[0] && (o.name = e[0].collapsed ? "wxi-angle-right" : "wxi-angle-down"), n.$set(o), u === (u = d(e)) && p ? p.p(e, t) : (p.d(1), p = u(e), p && (p.c(), p.m(r, null))), e[7] ? f ? (f.p(e, t), 128 & t[0] && Oe(f, 1)) : (f = js(e), f.c(), Oe(f, 1), f.m(s.parentNode, s)) : f && (Le(), Ae(f, 1, 1, (() => {
               f = null
            })), He())
         },
         i(e) {
            i || (Oe(n.$$.fragment, e), Oe(f), i = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), Ae(f), i = !1
         },
         d(e) {
            e && L(t), Be(n), e && L(o), e && L(r), p.d(), e && L(l), f && f.d(e), e && L(s), c = !1, a()
         }
      }
   }

   function Fs(e) {
      let t, n = e[0].label + "";
      return {
         c() {
            t = R(n)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            1 & o[0] && n !== (n = e[0].label + "") && U(t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function zs(e) {
      let t, n, o, r;
      return {
         c() {
            t = O("input"), K(t, "type", "text"), K(t, "class", "wx-input svelte-30nbk4"), t.value = n = e[0].label
         },
         m(n, l) {
            N(n, t, l), o || (r = [j(t, "input", e[15]), j(t, "keypress", e[16]), j(t, "blur", e[13]), k(Vs.call(null, t))], o = !0)
         },
         p(e, o) {
            1 & o[0] && n !== (n = e[0].label) && t.value !== n && (t.value = n)
         },
         d(e) {
            e && L(t), o = !1, s(r)
         }
      }
   }

   function js(e) {
      let t, n;
      return t = new As({
         props: {
            options: e[3],
            $$slots: {
               default: [qs]
            },
            $$scope: {
               ctx: e
            }
         }
      }), t.$on("click", e[18]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            8 & n[0] && (o.options = e[3]), 1073741856 & n[0] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function qs(e) {
      let n, o, r;
      return o = new Yl({
         props: {
            name: "wxi-dots-h",
            click: e[17]
         }
      }), {
         c() {
            n = O("div"), Ye(o.$$.fragment), K(n, "class", "wx-menu svelte-30nbk4")
         },
         m(t, l) {
            N(t, n, l), Ge(o, n, null), e[28](n), r = !0
         },
         p: t,
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(t) {
            t && L(n), Be(o), e[28](null)
         }
      }
   }

   function Ps(e) {
      let t, n;
      const o = e[27].default,
         r = f(o, e, e[30], null);
      return {
         c() {
            t = O("div"), r && r.c(), K(t, "class", "wx-content svelte-30nbk4")
         },
         m(e, o) {
            N(e, t, o), r && r.m(t, null), n = !0
         },
         p(e, t) {
            r && r.p && (!n || 1073741824 & t[0]) && h(r, o, e, e[30], n ? $(o, e[30], t, null) : g(e[30]), null)
         },
         i(e) {
            n || (Oe(r, e), n = !0)
         },
         o(e) {
            Ae(r, e), n = !1
         },
         d(e) {
            e && L(t), r && r.d(e)
         }
      }
   }

   function Ks(e) {
      let t, n, o, r, l, s, i, c, a, d, u = e[1] && Rs(e),
         p = !e[0].collapsed && Ps(e);
      return {
         c() {
            t = O("div"), n = O("div"), u && u.c(), o = F(), r = O("div"), c = F(), p && p.c(), K(r, "class", l = "wx-label-line " + (e[1] ? "collapsable" : "") + " svelte-30nbk4"), K(n, "class", s = "wx-label " + (e[1] ? "collapsable" : "") + " svelte-30nbk4"), K(n, "data-row-header", i = e[0].id), K(t, "class", a = y(e[6]) + " svelte-30nbk4"), X(t, "wx-collapsed", e[0].collapsed)
         },
         m(l, s) {
            N(l, t, s), T(t, n), u && u.m(n, null), T(n, o), T(n, r), e[29](n), T(t, c), p && p.m(t, null), d = !0
         },
         p(e, c) {
            e[1] ? u ? (u.p(e, c), 2 & c[0] && Oe(u, 1)) : (u = Rs(e), u.c(), Oe(u, 1), u.m(n, o)) : u && (Le(), Ae(u, 1, 1, (() => {
               u = null
            })), He()), (!d || 2 & c[0] && l !== (l = "wx-label-line " + (e[1] ? "collapsable" : "") + " svelte-30nbk4")) && K(r, "class", l), (!d || 2 & c[0] && s !== (s = "wx-label " + (e[1] ? "collapsable" : "") + " svelte-30nbk4")) && K(n, "class", s), (!d || 1 & c[0] && i !== (i = e[0].id)) && K(n, "data-row-header", i), e[0].collapsed ? p && (Le(), Ae(p, 1, 1, (() => {
               p = null
            })), He()) : p ? (p.p(e, c), 1 & c[0] && Oe(p, 1)) : (p = Ps(e), p.c(), Oe(p, 1), p.m(t, null)), (!d || 64 & c[0] && a !== (a = y(e[6]) + " svelte-30nbk4")) && K(t, "class", a), (!d || 65 & c[0]) && X(t, "wx-collapsed", e[0].collapsed)
         },
         i(e) {
            d || (Oe(u), Oe(p), d = !0)
         },
         o(e) {
            Ae(u), Ae(p), d = !1
         },
         d(n) {
            n && L(t), u && u.d(), e[29](null), p && p.d()
         }
      }
   }

   function Vs(e) {
      e.focus()
   }

   function Us(e, t, n) {
      let o, r, l, s, i, c, a, d, u, {
            $$slots: f = {},
            $$scope: m
         } = t,
         {
            row: $ = {
               id: "default",
               label: "default",
               collapsed: !1
            }
         } = t,
         {
            rows: h = []
         } = t,
         {
            api: g
         } = t,
         {
            collapsable: v = !0
         } = t;
      const w = fe("wx-i18n").getGroup("kanban"),
         b = ue();
      const {
         readonly: y,
         rowShape: x,
         cardsMap: k,
         columns: S
      } = g.getReactiveState();
      p(e, y, (e => n(26, u = e))), p(e, x, (e => n(25, d = e))), p(e, k, (e => n(23, c = e))), p(e, S, (e => n(24, a = e)));
      let I, _, M = !1,
         C = null;

      function T() {
         M && (null == C ? void 0 : C.trim()) && b("action", {
            action: "update-row",
            data: {
               id: $.id,
               row: {
                  label: C
               }
            }
         }), n(2, M = !1), C = null
      }

      function D() {
         o && n(2, M = !0)
      }

      function E(e) {
         var t;
         const n = null === (t = h["up" === e ? r - 1 : r + 2]) || void 0 === t ? void 0 : t.id;
         b("action", {
            action: "move-row",
            data: {
               id: $.id,
               before: n
            }
         })
      }
      return e.$$set = e => {
         "row" in e && n(0, $ = e.row), "rows" in e && n(19, h = e.rows), "api" in e && n(20, g = e.api), "collapsable" in e && n(1, v = e.collapsable), "$$scope" in e && n(30, m = e.$$scope)
      }, e.$$.update = () => {
         67108864 & e.$$.dirty[0] && n(21, o = u.edit), 524289 & e.$$.dirty[0] && n(22, r = h.findIndex((e => e.id === $.id))), 38273025 & e.$$.dirty[0] && n(3, l = ((e, t, n, o) => {
            const r = o.menu.items({
               rows: n,
               rowIndex: t,
               row: e
            });
            return r && r.length ? r.map((e => Object.assign(Object.assign({}, e), {
               text: w(e.text),
               css: e.disabled ? "disabled" : ""
            }))) : null
         })($, r, h, d)), 35651596 & e.$$.dirty[0] && n(7, s = d.menu.show && !!l && o && !M), 58720257 & e.$$.dirty[0] && n(6, i = function (e, t, n, o) {
            let r = "wx-row";
            if (e.collapsed && (r += " wx-collapsed"), e.css && (r += " " + e.css), t && t.css) {
               let l = [];
               n.forEach((t => l = l.concat(o[Pr(t.id, e.id)]))), r += " " + t.css(e, l)
            }
            return r
         }($, d, a, c))
      }, [$, v, M, l, I, _, i, s, function () {
         b("action", {
            action: "update-row",
            data: {
               id: $.id,
               row: {
                  collapsed: !$.collapsed
               }
            }
         })
      }, y, x, k, S, T, D, function (e) {
         C = e.target.value
      }, function (e) {
         13 === e.charCode && T()
      }, function () {}, function (e) {
         const t = e.detail.action;
         if (t) {
            if (t.onClick) return void t.onClick({
               id: t.id,
               item: t,
               row: $
            });
            switch (t.id) {
               case "set-edit":
                  D();
                  break;
               case "delete-row":
                  b("action", {
                     action: "delete-row",
                     data: {
                        id: $.id
                     }
                  });
                  break;
               case "move-row:up":
                  E("up");
                  break;
               case "move-row:down":
                  E("down")
            }
         }
      }, h, g, o, r, c, a, d, u, f, function (e) {
         he[e ? "unshift" : "push"]((() => {
            _ = e, n(5, _)
         }))
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            I = e, n(4, I)
         }))
      }, m]
   }
   class Ys extends Je {
      constructor(e) {
         super(), We(this, e, Us, Ks, c, {
            row: 0,
            rows: 19,
            api: 20,
            collapsable: 1
         }, null, [-1, -1])
      }
   }

   function Gs(e) {
      let t, n;
      return {
         c() {
            t = O("div"), n = R(e[0]), K(t, "class", "wx-label svelte-grrbga")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            1 & t && U(n, e[0])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Bs(e) {
      let t, n;
      return {
         c() {
            t = O("div"), n = R(e[2]), K(t, "class", "wx-value svelte-grrbga")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            4 & t && U(n, e[2])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Ws(e) {
      let n, o, r, l, s, i = e[0] && Gs(e),
         c = e[1] && Bs(e);
      return {
         c() {
            n = O("div"), i && i.c(), o = F(), r = O("div"), l = O("div"), s = F(), c && c.c(), K(l, "class", "wx-progress svelte-grrbga"), K(l, "style", e[3]), K(r, "class", "wx-wrap svelte-grrbga"), K(n, "class", "wx-layout svelte-grrbga")
         },
         m(e, t) {
            N(e, n, t), i && i.m(n, null), T(n, o), T(n, r), T(r, l), T(r, s), c && c.m(r, null)
         },
         p(e, [t]) {
            e[0] ? i ? i.p(e, t) : (i = Gs(e), i.c(), i.m(n, o)) : i && (i.d(1), i = null), 8 & t && K(l, "style", e[3]), e[1] ? c ? c.p(e, t) : (c = Bs(e), c.c(), c.m(r, null)) : c && (c.d(1), c = null)
         },
         i: t,
         o: t,
         d(e) {
            e && L(n), i && i.d(), c && c.d()
         }
      }
   }

   function Js(e, t, n) {
      let {
         label: o = ""
      } = t, {
         min: r = 0
      } = t, {
         max: l = 100
      } = t, {
         value: s = 0
      } = t, {
         showValue: i = !0
      } = t, c = "0", a = "";
      return e.$$set = e => {
         "label" in e && n(0, o = e.label), "min" in e && n(4, r = e.min), "max" in e && n(5, l = e.max), "value" in e && n(6, s = e.value), "showValue" in e && n(1, i = e.showValue)
      }, e.$$.update = () => {
         116 & e.$$.dirty && (n(2, c = Math.round((s - r) / (l - r) * 100) + "%"), n(3, a = `background: linear-gradient(90deg, var(--wx-color-primary) 0% ${c}, var(--wx-kanban-progress-inactive-color) ${c} 100%);`))
      }, [o, i, c, a, r, l, s]
   }
   class Xs extends Je {
      constructor(e) {
         super(), We(this, e, Js, Ws, c, {
            label: 0,
            min: 4,
            max: 5,
            value: 6,
            showValue: 1
         })
      }
   }

   function Zs(e) {
      let t;
      return {
         c() {
            t = R(e[5])
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            32 & n && U(t, e[5])
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Qs(e) {
      let t, n = e[0].label + "";
      return {
         c() {
            t = R(n)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            1 & o && n !== (n = e[0].label + "") && U(t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ei(e) {
      let t, n, o;
      return {
         c() {
            t = O("img"), d(t.src, n = e[0].avatar) || K(t, "src", n), K(t, "alt", o = e[0].label), K(t, "class", "svelte-1u63mex")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, r) {
            1 & r && !d(t.src, n = e[0].avatar) && K(t, "src", n), 1 & r && o !== (o = e[0].label) && K(t, "alt", o)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ti(e) {
      let n, o;

      function r(e, t) {
         return e[0].avatar ? ei : e[1] ? Qs : Zs
      }
      let l = r(e),
         s = l(e);
      return {
         c() {
            n = O("div"), s.c(), K(n, "class", o = "wx-user " + e[2] + " svelte-1u63mex"), K(n, "style", e[4]), X(n, "border", e[3])
         },
         m(e, t) {
            N(e, n, t), s.m(n, null)
         },
         p(e, [t]) {
            l === (l = r(e)) && s ? s.p(e, t) : (s.d(1), s = l(e), s && (s.c(), s.m(n, null))), 4 & t && o !== (o = "wx-user " + e[2] + " svelte-1u63mex") && K(n, "class", o), 16 & t && K(n, "style", e[4]), 12 & t && X(n, "border", e[3])
         },
         i: t,
         o: t,
         d(e) {
            e && L(n), s.d()
         }
      }
   }

   function ni(e, t, n) {
      let o, {
            data: r = {
               label: "",
               avatar: "",
               avatarColor: ""
            }
         } = t,
         {
            noTransform: l = !1
         } = t,
         {
            size: s = "normal"
         } = t,
         {
            border: i = !0
         } = t,
         c = "";
      return e.$$set = e => {
         "data" in e && n(0, r = e.data), "noTransform" in e && n(1, l = e.noTransform), "size" in e && n(2, s = e.size), "border" in e && n(3, i = e.border)
      }, e.$$.update = () => {
         1 & e.$$.dirty && n(5, o = r.label.split(" ").map((e => e[0])).join("")), 1 & e.$$.dirty && r.avatarColor && n(4, c = `background: ${r.avatarColor}; color: var(--wx-color-primary-font);`)
      }, [r, l, s, i, c, o]
   }
   class oi extends Je {
      constructor(e) {
         super(), We(this, e, ni, ti, c, {
            data: 0,
            noTransform: 1,
            size: 2,
            border: 3
         })
      }
   }

   function ri(e, t, n) {
      const o = e.slice();
      return o[8] = t[n], o
   }

   function li(e) {
      let t, n, o = [],
         r = new Map,
         l = e[2].users;
      const s = e => e[8].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = ri(e, l, t),
            i = s(n);
         r.set(i, o[t] = si(i, n))
      }
      return {
         c() {
            t = O("div");
            for (let e = 0; e < o.length; e += 1) o[e].c();
            K(t, "class", "wx-users svelte-vhwr63")
         },
         m(e, r) {
            N(e, t, r);
            for (let e = 0; e < o.length; e += 1) o[e] && o[e].m(t, null);
            n = !0
         },
         p(e, n) {
            4 & n && (l = e[2].users, Le(), o = Pe(o, n, s, 1, e, l, r, t, qe, si, null, ri), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            e && L(t);
            for (let e = 0; e < o.length; e += 1) o[e].d()
         }
      }
   }

   function si(e, t) {
      let n, o, r;
      return o = new oi({
         props: {
            data: t[8],
            noTransform: "$total" === t[8].id
         }
      }), {
         key: e,
         first: null,
         c() {
            n = z(), Ye(o.$$.fragment), this.first = n
         },
         m(e, t) {
            N(e, n, t), Ge(o, e, t), r = !0
         },
         p(e, n) {
            t = e;
            const r = {};
            4 & n && (r.data = t[8]), 4 & n && (r.noTransform = "$total" === t[8].id), o.$set(r)
         },
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(n), Be(o, e)
         }
      }
   }

   function ii(e) {
      let t, n, o, r, l, s;
      n = new Yl({
         props: {
            name: "wxi-calendar"
         }
      });
      let i = e[2].startDate && ci(e),
         c = e[2].endDate && e[2].startDate && ai(),
         a = e[2].endDate && di(e);
      return {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), i && i.c(), r = F(), c && c.c(), l = F(), a && a.c(), K(t, "class", "wx-date svelte-vhwr63")
         },
         m(e, d) {
            N(e, t, d), Ge(n, t, null), T(t, o), i && i.m(t, null), T(t, r), c && c.m(t, null), T(t, l), a && a.m(t, null), s = !0
         },
         p(e, n) {
            e[2].startDate ? i ? i.p(e, n) : (i = ci(e), i.c(), i.m(t, r)) : i && (i.d(1), i = null), e[2].endDate && e[2].startDate ? c || (c = ai(), c.c(), c.m(t, l)) : c && (c.d(1), c = null), e[2].endDate ? a ? a.p(e, n) : (a = di(e), a.c(), a.m(t, null)) : a && (a.d(1), a = null)
         },
         i(e) {
            s || (Oe(n.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(t), Be(n), i && i.d(), c && c.d(), a && a.d()
         }
      }
   }

   function ci(e) {
      let t, n, o = e[2].startDate + "";
      return {
         c() {
            t = O("span"), n = R(o), K(t, "class", "wx-date-value svelte-vhwr63")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            4 & t && o !== (o = e[2].startDate + "") && U(n, o)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ai(e) {
      let t;
      return {
         c() {
            t = R("-")
         },
         m(e, n) {
            N(e, t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function di(e) {
      let t, n, o = e[2].endDate + "";
      return {
         c() {
            t = O("span"), n = R(o), K(t, "class", "wx-date-value svelte-vhwr63")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            4 & t && o !== (o = e[2].endDate + "") && U(n, o)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ui(e) {
      let t, n, o, r, l, s, i = e[2].votes + "";
      return n = new Yl({
         props: {
            name: "wxi-like"
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), r = O("span"), l = R(i), K(r, "class", "wx-item-value svelte-vhwr63"), K(t, "class", "wx-votes svelte-vhwr63"), X(t, "wx-kanban-editor-voted", e[0].votes.includes(e[3]))
         },
         m(e, i) {
            N(e, t, i), Ge(n, t, null), T(t, o), T(t, r), T(r, l), s = !0
         },
         p(e, n) {
            (!s || 4 & n) && i !== (i = e[2].votes + "") && U(l, i), (!s || 9 & n) && X(t, "wx-kanban-editor-voted", e[0].votes.includes(e[3]))
         },
         i(e) {
            s || (Oe(n.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function pi(e) {
      let t, n, o, r, l, s, i = e[2].comments + "";
      return n = new Yl({
         props: {
            name: "wxi-message"
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), r = O("span"), l = R(i), K(r, "class", "wx-item-value svelte-vhwr63"), K(t, "class", "wx-comments svelte-vhwr63")
         },
         m(e, i) {
            N(e, t, i), Ge(n, t, null), T(t, o), T(t, r), T(r, l), s = !0
         },
         p(e, t) {
            (!s || 4 & t) && i !== (i = e[2].comments + "") && U(l, i)
         },
         i(e) {
            s || (Oe(n.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function fi(e) {
      let t, n, o, r, l, s, i = e[2].attached + "";
      return n = new Yl({
         props: {
            name: "wxi-paperclip"
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), r = O("span"), l = R(i), K(r, "class", "wx-item-value svelte-vhwr63"), K(t, "class", "wx-attached svelte-vhwr63")
         },
         m(e, i) {
            N(e, t, i), Ge(n, t, null), T(t, o), T(t, r), T(r, l), s = !0
         },
         p(e, t) {
            (!s || 4 & t) && i !== (i = e[2].attached + "") && U(l, i)
         },
         i(e) {
            s || (Oe(n.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function mi(e) {
      let t, n, o, r, l, s, i, c, a, d = e[2].users && li(e),
         u = (e[2].endDate || e[2].startDate) && ii(e),
         p = e[2].votes && ui(e),
         f = e[2].comments && pi(e),
         m = e[2].attached && fi(e);
      return {
         c() {
            t = O("div"), d && d.c(), n = F(), o = O("div"), r = O("div"), u && u.c(), l = F(), s = O("div"), p && p.c(), i = F(), f && f.c(), c = F(), m && m.c(), K(r, "class", "wx-icons-container svelte-vhwr63"), K(s, "class", "wx-icons-container svelte-vhwr63"), K(o, "class", "wx-card-icons svelte-vhwr63"), K(t, "class", "wx-footer svelte-vhwr63"), X(t, "wx-with-content", !!Object.keys(e[2]).length)
         },
         m(e, $) {
            N(e, t, $), d && d.m(t, null), T(t, n), T(t, o), T(o, r), u && u.m(r, null), T(o, l), T(o, s), p && p.m(s, null), T(s, i), f && f.m(s, null), T(s, c), m && m.m(s, null), a = !0
         },
         p(e, [o]) {
            e[2].users ? d ? (d.p(e, o), 4 & o && Oe(d, 1)) : (d = li(e), d.c(), Oe(d, 1), d.m(t, n)) : d && (Le(), Ae(d, 1, 1, (() => {
               d = null
            })), He()), e[2].endDate || e[2].startDate ? u ? (u.p(e, o), 4 & o && Oe(u, 1)) : (u = ii(e), u.c(), Oe(u, 1), u.m(r, null)) : u && (Le(), Ae(u, 1, 1, (() => {
               u = null
            })), He()), e[2].votes ? p ? (p.p(e, o), 4 & o && Oe(p, 1)) : (p = ui(e), p.c(), Oe(p, 1), p.m(s, i)) : p && (Le(), Ae(p, 1, 1, (() => {
               p = null
            })), He()), e[2].comments ? f ? (f.p(e, o), 4 & o && Oe(f, 1)) : (f = pi(e), f.c(), Oe(f, 1), f.m(s, c)) : f && (Le(), Ae(f, 1, 1, (() => {
               f = null
            })), He()), e[2].attached ? m ? (m.p(e, o), 4 & o && Oe(m, 1)) : (m = fi(e), m.c(), Oe(m, 1), m.m(s, null)) : m && (Le(), Ae(m, 1, 1, (() => {
               m = null
            })), He()), (!a || 4 & o) && X(t, "wx-with-content", !!Object.keys(e[2]).length)
         },
         i(e) {
            a || (Oe(d), Oe(u), Oe(p), Oe(f), Oe(m), a = !0)
         },
         o(e) {
            Ae(d), Ae(u), Ae(p), Ae(f), Ae(m), a = !1
         },
         d(e) {
            e && L(t), d && d.d(), u && u.d(), p && p.d(), f && f.d(), m && m.d()
         }
      }
   }
   const $i = "%M %d";

   function hi(e, n, o) {
      let r, l, s = t,
         i = () => (s(), s = u(f, (e => o(3, l = e))), f);
      e.$$.on_destroy.push((() => s()));
      let {
         cardFields: c
      } = n, {
         cardShape: a
      } = n, {
         api: d
      } = n;
      const p = fe("wx-i18n");
      let f = null;
      return i(), e.$$set = e => {
         "cardFields" in e && o(0, c = e.cardFields), "cardShape" in e && o(4, a = e.cardShape), "api" in e && o(5, d = e.api)
      }, e.$$.update = () => {
         17 & e.$$.dirty && o(2, r = function (e, t) {
            var n, o, r, l, s, i, c, a;
            let d = {};
            const {
               show: u
            } = (null == t ? void 0 : t.users) || {}, f = e.users;
            if (u && f) {
               const e = (Array.isArray(f) ? f : [f]).reduce(((e, n) => {
                  var o;
                  const r = null === (o = t.users.values) || void 0 === o ? void 0 : o.find((e => e.id === n));
                  return r && e.push(r), e
               }), []);
               let n = e.map((e => Object.assign(Object.assign({}, e), {
                  label: e.label || ""
               })));
               const o = 2;
               e.length > o && (n = n.splice(0, o), n.push({
                  label: "+" + (e.length - n.length),
                  id: "$total"
               })), (null == n ? void 0 : n.length) && (d.users = n)
            }
            const {
               show: m,
               format: $
            } = t.start_date || {}, {
               show: h,
               format: g
            } = t.end_date || {};
            let {
               end_date: v,
               start_date: w
            } = e;
            return (m || h) && (w && (d.startDate = ts($ || $i, p.getRaw().calendar)(w)), v && (d.endDate = ts(g || $i, p.getRaw().calendar)(v))), (null === (n = null == t ? void 0 : t.attached) || void 0 === n ? void 0 : n.show) && (null === (o = e.attached) || void 0 === o ? void 0 : o.length) && (d.attached = e.attached.length), (null === (r = t.comments) || void 0 === r ? void 0 : r.show) && (null === (l = e.comments) || void 0 === l ? void 0 : l.length) && (d.comments = null === (s = e.comments) || void 0 === s ? void 0 : s.length), (null === (i = t.votes) || void 0 === i ? void 0 : i.show) && (null === (c = e.votes) || void 0 === c ? void 0 : c.length) && (d.votes = null === (a = e.votes) || void 0 === a ? void 0 : a.length), d
         }(c, a)), 32 & e.$$.dirty && d && i(o(1, f = d.getReactiveState().currentUser))
      }, [c, f, r, l, a, d]
   }
   class gi extends Je {
      constructor(e) {
         super(), We(this, e, hi, mi, c, {
            cardFields: 0,
            cardShape: 4,
            api: 5
         })
      }
   }

   function vi(e, t, n) {
      const o = e.slice();
      return o[3] = t[n], o
   }

   function wi(e) {
      let t;

      function n(e, t) {
         return "priority" === e[3].type ? yi : bi
      }
      let o = n(e),
         r = o(e);
      return {
         c() {
            r.c(), t = z()
         },
         m(e, n) {
            r.m(e, n), N(e, t, n)
         },
         p(e, l) {
            o === (o = n(e)) && r ? r.p(e, l) : (r.d(1), r = o(e), r && (r.c(), r.m(t.parentNode, t)))
         },
         d(e) {
            r.d(e), e && L(t)
         }
      }
   }

   function bi(e) {
      let t, n, o, r, l, s, i = e[3].value + "",
         c = e[3]?.label && xi(e);
      return {
         c() {
            t = O("div"), c && c.c(), n = F(), o = O("span"), r = R(i), l = F(), K(o, "class", "wx-value"), K(t, "class", s = "wx-field " + (e[3].css || "") + " svelte-upffav")
         },
         m(e, s) {
            N(e, t, s), c && c.m(t, null), T(t, n), T(t, o), T(o, r), T(t, l)
         },
         p(e, o) {
            e[3]?.label ? c ? c.p(e, o) : (c = xi(e), c.c(), c.m(t, n)) : c && (c.d(1), c = null), 1 & o && i !== (i = e[3].value + "") && U(r, i), 1 & o && s !== (s = "wx-field " + (e[3].css || "") + " svelte-upffav") && K(t, "class", s)
         },
         d(e) {
            e && L(t), c && c.d()
         }
      }
   }

   function yi(e) {
      let t, n, o, r, l = e[3].value + "";
      return {
         c() {
            t = O("div"), n = O("span"), o = R(l), r = F(), K(n, "class", "wx-priority-label svelte-upffav"), K(t, "class", "wx-field wx-priority svelte-upffav"), G(t, "background", e[3].color)
         },
         m(e, l) {
            N(e, t, l), T(t, n), T(n, o), T(t, r)
         },
         p(e, n) {
            1 & n && l !== (l = e[3].value + "") && U(o, l), 1 & n && G(t, "background", e[3].color)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function xi(e) {
      let t, n, o, r = e[3].label + "";
      return {
         c() {
            t = O("span"), n = R(r), o = R(":"), K(t, "class", "wx-label")
         },
         m(e, r) {
            N(e, t, r), T(t, n), T(t, o)
         },
         p(e, t) {
            1 & t && r !== (r = e[3].label + "") && U(n, r)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ki(e) {
      let t, n = e[3].value && wi(e);
      return {
         c() {
            n && n.c(), t = z()
         },
         m(e, o) {
            n && n.m(e, o), N(e, t, o)
         },
         p(e, o) {
            e[3].value ? n ? n.p(e, o) : (n = wi(e), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
         },
         d(e) {
            n && n.d(e), e && L(t)
         }
      }
   }

   function Si(e) {
      let n, o = e[0],
         r = [];
      for (let t = 0; t < o.length; t += 1) r[t] = ki(vi(e, o, t));
      return {
         c() {
            n = O("div");
            for (let e = 0; e < r.length; e += 1) r[e].c();
            K(n, "class", "wx-card-header svelte-upffav")
         },
         m(e, t) {
            N(e, n, t);
            for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(n, null)
         },
         p(e, [t]) {
            if (1 & t) {
               let l;
               for (o = e[0], l = 0; l < o.length; l += 1) {
                  const s = vi(e, o, l);
                  r[l] ? r[l].p(s, t) : (r[l] = ki(s), r[l].c(), r[l].m(n, null))
               }
               for (; l < r.length; l += 1) r[l].d(1);
               r.length = o.length
            }
         },
         i: t,
         o: t,
         d(e) {
            e && L(n), H(r, e)
         }
      }
   }

   function Ii(e, t, n) {
      let o, {
            cardFields: r
         } = t,
         {
            cardShape: l
         } = t;
      return e.$$set = e => {
         "cardFields" in e && n(1, r = e.cardFields), "cardShape" in e && n(2, l = e.cardShape)
      }, e.$$.update = () => {
         6 & e.$$.dirty && n(0, o = function (e, t) {
            var n, o;
            let r = [];
            if (null === (n = t.priority) || void 0 === n ? void 0 : n.show) {
               const n = null === (o = t.priority.values) || void 0 === o ? void 0 : o.find((t => t.id === e.priority));
               n && r.push({
                  type: "priority",
                  value: n.label,
                  color: n.color
               })
            }
            const l = t.headerFields;
            if (l) {
               const t = l.reduce(((t, n) => (e[n.key] && t.push({
                  value: e[n.key],
                  label: n.label,
                  css: n.css
               }), t)), []);
               t && r.push(...t)
            }
            return r
         }(r, l))
      }, [o, r, l]
   }
   class _i extends Je {
      constructor(e) {
         super(), We(this, e, Ii, Si, c, {
            cardFields: 1,
            cardShape: 2
         })
      }
   }

   function Mi(e) {
      let t;
      return {
         c() {
            t = O("div"), K(t, "class", "wx-color wx-rounded svelte-kqkezg"), G(t, "background", e[0].color)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            1 & n && G(t, "background", e[0].color)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Ci(e) {
      let t, n, o;
      return {
         c() {
            t = O("div"), n = O("img"), d(n.src, o = e[5]) || K(n, "src", o), K(n, "alt", ""), K(n, "class", "svelte-kqkezg"), K(t, "class", "wx-field wx-image svelte-kqkezg"), X(t, "wx-rounded", !(e[1].color?.show && e[0].color))
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, r) {
            32 & r && !d(n.src, o = e[5]) && K(n, "src", o), 3 & r && X(t, "wx-rounded", !(e[1].color?.show && e[0].color))
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Ti(e) {
      let t, n, o = e[0].label + "";
      return {
         c() {
            t = O("span"), n = R(o)
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            1 & t && o !== (o = e[0].label + "") && U(n, o)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Di(e) {
      let t, n, o, r, l;
      return o = new Yl({
         props: {
            name: "wxi-dots-v",
            clickable: !0
         }
      }), {
         c() {
            t = O("div"), n = O("div"), Ye(o.$$.fragment), K(n, "data-menu-id", r = e[0].id), K(t, "class", "wx-menu svelte-kqkezg"), K(t, "data-ignore-selection", "true")
         },
         m(e, r) {
            N(e, t, r), T(t, n), Ge(o, n, null), l = !0
         },
         p(e, t) {
            (!l || 1 & t && r !== (r = e[0].id)) && K(n, "data-menu-id", r)
         },
         i(e) {
            l || (Oe(o.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), l = !1
         },
         d(e) {
            e && L(t), Be(o)
         }
      }
   }

   function Ei(e) {
      let t, n, o = e[0].description + "";
      return {
         c() {
            t = O("div"), n = R(o), K(t, "class", "wx-field wx-description svelte-kqkezg")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            1 & t && o !== (o = e[0].description + "") && U(n, o)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Ni(e) {
      let t, n, o;
      return n = new Xs({
         props: {
            min: e[1].progress?.config?.min || 0,
            max: e[1].progress?.config?.max || 100,
            value: e[0].progress
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), K(t, "class", "wx-field svelte-kqkezg")
         },
         m(e, r) {
            N(e, t, r), Ge(n, t, null), o = !0
         },
         p(e, t) {
            const o = {};
            2 & t && (o.min = e[1].progress?.config?.min || 0), 2 & t && (o.max = e[1].progress?.config?.max || 100), 1 & t && (o.value = e[0].progress), n.$set(o)
         },
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function Li(e) {
      let t, n, o, r, l, s, i, c, a, d, u, p, f, m, $ = e[1].color?.show && e[0].color && Mi(e),
         h = e[1]?.cover?.show && e[5] && Ci(e);
      r = new _i({
         props: {
            cardFields: e[0],
            cardShape: e[1]
         }
      });
      let g = e[1]?.label?.show && e[0].label && Ti(e),
         v = e[2] && Di(e),
         w = e[1]?.description?.show && e[0].description && Ei(e),
         b = e[1]?.progress?.show && e[0].progress && Ni(e);
      return p = new gi({
         props: {
            cardFields: e[0],
            cardShape: e[1],
            api: e[3]
         }
      }), {
         c() {
            $ && $.c(), t = F(), h && h.c(), n = F(), o = O("div"), Ye(r.$$.fragment), l = F(), s = O("div"), i = O("div"), g && g.c(), c = F(), v && v.c(), a = F(), w && w.c(), d = F(), b && b.c(), u = F(), Ye(p.$$.fragment), K(i, "class", "wx-field wx-label svelte-kqkezg"), K(s, "class", "wx-body svelte-kqkezg"), K(o, "class", f = y(e[4]) + " svelte-kqkezg")
         },
         m(e, f) {
            $ && $.m(e, f), N(e, t, f), h && h.m(e, f), N(e, n, f), N(e, o, f), Ge(r, o, null), T(o, l), T(o, s), T(s, i), g && g.m(i, null), T(i, c), v && v.m(i, null), T(s, a), w && w.m(s, null), T(s, d), b && b.m(s, null), T(o, u), Ge(p, o, null), m = !0
         },
         p(e, [l]) {
            e[1].color?.show && e[0].color ? $ ? $.p(e, l) : ($ = Mi(e), $.c(), $.m(t.parentNode, t)) : $ && ($.d(1), $ = null), e[1]?.cover?.show && e[5] ? h ? h.p(e, l) : (h = Ci(e), h.c(), h.m(n.parentNode, n)) : h && (h.d(1), h = null);
            const a = {};
            1 & l && (a.cardFields = e[0]), 2 & l && (a.cardShape = e[1]), r.$set(a), e[1]?.label?.show && e[0].label ? g ? g.p(e, l) : (g = Ti(e), g.c(), g.m(i, c)) : g && (g.d(1), g = null), e[2] ? v ? (v.p(e, l), 4 & l && Oe(v, 1)) : (v = Di(e), v.c(), Oe(v, 1), v.m(i, null)) : v && (Le(), Ae(v, 1, 1, (() => {
               v = null
            })), He()), e[1]?.description?.show && e[0].description ? w ? w.p(e, l) : (w = Ei(e), w.c(), w.m(s, d)) : w && (w.d(1), w = null), e[1]?.progress?.show && e[0].progress ? b ? (b.p(e, l), 3 & l && Oe(b, 1)) : (b = Ni(e), b.c(), Oe(b, 1), b.m(s, null)) : b && (Le(), Ae(b, 1, 1, (() => {
               b = null
            })), He());
            const u = {};
            1 & l && (u.cardFields = e[0]), 2 & l && (u.cardShape = e[1]), 8 & l && (u.api = e[3]), p.$set(u), (!m || 16 & l && f !== (f = y(e[4]) + " svelte-kqkezg")) && K(o, "class", f)
         },
         i(e) {
            m || (Oe(r.$$.fragment, e), Oe(v), Oe(b), Oe(p.$$.fragment, e), m = !0)
         },
         o(e) {
            Ae(r.$$.fragment, e), Ae(v), Ae(b), Ae(p.$$.fragment, e), m = !1
         },
         d(e) {
            $ && $.d(e), e && L(t), h && h.d(e), e && L(n), e && L(o), Be(r), g && g.d(), v && v.d(), w && w.d(), b && b.d(), Be(p)
         }
      }
   }

   function Hi(e, t, n) {
      let o, r, l;
      var s;
      let {
         cardFields: i
      } = t, {
         cardShape: c
      } = t, {
         menu: a = !0
      } = t, {
         api: d
      } = t;
      return e.$$set = e => {
         "cardFields" in e && n(0, i = e.cardFields), "cardShape" in e && n(1, c = e.cardShape), "menu" in e && n(2, a = e.menu), "api" in e && n(3, d = e.api)
      }, e.$$.update = () => {
         65 & e.$$.dirty && n(7, o = null === n(6, s = null == i ? void 0 : i.attached) || void 0 === s ? void 0 : s.find((e => e.isCover))), 128 & e.$$.dirty && n(5, r = o ? o.coverURL || o.url : null), 3 & e.$$.dirty && n(4, l = function (e, t) {
            let n = "wx-content";
            return e.css && (n += " " + e.css), t.css ? () => n += ` ${t.css(e)}` : () => n
         }(i, c)())
      }, [i, c, a, d, l, r, s, o]
   }
   class Oi extends Je {
      constructor(e) {
         super(), We(this, e, Hi, Li, c, {
            cardFields: 0,
            cardShape: 1,
            menu: 2,
            api: 3
         })
      }
   }

   function Ai(e) {
      let t, n, o, r, l;
      var s = e[4];

      function i(e) {
         return {
            props: {
               api: e[7],
               cardFields: e[0],
               dragging: e[1],
               selected: e[2],
               cardShape: e[3],
               menu: e[6]
            }
         }
      }
      return s && (n = ee(s, i(e)), n.$on("action", e[10])), {
         c() {
            t = O("div"), n && Ye(n.$$.fragment), K(t, "class", "wx-card svelte-1t9rqgm"), K(t, "data-drag-item", o = e[0].id), G(t, "height", e[8]), G(t, "max-height", e[8]), K(t, "data-id", r = e[0].id), X(t, "wx-hidden", e[1]), X(t, "wx-selected", e[2]), X(t, "wx-dimmed", e[5]?.dimmed)
         },
         m(e, o) {
            N(e, t, o), n && Ge(n, t, null), l = !0
         },
         p(e, [c]) {
            const a = {};
            if (128 & c && (a.api = e[7]), 1 & c && (a.cardFields = e[0]), 2 & c && (a.dragging = e[1]), 4 & c && (a.selected = e[2]), 8 & c && (a.cardShape = e[3]), 64 & c && (a.menu = e[6]), 16 & c && s !== (s = e[4])) {
               if (n) {
                  Le();
                  const e = n;
                  Ae(e.$$.fragment, 1, 0, (() => {
                     Be(e, 1)
                  })), He()
               }
               s ? (n = ee(s, i(e)), n.$on("action", e[10]), Ye(n.$$.fragment), Oe(n.$$.fragment, 1), Ge(n, t, null)) : n = null
            } else s && n.$set(a);
            (!l || 1 & c && o !== (o = e[0].id)) && K(t, "data-drag-item", o), (!l || 256 & c) && G(t, "height", e[8]), (!l || 256 & c) && G(t, "max-height", e[8]), (!l || 1 & c && r !== (r = e[0].id)) && K(t, "data-id", r), (!l || 2 & c) && X(t, "wx-hidden", e[1]), (!l || 4 & c) && X(t, "wx-selected", e[2]), (!l || 32 & c) && X(t, "wx-dimmed", e[5]?.dimmed)
         },
         i(e) {
            l || (n && Oe(n.$$.fragment, e), l = !0)
         },
         o(e) {
            n && Ae(n.$$.fragment, e), l = !1
         },
         d(e) {
            e && L(t), n && Be(n)
         }
      }
   }

   function Ri(e, t, n) {
      let o, {
            cardFields: r
         } = t,
         {
            dragging: l = !1
         } = t,
         {
            selected: s = !1
         } = t,
         {
            cardShape: i
         } = t,
         {
            cardTemplate: c
         } = t,
         {
            meta: a = null
         } = t,
         {
            cardHeight: d
         } = t,
         {
            menu: u
         } = t,
         {
            api: p
         } = t;
      return e.$$set = e => {
         "cardFields" in e && n(0, r = e.cardFields), "dragging" in e && n(1, l = e.dragging), "selected" in e && n(2, s = e.selected), "cardShape" in e && n(3, i = e.cardShape), "cardTemplate" in e && n(4, c = e.cardTemplate), "meta" in e && n(5, a = e.meta), "cardHeight" in e && n(9, d = e.cardHeight), "menu" in e && n(6, u = e.menu), "api" in e && n(7, p = e.api)
      }, e.$$.update = () => {
         512 & e.$$.dirty && n(8, o = d ? d + "px" : "auto")
      }, [r, l, s, i, c, a, u, p, o, d, function (t) {
         me.call(this, e, t)
      }]
   }
   class Fi extends Je {
      constructor(e) {
         super(), We(this, e, Ri, Ai, c, {
            cardFields: 0,
            dragging: 1,
            selected: 2,
            cardShape: 3,
            cardTemplate: 4,
            meta: 5,
            cardHeight: 9,
            menu: 6,
            api: 7
         })
      }
   }
   const zi = e => ({}),
      ji = e => ({});

   function qi(e, t, n) {
      const o = e.slice();
      return o[28] = t[n], o
   }
   const Pi = e => ({
         item: 16 & e
      }),
      Ki = e => ({
         item: e[28].data
      });

   function Vi(e, t) {
      let n, o, r, l, s;
      const i = t[15].item,
         c = f(i, t, t[14], Ki);
      return {
         key: e,
         first: null,
         c() {
            n = O("div"), c && c.c(), o = F(), K(n, "class", "wx-item svelte-p0hyfc"), K(n, "data-id", r = t[28].data.id), K(n, "data-index", l = t[28].index), this.first = n
         },
         m(e, t) {
            N(e, n, t), c && c.m(n, null), T(n, o), s = !0
         },
         p(e, o) {
            t = e, c && c.p && (!s || 16400 & o) && h(c, i, t, t[14], s ? $(i, t[14], o, Pi) : g(t[14]), Ki), (!s || 16 & o && r !== (r = t[28].data.id)) && K(n, "data-id", r), (!s || 16 & o && l !== (l = t[28].index)) && K(n, "data-index", l)
         },
         i(e) {
            s || (Oe(c, e), s = !0)
         },
         o(e) {
            Ae(c, e), s = !1
         },
         d(e) {
            e && L(n), c && c.d(e)
         }
      }
   }

   function Ui(e) {
      let t, n, o, r, l, i, c, a = [],
         d = new Map,
         u = e[4];
      const p = e => e[28].index;
      for (let t = 0; t < u.length; t += 1) {
         let n = qi(e, u, t),
            o = p(n);
         d.set(o, a[t] = Vi(o, n))
      }
      const m = e[15].extra,
         v = f(m, e, e[14], ji);
      return {
         c() {
            t = O("div"), n = O("div");
            for (let e = 0; e < a.length; e += 1) a[e].c();
            o = F(), v && v.c(), K(n, "class", "wx-content svelte-p0hyfc"), G(n, "padding-top", e[5] + "px"), G(n, "padding-bottom", e[6] + "px"), K(t, "class", "wx-virtual-list svelte-p0hyfc"), G(t, "height", e[0]), ke((() => e[18].call(t)))
         },
         m(s, d) {
            N(s, t, d), T(t, n);
            for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(n, null);
            e[16](n), T(t, o), v && v.m(t, null), e[17](t), r = function (e, t) {
               "static" === getComputedStyle(e).position && (e.style.position = "relative");
               const n = O("iframe");
               n.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n.setAttribute("aria-hidden", "true"), n.tabIndex = -1;
               const o = J();
               let r;
               return o ? (n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", r = j(window, "message", (e => {
                  e.source === n.contentWindow && t()
               }))) : (n.src = "about:blank", n.onload = () => {
                  r = j(n.contentWindow, "resize", t), t()
               }), T(e, n), () => {
                  (o || r && n.contentWindow) && r(), L(n)
               }
            }(t, e[18].bind(t)), l = !0, i || (c = [j(t, "scroll", e[7]), k(Rl.call(null, t))], i = !0)
         },
         p(e, [o]) {
            16400 & o && (u = e[4], Le(), a = Pe(a, o, p, 1, e, u, d, n, qe, Vi, null, qi), He()), (!l || 32 & o) && G(n, "padding-top", e[5] + "px"), (!l || 64 & o) && G(n, "padding-bottom", e[6] + "px"), v && v.p && (!l || 16384 & o) && h(v, m, e, e[14], l ? $(m, e[14], o, zi) : g(e[14]), ji), (!l || 1 & o) && G(t, "height", e[0])
         },
         i(e) {
            if (!l) {
               for (let e = 0; e < u.length; e += 1) Oe(a[e]);
               Oe(v, e), l = !0
            }
         },
         o(e) {
            for (let e = 0; e < a.length; e += 1) Ae(a[e]);
            Ae(v, e), l = !1
         },
         d(n) {
            n && L(t);
            for (let e = 0; e < a.length; e += 1) a[e].d();
            e[16](null), v && v.d(n), e[17](null), r(), i = !1, s(c)
         }
      }
   }

   function Yi(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t;
      var l = this && this.__awaiter || function (e, t, n, o) {
         return new(n || (n = Promise))((function (r, l) {
            function s(e) {
               try {
                  c(o.next(e))
               } catch (e) {
                  l(e)
               }
            }

            function i(e) {
               try {
                  c(o.throw(e))
               } catch (e) {
                  l(e)
               }
            }

            function c(e) {
               var t;
               e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                  e(t)
               }))).then(s, i)
            }
            c((o = o.apply(e, t || [])).next())
         }))
      };
      let {
         items: s
      } = t, {
         scrollToId: i
      } = t, {
         height: c = "100%"
      } = t, {
         itemHeight: a
      } = t, {
         start: d = 0
      } = t, {
         end: u = 0
      } = t;
      const p = ue();
      let f, m, $, h, g, v = [],
         w = 0,
         b = !1,
         y = 0,
         x = 0;

      function k(e) {
         return l(this, void 0, void 0, (function* () {
            if (m.querySelector(`[data-id="${e}"]`)) return;
            const t = s.findIndex((t => t.id === e));
            t > -1 && (n(2, m.scrollTop = (t + 1) * g - w / 2, m), I(), e = null)
         }))
      }

      function S(e) {
         const t = s.length - u;
         n(6, x = t * e)
      }

      function I() {
         return l(this, void 0, void 0, (function* () {
            const {
               scrollTop: e
            } = m;
            h.forEach(((e, t) => {
               const {
                  index: n
               } = e;
               v[n] = a || f[t].offsetHeight
            }));
            let t = 0,
               o = 0;
            for (; t < s.length;) {
               const r = v[t] || g;
               if (o + r > e) {
                  n(8, d = t), n(5, y = o);
                  break
               }
               o += r, t += 1
            }
            for (; t < s.length && (o += v[t] || g, t += 1, !(o > e + w)););
            n(9, u = t), g = Math.round(o / u), S(g)
         }))
      }
      return ce((() => {
         f = $.children, n(13, b = !0)
      })), e.$$set = e => {
         "items" in e && n(10, s = e.items), "scrollToId" in e && n(11, i = e.scrollToId), "height" in e && n(0, c = e.height), "itemHeight" in e && n(12, a = e.itemHeight), "start" in e && n(8, d = e.start), "end" in e && n(9, u = e.end), "$$scope" in e && n(14, r = e.$$scope)
      }, e.$$.update = () => {
         1792 & e.$$.dirty && n(4, h = s.slice(d, u).map(((e, t) => ({
            index: t + d,
            data: e
         })))), 15362 & e.$$.dirty && b && function (e, t, o, r) {
            l(this, void 0, void 0, (function* () {
               yield xe(), v.length = e.length, v.fill(0);
               const {
                  scrollTop: l
               } = m;
               let s = y - l;
               for (let r = d; r < e.length; r++) {
                  if (s > t) {
                     n(9, u = r);
                     break
                  }
                  let e = f[r - d];
                  e || (n(9, u = r + 1), yield xe(), e = f[r - d]);
                  const l = o || e.offsetHeight;
                  v[r] = l, s += l
               }
               g = Math.round((y + s) / u), S(g), yield xe(), r && k(r)
            }))
         }(s, w, a, i)
      }, [c, w, m, $, h, y, x, function () {
         return l(this, void 0, void 0, (function* () {
            I(), p("scroll", {
               start: d,
               end: u
            })
         }))
      }, d, u, s, i, a, b, r, o, function (e) {
         he[e ? "unshift" : "push"]((() => {
            $ = e, n(3, $)
         }))
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            m = e, n(2, m)
         }))
      }, function () {
         w = this.offsetHeight, n(1, w)
      }]
   }
   class Gi extends Je {
      constructor(e) {
         super(), We(this, e, Yi, Ui, c, {
            items: 10,
            scrollToId: 11,
            height: 0,
            itemHeight: 12,
            start: 8,
            end: 9
         })
      }
   }

   function Bi(e) {
      let t, n, o;
      return n = new Gi({
         props: {
            items: e[13],
            scrollToId: e[14],
            $$slots: {
               extra: [Zi, ({
                  item: e
               }) => ({
                  19: e
               }), ({
                  item: e
               }) => e ? 524288 : 0],
               item: [Ji, ({
                  item: e
               }) => ({
                  19: e
               }), ({
                  item: e
               }) => e ? 524288 : 0]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), K(t, "class", "wx-list-wrapper svelte-84hxz5"), K(t, "data-id", "scroll-column")
         },
         m(e, r) {
            N(e, t, r), Ge(n, t, null), o = !0
         },
         p(e, t) {
            const o = {};
            8192 & t && (o.items = e[13]), 16384 & t && (o.scrollToId = e[14]), 1580030 & t && (o.$$scope = {
               dirty: t,
               ctx: e
            }), n.$set(o)
         },
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function Wi(e) {
      let t;
      return {
         c() {
            t = O("div"), K(t, "class", "wx-drop-area svelte-84hxz5"), G(t, "min-height", e[8] + "px")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            256 & n && G(t, "min-height", e[8] + "px")
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Ji(e) {
      let t, n, o, r, l = jr(e[19].id, e[1]),
         s = l && Wi(e);
      return o = new Fi({
         props: {
            api: e[12],
            cardTemplate: e[5] || Oi,
            cardFields: e[19],
            cardHeight: e[7],
            dragging: e[6][e[19].id]?.dragging,
            selected: qr(e[3], e[19].id),
            meta: e[6] && e[6][e[19].id],
            cardShape: e[4],
            menu: e[11][e[19].id]
         }
      }), o.$on("action", e[18]), {
         c() {
            t = O("div"), s && s.c(), n = F(), Ye(o.$$.fragment), K(t, "slot", "item")
         },
         m(e, l) {
            N(e, t, l), s && s.m(t, null), T(t, n), Ge(o, t, null), r = !0
         },
         p(e, r) {
            524290 & r && (l = jr(e[19].id, e[1])), l ? s ? s.p(e, r) : (s = Wi(e), s.c(), s.m(t, n)) : s && (s.d(1), s = null);
            const i = {};
            4096 & r && (i.api = e[12]), 32 & r && (i.cardTemplate = e[5] || Oi), 524288 & r && (i.cardFields = e[19]), 128 & r && (i.cardHeight = e[7]), 524352 & r && (i.dragging = e[6][e[19].id]?.dragging), 524296 & r && (i.selected = qr(e[3], e[19].id)), 524352 & r && (i.meta = e[6] && e[6][e[19].id]), 16 & r && (i.cardShape = e[4]), 526336 & r && (i.menu = e[11][e[19].id]), o.$set(i)
         },
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(t), s && s.d(), Be(o)
         }
      }
   }

   function Xi(e) {
      let t;
      return {
         c() {
            t = O("div"), K(t, "class", "wx-drop-area svelte-84hxz5"), G(t, "min-height", e[8] + "px")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            256 & n && G(t, "min-height", e[8] + "px")
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Zi(e) {
      let t, n = !e[1] && jr(e[2], e[9]),
         o = n && Xi(e);
      return {
         c() {
            t = O("div"), o && o.c(), K(t, "slot", "extra")
         },
         m(e, n) {
            N(e, t, n), o && o.m(t, null)
         },
         p(e, r) {
            518 & r && (n = !e[1] && jr(e[2], e[9])), n ? o ? o.p(e, r) : (o = Xi(e), o.c(), o.m(t, null)) : o && (o.d(1), o = null)
         },
         d(e) {
            e && L(t), o && o.d()
         }
      }
   }

   function Qi(e) {
      let t, n, o = e[0] && Bi(e);
      return {
         c() {
            o && o.c(), t = z()
         },
         m(e, r) {
            o && o.m(e, r), N(e, t, r), n = !0
         },
         p(e, [n]) {
            e[0] ? o ? (o.p(e, n), 1 & n && Oe(o, 1)) : (o = Bi(e), o.c(), Oe(o, 1), o.m(t.parentNode, t)) : o && (Le(), Ae(o, 1, 1, (() => {
               o = null
            })), He())
         },
         i(e) {
            n || (Oe(o), n = !0)
         },
         o(e) {
            Ae(o), n = !1
         },
         d(e) {
            o && o.d(e), e && L(t)
         }
      }
   }

   function ec(e, n, o) {
      let r, l, s = t,
         i = () => (s(), s = u(y, (e => o(17, l = e))), y);
      e.$$.on_destroy.push((() => s()));
      let {
         column: c
      } = n, {
         cards: a
      } = n, {
         overCardId: d
      } = n, {
         overColId: p
      } = n, {
         movedCardId: f
      } = n, {
         selected: m
      } = n, {
         cardShape: $
      } = n, {
         cardTemplate: h = null
      } = n, {
         cardsMeta: g = {}
      } = n, {
         cardHeight: v = null
      } = n, {
         movedCardHeight: w = 0
      } = n, {
         areaId: b
      } = n, {
         scrollTo: y
      } = n;
      i();
      let k, {
            isMenuVisible: S
         } = n,
         {
            api: I
         } = n;
      return e.$$set = e => {
         "column" in e && o(15, c = e.column), "cards" in e && o(0, a = e.cards), "overCardId" in e && o(1, d = e.overCardId), "overColId" in e && o(2, p = e.overColId), "movedCardId" in e && o(16, f = e.movedCardId), "selected" in e && o(3, m = e.selected), "cardShape" in e && o(4, $ = e.cardShape), "cardTemplate" in e && o(5, h = e.cardTemplate), "cardsMeta" in e && o(6, g = e.cardsMeta), "cardHeight" in e && o(7, v = e.cardHeight), "movedCardHeight" in e && o(8, w = e.movedCardHeight), "areaId" in e && o(9, b = e.areaId), "scrollTo" in e && i(o(10, y = e.scrollTo)), "isMenuVisible" in e && o(11, S = e.isMenuVisible), "api" in e && o(12, I = e.api)
      }, e.$$.update = () => {
         98309 & e.$$.dirty && o(13, r = a.filter((e => !jr(f, e.id) && !jr(p, c.id)))), 139264 & e.$$.dirty && l && "card" === l.to && l.id && r.find((e => jr(e.id, l.id))) && (o(14, k = l.id), x(y, l = null, l))
      }, [a, d, p, m, $, h, g, v, w, b, y, S, I, r, k, c, f, l, function (t) {
         me.call(this, e, t)
      }]
   }
   class tc extends Je {
      constructor(e) {
         super(), We(this, e, ec, Qi, c, {
            column: 15,
            cards: 0,
            overCardId: 1,
            overColId: 2,
            movedCardId: 16,
            selected: 3,
            cardShape: 4,
            cardTemplate: 5,
            cardsMeta: 6,
            cardHeight: 7,
            movedCardHeight: 8,
            areaId: 9,
            scrollTo: 10,
            isMenuVisible: 11,
            api: 12
         })
      }
   }

   function nc(e, t, n) {
      const o = e.slice();
      return o[13] = t[n], o
   }

   function oc(e) {
      let t, n, o, r, l = e[0] && rc(e);
      return {
         c() {
            t = O("div"), l && l.c(), K(t, "class", "wx-list-wrapper svelte-1ck6han")
         },
         m(e, s) {
            N(e, t, s), l && l.m(t, null), n = !0, o || (r = k(Rl.call(null, t)), o = !0)
         },
         p(e, n) {
            e[0] ? l ? (l.p(e, n), 1 & n && Oe(l, 1)) : (l = rc(e), l.c(), Oe(l, 1), l.m(t, null)) : l && (Le(), Ae(l, 1, 1, (() => {
               l = null
            })), He())
         },
         i(e) {
            n || (Oe(l), n = !0)
         },
         o(e) {
            Ae(l), n = !1
         },
         d(e) {
            e && L(t), l && l.d(), o = !1, r()
         }
      }
   }

   function rc(e) {
      let t, n, o, r = [],
         l = new Map,
         s = !e[1] && jr(e[2], e[9]),
         i = e[0];
      const c = e => e[13].id;
      for (let t = 0; t < i.length; t += 1) {
         let n = nc(e, i, t),
            o = c(n);
         l.set(o, r[t] = sc(o, n))
      }
      let a = s && ic(e);
      return {
         c() {
            for (let e = 0; e < r.length; e += 1) r[e].c();
            t = F(), a && a.c(), n = z()
         },
         m(e, l) {
            for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, l);
            N(e, t, l), a && a.m(e, l), N(e, n, l), o = !0
         },
         p(e, o) {
            3579 & o && (i = e[0], Le(), r = Pe(r, o, c, 1, e, i, l, t.parentNode, qe, sc, t, nc), He()), 518 & o && (s = !e[1] && jr(e[2], e[9])), s ? a ? a.p(e, o) : (a = ic(e), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null)
         },
         i(e) {
            if (!o) {
               for (let e = 0; e < i.length; e += 1) Oe(r[e]);
               o = !0
            }
         },
         o(e) {
            for (let e = 0; e < r.length; e += 1) Ae(r[e]);
            o = !1
         },
         d(e) {
            for (let t = 0; t < r.length; t += 1) r[t].d(e);
            e && L(t), a && a.d(e), e && L(n)
         }
      }
   }

   function lc(e) {
      let t;
      return {
         c() {
            t = O("div"), K(t, "class", "wx-drop-area svelte-1ck6han"), G(t, "min-height", e[8] + "px")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            256 & n && G(t, "min-height", e[8] + "px")
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function sc(e, t) {
      let n, o, r, l, s = jr(t[13].id, t[1]),
         i = s && lc(t);
      return r = new Fi({
         props: {
            api: t[11],
            cardTemplate: t[5] || Oi,
            cardFields: t[13],
            cardHeight: t[7],
            dragging: t[6][t[13].id]?.dragging,
            selected: qr(t[3], t[13].id),
            meta: t[6] && t[6][t[13].id],
            cardShape: t[4],
            menu: t[10][t[13].id]
         }
      }), r.$on("action", t[12]), {
         key: e,
         first: null,
         c() {
            n = z(), i && i.c(), o = F(), Ye(r.$$.fragment), this.first = n
         },
         m(e, t) {
            N(e, n, t), i && i.m(e, t), N(e, o, t), Ge(r, e, t), l = !0
         },
         p(e, n) {
            t = e, 3 & n && (s = jr(t[13].id, t[1])), s ? i ? i.p(t, n) : (i = lc(t), i.c(), i.m(o.parentNode, o)) : i && (i.d(1), i = null);
            const l = {};
            2048 & n && (l.api = t[11]), 32 & n && (l.cardTemplate = t[5] || Oi), 1 & n && (l.cardFields = t[13]), 128 & n && (l.cardHeight = t[7]), 65 & n && (l.dragging = t[6][t[13].id]?.dragging), 9 & n && (l.selected = qr(t[3], t[13].id)), 65 & n && (l.meta = t[6] && t[6][t[13].id]), 16 & n && (l.cardShape = t[4]), 1025 & n && (l.menu = t[10][t[13].id]), r.$set(l)
         },
         i(e) {
            l || (Oe(r.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(r.$$.fragment, e), l = !1
         },
         d(e) {
            e && L(n), i && i.d(e), e && L(o), Be(r, e)
         }
      }
   }

   function ic(e) {
      let t;
      return {
         c() {
            t = O("div"), K(t, "class", "wx-drop-area svelte-1ck6han"), G(t, "min-height", e[8] + "px")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            256 & n && G(t, "min-height", e[8] + "px")
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function cc(e) {
      let t, n, o = e[0] && oc(e);
      return {
         c() {
            o && o.c(), t = z()
         },
         m(e, r) {
            o && o.m(e, r), N(e, t, r), n = !0
         },
         p(e, [n]) {
            e[0] ? o ? (o.p(e, n), 1 & n && Oe(o, 1)) : (o = oc(e), o.c(), Oe(o, 1), o.m(t.parentNode, t)) : o && (Le(), Ae(o, 1, 1, (() => {
               o = null
            })), He())
         },
         i(e) {
            n || (Oe(o), n = !0)
         },
         o(e) {
            Ae(o), n = !1
         },
         d(e) {
            o && o.d(e), e && L(t)
         }
      }
   }

   function ac(e, t, n) {
      let {
         cards: o
      } = t, {
         overCardId: r
      } = t, {
         overColId: l
      } = t, {
         selected: s
      } = t, {
         cardShape: i
      } = t, {
         cardTemplate: c = null
      } = t, {
         cardsMeta: a = {}
      } = t, {
         cardHeight: d = null
      } = t, {
         movedCardHeight: u = 0
      } = t, {
         areaId: p
      } = t, {
         isMenuVisible: f
      } = t, {
         api: m
      } = t;
      return e.$$set = e => {
         "cards" in e && n(0, o = e.cards), "overCardId" in e && n(1, r = e.overCardId), "overColId" in e && n(2, l = e.overColId), "selected" in e && n(3, s = e.selected), "cardShape" in e && n(4, i = e.cardShape), "cardTemplate" in e && n(5, c = e.cardTemplate), "cardsMeta" in e && n(6, a = e.cardsMeta), "cardHeight" in e && n(7, d = e.cardHeight), "movedCardHeight" in e && n(8, u = e.movedCardHeight), "areaId" in e && n(9, p = e.areaId), "isMenuVisible" in e && n(10, f = e.isMenuVisible), "api" in e && n(11, m = e.api)
      }, [o, r, l, s, i, c, a, d, u, p, f, m, function (t) {
         me.call(this, e, t)
      }]
   }
   class dc extends Je {
      constructor(e) {
         super(), We(this, e, ac, cc, c, {
            cards: 0,
            overCardId: 1,
            overColId: 2,
            selected: 3,
            cardShape: 4,
            cardTemplate: 5,
            cardsMeta: 6,
            cardHeight: 7,
            movedCardHeight: 8,
            areaId: 9,
            isMenuVisible: 10,
            api: 11
         })
      }
   }

   function uc(e, t, n) {
      const o = e.slice();
      return o[54] = t[n], o
   }

   function pc(e) {
      let n, o, r, l = e[0].label + "";
      return {
         c() {
            n = O("div"), o = O("div"), r = R(l), K(o, "class", "wx-label-text svelte-1ppa004"), K(n, "class", "wx-collapsed-label svelte-1ppa004")
         },
         m(e, t) {
            N(e, n, t), T(n, o), T(o, r)
         },
         p(e, t) {
            1 & t[0] && l !== (l = e[0].label + "") && U(r, l)
         },
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function fc(e) {
      let t, n, o, r, l, s;
      const i = [hc, $c, mc],
         c = [];

      function a(e, t) {
         return "column:lazy" === e[11] ? 0 : "column:default" === e[11] ? 1 : 2
      }
      t = a(e), n = c[t] = i[t](e);
      let d = e[18] && !e[1].noFreeSpace && yc(e),
         u = e[1].rowId && e[0].limit && xc(e);
      return {
         c() {
            n.c(), o = F(), r = O("div"), d && d.c(), l = F(), u && u.c(), K(r, "class", "wx-controls-wrapper svelte-1ppa004")
         },
         m(e, n) {
            c[t].m(e, n), N(e, o, n), N(e, r, n), d && d.m(r, null), T(r, l), u && u.m(r, null), s = !0
         },
         p(e, s) {
            let p = t;
            t = a(e), t === p ? c[t].p(e, s) : (Le(), Ae(c[p], 1, 1, (() => {
               c[p] = null
            })), He(), n = c[t], n ? n.p(e, s) : (n = c[t] = i[t](e), n.c()), Oe(n, 1), n.m(o.parentNode, o)), e[18] && !e[1].noFreeSpace ? d ? (d.p(e, s), 262146 & s[0] && Oe(d, 1)) : (d = yc(e), d.c(), Oe(d, 1), d.m(r, l)) : d && (Le(), Ae(d, 1, 1, (() => {
               d = null
            })), He()), e[1].rowId && e[0].limit ? u ? u.p(e, s) : (u = xc(e), u.c(), u.m(r, null)) : u && (u.d(1), u = null)
         },
         i(e) {
            s || (Oe(n), Oe(d), s = !0)
         },
         o(e) {
            Ae(n), Ae(d), s = !1
         },
         d(e) {
            c[t].d(e), e && L(o), e && L(r), d && d.d(), u && u.d()
         }
      }
   }

   function mc(e) {
      let t, n, o, r = !e[14] && jr(e[13], e[9]),
         l = e[2] && gc(e),
         s = r && bc(e);
      return {
         c() {
            l && l.c(), t = F(), s && s.c(), n = z()
         },
         m(e, r) {
            l && l.m(e, r), N(e, t, r), s && s.m(e, r), N(e, n, r), o = !0
         },
         p(e, o) {
            e[2] ? l ? (l.p(e, o), 4 & o[0] && Oe(l, 1)) : (l = gc(e), l.c(), Oe(l, 1), l.m(t.parentNode, t)) : l && (Le(), Ae(l, 1, 1, (() => {
               l = null
            })), He()), 25088 & o[0] && (r = !e[14] && jr(e[13], e[9])), r ? s ? s.p(e, o) : (s = bc(e), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null)
         },
         i(e) {
            o || (Oe(l), o = !0)
         },
         o(e) {
            Ae(l), o = !1
         },
         d(e) {
            l && l.d(e), e && L(t), s && s.d(e), e && L(n)
         }
      }
   }

   function $c(e) {
      let t, n;
      return t = new dc({
         props: {
            api: e[4],
            cards: e[2],
            overCardId: e[14],
            overColId: e[13],
            selected: e[17],
            cardShape: e[16],
            cardTemplate: e[3],
            cardsMeta: e[15],
            movedCardHeight: e[7],
            areaId: e[9],
            cardHeight: e[10],
            isMenuVisible: e[5]
         }
      }), t.$on("action", e[50]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            16 & n[0] && (o.api = e[4]), 4 & n[0] && (o.cards = e[2]), 16384 & n[0] && (o.overCardId = e[14]), 8192 & n[0] && (o.overColId = e[13]), 131072 & n[0] && (o.selected = e[17]), 65536 & n[0] && (o.cardShape = e[16]), 8 & n[0] && (o.cardTemplate = e[3]), 32768 & n[0] && (o.cardsMeta = e[15]), 128 & n[0] && (o.movedCardHeight = e[7]), 512 & n[0] && (o.areaId = e[9]), 1024 & n[0] && (o.cardHeight = e[10]), 32 & n[0] && (o.isMenuVisible = e[5]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function hc(e) {
      let t, n;
      return t = new tc({
         props: {
            api: e[4],
            column: e[0],
            cards: e[2],
            overCardId: e[14],
            overColId: e[13],
            movedCardId: e[12],
            selected: e[17],
            cardShape: e[16],
            cardTemplate: e[3],
            cardsMeta: e[15],
            movedCardHeight: e[7],
            areaId: e[9],
            scrollTo: e[23],
            cardHeight: e[10],
            isMenuVisible: e[5]
         }
      }), t.$on("action", e[49]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            16 & n[0] && (o.api = e[4]), 1 & n[0] && (o.column = e[0]), 4 & n[0] && (o.cards = e[2]), 16384 & n[0] && (o.overCardId = e[14]), 8192 & n[0] && (o.overColId = e[13]), 4096 & n[0] && (o.movedCardId = e[12]), 131072 & n[0] && (o.selected = e[17]), 65536 & n[0] && (o.cardShape = e[16]), 8 & n[0] && (o.cardTemplate = e[3]), 32768 & n[0] && (o.cardsMeta = e[15]), 128 & n[0] && (o.movedCardHeight = e[7]), 512 & n[0] && (o.areaId = e[9]), 1024 & n[0] && (o.cardHeight = e[10]), 32 & n[0] && (o.isMenuVisible = e[5]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function gc(e) {
      let t, n, o = [],
         r = new Map,
         l = e[2];
      const s = e => e[54].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = uc(e, l, t),
            i = s(n);
         r.set(i, o[t] = wc(i, n))
      }
      return {
         c() {
            for (let e = 0; e < o.length; e += 1) o[e].c();
            t = z()
         },
         m(e, r) {
            for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(e, r);
            N(e, t, r), n = !0
         },
         p(e, n) {
            246972 & n[0] && (l = e[2], Le(), o = Pe(o, n, s, 1, e, l, r, t.parentNode, qe, wc, t, uc), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            for (let t = 0; t < o.length; t += 1) o[t].d(e);
            e && L(t)
         }
      }
   }

   function vc(e) {
      let t;
      return {
         c() {
            t = O("div"), K(t, "class", "wx-drop-area svelte-1ppa004"), G(t, "min-height", e[7] + "px")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            128 & n[0] && G(t, "min-height", e[7] + "px")
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function wc(e, t) {
      let n, o, r, l, s = jr(t[54].id, t[14]),
         i = s && vc(t);
      return r = new Fi({
         props: {
            api: t[4],
            cardTemplate: t[3] || Oi,
            cardFields: t[54],
            dragging: t[15][t[54].id]?.dragging,
            selected: qr(t[17], t[54].id),
            meta: t[15] && t[15][t[54].id],
            cardShape: t[16],
            cardHeight: t[10],
            menu: t[5][t[54].id]
         }
      }), r.$on("action", t[51]), {
         key: e,
         first: null,
         c() {
            n = z(), i && i.c(), o = F(), Ye(r.$$.fragment), this.first = n
         },
         m(e, t) {
            N(e, n, t), i && i.m(e, t), N(e, o, t), Ge(r, e, t), l = !0
         },
         p(e, n) {
            t = e, 16388 & n[0] && (s = jr(t[54].id, t[14])), s ? i ? i.p(t, n) : (i = vc(t), i.c(), i.m(o.parentNode, o)) : i && (i.d(1), i = null);
            const l = {};
            16 & n[0] && (l.api = t[4]), 8 & n[0] && (l.cardTemplate = t[3] || Oi), 4 & n[0] && (l.cardFields = t[54]), 32772 & n[0] && (l.dragging = t[15][t[54].id]?.dragging), 131076 & n[0] && (l.selected = qr(t[17], t[54].id)), 32772 & n[0] && (l.meta = t[15] && t[15][t[54].id]), 65536 & n[0] && (l.cardShape = t[16]), 1024 & n[0] && (l.cardHeight = t[10]), 36 & n[0] && (l.menu = t[5][t[54].id]), r.$set(l)
         },
         i(e) {
            l || (Oe(r.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(r.$$.fragment, e), l = !1
         },
         d(e) {
            e && L(n), i && i.d(e), e && L(o), Be(r, e)
         }
      }
   }

   function bc(e) {
      let t;
      return {
         c() {
            t = O("div"), K(t, "class", "wx-drop-area svelte-1ppa004"), G(t, "min-height", e[7] + "px")
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            128 & n[0] && G(t, "min-height", e[7] + "px")
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function yc(e) {
      let n, o, r, l, s, i, c;
      return o = new Yl({
         props: {
            name: "wxi-plus"
         }
      }), {
         c() {
            n = O("div"), Ye(o.$$.fragment), r = F(), l = O("span"), l.textContent = `${e[19]("Add new card")}...`, K(l, "class", "wx-add-card-tip svelte-1ppa004"), K(n, "class", "wx-add-card-btn svelte-1ppa004")
         },
         m(t, a) {
            N(t, n, a), Ge(o, n, null), T(n, r), T(n, l), s = !0, i || (c = j(n, "click", e[33]), i = !0)
         },
         p: t,
         i(e) {
            s || (Oe(o.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(n), Be(o), i = !1, c()
         }
      }
   }

   function xc(e) {
      let t, n, o, r, l = e[1].cardsCount + "",
         s = e[1].totalLimit + "";
      return {
         c() {
            t = O("div"), n = R(l), o = R("/"), r = R(s), K(t, "class", "wx-swimlane-limit svelte-1ppa004")
         },
         m(e, l) {
            N(e, t, l), T(t, n), T(t, o), T(t, r)
         },
         p(e, t) {
            2 & t[0] && l !== (l = e[1].cardsCount + "") && U(n, l), 2 & t[0] && s !== (s = e[1].totalLimit + "") && U(r, s)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function kc(e) {
      let t, n, o;
      var r = e[0].overlay;
      return r && (t = ee(r, {})), {
         c() {
            t && Ye(t.$$.fragment), n = z()
         },
         m(e, r) {
            t && Ge(t, e, r), N(e, n, r), o = !0
         },
         p(e, o) {
            if (1 & o[0] && r !== (r = e[0].overlay)) {
               if (t) {
                  Le();
                  const e = t;
                  Ae(e.$$.fragment, 1, 0, (() => {
                     Be(e, 1)
                  })), He()
               }
               r ? (t = ee(r, {}), Ye(t.$$.fragment), Oe(t.$$.fragment, 1), Ge(t, n.parentNode, n)) : t = null
            }
         },
         i(e) {
            o || (t && Oe(t.$$.fragment, e), o = !0)
         },
         o(e) {
            t && Ae(t.$$.fragment, e), o = !1
         },
         d(e) {
            e && L(n), t && Be(t, e)
         }
      }
   }

   function Sc(e) {
      let t, n, o, r, l, s;
      const i = [fc, pc],
         c = [];

      function a(e, t) {
         return e[0].collapsed ? 1 : 0
      }
      n = a(e), o = c[n] = i[n](e);
      let d = e[0].overlay && kc(e);
      return {
         c() {
            t = O("div"), o.c(), r = F(), d && d.c(), K(t, "class", l = y(e[6]) + " svelte-1ppa004"), K(t, "data-drop-area", e[9]), G(t, "min-height", e[8])
         },
         m(e, o) {
            N(e, t, o), c[n].m(t, null), T(t, r), d && d.m(t, null), s = !0
         },
         p(e, u) {
            let p = n;
            n = a(e), n === p ? c[n].p(e, u) : (Le(), Ae(c[p], 1, 1, (() => {
               c[p] = null
            })), He(), o = c[n], o ? o.p(e, u) : (o = c[n] = i[n](e), o.c()), Oe(o, 1), o.m(t, r)), e[0].overlay ? d ? (d.p(e, u), 1 & u[0] && Oe(d, 1)) : (d = kc(e), d.c(), Oe(d, 1), d.m(t, null)) : d && (Le(), Ae(d, 1, 1, (() => {
               d = null
            })), He()), (!s || 64 & u[0] && l !== (l = y(e[6]) + " svelte-1ppa004")) && K(t, "class", l), (!s || 512 & u[0]) && K(t, "data-drop-area", e[9]), (!s || 256 & u[0]) && G(t, "min-height", e[8])
         },
         i(e) {
            s || (Oe(o), Oe(d), s = !0)
         },
         o(e) {
            Ae(o), Ae(d), s = !1
         },
         d(e) {
            e && L(t), c[n].d(), d && d.d()
         }
      }
   }

   function Ic(e, t, n) {
      let o, r, l, s, i, c, a, d, u, f, m, $, h, g, v, w, b, y, x, k, S, I, _, M, C, T, D, {
            column: E
         } = t,
         {
            areaMeta: N
         } = t,
         {
            row: L
         } = t,
         {
            cards: H
         } = t,
         {
            cardTemplate: O = null
         } = t,
         {
            api: A
         } = t,
         {
            isMenuVisible: R
         } = t;
      const F = fe("wx-i18n").getGroup("kanban"),
         {
            selected: z,
            cardShape: j,
            cardsMeta: q,
            scroll: P,
            readonly: K,
            columnShape: V,
            before: U,
            overAreaId: Y,
            dragItemId: G,
            dragItemsCoords: B,
            layout: W,
            cardHeight: J,
            cardsMap: X
         } = A.getReactiveState();
      p(e, z, (e => n(46, C = e))), p(e, j, (e => n(45, M = e))), p(e, q, (e => n(44, _ = e))), p(e, K, (e => n(48, D = e))), p(e, V, (e => n(38, b = e))), p(e, U, (e => n(43, I = e))), p(e, Y, (e => n(42, S = e))), p(e, G, (e => n(41, k = e))), p(e, B, (e => n(47, T = e))), p(e, W, (e => n(40, x = e))), p(e, J, (e => n(39, y = e))), p(e, X, (e => n(37, w = e)));
      const Z = ue();
      return e.$$set = e => {
         "column" in e && n(0, E = e.column), "areaMeta" in e && n(1, N = e.areaMeta), "row" in e && n(34, L = e.row), "cards" in e && n(2, H = e.cards), "cardTemplate" in e && n(3, O = e.cardTemplate), "api" in e && n(4, A = e.api), "isMenuVisible" in e && n(5, R = e.isMenuVisible)
      }, e.$$.update = () => {
         131072 & e.$$.dirty[1] && n(18, o = D.add), 66560 & e.$$.dirty[1] && n(35, r = T && T[k]), 32768 & e.$$.dirty[1] && n(17, l = C), 16384 & e.$$.dirty[1] && n(16, s = M), 8192 & e.$$.dirty[1] && n(15, i = _), 4096 & e.$$.dirty[1] && n(14, c = I), 2048 & e.$$.dirty[1] && n(13, a = S), 1024 & e.$$.dirty[1] && n(12, d = k), 512 & e.$$.dirty[1] && n(11, u = x), 256 & e.$$.dirty[1] && n(10, f = y), 1 & e.$$.dirty[0] | 8 & e.$$.dirty[1] && n(9, m = Pr(E.id, L.id)), 2 & e.$$.dirty[0] && n(36, $ = null == N ? void 0 : N.height), 32 & e.$$.dirty[1] && n(8, h = $ ? `${$}px` : "auto"), 16 & e.$$.dirty[1] && n(7, g = ((null == r ? void 0 : r.height) || 50) - 2), 3 & e.$$.dirty[0] | 192 & e.$$.dirty[1] && n(6, v = function (e, t, n, o) {
            let r = "wx-column";
            return t.collapsed && (r += " wx-collapsed"), n && (r += " wx-over-limit"), t.css && (r += " " + t.css), e && e.css && (r += " " + e.css(t, o)), r
         }(b, E, N.isOverLimit, w[E.id]))
      }, [E, N, H, O, A, R, v, g, h, m, f, u, d, a, c, i, s, l, o, F, z, j, q, P, K, V, U, Y, G, B, W, J, X, function (e) {
         e.stopPropagation(), Z("action", {
            action: "add-card",
            data: {
               columnId: E.id,
               rowId: L.id,
               card: {
                  label: F("Untitled")
               }
            }
         })
      }, L, r, $, w, b, y, x, k, S, I, _, M, C, T, D, function (t) {
         me.call(this, e, t)
      }, function (t) {
         me.call(this, e, t)
      }, function (t) {
         me.call(this, e, t)
      }]
   }
   class _c extends Je {
      constructor(e) {
         super(), We(this, e, Ic, Sc, c, {
            column: 0,
            areaMeta: 1,
            row: 34,
            cards: 2,
            cardTemplate: 3,
            api: 4,
            isMenuVisible: 5
         }, null, [-1, -1])
      }
   }

   function Mc(e) {
      let t, n, o, r, l;
      return {
         c() {
            t = O("div"), K(t, "class", n = "wx-collapsed-column" + (e[2].css ? " " + e[2].css : "") + " svelte-ms9wpd"), G(t, "left", e[6] + "px")
         },
         m(n, s) {
            N(n, t, s), r || (l = [j(t, "click", e[22]), k(o = ql.call(null, t, {
               container: e[1]
            }))], r = !0)
         },
         p(e, r) {
            4 & r && n !== (n = "wx-collapsed-column" + (e[2].css ? " " + e[2].css : "") + " svelte-ms9wpd") && K(t, "class", n), 64 & r && G(t, "left", e[6] + "px"), o && i(o.update) && 2 & r && o.update.call(null, {
               container: e[1]
            })
         },
         d(e) {
            e && L(t), r = !1, s(l)
         }
      }
   }

   function Cc(e) {
      let t, n = e[2].label + "";
      return {
         c() {
            t = R(n)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            4 & o && n !== (n = e[2].label + "") && U(t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Tc(e) {
      let t, n, o, r;
      return {
         c() {
            t = O("input"), K(t, "type", "text"), K(t, "class", "wx-input svelte-ms9wpd"), t.value = n = e[2].label
         },
         m(n, l) {
            N(n, t, l), o || (r = [j(t, "input", e[15]), j(t, "keypress", e[16]), j(t, "blur", e[13]), k(Hc.call(null, t))], o = !0)
         },
         p(e, o) {
            4 & o && n !== (n = e[2].label) && t.value !== n && (t.value = n)
         },
         d(e) {
            e && L(t), o = !1, s(r)
         }
      }
   }

   function Dc(e) {
      let t, n, o, r, l, s = e[2].limit && Ec(e);
      return o = new Yl({
         props: {
            name: "wxi-dots-h",
            clickable: !0
         }
      }), {
         c() {
            s && s.c(), t = F(), n = O("div"), Ye(o.$$.fragment), K(n, "class", "wx-menu svelte-ms9wpd"), K(n, "data-menu-id", r = e[2].id)
         },
         m(e, r) {
            s && s.m(e, r), N(e, t, r), N(e, n, r), Ge(o, n, null), l = !0
         },
         p(e, o) {
            e[2].limit ? s ? s.p(e, o) : (s = Ec(e), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), (!l || 4 & o && r !== (r = e[2].id)) && K(n, "data-menu-id", r)
         },
         i(e) {
            l || (Oe(o.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), l = !1
         },
         d(e) {
            s && s.d(e), e && L(t), e && L(n), Be(o)
         }
      }
   }

   function Ec(e) {
      let t, n, o, r, l, s = e[3][e[2].id].cardsCount + "",
         i = e[3][e[2].id].totalLimit + "";
      return {
         c() {
            t = R("("), n = R(s), o = R("/"), r = R(i), l = R(")")
         },
         m(e, s) {
            N(e, t, s), N(e, n, s), N(e, o, s), N(e, r, s), N(e, l, s)
         },
         p(e, t) {
            12 & t && s !== (s = e[3][e[2].id].cardsCount + "") && U(n, s), 12 & t && i !== (i = e[3][e[2].id].totalLimit + "") && U(r, i)
         },
         d(e) {
            e && L(t), e && L(n), e && L(o), e && L(r), e && L(l)
         }
      }
   }

   function Nc(e) {
      let t;
      return {
         c() {
            t = O("span"), t.textContent = "Trial", K(t, "class", "wx-mark svelte-ms9wpd"), X(t, "wx-error", 1692859553000 < new Date)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, n) {
            0 & n && X(t, "wx-error", 1692859553000 < new Date)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Lc(e) {
      let t, n, o, r, l, s, i, c, a, d, u, p, f, m = !e[7](),
         $ = e[2].collapsed && e[5] && e[1] && Mc(e);

      function h(e, t) {
         return e[0] ? Tc : Cc
      }
      r = new Yl({
         props: {
            name: e[2].collapsed ? "wxi-angle-right" : "wxi-angle-left",
            size: 24,
            clickable: !0,
            click: e[23]
         }
      });
      let g = h(e),
         v = g(e),
         w = e[4] && e[9] && !e[0] && Dc(e),
         b = m && Nc();
      return {
         c() {
            t = O("div"), $ && $.c(), n = F(), o = O("div"), Ye(r.$$.fragment), l = F(), s = O("div"), v.c(), i = F(), w && w.c(), c = F(), b && b.c(), K(o, "class", "wx-collapse-icon svelte-ms9wpd"), K(s, "class", "wx-label svelte-ms9wpd"), K(t, "class", a = y(e[8]) + " svelte-ms9wpd"), K(t, "data-column-header", d = e[2].id)
         },
         m(a, d) {
            N(a, t, d), $ && $.m(t, null), T(t, n), T(t, o), Ge(r, o, null), T(t, l), T(t, s), v.m(s, null), T(s, i), w && w.m(s, null), T(t, c), b && b.m(t, null), e[25](t), u = !0, p || (f = j(s, "dblclick", e[24]), p = !0)
         },
         p(e, [o]) {
            e[2].collapsed && e[5] && e[1] ? $ ? $.p(e, o) : ($ = Mc(e), $.c(), $.m(t, n)) : $ && ($.d(1), $ = null);
            const l = {};
            4 & o && (l.name = e[2].collapsed ? "wxi-angle-right" : "wxi-angle-left"), r.$set(l), g === (g = h(e)) && v ? v.p(e, o) : (v.d(1), v = g(e), v && (v.c(), v.m(s, i))), e[4] && e[9] && !e[0] ? w ? (w.p(e, o), 529 & o && Oe(w, 1)) : (w = Dc(e), w.c(), Oe(w, 1), w.m(s, null)) : w && (Le(), Ae(w, 1, 1, (() => {
               w = null
            })), He()), 128 & o && (m = !e[7]()), m ? b ? b.p(e, o) : (b = Nc(), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!u || 256 & o && a !== (a = y(e[8]) + " svelte-ms9wpd")) && K(t, "class", a), (!u || 4 & o && d !== (d = e[2].id)) && K(t, "data-column-header", d)
         },
         i(e) {
            u || (Oe(r.$$.fragment, e), Oe(w), u = !0)
         },
         o(e) {
            Ae(r.$$.fragment, e), Ae(w), u = !1
         },
         d(n) {
            n && L(t), $ && $.d(), Be(r), v.d(), w && w.d(), b && b.d(), e[25](null), p = !1, f()
         }
      }
   }

   function Hc(e) {
      e.focus()
   }

   function Oc(e, t, n) {
      let o, r, l, s, i, {
            api: c
         } = t,
         {
            contentEl: a
         } = t,
         {
            column: d
         } = t,
         {
            areasMeta: u
         } = t,
         {
            isMenuVisible: f
         } = t,
         {
            renaming: m = !1
         } = t;
      const $ = ue(),
         {
            readonly: h,
            columnShape: g,
            cardsMap: v
         } = c.getReactiveState();
      p(e, h, (e => n(21, i = e))), p(e, g, (e => n(20, s = e))), p(e, v, (e => n(19, l = e)));
      let w, b = null;

      function y() {
         m && (null == b ? void 0 : b.trim()) && $("action", {
            action: "update-column",
            data: {
               id: d.id,
               column: {
                  label: b
               }
            }
         }), n(0, m = !1), b = null, $("action", {
            action: "close-column-input",
            data: {}
         })
      }

      function x() {
         o && n(0, m = !0)
      }

      function k() {
         $("action", {
            action: "update-column",
            data: {
               id: d.id,
               column: {
                  collapsed: !d.collapsed
               }
            }
         })
      }
      let S, I = null;

      function _() {
         n(6, I = null == w ? void 0 : w.offsetLeft)
      }
      ae((() => {
         _()
      })), S = () => {
         if ("undefined" == typeof window) return !0;
         const e = location.hostname,
            t = ["ZGh0bWx4LmNvbQ==", "ZGh0bWx4Y29kZS5jb20=", "d2ViaXhjb2RlLmNvbQ==", "d2ViaXguaW8=", "cmVwbC5jbw=="];
         for (let n = 0; n < t.length; n++) {
            const o = window.atob(t[n]);
            if (o === e || e.endsWith("." + o)) return !0
         }
         return !1
      };
      const M = new ResizeObserver((() => {
         _()
      }));
      de((() => {
         M.disconnect()
      }));
      return e.$$set = e => {
         "api" in e && n(18, c = e.api), "contentEl" in e && n(1, a = e.contentEl), "column" in e && n(2, d = e.column), "areasMeta" in e && n(3, u = e.areasMeta), "isMenuVisible" in e && n(4, f = e.isMenuVisible), "renaming" in e && n(0, m = e.renaming)
      }, e.$$.update = () => {
         2097152 & e.$$.dirty && n(9, o = i.edit), 1572876 & e.$$.dirty && n(8, r = function (e, t, n, o) {
            let r = "wx-column";
            return t.collapsed && (r += " wx-collapsed"), n && (r += " wx-over-limit"), t.css && (r += " " + t.css), e && e.css && (r += " " + e.css(t, o)), r
         }(s, d, u[d.id].isOverLimit, l[d.id])), 2 & e.$$.dirty && a && M.observe(a)
      }, [m, a, d, u, f, w, I, S, r, o, h, g, v, y, x, function (e) {
         b = e.target.value
      }, function (e) {
         13 === e.charCode && y()
      }, k, c, l, s, i, () => k(), () => k(), () => x(), function (e) {
         he[e ? "unshift" : "push"]((() => {
            w = e, n(5, w)
         }))
      }]
   }
   class Ac extends Je {
      constructor(e) {
         super(), We(this, e, Oc, Lc, c, {
            api: 18,
            contentEl: 1,
            column: 2,
            areasMeta: 3,
            isMenuVisible: 4,
            renaming: 0
         })
      }
   }

   function Rc(e, t, n) {
      const o = e.slice();
      return o[22] = t[n], o
   }

   function Fc(e, t) {
      let n, o, r;
      return o = new Ac({
         props: {
            column: t[22],
            isMenuVisible: t[4].menu.show && t[5][t[22].id]?.length,
            contentEl: t[3],
            api: t[2],
            areasMeta: t[1],
            renaming: t[6] === t[22].id
         }
      }), o.$on("action", t[15]), {
         key: e,
         first: null,
         c() {
            n = z(), Ye(o.$$.fragment), this.first = n
         },
         m(e, t) {
            N(e, n, t), Ge(o, e, t), r = !0
         },
         p(e, n) {
            t = e;
            const r = {};
            1 & n && (r.column = t[22]), 49 & n && (r.isMenuVisible = t[4].menu.show && t[5][t[22].id]?.length), 8 & n && (r.contentEl = t[3]), 4 & n && (r.api = t[2]), 2 & n && (r.areasMeta = t[1]), 65 & n && (r.renaming = t[6] === t[22].id), o.$set(r)
         },
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(n), Be(o, e)
         }
      }
   }

   function zc(e) {
      let t, n, o, r, l, s, i, c = [],
         a = new Map,
         d = e[0];
      const u = e => e[22].id;
      for (let t = 0; t < d.length; t += 1) {
         let n = Rc(e, d, t),
            o = u(n);
         a.set(o, c[t] = Fc(o, n))
      }

      function p(t) {
         e[16](t)
      }
      let f = {
         at: "left-bottom",
         options: e[8],
         resolver: e[14],
         dataKey: "menuId"
      };
      return void 0 !== e[7] && (f.handler = e[7]), o = new Es({
         props: f
      }), he.push((() => Ue(o, "handler", p))), o.$on("click", e[12]), {
         c() {
            t = O("div");
            for (let e = 0; e < c.length; e += 1) c[e].c();
            n = F(), Ye(o.$$.fragment), K(t, "class", "wx-header svelte-bteu5p"), X(t, "fixed", e[11])
         },
         m(r, a) {
            N(r, t, a);
            for (let e = 0; e < c.length; e += 1) c[e] && c[e].m(t, null);
            N(r, n, a), Ge(o, r, a), l = !0, s || (i = j(t, "click", e[13]), s = !0)
         },
         p(e, [n]) {
            32895 & n && (d = e[0], Le(), c = Pe(c, n, u, 1, e, d, a, t, qe, Fc, null, Rc), He());
            const l = {};
            256 & n && (l.options = e[8]), !r && 128 & n && (r = !0, l.handler = e[7], Se((() => r = !1))), o.$set(l)
         },
         i(e) {
            if (!l) {
               for (let e = 0; e < d.length; e += 1) Oe(c[e]);
               Oe(o.$$.fragment, e), l = !0
            }
         },
         o(e) {
            for (let e = 0; e < c.length; e += 1) Ae(c[e]);
            Ae(o.$$.fragment, e), l = !1
         },
         d(e) {
            e && L(t);
            for (let e = 0; e < c.length; e += 1) c[e].d();
            e && L(n), Be(o, e), s = !1, i()
         }
      }
   }

   function jc(e, t, n) {
      let o, r, {
            columns: l
         } = t,
         {
            areasMeta: s
         } = t,
         {
            api: i
         } = t,
         {
            contentEl: c
         } = t;
      const a = fe("wx-i18n").getGroup("kanban"),
         d = ue(),
         {
            readonly: u,
            columnShape: f
         } = i.getReactiveState();
      p(e, u, (e => n(17, o = e))), p(e, f, (e => n(4, r = e)));
      const m = !1 !== r.fixedHeaders;
      let $ = {};

      function h(e, t) {
         var n;
         const o = l.findIndex((t => t.id === e)),
            r = null === (n = l["left" === t ? o - 1 : o + 2]) || void 0 === n ? void 0 : n.id;
         d("action", {
            action: "move-column",
            data: {
               id: e,
               before: r
            }
         })
      }
      let g = null;
      let v = null;
      let w = [];
      return e.$$set = e => {
         "columns" in e && n(0, l = e.columns), "areasMeta" in e && n(1, s = e.areasMeta), "api" in e && n(2, i = e.api), "contentEl" in e && n(3, c = e.contentEl)
      }, e.$$.update = () => {
         17 & e.$$.dirty && l.forEach(((e, t) => {
            n(5, $[e.id] = ((e, t, n, o) => {
               const r = o.menu.items({
                  columns: n,
                  columnIndex: t,
                  column: e
               });
               return r && r.length ? r.map((e => Object.assign(Object.assign({}, e), {
                  text: a(e.text),
                  css: e.disabled ? "disabled" : ""
               }))) : null
            })(e, t, l, r), $)
         }))
      }, [l, s, i, c, r, $, g, v, w, u, f, m, function (e) {
         const {
            action: t,
            item: r
         } = e.detail;
         if (t) {
            if (t.onClick) return void t.onClick({
               id: t.id,
               item: t,
               column: r
            });
            switch (t.id) {
               case "add-card":
                  d("action", {
                     action: "add-card",
                     data: {
                        columnId: r.id,
                        card: {
                           label: a("Untitled")
                        }
                     }
                  });
                  break;
               case "set-edit":
                  o.edit && n(6, g = r.id);
                  break;
               case "delete-column":
                  d("action", {
                     action: "delete-column",
                     data: {
                        id: r.id
                     }
                  });
                  break;
               case "move-column:left":
                  h(r.id, "left");
                  break;
               case "move-column:right":
                  h(r.id, "right")
            }
         }
      }, e => (e.cancelBubble = !0, v(e)), function (e) {
         return n(8, w = $[e] || []), l.find((t => t.id === e))
      }, ({
         detail: {
            action: e,
            data: t
         }
      }) => {
         "close-column-input" === e && n(6, g = null), d("action", {
            action: e,
            data: t
         })
      }, function (e) {
         v = e, n(7, v)
      }]
   }
   class qc extends Je {
      constructor(e) {
         super(), We(this, e, jc, zc, c, {
            columns: 0,
            areasMeta: 1,
            api: 2,
            contentEl: 3
         })
      }
   }
   const Pc = e => ({
         startIndex: 1 & e[0],
         endIndex: 2 & e[0],
         byRow: 8 & e[0],
         virtualContentEl: 16 & e[0]
      }),
      Kc = e => ({
         startIndex: e[0],
         endIndex: e[1],
         byRow: e[3],
         virtualContentEl: e[4]
      });

   function Vc(e) {
      let t, n, o, r, l;
      const i = e[30].default,
         c = f(i, e, e[29], Kc);
      return {
         c() {
            t = O("div"), n = O("div"), c && c.c(), K(n, "class", "wx-content svelte-14plw7q"), G(n, "padding-top", e[6] + "px"), G(n, "padding-bottom", e[5] + "px"), K(t, "class", "wx-list-wrapper svelte-14plw7q"), K(t, "data-id", "virtual-content")
         },
         m(s, i) {
            N(s, t, i), T(t, n), c && c.m(n, null), e[31](n), e[32](t), o = !0, r || (l = [j(t, "scroll", e[14]), k(Rl.call(null, t))], r = !0)
         },
         p(e, t) {
            c && c.p && (!o || 536870939 & t[0]) && h(c, i, e, e[29], o ? $(i, e[29], t, Pc) : g(e[29]), Kc), (!o || 64 & t[0]) && G(n, "padding-top", e[6] + "px"), (!o || 32 & t[0]) && G(n, "padding-bottom", e[5] + "px")
         },
         i(e) {
            o || (Oe(c, e), o = !0)
         },
         o(e) {
            Ae(c, e), o = !1
         },
         d(n) {
            n && L(t), c && c.d(n), e[31](null), e[32](null), r = !1, s(l)
         }
      }
   }

   function Uc(e, t, n) {
      let o, r, l, s, i, c, a, d, u, f, m, $, h, g, v, w, b, {
         $$slots: y = {},
         $$scope: k
      } = t;
      var S = this && this.__awaiter || function (e, t, n, o) {
         return new(n || (n = Promise))((function (r, l) {
            function s(e) {
               try {
                  c(o.next(e))
               } catch (e) {
                  l(e)
               }
            }

            function i(e) {
               try {
                  c(o.throw(e))
               } catch (e) {
                  l(e)
               }
            }

            function c(e) {
               var t;
               e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                  e(t)
               }))).then(s, i)
            }
            c((o = o.apply(e, t || [])).next())
         }))
      };
      let {
         api: I
      } = t;
      const {
         cardsMap: _,
         columns: M,
         rows: C,
         cardHeight: T,
         cards: D,
         columnKey: E,
         scroll: N
      } = I.getReactiveState();
      let L;
      p(e, _, (e => n(28, b = e))), p(e, M, (e => n(27, w = e))), p(e, C, (e => n(26, v = e))), p(e, T, (e => n(25, g = e))), p(e, D, (e => n(24, h = e))), p(e, E, (e => n(23, $ = e))), p(e, N, (e => n(22, m = e)));
      let H, O = 0,
         A = {},
         R = 0,
         F = 1;

      function z() {
         const e = L.scrollTop - d,
            t = Math.floor(e < 0 ? 0 : e / a),
            o = t + Math.floor((L.offsetHeight + 2 * d) / a);
         o >= O ? n(1, F = O) : (n(0, R = t), n(1, F = o))
      }
      return ce((() => {
         z()
      })), e.$$set = e => {
         "api" in e && n(15, I = e.api), "$$scope" in e && n(29, k = e.$$scope)
      }, e.$$.update = () => {
         268435456 & e.$$.dirty[0] && n(20, o = b), 134217728 & e.$$.dirty[0] && n(19, r = w), 67108864 & e.$$.dirty[0] && n(17, l = v), 33554432 & e.$$.dirty[0] && n(21, s = g), 16777216 & e.$$.dirty[0] && (i = h), 8388608 & e.$$.dirty[0] && (c = $), 2097152 & e.$$.dirty[0] && n(18, a = s + 10), 262144 & e.$$.dirty[0] && (d = 2 * a), 1703936 & e.$$.dirty[0] && l && r && o && (n(16, O = 0), l.reduce(((e, t) => {
            if (t.collapsed) return e;
            const l = r.reduce(((e, n) => {
               const r = Pr(n.id, t.id),
                  l = o[r].length;
               return l > e && (e = l), e
            }), 0);
            return n(3, A[t.id] = {
               id: t.id,
               maxCardsCount: l,
               minIndex: e,
               maxIndex: e + l,
               startIndex: 0,
               endIndex: 0,
               visible: !0
            }, A), n(16, O += l), e + l
         }), 0), L && (n(0, R = 0), n(1, F = 0), z())), 4194304 & e.$$.dirty[0] && m && "card" === m.to && m.id && function (e) {
            return S(this, void 0, void 0, (function* () {
               if (L.querySelector(`[data-drag-item="${e}"]`)) return;
               const t = Vr(i.find((t => jr(t.id, e))), c),
                  l = o[t].findIndex((t => jr(t.id, e))),
                  s = r.findIndex((e => e.id === t)),
                  d = parseFloat(getComputedStyle(L).getPropertyValue("--wx-kanban-column-width")) || 300;
               return l > -1 && (yield xe(), n(2, L.scrollTop = l * a, L), n(2, L.scrollLeft = d * s, L), !0)
            }))
         }(m.id).then((e => {
            e && x(N, m = null, m)
         })), 3 & e.$$.dirty[0] && function (e, t) {
            l.forEach((o => {
               const r = A[o.id],
                  l = t - e;
               let s = e - r.minIndex,
                  i = s + l;
               r.startIndex = s < 0 ? 0 : s, r.endIndex = i > r.maxIndex ? r.maxIndex : i;
               const c = s < r.maxIndex && i > 0;
               r.visible = c, o.collapsed && (r.visible = !0), n(3, A[o.id] = r, A)
            }))
         }(R, F), 262145 & e.$$.dirty[0] && n(6, u = R * a), 327682 & e.$$.dirty[0] && n(5, f = (O - F) * a)
      }, [R, F, L, A, H, f, u, _, M, C, T, D, E, N, function () {
         z()
      }, I, O, l, a, r, o, s, m, $, h, g, v, w, b, k, y, function (e) {
         he[e ? "unshift" : "push"]((() => {
            H = e, n(4, H)
         }))
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            L = e, n(2, L)
         }))
      }]
   }
   class Yc extends Je {
      constructor(e) {
         super(), We(this, e, Uc, Vc, c, {
            api: 15
         }, null, [-1, -1])
      }
   }

   function Gc(e, t) {
      for (const n in t) {
         const o = e[n],
            r = t[n];
         if (o !== r) {
            if (!Array.isArray(o) || !Array.isArray(r) || o.length !== r.length) return !1;
            for (let e = o.length - 1; e >= 0; e--)
               if (o[e] !== r[e]) return !1
         }
      }
      return !0
   }

   function Bc(e, t, n) {
      let o = !1,
         r = null;
      const l = Dr(e),
         {
            set: s
         } = l;
      let i = {
         ...e
      };
      return l.set = function (e) {
         Gc(i, e) || (i = {
            ...e
         }, s(e))
      }, l.update = function (t) {
         const n = t(e);
         Gc(i, n) || (i = {
            ...n
         }, s(n))
      }, l.reset = function (e) {
         o = !1, i = {}, l.set(e)
      }, l.subscribe((e => {
         o ? e && (n && n.debounce ? (clearTimeout(r), r = setTimeout((() => t(e)), n.debounce)) : t(e)) : o = !0
      })), l
   }

   function Wc(e, t, n) {
      const o = e.slice();
      return o[12] = t[n], o
   }

   function Jc(e) {
      let t, n, o, r, l, s, i = [],
         c = new Map;
      o = new Yl({
         props: {
            name: "wxi-close",
            click: e[2]
         }
      });
      let a = e[1];
      const d = e => e[12].id;
      for (let t = 0; t < a.length; t += 1) {
         let n = Wc(e, a, t),
            o = d(n);
         c.set(o, i[t] = ca(o, n))
      }
      return {
         c() {
            t = O("div"), n = O("div"), Ye(o.$$.fragment), r = F(), l = O("div");
            for (let e = 0; e < i.length; e += 1) i[e].c();
            K(n, "class", "wx-header svelte-19angmd"), K(l, "class", "wx-list svelte-19angmd"), K(t, "class", "wx-layout svelte-19angmd")
         },
         m(e, c) {
            N(e, t, c), T(t, n), Ge(o, n, null), T(t, r), T(t, l);
            for (let e = 0; e < i.length; e += 1) i[e] && i[e].m(l, null);
            s = !0
         },
         p(e, t) {
            250 & t && (a = e[1], Le(), i = Pe(i, t, d, 1, e, a, c, l, qe, ca, null, Wc), He())
         },
         i(e) {
            if (!s) {
               Oe(o.$$.fragment, e);
               for (let e = 0; e < a.length; e += 1) Oe(i[e]);
               s = !0
            }
         },
         o(e) {
            Ae(o.$$.fragment, e);
            for (let e = 0; e < i.length; e += 1) Ae(i[e]);
            s = !1
         },
         d(e) {
            e && L(t), Be(o);
            for (let e = 0; e < i.length; e += 1) i[e].d()
         }
      }
   }

   function Xc(e) {
      let n, o;
      return n = new Yl({
         props: {
            name: "wxi-paperclip",
            size: 20
         }
      }), {
         c() {
            Ye(n.$$.fragment)
         },
         m(e, t) {
            Ge(n, e, t), o = !0
         },
         p: t,
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            Be(n, e)
         }
      }
   }

   function Zc(e) {
      let n;
      return {
         c() {
            n = O("div"), K(n, "class", "wx-thumb svelte-19angmd"), G(n, "background-image", "url('" + (e[12].previewURL || e[12].url) + "')")
         },
         m(e, t) {
            N(e, n, t)
         },
         p(e, t) {
            2 & t && G(n, "background-image", "url('" + (e[12].previewURL || e[12].url) + "')")
         },
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Qc(e) {
      let t, n, o = e[4](e[12].file.size) + "";
      return {
         c() {
            t = O("div"), n = R(o), K(t, "class", "wx-size")
         },
         m(e, o) {
            N(e, t, o), T(t, n)
         },
         p(e, t) {
            2 & t && o !== (o = e[4](e[12].file.size) + "") && U(n, o)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ea(e) {
      let t, n, o, r, l, s, i, c, a, d = e[5](e[12]);

      function u() {
         return e[9](e[12])
      }
      o = new Yl({
         props: {
            name: "wxi-external",
            clickable: !0
         }
      }), i = new Yl({
         props: {
            name: "wxi-delete-outline",
            click: u
         }
      });
      let p = d && oa(e);
      return {
         c() {
            t = O("div"), n = O("a"), Ye(o.$$.fragment), s = F(), Ye(i.$$.fragment), c = F(), p && p.c(), K(n, "class", "wx-upload-link svelte-19angmd"), K(n, "href", r = e[12].url), K(n, "download", l = e[12].name), K(n, "target", "_blank"), K(n, "rel", "noreferrer nofollow noopener"), K(t, "class", "wx-hidden svelte-19angmd")
         },
         m(e, r) {
            N(e, t, r), T(t, n), Ge(o, n, null), T(t, s), Ge(i, t, null), T(t, c), p && p.m(t, null), a = !0
         },
         p(o, s) {
            e = o, (!a || 2 & s && r !== (r = e[12].url)) && K(n, "href", r), (!a || 2 & s && l !== (l = e[12].name)) && K(n, "download", l);
            const c = {};
            2 & s && (c.click = u), i.$set(c), 2 & s && (d = e[5](e[12])), d ? p ? (p.p(e, s), 2 & s && Oe(p, 1)) : (p = oa(e), p.c(), Oe(p, 1), p.m(t, null)) : p && (Le(), Ae(p, 1, 1, (() => {
               p = null
            })), He())
         },
         i(e) {
            a || (Oe(o.$$.fragment, e), Oe(i.$$.fragment, e), Oe(p), a = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), Ae(i.$$.fragment, e), Ae(p), a = !1
         },
         d(e) {
            e && L(t), Be(o), Be(i), p && p.d()
         }
      }
   }

   function ta(e) {
      let t, n, o, r;

      function l() {
         return e[8](e[12])
      }
      return t = new Yl({
         props: {
            name: "wxi-alert"
         }
      }), o = new Yl({
         props: {
            name: "wxi-delete-outline",
            click: l
         }
      }), {
         c() {
            Ye(t.$$.fragment), n = F(), Ye(o.$$.fragment)
         },
         m(e, l) {
            Ge(t, e, l), N(e, n, l), Ge(o, e, l), r = !0
         },
         p(t, n) {
            e = t;
            const r = {};
            2 & n && (r.click = l), o.$set(r)
         },
         i(e) {
            r || (Oe(t.$$.fragment, e), Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            Be(t, e), e && L(n), Be(o, e)
         }
      }
   }

   function na(e) {
      let n, o;
      return n = new Yl({
         props: {
            name: "wxi-loading",
            spin: !0
         }
      }), {
         c() {
            Ye(n.$$.fragment)
         },
         m(e, t) {
            Ge(n, e, t), o = !0
         },
         p: t,
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            Be(n, e)
         }
      }
   }

   function oa(e) {
      let t, n, o, r;
      const l = [la, ra],
         s = [];

      function i(e, t) {
         return e[12].isCover ? 1 : 0
      }
      return t = i(e), n = s[t] = l[t](e), {
         c() {
            n.c(), o = z()
         },
         m(e, n) {
            s[t].m(e, n), N(e, o, n), r = !0
         },
         p(e, r) {
            let c = t;
            t = i(e), t === c ? s[t].p(e, r) : (Le(), Ae(s[c], 1, 1, (() => {
               s[c] = null
            })), He(), n = s[t], n ? n.p(e, r) : (n = s[t] = l[t](e), n.c()), Oe(n, 1), n.m(o.parentNode, o))
         },
         i(e) {
            r || (Oe(n), r = !0)
         },
         o(e) {
            Ae(n), r = !1
         },
         d(e) {
            s[t].d(e), e && L(o)
         }
      }
   }

   function ra(e) {
      let t, n;
      return t = new Mt({
         props: {
            click: e[7],
            $$slots: {
               default: [sa]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            32768 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function la(e) {
      let t, n;

      function o() {
         return e[10](e[12])
      }
      return t = new Mt({
         props: {
            click: o,
            $$slots: {
               default: [ia]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(n, r) {
            e = n;
            const l = {};
            2 & r && (l.click = o), 32768 & r && (l.$$scope = {
               dirty: r,
               ctx: e
            }), t.$set(l)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function sa(e) {
      let t;
      return {
         c() {
            t = R("Remove cover")
         },
         m(e, n) {
            N(e, t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ia(e) {
      let t;
      return {
         c() {
            t = R("Make cover")
         },
         m(e, n) {
            N(e, t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ca(e, t) {
      let n, o, r, l, s, i, c, a, d, u, p, f, m, $, h, g = t[12].name + "";
      const v = [Zc, Xc],
         w = [];

      function b(e, t) {
         return 2 & t && (r = null), null == r && (r = !!e[5](e[12])), r ? 0 : 1
      }
      l = b(t, -1), s = w[l] = v[l](t);
      let y = t[12].file && Qc(t);
      const x = [na, ta, ea],
         k = [];

      function S(e, t) {
         return "client" === e[12].status ? 0 : "error" === e[12].status ? 1 : e[12].status && "server" !== e[12].status ? -1 : 2
      }
      return ~(f = S(t)) && (m = k[f] = x[f](t)), {
         key: e,
         first: null,
         c() {
            n = O("div"), o = O("div"), s.c(), i = F(), c = O("div"), a = R(g), d = F(), y && y.c(), u = F(), p = O("div"), m && m.c(), $ = F(), K(o, "class", "wx-file-icon svelte-19angmd"), K(c, "class", "wx-name svelte-19angmd"), K(p, "class", "wx-controls svelte-19angmd"), K(n, "class", "wx-row svelte-19angmd"), this.first = n
         },
         m(e, t) {
            N(e, n, t), T(n, o), w[l].m(o, null), T(n, i), T(n, c), T(c, a), T(n, d), y && y.m(n, null), T(n, u), T(n, p), ~f && k[f].m(p, null), T(n, $), h = !0
         },
         p(e, r) {
            let i = l;
            l = b(t = e, r), l === i ? w[l].p(t, r) : (Le(), Ae(w[i], 1, 1, (() => {
               w[i] = null
            })), He(), s = w[l], s ? s.p(t, r) : (s = w[l] = v[l](t), s.c()), Oe(s, 1), s.m(o, null)), (!h || 2 & r) && g !== (g = t[12].name + "") && U(a, g), t[12].file ? y ? y.p(t, r) : (y = Qc(t), y.c(), y.m(n, u)) : y && (y.d(1), y = null);
            let c = f;
            f = S(t), f === c ? ~f && k[f].p(t, r) : (m && (Le(), Ae(k[c], 1, 1, (() => {
               k[c] = null
            })), He()), ~f ? (m = k[f], m ? m.p(t, r) : (m = k[f] = x[f](t), m.c()), Oe(m, 1), m.m(p, null)) : m = null)
         },
         i(e) {
            h || (Oe(s), Oe(m), h = !0)
         },
         o(e) {
            Ae(s), Ae(m), h = !1
         },
         d(e) {
            e && L(n), w[l].d(), y && y.d(), ~f && k[f].d()
         }
      }
   }

   function aa(e) {
      let t, n, o = e[1].length && Jc(e);
      return {
         c() {
            o && o.c(), t = z()
         },
         m(e, r) {
            o && o.m(e, r), N(e, t, r), n = !0
         },
         p(e, [n]) {
            e[1].length ? o ? (o.p(e, n), 2 & n && Oe(o, 1)) : (o = Jc(e), o.c(), Oe(o, 1), o.m(t.parentNode, t)) : o && (Le(), Ae(o, 1, 1, (() => {
               o = null
            })), He())
         },
         i(e) {
            n || (Oe(o), n = !0)
         },
         o(e) {
            Ae(o), n = !1
         },
         d(e) {
            o && o.d(e), e && L(t)
         }
      }
   }

   function da(e, n, o) {
      let r, l = t,
         s = () => (l(), l = u(i, (e => o(1, r = e))), i);
      e.$$.on_destroy.push((() => l()));
      let {
         data: i
      } = n;
      s();
      const c = ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb"];

      function a(e) {
         i.update((t => t.filter((t => t.id !== e))))
      }

      function d(e) {
         i.update((t => t.map((t => t.id === e ? Object.assign(Object.assign({}, t), {
            isCover: !0
         }) : (delete t.isCover, t)))))
      }
      return e.$$set = e => {
         "data" in e && s(o(0, i = e.data))
      }, [i, r, function () {
         i.set([])
      }, a, function (e) {
         let t = 0;
         for (; e > 1024;) t++, e /= 1024;
         return Math.round(100 * e) / 100 + " " + c[t]
      }, function (e) {
         var t, n;
         const o = null === (t = null == e ? void 0 : e.url) || void 0 === t ? void 0 : t.split(".").pop();
         return zl(null === (n = null == e ? void 0 : e.previewURL) || void 0 === n ? void 0 : n.split(".").pop()) || zl(o)
      }, d, function () {
         i.update((e => e.map((e => {
            const t = Object.assign({}, e);
            return delete t.isCover, t
         }))))
      }, e => a(e.id), e => a(e.id), e => d(e.id)]
   }
   class ua extends Je {
      constructor(e) {
         super(), We(this, e, da, aa, c, {
            data: 0
         })
      }
   }

   function pa(e) {
      let t, n, r, l, s;
      t = new ua({
         props: {
            data: e[3]
         }
      });
      const i = [{
         uploadURL: e[4]
      }, e[0].config];

      function c(t) {
         e[6](t)
      }
      let a = {};
      for (let e = 0; e < i.length; e += 1) a = o(a, i[e]);
      return void 0 !== e[2] && (a.data = e[2]), r = new cr({
         props: a
      }), he.push((() => Ue(r, "data", c))), {
         c() {
            Ye(t.$$.fragment), n = F(), Ye(r.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), N(e, n, o), Ge(r, e, o), s = !0
         },
         p(e, [t]) {
            const n = 17 & t ? Ke(i, [16 & t && {
               uploadURL: e[4]
            }, 1 & t && Ve(e[0].config)]) : {};
            !l && 4 & t && (l = !0, n.data = e[2], Se((() => l = !1))), r.$set(n)
         },
         i(e) {
            s || (Oe(t.$$.fragment, e), Oe(r.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), Ae(r.$$.fragment, e), s = !1
         },
         d(e) {
            Be(t, e), e && L(n), Be(r, e)
         }
      }
   }

   function fa(e, n, o) {
      let r, l, s = t,
         i = () => (s(), s = u(a, (e => o(7, l = e))), a);
      e.$$.on_destroy.push((() => s()));
      let {
         field: c
      } = n, {
         values: a
      } = n;
      i();
      const d = Dr(l[c.key] || []);
      p(e, d, (e => o(2, r = e)));
      let f = !1;
      return e.$$set = e => {
         "field" in e && o(0, c = e.field), "values" in e && i(o(1, a = e.values))
      }, e.$$.update = () => {
         37 & e.$$.dirty && (f && x(a, l[c.key] = r, l), o(5, f = !0))
      }, [c, a, r, d, function (e) {
         return e.map((e => {
            const t = new FormData;
            t.append("upload", e.file);
            const n = {
               method: "POST",
               body: t
            };
            return fetch(c.uploadURL, n).then((e => e.json())).then((t => (e.id = t.id, t)), (() => ({
               id: e.id,
               status: "error"
            }))).catch()
         }))
      }, f, function (e) {
         r = e, d.set(r)
      }]
   }
   class ma extends Je {
      constructor(e) {
         super(), We(this, e, fa, pa, c, {
            field: 0,
            values: 1
         })
      }
   }

   function $a(e) {
      let t, n;
      return t = new or({
         props: {
            target: e[5],
            $$slots: {
               default: [ba]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            32 & n && (o.target = e[5]), 65539 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function ha(e) {
      let t;
      return {
         c() {
            t = R("Clear")
         },
         m(e, n) {
            N(e, t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function ga(e) {
      let t;
      return {
         c() {
            t = R("Today")
         },
         m(e, n) {
            N(e, t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function va(e) {
      let t;
      return {
         c() {
            t = R("Done")
         },
         m(e, n) {
            N(e, t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function wa(e) {
      let t, n, o, r, l, s, i, c, a, d, u;

      function p(t) {
         e[11](t)
      }

      function f(t) {
         e[12](t)
      }
      let m = {
         buttons: !1
      };
      return void 0 !== e[0] && (m.start = e[0]), void 0 !== e[1] && (m.end = e[1]), t = new uo({
         props: m
      }), he.push((() => Ue(t, "start", p))), he.push((() => Ue(t, "end", f))), s = new Mt({
         props: {
            type: "link wx-calendar-btn",
            click: e[8],
            $$slots: {
               default: [ha]
            },
            $$scope: {
               ctx: e
            }
         }
      }), c = new Mt({
         props: {
            type: "link wx-calendar-btn",
            click: e[7],
            $$slots: {
               default: [ga]
            },
            $$scope: {
               ctx: e
            }
         }
      }), d = new Mt({
         props: {
            type: "primary wx-calendar-btn",
            click: e[6],
            $$slots: {
               default: [va]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment), r = F(), l = O("div"), Ye(s.$$.fragment), i = F(), Ye(c.$$.fragment), a = F(), Ye(d.$$.fragment), K(l, "class", "wx-buttons svelte-12qisfw")
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), N(e, l, n), Ge(s, l, null), T(l, i), Ge(c, l, null), T(l, a), Ge(d, l, null), u = !0
         },
         p(e, r) {
            const l = {};
            !n && 1 & r && (n = !0, l.start = e[0], Se((() => n = !1))), !o && 2 & r && (o = !0, l.end = e[1], Se((() => o = !1))), t.$set(l);
            const i = {};
            65536 & r && (i.$$scope = {
               dirty: r,
               ctx: e
            }), s.$set(i);
            const a = {};
            65536 & r && (a.$$scope = {
               dirty: r,
               ctx: e
            }), c.$set(a);
            const u = {};
            65536 & r && (u.$$scope = {
               dirty: r,
               ctx: e
            }), d.$set(u)
         },
         i(e) {
            u || (Oe(t.$$.fragment, e), Oe(s.$$.fragment, e), Oe(c.$$.fragment, e), Oe(d.$$.fragment, e), u = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), Ae(s.$$.fragment, e), Ae(c.$$.fragment, e), Ae(d.$$.fragment, e), u = !1
         },
         d(e) {
            Be(t, e), e && L(r), e && L(l), Be(s), Be(c), Be(d)
         }
      }
   }

   function ba(e) {
      let t, n;
      return t = new Ot({
         props: {
            cancel: e[6],
            width: "unset",
            $$slots: {
               default: [wa]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            65539 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function ya(e) {
      let t, n, o, r, l, i, c, a, d;
      n = new hn({
         props: {
            value: e[4],
            id: e[2],
            readonly: !0,
            inputStyle: "cursor: pointer; text-overflow: ellipsis; padding-right: 18px;"
         }
      }), l = new Yl({
         props: {
            name: "wxi-calendar"
         }
      });
      let u = e[3] && $a(e);
      return {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), r = O("div"), Ye(l.$$.fragment), i = F(), u && u.c(), K(r, "class", "wx-input-icon svelte-12qisfw"), K(t, "class", "wx-layout svelte-12qisfw")
         },
         m(s, p) {
            N(s, t, p), Ge(n, t, null), T(t, o), T(t, r), Ge(l, r, null), T(t, i), u && u.m(t, null), e[13](t), c = !0, a || (d = [j(window, "scroll", e[6]), j(t, "click", e[9])], a = !0)
         },
         p(e, [o]) {
            const r = {};
            16 & o && (r.value = e[4]), 4 & o && (r.id = e[2]), n.$set(r), e[3] ? u ? (u.p(e, o), 8 & o && Oe(u, 1)) : (u = $a(e), u.c(), Oe(u, 1), u.m(t, null)) : u && (Le(), Ae(u, 1, 1, (() => {
               u = null
            })), He())
         },
         i(e) {
            c || (Oe(n.$$.fragment, e), Oe(l.$$.fragment, e), Oe(u), c = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), Ae(l.$$.fragment, e), Ae(u), c = !1
         },
         d(o) {
            o && L(t), Be(n), Be(l), u && u.d(), e[13](null), a = !1, s(d)
         }
      }
   }

   function xa(e, t, n) {
      let {
         start: o = null
      } = t, {
         end: r = null
      } = t, {
         id: l = Jl()
      } = t, {
         format: s
      } = t;
      const i = fe("wx-i18n").getGroup("calendar");
      let c, a = "function" == typeof s ? s : ts(s, i);
      let d, u = "";
      return e.$$set = e => {
         "start" in e && n(0, o = e.start), "end" in e && n(1, r = e.end), "id" in e && n(2, l = e.id), "format" in e && n(10, s = e.format)
      }, e.$$.update = () => {
         3 & e.$$.dirty && n(4, u = o ? a(o) + (r ? ` - ${a(r)}` : "") : "")
      }, [o, r, l, c, u, d, function (e) {
         e.stopPropagation(), n(3, c = null)
      }, function () {
         const e = new Date;
         n(0, o = e), n(1, r = e)
      }, function () {
         n(0, o = null), n(1, r = null)
      }, function () {
         n(3, c = !0)
      }, s, function (e) {
         o = e, n(0, o)
      }, function (e) {
         r = e, n(1, r)
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            d = e, n(5, d)
         }))
      }]
   }
   class ka extends Je {
      constructor(e) {
         super(), We(this, e, xa, ya, c, {
            start: 0,
            end: 1,
            id: 2,
            format: 10
         })
      }
   }

   function Sa(e) {
      let t, n, o, r;

      function l(t) {
         e[4](t)
      }

      function s(t) {
         e[5](t)
      }
      let i = {
         id: e[3],
         format: e[2]
      };
      return void 0 !== e[0] && (i.start = e[0]), void 0 !== e[1] && (i.end = e[1]), t = new ka({
         props: i
      }), he.push((() => Ue(t, "start", l))), he.push((() => Ue(t, "end", s))), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, n) {
            Ge(t, e, n), r = !0
         },
         p(e, [r]) {
            const l = {};
            8 & r && (l.id = e[3]), 4 & r && (l.format = e[2]), !n && 1 & r && (n = !0, l.start = e[0], Se((() => n = !1))), !o && 2 & r && (o = !0, l.end = e[1], Se((() => o = !1))), t.$set(l)
         },
         i(e) {
            r || (Oe(t.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), r = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ia(e, t, n) {
      let {
         start: o
      } = t, {
         end: r
      } = t, {
         format: l
      } = t, {
         id: s = Jl()
      } = t;
      return e.$$set = e => {
         "start" in e && n(0, o = e.start), "end" in e && n(1, r = e.end), "format" in e && n(2, l = e.format), "id" in e && n(3, s = e.id)
      }, [o, r, l, s, function (e) {
         o = e, n(0, o)
      }, function (e) {
         r = e, n(1, r)
      }]
   }
   class _a extends Je {
      constructor(e) {
         super(), We(this, e, Ia, Sa, c, {
            start: 0,
            end: 1,
            format: 2,
            id: 3
         })
      }
   }

   function Ma() {
      let e, t, n, o, r = null,
         l = !1;
      const s = e => {
            r = e, l = null !== r, n(r)
         },
         i = (n, o) => {
            const l = null === n ? null : Math.max(0, Math.min(r + n, t.length - 1));
            if (l !== r && (s(l), r && e)) {
               const t = e.querySelectorAll(".list > .item")[r];
               t && (t.scrollIntoView({
                  block: "nearest"
               }), o && o.preventDefault())
            }
         };
      return {
         move: e => {
            const n = function (e, t = "data-id") {
                  const n = function (e, t = "data-id") {
                     let n = e;
                     for (!n.tagName && e.target && (n = e.target); n;) {
                        if (n.getAttribute && n.getAttribute(t)) return n;
                        n = n.parentNode
                     }
                     return null
                  }(e, t);
                  return n ? Gl(n.getAttribute(t)) : null
               }(e),
               o = t.findIndex((e => e.id === n));
            o !== r && s(o)
         },
         keydown: e => {
            switch (e.code) {
               case "Enter":
                  l ? o() : s(0);
                  break;
               case "Space":
                  !l && s(0);
                  break;
               case "Escape":
               case "Tab":
                  n(r = null);
                  break;
               case "ArrowDown":
                  l ? i(1, e) : s(0);
                  break;
               case "ArrowUp":
                  l ? i(-1, e) : s(0)
            }
         },
         init: (r, l, s, i) => {
            e = r, t = l, n = s, o = i
         },
         navigate: i
      }
   }

   function Ca(e, t, n) {
      const o = e.slice();
      return o[13] = t[n], o[15] = n, o
   }
   const Ta = e => ({
         option: 1 & e
      }),
      Da = e => ({
         option: e[13]
      });

   function Ea(e) {
      let t, n;
      return t = new Ot({
         props: {
            cancel: e[8],
            $$slots: {
               default: [Oa]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            519 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Na(e) {
      let n;
      return {
         c() {
            n = O("div"), n.textContent = "No data", K(n, "class", "no-data svelte-1qa7v2v")
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function La(e) {
      let t, n, o = [],
         r = new Map,
         l = e[0];
      const s = e => e[13].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = Ca(e, l, t),
            i = s(n);
         r.set(i, o[t] = Ha(i, n))
      }
      return {
         c() {
            for (let e = 0; e < o.length; e += 1) o[e].c();
            t = z()
         },
         m(e, r) {
            for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(e, r);
            N(e, t, r), n = !0
         },
         p(e, n) {
            517 & n && (l = e[0], Le(), o = Pe(o, n, s, 1, e, l, r, t.parentNode, qe, Ha, t, Ca), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            for (let t = 0; t < o.length; t += 1) o[t].d(e);
            e && L(t)
         }
      }
   }

   function Ha(e, t) {
      let n, o, r, l;
      const s = t[6].default,
         i = f(s, t, t[9], Da),
         c = i || function (e) {
            let t, n = e[13].name + "";
            return {
               c() {
                  t = R(n)
               },
               m(e, n) {
                  N(e, t, n)
               },
               p(e, o) {
                  1 & o && n !== (n = e[13].name + "") && U(t, n)
               },
               d(e) {
                  e && L(t)
               }
            }
         }(t);
      return {
         key: e,
         first: null,
         c() {
            n = O("div"), c && c.c(), o = F(), K(n, "class", "item svelte-1qa7v2v"), K(n, "data-id", r = t[13].id), X(n, "disabled", t[13].disabled), X(n, "focus", t[15] === t[2]), this.first = n
         },
         m(e, t) {
            N(e, n, t), c && c.m(n, null), T(n, o), l = !0
         },
         p(e, o) {
            t = e, i ? i.p && (!l || 513 & o) && h(i, s, t, t[9], l ? $(s, t[9], o, Ta) : g(t[9]), Da) : c && c.p && (!l || 1 & o) && c.p(t, l ? o : -1), (!l || 1 & o && r !== (r = t[13].id)) && K(n, "data-id", r), (!l || 1 & o) && X(n, "disabled", t[13].disabled), (!l || 5 & o) && X(n, "focus", t[15] === t[2])
         },
         i(e) {
            l || (Oe(c, e), l = !0)
         },
         o(e) {
            Ae(c, e), l = !1
         },
         d(e) {
            e && L(n), c && c.d(e)
         }
      }
   }

   function Oa(e) {
      let t, n, o, r, l, i;
      const c = [La, Na],
         a = [];

      function d(e, t) {
         return e[0].length ? 0 : 1
      }
      return n = d(e), o = a[n] = c[n](e), {
         c() {
            t = O("div"), o.c(), K(t, "class", "list svelte-1qa7v2v")
         },
         m(o, s) {
            N(o, t, s), a[n].m(t, null), e[7](t), r = !0, l || (i = [j(t, "click", P(e[5])), j(t, "mousemove", e[3])], l = !0)
         },
         p(e, r) {
            let l = n;
            n = d(e), n === l ? a[n].p(e, r) : (Le(), Ae(a[l], 1, 1, (() => {
               a[l] = null
            })), He(), o = a[n], o ? o.p(e, r) : (o = a[n] = c[n](e), o.c()), Oe(o, 1), o.m(t, null))
         },
         i(e) {
            r || (Oe(o), r = !0)
         },
         o(e) {
            Ae(o), r = !1
         },
         d(o) {
            o && L(t), a[n].d(), e[7](null), l = !1, s(i)
         }
      }
   }

   function Aa(e) {
      let t, n, o = null !== e[2] && Ea(e);
      return {
         c() {
            o && o.c(), t = z()
         },
         m(e, r) {
            o && o.m(e, r), N(e, t, r), n = !0
         },
         p(e, [n]) {
            null !== e[2] ? o ? (o.p(e, n), 4 & n && Oe(o, 1)) : (o = Ea(e), o.c(), Oe(o, 1), o.m(t.parentNode, t)) : o && (Le(), Ae(o, 1, 1, (() => {
               o = null
            })), He())
         },
         i(e) {
            n || (Oe(o), n = !0)
         },
         o(e) {
            Ae(o), n = !1
         },
         d(e) {
            o && o.d(e), e && L(t)
         }
      }
   }

   function Ra(e, t, n) {
      let o, {
            $$slots: r = {},
            $$scope: l
         } = t,
         {
            items: s = []
         } = t,
         i = null;
      const c = ue(),
         {
            move: a,
            keydown: d,
            init: u,
            navigate: p
         } = Ma(),
         f = () => c("select", {
            id: s[i]?.id
         });
      ce((() => {
         c("ready", {
            navigate: p,
            keydown: d,
            move: a
         })
      }));
      return e.$$set = e => {
         "items" in e && n(0, s = e.items), "$$scope" in e && n(9, l = e.$$scope)
      }, e.$$.update = () => {
         3 & e.$$.dirty && u(o, s, (e => n(2, i = e)), f)
      }, [s, o, i, a, p, f, r, function (e) {
         he[e ? "unshift" : "push"]((() => {
            o = e, n(1, o)
         }))
      }, () => p(null), l]
   }
   class Fa extends Je {
      constructor(e) {
         super(), We(this, e, Ra, Aa, c, {
            items: 0
         })
      }
   }
   const za = e => ({
         option: 33554432 & e
      }),
      ja = e => ({
         option: e[25]
      });

   function qa(e, t, n) {
      const o = e.slice();
      return o[26] = t[n], o
   }
   const Pa = e => ({
         option: 64 & e
      }),
      Ka = e => ({
         option: e[26]
      });

   function Va(e) {
      let t, n, o;

      function r() {
         return e[19](e[26])
      }
      return {
         c() {
            t = O("i"), K(t, "class", "wxi-close svelte-ckuqsw")
         },
         m(e, l) {
            N(e, t, l), n || (o = j(t, "click", P(r)), n = !0)
         },
         p(t, n) {
            e = t
         },
         d(e) {
            e && L(t), n = !1, o()
         }
      }
   }

   function Ua(e, t) {
      let n, o, r, l;
      const s = t[18].default,
         i = f(s, t, t[23], Ka),
         c = i || function (e) {
            let t, n = e[26][e[1]] + "";
            return {
               c() {
                  t = R(n)
               },
               m(e, n) {
                  N(e, t, n)
               },
               p(e, o) {
                  66 & o && n !== (n = e[26][e[1]] + "") && U(t, n)
               },
               d(e) {
                  e && L(t)
               }
            }
         }(t);
      let a = !t[3] && Va(t);
      return {
         key: e,
         first: null,
         c() {
            n = O("div"), c && c.c(), o = F(), a && a.c(), r = F(), K(n, "class", "tag svelte-ckuqsw"), this.first = n
         },
         m(e, t) {
            N(e, n, t), c && c.m(n, null), T(n, o), a && a.m(n, null), T(n, r), l = !0
         },
         p(e, o) {
            t = e, i ? i.p && (!l || 8388672 & o) && h(i, s, t, t[23], l ? $(s, t[23], o, Pa) : g(t[23]), Ka) : c && c.p && (!l || 66 & o) && c.p(t, l ? o : -1), t[3] ? a && (a.d(1), a = null) : a ? a.p(t, o) : (a = Va(t), a.c(), a.m(n, r))
         },
         i(e) {
            l || (Oe(c, e), l = !0)
         },
         o(e) {
            Ae(c, e), l = !1
         },
         d(e) {
            e && L(n), c && c.d(e), a && a.d()
         }
      }
   }

   function Ya(e) {
      let t, n;
      return t = new Fa({
         props: {
            items: e[8],
            $$slots: {
               default: [Ba, ({
                  option: e
               }) => ({
                  25: e
               }), ({
                  option: e
               }) => e ? 33554432 : 0]
            },
            $$scope: {
               ctx: e
            }
         }
      }), t.$on("ready", e[11]), t.$on("select", e[13]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            256 & n && (o.items = e[8]), 41943073 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ga(e) {
      let t, n;
      return t = new Et({
         props: {
            style: "margin-right: 8px; pointer-events: none;",
            value: e[25].id,
            checked: e[0].includes(e[25].id)
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            33554432 & n && (o.value = e[25].id), 33554433 & n && (o.checked = e[0].includes(e[25].id)), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ba(e) {
      let t, n, o = e[5] && Ga(e);
      const r = e[18].default,
         l = f(r, e, e[23], ja),
         s = l || function (e) {
            let t, n = e[25].name + "";
            return {
               c() {
                  t = R(n)
               },
               m(e, n) {
                  N(e, t, n)
               },
               p(e, o) {
                  33554432 & o && n !== (n = e[25].name + "") && U(t, n)
               },
               d(e) {
                  e && L(t)
               }
            }
         }(e);
      return {
         c() {
            o && o.c(), t = F(), s && s.c()
         },
         m(e, r) {
            o && o.m(e, r), N(e, t, r), s && s.m(e, r), n = !0
         },
         p(e, i) {
            e[5] ? o ? (o.p(e, i), 32 & i && Oe(o, 1)) : (o = Ga(e), o.c(), Oe(o, 1), o.m(t.parentNode, t)) : o && (Le(), Ae(o, 1, 1, (() => {
               o = null
            })), He()), l ? l.p && (!n || 41943040 & i) && h(l, r, e, e[23], n ? $(r, e[23], i, za) : g(e[23]), ja) : s && s.p && (!n || 33554432 & i) && s.p(e, n ? i : -1)
         },
         i(e) {
            n || (Oe(o), Oe(s, e), n = !0)
         },
         o(e) {
            Ae(o), Ae(s, e), n = !1
         },
         d(e) {
            o && o.d(e), e && L(t), s && s.d(e)
         }
      }
   }

   function Wa(e) {
      let t, n, o, r, l, i, c, a, d, u, p, f, m, $ = [],
         h = new Map,
         g = e[6];
      const v = e => e[26].id;
      for (let t = 0; t < g.length; t += 1) {
         let n = qa(e, g, t),
            o = v(n);
         h.set(o, $[t] = Ua(o, n))
      }
      let w = !e[3] && Ya(e);
      return {
         c() {
            t = O("div"), n = O("div"), o = O("div");
            for (let e = 0; e < $.length; e += 1) $[e].c();
            r = F(), l = O("div"), i = O("input"), c = F(), a = O("i"), d = F(), w && w.c(), K(o, "class", "tags svelte-ckuqsw"), K(i, "type", "text"), K(i, "class", "input svelte-ckuqsw"), K(i, "placeholder", e[2]), i.disabled = e[3], K(a, "class", "icon wxi-angle-down svelte-ckuqsw"), K(l, "class", "select svelte-ckuqsw"), K(n, "class", "wrapper svelte-ckuqsw"), K(t, "class", u = "combo  " + (e[4] ? "error" : "") + " " + (e[3] ? "disabled" : "") + " " + (e[6].length ? "not-empty" : "") + " svelte-ckuqsw")
         },
         m(s, u) {
            N(s, t, u), T(t, n), T(n, o);
            for (let e = 0; e < $.length; e += 1) $[e] && $[e].m(o, null);
            T(n, r), T(n, l), T(l, i), Y(i, e[7]), T(l, c), T(l, a), T(t, d), w && w.m(t, null), p = !0, f || (m = [j(i, "input", e[20]), j(i, "input", e[12]), j(t, "click", e[21]), j(t, "keydown", e[22])], f = !0)
         },
         p(e, [n]) {
            8405066 & n && (g = e[6], Le(), $ = Pe($, n, v, 1, e, g, h, o, qe, Ua, null, qa), He()), (!p || 4 & n) && K(i, "placeholder", e[2]), (!p || 8 & n) && (i.disabled = e[3]), 128 & n && i.value !== e[7] && Y(i, e[7]), e[3] ? w && (Le(), Ae(w, 1, 1, (() => {
               w = null
            })), He()) : w ? (w.p(e, n), 8 & n && Oe(w, 1)) : (w = Ya(e), w.c(), Oe(w, 1), w.m(t, null)), (!p || 88 & n && u !== (u = "combo  " + (e[4] ? "error" : "") + " " + (e[3] ? "disabled" : "") + " " + (e[6].length ? "not-empty" : "") + " svelte-ckuqsw")) && K(t, "class", u)
         },
         i(e) {
            if (!p) {
               for (let e = 0; e < g.length; e += 1) Oe($[e]);
               Oe(w), p = !0
            }
         },
         o(e) {
            for (let e = 0; e < $.length; e += 1) Ae($[e]);
            Ae(w), p = !1
         },
         d(e) {
            e && L(t);
            for (let e = 0; e < $.length; e += 1) $[e].d();
            w && w.d(), f = !1, s(m)
         }
      }
   }

   function Ja(e, t, n) {
      let o, {
            $$slots: r = {},
            $$scope: l
         } = t,
         {
            values: s = []
         } = t,
         {
            options: i = []
         } = t,
         {
            textField: c = "label"
         } = t,
         {
            placeholder: a = ""
         } = t,
         {
            disabled: d = !1
         } = t,
         {
            error: u = !1
         } = t,
         {
            checkboxes: p = !1
         } = t,
         {
            limit: f = null
         } = t;
      const m = ue();
      let $, h, g, v = "",
         w = [];

      function b(e) {
         n(0, s = s.filter((t => t !== e)))
      }
      return e.$$set = e => {
         "values" in e && n(0, s = e.values), "options" in e && n(15, i = e.options), "textField" in e && n(1, c = e.textField), "placeholder" in e && n(2, a = e.placeholder), "disabled" in e && n(3, d = e.disabled), "error" in e && n(4, u = e.error), "checkboxes" in e && n(5, p = e.checkboxes), "limit" in e && n(16, f = e.limit), "$$scope" in e && n(23, l = e.$$scope)
      }, e.$$.update = () => {
         32769 & e.$$.dirty && n(6, w = i.filter((e => s.includes(e.id)))), 64 & e.$$.dirty && n(17, o = w.map((e => e.id))), 229440 & e.$$.dirty && n(8, $ = i.map((e => (e.disabled = !1, f && w.length && w.length >= f && !o.includes(e.id) && (e.disabled = !0), e))))
      }, [s, c, a, d, u, p, w, v, $, h, g, function (e) {
         n(9, h = e.detail.navigate), n(10, g = e.detail.keydown)
      }, function () {
         n(8, $ = v ? i.filter((e => e[c].toLowerCase().includes(v.toLowerCase()))) : i), $.length ? h(0) : h(null)
      }, function (e) {
         const {
            id: t
         } = e.detail;
         t && (n(0, s = s.includes(t) ? s.filter((e => e !== t)) : [...s, t]), n(6, w = i.filter((e => s.includes(e.id)))), m("select", {
            selected: w
         }))
      }, b, i, f, o, r, e => b(e.id), function () {
         v = this.value, n(7, v)
      }, () => h(0), e => g(e), l]
   }
   class Xa extends Je {
      constructor(e) {
         super(), We(this, e, Ja, Wa, c, {
            values: 0,
            options: 15,
            textField: 1,
            placeholder: 2,
            disabled: 3,
            error: 4,
            checkboxes: 5,
            limit: 16
         })
      }
   }

   function Za(e, t, n) {
      const o = fe("wx-i18n"),
         r = o.getGroup("kanban");
      return [o, r]
   }
   class Qa extends Je {
      constructor(e) {
         super(), We(this, e, Za, null, c, {
            locale: 0,
            _: 1
         })
      }
      get locale() {
         return this.$$.ctx[0]
      }
      get _() {
         return this.$$.ctx[1]
      }
   }

   function ed(e) {
      let n, o, r;
      return {
         c() {
            n = O("textarea"), K(n, "type", "text"), K(n, "class", "wx-textarea svelte-bwmrcx"), n.value = e[0], K(n, "placeholder", e[1]), K(n, "rows", 5), X(n, "wx-no-resize", !e[2])
         },
         m(t, l) {
            N(t, n, l), o || (r = [j(n, "input", e[3]), j(n, "keydown", td), j(n, "blur", e[4]), k(e[5].call(null, n))], o = !0)
         },
         p(e, [t]) {
            1 & t && (n.value = e[0]), 2 & t && K(n, "placeholder", e[1]), 4 & t && X(n, "wx-no-resize", !e[2])
         },
         i: t,
         o: t,
         d(e) {
            e && L(n), o = !1, s(r)
         }
      }
   }

   function td(e) {
      "Enter" === e.key && (e.ctrlKey || e.metaKey) && e.target.blur()
   }

   function nd(e, t, n) {
      let {
         value: o = ""
      } = t, {
         focus: r = !1
      } = t, {
         placeholder: l = ""
      } = t, {
         resize: s = !0
      } = t;
      const i = ue();
      return e.$$set = e => {
         "value" in e && n(0, o = e.value), "focus" in e && n(6, r = e.focus), "placeholder" in e && n(1, l = e.placeholder), "resize" in e && n(2, s = e.resize)
      }, [o, l, s, function (e) {
         n(0, o = e.target.value)
      }, function () {
         i("blur", {
            value: o
         })
      }, function (e) {
         r && e.focus()
      }, r]
   }
   class od extends Je {
      constructor(e) {
         super(), We(this, e, nd, ed, c, {
            value: 0,
            focus: 6,
            placeholder: 1,
            resize: 2
         })
      }
   }

   function rd(e, t, n) {
      const o = e.slice();
      return o[31] = t[n], o
   }

   function ld(e) {
      let n;
      return {
         c() {
            n = O("div"), n.textContent = `${e[6]("No comments yet")}`, K(n, "class", "wx-kanban-no-comments svelte-t7foo")
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function sd(e) {
      let t, n, o, r, l = [],
         s = new Map,
         c = e[4];
      const a = e => e[31].id;
      for (let t = 0; t < c.length; t += 1) {
         let n = rd(e, c, t),
            o = a(n);
         s.set(o, l[t] = fd(o, n))
      }
      return {
         c() {
            t = O("div");
            for (let e = 0; e < l.length; e += 1) l[e].c();
            K(t, "class", "wx-comment-list svelte-t7foo")
         },
         m(s, c) {
            N(s, t, c);
            for (let e = 0; e < l.length; e += 1) l[e] && l[e].m(t, null);
            n = !0, o || (r = j(t, "click", (function () {
               i(e[3]) && e[3].apply(this, arguments)
            })), o = !0)
         },
         p(n, o) {
            e = n, 28278 & o[0] && (c = e[4], Le(), l = Pe(l, o, a, 1, e, c, s, t, qe, fd, null, rd), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < c.length; e += 1) Oe(l[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < l.length; e += 1) Ae(l[e]);
            n = !1
         },
         d(e) {
            e && L(t);
            for (let e = 0; e < l.length; e += 1) l[e].d();
            o = !1, r()
         }
      }
   }

   function id(e) {
      let t, n, o, r;
      return n = new Yl({
         props: {
            name: "wxi-dots-v"
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), K(t, "class", "wx-menu svelte-t7foo"), K(t, "data-menu-id", o = e[31].id)
         },
         m(e, o) {
            N(e, t, o), Ge(n, t, null), r = !0
         },
         p(e, n) {
            (!r || 16 & n[0] && o !== (o = e[31].id)) && K(t, "data-menu-id", o)
         },
         i(e) {
            r || (Oe(n.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function cd(e) {
      let n, o, r = e[31].text + "";
      return {
         c() {
            n = O("pre"), o = R(r), K(n, "class", "wx-text svelte-t7foo")
         },
         m(e, t) {
            N(e, n, t), T(n, o)
         },
         p(e, t) {
            16 & t[0] && r !== (r = e[31].text + "") && U(o, r)
         },
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function ad(e) {
      let n, o, r = e[31].html + "";
      return {
         c() {
            n = new Q(!1), o = z(), n.a = o
         },
         m(e, t) {
            n.m(r, e, t), N(e, o, t)
         },
         p(e, t) {
            16 & t[0] && r !== (r = e[31].html + "") && n.p(r)
         },
         i: t,
         o: t,
         d(e) {
            e && L(o), e && n.d()
         }
      }
   }

   function dd(e) {
      let t, n, o, r, l, s, i, c, a, d;

      function u(t) {
         e[23](t)
      }
      let p = {
         resize: !1,
         focus: !0
      };
      return void 0 !== e[2] && (p.value = e[2]), t = new od({
         props: p
      }), he.push((() => Ue(t, "value", u))), s = new Mt({
         props: {
            type: "secondary block",
            click: e[14],
            $$slots: {
               default: [ud]
            },
            $$scope: {
               ctx: e
            }
         }
      }), a = new Mt({
         props: {
            type: "primary block",
            click: e[13],
            $$slots: {
               default: [pd]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment), o = F(), r = O("div"), l = O("div"), Ye(s.$$.fragment), i = F(), c = O("div"), Ye(a.$$.fragment), K(l, "class", "wx-comment-textarea-btn svelte-t7foo"), K(c, "class", "wx-comment-textarea-btn svelte-t7foo"), K(r, "class", "wx-edit-btns svelte-t7foo")
         },
         m(e, n) {
            Ge(t, e, n), N(e, o, n), N(e, r, n), T(r, l), Ge(s, l, null), T(r, i), T(r, c), Ge(a, c, null), d = !0
         },
         p(e, o) {
            const r = {};
            !n && 4 & o[0] && (n = !0, r.value = e[2], Se((() => n = !1))), t.$set(r);
            const l = {};
            8 & o[1] && (l.$$scope = {
               dirty: o,
               ctx: e
            }), s.$set(l);
            const i = {};
            8 & o[1] && (i.$$scope = {
               dirty: o,
               ctx: e
            }), a.$set(i)
         },
         i(e) {
            d || (Oe(t.$$.fragment, e), Oe(s.$$.fragment, e), Oe(a.$$.fragment, e), d = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), Ae(s.$$.fragment, e), Ae(a.$$.fragment, e), d = !1
         },
         d(e) {
            Be(t, e), e && L(o), e && L(r), Be(s), Be(a)
         }
      }
   }

   function ud(e) {
      let n, o = e[6]("Cancel") + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function pd(e) {
      let n, o = e[6]("Save") + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function fd(e, t) {
      let n, o, r, l, s, i, c, a, d, u, p, f, m, $, h, g, v, w, b, y = t[10][t[31].userId].label + "",
         x = jr(t[31].userId, t[5]),
         k = t[11](t[31].date) + "";
      r = new oi({
         props: {
            size: "small",
            border: !1,
            data: t[10][t[31].userId]
         }
      });
      let S = x && id(t);
      const I = [dd, ad, cd],
         _ = [];

      function M(e, t) {
         return 18 & t[0] && ($ = null), null == $ && ($ = !!jr(e[1], e[31].id)), $ ? 0 : e[31].html && e[9].html ? 1 : 2
      }
      return h = M(t, [-1, -1]), g = _[h] = I[h](t), {
         key: e,
         first: null,
         c() {
            n = O("div"), o = O("div"), Ye(r.$$.fragment), l = F(), s = O("div"), i = O("div"), c = O("div"), a = R(y), d = F(), S && S.c(), u = F(), p = O("div"), f = R(k), m = F(), g.c(), v = F(), K(o, "class", "wx-comment-icon svelte-t7foo"), K(c, "class", "wx-name svelte-t7foo"), K(i, "class", "wx-comment-header svelte-t7foo"), K(p, "class", "wx-date svelte-t7foo"), K(s, "class", "wx-content svelte-t7foo"), K(n, "class", "wx-comment svelte-t7foo"), K(n, "data-comment-id", w = t[31].id), this.first = n
         },
         m(e, t) {
            N(e, n, t), T(n, o), Ge(r, o, null), T(n, l), T(n, s), T(s, i), T(i, c), T(c, a), T(i, d), S && S.m(i, null), T(s, u), T(s, p), T(p, f), T(s, m), _[h].m(s, null), T(n, v), b = !0
         },
         p(e, o) {
            t = e;
            const l = {};
            16 & o[0] && (l.data = t[10][t[31].userId]), r.$set(l), (!b || 16 & o[0]) && y !== (y = t[10][t[31].userId].label + "") && U(a, y), 48 & o[0] && (x = jr(t[31].userId, t[5])), x ? S ? (S.p(t, o), 48 & o[0] && Oe(S, 1)) : (S = id(t), S.c(), Oe(S, 1), S.m(i, null)) : S && (Le(), Ae(S, 1, 1, (() => {
               S = null
            })), He()), (!b || 16 & o[0]) && k !== (k = t[11](t[31].date) + "") && U(f, k);
            let c = h;
            h = M(t, o), h === c ? _[h].p(t, o) : (Le(), Ae(_[c], 1, 1, (() => {
               _[c] = null
            })), He(), g = _[h], g ? g.p(t, o) : (g = _[h] = I[h](t), g.c()), Oe(g, 1), g.m(s, null)), (!b || 16 & o[0] && w !== (w = t[31].id)) && K(n, "data-comment-id", w)
         },
         i(e) {
            b || (Oe(r.$$.fragment, e), Oe(S), Oe(g), b = !0)
         },
         o(e) {
            Ae(r.$$.fragment, e), Ae(S), Ae(g), b = !1
         },
         d(e) {
            e && L(n), Be(r), S && S.d(), _[h].d()
         }
      }
   }

   function md(e) {
      let t, n, o, r, l, s, i, c, a, d;

      function u(t) {
         e[25](t)
      }
      o = new oi({
         props: {
            size: "small",
            border: !1,
            data: e[10][e[5]]
         }
      });
      let p = {
         resize: !1,
         placeholder: e[6]("Add a comment...")
      };
      return void 0 !== e[0] && (p.value = e[0]), l = new od({
         props: p
      }), he.push((() => Ue(l, "value", u))), a = new Mt({
         props: {
            type: "primary block",
            click: e[12],
            $$slots: {
               default: [$d]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div"), n = O("div"), Ye(o.$$.fragment), r = F(), Ye(l.$$.fragment), i = F(), c = O("div"), Ye(a.$$.fragment), K(n, "class", "wx-comment-icon svelte-t7foo"), K(t, "class", "wx-new-comment svelte-t7foo"), K(c, "class", "wx-comment-textarea-btn svelte-t7foo")
         },
         m(e, s) {
            N(e, t, s), T(t, n), Ge(o, n, null), T(t, r), Ge(l, t, null), N(e, i, s), N(e, c, s), Ge(a, c, null), d = !0
         },
         p(e, t) {
            const n = {};
            32 & t[0] && (n.data = e[10][e[5]]), o.$set(n);
            const r = {};
            !s && 1 & t[0] && (s = !0, r.value = e[0], Se((() => s = !1))), l.$set(r);
            const i = {};
            8 & t[1] && (i.$$scope = {
               dirty: t,
               ctx: e
            }), a.$set(i)
         },
         i(e) {
            d || (Oe(o.$$.fragment, e), Oe(l.$$.fragment, e), Oe(a.$$.fragment, e), d = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), Ae(l.$$.fragment, e), Ae(a.$$.fragment, e), d = !1
         },
         d(e) {
            e && L(t), Be(o), Be(l), e && L(i), e && L(c), Be(a)
         }
      }
   }

   function $d(e) {
      let n, o = e[6]("Send") + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function hd(e) {
      let t, n, o, r, l, s, i, c;
      const a = [sd, ld],
         d = [];

      function u(e, t) {
         return e[4].length ? 0 : e[5] ? -1 : 1
      }

      function p(t) {
         e[24](t)
      }~(n = u(e)) && (o = d[n] = a[n](e));
      let f = {
         at: "left-bottom",
         options: e[16],
         resolver: gd,
         dataKey: "menuId"
      };
      void 0 !== e[3] && (f.handler = e[3]), l = new Es({
         props: f
      }), he.push((() => Ue(l, "handler", p))), l.$on("click", e[15]);
      let m = e[5] && !e[1] && md(e);
      return {
         c() {
            t = O("div"), o && o.c(), r = F(), Ye(l.$$.fragment), i = F(), m && m.c(), K(t, "class", "wx-comments svelte-t7foo")
         },
         m(e, o) {
            N(e, t, o), ~n && d[n].m(t, null), T(t, r), Ge(l, t, null), T(t, i), m && m.m(t, null), c = !0
         },
         p(e, i) {
            let c = n;
            n = u(e), n === c ? ~n && d[n].p(e, i) : (o && (Le(), Ae(d[c], 1, 1, (() => {
               d[c] = null
            })), He()), ~n ? (o = d[n], o ? o.p(e, i) : (o = d[n] = a[n](e), o.c()), Oe(o, 1), o.m(t, r)) : o = null);
            const p = {};
            !s && 8 & i[0] && (s = !0, p.handler = e[3], Se((() => s = !1))), l.$set(p), e[5] && !e[1] ? m ? (m.p(e, i), 34 & i[0] && Oe(m, 1)) : (m = md(e), m.c(), Oe(m, 1), m.m(t, null)) : m && (Le(), Ae(m, 1, 1, (() => {
               m = null
            })), He())
         },
         i(e) {
            c || (Oe(o), Oe(l.$$.fragment, e), Oe(m), c = !0)
         },
         o(e) {
            Ae(o), Ae(l.$$.fragment, e), Ae(m), c = !1
         },
         d(e) {
            e && L(t), ~n && d[n].d(), Be(l), m && m.d()
         }
      }
   }
   const gd = e => e;

   function vd(e, t, n) {
      let o, r, l;
      var s;
      let {
         api: i
      } = t, {
         card: c
      } = t, {
         users: a = []
      } = t, {
         shape: d
      } = t;
      const u = fe("wx-i18n"),
         f = u.getGroup("kanban"),
         {
            showModal: m
         } = fe("wx-helpers"),
         {
            cards: $,
            currentUser: h
         } = i.getReactiveState();
      p(e, $, (e => n(22, r = e))), p(e, h, (e => n(5, l = e)));
      const g = d.config || {},
         v = a.reduce(((e, t) => (e[t.id] = t, e)), {}),
         w = ts(g.format || "%M %d %Y %h:%i", u.getRaw().calendar);
      let b = "";
      let y = null,
         x = null;

      function k() {
         n(1, y = null), n(2, x = null)
      }
      let S = null;
      const I = [{
         id: "edit-comment",
         text: f("Edit"),
         icon: "wxi-edit-outline"
      }, {
         id: "delete-comment",
         text: f("Delete"),
         icon: "wxi-delete-outline"
      }];
      return e.$$set = e => {
         "api" in e && n(17, i = e.api), "card" in e && n(18, c = e.card), "users" in e && n(19, a = e.users), "shape" in e && n(20, d = e.shape)
      }, e.$$.update = () => {
         6553600 & e.$$.dirty[0] && n(4, o = (null === n(21, s = r.find((e => e.id === (null == c ? void 0 : c.id)))) || void 0 === s ? void 0 : s.comments) || [])
      }, [b, y, x, S, o, l, f, $, h, g, v, w, function () {
         b && (i.exec("add-comment", {
            id: tt(),
            cardId: c.id,
            comment: {
               text: b,
               date: new Date
            }
         }), n(0, b = ""))
      }, function () {
         x && i.exec("update-comment", {
            cardId: c.id,
            id: y,
            comment: {
               text: x
            }
         }), k()
      }, k, function (e) {
         const {
            item: t,
            action: r
         } = e.detail;
         if (r) switch (r.id) {
            case "edit-comment":
               l = o.find((e => e.id == t)), n(1, y = l.id), n(2, x = l.text);
               break;
            case "delete-comment":
               ! function (e) {
                  m({
                     message: f("Would you like to delete this comment?")
                  }).then((() => {
                     i.exec("delete-comment", {
                        cardId: c.id,
                        id: e
                     })
                  })).catch((() => {}))
               }(t)
         }
         var l
      }, I, i, c, a, d, s, r, function (e) {
         x = e, n(2, x)
      }, function (e) {
         S = e, n(3, S)
      }, function (e) {
         b = e, n(0, b)
      }]
   }
   class wd extends Je {
      constructor(e) {
         super(), We(this, e, vd, hd, c, {
            api: 17,
            card: 18,
            users: 19,
            shape: 20
         }, null, [-1, -1])
      }
   }

   function bd(e, t, n) {
      const o = e.slice();
      return o[30] = t[n], o
   }

   function yd(e, t) {
      let n, o, r, l, s, i, c, a, d, u, p, f, m, $ = t[30].label + "",
         h = t[12](t[30]) + "";

      function g() {
         return t[21](t[30])
      }

      function v() {
         return t[22](t[30])
      }
      return u = new Yl({
         props: {
            name: "wxi-delete-outline",
            click: v
         }
      }), {
         key: e,
         first: null,
         c() {
            n = O("div"), o = O("div"), r = O("div"), l = R($), s = F(), i = O("div"), c = R(h), a = F(), d = O("div"), Ye(u.$$.fragment), K(r, "class", "wx-relates svelte-hbw2pu"), K(i, "class", "wx-task svelte-hbw2pu"), K(o, "class", "wx-link-content"), K(d, "class", "wx-delete-icon svelte-hbw2pu"), K(n, "class", "wx-link svelte-hbw2pu"), this.first = n
         },
         m(e, t) {
            N(e, n, t), T(n, o), T(o, r), T(r, l), T(o, s), T(o, i), T(i, c), T(n, a), T(n, d), Ge(u, d, null), p = !0, f || (m = j(i, "click", g), f = !0)
         },
         p(e, n) {
            t = e, (!p || 1 & n[0]) && $ !== ($ = t[30].label + "") && U(l, $), (!p || 1 & n[0]) && h !== (h = t[12](t[30]) + "") && U(c, h);
            const o = {};
            1 & n[0] && (o.click = v), u.$set(o)
         },
         i(e) {
            p || (Oe(u.$$.fragment, e), p = !0)
         },
         o(e) {
            Ae(u.$$.fragment, e), p = !1
         },
         d(e) {
            e && L(n), Be(u), f = !1, m()
         }
      }
   }

   function xd(e) {
      let t, n, o, r, l, s, i, c, a, d, u, p, f, m, $, h, g;

      function v(t) {
         e[23](t)
      }
      let w = {
         options: e[9],
         placeholder: e[6]("Select a relation"),
         $$slots: {
            default: [kd, ({
               option: e
            }) => ({
               29: e
            }), ({
               option: e
            }) => [e ? 536870912 : 0]]
         },
         $$scope: {
            ctx: e
         }
      };

      function b(t) {
         e[25](t)
      }
      void 0 !== e[1] && (w.value = e[1]), r = new dn({
         props: w
      }), he.push((() => Ue(r, "value", v))), r.$on("select", e[24]);
      let y = {
         options: e[3],
         placeholder: e[6]("Select a task"),
         disabled: e[4],
         $$slots: {
            default: [Sd, ({
               option: e
            }) => ({
               29: e
            }), ({
               option: e
            }) => [e ? 536870912 : 0]]
         },
         $$scope: {
            ctx: e
         }
      };
      return void 0 !== e[2] && (y.value = e[2]), c = new dn({
         props: y
      }), he.push((() => Ue(c, "value", b))), f = new Mt({
         props: {
            type: "secondary block",
            click: e[11],
            $$slots: {
               default: [Id]
            },
            $$scope: {
               ctx: e
            }
         }
      }), h = new Mt({
         props: {
            type: "primary block",
            click: e[26],
            $$slots: {
               default: [_d]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div"), n = O("div"), o = O("div"), Ye(r.$$.fragment), s = F(), i = O("div"), Ye(c.$$.fragment), d = F(), u = O("div"), p = O("div"), Ye(f.$$.fragment), m = F(), $ = O("div"), Ye(h.$$.fragment), K(o, "class", "wx-relates-combo svelte-hbw2pu"), K(i, "class", "wx-tasks-combo svelte-hbw2pu"), K(n, "class", "wx-combos-wrapper svelte-hbw2pu"), K(p, "class", "wx-cancel-btn"), K($, "class", "wx-link-btn svelte-hbw2pu"), K(u, "class", "wx-btns-wrapper svelte-hbw2pu"), K(t, "class", "wx-set-link svelte-hbw2pu")
         },
         m(e, l) {
            N(e, t, l), T(t, n), T(n, o), Ge(r, o, null), T(n, s), T(n, i), Ge(c, i, null), T(t, d), T(t, u), T(u, p), Ge(f, p, null), T(u, m), T(u, $), Ge(h, $, null), g = !0
         },
         p(e, t) {
            const n = {};
            536870912 & t[0] | 4 & t[1] && (n.$$scope = {
               dirty: t,
               ctx: e
            }), !l && 2 & t[0] && (l = !0, n.value = e[1], Se((() => l = !1))), r.$set(n);
            const o = {};
            8 & t[0] && (o.options = e[3]), 16 & t[0] && (o.disabled = e[4]), 536870912 & t[0] | 4 & t[1] && (o.$$scope = {
               dirty: t,
               ctx: e
            }), !a && 4 & t[0] && (a = !0, o.value = e[2], Se((() => a = !1))), c.$set(o);
            const s = {};
            4 & t[1] && (s.$$scope = {
               dirty: t,
               ctx: e
            }), f.$set(s);
            const i = {};
            4 & t[1] && (i.$$scope = {
               dirty: t,
               ctx: e
            }), h.$set(i)
         },
         i(e) {
            g || (Oe(r.$$.fragment, e), Oe(c.$$.fragment, e), Oe(f.$$.fragment, e), Oe(h.$$.fragment, e), g = !0)
         },
         o(e) {
            Ae(r.$$.fragment, e), Ae(c.$$.fragment, e), Ae(f.$$.fragment, e), Ae(h.$$.fragment, e), g = !1
         },
         d(e) {
            e && L(t), Be(r), Be(c), Be(f), Be(h)
         }
      }
   }

   function kd(e) {
      let t, n = e[29].label + "";
      return {
         c() {
            t = R(n)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            536870912 & o[0] && n !== (n = e[29].label + "") && U(t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Sd(e) {
      let t, n = e[29].label + "";
      return {
         c() {
            t = R(n)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            536870912 & o[0] && n !== (n = e[29].label + "") && U(t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Id(e) {
      let n, o = e[6]("Cancel") + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function _d(e) {
      let n, o = e[6]("Link Task") + "";
      return {
         c() {
            n = R(o)
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Md(e) {
      let t, n, o, r, l, s, i, c, a, d, u = [],
         p = new Map,
         f = e[0];
      const m = e => e[30].id;
      for (let t = 0; t < f.length; t += 1) {
         let n = bd(e, f, t),
            o = m(n);
         p.set(o, u[t] = yd(o, n))
      }
      let $ = e[5] && xd(e);
      return l = new Yl({
         props: {
            name: "wxi-plus"
         }
      }), {
         c() {
            t = O("div");
            for (let e = 0; e < u.length; e += 1) u[e].c();
            n = F(), $ && $.c(), o = F(), r = O("div"), Ye(l.$$.fragment), s = F(), i = O("span"), i.textContent = `${e[6]("Add link")}`, K(r, "class", "wx-add-link svelte-hbw2pu"), K(t, "class", "wx-links svelte-hbw2pu")
         },
         m(p, f) {
            N(p, t, f);
            for (let e = 0; e < u.length; e += 1) u[e] && u[e].m(t, null);
            T(t, n), $ && $.m(t, null), T(t, o), T(t, r), Ge(l, r, null), T(r, s), T(r, i), c = !0, a || (d = j(r, "click", e[10]), a = !0)
         },
         p(e, r) {
            86017 & r[0] && (f = e[0], Le(), u = Pe(u, r, m, 1, e, f, p, t, qe, yd, n, bd), He()), e[5] ? $ ? ($.p(e, r), 32 & r[0] && Oe($, 1)) : ($ = xd(e), $.c(), Oe($, 1), $.m(t, o)) : $ && (Le(), Ae($, 1, 1, (() => {
               $ = null
            })), He())
         },
         i(e) {
            if (!c) {
               for (let e = 0; e < f.length; e += 1) Oe(u[e]);
               Oe($), Oe(l.$$.fragment, e), c = !0
            }
         },
         o(e) {
            for (let e = 0; e < u.length; e += 1) Ae(u[e]);
            Ae($), Ae(l.$$.fragment, e), c = !1
         },
         d(e) {
            e && L(t);
            for (let e = 0; e < u.length; e += 1) u[e].d();
            $ && $.d(), Be(l), a = !1, d()
         }
      }
   }

   function Cd(e, t, n) {
      let o, r, {
            api: l
         } = t,
         {
            card: s
         } = t;
      const i = fe("wx-i18n").getGroup("kanban"),
         {
            cards: c,
            links: a
         } = l.getReactiveState();
      p(e, c, (e => n(19, o = e))), p(e, a, (e => n(20, r = e)));
      const d = [{
         id: 1,
         relation: "relatesTo",
         master: !1,
         label: i("Relates to")
      }, {
         id: 2,
         relation: "requiredFor",
         master: !0,
         label: i("Is required for")
      }, {
         id: 3,
         relation: "requiredFor",
         master: !1,
         label: i("Depends on")
      }, {
         id: 4,
         relation: "duplicate",
         master: !0,
         label: i("Duplicates")
      }, {
         id: 5,
         relation: "duplicate",
         master: !1,
         label: i("Is duplicated by")
      }, {
         id: 6,
         relation: "parent",
         master: !0,
         label: i("Is parent for")
      }, {
         id: 7,
         relation: "parent",
         master: !1,
         label: i("Is subtask of")
      }];
      let u, f = null,
         m = null,
         $ = [],
         h = null,
         g = !0,
         v = !1;

      function w() {
         n(5, v = !1), n(4, g = !0), n(2, m = n(1, f = ""))
      }

      function b() {
         if (f && m) {
            const e = d.find((e => jr(e.id, f))).master;
            l.exec("add-link", {
               link: {
                  masterId: e ? s.id : m,
                  slaveId: e ? m : s.id,
                  relation: h
               }
            }), w()
         }
      }

      function y(e) {
         l.exec("delete-link", {
            id: e
         })
      }

      function x() {
         f && (h = d.find((e => jr(e.id, f))).relation), n(3, $ = $.filter((e => !u.find((t => (jr(e.id, t.slaveId) && jr(t.masterId, s.id) || jr(e.id, t.masterId) && jr(t.slaveId, s.id)) && t.relation === h))))), n(2, m = ""), n(4, g = !1)
      }

      function k(e) {
         const t = e.isMaster ? "slaveId" : "masterId";
         l.exec("select-card", {
            id: e[t]
         })
      }
      return e.$$set = e => {
         "api" in e && n(17, l = e.api), "card" in e && n(18, s = e.card)
      }, e.$$.update = () => {
         1310720 & e.$$.dirty[0] && n(0, u = r.filter((e => jr(e.masterId, s.id) || jr(e.slaveId, s.id))).map((e => {
            const t = Object.assign({}, e);
            return t.isMaster = jr(t.masterId, s.id), t.label = d.find((e => e.relation === t.relation && ("relatesTo" === t.relation || t.isMaster === e.master))).label, t
         }))), 786433 & e.$$.dirty[0] && (n(3, $ = u && o.filter((e => !jr(e.id, s.id)))), w())
      }, [u, f, m, $, g, v, i, c, a, d, function () {
         n(5, v = !0)
      }, w, function (e) {
         const t = e.isMaster ? "slaveId" : "masterId";
         return o.find((n => jr(n.id, e[t]))).label
      }, b, y, x, k, l, s, o, r, e => k(e), e => y(e.id), function (e) {
         f = e, n(1, f)
      }, () => x(), function (e) {
         m = e, n(2, m)
      }, () => b()]
   }
   class Td extends Je {
      constructor(e) {
         super(), We(this, e, Cd, Md, c, {
            api: 17,
            card: 18
         }, null, [-1, -1])
      }
   }

   function Dd(e, t, n) {
      const o = e.slice();
      return o[47] = t[n], o[48] = t, o[49] = n, o
   }

   function Ed(e, t, n) {
      const o = e.slice();
      return o[52] = t[n], o
   }

   function Nd(e) {
      let t, n, o, r, l, s, i, c, a, d, u = "main" === e[13] && !e[0].autoSave && Ld(e);
      const p = [Ad, Od],
         f = [];

      function m(e, t) {
         return "main" === e[13] ? 0 : 1
      }
      r = m(e), l = f[r] = p[r](e);
      const $ = [Vd, Kd],
         h = [];

      function g(e, t) {
         return "main" === e[13] ? 0 : "comments" === e[13] ? 1 : -1
      }
      return ~(i = g(e)) && (c = h[i] = $[i](e)), {
         c() {
            t = O("div"), u && u.c(), n = F(), o = O("div"), l.c(), s = F(), c && c.c(), a = z(), K(o, "class", "wx-editor-controls svelte-1lruhmf"), K(t, "class", "wx-editor-controls-wrapper svelte-1lruhmf")
         },
         m(e, l) {
            N(e, t, l), u && u.m(t, null), T(t, n), T(t, o), f[r].m(o, null), N(e, s, l), ~i && h[i].m(e, l), N(e, a, l), d = !0
         },
         p(e, s) {
            "main" !== e[13] || e[0].autoSave ? u && (Le(), Ae(u, 1, 1, (() => {
               u = null
            })), He()) : u ? (u.p(e, s), 8193 & s[0] && Oe(u, 1)) : (u = Ld(e), u.c(), Oe(u, 1), u.m(t, n));
            let d = r;
            r = m(e), r === d ? f[r].p(e, s) : (Le(), Ae(f[d], 1, 1, (() => {
               f[d] = null
            })), He(), l = f[r], l ? l.p(e, s) : (l = f[r] = p[r](e), l.c()), Oe(l, 1), l.m(o, null));
            let v = i;
            i = g(e), i === v ? ~i && h[i].p(e, s) : (c && (Le(), Ae(h[v], 1, 1, (() => {
               h[v] = null
            })), He()), ~i ? (c = h[i], c ? c.p(e, s) : (c = h[i] = $[i](e), c.c()), Oe(c, 1), c.m(a.parentNode, a)) : c = null)
         },
         i(e) {
            d || (Oe(u), Oe(l), Oe(c), d = !0)
         },
         o(e) {
            Ae(u), Ae(l), Ae(c), d = !1
         },
         d(e) {
            e && L(t), u && u.d(), f[r].d(), e && L(s), ~i && h[i].d(e), e && L(a)
         }
      }
   }

   function Ld(e) {
      let t, n;
      return t = new Mt({
         props: {
            type: "primary wx-editor-btn",
            click: e[17],
            $$slots: {
               default: [Hd]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4096 & n[0] | 16777216 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Hd(e) {
      let t, n = e[12]("Save") + "";
      return {
         c() {
            t = R(n)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            4096 & o[0] && n !== (n = e[12]("Save") + "") && U(t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Od(e) {
      let t, n;
      return t = new Mt({
         props: {
            click: e[33],
            $$slots: {
               default: [Rd]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4096 & n[0] | 16777216 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ad(e) {
      let t, n, o, r = e[9].votes?.show && Fd(e);
      return n = new Yl({
         props: {
            name: "wxi-close",
            click: e[19]
         }
      }), {
         c() {
            r && r.c(), t = F(), Ye(n.$$.fragment)
         },
         m(e, l) {
            r && r.m(e, l), N(e, t, l), Ge(n, e, l), o = !0
         },
         p(e, n) {
            e[9].votes?.show ? r ? (r.p(e, n), 512 & n[0] && Oe(r, 1)) : (r = Fd(e), r.c(), Oe(r, 1), r.m(t.parentNode, t)) : r && (Le(), Ae(r, 1, 1, (() => {
               r = null
            })), He())
         },
         i(e) {
            o || (Oe(r), Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(r), Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            r && r.d(e), e && L(t), Be(n, e)
         }
      }
   }

   function Rd(e) {
      let t, n = e[12]("Back") + "";
      return {
         c() {
            t = R(n)
         },
         m(e, n) {
            N(e, t, n)
         },
         p(e, o) {
            4096 & o[0] && n !== (n = e[12]("Back") + "") && U(t, n)
         },
         d(e) {
            e && L(t)
         }
      }
   }

   function Fd(e) {
      let t, n, o, r, l, i, c;
      o = new Mt({
         props: {
            click: e[21],
            $$slots: {
               default: [zd]
            },
            $$scope: {
               ctx: e
            }
         }
      });
      let a = e[14] && e[15]?.length && jd(e);
      return {
         c() {
            t = O("div"), n = O("div"), Ye(o.$$.fragment), r = F(), a && a.c(), K(n, "class", "wx-kanban-editor-vote svelte-1lruhmf"), X(n, "wx-kanban-editor-voted", e[2].votes?.includes(e[16])), K(t, "class", "wx-kanban-editor-voting svelte-1lruhmf")
         },
         m(s, d) {
            N(s, t, d), T(t, n), Ge(o, n, null), T(t, r), a && a.m(t, null), l = !0, i || (c = [j(n, "mouseenter", e[30]), j(n, "mouseleave", e[31])], i = !0)
         },
         p(e, r) {
            const s = {};
            4 & r[0] | 16777216 & r[1] && (s.$$scope = {
               dirty: r,
               ctx: e
            }), o.$set(s), (!l || 65540 & r[0]) && X(n, "wx-kanban-editor-voted", e[2].votes?.includes(e[16])), e[14] && e[15]?.length ? a ? (a.p(e, r), 49152 & r[0] && Oe(a, 1)) : (a = jd(e), a.c(), Oe(a, 1), a.m(t, null)) : a && (Le(), Ae(a, 1, 1, (() => {
               a = null
            })), He())
         },
         i(e) {
            l || (Oe(o.$$.fragment, e), Oe(a), l = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), Ae(a), l = !1
         },
         d(e) {
            e && L(t), Be(o), a && a.d(), i = !1, s(c)
         }
      }
   }

   function zd(e) {
      let t, n, o, r, l = (e[2].votes?.length || 0) + "";
      return t = new Yl({
         props: {
            name: "wxi-like"
         }
      }), {
         c() {
            Ye(t.$$.fragment), n = F(), o = R(l)
         },
         m(e, l) {
            Ge(t, e, l), N(e, n, l), N(e, o, l), r = !0
         },
         p(e, t) {
            (!r || 4 & t[0]) && l !== (l = (e[2].votes?.length || 0) + "") && U(o, l)
         },
         i(e) {
            r || (Oe(t.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), r = !1
         },
         d(e) {
            Be(t, e), e && L(n), e && L(o)
         }
      }
   }

   function jd(e) {
      let t, n;
      return t = new Ot({
         props: {
            width: "230px",
            cancel: e[32],
            $$slots: {
               default: [Pd]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            16384 & n[0] && (o.cancel = e[32]), 32768 & n[0] | 16777216 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function qd(e, t) {
      let n, o, r, l, s, i, c, a = t[52].label + "";
      return o = new oi({
         props: {
            size: "small",
            data: t[52]
         }
      }), {
         key: e,
         first: null,
         c() {
            n = O("div"), Ye(o.$$.fragment), r = F(), l = O("span"), s = R(a), i = F(), K(l, "class", "wx-multiselect-label svelte-1lruhmf"), K(n, "class", "wx-multiselect-option svelte-1lruhmf"), this.first = n
         },
         m(e, t) {
            N(e, n, t), Ge(o, n, null), T(n, r), T(n, l), T(l, s), T(n, i), c = !0
         },
         p(e, n) {
            t = e;
            const r = {};
            32768 & n[0] && (r.data = t[52]), o.$set(r), (!c || 32768 & n[0]) && a !== (a = t[52].label + "") && U(s, a)
         },
         i(e) {
            c || (Oe(o.$$.fragment, e), c = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), c = !1
         },
         d(e) {
            e && L(n), Be(o)
         }
      }
   }

   function Pd(e) {
      let t, n, o = [],
         r = new Map,
         l = e[15];
      const s = e => e[52].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = Ed(e, l, t),
            i = s(n);
         r.set(i, o[t] = qd(i, n))
      }
      return {
         c() {
            t = O("div");
            for (let e = 0; e < o.length; e += 1) o[e].c();
            K(t, "class", "wx-kanban-voters-list svelte-1lruhmf")
         },
         m(e, r) {
            N(e, t, r);
            for (let e = 0; e < o.length; e += 1) o[e] && o[e].m(t, null);
            n = !0
         },
         p(e, n) {
            32768 & n[0] && (l = e[15], Le(), o = Pe(o, n, s, 1, e, l, r, t, qe, qd, null, Ed), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            e && L(t);
            for (let e = 0; e < o.length; e += 1) o[e].d()
         }
      }
   }

   function Kd(e) {
      let t, n;
      return t = new wd({
         props: {
            card: e[2],
            api: e[1],
            users: e[7],
            shape: e[5].find(Iu)
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4 & n[0] && (o.card = e[2]), 2 & n[0] && (o.api = e[1]), 128 & n[0] && (o.users = e[7]), 32 & n[0] && (o.shape = e[5].find(Iu)), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Vd(e) {
      let t, n, o = [],
         r = new Map,
         l = e[5];
      const s = e => e[47].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = Dd(e, l, t),
            i = s(n);
         r.set(i, o[t] = xu(i, n))
      }
      return {
         c() {
            t = O("div");
            for (let e = 0; e < o.length; e += 1) o[e].c();
            K(t, "class", "wx-kanban-editor-main")
         },
         m(e, r) {
            N(e, t, r);
            for (let e = 0; e < o.length; e += 1) o[e] && o[e].m(t, null);
            n = !0
         },
         p(e, n) {
            1315238 & n[0] | 1572864 & n[1] && (l = e[5], Le(), o = Pe(o, n, s, 1, e, l, r, t, qe, xu, null, Dd), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            e && L(t);
            for (let e = 0; e < o.length; e += 1) o[e].d()
         }
      }
   }

   function Ud(e) {
      let t, n, o, r;
      return n = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [su]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), K(t, "class", "wx-card-comments svelte-1lruhmf")
         },
         m(e, l) {
            N(e, t, l), Ge(n, t, null), T(t, o), r = !0
         },
         p(e, t) {
            const o = {};
            4128 & t[0] && (o.label = e[12](e[47].label)), 4262 & t[0] | 16777216 & t[1] && (o.$$scope = {
               dirty: t,
               ctx: e
            }), n.$set(o)
         },
         i(e) {
            r || (Oe(n.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function Yd(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [iu]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4128 & n[0] && (o.label = e[12](e[47].label)), 6 & n[0] | 16777216 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Gd(e) {
      let t, n, o, r;
      return n = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [cu]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), K(t, "class", "files svelte-1lruhmf")
         },
         m(e, l) {
            N(e, t, l), Ge(n, t, null), T(t, o), r = !0
         },
         p(e, t) {
            const o = {};
            4128 & t[0] && (o.label = e[12](e[47].label)), 32 & t[0] | 16777216 & t[1] && (o.$$scope = {
               dirty: t,
               ctx: e
            }), n.$set(o)
         },
         i(e) {
            r || (Oe(n.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function Bd(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [au, ({
                  id: e
               }) => ({
                  50: e
               }), ({
                  id: e
               }) => [0, e ? 524288 : 0]]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4128 & n[0] && (o.label = e[12](e[47].label)), 288 & n[0] | 17301504 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Wd(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [du, ({
                  id: e
               }) => ({
                  50: e
               }), ({
                  id: e
               }) => [0, e ? 524288 : 0]]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4128 & n[0] && (o.label = e[12](e[47].label)), 288 & n[0] | 17301504 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Jd(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [pu]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4128 & n[0] && (o.label = e[12](e[47].label)), 288 & n[0] | 16777216 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Xd(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [fu, ({
                  id: e
               }) => ({
                  50: e
               }), ({
                  id: e
               }) => [0, e ? 524288 : 0]]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4128 & n[0] && (o.label = e[12](e[47].label)), 288 & n[0] | 17301504 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Zd(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [mu, ({
                  id: e
               }) => ({
                  50: e
               }), ({
                  id: e
               }) => [0, e ? 524288 : 0]]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4128 & n[0] && (o.label = e[12](e[47].label)), 288 & n[0] | 17301504 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Qd(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [vu, ({
                  id: e
               }) => ({
                  50: e
               }), ({
                  id: e
               }) => [0, e ? 524288 : 0]]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4128 & n[0] && (o.label = e[12](e[47].label)), 288 & n[0] | 17301504 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function eu(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: `${e[12](e[47].label)} ${e[8][e[47].key]}%`,
            position: "top",
            $$slots: {
               default: [wu, ({
                  id: e
               }) => ({
                  50: e
               }), ({
                  id: e
               }) => [0, e ? 524288 : 0]]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4384 & n[0] && (o.label = `${e[12](e[47].label)} ${e[8][e[47].key]}%`), 288 & n[0] | 17301504 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function tu(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [bu, ({
                  id: e
               }) => ({
                  50: e
               }), ({
                  id: e
               }) => [0, e ? 524288 : 0]]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4128 & n[0] && (o.label = e[12](e[47].label)), 288 & n[0] | 17301504 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function nu(e) {
      let t, n;
      return t = new Zo({
         props: {
            label: e[12](e[47].label),
            position: "top",
            $$slots: {
               default: [yu, ({
                  id: e
               }) => ({
                  50: e
               }), ({
                  id: e
               }) => [0, e ? 524288 : 0]]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4128 & n[0] && (o.label = e[12](e[47].label)), 288 & n[0] | 17301504 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function ou(e) {
      let t, n;
      return t = new Mt({
         props: {
            type: "primary block",
            click: e[44],
            $$slots: {
               default: [lu]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4100 & n[0] | 16777216 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function ru(e) {
      let t, n;
      return t = new wd({
         props: {
            card: e[2],
            api: e[1],
            users: e[7],
            shape: e[47]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4 & n[0] && (o.card = e[2]), 2 & n[0] && (o.api = e[1]), 128 & n[0] && (o.users = e[7]), 32 & n[0] && (o.shape = e[47]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function lu(e) {
      let t, n, o, r, l = e[12]("Show comments") + "",
         s = (e[2].comments?.length || 0) + "";
      return {
         c() {
            t = R(l), n = R("\n\t\t\t\t\t\t\t\t\t\t\t("), o = R(s), r = R(")")
         },
         m(e, l) {
            N(e, t, l), N(e, n, l), N(e, o, l), N(e, r, l)
         },
         p(e, n) {
            4096 & n[0] && l !== (l = e[12]("Show comments") + "") && U(t, l), 4 & n[0] && s !== (s = (e[2].comments?.length || 0) + "") && U(o, s)
         },
         d(e) {
            e && L(t), e && L(n), e && L(o), e && L(r)
         }
      }
   }

   function su(e) {
      let t, n, o, r;
      const l = [ru, ou],
         s = [];

      function i(e, t) {
         return "editor" === e[47].config?.placement ? 0 : 1
      }
      return t = i(e), n = s[t] = l[t](e), {
         c() {
            n.c(), o = z()
         },
         m(e, n) {
            s[t].m(e, n), N(e, o, n), r = !0
         },
         p(e, r) {
            let c = t;
            t = i(e), t === c ? s[t].p(e, r) : (Le(), Ae(s[c], 1, 1, (() => {
               s[c] = null
            })), He(), n = s[t], n ? n.p(e, r) : (n = s[t] = l[t](e), n.c()), Oe(n, 1), n.m(o.parentNode, o))
         },
         i(e) {
            r || (Oe(n), r = !0)
         },
         o(e) {
            Ae(n), r = !1
         },
         d(e) {
            s[t].d(e), e && L(o)
         }
      }
   }

   function iu(e) {
      let t, n, o;
      return t = new Td({
         props: {
            card: e[2],
            api: e[1]
         }
      }), {
         c() {
            Ye(t.$$.fragment), n = F()
         },
         m(e, r) {
            Ge(t, e, r), N(e, n, r), o = !0
         },
         p(e, n) {
            const o = {};
            4 & n[0] && (o.card = e[2]), 2 & n[0] && (o.api = e[1]), t.$set(o)
         },
         i(e) {
            o || (Oe(t.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), o = !1
         },
         d(e) {
            Be(t, e), e && L(n)
         }
      }
   }

   function cu(e) {
      let t, n;
      return t = new ma({
         props: {
            field: e[47],
            values: e[18]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            32 & n[0] && (o.field = e[47]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function au(e) {
      let t, n, o, r, l;

      function s(t) {
         e[42](t, e[47])
      }

      function i(t) {
         e[43](t, e[47])
      }
      let c = {
         id: e[50],
         format: e[47].format || "%m/%d/%Y"
      };
      return void 0 !== e[8][e[47].key.start] && (c.start = e[8][e[47].key.start]), void 0 !== e[8][e[47].key.end] && (c.end = e[8][e[47].key.end]), t = new _a({
         props: c
      }), he.push((() => Ue(t, "start", s))), he.push((() => Ue(t, "end", i))), {
         c() {
            Ye(t.$$.fragment), r = F()
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), l = !0
         },
         p(r, l) {
            e = r;
            const s = {};
            524288 & l[1] && (s.id = e[50]), 32 & l[0] && (s.format = e[47].format || "%m/%d/%Y"), !n && 288 & l[0] && (n = !0, s.start = e[8][e[47].key.start], Se((() => n = !1))), !o && 288 & l[0] && (o = !0, s.end = e[8][e[47].key.end], Se((() => o = !1))), t.$set(s)
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), l = !1
         },
         d(e) {
            Be(t, e), e && L(r)
         }
      }
   }

   function du(e) {
      let t, n, r, l;
      const s = [{
         id: e[50]
      }, {
         format: e[47].format || "%m/%d/%Y"
      }, e[47].config];

      function i(t) {
         e[41](t, e[47])
      }
      let c = {};
      for (let e = 0; e < s.length; e += 1) c = o(c, s[e]);
      return void 0 !== e[8][e[47].key] && (c.value = e[8][e[47].key]), t = new so({
         props: c
      }), he.push((() => Ue(t, "value", i))), {
         c() {
            Ye(t.$$.fragment), r = F()
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), l = !0
         },
         p(o, r) {
            e = o;
            const l = 32 & r[0] | 524288 & r[1] ? Ke(s, [524288 & r[1] && {
               id: e[50]
            }, 32 & r[0] && {
               format: e[47].format || "%m/%d/%Y"
            }, 32 & r[0] && Ve(e[47].config)]) : {};
            !n && 288 & r[0] && (n = !0, l.value = e[8][e[47].key], Se((() => n = !1))), t.$set(l)
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), l = !1
         },
         d(e) {
            Be(t, e), e && L(r)
         }
      }
   }

   function uu(e) {
      let t, n, o, r, l, s, i = e[51].label + "";
      return n = new oi({
         props: {
            data: e[51]
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), r = O("span"), l = R(i), K(r, "class", "wx-multiselect-label svelte-1lruhmf"), K(t, "class", "wx-multiselect-option svelte-1lruhmf")
         },
         m(e, i) {
            N(e, t, i), Ge(n, t, null), T(t, o), T(t, r), T(r, l), s = !0
         },
         p(e, t) {
            const o = {};
            1048576 & t[1] && (o.data = e[51]), n.$set(o), (!s || 1048576 & t[1]) && i !== (i = e[51].label + "") && U(l, i)
         },
         i(e) {
            s || (Oe(n.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function pu(e) {
      let t, n, r, l;
      const s = [{
         checkboxes: !0
      }, {
         options: e[47].values
      }, e[47].config];

      function i(t) {
         e[40](t, e[47])
      }
      let c = {
         $$slots: {
            default: [uu, ({
               option: e
            }) => ({
               51: e
            }), ({
               option: e
            }) => [0, e ? 1048576 : 0]]
         },
         $$scope: {
            ctx: e
         }
      };
      for (let e = 0; e < s.length; e += 1) c = o(c, s[e]);
      return void 0 !== e[8][e[47].key] && (c.values = e[8][e[47].key]), t = new Xa({
         props: c
      }), he.push((() => Ue(t, "values", i))), {
         c() {
            Ye(t.$$.fragment), r = F()
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), l = !0
         },
         p(o, r) {
            e = o;
            const l = 32 & r[0] ? Ke(s, [s[0], {
               options: e[47].values
            }, Ve(e[47].config)]) : {};
            17825792 & r[1] && (l.$$scope = {
               dirty: r,
               ctx: e
            }), !n && 288 & r[0] && (n = !0, l.values = e[8][e[47].key], Se((() => n = !1))), t.$set(l)
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), l = !1
         },
         d(e) {
            Be(t, e), e && L(r)
         }
      }
   }

   function fu(e) {
      let t, n, r, l;
      const s = [{
         id: e[50]
      }, {
         colors: e[47].values
      }, e[47].config];

      function i(t) {
         e[39](t, e[47])
      }
      let c = {};
      for (let e = 0; e < s.length; e += 1) c = o(c, s[e]);
      return void 0 !== e[8][e[47].key] && (c.value = e[8][e[47].key]), t = new Ut({
         props: c
      }), he.push((() => Ue(t, "value", i))), {
         c() {
            Ye(t.$$.fragment), r = F()
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), l = !0
         },
         p(o, r) {
            e = o;
            const l = 32 & r[0] | 524288 & r[1] ? Ke(s, [524288 & r[1] && {
               id: e[50]
            }, 32 & r[0] && {
               colors: e[47].values
            }, 32 & r[0] && Ve(e[47].config)]) : {};
            !n && 288 & r[0] && (n = !0, l.value = e[8][e[47].key], Se((() => n = !1))), t.$set(l)
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), l = !1
         },
         d(e) {
            Be(t, e), e && L(r)
         }
      }
   }

   function mu(e) {
      let t, n, r, l;
      const s = [{
         id: e[50]
      }, {
         options: e[47].values
      }, e[47].config];

      function i(t) {
         e[38](t, e[47])
      }
      let c = {};
      for (let e = 0; e < s.length; e += 1) c = o(c, s[e]);
      return void 0 !== e[8][e[47].key] && (c.value = e[8][e[47].key]), t = new go({
         props: c
      }), he.push((() => Ue(t, "value", i))), {
         c() {
            Ye(t.$$.fragment), r = F()
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), l = !0
         },
         p(o, r) {
            e = o;
            const l = 32 & r[0] | 524288 & r[1] ? Ke(s, [524288 & r[1] && {
               id: e[50]
            }, 32 & r[0] && {
               options: e[47].values
            }, 32 & r[0] && Ve(e[47].config)]) : {};
            !n && 288 & r[0] && (n = !0, l.value = e[8][e[47].key], Se((() => n = !1))), t.$set(l)
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), l = !1
         },
         d(e) {
            Be(t, e), e && L(r)
         }
      }
   }

   function $u(e) {
      let t, n;
      return t = new oi({
         props: {
            data: e[51]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1048576 & n[1] && (o.data = e[51]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function hu(e) {
      let n;
      return {
         c() {
            n = O("div"), K(n, "class", "wx-color svelte-1lruhmf"), G(n, "background", e[51].color)
         },
         m(e, t) {
            N(e, n, t)
         },
         p(e, t) {
            1048576 & t[1] && G(n, "background", e[51].color)
         },
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function gu(e) {
      let t, n, o, r, l, s, i = e[51].label + "";
      const c = [hu, $u],
         a = [];

      function d(e, t) {
         return e[51].color ? 0 : e[51].avatar || e[51].avatarColor ? 1 : -1
      }
      return ~(n = d(e)) && (o = a[n] = c[n](e)), {
         c() {
            t = O("div"), o && o.c(), r = F(), l = R(i), K(t, "class", "wx-combo-option svelte-1lruhmf")
         },
         m(e, o) {
            N(e, t, o), ~n && a[n].m(t, null), T(t, r), T(t, l), s = !0
         },
         p(e, u) {
            let p = n;
            n = d(e), n === p ? ~n && a[n].p(e, u) : (o && (Le(), Ae(a[p], 1, 1, (() => {
               a[p] = null
            })), He()), ~n ? (o = a[n], o ? o.p(e, u) : (o = a[n] = c[n](e), o.c()), Oe(o, 1), o.m(t, r)) : o = null), (!s || 1048576 & u[1]) && i !== (i = e[51].label + "") && U(l, i)
         },
         i(e) {
            s || (Oe(o), s = !0)
         },
         o(e) {
            Ae(o), s = !1
         },
         d(e) {
            e && L(t), ~n && a[n].d()
         }
      }
   }

   function vu(e) {
      let t, n, r, l;
      const s = [{
         id: e[50]
      }, {
         options: e[47].values
      }, e[47].config];

      function i(t) {
         e[37](t, e[47])
      }
      let c = {
         $$slots: {
            default: [gu, ({
               option: e
            }) => ({
               51: e
            }), ({
               option: e
            }) => [0, e ? 1048576 : 0]]
         },
         $$scope: {
            ctx: e
         }
      };
      for (let e = 0; e < s.length; e += 1) c = o(c, s[e]);
      return void 0 !== e[8][e[47].key] && (c.value = e[8][e[47].key]), t = new dn({
         props: c
      }), he.push((() => Ue(t, "value", i))), {
         c() {
            Ye(t.$$.fragment), r = F()
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), l = !0
         },
         p(o, r) {
            e = o;
            const l = 32 & r[0] | 524288 & r[1] ? Ke(s, [524288 & r[1] && {
               id: e[50]
            }, 32 & r[0] && {
               options: e[47].values
            }, 32 & r[0] && Ve(e[47].config)]) : {};
            17825792 & r[1] && (l.$$scope = {
               dirty: r,
               ctx: e
            }), !n && 288 & r[0] && (n = !0, l.value = e[8][e[47].key], Se((() => n = !1))), t.$set(l)
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), l = !1
         },
         d(e) {
            Be(t, e), e && L(r)
         }
      }
   }

   function wu(e) {
      let t, n, r, l;
      const s = [{
         id: e[50]
      }, {
         min: 0
      }, e[47].config];

      function i(t) {
         e[36](t, e[47])
      }
      let c = {};
      for (let e = 0; e < s.length; e += 1) c = o(c, s[e]);
      return void 0 !== e[8][e[47].key] && (c.value = e[8][e[47].key]), t = new yo({
         props: c
      }), he.push((() => Ue(t, "value", i))), {
         c() {
            Ye(t.$$.fragment), r = F()
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), l = !0
         },
         p(o, r) {
            e = o;
            const l = 32 & r[0] | 524288 & r[1] ? Ke(s, [524288 & r[1] && {
               id: e[50]
            }, s[1], 32 & r[0] && Ve(e[47].config)]) : {};
            !n && 288 & r[0] && (n = !0, l.value = e[8][e[47].key], Se((() => n = !1))), t.$set(l)
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), l = !1
         },
         d(e) {
            Be(t, e), e && L(r)
         }
      }
   }

   function bu(e) {
      let t, n, r, l;
      const s = [{
         id: e[50]
      }, e[47].config];

      function i(t) {
         e[35](t, e[47])
      }
      let c = {};
      for (let e = 0; e < s.length; e += 1) c = o(c, s[e]);
      return void 0 !== e[8][e[47].key] && (c.value = e[8][e[47].key]), t = new kt({
         props: c
      }), he.push((() => Ue(t, "value", i))), {
         c() {
            Ye(t.$$.fragment), r = F()
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), l = !0
         },
         p(o, r) {
            e = o;
            const l = 32 & r[0] | 524288 & r[1] ? Ke(s, [524288 & r[1] && {
               id: e[50]
            }, 32 & r[0] && Ve(e[47].config)]) : {};
            !n && 288 & r[0] && (n = !0, l.value = e[8][e[47].key], Se((() => n = !1))), t.$set(l)
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), l = !1
         },
         d(e) {
            Be(t, e), e && L(r)
         }
      }
   }

   function yu(e) {
      let t, n, r, l;
      const s = [{
         id: e[50]
      }, {
         focus: !0
      }, e[47].config];

      function i(t) {
         e[34](t, e[47])
      }
      let c = {};
      for (let e = 0; e < s.length; e += 1) c = o(c, s[e]);
      return void 0 !== e[8][e[47].key] && (c.value = e[8][e[47].key]), t = new hn({
         props: c
      }), he.push((() => Ue(t, "value", i))), {
         c() {
            Ye(t.$$.fragment), r = F()
         },
         m(e, n) {
            Ge(t, e, n), N(e, r, n), l = !0
         },
         p(o, r) {
            e = o;
            const l = 32 & r[0] | 524288 & r[1] ? Ke(s, [524288 & r[1] && {
               id: e[50]
            }, s[1], 32 & r[0] && Ve(e[47].config)]) : {};
            !n && 288 & r[0] && (n = !0, l.value = e[8][e[47].key], Se((() => n = !1))), t.$set(l)
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), l = !1
         },
         d(e) {
            Be(t, e), e && L(r)
         }
      }
   }

   function xu(e, t) {
      let n, o, r, l, s;
      const i = [nu, tu, eu, Qd, Zd, Xd, Jd, Wd, Bd, Gd, Yd, Ud],
         c = [];

      function a(e, t) {
         return "text" === e[47].type ? 0 : "textarea" === e[47].type ? 1 : "progress" === e[47].type ? 2 : "combo" === e[47].type ? 3 : "select" === e[47].type ? 4 : "color" === e[47].type ? 5 : "multiselect" === e[47].type ? 6 : "date" === e[47].type ? 7 : "dateRange" === e[47].type ? 8 : "files" === e[47].type ? 9 : "links" === e[47].type ? 10 : "comments" === e[47].type && e[7].length ? 11 : -1
      }
      return ~(o = a(t)) && (r = c[o] = i[o](t)), {
         key: e,
         first: null,
         c() {
            n = z(), r && r.c(), l = z(), this.first = n
         },
         m(e, t) {
            N(e, n, t), ~o && c[o].m(e, t), N(e, l, t), s = !0
         },
         p(e, n) {
            let s = o;
            o = a(t = e), o === s ? ~o && c[o].p(t, n) : (r && (Le(), Ae(c[s], 1, 1, (() => {
               c[s] = null
            })), He()), ~o ? (r = c[o], r ? r.p(t, n) : (r = c[o] = i[o](t), r.c()), Oe(r, 1), r.m(l.parentNode, l)) : r = null)
         },
         i(e) {
            s || (Oe(r), s = !0)
         },
         o(e) {
            Ae(r), s = !1
         },
         d(e) {
            e && L(n), ~o && c[o].d(e), e && L(l)
         }
      }
   }

   function ku(e) {
      let t, n, o, r, l, s, i;

      function c(t) {
         e[29](t)
      }
      let a = {};
      void 0 !== e[12] && (a._ = e[12]), t = new Qa({
         props: a
      }), he.push((() => Ue(t, "_", c)));
      let d = e[12] && e[2] && Nd(e);
      return {
         c() {
            Ye(t.$$.fragment), o = F(), r = O("div"), d && d.c(), K(r, "class", "wx-editor svelte-1lruhmf"), K(r, "data-kanban-id", Or.editor), X(r, "wx-editor-open", e[2])
         },
         m(n, c) {
            Ge(t, n, c), N(n, o, c), N(n, r, c), d && d.m(r, null), l = !0, s || (i = j(r, "click", P(e[28])), s = !0)
         },
         p(e, o) {
            const s = {};
            !n && 4096 & o[0] && (n = !0, s._ = e[12], Se((() => n = !1))), t.$set(s), e[12] && e[2] ? d ? (d.p(e, o), 4100 & o[0] && Oe(d, 1)) : (d = Nd(e), d.c(), Oe(d, 1), d.m(r, null)) : d && (Le(), Ae(d, 1, 1, (() => {
               d = null
            })), He()), (!l || 4 & o[0]) && X(r, "wx-editor-open", e[2])
         },
         i(e) {
            l || (Oe(t.$$.fragment, e), Oe(d), l = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), Ae(d), l = !1
         },
         d(e) {
            Be(t, e), e && L(o), e && L(r), d && d.d(), s = !1, i()
         }
      }
   }

   function Su(e) {
      let t, n;
      return t = new Cr({
         props: {
            words: {
               ...Ze,
               ...Xe
            },
            optional: !0,
            $$slots: {
               default: [ku]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            127911 & n[0] | 16777216 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }
   const Iu = e => "comments" === e.type;

   function _u(e, n, o) {
      let r, l, s, i, c, a, d = t,
         f = () => (d(), d = u(H, (e => o(16, l = e))), H),
         m = t,
         $ = () => (m(), m = u(T, (e => o(9, s = e))), T),
         h = t,
         g = () => (h(), h = u(C, (e => o(25, i = e))), C),
         v = t,
         w = () => (v(), v = u(E, (e => o(26, c = e))), E),
         b = t,
         y = () => (b(), b = u(N, (e => o(27, a = e))), N);
      var x, k;
      e.$$.on_destroy.push((() => d())), e.$$.on_destroy.push((() => m())), e.$$.on_destroy.push((() => h())), e.$$.on_destroy.push((() => v())), e.$$.on_destroy.push((() => b()));
      let {
         config: S = Hr
      } = n, {
         shape: I = null
      } = n, {
         api: _
      } = n, M = null, C = null;
      g();
      let T = null;
      $();
      let D = null,
         E = null;
      w();
      let N = null;
      y();
      let L, H = null;

      function O() {
         L && _.exec("update-card", {
            card: Object.assign({}, L),
            id: L.id
         })
      }
      f();
      const A = Bc({}, (e => {
         L = e, S.autoSave && O()
      }), {
         debounce: S.debounce
      });
      let R;
      p(e, A, (e => o(8, r = e)));
      let F = "main";

      function z(e) {
         o(13, F = e)
      }
      let j = !1;
      let q = [],
         P = [];
      return e.$$set = e => {
         "config" in e && o(0, S = e.config), "shape" in e && o(22, I = e.shape), "api" in e && o(1, _ = e.api)
      }, e.$$.update = () => {
         if (1 & e.$$.dirty[0] && o(0, S = Object.assign(Object.assign({}, Hr), S)), 26 & e.$$.dirty[0] && _ && !C && !T) {
            const e = _.getReactiveState();
            g(o(3, C = e.edit)), $(o(4, T = e.cardShape)), w(o(6, E = e.cards)), y(o(10, N = e.dragItemId)), f(o(11, H = e.currentUser))
         }
         if (234881088 & e.$$.dirty[0] && o(2, M = !a && E && c.find((e => jr(e.id, null == i ? void 0 : i.cardId)))), 4194832 & e.$$.dirty[0] && o(5, D = T && function (e, t) {
               return (e || Lr.filter((e => {
                  const n = t[e.key];
                  return n && n?.show
               }))).map((e => {
                  const n = t[e.key];
                  return n && "string" == typeof e.key && (n.values && !e.values && (e.values = n.values), e.config && (n.config = e.config)), e.id = e.id || et(), e
               }))
            }(I, s)), 36 & e.$$.dirty[0] && D && A.reset(function (e) {
               const t = Object.assign({}, e);
               return D.forEach((e => {
                  void 0 === t[e.key] && void 0 === t[e.key] && ("files" === e.type ? t[e.key] = [] : "date" === e.type ? t[e.key] = null : "progress" === e.type ? t[e.key] = 0 : t[e.key] = "")
               })), t
            }(M)), 25166210 & e.$$.dirty[0] && _) {
            const e = _.getState().cardShape.users;
            (null === o(23, x = null == e ? void 0 : e.values) || void 0 === x ? void 0 : x.length) && (o(7, q = e.values), (null === o(24, k = null == r ? void 0 : r.votes) || void 0 === k ? void 0 : k.length) ? o(15, P = r.votes.map((e => q.find((t => t.id == e))))) : o(15, P = []))
         }
      }, [S, _, M, C, T, D, E, q, r, s, N, H, R, F, j, P, l, O, A, function () {
         _.exec("set-edit", null)
      }, z, function () {
         var e;
         const t = M.id;
         (null === (e = M.votes) || void 0 === e ? void 0 : e.includes(l)) ? _.exec("delete-vote", {
            cardId: t
         }): _.exec("add-vote", {
            cardId: t
         })
      }, I, x, k, i, c, a, function (t) {
         me.call(this, e, t)
      }, function (e) {
         R = e, o(12, R)
      }, () => o(14, j = !0), () => o(14, j = !1), () => o(14, j = !1), () => z("main"), function (t, n) {
         e.$$.not_equal(r[n.key], t) && (r[n.key] = t, A.set(r))
      }, function (t, n) {
         e.$$.not_equal(r[n.key], t) && (r[n.key] = t, A.set(r))
      }, function (t, n) {
         e.$$.not_equal(r[n.key], t) && (r[n.key] = t, A.set(r))
      }, function (t, n) {
         e.$$.not_equal(r[n.key], t) && (r[n.key] = t, A.set(r))
      }, function (t, n) {
         e.$$.not_equal(r[n.key], t) && (r[n.key] = t, A.set(r))
      }, function (t, n) {
         e.$$.not_equal(r[n.key], t) && (r[n.key] = t, A.set(r))
      }, function (t, n) {
         e.$$.not_equal(r[n.key], t) && (r[n.key] = t, A.set(r))
      }, function (t, n) {
         e.$$.not_equal(r[n.key], t) && (r[n.key] = t, A.set(r))
      }, function (t, n) {
         e.$$.not_equal(r[n.key.start], t) && (r[n.key.start] = t, A.set(r))
      }, function (t, n) {
         e.$$.not_equal(r[n.key.end], t) && (r[n.key.end] = t, A.set(r))
      }, () => z("comments")]
   }
   let Mu = class extends Je {
      constructor(e) {
         super(), We(this, e, _u, Su, c, {
            config: 0,
            shape: 22,
            api: 1
         }, null, [-1, -1])
      }
   };

   function Cu(e) {
      let t, n, o, r, l;
      return n = new Mu({
         props: {
            api: e[1],
            config: e[0],
            shape: e[2]
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), K(t, "class", "wx-sidebar svelte-psni4g"), K(t, "data-kanban-id", Or.editor), X(t, "wx-sidebar-open", !!e[3])
         },
         m(s, i) {
            N(s, t, i), Ge(n, t, null), o = !0, r || (l = j(t, "click", P(e[6])), r = !0)
         },
         p(e, [r]) {
            const l = {};
            2 & r && (l.api = e[1]), 1 & r && (l.config = e[0]), 4 & r && (l.shape = e[2]), n.$set(l), (!o || 8 & r) && X(t, "wx-sidebar-open", !!e[3])
         },
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            e && L(t), Be(n), r = !1, l()
         }
      }
   }

   function Tu(e, t, n) {
      let o, r, {
            config: l = Hr
         } = t,
         {
            api: s
         } = t,
         {
            shape: i
         } = t;
      const {
         edit: c
      } = s.getReactiveState();
      return p(e, c, (e => n(5, r = e))), e.$$set = e => {
         "config" in e && n(0, l = e.config), "api" in e && n(1, s = e.api), "shape" in e && n(2, i = e.shape)
      }, e.$$.update = () => {
         34 & e.$$.dirty && n(3, o = s.getCard(null == r ? void 0 : r.cardId)), 1 & e.$$.dirty && n(0, l = Object.assign(Object.assign({}, Hr), l))
      }, [l, s, i, o, c, r, function (t) {
         me.call(this, e, t)
      }]
   }
   class Du extends Je {
      constructor(e) {
         super(), We(this, e, Tu, Cu, c, {
            config: 0,
            api: 1,
            shape: 2
         })
      }
   }

   function Eu(e, t, n) {
      const o = e.slice();
      return o[48] = t[n], o
   }

   function Nu(e, t, n) {
      const o = e.slice();
      return o[51] = t[n], o
   }

   function Lu(e, t, n) {
      const o = e.slice();
      return o[48] = t[n], o
   }

   function Hu(e, t, n) {
      const o = e.slice();
      return o[51] = t[n], o
   }

   function Ou(e) {
      let t, n, o, r;
      t = new qc({
         props: {
            columns: e[13],
            areasMeta: e[14],
            contentEl: e[5],
            api: e[4]
         }
      }), t.$on("action", e[37]);
      let l = e[13].length && Ru(e);
      return {
         c() {
            Ye(t.$$.fragment), n = F(), l && l.c(), o = z()
         },
         m(e, s) {
            Ge(t, e, s), N(e, n, s), l && l.m(e, s), N(e, o, s), r = !0
         },
         p(e, n) {
            const r = {};
            8192 & n[0] && (r.columns = e[13]), 16384 & n[0] && (r.areasMeta = e[14]), 32 & n[0] && (r.contentEl = e[5]), 16 & n[0] && (r.api = e[4]), t.$set(r), e[13].length ? l ? (l.p(e, n), 8192 & n[0] && Oe(l, 1)) : (l = Ru(e), l.c(), Oe(l, 1), l.m(o.parentNode, o)) : l && (Le(), Ae(l, 1, 1, (() => {
               l = null
            })), He())
         },
         i(e) {
            r || (Oe(t.$$.fragment, e), Oe(l), r = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), Ae(l), r = !1
         },
         d(e) {
            Be(t, e), e && L(n), l && l.d(e), e && L(o)
         }
      }
   }

   function Au(e) {
      let t, n;
      return t = new Yc({
         props: {
            api: e[4],
            $$slots: {
               default: [Yu, ({
                  startIndex: e,
                  endIndex: t,
                  byRow: n,
                  virtualContentEl: o
               }) => ({
                  44: e,
                  45: t,
                  46: n,
                  47: o
               }), ({
                  startIndex: e,
                  endIndex: t,
                  byRow: n,
                  virtualContentEl: o
               }) => [0, (e ? 8192 : 0) | (t ? 16384 : 0) | (n ? 32768 : 0) | (o ? 65536 : 0)]]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            16 & n[0] && (o.api = e[4]), 254226 & n[0] | 134340608 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ru(e) {
      let t, n, o = [],
         r = new Map,
         l = e[15];
      const s = e => e[48].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = Eu(e, l, t),
            i = s(n);
         r.set(i, o[t] = ju(i, n))
      }
      return {
         c() {
            for (let e = 0; e < o.length; e += 1) o[e].c();
            t = z()
         },
         m(e, r) {
            for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(e, r);
            N(e, t, r), n = !0
         },
         p(e, n) {
            254226 & n[0] && (l = e[15], Le(), o = Pe(o, n, s, 1, e, l, r, t.parentNode, qe, ju, t, Eu), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            for (let t = 0; t < o.length; t += 1) o[t].d(e);
            e && L(t)
         }
      }
   }

   function Fu(e, t) {
      let n, o, r;
      return o = new _c({
         props: {
            api: t[4],
            column: t[51],
            row: t[48],
            areaMeta: t[14][Pr(t[51].id, t[48].id)],
            cards: t[17][Pr(t[51].id, t[48].id)],
            cardTemplate: t[1],
            isMenuVisible: t[8]
         }
      }), o.$on("action", t[38]), {
         key: e,
         first: null,
         c() {
            n = z(), Ye(o.$$.fragment), this.first = n
         },
         m(e, t) {
            N(e, n, t), Ge(o, e, t), r = !0
         },
         p(e, n) {
            t = e;
            const r = {};
            16 & n[0] && (r.api = t[4]), 8192 & n[0] && (r.column = t[51]), 32768 & n[0] && (r.row = t[48]), 57344 & n[0] && (r.areaMeta = t[14][Pr(t[51].id, t[48].id)]), 172032 & n[0] && (r.cards = t[17][Pr(t[51].id, t[48].id)]), 2 & n[0] && (r.cardTemplate = t[1]), 256 & n[0] && (r.isMenuVisible = t[8]), o.$set(r)
         },
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(n), Be(o, e)
         }
      }
   }

   function zu(e) {
      let t, n, o = [],
         r = new Map,
         l = e[13];
      const s = e => e[51].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = Nu(e, l, t),
            i = s(n);
         r.set(i, o[t] = Fu(i, n))
      }
      return {
         c() {
            for (let e = 0; e < o.length; e += 1) o[e].c();
            t = F()
         },
         m(e, r) {
            for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(e, r);
            N(e, t, r), n = !0
         },
         p(e, n) {
            188690 & n[0] && (l = e[13], Le(), o = Pe(o, n, s, 1, e, l, r, t.parentNode, qe, Fu, t, Nu), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            for (let t = 0; t < o.length; t += 1) o[t].d(e);
            e && L(t)
         }
      }
   }

   function ju(e, t) {
      let n, o, r;
      return o = new Ys({
         props: {
            row: t[48],
            rows: t[15],
            collapsable: !!t[16],
            api: t[4],
            $$slots: {
               default: [zu]
            },
            $$scope: {
               ctx: t
            }
         }
      }), o.$on("action", t[39]), {
         key: e,
         first: null,
         c() {
            n = z(), Ye(o.$$.fragment), this.first = n
         },
         m(e, t) {
            N(e, n, t), Ge(o, e, t), r = !0
         },
         p(e, n) {
            t = e;
            const r = {};
            32768 & n[0] && (r.row = t[48]), 32768 & n[0] && (r.rows = t[15]), 65536 & n[0] && (r.collapsable = !!t[16]), 16 & n[0] && (r.api = t[4]), 188690 & n[0] | 134217728 & n[1] && (r.$$scope = {
               dirty: n,
               ctx: t
            }), o.$set(r)
         },
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(n), Be(o, e)
         }
      }
   }

   function qu(e) {
      let t, n, o = [],
         r = new Map,
         l = e[15];
      const s = e => e[48].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = Lu(e, l, t),
            i = s(n);
         r.set(i, o[t] = Uu(i, n))
      }
      return {
         c() {
            for (let e = 0; e < o.length; e += 1) o[e].c();
            t = z()
         },
         m(e, r) {
            for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(e, r);
            N(e, t, r), n = !0
         },
         p(e, n) {
            254226 & n[0] | 57344 & n[1] && (l = e[15], Le(), o = Pe(o, n, s, 1, e, l, r, t.parentNode, qe, Uu, t, Lu), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            for (let t = 0; t < o.length; t += 1) o[t].d(e);
            e && L(t)
         }
      }
   }

   function Pu(e) {
      let t, n;
      return t = new Ys({
         props: {
            row: e[48],
            rows: e[15],
            collapsable: !!e[16],
            api: e[4],
            $$slots: {
               default: [Vu]
            },
            $$scope: {
               ctx: e
            }
         }
      }), t.$on("action", e[36]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            32768 & n[0] && (o.row = e[48]), 32768 & n[0] && (o.rows = e[15]), 65536 & n[0] && (o.collapsable = !!e[16]), 16 & n[0] && (o.api = e[4]), 188690 & n[0] | 134275072 & n[1] && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ku(e, t) {
      let n, o, r;
      return o = new _c({
         props: {
            api: t[4],
            column: t[51],
            row: t[48],
            areaMeta: t[14][Pr(t[51].id, t[48].id)],
            cards: t[46][t[48].id] ? t[17][Pr(t[51].id, t[48].id)]?.slice(t[46][t[48].id].startIndex, t[46][t[48].id].endIndex) : t[17][Pr(t[51].id, t[48].id)]?.slice(t[44], t[45]),
            cardTemplate: t[1],
            isMenuVisible: t[8]
         }
      }), o.$on("action", t[35]), {
         key: e,
         first: null,
         c() {
            n = z(), Ye(o.$$.fragment), this.first = n
         },
         m(e, t) {
            N(e, n, t), Ge(o, e, t), r = !0
         },
         p(e, n) {
            t = e;
            const r = {};
            16 & n[0] && (r.api = t[4]), 8192 & n[0] && (r.column = t[51]), 32768 & n[0] && (r.row = t[48]), 57344 & n[0] && (r.areaMeta = t[14][Pr(t[51].id, t[48].id)]), 172032 & n[0] | 57344 & n[1] && (r.cards = t[46][t[48].id] ? t[17][Pr(t[51].id, t[48].id)]?.slice(t[46][t[48].id].startIndex, t[46][t[48].id].endIndex) : t[17][Pr(t[51].id, t[48].id)]?.slice(t[44], t[45])), 2 & n[0] && (r.cardTemplate = t[1]), 256 & n[0] && (r.isMenuVisible = t[8]), o.$set(r)
         },
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(n), Be(o, e)
         }
      }
   }

   function Vu(e) {
      let t, n, o = [],
         r = new Map,
         l = e[13];
      const s = e => e[51].id;
      for (let t = 0; t < l.length; t += 1) {
         let n = Hu(e, l, t),
            i = s(n);
         r.set(i, o[t] = Ku(i, n))
      }
      return {
         c() {
            for (let e = 0; e < o.length; e += 1) o[e].c();
            t = F()
         },
         m(e, r) {
            for (let t = 0; t < o.length; t += 1) o[t] && o[t].m(e, r);
            N(e, t, r), n = !0
         },
         p(e, n) {
            188690 & n[0] | 57344 & n[1] && (l = e[13], Le(), o = Pe(o, n, s, 1, e, l, r, t.parentNode, qe, Ku, t, Hu), He())
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < l.length; e += 1) Oe(o[e]);
               n = !0
            }
         },
         o(e) {
            for (let e = 0; e < o.length; e += 1) Ae(o[e]);
            n = !1
         },
         d(e) {
            for (let t = 0; t < o.length; t += 1) o[t].d(e);
            e && L(t)
         }
      }
   }

   function Uu(e, t) {
      let n, o, r, l = t[46][t[48].id].visible && Pu(t);
      return {
         key: e,
         first: null,
         c() {
            n = z(), l && l.c(), o = z(), this.first = n
         },
         m(e, t) {
            N(e, n, t), l && l.m(e, t), N(e, o, t), r = !0
         },
         p(e, n) {
            (t = e)[46][t[48].id].visible ? l ? (l.p(t, n), 32768 & n[0] | 32768 & n[1] && Oe(l, 1)) : (l = Pu(t), l.c(), Oe(l, 1), l.m(o.parentNode, o)) : l && (Le(), Ae(l, 1, 1, (() => {
               l = null
            })), He())
         },
         i(e) {
            r || (Oe(l), r = !0)
         },
         o(e) {
            Ae(l), r = !1
         },
         d(e) {
            e && L(n), l && l.d(e), e && L(o)
         }
      }
   }

   function Yu(e) {
      let t, n, o, r;
      t = new qc({
         props: {
            columns: e[13],
            areasMeta: e[14],
            contentEl: e[47],
            api: e[4]
         }
      }), t.$on("action", e[34]);
      let l = e[13].length && qu(e);
      return {
         c() {
            Ye(t.$$.fragment), n = F(), l && l.c(), o = z()
         },
         m(e, s) {
            Ge(t, e, s), N(e, n, s), l && l.m(e, s), N(e, o, s), r = !0
         },
         p(e, n) {
            const r = {};
            8192 & n[0] && (r.columns = e[13]), 16384 & n[0] && (r.areasMeta = e[14]), 65536 & n[1] && (r.contentEl = e[47]), 16 & n[0] && (r.api = e[4]), t.$set(r), e[13].length ? l ? (l.p(e, n), 8192 & n[0] && Oe(l, 1)) : (l = qu(e), l.c(), Oe(l, 1), l.m(o.parentNode, o)) : l && (Le(), Ae(l, 1, 1, (() => {
               l = null
            })), He())
         },
         i(e) {
            r || (Oe(t.$$.fragment, e), Oe(l), r = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), Ae(l), r = !1
         },
         d(e) {
            Be(t, e), e && L(n), l && l.d(e), e && L(o)
         }
      }
   }

   function Gu(e) {
      let t, n;
      return t = new Du({
         props: {
            api: e[4],
            config: e[3],
            shape: e[0]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            16 & n[0] && (o.api = e[4]), 8 & n[0] && (o.config = e[3]), 1 & n[0] && (o.shape = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Bu(e) {
      let t, n, o, r, l, c, a, d, u, p, f, m, $, h, g, v;
      const w = [Au, Ou],
         b = [];

      function y(e, t) {
         return "default:lazy" === e[2] ? 0 : 1
      }
      r = y(e), l = b[r] = w[r](e);
      let x = e[11] && !e[12] && !1 !== e[3].show && Gu(e);

      function S(t) {
         e[41](t)
      }
      let I = {
         at: "left-bottom",
         options: e[7],
         resolver: e[28],
         dataKey: "menuId"
      };
      return void 0 !== e[6] && (I.handler = e[6]), m = new Es({
         props: I
      }), he.push((() => Ue(m, "handler", S))), m.$on("click", e[29]), {
         c() {
            t = O("div"), n = O("div"), o = O("div"), l.c(), a = F(), x && x.c(), f = F(), Ye(m.$$.fragment), K(o, "class", "wx-content svelte-13hgtri"), K(o, "data-kanban-id", Or.scrollableContent), X(o, "wx-virtual-content", "default:lazy" === e[2]), K(n, "class", "wx-content-wrapper svelte-13hgtri"), K(n, "data-kanban-id", Or.content), X(n, "wx-virtual-content", "default:lazy" === e[2]), K(t, "class", "wx-kanban svelte-13hgtri"), K(t, "data-wx-widget", Or.kanban), X(t, "wx-dragged", !!e[12])
         },
         m(l, s) {
            N(l, t, s), T(t, n), T(n, o), b[r].m(o, null), e[40](o), T(t, a), x && x.m(t, null), N(l, f, s), Ge(m, l, s), h = !0, g || (v = [j(o, "click", (function () {
               i(e[6]) && e[6].apply(this, arguments)
            })), k(c = Ol.call(null, n, {
               api: e[4],
               readonly: !1 === e[10]
            })), k(d = Hl.call(null, t, {
               api: e[4],
               readonly: !1 === e[9]
            })), k(u = Fl.call(null, t, {
               api: e[4],
               readonly: !1 === e[11],
               locale: e[18]
            })), k(p = Al.call(null, t, {
               api: e[4],
               tick: xe
            }))], g = !0)
         },
         p(s, a) {
            let f = r;
            r = y(e = s), r === f ? b[r].p(e, a) : (Le(), Ae(b[f], 1, 1, (() => {
               b[f] = null
            })), He(), l = b[r], l ? l.p(e, a) : (l = b[r] = w[r](e), l.c()), Oe(l, 1), l.m(o, null)), (!h || 4 & a[0]) && X(o, "wx-virtual-content", "default:lazy" === e[2]), c && i(c.update) && 1040 & a[0] && c.update.call(null, {
               api: e[4],
               readonly: !1 === e[10]
            }), (!h || 4 & a[0]) && X(n, "wx-virtual-content", "default:lazy" === e[2]), e[11] && !e[12] && !1 !== e[3].show ? x ? (x.p(e, a), 6152 & a[0] && Oe(x, 1)) : (x = Gu(e), x.c(), Oe(x, 1), x.m(t, null)) : x && (Le(), Ae(x, 1, 1, (() => {
               x = null
            })), He()), d && i(d.update) && 528 & a[0] && d.update.call(null, {
               api: e[4],
               readonly: !1 === e[9]
            }), u && i(u.update) && 2064 & a[0] && u.update.call(null, {
               api: e[4],
               readonly: !1 === e[11],
               locale: e[18]
            }), p && i(p.update) && 16 & a[0] && p.update.call(null, {
               api: e[4],
               tick: xe
            }), (!h || 4096 & a[0]) && X(t, "wx-dragged", !!e[12]);
            const g = {};
            128 & a[0] && (g.options = e[7]), !$ && 64 & a[0] && ($ = !0, g.handler = e[6], Se((() => $ = !1))), m.$set(g)
         },
         i(e) {
            h || (Oe(l), Oe(x), Oe(m.$$.fragment, e), h = !0)
         },
         o(e) {
            Ae(l), Ae(x), Ae(m.$$.fragment, e), h = !1
         },
         d(n) {
            n && L(t), b[r].d(), e[40](null), x && x.d(), n && L(f), Be(m, n), g = !1, s(v)
         }
      }
   }

   function Wu(e, t, n) {
      let o, r, l, s, i, c, a, d, u, f, m, $, h, {
            editorShape: g
         } = t,
         {
            cardTemplate: v
         } = t,
         {
            layout: w
         } = t,
         {
            editor: b
         } = t,
         {
            api: y
         } = t;
      const x = fe("wx-i18n").getGroup("kanban");
      let {
         columns: k,
         rowKey: S,
         rows: I,
         readonly: _,
         dragItemId: M,
         areasMeta: C,
         cardsMap: T,
         cardShape: D,
         cards: E
      } = y.getReactiveState();
      p(e, k, (e => n(13, d = e))), p(e, S, (e => n(16, m = e))), p(e, I, (e => n(15, f = e))), p(e, _, (e => n(33, c = e))), p(e, M, (e => n(12, a = e))), p(e, C, (e => n(14, u = e))), p(e, T, (e => n(17, $ = e))), p(e, D, (e => n(32, i = e))), p(e, E, (e => n(31, s = e)));
      const {
         showModal: N
      } = fe("wx-helpers");
      let L = null,
         H = [];
      const O = {},
         A = {};
      return e.$$set = e => {
         "editorShape" in e && n(0, g = e.editorShape), "cardTemplate" in e && n(1, v = e.cardTemplate), "layout" in e && n(2, w = e.layout), "editor" in e && n(3, b = e.editor), "api" in e && n(4, y = e.api)
      }, e.$$.update = () => {
         4 & e.$$.dirty[1] && n(11, ({
            edit: o,
            select: r,
            dnd: l
         } = c), o, (n(10, r), n(33, c)), (n(9, l), n(33, c))), 1073741824 & e.$$.dirty[0] | 3 & e.$$.dirty[1] && s.forEach((e => {
            var t;
            n(30, O[e.id] = ((e, t) => {
               const n = t.menu.items({
                  card: e
               });
               return n && n.length ? n.map((e => Object.assign(Object.assign({}, e), {
                  text: x(e.text)
               }))) : null
            })(e, i), O), n(8, A[e.id] = !(!i.menu.show || !(null === (t = O[e.id]) || void 0 === t ? void 0 : t.length)), A)
         }))
      }, [g, v, w, b, y, h, L, H, A, l, r, o, a, d, u, f, m, $, x, k, S, I, _, M, C, T, D, E, function (e) {
         var t;
         const o = s.find((t => t.id == e));
         return o && ((null === (t = y.getState().selected) || void 0 === t ? void 0 : t.length) > 1 && y.exec("select-card", {
            id: parseInt(e)
         }), n(7, H = O[o.id] || [])), o
      }, function (e) {
         const {
            action: t,
            item: n
         } = e.detail;
         if (t) {
            if (t.onClick) return void t.onClick({
               id: t.id,
               item: t,
               card: n
            });
            switch (t.id) {
               case "delete-card":
                  N({
                     message: x("Would you like to delete this card?")
                  }).then((() => {
                     y.exec("delete-card", {
                        id: n.id
                     })
                  })).catch((() => {}));
                  break;
               case "set-edit":
                  y.exec("set-edit", {
                     cardId: n.id
                  });
                  break;
               case "duplicate-card":
                  y.exec("duplicate-card", {
                     id: n.id,
                     card: {
                        label: `${x("Duplicate of")} ${n.label}`
                     }
                  })
            }
         }
      }, O, s, i, c, function (t) {
         me.call(this, e, t)
      }, function (t) {
         me.call(this, e, t)
      }, function (t) {
         me.call(this, e, t)
      }, function (t) {
         me.call(this, e, t)
      }, function (t) {
         me.call(this, e, t)
      }, function (t) {
         me.call(this, e, t)
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            h = e, n(5, h)
         }))
      }, function (e) {
         L = e, n(6, L)
      }]
   }
   class Ju extends Je {
      constructor(e) {
         super(), We(this, e, Wu, Bu, c, {
            editorShape: 0,
            cardTemplate: 1,
            layout: 2,
            editor: 3,
            api: 4
         }, null, [-1, -1])
      }
   }

   function Xu(e) {
      let t, n;
      return t = new Ju({
         props: {
            api: e[3],
            editorShape: e[1],
            cardTemplate: e[2],
            layout: e[4],
            editor: e[0]
         }
      }), t.$on("action", e[5]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            2 & n && (o.editorShape = e[1]), 4 & n && (o.cardTemplate = e[2]), 16 & n && (o.layout = e[4]), 1 & n && (o.editor = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Zu(e) {
      let t, n;
      return t = new Yo({
         props: {
            $$slots: {
               default: [Xu]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            33554455 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Qu(e) {
      let t, n;
      return t = new Cr({
         props: {
            words: {
               ...Ze,
               ...Xe
            },
            optional: !0,
            $$slots: {
               default: [Zu]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, [n]) {
            const o = {};
            33554455 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function ep(e, t, n) {
      let o, {
            columns: r
         } = t,
         {
            rows: l = null
         } = t,
         {
            cards: s
         } = t,
         {
            cardShape: i = Nr
         } = t,
         {
            columnShape: c = null
         } = t,
         {
            rowShape: a = null
         } = t,
         {
            editorShape: d = null
         } = t,
         {
            readonly: u = !1
         } = t,
         {
            columnKey: p = "column"
         } = t,
         {
            rowKey: f = ""
         } = t,
         {
            scrollType: m = "default"
         } = t,
         {
            renderType: $ = "default"
         } = t,
         {
            cardHeight: h = null
         } = t,
         {
            cardTemplate: g = null
         } = t,
         {
            editor: v = Hr
         } = t,
         {
            history: w = !0
         } = t,
         {
            currentUser: b = null
         } = t,
         {
            links: y = null
         } = t,
         {
            editorAutoSave: x = !0
         } = t;
      const k = ue(),
         S = new _l((e => Dr(e)), {
            history: w
         });
      let I = new ct(k);
      S.out.setNext(I.exec);
      const _ = function (e, t) {
         let n = t;
         return {
            exec: e.in.exec.bind(e.in),
            on: e.out.on.bind(e.out),
            intercept: e.in.on.bind(e.in),
            getState: e.getState.bind(e),
            getReactiveState: e.getReactive.bind(e),
            setNext: e => {
               n.setNext(e.exec), n = e
            },
            getStores: () => ({
               data: e
            }),
            getCard: t => {
               const {
                  cards: n
               } = e.getState();
               return n.find((e => e.id == t))
            },
            serialize: () => {
               const {
                  cards: t,
                  links: n,
                  columns: o,
                  rows: r
               } = e.getState();
               return {
                  cards: t,
                  links: n,
                  columns: o,
                  rows: r
               }
            },
            export: new jl(e),
            undo: e.undo.bind(e),
            redo: e.redo.bind(e),
            getAreaCards: (t, n) => {
               const {
                  cardsMap: o
               } = e.getState();
               return o[Pr(t, n)]
            }
         }
      }(S, I);
      return e.$$set = e => {
         "columns" in e && n(6, r = e.columns), "rows" in e && n(7, l = e.rows), "cards" in e && n(8, s = e.cards), "cardShape" in e && n(9, i = e.cardShape), "columnShape" in e && n(10, c = e.columnShape), "rowShape" in e && n(11, a = e.rowShape), "editorShape" in e && n(1, d = e.editorShape), "readonly" in e && n(12, u = e.readonly), "columnKey" in e && n(13, p = e.columnKey), "rowKey" in e && n(14, f = e.rowKey), "scrollType" in e && n(15, m = e.scrollType), "renderType" in e && n(16, $ = e.renderType), "cardHeight" in e && n(17, h = e.cardHeight), "cardTemplate" in e && n(2, g = e.cardTemplate), "editor" in e && n(0, v = e.editor), "history" in e && n(18, w = e.history), "currentUser" in e && n(19, b = e.currentUser), "links" in e && n(20, y = e.links), "editorAutoSave" in e && n(21, x = e.editorAutoSave)
      }, e.$$.update = () => {
         2097152 & e.$$.dirty && !1 === x && n(0, v.autoSave = !1, v), 98304 & e.$$.dirty && n(4, o = `${m}:${$}`), 1736656 & e.$$.dirty && S.init({
            columnKey: p,
            rowKey: f,
            columns: r,
            rows: l,
            cards: s,
            cardsMap: {},
            cardsMeta: {},
            cardShape: i,
            columnShape: c,
            rowShape: a,
            readonly: u,
            layout: o,
            cardHeight: h,
            currentUser: b,
            links: y
         })
      }, [v, d, g, _, o, ({
         detail: {
            action: e,
            data: t
         }
      }) => {
         _.exec(e, t)
      }, r, l, s, i, c, a, u, p, f, m, $, h, w, b, y, x]
   }
   let tp = class extends Je {
      constructor(e) {
         super(), We(this, e, ep, Qu, c, {
            columns: 6,
            rows: 7,
            cards: 8,
            cardShape: 9,
            columnShape: 10,
            rowShape: 11,
            editorShape: 1,
            readonly: 12,
            columnKey: 13,
            rowKey: 14,
            scrollType: 15,
            renderType: 16,
            cardHeight: 17,
            cardTemplate: 2,
            editor: 0,
            history: 18,
            currentUser: 19,
            links: 20,
            editorAutoSave: 21,
            api: 3
         })
      }
      get api() {
         return this.$$.ctx[3]
      }
   };

   function np(e) {
      let t, n;
      return t = new mr({
         props: {
            fonts: e[0]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.fonts = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function op(e) {
      let t, n;
      return t = new mr({
         props: {
            fonts: e[0],
            $$slots: {
               default: [rp]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.fonts = e[0]), 8 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function rp(e) {
      let t;
      const n = e[2].default,
         o = f(n, e, e[3], null);
      return {
         c() {
            o && o.c()
         },
         m(e, n) {
            o && o.m(e, n), t = !0
         },
         p(e, r) {
            o && o.p && (!t || 8 & r) && h(o, n, e, e[3], t ? $(n, e[3], r, null) : g(e[3]), null)
         },
         i(e) {
            t || (Oe(o, e), t = !0)
         },
         o(e) {
            Ae(o, e), t = !1
         },
         d(e) {
            o && o.d(e)
         }
      }
   }

   function lp(e) {
      let t, n, o, r;
      const l = [op, np],
         s = [];
      return t = function (e, t) {
         return e[1] && e[1].default ? 0 : 1
      }(e), n = s[t] = l[t](e), {
         c() {
            n.c(), o = z()
         },
         m(e, n) {
            s[t].m(e, n), N(e, o, n), r = !0
         },
         p(e, [t]) {
            n.p(e, t)
         },
         i(e) {
            r || (Oe(n), r = !0)
         },
         o(e) {
            Ae(n), r = !1
         },
         d(e) {
            s[t].d(e), e && L(o)
         }
      }
   }

   function sp(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t;
      const l = b(o);
      let {
         fonts: s = !0
      } = t;
      const i = l;
      return e.$$set = e => {
         "fonts" in e && n(0, s = e.fonts), "$$scope" in e && n(3, r = e.$$scope)
      }, [s, i, o, r]
   }

   function ip(e) {
      let t, n;
      return t = new br({
         props: {
            fonts: e[0]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.fonts = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function cp(e) {
      let t, n;
      return t = new br({
         props: {
            fonts: e[0],
            $$slots: {
               default: [ap]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.fonts = e[0]), 8 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function ap(e) {
      let t;
      const n = e[2].default,
         o = f(n, e, e[3], null);
      return {
         c() {
            o && o.c()
         },
         m(e, n) {
            o && o.m(e, n), t = !0
         },
         p(e, r) {
            o && o.p && (!t || 8 & r) && h(o, n, e, e[3], t ? $(n, e[3], r, null) : g(e[3]), null)
         },
         i(e) {
            t || (Oe(o, e), t = !0)
         },
         o(e) {
            Ae(o, e), t = !1
         },
         d(e) {
            o && o.d(e)
         }
      }
   }

   function dp(e) {
      let t, n, o, r;
      const l = [cp, ip],
         s = [];
      return t = function (e, t) {
         return e[1] && e[1].default ? 0 : 1
      }(e), n = s[t] = l[t](e), {
         c() {
            n.c(), o = z()
         },
         m(e, n) {
            s[t].m(e, n), N(e, o, n), r = !0
         },
         p(e, [t]) {
            n.p(e, t)
         },
         i(e) {
            r || (Oe(n), r = !0)
         },
         o(e) {
            Ae(n), r = !1
         },
         d(e) {
            s[t].d(e), e && L(o)
         }
      }
   }

   function up(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t;
      const l = b(o);
      let {
         fonts: s = !0
      } = t;
      const i = l;
      return e.$$set = e => {
         "fonts" in e && n(0, s = e.fonts), "$$scope" in e && n(3, r = e.$$scope)
      }, [s, i, o, r]
   }

   function pp(e) {
      let t, n;
      return t = new Sr({
         props: {
            fonts: e[0]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.fonts = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function fp(e) {
      let t, n;
      return t = new Sr({
         props: {
            fonts: e[0],
            $$slots: {
               default: [mp]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.fonts = e[0]), 8 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function mp(e) {
      let t;
      const n = e[2].default,
         o = f(n, e, e[3], null);
      return {
         c() {
            o && o.c()
         },
         m(e, n) {
            o && o.m(e, n), t = !0
         },
         p(e, r) {
            o && o.p && (!t || 8 & r) && h(o, n, e, e[3], t ? $(n, e[3], r, null) : g(e[3]), null)
         },
         i(e) {
            t || (Oe(o, e), t = !0)
         },
         o(e) {
            Ae(o, e), t = !1
         },
         d(e) {
            o && o.d(e)
         }
      }
   }

   function $p(e) {
      let t, n, o, r;
      const l = [fp, pp],
         s = [];
      return t = function (e, t) {
         return e[1] && e[1].default ? 0 : 1
      }(e), n = s[t] = l[t](e), {
         c() {
            n.c(), o = z()
         },
         m(e, n) {
            s[t].m(e, n), N(e, o, n), r = !0
         },
         p(e, [t]) {
            n.p(e, t)
         },
         i(e) {
            r || (Oe(n), r = !0)
         },
         o(e) {
            Ae(n), r = !1
         },
         d(e) {
            s[t].d(e), e && L(o)
         }
      }
   }

   function hp(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t;
      const l = b(o);
      let {
         fonts: s = !0
      } = t;
      const i = l;
      return e.$$set = e => {
         "fonts" in e && n(0, s = e.fonts), "$$scope" in e && n(3, r = e.$$scope)
      }, [s, i, o, r]
   }

   function gp(e) {
      let t;
      const n = e[1].default,
         o = f(n, e, e[2], null);
      return {
         c() {
            o && o.c()
         },
         m(e, n) {
            o && o.m(e, n), t = !0
         },
         p(e, r) {
            o && o.p && (!t || 4 & r) && h(o, n, e, e[2], t ? $(n, e[2], r, null) : g(e[2]), null)
         },
         i(e) {
            t || (Oe(o, e), t = !0)
         },
         o(e) {
            Ae(o, e), t = !1
         },
         d(e) {
            o && o.d(e)
         }
      }
   }

   function vp(e) {
      let t, n, o = e[0] && gp(e);
      return {
         c() {
            t = O("div"), o && o.c(), K(t, "class", "wx-toolbar svelte-6ipgdp"), K(t, "data-wx-widget", Or.toolbar)
         },
         m(e, r) {
            N(e, t, r), o && o.m(t, null), n = !0
         },
         p(e, n) {
            e[0] ? o ? (o.p(e, n), 1 & n && Oe(o, 1)) : (o = gp(e), o.c(), Oe(o, 1), o.m(t, null)) : o && (Le(), Ae(o, 1, 1, (() => {
               o = null
            })), He())
         },
         i(e) {
            n || (Oe(o), n = !0)
         },
         o(e) {
            Ae(o), n = !1
         },
         d(e) {
            e && L(t), o && o.d()
         }
      }
   }

   function wp(e) {
      let t, n;
      return t = new Cr({
         props: {
            words: {
               ...Ze,
               ...Xe
            },
            optional: !0,
            $$slots: {
               default: [vp]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, [n]) {
            const o = {};
            5 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function bp(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t, {
         api: l
      } = t;
      return e.$$set = e => {
         "api" in e && n(0, l = e.api), "$$scope" in e && n(2, r = e.$$scope)
      }, [l, o, r]
   }
   let yp = class extends Je {
      constructor(e) {
         super(), We(this, e, bp, wp, c, {
            api: 0
         })
      }
   };

   function xp(e, t, n) {
      const o = e.slice();
      return o[24] = t[n], o
   }

   function kp(e) {
      let n, o, r;
      return o = new Yl({
         props: {
            name: "wxi-close",
            clickable: !0,
            click: e[13]
         }
      }), {
         c() {
            n = O("div"), Ye(o.$$.fragment), K(n, "class", "wx-close-icon svelte-1ddhpaz")
         },
         m(e, t) {
            N(e, n, t), Ge(o, n, null), r = !0
         },
         p: t,
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(n), Be(o)
         }
      }
   }

   function Sp(e) {
      let t, n;
      return t = new Ot({
         props: {
            cancel: e[9],
            $$slots: {
               default: [Tp]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            4210704 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ip(e) {
      let t, n;
      const o = e[16].default,
         r = f(o, e, e[22], null);
      return {
         c() {
            t = O("div"), r && r.c(), K(t, "class", "wx-settings svelte-1ddhpaz")
         },
         m(e, o) {
            N(e, t, o), r && r.m(t, null), n = !0
         },
         p(e, t) {
            r && r.p && (!n || 4194304 & t) && h(r, o, e, e[22], n ? $(o, e[22], t, null) : g(e[22]), null)
         },
         i(e) {
            n || (Oe(r, e), n = !0)
         },
         o(e) {
            Ae(r, e), n = !1
         },
         d(e) {
            e && L(t), r && r.d(e)
         }
      }
   }

   function _p(e) {
      let n;
      return {
         c() {
            n = O("div"), n.textContent = `${e[8]("No results")}`, K(n, "class", "wx-list-item wx-no-results svelte-1ddhpaz")
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         d(e) {
            e && L(n)
         }
      }
   }

   function Mp(e) {
      let t, n = e[4],
         o = [];
      for (let t = 0; t < n.length; t += 1) o[t] = Cp(xp(e, n, t));
      return {
         c() {
            t = O("div");
            for (let e = 0; e < o.length; e += 1) o[e].c();
            K(t, "class", "wx-results svelte-1ddhpaz")
         },
         m(e, n) {
            N(e, t, n);
            for (let e = 0; e < o.length; e += 1) o[e] && o[e].m(t, null)
         },
         p(e, r) {
            if (4112 & r) {
               let l;
               for (n = e[4], l = 0; l < n.length; l += 1) {
                  const s = xp(e, n, l);
                  o[l] ? o[l].p(s, r) : (o[l] = Cp(s), o[l].c(), o[l].m(t, null))
               }
               for (; l < o.length; l += 1) o[l].d(1);
               o.length = n.length
            }
         },
         d(e) {
            e && L(t), H(o, e)
         }
      }
   }

   function Cp(e) {
      let t, n, o, r, l, s, i = e[24].label + "";

      function c() {
         return e[20](e[24])
      }
      return {
         c() {
            t = O("div"), n = O("span"), o = R(i), r = F(), K(n, "class", "wx-list-item-text svelte-1ddhpaz"), K(t, "class", "wx-list-item svelte-1ddhpaz")
         },
         m(e, i) {
            N(e, t, i), T(t, n), T(n, o), T(t, r), l || (s = j(t, "click", c), l = !0)
         },
         p(t, n) {
            e = t, 16 & n && i !== (i = e[24].label + "") && U(o, i)
         },
         d(e) {
            e && L(t), l = !1, s()
         }
      }
   }

   function Tp(e) {
      let t, n, o, r = e[14]?.default && Ip(e);

      function l(e, t) {
         return e[4] ? Mp : _p
      }
      let s = l(e),
         i = s(e);
      return {
         c() {
            t = O("div"), r && r.c(), n = F(), i.c(), K(t, "class", "wx-search-popup svelte-1ddhpaz")
         },
         m(e, l) {
            N(e, t, l), r && r.m(t, null), T(t, n), i.m(t, null), o = !0
         },
         p(e, o) {
            e[14]?.default ? r ? (r.p(e, o), 16384 & o && Oe(r, 1)) : (r = Ip(e), r.c(), Oe(r, 1), r.m(t, n)) : r && (Le(), Ae(r, 1, 1, (() => {
               r = null
            })), He()), s === (s = l(e)) && i ? i.p(e, o) : (i.d(1), i = s(e), i && (i.c(), i.m(t, null)))
         },
         i(e) {
            o || (Oe(r), o = !0)
         },
         o(e) {
            Ae(r), o = !1
         },
         d(e) {
            e && L(t), r && r.d(), i.d()
         }
      }
   }

   function Dp(e) {
      let t, n, o, r, l, i, c, a, d, u, p;
      o = new Yl({
         props: {
            name: "wxi-search"
         }
      });
      let f = !!e[0] && kp(e),
         m = e[5] && Sp(e);
      return {
         c() {
            t = O("div"), n = O("div"), Ye(o.$$.fragment), r = F(), l = O("input"), c = F(), f && f.c(), a = F(), m && m.c(), K(n, "class", "wx-search-icon svelte-1ddhpaz"), K(l, "id", i = `${e[1]}`), l.readOnly = e[2], K(l, "placeholder", e[3]), K(l, "class", "svelte-1ddhpaz"), K(t, "class", "wx-search svelte-1ddhpaz"), K(t, "tabindex", 1)
         },
         m(s, i) {
            N(s, t, i), T(t, n), Ge(o, n, null), T(t, r), T(t, l), Y(l, e[0]), e[19](l), T(t, c), f && f.m(t, null), T(t, a), m && m.m(t, null), e[21](t), d = !0, u || (p = [j(l, "input", e[18]), j(l, "focus", e[10]), j(l, "blur", e[11]), j(t, "click", P(e[17]))], u = !0)
         },
         p(e, [n]) {
            (!d || 2 & n && i !== (i = `${e[1]}`)) && K(l, "id", i), (!d || 4 & n) && (l.readOnly = e[2]), (!d || 8 & n) && K(l, "placeholder", e[3]), 1 & n && l.value !== e[0] && Y(l, e[0]), e[0] ? f ? (f.p(e, n), 1 & n && Oe(f, 1)) : (f = kp(e), f.c(), Oe(f, 1), f.m(t, a)) : f && (Le(), Ae(f, 1, 1, (() => {
               f = null
            })), He()), e[5] ? m ? (m.p(e, n), 32 & n && Oe(m, 1)) : (m = Sp(e), m.c(), Oe(m, 1), m.m(t, null)) : m && (Le(), Ae(m, 1, 1, (() => {
               m = null
            })), He())
         },
         i(e) {
            d || (Oe(o.$$.fragment, e), Oe(f), Oe(m), d = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), Ae(f), Ae(m), d = !1
         },
         d(n) {
            n && L(t), Be(o), e[19](null), f && f.d(), m && m.d(), e[21](null), u = !1, s(p)
         }
      }
   }

   function Ep(e, t, n) {
      let {
         $$slots: o = {},
         $$scope: r
      } = t;
      const l = b(o),
         s = fe("wx-i18n").getGroup("kanban");
      let {
         value: i = ""
      } = t, {
         id: c = Jl()
      } = t, {
         readonly: a = !1
      } = t, {
         focus: d = !1
      } = t, {
         placeholder: u = s("Search")
      } = t, {
         searchResults: p = null
      } = t;
      const f = ue();
      let m, $, h = !1;

      function g(e) {
         f("action", {
            action: "result-click",
            id: e
         }), n(5, h = !1)
      }
      d && ce((() => m.focus()));
      return e.$$set = e => {
         "value" in e && n(0, i = e.value), "id" in e && n(1, c = e.id), "readonly" in e && n(2, a = e.readonly), "focus" in e && n(15, d = e.focus), "placeholder" in e && n(3, u = e.placeholder), "searchResults" in e && n(4, p = e.searchResults), "$$scope" in e && n(22, r = e.$$scope)
      }, [i, c, a, u, p, h, m, $, s, function (e) {
         $.contains(e.target) || (n(5, h = !1), n(0, i = ""))
      }, function () {
         n(5, h = !0), f("action", {
            action: "search-focus"
         })
      }, function () {
         f("action", {
            action: "search-blur"
         })
      }, g, function () {
         n(0, i = "")
      }, l, d, o, function (t) {
         me.call(this, e, t)
      }, function () {
         i = this.value, n(0, i)
      }, function (e) {
         he[e ? "unshift" : "push"]((() => {
            m = e, n(6, m)
         }))
      }, e => g(e.id), function (e) {
         he[e ? "unshift" : "push"]((() => {
            $ = e, n(7, $)
         }))
      }, r]
   }
   class Np extends Je {
      constructor(e) {
         super(), We(this, e, Ep, Dp, c, {
            value: 0,
            id: 1,
            readonly: 2,
            focus: 15,
            placeholder: 3,
            searchResults: 4
         })
      }
   }

   function Lp(e) {
      let t, n, o, r, l, s;

      function i(t) {
         e[11](t)
      }
      let c = {
         options: e[1]
      };
      return void 0 !== e[3].by && (c.value = e[3].by), r = new go({
         props: c
      }), he.push((() => Ue(r, "value", i))), {
         c() {
            t = O("div"), n = O("div"), n.textContent = `${e[5]("Search in")}:`, o = F(), Ye(r.$$.fragment), K(n, "class", "wx-title svelte-py827f"), K(t, "class", "wx-select svelte-py827f")
         },
         m(e, l) {
            N(e, t, l), T(t, n), T(t, o), Ge(r, t, null), s = !0
         },
         p(e, t) {
            const n = {};
            2 & t && (n.options = e[1]), !l && 8 & t && (l = !0, n.value = e[3].by, Se((() => l = !1))), r.$set(n)
         },
         i(e) {
            s || (Oe(r.$$.fragment, e), s = !0)
         },
         o(e) {
            Ae(r.$$.fragment, e), s = !1
         },
         d(e) {
            e && L(t), Be(r)
         }
      }
   }

   function Hp(e) {
      let t, n, o = e[0] && Lp(e);
      return {
         c() {
            o && o.c(), t = z()
         },
         m(e, r) {
            o && o.m(e, r), N(e, t, r), n = !0
         },
         p(e, n) {
            e[0] ? o ? (o.p(e, n), 1 & n && Oe(o, 1)) : (o = Lp(e), o.c(), Oe(o, 1), o.m(t.parentNode, t)) : o && (Le(), Ae(o, 1, 1, (() => {
               o = null
            })), He())
         },
         i(e) {
            n || (Oe(o), n = !0)
         },
         o(e) {
            Ae(o), n = !1
         },
         d(e) {
            o && o.d(e), e && L(t)
         }
      }
   }

   function Op(e) {
      let t, n, o;

      function r(t) {
         e[12](t)
      }
      let l = {
         searchResults: e[2],
         $$slots: {
            default: [Hp]
         },
         $$scope: {
            ctx: e
         }
      };
      return void 0 !== e[3].value && (l.value = e[3].value), t = new Np({
         props: l
      }), he.push((() => Ue(t, "value", r))), t.$on("action", e[7]), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, n) {
            Ge(t, e, n), o = !0
         },
         p(e, [o]) {
            const r = {};
            4 & o && (r.searchResults = e[2]), 8203 & o && (r.$$scope = {
               dirty: o,
               ctx: e
            }), !n && 8 & o && (n = !0, r.value = e[3].value, Se((() => n = !1))), t.$set(r)
         },
         i(e) {
            o || (Oe(t.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), o = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Ap(e, n, o) {
      let r, l, s, i = t;
      e.$$.on_destroy.push((() => i()));
      const c = fe("wx-i18n").getGroup("kanban");
      let {
         api: a
      } = n, {
         showOptions: d = !0
      } = n, {
         options: f = [{
            id: null,
            label: c("Everywhere")
         }, {
            id: "label",
            label: c("Label")
         }, {
            id: "description",
            label: c("Description")
         }]
      } = n, m = null;
      const $ = Bc({
         value: "",
         by: f[0].id
      }, (({
         value: e,
         by: t
      }) => {
         const n = f.find((e => e.id === t));
         a.exec("set-search", {
            value: e,
            by: t,
            searchRule: null == n ? void 0 : n.searchRule
         })
      }));
      let h;
      return p(e, $, (e => o(3, l = e))), e.$$set = e => {
         "api" in e && o(8, a = e.api), "showOptions" in e && o(0, d = e.showOptions), "options" in e && o(1, f = e.options)
      }, e.$$.update = () => {
         256 & e.$$.dirty && (o(4, r = a && a.getReactiveState().cardsMeta), i(), i = u(r, (e => o(10, s = e)))), 1284 & e.$$.dirty && s && (o(2, m = Object.keys(s).reduce(((e, t) => (s[t].found && e.push(null == a ? void 0 : a.getCard(t)), e)), [])), m.length || o(2, m = null)), 776 & e.$$.dirty && (h || (o(9, h = e => {
            (null == e ? void 0 : e.value) === l.value && (null == e ? void 0 : e.by) === (null == l ? void 0 : l.by) || $.reset(e)
         }), a.on("set-search", h)))
      }, [d, f, m, l, r, c, $, function ({
         detail: e
      }) {
         const {
            id: t,
            action: n
         } = e;
         switch (n) {
            case "result-click":
               a.exec("select-card", {
                  id: t
               });
               break;
            case "search-focus":
               l.value && a.exec("set-search", {
                  value: l.value,
                  by: l.by
               })
         }
      }, a, h, s, function (t) {
         e.$$.not_equal(l.by, t) && (l.by = t, $.set(l))
      }, function (t) {
         e.$$.not_equal(l.value, t) && (l.value = t, $.set(l))
      }]
   }
   class Rp extends Je {
      constructor(e) {
         super(), We(this, e, Ap, Op, c, {
            api: 8,
            showOptions: 0,
            options: 1
         })
      }
   }

   function Fp(e) {
      let t, n, o, r, l;
      return n = new Yl({
         props: {
            name: e[0]
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), K(t, "class", "wx-control svelte-1gz87jm"), K(t, "title", e[1]), X(t, "wx-disabled", e[2])
         },
         m(s, i) {
            N(s, t, i), Ge(n, t, null), o = !0, r || (l = j(t, "click", e[3]), r = !0)
         },
         p(e, [r]) {
            const l = {};
            1 & r && (l.name = e[0]), n.$set(l), (!o || 2 & r) && K(t, "title", e[1]), (!o || 4 & r) && X(t, "wx-disabled", e[2])
         },
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            e && L(t), Be(n), r = !1, l()
         }
      }
   }

   function zp(e, t, n) {
      let {
         name: o = ""
      } = t, {
         icon: r
      } = t, {
         label: l
      } = t, {
         disabled: s = !1
      } = t, {
         click: i = null
      } = t;
      return e.$$set = e => {
         "name" in e && n(4, o = e.name), "icon" in e && n(0, r = e.icon), "label" in e && n(1, l = e.label), "disabled" in e && n(2, s = e.disabled), "click" in e && n(5, i = e.click)
      }, [r, l, s, function () {
         i && i(o)
      }, o, i]
   }
   class jp extends Je {
      constructor(e) {
         super(), We(this, e, zp, Fp, c, {
            name: 4,
            icon: 0,
            label: 1,
            disabled: 2,
            click: 5
         })
      }
   }

   function qp(e) {
      let n, o;
      return n = new jp({
         props: {
            click: e[1],
            label: e[0]("Add new row"),
            icon: "wxi-table-row-plus-after"
         }
      }), {
         c() {
            Ye(n.$$.fragment)
         },
         m(e, t) {
            Ge(n, e, t), o = !0
         },
         p: t,
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            Be(n, e)
         }
      }
   }

   function Pp(e, t, n) {
      let {
         api: o
      } = t;
      const r = fe("wx-i18n").getGroup("kanban");
      return e.$$set = e => {
         "api" in e && n(2, o = e.api)
      }, [r, function () {
         o.exec("add-row", {
            id: tt(),
            row: {
               label: r("Untitled")
            }
         })
      }, o]
   }
   class Kp extends Je {
      constructor(e) {
         super(), We(this, e, Pp, qp, c, {
            api: 2
         })
      }
   }

   function Vp(e) {
      let n, o;
      return n = new jp({
         props: {
            click: e[1],
            label: e[0]("Add new column"),
            icon: "wxi-table-column-plus-after"
         }
      }), {
         c() {
            Ye(n.$$.fragment)
         },
         m(e, t) {
            Ge(n, e, t), o = !0
         },
         p: t,
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            Be(n, e)
         }
      }
   }

   function Up(e, t, n) {
      let {
         api: o
      } = t;
      const r = fe("wx-i18n").getGroup("kanban");
      return e.$$set = e => {
         "api" in e && n(2, o = e.api)
      }, [r, function () {
         o.exec("add-column", {
            id: tt(),
            column: {
               label: r("Untitled")
            }
         })
      }, o]
   }
   class Yp extends Je {
      constructor(e) {
         super(), We(this, e, Up, Vp, c, {
            api: 2
         })
      }
   }

   function Gp(e) {
      let t, n, o, r, l, s = e[2].text + "";
      return n = new Yl({
         props: {
            name: "wxi-close",
            click: e[5]
         }
      }), {
         c() {
            t = O("div"), Ye(n.$$.fragment), o = F(), r = R(s), K(t, "class", "wx-preserve svelte-1gqx3c6")
         },
         m(e, s) {
            N(e, t, s), Ge(n, t, null), T(t, o), T(t, r), l = !0
         },
         p(e, t) {
            (!l || 4 & t) && s !== (s = e[2].text + "") && U(r, s)
         },
         i(e) {
            l || (Oe(n.$$.fragment, e), l = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), l = !1
         },
         d(e) {
            e && L(t), Be(n)
         }
      }
   }

   function Bp(e) {
      let n, o, r;
      return o = new Yl({
         props: {
            name: "wxi-sort"
         }
      }), {
         c() {
            n = O("div"), Ye(o.$$.fragment), K(n, "class", "wx-control svelte-1gqx3c6"), K(n, "title", e[3]("Sort"))
         },
         m(e, t) {
            N(e, n, t), Ge(o, n, null), r = !0
         },
         p: t,
         i(e) {
            r || (Oe(o.$$.fragment, e), r = !0)
         },
         o(e) {
            Ae(o.$$.fragment, e), r = !1
         },
         d(e) {
            e && L(n), Be(o)
         }
      }
   }

   function Wp(e) {
      let t, n, o, r = e[2] && Gp(e);
      return n = new As({
         props: {
            options: e[0],
            at: "left-bottom",
            $$slots: {
               default: [Bp]
            },
            $$scope: {
               ctx: e
            }
         }
      }), n.$on("click", e[4]), {
         c() {
            r && r.c(), t = F(), Ye(n.$$.fragment)
         },
         m(e, l) {
            r && r.m(e, l), N(e, t, l), Ge(n, e, l), o = !0
         },
         p(e, [o]) {
            e[2] ? r ? (r.p(e, o), 4 & o && Oe(r, 1)) : (r = Gp(e), r.c(), Oe(r, 1), r.m(t.parentNode, t)) : r && (Le(), Ae(r, 1, 1, (() => {
               r = null
            })), He());
            const l = {};
            1 & o && (l.options = e[0]), 256 & o && (l.$$scope = {
               dirty: o,
               ctx: e
            }), n.$set(l)
         },
         i(e) {
            o || (Oe(r), Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(r), Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            r && r.d(e), e && L(t), Be(n, e)
         }
      }
   }

   function Jp(e, n, o) {
      let r, l = t;
      e.$$.on_destroy.push((() => l()));
      const s = fe("wx-i18n").getGroup("kanban");
      let i, {
            api: c
         } = n,
         {
            options: a = null
         } = n,
         d = null;
      return e.$$set = e => {
         "api" in e && o(6, c = e.api), "options" in e && o(0, a = e.options)
      }, e.$$.update = () => {
         1 & e.$$.dirty && (o(0, a = Array.isArray(a) ? a : [{
            by: "label",
            dir: "asc",
            text: "Label (a-z)",
            id: 7
         }, {
            by: "label",
            dir: "desc",
            text: "Label (z-a)",
            id: 8
         }, {
            by: "description",
            dir: "asc",
            text: "Description (a-z)",
            id: 9
         }, {
            by: "description",
            dir: "desc",
            text: "Description (z-a)",
            id: 10
         }]), o(0, a = a.map((e => {
            let {
               id: t,
               text: n,
               label: o,
               dir: r
            } = e;
            return Object.assign(Object.assign({}, e), {
               id: t || Jl(),
               text: s(n || o),
               icon: "asc" === r ? "wxi-asc" : "wxi-desc"
            })
         })))), 195 & e.$$.dirty && (i || (o(1, i = c.getReactiveState().sort), l(), l = u(i, (e => o(7, r = e)))), (null == r ? void 0 : r.preserve) ? o(2, d = a.find((e => e.by === r.by && e.dir === r.dir))) : o(2, d = null))
      }, [a, i, d, s, function (e) {
         const t = null == e ? void 0 : e.detail.action;
         if (t) {
            const e = a.find((e => e.id === t.id));
            e && c.exec("set-sort", {
               by: e.by,
               dir: e.dir
            })
         }
      }, function () {
         c.exec("set-sort", null)
      }, c, r]
   }
   class Xp extends Je {
      constructor(e) {
         super(), We(this, e, Jp, Wp, c, {
            api: 6,
            options: 0
         })
      }
   }

   function Zp(e) {
      let n;
      return {
         c() {
            n = O("div"), K(n, "class", "wx-spacer svelte-10uxtjc")
         },
         m(e, t) {
            N(e, n, t)
         },
         p: t,
         i: t,
         o: t,
         d(e) {
            e && L(n)
         }
      }
   }
   class Qp extends Je {
      constructor(e) {
         super(), We(this, e, null, Zp, c, {})
      }
   }

   function ef(e) {
      let t, n;
      return t = new jp({
         props: {
            click: e[2],
            label: e[1]("Undo"),
            disabled: !e[0],
            icon: "wxi-undo"
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, [n]) {
            const o = {};
            1 & n && (o.disabled = !e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function tf(e, t, n) {
      let o, r, {
         api: l
      } = t;
      const s = fe("wx-i18n").getGroup("kanban");
      const {
         history: i
      } = l.getReactiveState();
      return p(e, i, (e => n(5, r = e))), e.$$set = e => {
         "api" in e && n(4, l = e.api)
      }, e.$$.update = () => {
         32 & e.$$.dirty && n(0, o = r.undo.length > 0)
      }, [o, s, function () {
         l.getStores().data.undo()
      }, i, l, r]
   }
   class nf extends Je {
      constructor(e) {
         super(), We(this, e, tf, ef, c, {
            api: 4
         })
      }
   }

   function of (e) {
      let t, n;
      return t = new jp({
         props: {
            click: e[2],
            label: e[1]("Redo"),
            disabled: !e[0],
            icon: "wxi-redo"
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, [n]) {
            const o = {};
            1 & n && (o.disabled = !e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function rf(e, t, n) {
      let o, r;
      var l;
      let {
         api: s
      } = t;
      const i = fe("wx-i18n").getGroup("kanban");
      const {
         history: c
      } = s.getReactiveState();
      return p(e, c, (e => n(6, r = e))), e.$$set = e => {
         "api" in e && n(4, s = e.api)
      }, e.$$.update = () => {
         96 & e.$$.dirty && n(0, o = (null === n(5, l = r.redo) || void 0 === l ? void 0 : l.length) > 0)
      }, [o, i, function () {
         s.getStores().data.redo()
      }, c, s, l, r]
   }
   class lf extends Je {
      constructor(e) {
         super(), We(this, e, rf, of , c, {
            api: 4
         })
      }
   }

   function sf(e) {
      let t, n;
      return {
         c() {
            t = new Q(!1), n = z(), t.a = n
         },
         m(o, r) {
            t.m(e[0], o, r), N(o, n, r)
         },
         p(e, n) {
            1 & n && t.p(e[0])
         },
         d(e) {
            e && L(n), e && t.d()
         }
      }
   }

   function cf(e) {
      let n, o = e[0] && sf(e);
      return {
         c() {
            o && o.c(), n = z()
         },
         m(e, t) {
            o && o.m(e, t), N(e, n, t)
         },
         p(e, [t]) {
            e[0] ? o ? o.p(e, t) : (o = sf(e), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null)
         },
         i: t,
         o: t,
         d(e) {
            o && o.d(e), e && L(n)
         }
      }
   }

   function af(e, t, n) {
      let r;
      const l = ["template"];
      let s = w(t, l),
         {
            template: i
         } = t;
      return e.$$set = e => {
         t = o(o({}, t), v(e)), n(2, s = w(t, l)), "template" in e && n(1, i = e.template)
      }, e.$$.update = () => {
         n(0, r = "function" == typeof i ? i(Object.assign({}, s)) : i)
      }, [r, i]
   }
   class df extends Je {
      constructor(e) {
         super(), We(this, e, af, cf, c, {
            template: 1
         })
      }
   }
   class uf {
      constructor(e) {
         this._api = e
      }
      on(e, t) {
         this._api.on(e, t)
      }
      exec(e, t) {
         this._api.exec(e, t)
      }
   }
   const pf = {
      material: class extends Je {
         constructor(e) {
            super(), We(this, e, sp, lp, c, {
               fonts: 0
            })
         }
      },
      willow: class extends Je {
         constructor(e) {
            super(), We(this, e, up, dp, c, {
               fonts: 0
            })
         }
      },
      "willow-dark": class extends Je {
         constructor(e) {
            super(), We(this, e, hp, $p, c, {
               fonts: 0
            })
         }
      }
   };

   function ff(e) {
      let t, n;
      return t = new Mu({
         props: {
            api: e[0],
            config: e[1],
            shape: e[2]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, [n]) {
            const o = {};
            1 & n && (o.api = e[0]), 2 & n && (o.config = e[1]), 4 & n && (o.shape = e[2]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function mf(e, t, n) {
      let {
         api: o
      } = t, {
         config: r
      } = t, {
         shape: l
      } = t;
      return e.$$set = e => {
         "api" in e && n(0, o = e.api), "config" in e && n(1, r = e.config), "shape" in e && n(2, l = e.shape)
      }, [o, r, l]
   }
   class $f extends Je {
      constructor(e) {
         super(), We(this, e, mf, ff, c, {
            api: 0,
            config: 1,
            shape: 2
         })
      }
   }

   function hf(e, t, n) {
      const o = e.slice();
      return o[2] = t[n], o
   }

   function gf(e) {
      let t, n;
      return t = new df({
         props: {
            template: e[2].type
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            2 & n && (o.template = e[2].type), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function vf(e) {
      let t, n;
      return t = new df({
         props: {
            template: e[2].template
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            2 & n && (o.template = e[2].template), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function wf(e) {
      let t, n;
      return t = new Kp({
         props: {
            api: e[0]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.api = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function bf(e) {
      let t, n;
      return t = new Yp({
         props: {
            api: e[0]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.api = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function yf(e) {
      let t, n;
      return t = new Xp({
         props: {
            api: e[0],
            options: e[2].options
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.api = e[0]), 2 & n && (o.options = e[2].options), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function xf(e) {
      let n, o;
      return n = new Qp({}), {
         c() {
            Ye(n.$$.fragment)
         },
         m(e, t) {
            Ge(n, e, t), o = !0
         },
         p: t,
         i(e) {
            o || (Oe(n.$$.fragment, e), o = !0)
         },
         o(e) {
            Ae(n.$$.fragment, e), o = !1
         },
         d(e) {
            Be(n, e)
         }
      }
   }

   function kf(e) {
      let t, n;
      return t = new lf({
         props: {
            api: e[0]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.api = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Sf(e) {
      let t, n;
      return t = new nf({
         props: {
            api: e[0]
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.api = e[0]), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function If(e) {
      let t, n;
      return t = new Rp({
         props: {
            api: e[0],
            options: e[2].options
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, n) {
            const o = {};
            1 & n && (o.api = e[0]), 2 & n && (o.options = e[2].options), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function _f(e) {
      let t, n, o, r;
      const l = [If, Sf, kf, xf, yf, bf, wf, vf, gf],
         s = [];

      function i(e, t) {
         return "search" === e[2].type ? 0 : "undo" === e[2].type ? 1 : "redo" === e[2].type ? 2 : "spacer" === e[2].type ? 3 : "sort" === e[2].type ? 4 : "addColumn" === e[2].type ? 5 : "addRow" === e[2].type ? 6 : "template" === e[2].type && e[2].template ? 7 : e[2] ? 8 : -1
      }
      return ~(t = i(e)) && (n = s[t] = l[t](e)), {
         c() {
            n && n.c(), o = z()
         },
         m(e, n) {
            ~t && s[t].m(e, n), N(e, o, n), r = !0
         },
         p(e, r) {
            let c = t;
            t = i(e), t === c ? ~t && s[t].p(e, r) : (n && (Le(), Ae(s[c], 1, 1, (() => {
               s[c] = null
            })), He()), ~t ? (n = s[t], n ? n.p(e, r) : (n = s[t] = l[t](e), n.c()), Oe(n, 1), n.m(o.parentNode, o)) : n = null)
         },
         i(e) {
            r || (Oe(n), r = !0)
         },
         o(e) {
            Ae(n), r = !1
         },
         d(e) {
            ~t && s[t].d(e), e && L(o)
         }
      }
   }

   function Mf(e) {
      let t, n, o = e[1],
         r = [];
      for (let t = 0; t < o.length; t += 1) r[t] = _f(hf(e, o, t));
      const l = e => Ae(r[e], 1, 1, (() => {
         r[e] = null
      }));
      return {
         c() {
            for (let e = 0; e < r.length; e += 1) r[e].c();
            t = z()
         },
         m(e, o) {
            for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, o);
            N(e, t, o), n = !0
         },
         p(e, n) {
            if (3 & n) {
               let s;
               for (o = e[1], s = 0; s < o.length; s += 1) {
                  const l = hf(e, o, s);
                  r[s] ? (r[s].p(l, n), Oe(r[s], 1)) : (r[s] = _f(l), r[s].c(), Oe(r[s], 1), r[s].m(t.parentNode, t))
               }
               for (Le(), s = o.length; s < r.length; s += 1) l(s);
               He()
            }
         },
         i(e) {
            if (!n) {
               for (let e = 0; e < o.length; e += 1) Oe(r[e]);
               n = !0
            }
         },
         o(e) {
            r = r.filter(Boolean);
            for (let e = 0; e < r.length; e += 1) Ae(r[e]);
            n = !1
         },
         d(e) {
            H(r, e), e && L(t)
         }
      }
   }

   function Cf(e) {
      let t, n;
      return t = new yp({
         props: {
            api: e[0],
            $$slots: {
               default: [Mf]
            },
            $$scope: {
               ctx: e
            }
         }
      }), {
         c() {
            Ye(t.$$.fragment)
         },
         m(e, o) {
            Ge(t, e, o), n = !0
         },
         p(e, [n]) {
            const o = {};
            1 & n && (o.api = e[0]), 35 & n && (o.$$scope = {
               dirty: n,
               ctx: e
            }), t.$set(o)
         },
         i(e) {
            n || (Oe(t.$$.fragment, e), n = !0)
         },
         o(e) {
            Ae(t.$$.fragment, e), n = !1
         },
         d(e) {
            Be(t, e)
         }
      }
   }

   function Tf(e, t, n) {
      let {
         api: o
      } = t, {
         items: r = []
      } = t;
      return e.$$set = e => {
         "api" in e && n(0, o = e.api), "items" in e && n(1, r = e.items)
      }, [o, r]
   }
   class Df extends Je {
      constructor(e) {
         super(), We(this, e, Tf, Cf, c, {
            api: 0,
            items: 1
         })
      }
   }
   const Ef = Symbol();
   class Nf {
      constructor() {
         this._awaitAddingQueue = [], this._queue = {}, this._idPool = {}, this._backId = [], this.add = this.add.bind(this)
      }
      resolve(e, t) {
         const n = this._backId[t];
         if (void 0 === n) return e;
         const o = n[e];
         return void 0 === o ? e : o
      }
      add(e, t, n) {
         if (n.debounce) {
            const o = `${e}"/"${t.id}`,
               r = this._queue[o];
            return r && clearTimeout(r), void(this._queue[o] = setTimeout((() => {
               this.add(e, t, {
                  ...n,
                  debounce: !1
               })
            }), n.debounce))
         }
         const o = this.tryExec(e, t, n);
         null === o ? this._awaitAddingQueue.push({
            action: e,
            data: t,
            proc: n
         }) : o.then((e => {
            if (e && e.id && e.id != t.id && nt(t.id)) {
               if (this._idPool[t.id] = e.id, n.kind) {
                  let o = this._backId[n.kind];
                  o || (o = this._backId[n.kind] = {}), o[e.id] = t.id
               }
               this.execQueue()
            }
         }))
      }
      tryExec(e, t, n) {
         const o = this.exec(e, t, n);
         return null === o && this._awaitAddingQueue.push({
            action: e,
            data: t,
            proc: n
         }), o
      }
      exec(e, t, n) {
         const o = this.correctID(t, n.ignoreID ? t.id : null);
         return o === Ef ? null : n.handler(o, e, t)
      }
      correctID(e, t) {
         let n = null;
         for (const o in e) {
            if ("$meta" === o) continue;
            const r = e[o];
            if ("object" == typeof r) {
               const l = this.correctID(r, t);
               if (l !== r) {
                  if (l === Ef) return Ef;
                  null === n && (n = {
                     ...e
                  }), n[o] = l
               }
            } else if (r !== t && nt(r)) {
               const t = this._idPool[r];
               if (!t) return Ef;
               null === n && (n = {
                  ...e
               }), n[o] = t
            }
         }
         return n || e
      }
      execQueue() {
         this._awaitAddingQueue = this._awaitAddingQueue.map((e => this.tryExec(e.action, e.data, e.proc) ? null : e)).filter((e => null !== e))
      }
   }
   class Lf {
      constructor(e) {
         const {
            url: t,
            token: n
         } = e;
         this._url = t, this._token = n, this._mode = 1, this._seed = 1, this._queue = [], this.data = {}, this.api = {}, this._events = {}
      }
      headers() {
         return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Remote-Token": this._token
         }
      }
      fetch(e, t) {
         const n = {
            credentials: "include",
            headers: this.headers()
         };
         return t && (n.method = "POST", n.body = t), fetch(e, n).then((e => e.json()))
      }
      load(e) {
         return e && (this._url = e), this.fetch(this._url).then((e => this.parse(e)))
      }
      parse(e) {
         const {
            key: t,
            websocket: n
         } = e;
         t && (this._token = e.key);
         for (const t in e.data) this.data[t] = e.data[t];
         for (const t in e.api) {
            const n = this.api[t] = {},
               o = e.api[t];
            for (const e in o) n[e] = this._wrapper(t + "." + e)
         }
         return n && this.connect(), this
      }
      connect() {
         const e = this._socket;
         e && (this._socket = null, e.onclose = function () {}, e.close()), this._mode = 2, this._socket = function (e, t, n, o) {
            let r = t;
            "/" === r[0] && (r = document.location.protocol + "//" + document.location.host + t), r = r.replace(/^http(s|):/, "ws$1:");
            const l = -1 != r.indexOf("?") ? "&" : "?";
            r = `${r}${l}token=${n}&ws=1`;
            const s = new WebSocket(r);
            return s.onclose = () => setTimeout((() => e.connect()), 2e3), s.onmessage = t => {
               const n = JSON.parse(t.data);
               switch (n.action) {
                  case "result":
                     e.result(n.body, []);
                     break;
                  case "event":
                     e.fire(n.body.name, n.body.value);
                     break;
                  case "start":
                     o();
                     break;
                  default:
                     e.onError(n.data)
               }
            }, s
         }(this, this._url, this._token, (() => (this._mode = 3, this._send(), this._resubscribe(), this)))
      }
      _wrapper(e) {
         return function () {
            const t = [].slice.call(arguments);
            let n = null;
            const o = new Promise(((o, r) => {
               n = {
                  data: {
                     id: this._uid(),
                     name: e,
                     args: t
                  },
                  status: 1,
                  resolve: o,
                  reject: r
               }, this._queue.push(n)
            }));
            return this.onCall(n, o), 3 === this._mode ? this._send(n) : setTimeout((() => this._send()), 1), o
         }.bind(this)
      }
      _uid() {
         return (this._seed++).toString()
      }
      _send(e) {
         if (2 == this._mode) return void setTimeout((() => this._send()), 100);
         const t = e ? [e] : this._queue.filter((e => 1 === e.status));
         if (!t.length) return;
         const n = t.map((e => (e.status = 2, e.data)));
         3 !== this._mode ? this.fetch(this._url, JSON.stringify(n)).catch((e => this.onError(e))).then((e => this.result(e, n))) : this._socket.send(JSON.stringify({
            action: "call",
            body: n
         }))
      }
      result(e, t) {
         const n = {};
         if (e)
            for (let t = 0; t < e.length; t++) n[e[t].id] = e[t];
         else
            for (let e = 0; e < t.length; e++) n[t[e].id] = {
               id: t[e].id,
               error: "Network Error",
               data: null
            };
         for (let e = this._queue.length - 1; e >= 0; e--) {
            const t = this._queue[e],
               o = n[t.data.id];
            o && (this.onResponse(t, o), o.error ? t.reject(o.error) : t.resolve(o.data), this._queue.splice(e, 1))
         }
      }
      on(e, t) {
         const n = this._uid();
         let o = this._events[e];
         const r = !!o;
         return r || (o = this._events[e] = []), o.push({
            id: n,
            handler: t
         }), r || 3 != this._mode || this._socket.send(JSON.stringify({
            action: "subscribe",
            name: e
         })), {
            name: e,
            id: n
         }
      }
      _resubscribe() {
         if (3 == this._mode)
            for (const e in this._events) this._socket.send(JSON.stringify({
               action: "subscribe",
               name: e
            }))
      }
      detach(e) {
         if (!e) {
            if (3 == this._mode)
               for (const e in this._events) this._socket.send(JSON.stringify({
                  action: "unsubscribe",
                  key: e
               }));
            return void(this._events = {})
         }
         const {
            id: t,
            name: n
         } = e, o = this._events[n];
         if (o) {
            const e = o.filter((e => e.id != t));
            e.length ? this._events[n] = e : (delete this._events[n], 3 == this._mode && this._socket.send(JSON.stringify({
               action: "unsubscribe",
               name: n
            })))
         }
      }
      fire(e, t) {
         const n = this._events[e];
         if (n)
            for (let e = 0; e < n.length; e++) n[e].handler(t)
      }
      onError(e) {
         return null
      }
      onCall(e, t) {}
      onResponse(e, t) {}
   }
   return e.Editor = class {
      constructor(e, t) {
         this.container = "string" == typeof e ? document.querySelector(e) : e, this.config = t, this._init()
      }
      destructor() {
         this._component.$destroy(), this._component = this.api = this.events = null
      }
      setConfig(e) {
         e && (this.config = Object.assign(Object.assign({}, this.config), e), this._init())
      }
      setLocale(e) {
         this.setConfig({
            locale: e
         })
      }
      _init() {
         var e;
         this._component && this.destructor();
         const t = new Map([
            ["wx-i18n", rs(null === (e = this.config) || void 0 === e ? void 0 : e.locale)]
         ]);
         this._component = new $f({
            target: this.container,
            props: this._configToProps(this.config),
            context: t
         }), this.events = new uf(this.api)
      }
      _configToProps(e) {
         return e
      }
   }, e.Kanban = class {
      constructor(e, t) {
         this.container = "string" == typeof e ? document.querySelector(e) : e, this.config = t, this._init()
      }
      destructor() {
         this._kanban.$destroy(), this._kanban = this.api = this.events = null
      }
      setConfig(e) {
         const t = this.serialize();
         this.config = Object.assign(Object.assign(Object.assign({}, this.config), t), e), this._init()
      }
      parse(e) {
         const {
            cards: t,
            links: n,
            columns: o,
            rows: r
         } = e;
         (t || n || o || r) && (t && (this.config.cards = t), n && (this.config.links = n), o && (this.config.columns = o), r && (this.config.rows = r), this._kanban.$set(this._configToProps(this.config)))
      }
      serialize() {
         const {
            cards: e,
            links: t,
            columns: n,
            rows: o
         } = this.api.getState();
         return {
            cards: e,
            links: t,
            columns: n,
            rows: o
         }
      }
      undo() {
         this.api.undo()
      }
      redo() {
         this.api.redo()
      }
      getCard(e) {
         return this.api.getCard(e)
      }
      getAreaCards(e, t) {
         return this.api.getAreaCards(e, t)
      }
      getSelection() {
         return this.api.getState().selected
      }
      addCard(e) {
         this.api.exec("add-card", e)
      }
      updateCard(e) {
         this.api.exec("update-card", e)
      }
      duplicateCard(e) {
         this.api.exec("duplicate-card", e)
      }
      deleteCard(e) {
         this.api.exec("delete-card", e)
      }
      moveCard(e) {
         this.api.exec("move-card", e)
      }
      addColumn(e) {
         this.api.exec("add-column", e)
      }
      updateColumn(e) {
         this.api.exec("update-column", e)
      }
      addRow(e) {
         this.api.exec("add-row", e)
      }
      updateRow(e) {
         this.api.exec("update-row", e)
      }
      moveColumn(e) {
         this.api.exec("move-column", e)
      }
      moveRow(e) {
         this.api.exec("move-row", e)
      }
      deleteColumn(e) {
         this.api.exec("delete-column", e)
      }
      deleteRow(e) {
         this.api.exec("delete-row", e)
      }
      addLink(e) {
         this.api.exec("add-link", e)
      }
      deleteLink(e) {
         this.api.exec("delete-link", e)
      }
      addComment(e) {
         this.api.exec("add-comment", e)
      }
      updateComment(e) {
         this.api.exec("update-comment", e)
      }
      deleteComment(e) {
         this.api.exec("delete-comment", e)
      }
      selectCard(e) {
         this.api.exec("select-card", e)
      }
      unselectCard(e) {
         this.api.exec("unselect-card", e)
      }
      setSearch(e) {
         this.api.exec("set-search", e)
      }
      setSort(e) {
         this.api.exec("set-sort", e)
      }
      setEdit(e) {
         this.api.exec("set-edit", e)
      }
      scroll(e) {
         this.api.exec("scroll", e)
      }
      setLocale(e) {
         this.setConfig({
            locale: e
         })
      }
      _init() {
         var e, t;
         this._kanban && this.destructor();
         const n = Ll(this.container, null === (e = this.config.theme) || void 0 === e ? void 0 : e.name, "material"),
            o = new Map([
               ["wx-i18n", rs(this.config.locale)],
               ["wx-theme", n]
            ]);
         pf[n] && new pf[n]({
            target: this.container,
            props: {
               fonts: null === (t = this.config.theme) || void 0 === t ? void 0 : t.fonts
            }
         }), this._kanban = new tp({
            target: this.container,
            props: this.config,
            context: o
         }), this.api = this._kanban.api, this.events = new uf(this.api), this.export = this.api.export
      }
      _configToProps(e) {
         return e
      }
   }, e.RemoteEvents = class {
      constructor(e, t) {
         const n = new Lf({
            url: e,
            token: t
         });
         n.fetch = function (e, t) {
            const n = {
               headers: this.headers()
            };
            return t && (n.method = "POST", n.body = t), fetch(e, n).then((e => e.json()))
         }, this._ready = n.load().then((e => this._remote = e))
      }
      ready() {
         return this._ready
      }
      on(e, t) {
         this.ready().then((n => {
            if ("string" == typeof e) n.on(e, t);
            else
               for (const t in e) n.on(t, e[t])
         }))
      }
   }, e.RestDataProvider = class extends st {
      constructor(e) {
         super(), this._customHeaders = {}, this._url = e, this._queue = new Nf;
         const t = {
               "add-card": {
                  ignoreID: !0,
                  handler: e => (e.card = this.prepareCard(e.card), this.send("cards", "POST", e))
               },
               "update-card": {
                  debounce: 500,
                  handler: e => (e.card = this.prepareCard(e.card), this.send(`cards/${e.id}`, "PUT", e))
               },
               "move-card": {
                  handler: e => this.send(`cards/${e.id}/move`, "PUT", e)
               },
               "delete-card": {
                  handler: e => this.send(`cards/${e.id}`, "DELETE")
               },
               "add-column": {
                  ignoreID: !0,
                  handler: e => this.send("columns", "POST", e)
               },
               "update-column": {
                  debounce: 500,
                  handler: e => this.send(`columns/${e.id}`, "PUT", e)
               },
               "move-column": {
                  handler: e => this.send(`columns/${e.id}/move`, "PUT", e)
               },
               "delete-column": {
                  handler: e => this.send(`columns/${e.id}`, "DELETE")
               },
               "add-row": {
                  ignoreID: !0,
                  handler: e => this.send("rows", "POST", e)
               },
               "update-row": {
                  debounce: 500,
                  handler: e => this.send(`rows/${e.id}`, "PUT", e)
               },
               "move-row": {
                  handler: e => this.send(`rows/${e.id}/move`, "PUT", e)
               },
               "delete-row": {
                  handler: e => this.send(`rows/${e.id}`, "DELETE")
               },
               "add-vote": {
                  handler: e => this.send(`cards/${e.cardId}/vote`, "POST")
               },
               "delete-vote": {
                  handler: e => this.send(`cards/${e.cardId}/vote`, "DELETE")
               },
               "add-comment": {
                  ignoreID: !0,
                  handler: e => this.send(`cards/${e.cardId}/comments`, "POST", e.comment)
               },
               "update-comment": {
                  handler: e => this.send(`cards/${e.cardId}/comments/${e.id}`, "PUT", e.comment)
               },
               "delete-comment": {
                  handler: e => this.send(`cards/${e.cardId}/comments/${e.id}`, "DELETE")
               },
               "add-link": {
                  ignoreID: !0,
                  handler: e => this.send("links", "POST", e)
               },
               "delete-link": {
                  handler: e => this.send(`links/${e.id}`, "DELETE")
               }
            },
            n = this.getHandlers(t);
         for (const e in n) this.on(e, (t => {
            t.skipProvider || this._queue.add(e, t, n[e])
         }))
      }
      getCards() {
         return this.send("cards", "GET").then(this.parseCards)
      }
      getColumns() {
         return this.send("columns", "GET")
      }
      getRows() {
         return this.send("rows", "GET")
      }
      getUsers() {
         return this.send("users", "GET")
      }
      getLinks() {
         return this.send("links", "GET")
      }
      getHandlers(e) {
         return e
      }
      setHeaders(e) {
         this._customHeaders = e
      }
      getIDResolver() {
         return this._queue.resolve.bind(this._queue)
      }
      send(e, t, n, o = {}) {
         const r = {
            method: t,
            headers: {
               "Content-Type": "application/json",
               ...o,
               ...this._customHeaders
            }
         };
         return n && (r.body = "object" == typeof n ? JSON.stringify(n) : n), fetch(`${this._url}/${e}`, r).then((e => e.json()))
      }
      parseCards(e) {
         return e.forEach((e => (e.end_date && (e.end_date = new Date(e.end_date)), e.start_date && (e.start_date = new Date(e.start_date)), e))), e
      }
      prepareCard(e) {
         return e ? {
            ...e,
            users: e.users || null
         } : null
      }
   }, e.Toolbar = class {
      constructor(e, t) {
         this.container = "string" == typeof e ? document.querySelector(e) : e, this.config = t, this._init()
      }
      destructor() {
         this._toolbar.$destroy(), this._toolbar = this.api = this.events = null
      }
      setConfig(e) {
         e && (this.config = Object.assign(Object.assign({}, this.config), e), this._init())
      }
      setLocale(e) {
         this.setConfig({
            locale: e
         })
      }
      _init() {
         this._toolbar && this.destructor();
         const e = new Map([
            ["wx-i18n", rs(this.config.locale)],
            ["wx-theme", Ll(this.container, this.config.theme, "material")]
         ]);
         this._toolbar = new Df({
            target: this.container,
            props: this._configToProps(this.config),
            context: e
         }), this.events = new uf(this.api)
      }
      _configToProps(e) {
         let t = [{
            type: "search"
         }, {
            type: "spacer"
         }, {
            type: "undo"
         }, {
            type: "redo"
         }, {
            type: "sort"
         }, {
            type: "addColumn"
         }, {
            type: "addRow"
         }];
         return e.items && (t = this._normalizeItems(e.items)), Object.assign(Object.assign({}, e), {
            items: t
         })
      }
      _normalizeItems(e) {
         return e.map((e => "string" == typeof e ? {
            type: e
         } : "function" == typeof e ? {
            type: "template",
            template: e
         } : "template" in e && !e.type ? {
            type: "template",
            template: e.template
         } : e))
      }
   }, e.defaultCardShape = Nr, e.defaultEditorConfig = Hr, e.defaultEditorShape = Lr, e.getDefaultCardMenuItems = Rr, e.getDefaultColumnMenuItems = Fr, e.getDefaultRowMenuItems = zr, e.kanbanUpdates = function (e, t) {
      return {
         cards: function (n) {
            const o = function (e) {
               return "id" in e && (e.id = t(e.id, 1)), "column" in e && (e.column = t(e.column, 3)), "row" in e && (e.row = t(e.row, 2)), e
            }(n.card);
            switch (o.start_date = o.start_date ? new Date(o.start_date) : null, o.end_date = o.end_date ? new Date(o.end_date) : null, n.type) {
               case "add-card":
                  e.exec(n.type, {
                     skipProvider: !0,
                     card: o,
                     select: !1
                  });
                  break;
               case "update-card":
                  e.exec("update-card", {
                     skipProvider: !0,
                     id: o.id,
                     card: o
                  });
                  break;
               case "delete-card":
                  e.exec("delete-card", {
                     skipProvider: !0,
                     id: o.id
                  });
                  break;
               case "move-card":
                  e.exec("move-card", {
                     skipProvider: !0,
                     id: o.id,
                     rowId: o.row,
                     columnId: o.column,
                     before: t(n.before, 1)
                  })
            }
         },
         columns: function (n) {
            const o = function (e) {
               return "id" in e && (e.id = t(e.id, 3)), e
            }(n.column);
            switch (n.type) {
               case "add-column":
                  e.exec("add-column", {
                     skipProvider: !0,
                     column: o
                  });
                  break;
               case "delete-column":
                  e.exec("delete-column", {
                     skipProvider: !0,
                     id: o.id
                  });
                  break;
               case "update-column":
                  e.exec("update-column", {
                     skipProvider: !0,
                     id: o.id,
                     column: o
                  });
                  break;
               case "move-column":
                  e.exec("move-column", {
                     skipProvider: !0,
                     id: o.id,
                     before: t(n.before, 3)
                  })
            }
         },
         rows: function (n) {
            const o = function (e) {
               return "id" in e && (e.id = t(e.id, 2)), e
            }(n.row);
            switch (n.type) {
               case "add-row":
                  e.exec("add-row", {
                     skipProvider: !0,
                     row: o
                  });
                  break;
               case "delete-row":
                  e.exec("delete-row", {
                     skipProvider: !0,
                     id: o.id
                  });
                  break;
               case "update-row":
                  e.exec("update-row", {
                     skipProvider: !0,
                     id: o.id,
                     row: o
                  });
                  break;
               case "move-row":
                  e.exec("move-row", {
                     skipProvider: !0,
                     id: o.id,
                     before: t(n.before, 2)
                  })
            }
         },
         links: function (n) {
            const o = function (e) {
               return "id" in e && (e.id = t(e.id, 4)), "masterId" in e && (e.masterId = t(e.masterId, 1)), "slaveId" in e && (e.slaveId = t(e.slaveId, 1)), e
            }(n.link);
            switch (n.type) {
               case "add-link":
                  e.exec("add-link", {
                     skipProvider: !0,
                     id: o.id,
                     link: o
                  });
                  break;
               case "delete-link":
                  e.exec("delete-link", {
                     skipProvider: !0,
                     id: o.id
                  })
            }
         }
      }
   }, e.tempID = tt, e.template = function (e) {
      return new Proxy(df, {
         construct(t, [n]) {
            const o = n.props || {};
            return o.template = e, n.props = o, new t(n)
         }
      })
   }, e
}({});