// \0rolldown/runtime.js
var e = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), t = /* @__PURE__ */ e(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.iterator;
	function m(e) {
		return typeof e != "object" || !e ? null : (e = p && e[p] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var h = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, g = Object.assign, _ = {};
	function v(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, v.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function y() {}
	y.prototype = v.prototype;
	function b(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	var x = b.prototype = new y();
	x.constructor = b, g(x, v.prototype), x.isPureReactComponent = !0;
	var S = Array.isArray;
	function C() {}
	var w = {
		H: null,
		A: null,
		T: null,
		S: null
	}, T = Object.prototype.hasOwnProperty;
	function E(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function D(e, t) {
		return E(e.type, t, e.props);
	}
	function ee(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function te(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var ne = /\/+/g;
	function re(e, t) {
		return typeof e == "object" && e && e.key != null ? te("" + e.key) : t.toString(36);
	}
	function ie(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(C, C) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function ae(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, ae(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + re(e, 0) : a, S(o) ? (i = "", c != null && (i = c.replace(ne, "$&/") + "/"), ae(o, r, i, "", function(e) {
			return e;
		})) : o != null && (ee(o) && (o = D(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(ne, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (S(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + re(a, u), c += ae(a, r, i, s, o);
		else if (u = m(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + re(a, u++), c += ae(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return ae(ie(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function O(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return ae(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function k(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var oe = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, se = {
		map: O,
		forEach: function(e, t, n) {
			O(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return O(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return O(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!ee(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = se, e.Component = v, e.Fragment = r, e.Profiler = a, e.PureComponent = b, e.StrictMode = i, e.Suspense = l, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return w.H.useMemoCache(e);
		}
	}, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = g({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !T.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return E(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) T.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return E(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = ee, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: k
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = w.T, n = {};
		w.T = n;
		try {
			var r = e(), i = w.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(C, oe);
		} catch (e) {
			oe(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), w.T = t;
		}
	}, e.unstable_useCacheRefresh = function() {
		return w.H.useCacheRefresh();
	}, e.use = function(e) {
		return w.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return w.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return w.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return w.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return w.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return w.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return w.H.useEffectEvent(e);
	}, e.useId = function() {
		return w.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return w.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return w.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return w.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return w.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return w.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return w.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return w.H.useRef(e);
	}, e.useState = function(e) {
		return w.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return w.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return w.H.useTransition();
	}, e.version = "19.2.0";
})), n = /* @__PURE__ */ e(((e, n) => {
	n.exports = t();
})), r = /* @__PURE__ */ e(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), i = /* @__PURE__ */ e(((e, t) => {
	t.exports = r();
})), a = n(), o = i(), s = "glisse-styles";
function c(e) {
	if (typeof document > "u" || document.getElementById(s)) return;
	let t = document.createElement("style");
	t.id = s, t.textContent = e, document.head.prepend(t);
}
var l = ":where(:root,[data-theme=light]){--lg-foreground:#000000e0;--lg-muted:#3c3c4399;--lg-glass:#fff9;--lg-glass-active:#ececf0d9;--lg-edge:#00000014;--lg-drop:#0000000f;--lg-selection:#0000001a;--lg-lens:#00000008;--lg-lens-drop:#0000001c;--lg-segment-track:#7676801f;--lg-segment-thumb:#fff;--lg-segment-label:#000;--lg-segment-lens:#00000008;--lg-surface:#fafafcdb;--lg-surface-edge:#00000014;--lg-shadow:#1919231f;--lg-highlight:#3c3c4317;--lg-separator:#3c3c4326;--lg-destructive:#ff383c;--lg-track:#3b3b424d;--lg-rail:#0000001a;--lg-on:#34c759;--lg-fill:#08f;--lg-ring:#0006;--lg-lens-shine:-1.5;--lg-rim-shine:.3;--lg-ease:cubic-bezier(.25, .1, .25, 1)}:where([data-theme=dark]){--lg-foreground:#fff;--lg-muted:#ebebf599;--lg-glass:#2828289e;--lg-glass-active:#4646469e;--lg-edge:#ffffff14;--lg-drop:transparent;--lg-selection:#ffffff25;--lg-lens:#ffffff0e;--lg-lens-drop:transparent;--lg-segment-track:transparent;--lg-segment-thumb:#ebebf54d;--lg-segment-label:#fff;--lg-segment-lens:transparent;--lg-surface:#1c1c1fdb;--lg-surface-edge:#ffffff21;--lg-shadow:#00000061;--lg-highlight:#ebebf521;--lg-separator:#ebebf529;--lg-destructive:#ff4245;--lg-track:#ebebf54d;--lg-rail:#ffffff1a;--lg-on:#30d158;--lg-fill:#0091ff;--lg-ring:#ffffff80;--lg-lens-shine:1;--lg-rim-shine:.13}@media (prefers-color-scheme:dark){:where(:root:not([data-theme=light])){--lg-foreground:#fff;--lg-muted:#ebebf599;--lg-glass:#2828289e;--lg-glass-active:#4646469e;--lg-edge:#ffffff14;--lg-drop:transparent;--lg-selection:#ffffff25;--lg-lens:#ffffff0e;--lg-lens-drop:transparent;--lg-segment-track:transparent;--lg-segment-thumb:#ebebf54d;--lg-segment-label:#fff;--lg-segment-lens:transparent;--lg-surface:#1c1c1fdb;--lg-surface-edge:#ffffff21;--lg-shadow:#00000061;--lg-highlight:#ebebf521;--lg-separator:#ebebf529;--lg-destructive:#ff4245;--lg-track:#ebebf54d;--lg-rail:#ffffff1a;--lg-on:#30d158;--lg-fill:#0091ff;--lg-ring:#ffffff80;--lg-lens-shine:1;--lg-rim-shine:.13}}.lg-glass{background-color:var(--lg-glass);background-image:var(--lg-rim,none);-webkit-backdrop-filter:blur(var(--lg-blur,3px)) var(--lg-filter,saturate(1.5));backdrop-filter:blur(var(--lg-blur,3px)) var(--lg-filter,saturate(1.5));box-shadow:inset 0 0 0 .5px var(--lg-edge), 0 1px 3px var(--lg-drop);background-size:100% 100%;position:relative}.lg-glass[data-rim]{box-shadow:0 1px 3px var(--lg-drop)}.lg-glass:after{content:\"\";border-radius:inherit;pointer-events:none;background:radial-gradient(circle 240px at var(--lg-x,50%) var(--lg-y,50%), #ffffff09, #ffffff06 50%, transparent);opacity:0;transition:opacity .22s ease-in-out;position:absolute;inset:0}.lg-glass[data-pressed]:after{opacity:1;transition-duration:0s}.lg-button{height:40px;color:var(--lg-foreground);font:inherit;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;border:0;border-radius:20px;justify-content:center;align-items:center;gap:8px;padding:0 16px;font-size:14px;transition:background-color .2s;display:inline-flex}.lg-button[data-icon]{padding-left:12px}.lg-button[data-icon=only]{width:40px;padding:0}.lg-button>svg{flex:none;width:20px;height:20px}.lg-button:is(:active,[data-pressed]){background-color:var(--lg-glass-active);transition-duration:0s}@media (hover:hover) and (pointer:fine){.lg-button:hover{background-color:var(--lg-glass-active)}}.lg-button:disabled{background-color:var(--lg-glass);opacity:.35;cursor:default}.lg-button[data-destructive]:not([data-tint]){--lg-tint:var(--lg-destructive)}.lg-button:is([data-tint],[data-destructive]){color:var(--lg-tint)}.lg-button[data-variant=filled]{--lg-button-fill:var(--lg-tint,var(--lg-fill));color:#fff}.lg-button[data-variant=filled],.lg-button[data-variant=filled]:disabled{background-color:var(--lg-button-fill)}.lg-button[data-variant=filled]:is(:active,[data-pressed]){background-color:color-mix(in srgb, var(--lg-button-fill) 85%, #000)}@media (hover:hover) and (pointer:fine){.lg-button[data-variant=filled]:hover{background-color:color-mix(in srgb, var(--lg-button-fill) 88%, #fff)}.lg-button[data-variant=filled]:hover:is(:active,[data-pressed]){background-color:color-mix(in srgb, var(--lg-button-fill) 85%, #000)}}.lg-button:focus-visible,.lg-tab:focus-visible,.lg-switch:focus-visible,.lg-menu-item:focus-visible{outline:2px solid var(--lg-ring);outline-offset:2px}.lg-tab-bar{--lg-tab-width:84px;--lg-tab-height:32px;--lg-tab-inset:4px;--lg-thumb-inset:0px;--lg-lens-grow-x:27px;--lg-lens-grow-y:20px;padding:var(--lg-tab-inset);border-radius:calc(var(--lg-tab-height) / 2 + var(--lg-tab-inset));touch-action:pan-y;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;display:inline-flex;position:relative}.lg-tab-bar-glass{border-radius:inherit;pointer-events:none;position:absolute;inset:0}.lg-tab-bar-glass:before{content:\"\";border-radius:inherit;background:radial-gradient(circle 260px at var(--lg-x,20%) 50%, #ffffff17, #ffffff0b 60%, transparent);opacity:0;transition:opacity .16s;position:absolute;inset:0}:is(.lg-tab-bar,.lg-segmented)[data-lifted] .lg-tab-bar-glass:before{opacity:1;transition-duration:.12s}.lg-tab-labels{--lg-room-x:calc(var(--lg-lens-grow-x) / 2 + 4px);--lg-room-y:calc(var(--lg-lens-grow-y) / 2 + 4px);z-index:1;margin:calc(var(--lg-room-y) * -1) calc(var(--lg-room-x) * -1);padding:var(--lg-room-y) var(--lg-room-x);pointer-events:none;display:flex;position:relative}.lg-tab-lensed{top:var(--lg-tab-inset);left:var(--lg-tab-inset);color:var(--lg-tab-selected,var(--lg-foreground));visibility:hidden;position:absolute}:is(.lg-tab-bar,.lg-segmented)[data-lensing] .lg-tab-tint{visibility:hidden}.lg-tab,.lg-tab-copy{width:var(--lg-tab-width);height:var(--lg-tab-height);font:inherit;flex:none;justify-content:center;align-items:center;font-size:14px;display:flex}.lg-tab{z-index:1;border-radius:calc(var(--lg-tab-height) / 2);color:var(--lg-muted);cursor:pointer;pointer-events:auto;-webkit-touch-callout:none;background:0 0;border:0;padding:0;text-decoration:none;transition:color .2s;position:relative}.lg-tab:focus-visible{outline-offset:-2px}.lg-tab-face{display:contents}.lg-tab-bar:not([data-away]) .lg-tab[data-selected]>.lg-tab-face{color:#0000}.lg-tab-text{text-box:trim-both cap alphabetic;display:block}.lg-tab-bar[data-icons]{--lg-tab-width:72px;--lg-tab-height:52px;--lg-lens-grow-x:24px;--lg-lens-grow-y:16px;--lg-tab-selected:var(--lg-fill)}.lg-tab-bar[data-icons] :is(.lg-tab,.lg-tab-copy){flex-direction:column;gap:1px;font-size:10px;font-weight:500}.lg-tab-bar[data-icons] .lg-tab{color:var(--lg-foreground)}.lg-tab-icon{display:flex}.lg-tab-icon>svg{width:26px;height:26px}@media (hover:hover) and (pointer:fine){.lg-tab:hover{color:var(--lg-foreground)}}.lg-tab-lens,.lg-tab-tint,.lg-segmented-thumb{top:calc(var(--lg-tab-inset) + var(--lg-thumb-inset));left:calc(var(--lg-tab-inset) + var(--lg-thumb-inset));width:calc(var(--lg-tab-width) - 2 * var(--lg-thumb-inset));height:calc(var(--lg-tab-height) - 2 * var(--lg-thumb-inset));border-radius:calc(var(--lg-tab-height) / 2 - var(--lg-thumb-inset));pointer-events:none;transform:translateX(calc(var(--lg-tab-width) * var(--lg-index,0)));will-change:transform;transition:opacity .14s;position:absolute}.lg-tab-tint{z-index:1;color:var(--lg-tab-selected,var(--lg-foreground));overflow:hidden}.lg-tab-row{height:var(--lg-tab-height);margin:calc(var(--lg-thumb-inset) * -1) 0 0 calc(var(--lg-thumb-inset) * -1);transform:translateX(calc(var(--lg-tab-width) * var(--lg-index,0) * -1));transform-origin:0 0;will-change:transform;display:flex}.lg-tab-lens.lg-glass{z-index:2;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:0 calc(7px / var(--lg-lift-y,1)) calc(11px / var(--lg-lift-y,1)) color-mix(in srgb, var(--lg-lens-drop) calc(var(--lg-lift,0) * 100%), transparent);background-color:#0000;background-image:none;transition:opacity .14s,background-color .14s}.lg-tab-bar[data-lifted] .lg-tab-lens.lg-glass{background-color:var(--lg-lens);transition-duration:.1s}.lg-tab-lens:before{content:\"\";border-radius:inherit;background:var(--lg-selection);transition:opacity .14s;position:absolute;inset:0}.lg-tab-lens[data-pressed]:after{opacity:.2}.lg-tab-bar[data-lifted] .lg-tab-lens:before{opacity:0;transition-duration:.1s}:is(.lg-tab-bar,.lg-segmented)[data-refracting] .lg-tab-lens.lg-glass{background-image:var(--lg-rim,none)}:is(.lg-tab-bar,.lg-segmented)[data-refracting][data-light] .lg-tab-lens.lg-glass{background-image:var(--lg-rim-bright,var(--lg-rim,none))}.lg-segmented[data-refracting][data-light] .lg-tab-lens.lg-glass,.lg-tab-bar[data-under][data-light] .lg-tab-lens.lg-glass{z-index:0;-webkit-backdrop-filter:var(--lg-filter,none);backdrop-filter:var(--lg-filter,none)}.lg-tab-bar[data-light] .lg-tab-lens:before{opacity:var(--lg-rest,1);transition:none}.lg-tab-bar[data-light] .lg-tab-lens.lg-glass{background-color:color-mix(in srgb, var(--lg-lens) calc(var(--lg-under,0) * 100%), transparent);transition:opacity .14s}:is(:is(.lg-tab-bar,.lg-segmented)[data-hidden] :is(.lg-tab-lens,.lg-tab-tint,.lg-segmented-thumb),:is(.lg-tab-bar,.lg-segmented):not([data-ready]):not(:has([data-selected])) :is(.lg-tab-lens,.lg-tab-tint,.lg-segmented-thumb)){opacity:0}.lg-segmented{--lg-tab-width:84px;--lg-tab-height:32px;--lg-tab-inset:0px;--lg-thumb-inset:2px;--lg-lens-grow-x:24px;--lg-lens-grow-y:16px;--lg-tab-selected:var(--lg-segment-label);border-radius:calc(var(--lg-tab-height) / 2);touch-action:pan-y;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;display:inline-flex;position:relative}.lg-segmented>.lg-tab-bar-glass{background-image:var(--lg-rim,none), linear-gradient(var(--lg-segment-track) 0 0)}.lg-segmented :is(.lg-tab,.lg-tab-copy){font-size:13px}.lg-segmented .lg-tab,.lg-segmented .lg-tab:hover{color:var(--lg-segment-label)}.lg-segmented :is(.lg-tab,.lg-tab-copy)[data-selected]{font-weight:500}.lg-segmented .lg-tab-tint{display:none}.lg-segmented-thumb{background:var(--lg-segment-thumb)}.lg-segmented[data-lifted] .lg-segmented-thumb{opacity:0;transition-duration:.1s}.lg-segmented .lg-tab-lens:before{content:none}.lg-segmented[data-lifted] .lg-tab-lens.lg-glass{background-color:var(--lg-segment-lens);transition-duration:.1s}.lg-input{box-sizing:border-box;width:100%;max-width:360px;height:40px;color:var(--lg-foreground);border-radius:20px;align-items:center;gap:10px;padding:0 14px;transition:background-color .2s;display:flex}.lg-input:focus-within{background-color:var(--lg-glass-active)}.lg-input input{min-width:0;height:100%;color:inherit;font:inherit;background:0 0;border:0;outline:0;flex:1;padding:0;font-size:14px}.lg-input input::placeholder{color:var(--lg-muted)}.lg-input input::-webkit-search-cancel-button{display:none}.lg-input-icon{width:16px;height:16px;color:var(--lg-muted);flex:none;place-items:center;display:grid}.lg-input-icon>svg{width:100%;height:100%}.lg-input-clear{width:32px;height:32px;color:var(--lg-muted);cursor:pointer;background:0 0;border:0;border-radius:50%;flex:none;place-items:center;margin-right:-8px;padding:0;display:grid}.lg-input-clear svg{width:14px;height:14px}.lg-input:has(input:disabled){opacity:.35}.lg-switch-thumb,.lg-slider-thumb{--lg-settled:calc(1 - var(--lg-lift,0));--lg-thumb-blur:calc(2px * var(--lg-settled) + var(--lg-thumb-frost,.5px) * var(--lg-lift,0));pointer-events:none;-webkit-backdrop-filter:blur(var(--lg-thumb-blur)) brightness(calc(1 + .15 * var(--lg-settled))) saturate(1.5);backdrop-filter:blur(var(--lg-thumb-blur)) brightness(calc(1 + .15 * var(--lg-settled))) saturate(1.5);border-radius:999px;position:absolute;box-shadow:0 6px 24px #0003,inset 0 0 0 1.5px #ffffff80,inset 0 2px 1px #ffffff73,inset 2px 7px 24px #00000017,inset -2px -7px 24px #ffffff29}.lg-thumb-face{border-radius:inherit;background:#fff;position:absolute;inset:0}.lg-switch{--lg-scale:.375;width:calc(160px * var(--lg-scale));height:calc(67px * var(--lg-scale));cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent;background:0 0;border:0;border-radius:999px;flex:none;padding:0;position:relative}.lg-switch:before{content:\"\";inset:min(0px, calc((67px * var(--lg-scale) - 44px) / 2)) -8px;position:absolute}.lg-switch-bed{pointer-events:none;position:absolute;inset:-6px -12px}.lg-switch-track,.lg-switch-fill{border-radius:999px;position:absolute}.lg-switch-track{background:var(--lg-track);inset:6px 12px}.lg-switch-fill{background:var(--lg-on);opacity:0;inset:0}.lg-switch-inset{visibility:hidden}.lg-switch-inset .lg-switch-track{width:calc((100% - 24px) * (.85 + .1 * var(--lg-lift,0)));height:calc((100% - 12px) * .75 * (.525 + .45 * var(--lg-lift,0)));margin:auto;inset:0}.lg-switch-thumb{top:50%;left:calc(-21.95px * var(--lg-scale));width:calc(146px * var(--lg-scale));height:calc(92px * var(--lg-scale));transform:translateY(-50%)scale(.65)}.lg-switch[aria-checked=true] .lg-switch-fill{opacity:1}.lg-switch[aria-checked=true] .lg-switch-thumb{transform:translate(calc(57.9px * var(--lg-scale)), -50%) scale(.65)}.lg-switch:disabled{opacity:.35;cursor:default}.lg-slider{width:100%;height:40px;position:relative}.lg-slider-bed{pointer-events:none;position:absolute;inset:-4px -16px}.lg-slider-track{background:var(--lg-rail);border-radius:3px;height:6px;position:absolute;inset:21px 16px auto}.lg-slider-fill{width:calc((100% - 36px) * var(--lg-progress) + 18px);border-radius:inherit;background:var(--lg-fill);height:100%;display:block}.lg-slider-magnified{visibility:hidden}.lg-slider-magnified .lg-slider-track{height:calc(var(--lg-slider-line,8px) * (.6 + .4 * var(--lg-lift,0)));border-radius:999px;margin:auto 0;inset:0 16px}.lg-slider-magnified .lg-slider-fill{--lg-travel:calc((100% - 36px) * var(--lg-progress));width:calc(var(--lg-travel) + min(18px, var(--lg-travel) * 4) + max(0px, 18px - (100% - 36px - var(--lg-travel)) * 4))}.lg-slider-thumb{top:0;left:calc((100% - 36px) * var(--lg-progress) - 12px);width:60px;height:40px;scale:.6}.lg-slider input{z-index:1;cursor:pointer;appearance:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent;background:0 0;outline:none;width:100%;height:40px;margin:0;display:block;position:relative}.lg-slider input::-webkit-slider-runnable-track{background:0 0;height:6px}.lg-slider input::-webkit-slider-thumb{width:36px;height:40px;box-shadow:none;opacity:0;touch-action:none;appearance:none;background:0 0;border:0;margin-top:-17px}.lg-slider input::-moz-range-track{background:0 0;height:6px}.lg-slider input::-moz-range-thumb{width:36px;height:40px;box-shadow:none;opacity:0;background:0 0;border:0}.lg-slider:has(input:focus-visible) .lg-slider-thumb{outline:2px solid var(--lg-ring);outline-offset:3px}.lg-slider:has(input:disabled){opacity:.35}.lg-slider input:disabled{cursor:default}.lg-menu{display:inline-flex;position:relative}.lg-menu-card{z-index:10;box-sizing:border-box;width:200px;color:var(--lg-foreground);transform-origin:calc(100% - 20px) 20px;touch-action:none;-webkit-user-select:none;user-select:none;border-radius:20px;font-size:14px;position:absolute;top:0;right:0}.lg-menu-card[data-align=start]{transform-origin:20px 20px;left:0;right:auto}.lg-menu-card[data-phase=leaving]{pointer-events:none}.lg-menu-surface{border-radius:inherit;background:var(--lg-surface);-webkit-backdrop-filter:blur(22px)saturate(1.9);backdrop-filter:blur(22px)saturate(1.9);width:100%;height:100%;box-shadow:inset 0 0 0 .5px var(--lg-surface-edge), 0 12px 40px var(--lg-shadow);pointer-events:none;position:absolute;top:0;right:0}.lg-menu-card[data-align=start] .lg-menu-surface{left:0;right:auto}.lg-menu-glyph{pointer-events:none;place-items:center;width:40px;height:40px;display:grid;position:absolute;top:0;right:0}.lg-menu-card[data-align=start] .lg-menu-glyph{left:0;right:auto}.lg-menu-glyph>svg{width:20px;height:20px}.lg-menu-content{flex-direction:column;padding:6px;display:flex;position:relative}.lg-menu-card:after{content:\"\";border-radius:inherit;pointer-events:none;opacity:0;background:linear-gradient(135deg,#ffffff1c,#ffffff06);transition:opacity .12s ease-out;position:absolute;inset:0}.lg-menu-card[data-pressed]:after{opacity:1}.lg-menu-plate{background:var(--lg-highlight);opacity:0;pointer-events:none;border-radius:14px;transition:transform .1s cubic-bezier(.2,.8,.2,1),opacity 80ms ease-out;position:absolute;top:0;left:0}.lg-menu-item{z-index:1;min-height:32px;color:inherit;font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:14px;align-items:center;gap:10px;padding:6px 12px;display:flex;position:relative}.lg-menu-item>svg{flex:none;width:16px;height:16px}.lg-menu-item:focus-visible{outline-offset:-2px;background:var(--lg-highlight)}@media (hover:hover) and (pointer:fine){.lg-menu-item:hover:not(:disabled){background:var(--lg-highlight)}}.lg-menu-card[data-scrubbing] .lg-menu-item{background:0 0;outline:none}.lg-menu-item[data-destructive]{color:var(--lg-destructive)}.lg-menu-item:disabled{opacity:.38;cursor:default}.lg-menu-separator{border-top:.5px solid var(--lg-separator);flex:none;margin:7px 11px}@media (prefers-reduced-motion:reduce){.lg-menu-plate{transition:opacity 80ms ease-out}.lg-menu-card{animation:.1s ease-out lg-menu-fade}}@keyframes lg-menu-fade{0%{opacity:0}}";
function u(...e) {
	return e.filter(Boolean).join(" ");
}
var d = /* @__PURE__ */ new Set(), f = 0, p = 0;
function m(e, t) {
	let n = e.value - e.target, r = e.velocity, i = e.damping / 2, a = i * i - e.stiffness;
	if (Math.abs(a) < 1e-4) {
		let a = Math.exp(-i * t), o = r + i * n;
		e.value = e.target + a * (n + o * t), e.velocity = a * (r - i * o * t);
	} else if (a > 0) {
		let o = Math.sqrt(a), s = -i + o, c = -i - o, l = (r - c * n) / (s - c), u = n - l;
		e.value = e.target + l * Math.exp(s * t) + u * Math.exp(c * t), e.velocity = l * s * Math.exp(s * t) + u * c * Math.exp(c * t);
	} else {
		let o = Math.sqrt(-a), s = Math.exp(-i * t), c = Math.cos(o * t), l = Math.sin(o * t);
		e.value = e.target + s * (n * c + (r + i * n) / o * l), e.velocity = s * (r * c - (i * r + e.stiffness * n) / o * l);
	}
}
function h(e) {
	f = 0;
	let t = Math.min(.1, Math.max(0, (e - p) / 1e3));
	p = e;
	for (let e of d) m(e, t), Math.abs(e.value - e.target) < 1e-4 && Math.abs(e.velocity) < .001 && (e.value = e.target, e.velocity = 0, d.delete(e)), e.paint(e.value);
	d.size && (f = requestAnimationFrame(h));
}
function g() {
	return matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function _(e, t, n, r) {
	let i = {
		value: e,
		target: e,
		velocity: 0,
		stiffness: t,
		damping: n,
		paint: r
	};
	return {
		paint: () => r(i.value),
		set(e, t = !1) {
			i.target = e, t || document.hidden || g() ? (i.value = e, i.velocity = 0, d.delete(i), r(e)) : (d.add(i), f ||= (p = Number(document.timeline?.currentTime ?? performance.now()), requestAnimationFrame(h)));
		},
		tune(e, t) {
			i.stiffness = e, i.damping = t;
		},
		stop: () => {
			d.delete(i);
		}
	};
}
var v = {
	grow: 6,
	press: [417.6, 29.2],
	release: [230, 23.7]
}, y = {
	grow: 15,
	press: [515, 27.3],
	release: [250, 11.8]
};
function b(e) {
	(0, a.useEffect)(() => {
		let t = e.current;
		if (!t) return;
		let n = [
			1,
			1,
			0,
			0
		], r = () => {
			t.style.scale = `${n[0]} ${n[1]}`, t.style.translate = `${n[2]}px ${n[3]}px`;
		}, i = n.map((e, t) => _(e, ...v.release, (e) => {
			n[t] = e, r();
		})), a = null, o = (e, [t, n]) => {
			i.forEach((r, i) => {
				r.tune(t, n), r.set(e[i] ?? 0);
			});
		}, s = (e) => {
			if (!a) return;
			let { box: n, feel: r } = a;
			t.style.setProperty("--lg-x", `${(e.clientX - n.left) / n.width * 100}%`), t.style.setProperty("--lg-y", `${(e.clientY - n.top) / n.height * 100}%`);
			let { width: i, height: s } = n, c = 1 + r.grow / Math.max(i, s), l = i / s, u = (e.clientX - a.x) / l, d = e.clientY - a.y, f = Math.hypot(u, d);
			if (!f) return o([
				c,
				c,
				0,
				0
			], r.press);
			let p = u / f, m = d / f, h = 1 - 1 / (1 + f / s / (5 * l)), g = 1 + 6 / s * h * Math.abs(Math.abs(p) - Math.abs(m)), _ = Math.abs(p) > Math.abs(m);
			o([
				c * (_ ? g : 1 / g),
				c * (_ ? 1 / g : g),
				p * 8 * h,
				m * 8 * h
			], r.press);
		}, c = (e) => {
			e.pointerId === a?.id && s(e);
		}, l = (e) => {
			if (e && e.pointerId !== a?.id) return;
			let n = a?.feel ?? v;
			a = null, delete t.dataset.pressed, window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l), o([
				1,
				1,
				0,
				0
			], n.release);
		}, u = (e) => {
			!e.isPrimary || e.button !== 0 || a || t.matches(":disabled") || (a = {
				id: e.pointerId,
				x: e.clientX,
				y: e.clientY,
				box: t.getBoundingClientRect(),
				feel: e.pointerType === "mouse" ? v : y
			}, t.dataset.pressed = "", window.addEventListener("pointermove", c), window.addEventListener("pointerup", l), window.addEventListener("pointercancel", l), s(e));
		}, d = () => l();
		return t.addEventListener("pointerdown", u), window.addEventListener("blur", d), () => {
			l(), i.forEach((e) => e.stop()), t.removeEventListener("pointerdown", u), window.removeEventListener("blur", d), t.style.removeProperty("scale"), t.style.removeProperty("translate");
		};
	}, [e]);
}
var x = "http://www.w3.org/2000/svg", S;
function C(e, t) {
	let n = document.createElementNS(x, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}
function w() {
	if (S?.isConnected) return S;
	let e = C("svg", {
		width: 0,
		height: 0,
		"aria-hidden": "true"
	});
	return e.style.cssText = "position:absolute;pointer-events:none", S = C("defs", {}), e.append(S), document.body.append(e), S;
}
var T = {
	angle: 45,
	glow: .4,
	spread: .5,
	glowPower: 1.5,
	edge: .5,
	edgeWidth: 2,
	edgePower: 1.5
}, E = {
	angle: 30,
	glow: .4,
	spread: .5,
	glowPower: 2,
	edge: .5,
	edgeWidth: 1.5,
	edgePower: 1
}, D = (e, t, n) => Math.min(n, Math.max(t, e)), ee = (e) => Math.tanh(1.7724538509 * e);
function te(e, t, n, r, i) {
	let a = Math.abs(e) - n + i, o = Math.abs(t) - r + i;
	return Math.hypot(Math.max(a, 0), Math.max(o, 0)) + Math.min(Math.max(a, o), 0) - i;
}
function ne(e, t) {
	let n = (t * t + e * e) / (2 * e), r = 0;
	for (let e = 0; e <= 200; e++) {
		let i = e / 200 * t, a = i / Math.sqrt(n * n - i * i);
		r += e === 0 || e === 200 ? a / 2 : a;
	}
	let i = r / 200;
	return {
		radius: n,
		scale: i > 0 ? .5 / i : 1
	};
}
var re = (e, { radius: t, scale: n }) => {
	let r = Math.min(e, .999 * t);
	return r / Math.sqrt(t * t - r * r) * n;
};
function ie(e, t, n, r) {
	let { width: i, height: a } = e, o = i / 2, s = a / 2, c = D(e.radius, 0, Math.min(o, s)), l = Math.max(1, Math.round(i * r)), u = Math.max(1, Math.round(a * r)), d = new Uint8ClampedArray(l * u * 4), f = new Uint8ClampedArray(l * u * 4), p = new Uint8ClampedArray(l * u * 4), m = new Uint8ClampedArray(l * u * 4), h = (e, t, n, r = 255) => {
		e[t] = e[t + 1] = e[t + 2] = n, e[t + 3] = r;
	}, g = t.relative ? Math.min(i, a) : 1, _ = t.depth * g, v = t.dome * g, { splay: y } = t, b = Math.max(0, o - _), x = Math.max(0, s - _), S = D(c, 0, Math.min(b, x)), C = _ > 0 ? 1 / (_ * Math.SQRT2) : 1e6, w = Math.max(.01, Math.min(v, Math.min(o, s) - 1)), T = v > 0 ? ne(w, o) : null, E = v > 0 ? ne(w, s) : null, ie = .5 * Math.min(o, s), ae = Math.cos(n.angle * Math.PI / 180), O = Math.sin(n.angle * Math.PI / 180), k = (1 - n.spread) * Math.SQRT2, oe = n.spread * Math.SQRT2;
	for (let e = 0; e < u; e++) for (let t = 0; t < l; t++) {
		let r = (e * l + t) * 4, g = (t + .5) / l * i - o, _ = (e + .5) / u * a - s, v = te(g, _, o, s, c), w = Math.round(255 * D(-v, 0, 1));
		if (h(m, r, 0, w), v >= 0) {
			h(d, r, 128), h(f, r, 128), h(p, r, 128, 0);
			continue;
		}
		let ne = Math.abs(g), se = Math.abs(_), ce = T ? Math.sign(g) * re(ne, T) : D(g / o, -1, 1), le = E ? Math.sign(_) * re(se, E) : D(_ / s, -1, 1);
		if (y < 1 && ie > 0) {
			let e = Math.max(0, 1 - (s - se) / ie) * (1 - y), t = Math.max(0, 1 - (o - ne) / ie) * (1 - y);
			if (e > .001 || t > .001) {
				let n = Math.hypot(ce, le);
				ce *= 1 - e, le *= 1 - t;
				let r = Math.hypot(ce, le);
				r > .001 && (ce *= n / r, le *= n / r);
			}
		}
		let A = .5 * (1 + ee(te(g, _, b, x, S) * C));
		h(m, r, Math.round(255 * A), w), h(d, r, Math.round((.5 - .5 * ce * A) * 255)), h(f, r, Math.round((.5 - .5 * le * A) * 255));
		let j = Math.abs(D(g / o, -1, 1) * ae + D(_ / s, -1, 1) * O), ue = oe > .001 ? n.glow * D((j - k) / oe, 0, 1) ** n.glowPower * A : 0, de = n.edge * Math.max(0, 1 + v / n.edgeWidth) * j ** n.edgePower, fe = Math.min(1, ue + de), pe = Math.min(1, A * 20, -v);
		h(p, r, Math.round(127 * fe + 128), Math.round(255 * pe));
	}
	return {
		columns: l,
		rows: u,
		across: d,
		down: f,
		light: p,
		shape: m
	};
}
var ae = /* @__PURE__ */ new Map();
function O(e, t) {
	let n = ae.get(e);
	if (n) return n;
	let r = t(), i = document.createElement("canvas");
	i.width = r.columns, i.height = r.rows;
	let a = i.getContext("2d");
	if (!a) return null;
	let o = a.createImageData(r.columns, r.rows), s = (e) => (o.data.set(e), a.putImageData(o, 0, 0), i.toDataURL()), c = {
		across: s(r.across),
		down: s(r.down),
		light: s(r.light),
		shape: s(r.shape)
	};
	return ae.set(e, c), c;
}
var k = () => /AppleWebKit\//.test(navigator.userAgent) && !/Chrom(?:e|ium)\//.test(navigator.userAgent), oe = [
	"1 0 0 0 0  0 0 0 0 0  0 0 0 0 0",
	"0 0 0 0 0  0 1 0 0 0  0 0 0 0 0",
	"0 0 0 0 0  0 0 0 0 0  0 0 1 0 0"
], se = (e, t, n) => C("feColorMatrix", {
	in: e,
	type: "matrix",
	values: t,
	result: n
}), ce = (e, t, n, r, i) => C("feComposite", {
	in: e,
	in2: t,
	operator: "arithmetic",
	k2: n,
	k3: r,
	result: i
});
function le(e) {
	return [
		...oe.map((t, n) => se(`ray-${e}-${n}`, `${t}  0 0 0 0.3333 0`, `light-${e}-${n}`)),
		ce(`light-${e}-0`, `light-${e}-1`, 1, 1, `light-${e}-01`),
		ce(`light-${e}-01`, `light-${e}-2`, 1, 1, `spread-${e}`),
		se(`spread-${e}`, "3 0 0 0 0  0 3 0 0 0  0 0 3 0 0  0 0 0 1 0", `bent-${e}`)
	];
}
function A(e, t) {
	let n = +(t === "light"), r = [], i = (e) => [
		0,
		1,
		2
	].map((t) => t === e ? `${[
		0,
		1,
		2
	].map((t) => t === e ? n ? -1 : 1 : 0).join(" ")} 0 ${n}` : "0 0 0 0 0").join("  ") + "  0 0 0 1 0";
	oe.forEach((t, n) => {
		let a = `ray-${e}-${n}`;
		r.push(se(a, "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 0 1", `cover-${e}-${n}`), se(a, "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0", `covers-${e}-${n}`), se(a, i(n), `inks-${e}-${n}`));
	}), r.push(C("feBlend", {
		in: `cover-${e}-0`,
		in2: `cover-${e}-1`,
		mode: "lighten",
		result: `most-${e}-01`
	}), C("feBlend", {
		in: `most-${e}-01`,
		in2: `cover-${e}-2`,
		mode: "lighten",
		result: `most-${e}`
	}), se(`most-${e}`, `0 0 0 0 ${n}  0 0 0 0 ${n}  0 0 0 0 ${n}  1 0 0 0 0`, `inked-${e}`));
	let a = `inked-${e}`;
	oe.forEach((t, i) => {
		let [o, s] = n ? [`covers-${e}-${i}`, `inks-${e}-${i}`] : [`inks-${e}-${i}`, `covers-${e}-${i}`];
		r.push(ce(a, o, i === 0 ? .5 : 1, .5, `inked-${e}-${i}a`), ce(`inked-${e}-${i}a`, s, 1, -.5, `inked-${e}-${i}b`)), a = `inked-${e}-${i}b`;
	});
	let o = C("feComponentTransfer", {
		in: a,
		result: `bent-${e}`
	});
	return o.append(C("feFuncA", {
		type: "linear",
		slope: 2,
		intercept: 0
	})), r.push(o), r;
}
function j(e, t, n) {
	let r = t ? "objectBoundingBox" : "userSpaceOnUse", i = C("filter", {
		filterUnits: r,
		primitiveUnits: r,
		"color-interpolation-filters": "sRGB"
	});
	if (t) for (let [e, t] of Object.entries({
		x: 0,
		y: 0,
		width: 1,
		height: 1
	})) i.setAttribute(e, String(t));
	let a = e.length === 1, o = e.map(({ maps: e, shine: t, blur: r, ink: o }, s) => {
		let c = (e) => a ? e : `${e}-${s}`, l = (e, t) => C("feImage", {
			href: e,
			preserveAspectRatio: "none",
			result: t
		}), u = [
			l(e.across, `across-${s}`),
			l(e.down, `down-${s}`),
			l(e.light, c("raw")),
			C("feFlood", {
				"flood-color": "rgb(128, 128, 128)",
				result: `neutral-${s}`
			})
		];
		n && u.push(l(e.shape, c("shape"))), i.append(...u);
		for (let e of ["across", "down"]) {
			let t = C("feComponentTransfer", {
				in: `${e}-grey-${s}`,
				result: `${e}-pull-${s}`
			});
			t.append(C("feFuncA", {
				type: "linear",
				slope: 0,
				intercept: .5
			})), i.append(C("feComposite", {
				in: `${e}-${s}`,
				in2: `neutral-${s}`,
				operator: "over",
				result: `${e}-grey-${s}`
			}), t);
		}
		let d = oe.map((e, t) => {
			let n = C("feDisplacementMap", {
				in: "SourceGraphic",
				in2: `across-pull-${s}`,
				xChannelSelector: "R",
				yChannelSelector: "A",
				result: `across-${s}-${t}`
			}), r = C("feDisplacementMap", {
				in: `across-${s}-${t}`,
				in2: `down-pull-${s}`,
				xChannelSelector: "A",
				yChannelSelector: "R",
				result: `ray-${s}-${t}`
			});
			return u.push(n), i.append(n, r), [n, r];
		});
		i.append(...o ? A(s, o) : le(s));
		let f;
		if (r) {
			f = C("feGaussianBlur", {
				in: `bent-${s}`,
				result: `soft-${s}`
			});
			let t = l(e.shape, `weight-${s}`);
			u.push(t), i.append(t, C("feColorMatrix", {
				in: `weight-${s}`,
				type: "matrix",
				values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0",
				result: `bends-${s}`
			}), f, C("feComposite", {
				in: `soft-${s}`,
				in2: `bends-${s}`,
				operator: "in",
				result: `soft-in-${s}`
			}), C("feComposite", {
				in: `bent-${s}`,
				in2: `bends-${s}`,
				operator: "out",
				result: `sharp-${s}`
			}), C("feComposite", {
				in: `soft-in-${s}`,
				in2: `sharp-${s}`,
				operator: "arithmetic",
				k2: 1,
				k3: 1,
				result: `softened-${s}`
			}));
		}
		let p = r ? `softened-${s}` : `bent-${s}`, m = p;
		if (t > 0) {
			let e = `0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 1 0 ${-128 / 255}`;
			i.append(C("feColorMatrix", {
				in: c("raw"),
				type: "matrix",
				values: e,
				result: `glint-${s}`
			}), C("feComposite", {
				in: `glint-${s}`,
				in2: p,
				operator: "arithmetic",
				k2: t,
				k3: 1,
				result: `lit-${s}`
			})), m = `lit-${s}`;
		} else if (t < 0) {
			let e = `0 0 ${t} 0 ${1 - 128 * t / 255}`;
			i.append(C("feColorMatrix", {
				in: c("raw"),
				type: "matrix",
				values: `${e}  ${e}  ${e}  0 0 0 0 1`,
				result: `shade-${s}`
			}), C("feComposite", {
				in: `shade-${s}`,
				in2: p,
				operator: "arithmetic",
				k1: 1,
				result: `lit-${s}`
			})), m = `lit-${s}`;
		}
		return i.append(C("feComposite", {
			in: m,
			in2: c("raw"),
			operator: "in",
			result: c("inside")
		})), {
			boxed: u,
			rays: d,
			soften: f
		};
	});
	if (!a) for (let t of [
		"raw",
		"inside",
		...n ? ["shape"] : []
	]) {
		let n = C("feMerge", { result: t });
		e.forEach((e, r) => n.append(C("feMergeNode", { in: `${t}-${r}` }))), i.append(n);
	}
	return i.append(C("feComposite", {
		in: "SourceGraphic",
		in2: "raw",
		operator: "out",
		result: "outside"
	}), C("feComposite", {
		in: "inside",
		in2: "outside",
		operator: "arithmetic",
		k2: 1,
		k3: 1,
		result: "seen"
	})), n && i.append(C("feComposite", {
		in: "seen",
		in2: "shape",
		operator: "in"
	})), {
		filter: i,
		parts: o
	};
}
function ue(e, t, n, r, i) {
	if (!i) for (let [t, i] of Object.entries({
		x: 0,
		y: 0,
		width: n,
		height: r
	})) e.filter.setAttribute(t, String(i));
	t.forEach((t, a) => {
		let o = e.parts[a], s = [
			1 + .2 * t.dispersion,
			1 + .1 * t.dispersion,
			1
		];
		o.rays.forEach(([e, a], o) => {
			e.setAttribute("scale", String((i ? t.reach / n : t.reach) * s[o])), a.setAttribute("scale", String((i ? t.reach / r : t.reach) * s[o]));
		});
		let c = Math.max(t.blur, .01);
		o.soften?.setAttribute("stdDeviation", i ? `${c / n} ${c / r}` : String(c));
		let l = i ? {
			x: t.x / n,
			y: t.y / r,
			width: t.width / n,
			height: t.height / r
		} : {
			x: t.x,
			y: t.y,
			width: t.width,
			height: t.height
		};
		for (let e of o.boxed) for (let [t, n] of Object.entries(l)) e.setAttribute(t, String(n));
	});
}
function de(e, t = getComputedStyle(e)) {
	let n = e.offsetWidth, r = e.offsetHeight;
	if (!n || !r) return null;
	let i = t.borderTopLeftRadius;
	return {
		width: n,
		height: r,
		radius: Math.min(n / 2, r / 2, i.endsWith("%") ? Math.min(n, r) * parseFloat(i) / 100 : parseFloat(i) || 0)
	};
}
function fe(e, t) {
	let n = getComputedStyle(e), r = de(e, n);
	if (!r) return null;
	let { width: i, height: a, radius: o } = r, s = parseFloat(n.getPropertyValue("--lg-lens-shine")) || 0, c = t.paintsLight ? 0 : t.shine === void 0 ? s : Math.sign(s) * t.shine, l = t.strengthProperty ? parseFloat(n.getPropertyValue(t.strengthProperty)) : NaN, u = s > 0 ? t.darkStrength ?? t.strength : t.strength, d = Number.isFinite(l) ? l : u, f = t.dispersionProperty ? parseFloat(n.getPropertyValue(t.dispersionProperty)) : NaN, p = Number.isFinite(f) ? Math.max(0, f) : t.dispersion, m = Math.min(devicePixelRatio || 1, 2), h = s < 0 && !t.paintsLight ? E : T, g = t.edgeWidth === void 0 ? h : {
		...h,
		edgeWidth: t.edgeWidth
	}, _ = [
		i,
		a,
		o,
		m,
		JSON.stringify(g),
		JSON.stringify(t)
	].join("|"), v = O(_, () => ie(r, t, g, m)), y = t.blur ?? 0, b = t.ink ? s < 0 ? "light" : "dark" : void 0;
	return v ? {
		maps: v,
		key: `${_}|${c}|${b}`,
		shine: c,
		ink: b,
		blur: y,
		strength: d,
		dispersion: p,
		width: i,
		height: a
	} : null;
}
var pe = /* @__PURE__ */ new Map(), me = 0;
function he(e) {
	let { content: t } = e, n = t.offsetWidth, r = t.offsetHeight, i = t.getBoundingClientRect(), a = [];
	if (n && r) {
		let t = i.width / n || 1;
		for (let n of e.members) {
			let e = n.glass.getBoundingClientRect();
			if (!n.fit || !e.width || !e.height) continue;
			let r = e.width / t, o = e.height / t, s = n.fit.strength * Math.min(r, o) * n.amount, { dispersion: c } = n.fit, l = n.fit.blur * n.amount;
			n.placed = {
				x: (e.left - i.left) / t,
				y: (e.top - i.top) / t,
				width: r,
				height: o,
				reach: s,
				dispersion: c,
				blur: l
			}, a.push(n);
		}
	}
	if (!a.length) {
		e.placed = "", t.style.removeProperty("filter"), e.standIn && t.style.removeProperty("visibility"), e.standIn = !1;
		return;
	}
	let o = k(), s = a.some((e) => e.replaces);
	e.standIn = s;
	let c = a.map((e) => e.fit.key).join("\n") + (s ? "\nstand-in" : "");
	c === e.built && e.graph || (e.graph?.filter.remove(), e.graph = j(a.map((e) => e.fit), o, s), w().append(e.graph.filter), e.built = c, e.placed = "");
	let l = a.map((e) => e.placed), u = [
		n,
		r,
		...l.flatMap(({ x: e, y: t, width: n, height: r, reach: i, dispersion: a, blur: o }) => [
			e,
			t,
			n,
			r,
			i,
			a,
			o
		])
	].map((e) => e.toFixed(2)).join(" ");
	if (u !== e.placed) {
		e.placed = u, ue(e.graph, l, n, r, o), e.graph.filter.id = `${e.name}-${++e.version}`, t.style.filter = `url("#${e.graph.filter.id}")`;
		for (let e of a) {
			if (!e.replaces) continue;
			t.style.visibility = "visible";
			let { x: r, y: a, width: o, height: s } = e.placed, c = e.replaces.getBoundingClientRect(), l = i.width / n || 1;
			_e(e.replaces, {
				image: `url("${e.fit.maps.shape}"), linear-gradient(#000, #000)`,
				position: `${r + (i.left - c.left) / l}px ${a + (i.top - c.top) / l}px, 0 0`,
				size: `${o}px ${s}px, 100% 100%`
			});
		}
	}
}
var ge = [
	"image",
	"position",
	"size",
	"repeat",
	"composite"
];
function _e(e, t) {
	for (let t of ge) e.style.removeProperty(`-webkit-mask-${t}`), e.style.removeProperty(`mask-${t}`);
	if (!t) return;
	let n = {
		...t,
		repeat: "no-repeat",
		composite: "exclude"
	};
	for (let t of ge) e.style.setProperty(`-webkit-mask-${t}`, t === "composite" ? "xor" : n[t]), e.style.setProperty(`mask-${t}`, n[t]);
}
function ve(e, t, n, r) {
	let i = pe.get(t);
	i || (i = {
		content: t,
		lenses: 0,
		members: [],
		name: `glisse-lens-${me++}`,
		standIn: !1,
		built: "",
		placed: "",
		version: 0
	}, pe.set(t, i));
	let a = i;
	a.lenses++;
	let o = {
		glass: e,
		options: n,
		replaces: r,
		amount: 1
	}, s = !1, c = () => {
		o.fit = fe(e, n) ?? void 0;
	}, l = {
		setActive(e) {
			e !== s && (s = e, s ? (a.members.push(o), c()) : (a.members.splice(a.members.indexOf(o), 1), r && _e(r)), he(a));
		},
		update(e) {
			e !== void 0 && (o.amount = D(e, 0, 1)), s && he(a);
		},
		refit() {
			s && (c(), he(a));
		},
		destroy() {
			l.setActive(!1), --a.lenses > 0 || (a.graph?.filter.remove(), pe.delete(t));
		}
	};
	return l;
}
function ye(e, t) {
	let n = `glisse-bend-${me++}`, r = null, i = null, a = "", o = 0, s = 0, c = () => {
		if (!r || !i) return;
		let { width: t, height: a, strength: c, dispersion: l, blur: u } = r, d = c * Math.min(t, a) * o;
		ue(i, [{
			x: 0,
			y: 0,
			width: t,
			height: a,
			reach: d,
			dispersion: l,
			blur: u * o
		}], t, a, !1), i.filter.id = `${n}-${++s}`, e.style.setProperty("--lg-filter", `url("#${i.filter.id}")`);
	};
	return {
		update(e) {
			e = Math.round(D(e, 0, 1) * 20) / 20, e !== o && (o = e, c());
		},
		refit() {
			r = fe(e, t), r && (r.key !== a && (i?.filter.remove(), i = j([{
				maps: r.maps,
				shine: 0,
				blur: r.blur
			}], !1, !1), w().append(i.filter), a = r.key), c());
		},
		destroy() {
			i?.filter.remove(), i = null, e.style.removeProperty("--lg-filter");
		}
	};
}
var be = /* @__PURE__ */ new Map();
function xe(e, t) {
	let n = fe(e, t);
	if (!n) return;
	let { maps: r, key: i, shine: a, strength: o, dispersion: s, width: c, height: l } = n, u = o * Math.min(c, l), d = `${i}|${u}|${s}`, f = be.get(d);
	if (!f) {
		let e = j([{
			maps: r,
			shine: a
		}], !1, !1);
		ue(e, [{
			x: 0,
			y: 0,
			width: c,
			height: l,
			reach: u,
			dispersion: s,
			blur: 0
		}], c, l, !1), f = `glisse-backdrop-${be.size}`, e.filter.id = f, w().append(e.filter), be.set(d, f);
	}
	e.style.setProperty("--lg-filter", `url("#${f}") saturate(1.5)`);
}
var Se = {
	strength: .45,
	strengthProperty: "--lg-glass-bend",
	dispersion: .4,
	dispersionProperty: "--lg-glass-dispersion",
	depth: .25,
	dome: .5,
	splay: 1,
	relative: !0,
	paintsLight: !0
}, Ce = (e, t, n) => Math.min(n, Math.max(t, e)), we = 1.22, Te = .5;
function Ee({ width: e, height: t, radius: n }, r, i, a = [
	0,
	0,
	0,
	0
]) {
	let o = Math.max(1, Math.round(e * i)), s = Math.max(1, Math.round(t * i)), c = new Uint8ClampedArray(o * s * 4), l = e / 2, u = t / 2, d = Ce(n, 0, Math.min(l, u)), f = .5 / i;
	for (let n = 0; n < s; n++) for (let p = 0; p < o; p++) {
		let m = (p + .5) / o * e - l, h = (n + .5) / s * t - u, g = -te(m, h, l, u, d);
		if (g < -f || g > 2 * we) continue;
		let _ = Math.abs(m) - l + d, v = Math.abs(h) - u + d, y = 0, b = 0;
		if (_ > 0 && v > 0) {
			let e = Math.hypot(_, v);
			y = Math.sign(m) * _ / e, b = Math.sign(h) * v / e;
		} else _ > v ? y = Math.sign(m) : b = Math.sign(h);
		let x = Math.abs(y + b), S = Math.max(0, g) / (we * Math.sqrt(Math.max(1, x))), C = Ce((g + f) * i, 0, 1), w = Ce((Math.min(Te, g + f) - Math.max(0, g - f)) * i, 0, 1), T = S < 1 ? r * Math.min(1, x) ** 1.5 * (1 - S ** 1.5) * C : 0, E = a[3] * w * (1 - T), D = T + E;
		if (D <= 0) continue;
		let ee = (n * o + p) * 4;
		for (let e = 0; e < 3; e++) c[ee + e] = Math.round((255 * T + a[e] * E) / D);
		c[ee + 3] = Math.round(255 * D);
	}
	return {
		columns: o,
		rows: s,
		data: c
	};
}
function De(e, t) {
	e.fillStyle = "#0000", e.fillStyle = t;
	let n = String(e.fillStyle);
	if (n.startsWith("#")) {
		let [e, t, r] = [
			1,
			3,
			5
		].map((e) => parseInt(n.slice(e, e + 2), 16));
		return [
			e,
			t,
			r,
			1
		];
	}
	let [r = 0, i = 0, a = 0, o = 1] = (n.match(/[\d.]+/g) ?? []).map(Number);
	return [
		r,
		i,
		a,
		o
	];
}
var Oe = /* @__PURE__ */ new Map(), ke;
function Ae(e) {
	let t = getComputedStyle(e), n = de(e, t);
	if (ke ??= document.createElement("canvas").getContext("2d"), !n || !ke) return;
	let r = parseFloat(t.getPropertyValue("--lg-rim-shine")), i = Number.isFinite(r) ? Ce(r, 0, 1) : .13, a = De(ke, t.getPropertyValue("--lg-edge").trim() || "transparent"), o = Math.min(devicePixelRatio || 1, 3), s = [
		n.width,
		n.height,
		n.radius,
		i,
		a,
		o
	].join("|"), c = Oe.get(s);
	if (!c) {
		let { columns: e, rows: t, data: r } = Ee(n, i, o, a), l = document.createElement("canvas");
		l.width = e, l.height = t;
		let u = l.getContext("2d");
		if (!u) return;
		let d = u.createImageData(e, t);
		d.data.set(r), u.putImageData(d, 0, 0), c = `url("${l.toDataURL()}")`, Oe.set(s, c);
	}
	e.style.setProperty("--lg-rim", c), e.setAttribute("data-rim", "");
}
var je = /* @__PURE__ */ new Set(), Me;
function Ne(e) {
	if (je.add(e), !Me) {
		let e = () => je.forEach((e) => e()), t = new MutationObserver(e);
		t.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["data-theme"],
			subtree: !0
		});
		let n = matchMedia("(prefers-color-scheme: dark)");
		n.addEventListener?.("change", e), Me = () => {
			t.disconnect(), n.removeEventListener?.("change", e);
		};
	}
	return () => {
		je.delete(e), je.size || (Me?.(), Me = void 0);
	};
}
function Pe(e) {
	if ("requestIdleCallback" in window) {
		let t = requestIdleCallback(e, { timeout: 500 });
		return () => cancelIdleCallback(t);
	}
	let t = setTimeout(e, 50);
	return () => clearTimeout(t);
}
function Fe(e, t, n) {
	let r, i = !1, a = new ResizeObserver(() => {
		r?.(), r = Pe(() => {
			i = !0, t();
		});
	});
	return a.observe(e), {
		refit: () => {
			i && t();
		},
		stop: () => {
			r?.(), a.disconnect();
			for (let t of n) e.style.removeProperty(t);
		}
	};
}
var Ie = () => /Chrom(?:e|ium)\//.test(navigator.userAgent), Le = "data-glisse-backdrop";
function Re(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a = e.parentElement; a && a !== document.body; a = a.parentElement) {
		let e = getComputedStyle(a);
		if (!/hidden|clip|auto|scroll/.test(`${e.overflow} ${e.overflowX} ${e.overflowY}`)) continue;
		let o = a.getBoundingClientRect();
		t = Math.max(t, o.left), n = Math.max(n, o.top), r = Math.min(r, o.right), i = Math.min(i, o.bottom);
	}
	return new DOMRect(t, n, Math.max(0, r - t), Math.max(0, i - n));
}
function ze(e) {
	let t = e.getBoundingClientRect(), n = (n) => {
		if (n.contains(e) || e.contains(n)) return !1;
		let r = Re(n);
		return r.left < t.right && r.right > t.left && r.top < t.bottom && r.bottom > t.top;
	};
	for (let t = e.parentElement; t && t !== document.body; t = t.parentElement) {
		let e = [...t.querySelectorAll(`[${Le}]`)].find(n);
		if (e) return e;
	}
	return null;
}
var Be = /* @__PURE__ */ new Map(), Ve = 0;
function He() {
	for (let e of Be.values()) e.values().next().value?.update();
	Ve = Be.size ? requestAnimationFrame(He) : 0;
}
function Ue(e, t) {
	let n = ve(e, t, Se), r = !1, i = Fe(e, () => {
		if (Ae(e), r) return n.refit();
		r = !0, n.setActive(!0);
		let i = Be.get(t);
		i || Be.set(t, i = /* @__PURE__ */ new Set()), i.add(n), Ve ||= requestAnimationFrame(He);
	}, ["--lg-rim"]);
	return {
		refit: i.refit,
		stop: () => {
			i.stop();
			let e = Be.get(t);
			e?.delete(n), e && !e.size && Be.delete(t), n.destroy();
		}
	};
}
function We(e, t = !1, n = !0) {
	let r = (0, a.useRef)(null);
	(0, a.useEffect)(() => {
		let i = e.current;
		if (!i) return;
		if (t) return Fe(i, () => Xe(i, n && Ie()), n ? Ge : Ge.filter((e) => e !== "--lg-filter")).stop;
		let a = ze(i), o = a ? Ue(i, a) : Fe(i, () => {
			Ae(i), Ie() && xe(i, Se);
		}, ["--lg-filter", "--lg-rim"]);
		r.current = o.refit;
		let s = Ne(() => Ae(i));
		return () => {
			r.current = null, s(), o.stop(), i.removeAttribute("data-rim");
		};
	}, [
		e,
		t,
		n
	]), (0, a.useEffect)(() => r.current?.());
}
var Ge = [
	"--lg-filter",
	"--lg-rim",
	"--lg-rim-bright"
], Ke = /* @__PURE__ */ new Map();
function qe(e, t) {
	let n = /* @__PURE__ */ new Float32Array(128), r = 0;
	for (let i = 0; i < n.length; i++) {
		let a = Math.max(.001, i / (n.length - 1)), o = (1 - (1 - a) ** 4) ** .25, s = Math.atan((1 - a) ** 3 / o ** 3), c = Math.asin(Math.sin(s) / 1.5);
		n[i] = Math.tan(s - c) * (t + o * e), r = Math.max(r, n[i]);
	}
	return {
		samples: n,
		maximum: r
	};
}
function Je(e, t, n) {
	let r = Math.min(devicePixelRatio || 1, 2), i = Ce(Math.min(e, t) * .12, 4, 10), { samples: a, maximum: o } = qe(i, Ce(Math.min(e, t) * .2, 8, 24)), s = document.createElement("canvas");
	s.width = Math.ceil(e * r), s.height = Math.ceil(t * r);
	let c = s.getContext("2d"), l = c.createImageData(s.width, s.height), u = c.createImageData(s.width, s.height), d = c.createImageData(s.width, s.height);
	for (let r = 0; r < s.height; r++) for (let c = 0; c < s.width; c++) {
		let f = (c + .5) * e / s.width - e / 2, p = (r + .5) * t / s.height - t / 2, m = Math.abs(f) - (e / 2 - n), h = Math.abs(p) - (t / 2 - n), g = Math.max(m, 0), _ = Math.max(h, 0), v = Math.hypot(g, _), y = n - (v + Math.min(Math.max(m, h), 0)), b = v > 0 ? g / v * Math.sign(f) : m > h ? Math.sign(f) : 0, x = v > 0 ? _ / v * Math.sign(p) : m > h ? 0 : Math.sign(p), S = 0;
		if (y >= 0 && y < i) {
			let e = y / i * (a.length - 1), t = Math.floor(e), n = a[t];
			S = n + (a[Math.min(t + 1, a.length - 1)] - n) * (e - t);
		}
		let C = (r * s.width + c) * 4;
		l.data[C] = Math.round(127.5 + b * S / o * 127.5), l.data[C + 1] = Math.round(127.5 + x * S / o * 127.5), l.data[C + 2] = 128, l.data[C + 3] = 255;
		let w = -(b + x) * Math.SQRT1_2, T = Math.max(w, 0) ** 3, E = Math.max(-w, 0) ** 3;
		u.data[C] = u.data[C + 1] = u.data[C + 2] = 255;
		let D = 0;
		if (y >= 0) {
			let e = [
				.18,
				.42,
				.66
			].map((e) => Math.exp(-(((y - e) / .22) ** 2))), t = Math.max(...e);
			D = t * (.06 + .8 * T + .35 * E) * .85;
			for (let n = 0; n < 3; n++) u.data[C + n] = Math.round(255 * (.65 + .35 * (t ? e[n] / t : 0)));
			let n = [
				.4,
				.5,
				.6
			].map((e) => Math.exp(-(((y - e) / .4) ** 2))), r = Math.max(...n);
			for (let e = 0; e < 3; e++) d.data[C + e] = Math.round(255 * (.85 + .15 * (r ? n[e] / r : 0)));
			d.data[C + 3] = Math.round(Ce(r * (.55 + .3 * T + .15 * E), 0, 1) * 255);
		}
		u.data[C + 3] = Math.round(Ce(D, 0, 1) * 255);
	}
	c.putImageData(l, 0, 0);
	let f = s.toDataURL();
	c.putImageData(u, 0, 0);
	let p = s.toDataURL();
	return c.putImageData(d, 0, 0), {
		displacement: f,
		highlight: p,
		brightHighlight: s.toDataURL(),
		scale: o * 2
	};
}
function Ye(e, t, n) {
	let r = [
		e,
		t,
		n
	].join("-"), i = Ke.get(r);
	if (i) return i;
	let { displacement: a, highlight: o, brightHighlight: s, scale: c } = Je(e, t, n), l = `glisse-selection-${Ke.size}`, u = {
		x: 0,
		y: 0,
		width: e,
		height: t
	}, d = C("filter", {
		id: l,
		...u,
		filterUnits: "userSpaceOnUse",
		primitiveUnits: "userSpaceOnUse",
		"color-interpolation-filters": "sRGB"
	});
	d.append(C("feImage", {
		href: a,
		...u,
		preserveAspectRatio: "none",
		result: "field"
	}));
	for (let [e, t, n] of [
		[
			"r",
			1.035,
			"1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
		],
		[
			"g",
			1,
			"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
		],
		[
			"b",
			.965,
			"0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
		]
	]) d.append(C("feDisplacementMap", {
		in: "SourceGraphic",
		in2: "field",
		scale: c * t,
		xChannelSelector: "R",
		yChannelSelector: "G",
		result: `${e}-ray`
	}), C("feColorMatrix", {
		in: `${e}-ray`,
		type: "matrix",
		values: n,
		result: e
	}));
	d.append(C("feComposite", {
		in: "r",
		in2: "g",
		operator: "arithmetic",
		k2: 1,
		k3: 1,
		result: "rg"
	}), C("feComposite", {
		in: "rg",
		in2: "b",
		operator: "arithmetic",
		k2: 1,
		k3: 1
	})), w().append(d);
	let f = {
		filter: `url("#${l}")`,
		rim: `url("${o}")`,
		brightRim: `url("${s}")`
	};
	return Ke.set(r, f), f;
}
function Xe(e, t) {
	let n = e.offsetWidth, r = e.offsetHeight;
	if (!n || !r) return;
	let i = getComputedStyle(e).borderTopLeftRadius, { filter: a, rim: o, brightRim: s } = Ye(n, r, Math.min(n / 2, r / 2, i.endsWith("%") ? Math.min(n, r) * parseFloat(i) / 100 : parseFloat(i)));
	t && e.style.setProperty("--lg-filter", a), e.style.setProperty("--lg-rim", o), e.style.setProperty("--lg-rim-bright", s);
}
var Ze = /* @__PURE__ */ (0, a.forwardRef)(function({ icon: e, variant: t = "glass", destructive: n, tint: r, children: i, className: s, style: c, type: l = "button", ...d }, f) {
	let p = (0, a.useRef)(null);
	return (0, a.useImperativeHandle)(f, () => p.current), b(p), We(p), /* @__PURE__ */ (0, o.jsxs)("button", {
		ref: p,
		type: l,
		className: u("lg-glass lg-button", s),
		"data-icon": e == null ? void 0 : i == null ? "only" : "",
		"data-variant": t === "glass" ? void 0 : t,
		"data-destructive": n ? "" : void 0,
		"data-tint": r ? "" : void 0,
		style: r ? {
			...c,
			"--lg-tint": r
		} : c,
		...d,
		children: [e, i]
	});
});
function Qe(e, t, n) {
	let [r, i] = (0, a.useState)(t), o = e !== void 0, s = (0, a.useRef)(n);
	(0, a.useEffect)(() => {
		s.current = n;
	});
	let c = (0, a.useCallback)((e) => {
		o || i(e), s.current?.(e);
	}, [o]);
	return [o ? e : r, c];
}
var $e = /* @__PURE__ */ (0, a.forwardRef)(function({ value: e, defaultValue: t = "", onValueChange: n, icon: r, className: i, style: s, ...c }, l) {
	let d = (0, a.useRef)(null), f = (0, a.useRef)(null), [p, m] = Qe(e, t, n);
	return (0, a.useImperativeHandle)(l, () => f.current), We(d), /* @__PURE__ */ (0, o.jsxs)("div", {
		ref: d,
		className: u("lg-glass lg-input", i),
		style: s,
		onPointerDown: (e) => {
			e.target !== f.current && f.current?.focus();
		},
		children: [
			r == null ? null : /* @__PURE__ */ (0, o.jsx)("span", {
				className: "lg-input-icon",
				children: r
			}),
			/* @__PURE__ */ (0, o.jsx)("input", {
				ref: f,
				value: p,
				onChange: (e) => m(e.currentTarget.value),
				...c
			}),
			c.type === "search" && p && !c.disabled ? /* @__PURE__ */ (0, o.jsx)("button", {
				type: "button",
				className: "lg-input-clear",
				"aria-label": "Clear",
				onPointerDown: (e) => e.preventDefault(),
				onClick: () => {
					m(""), f.current?.focus();
				},
				children: /* @__PURE__ */ (0, o.jsx)("svg", {
					viewBox: "0 0 16 16",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 1.5,
					strokeLinecap: "round",
					"aria-hidden": !0,
					children: /* @__PURE__ */ (0, o.jsx)("path", { d: "m4.5 4.5 7 7m0-7-7 7" })
				})
			}) : null
		]
	});
}), et = /* @__PURE__ */ (0, o.jsxs)("svg", {
	viewBox: "0 0 16 16",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.5,
	strokeLinecap: "round",
	"aria-hidden": !0,
	children: [/* @__PURE__ */ (0, o.jsx)("circle", {
		cx: "7",
		cy: "7",
		r: "4.75"
	}), /* @__PURE__ */ (0, o.jsx)("path", { d: "m10.5 10.5 3.25 3.25" })]
}), tt = /* @__PURE__ */ (0, a.forwardRef)(function({ icon: e = et, placeholder: t = "Search", ...n }, r) {
	return /* @__PURE__ */ (0, o.jsx)($e, {
		ref: r,
		type: "search",
		icon: e,
		placeholder: t,
		...n
	});
}), nt = (e, t) => t || performance.now() - e >= 150, rt = (e, t, n) => Math.min(n, Math.max(t, e)), it = [
	"ArrowLeft",
	"ArrowRight",
	"Home",
	"End"
], at = [
	1024,
	58.9,
	676,
	47.8
], ot = .5, st = [
	2500,
	94,
	576,
	44.2
], ct = {
	strength: .2,
	strengthProperty: "--lg-tab-bend",
	dispersion: 2,
	dispersionProperty: "--lg-tab-dispersion",
	depth: 4,
	dome: 0,
	splay: 1,
	ink: !0,
	blur: 2
}, lt = {
	strength: .3,
	strengthProperty: "--lg-segment-bend",
	dispersion: .1,
	depth: 2.5,
	dome: 0,
	splay: 1
};
function ut({ bar: e, glass: t, thumb: n, labels: r, lensed: i, lens: a, tint: o, row: s }, c, l, u) {
	let d = [...e.querySelectorAll(".lg-tab")], f = 0, p = 0, m = 0, h = 0, g = 0, v = 16, y = 12, b = -1, x = !1, S = 0, C = null, w = {
		x: 0,
		lift: 0
	}, T = ve(a, i, c, r), E = l && Ie() ? ye(a, c) : null, D = !1, ee = () => e.toggleAttribute("data-away", b < 0 || Math.abs(w.x - b * f) > .5), te = () => {
		let t = getComputedStyle(e);
		g = parseFloat(t.paddingLeft) || 0, f = (e.clientWidth - g - (parseFloat(t.paddingRight) || 0)) / d.length, h = parseFloat(t.getPropertyValue("--lg-thumb-inset")) || 0, p = f - 2 * h, m = a.offsetHeight, v = parseFloat(t.getPropertyValue("--lg-lens-grow-x")) || 0, y = parseFloat(t.getPropertyValue("--lg-lens-grow-y")) || 0;
	}, ne = () => {
		let { x: t, lift: r } = w, i = 1 + v / p * r, c = 1 + y / m * r, l = `translateX(${t}px) scale(${i}, ${c})`;
		a.style.transform = o.style.transform = l, n && (n.style.transform = l), a.style.setProperty("--lg-lift", String(rt(r, 0, 1))), a.style.setProperty("--lg-lift-y", String(c)), s.style.transform = `scale(${1 / i}, ${1 / c}) translate(${-t + (i - 1) * (h + p / 2)}px, ${(c - 1) * (h + m / 2)}px)`, !C && r < .01 && delete e.dataset.refracting, ee(), r > .01 !== D && (D = r > .01, e.toggleAttribute("data-lensing", D), T.setActive(D));
		let u = rt(r, 0, 1), d = rt((r - ot) / .5, 0, 1);
		a.style.setProperty("--lg-rest", String(rt(1 - r / ot, 0, 1))), a.style.setProperty("--lg-under", String(d)), e.toggleAttribute("data-under", r > ot), T.update(u), E?.update(d);
	}, re = _(0, at[0], at[1], (e) => {
		w.x = e, ne();
	}), ie = _(0, at[2], at[3], (e) => {
		w.lift = e, ne();
	}), ae = (e, t, n = !1) => {
		let [r, i, a, o] = C ? st : at;
		re.tune(r, i), ie.tune(a, o), re.set(e, n), ie.set(+!!t, n);
	}, O = (t = !1) => {
		if (ee(), C) return;
		let n = b >= 0;
		n ? delete e.dataset.hidden : e.dataset.hidden = "", n && ae(b * f, !1, t || !x), x = n;
	}, k = (e) => rt(C.anchor + e.clientX - C.x, 0, f * (d.length - 1)), oe = (e, n) => {
		t.style.setProperty("--lg-x", `${rt((e.clientX - n.left) / n.width * 100, 0, 100)}%`), a.style.setProperty("--lg-x", `${rt((e.clientX - n.left - g - h - w.x) / p * 100, 0, 100)}%`);
	}, se = () => {
		let t = C;
		return C = null, delete e.dataset.lifted, delete a.dataset.pressed, t && e.hasPointerCapture(t.id) && e.releasePointerCapture(t.id), t;
	}, ce = !1, le = (t) => {
		let n = t.target.closest(".lg-tab");
		if (!t.isPrimary || t.button !== 0 || C || !n || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
		cancelAnimationFrame(S), S = 0, te(), e.toggleAttribute("data-light", parseFloat(getComputedStyle(a).getPropertyValue("--lg-lens-shine")) < 0), E?.refit();
		let r = e.getBoundingClientRect();
		C = {
			id: t.pointerId,
			x: t.clientX,
			anchor: d.indexOf(n) * f,
			moved: !1,
			box: r,
			at: performance.now()
		}, ce = !1, e.dataset.lifted = "", e.dataset.refracting = "", delete e.dataset.hidden, a.dataset.pressed = "", oe(t, r), ae(C.anchor, !0, !x), x = !0;
	}, A = (t) => {
		t.pointerId === C?.id && (!C.moved && Math.abs(t.clientX - C.x) > 6 && (C.moved = !0, e.setPointerCapture(t.pointerId)), C.moved && ae(k(t), !0), oe(t, C.box));
	}, j = (t) => {
		if (t.pointerId !== C?.id || t.type === "lostpointercapture" && t.target !== e) return;
		let n = Math.round(k(t) / f), { moved: r, box: i } = se(), a = t.clientY >= i.top - 24 && t.clientY <= i.bottom + 24;
		t.type === "pointerup" && (r || a) ? (ce = !0, S = requestAnimationFrame(() => {
			S = 0, O();
		}), d[n]?.click()) : (ce = r, O());
	}, ue = (e) => {
		C && e.cancelable && nt(C.at, C.moved) && e.preventDefault();
	}, de = (e) => {
		if (e.isTrusted && ce && e.detail !== 0) {
			ce = !1, e.preventDefault();
			return;
		}
		let t = e.target.closest(".lg-tab");
		if (!t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		let n = d.indexOf(t);
		t instanceof HTMLAnchorElement && (b = n, O()), u(n);
	}, fe = (e) => {
		let t = e.target.closest(".lg-tab");
		if (!t || t instanceof HTMLAnchorElement || !it.includes(e.key)) return;
		e.preventDefault();
		let n = d.indexOf(t), r = e.key === "Home" ? 0 : e.key === "End" ? d.length - 1 : (n + (e.key === "ArrowRight" ? 1 : d.length - 1)) % d.length;
		u(r), d[r]?.focus();
	}, pe = () => {
		cancelAnimationFrame(S), S = 0, se(), O(!0);
	}, me = () => {
		document.hidden && pe();
	}, he = new ResizeObserver(() => {
		te(), C || O(!0);
	});
	return te(), e.dataset.ready = "", e.addEventListener("pointerdown", le), window.addEventListener("pointermove", A), window.addEventListener("pointerup", j), window.addEventListener("pointercancel", j), e.addEventListener("lostpointercapture", j), e.addEventListener("touchmove", ue, { passive: !1 }), e.addEventListener("click", de, !0), e.addEventListener("keydown", fe), document.addEventListener("visibilitychange", me), window.addEventListener("blur", pe), he.observe(e), {
		setActive(e) {
			cancelAnimationFrame(S), S = 0, b = e, O();
		},
		destroy() {
			cancelAnimationFrame(S), re.stop(), ie.stop(), T.destroy(), E?.destroy(), he.disconnect();
			for (let t of [
				"ready",
				"hidden",
				"lifted",
				"refracting",
				"lensing",
				"away",
				"light",
				"under"
			]) delete e.dataset[t];
			e.removeEventListener("pointerdown", le), window.removeEventListener("pointermove", A), window.removeEventListener("pointerup", j), window.removeEventListener("pointercancel", j), e.removeEventListener("lostpointercapture", j), e.removeEventListener("touchmove", ue), e.removeEventListener("click", de, !0), e.removeEventListener("keydown", fe), document.removeEventListener("visibilitychange", me), window.removeEventListener("blur", pe);
		}
	};
}
function M(e) {
	return e.icon === void 0 ? /* @__PURE__ */ (0, o.jsx)("span", {
		className: "lg-tab-text",
		children: e.label
	}) : /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [/* @__PURE__ */ (0, o.jsx)("span", {
		className: "lg-tab-icon",
		"aria-hidden": !0,
		children: e.icon
	}), /* @__PURE__ */ (0, o.jsx)("span", {
		className: "lg-tab-label",
		children: e.label
	})] });
}
function dt({ kind: e, items: t, value: n, defaultValue: r = null, onValueChange: i, link: s = "a", className: c, style: l, ...d }) {
	let f = e === "segmented", p = (0, a.useRef)(null), m = (0, a.useRef)(null), h = (0, a.useRef)(null), g = (0, a.useRef)(null), _ = (0, a.useRef)(null), v = (0, a.useRef)(null), y = (0, a.useRef)(null), b = (0, a.useRef)(null), x = (0, a.useRef)(null), [S, C] = Qe(n, r, i), w = t.findIndex((e) => e.value === S), T = (0, a.useRef)({
		items: t,
		selected: w,
		setValue: C
	}), E = t.map((e) => e.value).join("\n"), D = !f && t.every((e) => e.href !== void 0), ee = !f && t.some((e) => e.icon !== void 0);
	return We(m), We(v, !0, f), (0, a.useEffect)(() => {
		T.current = {
			items: t,
			selected: w,
			setValue: C
		};
	}), (0, a.useEffect)(() => {
		let e = ut({
			bar: p.current,
			glass: m.current,
			thumb: h.current,
			labels: g.current,
			lensed: _.current,
			lens: v.current,
			tint: y.current,
			row: b.current
		}, f ? lt : ct, !f, (e) => {
			let t = T.current.items[e];
			t && T.current.setValue(t.value);
		});
		return e.setActive(T.current.selected), x.current = e, () => {
			e.destroy(), x.current = null;
		};
	}, [E, f]), (0, a.useLayoutEffect)(() => {
		x.current?.setActive(w);
	}, [w]), /* @__PURE__ */ (0, o.jsxs)("div", {
		ref: p,
		role: f ? "radiogroup" : D ? "navigation" : "tablist",
		"data-icons": ee ? "" : void 0,
		className: u(f ? "lg-segmented" : "lg-tab-bar", c),
		style: {
			...l,
			"--lg-index": Math.max(w, 0),
			"--lg-tabs": t.length
		},
		...d,
		children: [
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: m,
				className: "lg-glass lg-tab-bar-glass",
				"aria-hidden": !0
			}),
			f && /* @__PURE__ */ (0, o.jsx)("span", {
				ref: h,
				className: "lg-segmented-thumb",
				"aria-hidden": !0
			}),
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: g,
				className: "lg-tab-labels",
				role: "none",
				children: t.map((e, t) => e.href === void 0 ? /* @__PURE__ */ (0, o.jsx)("button", {
					type: "button",
					role: f ? "radio" : "tab",
					className: "lg-tab",
					"data-selected": t === w ? "" : void 0,
					"aria-selected": f ? void 0 : t === w,
					"aria-checked": f ? t === w : void 0,
					tabIndex: t === w || w < 0 && t === 0 ? 0 : -1,
					children: /* @__PURE__ */ (0, o.jsx)("span", {
						className: "lg-tab-face",
						children: M(e)
					})
				}, e.value) : /* @__PURE__ */ (0, o.jsx)(s, {
					href: e.href,
					className: "lg-tab",
					"data-selected": t === w ? "" : void 0,
					"aria-current": t === w ? "page" : void 0,
					draggable: !1,
					children: /* @__PURE__ */ (0, o.jsx)("span", {
						className: "lg-tab-face",
						children: M(e)
					})
				}, e.value))
			}),
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: _,
				className: "lg-tab-labels lg-tab-lensed",
				"aria-hidden": !0,
				children: t.map((e, t) => /* @__PURE__ */ (0, o.jsx)("span", {
					className: "lg-tab-copy",
					"data-selected": t === w ? "" : void 0,
					children: M(e)
				}, e.value))
			}),
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: y,
				className: "lg-tab-tint",
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, o.jsx)("span", {
					ref: b,
					className: "lg-tab-row",
					children: t.map((e) => /* @__PURE__ */ (0, o.jsx)("span", {
						className: "lg-tab-copy",
						children: M(e)
					}, e.value))
				})
			}),
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: v,
				className: "lg-glass lg-tab-lens",
				"aria-hidden": !0
			})
		]
	});
}
function ft(e) {
	return /* @__PURE__ */ (0, o.jsx)(dt, {
		kind: "segmented",
		...e
	});
}
var pt = {
	strength: .75,
	strengthProperty: "--lg-slider-bend",
	dispersion: .65,
	depth: 2,
	dome: 5,
	splay: .5
}, mt = /* @__PURE__ */ (0, a.forwardRef)(function({ value: e, defaultValue: t, onValueChange: n, min: r = 0, max: i = 100, step: s = 1, className: c, style: l, ...d }, f) {
	let p = (0, a.useRef)(null), m = (0, a.useRef)(null), h = (0, a.useRef)(null), g = (0, a.useRef)(null), v = (0, a.useRef)(null), y = (0, a.useRef)(null), b = (0, a.useRef)(null), [x, S] = Qe(e, t ?? r, n), C = i > r ? Math.min(1, Math.max(0, (x - r) / (i - r))) : 0;
	return (0, a.useImperativeHandle)(f, () => m.current), (0, a.useEffect)(() => {
		let e = m.current, t = v.current, n = b.current, r = p.current, i = ve(t, g.current, pt, h.current);
		y.current = i;
		let a = _(0, 2e3, 80, (e) => {
			let a = Math.min(1, Math.max(0, e));
			t.style.scale = String(.6 + .4 * e), r.style.setProperty("--lg-lift", String(a)), n.style.opacity = String(1 - .85 * a), i.setActive(e > .01), i.update();
		}), o = () => {
			e.disabled || a.set(1);
		}, s = () => a.set(0), c = [
			"pointerup",
			"pointercancel",
			"lostpointercapture",
			"blur"
		];
		return e.addEventListener("pointerdown", o), c.forEach((t) => e.addEventListener(t, s)), window.addEventListener("pointerup", s), () => {
			a.stop(), i.destroy(), y.current = null, e.removeEventListener("pointerdown", o), c.forEach((t) => e.removeEventListener(t, s)), window.removeEventListener("pointerup", s);
		};
	}, []), (0, a.useLayoutEffect)(() => {
		y.current?.update();
	}, [C]), /* @__PURE__ */ (0, o.jsxs)("div", {
		ref: p,
		className: u("lg-slider", c),
		style: {
			...l,
			"--lg-progress": C
		},
		children: [
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: h,
				className: "lg-slider-bed",
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, o.jsx)("span", {
					className: "lg-slider-track",
					children: /* @__PURE__ */ (0, o.jsx)("span", { className: "lg-slider-fill" })
				})
			}),
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: g,
				className: "lg-slider-bed lg-slider-magnified",
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, o.jsx)("span", {
					className: "lg-slider-track",
					children: /* @__PURE__ */ (0, o.jsx)("span", { className: "lg-slider-fill" })
				})
			}),
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: v,
				className: "lg-slider-thumb",
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, o.jsx)("span", {
					ref: b,
					className: "lg-thumb-face"
				})
			}),
			/* @__PURE__ */ (0, o.jsx)("input", {
				ref: m,
				type: "range",
				min: r,
				max: i,
				step: s,
				value: x,
				onChange: (e) => S(e.currentTarget.valueAsNumber),
				...d
			})
		]
	});
}), ht = 21.7125, gt = (e) => Math.min(1, Math.max(0, e)), _t = {
	strength: .45,
	strengthProperty: "--lg-switch-bend",
	dispersion: 1,
	depth: 2,
	dome: 6,
	splay: .4
}, vt = /* @__PURE__ */ (0, a.forwardRef)(function({ checked: e, defaultChecked: t = !1, onCheckedChange: n, className: r, ...i }, s) {
	let c = (0, a.useRef)(null), l = (0, a.useRef)(null), d = (0, a.useRef)(null), f = (0, a.useRef)(null), p = (0, a.useRef)(null), m = (0, a.useRef)(null), h = (0, a.useRef)(null), [g, v] = Qe(e, t, n), y = ht, b = (0, a.useRef)({
		checked: g,
		setChecked: v,
		travel: y
	}), x = (0, a.useRef)(null);
	return (0, a.useImperativeHandle)(s, () => c.current), (0, a.useEffect)(() => {
		b.current = {
			checked: g,
			setChecked: v,
			travel: y
		}, x.current?.position.set(+!!g), x.current?.color.set(+!!g);
	}, [
		g,
		v,
		y
	]), (0, a.useEffect)(() => {
		x.current?.position.paint();
	}, [y]), (0, a.useEffect)(() => {
		let e = c.current, t = [f.current, p.current], n = m.current, r = h.current, i = ve(n, d.current, _t, l.current), a = 0, o = .65, s = () => {
			n.style.transform = `translate(${a}px, -50%) scale(${o})`, i.update();
		}, u = +!!b.current.checked, g = _(u, 1e3, 80, (e) => {
			a = e * b.current.travel, s();
		}), v = _(u, 1e3, 80, (e) => {
			for (let n of t) n.style.opacity = String(gt(e));
		}), y = _(0, 2e3, 80, (t) => {
			o = .65 + .25 * t, r.style.opacity = String(1 - .85 * gt(t)), e.style.setProperty("--lg-lift", String(gt(t))), i.setActive(t > .01), s();
		});
		x.current = {
			position: g,
			color: v
		}, g.paint(), v.paint(), y.paint();
		let S = null, C = !1, w = () => {
			g.set(+!!b.current.checked), v.set(+!!b.current.checked);
		}, T = (t) => {
			let n = S;
			if (S = null, y.set(0), n && e.hasPointerCapture(n.id) && e.releasePointerCapture(n.id), t === void 0 || t === b.current.checked) return w();
			b.current.setChecked(t), requestAnimationFrame(w);
		}, E = (t) => {
			t.isPrimary && t.button === 0 && !e.disabled && (t.preventDefault(), C = !1, S = {
				id: t.pointerId,
				x: t.clientX,
				y: t.clientY,
				from: +!!b.current.checked,
				moved: !1,
				at: performance.now(),
				box: e.getBoundingClientRect()
			}, e.setPointerCapture(t.pointerId), y.set(1));
		}, D = (e) => {
			if (e.pointerId !== S?.id) return;
			let t = e.clientX - S.x, n = Math.abs(e.clientY - S.y);
			if (!nt(S.at, S.moved) && n > 10 && n > Math.abs(t) + 4) return C = !0, T();
			if (!S.moved && Math.abs(t) < 4) return;
			S.moved = !0;
			let r = S.from + t / b.current.travel, i = r < 0 ? r : r > 1 ? r - 1 : 0;
			g.set(gt(r) + i / 22), v.set(+(r > .5));
		}, ee = (e) => {
			if (e.pointerId !== S?.id) return;
			C = !0;
			let { from: t, x: n, moved: r, box: i } = S, a = t + (e.clientX - n) / b.current.travel, o = e.clientY >= i.top - 24 && e.clientY <= i.bottom + 24;
			T(r ? a > .5 : o ? !b.current.checked : void 0);
		}, te = (e) => {
			S && e.cancelable && nt(S.at, S.moved) && e.preventDefault();
		}, ne = () => {
			S && (C = !0, T());
		}, re = () => {
			C ? C = !1 : e.disabled || b.current.setChecked(!b.current.checked);
		};
		return e.addEventListener("pointerdown", E), e.addEventListener("pointermove", D), e.addEventListener("pointerup", ee), e.addEventListener("pointercancel", ne), e.addEventListener("lostpointercapture", ne), e.addEventListener("touchmove", te, { passive: !1 }), e.addEventListener("click", re), () => {
			x.current = null, [
				g,
				v,
				y
			].forEach((e) => e.stop()), i.destroy(), e.removeEventListener("pointerdown", E), e.removeEventListener("pointermove", D), e.removeEventListener("pointerup", ee), e.removeEventListener("pointercancel", ne), e.removeEventListener("lostpointercapture", ne), e.removeEventListener("touchmove", te), e.removeEventListener("click", re);
		};
	}, []), /* @__PURE__ */ (0, o.jsxs)("button", {
		ref: c,
		type: "button",
		role: "switch",
		"aria-checked": g,
		className: u("lg-switch", r),
		...i,
		children: [
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: l,
				className: "lg-switch-bed",
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, o.jsx)("span", {
					className: "lg-switch-track",
					children: /* @__PURE__ */ (0, o.jsx)("span", {
						ref: f,
						className: "lg-switch-fill"
					})
				})
			}),
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: d,
				className: "lg-switch-bed lg-switch-inset",
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, o.jsx)("span", {
					className: "lg-switch-track",
					children: /* @__PURE__ */ (0, o.jsx)("span", {
						ref: p,
						className: "lg-switch-fill"
					})
				})
			}),
			/* @__PURE__ */ (0, o.jsx)("span", {
				ref: m,
				className: "lg-switch-thumb",
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, o.jsx)("span", {
					ref: h,
					className: "lg-thumb-face"
				})
			})
		]
	});
});
function yt(e) {
	return /* @__PURE__ */ (0, o.jsx)(dt, {
		kind: "tab-bar",
		...e
	});
}
c(l);
// node_modules/glisse/dist/styles.css?inline
var bt = ":where(:root,[data-theme=light]){--lg-foreground:#000000e0;--lg-muted:#3c3c4399;--lg-glass:#fff9;--lg-glass-active:#ececf0d9;--lg-edge:#00000014;--lg-drop:#0000000f;--lg-selection:#0000001a;--lg-lens:#00000008;--lg-lens-drop:#0000001c;--lg-segment-track:#7676801f;--lg-segment-thumb:#fff;--lg-segment-label:#000;--lg-segment-lens:#00000008;--lg-surface:#fafafcdb;--lg-surface-edge:#00000014;--lg-shadow:#1919231f;--lg-highlight:#3c3c4317;--lg-separator:#3c3c4326;--lg-destructive:#ff383c;--lg-track:#3b3b424d;--lg-rail:#0000001a;--lg-on:#34c759;--lg-fill:#08f;--lg-ring:#0006;--lg-lens-shine:-1.5;--lg-rim-shine:.3;--lg-ease:cubic-bezier(.25, .1, .25, 1)}:where([data-theme=dark]){--lg-foreground:#fff;--lg-muted:#ebebf599;--lg-glass:#2828289e;--lg-glass-active:#4646469e;--lg-edge:#ffffff14;--lg-drop:transparent;--lg-selection:#ffffff25;--lg-lens:#ffffff0e;--lg-lens-drop:transparent;--lg-segment-track:transparent;--lg-segment-thumb:#ebebf54d;--lg-segment-label:#fff;--lg-segment-lens:transparent;--lg-surface:#1c1c1fdb;--lg-surface-edge:#ffffff21;--lg-shadow:#00000061;--lg-highlight:#ebebf521;--lg-separator:#ebebf529;--lg-destructive:#ff4245;--lg-track:#ebebf54d;--lg-rail:#ffffff1a;--lg-on:#30d158;--lg-fill:#0091ff;--lg-ring:#ffffff80;--lg-lens-shine:1;--lg-rim-shine:.13}@media (prefers-color-scheme:dark){:where(:root:not([data-theme=light])){--lg-foreground:#fff;--lg-muted:#ebebf599;--lg-glass:#2828289e;--lg-glass-active:#4646469e;--lg-edge:#ffffff14;--lg-drop:transparent;--lg-selection:#ffffff25;--lg-lens:#ffffff0e;--lg-lens-drop:transparent;--lg-segment-track:transparent;--lg-segment-thumb:#ebebf54d;--lg-segment-label:#fff;--lg-segment-lens:transparent;--lg-surface:#1c1c1fdb;--lg-surface-edge:#ffffff21;--lg-shadow:#00000061;--lg-highlight:#ebebf521;--lg-separator:#ebebf529;--lg-destructive:#ff4245;--lg-track:#ebebf54d;--lg-rail:#ffffff1a;--lg-on:#30d158;--lg-fill:#0091ff;--lg-ring:#ffffff80;--lg-lens-shine:1;--lg-rim-shine:.13}}.lg-glass{background-color:var(--lg-glass);background-image:var(--lg-rim,none);-webkit-backdrop-filter:blur(var(--lg-blur,3px)) var(--lg-filter,saturate(1.5));backdrop-filter:blur(var(--lg-blur,3px)) var(--lg-filter,saturate(1.5));box-shadow:inset 0 0 0 .5px var(--lg-edge), 0 1px 3px var(--lg-drop);background-size:100% 100%;position:relative}.lg-glass[data-rim]{box-shadow:0 1px 3px var(--lg-drop)}.lg-glass:after{content:\"\";border-radius:inherit;pointer-events:none;background:radial-gradient(circle 240px at var(--lg-x,50%) var(--lg-y,50%), #ffffff09, #ffffff06 50%, transparent);opacity:0;transition:opacity .22s ease-in-out;position:absolute;inset:0}.lg-glass[data-pressed]:after{opacity:1;transition-duration:0s}.lg-button{height:40px;color:var(--lg-foreground);font:inherit;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;border:0;border-radius:20px;justify-content:center;align-items:center;gap:8px;padding:0 16px;font-size:14px;transition:background-color .2s;display:inline-flex}.lg-button[data-icon]{padding-left:12px}.lg-button[data-icon=only]{width:40px;padding:0}.lg-button>svg{flex:none;width:20px;height:20px}.lg-button:is(:active,[data-pressed]){background-color:var(--lg-glass-active);transition-duration:0s}@media (hover:hover) and (pointer:fine){.lg-button:hover{background-color:var(--lg-glass-active)}}.lg-button:disabled{background-color:var(--lg-glass);opacity:.35;cursor:default}.lg-button[data-destructive]:not([data-tint]){--lg-tint:var(--lg-destructive)}.lg-button:is([data-tint],[data-destructive]){color:var(--lg-tint)}.lg-button[data-variant=filled]{--lg-button-fill:var(--lg-tint,var(--lg-fill));color:#fff}.lg-button[data-variant=filled],.lg-button[data-variant=filled]:disabled{background-color:var(--lg-button-fill)}.lg-button[data-variant=filled]:is(:active,[data-pressed]){background-color:color-mix(in srgb, var(--lg-button-fill) 85%, #000)}@media (hover:hover) and (pointer:fine){.lg-button[data-variant=filled]:hover{background-color:color-mix(in srgb, var(--lg-button-fill) 88%, #fff)}.lg-button[data-variant=filled]:hover:is(:active,[data-pressed]){background-color:color-mix(in srgb, var(--lg-button-fill) 85%, #000)}}.lg-button:focus-visible,.lg-tab:focus-visible,.lg-switch:focus-visible,.lg-menu-item:focus-visible{outline:2px solid var(--lg-ring);outline-offset:2px}.lg-tab-bar{--lg-tab-width:84px;--lg-tab-height:32px;--lg-tab-inset:4px;--lg-thumb-inset:0px;--lg-lens-grow-x:27px;--lg-lens-grow-y:20px;padding:var(--lg-tab-inset);border-radius:calc(var(--lg-tab-height) / 2 + var(--lg-tab-inset));touch-action:pan-y;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;display:inline-flex;position:relative}.lg-tab-bar-glass{border-radius:inherit;pointer-events:none;position:absolute;inset:0}.lg-tab-bar-glass:before{content:\"\";border-radius:inherit;background:radial-gradient(circle 260px at var(--lg-x,20%) 50%, #ffffff17, #ffffff0b 60%, transparent);opacity:0;transition:opacity .16s;position:absolute;inset:0}:is(.lg-tab-bar,.lg-segmented)[data-lifted] .lg-tab-bar-glass:before{opacity:1;transition-duration:.12s}.lg-tab-labels{--lg-room-x:calc(var(--lg-lens-grow-x) / 2 + 4px);--lg-room-y:calc(var(--lg-lens-grow-y) / 2 + 4px);z-index:1;margin:calc(var(--lg-room-y) * -1) calc(var(--lg-room-x) * -1);padding:var(--lg-room-y) var(--lg-room-x);pointer-events:none;display:flex;position:relative}.lg-tab-lensed{top:var(--lg-tab-inset);left:var(--lg-tab-inset);color:var(--lg-tab-selected,var(--lg-foreground));visibility:hidden;position:absolute}:is(.lg-tab-bar,.lg-segmented)[data-lensing] .lg-tab-tint{visibility:hidden}.lg-tab,.lg-tab-copy{width:var(--lg-tab-width);height:var(--lg-tab-height);font:inherit;flex:none;justify-content:center;align-items:center;font-size:14px;display:flex}.lg-tab{z-index:1;border-radius:calc(var(--lg-tab-height) / 2);color:var(--lg-muted);cursor:pointer;pointer-events:auto;-webkit-touch-callout:none;background:0 0;border:0;padding:0;text-decoration:none;transition:color .2s;position:relative}.lg-tab:focus-visible{outline-offset:-2px}.lg-tab-face{display:contents}.lg-tab-bar:not([data-away]) .lg-tab[data-selected]>.lg-tab-face{color:#0000}.lg-tab-text{text-box:trim-both cap alphabetic;display:block}.lg-tab-bar[data-icons]{--lg-tab-width:72px;--lg-tab-height:52px;--lg-lens-grow-x:24px;--lg-lens-grow-y:16px;--lg-tab-selected:var(--lg-fill)}.lg-tab-bar[data-icons] :is(.lg-tab,.lg-tab-copy){flex-direction:column;gap:1px;font-size:10px;font-weight:500}.lg-tab-bar[data-icons] .lg-tab{color:var(--lg-foreground)}.lg-tab-icon{display:flex}.lg-tab-icon>svg{width:26px;height:26px}@media (hover:hover) and (pointer:fine){.lg-tab:hover{color:var(--lg-foreground)}}.lg-tab-lens,.lg-tab-tint,.lg-segmented-thumb{top:calc(var(--lg-tab-inset) + var(--lg-thumb-inset));left:calc(var(--lg-tab-inset) + var(--lg-thumb-inset));width:calc(var(--lg-tab-width) - 2 * var(--lg-thumb-inset));height:calc(var(--lg-tab-height) - 2 * var(--lg-thumb-inset));border-radius:calc(var(--lg-tab-height) / 2 - var(--lg-thumb-inset));pointer-events:none;transform:translateX(calc(var(--lg-tab-width) * var(--lg-index,0)));will-change:transform;transition:opacity .14s;position:absolute}.lg-tab-tint{z-index:1;color:var(--lg-tab-selected,var(--lg-foreground));overflow:hidden}.lg-tab-row{height:var(--lg-tab-height);margin:calc(var(--lg-thumb-inset) * -1) 0 0 calc(var(--lg-thumb-inset) * -1);transform:translateX(calc(var(--lg-tab-width) * var(--lg-index,0) * -1));transform-origin:0 0;will-change:transform;display:flex}.lg-tab-lens.lg-glass{z-index:2;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:0 calc(7px / var(--lg-lift-y,1)) calc(11px / var(--lg-lift-y,1)) color-mix(in srgb, var(--lg-lens-drop) calc(var(--lg-lift,0) * 100%), transparent);background-color:#0000;background-image:none;transition:opacity .14s,background-color .14s}.lg-tab-bar[data-lifted] .lg-tab-lens.lg-glass{background-color:var(--lg-lens);transition-duration:.1s}.lg-tab-lens:before{content:\"\";border-radius:inherit;background:var(--lg-selection);transition:opacity .14s;position:absolute;inset:0}.lg-tab-lens[data-pressed]:after{opacity:.2}.lg-tab-bar[data-lifted] .lg-tab-lens:before{opacity:0;transition-duration:.1s}:is(.lg-tab-bar,.lg-segmented)[data-refracting] .lg-tab-lens.lg-glass{background-image:var(--lg-rim,none)}:is(.lg-tab-bar,.lg-segmented)[data-refracting][data-light] .lg-tab-lens.lg-glass{background-image:var(--lg-rim-bright,var(--lg-rim,none))}.lg-segmented[data-refracting][data-light] .lg-tab-lens.lg-glass,.lg-tab-bar[data-under][data-light] .lg-tab-lens.lg-glass{z-index:0;-webkit-backdrop-filter:var(--lg-filter,none);backdrop-filter:var(--lg-filter,none)}.lg-tab-bar[data-light] .lg-tab-lens:before{opacity:var(--lg-rest,1);transition:none}.lg-tab-bar[data-light] .lg-tab-lens.lg-glass{background-color:color-mix(in srgb, var(--lg-lens) calc(var(--lg-under,0) * 100%), transparent);transition:opacity .14s}:is(.lg-tab-bar,.lg-segmented)[data-hidden] :is(.lg-tab-lens,.lg-tab-tint,.lg-segmented-thumb),:is(.lg-tab-bar,.lg-segmented):not([data-ready]):not(:has([data-selected])) :is(.lg-tab-lens,.lg-tab-tint,.lg-segmented-thumb){opacity:0}.lg-segmented{--lg-tab-width:84px;--lg-tab-height:32px;--lg-tab-inset:0px;--lg-thumb-inset:2px;--lg-lens-grow-x:24px;--lg-lens-grow-y:16px;--lg-tab-selected:var(--lg-segment-label);border-radius:calc(var(--lg-tab-height) / 2);touch-action:pan-y;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;display:inline-flex;position:relative}.lg-segmented>.lg-tab-bar-glass{background-image:var(--lg-rim,none), linear-gradient(var(--lg-segment-track) 0 0)}.lg-segmented :is(.lg-tab,.lg-tab-copy){font-size:13px}.lg-segmented .lg-tab,.lg-segmented .lg-tab:hover{color:var(--lg-segment-label)}.lg-segmented :is(.lg-tab,.lg-tab-copy)[data-selected]{font-weight:500}.lg-segmented .lg-tab-tint{display:none}.lg-segmented-thumb{background:var(--lg-segment-thumb)}.lg-segmented[data-lifted] .lg-segmented-thumb{opacity:0;transition-duration:.1s}.lg-segmented .lg-tab-lens:before{content:none}.lg-segmented[data-lifted] .lg-tab-lens.lg-glass{background-color:var(--lg-segment-lens);transition-duration:.1s}.lg-input{box-sizing:border-box;width:100%;max-width:360px;height:40px;color:var(--lg-foreground);border-radius:20px;align-items:center;gap:10px;padding:0 14px;transition:background-color .2s;display:flex}.lg-input:focus-within{background-color:var(--lg-glass-active)}.lg-input input{min-width:0;height:100%;color:inherit;font:inherit;background:0 0;border:0;outline:0;flex:1;padding:0;font-size:14px}.lg-input input::placeholder{color:var(--lg-muted)}.lg-input input::-webkit-search-cancel-button{display:none}.lg-input-icon{width:16px;height:16px;color:var(--lg-muted);flex:none;place-items:center;display:grid}.lg-input-icon>svg{width:100%;height:100%}.lg-input-clear{width:32px;height:32px;color:var(--lg-muted);cursor:pointer;background:0 0;border:0;border-radius:50%;flex:none;place-items:center;margin-right:-8px;padding:0;display:grid}.lg-input-clear svg{width:14px;height:14px}.lg-input:has(input:disabled){opacity:.35}.lg-switch-thumb,.lg-slider-thumb{--lg-settled:calc(1 - var(--lg-lift,0));--lg-thumb-blur:calc(2px * var(--lg-settled) + var(--lg-thumb-frost,.5px) * var(--lg-lift,0));pointer-events:none;-webkit-backdrop-filter:blur(var(--lg-thumb-blur)) brightness(calc(1 + .15 * var(--lg-settled))) saturate(1.5);backdrop-filter:blur(var(--lg-thumb-blur)) brightness(calc(1 + .15 * var(--lg-settled))) saturate(1.5);border-radius:999px;position:absolute;box-shadow:0 6px 24px #0003,inset 0 0 0 1.5px #ffffff80,inset 0 2px 1px #ffffff73,inset 2px 7px 24px #00000017,inset -2px -7px 24px #ffffff29}.lg-thumb-face{border-radius:inherit;background:#fff;position:absolute;inset:0}.lg-switch{--lg-scale:.375;width:calc(160px * var(--lg-scale));height:calc(67px * var(--lg-scale));cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent;background:0 0;border:0;border-radius:999px;flex:none;padding:0;position:relative}.lg-switch:before{content:\"\";inset:min(0px, calc((67px * var(--lg-scale) - 44px) / 2)) -8px;position:absolute}.lg-switch-bed{pointer-events:none;position:absolute;inset:-6px -12px}.lg-switch-track,.lg-switch-fill{border-radius:999px;position:absolute}.lg-switch-track{background:var(--lg-track);inset:6px 12px}.lg-switch-fill{background:var(--lg-on);opacity:0;inset:0}.lg-switch-inset{visibility:hidden}.lg-switch-inset .lg-switch-track{width:calc((100% - 24px) * (.85 + .1 * var(--lg-lift,0)));height:calc((100% - 12px) * .75 * (.525 + .45 * var(--lg-lift,0)));margin:auto;inset:0}.lg-switch-thumb{top:50%;left:calc(-21.95px * var(--lg-scale));width:calc(146px * var(--lg-scale));height:calc(92px * var(--lg-scale));transform:translateY(-50%)scale(.65)}.lg-switch[aria-checked=true] .lg-switch-fill{opacity:1}.lg-switch[aria-checked=true] .lg-switch-thumb{transform:translate(calc(57.9px * var(--lg-scale)), -50%) scale(.65)}.lg-switch:disabled{opacity:.35;cursor:default}.lg-slider{width:100%;height:40px;position:relative}.lg-slider-bed{pointer-events:none;position:absolute;inset:-4px -16px}.lg-slider-track{background:var(--lg-rail);border-radius:3px;height:6px;position:absolute;inset:21px 16px auto}.lg-slider-fill{width:calc((100% - 36px) * var(--lg-progress) + 18px);border-radius:inherit;background:var(--lg-fill);height:100%;display:block}.lg-slider-magnified{visibility:hidden}.lg-slider-magnified .lg-slider-track{height:calc(var(--lg-slider-line,8px) * (.6 + .4 * var(--lg-lift,0)));border-radius:999px;margin:auto 0;inset:0 16px}.lg-slider-magnified .lg-slider-fill{--lg-travel:calc((100% - 36px) * var(--lg-progress));width:calc(var(--lg-travel) + min(18px, var(--lg-travel) * 4) + max(0px, 18px - (100% - 36px - var(--lg-travel)) * 4))}.lg-slider-thumb{top:0;left:calc((100% - 36px) * var(--lg-progress) - 12px);width:60px;height:40px;scale:.6}.lg-slider input{z-index:1;cursor:pointer;appearance:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent;background:0 0;outline:none;width:100%;height:40px;margin:0;display:block;position:relative}.lg-slider input::-webkit-slider-runnable-track{background:0 0;height:6px}.lg-slider input::-webkit-slider-thumb{width:36px;height:40px;box-shadow:none;opacity:0;touch-action:none;appearance:none;background:0 0;border:0;margin-top:-17px}.lg-slider input::-moz-range-track{background:0 0;height:6px}.lg-slider input::-moz-range-thumb{width:36px;height:40px;box-shadow:none;opacity:0;background:0 0;border:0}.lg-slider:has(input:focus-visible) .lg-slider-thumb{outline:2px solid var(--lg-ring);outline-offset:3px}.lg-slider:has(input:disabled){opacity:.35}.lg-slider input:disabled{cursor:default}.lg-menu{display:inline-flex;position:relative}.lg-menu-card{z-index:10;box-sizing:border-box;width:200px;color:var(--lg-foreground);transform-origin:calc(100% - 20px) 20px;touch-action:none;-webkit-user-select:none;user-select:none;border-radius:20px;font-size:14px;position:absolute;top:0;right:0}.lg-menu-card[data-align=start]{transform-origin:20px 20px;left:0;right:auto}.lg-menu-card[data-phase=leaving]{pointer-events:none}.lg-menu-surface{border-radius:inherit;background:var(--lg-surface);-webkit-backdrop-filter:blur(22px)saturate(1.9);backdrop-filter:blur(22px)saturate(1.9);width:100%;height:100%;box-shadow:inset 0 0 0 .5px var(--lg-surface-edge), 0 12px 40px var(--lg-shadow);pointer-events:none;position:absolute;top:0;right:0}.lg-menu-card[data-align=start] .lg-menu-surface{left:0;right:auto}.lg-menu-glyph{pointer-events:none;place-items:center;width:40px;height:40px;display:grid;position:absolute;top:0;right:0}.lg-menu-card[data-align=start] .lg-menu-glyph{left:0;right:auto}.lg-menu-glyph>svg{width:20px;height:20px}.lg-menu-content{flex-direction:column;padding:6px;display:flex;position:relative}.lg-menu-card:after{content:\"\";border-radius:inherit;pointer-events:none;opacity:0;background:linear-gradient(135deg,#ffffff1c,#ffffff06);transition:opacity .12s ease-out;position:absolute;inset:0}.lg-menu-card[data-pressed]:after{opacity:1}.lg-menu-plate{background:var(--lg-highlight);opacity:0;pointer-events:none;border-radius:14px;transition:transform .1s cubic-bezier(.2,.8,.2,1),opacity 80ms ease-out;position:absolute;top:0;left:0}.lg-menu-item{z-index:1;min-height:32px;color:inherit;font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:14px;align-items:center;gap:10px;padding:6px 12px;display:flex;position:relative}.lg-menu-item>svg{flex:none;width:16px;height:16px}.lg-menu-item:focus-visible{outline-offset:-2px;background:var(--lg-highlight)}@media (hover:hover) and (pointer:fine){.lg-menu-item:hover:not(:disabled){background:var(--lg-highlight)}}.lg-menu-card[data-scrubbing] .lg-menu-item{background:0 0;outline:none}.lg-menu-item[data-destructive]{color:var(--lg-destructive)}.lg-menu-item:disabled{opacity:.38;cursor:default}.lg-menu-separator{border-top:.5px solid var(--lg-separator);flex:none;margin:7px 11px}@media (prefers-reduced-motion:reduce){.lg-menu-plate{transition:opacity 80ms ease-out}.lg-menu-card{animation:.1s ease-out lg-menu-fade}}@keyframes lg-menu-fade{0%{opacity:0}}", xt = /* @__PURE__ */ e(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, ee());
			else {
				var t = n(l);
				t !== null && re(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && re(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? ee() : S = !1;
			}
		}
	}
	var ee;
	if (typeof y == "function") ee = function() {
		y(D);
	};
	else if (typeof MessageChannel < "u") {
		var te = new MessageChannel(), ne = te.port2;
		te.port1.onmessage = D, ee = function() {
			ne.postMessage(null);
		};
	} else ee = function() {
		_(D, 0);
	};
	function re(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, re(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, ee()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), St = /* @__PURE__ */ e(((e, t) => {
	t.exports = xt();
})), Ct = /* @__PURE__ */ e(((e) => {
	var t = n();
	function r(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function i() {}
	var a = {
		d: {
			f: i,
			r: function() {
				throw Error(r(522));
			},
			D: i,
			C: i,
			L: i,
			m: i,
			X: i,
			S: i,
			M: i
		},
		p: 0,
		findDOMNode: null
	}, o = Symbol.for("react.portal");
	function s(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: o,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function l(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(r(299));
		return s(e, t, null, n);
	}, e.flushSync = function(e) {
		var t = c.T, n = a.p;
		try {
			if (c.T = null, a.p = 2, e) return e();
		} finally {
			c.T = t, a.p = n, a.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, a.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && a.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = l(n, t.crossOrigin), i = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? a.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o
			}) : n === "script" && a.d.X(e, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = l(t.as, t.crossOrigin);
					a.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0
					});
				}
			} else t ?? a.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = l(n, t.crossOrigin);
			a.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = l(t.as, t.crossOrigin);
				a.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0
				});
			} else a.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		a.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return c.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return c.H.useHostTransitionStatus();
	}, e.version = "19.2.0";
})), wt = /* @__PURE__ */ e(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = Ct();
})), Tt = /* @__PURE__ */ e(((e) => {
	var t = St(), r = n(), i = wt();
	function a(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function o(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function s(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function c(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function u(e) {
		if (s(e) !== e) throw Error(a(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = s(e), t === null) throw Error(a(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var i = n.return;
			if (i === null) break;
			var o = i.alternate;
			if (o === null) {
				if (r = i.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (i.child === o.child) {
				for (o = i.child; o;) {
					if (o === n) return u(i), e;
					if (o === r) return u(i), t;
					o = o.sibling;
				}
				throw Error(a(188));
			}
			if (n.return !== r.return) n = i, r = o;
			else {
				for (var c = !1, l = i.child; l;) {
					if (l === n) {
						c = !0, n = i, r = o;
						break;
					}
					if (l === r) {
						c = !0, r = i, n = o;
						break;
					}
					l = l.sibling;
				}
				if (!c) {
					for (l = o.child; l;) {
						if (l === n) {
							c = !0, n = o, r = i;
							break;
						}
						if (l === r) {
							c = !0, r = o, n = i;
							break;
						}
						l = l.sibling;
					}
					if (!c) throw Error(a(189));
				}
			}
			if (n.alternate !== r) throw Error(a(190));
		}
		if (n.tag !== 3) throw Error(a(188));
		return n.stateNode.current === n ? e : t;
	}
	function f(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = f(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var p = Object.assign, m = Symbol.for("react.element"), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), ee = Symbol.for("react.memo_cache_sentinel"), te = Symbol.iterator;
	function ne(e) {
		return typeof e != "object" || !e ? null : (e = te && e[te] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var re = Symbol.for("react.client.reference");
	function ie(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === re ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case _: return "Fragment";
			case y: return "Profiler";
			case v: return "StrictMode";
			case C: return "Suspense";
			case w: return "SuspenseList";
			case D: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case g: return "Portal";
			case x: return e.displayName || "Context";
			case b: return (e._context.displayName || "Context") + ".Consumer";
			case S:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case T: return t = e.displayName || null, t === null ? ie(e.type) || "Memo" : t;
			case E:
				t = e._payload, e = e._init;
				try {
					return ie(e(t));
				} catch {}
		}
		return null;
	}
	var ae = Array.isArray, O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, se = [], ce = -1;
	function le(e) {
		return { current: e };
	}
	function A(e) {
		0 > ce || (e.current = se[ce], se[ce] = null, ce--);
	}
	function j(e, t) {
		ce++, se[ce] = e.current, e.current = t;
	}
	var ue = le(null), de = le(null), fe = le(null), pe = le(null);
	function me(e, t) {
		switch (j(fe, t), j(de, e), j(ue, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = Vd(t), e = Hd(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		A(ue), j(ue, e);
	}
	function he() {
		A(ue), A(de), A(fe);
	}
	function ge(e) {
		e.memoizedState !== null && j(pe, e);
		var t = ue.current, n = Hd(t, e.type);
		t !== n && (j(de, e), j(ue, n));
	}
	function _e(e) {
		de.current === e && (A(ue), A(de)), pe.current === e && (A(pe), Qf._currentValue = oe);
	}
	var ve, ye;
	function be(e) {
		if (ve === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			ve = t && t[1] || "", ye = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + ve + e + ye;
	}
	var xe = !1;
	function Se(e, t) {
		if (!e || xe) return "";
		xe = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			xe = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? be(n) : "";
	}
	function Ce(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return be(e.type);
			case 16: return be("Lazy");
			case 13: return e.child !== t && t !== null ? be("Suspense Fallback") : be("Suspense");
			case 19: return be("SuspenseList");
			case 0:
			case 15: return Se(e.type, !1);
			case 11: return Se(e.type.render, !1);
			case 1: return Se(e.type, !0);
			case 31: return be("Activity");
			default: return "";
		}
	}
	function we(e) {
		try {
			var t = "", n = null;
			do
				t += Ce(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Te = Object.prototype.hasOwnProperty, Ee = t.unstable_scheduleCallback, De = t.unstable_cancelCallback, Oe = t.unstable_shouldYield, ke = t.unstable_requestPaint, Ae = t.unstable_now, je = t.unstable_getCurrentPriorityLevel, Me = t.unstable_ImmediatePriority, Ne = t.unstable_UserBlockingPriority, Pe = t.unstable_NormalPriority, Fe = t.unstable_LowPriority, Ie = t.unstable_IdlePriority, Le = t.log, Re = t.unstable_setDisableYieldValue, ze = null, Be = null;
	function Ve(e) {
		if (typeof Le == "function" && Re(e), Be && typeof Be.setStrictMode == "function") try {
			Be.setStrictMode(ze, e);
		} catch {}
	}
	var He = Math.clz32 ? Math.clz32 : Ge, Ue = Math.log, We = Math.LN2;
	function Ge(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ue(e) / We | 0) | 0;
	}
	var Ke = 256, qe = 262144, Je = 4194304;
	function Ye(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function Xe(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Ye(n))) : i = Ye(o) : i = Ye(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Ye(n))) : i = Ye(o)) : i = Ye(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function Ze(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function Qe(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function $e() {
		var e = Je;
		return Je <<= 1, !(Je & 62914560) && (Je = 4194304), e;
	}
	function et(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function tt(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function nt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - He(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && rt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function rt(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - He(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function it(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - He(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function at(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : ot(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function ot(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function st(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function ct() {
		var e = k.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : mp(e.type)) : e;
	}
	function lt(e, t) {
		var n = k.p;
		try {
			return k.p = e, t();
		} finally {
			k.p = n;
		}
	}
	var ut = Math.random().toString(36).slice(2), M = "__reactFiber$" + ut, dt = "__reactProps$" + ut, ft = "__reactContainer$" + ut, pt = "__reactEvents$" + ut, mt = "__reactListeners$" + ut, ht = "__reactHandles$" + ut, gt = "__reactResources$" + ut, _t = "__reactMarker$" + ut;
	function vt(e) {
		delete e[M], delete e[dt], delete e[pt], delete e[mt], delete e[ht];
	}
	function yt(e) {
		var t = e[M];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[ft] || n[M]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = df(e); e !== null;) {
					if (n = e[M]) return n;
					e = df(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function bt(e) {
		if (e = e[M] || e[ft]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function xt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(a(33));
	}
	function Ct(e) {
		var t = e[gt];
		return t ||= e[gt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Tt(e) {
		e[_t] = !0;
	}
	var Et = /* @__PURE__ */ new Set(), Dt = {};
	function Ot(e, t) {
		kt(e, t), kt(e + "Capture", t);
	}
	function kt(e, t) {
		for (Dt[e] = t, e = 0; e < t.length; e++) Et.add(t[e]);
	}
	var At = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), jt = {}, Mt = {};
	function Nt(e) {
		return Te.call(Mt, e) ? !0 : Te.call(jt, e) ? !1 : At.test(e) ? Mt[e] = !0 : (jt[e] = !0, !1);
	}
	function Pt(e, t, n) {
		if (Nt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, "" + n);
			}
		}
	}
	function Ft(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + n);
		}
	}
	function It(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function Lt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Rt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function zt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Bt(e) {
		if (!e._valueTracker) {
			var t = Rt(e) ? "checked" : "value";
			e._valueTracker = zt(e, t, "" + e[t]);
		}
	}
	function Vt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Rt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	function Ht(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var Ut = /[\n"\\]/g;
	function N(e) {
		return e.replace(Ut, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Wt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Lt(t)) : e.value !== "" + Lt(t) && (e.value = "" + Lt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : Kt(e, o, Lt(n)) : Kt(e, o, Lt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Lt(s) : e.removeAttribute("name");
	}
	function Gt(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Bt(e);
				return;
			}
			n = n == null ? "" : "" + Lt(n), t = t == null ? n : "" + Lt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Bt(e);
	}
	function Kt(e, t, n) {
		t === "number" && Ht(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
	}
	function qt(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Lt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Jt(e, t, n) {
		t != null && (t = "" + Lt(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? "" : "" + Lt(n);
	}
	function Yt(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(a(92));
				if (ae(r)) {
					if (1 < r.length) throw Error(a(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Lt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Bt(e);
	}
	function Xt(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Zt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function Qt(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Zt.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function $t(e, t, n) {
		if (t != null && typeof t != "object") throw Error(a(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var i in t) r = t[i], t.hasOwnProperty(i) && n[i] !== r && Qt(e, i, r);
		} else for (var o in t) t.hasOwnProperty(o) && Qt(e, o, t[o]);
	}
	function en(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var tn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), nn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function rn(e) {
		return nn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function an() {}
	var on = null;
	function sn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var cn = null, ln = null;
	function un(e) {
		var t = bt(e);
		if (t && (e = t.stateNode)) {
			var n = e[dt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (Wt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + N("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var i = r[dt] || null;
								if (!i) throw Error(a(90));
								Wt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Vt(r);
					}
					break a;
				case "textarea":
					Jt(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && qt(e, !!n.multiple, t, !1);
			}
		}
	}
	var dn = !1;
	function fn(e, t, n) {
		if (dn) return e(t, n);
		dn = !0;
		try {
			return e(t);
		} finally {
			if (dn = !1, (cn !== null || ln !== null) && (bu(), cn && (t = cn, e = ln, ln = cn = null, un(t), e))) for (t = 0; t < e.length; t++) un(e[t]);
		}
	}
	function pn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[dt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(a(231, t, typeof n));
		return n;
	}
	var mn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, hn = !1;
	if (mn) try {
		var gn = {};
		Object.defineProperty(gn, "passive", { get: function() {
			hn = !0;
		} }), window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
	} catch {
		hn = !1;
	}
	var _n = null, vn = null, yn = null;
	function bn() {
		if (yn) return yn;
		var e, t = vn, n = t.length, r, i = "value" in _n ? _n.value : _n.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return yn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function xn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Sn() {
		return !0;
	}
	function Cn() {
		return !1;
	}
	function wn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Sn : Cn, this.isPropagationStopped = Cn, this;
		}
		return p(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Sn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Sn);
			},
			persist: function() {},
			isPersistent: Sn
		}), t;
	}
	var Tn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, En = wn(Tn), Dn = p({}, Tn, {
		view: 0,
		detail: 0
	}), On = wn(Dn), kn, An, jn, Mn = p({}, Dn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Un,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== jn && (jn && e.type === "mousemove" ? (kn = e.screenX - jn.screenX, An = e.screenY - jn.screenY) : An = kn = 0, jn = e), kn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : An;
		}
	}), Nn = wn(Mn), Pn = wn(p({}, Mn, { dataTransfer: 0 })), Fn = wn(p({}, Dn, { relatedTarget: 0 })), In = wn(p({}, Tn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Ln = wn(p({}, Tn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Rn = wn(p({}, Tn, { data: 0 })), zn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Bn = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Vn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Hn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Vn[e]) ? !!t[e] : !1;
	}
	function Un() {
		return Hn;
	}
	var Wn = wn(p({}, Dn, {
		key: function(e) {
			if (e.key) {
				var t = zn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = xn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Un,
		charCode: function(e) {
			return e.type === "keypress" ? xn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? xn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Gn = wn(p({}, Mn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Kn = wn(p({}, Dn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Un
	})), qn = wn(p({}, Tn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Jn = wn(p({}, Mn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Yn = wn(p({}, Tn, {
		newState: 0,
		oldState: 0
	})), Xn = [
		9,
		13,
		27,
		32
	], Zn = mn && "CompositionEvent" in window, Qn = null;
	mn && "documentMode" in document && (Qn = document.documentMode);
	var $n = mn && "TextEvent" in window && !Qn, er = mn && (!Zn || Qn && 8 < Qn && 11 >= Qn), tr = " ", nr = !1;
	function rr(e, t) {
		switch (e) {
			case "keyup": return Xn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function ir(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var ar = !1;
	function or(e, t) {
		switch (e) {
			case "compositionend": return ir(t);
			case "keypress": return t.which === 32 ? (nr = !0, tr) : null;
			case "textInput": return e = t.data, e === tr && nr ? null : e;
			default: return null;
		}
	}
	function sr(e, t) {
		if (ar) return e === "compositionend" || !Zn && rr(e, t) ? (e = bn(), yn = vn = _n = null, ar = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return er && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var cr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function lr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!cr[e.type] : t === "textarea";
	}
	function ur(e, t, n, r) {
		cn ? ln ? ln.push(r) : ln = [r] : cn = r, t = Ed(t, "onChange"), 0 < t.length && (n = new En("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var dr = null, fr = null;
	function pr(e) {
		yd(e, 0);
	}
	function mr(e) {
		if (Vt(xt(e))) return e;
	}
	function hr(e, t) {
		if (e === "change") return t;
	}
	var gr = !1;
	if (mn) {
		var _r;
		if (mn) {
			var vr = "oninput" in document;
			if (!vr) {
				var yr = document.createElement("div");
				yr.setAttribute("oninput", "return;"), vr = typeof yr.oninput == "function";
			}
			_r = vr;
		} else _r = !1;
		gr = _r && (!document.documentMode || 9 < document.documentMode);
	}
	function br() {
		dr && (dr.detachEvent("onpropertychange", xr), fr = dr = null);
	}
	function xr(e) {
		if (e.propertyName === "value" && mr(fr)) {
			var t = [];
			ur(t, fr, e, sn(e)), fn(pr, t);
		}
	}
	function Sr(e, t, n) {
		e === "focusin" ? (br(), dr = t, fr = n, dr.attachEvent("onpropertychange", xr)) : e === "focusout" && br();
	}
	function Cr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return mr(fr);
	}
	function wr(e, t) {
		if (e === "click") return mr(t);
	}
	function Tr(e, t) {
		if (e === "input" || e === "change") return mr(t);
	}
	function Er(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Dr = typeof Object.is == "function" ? Object.is : Er;
	function Or(e, t) {
		if (Dr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Te.call(t, i) || !Dr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function kr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Ar(e, t) {
		var n = kr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = kr(n);
		}
	}
	function jr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Mr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Ht(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Ht(e.document);
		}
		return t;
	}
	function Nr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Pr = mn && "documentMode" in document && 11 >= document.documentMode, Fr = null, Ir = null, Lr = null, Rr = !1;
	function zr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Rr || Fr == null || Fr !== Ht(r) || (r = Fr, "selectionStart" in r && Nr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Lr && Or(Lr, r) || (Lr = r, r = Ed(Ir, "onSelect"), 0 < r.length && (t = new En("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Fr)));
	}
	function Br(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Vr = {
		animationend: Br("Animation", "AnimationEnd"),
		animationiteration: Br("Animation", "AnimationIteration"),
		animationstart: Br("Animation", "AnimationStart"),
		transitionrun: Br("Transition", "TransitionRun"),
		transitionstart: Br("Transition", "TransitionStart"),
		transitioncancel: Br("Transition", "TransitionCancel"),
		transitionend: Br("Transition", "TransitionEnd")
	}, Hr = {}, Ur = {};
	mn && (Ur = document.createElement("div").style, "AnimationEvent" in window || (delete Vr.animationend.animation, delete Vr.animationiteration.animation, delete Vr.animationstart.animation), "TransitionEvent" in window || delete Vr.transitionend.transition);
	function Wr(e) {
		if (Hr[e]) return Hr[e];
		if (!Vr[e]) return e;
		var t = Vr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Ur) return Hr[e] = t[n];
		return e;
	}
	var Gr = Wr("animationend"), Kr = Wr("animationiteration"), qr = Wr("animationstart"), Jr = Wr("transitionrun"), Yr = Wr("transitionstart"), Xr = Wr("transitioncancel"), Zr = Wr("transitionend"), Qr = /* @__PURE__ */ new Map(), $r = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	$r.push("scrollEnd");
	function ei(e, t) {
		Qr.set(e, t), Ot(t, [e]);
	}
	var ti = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, ni = [], ri = 0, ii = 0;
	function ai() {
		for (var e = ri, t = ii = ri = 0; t < e;) {
			var n = ni[t];
			ni[t++] = null;
			var r = ni[t];
			ni[t++] = null;
			var i = ni[t];
			ni[t++] = null;
			var a = ni[t];
			if (ni[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && li(n, i, a);
		}
	}
	function oi(e, t, n, r) {
		ni[ri++] = e, ni[ri++] = t, ni[ri++] = n, ni[ri++] = r, ii |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function si(e, t, n, r) {
		return oi(e, t, n, r), ui(e);
	}
	function ci(e, t) {
		return oi(e, null, null, t), ui(e);
	}
	function li(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - He(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function ui(e) {
		if (50 < du) throw du = 0, fu = null, Error(a(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var di = {};
	function fi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function pi(e, t, n, r) {
		return new fi(e, t, n, r);
	}
	function mi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function hi(e, t) {
		var n = e.alternate;
		return n === null ? (n = pi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function gi(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function _i(e, t, n, r, i, o) {
		var s = 0;
		if (r = e, typeof e == "function") mi(e) && (s = 1);
		else if (typeof e == "string") s = Uf(e, n, ue.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (e) {
			case D: return e = pi(31, n, t, i), e.elementType = D, e.lanes = o, e;
			case _: return vi(n.children, i, o, t);
			case v:
				s = 8, i |= 24;
				break;
			case y: return e = pi(12, n, t, i | 2), e.elementType = y, e.lanes = o, e;
			case C: return e = pi(13, n, t, i), e.elementType = C, e.lanes = o, e;
			case w: return e = pi(19, n, t, i), e.elementType = w, e.lanes = o, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case x:
						s = 10;
						break a;
					case b:
						s = 9;
						break a;
					case S:
						s = 11;
						break a;
					case T:
						s = 14;
						break a;
					case E:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(a(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = pi(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function vi(e, t, n, r) {
		return e = pi(7, e, r, t), e.lanes = n, e;
	}
	function yi(e, t, n) {
		return e = pi(6, e, null, t), e.lanes = n, e;
	}
	function bi(e) {
		var t = pi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function xi(e, t, n) {
		return t = pi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Si = /* @__PURE__ */ new WeakMap();
	function Ci(e, t) {
		if (typeof e == "object" && e) {
			var n = Si.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: we(t)
			}, Si.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: we(t)
		};
	}
	var wi = [], Ti = 0, Ei = null, Di = 0, Oi = [], ki = 0, Ai = null, ji = 1, Mi = "";
	function Ni(e, t) {
		wi[Ti++] = Di, wi[Ti++] = Ei, Ei = e, Di = t;
	}
	function Pi(e, t, n) {
		Oi[ki++] = ji, Oi[ki++] = Mi, Oi[ki++] = Ai, Ai = e;
		var r = ji;
		e = Mi;
		var i = 32 - He(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - He(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ji = 1 << 32 - He(t) + i | n << i | r, Mi = a + e;
		} else ji = 1 << a | n << i | r, Mi = e;
	}
	function Fi(e) {
		e.return !== null && (Ni(e, 1), Pi(e, 1, 0));
	}
	function Ii(e) {
		for (; e === Ei;) Ei = wi[--Ti], wi[Ti] = null, Di = wi[--Ti], wi[Ti] = null;
		for (; e === Ai;) Ai = Oi[--ki], Oi[ki] = null, Mi = Oi[--ki], Oi[ki] = null, ji = Oi[--ki], Oi[ki] = null;
	}
	function Li(e, t) {
		Oi[ki++] = ji, Oi[ki++] = Mi, Oi[ki++] = Ai, ji = t.id, Mi = t.overflow, Ai = e;
	}
	var Ri = null, P = null, F = !1, zi = null, Bi = !1, Vi = Error(a(519));
	function Hi(e) {
		throw Ji(Ci(Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Vi;
	}
	function Ui(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[M] = e, t[dt] = r, n) {
			case "dialog":
				Q("cancel", t), Q("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Q("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < _d.length; n++) Q(_d[n], t);
				break;
			case "source":
				Q("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Q("error", t), Q("load", t);
				break;
			case "details":
				Q("toggle", t);
				break;
			case "input":
				Q("invalid", t), Gt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), Yt(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Md(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = an), t = !0) : t = !1, t || Hi(e, !0);
	}
	function Wi(e) {
		for (Ri = e.return; Ri;) switch (Ri.tag) {
			case 5:
			case 31:
			case 13:
				Bi = !1;
				return;
			case 27:
			case 3:
				Bi = !0;
				return;
			default: Ri = Ri.return;
		}
	}
	function Gi(e) {
		if (e !== Ri) return !1;
		if (!F) return Wi(e), F = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || Ud(e.type, e.memoizedProps)), n = !n), n && P && Hi(e), Wi(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(a(317));
			P = uf(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(a(317));
			P = uf(e);
		} else t === 27 ? (t = P, Zd(e.type) ? (e = lf, lf = null, P = e) : P = t) : P = Ri ? cf(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Ki() {
		P = Ri = null, F = !1;
	}
	function qi() {
		var e = zi;
		return e !== null && (Zl === null ? Zl = e : Zl.push.apply(Zl, e), zi = null), e;
	}
	function Ji(e) {
		zi === null ? zi = [e] : zi.push(e);
	}
	var Yi = le(null), Xi = null, Zi = null;
	function Qi(e, t, n) {
		j(Yi, t._currentValue), t._currentValue = n;
	}
	function $i(e) {
		e._currentValue = Yi.current, A(Yi);
	}
	function ea(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ta(e, t, n, r) {
		var i = e.child;
		for (i !== null && (i.return = e); i !== null;) {
			var o = i.dependencies;
			if (o !== null) {
				var s = i.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = i;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ea(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (i.tag === 18) {
				if (s = i.return, s === null) throw Error(a(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), ea(s, n, e), s = null;
			} else s = i.child;
			if (s !== null) s.return = i;
			else for (s = i; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (i = s.sibling, i !== null) {
					i.return = s.return, s = i;
					break;
				}
				s = s.return;
			}
			i = s;
		}
	}
	function na(e, t, n, r) {
		e = null;
		for (var i = t, o = !1; i !== null;) {
			if (!o) {
				if (i.flags & 524288) o = !0;
				else if (i.flags & 262144) break;
			}
			if (i.tag === 10) {
				var s = i.alternate;
				if (s === null) throw Error(a(387));
				if (s = s.memoizedProps, s !== null) {
					var c = i.type;
					Dr(i.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (i === pe.current) {
				if (s = i.alternate, s === null) throw Error(a(387));
				s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [Qf] : e.push(Qf));
			}
			i = i.return;
		}
		e !== null && ta(t, e, n, r), t.flags |= 262144;
	}
	function ra(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Dr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function ia(e) {
		Xi = e, Zi = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function aa(e) {
		return sa(Xi, e);
	}
	function oa(e, t) {
		return Xi === null && ia(e), sa(e, t);
	}
	function sa(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, Zi === null) {
			if (e === null) throw Error(a(308));
			Zi = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else Zi = Zi.next = t;
		return n;
	}
	var ca = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, la = t.unstable_scheduleCallback, ua = t.unstable_NormalPriority, I = {
		$$typeof: x,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function da() {
		return {
			controller: new ca(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function fa(e) {
		e.refCount--, e.refCount === 0 && la(ua, function() {
			e.controller.abort();
		});
	}
	var pa = null, ma = 0, ha = 0, ga = null;
	function _a(e, t) {
		if (pa === null) {
			var n = pa = [];
			ma = 0, ha = dd(), ga = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return ma++, t.then(va, va), t;
	}
	function va() {
		if (--ma === 0 && pa !== null) {
			ga !== null && (ga.status = "fulfilled");
			var e = pa;
			pa = null, ha = 0, ga = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function ya(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var ba = O.S;
	O.S = function(e, t) {
		eu = Ae(), typeof t == "object" && t && typeof t.then == "function" && _a(e, t), ba !== null && ba(e, t);
	};
	var xa = le(null);
	function Sa() {
		var e = xa.current;
		return e === null ? K.pooledCache : e;
	}
	function Ca(e, t) {
		t === null ? j(xa, xa.current) : j(xa, t.pool);
	}
	function wa() {
		var e = Sa();
		return e === null ? null : {
			parent: I._currentValue,
			pool: e
		};
	}
	var Ta = Error(a(460)), Ea = Error(a(474)), Da = Error(a(542)), Oa = { then: function() {} };
	function ka(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Aa(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(an, an), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Pa(e), e;
			default:
				if (typeof t.status == "string") t.then(an, an);
				else {
					if (e = K, e !== null && 100 < e.shellSuspendCounter) throw Error(a(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Pa(e), e;
				}
				throw Ma = t, Ta;
		}
	}
	function ja(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Ma = e, Ta) : e;
		}
	}
	var Ma = null;
	function Na() {
		if (Ma === null) throw Error(a(459));
		var e = Ma;
		return Ma = null, e;
	}
	function Pa(e) {
		if (e === Ta || e === Da) throw Error(a(483));
	}
	var Fa = null, Ia = 0;
	function La(e) {
		var t = Ia;
		return Ia += 1, Fa === null && (Fa = []), Aa(Fa, e, t);
	}
	function Ra(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function za(e, t) {
		throw t.$$typeof === m ? Error(a(525)) : (e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function Ba(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function i(e, t) {
			return e = hi(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = yi(n, e.mode, r), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var a = n.type;
			return a === _ ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === a || typeof a == "object" && a && a.$$typeof === E && ja(a) === t.type) ? (t = i(t, n.props), Ra(t, n), t.return = e, t) : (t = _i(n.type, n.key, n.props, null, e.mode, r), Ra(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = xi(n, e.mode, r), t.return = e, t) : (t = i(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, a) {
			return t === null || t.tag !== 7 ? (t = vi(n, e.mode, r, a), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = yi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case h: return n = _i(t.type, t.key, t.props, null, e.mode, n), Ra(n, t), n.return = e, n;
					case g: return t = xi(t, e.mode, n), t.return = e, t;
					case E: return t = ja(t), f(e, t, n);
				}
				if (ae(t) || ne(t)) return t = vi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, La(t), n);
				if (t.$$typeof === x) return f(e, oa(e, t), n);
				za(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case h: return n.key === i ? l(e, t, n, r) : null;
					case g: return n.key === i ? u(e, t, n, r) : null;
					case E: return n = ja(n), p(e, t, n, r);
				}
				if (ae(n) || ne(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, La(n), r);
				if (n.$$typeof === x) return p(e, t, oa(e, n), r);
				za(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case h: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case g: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case E: return r = ja(r), m(e, t, n, r, i);
				}
				if (ae(r) || ne(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, La(r), i);
				if (r.$$typeof === x) return m(e, t, n, oa(t, r), i);
				za(t, r);
			}
			return null;
		}
		function v(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), F && Ni(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return F && Ni(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), F && Ni(i, h), l;
		}
		function y(i, s, c, l) {
			if (c == null) throw Error(a(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(i, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(i, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(i, h), F && Ni(i, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(i, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return F && Ni(i, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, i, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(i, e);
			}), F && Ni(i, g), u;
		}
		function b(e, r, o, c) {
			if (typeof o == "object" && o && o.type === _ && o.key === null && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case h:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === _) {
										if (r.tag === 7) {
											n(e, r.sibling), c = i(r, o.props.children), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === E && ja(l) === r.type) {
										n(e, r.sibling), c = i(r, o.props), Ra(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === _ ? (c = vi(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = _i(o.type, o.key, o.props, null, e.mode, c), Ra(c, o), c.return = e, e = c);
						}
						return s(e);
					case g:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = i(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = xi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case E: return o = ja(o), b(e, r, o, c);
				}
				if (ae(o)) return v(e, r, o, c);
				if (ne(o)) {
					if (l = ne(o), typeof l != "function") throw Error(a(150));
					return o = l.call(o), y(e, r, o, c);
				}
				if (typeof o.then == "function") return b(e, r, La(o), c);
				if (o.$$typeof === x) return b(e, r, oa(e, o), c);
				za(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = i(r, o), c.return = e, e = c) : (n(e, r), c = yi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				Ia = 0;
				var i = b(e, t, n, r);
				return Fa = null, i;
			} catch (t) {
				if (t === Ta || t === Da) throw t;
				var a = pi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var Va = Ba(!0), Ha = Ba(!1), Ua = !1;
	function Wa(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function Ga(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function Ka(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function qa(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, G & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = ui(e), li(e, null, n), t;
		}
		return oi(e, r, t, n), ui(e);
	}
	function Ja(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, it(e, n);
		}
	}
	function Ya(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
		} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var Xa = !1;
	function Za() {
		if (Xa) {
			var e = ga;
			if (e !== null) throw e;
		}
	}
	function Qa(e, t, n, r) {
		Xa = !1;
		var i = e.updateQueue;
		Ua = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, m = f !== s.lane;
				if (m ? (J & f) === f : (r & f) === f) {
					f !== 0 && f === ha && (Xa = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var h = e, g = s;
						f = t;
						var _ = n;
						switch (g.tag) {
							case 1:
								if (h = g.payload, typeof h == "function") {
									d = h.call(_, d, f);
									break a;
								}
								d = h;
								break a;
							case 3: h.flags = h.flags & -65537 | 128;
							case 0:
								if (h = g.payload, f = typeof h == "function" ? h.call(_, d, f) : h, f == null) break a;
								d = p({}, d, f);
								break a;
							case 2: Ua = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, m && (e.flags |= 8192), m = i.callbacks, m === null ? i.callbacks = [f] : m.push(f));
				} else m = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = m, c = d) : u = u.next = m, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					m = s, s = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), Gl |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function $a(e, t) {
		if (typeof e != "function") throw Error(a(191, e));
		e.call(t);
	}
	function eo(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) $a(n[e], t);
	}
	var to = le(null), no = le(0);
	function ro(e, t) {
		e = Wl, j(no, e), j(to, t), Wl = e | t.baseLanes;
	}
	function io() {
		j(no, Wl), j(to, to.current);
	}
	function ao() {
		Wl = no.current, A(to), A(no);
	}
	var oo = le(null), so = null;
	function co(e) {
		var t = e.alternate;
		j(L, L.current & 1), j(oo, e), so === null && (t === null || to.current !== null || t.memoizedState !== null) && (so = e);
	}
	function lo(e) {
		j(L, L.current), j(oo, e), so === null && (so = e);
	}
	function uo(e) {
		e.tag === 22 ? (j(L, L.current), j(oo, e), so === null && (so = e)) : fo(e);
	}
	function fo() {
		j(L, L.current), j(oo, oo.current);
	}
	function po(e) {
		A(oo), so === e && (so = null), A(L);
	}
	var L = le(0);
	function mo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || af(n) || of(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var ho = 0, R = null, z = null, B = null, go = !1, _o = !1, vo = !1, yo = 0, bo = 0, xo = null, So = 0;
	function V() {
		throw Error(a(321));
	}
	function Co(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Dr(e[n], t[n])) return !1;
		return !0;
	}
	function wo(e, t, n, r, i, a) {
		return ho = a, R = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? Bs : Vs, vo = !1, a = n(r, i), vo = !1, _o && (a = Eo(t, n, r, i)), To(e), a;
	}
	function To(e) {
		O.H = zs;
		var t = z !== null && z.next !== null;
		if (ho = 0, B = z = R = null, go = !1, bo = 0, xo = null, t) throw Error(a(300));
		e === null || ic || (e = e.dependencies, e !== null && ra(e) && (ic = !0));
	}
	function Eo(e, t, n, r) {
		R = e;
		var i = 0;
		do {
			if (_o && (xo = null), bo = 0, _o = !1, 25 <= i) throw Error(a(301));
			if (i += 1, B = z = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			O.H = Hs, o = t(n, r);
		} while (_o);
		return o;
	}
	function Do() {
		var e = O.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? No(t) : t, e = e.useState()[0], (z === null ? null : z.memoizedState) !== e && (R.flags |= 1024), t;
	}
	function Oo() {
		var e = yo !== 0;
		return yo = 0, e;
	}
	function ko(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function Ao(e) {
		if (go) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			go = !1;
		}
		ho = 0, B = z = R = null, _o = !1, bo = yo = 0, xo = null;
	}
	function jo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return B === null ? R.memoizedState = B = e : B = B.next = e, B;
	}
	function H() {
		if (z === null) {
			var e = R.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = z.next;
		var t = B === null ? R.memoizedState : B.next;
		if (t !== null) B = t, z = e;
		else {
			if (e === null) throw R.alternate === null ? Error(a(467)) : Error(a(310));
			z = e, e = {
				memoizedState: z.memoizedState,
				baseState: z.baseState,
				baseQueue: z.baseQueue,
				queue: z.queue,
				next: null
			}, B === null ? R.memoizedState = B = e : B = B.next = e;
		}
		return B;
	}
	function Mo() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function No(e) {
		var t = bo;
		return bo += 1, xo === null && (xo = []), e = Aa(xo, e, t), t = R, (B === null ? t.memoizedState : B.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? Bs : Vs), e;
	}
	function Po(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return No(e);
			if (e.$$typeof === x) return aa(e);
		}
		throw Error(a(438, String(e)));
	}
	function Fo(e) {
		var t = null, n = R.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = R.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = Mo(), R.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ee;
		return t.index++, n;
	}
	function Io(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Lo(e) {
		return Ro(H(), z, e);
	}
	function Ro(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(a(311));
		r.lastRenderedReducer = n;
		var i = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (i !== null) {
				var s = i.next;
				i.next = o.next, o.next = s;
			}
			t.baseQueue = i = o, r.pending = null;
		}
		if (o = e.baseState, i === null) e.memoizedState = o;
		else {
			t = i.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (ho & f) === f : (J & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === ha && (d = !0);
					else if ((ho & p) === p) {
						u = u.next, p === ha && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, R.lanes |= p, Gl |= p;
					f = u.action, vo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, R.lanes |= f, Gl |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Dr(o, e.memoizedState) && (ic = !0, d && (n = ga, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function zo(e) {
		var t = H(), n = t.queue;
		if (n === null) throw Error(a(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, i = n.pending, o = t.memoizedState;
		if (i !== null) {
			n.pending = null;
			var s = i = i.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== i);
			Dr(o, t.memoizedState) || (ic = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function Bo(e, t, n) {
		var r = R, i = H(), o = F;
		if (o) {
			if (n === void 0) throw Error(a(407));
			n = n();
		} else n = t();
		var s = !Dr((z || i).memoizedState, n);
		if (s && (i.memoizedState = n, ic = !0), i = i.queue, ds(Uo.bind(null, r, i, e), [e]), i.getSnapshot !== t || s || B !== null && B.memoizedState.tag & 1) {
			if (r.flags |= 2048, os(9, { destroy: void 0 }, Ho.bind(null, r, i, n, t), null), K === null) throw Error(a(349));
			o || ho & 127 || Vo(r, t, n);
		}
		return n;
	}
	function Vo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = R.updateQueue, t === null ? (t = Mo(), R.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Ho(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Wo(t) && Go(e);
	}
	function Uo(e, t, n) {
		return n(function() {
			Wo(t) && Go(e);
		});
	}
	function Wo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Dr(e, n);
		} catch {
			return !0;
		}
	}
	function Go(e) {
		var t = ci(e, 2);
		t !== null && hu(t, e, 2);
	}
	function Ko(e) {
		var t = jo();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), vo) {
				Ve(!0);
				try {
					n();
				} finally {
					Ve(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Io,
			lastRenderedState: e
		}, t;
	}
	function qo(e, t, n, r) {
		return e.baseState = n, Ro(e, z, typeof r == "function" ? r : Io);
	}
	function Jo(e, t, n, r, i) {
		if (Is(e)) throw Error(a(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: i,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			O.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Yo(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Yo(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = O.T, o = {};
			O.T = o;
			try {
				var s = n(i, r), c = O.S;
				c !== null && c(o, s), Xo(e, t, s);
			} catch (n) {
				Qo(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), O.T = a;
			}
		} else try {
			a = n(i, r), Xo(e, t, a);
		} catch (n) {
			Qo(e, t, n);
		}
	}
	function Xo(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Zo(e, t, n);
		}, function(n) {
			return Qo(e, t, n);
		}) : Zo(e, t, n);
	}
	function Zo(e, t, n) {
		t.status = "fulfilled", t.value = n, $o(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Yo(e, n)));
	}
	function Qo(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, $o(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function $o(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function es(e, t) {
		return t;
	}
	function ts(e, t) {
		if (F) {
			var n = K.formState;
			if (n !== null) {
				a: {
					var r = R;
					if (F) {
						if (P) {
							b: {
								for (var i = P, a = Bi; i.nodeType !== 8;) if (!a || (i = cf(i.nextSibling), i === null)) {
									i = null;
									break b;
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								P = cf(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						Hi(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = jo(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: es,
			lastRenderedState: t
		}, n.queue = r, n = Ns.bind(null, R, r), r.dispatch = n, r = Ko(!1), a = Fs.bind(null, R, !1, r.queue), r = jo(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = Jo.bind(null, R, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function ns(e) {
		return rs(H(), z, e);
	}
	function rs(e, t, n) {
		if (t = Ro(e, t, es)[0], e = Lo(Io)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = No(t);
		} catch (e) {
			throw e === Ta ? Da : e;
		}
		else r = t;
		t = H();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (R.flags |= 2048, os(9, { destroy: void 0 }, is.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function is(e, t) {
		e.action = t;
	}
	function as(e) {
		var t = H(), n = z;
		if (n !== null) return rs(t, n, e);
		H(), t = t.memoizedState, n = H();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function os(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = R.updateQueue, t === null && (t = Mo(), R.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function ss() {
		return H().memoizedState;
	}
	function cs(e, t, n, r) {
		var i = jo();
		R.flags |= e, i.memoizedState = os(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function ls(e, t, n, r) {
		var i = H();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		z !== null && r !== null && Co(r, z.memoizedState.deps) ? i.memoizedState = os(t, a, n, r) : (R.flags |= e, i.memoizedState = os(1 | t, a, n, r));
	}
	function us(e, t) {
		cs(8390656, 8, e, t);
	}
	function ds(e, t) {
		ls(2048, 8, e, t);
	}
	function fs(e) {
		R.flags |= 4;
		var t = R.updateQueue;
		if (t === null) t = Mo(), R.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function ps(e) {
		var t = H().memoizedState;
		return fs({
			ref: t,
			nextImpl: e
		}), function() {
			if (G & 2) throw Error(a(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function ms(e, t) {
		return ls(4, 2, e, t);
	}
	function hs(e, t) {
		return ls(4, 4, e, t);
	}
	function gs(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function _s(e, t, n) {
		n = n == null ? null : n.concat([e]), ls(4, 4, gs.bind(null, t, e), n);
	}
	function vs() {}
	function ys(e, t) {
		var n = H();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Co(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function bs(e, t) {
		var n = H();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Co(t, r[1])) return r[0];
		if (r = e(), vo) {
			Ve(!0);
			try {
				e();
			} finally {
				Ve(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function xs(e, t, n) {
		return n === void 0 || ho & 1073741824 && !(J & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = mu(), R.lanes |= e, Gl |= e, n);
	}
	function Ss(e, t, n, r) {
		return Dr(n, t) ? n : to.current === null ? !(ho & 42) || ho & 1073741824 && !(J & 261930) ? (ic = !0, e.memoizedState = n) : (e = mu(), R.lanes |= e, Gl |= e, t) : (e = xs(e, n, r), Dr(e, t) || (ic = !0), e);
	}
	function Cs(e, t, n, r, i) {
		var a = k.p;
		k.p = a !== 0 && 8 > a ? a : 8;
		var o = O.T, s = {};
		O.T = s, Fs(e, !1, t, n);
		try {
			var c = i(), l = O.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? Ps(e, t, ya(c, r), pu(e)) : Ps(e, t, r, pu(e));
		} catch (n) {
			Ps(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, pu());
		} finally {
			k.p = a, o !== null && s.types !== null && (o.types = s.types), O.T = o;
		}
	}
	function ws() {}
	function Ts(e, t, n, r) {
		if (e.tag !== 5) throw Error(a(476));
		var i = Es(e).queue;
		Cs(e, i, t, oe, n === null ? ws : function() {
			return Ds(e), n(r);
		});
	}
	function Es(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: oe,
			baseState: oe,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Io,
				lastRenderedState: oe
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Io,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Ds(e) {
		var t = Es(e);
		t.next === null && (t = e.alternate.memoizedState), Ps(e, t.next.queue, {}, pu());
	}
	function Os() {
		return aa(Qf);
	}
	function ks() {
		return H().memoizedState;
	}
	function As() {
		return H().memoizedState;
	}
	function js(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = pu();
					e = Ka(n);
					var r = qa(t, e, n);
					r !== null && (hu(r, t, n), Ja(r, t, n)), t = { cache: da() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Ms(e, t, n) {
		var r = pu();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Is(e) ? Ls(t, n) : (n = si(e, t, n, r), n !== null && (hu(n, e, r), Rs(n, t, r)));
	}
	function Ns(e, t, n) {
		Ps(e, t, n, pu());
	}
	function Ps(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Is(e)) Ls(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Dr(s, o)) return oi(e, t, i, 0), K === null && ai(), !1;
			} catch {}
			if (n = si(e, t, i, r), n !== null) return hu(n, e, r), Rs(n, t, r), !0;
		}
		return !1;
	}
	function Fs(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: dd(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Is(e)) {
			if (t) throw Error(a(479));
		} else t = si(e, n, r, 2), t !== null && hu(t, e, 2);
	}
	function Is(e) {
		var t = e.alternate;
		return e === R || t !== null && t === R;
	}
	function Ls(e, t) {
		_o = go = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function Rs(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, it(e, n);
		}
	}
	var zs = {
		readContext: aa,
		use: Po,
		useCallback: V,
		useContext: V,
		useEffect: V,
		useImperativeHandle: V,
		useLayoutEffect: V,
		useInsertionEffect: V,
		useMemo: V,
		useReducer: V,
		useRef: V,
		useState: V,
		useDebugValue: V,
		useDeferredValue: V,
		useTransition: V,
		useSyncExternalStore: V,
		useId: V,
		useHostTransitionStatus: V,
		useFormState: V,
		useActionState: V,
		useOptimistic: V,
		useMemoCache: V,
		useCacheRefresh: V
	};
	zs.useEffectEvent = V;
	var Bs = {
		readContext: aa,
		use: Po,
		useCallback: function(e, t) {
			return jo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: aa,
		useEffect: us,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), cs(4194308, 4, gs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return cs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			cs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = jo();
			t = t === void 0 ? null : t;
			var r = e();
			if (vo) {
				Ve(!0);
				try {
					e();
				} finally {
					Ve(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = jo();
			if (n !== void 0) {
				var i = n(t);
				if (vo) {
					Ve(!0);
					try {
						n(t);
					} finally {
						Ve(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Ms.bind(null, R, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = jo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Ko(e);
			var t = e.queue, n = Ns.bind(null, R, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: vs,
		useDeferredValue: function(e, t) {
			return xs(jo(), e, t);
		},
		useTransition: function() {
			var e = Ko(!1);
			return e = Cs.bind(null, R, e.queue, !0, !1), jo().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = R, i = jo();
			if (F) {
				if (n === void 0) throw Error(a(407));
				n = n();
			} else {
				if (n = t(), K === null) throw Error(a(349));
				J & 127 || Vo(r, t, n);
			}
			i.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return i.queue = o, us(Uo.bind(null, r, o, e), [e]), r.flags |= 2048, os(9, { destroy: void 0 }, Ho.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = jo(), t = K.identifierPrefix;
			if (F) {
				var n = Mi, r = ji;
				n = (r & ~(1 << 32 - He(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = yo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = So++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Os,
		useFormState: ts,
		useActionState: ts,
		useOptimistic: function(e) {
			var t = jo();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Fs.bind(null, R, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: Fo,
		useCacheRefresh: function() {
			return jo().memoizedState = js.bind(null, R);
		},
		useEffectEvent: function(e) {
			var t = jo(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (G & 2) throw Error(a(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Vs = {
		readContext: aa,
		use: Po,
		useCallback: ys,
		useContext: aa,
		useEffect: ds,
		useImperativeHandle: _s,
		useInsertionEffect: ms,
		useLayoutEffect: hs,
		useMemo: bs,
		useReducer: Lo,
		useRef: ss,
		useState: function() {
			return Lo(Io);
		},
		useDebugValue: vs,
		useDeferredValue: function(e, t) {
			return Ss(H(), z.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Lo(Io)[0], t = H().memoizedState;
			return [typeof e == "boolean" ? e : No(e), t];
		},
		useSyncExternalStore: Bo,
		useId: ks,
		useHostTransitionStatus: Os,
		useFormState: ns,
		useActionState: ns,
		useOptimistic: function(e, t) {
			return qo(H(), z, e, t);
		},
		useMemoCache: Fo,
		useCacheRefresh: As
	};
	Vs.useEffectEvent = ps;
	var Hs = {
		readContext: aa,
		use: Po,
		useCallback: ys,
		useContext: aa,
		useEffect: ds,
		useImperativeHandle: _s,
		useInsertionEffect: ms,
		useLayoutEffect: hs,
		useMemo: bs,
		useReducer: zo,
		useRef: ss,
		useState: function() {
			return zo(Io);
		},
		useDebugValue: vs,
		useDeferredValue: function(e, t) {
			var n = H();
			return z === null ? xs(n, e, t) : Ss(n, z.memoizedState, e, t);
		},
		useTransition: function() {
			var e = zo(Io)[0], t = H().memoizedState;
			return [typeof e == "boolean" ? e : No(e), t];
		},
		useSyncExternalStore: Bo,
		useId: ks,
		useHostTransitionStatus: Os,
		useFormState: as,
		useActionState: as,
		useOptimistic: function(e, t) {
			var n = H();
			return z === null ? (n.baseState = e, [e, n.queue.dispatch]) : qo(n, z, e, t);
		},
		useMemoCache: Fo,
		useCacheRefresh: As
	};
	Hs.useEffectEvent = ps;
	function Us(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : p({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Ws = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = pu(), i = Ka(r);
			i.payload = t, n != null && (i.callback = n), t = qa(e, i, r), t !== null && (hu(t, e, r), Ja(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = pu(), i = Ka(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = qa(e, i, r), t !== null && (hu(t, e, r), Ja(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = pu(), r = Ka(n);
			r.tag = 2, t != null && (r.callback = t), t = qa(e, r, n), t !== null && (hu(t, e, n), Ja(t, e, n));
		}
	};
	function Gs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, r) || !Or(i, a) : !0;
	}
	function Ks(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
	}
	function qs(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = p({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function Js(e) {
		ti(e);
	}
	function Ys(e) {
		console.error(e);
	}
	function Xs(e) {
		ti(e);
	}
	function Zs(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Qs(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function $s(e, t, n) {
		return n = Ka(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Zs(e, t);
		}, n;
	}
	function ec(e) {
		return e = Ka(e), e.tag = 3, e;
	}
	function tc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Qs(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Qs(t, n, r), typeof i != "function" && (ru === null ? ru = /* @__PURE__ */ new Set([this]) : ru.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function nc(e, t, n, r, i) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && na(t, n, i, !0), n = oo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return so === null ? Du() : n.alternate === null && X === 0 && (X = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === Oa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Gu(e, r, i)), !1;
					case 22: return n.flags |= 65536, r === Oa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Gu(e, r, i)), !1;
				}
				throw Error(a(435, n.tag));
			}
			return Gu(e, r, i), Du(), !1;
		}
		if (F) return t = oo.current, t === null ? (r !== Vi && (t = Error(a(423), { cause: r }), Ji(Ci(t, n))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = Ci(r, n), i = $s(e.stateNode, r, i), Ya(e, i), X !== 4 && (X = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== Vi && (e = Error(a(422), { cause: r }), Ji(Ci(e, n)))), !1;
		var o = Error(a(520), { cause: r });
		if (o = Ci(o, n), Xl === null ? Xl = [o] : Xl.push(o), X !== 4 && (X = 2), t === null) return !0;
		r = Ci(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = $s(n.stateNode, r, e), Ya(n, e), !1;
				case 1: if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (ru === null || !ru.has(o)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = ec(i), tc(i, e, n, r), Ya(n, i), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var rc = Error(a(461)), ic = !1;
	function ac(e, t, n, r) {
		t.child = e === null ? Ha(t, null, n, r) : Va(t, e.child, n, r);
	}
	function oc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return ia(t), r = wo(e, t, n, o, a, i), s = Oo(), e !== null && !ic ? (ko(e, t, i), Ac(e, t, i)) : (F && s && Fi(t), t.flags |= 1, ac(e, t, r, i), t.child);
	}
	function sc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !mi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, cc(e, t, a, r, i)) : (e = _i(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !jc(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Or : n, n(o, r) && e.ref === t.ref) return Ac(e, t, i);
		}
		return t.flags |= 1, e = hi(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function cc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Or(a, r) && e.ref === t.ref) {
				if (ic = !1, t.pendingProps = r = a, jc(e, i)) e.flags & 131072 && (ic = !0);
				else return t.lanes = e.lanes, Ac(e, t, i);
			}
		}
		return gc(e, t, n, r, i);
	}
	function lc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return dc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ca(t, a === null ? null : a.cachePool), a === null ? io() : ro(t, a), uo(t);
			else return r = t.lanes = 536870912, dc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ca(t, null), io(), fo(t)) : (Ca(t, a.cachePool), ro(t, a), fo(t), t.memoizedState = null);
		return ac(e, t, i, n), t.child;
	}
	function uc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function dc(e, t, n, r, i) {
		var a = Sa();
		return a = a === null ? null : {
			parent: I._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ca(t, null), io(), uo(t), e !== null && na(e, t, r, !0), t.childLanes = i, null;
	}
	function fc(e, t) {
		return t = Tc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function pc(e, t, n) {
		return Va(t, e.child, null, n), e = fc(t, t.pendingProps), e.flags |= 2, po(t), t.memoizedState = null, e;
	}
	function mc(e, t, n) {
		var r = t.pendingProps, i = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (F) {
				if (r.mode === "hidden") return e = fc(t, r), t.lanes = 536870912, uc(null, e);
				if (lo(t), (e = P) ? (e = rf(e, Bi), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ai === null ? null : {
						id: ji,
						overflow: Mi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = bi(e), n.return = t, t.child = n, Ri = t, P = null)) : e = null, e === null) throw Hi(t);
				return t.lanes = 536870912, null;
			}
			return fc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (lo(t), i) {
				if (t.flags & 256) t.flags &= -257, t = pc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(a(558));
			} else if (ic || na(e, t, n, !1), i = (n & e.childLanes) !== 0, ic || i) {
				if (r = K, r !== null && (s = at(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, ci(e, s), hu(r, e, s), rc;
				Du(), t = pc(e, t, n);
			} else e = o.treeContext, P = cf(s.nextSibling), Ri = t, F = !0, zi = null, Bi = !1, e !== null && Li(t, e), t = fc(t, r), t.flags |= 4096;
			return t;
		}
		return e = hi(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function hc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(a(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function gc(e, t, n, r, i) {
		return ia(t), n = wo(e, t, n, r, void 0, i), r = Oo(), e !== null && !ic ? (ko(e, t, i), Ac(e, t, i)) : (F && r && Fi(t), t.flags |= 1, ac(e, t, n, i), t.child);
	}
	function _c(e, t, n, r, i, a) {
		return ia(t), t.updateQueue = null, n = Eo(t, r, n, i), To(e), r = Oo(), e !== null && !ic ? (ko(e, t, a), Ac(e, t, a)) : (F && r && Fi(t), t.flags |= 1, ac(e, t, n, a), t.child);
	}
	function vc(e, t, n, r, i) {
		if (ia(t), t.stateNode === null) {
			var a = di, o = n.contextType;
			typeof o == "object" && o && (a = aa(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Ws, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, Wa(t), o = n.contextType, a.context = typeof o == "object" && o ? aa(o) : di, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Us(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && Ws.enqueueReplaceState(a, a.state, null), Qa(t, r, a, i), Za(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = qs(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = di, typeof u == "object" && u && (o = aa(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Ks(t, a, r, o), Ua = !1;
			var f = t.memoizedState;
			a.state = f, Qa(t, r, a, i), Za(), l = t.memoizedState, s || f !== l || Ua ? (typeof d == "function" && (Us(t, n, d, r), l = t.memoizedState), (c = Ua || Gs(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, Ga(e, t), o = t.memoizedProps, u = qs(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = di, typeof l == "object" && l && (c = aa(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Ks(t, a, r, c), Ua = !1, f = t.memoizedState, a.state = f, Qa(t, r, a, i), Za();
			var p = t.memoizedState;
			o !== d || f !== p || Ua || e !== null && e.dependencies !== null && ra(e.dependencies) ? (typeof s == "function" && (Us(t, n, s, r), p = t.memoizedState), (u = Ua || Gs(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ra(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, hc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Va(t, e.child, null, i), t.child = Va(t, null, n, i)) : ac(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Ac(e, t, i), e;
	}
	function yc(e, t, n, r) {
		return Ki(), t.flags |= 256, ac(e, t, n, r), t.child;
	}
	var bc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function xc(e) {
		return {
			baseLanes: e,
			cachePool: wa()
		};
	}
	function Sc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Jl), e;
	}
	function Cc(e, t, n) {
		var r = t.pendingProps, i = !1, o = !!(t.flags & 128), s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(L.current & 2)), s && (i = !0, t.flags &= -129), s = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (F) {
				if (i ? co(t) : fo(t), (e = P) ? (e = rf(e, Bi), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ai === null ? null : {
						id: ji,
						overflow: Mi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = bi(e), n.return = t, t.child = n, Ri = t, P = null)) : e = null, e === null) throw Hi(t);
				return of(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var c = r.children;
			return r = r.fallback, i ? (fo(t), i = t.mode, c = Tc({
				mode: "hidden",
				children: c
			}, i), r = vi(r, i, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = xc(n), r.childLanes = Sc(e, s, n), t.memoizedState = bc, uc(null, r)) : (co(t), wc(t, c));
		}
		var l = e.memoizedState;
		if (l !== null && (c = l.dehydrated, c !== null)) {
			if (o) t.flags & 256 ? (co(t), t.flags &= -257, t = Ec(e, t, n)) : t.memoizedState === null ? (fo(t), c = r.fallback, i = t.mode, r = Tc({
				mode: "visible",
				children: r.children
			}, i), c = vi(c, i, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, Va(t, e.child, null, n), r = t.child, r.memoizedState = xc(n), r.childLanes = Sc(e, s, n), t.memoizedState = bc, t = uc(null, r)) : (fo(t), t.child = e.child, t.flags |= 128, t = null);
			else if (co(t), of(c)) {
				if (s = c.nextSibling && c.nextSibling.dataset, s) var u = s.dgst;
				s = u, r = Error(a(419)), r.stack = "", r.digest = s, Ji({
					value: r,
					source: null,
					stack: null
				}), t = Ec(e, t, n);
			} else if (ic || na(e, t, n, !1), s = (n & e.childLanes) !== 0, ic || s) {
				if (s = K, s !== null && (r = at(s, n), r !== 0 && r !== l.retryLane)) throw l.retryLane = r, ci(e, r), hu(s, e, r), rc;
				af(c) || Du(), t = Ec(e, t, n);
			} else af(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, P = cf(c.nextSibling), Ri = t, F = !0, zi = null, Bi = !1, e !== null && Li(t, e), t = wc(t, r.children), t.flags |= 4096);
			return t;
		}
		return i ? (fo(t), c = r.fallback, i = t.mode, l = e.child, u = l.sibling, r = hi(l, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = vi(c, i, n, null), c.flags |= 2) : c = hi(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, uc(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = xc(n) : (i = c.cachePool, i === null ? i = wa() : (l = I._currentValue, i = i.parent === l ? i : {
			parent: l,
			pool: l
		}), c = {
			baseLanes: c.baseLanes | n,
			cachePool: i
		}), r.memoizedState = c, r.childLanes = Sc(e, s, n), t.memoizedState = bc, uc(e.child, r)) : (co(t), n = e.child, e = n.sibling, n = hi(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function wc(e, t) {
		return t = Tc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Tc(e, t) {
		return e = pi(22, e, null, t), e.lanes = 0, e;
	}
	function Ec(e, t, n) {
		return Va(t, e.child, null, n), e = wc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Dc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), ea(e.return, t, n);
	}
	function Oc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function kc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = L.current, s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, j(L, o), ac(e, t, r, n), r = F ? Di : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Dc(e, n, t);
			else if (e.tag === 19) Dc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && mo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Oc(t, !1, i, n, a, r);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && mo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Oc(t, !0, n, null, a, r);
				break;
			case "together":
				Oc(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function Ac(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Gl |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (na(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(a(153));
		if (t.child !== null) {
			for (e = t.child, n = hi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = hi(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function jc(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ra(e)));
	}
	function Mc(e, t, n) {
		switch (t.tag) {
			case 3:
				me(t, t.stateNode.containerInfo), Qi(t, I, e.memoizedState.cache), Ki();
				break;
			case 27:
			case 5:
				ge(t);
				break;
			case 4:
				me(t, t.stateNode.containerInfo);
				break;
			case 10:
				Qi(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, lo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (co(t), e = Ac(e, t, n), e === null ? null : e.sibling) : Cc(e, t, n) : (co(t), t.flags |= 128, null);
				co(t);
				break;
			case 19:
				var i = !!(e.flags & 128);
				if (r = (n & t.childLanes) !== 0, r ||= (na(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return kc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), j(L, L.current), r) break;
				return null;
			case 22: return t.lanes = 0, lc(e, t, n, t.pendingProps);
			case 24: Qi(t, I, e.memoizedState.cache);
		}
		return Ac(e, t, n);
	}
	function Nc(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) ic = !0;
			else {
				if (!jc(e, n) && !(t.flags & 128)) return ic = !1, Mc(e, t, n);
				ic = !!(e.flags & 131072);
			}
		} else ic = !1, F && t.flags & 1048576 && Pi(t, Di, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = ja(t.elementType), t.type = e, typeof e == "function") mi(e) ? (r = qs(e, r), t.tag = 1, t = vc(null, t, e, r, n)) : (t.tag = 0, t = gc(null, t, e, r, n));
					else {
						if (e != null) {
							var i = e.$$typeof;
							if (i === S) {
								t.tag = 11, t = oc(null, t, e, r, n);
								break a;
							}
							if (i === T) {
								t.tag = 14, t = sc(null, t, e, r, n);
								break a;
							}
						}
						throw t = ie(e) || e, Error(a(306, t, ""));
					}
				}
				return t;
			case 0: return gc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, i = qs(r, t.pendingProps), vc(e, t, r, i, n);
			case 3:
				a: {
					if (me(t, t.stateNode.containerInfo), e === null) throw Error(a(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					i = o.element, Ga(e, t), Qa(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, Qi(t, I, r), r !== o.cache && ta(t, [I], n, !0), Za(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = yc(e, t, r, n);
							break a;
						}
						if (r !== i) {
							i = Ci(Error(a(424)), t), Ji(i), t = yc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (P = cf(e.firstChild), Ri = t, F = !0, zi = null, Bi = !0, n = Ha(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					} else {
						if (Ki(), r === i) {
							t = Ac(e, t, n);
							break a;
						}
						ac(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return hc(e, t), e === null ? (n = kf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : F || (n = t.type, e = t.pendingProps, r = Bd(fe.current).createElement(n), r[M] = t, r[dt] = e, Pd(r, n, e), Tt(r), t.stateNode = r) : t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return ge(t), e === null && F && (r = t.stateNode = ff(t.type, t.pendingProps, fe.current), Ri = t, Bi = !0, i = P, Zd(t.type) ? (lf = i, P = cf(r.firstChild)) : P = i), ac(e, t, t.pendingProps.children, n), hc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && F && ((i = r = P) && (r = tf(r, t.type, t.pendingProps, Bi), r === null ? i = !1 : (t.stateNode = r, Ri = t, P = cf(r.firstChild), Bi = !1, i = !0)), i || Hi(t)), ge(t), i = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, Ud(i, o) ? r = null : s !== null && Ud(i, s) && (t.flags |= 32), t.memoizedState !== null && (i = wo(e, t, Do, null, null, n), Qf._currentValue = i), hc(e, t), ac(e, t, r, n), t.child;
			case 6: return e === null && F && ((e = n = P) && (n = nf(n, t.pendingProps, Bi), n === null ? e = !1 : (t.stateNode = n, Ri = t, P = null, e = !0)), e || Hi(t)), null;
			case 13: return Cc(e, t, n);
			case 4: return me(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Va(t, null, r, n) : ac(e, t, r, n), t.child;
			case 11: return oc(e, t, t.type, t.pendingProps, n);
			case 7: return ac(e, t, t.pendingProps, n), t.child;
			case 8: return ac(e, t, t.pendingProps.children, n), t.child;
			case 12: return ac(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, Qi(t, t.type, r.value), ac(e, t, r.children, n), t.child;
			case 9: return i = t.type._context, r = t.pendingProps.children, ia(t), i = aa(i), r = r(i), t.flags |= 1, ac(e, t, r, n), t.child;
			case 14: return sc(e, t, t.type, t.pendingProps, n);
			case 15: return cc(e, t, t.type, t.pendingProps, n);
			case 19: return kc(e, t, n);
			case 31: return mc(e, t, n);
			case 22: return lc(e, t, n, t.pendingProps);
			case 24: return ia(t), r = aa(I), e === null ? (i = Sa(), i === null && (i = K, o = da(), i.pooledCache = o, o.refCount++, o !== null && (i.pooledCacheLanes |= n), i = o), t.memoizedState = {
				parent: r,
				cache: i
			}, Wa(t), Qi(t, I, i)) : ((e.lanes & n) !== 0 && (Ga(e, t), Qa(t, null, null, n), Za()), i = e.memoizedState, o = t.memoizedState, i.parent === r ? (r = o.cache, Qi(t, I, r), r !== i.cache && ta(t, [I], n, !0)) : (i = {
				parent: r,
				cache: r
			}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Qi(t, I, r))), ac(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(a(156, t.tag));
	}
	function Pc(e) {
		e.flags |= 4;
	}
	function Fc(e, t, n, r, i) {
		if ((t = !!(e.mode & 32)) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (wu()) e.flags |= 8192;
				else throw Ma = Oa, Ea;
			}
		} else e.flags &= -16777217;
	}
	function Ic(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Wf(t)) {
			if (wu()) e.flags |= 8192;
			else throw Ma = Oa, Ea;
		}
	}
	function Lc(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : $e(), e.lanes |= t, Yl |= t);
	}
	function Rc(e, t) {
		if (!F) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function U(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function zc(e, t, n) {
		var r = t.pendingProps;
		switch (Ii(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return U(t), null;
			case 1: return U(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), $i(I), he(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Gi(t) ? Pc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, qi())), U(t), null;
			case 26:
				var i = t.type, o = t.memoizedState;
				return e === null ? (Pc(t), o === null ? (U(t), Fc(t, i, null, r, n)) : (U(t), Ic(t, o))) : o ? o === e.memoizedState ? (U(t), t.flags &= -16777217) : (Pc(t), U(t), Ic(t, o)) : (e = e.memoizedProps, e !== r && Pc(t), U(t), Fc(t, i, e, r, n)), null;
			case 27:
				if (_e(t), n = fe.current, i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Pc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(a(166));
						return U(t), null;
					}
					e = ue.current, Gi(t) ? Ui(t, e) : (e = ff(i, r, n), t.stateNode = e, Pc(t));
				}
				return U(t), null;
			case 5:
				if (_e(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Pc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(a(166));
						return U(t), null;
					}
					if (o = ue.current, Gi(t)) Ui(t, o);
					else {
						var s = Bd(fe.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", i);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
								break;
							default: switch (i) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", i);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(i, { is: r.is }) : s.createElement(i);
							}
						}
						o[M] = t, o[dt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (Pd(o, i, r), i) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && Pc(t);
					}
				}
				return U(t), Fc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && Pc(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
					if (e = fe.current, Gi(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, i = Ri, i !== null) switch (i.tag) {
							case 27:
							case 5: r = i.memoizedProps;
						}
						e[M] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Md(e.nodeValue, n)), e || Hi(t, !0);
					} else e = Bd(e).createTextNode(r), e[M] = t, t.stateNode = e;
				}
				return U(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = Gi(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(a(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(a(557));
							e[M] = t;
						} else Ki(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						U(t), e = !1;
					} else n = qi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (po(t), t) : (po(t), null);
					if (t.flags & 128) throw Error(a(558));
				}
				return U(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (i = Gi(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!i) throw Error(a(318));
							if (i = t.memoizedState, i = i === null ? null : i.dehydrated, !i) throw Error(a(317));
							i[M] = t;
						} else Ki(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						U(t), i = !1;
					} else i = qi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
					if (!i) return t.flags & 256 ? (po(t), t) : (po(t), null);
				}
				return po(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Lc(t, t.updateQueue), U(t), null);
			case 4: return he(), e === null && Sd(t.stateNode.containerInfo), U(t), null;
			case 10: return $i(t.type), U(t), null;
			case 19:
				if (A(L), r = t.memoizedState, r === null) return U(t), null;
				if (i = !!(t.flags & 128), o = r.rendering, o === null) {
					if (i) Rc(r, !1);
					else {
						if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = mo(e), o !== null) {
								for (t.flags |= 128, Rc(r, !1), e = o.updateQueue, t.updateQueue = e, Lc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) gi(n, e), n = n.sibling;
								return j(L, L.current & 1 | 2), F && Ni(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ae() > tu && (t.flags |= 128, i = !0, Rc(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!i) {
						if (e = mo(o), e !== null) {
							if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Lc(t, e), Rc(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !F) return U(t), null;
						} else 2 * Ae() - r.renderingStartTime > tu && n !== 536870912 && (t.flags |= 128, i = !0, Rc(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				return r.tail === null ? (U(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ae(), e.sibling = null, n = L.current, j(L, i ? n & 1 | 2 : n & 1), F && Ni(t, r.treeForkCount), e);
			case 22:
			case 23: return po(t), ao(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (U(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : U(t), n = t.updateQueue, n !== null && Lc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && A(xa), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), $i(I), U(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(a(156, t.tag));
	}
	function Bc(e, t) {
		switch (Ii(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return $i(I), he(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return _e(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (po(t), t.alternate === null) throw Error(a(340));
					Ki();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (po(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(a(340));
					Ki();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return A(L), null;
			case 4: return he(), null;
			case 10: return $i(t.type), null;
			case 22:
			case 23: return po(t), ao(), e !== null && A(xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return $i(I), null;
			case 25: return null;
			default: return null;
		}
	}
	function Vc(e, t) {
		switch (Ii(t), t.tag) {
			case 3:
				$i(I), he();
				break;
			case 26:
			case 27:
			case 5:
				_e(t);
				break;
			case 4:
				he();
				break;
			case 31:
				t.memoizedState !== null && po(t);
				break;
			case 13:
				po(t);
				break;
			case 19:
				A(L);
				break;
			case 10:
				$i(t.type);
				break;
			case 22:
			case 23:
				po(t), ao(), e !== null && A(xa);
				break;
			case 24: $i(I);
		}
	}
	function Hc(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Uc(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Z(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Wc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				eo(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function Gc(e, t, n) {
		n.props = qs(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Kc(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Z(e, t, n);
		}
	}
	function qc(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				Z(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Z(e, t, n);
			}
			else n.current = null;
		}
	}
	function Jc(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Yc(e, t, n) {
		try {
			var r = e.stateNode;
			Fd(r, e.type, n, t), r[dt] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Xc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zd(e.type) || e.tag === 4;
	}
	function Zc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Xc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Zd(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Qc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = an));
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Qc(e, t, n), e = e.sibling; e !== null;) Qc(e, t, n), e = e.sibling;
	}
	function $c(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), e = e.child, e !== null)) for ($c(e, t, n), e = e.sibling; e !== null;) $c(e, t, n), e = e.sibling;
	}
	function el(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Pd(t, r, n), t[M] = e, t[dt] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var tl = !1, nl = !1, rl = !1, il = typeof WeakSet == "function" ? WeakSet : Set, al = null;
	function ol(e, t) {
		if (e = e.containerInfo, Rd = sp, e = Mr(e), Nr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (c = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === i && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (zd = {
			focusedElem: e,
			selectionRange: n
		}, sp = !1, al = t; al !== null;) if (t = al, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, al = e;
		else for (; al !== null;) {
			switch (t = al, o = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) i = e[n], i.ref.impl = i.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && o !== null) {
						e = void 0, n = t, i = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
						try {
							var h = qs(n.type, i);
							e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							Z(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) ef(e);
						else if (n === 1) switch (e.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								ef(e);
								break;
							default: e.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(a(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, al = e;
				break;
			}
			al = t.return;
		}
	}
	function sl(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				xl(e, n), r & 4 && Hc(5, n);
				break;
			case 1:
				if (xl(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						Z(n, n.return, e);
					}
					else {
						var i = qs(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							Z(n, n.return, e);
						}
					}
				}
				r & 64 && Wc(n), r & 512 && Kc(n, n.return);
				break;
			case 3:
				if (xl(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						eo(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && el(n);
			case 26:
			case 5:
				xl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return);
				break;
			case 12:
				xl(e, n);
				break;
			case 31:
				xl(e, n), r & 4 && fl(e, n);
				break;
			case 13:
				xl(e, n), r & 4 && pl(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Ju.bind(null, n), sf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || tl, !r) {
					t = t !== null && t.memoizedState !== null || nl, i = tl;
					var a = nl;
					tl = r, (nl = t) && !a ? Cl(e, n, !!(n.subtreeFlags & 8772)) : xl(e, n), tl = i, nl = a;
				}
				break;
			case 30: break;
			default: xl(e, n);
		}
	}
	function cl(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, cl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var W = null, ll = !1;
	function ul(e, t, n) {
		for (n = n.child; n !== null;) dl(e, t, n), n = n.sibling;
	}
	function dl(e, t, n) {
		if (Be && typeof Be.onCommitFiberUnmount == "function") try {
			Be.onCommitFiberUnmount(ze, n);
		} catch {}
		switch (n.tag) {
			case 26:
				nl || qc(n, t), ul(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				nl || qc(n, t);
				var r = W, i = ll;
				Zd(n.type) && (W = n.stateNode, ll = !1), ul(e, t, n), pf(n.stateNode), W = r, ll = i;
				break;
			case 5: nl || qc(n, t);
			case 6:
				if (r = W, i = ll, W = null, ul(e, t, n), W = r, ll = i, W !== null) {
					if (ll) try {
						(W.nodeType === 9 ? W.body : W.nodeName === "HTML" ? W.ownerDocument.body : W).removeChild(n.stateNode);
					} catch (e) {
						Z(n, t, e);
					}
					else try {
						W.removeChild(n.stateNode);
					} catch (e) {
						Z(n, t, e);
					}
				}
				break;
			case 18:
				W !== null && (ll ? (e = W, Qd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Np(e)) : Qd(W, n.stateNode));
				break;
			case 4:
				r = W, i = ll, W = n.stateNode.containerInfo, ll = !0, ul(e, t, n), W = r, ll = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Uc(2, n, t), nl || Uc(4, n, t), ul(e, t, n);
				break;
			case 1:
				nl || (qc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Gc(n, t, r)), ul(e, t, n);
				break;
			case 21:
				ul(e, t, n);
				break;
			case 22:
				nl = (r = nl) || n.memoizedState !== null, ul(e, t, n), nl = r;
				break;
			default: ul(e, t, n);
		}
	}
	function fl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Np(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function pl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Np(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function ml(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new il()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new il()), t;
			default: throw Error(a(435, e.tag));
		}
	}
	function hl(e, t) {
		var n = ml(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Yu.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function gl(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r], o = e, s = t, c = s;
			a: for (; c !== null;) {
				switch (c.tag) {
					case 27:
						if (Zd(c.type)) {
							W = c.stateNode, ll = !1;
							break a;
						}
						break;
					case 5:
						W = c.stateNode, ll = !1;
						break a;
					case 3:
					case 4:
						W = c.stateNode.containerInfo, ll = !0;
						break a;
				}
				c = c.return;
			}
			if (W === null) throw Error(a(160));
			dl(o, s, i), W = null, ll = !1, o = i.alternate, o !== null && (o.return = null), i.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) vl(t, e), t = t.sibling;
	}
	var _l = null;
	function vl(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				gl(t, e), yl(e), r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return));
				break;
			case 1:
				gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 64 && tl && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var i = _l;
				if (gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 4) {
					var o = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) {
						if (r === null) {
							if (e.stateNode === null) {
								a: {
									r = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
									b: switch (r) {
										case "title":
											o = i.getElementsByTagName("title")[0], (!o || o[_t] || o[M] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = i.createElement(r), i.head.insertBefore(o, i.querySelector("head > title"))), Pd(o, r, n), o[M] = e, Tt(o), r = o;
											break a;
										case "link":
											var s = Vf("link", "href", i).get(r + (n.href || ""));
											if (s) {
												for (var c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
													s.splice(c, 1);
													break b;
												}
											}
											o = i.createElement(r), Pd(o, r, n), i.head.appendChild(o);
											break;
										case "meta":
											if (s = Vf("meta", "content", i).get(r + (n.content || ""))) {
												for (c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
													s.splice(c, 1);
													break b;
												}
											}
											o = i.createElement(r), Pd(o, r, n), i.head.appendChild(o);
											break;
										default: throw Error(a(468, r));
									}
									o[M] = e, Tt(o), r = o;
								}
								e.stateNode = r;
							} else Hf(i, e.type, e.stateNode);
						} else e.stateNode = If(i, r, e.memoizedProps);
					} else o === r ? r === null && e.stateNode !== null && Yc(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? Hf(i, e.type, e.stateNode) : If(i, r, e.memoizedProps));
				}
				break;
			case 27:
				gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), e.flags & 32) {
					i = e.stateNode;
					try {
						Xt(i, "");
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (i = e.memoizedProps, Yc(e, i, n === null ? i : n.memoizedProps)), r & 1024 && (rl = !0);
				break;
			case 6:
				if (gl(t, e), yl(e), r & 4) {
					if (e.stateNode === null) throw Error(a(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Bf = null, i = _l, _l = gf(t.containerInfo), gl(t, e), _l = i, yl(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Np(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				rl && (rl = !1, bl(e));
				break;
			case 4:
				r = _l, _l = gf(e.stateNode.containerInfo), gl(t, e), yl(e), _l = r;
				break;
			case 12:
				gl(t, e), yl(e);
				break;
			case 31:
				gl(t, e), yl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
				break;
			case 13:
				gl(t, e), yl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && ($l = Ae()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
				break;
			case 22:
				i = e.memoizedState !== null;
				var l = n !== null && n.memoizedState !== null, u = tl, d = nl;
				if (tl = u || i, nl = d || l, gl(t, e), nl = d, tl = u, yl(e), r & 8192) a: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || l || tl || nl || Sl(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							l = n = t;
							try {
								if (o = l.stateNode, i) s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
								else {
									c = l.stateNode;
									var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty("display") ? f.display : null;
									c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
								}
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							l = t;
							try {
								l.stateNode.nodeValue = i ? "" : l.memoizedProps;
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							l = t;
							try {
								var m = l.stateNode;
								i ? $d(m, !0) : $d(l.stateNode, !1);
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, hl(e, n))));
				break;
			case 19:
				gl(t, e), yl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: gl(t, e), yl(e);
		}
	}
	function yl(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Xc(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(a(160));
				switch (n.tag) {
					case 27:
						var i = n.stateNode;
						$c(e, Zc(e), i);
						break;
					case 5:
						var o = n.stateNode;
						n.flags & 32 && (Xt(o, ""), n.flags &= -33), $c(e, Zc(e), o);
						break;
					case 3:
					case 4:
						var s = n.stateNode.containerInfo;
						Qc(e, Zc(e), s);
						break;
					default: throw Error(a(161));
				}
			} catch (t) {
				Z(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function bl(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			bl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function xl(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) sl(e, t.alternate, t), t = t.sibling;
	}
	function Sl(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Uc(4, t, t.return), Sl(t);
					break;
				case 1:
					qc(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && Gc(t, t.return, n), Sl(t);
					break;
				case 27: pf(t.stateNode);
				case 26:
				case 5:
					qc(t, t.return), Sl(t);
					break;
				case 22:
					t.memoizedState === null && Sl(t);
					break;
				case 30:
					Sl(t);
					break;
				default: Sl(t);
			}
			e = e.sibling;
		}
	}
	function Cl(e, t, n) {
		for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Cl(i, a, n), Hc(4, a);
					break;
				case 1:
					if (Cl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) $a(c[i], s);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					n && o & 64 && Wc(a), Kc(a, a.return);
					break;
				case 27: el(a);
				case 26:
				case 5:
					Cl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return);
					break;
				case 12:
					Cl(i, a, n);
					break;
				case 31:
					Cl(i, a, n), n && o & 4 && fl(i, a);
					break;
				case 13:
					Cl(i, a, n), n && o & 4 && pl(i, a);
					break;
				case 22:
					a.memoizedState === null && Cl(i, a, n), Kc(a, a.return);
					break;
				case 30: break;
				default: Cl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function wl(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && fa(n));
	}
	function Tl(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && fa(e));
	}
	function El(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Dl(e, t, n, r), t = t.sibling;
	}
	function Dl(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				El(e, t, n, r), i & 2048 && Hc(9, t);
				break;
			case 1:
				El(e, t, n, r);
				break;
			case 3:
				El(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && fa(e)));
				break;
			case 12:
				if (i & 2048) {
					El(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == "function" && s(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else El(e, t, n, r);
				break;
			case 31:
				El(e, t, n, r);
				break;
			case 13:
				El(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? El(e, t, n, r) : (a._visibility |= 2, Ol(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)) : a._visibility & 2 ? El(e, t, n, r) : kl(e, t), i & 2048 && wl(o, t);
				break;
			case 24:
				El(e, t, n, r), i & 2048 && Tl(t.alternate, t);
				break;
			default: El(e, t, n, r);
		}
	}
	function Ol(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Ol(a, o, s, c, i), Hc(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Ol(a, o, s, c, i)) : u._visibility & 2 ? Ol(a, o, s, c, i) : kl(a, o), i && l & 2048 && wl(o.alternate, o);
					break;
				case 24:
					Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o);
					break;
				default: Ol(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function kl(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					kl(n, r), i & 2048 && wl(r.alternate, r);
					break;
				case 24:
					kl(n, r), i & 2048 && Tl(r.alternate, r);
					break;
				default: kl(n, r);
			}
			t = t.sibling;
		}
	}
	var Al = 8192;
	function jl(e, t, n) {
		if (e.subtreeFlags & Al) for (e = e.child; e !== null;) Ml(e, t, n), e = e.sibling;
	}
	function Ml(e, t, n) {
		switch (e.tag) {
			case 26:
				jl(e, t, n), e.flags & Al && e.memoizedState !== null && Gf(n, _l, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				jl(e, t, n);
				break;
			case 3:
			case 4:
				var r = _l;
				_l = gf(e.stateNode.containerInfo), jl(e, t, n), _l = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Al, Al = 16777216, jl(e, t, n), Al = r) : jl(e, t, n));
				break;
			default: jl(e, t, n);
		}
	}
	function Nl(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Pl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				al = r, Ll(r, e);
			}
			Nl(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Fl(e), e = e.sibling;
	}
	function Fl(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Pl(e), e.flags & 2048 && Uc(9, e, e.return);
				break;
			case 3:
				Pl(e);
				break;
			case 12:
				Pl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Il(e)) : Pl(e);
				break;
			default: Pl(e);
		}
	}
	function Il(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				al = r, Ll(r, e);
			}
			Nl(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Uc(8, t, t.return), Il(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Il(t));
					break;
				default: Il(t);
			}
			e = e.sibling;
		}
	}
	function Ll(e, t) {
		for (; al !== null;) {
			var n = al;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Uc(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: fa(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, al = r;
			else a: for (n = e; al !== null;) {
				r = al;
				var i = r.sibling, a = r.return;
				if (cl(r), r === n) {
					al = null;
					break a;
				}
				if (i !== null) {
					i.return = a, al = i;
					break a;
				}
				al = a;
			}
		}
	}
	var Rl = {
		getCacheForType: function(e) {
			var t = aa(I), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return aa(I).controller.signal;
		}
	}, zl = typeof WeakMap == "function" ? WeakMap : Map, G = 0, K = null, q = null, J = 0, Y = 0, Bl = null, Vl = !1, Hl = !1, Ul = !1, Wl = 0, X = 0, Gl = 0, Kl = 0, ql = 0, Jl = 0, Yl = 0, Xl = null, Zl = null, Ql = !1, $l = 0, eu = 0, tu = Infinity, nu = null, ru = null, iu = 0, au = null, ou = null, su = 0, cu = 0, lu = null, uu = null, du = 0, fu = null;
	function pu() {
		return G & 2 && J !== 0 ? J & -J : O.T === null ? ct() : dd();
	}
	function mu() {
		if (Jl === 0) {
			if (!(J & 536870912) || F) {
				var e = qe;
				qe <<= 1, !(qe & 3932160) && (qe = 262144), Jl = e;
			} else Jl = 536870912;
		}
		return e = oo.current, e !== null && (e.flags |= 32), Jl;
	}
	function hu(e, t, n) {
		(e === K && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) && (Su(e, 0), yu(e, J, Jl, !1)), tt(e, n), G & 2 && e === K || (e === K && (!(G & 2) && (Kl |= n), X === 4 && yu(e, J, Jl, !1)), rd(e));
	}
	function gu(e, t, n) {
		if (G & 6) throw Error(a(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || Ze(e, t), i = r ? Au(e, t) : Ou(e, t, !0), o = r;
		do {
			if (i === 0) {
				Hl && !r && yu(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !vu(n)) i = Ou(e, t, !1), o = !1;
			else {
				if (i === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							i = Xl;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (Su(c, s).flags |= 256), s = Ou(c, s, !1), s !== 2) {
								if (Ul && !l) {
									c.errorRecoveryDisabledLanes |= o, Kl |= o, i = 4;
									break a;
								}
								o = Zl, Zl = i, o !== null && (Zl === null ? Zl = o : Zl.push.apply(Zl, o));
							}
							i = s;
						}
						if (o = !1, i !== 2) continue;
					}
				}
				if (i === 1) {
					Su(e, 0), yu(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = i, o) {
						case 0:
						case 1: throw Error(a(345));
						case 4: if ((t & 4194048) !== t) break;
						case 6:
							yu(r, t, Jl, !Vl);
							break a;
						case 2:
							Zl = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(a(329));
					}
					if ((t & 62914560) === t && (i = $l + 300 - Ae(), 10 < i)) {
						if (yu(r, t, Jl, !Vl), Xe(r, 0, !0) !== 0) break a;
						su = t, r.timeoutHandle = Kd(_u.bind(null, r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, o, "Throttled", -0, 0), i);
						break a;
					}
					_u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, o, null, -0, 0);
				}
				break;
			}
		} while (1);
		rd(e);
	}
	function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: an
			}, Ml(t, a, d);
			var m = (a & 62914560) === a ? $l - Ae() : (a & 4194048) === a ? eu - Ae() : 0;
			if (m = qf(d, m), m !== null) {
				su = a, e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), yu(e, a, o, !l);
				return;
			}
		}
		Lu(e, t, a, n, r, i, o, s, c);
	}
	function vu(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Dr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function yu(e, t, n, r) {
		t &= ~ql, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - He(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && rt(e, n, t);
	}
	function bu() {
		return G & 6 ? !0 : (id(0, !1), !1);
	}
	function xu() {
		if (q !== null) {
			if (Y === 0) var e = q.return;
			else e = q, Zi = Xi = null, Ao(e), Fa = null, Ia = 0, e = q;
			for (; e !== null;) Vc(e.alternate, e), e = e.return;
			q = null;
		}
	}
	function Su(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, qd(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), su = 0, xu(), K = e, q = n = hi(e.current, null), J = t, Y = 0, Bl = null, Vl = !1, Hl = Ze(e, t), Ul = !1, Yl = Jl = ql = Kl = Gl = X = 0, Zl = Xl = null, Ql = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - He(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return Wl = t, ai(), n;
	}
	function Cu(e, t) {
		R = null, O.H = zs, t === Ta || t === Da ? (t = Na(), Y = 3) : t === Ea ? (t = Na(), Y = 4) : Y = t === rc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Bl = t, q === null && (X = 1, Zs(e, Ci(t, e.current)));
	}
	function wu() {
		var e = oo.current;
		return e === null ? !0 : (J & 4194048) === J ? so === null : (J & 62914560) === J || J & 536870912 ? e === so : !1;
	}
	function Tu() {
		var e = O.H;
		return O.H = zs, e === null ? zs : e;
	}
	function Eu() {
		var e = O.A;
		return O.A = Rl, e;
	}
	function Du() {
		X = 4, Vl || (J & 4194048) !== J && oo.current !== null || (Hl = !0), !(Gl & 134217727) && !(Kl & 134217727) || K === null || yu(K, J, Jl, !1);
	}
	function Ou(e, t, n) {
		var r = G;
		G |= 2;
		var i = Tu(), a = Eu();
		(K !== e || J !== t) && (nu = null, Su(e, t)), t = !1;
		var o = X;
		a: do
			try {
				if (Y !== 0 && q !== null) {
					var s = q, c = Bl;
					switch (Y) {
						case 8:
							xu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							oo.current === null && (t = !0);
							var l = Y;
							if (Y = 0, Bl = null, Pu(e, s, c, l), n && Hl) {
								o = 0;
								break a;
							}
							break;
						default: l = Y, Y = 0, Bl = null, Pu(e, s, c, l);
					}
				}
				ku(), o = X;
				break;
			} catch (t) {
				Cu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, Zi = Xi = null, G = r, O.H = i, O.A = a, q === null && (K = null, J = 0, ai()), o;
	}
	function ku() {
		for (; q !== null;) Mu(q);
	}
	function Au(e, t) {
		var n = G;
		G |= 2;
		var r = Tu(), i = Eu();
		K !== e || J !== t ? (nu = null, tu = Ae() + 500, Su(e, t)) : Hl = Ze(e, t);
		a: do
			try {
				if (Y !== 0 && q !== null) {
					t = q;
					var o = Bl;
					b: switch (Y) {
						case 1:
							Y = 0, Bl = null, Pu(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (ka(o)) {
								Y = 0, Bl = null, Nu(t);
								break;
							}
							t = function() {
								Y !== 2 && Y !== 9 || K !== e || (Y = 7), rd(e);
							}, o.then(t, t);
							break a;
						case 3:
							Y = 7;
							break a;
						case 4:
							Y = 5;
							break a;
						case 7:
							ka(o) ? (Y = 0, Bl = null, Nu(t)) : (Y = 0, Bl = null, Pu(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (q.tag) {
								case 26: s = q.memoizedState;
								case 5:
								case 27:
									var c = q;
									if (s ? Wf(s) : c.stateNode.complete) {
										Y = 0, Bl = null;
										var l = c.sibling;
										if (l !== null) q = l;
										else {
											var u = c.return;
											u === null ? q = null : (q = u, Fu(u));
										}
										break b;
									}
							}
							Y = 0, Bl = null, Pu(e, t, o, 5);
							break;
						case 6:
							Y = 0, Bl = null, Pu(e, t, o, 6);
							break;
						case 8:
							xu(), X = 6;
							break a;
						default: throw Error(a(462));
					}
				}
				ju();
				break;
			} catch (t) {
				Cu(e, t);
			}
		while (1);
		return Zi = Xi = null, O.H = r, O.A = i, G = n, q === null ? (K = null, J = 0, ai(), X) : 0;
	}
	function ju() {
		for (; q !== null && !Oe();) Mu(q);
	}
	function Mu(e) {
		var t = Nc(e.alternate, e, Wl);
		e.memoizedProps = e.pendingProps, t === null ? Fu(e) : q = t;
	}
	function Nu(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = _c(n, t, t.pendingProps, t.type, void 0, J);
				break;
			case 11:
				t = _c(n, t, t.pendingProps, t.type.render, t.ref, J);
				break;
			case 5: Ao(t);
			default: Vc(n, t), t = q = gi(t, Wl), t = Nc(n, t, Wl);
		}
		e.memoizedProps = e.pendingProps, t === null ? Fu(e) : q = t;
	}
	function Pu(e, t, n, r) {
		Zi = Xi = null, Ao(t), Fa = null, Ia = 0;
		var i = t.return;
		try {
			if (nc(e, i, t, n, J)) {
				X = 1, Zs(e, Ci(n, e.current)), q = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw q = i, t;
			X = 1, Zs(e, Ci(n, e.current)), q = null;
			return;
		}
		t.flags & 32768 ? (F || r === 1 ? e = !0 : Hl || J & 536870912 ? e = !1 : (Vl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = oo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Iu(t, e)) : Fu(t);
	}
	function Fu(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Iu(t, Vl);
				return;
			}
			e = t.return;
			var n = zc(t.alternate, t, Wl);
			if (n !== null) {
				q = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				q = t;
				return;
			}
			q = t = e;
		} while (t !== null);
		X === 0 && (X = 5);
	}
	function Iu(e, t) {
		do {
			var n = Bc(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, q = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				q = e;
				return;
			}
			q = e = n;
		} while (e !== null);
		X = 6, q = null;
	}
	function Lu(e, t, n, r, i, o, s, c, l) {
		e.cancelPendingCommit = null;
		do
			Hu();
		while (iu !== 0);
		if (G & 6) throw Error(a(327));
		if (t !== null) {
			if (t === e.current) throw Error(a(177));
			if (o = t.lanes | t.childLanes, o |= ii, nt(e, n, o, s, c, l), e === K && (q = K = null, J = 0), ou = t, au = e, su = n, cu = o, lu = i, uu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Xu(Pe, function() {
				return Uu(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
				r = O.T, O.T = null, i = k.p, k.p = 2, s = G, G |= 4;
				try {
					ol(e, t, n);
				} finally {
					G = s, k.p = i, O.T = r;
				}
			}
			iu = 1, Ru(), zu(), Bu();
		}
	}
	function Ru() {
		if (iu === 1) {
			iu = 0;
			var e = au, t = ou, n = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || n) {
				n = O.T, O.T = null;
				var r = k.p;
				k.p = 2;
				var i = G;
				G |= 4;
				try {
					vl(t, e);
					var a = zd, o = Mr(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && jr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Nr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Ar(s, h), v = Ar(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					sp = !!Rd, zd = Rd = null;
				} finally {
					G = i, k.p = r, O.T = n;
				}
			}
			e.current = t, iu = 2;
		}
	}
	function zu() {
		if (iu === 2) {
			iu = 0;
			var e = au, t = ou, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = O.T, O.T = null;
				var r = k.p;
				k.p = 2;
				var i = G;
				G |= 4;
				try {
					sl(e, t.alternate, t);
				} finally {
					G = i, k.p = r, O.T = n;
				}
			}
			iu = 3;
		}
	}
	function Bu() {
		if (iu === 4 || iu === 3) {
			iu = 0, ke();
			var e = au, t = ou, n = su, r = uu;
			t.subtreeFlags & 10256 || t.flags & 10256 ? iu = 5 : (iu = 0, ou = au = null, Vu(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (ru = null), st(n), t = t.stateNode, Be && typeof Be.onCommitFiberRoot == "function") try {
				Be.onCommitFiberRoot(ze, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = O.T, i = k.p, k.p = 2, O.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					O.T = t, k.p = i;
				}
			}
			su & 3 && Hu(), rd(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === fu ? du++ : (du = 0, fu = e) : du = 0, id(0, !1);
		}
	}
	function Vu(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, fa(t)));
	}
	function Hu() {
		return Ru(), zu(), Bu(), Uu();
	}
	function Uu() {
		if (iu !== 5) return !1;
		var e = au, t = cu;
		cu = 0;
		var n = st(su), r = O.T, i = k.p;
		try {
			k.p = 32 > n ? 32 : n, O.T = null, n = lu, lu = null;
			var o = au, s = su;
			if (iu = 0, ou = au = null, su = 0, G & 6) throw Error(a(331));
			var c = G;
			if (G |= 4, Fl(o.current), Dl(o, o.current, s, n), G = c, id(0, !1), Be && typeof Be.onPostCommitFiberRoot == "function") try {
				Be.onPostCommitFiberRoot(ze, o);
			} catch {}
			return !0;
		} finally {
			k.p = i, O.T = r, Vu(e, t);
		}
	}
	function Wu(e, t, n) {
		t = Ci(n, t), t = $s(e.stateNode, t, 2), e = qa(e, t, 2), e !== null && (tt(e, 2), rd(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) Wu(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Wu(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ru === null || !ru.has(r))) {
					e = Ci(n, e), n = ec(2), r = qa(t, n, 2), r !== null && (tc(n, r, t, e), tt(r, 2), rd(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function Gu(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new zl();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (Ul = !0, i.add(n), e = Ku.bind(null, e, t, n), t.then(e, e));
	}
	function Ku(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, K === e && (J & n) === n && (X === 4 || X === 3 && (J & 62914560) === J && 300 > Ae() - $l ? !(G & 2) && Su(e, 0) : ql |= n, Yl === J && (Yl = 0)), rd(e);
	}
	function qu(e, t) {
		t === 0 && (t = $e()), e = ci(e, t), e !== null && (tt(e, t), rd(e));
	}
	function Ju(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), qu(e, n);
	}
	function Yu(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, i = e.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(a(314));
		}
		r !== null && r.delete(t), qu(e, n);
	}
	function Xu(e, t) {
		return Ee(e, t);
	}
	var Zu = null, Qu = null, $u = !1, ed = !1, td = !1, nd = 0;
	function rd(e) {
		e !== Qu && e.next === null && (Qu === null ? Zu = Qu = e : Qu = Qu.next = e), ed = !0, $u || ($u = !0, ud());
	}
	function id(e, t) {
		if (!td && ed) {
			td = !0;
			do
				for (var n = !1, r = Zu; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - He(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, ld(r, a));
						} else a = J, a = Xe(r, r === K ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || Ze(r, a) || (n = !0, ld(r, a));
					}
					r = r.next;
				}
			while (n);
			td = !1;
		}
	}
	function ad() {
		od();
	}
	function od() {
		ed = $u = !1;
		var e = 0;
		nd !== 0 && Gd() && (e = nd);
		for (var t = Ae(), n = null, r = Zu; r !== null;) {
			var i = r.next, a = sd(r, t);
			a === 0 ? (r.next = null, n === null ? Zu = i : n.next = i, i === null && (Qu = n)) : (n = r, (e !== 0 || a & 3) && (ed = !0)), r = i;
		}
		iu !== 0 && iu !== 5 || id(e, !1), nd !== 0 && (nd = 0);
	}
	function sd(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - He(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Qe(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = K, n = J, n = Xe(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && De(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || Ze(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && De(r), st(n)) {
				case 2:
				case 8:
					n = Ne;
					break;
				case 32:
					n = Pe;
					break;
				case 268435456:
					n = Ie;
					break;
				default: n = Pe;
			}
			return r = cd.bind(null, e), n = Ee(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && De(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function cd(e, t) {
		if (iu !== 0 && iu !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (Hu() && e.callbackNode !== n) return null;
		var r = J;
		return r = Xe(e, e === K ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (gu(e, r, t), sd(e, Ae()), e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null);
	}
	function ld(e, t) {
		if (Hu()) return null;
		gu(e, t, !0);
	}
	function ud() {
		Yd(function() {
			G & 6 ? Ee(Me, ad) : od();
		});
	}
	function dd() {
		if (nd === 0) {
			var e = ha;
			e === 0 && (e = Ke, Ke <<= 1, !(Ke & 261888) && (Ke = 256)), nd = e;
		}
		return nd;
	}
	function fd(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : rn("" + e);
	}
	function pd(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function md(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = fd((i[dt] || null).action), o = r.submitter;
			o && (t = (t = o[dt] || null) ? fd(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new En("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (nd !== 0) {
								var e = o ? pd(i, o) : new FormData(i);
								Ts(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = o ? pd(i, o) : new FormData(i), Ts(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var hd = 0; hd < $r.length; hd++) {
		var gd = $r[hd];
		ei(gd.toLowerCase(), "on" + (gd[0].toUpperCase() + gd.slice(1)));
	}
	ei(Gr, "onAnimationEnd"), ei(Kr, "onAnimationIteration"), ei(qr, "onAnimationStart"), ei("dblclick", "onDoubleClick"), ei("focusin", "onFocus"), ei("focusout", "onBlur"), ei(Jr, "onTransitionRun"), ei(Yr, "onTransitionStart"), ei(Xr, "onTransitionCancel"), ei(Zr, "onTransitionEnd"), kt("onMouseEnter", ["mouseout", "mouseover"]), kt("onMouseLeave", ["mouseout", "mouseover"]), kt("onPointerEnter", ["pointerout", "pointerover"]), kt("onPointerLeave", ["pointerout", "pointerover"]), Ot("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ot("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ot("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Ot("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ot("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ot("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var _d = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_d));
	function yd(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						ti(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						ti(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[pt];
		n === void 0 && (n = t[pt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Cd(t, e, 2, !1), n.add(r));
	}
	function bd(e, t, n) {
		var r = 0;
		t && (r |= 4), Cd(n, e, r, t);
	}
	var xd = "_reactListening" + Math.random().toString(36).slice(2);
	function Sd(e) {
		if (!e[xd]) {
			e[xd] = !0, Et.forEach(function(t) {
				t !== "selectionchange" && (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[xd] || (t[xd] = !0, bd("selectionchange", !1, t));
		}
	}
	function Cd(e, t, n, r) {
		switch (mp(t)) {
			case 2:
				var i = cp;
				break;
			case 8:
				i = lp;
				break;
			default: i = up;
		}
		n = i.bind(null, t, n, e), i = void 0, !hn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function wd(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var l = o.tag;
					if ((l === 3 || l === 4) && o.stateNode.containerInfo === i) return;
					o = o.return;
				}
				for (; c !== null;) {
					if (o = yt(c), o === null) return;
					if (l = o.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = o;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		fn(function() {
			var r = a, i = sn(n), o = [];
			a: {
				var c = Qr.get(e);
				if (c !== void 0) {
					var l = En, u = e;
					switch (e) {
						case "keypress": if (xn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = Wn;
							break;
						case "focusin":
							u = "focus", l = Fn;
							break;
						case "focusout":
							u = "blur", l = Fn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Fn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Nn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Pn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = Kn;
							break;
						case Gr:
						case Kr:
						case qr:
							l = In;
							break;
						case Zr:
							l = qn;
							break;
						case "scroll":
						case "scrollend":
							l = On;
							break;
						case "wheel":
							l = Jn;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Ln;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = Gn;
							break;
						case "toggle":
						case "beforetoggle": l = Yn;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = pn(m, p), g != null && d.push(Td(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), o.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (c = e === "mouseover" || e === "pointerover", l = e === "mouseout" || e === "pointerout", c && n !== on && (u = n.relatedTarget || n.fromElement) && (yt(u) || u[ft])) break a;
					if ((l || c) && (c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, l ? (u = n.relatedTarget || n.toElement, l = r, u = u ? yt(u) : null, u !== null && (f = s(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null, u = r), l !== u)) {
						if (d = Nn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = Gn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = l == null ? c : xt(l), h = u == null ? c : xt(u), c = new d(g, m + "leave", l, n, i), c.target = f, c.relatedTarget = h, g = null, yt(i) === r && (d = new d(p, m + "enter", u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, l && u) b: {
							for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
							g = 0;
							for (var _ = m; _; _ = d(_)) g++;
							for (; 0 < h - g;) p = d(p), h--;
							for (; 0 < g - h;) m = d(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									d = p;
									break b;
								}
								p = d(p), m = d(m);
							}
							d = null;
						}
						else d = null;
						l !== null && Od(o, c, l, d, !1), u !== null && f !== null && Od(o, f, u, d, !0);
					}
				}
				a: {
					if (c = r ? xt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var v = hr;
					else if (lr(c)) {
						if (gr) v = Tr;
						else {
							v = Cr;
							var y = Sr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && en(r.elementType) && (v = hr) : v = wr;
					if (v &&= v(e, r)) {
						ur(o, v, n, i);
						break a;
					}
					y && y(e, c, r), e === "focusout" && r && c.type === "number" && r.memoizedProps.value != null && Kt(c, "number", c.value);
				}
				switch (y = r ? xt(r) : window, e) {
					case "focusin":
						(lr(y) || y.contentEditable === "true") && (Fr = y, Ir = r, Lr = null);
						break;
					case "focusout":
						Lr = Ir = Fr = null;
						break;
					case "mousedown":
						Rr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Rr = !1, zr(o, n, i);
						break;
					case "selectionchange": if (Pr) break;
					case "keydown":
					case "keyup": zr(o, n, i);
				}
				var b;
				if (Zn) b: {
					switch (e) {
						case "compositionstart":
							var x = "onCompositionStart";
							break b;
						case "compositionend":
							x = "onCompositionEnd";
							break b;
						case "compositionupdate":
							x = "onCompositionUpdate";
							break b;
					}
					x = void 0;
				}
				else ar ? rr(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
				x && (er && n.locale !== "ko" && (ar || x !== "onCompositionStart" ? x === "onCompositionEnd" && ar && (b = bn()) : (_n = i, vn = "value" in _n ? _n.value : _n.textContent, ar = !0)), y = Ed(r, x), 0 < y.length && (x = new Rn(x, e, null, n, i), o.push({
					event: x,
					listeners: y
				}), b ? x.data = b : (b = ir(n), b !== null && (x.data = b)))), (b = $n ? or(e, n) : sr(e, n)) && (x = Ed(r, "onBeforeInput"), 0 < x.length && (y = new Rn("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: y,
					listeners: x
				}), y.data = b)), md(o, e, r, n, i);
			}
			yd(o, t);
		});
	}
	function Td(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Ed(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = pn(e, n), i != null && r.unshift(Td(e, i, a)), i = pn(e, t), i != null && r.push(Td(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Dd(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Od(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = pn(n, a), l != null && o.unshift(Td(n, l, c))) : i || (l = pn(n, a), l != null && o.push(Td(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var kd = /\r\n?/g, Ad = /\u0000|\uFFFD/g;
	function jd(e) {
		return (typeof e == "string" ? e : "" + e).replace(kd, "\n").replace(Ad, "");
	}
	function Md(e, t) {
		return t = jd(t), jd(e) === t;
	}
	function $(e, t, n, r, i, o) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Xt(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Xt(e, "" + r);
				break;
			case "className":
				Ft(e, "class", r);
				break;
			case "tabIndex":
				Ft(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Ft(e, n, r);
				break;
			case "style":
				$t(e, r, o);
				break;
			case "data": if (t !== "object") {
				Ft(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href") || r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = rn("" + r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && $(e, t, "name", i.name, i, null), $(e, t, "formEncType", i.formEncType, i, null), $(e, t, "formMethod", i.formMethod, i, null), $(e, t, "formTarget", i.formTarget, i, null)) : ($(e, t, "encType", i.encType, i, null), $(e, t, "method", i.method, i, null), $(e, t, "target", i.target, i, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = rn("" + r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = an);
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				break;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(a(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(a(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = rn("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Q("beforetoggle", e), Q("toggle", e), Pt(e, "popover", r);
				break;
			case "xlinkActuate":
				It(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				It(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				It(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				It(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				It(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				It(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				It(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				It(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				It(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Pt(e, "is", r);
				break;
			case "innerText":
			case "textContent": break;
			default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = tn.get(n) || n, Pt(e, n, r));
		}
	}
	function Nd(e, t, n, r, i, o) {
		switch (n) {
			case "style":
				$t(e, r, o);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(a(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(a(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof r == "string" ? Xt(e, r) : (typeof r == "number" || typeof r == "bigint") && Xt(e, "" + r);
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				break;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = an);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!Dt.hasOwnProperty(n)) a: {
				if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), o = e[dt] || null, o = o == null ? null : o[n], typeof o == "function" && e.removeEventListener(t, o, i), typeof r == "function")) {
					typeof o != "function" && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, i);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Pt(e, n, r);
			}
		}
	}
	function Pd(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Q("error", e), Q("load", e);
				var r = !1, i = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							i = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(a(137, t));
						default: $(e, t, o, s, n, null);
					}
				}
				i && $(e, t, "srcSet", n.srcSet, n, null), r && $(e, t, "src", n.src, n, null);
				return;
			case "input":
				Q("invalid", e);
				var c = o = s = i = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							i = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(a(137, t));
							break;
						default: $(e, t, r, d, n, null);
					}
				}
				Gt(e, o, c, l, u, s, i, !1);
				return;
			case "select":
				for (i in Q("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(i) && (c = n[i], c != null)) switch (i) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: $(e, t, i, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && qt(e, !!r, n, !0) : qt(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Q("invalid", e), o = i = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						i = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(a(91));
						break;
					default: $(e, t, s, c, n, null);
				}
				Yt(e, r, i, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: $(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e);
				break;
			case "iframe":
			case "object":
				Q("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < _d.length; r++) Q(_d[r], e);
				break;
			case "image":
				Q("error", e), Q("load", e);
				break;
			case "details":
				Q("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Q("error", e), Q("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(a(137, t));
					default: $(e, t, u, r, n, null);
				}
				return;
			default: if (en(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Nd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
	}
	function Fd(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var i = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || $(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							o = m;
							break;
						case "name":
							i = m;
							break;
						case "checked":
							u = m;
							break;
						case "defaultChecked":
							d = m;
							break;
						case "value":
							s = m;
							break;
						case "defaultValue":
							c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(a(137, t));
							break;
						default: m !== f && $(e, t, p, m, r, f);
					}
				}
				Wt(e, s, c, l, u, d, o, i);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || $(e, t, o, null, r, l);
				}
				for (i in r) if (o = r[i], l = n[i], r.hasOwnProperty(i) && (o != null || l != null)) switch (i) {
					case "value":
						p = o;
						break;
					case "defaultValue":
						c = o;
						break;
					case "multiple": s = o;
					default: o !== l && $(e, t, i, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? qt(e, !!n, n ? [] : "", !1) : qt(e, !!n, t, !0)) : qt(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (i = n[c], n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: $(e, t, c, null, r, i);
				}
				for (s in r) if (i = r[s], o = n[s], r.hasOwnProperty(s) && (i != null || o != null)) switch (s) {
					case "value":
						p = i;
						break;
					case "defaultValue":
						m = i;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (i != null) throw Error(a(91));
						break;
					default: i !== o && $(e, t, s, i, r, o);
				}
				Jt(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: $(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: $(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(a(137, t));
						break;
					default: $(e, t, u, p, r, m);
				}
				return;
			default: if (en(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Nd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Nd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
	}
	function Id(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function Ld() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Id(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Id(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var Rd = null, zd = null;
	function Bd(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Vd(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function Hd(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function Ud(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Wd = null;
	function Gd() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== Wd && (Wd = e, !0) : (Wd = null, !1);
	}
	var Kd = typeof setTimeout == "function" ? setTimeout : void 0, qd = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, Yd = typeof queueMicrotask == "function" ? queueMicrotask : Jd === void 0 ? Kd : function(e) {
		return Jd.resolve(null).then(e).catch(Xd);
	};
	function Xd(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Zd(e) {
		return e === "head";
	}
	function Qd(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Np(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") pf(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, pf(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[_t] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && pf(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Np(t);
	}
	function $d(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function ef(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					ef(n), vt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function tf(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[_t]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = cf(e.nextSibling), e === null) break;
		}
		return null;
	}
	function nf(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function rf(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function af(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function of(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function sf(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function cf(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var lf = null;
	function uf(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return cf(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function df(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function ff(e, t, n) {
		switch (t = Bd(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(a(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(a(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(a(454));
				return e;
			default: throw Error(a(451));
		}
	}
	function pf(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		vt(e);
	}
	var mf = /* @__PURE__ */ new Map(), hf = /* @__PURE__ */ new Set();
	function gf(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var _f = k.d;
	k.d = {
		f: vf,
		r: yf,
		D: Sf,
		C: Cf,
		L: wf,
		m: Tf,
		X: Df,
		S: Ef,
		M: Of
	};
	function vf() {
		var e = _f.f(), t = bu();
		return e || t;
	}
	function yf(e) {
		var t = bt(e);
		t !== null && t.tag === 5 && t.type === "form" ? Ds(t) : _f.r(e);
	}
	var bf = typeof document > "u" ? null : document;
	function xf(e, t, n) {
		var r = bf;
		if (r && typeof t == "string" && t) {
			var i = N(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), hf.has(i) || (hf.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), Pd(t, "link", e), Tt(t), r.head.appendChild(t)));
		}
	}
	function Sf(e) {
		_f.D(e), xf("dns-prefetch", e, null);
	}
	function Cf(e, t) {
		_f.C(e, t), xf("preconnect", e, t);
	}
	function wf(e, t, n) {
		_f.L(e, t, n);
		var r = bf;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + N(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + N(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + N(n.imageSizes) + "\"]")) : i += "[href=\"" + N(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Af(e);
					break;
				case "script": a = Pf(e);
			}
			mf.has(a) || (e = p({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), mf.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(jf(a)) || t === "script" && r.querySelector(Ff(a)) || (t = r.createElement("link"), Pd(t, "link", e), Tt(t), r.head.appendChild(t)));
		}
	}
	function Tf(e, t) {
		_f.m(e, t);
		var n = bf;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + N(r) + "\"][href=\"" + N(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Pf(e);
			}
			if (!mf.has(a) && (e = p({
				rel: "modulepreload",
				href: e
			}, t), mf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(Ff(a))) return;
				}
				r = n.createElement("link"), Pd(r, "link", e), Tt(r), n.head.appendChild(r);
			}
		}
	}
	function Ef(e, t, n) {
		_f.S(e, t, n);
		var r = bf;
		if (r && e) {
			var i = Ct(r).hoistableStyles, a = Af(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(jf(a))) s.loading = 5;
				else {
					e = p({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = mf.get(a)) && Rf(e, n);
					var c = o = r.createElement("link");
					Tt(c), Pd(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Lf(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Df(e, t) {
		_f.X(e, t);
		var n = bf;
		if (n && e) {
			var r = Ct(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = p({
				src: e,
				async: !0
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement("script"), Tt(a), Pd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Of(e, t) {
		_f.M(e, t);
		var n = bf;
		if (n && e) {
			var r = Ct(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = p({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement("script"), Tt(a), Pd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function kf(e, t, n, r) {
		var i = (i = fe.current) ? gf(i) : null;
		if (!i) throw Error(a(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Af(n.href), n = Ct(i).hoistableStyles, r = n.get(t), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Af(n.href);
					var o = Ct(i).hoistableStyles, s = o.get(e);
					if (s || (i = i.ownerDocument || i, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = i.querySelector(jf(e))) && !o._p && (s.instance = o, s.state.loading = 5), mf.has(e) || (n = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, mf.set(e, n), o || Nf(i, e, n, s.state))), t && r === null) throw Error(a(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(a(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Pf(n), n = Ct(i).hoistableScripts, r = n.get(t), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(a(444, e));
		}
	}
	function Af(e) {
		return "href=\"" + N(e) + "\"";
	}
	function jf(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Mf(e) {
		return p({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Nf(e, t, n, r) {
		e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		}), Pd(t, "link", n), Tt(t), e.head.appendChild(t));
	}
	function Pf(e) {
		return "[src=\"" + N(e) + "\"]";
	}
	function Ff(e) {
		return "script[async]" + e;
	}
	function If(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + N(n.href) + "\"]");
				if (r) return t.instance = r, Tt(r), r;
				var i = p({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Tt(r), Pd(r, "style", i), Lf(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				i = Af(n.href);
				var o = e.querySelector(jf(i));
				if (o) return t.state.loading |= 4, t.instance = o, Tt(o), o;
				r = Mf(n), (i = mf.get(i)) && Rf(r, i), o = (e.ownerDocument || e).createElement("link"), Tt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), Pd(o, "link", r), t.state.loading |= 4, Lf(o, n.precedence, e), t.instance = o;
			case "script": return o = Pf(n.src), (i = e.querySelector(Ff(o))) ? (t.instance = i, Tt(i), i) : (r = n, (i = mf.get(o)) && (r = p({}, n), zf(r, i)), e = e.ownerDocument || e, i = e.createElement("script"), Tt(i), Pd(i, "link", r), e.head.appendChild(i), t.instance = i);
			case "void": return null;
			default: throw Error(a(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Lf(r, n.precedence, e));
		return t.instance;
	}
	function Lf(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Rf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function zf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Bf = null;
	function Vf(e, t, n) {
		if (Bf === null) {
			var r = /* @__PURE__ */ new Map(), i = Bf = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Bf, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[_t] || a[M] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Hf(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function Uf(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Wf(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Gf(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Af(r.href), a = t.querySelector(jf(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Jf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Tt(a);
					return;
				}
				a = t.ownerDocument || t, r = Mf(r), (i = mf.get(i)) && Rf(r, i), a = a.createElement("link"), Tt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Pd(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Jf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var Kf = 0;
	function qf(e, t) {
		return e.stylesheets && e.count === 0 && Xf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > Kf ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function Jf() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) Xf(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var Yf = null;
	function Xf(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Yf = /* @__PURE__ */ new Map(), t.forEach(Zf, e), Yf = null, Jf.call(e));
	}
	function Zf(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Yf.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), Yf.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = Jf.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var Qf = {
		$$typeof: x,
		Provider: null,
		Consumer: null,
		_currentValue: oe,
		_currentValue2: oe,
		_threadCount: 0
	};
	function $f(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = et(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = et(0), this.hiddenUpdates = et(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new $f(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = pi(3, null, null, t), e.current = a, a.stateNode = e, t = da(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, Wa(a), e;
	}
	function tp(e) {
		return e ? (e = di, e) : di;
	}
	function np(e, t, n, r, i, a) {
		i = tp(i), r.context === null ? r.context = i : r.pendingContext = i, r = Ka(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = qa(e, r, t), n !== null && (hu(n, e, t), Ja(n, e, t));
	}
	function rp(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ip(e, t) {
		rp(e, t), (e = e.alternate) && rp(e, t);
	}
	function ap(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = ci(e, 67108864);
			t !== null && hu(t, e, 67108864), ip(e, 67108864);
		}
	}
	function op(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = pu();
			t = ot(t);
			var n = ci(e, t);
			n !== null && hu(n, e, t), ip(e, t);
		}
	}
	var sp = !0;
	function cp(e, t, n, r) {
		var i = O.T;
		O.T = null;
		var a = k.p;
		try {
			k.p = 2, up(e, t, n, r);
		} finally {
			k.p = a, O.T = i;
		}
	}
	function lp(e, t, n, r) {
		var i = O.T;
		O.T = null;
		var a = k.p;
		try {
			k.p = 8, up(e, t, n, r);
		} finally {
			k.p = a, O.T = i;
		}
	}
	function up(e, t, n, r) {
		if (sp) {
			var i = dp(r);
			if (i === null) wd(e, t, r, fp, n), Cp(e, r);
			else if (Tp(i, e, t, n, r)) r.stopPropagation();
			else if (Cp(e, r), t & 4 && -1 < Sp.indexOf(e)) {
				for (; i !== null;) {
					var a = bt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = Ye(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - He(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									rd(a), !(G & 6) && (tu = Ae() + 500, id(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = ci(a, 2), s !== null && hu(s, a, 2), bu(), ip(a, 2);
					}
					if (a = dp(r), a === null && wd(e, t, r, fp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else wd(e, t, r, null, n);
		}
	}
	function dp(e) {
		return e = sn(e), pp(e);
	}
	var fp = null;
	function pp(e) {
		if (fp = null, e = yt(e), e !== null) {
			var t = s(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = l(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return fp = e, null;
	}
	function mp(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (je()) {
				case Me: return 2;
				case Ne: return 8;
				case Pe:
				case Fe: return 32;
				case Ie: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var hp = !1, gp = null, _p = null, vp = null, yp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), xp = [], Sp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Cp(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				gp = null;
				break;
			case "dragenter":
			case "dragleave":
				_p = null;
				break;
			case "mouseover":
			case "mouseout":
				vp = null;
				break;
			case "pointerover":
			case "pointerout":
				yp.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": bp.delete(t.pointerId);
		}
	}
	function wp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = bt(t), t !== null && ap(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Tp(e, t, n, r, i) {
		switch (t) {
			case "focusin": return gp = wp(gp, e, t, n, r, i), !0;
			case "dragenter": return _p = wp(_p, e, t, n, r, i), !0;
			case "mouseover": return vp = wp(vp, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Ep(e) {
		var t = yt(e.target);
		if (t !== null) {
			var n = s(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, lt(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = l(n), t !== null) {
						e.blockedOn = t, lt(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Dp(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = dp(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				on = r, n.target.dispatchEvent(r), on = null;
			} else return t = bt(n), t !== null && ap(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Op(e, t, n) {
		Dp(e) && n.delete(t);
	}
	function kp() {
		hp = !1, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op);
	}
	function Ap(e, n) {
		e.blockedOn === n && (e.blockedOn = null, hp || (hp = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
	}
	var jp = null;
	function Mp(e) {
		jp !== e && (jp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			jp === e && (jp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (pp(r || n) === null) continue;
					break;
				}
				var a = bt(n);
				a !== null && (e.splice(t, 3), t -= 3, Ts(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Np(e) {
		function t(t) {
			return Ap(t, e);
		}
		gp !== null && Ap(gp, e), _p !== null && Ap(_p, e), vp !== null && Ap(vp, e), yp.forEach(t), bp.forEach(t);
		for (var n = 0; n < xp.length; n++) {
			var r = xp[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < xp.length && (n = xp[0], n.blockedOn === null);) Ep(n), n.blockedOn === null && xp.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[dt] || null;
			if (typeof a == "function") o || Mp(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[dt] || null) s = o.formAction;
					else if (pp(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Mp(n);
			}
		}
	}
	function Pp() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Fp(e) {
		this._internalRoot = e;
	}
	Ip.prototype.render = Fp.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(a(409));
		var n = t.current;
		np(n, pu(), e, t, null, null);
	}, Ip.prototype.unmount = Fp.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			np(e.current, 2, null, e, null, null), bu(), t[ft] = null;
		}
	};
	function Ip(e) {
		this._internalRoot = e;
	}
	Ip.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = ct();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
			xp.splice(n, 0, e), n === 0 && Ep(e);
		}
	};
	var Lp = r.version;
	if (Lp !== "19.2.0") throw Error(a(527, Lp, "19.2.0"));
	k.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
		return e = d(t), e = e === null ? null : f(e), e = e === null ? null : e.stateNode, e;
	};
	var Rp = {
		bundleType: 0,
		version: "19.2.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: O,
		reconcilerVersion: "19.2.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!zp.isDisabled && zp.supportsFiber) try {
			ze = zp.inject(Rp), Be = zp;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!o(e)) throw Error(a(299));
		var n = !1, r = "", i = Js, s = Ys, c = Xs;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ep(e, 1, !1, null, null, n, r, null, i, s, c, Pp), e[ft] = t.current, Sd(e), new Fp(t);
	};
})), Et = (/* @__PURE__ */ e(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = Tt();
})))(), Dt = ":host{display:block}ha-card{color:var(--primary-text-color,#171a24);background:var(--ha-card-background,var(--card-background-color,#fff));padding:1rem;display:block}.details{overflow-wrap:anywhere;flex:1;min-width:0}.name{font-weight:600}.status{color:var(--secondary-text-color,#475569);font-size:.875rem}.control{place-items:center;min-height:44px;display:grid}button.lg-switch{--lg-on:var(--primary-color,#2563eb);--lg-track:var(--divider-color,#a5aab4)}button.lg-switch:focus-visible{outline:2px solid var(--primary-color,#2563eb);outline-offset:4px}.device-header{align-items:center;gap:1rem;display:flex}.brightness{margin-top:.75rem}.brightness-label{font-variant-numeric:tabular-nums;justify-content:space-between;gap:.5rem;font-size:.875rem;display:flex}.lg-slider{--lg-fill:var(--primary-color,#2563eb);width:100%;min-height:44px}.lg-slider:focus-within{outline:2px solid var(--primary-color,#2563eb);outline-offset:2px;border-radius:12px}@media (prefers-reduced-motion:reduce){.lg-switch-thumb,.lg-slider-thumb{transition:none;scale:none}.lg-switch-inset,.lg-slider-magnified{visibility:hidden!important}.lg-switch-bed,.lg-slider-bed{mask:none!important}}", Ot = ":host{font:1rem/1.45 -apple-system,BlinkMacSystemFont,system-ui,sans-serif;display:block;container-type:inline-size}.home-shell{--surface:#fffaf3;--ink:#241b15;--muted:#624b3d;--accent:#874126;--line:#ddd0c3;--sky:#f4d5bb;--primary-text-color:var(--ink);--secondary-text-color:var(--muted);--primary-color:var(--accent);--ha-card-background:var(--surface);--ha-card-border-color:var(--line);min-height:min(75dvh,48rem);color:var(--ink);background:radial-gradient(ellipse at 85% 0%, var(--sky), transparent 55%), var(--surface);border-radius:clamp(0px,3vw,28px);flex-direction:column;padding:clamp(1rem,4vw,3rem);display:flex}.home-shell[data-theme=dark]{--surface:#251f1b;--ink:#fff4e9;--muted:#dcc3b0;--accent:#ffb58f;--line:#514136;--sky:#533321}.home-header{align-items:center;gap:1rem;margin-bottom:2rem;display:flex}.home-mark{background:var(--accent);width:3.25rem;height:3.25rem;color:var(--surface);border-radius:1.1rem;flex:none;place-items:center;display:grid}h1,h2,h3,p{margin:0}h1{letter-spacing:-.04em;overflow-wrap:anywhere;font-size:clamp(1.8rem,6vw,3.4rem);line-height:1.05}h2{margin-bottom:.75rem;font-size:1.4rem}h3{margin-bottom:.65rem;font-size:1.05rem}p,small{color:var(--muted)}.home-header p{margin-top:.35rem}.home-content{flex:1}.tiles{grid-template-columns:minmax(0,1fr);gap:.65rem;display:grid}.tile{text-align:start;border:1px solid var(--line);min-height:4rem;color:inherit;background:var(--surface);font:inherit;cursor:pointer;overflow-wrap:anywhere;border-radius:16px;align-items:center;gap:.75rem;padding:.75rem 1rem;display:flex}.tile ha-icon{color:var(--accent);flex:none}.tile small{display:block}.tile:disabled{cursor:default}.tile:hover:not(:disabled){border-color:var(--accent)}.room{margin-top:1.25rem}.room-search{width:min(100%,26rem);min-height:44px}.home-nav{bottom:max(.75rem, env(safe-area-inset-bottom));z-index:2;align-self:center;width:min(100%,24rem);margin-top:1.5rem;position:sticky}.home-nav .lg-tab-bar{box-sizing:border-box;width:100%}.home-nav ha-icon{--mdc-icon-size:21px}button:focus-visible,:where(.lg-tab-bar) :focus-visible{outline:2px solid var(--accent);outline-offset:2px}@media (prefers-reduced-transparency:reduce),(prefers-contrast:more),(prefers-reduced-motion:reduce){.home-nav .lg-glass{background:var(--surface);-webkit-backdrop-filter:none}}@container (width>=600px){.tiles{grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))}}.home-nav .lg-tab{min-width:44px;min-height:44px}.plain-tabs{display:none}@media (prefers-reduced-motion:reduce),(prefers-reduced-transparency:reduce){.glass-tabs{display:none}.plain-tabs{background:var(--surface);border:1px solid var(--line);border-radius:20px;display:flex}.plain-tabs button{min-width:44px;min-height:44px;color:var(--ink);font:inherit;cursor:pointer;background:0 0;border:0;flex:1;place-items:center;padding:.25rem;display:grid}.plain-tabs button[aria-pressed=true]{color:var(--accent);font-weight:700}}", kt = [
	"home",
	"rooms",
	"scenes"
];
function At(e) {
	return kt.filter((t) => t === "home" || !e.visible_tabs || e.visible_tabs.includes(t));
}
var jt = class extends HTMLElement {
	config = {};
	titleField;
	appearanceField;
	automatic;
	picker;
	tabs;
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" });
		e.innerHTML = "\n      <style>\n        :host, label { display: grid; gap: .5rem }\n        :host { gap: 1rem }\n        input:not([type=checkbox]), select { min-height: 44px; font: inherit; color: inherit;\n          background: var(--card-background-color); border: 1px solid var(--divider-color); border-radius: 8px; padding: 0 .5rem }\n        label:has(input[type=checkbox]) { display: flex; align-items: center; min-height: 44px }\n      </style>\n      <label>Titel<input id=\"title\" type=\"text\"></label>\n      <label>Erscheinungsbild<select>\n        <option value=\"auto\">Automatisch</option><option value=\"light\">Hell</option><option value=\"dark\">Dunkel</option>\n      </select></label>\n      <fieldset><legend>Sichtbare Tabs</legend>\n        <label><input type=\"checkbox\" checked disabled>Zuhause</label>\n        <label><input type=\"checkbox\" value=\"rooms\">Räume</label>\n        <label><input type=\"checkbox\" value=\"scenes\">Szenen</label>\n      </fieldset>\n      <fieldset><legend>Favoriten</legend>\n        <label><input id=\"automatic\" type=\"checkbox\">Favoriten automatisch auswählen</label>\n        <ha-selector></ha-selector>\n      </fieldset>", this.titleField = e.querySelector("#title"), this.appearanceField = e.querySelector("select"), this.automatic = e.querySelector("#automatic"), this.picker = e.querySelector("ha-selector"), this.tabs = [...e.querySelectorAll("input[value]")], this.titleField.addEventListener("change", () => this.update({ title: this.titleField.value })), this.appearanceField.addEventListener("change", () => this.update({ appearance: this.appearanceField.value })), this.tabs.forEach((e) => e.addEventListener("change", () => this.update({ visible_tabs: ["home", ...this.tabs.filter((e) => e.checked).map((e) => e.value)] }))), this.automatic.addEventListener("change", () => this.update({ favorites: this.automatic.checked ? void 0 : [] })), this.picker.addEventListener("value-changed", (e) => {
			e.stopPropagation(), this.automatic.checked || this.update({ favorites: e.detail.value ?? [] });
		}), customElements.whenDefined("ha-selector").then(() => this.syncPicker());
	}
	setConfig(e) {
		this.config = e, this.titleField.value = e.title ?? "", this.appearanceField.value = e.appearance ?? "auto";
		let t = At(e);
		this.tabs.forEach((e) => {
			e.checked = t.includes(e.value);
		}), this.automatic.checked = e.favorites === void 0, this.syncPicker();
	}
	home;
	set hass(e) {
		this.home = e, this.syncPicker();
	}
	syncPicker() {
		this.picker.hidden = this.config.favorites === void 0, customElements.get("ha-selector") && (this.picker.hass = this.home, this.picker.selector ??= { entity: { multiple: !0 } }, this.picker.label = "Entitäten", this.picker.value = this.config.favorites ?? []);
	}
	update(e) {
		let t = {
			...this.config,
			...e
		};
		t.favorites === void 0 && delete t.favorites, this.setConfig(t), this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: t },
			bubbles: !0,
			composed: !0
		}));
	}
};
customElements.get("glisse-home-editor") || customElements.define("glisse-home-editor", jt);
// src/glisse-home.tsx
var Mt = [
	{
		value: "home",
		label: "Zuhause",
		icon: Nt("mdi:home-variant")
	},
	{
		value: "rooms",
		label: "Räume",
		icon: Nt("mdi:floor-plan")
	},
	{
		value: "scenes",
		label: "Szenen",
		icon: Nt("mdi:creation")
	}
];
function Nt(e) {
	return /* @__PURE__ */ (0, o.jsx)("ha-icon", {
		icon: e,
		"aria-hidden": "true"
	});
}
function Pt(e, t) {
	return e.states[t]?.attributes.friendly_name ?? t;
}
function Ft({ home: e, id: t }) {
	let n = (0, a.useRef)(null);
	if ((0, a.useEffect)(() => {
		n.current?.setConfig({ entity: t });
	}, [t]), (0, a.useEffect)(() => {
		n.current && (n.current.hass = e);
	}, [e]), /^(light|switch)\./.test(t)) return /* @__PURE__ */ (0, o.jsx)("glisse-card", { ref: n });
	let r = e.states[t];
	return /* @__PURE__ */ (0, o.jsxs)("button", {
		className: "tile detail-tile",
		disabled: !r,
		onClick: (e) => {
			e.currentTarget.dispatchEvent(new CustomEvent("hass-more-info", {
				detail: { entityId: t },
				bubbles: !0,
				composed: !0
			}));
		},
		children: [Nt("mdi:tune-variant"), /* @__PURE__ */ (0, o.jsxs)("span", { children: [/* @__PURE__ */ (0, o.jsx)("strong", { children: Pt(e, t) }), /* @__PURE__ */ (0, o.jsx)("small", { children: r && e.formatEntityState ? e.formatEntityState(r) : r?.state ?? "Entität fehlt" })] })]
	});
}
function It({ home: e, id: t }) {
	let [n, r] = (0, a.useState)(!1), [i, s] = (0, a.useState)(""), c = e.states[t]?.state;
	async function l() {
		r(!0), s("");
		try {
			await e.callService("scene", "turn_on", { entity_id: t }), s("Aktiviert");
		} catch {
			s("Aktivieren fehlgeschlagen");
		} finally {
			r(!1);
		}
	}
	return /* @__PURE__ */ (0, o.jsxs)("button", {
		className: "tile scene",
		disabled: n || !c || c === "unavailable",
		onClick: l,
		children: [Nt("mdi:creation"), /* @__PURE__ */ (0, o.jsxs)("span", { children: [/* @__PURE__ */ (0, o.jsx)("strong", { children: Pt(e, t) }), /* @__PURE__ */ (0, o.jsx)("small", {
			role: "status",
			children: n ? "Wird aktiviert …" : i || (c && c !== "unavailable" ? "Aktivieren" : "Nicht verfügbar")
		})] })]
	});
}
function Lt(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) {
		let t = e.entities?.[r], i = t?.area_id ?? e.devices?.[t?.device_id ?? ""]?.area_id, a = i ? e.areas?.[i] : void 0, o = a && i ? i : "", s = n.get(o) ?? {
			name: a?.name ?? "Ohne Raum",
			entities: []
		};
		s.entities.push(r), n.set(o, s);
	}
	return [...n.values()];
}
function Rt({ config: e, home: t }) {
	let [n, r] = (0, a.useState)("home"), i = At(e), s = i.includes(n) ? n : "home";
	(0, a.useEffect)(() => {
		s !== n && r(s);
	}, [s, n]);
	let c = e.appearance === "dark" || e.appearance !== "light" && !!t.themes?.darkMode, l = (0, a.useMemo)(() => ({
		...t,
		themes: {
			...t.themes,
			darkMode: c
		}
	}), [t, c]), u = Mt.filter((e) => i.includes(e.value)), [d, f] = (0, a.useState)(""), p = Object.keys(t.states).filter((e) => !t.entities?.[e]?.hidden), m = e.favorites ?? p.filter((e) => /^(light|switch)\./.test(e)).slice(0, 8), h = e.rooms ?? Lt(t, p.filter((e) => /^(light|switch|cover|climate|fan|media_player)\./.test(e))), g = e.scenes ?? p.filter((e) => e.startsWith("scene.")), _ = m.filter((e) => t.states[e]?.state === "on").length, v = (e) => Pt(t, e).toLocaleLowerCase().includes(d.trim().toLocaleLowerCase()), y = (e) => /* @__PURE__ */ (0, o.jsx)("div", {
		className: "tiles",
		children: [...new Set(e)].map((e) => /* @__PURE__ */ (0, o.jsx)(Ft, {
			home: l,
			id: e
		}, e))
	}), b = h.map((e) => ({
		...e,
		entities: e.entities.filter(v)
	})).filter((e) => e.entities.length);
	return /* @__PURE__ */ (0, o.jsxs)("section", {
		className: "home-shell",
		"data-theme": c ? "dark" : "light",
		children: [
			/* @__PURE__ */ (0, o.jsxs)("header", {
				className: "home-header",
				children: [/* @__PURE__ */ (0, o.jsx)("div", {
					className: "home-mark",
					children: Nt("mdi:home-variant")
				}), /* @__PURE__ */ (0, o.jsxs)("div", { children: [/* @__PURE__ */ (0, o.jsx)("h1", { children: e.title || "Zuhause" }), /* @__PURE__ */ (0, o.jsx)("p", { children: _ === 0 ? "Keine Favoriten eingeschaltet" : _ === 1 ? "1 Favorit eingeschaltet" : _ + " Favoriten eingeschaltet" })] })]
			}),
			/* @__PURE__ */ (0, o.jsxs)("div", {
				className: "home-content",
				children: [
					s === "home" && /* @__PURE__ */ (0, o.jsxs)("section", {
						"aria-label": "Favoriten",
						children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Favoriten" }), m.length ? y(m) : /* @__PURE__ */ (0, o.jsx)("p", { children: "Hier erscheinen deine ausgewählten Geräte." })]
					}),
					s === "rooms" && /* @__PURE__ */ (0, o.jsxs)("section", {
						"aria-label": "Räume",
						children: [
							/* @__PURE__ */ (0, o.jsx)("h2", { children: "Räume" }),
							/* @__PURE__ */ (0, o.jsx)(tt, {
								className: "room-search",
								"aria-label": "Geräte suchen",
								placeholder: "Geräte suchen",
								value: d,
								onValueChange: f
							}),
							b.map((e, t) => /* @__PURE__ */ (0, o.jsxs)("section", {
								className: "room",
								children: [/* @__PURE__ */ (0, o.jsx)("h3", { children: e.name }), y(e.entities)]
							}, e.name + t)),
							!b.length && /* @__PURE__ */ (0, o.jsx)("p", { children: "Keine Geräte gefunden." })
						]
					}),
					s === "scenes" && /* @__PURE__ */ (0, o.jsxs)("section", {
						"aria-label": "Szenen",
						children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Szenen" }), g.length ? /* @__PURE__ */ (0, o.jsx)("div", {
							className: "tiles",
							children: [...new Set(g)].map((e) => /* @__PURE__ */ (0, o.jsx)(It, {
								home: t,
								id: e
							}, e))
						}) : /* @__PURE__ */ (0, o.jsx)("p", { children: "Erstelle eine Szene in Home Assistant, um sie hier zu starten." })]
					})
				]
			}),
			/* @__PURE__ */ (0, o.jsxs)("nav", {
				className: "home-nav",
				"aria-label": "Glisse Home",
				children: [/* @__PURE__ */ (0, o.jsx)("div", {
					className: "glass-tabs",
					children: /* @__PURE__ */ (0, o.jsx)(yt, {
						items: u,
						value: s,
						onValueChange: (e) => r(e)
					})
				}), /* @__PURE__ */ (0, o.jsx)("div", {
					className: "plain-tabs",
					children: u.map((e) => /* @__PURE__ */ (0, o.jsxs)("button", {
						type: "button",
						"aria-pressed": s === e.value,
						onClick: () => r(e.value),
						children: [e.icon, e.label]
					}, e.value))
				})]
			})
		]
	});
}
var zt = class extends HTMLElement {
	mount = document.createElement("div");
	root;
	config;
	home;
	constructor() {
		super();
		let e = document.createElement("style");
		e.textContent = bt + "\n" + Ot, this.attachShadow({ mode: "open" }).append(e, this.mount);
	}
	connectedCallback() {
		this.root ??= (0, Et.createRoot)(this.mount), this.render();
	}
	disconnectedCallback() {
		this.root?.unmount(), this.root = void 0;
	}
	setConfig(e) {
		let t = (e, t) => Array.isArray(e) && e.every((e) => typeof e == "string" && t.test(e)), n = /^[a-z_]+\.[a-z0-9_]+$/;
		if (e.favorites !== void 0 && !t(e.favorites, n)) throw Error("favorites muss gültige Entitäts-IDs enthalten.");
		if (e.scenes !== void 0 && !t(e.scenes, /^scene\.[a-z0-9_]+$/)) throw Error("scenes muss scene.*-Entitäten enthalten.");
		if (e.rooms !== void 0 && (!Array.isArray(e.rooms) || e.rooms.some((e) => !e || typeof e.name != "string" || !e.name.trim() || !t(e.entities, n)))) throw Error("Jeder Raum braucht einen Namen und eine Liste mit Entitäts-IDs.");
		if (e.appearance !== void 0 && ![
			"auto",
			"light",
			"dark"
		].includes(e.appearance)) throw Error("appearance muss auto, light oder dark sein.");
		if (e.visible_tabs !== void 0 && (!Array.isArray(e.visible_tabs) || e.visible_tabs.some((e) => ![
			"home",
			"rooms",
			"scenes"
		].includes(e)))) throw Error("visible_tabs unterstützt home, rooms und scenes.");
		this.config = e, this.render();
	}
	set hass(e) {
		this.home = e, this.render();
	}
	static getConfigElement() {
		return document.createElement("glisse-home-editor");
	}
	static getStubConfig() {
		return { appearance: "auto" };
	}
	getCardSize() {
		return 8;
	}
	render() {
		this.config && this.home && this.root?.render(/* @__PURE__ */ (0, o.jsx)(Rt, {
			config: this.config,
			home: this.home
		}));
	}
};
customElements.get("glisse-home") || customElements.define("glisse-home", zt);
var Bt = window;
Bt.customCards ??= [], Bt.customCards.some((e) => e.type === "glisse-home") || Bt.customCards.push({
	type: "glisse-home",
	name: "Glisse Home",
	description: "Favoriten, Räume und Szenen im Liquid-Glass-Design",
	preview: !0
});
// src/dashboard/components/Ambient.tsx
function Vt({ glow: e, day: t }) {
	return /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "ambient",
		"aria-hidden": "true",
		style: {
			"--glow": e,
			"--day": t
		},
		children: [
			/* @__PURE__ */ (0, o.jsx)("i", { className: "orb orb-a" }),
			/* @__PURE__ */ (0, o.jsx)("i", { className: "orb orb-b" }),
			/* @__PURE__ */ (0, o.jsx)("i", { className: "orb orb-c" })
		]
	});
}
// src/dashboard/components/ErrorBoundary.tsx
var Ht = class extends a.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	componentDidCatch(e) {
		console.error("Glisse Dashboard: page failed", e);
	}
	render() {
		return this.state.failed ? /* @__PURE__ */ (0, o.jsxs)("div", {
			className: "page-error",
			role: "alert",
			children: [/* @__PURE__ */ (0, o.jsx)("h1", { children: this.props.title }), /* @__PURE__ */ (0, o.jsx)("p", { children: "Diese Seite ließ sich nicht anzeigen. Lade das Dashboard neu oder wechsle den Bereich." })]
		}) : this.props.children;
	}
}, Ut = {
	armchair: ["<path d=\"M216,88.8V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V88.8a40,40,0,0,0,0,78.4V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V167.2a40,40,0,0,0,0-78.4ZM80,48h96a24,24,0,0,1,24,24V88.8A40.07,40.07,0,0,0,168,128H88A40.07,40.07,0,0,0,56,88.8V72A24,24,0,0,1,80,48ZM208.39,152H208a8,8,0,0,0-8,8v40H56V160a8,8,0,0,0-8-8h-.39A24,24,0,1,1,72,128v40a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V128a24,24,0,1,1,24.39,24Z\"/>", "<path d=\"M240,132a28,28,0,0,1-24,27.71V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V159.71A28,28,0,1,1,72,132v36a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V132a28,28,0,0,1,56,0ZM44,88a44.06,44.06,0,0,1,43.81,40h80.38A44.06,44.06,0,0,1,212,88a4,4,0,0,0,4-4V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V84A4,4,0,0,0,44,88Z\"/>"],
	bathtub: ["<path d=\"M240,96H208a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H16a8,8,0,0,0-8,8v40a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V104A8,8,0,0,0,240,96Zm-48,8v32H144V104Zm40,40a40,40,0,0,1-40,40H64a40,40,0,0,1-40-40V112H128v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V112h24Z\"/>", "<path d=\"M240,96H216a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H16a8,8,0,0,0-8,8v40a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V104A8,8,0,0,0,240,96Zm-40,8v40H144V104Z\"/>"],
	bed: ["<path d=\"M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Zm88,72V88h96a24,24,0,0,1,24,24v48Z\"/>", "<path d=\"M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Z\"/>"],
	broom: ["<path d=\"M235.5,216.81c-22.56-11-35.5-34.58-35.5-64.8V134.73a15.94,15.94,0,0,0-10.09-14.87L165,110a8,8,0,0,1-4.48-10.34l21.32-53a28,28,0,0,0-16.1-37,28.14,28.14,0,0,0-35.82,16,.61.61,0,0,0,0,.12L108.9,79a8,8,0,0,1-10.37,4.49L73.11,73.14A15.89,15.89,0,0,0,55.74,76.8C34.68,98.45,24,123.75,24,152a111.45,111.45,0,0,0,31.18,77.53A8,8,0,0,0,61,232H232a8,8,0,0,0,3.5-15.19ZM67.14,88l25.41,10.3a24,24,0,0,0,31.23-13.45l21-53c2.56-6.11,9.47-9.27,15.43-7a12,12,0,0,1,6.88,15.92L145.69,93.76a24,24,0,0,0,13.43,31.14L184,134.73V152c0,.33,0,.66,0,1L55.77,101.71A108.84,108.84,0,0,1,67.14,88Zm48,128a87.53,87.53,0,0,1-24.34-42,8,8,0,0,0-15.49,4,105.16,105.16,0,0,0,18.36,38H64.44A95.54,95.54,0,0,1,40,152a85.9,85.9,0,0,1,7.73-36.29l137.8,55.12c3,18,10.56,33.48,21.89,45.16Z\"/>", "<path d=\"M235.29,216.7C212.86,205.69,200,182.12,200,152V134.69a15.94,15.94,0,0,0-10.09-14.87l-28.65-11.46A8,8,0,0,1,156.79,98l22.32-56.67C184,28.79,178,14.21,165.34,9.51a24,24,0,0,0-30.7,13.71L112.25,80.08a8,8,0,0,1-10.41,4.5L73.11,73.08a15.91,15.91,0,0,0-17.38,3.66C34.68,98.4,24,123.71,24,152a111.53,111.53,0,0,0,31.15,77.53A8.06,8.06,0,0,0,61,232H232a8,8,0,0,0,8-7.51A8.21,8.21,0,0,0,235.29,216.7ZM115.11,216a87.52,87.52,0,0,1-24.26-41.71,8.21,8.21,0,0,0-9.25-6.18A8,8,0,0,0,75.28,178a105.33,105.33,0,0,0,18.36,38H64.44A95.62,95.62,0,0,1,40,152a85.92,85.92,0,0,1,7.73-36.3l137.8,55.13c3,18.06,10.55,33.5,21.89,45.19Z\"/>"],
	"calendar-blank": ["<path d=\"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z\"/>", "<path d=\"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z\"/>"],
	check: ["<path d=\"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z\"/>", "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z\"/>"],
	cloud: ["<path d=\"M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z\"/>", "<path d=\"M160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160a88.09,88.09,0,0,0,87.93-91.48C246.11,77.54,207.07,40,160.06,40Z\"/>"],
	"cloud-check": ["<path d=\"M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Zm37.66-93.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L144,148.69l42.34-42.35A8,8,0,0,1,197.66,106.34Z\"/>", "<path d=\"M247.93,124.52C246.11,77.54,207.07,40,160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160A88.09,88.09,0,0,0,247.93,124.52Zm-50.27-6.86-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L144,148.69l42.34-42.35a8,8,0,0,1,11.32,11.32Z\"/>"],
	"cloud-fog": ["<path d=\"M120,208H72a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64-16H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm-24,32H104a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm72-124a76.08,76.08,0,0,1-76,76H76A52,52,0,0,1,76,72a53.26,53.26,0,0,1,8.92.76A76.08,76.08,0,0,1,232,100Zm-16,0A60.06,60.06,0,0,0,96,96.46a8,8,0,0,1-16-.92q.21-3.66.77-7.23A38.11,38.11,0,0,0,76,88a36,36,0,0,0,0,72h80A60.07,60.07,0,0,0,216,100Z\"/>", "<path d=\"M168,232a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h56A8,8,0,0,1,168,232Zm-40-32a8,8,0,0,0-8-8H72a8,8,0,0,0,0,16h48A8,8,0,0,0,128,200Zm56-8H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm47.87-96.45a76,76,0,0,0-151.78.73A8.18,8.18,0,0,1,72,104l-.6,0A8.14,8.14,0,0,1,64,95.39a92.48,92.48,0,0,1,2.33-16.51,4,4,0,0,0-5-4.78A52.09,52.09,0,0,0,24,124.36C24.2,153.07,48.12,176,76.84,176H156A76.08,76.08,0,0,0,231.87,95.55Z\"/>"],
	"cloud-lightning": ["<path d=\"M156,16A76.2,76.2,0,0,0,84.92,64.76,53.26,53.26,0,0,0,76,64a52,52,0,0,0,0,104h37.87L97.14,195.88A8,8,0,0,0,104,208h25.87l-16.73,27.88a8,8,0,0,0,13.72,8.24l24-40A8,8,0,0,0,144,192H118.13l14.4-24H156a76,76,0,0,0,0-152Zm0,136H76a36,36,0,0,1,0-72,38.11,38.11,0,0,1,4.78.31q-.56,3.57-.77,7.23a8,8,0,0,0,16,.92A60.06,60.06,0,1,1,156,152Z\"/>", "<path d=\"M156,168H132.53l-14.4,24H144a8,8,0,0,1,6.86,12.12l-24,40a8,8,0,0,1-13.72-8.24L129.87,208H104a8,8,0,0,1-6.86-12.12L113.87,168h-37C48.12,168,24.2,145.07,24,116.36A52.09,52.09,0,0,1,61.35,66.1a4,4,0,0,1,5,4.78A92.48,92.48,0,0,0,64,87.39,8.14,8.14,0,0,0,71.41,96l.6,0a8.18,8.18,0,0,0,8.08-7.72A76,76,0,1,1,156,168Z\"/>"],
	"cloud-moon": ["<path d=\"M172,72a76.45,76.45,0,0,0-12.36,1A71.93,71.93,0,0,0,104.17,9.83a8,8,0,0,0-9.59,9.58A56.05,56.05,0,0,1,40,88a56.45,56.45,0,0,1-12.59-1.42,8,8,0,0,0-9.59,9.59,72.22,72.22,0,0,0,32.29,45.06A52,52,0,0,0,92,224h80a76,76,0,0,0,0-152ZM37.37,104c.87,0,1.75,0,2.63,0a72.08,72.08,0,0,0,72-72c0-.89,0-1.78,0-2.67a55.63,55.63,0,0,1,32,48,76.28,76.28,0,0,0-43,43.4A52,52,0,0,0,62,129.59,56.22,56.22,0,0,1,37.37,104ZM172,208H92a36,36,0,1,1,4.78-71.69c-.37,2.37-.63,4.79-.77,7.23a8,8,0,0,0,16,.92,58.91,58.91,0,0,1,1.88-11.81c0-.16.09-.32.12-.48A60.06,60.06,0,1,1,172,208Z\"/>", "<path d=\"M172,72a76.35,76.35,0,0,0-12.36,1A71.93,71.93,0,0,0,104.17,9.83a8,8,0,0,0-9.59,9.58A56.05,56.05,0,0,1,40,88a56.45,56.45,0,0,1-12.59-1.42,8,8,0,0,0-9.59,9.59,72.22,72.22,0,0,0,32.29,45.06A52,52,0,0,0,92,224h80a76,76,0,0,0,0-152ZM37.37,104c.87,0,1.75,0,2.63,0a72.08,72.08,0,0,0,72-72c0-.89,0-1.78,0-2.67a55.64,55.64,0,0,1,32,48.05A76.4,76.4,0,0,0,101,120.78a52.38,52.38,0,0,0-9-.78,51.69,51.69,0,0,0-30,9.59A56.22,56.22,0,0,1,37.37,104Z\"/>"],
	"cloud-rain": ["<path d=\"M158.66,196.44l-32,48a8,8,0,1,1-13.32-8.88l32-48a8,8,0,0,1,13.32,8.88ZM232,92a76.08,76.08,0,0,1-76,76H132.28l-29.62,44.44a8,8,0,1,1-13.32-8.88L113.05,168H76A52,52,0,0,1,76,64a53.26,53.26,0,0,1,8.92.76A76.08,76.08,0,0,1,232,92Zm-16,0A60.06,60.06,0,0,0,96,88.46a8,8,0,0,1-16-.92q.21-3.66.77-7.23A38.11,38.11,0,0,0,76,80a36,36,0,0,0,0,72h80A60.07,60.07,0,0,0,216,92Z\"/>", "<path d=\"M158.66,196.44l-32,48a8,8,0,1,1-13.32-8.88l32-48a8,8,0,0,1,13.32,8.88ZM231.87,87.55a76,76,0,0,0-151.78.73A8.18,8.18,0,0,1,72,96l-.6,0A8.14,8.14,0,0,1,64,87.39a92.48,92.48,0,0,1,2.33-16.51,4,4,0,0,0-5-4.78A52.09,52.09,0,0,0,24,116.36C24.2,145.07,48.12,168,76.84,168h36.21L89.34,203.56a8,8,0,0,0,13.32,8.88L132.28,168H156A76.08,76.08,0,0,0,231.87,87.55Z\"/>"],
	"cloud-snow": ["<path d=\"M88,196a12,12,0,1,1-12-12A12,12,0,0,1,88,196Zm28,4a12,12,0,1,0,12,12A12,12,0,0,0,116,200Zm48-16a12,12,0,1,0,12,12A12,12,0,0,0,164,184ZM68,224a12,12,0,1,0,12,12A12,12,0,0,0,68,224Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,156,224ZM232,92a76.08,76.08,0,0,1-76,76H76A52,52,0,0,1,76,64a53.26,53.26,0,0,1,8.92.76A76.08,76.08,0,0,1,232,92Zm-16,0A60.06,60.06,0,0,0,96,88.46a8,8,0,0,1-16-.92q.21-3.66.77-7.23A38.11,38.11,0,0,0,76,80a36,36,0,0,0,0,72h80A60.07,60.07,0,0,0,216,92Z\"/>", "<path d=\"M88,196a12,12,0,1,1-12-12A12,12,0,0,1,88,196Zm28,4a12,12,0,1,0,12,12A12,12,0,0,0,116,200Zm48-16a12,12,0,1,0,12,12A12,12,0,0,0,164,184ZM68,224a12,12,0,1,0,12,12A12,12,0,0,0,68,224Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,156,224ZM231.87,87.55a76,76,0,0,0-151.78.73A8.18,8.18,0,0,1,72,96l-.6,0A8.14,8.14,0,0,1,64,87.39a92.48,92.48,0,0,1,2.33-16.51,4,4,0,0,0-5-4.78A52.09,52.09,0,0,0,24,116.36C24.2,145.07,48.12,168,76.84,168H156A76.08,76.08,0,0,0,231.87,87.55Z\"/>"],
	"cloud-sun": ["<path d=\"M164,72a76.2,76.2,0,0,0-20.26,2.73,55.63,55.63,0,0,0-9.41-11.54l9.51-13.57a8,8,0,1,0-13.11-9.18L121.22,54A55.9,55.9,0,0,0,96,48c-.58,0-1.16,0-1.74,0L91.37,31.71a8,8,0,1,0-15.75,2.77L78.5,50.82A56.1,56.1,0,0,0,55.23,65.67L41.61,56.14a8,8,0,1,0-9.17,13.11L46,78.77A55.55,55.55,0,0,0,40,104c0,.57,0,1.15,0,1.72L23.71,108.6a8,8,0,0,0,1.38,15.88,8.24,8.24,0,0,0,1.39-.12l16.32-2.88a55.74,55.74,0,0,0,5.86,12.42A52,52,0,0,0,84,224h80a76,76,0,0,0,0-152ZM56,104a40,40,0,0,1,72.54-23.24,76.26,76.26,0,0,0-35.62,40,52.14,52.14,0,0,0-31,4.17A40,40,0,0,1,56,104ZM164,208H84a36,36,0,1,1,4.78-71.69c-.37,2.37-.63,4.79-.77,7.23a8,8,0,0,0,16,.92,58.91,58.91,0,0,1,1.88-11.81c0-.16.09-.32.12-.48A60.06,60.06,0,1,1,164,208Z\"/>", "<path d=\"M164,72a76.2,76.2,0,0,0-20.26,2.73,55.63,55.63,0,0,0-9.41-11.54l9.51-13.57a8,8,0,1,0-13.11-9.18L121.22,54A55.9,55.9,0,0,0,96,48c-.59,0-1.16,0-1.74,0L91.37,31.71a8,8,0,1,0-15.75,2.77L78.5,50.82A56.1,56.1,0,0,0,55.23,65.67L41.61,56.14a8,8,0,1,0-9.17,13.11L46,78.77A55.55,55.55,0,0,0,40,104c0,.57,0,1.15,0,1.72L23.71,108.6a8,8,0,0,0,1.38,15.88,8.24,8.24,0,0,0,1.39-.12l16.32-2.88a55.74,55.74,0,0,0,5.86,12.42A52,52,0,0,0,84,224h80a76,76,0,0,0,0-152ZM92.92,120.76a52.14,52.14,0,0,0-31,4.17,40,40,0,0,1,66.62-44.17A76.26,76.26,0,0,0,92.92,120.76Z\"/>"],
	coffee: ["<path d=\"M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z\"/>", "<path d=\"M208,80H32a8,8,0,0,0-8,8v48a96.3,96.3,0,0,0,32.54,72H32a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16H183.46a96.59,96.59,0,0,0,27-40.09A40,40,0,0,0,248,128v-8A40,40,0,0,0,208,80Zm24,48a24,24,0,0,1-17.2,23,95.78,95.78,0,0,0,1.2-15V97.38A24,24,0,0,1,232,120ZM112,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm32,0V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0ZM80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Z\"/>"],
	"cooking-pot": ["<path d=\"M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm92.8,46.4L224,124v60a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V80a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v24l19.2-14.4a8,8,0,0,1,9.6,12.8ZM208,88H48v96a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16Z\"/>", "<path d=\"M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm94.4,35.2a8,8,0,0,0-11.2-1.6L224,104V80a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8v24L12.8,89.6a8,8,0,0,0-9.6,12.8L32,124v60a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V124l28.8-21.6A8,8,0,0,0,254.4,91.2Z\"/>"],
	cube: ["<path d=\"M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z\"/>", "<path d=\"M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z\"/>"],
	couch: ["<path d=\"M240,106.17V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72v34.17A16,16,0,0,0,8,120v48a16,16,0,0,0,16,16h8v16a8,8,0,0,0,16,0V184H208v16a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V120A16,16,0,0,0,240,106.17ZM224,104h-8a16,16,0,0,0-16,16v16H136V72h88ZM120,72v64H56V120a16,16,0,0,0-16-16H32V72Zm112,96H24V120H40v24a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V120h16Z\"/>", "<path d=\"M16,100V72A16,16,0,0,1,32,56h84a4,4,0,0,1,4,4v76H64a32,32,0,0,0-32-32H20A4,4,0,0,1,16,100Zm208,4h12a4,4,0,0,0,4-4V72a16,16,0,0,0-16-16H140a4,4,0,0,0-4,4v76h56A32,32,0,0,1,224,104Zm8,16h-8a16,16,0,0,0-16,16v8a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8v-8a16,16,0,0,0-16-16H24A16,16,0,0,0,8,136v32a16,16,0,0,0,16,16h8v15.73A8.18,8.18,0,0,0,39.47,208,8,8,0,0,0,48,200V184H208v15.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V184h8a16,16,0,0,0,16-16V136A16,16,0,0,0,232,120Z\"/>"],
	"currency-eur": ["<path d=\"M190,192.33a8,8,0,0,1-.63,11.3A80,80,0,0,1,56.4,152H40a8,8,0,0,1,0-16H56V120H40a8,8,0,0,1,0-16H56.4A80,80,0,0,1,189.34,52.37,8,8,0,0,1,178.66,64.3,64,64,0,0,0,72.52,104H136a8,8,0,0,1,0,16H72v16h48a8,8,0,0,1,0,16H72.52a64,64,0,0,0,106.14,39.71A8,8,0,0,1,190,192.33Z\"/>", "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,80a8,8,0,0,1,0,16H88v16h24a8,8,0,0,1,0,16H88.81a40,40,0,0,0,65.86,21.82,8,8,0,1,1,10.66,11.92A56,56,0,0,1,72.58,152H64a8,8,0,0,1,0-16h8V120H64a8,8,0,0,1,0-16h8.58a56,56,0,0,1,92.75-33.74,8,8,0,1,1-10.66,11.92A40,40,0,0,0,88.81,104Z\"/>"],
	desk: ["<path d=\"M248,64H8A8,8,0,0,0,8,80h8V192a8,8,0,0,0,16,0V144H224v48a8,8,0,0,0,16,0V80h8a8,8,0,0,0,0-16ZM32,80h88v48H32Zm192,48H136V80h88ZM96,104a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H88A8,8,0,0,1,96,104Zm64,0a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H168A8,8,0,0,1,160,104Z\"/>", "<path d=\"M248,64H8A8,8,0,0,0,8,80h8V192a8,8,0,0,0,16,0V144H224v48a8,8,0,0,0,16,0V80h8a8,8,0,0,0,0-16ZM80,112H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm56,8a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm64-8H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z\"/>"],
	"dots-three-circle": ["<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,128Zm-88,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Z\"/>", "<path d=\"M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z\"/>"],
	drop: ["<path d=\"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Zm55.89-62.66a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z\"/>", "<path d=\"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75Zm9.85,105.59a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z\"/>"],
	"film-strip": ["<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88h80v80H40Zm96-16V56h32V72Zm-16,0H88V56h32Zm0,112v16H88V184Zm16,0h32v16H136Zm0-16V88h80v80Zm80-96H184V56h32ZM72,56V72H40V56ZM40,184H72v16H40Zm176,16H184V184h32v16Z\"/>", "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,56h32V72H184ZM72,200H40V184H72ZM72,72H40V56H72Zm48,128H88V184h32Zm0-128H88V56h32Zm48,128H136V184h32Zm0-128H136V56h32Zm48,128H184V184h32v16Z\"/>"],
	fire: ["<path d=\"M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z\"/>", "<path d=\"M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z\"/>"],
	gear: ["<path d=\"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z\"/>", "<path d=\"M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z\"/>"],
	house: ["<path d=\"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z\"/>", "<path d=\"M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z\"/>"],
	lamp: ["<path d=\"M247.35,148.85l-48-112A8,8,0,0,0,192,32H64a8,8,0,0,0-7.35,4.85l-48,112A8,8,0,0,0,16,160H120v48H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V160h56v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,7.35-11.15ZM28.13,144,69.28,48H186.72l41.15,96Z\"/>", "<path d=\"M246.68,156.4A8,8,0,0,1,240,160H208v32a8,8,0,0,1-16,0V160H136v48h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V160H16a8,8,0,0,1-7.35-11.15l48-112A8,8,0,0,1,64,32H192a8,8,0,0,1,7.35,4.85l48,112A8,8,0,0,1,246.68,156.4Z\"/>"],
	"lamp-pendant": ["<path d=\"M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208ZM32.33,168A95.79,95.79,0,0,1,91.08,87.35,8,8,0,0,0,96,80V72h64v8a8,8,0,0,0,4.92,7.38A95.79,95.79,0,0,1,223.67,168Z\"/>", "<path d=\"M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208Z\"/>"],
	laptop: ["<path d=\"M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z\"/>", "<path d=\"M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM112,72h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224Z\"/>"],
	lightbulb: ["<path d=\"M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z\"/>", "<path d=\"M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-32.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z\"/>"],
	lightning: ["<path d=\"M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z\"/>", "<path d=\"M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z\"/>"],
	minus: ["<path d=\"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z\"/>", "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z\"/>"],
	monitor: ["<path d=\"M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z\"/>", "<path d=\"M232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64ZM160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z\"/>"],
	moon: ["<path d=\"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z\"/>", "<path d=\"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z\"/>"],
	"moon-stars": ["<path d=\"M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z\"/>", "<path d=\"M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm65.14,94.33A88.07,88.07,0,0,1,105.67,46.86a8,8,0,0,0-10.6-9.06A96,96,0,1,0,218.2,160.93a8,8,0,0,0-9.06-10.6Z\"/>"],
	plant: ["<path d=\"M247.63,47.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,159c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,176,54.58,54.58,0,0,0,87,170.33l25,25V224a8,8,0,0,0,16,0V194.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,141.21,250.67,99.65,247.63,47.89ZM47.81,155.6C32.47,146.31,23.79,124.32,24,96c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,122.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,161.24,55.82,160.45,47.81,155.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,136c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,98.34,220.14,131.44,197.12,145.38Z\"/>", "<path d=\"M205.41,159.07a60.9,60.9,0,0,1-31.83,8.86,71.71,71.71,0,0,1-27.36-5.66A55.55,55.55,0,0,0,136,194.51V224a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.25V211.31L81.38,172.69A52.5,52.5,0,0,1,63.44,176a45.82,45.82,0,0,1-23.92-6.67C17.73,156.09,6,125.62,8.27,87.79a8,8,0,0,1,7.52-7.52c37.83-2.23,68.3,9.46,81.5,31.25A46,46,0,0,1,103.74,140a4,4,0,0,1-6.89,2.43l-19.2-20.1a8,8,0,0,0-11.31,11.31l53.88,55.25c.06-.78.13-1.56.21-2.33a68.56,68.56,0,0,1,18.64-39.46l50.59-53.46a8,8,0,0,0-11.31-11.32l-49,51.82a4,4,0,0,1-6.78-1.74c-4.74-17.48-2.65-34.88,6.4-49.82,17.86-29.48,59.42-45.26,111.18-42.22a8,8,0,0,1,7.52,7.52C250.67,99.65,234.89,141.21,205.41,159.07Z\"/>"],
	plug: ["<path d=\"M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z\"/>", "<path d=\"M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z\"/>"],
	"plug-charging": ["<path d=\"M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-16,0V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16ZM168,184H88a24,24,0,0,1-24-24V72H192v88A24,24,0,0,1,168,184Zm-17.42-60.56a8,8,0,0,1,.91,7.37l-12,32a8,8,0,0,1-15-5.62l8-21.19H112a8,8,0,0,1-7.49-10.81l12-32a8,8,0,1,1,15,5.62l-8,21.19H144A8,8,0,0,1,150.58,123.44Z\"/>", "<path d=\"M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-8-8c-3.21,0-8,2.27-8,8.54V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16Zm-72.51,74.81-12,32a8,8,0,0,1-15-5.62l8-21.19H112a8,8,0,0,1-7.49-10.81l12-32a8,8,0,1,1,15,5.62l-8,21.19H144a8,8,0,0,1,7.49,10.81Z\"/>"],
	plus: ["<path d=\"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z\"/>", "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z\"/>"],
	popcorn: ["<path d=\"M229.52,74.21a8,8,0,0,0-7.13-2A44,44,0,0,0,168,41.67a44,44,0,0,0-80,0,44,44,0,0,0-54.4,30.51,8,8,0,0,0-9.4,9.65L54.76,211.67A16,16,0,0,0,70.34,224H185.66a16,16,0,0,0,15.58-12.33L231.79,81.83A8,8,0,0,0,229.52,74.21ZM76,56a27.68,27.68,0,0,1,13.11,3.26,8,8,0,0,0,11.56-5.34,28,28,0,0,1,54.66,0,8,8,0,0,0,11.56,5.34A28,28,0,0,1,207,76.54l-38.56,11-34.49-13.8a16,16,0,0,0-11.88,0L87.57,87.56,49,76.54A28,28,0,0,1,76,56ZM70.34,208,42.91,91.44l37.85,10.81L94.86,208ZM145,208H111L96.75,101.12,128,88.62l31.25,12.5Zm40.66,0H161.14l14.1-105.75,37.85-10.81Z\"/>", "<path d=\"M229.52,74.21a8,8,0,0,0-7.13-2A44,44,0,0,0,168,41.67a44,44,0,0,0-80,0,44,44,0,0,0-54.4,30.51,8,8,0,0,0-9.4,9.65L54.76,211.67A16,16,0,0,0,70.34,224H185.66a16,16,0,0,0,15.58-12.33L231.79,81.83A8,8,0,0,0,229.52,74.21ZM70.34,208,42.91,91.44l37.85,10.81L94.86,208ZM122.06,73.76,87.57,87.56,49,76.54a28,28,0,0,1,40.1-17.28,8,8,0,0,0,11.56-5.34,28,28,0,0,1,54.66,0,8,8,0,0,0,11.56,5.34A28,28,0,0,1,207,76.54l-38.56,11-34.49-13.8A16,16,0,0,0,122.06,73.76ZM185.66,208H161.14l14.1-105.75,37.85-10.81Z\"/>"],
	"potted-plant": ["<path d=\"M200,144h-76.7l2.35-2.35h0l20.06-20.06a59.55,59.55,0,0,0,26.1,6.36,49.56,49.56,0,0,0,25.89-7.22c23.72-14.36,36.43-47.6,34-88.92a8,8,0,0,0-7.52-7.52c-41.32-2.42-74.56,10.28-88.92,34-9.36,15.45-9.6,34.11-.87,52L120,124.68l-12.21-12.21c6-13.25,5.57-27-1.39-38.48C95.53,56,70.61,46.41,39.73,48.22a8,8,0,0,0-7.51,7.51C30.4,86.6,40,111.52,58,122.4A38.22,38.22,0,0,0,78,128a45,45,0,0,0,18.52-4.19L108.68,136l-8,8H56a8,8,0,0,0,0,16h9.59l13.21,59.47A15.91,15.91,0,0,0,94.42,232h67.17a15.91,15.91,0,0,0,15.62-12.53L190.42,160H200a8,8,0,0,0,0-16ZM149,66.58c10.46-17.26,35.24-27,67-26.57.41,31.81-9.31,56.58-26.57,67-11.51,7-25.4,6.54-39.28-1.18C142.42,92,142,78.09,149,66.58ZM92.11,108.11c-9.2,4.93-18.31,5.16-25.83.6C54.78,101.74,48.15,85.31,48,64c21.31.15,37.75,6.78,44.71,18.28C97.27,89.8,97,98.91,92.11,108.11ZM161.59,216H94.42L82,160H174Z\"/>", "<path d=\"M200,144h-76.7l22.41-22.41a59.55,59.55,0,0,0,26.1,6.36,49.56,49.56,0,0,0,25.89-7.22c23.72-14.36,36.43-47.6,34-88.92a8,8,0,0,0-7.52-7.52c-41.32-2.43-74.56,10.28-88.93,34-9.35,15.45-9.59,34.11-.86,52L120,124.68l-12.21-12.21c6-13.25,5.57-27-1.39-38.48C95.53,56,70.61,46.41,39.73,48.22a8,8,0,0,0-7.51,7.51C30.4,86.6,40,111.52,58,122.4A38.22,38.22,0,0,0,78,128a45,45,0,0,0,18.52-4.19L108.69,136l-8,8H56a8,8,0,0,0,0,16h9.59L78.8,219.47A15.89,15.89,0,0,0,94.42,232h67.17a15.91,15.91,0,0,0,15.62-12.53L190.42,160H200a8,8,0,0,0,0-16Z\"/>"],
	power: ["<path d=\"M120,128V48a8,8,0,0,1,16,0v80a8,8,0,0,1-16,0Zm60.37-78.7a8,8,0,0,0-8.74,13.4C194.74,77.77,208,101.57,208,128a80,80,0,0,1-160,0c0-26.43,13.26-50.23,36.37-65.3a8,8,0,0,0-8.74-13.4C47.9,67.38,32,96.06,32,128a96,96,0,0,0,192,0C224,96.06,208.1,67.38,180.37,49.3Z\"/>", "<path d=\"M128,24A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm-8,40a8,8,0,0,1,16,0v64a8,8,0,0,1-16,0Zm8,144A80,80,0,0,1,83.55,61.48a8,8,0,1,1,8.9,13.29,64,64,0,1,0,71.1,0,8,8,0,1,1,8.9-13.29A80,80,0,0,1,128,208Z\"/>"],
	robot: ["<path d=\"M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z\"/>", "<path d=\"M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48ZM172,96a12,12,0,1,1-12,12A12,12,0,0,1,172,96ZM96,184H80a16,16,0,0,1,0-32H96ZM84,120a12,12,0,1,1,12-12A12,12,0,0,1,84,120Zm60,64H112V152h32Zm32,0H160V152h16a16,16,0,0,1,0,32Z\"/>"],
	"shopping-cart": ["<path d=\"M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z\"/>", "<path d=\"M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Z\"/>"],
	snowflake: ["<path d=\"M223.77,150.09a8,8,0,0,1-5.86,9.68l-24.64,6,6.46,24.11a8,8,0,0,1-5.66,9.8A8.25,8.25,0,0,1,192,200a8,8,0,0,1-7.72-5.93l-7.72-28.8L136,141.86v46.83l21.66,21.65a8,8,0,0,1-11.32,11.32L128,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L120,188.69V141.86L79.45,165.27l-7.72,28.8A8,8,0,0,1,64,200a8.25,8.25,0,0,1-2.08-.27,8,8,0,0,1-5.66-9.8l6.46-24.11-24.64-6a8,8,0,0,1,3.82-15.54l29.45,7.23L112,128,71.36,104.54l-29.45,7.23A7.85,7.85,0,0,1,40,112a8,8,0,0,1-1.91-15.77l24.64-6L56.27,66.07a8,8,0,0,1,15.46-4.14l7.72,28.8L120,114.14V67.31L98.34,45.66a8,8,0,0,1,11.32-11.32L128,52.69l18.34-18.35a8,8,0,0,1,11.32,11.32L136,67.31v46.83l40.55-23.41,7.72-28.8a8,8,0,0,1,15.46,4.14l-6.46,24.11,24.64,6A8,8,0,0,1,216,112a7.85,7.85,0,0,1-1.91-.23l-29.45-7.23L144,128l40.64,23.46,29.45-7.23A8,8,0,0,1,223.77,150.09Z\"/>", "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm42.37,119.22,18.94-6.76a8,8,0,1,1,5.38,15.08l-15.48,5.52,4.52,16.87a8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,176,184a8,8,0,0,1-7.73-5.93l-5.57-20.8L136,141.86v30.83l13.66,13.65a8,8,0,0,1-11.32,11.32L128,187.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L120,172.69V141.86L93.3,157.27l-5.57,20.8A8,8,0,0,1,80,184a8.23,8.23,0,0,1-2.07-.27,8,8,0,0,1-5.66-9.8l4.52-16.87-15.48-5.52a8,8,0,0,1,5.38-15.08l18.94,6.76L112,128,85.63,112.78l-18.94,6.76A8.18,8.18,0,0,1,64,120a8,8,0,0,1-2.69-15.54l15.48-5.52L72.27,82.07a8,8,0,0,1,15.46-4.14l5.57,20.8L120,114.14V83.31L106.34,69.66a8,8,0,0,1,11.32-11.32L128,68.69l10.34-10.35a8,8,0,0,1,11.32,11.32L136,83.31v30.83l26.7-15.41,5.57-20.8a8,8,0,0,1,15.46,4.14l-4.52,16.87,15.48,5.52A8,8,0,0,1,192,120a8.18,8.18,0,0,1-2.69-.46l-18.94-6.76L144,128Z\"/>"],
	sparkle: ["<path d=\"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z\"/>", "<path d=\"M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z\"/>"],
	storefront: ["<path d=\"M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96h0v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm4.93-75.8a8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48v8A24,24,0,0,1,204.93,132.2Z\"/>", "<path d=\"M231.69,93.81,217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.81A7.94,7.94,0,0,0,24,96v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96A7.94,7.94,0,0,0,231.69,93.81ZM88,112a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8H88Zm64,0a24,24,0,0,1-48,0v-8h48Zm64,0a24,24,0,0,1-11.07,20.2,8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48Z\"/>"],
	sun: ["<path d=\"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z\"/>", "<path d=\"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z\"/>"],
	"sun-horizon": ["<path d=\"M240,152H199.55a73.54,73.54,0,0,0,.45-8,72,72,0,0,0-144,0,73.54,73.54,0,0,0,.45,8H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144a56,56,0,1,1,111.41,8H72.59A56.13,56.13,0,0,1,72,144Zm144,56a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200ZM72.84,43.58a8,8,0,0,1,14.32-7.16l8,16a8,8,0,0,1-14.32,7.16Zm-56,48.84a8,8,0,0,1,10.74-3.57l16,8a8,8,0,0,1-7.16,14.31l-16-8A8,8,0,0,1,16.84,92.42Zm192,15.16a8,8,0,0,1,3.58-10.73l16-8a8,8,0,1,1,7.16,14.31l-16,8a8,8,0,0,1-10.74-3.58Zm-48-55.16,8-16a8,8,0,0,1,14.32,7.16l-8,16a8,8,0,1,1-14.32-7.16Z\"/>", "<path d=\"M248,160a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H56.45a73.54,73.54,0,0,1-.45-8,72,72,0,0,1,144,0,73.54,73.54,0,0,1-.45,8H240A8,8,0,0,1,248,160Zm-40,32H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16ZM80.84,59.58a8,8,0,0,0,14.32-7.16l-8-16a8,8,0,0,0-14.32,7.16ZM20.42,103.16l16,8a8,8,0,1,0,7.16-14.31l-16-8a8,8,0,1,0-7.16,14.31ZM216,112a8,8,0,0,0,3.57-.84l16-8a8,8,0,1,0-7.16-14.31l-16,8A8,8,0,0,0,216,112ZM164.42,63.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.32-7.16l-8,16A8,8,0,0,0,164.42,63.16Z\"/>"],
	television: ["<path d=\"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM40,80H144V200H40ZM216,200H160V80h56V200Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z\"/>", "<path d=\"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H160V80h56V200Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z\"/>"],
	"thermometer-simple": ["<path d=\"M136,153V88a8,8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,104,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,128,232Z\"/>", "<path d=\"M160,146.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM128,24a16,16,0,0,1,16,16v64H112V40A16,16,0,0,1,128,24Z\"/>"],
	"washing-machine": ["<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM128,64a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176ZM200,68a12,12,0,1,1-12-12A12,12,0,0,1,200,68Zm-74.34,49.66-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32Zm32-3.32a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32l32-32A8,8,0,0,1,157.66,114.34Z\"/>", "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,184a56,56,0,1,1,56-56A56,56,0,0,1,128,184ZM188,80a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-54.34,29.66-32,32a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,11.32Zm32-3.32a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32l48-48A8,8,0,0,1,165.66,106.34Z\"/>"],
	wind: ["<path d=\"M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z\"/>", "<path d=\"M120,104H24a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,24.27,88H112a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,111.73,72H92.29a4,4,0,0,1-4-4.58A32,32,0,1,1,120,104Zm119.92-2.29a32,32,0,0,0-63.59-2.29,4,4,0,0,0,4,4.58h19.44a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H32.27A8.17,8.17,0,0,0,24,127.47,8,8,0,0,0,32,136H208A32,32,0,0,0,239.92,101.71ZM152,152H40.27A8.17,8.17,0,0,0,32,159.47,8,8,0,0,0,40,168H143.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H124.29a4,4,0,0,0-4,4.58A32,32,0,1,0,152,152Z\"/>"]
};
// src/dashboard/components/Icon.tsx
function N({ name: e, filled: t = !1, size: n = 24 }) {
	return /* @__PURE__ */ (0, o.jsxs)("span", {
		className: "icon",
		"data-filled": t,
		style: {
			width: n,
			height: n
		},
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, o.jsx)("svg", {
			viewBox: "0 0 256 256",
			dangerouslySetInnerHTML: { __html: Ut[e][0] }
		}), /* @__PURE__ */ (0, o.jsx)("svg", {
			viewBox: "0 0 256 256",
			dangerouslySetInnerHTML: { __html: Ut[e][1] }
		})]
	});
}
// src/dashboard/config.ts
var Wt = [
	"home",
	"lights",
	"climate",
	"energy",
	"more"
], Gt = /^[a-z_]+\.[a-z0-9_]+$/, Kt = [
	"rooms",
	"light_groups",
	"scenes",
	"climate",
	"heating_values",
	"consumers",
	"costs",
	"calendars",
	"links"
];
function qt(e) {
	throw Error(`Glisse Dashboard: ${e}`);
}
function Jt(e, t) {
	for (let n of e) typeof n?.entity == "string" && Gt.test(n.entity) || qt(`${t} braucht eine gültige Entität.`);
}
function Yt(e) {
	for (let t of e) t.icon !== void 0 && !(String(t.icon) in Ut) && qt(`Das Icon „${String(t.icon)}“ gibt es nicht.`);
}
function Xt(e) {
	e && typeof e == "object" || qt("Die Konfiguration fehlt."), e.page !== void 0 && !Wt.includes(e.page) && qt(`Die Seite „${String(e.page)}“ gibt es nicht.`);
	for (let t of Kt) e[t] !== void 0 && !Array.isArray(e[t]) && qt(`${t} muss eine Liste sein.`);
	let t = {
		...e,
		rooms: e.rooms ?? [],
		light_groups: e.light_groups ?? [],
		scenes: e.scenes ?? [],
		climate: e.climate ?? [],
		heating_values: e.heating_values ?? [],
		consumers: e.consumers ?? [],
		costs: e.costs ?? [],
		calendars: e.calendars ?? [],
		links: e.links ?? []
	}, n = [...t.rooms, ...t.light_groups.flatMap((e) => e.lights ?? [])];
	return Jt(n, "Jedes Licht"), Jt(t.scenes, "Jede Szene"), Jt(t.climate, "Jedes Thermostat"), Jt(t.consumers.map((e) => ({ entity: e.power })), "Jeder Verbraucher"), Yt([
		...n,
		...t.scenes,
		...t.consumers,
		...t.links
	]), t;
}
// src/dashboard/context.ts
var Zt = (0, a.createContext)(void 0);
function Qt() {
	let e = (0, a.useContext)(Zt);
	if (!e) throw Error("useDashboard needs a DashboardContext provider.");
	return e;
}
// src/dashboard/model.ts
var $t = "–", en = 255, tn = .5, nn = 10, rn = [
	"null",
	"eins",
	"zwei",
	"drei",
	"vier",
	"fünf",
	"sechs",
	"sieben",
	"acht",
	"neun",
	"zehn",
	"elf",
	"zwölf"
], an = (e, t, n) => Math.min(n, Math.max(t, e)), on = (e) => e[0].toUpperCase() + e.slice(1), sn = (e) => rn[e] ?? String(e), cn = (e) => e === void 0 || e === "" ? NaN : Number(e), ln = (e, t) => e.toLocaleString("de-DE", {
	minimumFractionDigits: t,
	maximumFractionDigits: t
});
function un(e, t) {
	let n = e.getHours(), r = n >= 5 && n < 11 ? "Guten Morgen" : n >= 11 && n < 18 ? "Guten Tag" : n >= 18 && n < 22 ? "Guten Abend" : "Gute Nacht";
	return t ? `${r}, ${t}` : r;
}
function dn(e) {
	if (e?.state !== "on") return 0;
	let t = e.attributes.brightness;
	return typeof t == "number" ? an(Math.round(t * 100 / en), 1, 100) : 100;
}
function fn(e, t, n) {
	return n <= 0 ? e : an(Math.round(e + t / n * 100), 0, 100);
}
function pn(e) {
	let t = cn(e);
	return Number.isNaN(t) ? $t : `${ln(t, 1)} °C`;
}
function mn(e) {
	let t = cn(e);
	return Number.isNaN(t) ? $t : t >= 1e3 ? `${ln(t / 1e3, 2)} kW` : `${ln(t, 0)} W`;
}
function hn(e, t) {
	return e === 0 ? "Alles ist dunkel." : e === 1 ? "Ein Raum leuchtet." : e === t ? "Alle Räume leuchten." : `${on(sn(e))} von ${sn(t)} Räumen leuchten.`;
}
function gn(e, t, n, r) {
	let i = [["Drinnen", n], ["draußen", r]].filter(([, e]) => !Number.isNaN(cn(e))).map(([e, t]) => `${e} ${pn(t)}`), a = i.length ? ` ${on(i.join(", "))}.` : "";
	return hn(e, t) + a;
}
var _n = {
	"clear-night": ["Klare Nacht", "moon-stars"],
	sunny: ["Sonnig", "sun"],
	partlycloudy: ["Teils bewölkt", "cloud-sun"],
	cloudy: ["Bewölkt", "cloud"],
	fog: ["Nebel", "cloud-fog"],
	hail: ["Hagel", "cloud-snow"],
	lightning: ["Gewitter", "cloud-lightning"],
	"lightning-rainy": ["Gewitter", "cloud-lightning"],
	pouring: ["Starkregen", "cloud-rain"],
	rainy: ["Regen", "cloud-rain"],
	snowy: ["Schnee", "cloud-snow"],
	"snowy-rainy": ["Schneeregen", "cloud-snow"],
	windy: ["Windig", "wind"],
	"windy-variant": ["Windig", "wind"]
}, vn = (e) => _n[e ?? ""]?.[0] ?? "Keine Wetterdaten", yn = (e) => _n[e ?? ""]?.[1] ?? "cloud";
function bn(e) {
	let t = e.filter((e) => !Number.isNaN(e.watts)), n = Math.max(0, ...t.map((e) => e.watts));
	return [...t].sort((e, t) => t.watts - e.watts).map((e) => ({
		...e,
		share: n > 0 ? e.watts / n : 0
	}));
}
function xn(e, t, n, r) {
	let i = e / tn;
	return an((t > 0 ? Math.floor(i) + 1 : Math.ceil(i) - 1) * tn, n, r);
}
function Sn(e) {
	return !e || e.state === "unavailable" || e.state === "unknown" ? "Nicht verfügbar" : e.state === "off" ? "Aus" : e.attributes.hvac_action === "heating" ? "Heizt" : "Ruht";
}
function Cn(e, t) {
	if (e.length <= t) return e;
	let n = e.length / t;
	return [...Array.from({ length: t }, (t, r) => {
		let i = e.slice(Math.floor(r * n), Math.floor((r + 1) * n));
		return {
			time: i[0].time,
			value: i.reduce((e, t) => e + t.value, 0) / i.length
		};
	}), e[e.length - 1]];
}
function wn(e, t, n) {
	return {
		glow: t > 0 ? e / t : 0,
		day: an(n / nn, 0, 1)
	};
}
// src/dashboard/components/ClimateTile.tsx
var Tn = 700, En = 4e3, Dn = .72, On = 12, kn = .5, An = (e) => Math.min(1, Math.max(0, (e - On) / 14));
function jn({ current: e, target: t }) {
	let n = -216 + An(t ?? On) * Dn * 360;
	return /* @__PURE__ */ (0, o.jsxs)("svg", {
		className: "arc",
		viewBox: "0 0 120 120",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, o.jsx)("circle", {
				className: "arc-track",
				cx: "60",
				cy: "60",
				r: "50",
				pathLength: 1,
				strokeDasharray: `${Dn} 1`,
				transform: "rotate(144 60 60)"
			}),
			/* @__PURE__ */ (0, o.jsx)("circle", {
				className: "arc-value",
				cx: "60",
				cy: "60",
				r: "50",
				pathLength: 1,
				transform: "rotate(144 60 60)",
				strokeDasharray: `${An(e ?? On) * Dn} 1`
			}),
			t !== void 0 && /* @__PURE__ */ (0, o.jsx)("circle", {
				className: "arc-target",
				cx: "110",
				cy: "60",
				r: "5",
				style: { transform: `rotate(${n}deg)` }
			})
		]
	});
}
function Mn({ room: e, index: t }) {
	let { hass: n, run: r, details: i } = Qt(), s = n.states[e.entity], c = s?.attributes.temperature, [l, u] = (0, a.useState)(), d = (0, a.useRef)(void 0), f = (0, a.useRef)(void 0), p = (0, a.useRef)(void 0), m = (0, a.useRef)(void 0), h = !!s && s.state !== "unavailable", g = s?.attributes.hvac_action === "heating", _ = s?.state !== "off", v = l ?? c, y = s?.attributes.current_temperature;
	function b(e) {
		m.current === e && (m.current = void 0, u(void 0));
	}
	function x(t) {
		p.current = void 0, d.current = void 0, clearTimeout(f.current), f.current = setTimeout(() => b(t), En), r("climate", "set_temperature", {
			entity_id: e.entity,
			temperature: t
		}, `Die Temperatur für ${e.name} ließ sich nicht ändern.`).then((e) => {
			e || b(t);
		});
	}
	(0, a.useEffect)(() => {
		p.current === void 0 && (m.current = void 0, u(void 0));
	}, [c]), (0, a.useEffect)(() => () => {
		clearTimeout(d.current), clearTimeout(f.current), p.current !== void 0 && x(p.current);
	}, []);
	function S(e) {
		if (v === void 0) return;
		let t = xn(v, e, s?.attributes.min_temp ?? 5, s?.attributes.max_temp ?? 30);
		m.current = t, p.current = t, u(t), clearTimeout(d.current), d.current = setTimeout(() => x(t), Tn);
	}
	let C = (s?.attributes.hvac_modes)?.find((e) => e !== "off") ?? "heat";
	return /* @__PURE__ */ (0, o.jsxs)("article", {
		className: "tile climate-tile",
		"data-heating": g,
		"data-on": _ && h,
		style: { "--i": t },
		children: [
			/* @__PURE__ */ (0, o.jsxs)("div", {
				className: "climate-head",
				children: [/* @__PURE__ */ (0, o.jsx)("button", {
					type: "button",
					className: "climate-name",
					onClick: () => i(e.entity),
					children: /* @__PURE__ */ (0, o.jsx)("strong", { children: e.name })
				}), /* @__PURE__ */ (0, o.jsxs)("div", {
					className: "climate-state",
					children: [/* @__PURE__ */ (0, o.jsx)("small", { children: Sn(s) }), /* @__PURE__ */ (0, o.jsx)(vt, {
						"aria-label": `Heizung ${e.name}`,
						checked: _ && h,
						disabled: !h,
						onCheckedChange: (t) => void r("climate", "set_hvac_mode", {
							entity_id: e.entity,
							hvac_mode: t ? C : "off"
						}, `${e.name} ließ sich nicht schalten.`)
					})]
				})]
			}),
			/* @__PURE__ */ (0, o.jsxs)("div", {
				className: "dial",
				children: [/* @__PURE__ */ (0, o.jsx)(jn, {
					current: y,
					target: v
				}), /* @__PURE__ */ (0, o.jsxs)("div", {
					className: "dial-value",
					children: [
						g && /* @__PURE__ */ (0, o.jsx)("span", {
							className: "heat-mark",
							children: /* @__PURE__ */ (0, o.jsx)(N, {
								name: "fire",
								filled: !0,
								size: 18
							})
						}),
						/* @__PURE__ */ (0, o.jsxs)("b", { children: [y === void 0 ? "–" : ln(y, 1), /* @__PURE__ */ (0, o.jsx)("sup", { children: "°" })] }),
						/* @__PURE__ */ (0, o.jsx)("small", { children: v === void 0 ? "Kein Ziel" : `Ziel ${ln(v, 1)}°` })
					]
				})]
			}),
			/* @__PURE__ */ (0, o.jsxs)("div", {
				className: "stepper",
				children: [/* @__PURE__ */ (0, o.jsx)("button", {
					type: "button",
					"aria-label": `${e.name} 0,5 Grad kühler`,
					disabled: !h,
					onClick: () => S(-.5),
					children: /* @__PURE__ */ (0, o.jsx)(N, {
						name: "minus",
						size: 20
					})
				}), /* @__PURE__ */ (0, o.jsx)("button", {
					type: "button",
					"aria-label": `${e.name} 0,5 Grad wärmer`,
					disabled: !h,
					onClick: () => S(kn),
					children: /* @__PURE__ */ (0, o.jsx)(N, {
						name: "plus",
						size: 20
					})
				})]
			})
		]
	});
}
// src/dashboard/components/Header.tsx
function Nn({ title: e, subtitle: t }) {
	let n = (0, a.useRef)(null), [r, i] = (0, a.useState)(!1);
	return (0, a.useEffect)(() => {
		if (!n.current || typeof IntersectionObserver > "u") return;
		let e = new IntersectionObserver(([e]) => i(!e.isIntersecting));
		return e.observe(n.current), () => e.disconnect();
	}, []), /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [/* @__PURE__ */ (0, o.jsx)("div", {
		className: "topbar",
		"data-visible": r,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, o.jsx)("span", { children: e })
	}), /* @__PURE__ */ (0, o.jsxs)("header", {
		className: "page-header",
		children: [/* @__PURE__ */ (0, o.jsx)("h1", {
			ref: n,
			children: e
		}), t && /* @__PURE__ */ (0, o.jsx)("p", { children: t })]
	})] });
}
// src/dashboard/components/LineChart.tsx
var Pn = 1e3, Fn = 300;
function In(e) {
	let [t, n, r, i] = [
		Infinity,
		-Infinity,
		Infinity,
		-Infinity
	];
	for (let a of e) for (let { time: e, value: o } of a.points) t = Math.min(t, e), n = Math.max(n, e), r = Math.min(r, o), i = Math.max(i, o);
	if (t === Infinity) return;
	let a = n - t || 1, o = i - r || 1;
	return {
		x: (e) => (e - t) / a * Pn,
		y: (e) => 284 - (e - r) / o * 268,
		minTime: t,
		timeRange: a,
		minValue: r,
		maxValue: i
	};
}
function Ln(e, t) {
	return e.reduce((e, n) => !e || Math.abs(n.time - t) < Math.abs(e.time - t) ? n : e, void 0);
}
function Rn({ series: e, unit: t, digits: n, filled: r = !1, label: i }) {
	let s = (0, a.useMemo)(() => In(e), [e]), [c, l] = (0, a.useState)(), u = (0, a.useRef)(null), d = (0, a.useMemo)(() => e.map((e) => e.points.map((e, t) => `${t ? "L" : "M"}${s?.x(e.time).toFixed(1)} ${s?.y(e.value).toFixed(1)}`).join("")), [e, s]);
	if (!s) return /* @__PURE__ */ (0, o.jsx)("div", {
		className: "chart chart-empty",
		children: "Noch keine Verlaufsdaten."
	});
	function f(e) {
		let t = u.current?.getBoundingClientRect();
		if (!t || !s) return;
		let n = Math.min(1, Math.max(0, (e.clientX - t.left) / t.width));
		l(s.minTime + n * s.timeRange);
	}
	let p = c === void 0 ? [] : e.flatMap((e) => {
		let t = Ln(e.points, c);
		return t ? [{
			name: e.name,
			value: t.value,
			time: t.time
		}] : [];
	}), m = c === void 0 ? 0 : (c - s.minTime) / s.timeRange * 100;
	return /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "chart",
		ref: u,
		role: "img",
		"aria-label": i,
		onPointerDown: f,
		onPointerMove: f,
		onPointerLeave: () => l(void 0),
		onPointerUp: () => l(void 0),
		children: [/* @__PURE__ */ (0, o.jsxs)("svg", {
			viewBox: `0 0 ${Pn} ${Fn}`,
			preserveAspectRatio: "none",
			"aria-hidden": "true",
			children: [r && e[0] && /* @__PURE__ */ (0, o.jsx)("path", {
				className: "chart-area",
				d: `${d[0]}L${Pn} ${Fn}L0 ${Fn}Z`
			}), e.map((e, t) => /* @__PURE__ */ (0, o.jsx)("path", {
				className: "chart-line",
				"data-rank": t,
				d: d[t],
				vectorEffect: "non-scaling-stroke"
			}, e.id))]
		}), c !== void 0 && /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [/* @__PURE__ */ (0, o.jsx)("i", {
			className: "chart-cursor",
			style: { left: `${m}%` }
		}), /* @__PURE__ */ (0, o.jsxs)("div", {
			className: "chart-reading",
			"data-side": m > 60 ? "left" : "right",
			style: { left: `${m}%` },
			children: [/* @__PURE__ */ (0, o.jsx)("time", { children: new Date(p[0]?.time ?? c).toLocaleTimeString("de-DE", {
				hour: "2-digit",
				minute: "2-digit"
			}) }), p.map((r) => /* @__PURE__ */ (0, o.jsxs)("span", { children: [e.length > 1 ? `${r.name} ` : "", /* @__PURE__ */ (0, o.jsxs)("b", { children: [
				ln(r.value, n),
				" ",
				t
			] })] }, r.name))]
		})] })]
	});
}
// src/dashboard/components/ValueGrid.tsx
function zn({ rows: e }) {
	let { hass: t, details: n } = Qt();
	return /* @__PURE__ */ (0, o.jsx)("div", {
		className: "value-grid",
		children: e.map((e) => {
			let r = t.states[e.entity], i = cn(r?.state), a = r?.attributes.unit_of_measurement;
			return /* @__PURE__ */ (0, o.jsxs)("button", {
				type: "button",
				className: "value",
				onClick: () => n(e.entity),
				children: [/* @__PURE__ */ (0, o.jsx)("small", { children: e.name }), /* @__PURE__ */ (0, o.jsxs)("b", { children: [Number.isNaN(i) ? "–" : ln(i, e.digits ?? 2), a ? ` ${a}` : ""] })]
			}, e.entity);
		})
	});
}
// src/dashboard/hooks.ts
var Bn = 6e4, Vn = 5 * Bn, Hn = 14, Un = 600;
function Wn() {
	let [e, t] = (0, a.useState)(() => /* @__PURE__ */ new Date());
	return (0, a.useEffect)(() => {
		let e = setInterval(() => t(/* @__PURE__ */ new Date()), Bn);
		return () => clearInterval(e);
	}, []), e;
}
function Gn(e, t, n, r) {
	let [i, o] = (0, a.useState)({
		value: t,
		failed: !1,
		loading: !0
	});
	return (0, a.useEffect)(() => {
		let t = !0, n = () => e().then((e) => {
			t && o({
				value: e,
				failed: !1,
				loading: !1
			});
		}, () => {
			t && o((e) => ({
				...e,
				failed: !0,
				loading: !1
			}));
		});
		n();
		let i = r ? setInterval(n, r) : void 0;
		return () => {
			t = !1, clearInterval(i);
		};
	}, [n]), i;
}
function Kn(e, t, n) {
	return Gn(async () => {
		let r = (/* @__PURE__ */ new Date(Date.now() - n * 36e5)).toISOString(), i = await e.callWS({
			type: "history/history_during_period",
			start_time: r,
			entity_ids: t,
			minimal_response: !0,
			no_attributes: !0,
			significant_changes_only: !1
		});
		return Object.fromEntries(t.map((e) => [e, Cn((i[e] ?? []).map((e) => ({
			time: e.lu * 1e3,
			value: Number(e.s)
		})).filter((e) => !Number.isNaN(e.value)), Un)]));
	}, {}, `${t.join()}|${n}`, Vn);
}
function qn(e, t) {
	return Gn(async () => {
		let n = /* @__PURE__ */ new Date(), r = new Date(n.getTime() + Hn * 864e5), i = `?start=${encodeURIComponent(n.toISOString())}&end=${encodeURIComponent(r.toISOString())}`, a = await Promise.allSettled(t.map(async (t) => (await e.callApi("GET", `calendars/${t.entity}${i}`)).map((e, n) => {
			let r = e.start?.dateTime ?? e.start?.date ?? "";
			return {
				id: `${t.entity}-${e.uid ?? n}-${r}`,
				calendar: t.name,
				title: e.summary ?? "Termin",
				start: new Date(r),
				allDay: !e.start?.dateTime
			};
		})));
		if (a.every((e) => e.status === "rejected")) throw Error("No calendar could be loaded.");
		return a.flatMap((e) => e.status === "fulfilled" ? [e.value] : []).flat().sort((e, t) => e.start.getTime() - t.start.getTime());
	}, [], t.map((e) => e.entity).join(), 15 * Bn);
}
function Jn(e, t) {
	return Gn(async () => t ? (await e.callWS({
		type: "todo/item/list",
		entity_id: t
	})).items : [], [], `${t}|${t ? e.states[t]?.last_updated ?? "" : ""}`, Bn);
}
// src/dashboard/pages/ClimatePage.tsx
var Yn = 24;
function Xn() {
	let { hass: e, config: t } = Qt(), n = (0, a.useMemo)(() => t.climate.map((e) => e.entity), [t.climate]), r = Kn(e, (0, a.useMemo)(() => t.climate.flatMap((e) => e.sensor ?? []), [t.climate]), Yn), i = (0, a.useMemo)(() => t.climate.flatMap((e) => e.sensor ? [{
		id: e.sensor,
		name: e.name,
		points: r.value[e.sensor] ?? []
	}] : []), [t.climate, r.value]), s = n.filter((t) => Sn(e.states[t]) === "Heizt").length, c = t.inside ? e.states[t.inside]?.state : void 0, l = `${s === 0 ? "Gerade heizt kein Raum" : s === 1 ? "Ein Raum heizt" : `${s} Räume heizen`}. Im Schnitt ${pn(c)}.`;
	return /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [
		/* @__PURE__ */ (0, o.jsx)(Nn, {
			title: "Heizung",
			subtitle: l
		}),
		/* @__PURE__ */ (0, o.jsxs)("section", {
			"aria-label": "Räume",
			children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Räume" }), /* @__PURE__ */ (0, o.jsx)("div", {
				className: "climate-grid",
				children: t.climate.map((e, t) => /* @__PURE__ */ (0, o.jsx)(Mn, {
					room: e,
					index: t
				}, e.entity))
			})]
		}),
		i.length > 0 && /* @__PURE__ */ (0, o.jsxs)("section", {
			"aria-label": "Wärmeverlauf",
			children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Letzte 24 Stunden" }), /* @__PURE__ */ (0, o.jsxs)("div", {
				className: "panel",
				children: [/* @__PURE__ */ (0, o.jsx)(Rn, {
					series: i,
					unit: "°C",
					digits: 1,
					label: "Raumtemperaturen der letzten 24 Stunden"
				}), /* @__PURE__ */ (0, o.jsx)("ul", {
					className: "legend",
					children: i.map((e, t) => /* @__PURE__ */ (0, o.jsx)("li", {
						"data-rank": t,
						children: e.name
					}, e.id))
				})]
			})]
		}),
		t.heating_values.length > 0 && /* @__PURE__ */ (0, o.jsxs)("section", {
			"aria-label": "Heizkosten und Gas",
			children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Heizkosten und Gas" }), /* @__PURE__ */ (0, o.jsx)(zn, { rows: t.heating_values })]
		})
	] });
}
// src/dashboard/components/ConsumerList.tsx
function Zn({ rows: e, ordering: t }) {
	let n = [...e].sort((e, n) => t.indexOf(e.name) - t.indexOf(n.name));
	return /* @__PURE__ */ (0, o.jsx)("ul", {
		className: "consumers",
		style: { "--rows": e.length },
		children: n.map((t) => /* @__PURE__ */ (0, o.jsxs)("li", {
			style: {
				"--rank": e.indexOf(t),
				"--share": t.share
			},
			children: [
				/* @__PURE__ */ (0, o.jsx)("span", { className: "consumer-bar" }),
				/* @__PURE__ */ (0, o.jsx)(N, {
					name: t.icon,
					size: 22
				}),
				/* @__PURE__ */ (0, o.jsx)("span", {
					className: "consumer-name",
					children: t.name
				}),
				/* @__PURE__ */ (0, o.jsx)("span", {
					className: "consumer-value",
					children: t.value
				})
			]
		}, t.name))
	});
}
// src/dashboard/components/RollingNumber.tsx
var Qn = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9
];
function $n({ value: e }) {
	let t = [...e];
	return /* @__PURE__ */ (0, o.jsx)("span", {
		className: "rolling",
		"aria-label": e,
		role: "text",
		children: t.map((e, n) => {
			let r = t.length - n;
			return /\d/.test(e) ? /* @__PURE__ */ (0, o.jsx)("span", {
				className: "rolling-digit",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, o.jsx)("span", {
					style: { transform: `translateY(${-Number(e) * 10}%)` },
					children: Qn.map((e) => /* @__PURE__ */ (0, o.jsx)("span", { children: e }, e))
				})
			}, r) : /* @__PURE__ */ (0, o.jsx)("span", {
				"aria-hidden": "true",
				children: e
			}, r + e);
		})
	});
}
// src/dashboard/pages/EnergyPage.tsx
var er = [
	{
		value: "6",
		label: "6 Std."
	},
	{
		value: "24",
		label: "24 Std."
	},
	{
		value: "168",
		label: "7 Tage"
	}
];
function tr() {
	let { hass: e, config: t } = Qt(), [n, r] = (0, a.useState)("24"), i = (0, a.useMemo)(() => t.power ? [t.power] : [], [t.power]), s = Kn(e, i, Number(n)), c = (0, a.useMemo)(() => i.map((e) => ({
		id: e,
		name: "Gesamt",
		points: s.value[e] ?? []
	})), [i, s.value]), l = t.power ? e.states[t.power]?.state : void 0, u = bn(t.consumers.map((t) => ({
		name: t.name,
		icon: t.icon ?? "plug",
		watts: cn(e.states[t.power]?.state)
	}))), d = u.map((e) => ({
		...e,
		value: mn(e.watts)
	})), f = t.consumers.map((e) => e.name), p = bn(t.consumers.flatMap((t) => t.energy ? [{
		name: t.name,
		icon: t.icon ?? "plug",
		watts: cn(e.states[t.energy]?.state)
	}] : [])).map((e) => ({
		...e,
		value: `${ln(e.watts, 1)} kWh`
	})), m = u[0], h = m && m.watts > 0 ? `${m.name} zieht gerade am meisten.` : "Gerade zieht kein Gerät nennenswert Strom.";
	return /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [
		/* @__PURE__ */ (0, o.jsx)(Nn, {
			title: "Energie",
			subtitle: h
		}),
		/* @__PURE__ */ (0, o.jsxs)("section", {
			className: "panel energy-hero",
			"aria-label": "Aktuelle Leistung",
			children: [/* @__PURE__ */ (0, o.jsxs)("div", {
				className: "energy-head",
				children: [/* @__PURE__ */ (0, o.jsxs)("div", { children: [/* @__PURE__ */ (0, o.jsx)("small", { children: "Jetzt" }), /* @__PURE__ */ (0, o.jsx)("b", {
					className: "hero-number",
					children: /* @__PURE__ */ (0, o.jsx)($n, { value: mn(l) })
				})] }), /* @__PURE__ */ (0, o.jsx)(ft, {
					"aria-label": "Zeitraum",
					items: er,
					value: n,
					onValueChange: r
				})]
			}), /* @__PURE__ */ (0, o.jsx)(Rn, {
				series: c,
				unit: "W",
				digits: 0,
				filled: !0,
				label: "Verlauf der Stromleistung"
			})]
		}),
		/* @__PURE__ */ (0, o.jsxs)("section", {
			"aria-label": "Verbraucher",
			children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Verbraucher jetzt" }), /* @__PURE__ */ (0, o.jsx)("div", {
				className: "panel",
				children: /* @__PURE__ */ (0, o.jsx)(Zn, {
					rows: d,
					ordering: f
				})
			})]
		}),
		t.costs.length > 0 && /* @__PURE__ */ (0, o.jsxs)("section", {
			"aria-label": "Kosten",
			children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Kosten" }), /* @__PURE__ */ (0, o.jsx)(zn, { rows: t.costs })]
		}),
		p.length > 0 && /* @__PURE__ */ (0, o.jsxs)("section", {
			"aria-label": "Energie pro Gerät",
			children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Energie pro Gerät, gesamt" }), /* @__PURE__ */ (0, o.jsx)("div", {
				className: "panel",
				children: /* @__PURE__ */ (0, o.jsx)(Zn, {
					rows: p,
					ordering: f
				})
			})]
		})
	] });
}
// src/dashboard/components/LightTile.tsx
var nr = 8, rr = 480, ir = 3e3, ar = 5, or = 250;
function sr({ name: e, icon: t, status: n, on: r }) {
	return /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [/* @__PURE__ */ (0, o.jsx)("span", {
		className: "tile-icon",
		children: /* @__PURE__ */ (0, o.jsx)(N, {
			name: t,
			filled: r,
			size: 26
		})
	}), /* @__PURE__ */ (0, o.jsxs)("span", {
		className: "tile-text",
		children: [/* @__PURE__ */ (0, o.jsx)("strong", { children: e }), /* @__PURE__ */ (0, o.jsx)("small", { children: n })]
	})] });
}
function cr({ name: e, icon: t, entity: n, entityId: r, index: i, onLevel: s, onToggle: c, onDetails: l }) {
	let u = n?.state === "on" || n?.state === "off", d = dn(n), [f, p] = (0, a.useState)(), [m, h] = (0, a.useState)(!1), g = (0, a.useRef)(void 0), _ = (0, a.useRef)(void 0), v = (0, a.useRef)(void 0), y = (0, a.useRef)(void 0), b = f ?? d, x = b > 0, S = u ? x ? `${b} %` : "Aus" : "Nicht verfügbar";
	(0, a.useEffect)(() => {
		g.current?.dragging || y.current !== void 0 || (p(void 0), clearTimeout(_.current));
	}, [d]), (0, a.useEffect)(() => () => {
		clearTimeout(_.current), clearTimeout(v.current), y.current !== void 0 && s(r, e, y.current);
	}, []);
	function C(t) {
		p(t), clearTimeout(_.current), _.current = setTimeout(() => p(void 0), ir), s(r, e, t);
	}
	function w(e) {
		if (!u || !e.isPrimary || e.button !== 0) return;
		clearTimeout(g.current?.timer);
		let t = e.currentTarget, n = setTimeout(() => {
			g.current = void 0, l(r);
		}, rr);
		g.current = {
			x: e.clientX,
			y: e.clientY,
			start: b,
			width: t.offsetWidth,
			dragging: !1,
			timer: n
		};
	}
	function T(e) {
		let t = g.current;
		if (!t) return;
		let n = e.clientX - t.x, r = e.clientY - t.y;
		if (!t.dragging) {
			if (Math.abs(n) < nr && Math.abs(r) < nr) return;
			if (clearTimeout(t.timer), Math.abs(r) > Math.abs(n)) {
				g.current = void 0;
				return;
			}
			t.dragging = !0, h(!0), e.currentTarget.setPointerCapture(e.pointerId);
		}
		p(fn(t.start, n, t.width));
	}
	function E(t) {
		let n = g.current;
		g.current = void 0, n && (clearTimeout(n.timer), h(!1), n.dragging ? C(fn(n.start, t.clientX - n.x, n.width)) : c(r, e));
	}
	function D() {
		let e = g.current;
		g.current = void 0, e && (clearTimeout(e.timer), e.dragging && (h(!1), p(void 0)));
	}
	function ee(e) {
		let t = Math.min(100, Math.max(0, b + e));
		t !== b && (y.current = t, p(t), clearTimeout(_.current), clearTimeout(v.current), v.current = setTimeout(() => {
			y.current = void 0, C(t);
		}, or));
	}
	function te(t) {
		if (!u) return;
		let n = {
			ArrowRight: ar,
			ArrowUp: ar,
			ArrowLeft: -5,
			ArrowDown: -5
		}[t.key];
		n === void 0 ? t.key === "i" ? l(r) : (t.key === "Enter" || t.key === " ") && (t.preventDefault(), c(r, e)) : (t.preventDefault(), ee(n));
	}
	return /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "tile light-tile",
		role: "slider",
		tabIndex: u ? 0 : -1,
		"aria-label": e,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": b,
		"aria-valuetext": S,
		"aria-disabled": !u,
		"aria-keyshortcuts": "i",
		"data-on": x,
		"data-dragging": m,
		"data-available": u,
		style: {
			"--level": `${b}%`,
			"--i": i
		},
		onPointerDown: w,
		onPointerMove: T,
		onPointerUp: E,
		onPointerCancel: D,
		onKeyDown: te,
		onContextMenu: (e) => e.preventDefault(),
		children: [/* @__PURE__ */ (0, o.jsx)("span", {
			className: "tile-face",
			children: /* @__PURE__ */ (0, o.jsx)(sr, {
				name: e,
				icon: t,
				status: S,
				on: x
			})
		}), /* @__PURE__ */ (0, o.jsx)("span", {
			className: "tile-lit",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, o.jsx)(sr, {
				name: e,
				icon: t,
				status: S,
				on: x
			})
		})]
	});
}
var lr = (0, a.memo)(cr, (e, t) => e.entity === t.entity && e.name === t.name);
// src/dashboard/components/LightGrid.tsx
function ur({ lights: e, firstIndex: t = 0 }) {
	let { hass: n, setLightLevel: r, toggleLight: i, details: a } = Qt();
	return /* @__PURE__ */ (0, o.jsx)("div", {
		className: "tile-grid",
		children: e.map((e, s) => /* @__PURE__ */ (0, o.jsx)(lr, {
			entityId: e.entity,
			name: e.name,
			icon: e.icon ?? "lightbulb",
			entity: n.states[e.entity],
			index: t + s,
			onLevel: r,
			onToggle: i,
			onDetails: a
		}, e.entity))
	});
}
// src/dashboard/components/SceneRail.tsx
var dr = 1600;
function fr({ scenes: e }) {
	let { hass: t, run: n } = Qt(), [r, i] = (0, a.useState)(), s = (0, a.useRef)(void 0);
	(0, a.useEffect)(() => () => clearTimeout(s.current), []);
	async function c(e) {
		await n("scene", "turn_on", { entity_id: e.entity }, `„${e.name}“ ließ sich nicht starten.`) && (i(e.entity), clearTimeout(s.current), s.current = setTimeout(() => i(void 0), dr));
	}
	return /* @__PURE__ */ (0, o.jsx)("div", {
		className: "scene-rail",
		children: e.map((e, n) => {
			let i = t.states[e.entity]?.state, a = r === e.entity;
			return /* @__PURE__ */ (0, o.jsxs)("button", {
				type: "button",
				className: "scene",
				"data-active": a,
				style: { "--i": n },
				disabled: !i || i === "unavailable",
				onClick: () => void c(e),
				children: [/* @__PURE__ */ (0, o.jsx)(N, {
					name: a ? "check" : e.icon ?? "sparkle",
					filled: a,
					size: 24
				}), /* @__PURE__ */ (0, o.jsx)("span", { children: e.name })]
			}, e.entity);
		})
	});
}
// src/dashboard/pages/HomePage.tsx
var pr = 3;
function mr() {
	let { hass: e, config: t, details: n } = Qt(), r = Wn(), i = (t) => t ? e.states[t] : void 0, s = t.rooms.filter((t) => dn(e.states[t.entity]) > 0).length, c = i(t.person)?.attributes.friendly_name, l = i(t.weather), u = i(t.outside)?.state ?? l?.attributes.temperature, d = i(t.inside)?.state, f = i(t.power)?.state, p = (0, a.useMemo)(() => t.power ? [t.power] : [], [t.power]), m = Kn(e, p, pr), h = (0, a.useMemo)(() => p.map((e) => ({
		id: e,
		name: "Strom",
		points: m.value[e] ?? []
	})), [m.value, p]), g = l?.attributes.wind_speed, _ = l?.attributes.humidity;
	return /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [
		/* @__PURE__ */ (0, o.jsx)(Nn, {
			title: un(r, c),
			subtitle: gn(s, t.rooms.length, d, u)
		}),
		/* @__PURE__ */ (0, o.jsxs)("section", {
			className: "bento",
			"aria-label": "Auf einen Blick",
			children: [
				/* @__PURE__ */ (0, o.jsxs)("button", {
					type: "button",
					className: "widget widget-weather",
					onClick: () => t.weather && n(t.weather),
					children: [/* @__PURE__ */ (0, o.jsx)("span", {
						className: "weather-glyph",
						children: /* @__PURE__ */ (0, o.jsx)(N, {
							name: yn(l?.state),
							filled: !0,
							size: 56
						})
					}), /* @__PURE__ */ (0, o.jsxs)("span", {
						className: "widget-main",
						children: [
							/* @__PURE__ */ (0, o.jsx)("b", {
								className: "widget-number",
								children: /* @__PURE__ */ (0, o.jsx)($n, { value: pn(u) })
							}),
							/* @__PURE__ */ (0, o.jsx)("span", { children: vn(l?.state) }),
							/* @__PURE__ */ (0, o.jsxs)("small", { children: [typeof g == "number" ? `Wind ${ln(g, 0)} km/h` : "", typeof _ == "number" ? ` · ${_} % Feuchte` : ""] })
						]
					})]
				}),
				/* @__PURE__ */ (0, o.jsxs)("button", {
					type: "button",
					className: "widget",
					onClick: () => t.inside && n(t.inside),
					children: [/* @__PURE__ */ (0, o.jsxs)("span", {
						className: "widget-label",
						children: [/* @__PURE__ */ (0, o.jsx)(N, {
							name: "thermometer-simple",
							size: 20
						}), "Wohnung"]
					}), /* @__PURE__ */ (0, o.jsx)("b", {
						className: "widget-number",
						children: /* @__PURE__ */ (0, o.jsx)($n, { value: pn(d) })
					})]
				}),
				/* @__PURE__ */ (0, o.jsxs)("button", {
					type: "button",
					className: "widget widget-power",
					onClick: () => t.power && n(t.power),
					children: [
						/* @__PURE__ */ (0, o.jsxs)("span", {
							className: "widget-label",
							children: [/* @__PURE__ */ (0, o.jsx)(N, {
								name: "lightning",
								filled: cn(f) > 0,
								size: 20
							}), "Strom jetzt"]
						}),
						/* @__PURE__ */ (0, o.jsx)("b", {
							className: "widget-number",
							children: /* @__PURE__ */ (0, o.jsx)($n, { value: mn(f) })
						}),
						/* @__PURE__ */ (0, o.jsx)(Rn, {
							series: h,
							unit: "W",
							digits: 0,
							filled: !0,
							label: `Stromleistung der letzten ${pr} Stunden`
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, o.jsxs)("section", {
			"aria-label": "Räume",
			children: [
				/* @__PURE__ */ (0, o.jsx)("h2", { children: "Räume" }),
				/* @__PURE__ */ (0, o.jsx)(ur, { lights: t.rooms }),
				/* @__PURE__ */ (0, o.jsx)("p", {
					className: "hint",
					children: "Ziehen dimmt, Tippen schaltet, Halten öffnet die Details."
				})
			]
		}),
		/* @__PURE__ */ (0, o.jsxs)("section", {
			"aria-label": "Szenen",
			children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Szenen" }), /* @__PURE__ */ (0, o.jsx)(fr, { scenes: t.scenes })]
		})
	] });
}
// src/dashboard/pages/LightsPage.tsx
function hr() {
	let { hass: e, config: t, run: n } = Qt(), r = [{
		title: "Räume",
		lights: t.rooms
	}, ...t.light_groups], i = t.rooms.map((e) => e.entity), a = i.filter((t) => dn(e.states[t]) > 0), s = 0;
	return /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [
		/* @__PURE__ */ (0, o.jsx)(Nn, {
			title: "Licht",
			subtitle: a.length ? `${a.length} von ${i.length} Räumen an` : "Alle Räume sind aus"
		}),
		/* @__PURE__ */ (0, o.jsx)("div", {
			className: "page-actions",
			children: /* @__PURE__ */ (0, o.jsx)(Ze, {
				icon: /* @__PURE__ */ (0, o.jsx)(N, {
					name: "power",
					size: 20
				}),
				disabled: !a.length,
				onClick: () => void n("light", "turn_off", { entity_id: a }, "Die Lichter ließen sich nicht ausschalten."),
				children: "Alle aus"
			})
		}),
		r.map((e) => {
			let t = s;
			return s += e.lights.length, /* @__PURE__ */ (0, o.jsxs)("section", {
				"aria-label": e.title,
				children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: e.title }), /* @__PURE__ */ (0, o.jsx)(ur, {
					lights: e.lights,
					firstIndex: t
				})]
			}, e.title);
		})
	] });
}
// src/dashboard/pages/MorePage.tsx
function gr(e, t) {
	let n = Math.round((new Date(e).setHours(0, 0, 0, 0) - new Date(t).setHours(0, 0, 0, 0)) / 864e5);
	return n === 0 ? "Heute" : n === 1 ? "Morgen" : e.toLocaleDateString("de-DE", {
		weekday: "short",
		day: "numeric",
		month: "short"
	});
}
function _r() {
	let { hass: e, config: t } = Qt(), n = qn(e, t.calendars), r = /* @__PURE__ */ new Date(), i = (e) => e.allDay ? "Ganztägig" : e.start.toLocaleTimeString("de-DE", {
		hour: "2-digit",
		minute: "2-digit"
	});
	return n.failed ? /* @__PURE__ */ (0, o.jsx)("p", {
		className: "empty",
		children: "Die Termine ließen sich nicht laden."
	}) : n.loading ? /* @__PURE__ */ (0, o.jsx)("p", {
		className: "empty",
		children: "Termine werden geladen …"
	}) : n.value.length ? /* @__PURE__ */ (0, o.jsx)("ul", {
		className: "rows",
		children: n.value.slice(0, 6).map((e) => /* @__PURE__ */ (0, o.jsxs)("li", { children: [/* @__PURE__ */ (0, o.jsx)("span", {
			className: "agenda-day",
			children: gr(e.start, r)
		}), /* @__PURE__ */ (0, o.jsxs)("span", {
			className: "row-text",
			children: [/* @__PURE__ */ (0, o.jsx)("strong", { children: e.title }), /* @__PURE__ */ (0, o.jsxs)("small", { children: [
				i(e),
				" · ",
				e.calendar
			] })]
		})] }, e.id))
	}) : /* @__PURE__ */ (0, o.jsx)("p", {
		className: "empty",
		children: "In den nächsten 14 Tagen steht nichts an."
	});
}
function vr() {
	let { hass: e, config: t, run: n } = Qt(), r = Jn(e, t.todo), [i, s] = (0, a.useState)(""), c = r.value.filter((e) => e.status === "needs_action");
	async function l(e) {
		e.preventDefault();
		let r = i.trim();
		r && t.todo && await n("todo", "add_item", {
			entity_id: t.todo,
			item: r
		}, "Der Eintrag ließ sich nicht speichern.") && s("");
	}
	return /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [
		/* @__PURE__ */ (0, o.jsxs)("form", {
			className: "add-row",
			onSubmit: (e) => void l(e),
			children: [/* @__PURE__ */ (0, o.jsx)("input", {
				"aria-label": "Neuer Eintrag",
				placeholder: "Was fehlt?",
				value: i,
				onChange: (e) => s(e.target.value)
			}), /* @__PURE__ */ (0, o.jsx)("button", {
				type: "submit",
				"aria-label": "Eintrag hinzufügen",
				disabled: !i.trim(),
				children: /* @__PURE__ */ (0, o.jsx)(N, {
					name: "plus",
					size: 20
				})
			})]
		}),
		r.failed && /* @__PURE__ */ (0, o.jsx)("p", {
			className: "empty",
			children: "Die Liste ließ sich nicht laden."
		}),
		!r.failed && !r.loading && !c.length && /* @__PURE__ */ (0, o.jsx)("p", {
			className: "empty",
			children: "Die Liste ist leer."
		}),
		/* @__PURE__ */ (0, o.jsx)("ul", {
			className: "rows",
			children: c.map((e) => /* @__PURE__ */ (0, o.jsxs)("li", { children: [/* @__PURE__ */ (0, o.jsx)("button", {
				type: "button",
				className: "check",
				"aria-label": `${e.summary} erledigt`,
				onClick: () => void n("todo", "update_item", {
					entity_id: t.todo,
					item: e.uid,
					status: "completed"
				}, "Der Eintrag ließ sich nicht abhaken.")
			}), /* @__PURE__ */ (0, o.jsx)("span", {
				className: "row-text",
				children: /* @__PURE__ */ (0, o.jsx)("strong", { children: e.summary })
			})] }, e.uid))
		})
	] });
}
function yr(e) {
	let t = e ? new Date(e) : void 0;
	return !t || Number.isNaN(t.getTime()) ? "Keine Sicherung gefunden" : `${gr(t, /* @__PURE__ */ new Date())}, ${t.toLocaleTimeString("de-DE", {
		hour: "2-digit",
		minute: "2-digit"
	})} Uhr`;
}
function br() {
	let { hass: e, config: t, run: n, details: r, navigate: i } = Qt(), a = t.away ? e.states[t.away]?.state : void 0, s = t.vacuum ? e.states[t.vacuum] : void 0, c = !s || s.state === "unavailable" ? "Nicht verfügbar" : {
		docked: "In der Station",
		cleaning: "Reinigt",
		returning: "Fährt zurück",
		paused: "Pausiert",
		idle: "Bereit",
		error: "Braucht Hilfe"
	}[s.state] ?? s.state;
	return /* @__PURE__ */ (0, o.jsxs)("ul", {
		className: "rows",
		children: [
			t.away && /* @__PURE__ */ (0, o.jsxs)("li", { children: [
				/* @__PURE__ */ (0, o.jsx)(N, {
					name: "house",
					size: 24
				}),
				/* @__PURE__ */ (0, o.jsxs)("span", {
					className: "row-text",
					children: [/* @__PURE__ */ (0, o.jsx)("strong", { children: "Abwesenheit" }), /* @__PURE__ */ (0, o.jsx)("small", { children: a === "on" ? "Licht aus, Heizung spart" : "Du bist zu Hause" })]
				}),
				/* @__PURE__ */ (0, o.jsx)(vt, {
					"aria-label": "Abwesenheit",
					checked: a === "on",
					disabled: !a || a === "unavailable",
					onCheckedChange: (e) => void n("input_boolean", e ? "turn_on" : "turn_off", { entity_id: t.away }, "Die Abwesenheit ließ sich nicht schalten.")
				})
			] }),
			t.vacuum && /* @__PURE__ */ (0, o.jsx)("li", { children: /* @__PURE__ */ (0, o.jsxs)("button", {
				type: "button",
				className: "row-button",
				onClick: () => r(t.vacuum),
				children: [/* @__PURE__ */ (0, o.jsx)(N, {
					name: "robot",
					size: 24
				}), /* @__PURE__ */ (0, o.jsxs)("span", {
					className: "row-text",
					children: [/* @__PURE__ */ (0, o.jsx)("strong", { children: "Saugroboter" }), /* @__PURE__ */ (0, o.jsx)("small", { children: c })]
				})]
			}) }),
			t.backup && /* @__PURE__ */ (0, o.jsx)("li", { children: /* @__PURE__ */ (0, o.jsxs)("button", {
				type: "button",
				className: "row-button",
				onClick: () => r(t.backup),
				children: [/* @__PURE__ */ (0, o.jsx)(N, {
					name: "cloud-check",
					size: 24
				}), /* @__PURE__ */ (0, o.jsxs)("span", {
					className: "row-text",
					children: [/* @__PURE__ */ (0, o.jsx)("strong", { children: "Letzte Sicherung" }), /* @__PURE__ */ (0, o.jsx)("small", { children: yr(e.states[t.backup]?.state) })]
				})]
			}) }),
			t.links.map((e) => /* @__PURE__ */ (0, o.jsx)("li", { children: /* @__PURE__ */ (0, o.jsxs)("button", {
				type: "button",
				className: "row-button",
				onClick: () => i(e.path),
				children: [/* @__PURE__ */ (0, o.jsx)(N, {
					name: e.icon ?? "gear",
					size: 24
				}), /* @__PURE__ */ (0, o.jsx)("span", {
					className: "row-text",
					children: /* @__PURE__ */ (0, o.jsx)("strong", { children: e.name })
				})]
			}) }, e.path))
		]
	});
}
function xr() {
	let { config: e } = Qt();
	return /* @__PURE__ */ (0, o.jsxs)(o.Fragment, { children: [/* @__PURE__ */ (0, o.jsx)(Nn, {
		title: "Mehr",
		subtitle: "Termine, Einkauf und alles rund ums Haus."
	}), /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "two-columns",
		children: [
			e.calendars.length > 0 && /* @__PURE__ */ (0, o.jsxs)("section", {
				"aria-label": "Termine",
				children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Termine" }), /* @__PURE__ */ (0, o.jsx)("div", {
					className: "panel",
					children: /* @__PURE__ */ (0, o.jsx)(_r, {})
				})]
			}),
			e.todo && /* @__PURE__ */ (0, o.jsxs)("section", {
				"aria-label": "Einkaufsliste",
				children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Einkaufsliste" }), /* @__PURE__ */ (0, o.jsx)("div", {
					className: "panel",
					children: /* @__PURE__ */ (0, o.jsx)(vr, {})
				})]
			}),
			/* @__PURE__ */ (0, o.jsxs)("section", {
				"aria-label": "Haushalt",
				children: [/* @__PURE__ */ (0, o.jsx)("h2", { children: "Haushalt" }), /* @__PURE__ */ (0, o.jsx)("div", {
					className: "panel",
					children: /* @__PURE__ */ (0, o.jsx)(br, {})
				})]
			})
		]
	})] });
}
// src/dashboard/App.tsx
var Sr = 4e3, Cr = [
	{
		value: "home",
		label: "Zuhause",
		icon: "house"
	},
	{
		value: "lights",
		label: "Licht",
		icon: "lightbulb"
	},
	{
		value: "climate",
		label: "Heizung",
		icon: "thermometer-simple"
	},
	{
		value: "energy",
		label: "Energie",
		icon: "lightning"
	},
	{
		value: "more",
		label: "Mehr",
		icon: "dots-three-circle"
	}
], wr = {
	home: mr,
	lights: hr,
	climate: Xn,
	energy: tr,
	more: xr
};
function Tr(e, t, n) {
	e.dispatchEvent(new CustomEvent(t, {
		detail: n,
		bubbles: !0,
		composed: !0
	}));
}
function Er() {
	let e = window.location.hash.slice(1);
	return Wt.includes(e) ? e : void 0;
}
function Dr({ config: e, hass: t }) {
	let [n, r] = (0, a.useState)(() => Er() ?? e.page ?? "home"), [i, s] = (0, a.useState)("forward"), [c, l] = (0, a.useState)(), u = (0, a.useRef)(null), d = (0, a.useRef)(t), f = (0, a.useRef)(void 0);
	d.current = t, (0, a.useEffect)(() => () => clearTimeout(f.current), []);
	let p = (0, a.useCallback)((e) => {
		l(e), clearTimeout(f.current), f.current = setTimeout(() => l(void 0), Sr);
	}, []), m = (0, a.useCallback)(async (e, t, n, r) => {
		try {
			return await d.current.callService(e, t, n), !0;
		} catch {
			return p(r), !1;
		}
	}, [p]), h = (0, a.useCallback)((e, t, n) => {
		Tr(window, "haptic", "light"), m("light", n === 0 ? "turn_off" : "turn_on", {
			entity_id: e,
			...n === 0 ? {} : { brightness_pct: n }
		}, `${t} ließ sich nicht dimmen.`);
	}, [m]), g = (0, a.useCallback)((e, t) => {
		Tr(window, "haptic", "light");
		let n = d.current.states[e]?.state === "on";
		m("light", n ? "turn_off" : "turn_on", { entity_id: e }, `${t} ließ sich nicht schalten.`);
	}, [m]), _ = (0, a.useCallback)((e) => {
		u.current && Tr(u.current, "hass-more-info", { entityId: e });
	}, []), v = (0, a.useCallback)((e) => {
		window.history.pushState(null, "", e), Tr(window, "location-changed", { replace: !1 });
	}, []), y = (0, a.useMemo)(() => ({
		hass: t,
		config: e,
		run: m,
		setLightLevel: h,
		toggleLight: g,
		details: _,
		navigate: v
	}), [
		t,
		e,
		m,
		h,
		g,
		_,
		v
	]);
	function b(e) {
		e !== n && (s(Wt.indexOf(e) > Wt.indexOf(n) ? "forward" : "back"), r(e), window.history.replaceState(window.history.state, "", `#${e}`), u.current?.scrollIntoView({ block: "start" }));
	}
	let x = e.rooms.filter((e) => dn(t.states[e.entity]) > 0).length, S = e.sun ? t.states[e.sun]?.attributes.elevation ?? 0 : 0, { glow: C, day: w } = wn(x, e.rooms.length, S), T = wr[n], E = Cr.map((e) => ({
		value: e.value,
		label: e.label,
		icon: /* @__PURE__ */ (0, o.jsx)(N, {
			name: e.icon,
			filled: e.value === n,
			size: 24
		})
	}));
	return /* @__PURE__ */ (0, o.jsx)(Zt.Provider, {
		value: y,
		children: /* @__PURE__ */ (0, o.jsxs)("div", {
			className: "app",
			ref: u,
			"data-theme": t.themes?.darkMode ? "dark" : "light",
			children: [
				/* @__PURE__ */ (0, o.jsx)(Vt, {
					glow: C,
					day: w
				}),
				/* @__PURE__ */ (0, o.jsx)("main", {
					className: "page",
					"data-direction": i,
					children: /* @__PURE__ */ (0, o.jsx)(Ht, {
						title: Cr.find((e) => e.value === n).label,
						children: /* @__PURE__ */ (0, o.jsx)(T, {})
					})
				}, n),
				c && /* @__PURE__ */ (0, o.jsx)("div", {
					className: "toast",
					role: "alert",
					children: c
				}),
				/* @__PURE__ */ (0, o.jsxs)("nav", {
					className: "dock",
					"aria-label": "Bereiche",
					children: [/* @__PURE__ */ (0, o.jsx)(yt, {
						"aria-label": "Bereiche",
						items: E,
						value: n,
						onValueChange: (e) => b(e)
					}), e.twin_path && /* @__PURE__ */ (0, o.jsx)(Ze, {
						className: "dock-twin",
						"aria-label": "Wohnung in 3D",
						icon: /* @__PURE__ */ (0, o.jsx)(N, {
							name: "cube",
							size: 24
						}),
						onClick: () => v(e.twin_path)
					})]
				})
			]
		})
	});
}
// src/dashboard/dashboard.css?inline
var Or = ":host{display:block}.app{--bg:#0b0b0d;--label:#f5f5f7;--label-2:#ebebf5ad;--fill-1:#ffffff13;--fill-2:#ffffff24;--stroke:#ffffff12;--lit:#f5f5f7;--on-lit:#111113;--on-lit-2:#111113a8;--shadow:0 18px 40px #00000073;--orb:255, 255, 255;--orb-strength:.17;--spring:cubic-bezier(.22, 1.28, .36, 1);--ease-out:cubic-bezier(.16, 1, .3, 1);--radius:28px;--gap:12px;--lg-on:#aeaeb2;--lg-fill:#f5f5f7;--lg-ring:#fff9;--mdc-icon-size:24px;isolation:isolate;box-sizing:border-box;min-height:100dvh;color:var(--label);background:var(--bg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;flex-direction:column;padding:0 clamp(16px,4vw,40px);font-family:ui-rounded,SF Pro Rounded,-apple-system,BlinkMacSystemFont,system-ui,sans-serif;font-size:16px;line-height:1.4;display:flex;position:relative}.app[data-theme=light]{--bg:#e4e4e8;--label:#1c1c1e;--label-2:#1c1c1eb3;--fill-1:#ffffff80;--fill-2:#00000012;--stroke:#0000000a;--lit:#fff;--on-lit:#1c1c1e;--on-lit-2:#1c1c1ea8;--shadow:0 16px 34px #1e1e2829;--orb-strength:.75;--lg-on:#1c1c1e;--lg-fill:#1c1c1e;--lg-ring:#00000080}*,:before,:after{box-sizing:border-box}h1,h2,p,ul{margin:0;padding:0}ul{list-style:none}button,input{font:inherit;color:inherit}button{cursor:pointer;text-align:start;touch-action:manipulation;background:0 0;border:0;padding:0}button:disabled{cursor:default;opacity:.5}::selection{background:var(--label);color:var(--bg)}:focus-visible{outline:2px solid var(--label);outline-offset:3px}.ambient{z-index:-1;pointer-events:none;background:linear-gradient(180deg, rgba(var(--orb), calc(.04 + var(--day) * .1)), transparent 62%);position:fixed;inset:0;overflow:hidden}.orb{background:radial-gradient(closest-side, rgba(var(--orb), var(--orb-strength)), transparent);width:70vmax;height:70vmax;opacity:calc(.18 + var(--glow) * .82);will-change:transform;border-radius:50%;transition:opacity 1.4s;animation:46s ease-in-out infinite alternate drift;position:absolute}.orb-a{top:-38vmax;left:-22vmax}.orb-b{animation-duration:62s;animation-delay:-18s;top:12vh;right:-36vmax}.orb-c{animation-duration:54s;animation-delay:-30s;bottom:-46vmax;left:12vw}@keyframes drift{0%{transform:translate(-3vmax,-2vmax)scale(1)}to{transform:translate(5vmax,4vmax)scale(1.14)}}.page{width:100%;max-width:1160px;padding:calc(env(safe-area-inset-top) + 28px) 0 40px;animation:page-in .5s var(--ease-out) both;flex:1;margin:0 auto;container-type:inline-size}.page[data-direction=back]{--from:-18px}@keyframes page-in{0%{opacity:0;transform:translate3d(var(--from,18px), 0, 0)}}section{margin-top:30px}h2{letter-spacing:-.012em;margin:0 4px 12px;font-size:21px;font-weight:700;line-height:1.2}.page-header{padding:0 4px}h1{letter-spacing:-.028em;text-wrap:balance;font-size:clamp(32px,7cqw,46px);font-weight:800;line-height:1.08}.page-header p{max-width:34em;color:var(--label-2);text-wrap:pretty;margin-top:8px;font-size:17px}.page-error p{color:var(--label-2);margin-top:8px;font-size:17px}.page-actions{margin-top:16px;display:flex}.hint{color:var(--label-2);margin:12px 4px 0;font-size:14px}.topbar{z-index:3;pointer-events:none;height:0;position:sticky;top:0}.topbar span{height:calc(env(safe-area-inset-top) + 50px);opacity:0;background:color-mix(in srgb, var(--bg) 72%, transparent);-webkit-backdrop-filter:blur(22px)saturate(140%);backdrop-filter:blur(22px)saturate(140%);transition:opacity .24s ease, transform .32s var(--ease-out);place-items:end center;padding-bottom:10px;font-size:16px;font-weight:700;display:grid;position:absolute;inset:0 calc(50% - 50vw) auto;transform:translateY(-6px)}.topbar[data-visible=true] span{opacity:1;transform:none}.icon{flex:none;display:inline-block;position:relative}.icon svg{fill:currentColor;width:100%;height:100%;transition:opacity .26s ease, transform .4s var(--spring), filter .26s ease;position:absolute;inset:0}.icon svg:last-child{opacity:0;filter:blur(2px);transform:scale(.72)}.icon[data-filled=true] svg:first-child{opacity:0;filter:blur(2px);transform:scale(1.1)}.icon[data-filled=true] svg:last-child{opacity:1;filter:none;transform:none}.bento{gap:var(--gap);grid-template-columns:repeat(2,minmax(0,1fr));margin-top:22px;display:grid}.widget,.panel,.value,.scene,.tile{border-radius:var(--radius);background:var(--fill-1);box-shadow:inset 0 0 0 1px var(--stroke)}.widget{min-height:132px;transition:transform .4s var(--spring), background-color .2s ease;flex-direction:column;justify-content:space-between;gap:18px;padding:16px 18px;display:flex;position:relative;overflow:hidden}.widget:active{transform:scale(.975)}.widget-label{color:var(--label-2);align-items:center;gap:6px;font-size:15px;font-weight:600;display:flex}.widget-number{letter-spacing:-.02em;font-size:30px;font-weight:700;line-height:1.05}.widget-weather{flex-direction:row;grid-column:span 2;justify-content:flex-start;align-items:center;gap:18px}.widget-main{gap:2px;font-size:17px;font-weight:600;display:grid}.widget-main .widget-number{font-size:40px}.widget-main small{color:var(--label-2);font-size:14px;font-weight:500}.weather-glyph{animation:7s ease-in-out infinite alternate float;display:grid}@keyframes float{to{transform:translateY(-5px)rotate(-3deg)}}.widget-power{justify-content:flex-start;gap:6px;padding-bottom:54px}.widget-power .chart{pointer-events:none;opacity:.7;height:46px;margin:0;position:absolute;inset:auto 0 0}.widget-power .chart-line{stroke-width:1.5px}@container (width>=720px){.bento{grid-template-columns:repeat(4,minmax(0,1fr))}}.rolling{font-variant-numeric:tabular-nums;white-space:pre;display:inline-flex}.rolling-digit{height:1.05em;line-height:1.05em;display:inline-block;overflow:hidden}.rolling-digit>span{transition:transform .7s var(--spring);flex-direction:column;display:flex}.rolling-digit>span>span{height:1.05em}.tile-grid{gap:var(--gap);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@container (width>=560px){.tile-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@container (width>=860px){.tile-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}.tile{animation:tile-in .55s var(--ease-out) both;animation-delay:calc(var(--i,0) * 26ms);position:relative}@keyframes tile-in{0%{opacity:0;transform:translateY(10px)scale(.97)}}.light-tile{cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;touch-action:pan-y;min-height:132px;transition:transform .45s var(--spring), box-shadow .3s ease;overflow:hidden}.light-tile[data-available=false]{opacity:.55;cursor:default}.light-tile:active{transform:scale(.975)}.light-tile[data-dragging=true]{box-shadow:inset 0 0 0 1px var(--stroke), var(--shadow);transform:scale(1.018)}.tile-face,.tile-lit{flex-direction:column;justify-content:space-between;padding:16px 18px;display:flex;position:absolute;inset:0}.tile-lit{color:var(--on-lit);background:var(--lit);clip-path:inset(0 calc(100% - var(--level)) 0 0);transition:clip-path .6s var(--spring)}.light-tile[data-dragging=true] .tile-lit{transition:none}.tile-text{gap:1px;min-width:0;display:grid}.tile-text strong{overflow-wrap:anywhere;font-size:17px;font-weight:700;line-height:1.25}.tile-text small{color:var(--label-2);font-variant-numeric:tabular-nums;font-size:15px;font-weight:500}.tile-lit .tile-text small{color:var(--on-lit-2)}.scene-rail{scroll-snap-type:x proximity;scrollbar-width:none;-webkit-overflow-scrolling:touch;gap:10px;margin:0 calc(-1*clamp(16px,4vw,40px));padding:2px clamp(16px,4vw,40px) 6px;display:flex;overflow-x:auto}.scene-rail::-webkit-scrollbar{display:none}.scene{white-space:nowrap;scroll-snap-align:start;min-height:52px;transition:transform .4s var(--spring), background-color .3s ease, color .3s ease;animation:tile-in .55s var(--ease-out) both;animation-delay:calc(var(--i,0) * 26ms);border-radius:26px;flex:none;align-items:center;gap:8px;padding:0 20px 0 16px;font-size:16px;font-weight:650;display:inline-flex}.scene:active{transform:scale(.95)}.scene[data-active=true]{background:var(--lit);color:var(--on-lit)}.climate-grid{gap:var(--gap);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@container (width>=860px){.climate-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}.climate-tile{flex-direction:column;gap:6px;padding:14px 16px 16px;display:flex}.climate-head{gap:2px;display:grid}.climate-name{min-width:0}.climate-name strong{overflow-wrap:anywhere;font-size:17px;font-weight:700;line-height:1.25}.climate-state{justify-content:space-between;align-items:center;gap:8px;min-height:44px;display:flex}.climate-state small{color:var(--label-2);font-size:15px;font-weight:500}.climate-state .lg-switch{flex:none}.dial{aspect-ratio:1;width:min(100%,158px);margin:2px auto 0;position:relative}.arc{fill:none;width:100%;height:100%;overflow:visible}.arc-track,.arc-value{stroke-width:7px;stroke-linecap:round}.arc-track{stroke:var(--fill-2)}.arc-value{stroke:var(--label);transition:stroke-dasharray .9s var(--ease-out), opacity .3s ease}.climate-tile[data-on=false] .arc-value{opacity:.35}.arc-target{fill:var(--bg);stroke:var(--label);stroke-width:3px;transform-origin:60px 60px;transition:transform .5s var(--spring)}.dial-value{text-align:center;flex-direction:column;justify-content:center;align-items:center;display:flex;position:absolute;inset:0}.dial-value b{letter-spacing:-.02em;font-variant-numeric:tabular-nums;font-size:32px;font-weight:700;line-height:1.05}.dial-value sup{vertical-align:.55em;font-size:.55em;line-height:0}.dial-value small{color:var(--label-2);font-variant-numeric:tabular-nums;font-size:14px;font-weight:500}.heat-mark{animation:1.8s ease-in-out infinite alternate flicker;display:grid}@keyframes flicker{0%{opacity:.75;transform:translateY(1px)scale(.92)}to{opacity:1;transform:translateY(-2px)scale(1.06)}}.stepper{grid-template-columns:1fr 1fr;gap:8px;display:grid}.stepper button{background:var(--fill-2);min-height:44px;transition:transform .35s var(--spring), background-color .2s ease;border-radius:22px;place-items:center;display:grid}.stepper button:active:not(:disabled){background:var(--lit);color:var(--on-lit);transform:scale(.92)}.panel{padding:16px 18px}.value-grid{gap:var(--gap);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@container (width>=860px){.value-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}.value{min-height:88px;transition:transform .4s var(--spring);border-radius:24px;align-content:space-between;gap:4px;padding:14px 16px;display:grid}.value:active{transform:scale(.975)}.value small{color:var(--label-2);font-size:14px;font-weight:500}.value b{font-variant-numeric:tabular-nums;overflow-wrap:anywhere;font-size:20px;font-weight:700;line-height:1.15}.chart{touch-action:pan-y;height:180px;margin-top:12px;position:relative}.chart svg{width:100%;height:100%;animation:chart-reveal 1.2s var(--ease-out) both;display:block;overflow:visible}@keyframes chart-reveal{0%{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 -2% 0 0)}}.chart-line{fill:none;stroke:var(--label);stroke-width:2px;stroke-linecap:round;stroke-linejoin:round}.chart-area{fill:var(--label);opacity:.08}.chart-line[data-rank=\"1\"]{stroke-opacity:.6}.chart-line[data-rank=\"2\"]{stroke-opacity:.85;stroke-dasharray:7 6}.chart-line[data-rank=\"3\"]{stroke-opacity:.6;stroke-dasharray:1 6}.chart-empty{color:var(--label-2);place-items:center;font-size:15px;display:grid}.chart-cursor{background:var(--label);opacity:.5;width:1px;position:absolute;top:0;bottom:0}.chart-reading{z-index:1;background:var(--lit);color:var(--on-lit);white-space:nowrap;font-variant-numeric:tabular-nums;box-shadow:var(--shadow);pointer-events:none;border-radius:14px;gap:1px;margin-left:10px;padding:8px 12px;font-size:13px;display:grid;position:absolute;top:0}.chart-reading[data-side=left]{transform:translate(calc(-100% - 20px))}.legend{color:var(--label-2);flex-wrap:wrap;gap:6px 16px;margin-top:10px;font-size:14px;display:flex}.legend li{align-items:center;gap:6px;display:flex}.legend li:before{content:\"\";background:var(--label);border-radius:1px;width:18px;height:2px}.legend li[data-rank=\"1\"]:before{opacity:.6}.legend li[data-rank=\"2\"]:before{background:repeating-linear-gradient(90deg, var(--label) 0 5px, transparent 5px 8px)}.legend li[data-rank=\"3\"]:before{opacity:.6;background:repeating-linear-gradient(90deg, var(--label) 0 2px, transparent 2px 5px)}.energy-hero{margin-top:22px}.energy-head{flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:12px;display:flex}.energy-head small{color:var(--label-2);font-size:15px;font-weight:600;display:block}.hero-number{letter-spacing:-.03em;font-size:clamp(44px,10cqw,64px);font-weight:800;line-height:1.05}.consumers{height:calc(var(--rows) * 52px);position:relative}.consumers li{height:46px;transform:translateY(calc(var(--rank) * 52px));transition:transform .7s var(--spring);align-items:center;gap:10px;padding:0 12px;display:flex;position:absolute;inset:0 0 auto}.consumer-bar{z-index:-1;background:var(--fill-2);width:100%;transform:scaleX(max(.02, var(--share)));transform-origin:0;transition:transform .9s var(--ease-out);border-radius:14px;position:absolute;inset:0}.consumer-name{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;font-size:16px;font-weight:600;overflow:hidden}.consumer-value{color:var(--label-2);font-variant-numeric:tabular-nums;font-size:15px;font-weight:600}.two-columns{grid-template-columns:minmax(0,1fr);align-items:start;column-gap:20px;display:grid}@container (width>=860px){.two-columns{grid-template-columns:repeat(2,minmax(0,1fr))}}.rows li{border-top:1px solid var(--fill-2);align-items:center;gap:12px;min-height:56px;display:flex}.rows li:first-child{border-top:0}.row-text{flex:1;min-width:0;display:grid}.row-text strong{overflow-wrap:anywhere;font-size:16px;font-weight:600}.row-text small{color:var(--label-2);font-size:14px}.row-button{flex:1;align-items:center;gap:12px;min-height:56px;display:flex}.agenda-day{width:76px;color:var(--label-2);flex:none;font-size:14px;font-weight:600}.empty{color:var(--label-2);padding:10px 0;font-size:15px}.add-row{gap:8px;margin-bottom:4px;display:flex}.add-row input{background:var(--fill-2);outline-offset:1px;border:0;border-radius:22px;flex:1;min-width:0;min-height:44px;padding:0 16px;font-size:16px}.add-row input::placeholder{color:var(--label-2)}.add-row button{background:var(--lit);width:44px;height:44px;color:var(--on-lit);border-radius:22px;flex:none;place-items:center;display:grid}.check{width:26px;height:26px;box-shadow:inset 0 0 0 2px var(--label-2);border-radius:13px;flex:none;position:relative}.check:after{content:\"\";position:absolute;inset:-9px}.dock{bottom:calc(env(safe-area-inset-bottom) + 12px);z-index:4;justify-content:center;align-items:center;gap:8px;width:min(100%,460px);height:60px;margin:0 auto 12px;display:flex;position:sticky;container-type:inline-size}.dock .lg-tab-bar{--lg-tab-width:clamp(50px, calc((100cqw - 76px) / 5), 72px);flex:none}.dock .lg-tab{min-height:44px}.dock-twin{flex:none}.toast{bottom:calc(env(safe-area-inset-bottom) + 92px);z-index:5;background:var(--lit);max-width:min(100%,420px);color:var(--on-lit);box-shadow:var(--shadow);animation:tile-in .4s var(--spring) both;border-radius:20px;align-self:center;margin-bottom:12px;padding:12px 18px;font-size:15px;font-weight:600;position:sticky}@media (hover:hover){.widget:hover,.value:hover{background:var(--fill-2)}}@media (prefers-reduced-motion:reduce){.page,.tile,.scene,.orb,.weather-glyph,.heat-mark,.chart svg{animation:none}.tile-lit,.rolling-digit>span,.consumers li,.consumer-bar,.arc-value,.arc-target,.icon svg{transition:none}}@media (prefers-reduced-transparency:reduce){.topbar span{-webkit-backdrop-filter:none;backdrop-filter:none;background:var(--bg)}}", kr = "glisse-dashboard-monochrome", Ar = "glisse-mono-dark", jr = "glisse-mono-light", Mr = `
html.${Ar} {
  --primary-color: #f5f5f7 !important; --accent-color: #f5f5f7 !important; --rgb-primary-color: 245, 245, 247 !important;
  --text-primary-color: #111113 !important; --primary-background-color: #0b0b0d !important;
  --secondary-background-color: #161618 !important; --card-background-color: #1c1c1f !important;
  --ha-card-background: #1c1c1f !important; --mdc-theme-primary: #f5f5f7 !important; --divider-color: rgba(255,255,255,.12) !important;
  --primary-text-color: #f5f5f7 !important; --secondary-text-color: rgba(235,235,245,.66) !important;
  --lovelace-background: #0b0b0d !important; --state-icon-color: #f5f5f7 !important;
}
html.${jr} {
  --primary-color: #1c1c1e !important; --accent-color: #1c1c1e !important; --rgb-primary-color: 28, 28, 30 !important;
  --text-primary-color: #ffffff !important; --primary-background-color: #e4e4e8 !important;
  --secondary-background-color: #efeff2 !important; --card-background-color: #ffffff !important;
  --ha-card-background: #ffffff !important; --mdc-theme-primary: #1c1c1e !important; --divider-color: rgba(0,0,0,.1) !important;
  --primary-text-color: #1c1c1e !important; --secondary-text-color: rgba(28,28,30,.66) !important;
  --lovelace-background: #e4e4e8 !important; --state-icon-color: #1c1c1e !important;
}`;
function Nr(e) {
	if (!document.getElementById(kr)) {
		let e = document.createElement("style");
		e.id = kr, e.textContent = Mr, document.head.append(e);
	}
	document.documentElement.classList.toggle(Ar, e), document.documentElement.classList.toggle(jr, !e);
}
function Pr() {
	document.documentElement.classList.remove(Ar, jr);
}
// src/dashboard/element.tsx
var Fr = class extends HTMLElement {
	mount = document.createElement("div");
	root;
	config;
	home;
	constructor() {
		super();
		let e = document.createElement("style");
		e.textContent = `${bt}\n${Or}`, this.attachShadow({ mode: "open" }).append(e, this.mount);
	}
	connectedCallback() {
		this.root ??= (0, Et.createRoot)(this.mount), this.render();
	}
	disconnectedCallback() {
		this.root?.unmount(), this.root = void 0, Pr();
	}
	setConfig(e) {
		this.config = Xt(e), this.render();
	}
	set hass(e) {
		this.home = e, this.render();
	}
	getCardSize() {
		return 12;
	}
	redirect(e) {
		window.history.replaceState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", {
			detail: { replace: !0 },
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		this.config && this.root && (this.config.redirect ? this.redirect(this.config.redirect) : this.home && (Nr(!!this.home.themes?.darkMode), this.root.render(/* @__PURE__ */ (0, o.jsx)(Dr, {
			config: this.config,
			hass: this.home
		}))));
	}
};
customElements.get("glisse-dashboard") || customElements.define("glisse-dashboard", Fr);
// src/glisse-card.tsx
function Ir({ value: e, disabled: t, name: n, change: r }) {
	let [i, s] = (0, a.useState)(), c = (0, a.useRef)(void 0), l = (0, a.useRef)(void 0), u = (0, a.useRef)(!1);
	(0, a.useEffect)(() => () => clearTimeout(c.current), []);
	function d() {
		clearTimeout(c.current);
		let t = l.current;
		l.current = void 0, s(void 0), t !== void 0 && t !== e && r(t);
	}
	function f(e) {
		l.current = e, s(e), clearTimeout(c.current), u.current || (c.current = setTimeout(d, 250));
	}
	return /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "brightness",
		children: [/* @__PURE__ */ (0, o.jsxs)("div", {
			className: "brightness-label",
			children: [/* @__PURE__ */ (0, o.jsx)("span", { children: "Helligkeit" }), /* @__PURE__ */ (0, o.jsxs)("span", { children: [i ?? e, " %"] })]
		}), /* @__PURE__ */ (0, o.jsx)(mt, {
			value: i ?? e,
			disabled: t,
			"aria-label": n + " – Helligkeit",
			"aria-valuetext": (i ?? e) + " Prozent",
			onValueChange: f,
			onPointerDown: () => {
				u.current = !0, clearTimeout(c.current);
			},
			onPointerUp: () => {
				u.current = !1, d();
			},
			onPointerCancel: () => {
				u.current = !1, l.current = void 0, s(void 0);
			},
			onLostPointerCapture: () => {
				u.current = !1, d();
			},
			onBlur: () => {
				u.current = !1, d();
			}
		})]
	});
}
var Lr = class extends HTMLElement {
	mount = document.createElement("div");
	root;
	config;
	home;
	pending = !1;
	failed = !1;
	constructor() {
		super();
		let e = document.createElement("style");
		e.textContent = bt + "\n" + Dt, this.attachShadow({ mode: "open" }).append(e, this.mount);
	}
	connectedCallback() {
		this.root ??= (0, Et.createRoot)(this.mount), this.render();
	}
	disconnectedCallback() {
		this.root?.unmount(), this.root = void 0;
	}
	setConfig(e) {
		if (typeof e?.entity != "string" || !/^(light|switch)\.[a-z0-9_]+$/.test(e.entity)) throw Error("Glisse Card: entity muss eine light.*- oder switch.*-Entität sein.");
		this.config = e, this.failed = !1, this.render();
	}
	set hass(e) {
		this.home = e, this.render();
	}
	getCardSize() {
		return 1;
	}
	async toggle(e) {
		let { config: t, home: n } = this;
		t && n && !this.pending && n.states[t.entity]?.state === (e ? "off" : "on") && await this.send(e ? "turn_on" : "turn_off");
	}
	async send(e, t) {
		let { config: n, home: r } = this;
		if (n && r && !this.pending) {
			this.pending = !0, this.failed = !1, this.render();
			try {
				await r.callService(n.entity.split(".")[0], e, {
					entity_id: n.entity,
					...t === void 0 ? {} : { brightness_pct: t }
				});
			} catch {
				this.config === n && (this.failed = !0);
			} finally {
				this.pending = !1, this.render();
			}
		}
	}
	render() {
		let { config: e, home: t, root: n } = this;
		if (!e || !n) return;
		let r = t?.states[e.entity], i = r?.state, a = i === "on" || i === "off", s = a && e.entity.startsWith("light.") && (typeof r?.attributes.brightness == "number" || r?.attributes.supported_color_modes?.some((e) => !["onoff", "unknown"].includes(e))), c = i === "on" ? Math.round((r?.attributes.brightness ?? 255) * 100 / 255) : 0, l = e.name || r?.attributes.friendly_name || e.entity, u = t ? r ? i === "unavailable" ? "Nicht verfügbar" : i === "on" ? "Ein" : i === "off" ? "Aus" : "Unbekannt" : "Entität fehlt" : "Lädt …";
		n.render(/* @__PURE__ */ (0, o.jsxs)("ha-card", {
			"data-theme": t?.themes?.darkMode ? "dark" : "light",
			"aria-busy": this.pending,
			children: [/* @__PURE__ */ (0, o.jsxs)("div", {
				className: "device-header",
				children: [/* @__PURE__ */ (0, o.jsxs)("div", {
					className: "details",
					children: [
						/* @__PURE__ */ (0, o.jsx)("div", {
							className: "name",
							children: l
						}),
						/* @__PURE__ */ (0, o.jsx)("div", {
							className: "status",
							role: "status",
							children: u
						}),
						this.failed && /* @__PURE__ */ (0, o.jsx)("div", {
							role: "alert",
							children: "Schalten fehlgeschlagen."
						})
					]
				}), a && /* @__PURE__ */ (0, o.jsx)("div", {
					className: "control",
					children: /* @__PURE__ */ (0, o.jsx)(vt, {
						"aria-label": l,
						checked: i === "on",
						disabled: this.pending,
						onCheckedChange: (e) => void this.toggle(e)
					})
				})]
			}), s && /* @__PURE__ */ (0, o.jsx)(Ir, {
				value: c,
				disabled: this.pending,
				name: l,
				change: (e) => void this.send(e === 0 ? "turn_off" : "turn_on", e || void 0)
			}, e.entity)]
		}));
	}
};
customElements.get("glisse-card") || customElements.define("glisse-card", Lr);
