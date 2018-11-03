var ReactResponsiveSelect = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var l = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var l in e)
          n.d(
            r,
            l,
            function(t) {
              return e[t];
            }.bind(null, l),
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 52))
  );
})([
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.INITIALISE = 'INITIALISE'),
      (t.UPDATE_VIA_PROPS = 'UPDATE_VIA_PROPS'),
      (t.SET_IS_DRAGGING = 'SET_IS_DRAGGING'),
      (t.SET_OPTIONS_PANEL_OPEN = 'SET_OPTIONS_PANEL_OPEN'),
      (t.SET_OPTIONS_PANEL_CLOSED = 'SET_OPTIONS_PANEL_CLOSED'),
      (t.SET_SINGLESELECT_OPTIONS = 'SET_SINGLESELECT_OPTIONS'),
      (t.SET_MULTISELECT_OPTIONS = 'SET_MULTISELECT_OPTIONS'),
      (t.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION =
        'SET_OPTIONS_PANEL_CLOSED_NO_SELECTION'),
      (t.SET_OPTIONS_PANEL_CLOSED_ONBLUR = 'SET_OPTIONS_PANEL_CLOSED_ONBLUR'),
      (t.SET_NEXT_SELECTED_INDEX = 'SET_NEXT_SELECTED_INDEX'),
      (t.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC =
        'SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC');
  },
  function(e, t, n) {
    e.exports = n(37)();
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(38);
    Object.defineProperty(t, 'ReactResponsiveSelectProps', {
      enumerable: !0,
      get: function() {
        return r.ReactResponsiveSelectProps;
      },
    });
    var l = n(35);
    Object.defineProperty(t, 'MultiSelectProps', {
      enumerable: !0,
      get: function() {
        return l.MultiSelectProps;
      },
    });
    var o = n(34);
    Object.defineProperty(t, 'MultiSelectOptionProps', {
      enumerable: !0,
      get: function() {
        return o.MultiSelectOptionProps;
      },
    });
    var a = n(33);
    Object.defineProperty(t, 'SingleSelectProps', {
      enumerable: !0,
      get: function() {
        return a.SingleSelectProps;
      },
    });
    var i = n(32);
    Object.defineProperty(t, 'SingleSelectOptionProps', {
      enumerable: !0,
      get: function() {
        return i.SingleSelectOptionProps;
      },
    });
  },
  function(e, t) {
    e.exports = function(e) {
      return e.replace(/\s\s+/g, ' ').trim();
    };
  },
  function(e, t, n) {
    (function(e, n) {
      var r = 200,
        l = '__lodash_hash_undefined__',
        o = 1,
        a = 2,
        i = 9007199254740991,
        u = '[object Arguments]',
        s = '[object Array]',
        c = '[object AsyncFunction]',
        d = '[object Boolean]',
        f = '[object Date]',
        p = '[object Error]',
        S = '[object Function]',
        _ = '[object GeneratorFunction]',
        v = '[object Map]',
        b = '[object Number]',
        O = '[object Null]',
        h = '[object Object]',
        y = '[object Proxy]',
        m = '[object RegExp]',
        g = '[object Set]',
        P = '[object String]',
        x = '[object Symbol]',
        E = '[object Undefined]',
        I = '[object ArrayBuffer]',
        T = '[object DataView]',
        j = /^\[object .+?Constructor\]$/,
        R = /^(?:0|[1-9]\d*)$/,
        M = {};
      (M['[object Float32Array]'] = M['[object Float64Array]'] = M[
        '[object Int8Array]'
      ] = M['[object Int16Array]'] = M['[object Int32Array]'] = M[
        '[object Uint8Array]'
      ] = M['[object Uint8ClampedArray]'] = M['[object Uint16Array]'] = M[
        '[object Uint32Array]'
      ] = !0),
        (M[u] = M[s] = M[I] = M[d] = M[T] = M[f] = M[p] = M[S] = M[v] = M[
          b
        ] = M[h] = M[m] = M[g] = M[P] = M['[object WeakMap]'] = !1);
      var N = 'object' == typeof e && e && e.Object === Object && e,
        C = 'object' == typeof self && self && self.Object === Object && self,
        L = N || C || Function('return this')(),
        A = 'object' == typeof t && t && !t.nodeType && t,
        w = A && 'object' == typeof n && n && !n.nodeType && n,
        D = w && w.exports === A,
        k = D && N.process,
        B = (function() {
          try {
            return k && k.binding && k.binding('util');
          } catch (e) {}
        })(),
        V = B && B.isTypedArray;
      function H(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      }
      function U(e, t) {
        return e.has(t);
      }
      function z(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function(e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      }
      function G(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function(e) {
            n[++t] = e;
          }),
          n
        );
      }
      var q = Array.prototype,
        X = Function.prototype,
        F = Object.prototype,
        W = L['__core-js_shared__'],
        $ = X.toString,
        K = F.hasOwnProperty,
        Y = (function() {
          var e = /[^.]+$/.exec((W && W.keys && W.keys.IE_PROTO) || '');
          return e ? 'Symbol(src)_1.' + e : '';
        })(),
        J = F.toString,
        Q = RegExp(
          '^' +
            $.call(K)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?',
              ) +
            '$',
        ),
        Z = D ? L.Buffer : void 0,
        ee = L.Symbol,
        te = L.Uint8Array,
        ne = F.propertyIsEnumerable,
        re = q.splice,
        le = ee ? ee.toStringTag : void 0,
        oe = Object.getOwnPropertySymbols,
        ae = Z ? Z.isBuffer : void 0,
        ie = (function(e, t) {
          return function(n) {
            return e(t(n));
          };
        })(Object.keys, Object),
        ue = De(L, 'DataView'),
        se = De(L, 'Map'),
        ce = De(L, 'Promise'),
        de = De(L, 'Set'),
        fe = De(L, 'WeakMap'),
        pe = De(Object, 'create'),
        Se = He(ue),
        _e = He(se),
        ve = He(ce),
        be = He(de),
        Oe = He(fe),
        he = ee ? ee.prototype : void 0,
        ye = he ? he.valueOf : void 0;
      function me(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function ge(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Pe(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function xe(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new Pe(); ++t < n; ) this.add(e[t]);
      }
      function Ee(e) {
        var t = (this.__data__ = new ge(e));
        this.size = t.size;
      }
      function Ie(e, t) {
        var n = Ge(e),
          r = !n && ze(e),
          l = !n && !r && qe(e),
          o = !n && !r && !l && Ke(e),
          a = n || r || l || o,
          i = a
            ? (function(e, t) {
                for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                return r;
              })(e.length, String)
            : [],
          u = i.length;
        for (var s in e)
          (!t && !K.call(e, s)) ||
            (a &&
              ('length' == s ||
                (l && ('offset' == s || 'parent' == s)) ||
                (o &&
                  ('buffer' == s || 'byteLength' == s || 'byteOffset' == s)) ||
                Ve(s, u))) ||
            i.push(s);
        return i;
      }
      function Te(e, t) {
        for (var n = e.length; n--; ) if (Ue(e[n][0], t)) return n;
        return -1;
      }
      function je(e) {
        return null == e
          ? void 0 === e
            ? E
            : O
          : le && le in Object(e)
            ? (function(e) {
                var t = K.call(e, le),
                  n = e[le];
                try {
                  e[le] = void 0;
                  var r = !0;
                } catch (e) {}
                var l = J.call(e);
                r && (t ? (e[le] = n) : delete e[le]);
                return l;
              })(e)
            : (function(e) {
                return J.call(e);
              })(e);
      }
      function Re(e) {
        return $e(e) && je(e) == u;
      }
      function Me(e, t, n, r, l) {
        return (
          e === t ||
          (null == e || null == t || (!$e(e) && !$e(t))
            ? e != e && t != t
            : (function(e, t, n, r, l, i) {
                var c = Ge(e),
                  S = Ge(t),
                  _ = c ? s : Be(e),
                  O = S ? s : Be(t),
                  y = (_ = _ == u ? h : _) == h,
                  E = (O = O == u ? h : O) == h,
                  j = _ == O;
                if (j && qe(e)) {
                  if (!qe(t)) return !1;
                  (c = !0), (y = !1);
                }
                if (j && !y)
                  return (
                    i || (i = new Ee()),
                    c || Ke(e)
                      ? Le(e, t, n, r, l, i)
                      : (function(e, t, n, r, l, i, u) {
                          switch (n) {
                            case T:
                              if (
                                e.byteLength != t.byteLength ||
                                e.byteOffset != t.byteOffset
                              )
                                return !1;
                              (e = e.buffer), (t = t.buffer);
                            case I:
                              return !(
                                e.byteLength != t.byteLength ||
                                !i(new te(e), new te(t))
                              );
                            case d:
                            case f:
                            case b:
                              return Ue(+e, +t);
                            case p:
                              return e.name == t.name && e.message == t.message;
                            case m:
                            case P:
                              return e == t + '';
                            case v:
                              var s = z;
                            case g:
                              var c = r & o;
                              if ((s || (s = G), e.size != t.size && !c))
                                return !1;
                              var S = u.get(e);
                              if (S) return S == t;
                              (r |= a), u.set(e, t);
                              var _ = Le(s(e), s(t), r, l, i, u);
                              return u.delete(e), _;
                            case x:
                              if (ye) return ye.call(e) == ye.call(t);
                          }
                          return !1;
                        })(e, t, _, n, r, l, i)
                  );
                if (!(n & o)) {
                  var R = y && K.call(e, '__wrapped__'),
                    M = E && K.call(t, '__wrapped__');
                  if (R || M) {
                    var N = R ? e.value() : e,
                      C = M ? t.value() : t;
                    return i || (i = new Ee()), l(N, C, n, r, i);
                  }
                }
                if (!j) return !1;
                return (
                  i || (i = new Ee()),
                  (function(e, t, n, r, l, a) {
                    var i = n & o,
                      u = Ae(e),
                      s = u.length,
                      c = Ae(t).length;
                    if (s != c && !i) return !1;
                    for (var d = s; d--; ) {
                      var f = u[d];
                      if (!(i ? f in t : K.call(t, f))) return !1;
                    }
                    var p = a.get(e);
                    if (p && a.get(t)) return p == t;
                    var S = !0;
                    a.set(e, t), a.set(t, e);
                    for (var _ = i; ++d < s; ) {
                      f = u[d];
                      var v = e[f],
                        b = t[f];
                      if (r)
                        var O = i ? r(b, v, f, t, e, a) : r(v, b, f, e, t, a);
                      if (!(void 0 === O ? v === b || l(v, b, n, r, a) : O)) {
                        S = !1;
                        break;
                      }
                      _ || (_ = 'constructor' == f);
                    }
                    if (S && !_) {
                      var h = e.constructor,
                        y = t.constructor;
                      h != y &&
                        'constructor' in e &&
                        'constructor' in t &&
                        !(
                          'function' == typeof h &&
                          h instanceof h &&
                          'function' == typeof y &&
                          y instanceof y
                        ) &&
                        (S = !1);
                    }
                    return a.delete(e), a.delete(t), S;
                  })(e, t, n, r, l, i)
                );
              })(e, t, n, r, Me, l))
        );
      }
      function Ne(e) {
        return (
          !(
            !We(e) ||
            (function(e) {
              return !!Y && Y in e;
            })(e)
          ) && (Xe(e) ? Q : j).test(He(e))
        );
      }
      function Ce(e) {
        if (
          !(function(e) {
            var t = e && e.constructor,
              n = ('function' == typeof t && t.prototype) || F;
            return e === n;
          })(e)
        )
          return ie(e);
        var t = [];
        for (var n in Object(e))
          K.call(e, n) && 'constructor' != n && t.push(n);
        return t;
      }
      function Le(e, t, n, r, l, i) {
        var u = n & o,
          s = e.length,
          c = t.length;
        if (s != c && !(u && c > s)) return !1;
        var d = i.get(e);
        if (d && i.get(t)) return d == t;
        var f = -1,
          p = !0,
          S = n & a ? new xe() : void 0;
        for (i.set(e, t), i.set(t, e); ++f < s; ) {
          var _ = e[f],
            v = t[f];
          if (r) var b = u ? r(v, _, f, t, e, i) : r(_, v, f, e, t, i);
          if (void 0 !== b) {
            if (b) continue;
            p = !1;
            break;
          }
          if (S) {
            if (
              !H(t, function(e, t) {
                if (!U(S, t) && (_ === e || l(_, e, n, r, i))) return S.push(t);
              })
            ) {
              p = !1;
              break;
            }
          } else if (_ !== v && !l(_, v, n, r, i)) {
            p = !1;
            break;
          }
        }
        return i.delete(e), i.delete(t), p;
      }
      function Ae(e) {
        return (function(e, t, n) {
          var r = t(e);
          return Ge(e)
            ? r
            : (function(e, t) {
                for (var n = -1, r = t.length, l = e.length; ++n < r; )
                  e[l + n] = t[n];
                return e;
              })(r, n(e));
        })(e, Ye, ke);
      }
      function we(e, t) {
        var n = e.__data__;
        return (function(e) {
          var t = typeof e;
          return 'string' == t ||
            'number' == t ||
            'symbol' == t ||
            'boolean' == t
            ? '__proto__' !== e
            : null === e;
        })(t)
          ? n['string' == typeof t ? 'string' : 'hash']
          : n.map;
      }
      function De(e, t) {
        var n = (function(e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return Ne(n) ? n : void 0;
      }
      (me.prototype.clear = function() {
        (this.__data__ = pe ? pe(null) : {}), (this.size = 0);
      }),
        (me.prototype.delete = function(e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (me.prototype.get = function(e) {
          var t = this.__data__;
          if (pe) {
            var n = t[e];
            return n === l ? void 0 : n;
          }
          return K.call(t, e) ? t[e] : void 0;
        }),
        (me.prototype.has = function(e) {
          var t = this.__data__;
          return pe ? void 0 !== t[e] : K.call(t, e);
        }),
        (me.prototype.set = function(e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = pe && void 0 === t ? l : t),
            this
          );
        }),
        (ge.prototype.clear = function() {
          (this.__data__ = []), (this.size = 0);
        }),
        (ge.prototype.delete = function(e) {
          var t = this.__data__,
            n = Te(t, e);
          return !(
            n < 0 ||
            (n == t.length - 1 ? t.pop() : re.call(t, n, 1), --this.size, 0)
          );
        }),
        (ge.prototype.get = function(e) {
          var t = this.__data__,
            n = Te(t, e);
          return n < 0 ? void 0 : t[n][1];
        }),
        (ge.prototype.has = function(e) {
          return Te(this.__data__, e) > -1;
        }),
        (ge.prototype.set = function(e, t) {
          var n = this.__data__,
            r = Te(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
        }),
        (Pe.prototype.clear = function() {
          (this.size = 0),
            (this.__data__ = {
              hash: new me(),
              map: new (se || ge)(),
              string: new me(),
            });
        }),
        (Pe.prototype.delete = function(e) {
          var t = we(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (Pe.prototype.get = function(e) {
          return we(this, e).get(e);
        }),
        (Pe.prototype.has = function(e) {
          return we(this, e).has(e);
        }),
        (Pe.prototype.set = function(e, t) {
          var n = we(this, e),
            r = n.size;
          return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
        }),
        (xe.prototype.add = xe.prototype.push = function(e) {
          return this.__data__.set(e, l), this;
        }),
        (xe.prototype.has = function(e) {
          return this.__data__.has(e);
        }),
        (Ee.prototype.clear = function() {
          (this.__data__ = new ge()), (this.size = 0);
        }),
        (Ee.prototype.delete = function(e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        }),
        (Ee.prototype.get = function(e) {
          return this.__data__.get(e);
        }),
        (Ee.prototype.has = function(e) {
          return this.__data__.has(e);
        }),
        (Ee.prototype.set = function(e, t) {
          var n = this.__data__;
          if (n instanceof ge) {
            var l = n.__data__;
            if (!se || l.length < r - 1)
              return l.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new Pe(l);
          }
          return n.set(e, t), (this.size = n.size), this;
        });
      var ke = oe
          ? function(e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  (function(e, t) {
                    for (
                      var n = -1, r = null == e ? 0 : e.length, l = 0, o = [];
                      ++n < r;

                    ) {
                      var a = e[n];
                      t(a, n, e) && (o[l++] = a);
                    }
                    return o;
                  })(oe(e), function(t) {
                    return ne.call(e, t);
                  }));
            }
          : function() {
              return [];
            },
        Be = je;
      function Ve(e, t) {
        return (
          !!(t = null == t ? i : t) &&
          ('number' == typeof e || R.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function He(e) {
        if (null != e) {
          try {
            return $.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      }
      function Ue(e, t) {
        return e === t || (e != e && t != t);
      }
      ((ue && Be(new ue(new ArrayBuffer(1))) != T) ||
        (se && Be(new se()) != v) ||
        (ce && '[object Promise]' != Be(ce.resolve())) ||
        (de && Be(new de()) != g) ||
        (fe && '[object WeakMap]' != Be(new fe()))) &&
        (Be = function(e) {
          var t = je(e),
            n = t == h ? e.constructor : void 0,
            r = n ? He(n) : '';
          if (r)
            switch (r) {
              case Se:
                return T;
              case _e:
                return v;
              case ve:
                return '[object Promise]';
              case be:
                return g;
              case Oe:
                return '[object WeakMap]';
            }
          return t;
        });
      var ze = Re(
          (function() {
            return arguments;
          })(),
        )
          ? Re
          : function(e) {
              return $e(e) && K.call(e, 'callee') && !ne.call(e, 'callee');
            },
        Ge = Array.isArray;
      var qe =
        ae ||
        function() {
          return !1;
        };
      function Xe(e) {
        if (!We(e)) return !1;
        var t = je(e);
        return t == S || t == _ || t == c || t == y;
      }
      function Fe(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= i;
      }
      function We(e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      }
      function $e(e) {
        return null != e && 'object' == typeof e;
      }
      var Ke = V
        ? (function(e) {
            return function(t) {
              return e(t);
            };
          })(V)
        : function(e) {
            return $e(e) && Fe(e.length) && !!M[je(e)];
          };
      function Ye(e) {
        return (function(e) {
          return null != e && Fe(e.length) && !Xe(e);
        })(e)
          ? Ie(e)
          : Ce(e);
      }
      n.exports = function(e, t) {
        return Me(e, t);
      };
    }.call(this, n(51), n(50)(e)));
  },
  function(e, t) {
    e.exports = React;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.nextValidIndex = function(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'INCREMENT',
          r = e.options,
          l = r.reduce(function(e, t, n) {
            return t.optHeader || e.push(n), e;
          }, []),
          o = -1 === l.indexOf(t);
        if (o && 'INCREMENT' === n) {
          var a = r[t + 1] && !r[t + 1].optHeader;
          return a ? t + 1 : l[0];
        }
        if (o && 'DECREMENT' === n) {
          var i = r[t - 1] && !r[t - 1].optHeader;
          return i ? t - 1 : l[l.length - 1];
        }
        return t;
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        multiselect: !1,
        name: void 0,
        options: [],
        isDragging: !1,
        isOptionsPanelOpen: !1,
        altered: !1,
        singleSelectInitialIndex: 0,
        singleSelectSelectedIndex: 0,
        singleSelectSelectedOption: {},
        nextPotentialSelectionIndex: 0,
        multiSelectInitialSelectedIndexes: [0],
        multiSelectSelectedOptions: { options: [] },
        multiSelectSelectedIndexes: [],
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.ReactResponsiveSelectClassRef,
          o = e.type,
          a = t.isOptionsPanelOpen,
          i = t.disabled;
        t.hasOptHeaders;
        if (i) return;
        n.updateState({
          type: l.SET_NEXT_SELECTED_INDEX,
          optionIndex: (0, r.default)(o, t),
        }),
          !1 === a && n.updateState({ type: l.SET_OPTIONS_PANEL_OPEN });
      });
    var r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(41)),
      l = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n(0));
    t.default = function(e) {
      var t = e.event,
        n = e.state,
        l = e.props,
        o = e.ReactResponsiveSelectClassRef,
        a = n.multiselect,
        i = n.isOptionsPanelOpen,
        u = n.nextPotentialSelectionIndex,
        s = n.disabled,
        c = n.options;
      if (!s) {
        var d = parseFloat(t.target.getAttribute('data-key'));
        (c[d] && !0 === c[d].disabled) ||
          (c[d] && !0 === c[d].optHeader) ||
          (a
            ? o.updateState({ type: r.SET_MULTISELECT_OPTIONS, optionIndex: u })
            : o.updateState({
                type: r.SET_SINGLESELECT_OPTIONS,
                optionIndex: u,
              }),
          i ? t.stopPropagation() : l.onSubmit());
      }
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.event,
          n = e.state,
          o = e.ReactResponsiveSelectClassRef,
          a = n.multiselect,
          i = n.isOptionsPanelOpen,
          u = n.isDragging,
          s = n.disabled,
          c = n.options;
        if (s) return;
        if (!1 === u) {
          if (
            (t.preventDefault(), t && (0, r.default)(t.target, 'rrs__options'))
          )
            return;
          var d = parseFloat(t.target.getAttribute('data-key'));
          if ((c[d] && !0 === c[d].disabled) || (c[d] && !0 === c[d].optHeader))
            return;
          if ((0, r.default)(t.target, 'rrs__option'))
            return void o.updateState({
              type: a ? l.SET_MULTISELECT_OPTIONS : l.SET_SINGLESELECT_OPTIONS,
              optionIndex: d,
            });
          o.updateState(
            { type: i ? l.SET_OPTIONS_PANEL_CLOSED : l.SET_OPTIONS_PANEL_OPEN },
            function(e) {
              !1 === e.isOptionsPanelOpen && o.focusButton();
            },
          );
        }
      });
    var r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(45)),
      l = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.singleSelectBroadcastChange = t.multiSelectBroadcastChange = void 0);
    var r = o(n(47)),
      l = o(n(46));
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.multiSelectBroadcastChange = r.default),
      (t.singleSelectBroadcastChange = l.default);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n(0));
    t.default = function(e) {
      var t = e.event,
        n = e.state,
        l = e.ReactResponsiveSelectClassRef,
        o = n.options;
      if (!n.disabled) {
        var a = o
          .map(function(e) {
            return e.text.toLowerCase().charAt(0);
          })
          .indexOf(t.key);
        a > -1 &&
          l.updateState({
            type: r.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC,
            optionIndex: a,
          });
      }
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      l = n(5),
      o = u(l),
      a = u(n(3)),
      i = n(2);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (function(e) {
      function t() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (e.optionRef = o.default.createRef()), e;
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, l.Component),
        r(t, [
          {
            key: 'componentDidUpdate',
            value: function() {
              var e = this.props,
                t = e.index,
                n = e.isOptionsPanelOpen,
                r = e.nextPotentialSelectionIndex,
                l = e.optionsContainerRef,
                o = e.optHeaderLabel;
              t === r &&
                n &&
                (o && l.current.scroll(0, -1e4),
                this.optionRef.current.focus());
            },
          },
          {
            key: 'isDisabled',
            value: function(e) {
              return e.disabled || e.optHeader;
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.index,
                n = e.nextPotentialSelectionIndex,
                r = e.option,
                l = e.singleSelectSelectedIndex,
                i = e.optHeaderLabel;
              return o.default.createElement(
                'li',
                {
                  role: 'menuitem',
                  tabIndex: '-1',
                  'aria-disabled': this.isDisabled(r) ? 'true' : 'false',
                  'aria-label':
                    '\n          ' +
                    (r.text || (r.markup && r.markup.textNode)) +
                    ' ' +
                    ('' !== i ? ' of ' + i : '') +
                    '\n        ',
                  'data-key': t,
                  index: t,
                  ref: this.optionRef,
                  className: (0, a.default)(
                    '\n          rrs__option\n          ' +
                      (l === t ? 'rrs__option--selected' : '') +
                      '\n          ' +
                      (n === t ? 'rrs__option--next-selection' : '') +
                      '\n          ' +
                      (!0 === r.disabled ? 'rrs__option--disabled' : '') +
                      '\n          ' +
                      (!0 === r.optHeader ? 'rrs__option--header' : '') +
                      '\n        ',
                  ),
                },
                r.markup || r.text,
              );
            },
          },
        ]),
        t
      );
    })();
    (t.default = s), (s.propTypes = i.SingleSelectOptionProps);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      l = n(5),
      o = s(l),
      a = s(n(3)),
      i = n(2),
      u = s(n(13));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (function(e) {
      function t() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
          (e.optionsButton = o.default.createRef()),
          (e.optionsContainer = o.default.createRef()),
          e
        );
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, l.Component),
        r(t, [
          {
            key: 'componentDidUpdate',
            value: function(e) {
              var t = this.props,
                n = t.isOptionsPanelOpen,
                r = t.nextPotentialSelectionIndex;
              if (
                (!n &&
                  e.isOptionsPanelOpen &&
                  this.optionsButton.current.focus(),
                n &&
                  -1 === r &&
                  (this.optionsButton.current.focus(), optHeaderLabel))
              ) {
                var l = Math.ceil(
                  this.optionRef.current.getBoundingClientRect().top -
                    optionsContainerRef.current.getBoundingClientRect().top,
                );
                (this.scrollOffset =
                  this.scrollOffset ||
                  Math.ceil(
                    document
                      .querySelector('.rrs__option--header')
                      .getBoundingClientRect().height,
                  )),
                  l < this.scrollOffset &&
                    optionsContainerRef.current.scroll(
                      0,
                      Math.floor(
                        optionsContainerRef.current.scrollTop -
                          this.scrollOffset,
                      ),
                    );
              }
            },
          },
          {
            key: 'getCustomLabel',
            value: function() {
              var e = this.props,
                t = e.prefix,
                n = e.name,
                r = e.singleSelectSelectedOption,
                l = e.caretIcon,
                a = e.customLabelText;
              return o.default.createElement(
                'div',
                { className: 'rrs__label' },
                o.default.createElement(
                  'span',
                  {
                    'aria-label': (t ? t + ' ' : '') + r.text + ' selected',
                    className: 'rrs__label__text',
                    id: 'rrs-' + n + '-label',
                  },
                  a,
                ),
                l && l,
              );
            },
          },
          {
            key: 'getDefaultLabel',
            value: function() {
              var e = this.props,
                t = e.prefix,
                n = e.singleSelectSelectedOption,
                r = e.name,
                l = e.caretIcon,
                a = e.singleSelectSelectedIndex,
                i = e.noSelectionLabel;
              return -1 === a
                ? o.default.createElement(
                    'div',
                    { className: 'rrs__label' },
                    o.default.createElement(
                      'span',
                      {
                        'aria-label': i,
                        className: 'rrs__label__text',
                        id: 'rrs-' + r + '-label',
                      },
                      t && o.default.createElement('span', null, t),
                      i,
                    ),
                    l && l,
                  )
                : o.default.createElement(
                    'div',
                    { className: 'rrs__label' },
                    o.default.createElement(
                      'span',
                      {
                        'aria-label': (t ? t + ' ' : '') + n.text + ' selected',
                        className: 'rrs__label__text',
                        id: 'rrs-' + r + '-label',
                      },
                      t && o.default.createElement('span', null, t),
                      n.text
                        ? n.text
                        : o.default.createElement('div', null, ' '),
                    ),
                    l && l,
                  );
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                n = t.customLabelText,
                r = t.disabled,
                l = t.isOptionsPanelOpen,
                i = t.isDragging,
                s = t.name,
                c = t.nextPotentialSelectionIndex,
                d = t.options,
                f = t.singleSelectSelectedIndex,
                p = t.singleSelectSelectedOption,
                S = '';
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  'div',
                  {
                    role: 'button',
                    tabIndex: '0',
                    'aria-disabled': r,
                    'aria-haspopup': 'true',
                    'aria-expanded': l,
                    'aria-controls': 'rrs-' + s + '-menu',
                    ref: this.optionsButton,
                    className: (0, a.default)(
                      '\n            rrs__button\n            ' +
                        (!0 === r ? 'rrs__button--disabled' : '') +
                        '\n          ',
                    ),
                  },
                  n && this.getCustomLabel(),
                  !n && this.getDefaultLabel(),
                  s &&
                    o.default.createElement('input', {
                      type: 'hidden',
                      name: s,
                      value: p.value,
                    }),
                ),
                o.default.createElement(
                  'ul',
                  {
                    id: 'rrs-' + s + '-menu',
                    'aria-labelledby': 'rrs-' + s + '-label',
                    role: 'menu',
                    className: 'rrs__options',
                    ref: this.optionsContainer,
                  },
                  d.length > 0 &&
                    d.map(function(t, n) {
                      return (
                        t.optHeader && (S = t.text || t.markup.textContent),
                        o.default.createElement(u.default, {
                          key: n,
                          optHeaderLabel: S,
                          optionsContainerRef: e.optionsContainer,
                          index: n,
                          isDragging: i,
                          isOptionsPanelOpen: l,
                          option: t,
                          singleSelectSelectedIndex: f,
                          nextPotentialSelectionIndex: c,
                        })
                      );
                    }),
                ),
              );
            },
          },
        ]),
        t
      );
    })();
    (t.default = c), (c.propTypes = i.SingleSelectProps);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      l = n(5),
      o = u(l),
      a = u(n(3)),
      i = n(2);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (function(e) {
      function t() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (e.optionRef = o.default.createRef()), e;
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, l.Component),
        r(t, [
          {
            key: 'componentDidUpdate',
            value: function() {
              var e = this.props,
                t = e.index,
                n = e.isOptionsPanelOpen,
                r = e.nextPotentialSelectionIndex,
                l = e.optionsContainerRef,
                o = e.optHeaderLabel;
              if (t === r && n && (this.optionRef.current.focus(), o)) {
                var a = Math.ceil(
                  this.optionRef.current.getBoundingClientRect().top -
                    l.current.getBoundingClientRect().top,
                );
                (this.scrollOffset =
                  this.scrollOffset ||
                  Math.ceil(
                    document
                      .querySelector('.rrs__option--header')
                      .getBoundingClientRect().height,
                  )),
                  a < this.scrollOffset &&
                    l.current.scroll(
                      0,
                      Math.floor(l.current.scrollTop - this.scrollOffset),
                    );
              }
            },
          },
          {
            key: 'isDisabled',
            value: function(e) {
              return e.disabled || e.optHeader;
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.index,
                n = e.multiSelectSelectedIndexes,
                r = e.nextPotentialSelectionIndex,
                l = e.option,
                i = e.optHeaderLabel,
                u = n.some(function(e) {
                  return e === t;
                });
              return o.default.createElement(
                'li',
                {
                  role: 'checkbox',
                  tabIndex: '-1',
                  'aria-checked': u,
                  'aria-label':
                    '\n        ' +
                    (l.text || (l.markup && l.markup.textNode)) +
                    ' ' +
                    ('' !== i ? ' of ' + i : '') +
                    '\n      ',
                  'aria-live': 'assertive',
                  'aria-disabled': this.isDisabled(l) ? 'true' : 'false',
                  'data-key': t,
                  index: t,
                  ref: this.optionRef,
                  className: (0, a.default)(
                    '\n          rrs__option\n          ' +
                      (u ? 'rrs__option--selected' : '') +
                      '\n          ' +
                      (r === t ? 'rrs__option--next-selection' : '') +
                      '\n          ' +
                      (!0 === l.disabled ? 'rrs__option--disabled' : '') +
                      '\n          ' +
                      (!0 === l.optHeader ? 'rrs__option--header' : '') +
                      '\n        ',
                  ),
                },
                l.markup || l.text,
              );
            },
          },
        ]),
        t
      );
    })();
    (t.default = s), (s.propTypes = i.MultiSelectOptionProps);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      l = n(5),
      o = c(l),
      a = c(n(3)),
      i = c(n(4)),
      u = n(2),
      s = c(n(15));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = (function(e) {
      function t() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
          (e.optionsButton = o.default.createRef()),
          (e.optionsContainer = o.default.createRef()),
          e
        );
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, l.Component),
        r(t, [
          {
            key: 'componentDidUpdate',
            value: function(e) {
              this.props.isOptionsPanelOpen ||
                !e.isOptionsPanelOpen ||
                (0, i.default)(
                  e.multiSelectSelectedIndexes,
                  this.props.multiSelectSelectedIndexes,
                ) ||
                this.optionsButton.current.focus();
            },
          },
          {
            key: 'getAriaLabel',
            value: function() {
              var e = this.props,
                t = e.multiSelectSelectedOptions,
                n = e.prefix,
                r = t.options.length;
              return (0, a.default)(
                '\n      Checkbox group ' +
                  (n ? n + ' ' : '') +
                  ' has\n      ' +
                  r +
                  ' item' +
                  (1 === r ? '' : 's') +
                  ' selected.\n      Selected option' +
                  (1 === r ? '' : 's') +
                  ' ' +
                  (1 === r ? 'is' : 'are') +
                  '\n      ' +
                  t.options
                    .map(function(e) {
                      return e.text;
                    })
                    .join(' and ') +
                  '\n    ',
              );
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                n = t.caretIcon,
                r = t.customLabelText,
                l = t.disabled,
                i = t.isDragging,
                u = t.isOptionsPanelOpen,
                c = t.multiSelectSelectedIndexes,
                d = t.multiSelectSelectedOptions,
                f = t.name,
                p = t.options,
                S = t.nextPotentialSelectionIndex,
                _ = t.prefix,
                v = '';
              return o.default.createElement(
                'div',
                null,
                o.default.createElement(
                  'div',
                  {
                    role: 'button',
                    tabIndex: '0',
                    'aria-disabled': l,
                    'aria-haspopup': 'true',
                    'aria-expanded': u,
                    'aria-controls': 'rrs-' + f + '-menu',
                    ref: this.optionsButton,
                    className: (0, a.default)(
                      '\n            rrs__button\n            ' +
                        (!0 === l ? 'rrs__button--disabled' : '') +
                        '\n          ',
                    ),
                  },
                  r &&
                    o.default.createElement(
                      'div',
                      { className: 'rrs__label' },
                      o.default.createElement(
                        'span',
                        {
                          'aria-label': this.getAriaLabel(),
                          className: 'rrs__label__text',
                          id: 'rrs-' + f + '-label',
                        },
                        r,
                      ),
                      n && n,
                    ),
                  !r &&
                    o.default.createElement(
                      'div',
                      { className: 'rrs__label' },
                      o.default.createElement(
                        'span',
                        {
                          'aria-label': this.getAriaLabel(),
                          className: 'rrs__label__text',
                          id: 'rrs-' + f + '-label',
                        },
                        o.default.createElement(
                          'span',
                          { className: 'rrs__multiselect-label' },
                          o.default.createElement(
                            'span',
                            { className: 'rrs__multiselect-label__text' },
                            (_ ? _ + ' ' : '') +
                              '\n                  ' +
                              (d.options.length > 0 ? d.options[0].text : ''),
                          ),
                          d.options.length > 1 &&
                            o.default.createElement(
                              'span',
                              { className: 'rrs__multiselect-label__badge' },
                              '+ ' + (d.options.length - 1),
                            ),
                        ),
                      ),
                      n && n,
                    ),
                  f &&
                    o.default.createElement('input', {
                      type: 'hidden',
                      name: f,
                      value: [
                        d.options.map(function(e) {
                          return e.value;
                        }),
                      ].join(','),
                    }),
                ),
                o.default.createElement(
                  'ul',
                  {
                    id: 'rrs-' + f + '-menu',
                    'aria-labelledby': 'rrs-' + f + '-label',
                    role: 'menu',
                    className: 'rrs__options',
                    ref: this.optionsContainer,
                  },
                  p.length > 0 &&
                    p.map(function(t, n) {
                      return (
                        t.optHeader && (v = t.text || t.markup.textContent),
                        o.default.createElement(s.default, {
                          key: n,
                          optHeaderLabel: v,
                          optionsContainerRef: e.optionsContainer,
                          index: n,
                          option: t,
                          isDragging: i,
                          isOptionsPanelOpen: u,
                          multiSelectSelectedIndexes: c,
                          nextPotentialSelectionIndex: S,
                        })
                      );
                    }),
                ),
              );
            },
          },
        ]),
        t
      );
    })();
    (t.default = d), (d.propTypes = u.MultiSelectProps);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function(e) {
      return r({}, e, {
        multiSelectSelectedIndexes: [].concat(
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(l.default.multiSelectSelectedIndexes),
        ),
        multiSelectSelectedOptions: r({}, l.default.multiSelectSelectedOptions),
      });
    };
    var l = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(7));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = -1 === t ? 0 : t;
      if (e.options[n] && e.options[n].optHeader) {
        var l = (function(e) {
          if (e.singleSelectSelectedOption) return e.singleSelectSelectedOption;
          return e.options.reduce(function(e, t) {
            return t.optHeader || e.push(t), e;
          }, [])[0];
        })(e);
        return r({ name: e.name }, l);
      }
      if (!e.noSelectionLabel) return r({ name: e.name }, e.options[n]);
      return t > -1
        ? r({ name: e.name }, e.options[t])
        : { name: e.name, text: e.noSelectionLabel, value: 'null' };
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function(e) {
      var t = (function(e) {
          return e.options.reduce(function(e, t, n) {
            return t.optHeader || e.push({ option: t, index: n }), e;
          }, [])[0];
        })(e),
        n = t.option,
        l = t.index;
      return r({}, e, {
        multiSelectSelectedIndexes: [l],
        multiSelectSelectedOptions: { options: [r({ name: e.name }, n)] },
        nextPotentialSelectionIndex: l,
      });
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    (t.isAltered = o),
      (t.default = function(e) {
        return r({}, e, { altered: o(e) });
      });
    var l = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(4));
    function o(e) {
      return e.multiselect
        ? !(0, l.default)(
            e.multiSelectInitialSelectedIndexes,
            e.multiSelectSelectedIndexes,
          )
        : e.singleSelectSelectedIndex !== e.singleSelectInitialIndex;
    }
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        return {
          options: [].concat(
            r(e.multiSelectSelectedOptions.options.slice(0, t)),
            r(e.multiSelectSelectedOptions.options.slice(t + 1)),
          ),
        };
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function(e, t) {
      return {
        options: [].concat(
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(e.multiSelectSelectedOptions.options),
          [r({ name: e.name }, e.options[t])],
        ),
      };
    };
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        return [].concat(
          r(e.multiSelectSelectedIndexes.slice(0, t)),
          r(e.multiSelectSelectedIndexes.slice(t + 1)),
        );
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        return [].concat(
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(e.multiSelectSelectedIndexes),
          [t],
        );
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function(e) {
      var t = void 0;
      if (!e.noSelectionLabel) {
        if (e.selectedValues)
          t = e.options
            .filter(function(t) {
              return e.selectedValues.some(function(e) {
                return e === t.value;
              });
            })
            .map(function(t) {
              return r({ name: e.name }, t);
            });
        else {
          var n =
            e.options[0] && e.options[0].optHeader
              ? (function(e) {
                  if (e.multiSelectSelectedOptions)
                    return e.multiSelectSelectedOptions;
                  return e.options.reduce(function(e, t) {
                    return t.optHeader || e.push(t), e;
                  }, [])[0];
                })(e)
              : e.options[0];
          t = [r({ name: e.name }, n)];
        }
        return t;
      }
      return (t =
        e.selectedValues && e.selectedValues.length > 0
          ? e.options
              .filter(function(t) {
                return e.selectedValues.some(function(e) {
                  return e === t.value;
                });
              })
              .map(function(t) {
                return r({ name: e.name }, t);
              })
          : [{ name: e.name, text: e.noSelectionLabel, value: 'null' }]);
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = arguments[2],
          l = e.options
            .map(function(e, n) {
              return t.some(function(t) {
                return e.value === t;
              })
                ? n
                : void 0;
            })
            .filter(function(e) {
              return void 0 !== e;
            }),
          o = n ? [] : [(0, r.nextValidIndex)(e, 0)];
        return l.length ? l : o;
      });
    var r = n(6);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.options,
          n = e.selectedValue,
          r = e.noSelectionLabel,
          l = t
            .map(function(e) {
              return e.value;
            })
            .indexOf(n);
        return l > -1 || r ? l : 0;
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.resetMultiSelectState = t.getSingleSelectSelectedOption = t.getInitialMultiSelectOption = t.mergeIsAlteredState = t.removeMultiSelectOption = t.addMultiSelectOption = t.removeMultiSelectIndex = t.addMultiSelectIndex = t.getMultiSelectInitialSelectedOptions = t.getMultiSelectSelectedValueIndexes = t.getSelectedValueIndex = void 0);
    var r = S(n(27)),
      l = S(n(26)),
      o = S(n(25)),
      a = S(n(24)),
      i = S(n(23)),
      u = S(n(22)),
      s = S(n(21)),
      c = S(n(20)),
      d = S(n(19)),
      f = S(n(18)),
      p = S(n(17));
    function S(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.getSelectedValueIndex = r.default),
      (t.getMultiSelectSelectedValueIndexes = l.default),
      (t.getMultiSelectInitialSelectedOptions = o.default),
      (t.addMultiSelectIndex = a.default),
      (t.removeMultiSelectIndex = i.default),
      (t.addMultiSelectOption = u.default),
      (t.removeMultiSelectOption = s.default),
      (t.mergeIsAlteredState = c.default),
      (t.getInitialMultiSelectOption = d.default),
      (t.getSingleSelectSelectedOption = f.default),
      (t.resetMultiSelectState = p.default);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function(e, t) {
      switch (t.type) {
        case l.UPDATE_VIA_PROPS:
        case l.INITIALISE:
          var n = (0, a.getSelectedValueIndex)(t.value),
            i = (0, a.getMultiSelectSelectedValueIndexes)(
              t.value,
              t.value.selectedValues,
              t.value.noSelectionLabel,
            );
          return r({}, e, {
            hasOptHeaders: t.value.options.some(function(e) {
              return !0 === e.optHeader;
            }),
            multiselect: t.value.multiselect || !1,
            noSelectionLabel: t.value.noSelectionLabel,
            name: t.value.name,
            options: t.value.options,
            altered: t.value.altered || !1,
            disabled: t.value.disabled || !1,
            singleSelectInitialIndex: n,
            singleSelectSelectedIndex: n,
            singleSelectSelectedOption: (0, a.getSingleSelectSelectedOption)(
              t.value,
              n,
            ),
            nextPotentialSelectionIndex: e.nextPotentialSelectionIndex
              ? e.nextPotentialSelectionIndex
              : n,
            multiSelectInitialSelectedIndexes: i,
            multiSelectSelectedIndexes: i,
            multiSelectSelectedOptions: {
              options: (0, a.getMultiSelectInitialSelectedOptions)(t.value, i),
            },
          });
        case l.SET_IS_DRAGGING:
          return r({}, e, { isDragging: t.value });
        case l.SET_OPTIONS_PANEL_OPEN:
          var u = r({}, e, {
            isOptionsPanelOpen: !0,
            nextPotentialSelectionIndex: e.multiselect
              ? e.multiSelectSelectedIndexes.length
                ? (0, o.nextValidIndex)(e, e.multiSelectSelectedIndexes[0])
                : (0, o.nextValidIndex)(e, 0)
              : (0, o.nextValidIndex)(e, e.nextPotentialSelectionIndex),
            singleSelectSelectedOption: (0, a.getSingleSelectSelectedOption)(
              e,
              e.nextPotentialSelectionIndex,
            ),
          });
          return (0, a.mergeIsAlteredState)(u);
        case l.SET_OPTIONS_PANEL_CLOSED:
          var s = r({}, e, {
            isOptionsPanelOpen: !1,
            singleSelectSelectedIndex: e.nextPotentialSelectionIndex,
            singleSelectSelectedOption: (0, a.getSingleSelectSelectedOption)(
              e,
              e.nextPotentialSelectionIndex,
            ),
          });
          return (0, a.mergeIsAlteredState)(s);
        case l.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION:
        case l.SET_OPTIONS_PANEL_CLOSED_ONBLUR:
          return r({}, e, { isOptionsPanelOpen: !1 });
        case l.SET_NEXT_SELECTED_INDEX:
          return r({}, e, {
            nextPotentialSelectionIndex: t.optionIndex,
            singleSelectSelectedOption: (0, a.getSingleSelectSelectedOption)(
              e,
              t.optionIndex,
            ),
          });
        case l.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC:
          return r({}, e, {
            isOptionsPanelOpen: !0,
            nextPotentialSelectionIndex: t.optionIndex,
          });
        case l.SET_SINGLESELECT_OPTIONS:
          var c = r({}, e, {
            nextPotentialSelectionIndex: t.optionIndex,
            singleSelectSelectedIndex: t.optionIndex,
            isOptionsPanelOpen: !1,
            singleSelectSelectedOption: (0, a.getSingleSelectSelectedOption)(
              e,
              t.optionIndex,
            ),
          });
          return (0, a.mergeIsAlteredState)(c);
        case l.SET_MULTISELECT_OPTIONS:
          if (!e.noSelectionLabel) {
            var d =
                0 === e.multiSelectSelectedIndexes[0] &&
                1 === e.multiSelectSelectedIndexes.length,
              f =
                e.multiSelectSelectedIndexes.length > 0 &&
                !d &&
                0 === t.optionIndex,
              p = d && 0 !== t.optionIndex;
            if (f) {
              var S = (0, a.getInitialMultiSelectOption)(e);
              return (0, a.mergeIsAlteredState)(S);
            }
            p && (e = (0, a.resetMultiSelectState)(e));
          }
          e.noSelectionLabel &&
            e.multiSelectSelectedOptions.options[0].text ===
              e.noSelectionLabel &&
            (e.multiSelectSelectedOptions.options = []);
          var _ = (0, o.nextValidIndex)(e, t.optionIndex),
            v = e.multiSelectSelectedIndexes.indexOf(_),
            b = r({}, e, {
              nextPotentialSelectionIndex: _,
              multiSelectSelectedIndexes:
                -1 === v
                  ? (0, a.addMultiSelectIndex)(e, _)
                  : (0, a.removeMultiSelectIndex)(e, v),
              multiSelectSelectedOptions:
                -1 === v
                  ? (0, a.addMultiSelectOption)(e, _)
                  : (0, a.removeMultiSelectOption)(e, v),
            });
          if (0 === b.multiSelectSelectedOptions.options.length)
            if (e.noSelectionLabel) {
              var O = (0, a.getMultiSelectSelectedValueIndexes)(
                e,
                e.selectedValues,
              );
              b = r({}, b, {
                nextPotentialSelectionIndex: e.hasOptHeaders
                  ? (0, o.nextValidIndex)(e, -1)
                  : -1,
                multiSelectSelectedOptions: {
                  options: (0, a.getMultiSelectInitialSelectedOptions)(e, O),
                },
              });
            } else b = (0, a.getInitialMultiSelectOption)(e);
          return (0, a.mergeIsAlteredState)(b);
        default:
          return e;
      }
    };
    var l = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0)),
      o = n(6),
      a = n(28);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.props,
          r = n.multiselect,
          l = n.customLabelRenderer,
          o = t.multiSelectSelectedOptions,
          a = t.singleSelectSelectedOption;
        return !!l && l(r ? o : a);
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    'function' == typeof Symbol && Symbol.iterator;
    t.default = function(e, t, n) {
      0;
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.SingleSelectOptionProps = void 0);
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.SingleSelectOptionProps = {
      index: r.default.number.isRequired,
      isOptionsPanelOpen: r.default.bool.isRequired,
      nextPotentialSelectionIndex: r.default.number,
      option: r.default.shape({
        text: r.default.string.isRequired,
        value: r.default.string,
        optHeader: r.default.bool,
        markup: r.default.element,
        disabled: r.default.bool,
      }).isRequired,
      singleSelectSelectedIndex: r.default.number,
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.SingleSelectProps = void 0);
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.SingleSelectProps = {
      altered: r.default.bool,
      caretIcon: r.default.oneOfType([r.default.string, r.default.element]),
      customLabelText: r.default.oneOfType([
        r.default.string,
        r.default.bool,
        r.default.element,
      ]),
      disabled: r.default.bool,
      singleSelectInitialIndex: r.default.number,
      singleSelectSelectedIndex: r.default.number,
      singleSelectSelectedOption: r.default.shape({
        text: r.default.string,
        value: r.default.string,
      }),
      isDragging: r.default.bool,
      isOptionsPanelOpen: r.default.bool,
      name: r.default.string,
      nextPotentialSelectionIndex: r.default.number,
      onSubmit: r.default.func,
      options: r.default.arrayOf(
        r.default.shape({
          text: r.default.string.isRequired,
          value: r.default.string,
          optHeader: r.default.bool,
        }),
      ).isRequired,
      prefix: r.default.string,
      noSelectionLabel: r.default.string,
      selectedValue: r.default.string,
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.MultiSelectOptionProps = void 0);
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.MultiSelectOptionProps = {
      index: r.default.number.isRequired,
      isOptionsPanelOpen: r.default.bool.isRequired,
      multiSelectSelectedIndexes: r.default.arrayOf(r.default.number),
      nextPotentialSelectionIndex: r.default.number,
      option: r.default.shape({
        text: r.default.string,
        value: r.default.string,
        optHeader: r.default.bool,
        markup: r.default.element,
        disabled: r.default.bool,
      }).isRequired,
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.MultiSelectProps = void 0);
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.MultiSelectProps = {
      altered: r.default.bool,
      caretIcon: r.default.oneOfType([r.default.string, r.default.element]),
      customLabelText: r.default.oneOfType([
        r.default.string,
        r.default.bool,
        r.default.element,
      ]),
      disabled: r.default.bool,
      multiSelectInitialSelectedIndexes: r.default.arrayOf(r.default.number),
      multiSelectSelectedIndexes: r.default.arrayOf(r.default.number),
      multiSelectSelectedOptions: r.default.shape({
        altered: r.default.bool,
        options: r.default.arrayOf(
          r.default.shape({
            name: r.default.string,
            text: r.default.string,
            value: r.default.string,
            markup: r.default.object,
          }),
        ),
      }),
      isDragging: r.default.bool,
      isOptionsPanelOpen: r.default.bool,
      name: r.default.string,
      nextPotentialSelectionIndex: r.default.number,
      onSubmit: r.default.func,
      options: r.default.arrayOf(
        r.default.shape({
          text: r.default.string,
          value: r.default.string,
          optHeader: r.default.bool,
        }),
      ).isRequired,
      prefix: r.default.string,
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function(e, t, n) {
    'use strict';
    var r = n(36);
    function l() {}
    e.exports = function() {
      function e(e, t, n, l, o, a) {
        if (a !== r) {
          var i = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          );
          throw ((i.name = 'Invariant Violation'), i);
        }
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
      };
      return (n.checkPropTypes = l), (n.PropTypes = n), n;
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.ReactResponsiveSelectProps = void 0);
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.ReactResponsiveSelectProps = {
      caretIcon: r.default.oneOfType([r.default.string, r.default.element]),
      customLabelRenderer: r.default.func,
      disabled: r.default.bool,
      multiselect: r.default.bool,
      name: r.default.string.isRequired,
      onChange: r.default.func,
      options: r.default.arrayOf(
        r.default.shape({
          text: r.default.string,
          value: r.default.string,
          optHeader: r.default.bool,
        }),
      ).isRequired,
      onSubmit: r.default.func,
      prefix: r.default.string,
      selectedValue: r.default.string,
      noSelectionLabel: r.default.string,
      selectedValues: r.default.arrayOf(r.default.string.isRequired),
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.ReactResponsiveSelectClassRef;
        if (t.disabled) return;
        n.updateState({ type: r.SET_IS_DRAGGING, value: !1 });
      });
    var r = (function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n(0));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.ReactResponsiveSelectClassRef,
          l = t.isDragging;
        if (t.disabled) return;
        l || n.updateState({ type: r.SET_IS_DRAGGING, value: !0 });
      });
    var r = (function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n(0));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        var n = t.isOptionsPanelOpen,
          l = t.nextPotentialSelectionIndex,
          o = t.options;
        switch (e) {
          case 'INCREMENT':
            return !1 === n
              ? (0, r.nextValidIndex)(t, l, 'INCREMENT')
              : l === o.length - 1
                ? (0, r.nextValidIndex)(t, 0, 'INCREMENT')
                : (0, r.nextValidIndex)(t, l + 1, 'INCREMENT');
          case 'DECREMENT':
            return !1 === n
              ? (0, r.nextValidIndex)(t, l, 'DECREMENT')
              : 0 === l
                ? (0, r.nextValidIndex)(t, o.length - 1, 'DECREMENT')
                : (0, r.nextValidIndex)(t, l - 1, 'DECREMENT');
          default:
            return (0, r.nextValidIndex)(t, 0, 'DECREMENT');
        }
      });
    var r = n(6);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        e.forEach(function(e) {
          e === t.keyCode && t.preventDefault();
        });
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        TAB: 9,
        ENTER: 13,
        SPACE: 32,
        ESCAPE: 27,
        UP: 38,
        DOWN: 40,
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.event,
          n = e.state,
          c = e.props,
          d = e.ReactResponsiveSelectClassRef,
          f = n.multiselect,
          p = n.isOptionsPanelOpen;
        if (n.disabled) return;
        (0, o.default)(
          [
            r.default.ENTER,
            r.default.SPACE,
            r.default.ESCAPE,
            r.default.UP,
            r.default.DOWN,
          ],
          t,
        ),
          /^[a-z0-9]+$/.test(t.key) &&
            (0, a.default)({
              event: t,
              ReactResponsiveSelectClassRef: d,
              state: n,
            });
        switch (t.keyCode) {
          case r.default.TAB:
            p &&
              (t.preventDefault(),
              f &&
                d.updateState({ type: l.SET_OPTIONS_PANEL_CLOSED }, function() {
                  return d.focusButton();
                }));
            break;
          case r.default.ENTER:
            (0, i.default)({
              event: t,
              state: n,
              props: c,
              ReactResponsiveSelectClassRef: d,
            });
            break;
          case r.default.SPACE:
            p
              ? (0, u.default)({
                  event: t,
                  state: n,
                  ReactResponsiveSelectClassRef: d,
                })
              : d.updateState({ type: l.SET_OPTIONS_PANEL_OPEN });
            break;
          case r.default.ESCAPE:
            d.updateState(
              { type: l.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION },
              function() {
                return d.focusButton();
              },
            );
            break;
          case r.default.UP:
            (0, s.default)({
              state: n,
              ReactResponsiveSelectClassRef: d,
              type: 'DECREMENT',
            });
            break;
          case r.default.DOWN:
            (0, s.default)({
              state: n,
              ReactResponsiveSelectClassRef: d,
              type: 'INCREMENT',
            });
        }
      });
    var r = c(n(43)),
      l = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0)),
      o = c(n(42)),
      a = c(n(12)),
      i = c(n(9)),
      u = c(n(10)),
      s = c(n(8));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        return (
          String(e.className)
            .split(' ')
            .indexOf(t) > -1
        );
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(4));
    t.default = function(e, t, n, l) {
      l &&
        (!(0, r.default)(e, t) &&
          l({ name: t.name, text: t.text, value: t.value, altered: n }));
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(4));
    t.default = function(e, t, n, l) {
      l &&
        (!(0, r.default)(e, t) &&
          l({
            options: t.map(function(e) {
              return { name: e.name, text: e.text, value: e.value };
            }),
            altered: n,
          }));
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.ReactResponsiveSelectClassRef,
          o = e.props,
          a = t.isOptionsPanelOpen,
          i = t.disabled,
          u = t.altered,
          s = t.singleSelectSelectedOption,
          c = t.multiSelectSelectedOptions,
          d = o.onBlur,
          f = o.multiselect;
        if (i) return;
        var p = n.selectBox && !n.selectBox.contains(document.activeElement);
        a && p && n.updateState({ type: r.SET_OPTIONS_PANEL_CLOSED_ONBLUR });
        p &&
          d &&
          (f
            ? (0, l.multiSelectBroadcastChange)(void 0, c.options, u, d)
            : (0, l.singleSelectBroadcastChange)(void 0, s, u, d));
      });
    var r = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0)),
      l = n(11);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.handleTouchStart = t.handleTouchMove = t.handleKeyUpOrDownPressed = t.handleKeyEvent = t.handleEnterPressed = t.handleClick = t.handleBlur = t.handleAlphaNumerical = void 0);
    var r = d(n(12)),
      l = d(n(48)),
      o = d(n(10)),
      a = d(n(9)),
      i = d(n(44)),
      u = d(n(8)),
      s = d(n(40)),
      c = d(n(39));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.handleAlphaNumerical = r.default),
      (t.handleBlur = l.default),
      (t.handleClick = o.default),
      (t.handleEnterPressed = a.default),
      (t.handleKeyEvent = i.default),
      (t.handleKeyUpOrDownPressed = u.default),
      (t.handleTouchMove = s.default),
      (t.handleTouchStart = c.default);
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l;
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = n(5),
      a = h(o),
      i = h(n(4)),
      u = h(n(3)),
      s = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0)),
      c = n(49),
      d = n(11),
      f = n(2),
      p = h(n(31)),
      S = h(n(30)),
      _ = h(n(7)),
      v = h(n(29)),
      b = h(n(16)),
      O = h(n(14));
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var y = (function(e) {
      function t() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (e.state = _.default), (e.reducer = v.default), e;
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, o.Component),
        l(t, [
          {
            key: 'componentDidMount',
            value: function() {
              var e = this.props,
                t = e.options,
                n = e.noSelectionLabel,
                r = e.selectedValue,
                l = e.selectedValues,
                o = e.name,
                a = e.multiselect,
                i = e.disabled,
                u = e.altered;
              this.updateState({
                type: s.INITIALISE,
                value: {
                  options: t,
                  noSelectionLabel: n,
                  selectedValue: r,
                  selectedValues: l,
                  name: o,
                  multiselect: a,
                  disabled: i,
                  altered: u,
                },
              });
            },
          },
          {
            key: 'componentWillReceiveProps',
            value: function(e) {
              (0, i.default)(e, this.props) ||
                this.updateState({
                  type: s.UPDATE_VIA_PROPS,
                  value: r({}, this.props, e),
                });
            },
          },
          {
            key: 'componentDidUpdate',
            value: function(e, t) {
              var n = this.state,
                r = n.singleSelectSelectedOption,
                l = n.multiSelectSelectedOptions,
                o = n.multiselect,
                a = n.altered,
                i = this.props.onChange;
              return (
                o
                  ? (0, d.multiSelectBroadcastChange)(
                      t.multiSelectSelectedOptions.options,
                      l.options,
                      a,
                      i,
                    )
                  : (0, d.singleSelectBroadcastChange)(
                      t.singleSelectSelectedOption,
                      r,
                      a,
                      i,
                    ),
                !0
              );
            },
          },
          {
            key: 'updateState',
            value: function(e, t) {
              var n = this.reducer(this.state, e);
              this.setState(n, function() {
                t && t(n);
              }),
                (0, p.default)(this.props.name, e, n);
            },
          },
          {
            key: 'focusButton',
            value: function() {
              this.selectBox.querySelector('.rrs__button').focus();
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                n = t.prefix,
                r = t.caretIcon,
                l = t.disabled,
                o = this.state,
                i = o.altered,
                s = o.singleSelectInitialIndex,
                d = o.hasOptHeaders,
                f = o.isOptionsPanelOpen,
                p = o.isDragging,
                _ = o.noSelectionLabel,
                v = o.multiSelectInitialSelectedIndexes,
                h = o.multiSelectSelectedIndexes,
                y = o.multiSelectSelectedOptions,
                m = o.name,
                g = o.nextPotentialSelectionIndex,
                P = o.options,
                x = o.singleSelectSelectedIndex,
                E = o.singleSelectSelectedOption,
                I = o.multiselect,
                T = (0, S.default)({ state: this.state, props: this.props });
              return a.default.createElement(
                'div',
                {
                  'data-name': m,
                  className: (0, u.default)(
                    '\n          rrs\n          ' +
                      (!0 === f ? 'rrs--options-visible' : '') +
                      '\n          ' +
                      (i ? 'rrs--has-changed' : '') +
                      '\n          ' +
                      (d ? 'rrs--has-opt-headers' : '') +
                      ' \n        ',
                  ),
                  ref: function(t) {
                    e.selectBox = t;
                  },
                  tabIndex: '-1',
                  onKeyDown: function(t) {
                    return (0, c.handleKeyEvent)({
                      event: t,
                      ReactResponsiveSelectClassRef: e,
                      state: e.state,
                      props: e.props,
                    });
                  },
                  onTouchStart: function() {
                    return (0, c.handleTouchStart)({
                      ReactResponsiveSelectClassRef: e,
                      state: e.state,
                    });
                  },
                  onTouchMove: function() {
                    return (0, c.handleTouchMove)({
                      ReactResponsiveSelectClassRef: e,
                      state: e.state,
                    });
                  },
                  onTouchEnd: function(t) {
                    return (0, c.handleClick)({
                      event: t,
                      ReactResponsiveSelectClassRef: e,
                      state: e.state,
                    });
                  },
                  onMouseDown: function(t) {
                    return (0, c.handleClick)({
                      event: t,
                      ReactResponsiveSelectClassRef: e,
                      state: e.state,
                    });
                  },
                  onBlur: function() {
                    return (0, c.handleBlur)({
                      ReactResponsiveSelectClassRef: e,
                      state: e.state,
                      props: e.props,
                    });
                  },
                },
                I
                  ? a.default.createElement(b.default, {
                      noSelectionLabel: _,
                      disabled: l,
                      altered: i,
                      isDragging: p,
                      caretIcon: r,
                      customLabelText: T,
                      prefix: n,
                      name: m,
                      multiSelectInitialSelectedIndexes: v,
                      multiSelectSelectedOptions: y,
                      multiSelectSelectedIndexes: h,
                      nextPotentialSelectionIndex: g,
                      isOptionsPanelOpen: f,
                      options: P,
                    })
                  : a.default.createElement(O.default, {
                      noSelectionLabel: _,
                      disabled: l,
                      altered: i,
                      isDragging: p,
                      singleSelectInitialIndex: s,
                      caretIcon: r,
                      prefix: n,
                      name: m,
                      customLabelText: T,
                      singleSelectSelectedOption: E,
                      singleSelectSelectedIndex: x,
                      nextPotentialSelectionIndex: g,
                      isOptionsPanelOpen: f,
                      options: P,
                    }),
              );
            },
          },
        ]),
        t
      );
    })();
    (t.default = y), (y.propTypes = f.ReactResponsiveSelectProps);
  },
]);
