(function(e) {
    function t(t) {
        for (var n, r, l = t[0], d = t[1], c = t[2], s = 0, u = []; s < l.length; s++) r = l[s], Object.prototype.hasOwnProperty.call(i, r) && i[r] && u.push(i[r][0]), i[r] = 0;
        for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n]);
        m && m(t);
        while (u.length) u.shift()();
        return a.push.apply(a, c || []), o()
    }

    function o() {
        for (var e, t = 0; t < a.length; t++) {
            for (var o = a[t], n = !0, r = 1; r < o.length; r++) {
                var l = o[r];
                0 !== i[l] && (n = !1)
            }
            n && (a.splice(t--, 1), e = d(d.s = o[0]))
        }
        return e
    }
    var n = {},
        r = {
            app: 0
        },
        i = {
            app: 0
        },
        a = [];

    function l(e) {
        return d.p + "js/" + ({} [e] || e) + ".js"
    }

    function d(t) {
        if (n[t]) return n[t].exports;
        var o = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, d), o.l = !0, o.exports
    }
    d.e = function(e) {
        var t = [],
            o = {
                "chunk-3222d6ee": 1,
                "chunk-41357460": 1
            };
        r[e] ? t.push(r[e]) : 0 !== r[e] && o[e] && t.push(r[e] = new Promise((function(t, o) {
            for (var n = "css/" + ({} [e] || e) + ".css", i = d.p + n, a = document.getElementsByTagName("link"), l = 0; l < a.length; l++) {
                var c = a[l],
                    s = c.getAttribute("data-href") || c.getAttribute("href");
                if ("stylesheet" === c.rel && (s === n || s === i)) return t()
            }
            var u = document.getElementsByTagName("style");
            for (l = 0; l < u.length; l++) {
                c = u[l], s = c.getAttribute("data-href");
                if (s === n || s === i) return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function(t) {
                var n = t && t.target && t.target.src || i,
                    a = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                a.code = "CSS_CHUNK_LOAD_FAILED", a.request = n, delete r[e], m.parentNode.removeChild(m), o(a)
            }, m.href = i;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(m)
        })).then((function() {
            r[e] = 0
        })));
        var n = i[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var a = new Promise((function(t, o) {
                    n = i[e] = [t, o]
                }));
                t.push(n[2] = a);
                var c, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, d.nc && s.setAttribute("nonce", d.nc), s.src = l(e);
                var u = new Error;
                c = function(t) {
                    s.onerror = s.onload = null, clearTimeout(m);
                    var o = i[e];
                    if (0 !== o) {
                        if (o) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")", u.name = "ChunkLoadError", u.type = n, u.request = r, o[1](u)
                        }
                        i[e] = void 0
                    }
                };
                var m = setTimeout((function() {
                    c({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = c, document.head.appendChild(s)
            } return Promise.all(t)
    }, d.m = e, d.c = n, d.d = function(e, t, o) {
        d.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, d.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, d.t = function(e, t) {
        if (1 & t && (e = d(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (d.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) d.d(o, n, function(t) {
                return e[t]
            }.bind(null, n));
        return o
    }, d.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return d.d(t, "a", t), t
    }, d.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, d.p = window.externalPublicPath, d.oe = function(e) {
        throw console.error(e), e
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var u = 0; u < c.length; u++) t(c[u]);
    var m = s;
    a.push([0, "chunk-vendors"]), o()
})({
    0: function(e, t, o) {
        e.exports = o("56d7")
    },
    "1e42": function(e, t, o) {
        "use strict";
        o.d(t, "vb", (function() {
            return c
        })), o.d(t, "e", (function() {
            return s
        })), o.d(t, "nb", (function() {
            return u
        })), o.d(t, "mb", (function() {
            return m
        })), o.d(t, "K", (function() {
            return p
        })), o.d(t, "qb", (function() {
            return h
        })), o.d(t, "n", (function() {
            return f
        })), o.d(t, "m", (function() {
            return g
        })), o.d(t, "T", (function() {
            return T
        })), o.d(t, "fb", (function() {
            return y
        })), o.d(t, "t", (function() {
            return w
        })), o.d(t, "tb", (function() {
            return v
        })), o.d(t, "d", (function() {
            return E
        })), o.d(t, "s", (function() {
            return S
        })), o.d(t, "f", (function() {
            return b
        })), o.d(t, "cb", (function() {
            return N
        })), o.d(t, "j", (function() {
            return O
        })), o.d(t, "L", (function() {
            return x
        })), o.d(t, "gb", (function() {
            return L
        })), o.d(t, "D", (function() {
            return C
        })), o.d(t, "q", (function() {
            return R
        })), o.d(t, "Z", (function() {
            return F
        })), o.d(t, "ib", (function() {
            return I
        })), o.d(t, "X", (function() {
            return M
        })), o.d(t, "jb", (function() {
            return _
        })), o.d(t, "b", (function() {
            return P
        })), o.d(t, "h", (function() {
            return z
        })), o.d(t, "lb", (function() {
            return B
        })), o.d(t, "Y", (function() {
            return G
        })), o.d(t, "W", (function() {
            return W
        })), o.d(t, "O", (function() {
            return j
        })), o.d(t, "db", (function() {
            return q
        })), o.d(t, "sb", (function() {
            return V
        })), o.d(t, "kb", (function() {
            return $
        })), o.d(t, "U", (function() {
            return X
        })), o.d(t, "I", (function() {
            return Q
        })), o.d(t, "g", (function() {
            return ee
        })), o.d(t, "bb", (function() {
            return te
        })), o.d(t, "M", (function() {
            return oe
        })), o.d(t, "eb", (function() {
            return ne
        })), o.d(t, "l", (function() {
            return re
        })), o.d(t, "v", (function() {
            return ie
        })), o.d(t, "ob", (function() {
            return ae
        })), o.d(t, "a", (function() {
            return le
        })), o.d(t, "r", (function() {
            return de
        })), o.d(t, "w", (function() {
            return ce
        })), o.d(t, "E", (function() {
            return se
        })), o.d(t, "F", (function() {
            return ue
        })), o.d(t, "A", (function() {
            return me
        })), o.d(t, "S", (function() {
            return pe
        })), o.d(t, "V", (function() {
            return he
        })), o.d(t, "pb", (function() {
            return fe
        })), o.d(t, "C", (function() {
            return ge
        })), o.d(t, "hb", (function() {
            return Te
        })), o.d(t, "R", (function() {
            return ye
        })), o.d(t, "i", (function() {
            return we
        })), o.d(t, "B", (function() {
            return ve
        })), o.d(t, "p", (function() {
            return Ee
        })), o.d(t, "k", (function() {
            return Se
        })), o.d(t, "Q", (function() {
            return be
        })), o.d(t, "ub", (function() {
            return Ne
        })), o.d(t, "N", (function() {
            return Oe
        })), o.d(t, "J", (function() {
            return Ae
        })), o.d(t, "P", (function() {
            return xe
        })), o.d(t, "H", (function() {
            return Le
        })), o.d(t, "G", (function() {
            return Ce
        })), o.d(t, "z", (function() {
            return Fe
        })), o.d(t, "y", (function() {
            return Ie
        })), o.d(t, "u", (function() {
            return ke
        })), o.d(t, "o", (function() {
            return Me
        })), o.d(t, "x", (function() {
            return _e
        })), o.d(t, "c", (function() {
            return De
        })), o.d(t, "rb", (function() {
            return Pe
        })), o.d(t, "ab", (function() {
            return Ue
        }));
        o("bf67"), o("c9a1"), o("bed6");
        var n = o("0f9c"),
            r = o("4013");

        function i(e) {
            this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, this.init_genrand(e)
        }
        i.prototype.init_genrand = function(e) {
            for (this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++) e = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, this.mt[this.mti] = (1812433253 * ((4294901760 & e) >>> 16) << 16) + 1812433253 * (65535 & e) + this.mti, this.mt[this.mti] >>>= 0
        }, i.prototype.genrand_int32 = function() {
            var e, t = new Array(0, this.MATRIX_A);
            if (this.mti >= this.N) {
                var o;
                for (this.mti == this.N + 1 && this.init_genrand(5489), o = 0; o < this.N - this.M; o++) e = this.mt[o] & this.UPPER_MASK | this.mt[o + 1] & this.LOWER_MASK, this.mt[o] = this.mt[o + this.M] ^ e >>> 1 ^ t[1 & e];
                for (; o < this.N - 1; o++) e = this.mt[o] & this.UPPER_MASK | this.mt[o + 1] & this.LOWER_MASK, this.mt[o] = this.mt[o + (this.M - this.N)] ^ e >>> 1 ^ t[1 & e];
                e = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ e >>> 1 ^ t[1 & e], this.mti = 0
            }
            return e = this.mt[this.mti++], e ^= e >>> 11, e ^= e << 7 & 2636928640, e ^= e << 15 & 4022730752, e ^= e >>> 18, e >>> 0
        };
        var a = o("8a19"),
            l = o("682c"),
            d = o.n(l);
        const c = (e, t, o, n, r, i = 0, a = 0, l = []) => {
                let d = !1;
                if (o && (d = o(e, t, r, i, a, l)), !d && e.children && e.children.length > 0) {
                    let t = i + 1;
                    e.children.forEach((r, i) => {
                        c(r, e, o, n, !1, t, i, [...l, e])
                    })
                }
                n && n(e, t, r, i, a, l)
            },
            s = (e, t) => {
                let o = [e],
                    n = !1;
                "stop" === t(e, null) && (n = !0);
                while (o.length) {
                    if (n) break;
                    let e = o.shift();
                    e.children && e.children.length && e.children.forEach(r => {
                        n || (o.push(r), "stop" === t(r, e) && (n = !0))
                    })
                }
            },
            u = (e, t, o, n) => {
                let r = [],
                    i = e / t,
                    a = o / n;
                return r = i > a ? [o, o / i] : [i * n, n], r
            },
            m = (e, t, o, n) => {
                let r = e / t,
                    i = [];
                if (o && n)
                    if (e <= o && t <= n) i = [e, t];
                    else {
                        let e = o / n;
                        i = r > e ? [o, o / r] : [r * n, n]
                    }
                else o ? i = e <= o ? [e, t] : [o, o / r] : n && (i = t <= n ? [e, t] : [r * n, n]);
                return i
            },
            p = e => {
                e = e.replace(/<br>/gim, "\n");
                let t = document.createElement("div");
                return t.innerHTML = e, e = t.textContent, e
            },
            h = e => {
                try {
                    return JSON.parse(JSON.stringify(e))
                } catch (t) {
                    return null
                }
            },
            f = (e, t, o = !1) => {
                if (e.data = h(t.data), o) {
                    e.data.isActive = !1;
                    const t = _e(e.data);
                    t.forEach(e => {
                        e.isActive = !1
                    })
                }
                return e.children = [], t.children && t.children.length > 0 && t.children.forEach((t, n) => {
                    e.children[n] = f({}, t, o)
                }), e
            },
            g = (e, t, o = !1, n = !0) => (e.data = h(t.nodeData ? t.nodeData.data : t.data), n ? delete e.data.uid : e.data.uid || (e.data.uid = R()), o && (e.data.isActive = !1), e.children = [], t.children && t.children.length > 0 ? t.children.forEach((t, r) => {
                e.children[r] = g({}, t, o, n)
            }) : t.nodeData && t.nodeData.children && t.nodeData.children.length > 0 && t.nodeData.children.forEach((t, r) => {
                e.children[r] = g({}, t, o, n)
            }), e),
            T = (e, t = !1) => new Promise((o, n) => {
                const r = new Image;
                r.setAttribute("crossOrigin", "anonymous"), r.onload = () => {
                    try {
                        let e = document.createElement("canvas");
                        e.width = r.width, e.height = r.height;
                        let n = e.getContext("2d");
                        n.drawImage(r, 0, 0, r.width, r.height), t ? e.toBlob(e => {
                            o(e)
                        }) : o(e.toDataURL())
                    } catch (e) {
                        n(e)
                    }
                }, r.onerror = e => {
                    n(e)
                }, r.src = e
            }),
            y = e => {
                if (!/^data:/.test(e)) return e;
                let [t, o] = e.split(","), n = /^data:[^/]+\/([^;]+);/.exec(t), r = n[1];
                return {
                    type: r,
                    base64: o
                }
            },
            w = (e, t) => {
                let o = document.createElement("a");
                o.href = e, o.download = t, o.click()
            },
            v = (e, t = 300, o) => {
                let n = null;
                return (...r) => {
                    n || (n = setTimeout(() => {
                        e.call(o, ...r), n = null
                    }, t))
                }
            },
            E = (e, t = (() => {})) => {
                let o = 0,
                    n = e.length;
                if (n <= 0) return t();
                let r = () => {
                    o >= n ? t() : (e[o](), setTimeout(() => {
                        o++, r()
                    }, 0))
                };
                r()
            },
            S = e => e * (Math.PI / 180),
            b = e => e.replace(/([a-z])([A-Z])/g, (...e) => e[1] + "-" + e[2].toLowerCase());
        const N = function(e, t) {
                let o = !1,
                    n = null,
                    r = () => {
                        o = !1, t ? e.call(t) : e()
                    };
                if ("undefined" !== typeof MutationObserver) {
                    let e = 1,
                        t = new MutationObserver(r),
                        o = document.createTextNode(e);
                    t.observe(o, {
                        characterData: !0
                    }), n = function() {
                        e = (e + 1) % 2, o.data = e
                    }
                } else n = setTimeout;
                return function() {
                    o || (o = !0, n(r, 0))
                }
            },
            O = (e, t) => {
                let o = e.elRect,
                    {
                        scaleX: n,
                        scaleY: r,
                        translateX: i,
                        translateY: a
                    } = e.draw.transform(),
                    {
                        left: l,
                        top: d,
                        width: c,
                        height: s
                    } = t,
                    u = (l + c) * n + i,
                    m = (d + s) * r + a;
                l = l * n + i, d = d * r + a;
                let p = 0,
                    h = 0;
                return l < 0 && (p = -l), u > o.width && (p = -(u - o.width)), d < 0 && (h = -d), m > o.height && (h = -(m - o.height)), {
                    isOuter: 0 !== p || 0 !== h,
                    offsetLeft: p,
                    offsetTop: h
                }
            };
        let A = null;
        const x = e => (A || (A = document.createElement("div")), A.innerHTML = e, A.textContent),
            L = e => new Promise((t, o) => {
                let n = new FileReader;
                n.onload = e => {
                    t(e.target.result)
                }, n.onerror = e => {
                    o(e)
                }, n.readAsDataURL(e)
            });
        const C = e => new Promise(t => {
                let o = new Image;
                o.src = e, o.onload = () => {
                    t({
                        width: o.width,
                        height: o.height
                    })
                }, o.onerror = () => {
                    t({
                        width: 0,
                        height: 0
                    })
                }
            }),
            R = () => Object(n["a"])(),
            F = e => new Promise((t, o) => {
                let n = new FileReader;
                n.readAsDataURL(e), n.onload = async e => {
                    let o = e.target.result,
                        n = await C(o);
                    t({
                        url: o,
                        size: n
                    })
                }, n.onerror = e => {
                    o(e)
                }
            }),
            I = e => ([
                ["&nbsp;", "&#160;"]
            ].forEach(t => {
                e = e.replaceAll(t[0], t[1])
            }), e),
            k = e => Object.prototype.toString.call(e).slice(8, -1),
            M = e => null === e || void 0 === e || "" === e,
            _ = e => e.replaceAll(/(<[^\s]+)\s+style=["'][^'"]+["']\s*(>)/g, "$1$2");
        let D = null;
        const P = (e, t, o) => {
            D || (D = document.createElement("div")), D.innerHTML = e;
            let n = e => {
                let r = e.childNodes;
                r.forEach(e => {
                    1 === e.nodeType && (e.tagName.toLowerCase() === t ? e.style.cssText = o : n(e))
                })
            };
            return n(D), D.innerHTML
        };
        let U = null;
        const z = e => {
            U || (U = document.createElement("div")), U.innerHTML = e;
            for (let t = U.childNodes, o = t.length; o--;)
                if (1 == t[o].nodeType) return !0;
            return !1
        };
        let H = null;
        const B = (e, t, o) => {
            H || (H = document.createElement("div")), H.innerHTML = e;
            let n = e => {
                let r = e.childNodes;
                r.forEach(r => {
                    1 === r.nodeType ? n(r) : 3 === r.nodeType && e.replaceChild(document.createTextNode(r.nodeValue.replaceAll(t, o)), r)
                })
            };
            return n(H), H.innerHTML
        };
        const G = e => (e = String(e).replaceAll(/\s+/g, ""), ["#fff", "#ffffff", "#FFF", "#FFFFFF", "rgb(255,255,255)"].includes(e) || /rgba\(255,255,255,[^)]+\)/.test(e)),
            W = e => (e = String(e).replaceAll(/\s+/g, ""), ["", "transparent"].includes(e) || /rgba\(\d+,\d+,\d+,0\)/.test(e)),
            j = e => {
                let {
                    lineColor: t,
                    root: o,
                    second: n,
                    node: r
                } = e, i = [t, o.fillColor, o.color, n.fillColor, n.color, r.fillColor, r.color, o.borderColor, n.borderColor, r.borderColor];
                for (let a = 0; a < i.length; a++) {
                    let e = i[a];
                    if (!W(e) && !G(e)) return e
                }
            },
            Y = e => {
                const t = e => {
                    const o = e.childNodes;
                    o.forEach(e => {
                        1 === e.nodeType && (e.classList.contains("ql-formula") ? e.parentNode.removeChild(e) : t(e))
                    })
                };
                t(e)
            };
        let Z = null;
        const q = e => {
            Z || (Z = document.createElement("div")), Z.innerHTML = e;
            const t = Z.childNodes;
            let o = "";
            for (let n = 0; n < t.length; n++) {
                const e = t[n];
                1 === e.nodeType ? (Y(e), "p" === e.tagName.toLowerCase() ? o += e.textContent + "\n" : o += e.textContent) : 3 === e.nodeType && (o += e.nodeValue)
            }
            return o.replace(/\n$/, "")
        };
        let J = null;
        const V = e => {
            J || (J = document.createElement("div")), J.innerHTML = e;
            const t = J.childNodes;
            let o = [],
                n = "";
            for (let r = 0; r < t.length; r++) {
                const e = t[r];
                1 === e.nodeType ? "br" === e.tagName.toLowerCase() ? (o.push(n), n = "") : n += e.textContent : 3 === e.nodeType && (n += e.nodeValue)
            }
            return n && o.push(n), o.map(e => `<p><span>${pe(e)}</span></p>`).join("")
        };
        let K = null;
        const $ = e => {
                K || (K = document.createElement("div")), K.innerHTML = e;
                const t = K.querySelectorAll(".ql-formula");
                Array.from(t).forEach(e => {
                    const t = document.createTextNode("$smmformula$");
                    e.parentNode.replaceChild(t, e)
                });
                const o = K.childNodes;
                let n = [];
                for (let r = 0; r < o.length; r++) {
                    const e = o[r];
                    1 === e.nodeType ? n.push(e.textContent) : 3 === e.nodeType && n.push(e.nodeValue)
                }
                if (e = n.map(e => `<p><span>${pe(e)}</span></p>`).join(""), t.length > 0) {
                    e = e.replace(/\$smmformula\$/g, '<span class="smmformula"></span>'), K.innerHTML = e;
                    const o = K.querySelectorAll(".smmformula");
                    Array.from(o).forEach((e, o) => {
                        e.parentNode.replaceChild(t[o], e)
                    }), e = K.innerHTML
                }
                return e
            },
            X = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            Q = (e, t) => {
                const o = {};
                return Object.keys(t).forEach(n => {
                    const r = e[n],
                        i = t[n];
                    if (k(r) === k(i)) {
                        if ("Object" === k(r)) {
                            if (JSON.stringify(r) !== JSON.stringify(i)) return void(o[n] = i)
                        } else if (r !== i) return void(o[n] = i)
                    } else o[n] = i
                }), o
            },
            ee = e => !/^_/.test(e) && !r["g"].includes(e),
            te = e => e.reduce((e, t) => {
                const o = e.find(e => e.type === t.type);
                return o ? t.list.forEach(e => {
                    const t = o.list.find(t => t.name === e.name);
                    t ? t.icon = e.icon : o.list.push(e)
                }) : e.push({
                    ...t
                }), e
            }, []),
            oe = e => {
                let t = [];
                return e.forEach(o => {
                    e.find(e => e.uid !== o.uid && e.isAncestor(o)) || t.push(o)
                }), t
            },
            ne = e => {
                const t = {},
                    o = {};
                e.forEach(e => {
                    const n = e.parent;
                    if (n) {
                        const r = n.uid;
                        o[r] = n;
                        const i = e.getIndexInBrothers(),
                            a = {
                                node: e,
                                index: i
                            };
                        t[r] ? t[r].find(e => e.index === a.index) || t[r].push(a) : t[r] = [a]
                    }
                });
                const n = [];
                return Object.keys(t).forEach(e => {
                    if (t[e].length > 1) {
                        const r = t[e].map(e => e.index).sort((e, t) => e - t);
                        n.push({
                            node: o[e],
                            range: [r[0], r[r.length - 1]]
                        })
                    } else n.push({
                        node: t[e][0].node
                    })
                }), n
            },
            re = (e, t, o, n, r, i, a, l) => t > r && i > e && n > a && l > o,
            ie = e => {
                let t = window.getSelection(),
                    o = document.createRange();
                o.selectNodeContents(e), o.collapse(), t.removeAllRanges(), t.addRange(o)
            },
            ae = e => {
                let t = window.getSelection(),
                    o = document.createRange();
                o.selectNodeContents(e), t.removeAllRanges(), t.addRange(o)
            },
            le = (e, t = {}) => {
                const o = e => {
                    e.forEach(e => {
                        e.data = {
                            ...e.data,
                            ...t
                        }, e.children && e.children.length > 0 && o(e.children)
                    })
                };
                return o(e), e
            },
            de = (e, t = !1, o = null) => {
                const n = e => {
                    e.forEach(e => {
                        e.data || (e.data = {}), (t || M(e.data.uid)) && (e.data.uid = R()), o && o(e), e.children && e.children.length > 0 && n(e.children)
                    })
                };
                return n(e), e
            },
            ce = e => e ? Array.isArray(e) ? e : [e] : [],
            se = e => e.parent ? e.parent.nodeData.children.findIndex(t => t.data.uid === e.uid) : 0,
            ue = (e, t) => t.findIndex(t => t.uid === e.uid),
            me = e => {
                let t = 0;
                for (let r = 0; r < e.length; r++) t = e.charCodeAt(r) + ((t << 5) - t);
                const o = new i(t),
                    n = o.genrand_int32() % 360;
                return "hsla(" + n + ", 50%, 50%, 1)"
            },
            pe = e => ([
                ["&", "&amp;"],
                ["<", "&lt;"],
                [">", "&gt;"]
            ].forEach(t => {
                e = e.replace(new RegExp(t[0], "g"), t[1])
            }), e),
            he = (e, t) => {
                const o = k(e);
                if (o !== k(t)) return !1;
                if ("Object" === o) {
                    const o = Object.keys(e),
                        n = Object.keys(t);
                    if (o.length !== n.length) return !1;
                    for (let r = 0; r < o.length; r++) {
                        const i = o[r];
                        if (!n.includes(i)) return !1;
                        const a = he(e[i], t[i]);
                        if (!a) return !1
                    }
                    return !0
                }
                if ("Array" === o) {
                    if (e.length !== t.length) return !1;
                    for (let o = 0; o < e.length; o++) {
                        const n = e[o],
                            r = t[o],
                            i = k(n),
                            a = k(r);
                        if (i !== a) return !1;
                        const l = he(n, r);
                        if (!l) return !1
                    }
                    return !0
                }
                return e === t
            },
            fe = e => {
                navigator.clipboard && navigator.clipboard.writeText(JSON.stringify(e))
            },
            ge = async () => {
                let e = null,
                    t = null;
                if (navigator.clipboard) {
                    const o = await navigator.clipboard.read();
                    if (o && o.length > 0)
                        for (const n of o)
                            for (const o of n.types)
                                if (/^image\//.test(o)) t = await n.getType(o);
                                else if ("text/plain" === o) {
                        const t = await n.getType(o);
                        e = await t.text()
                    }
                }
                return {
                    text: e,
                    img: t
                }
            }, Te = e => {
                if (!e || !e.parent) return;
                const t = se(e); - 1 !== t && e.parent.nodeData.children.splice(t, 1)
            }, ye = e => (r["i"].forEach(t => {
                e = e.replaceAll(new RegExp(`<${t}([^>]*)>`, "g"), `<${t} $1 />`)
            }), e), we = (e, t) => {
                if (e.length !== t.length) return !1;
                for (let o = 0; o < e.length; o++)
                    if (!t.find(t => t.uid === e[o].uid)) return !1;
                return !0
            }, ve = () => {
                const e = navigator.userAgent.match(/\s+Chrome\/(.*)\s+/);
                return e && e[1] ? Number.parseFloat(e[1]) : ""
            }, Ee = e => ({
                simpleMindMap: !0,
                data: e
            }), Se = e => {
                let t = null;
                if ("string" === typeof e) try {
                    const o = JSON.parse(e);
                    "object" === typeof o && o.simpleMindMap && (t = o.data)
                } catch (n) {} else "object" === typeof e && e.simpleMindMap && (t = e.data);
                const o = !!t;
                return {
                    isSmm: o,
                    data: o ? t : String(e)
                }
            }, be = (e, t) => {
                e.preventDefault();
                const o = window.getSelection();
                if (!o.rangeCount) return;
                o.deleteFromDocument(), t = t || e.clipboardData.getData("text"), t = x(t);
                const n = t.split(/\n/g),
                    r = document.createDocumentFragment();
                n.forEach((e, t) => {
                    const o = document.createTextNode(e);
                    if (r.appendChild(o), t < n.length - 1) {
                        const e = document.createElement("br");
                        r.appendChild(e)
                    }
                }), o.getRangeAt(0).insertNode(r), o.collapseToEnd()
            }, Ne = e => {
                const t = {},
                    o = (e, n) => {
                        const r = e.data.uid;
                        n && n.children.push(r), t[r] = {
                            isRoot: !n,
                            data: {
                                ...e.data
                            },
                            children: []
                        }, e.children && e.children.length > 0 && e.children.forEach(e => {
                            o(e, t[r])
                        })
                    };
                return o(e, null), t
            }, Oe = (e, t, o, n) => Math.sqrt(Math.pow(e - o, 2) + Math.pow(t - n, 2)), Ae = (e, t) => {
                const o = e.x + e.width / 2,
                    n = e.y + e.height / 2,
                    r = t.x + t.width / 2,
                    i = t.y + t.height / 2;
                return o < r && n < i ? "left-top" : o > r && n < i ? "right-top" : o > r && n > i ? "right-bottom" : o < r && n > i ? "left-bottom" : o < r && n === i ? "left" : o > r && n === i ? "right" : o === r && n < i ? "top" : o === r && n > i ? "bottom" : "overlap"
            }, xe = ({
                addContentToHeader: e,
                addContentToFooter: t
            }) => {
                const o = [];
                let n = null,
                    r = 0,
                    i = null,
                    a = 0;
                const l = (e, t) => {
                    if ("function" === typeof e) {
                        const n = e();
                        if (!n) return;
                        const {
                            el: r,
                            cssText: i,
                            height: a
                        } = n;
                        if (r instanceof HTMLElement) {
                            De(r);
                            const e = Me({
                                el: r,
                                height: a
                            });
                            t(e, a)
                        }
                        i && o.push(i)
                    }
                };
                return l(e, (e, t) => {
                    n = e, r = t
                }), l(t, (e, t) => {
                    i = e, a = t
                }), {
                    cssTextList: o,
                    header: n,
                    headerHeight: r,
                    footer: i,
                    footerHeight: a
                }
            }, Le = (e, t = 0, o = 0, n = 0, r = 0, i = !1, a = !1) => {
                let l = 1 / 0,
                    d = -1 / 0,
                    c = 1 / 0,
                    s = -1 / 0;
                const u = (e, t) => {
                    if ((!t || !i) && e.group) try {
                        const {
                            x: t,
                            y: o,
                            width: n,
                            height: r
                        } = e.group.findOne(".smm-node-shape").rbox();
                        t < l && (l = t), t + n > d && (d = t + n), o < c && (c = o), o + r > s && (s = o + r)
                    } catch (o) {}!a && e._generalizationList.length > 0 && e._generalizationList.forEach(e => {
                        u(e.generalizationNode)
                    }), e.children && e.children.forEach(e => {
                        u(e)
                    })
                };
                return u(e, !0), l = l - t + n, c = c - o + r, d = d - t + n, s = s - o + r, {
                    left: l,
                    top: c,
                    width: d - l,
                    height: s - c
                }
            }, Ce = (e, t = 0, o = 0, n = 0, r = 0) => {
                let i = 1 / 0,
                    a = -1 / 0,
                    l = 1 / 0,
                    d = -1 / 0;
                return e.forEach(e => {
                    const {
                        left: c,
                        top: s,
                        width: u,
                        height: m
                    } = Le(e, t, o, n, r, !1, !0);
                    c < i && (i = c), c + u > a && (a = c + u), s < l && (l = s), s + m > d && (d = s + m)
                }), {
                    left: i,
                    top: l,
                    width: a - i,
                    height: d - l
                }
            }, Re = () => document.documentElement.requestFullScreen ? "fullscreenchange" : document.documentElement.webkitRequestFullScreen ? "webkitfullscreenchange" : document.documentElement.mozRequestFullScreen ? "mozfullscreenchange" : document.documentElement.msRequestFullscreen ? "msfullscreenchange" : void 0, Fe = Re(), Ie = e => {
                e.requestFullScreen ? e.requestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.mozRequestFullScreen && e.mozRequestFullScreen()
            }, ke = () => {
                document.fullscreenElement && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen && document.mozCancelFullScreen())
            }, Me = ({
                el: e,
                width: t,
                height: o
            }) => {
                const n = new a["c"];
                return void 0 !== t && n.width(t), void 0 !== o && n.height(o), n.add(e), n
            }, _e = e => {
                const t = e.generalization;
                return t ? Array.isArray(t) ? t : [t] : []
            }, De = e => {
                e.setAttribute("xmlns", "http://www.w3.org/1999/xhtml")
            }, Pe = e => (e = [...e], e.sort((e, t) => e.sortIndex - t.sortIndex), e), Ue = (e, t) => d()(e, t, {
                arrayMerge: (e, t) => t
            })
    },
    "365c": function(e, t, o) {
        "use strict";
        o.d(t, "a", (function() {
            return m
        })), o.d(t, "e", (function() {
            return p
        })), o.d(t, "d", (function() {
            return h
        })), o.d(t, "f", (function() {
            return f
        })), o.d(t, "b", (function() {
            return g
        })), o.d(t, "g", (function() {
            return T
        })), o.d(t, "c", (function() {
            return y
        }));
        var n = o("5848"),
            r = o("1e42"),
            i = o("2b0e"),
            a = o("c0d6");
        const l = "SIMPLE_MIND_MAP_DATA",
            d = "SIMPLE_MIND_MAP_LANG",
            c = "SIMPLE_MIND_MAP_LOCAL_CONFIG";
        let s = null;
        const u = (e, t) => t ? (e.data = Object(r["qb"])(t.data), e.children = [], t.children && t.children.length > 0 && t.children.forEach((t, o) => {
                e.children[o] = u({}, t)
            }), e) : null,
            m = () => {
                if (window.takeOverApp) return s = window.takeOverAppMethods.getMindMapData(), s;
                if (a["a"].state.isHandleLocalFile) return i["default"].prototype.getCurrentData();
                let e = localStorage.getItem(l);
                if (null === e) return Object(r["qb"])(n["a"]);
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return Object(r["qb"])(n["a"])
                }
            },
            p = e => {
                try {
                    let t = null;
                    if (t = window.takeOverApp ? s : m(), t.root = u({}, e), window.takeOverApp) return s = t, void window.takeOverAppMethods.saveMindMapData(t);
                    if (i["default"].prototype.$bus.$emit("write_local_file", t), a["a"].state.isHandleLocalFile) return;
                    let o = JSON.stringify(t);
                    localStorage.setItem(l, o)
                } catch (t) {
                    console.log(t)
                }
            },
            h = e => {
                try {
                    let t = null;
                    if (t = window.takeOverApp ? s : m(), t = {
                            ...t,
                            ...e
                        }, window.takeOverApp) return s = t, void window.takeOverAppMethods.saveMindMapData(t);
                    if (i["default"].prototype.$bus.$emit("write_local_file", t), a["a"].state.isHandleLocalFile) return;
                    let o = JSON.stringify(t);
                    localStorage.setItem(l, o)
                } catch (t) {
                    console.log(t)
                }
            },
            f = e => {
                window.takeOverApp ? window.takeOverAppMethods.saveLanguage(e) : localStorage.setItem(d, e)
            },
            g = () => {
                if (window.takeOverApp) return window.takeOverAppMethods.getLanguage() || "en";
                let e = localStorage.getItem(d);
                return e || (f("en"), "en")
            },
            T = e => {
                if (window.takeOverApp) return window.takeOverAppMethods.saveLocalConfig(e);
                localStorage.setItem(c, JSON.stringify(e))
            },
            y = () => {
                if (window.takeOverApp) return window.takeOverAppMethods.getLocalConfig();
                let e = localStorage.getItem(c);
                return e ? JSON.parse(e) : null
            }
    },
    "36f1": function(e, t, o) {
        "use strict";
        o("d82e")
    },
    4013: function(e, t, o) {
        "use strict";
        o.d(t, "a", (function() {
            return n
        })), o.d(t, "d", (function() {
            return r
        })), o.d(t, "e", (function() {
            return i
        })), o.d(t, "f", (function() {
            return a
        })), o.d(t, "g", (function() {
            return l
        })), o.d(t, "b", (function() {
            return d
        })), o.d(t, "c", (function() {
            return c
        })), o.d(t, "i", (function() {
            return s
        })), o.d(t, "h", (function() {
            return u
        }));
        const n = {
                CHANGE_THEME: "changeTheme",
                CHANGE_LAYOUT: "changeLayout",
                SET_DATA: "setData",
                TRANSFORM_TO_NORMAL_NODE: "transformAllNodesToNormalNode",
                MODE: {
                    READONLY: "readonly",
                    EDIT: "edit"
                },
                LAYOUT: {
                    LOGICAL_STRUCTURE: "logicalStructure",
                    LOGICAL_STRUCTURE_LEFT: "logicalStructureLeft",
                    MIND_MAP: "mindMap",
                    ORGANIZATION_STRUCTURE: "organizationStructure",
                    CATALOG_ORGANIZATION: "catalogOrganization",
                    TIMELINE: "timeline",
                    TIMELINE2: "timeline2",
                    FISHBONE: "fishbone",
                    VERTICAL_TIMELINE: "verticalTimeline"
                },
                DIR: {
                    UP: "up",
                    LEFT: "left",
                    DOWN: "down",
                    RIGHT: "right"
                },
                KEY_DIR: {
                    LEFT: "Left",
                    UP: "Up",
                    RIGHT: "Right",
                    DOWN: "Down"
                },
                SHAPE: {
                    RECTANGLE: "rectangle",
                    DIAMOND: "diamond",
                    PARALLELOGRAM: "parallelogram",
                    ROUNDED_RECTANGLE: "roundedRectangle",
                    OCTAGONAL_RECTANGLE: "octagonalRectangle",
                    OUTER_TRIANGULAR_RECTANGLE: "outerTriangularRectangle",
                    INNER_TRIANGULAR_RECTANGLE: "innerTriangularRectangle",
                    ELLIPSE: "ellipse",
                    CIRCLE: "circle"
                },
                MOUSE_WHEEL_ACTION: {
                    ZOOM: "zoom",
                    MOVE: "move"
                },
                INIT_ROOT_NODE_POSITION: {
                    LEFT: "left",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    CENTER: "center"
                },
                LAYOUT_GROW_DIR: {
                    LEFT: "left",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom"
                },
                PASTE_TYPE: {
                    CLIP_BOARD: "clipBoard",
                    CANVAS: "canvas"
                },
                SCROLL_BAR_DIR: {
                    VERTICAL: "vertical",
                    HORIZONTAL: "horizontal"
                },
                CREATE_NEW_NODE_BEHAVIOR: {
                    DEFAULT: "default",
                    NOT_ACTIVE: "notActive",
                    ACTIVE_ONLY: "activeOnly"
                },
                TAG_POSITION: {
                    RIGHT: "right",
                    BOTTOM: "bottom"
                }
            },
            r = {
                [n.INIT_ROOT_NODE_POSITION.LEFT]: 0,
                [n.INIT_ROOT_NODE_POSITION.TOP]: 0,
                [n.INIT_ROOT_NODE_POSITION.RIGHT]: 1,
                [n.INIT_ROOT_NODE_POSITION.BOTTOM]: 1,
                [n.INIT_ROOT_NODE_POSITION.CENTER]: .5
            },
            i = [{
                name: "Logical Structure",
                value: n.LAYOUT.LOGICAL_STRUCTURE
            }, {
                name: "Left Logical structure",
                value: n.LAYOUT.LOGICAL_STRUCTURE_LEFT
            }, {
                name: "Mind Map",
                value: n.LAYOUT.MIND_MAP
            }, {
                name: "Organizational Chart",
                value: n.LAYOUT.ORGANIZATION_STRUCTURE
            }, {
                name: "Catalog Organizational Chart",
                value: n.LAYOUT.CATALOG_ORGANIZATION
            }, {
                name: "Timeline",
                value: n.LAYOUT.TIMELINE
            }, {
                name: "Timeline 2",
                value: n.LAYOUT.TIMELINE2
            }, {
                name: "Vertical Timeline",
                value: n.LAYOUT.VERTICAL_TIMELINE
            }, {
                name: "Fishbone",
                value: n.LAYOUT.FISHBONE
            }],
            a = [n.LAYOUT.LOGICAL_STRUCTURE, n.LAYOUT.LOGICAL_STRUCTURE_LEFT, n.LAYOUT.MIND_MAP, n.LAYOUT.CATALOG_ORGANIZATION, n.LAYOUT.ORGANIZATION_STRUCTURE, n.LAYOUT.TIMELINE, n.LAYOUT.TIMELINE2, n.LAYOUT.VERTICAL_TIMELINE, n.LAYOUT.FISHBONE],
            l = ["text", "image", "imageTitle", "imageSize", "icon", "tag", "hyperlink", "hyperlinkTitle", "note", "expand", "isActive", "generalization", "richText", "resetRichText", "uid", "activeStyle", "associativeLineTargets", "associativeLineTargetControlOffsets", "associativeLinePoint", "associativeLineText", "attachmentUrl", "attachmentName", "notation", "outerFrame", "number", "range", "customLeft", "customTop", "customTextWidth", "checkbox"],
            d = {
                READ_CLIPBOARD_ERROR: "read_clipboard_error",
                PARSE_PASTE_DATA_ERROR: "parse_paste_data_error",
                CUSTOM_HANDLE_CLIPBOARD_TEXT_ERROR: "custom_handle_clipboard_text_error",
                LOAD_CLIPBOARD_IMAGE_ERROR: "load_clipboard_image_error",
                BEFORE_TEXT_EDIT_ERROR: "before_text_edit_error",
                EXPORT_ERROR: "export_error",
                EXPORT_LOAD_IMAGE_ERROR: "export_load_image_error",
                DATA_CHANGE_DETAIL_EVENT_ERROR: "data_change_detail_event_error"
            },
            c = "\n  /* 鼠标hover和激活时渲染的矩形 */\n  .smm-hover-node{\n    display: none;\n    opacity: 0.6;\n    stroke-width: 1;\n  }\n\n  .smm-node:not(.smm-node-dragging):hover .smm-hover-node{\n    display: block;\n  }\n\n  .smm-node.active .smm-hover-node, .smm-node-highlight .smm-hover-node{\n    display: block;\n    opacity: 1;\n    stroke-width: 2;\n  }\n",
            s = ["img", "br", "hr", "input", "link", "meta", "area"],
            u = 1.2
    },
    "41cb": function(e, t, o) {
        "use strict";
        var n = o("2b0e"),
            r = o("8c4f");
        n["default"].use(r["a"]);
        const i = [{
                path: "/",
                name: "Edit",
                component: () => o.e("chunk-41357460").then(o.bind(null, "5fca"))
            }, {
                path: "/index",
                redirect: "/"
            }, {
                path: "/doc/zh",
                component: () => o.e("chunk-3222d6ee").then(o.bind(null, "f226"))
            }],
            a = new r["a"]({
                routes: i
            });
        t["a"] = a
    },
    "56d7": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("2b0e"),
            r = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("router-view")], 1)
            },
            i = [],
            a = {
                name: "App",
                components: {}
            },
            l = a,
            d = (o("36f1"), o("2877")),
            c = Object(d["a"])(l, r, i, !1, null, null, null),
            s = c.exports,
            u = o("41cb"),
            m = o("c0d6"),
            p = o("5c96"),
            h = o.n(p),
            f = (o("0fae"), o("9c65"), o("0808"), o("c71c")),
            g = o("9225"),
            T = o("365c");
        n["default"].config.productionTip = !1;
        const y = new n["default"];
        n["default"].prototype.$bus = y, n["default"].use(h.a), n["default"].use(f["a"]);
        const w = () => {
            g["a"].locale = Object(T["b"])(), new n["default"]({
                render: e => e(s),
                router: u["a"],
                store: m["a"],
                i18n: g["a"]
            }).$mount("#app")
        };
        window.takeOverApp ? (window.initApp = w, window.$bus = y) : w()
    },
    5848: function(e, t, o) {
        "use strict";
        const n = () => ({
                image: "/enJFNMHnedQTYTESGfDkctCp2.jpeg",
                imageTitle: "图片名称",
                imageSize: {
                    width: 1e3,
                    height: 563
                },
                icon: ["priority_1"],
                tag: ["标签1", "标签2"],
                hyperlink: "http://lxqnsys.com/",
                hyperlinkTitle: "理想青年实验室",
                note: "理想青年实验室\n一个有意思的角落"
            }),
            r = (n(), n(), {
                root: {
                    data: {
                        text: "Root Node"
                    },
                    children: [{
                        data: {
                            text: "Child Node",
                            generalization: {
                                text: "Summary"
                            }
                        },
                        children: [{
                            data: {
                                text: "Branch Node"
                            },
                            children: []
                        }, {
                            data: {
                                text: "Branch Node"
                            },
                            children: []
                        }]
                    }]
                }
            });
        t["a"] = {
            ...r,
            theme: {
                template: "classic4",
                config: {}
            },
            layout: "logicalStructure",
            config: {}
        }
    },
    9225: function(e, t, o) {
        "use strict";
        var n = o("2b0e"),
            r = o("a925"),
            i = {
                baseStyle: {
                    title: "BaseStyle",
                    background: "Background",
                    color: "Color",
                    image: "Image",
                    imageRepeat: "Image repeat",
                    imagePosition: "Image position",
                    imageSize: "Image size",
                    line: "Line",
                    width: "Width",
                    style: "Style",
                    lineRadius: "Radius",
                    lineOfOutline: "Line of outline",
                    showArrow: "Show arrow",
                    nodePadding: "Node padding",
                    nodeMargin: "Node margin",
                    horizontal: "Horizontal",
                    vertical: "Vertical",
                    maximumWidth: "Max width",
                    maximumHeight: "Max height",
                    icon: "Icon",
                    size: "Size",
                    level2Node: "Level2 node",
                    belowLevel2Node: "Below level2 node",
                    nodeBorderType: "Node border style",
                    nodeUseLineStyle: "Use only has bottom border style",
                    otherConfig: "Other config",
                    associativeLine: "Associative line",
                    associativeLineWidth: "Width",
                    associativeLineColor: "Color",
                    associativeLineActiveWidth: "Active width",
                    associativeLineActiveColor: "Active color",
                    rootStyle: "Root Node",
                    associativeLineText: "Associative line text",
                    fontFamily: "Font family",
                    fontSize: "Font size",
                    rootLineStartPos: "Root line start pos",
                    center: "Center",
                    edge: "Edge",
                    rainbowLines: "Rainbow lines",
                    notUseRainbowLines: "Not use rainbow lines",
                    outerFramePadding: "Outer frame padding"
                },
                setting: {
                    title: "Setting",
                    openPerformance: "Enable performance mode",
                    enableFreeDrag: "Enable node free drag(Beta)",
                    isEnableNodeRichText: "Enable node rich text editing",
                    mousewheelAction: "Mouse wheel behavior",
                    zoomView: "Zoom view",
                    moveViewUpDown: "Move view up and down",
                    mousewheelZoomActionReverse: "Mouse Wheel Zoom",
                    mousewheelZoomActionReverse1: "Zoom out forward and zoom in back",
                    mousewheelZoomActionReverse2: "Zoom in forward and zoom out back",
                    createNewNodeBehavior: "Behavior of creating new node",
                    default: "Active new node and editing",
                    notActive: "Not active new node",
                    activeOnly: "Only active new node but not editing",
                    openRealtimeRenderOnNodeTextEdit: "Enable real-time rendering effect for text editing",
                    isShowScrollbar: "Show scrollbar",
                    isUseHandDrawnLikeStyle: "Use hand drawn like style",
                    watermark: "Watermark",
                    showWatermark: "Show watermark",
                    onlyExport: "Only export",
                    watermarkDefaultText: "Dover Corporation ©",
                    watermarkText: "Dover Corporation ©",
                    watermarkTextColor: "Text color",
                    watermarkLineSpacing: "Line spacing",
                    watermarkTextSpacing: "Text spacing",
                    watermarkAngle: "Angle",
                    watermarkTextOpacity: "Text opacity",
                    watermarkTextFontSize: "Font size",
                    belowNode: "Display below nodes",
                    tagPosition: "Node tag position",
                    tagPositionRight: "Text right",
                    tagPositionBottom: "Text bottom",
                    alwaysShowExpandBtn: "Always show expand btn",
                    enableAutoEnterTextEditWhenKeydown: "Auto enter text edit when keydown"
                },
                color: {
                    moreColor: "More color"
                },
                contextmenu: {
                    insertSiblingNode: "Insert sibling node",
                    insertChildNode: "Insert child node",
                    insertParentNode: "Insert parent node",
                    insertSummary: "Insert summary",
                    moveUpNode: "Move up node",
                    moveDownNode: "Move down node",
                    deleteNode: "Delete node",
                    deleteCurrentNode: "Only del cur node",
                    copyNode: "Copy node",
                    cutNode: "Cut node",
                    pasteNode: "Paste node",
                    backCenter: "Back root node",
                    expandAll: "Expand all",
                    unExpandAll: "Un expand all",
                    expandTo: "Expand to",
                    arrangeLayout: "Auto Arrange",
                    level1: "Level 1",
                    level2: "Level 2",
                    level3: "Level 3",
                    level4: "Level 4",
                    level5: "Level 5",
                    level6: "Level 6",
                    zenMode: "Zen mode",
                    fitCanvas: "Fit canvas",
                    removeImage: "Remove image",
                    removeHyperlink: "Remove hyperlink",
                    removeNote: "Remove note",
                    removeCustomStyles: "Remove custom styles",
                    removeAllNodeCustomStyles: "Remove all node custom styles",
                    exportNodeToPng: "Export node to png",
                    copyToClipboard: "Copy to clipboard",
                    copyToSmm: "SMM",
                    copyToJson: "JSON",
                    copyToMarkdown: "Markdown",
                    copyToTxt: "Txt",
                    copyToPng: "Png",
                    copySuccess: "Copy success",
                    copyFail: "Copy fail",
                    number: "Number child nodes",
                    expandNodeChild: "Expand all sub nodes",
                    addToDo: "Add toDo",
                    removeToDo: "Remove toDo"
                },
                count: {
                    words: "Words",
                    nodes: "Nodes"
                },
                dialog: {
                    cancel: "Cancel",
                    confirm: "Confirm"
                },
                export: {
                    title: "Export",
                    filename: "Filename",
                    include: "Is include config like theme and structure",
                    dedicatedFile: "Dedicated file",
                    jsonFile: "json file",
                    imageFile: "Image file",
                    svgFile: "svg file",
                    pdfFile: "pdf file",
                    markdownFile: "markdown file",
                    tips: "Tips 💡: .smm and .json file can be import",
                    isTransparent: "Background is transparent",
                    pngTips: "tips: Exporting pictures in rich text mode is time-consuming. It is recommended to export to svg format",
                    svgTips: "tips: Exporting pictures in rich text mode is time-consuming",
                    transformingDomToImages: "Converting nodes: ",
                    notifyTitle: "Info",
                    notifyMessage: "If the download is not triggered, check whether it is blocked by the browser",
                    paddingX: "Padding x",
                    paddingY: "Padding y",
                    useMultiPageExport: "Export multi page",
                    defaultFileName: "VSG_Dover Mind_Map",
                    addFooterTextPlaceholder: "For example: From simple-mind-map",
                    addFooterText: "Add text at the footer"
                },
                fullscreen: {
                    fullscreenShow: "Full screen show",
                    fullscreenEdit: "Full screen edit"
                },
                demonstrate: {
                    demonstrate: "Enter demonstration mode"
                },
                import: {
                    title: "Import",
                    selectFile: "Select file",
                    support: "Support",
                    file: "file",
                    pleaseSelect: "Please select",
                    maxFileNum: "At most one file can be selected",
                    notSelectTip: "Please select the file to import",
                    fileContentError: "The file content is incorrect",
                    importSuccess: "Import success",
                    fileParsingFailed: "File parsing failed",
                    xmindCanvasSelectDialogTitle: "Select the canvas to import"
                },
                navigatorToolbar: {
                    openMiniMap: "Open mini map",
                    closeMiniMap: "Close mini map",
                    readonly: "Change to eadonly",
                    edit: "Change to edit",
                    backToRoot: "Back to root node",
                    changeSourceCodeEdit: "Switch to source code editing mode"
                },
                nodeHyperlink: {
                    title: "Link",
                    link: "Href",
                    name: "Name"
                },
                nodeIcon: {
                    title: "Icon"
                },
                nodeImage: {
                    title: "Image",
                    imgTitle: "Title"
                },
                nodeNote: {
                    title: "Note"
                },
                nodeTag: {
                    title: "Tag",
                    addTip: "Press Enter to add"
                },
                outline: {
                    title: "Outline",
                    nodeDefaultText: "Branch node"
                },
                scale: {
                    zoomIn: "Zoom in",
                    zoomOut: "Zoom out"
                },
                shortcutKey: {
                    title: "Shortcut key"
                },
                strusture: {
                    title: "Strusture"
                },
                style: {
                    title: "Node style",
                    normal: "Normal",
                    active: "Active",
                    text: "Text",
                    fontFamily: "Font family",
                    fontSize: "Font size",
                    color: "color",
                    addFontWeight: "add font weight",
                    italic: "Italic",
                    textDecoration: "Text decoration",
                    underline: "Underline",
                    none: "None",
                    lineThrough: "Line through",
                    overline: "Overline",
                    border: "Border",
                    style: "Style",
                    width: "Width",
                    borderRadius: "Border radius",
                    background: "Background",
                    shape: "Shape",
                    line: "Line",
                    nodePadding: "Node padding",
                    horizontal: "Horizontal",
                    vertical: "Vertical",
                    gradientStyle: "Gradient",
                    startColor: "Start",
                    endColor: "End",
                    arrowDir: "Arrow dir",
                    arrowDirStart: "Start",
                    arrowDirEnd: "End",
                    direction: "Direction"
                },
                theme: {
                    title: "Theme",
                    classics: "Classics",
                    dark: "Darkness",
                    simple: "Simple",
                    coverTip: "You have currently customized the basic style, do you want to overwrite it?",
                    tip: "Tip",
                    cover: "Apply Theme",
                    reserve: "Cancel"
                },
                toolbar: {
                    undo: "Undo",
                    redo: "Redo",
                    insertSiblingNode: "Sibling node",
                    insertChildNode: "Child node",
                    deleteNode: "Delete node",
                    image: "Image",
                    icon: "Icon",
                    link: "Link",
                    note: "Note",
                    tag: "Tag",
                    summary: "Summary",
                    displayOutline: "Display outline",
                    baseStyle: "Base style",
                    theme: "Theme",
                    strusture: "Strusture",
                    newFile: "New file",
                    openFile: "Open file",
                    saveAs: "Save as",
                    import: "Import",
                    export: "Export",
                    shortcutKey: "Shortcut key",
                    associativeLine: "Associative line",
                    painter: "Painter",
                    formula: "Formula",
                    attachment: "Attachment",
                    outerFrame: "Outer frame",
                    more: "More",
                    selectFileTip: "Please select a file",
                    notSupportTip: "Your browser does not support this feature, or the current page is not using the HTTPS protocol",
                    tip: "Tip",
                    editingLocalFileTipFront: "Currently editing your local【",
                    editingLocalFileTipEnd: "】file",
                    fileContentError: "File content error",
                    fileOpenFailed: "File open failed",
                    defaultFileName: "VSG_Dover Mind_Map",
                    creatingTip: "Creating file",
                    directory: "Directory",
                    newFileTip: "Please export the currently edited file before creating a new one, Beware of content loss",
                    openFileTip: "Please export the currently edited file before opening it, Beware of content loss"
                },
                edit: {
                    newFeatureNoticeTitle: "New feature reminder",
                    newFeatureNoticeMessage: "This update supports node rich text editing, But there are some defects, The most important impact is that the time to export the image is proportional to the number of nodes, Therefore, if you are more dependent on export requirements, you can use【Base style】-【Other config】-【Enable node rich text editing】Set to turn off rich text editing mode.",
                    root: "Root node",
                    splitByWrap: "Is automatically split nodes based on line breaks?",
                    tip: "Tip",
                    yes: "Yes",
                    no: "No",
                    exportError: "Export failed",
                    dragTip: "Release here to import the file",
                    deleteNodeImgTip: "Are you sure to delete the node image?"
                },
                mouseAction: {
                    tip1: "Current: Left click to drag the canvas, right click to box select nodes",
                    tip2: "Current: Left click to box select nodes, right click to drag the canvas"
                },
                search: {
                    searchPlaceholder: "Please enter the search content",
                    replacePlaceholder: "Please enter replacement content",
                    replace: "Replace",
                    replaceAll: "Replace all",
                    cancel: "Cancel",
                    noResult: "No result"
                },
                nodeIconSidebar: {
                    title: "Icon/Sticker",
                    icon: "Icon",
                    sticker: "Sticker"
                },
                formulaSidebar: {
                    title: "Formula",
                    placeholder: "Please enter LaTeX syntax",
                    confirm: "Confirm",
                    common: "Common formulas",
                    tip: "Inserting formulas is not supported in non rich text mode"
                },
                richTextToolbar: {
                    bold: "Bold",
                    italic: "Italic",
                    underline: "Underline",
                    strike: "Strike",
                    fontFamily: "Font family",
                    fontSize: "Font size",
                    color: "Color",
                    backgroundColor: "Background color",
                    removeFormat: "Clear Style"
                },
                other: {
                    loading: "Loading, please wait..."
                },
                sourceCodeEdit: {
                    sourceCodeTip: "It is not recommended to modify the style in rich text mode because it requires synchronous modification of data and HTML structure.",
                    format: "Format",
                    copy: "Copy",
                    confirm: "Complete",
                    close: "Close",
                    formatErrorTip: "The JSON format is incorrect. Please check and try again",
                    copyTip: "Copied to clipboard",
                    formatTip: "Format complete"
                },
                attachment: {
                    deleteAttachment: "Delete attachment",
                    tip: "The attachment function is only available on the client side"
                },
                annotation: {
                    mark: "Mark",
                    show: "Show mark",
                    type: "Type",
                    color: "Color",
                    lineWidth: "Line width",
                    padding: "Padding",
                    animate: "Animate"
                },
                nodeOuterFrame: {
                    outerFrameSetting: "Setting",
                    deleteOuterFrame: "Delete outer frame",
                    boxStyle: "Box style",
                    boxColor: "Box color",
                    fillColor: "Fill color"
                },
                nodeTagStyle: {
                    placeholder: "Please enter the tag content",
                    delete: "Delete this tag"
                }
            },
            a = {
                baseStyle: {
                    title: "基础样式",
                    background: "背景",
                    color: "颜色",
                    image: "图片",
                    imageRepeat: "图片重复",
                    imagePosition: "图片位置",
                    imageSize: "图片大小",
                    line: "连线",
                    width: "粗细",
                    style: "风格",
                    lineRadius: "Round角大小",
                    lineOfOutline: "Summary的连线",
                    showArrow: "是否显示箭头",
                    nodePadding: "节点内边距",
                    nodeMargin: "节点外边距",
                    horizontal: "水平",
                    vertical: "垂直",
                    maximumWidth: "显示的最大宽度",
                    maximumHeight: "显示的最大高度",
                    icon: "图标",
                    size: "大小",
                    level2Node: "Child Node",
                    belowLevel2Node: "三级及以下节点",
                    nodeBorderType: "节点Boxed风格",
                    nodeUseLineStyle: "是否使用只有底Boxed的风格",
                    associativeLine: "关联线",
                    associativeLineWidth: "粗细",
                    associativeLineColor: "颜色",
                    associativeLineActiveWidth: "激活粗细",
                    associativeLineActiveColor: "激活颜色",
                    rootStyle: "Root Node",
                    associativeLineText: "关联线文字",
                    fontFamily: "字体",
                    fontSize: "字号",
                    rootLineStartPos: "Root Node连线起始位置",
                    center: "中心",
                    edge: "边缘",
                    rainbowLines: "彩虹线条",
                    notUseRainbowLines: "不使用彩虹线条",
                    outerFramePadding: "外框内边距"
                },
                setting: {
                    title: "设置",
                    openPerformance: "开启性能模式(Beta)",
                    enableFreeDrag: "是否开启节点自由拖拽",
                    isEnableNodeRichText: "是否开启节点富文本编辑",
                    mousewheelAction: "鼠标滚轮行为",
                    zoomView: "缩放视图",
                    moveViewUpDown: "上下移动视图",
                    mousewheelZoomActionReverse: "鼠标滚轮缩放",
                    mousewheelZoomActionReverse1: "向前缩小向后放大",
                    mousewheelZoomActionReverse2: "向前放大向后缩小",
                    createNewNodeBehavior: "创建新节点的行为",
                    default: "激活新节点及进入编辑",
                    notActive: "不激活新节点",
                    activeOnly: "只激活新节点，不进入编辑",
                    openRealtimeRenderOnNodeTextEdit: "开启文本编辑实时渲染效果",
                    isShowScrollbar: "是否显示滚动条",
                    isUseHandDrawnLikeStyle: "是否开启手绘风格",
                    watermark: "水印",
                    showWatermark: "是否显示水印",
                    watermarkDefaultText: "水印文字",
                    onlyExport: "是否仅在导出时显示",
                    watermarkText: "水印文字",
                    watermarkTextColor: "文字颜色",
                    watermarkLineSpacing: "水印行间距",
                    watermarkTextSpacing: "水印文字间距",
                    watermarkAngle: "旋转角度",
                    watermarkTextOpacity: "文字透明度",
                    watermarkTextFontSize: "文字字号",
                    belowNode: "显示在节点下方",
                    tagPosition: "节点标签显示的位置",
                    tagPositionRight: "文本右侧",
                    tagPositionBottom: "文本下面",
                    alwaysShowExpandBtn: "是否一直显示展开收起按钮",
                    enableAutoEnterTextEditWhenKeydown: "键盘输入时自动进入文本编辑"
                },
                color: {
                    moreColor: "更多颜色"
                },
                contextmenu: {
                    insertSiblingNode: "插入同级节点",
                    insertChildNode: "插入子级节点",
                    insertParentNode: "插入父节点",
                    insertSummary: "插入Summary",
                    moveUpNode: "上移节点",
                    moveDownNode: "下移节点",
                    deleteNode: "删除节点",
                    deleteCurrentNode: "仅删除当前	节点",
                    copyNode: "复制节点",
                    cutNode: "剪切节点",
                    pasteNode: "粘贴节点",
                    backCenter: "回到Root Node",
                    expandAll: "展开所有",
                    unExpandAll: "收起所有",
                    expandTo: "展开到",
                    arrangeLayout: "一键整理布局",
                    level1: "一级主题",
                    level2: "二级主题",
                    level3: "三级主题",
                    level4: "四级主题",
                    level5: "五级主题",
                    level6: "六级主题",
                    zenMode: "禅模式",
                    fitCanvas: "适应画布",
                    removeImage: "移除图片",
                    removeHyperlink: "移除超链接",
                    removeNote: "移除备注",
                    removeCustomStyles: "一键去除自定义样式",
                    removeAllNodeCustomStyles: "一键去除所有节点自定义样式",
                    exportNodeToPng: "导出该节点为图片",
                    copyToClipboard: "复制到剪贴板",
                    copyToSmm: "SMM",
                    copyToJson: "JSON",
                    copyToMarkdown: "Markdown",
                    copyToTxt: "Txt",
                    copyToPng: "图片",
                    copySuccess: "复制成功",
                    copyFail: "复制失败",
                    number: "编号其子节点",
                    expandNodeChild: "展开所有下级节点",
                    addToDo: "添加待办",
                    removeToDo: "删除待办"
                },
                count: {
                    words: "字数",
                    nodes: "节点"
                },
                dialog: {
                    cancel: "取 消",
                    confirm: "确 定"
                },
                export: {
                    title: "导出",
                    filename: "导出文件名称",
                    include: "是否包含主题、结构等配置数据",
                    dedicatedFile: "专有文件",
                    jsonFile: "json文件",
                    imageFile: "图片文件",
                    svgFile: "svg文件",
                    pdfFile: "pdf文件",
                    markdownFile: "markdown文件",
                    tips: "Tips 💡：.smm和.json文件可用于导入",
                    isTransparent: "背景是否透明",
                    pngTips: "tips：富文本模式导出图片非常耗时，建议导出为svg格式",
                    svgTips: "tips：富文本模式导出图片非常耗时",
                    transformingDomToImages: "正在转换节点：",
                    notifyTitle: "消息",
                    notifyMessage: "如果没有触发下载，请检查是否被浏览器拦截了",
                    paddingX: "水平内边距",
                    paddingY: "垂直内边距",
                    useMultiPageExport: "是否多页导出",
                    defaultFileName: "思维导图",
                    addFooterText: "底部添加文字",
                    addFooterTextPlaceholder: "比如：来自simple-mind-map"
                },
                fullscreen: {
                    fullscreenShow: "全屏查看",
                    fullscreenEdit: "全屏编辑"
                },
                demonstrate: {
                    demonstrate: "进入演示模式"
                },
                import: {
                    title: "导入",
                    selectFile: "选取文件",
                    support: "支持",
                    file: "文件",
                    pleaseSelect: "请选择",
                    maxFileNum: "最多只能选择一个文件",
                    notSelectTip: "请选择要导入的文件",
                    fileContentError: "文件内容有误",
                    importSuccess: "导入成功",
                    fileParsingFailed: "文件解析失败",
                    xmindCanvasSelectDialogTitle: "选择要导入的画布"
                },
                navigatorToolbar: {
                    openMiniMap: "开启小地图",
                    closeMiniMap: "关闭小地图",
                    readonly: "切换为只读模式",
                    edit: "切换为编辑模式",
                    backToRoot: "回到Root Node",
                    changeSourceCodeEdit: "切换为源码编辑模式"
                },
                nodeHyperlink: {
                    title: "超链接",
                    link: "链接",
                    name: "名称"
                },
                nodeIcon: {
                    title: "图标"
                },
                nodeImage: {
                    title: "图片",
                    imgTitle: "图片标题"
                },
                nodeNote: {
                    title: "备注"
                },
                nodeTag: {
                    title: "标签",
                    addTip: "请按回车键添加"
                },
                outline: {
                    title: "大纲",
                    nodeDefaultText: "分支节点"
                },
                scale: {
                    zoomIn: "放大",
                    zoomOut: "缩小"
                },
                shortcutKey: {
                    title: "快捷键"
                },
                strusture: {
                    title: "结构"
                },
                style: {
                    title: "节点样式",
                    normal: "常态",
                    active: "选中状态",
                    text: "文字",
                    fontFamily: "字体",
                    fontSize: "字号",
                    color: "颜色",
                    addFontWeight: "加粗",
                    italic: "斜体",
                    textDecoration: "划线",
                    none: "None",
                    underline: "Underline",
                    lineThrough: "中划线",
                    overline: "上划线",
                    border: "Boxed",
                    style: "样式",
                    width: "宽度",
                    borderRadius: "Round角",
                    background: "背景",
                    shape: "形状",
                    line: "线条",
                    nodePadding: "节点内边距",
                    horizontal: "水平",
                    vertical: "垂直",
                    gradientStyle: "渐变",
                    startColor: "起始",
                    endColor: "结束",
                    arrowDir: "箭头位置",
                    arrowDirStart: "头部",
                    arrowDirEnd: "尾部",
                    direction: "方向"
                },
                theme: {
                    title: "主题",
                    classics: "经典",
                    dark: "深色",
                    simple: "朴素",
                    coverTip: "你当前自定义过基础样式，是否覆盖？",
                    tip: "提示",
                    cover: "覆盖",
                    reserve: "保留"
                },
                toolbar: {
                    undo: "回退",
                    redo: "前进",
                    insertSiblingNode: "同级节点",
                    insertChildNode: "子节点",
                    deleteNode: "删除节点",
                    image: "图片",
                    icon: "图标",
                    link: "超链接",
                    note: "备注",
                    tag: "标签",
                    summary: "Summary",
                    displayOutline: "显示大纲",
                    baseStyle: "基础样式",
                    theme: "主题",
                    strusture: "结构",
                    newFile: "新建",
                    openFile: "打开",
                    saveAs: "另存为",
                    import: "导入",
                    export: "导出",
                    shortcutKey: "快捷键",
                    associativeLine: "关联线",
                    painter: "格式刷",
                    formula: "公式",
                    attachment: "附件",
                    outerFrame: "外框",
                    more: "更多",
                    selectFileTip: "请选择文件",
                    notSupportTip: "你的浏览器不支持该功能，或者当前页面非https协议",
                    tip: "提示",
                    editingLocalFileTipFront: "当前正在编辑你本机的【",
                    editingLocalFileTipEnd: "】文件",
                    fileContentError: "文件内容有误",
                    fileOpenFailed: "文件打开失败",
                    defaultFileName: "思维导图",
                    creatingTip: "正在创建文件",
                    directory: "目录",
                    newFileTip: "新建文件前请先导出当前编辑的文件，谨防内容丢失",
                    openFileTip: "打开文件前请先导出当前编辑的文件，谨防内容丢失"
                },
                edit: {
                    newFeatureNoticeTitle: "新特性提醒",
                    newFeatureNoticeMessage: "本次更新支持了节点富文本编辑，但是存在一定缺陷，最主要的影响是导出为图片的时间和节点数量成正比，所以对导出需求比较依赖的话可以通过【基础样式】-【其他配置】-【是否开启节点富文本编辑】设置关掉富文本编辑模式。",
                    root: "Root Node",
                    splitByWrap: "是否按换行自动分割节点？",
                    tip: "提示",
                    yes: "是",
                    no: "否",
                    exportError: "导出失败",
                    dragTip: "在此释放以导入该文件",
                    deleteNodeImgTip: "是否确认删除该节点图片？"
                },
                mouseAction: {
                    tip1: "当前：左键拖动画布，右键框选节点",
                    tip2: "当前：左键框选节点，右键拖动画布"
                },
                search: {
                    searchPlaceholder: "请输入查找内容",
                    replacePlaceholder: "请输入替换内容",
                    replace: "替换",
                    replaceAll: "全部替换",
                    cancel: "取消",
                    noResult: "暂None结果"
                },
                nodeIconSidebar: {
                    title: "图标/贴纸",
                    icon: "图标",
                    sticker: "贴纸"
                },
                formulaSidebar: {
                    title: "公式",
                    placeholder: "请输入 LaTeX 语法",
                    confirm: "完成",
                    common: "常用公式",
                    tip: "非富文本模式下不支持插入公式"
                },
                richTextToolbar: {
                    bold: "加粗",
                    italic: "斜体",
                    underline: "Underline",
                    strike: "Strike-through",
                    fontFamily: "字体",
                    fontSize: "字号",
                    color: "字体颜色",
                    backgroundColor: "背景颜色",
                    removeFormat: "清除样式"
                },
                other: {
                    loading: "正在加载，请稍后..."
                },
                sourceCodeEdit: {
                    sourceCodeTip: "富文本模式下不建议修改样式，因为需要同步修改数据及html结构。",
                    format: "格式化",
                    copy: "复制",
                    confirm: "完成",
                    close: "关闭",
                    formatErrorTip: "JSON格式有误，请检查后再试",
                    copyTip: "已复制到剪贴板",
                    formatTip: "格式化完成"
                },
                attachment: {
                    deleteAttachment: "删除附件",
                    tip: "附件功能仅在客户端可用"
                },
                annotation: {
                    mark: "标记",
                    show: "显示标记",
                    type: "类型",
                    color: "颜色",
                    lineWidth: "线宽",
                    padding: "内边距",
                    animate: "开启动画"
                },
                nodeOuterFrame: {
                    outerFrameSetting: "外框设置",
                    deleteOuterFrame: "删除外框",
                    boxStyle: "Boxed样式",
                    boxColor: "Boxed颜色",
                    fillColor: "填充颜色"
                },
                nodeTagStyle: {
                    placeholder: "请输入标签内容",
                    delete: "删除此标签"
                }
            },
            l = {
                baseStyle: {
                    title: "基本樣式",
                    background: "背景",
                    color: "顏色",
                    image: "圖片",
                    imageRepeat: "圖片重複",
                    imagePosition: "圖片位置",
                    imageSize: "圖片大小",
                    line: "連線",
                    width: "寬度",
                    style: "樣式",
                    lineRadius: "圓角半徑",
                    lineOfOutline: "Summary連線",
                    showArrow: "顯示箭頭",
                    nodePadding: "節點內距",
                    nodeMargin: "節點外距",
                    horizontal: "水平",
                    vertical: "垂直",
                    maximumWidth: "最大寬度",
                    maximumHeight: "最大高度",
                    icon: "圖示",
                    size: "大小",
                    level2Node: "第二層節點",
                    belowLevel2Node: "第三層及以下節點",
                    nodeBorderType: "節點邊框樣式",
                    nodeUseLineStyle: "僅使用底邊框樣式",
                    otherConfig: "其他設定",
                    associativeLine: "關聯線",
                    associativeLineWidth: "寬度",
                    associativeLineColor: "顏色",
                    associativeLineActiveWidth: "啟用時寬度",
                    associativeLineActiveColor: "啟用時顏色",
                    rootStyle: "根節點",
                    associativeLineText: "關聯線文字",
                    fontFamily: "字型",
                    fontSize: "字型大小",
                    rootLineStartPos: "根節點連線起始位置",
                    center: "中心",
                    edge: "邊緣",
                    rainbowLines: "彩虹線條",
                    notUseRainbowLines: "不使用彩虹線條",
                    outerFramePadding: "外框內距",
                    tagPosition: "節點標簽顯示的位置",
                    tagPositionRight: "文本右側",
                    tagPositionBottom: "文本下面",
                    alwaysShowExpandBtn: "是否壹直顯示展開收起按鈕",
                    enableAutoEnterTextEditWhenKeydown: "鍵盤輸入時自動進入文本編輯"
                },
                setting: {
                    title: "設置",
                    openPerformance: "啟用效能模式",
                    enableFreeDrag: "啟用節點自由拖曳 (Beta)",
                    isEnableNodeRichText: "啟用節點豐富文字編輯",
                    mousewheelAction: "滑鼠滾輪行為",
                    zoomView: "縮放檢視",
                    moveViewUpDown: "上下移動檢視",
                    mousewheelZoomActionReverse: "滑鼠滾輪縮放",
                    mousewheelZoomActionReverse1: "向前縮小，向後放大",
                    mousewheelZoomActionReverse2: "向前放大，向後縮小",
                    createNewNodeBehavior: "建立新節點行為",
                    default: "啟用新節點並進入編輯",
                    notActive: "不啟用新節點",
                    activeOnly: "僅啟用新節點，不進入編輯",
                    openRealtimeRenderOnNodeTextEdit: "開啟文本編輯實時渲染效果",
                    isShowScrollbar: "顯示捲軸",
                    isUseHandDrawnLikeStyle: "使用手繪風格",
                    watermark: "浮水印",
                    showWatermark: "顯示浮水印",
                    onlyExport: "僅在匯出時顯示",
                    watermarkDefaultText: "浮水印文字",
                    watermarkText: "浮水印文字",
                    watermarkTextColor: "文字顏色",
                    watermarkLineSpacing: "行距",
                    watermarkTextSpacing: "文字間距",
                    watermarkAngle: "旋轉角度",
                    watermarkTextOpacity: "文字透明度",
                    watermarkTextFontSize: "字型大小",
                    belowNode: "顯示在節點下方"
                },
                color: {
                    moreColor: "更多顏色"
                },
                contextmenu: {
                    insertSiblingNode: "插入同層節點",
                    insertChildNode: "插入子節點",
                    insertParentNode: "插入父節點",
                    insertSummary: "插入Summary",
                    moveUpNode: "上移節點",
                    moveDownNode: "下移節點",
                    deleteNode: "刪除節點",
                    deleteCurrentNode: "僅刪除目前節點",
                    copyNode: "複製節點",
                    cutNode: "剪下節點",
                    pasteNode: "貼上節點",
                    backCenter: "回到根節點",
                    expandAll: "展開全部",
                    unExpandAll: "收合全部",
                    expandTo: "展開至",
                    arrangeLayout: "一鍵整理版面",
                    level1: "第一層主題",
                    level2: "第二層主題",
                    level3: "第三層主題",
                    level4: "第四層主題",
                    level5: "第五層主題",
                    level6: "第六層主題",
                    zenMode: "禪模式",
                    fitCanvas: "適應畫布",
                    removeImage: "移除圖片",
                    removeHyperlink: "移除超連結",
                    removeNote: "移除備註",
                    removeCustomStyles: "一鍵移除自訂樣式",
                    removeAllNodeCustomStyles: "一鍵移除所有節點自訂樣式",
                    exportNodeToPng: "匯出此節點為圖片",
                    copyToClipboard: "複製到剪貼簿",
                    copyToSmm: "SMM",
                    copyToJson: "JSON",
                    copyToMarkdown: "Markdown",
                    copyToTxt: "Txt",
                    copyToPng: "圖片",
                    copySuccess: "複製成功",
                    copyFail: "複製失敗",
                    number: "將其子節點編號",
                    expandNodeChild: "展開所有下級節點",
                    addToDo: "添加待辦",
                    removeToDo: "刪除待辦"
                },
                count: {
                    words: "字數",
                    nodes: "節點數"
                },
                dialog: {
                    cancel: "取消",
                    confirm: "確定"
                },
                export: {
                    title: "匯出",
                    filename: "檔案名稱",
                    include: "包含主題、結構等設定資料",
                    dedicatedFile: "專用檔案",
                    jsonFile: "JSON 檔案",
                    imageFile: "圖片檔案",
                    svgFile: "SVG 檔案",
                    pdfFile: "PDF 檔案",
                    markdownFile: "Markdown 檔案",
                    tips: "提示：.smm 和 .json 檔案可以匯入",
                    isTransparent: "背景透明",
                    pngTips: "提示：在豐富文字模式下匯出圖片非常耗時，建議匯出為 SVG 格式",
                    svgTips: "提示：在豐富文字模式下匯出圖片非常耗時",
                    transformingDomToImages: "正在轉換節點：",
                    notifyTitle: "訊息",
                    notifyMessage: "如果沒有觸發下載，請檢查是否被瀏覽器封鎖",
                    paddingX: "水平內距",
                    paddingY: "垂直內距",
                    useMultiPageExport: "多頁匯出",
                    defaultFileName: "心智圖",
                    addFooterText: "在底部新增文字",
                    addFooterTextPlaceholder: "例如：來自 simple-mind-map"
                },
                fullscreen: {
                    fullscreenShow: "全螢幕檢視",
                    fullscreenEdit: "全螢幕編輯"
                },
                demonstrate: {
                    demonstrate: "進入展示模式"
                },
                import: {
                    title: "匯入",
                    selectFile: "選擇檔案",
                    support: "支援",
                    file: "檔案",
                    pleaseSelect: "請選擇",
                    maxFileNum: "最多只能選擇一個檔案",
                    notSelectTip: "請選擇要匯入的檔案",
                    fileContentError: "檔案內容有誤",
                    importSuccess: "匯入成功",
                    fileParsingFailed: "檔案解析失敗",
                    xmindCanvasSelectDialogTitle: "選擇要匯入的畫布"
                },
                navigatorToolbar: {
                    openMiniMap: "開啟小地圖",
                    closeMiniMap: "關閉小地圖",
                    readonly: "切換為唯讀模式",
                    edit: "切換為編輯模式",
                    backToRoot: "回到根節點",
                    changeSourceCodeEdit: "切換為原始碼編輯模式"
                },
                nodeHyperlink: {
                    title: "超連結",
                    link: "連結",
                    name: "名稱"
                },
                nodeIcon: {
                    title: "圖示"
                },
                nodeImage: {
                    title: "圖片",
                    imgTitle: "圖片標題"
                },
                nodeNote: {
                    title: "備註"
                },
                nodeTag: {
                    title: "標籤",
                    addTip: "請按 Enter 鍵新增"
                },
                outline: {
                    title: "大綱",
                    nodeDefaultText: "分支節點"
                },
                scale: {
                    zoomIn: "放大",
                    zoomOut: "縮小"
                },
                shortcutKey: {
                    title: "快速鍵"
                },
                strusture: {
                    title: "結構"
                },
                style: {
                    title: "節點樣式",
                    normal: "常態",
                    active: "選取狀態",
                    text: "文字",
                    fontFamily: "字型",
                    fontSize: "字型大小",
                    color: "顏色",
                    addFontWeight: "粗體",
                    italic: "斜體",
                    textDecoration: "文字裝飾",
                    none: "無",
                    underline: "底線",
                    lineThrough: "刪除線",
                    overline: "上劃線",
                    border: "邊框",
                    style: "樣式",
                    width: "寬度",
                    borderRadius: "圓角",
                    background: "背景",
                    shape: "形狀",
                    line: "線條",
                    nodePadding: "節點內距",
                    horizontal: "水平",
                    vertical: "垂直",
                    gradientStyle: "漸層",
                    startColor: "起始",
                    endColor: "結束",
                    arrowDir: "箭頭位置",
                    arrowDirStart: "頭部",
                    arrowDirEnd: "尾部"
                },
                theme: {
                    title: "主題",
                    classics: "經典",
                    dark: "深色",
                    simple: "簡約",
                    coverTip: "您目前已自訂過基本樣式，是否要覆蓋？",
                    tip: "提示",
                    cover: "覆蓋",
                    reserve: "保留"
                },
                toolbar: {
                    undo: "復原",
                    redo: "重做",
                    insertSiblingNode: "同層節點",
                    insertChildNode: "子節點",
                    deleteNode: "刪除節點",
                    image: "圖片",
                    icon: "圖示",
                    link: "超連結",
                    note: "備註",
                    tag: "標籤",
                    summary: "摘要",
                    displayOutline: "顯示大綱",
                    baseStyle: "基本樣式",
                    theme: "主題",
                    strusture: "結構",
                    newFile: "新增檔案",
                    openFile: "開啟檔案",
                    saveAs: "另存新檔",
                    import: "匯入",
                    export: "匯出",
                    shortcutKey: "快速鍵",
                    associativeLine: "關聯線",
                    painter: "格式刷",
                    formula: "公式",
                    attachment: "附件",
                    outerFrame: "外框",
                    more: "更多",
                    selectFileTip: "請選擇檔案",
                    notSupportTip: "您的瀏覽器不支援此功能，或者目前頁面非 HTTPS 協定",
                    tip: "提示",
                    editingLocalFileTipFront: "目前正在編輯您電腦上的【",
                    editingLocalFileTipEnd: "】檔案",
                    fileContentError: "檔案內容有誤",
                    fileOpenFailed: "檔案開啟失敗",
                    defaultFileName: "心智圖",
                    creatingTip: "正在建立檔案",
                    directory: "目錄",
                    newFileTip: "新增檔案前，請先匯出目前編輯的檔案，以免內容遺失",
                    openFileTip: "開啟檔案前，請先匯出目前編輯的檔案，以免內容遺失"
                },
                edit: {
                    newFeatureNoticeTitle: "新功能提醒",
                    newFeatureNoticeMessage: "本次更新支援了節點豐富文字編輯，但存在一些缺陷，最主要的影響是匯出為圖片的時間與節點數量成正比，所以如果比較依賴匯出功能，可以透過【基本樣式】-【其他設定】-【是否啟用節點豐富文字編輯】設定關閉豐富文字編輯模式。",
                    root: "根節點",
                    splitByWrap: "是否根據換行自動分割節點？",
                    tip: "提示",
                    yes: "是",
                    no: "否",
                    exportError: "匯出失敗",
                    dragTip: "在此釋放以匯入檔案"
                },
                mouseAction: {
                    tip1: "目前：左鍵拖曳畫布，右鍵框選節點",
                    tip2: "目前：左鍵框選節點，右鍵拖曳畫布"
                },
                search: {
                    searchPlaceholder: "請輸入搜尋內容",
                    replacePlaceholder: "請輸入取代內容",
                    replace: "取代",
                    replaceAll: "全部取代",
                    cancel: "取消",
                    noResult: "查無結果"
                },
                nodeIconSidebar: {
                    title: "圖示／貼圖",
                    icon: "圖示",
                    sticker: "貼圖"
                },
                formulaSidebar: {
                    title: "公式",
                    placeholder: "請輸入 LaTeX 語法",
                    confirm: "完成",
                    common: "常用公式",
                    tip: "僅在豐富文字模式下支援插入公式"
                },
                richTextToolbar: {
                    bold: "粗體",
                    italic: "斜體",
                    underline: "底線",
                    strike: "刪除線",
                    fontFamily: "字型",
                    fontSize: "字型大小",
                    color: "字型顏色",
                    backgroundColor: "背景顏色",
                    removeFormat: "清除樣式"
                },
                other: {
                    loading: "載入中，請稍候..."
                },
                sourceCodeEdit: {
                    sourceCodeTip: "不建議在豐富文字模式下修改樣式，因為需要同步修改資料和 HTML 結構。",
                    format: "格式化",
                    copy: "複製",
                    confirm: "完成",
                    close: "關閉",
                    formatErrorTip: "JSON 格式錯誤，請檢查後重試",
                    copyTip: "已複製到剪貼簿",
                    formatTip: "格式化完成"
                },
                attachment: {
                    deleteAttachment: "刪除附件",
                    tip: "附件功能僅在用戶端可用"
                },
                annotation: {
                    mark: "標記",
                    show: "顯示標記",
                    type: "類型",
                    color: "顏色",
                    lineWidth: "線寬",
                    padding: "內距",
                    animate: "動畫"
                },
                nodeOuterFrame: {
                    outerFrameSetting: "外框設定",
                    deleteOuterFrame: "刪除外框",
                    boxStyle: "邊框樣式",
                    boxColor: "邊框顏色",
                    fillColor: "填充顏色"
                },
                nodeTagStyle: {
                    placeholder: "請輸入標籤內容",
                    delete: "刪除此標籤"
                }
            },
            d = {
                zh: a,
                zhtw: l,
                en: i
            };
        n["default"].use(r["a"]);
        const c = new r["a"]({
            messages: d
        });
        t["a"] = c
    },
    "9c65": function(e, t, o) {},
    c0d6: function(e, t, o) {
        "use strict";
        var n = o("2b0e"),
            r = o("2f62"),
            i = o("5848"),
            a = o("365c");
        n["default"].use(r["a"]);
        const l = new r["a"].Store({
            state: {
                mindMapData: null,
                isHandleLocalFile: !1,
                localConfig: {
                    isZenMode: !1,
                    openNodeRichText: !0,
                    useLeftKeySelectionRightKeyDrag: !1,
                    isShowScrollbar: !1,
                    isUseHandDrawnLikeStyle: !1,
                    isDark: !1
                },
                activeSidebar: "",
                isOutlineEdit: !1,
                isReadonly: !1,
                isSourceCodeEdit: !1,
                extraTextOnExport: "",
                supportHandDrawnLikeStyle: !1,
                supportMark: !1,
                supportNumbers: !1,
                supportFreemind: !1,
                supportExcel: !1,
                supportCheckbox: !1,
                isDragOutlineTreeNode: !1
            },
            mutations: {
                setMindMapData(e, t) {
                    e.mindMapData = t
                },
                setIsHandleLocalFile(e, t) {
                    e.isHandleLocalFile = t
                },
                setLocalConfig(e, t) {
                    e.localConfig = {
                        ...e.localConfig,
                        ...t
                    }, Object(a["g"])(e.localConfig)
                },
                setActiveSidebar(e, t) {
                    e.activeSidebar = t
                },
                setIsOutlineEdit(e, t) {
                    e.isOutlineEdit = t
                },
                setIsReadonly(e, t) {
                    e.isReadonly = t
                },
                setIsSourceCodeEdit(e, t) {
                    e.isSourceCodeEdit = t
                },
                setExtraTextOnExport(e, t) {
                    e.extraTextOnExport = t
                },
                setSupportHandDrawnLikeStyle(e, t) {
                    e.supportHandDrawnLikeStyle = t
                },
                setSupportMark(e, t) {
                    e.supportMark = t
                },
                setSupportNumbers(e, t) {
                    e.supportNumbers = t
                },
                setSupportFreemind(e, t) {
                    e.supportFreemind = t
                },
                setSupportExcel(e, t) {
                    e.supportExcel = t
                },
                setSupportCheckbox(e, t) {
                    e.supportCheckbox = t
                },
                setIsDragOutlineTreeNode(e, t) {
                    e.isDragOutlineTreeNode = t
                }
            },
            actions: {
                getUserMindMapData(e) {
                    try {
                        let {
                            data: t
                        } = {
                            data: {
                                data: {
                                    mindMapData: i["a"]
                                }
                            }
                        };
                        e.commit("setMindMapData", t.data)
                    } catch (t) {
                        console.log(t)
                    }
                }
            }
        });
        t["a"] = l
    },
    d82e: function(e, t, o) {}
});