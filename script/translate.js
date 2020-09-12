﻿/* Copyright 2010 Microsoft Corporation */
window['_mstConfig'] = {
    appId: 'Yq1d8syFsyKqNAae2xKMpPM_Plvc9kK5Qhb6LsrY8s0Dy4v2MKKsachM66pCbfmVNyb_jQtOy74nkvWDBeG_-uo97_v3ySFaUBVffMs88_24WUeECC4O-RTtmr7c_XXHf',
    rootURL: 'http\x3a\x2f\x2fwww.microsofttranslator.com\x2f',
    baseURL: 'http\x3a\x2f\x2fwww.microsofttranslator.com\x2fajax\x2fv3\x2fWidgetV3.ashx\x3fsiteData\x3dueOIGRSKkd965FeEGM5JtQ\x2a\x2a',
    serviceURL: 'https\x3a\x2f\x2fapi.microsofttranslator.com\x2fv2\x2fajax.svc',
    imagePath: 'http\x3a\x2f\x2fwww.microsofttranslator.com\x2fstatic\x2f26497291\x2fimg\x2f',
    debug: false,
    locale: 'zh-chs',
    country: '',
    category: '',
    ref: 'WidgetV3CTF',
    service: 'WC3',
    maxChars: 1000000000,
    noAuto: ["facebook.", "youtube."],
    escapeNonAscii: false,
    requestGroup: '',
    preTrans: false,
    OnErrorHandler: '',
    WidgetSiteDomain: ''
};
if (!this.Microsoft) this.Microsoft = {};
if (!this.Microsoft.Translator) this.Microsoft.Translator = {};
if (Microsoft.Translator.Reset) Microsoft.Translator.Reset();
Microsoft.Translator = new function () {
    var H = "8px",
        T = "pointer",
        ib = "2147483647",
        hb = "absolute",
        Ob = "inline-block",
        gb = "direction",
        Nb = "&onerror=",
        Zb = "LanguageMenu",
        R = "hidden",
        Mb = "&amp;__mstto=",
        Lb = "?__mstto=",
        Kb = "ShareTextbox",
        Jb = "ShareHelpText",
        Ib = "ShareHelpLink",
        Hb = "mailto:?charset=utf-8&subject=",
        Gb = "EmailLink",
        Fb = "EmailBody",
        Q = "{1}",
        Eb = "EmailSubject",
        eb = "OriginalLanguageSpan",
        Db = "WidgetLauncher",
        k = 50,
        Cb = ".bing.com/",
        Bb = "http://www",
        Ab = "https://ssl",
        zb = "widget/metrics.js",
        yb = "translator",
        xb = ",translator",
        wb = "this.select()",
        vb = "Microsoft.Translator.OnMouseOutFloater()",
        ub = "onmouseout",
        tb = "stylesheet",
        P = "href",
        sb = "FloaterProgressBar",
        rb = "FloaterSharePanel",
        qb = "WidgetFloaterCollapsed",
        db = "WidgetFloaterPanels",
        pb = "WidgetFloater",
        ob = "onmouseover",
        nb = "Microsoft.Translator.OnMouseOverFloater()",
        B = "block",
        ec = "__mstto=",
        dc = "dragging",
        O = "lang",
        Z = "font",
        y = "img",
        G = "center",
        N = "false",
        F = "left",
        U = "right",
        t = 100,
        Y = "visible",
        x = 255,
        A = "div",
        mb = "position",
        r = 400,
        n = "px",
        g = "Original",
        Yb = "ta",
        cc = "sv",
        q = "es",
        Xb = "sr-latn",
        Wb = "sr-cyrl",
        fb = "ru",
        Vb = "pa",
        M = "pt",
        J = "no",
        bc = "ms",
        Ub = "sw",
        Tb = "it",
        cb = "de",
        h = "fr",
        bb = "nl",
        ac = "zh-cht",
        Sb = "zh-chs",
        lb = "ca",
        m = "ar",
        v = "rtl",
        d = "ltr",
        s = "&",
        X = "TRNS_ERROR_MSG",
        E = "none",
        S = "iframe",
        W = "string",
        f = 16,
        p = true,
        I = "number",
        L = "function",
        V = "undefined",
        ab = "text",
        D = "head",
        kb = "text/javascript",
        e = -1,
        u = "/",
        K = "_mstConfig",
        b = "en",
        o = false,
        Rb = "/static/img/",
        a = "",
        j = null,
        l = this;
    l.AddTranslation = function (i, b, a, j, m, h, c, e, k, l, d, f, g) {
        return new z("AddTranslation", {
            appId: i,
            originalText: b,
            translatedText: a,
            from: j,
            to: m,
            rating: h,
            contentType: c,
            category: e,
            user: k,
            uri: l
        }, d, f, g)
    };
    l.BreakSentences = function (e, f, b, a, c, d) {
        return new z("BreakSentences", {
            appId: e,
            text: f,
            language: b
        }, a, c, d)
    };
    l.Detect = function (d, e, a, b, c) {
        return new z("Detect", {
            appId: d,
            text: e
        }, a, b, c)
    };
    l.DetectArray = function (d, e, a, b, c) {
        return new z("DetectArray", {
            appId: d,
            texts: e
        }, a, b, c)
    };
    l.GetAppIdToken = function (g, c, a, b, d, e, f) {
        return new z("GetAppIdToken", {
            appId: g,
            minRatingRead: c,
            maxRatingWrite: a,
            expireSeconds: b
        }, d, e, f)
    };
    l.GetLanguageNames = function (f, e, a, b, c, d) {
        return new z("GetLanguageNames", {
            appId: f,
            locale: e,
            languageCodes: a
        }, b, c, d)
    };
    l.GetLanguagesForSpeak = function (d, a, b, c) {
        return new z("GetLanguagesForSpeak", {
            appId: d
        }, a, b, c)
    };
    l.GetLanguagesForTranslate = function (d, a, b, c) {
        return new z("GetLanguagesForTranslate", {
            appId: d
        }, a, b, c)
    };
    l.GetTranslations = function (f, h, g, i, a, d, b, c, e) {
        return new z("GetTranslations", {
            appId: f,
            text: h,
            from: g,
            to: i,
            maxTranslations: a,
            options: d
        }, b, c, e)
    };
    l.Translate = function (f, h, g, i, a, c, b, d, e) {
        return new z("Translate", {
            appId: f,
            text: h,
            from: g,
            to: i,
            contentType: a,
            category: c
        }, b, d, e)
    };
    l.AddTranslationArray = function (f, a, g, h, d, b, c, e) {
        return new z("AddTranslationArray", {
            appId: f,
            translations: a,
            from: g,
            to: h,
            options: d
        }, b, c, e)
    };
    l.GetTranslationsArray = function (f, g, h, i, a, d, b, c, e) {
        return new z("GetTranslationsArray", {
            appId: f,
            texts: g,
            from: h,
            to: i,
            maxTranslations: a,
            options: d
        }, b, c, e)
    };
    l.Speak = function (g, h, b, f, d, a, c, e) {
        return new z("Speak", {
            appId: g,
            text: h,
            language: b,
            format: f,
            options: d
        }, a, c, e)
    };
    l.TranslateArray = function (e, f, g, h, c, a, b, d) {
        return new z("TranslateArray", {
            appId: e,
            texts: f,
            from: g,
            to: h,
            options: c
        }, a, b, d)
    };
    l.TranslateArray2 = function (e, f, g, h, c, a, b, d) {
        return new z("TranslateArray2", {
            appId: e,
            texts: f,
            from: g,
            to: h,
            options: c
        }, a, b, d)
    };
    var c = {
        serviceClient: j,
        appId: a,
        lpURL: "http://www.bing.com/translator",
        rootURL: "http://www.microsofttranslator.com/",
        baseURL: "http://www.microsofttranslator.com/Ajax/V2/Toolkit.ashx",
        serviceURL: "http://api.microsofttranslator.com/V2/Ajax.svc",
        imagePath: Rb,
        debug: o,
        locale: b,
        country: a,
        category: a,
        ref: a,
        service: a,
        maxChars: 1e9,
        noAuto: [],
        escapeNonAscii: o,
        requestGroup: a,
        preTrans: o
    };
    c.serviceClient = l;
    if (window[K]) {
        for (var hc in c)
            if (!window[K][hc]) window[K][hc] = c[hc];
        c = window[K]
    } else window[K] = c;
    var Qb = c.serviceClient.LoadScript = new function () {
            function b(f, k) {
                var c = this,
                    b = f.toString().match(/^([^:]*:\/\/[^\/]*)(\/[^\?\#]*)([\?][^#]*)*/);
                if (b) {
                    c.auth = b[1] || a;
                    c.path = b[2] || a;
                    c.query = b[3] || a
                } else {
                    b = k.toString().match(/^([^:]*:\/\/[^\/]*)(\/[^\?\#]*)([\?][^#]*)*/);
                    var h = b[1] || a,
                        i = b[2] || a,
                        d = f.substr(0, 1) == u ? [] : i.split(u);
                    b = f.match(/^([^?]*)([\?][^#]*)*$/);
                    var e = (b[1] || a).split(u),
                        j = b[2] || a;
                    if (d.length > 0 && e.length > 0 && e[0] != ".") d.pop();
                    while (e.length > 0) {
                        var g = e.shift();
                        switch (g) {
                            case ".":
                                break;
                            case "..":
                                if (d.length) d.pop();
                                break;
                            default:
                                d.push(g)
                        }
                    }
                    c.auth = h;
                    c.path = d.join(u);
                    c.query = j
                }
                c.toString = function () {
                    return this.auth + this.path + this.query
                };
                return c
            }
            return function (f, i, a) {
                f = (new b(f, i ? i : new b(c.baseURL))).toString();
                a = a ? a : document;
                var g = encodeURIComponent(f).replace(/%\w\w/g, " ").length;
                if (navigator.userAgent.indexOf("MSIE") > e && g > 2048 || g > 8192) return j;
                var d = a.createElement("script");
                d.type = kb;
                d.charset = "utf-8";
                d.src = f;
                var h = a.getElementsByTagName(D)[0];
                if (h) h.appendChild(d);
                else a.documentElement.insertBefore(d, a.documentElement.firstChild);
                return d
            }
        },
        lc = new function () {
            var b = {
                    1: "Array",
                    2: "Boolean",
                    3: "Date",
                    4: "Function",
                    5: "Number",
                    6: "Object",
                    7: "RegExp",
                    8: "String"
                },
                c = {
                    1: "element",
                    2: "attribute",
                    3: ab,
                    4: "cdata",
                    5: "entityReference",
                    6: "entity",
                    7: "instruction",
                    8: "comment",
                    9: "document",
                    10: "documentType",
                    11: "documentFragment",
                    12: "notation"
                },
                a = {};
            for (var d in b) a[window[b[d]]] = b[d].toLowerCase();
            return function (b) {
                if (b === undefined) return V;
                else if (b === j) return "null";
                else if (typeof b.constructor === L && a[b.constructor]) return a[b.constructor];
                else if (typeof b.nodeType === I && c[b.nodeType]) return c[b.nodeType];
                return typeof b
            }
        },
        gc = new function () {
            var b = j;
            if (navigator.userAgent.toLowerCase().indexOf("msie 6.") > e || navigator.userAgent.toLowerCase().indexOf("webkit") > e && (document.charset || document.characterSet || a).toLowerCase().indexOf("utf") == e) c.escapeNonAscii = p;
            var d = "\\u0000",
                q = '"#%&+:;=?@\\',
                l = ["\\x00-\\x1F", "\\x7F-\\xA0"],
                k = ["\\u02B0-\\u038F", "\\u2000-\\u20FF", "\\u3000-\\u303F"],
                i = {
                    '"': '\\"',
                    "\\": "\\\\"
                },
                g;

            function s() {
                g = new RegExp("[\\s" + q.replace(/./g, function (b) {
                    var a = b.charCodeAt(0).toString(f);
                    return d.substr(0, d.length - a.length) + a
                }) + l.join(a) + (c.escapeNonAscii ? "\\x7B-\\uFFFF" : k.join(a)) + "]", "g");
                g.compile(g.source, "g")
            }

            function r(a) {
                if (i[a]) return i[a];
                if (a.match(/[\s\xA0]/)) return "+";
                var b = a.charCodeAt(0),
                    e = b.toString(f),
                    g = encodeURIComponent(a),
                    h = d.substr(0, d.length - e.length) + e;
                if (g.length < h.length && b > 34 || c.escapeNonAscii && b > 122) return g;
                else return h
            }

            function h(a) {
                return a.toString().replace(g, r)
            }

            function n(a) {
                return '"' + h(a) + '"'
            }

            function o(e) {
                var c = [];
                for (var a = 0; a < e.length; ++a) {
                    var d = gc(e[a]);
                    if (d !== b) c.push(d)
                }
                return "[" + c.join(",") + "]"
            }

            function m(d) {
                var c = [];
                for (var a in d) {
                    var e = gc(d[a]);
                    if (e !== b) c.push('"' + a + '":' + e)
                }
                return "{" + c.join(",") + "}"
            }
            return function (a) {
                s();
                switch (lc(a)) {
                    case V:
                        return b;
                    case "null":
                        return b;
                    case "boolean":
                        return h(a.toString());
                    case I:
                        return h(a.toString());
                    case W:
                        return n(a);
                    case "array":
                        return o(a);
                    default:
                        return m(a)
                }
            }
        },
        z = new function () {
            var h, g = 0,
                d = window,
                f = (document.charset || document.characterSet || a).toLowerCase();
            if (f.indexOf("utf") == e && f.indexOf("unicode") == e) try {
                c.escapeNonAscii = p;
                var b = document.createElement(S);
                b.id = "MstReqFrm";
                b.style.display = E;
                b.translate = o;
                document.documentElement.insertBefore(b, document.documentElement.firstChild);
                b.contentWindow.document.open("text/html", "replace");
                b.contentWindow.document.write('<html><head><meta charset="utf-8"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body></body></html>');
                b.contentWindow.document.close();
                d = b.contentWindow
            } catch (h) {
                if (c.debug);
            }
            return function (x, l, i, q, r) {
                var h = L,
                    e = ++g,
                    n, f, k = o,
                    v = o,
                    u = a,
                    z = d["_mstc" + e] = function (a) {
                        setTimeout(function () {
                            if (v) {
                                m(u);
                                return
                            }
                            if (k) return;
                            setTimeout(w, 0);
                            if (i && typeof i === h) i(a)
                        }, 0)
                    },
                    m = d["_mste" + e] = function (a) {
                        setTimeout(function () {
                            var c = K;
                            if (k) return;
                            setTimeout(w, 0);
                            if (q && typeof q === h) q(a);
                            var b = window[c].OnErrorHandler,
                                d = window[c].WidgetSiteDomain;
                            if (b)
                                if (window == window.top) {
                                    if (window[b] && typeof window[b] == h) window[b](a)
                                } else if (window.parent) window.parent.postMessage(X + a.toString(), d)
                        }, 0)
                    };

                function w() {
                    try {
                        delete d["_mstc" + e]
                    } catch (a) {}
                    try {
                        delete d["_mste" + e]
                    } catch (a) {}
                    try {
                        if (f) f.parentNode.removeChild(f)
                    } catch (a) {}
                    try {
                        if (n) clearTimeout(n)
                    } catch (a) {}
                    k = p
                }
                this.abort = function (b) {
                    v = p;
                    u = "The request has been aborted" + (b ? ": " + b : a)
                };
                var b = [];
                for (var t in l)
                    if (l[t] != j) b.push(t + "=" + gc(l[t]));
                b.push("oncomplete=_mstc" + e);
                b.push("onerror=_mste" + e);
                b.push("loc=" + encodeURIComponent(c.locale));
                b.push("ctr=" + encodeURIComponent(c.country));
                if (c.ref) b.push("ref=" + encodeURIComponent(c.ref));
                b.push("rgp=" + encodeURIComponent(c.requestGroup));
                var y = "./" + x + "?" + b.join(s);
                f = Qb(y, c.serviceURL, d.document);
                if (f) {
                    if (typeof r === I && r > 0) n = setTimeout(function () {
                        m("The request has timed out")
                    }, r)
                } else {
                    if (c.debug);
                    m("The script could not be loaded")
                }
                return this
            }
        },
        kc = {
            af: "Afrikaans",
            ar: "العربية",
            bn: "বাংলা",
            "bs-Latn": "Bosanski (latinica)",
            bg: "Български",
            ca: "Català",
            "zh-CHS": "简体中文",
            "zh-CHT": "繁體中文",
            yue: "Cantonese (Traditional)",
            hr: "Hrvatski",
            cs: "Čeština",
            da: "Dansk",
            nl: "Nederlands",
            en: "English",
            et: "Eesti",
            fj: "Fijian",
            fil: "Filipino",
            fi: "Suomi",
            fr: "Français",
            de: "Deutsch",
            el: "Ελληνικά",
            gu: "ગુજરાતી",
            ht: "Haitian Creole",
            he: "עברית",
            hi: "हिंदी",
            mww: "Hmong Daw",
            hu: "Magyar",
            is: "Íslenska",
            id: "Indonesia",
            ga: "Gaeilge",
            it: "Italiano",
            ja: "日本語",
            kn: "ಕನ್ನಡ",
            kk: "Kazakh",
            sw: "Kiswahili",
            tlh: "Klingon",
            ko: "한국어",
            lv: "Latviešu",
            lt: "Lietuvių",
            mg: "Malagasy",
            ms: "Melayu",
            ml: "മലയാളം",
            mt: "Il-Malti",
            mi: "Māori",
            mr: "मराठी",
            yua: "Yucatec Maya",
            no: "Norsk",
            otq: "Querétaro Otomi",
            fa: "Persian",
            pl: "Polski",
            pt: "Português (Brasil)",
            "pt-PT": "Portuguese (Portugal)",
            pa: "ਪੰਜਾਬੀ",
            ro: "Română",
            ru: "Русский",
            sm: "Samoan",
            "sr-Cyrl": "Srpski (ćirilica)",
            "sr-Latn": "Srpski (latinica)",
            sk: "Slovenčina",
            sl: "Slovenščina",
            es: "Español",
            sv: "Svenska",
            ty: "Tahitian",
            ta: "தமிழ்",
            te: "తెలుగు",
            th: "ไทย",
            to: "Lea fakatonga",
            tr: "Türkçe",
            uk: "Українська",
            ur: "اردو",
            vi: "Tiếng Việt",
            cy: "Welsh"
        },
        fc = {
            af: d,
            ar: v,
            bn: d,
            "bs-latn": d,
            bg: d,
            ca: d,
            "zh-chs": d,
            "zh-cht": d,
            yue: d,
            hr: d,
            cs: d,
            da: d,
            nl: d,
            en: d,
            et: d,
            fj: d,
            fil: d,
            fi: d,
            fr: d,
            de: d,
            el: d,
            gu: d,
            ht: d,
            he: v,
            hi: d,
            mww: d,
            hu: d,
            is: d,
            id: d,
            ga: d,
            it: d,
            ja: d,
            kn: d,
            kk: d,
            sw: d,
            tlh: d,
            "tlh-qaak": d,
            ko: d,
            lv: d,
            lt: d,
            mg: d,
            ms: d,
            ml: d,
            mt: d,
            mi: d,
            mr: d,
            yua: d,
            no: d,
            otq: d,
            fa: v,
            pl: d,
            pt: d,
            "pt-pt": d,
            pa: d,
            ro: d,
            ru: d,
            sm: d,
            "sr-cyrl": d,
            "sr-latn": d,
            sk: d,
            sl: d,
            es: d,
            sv: d,
            ty: d,
            ta: d,
            te: d,
            th: d,
            to: d,
            tr: d,
            uk: d,
            ur: v,
            vi: d,
            cy: d
        },
        jb = {
            "af-na": "af",
            af: "af",
            "af-za": "af",
            "ar-001": m,
            ar: m,
            "ar-ae": m,
            "ar-bh": m,
            "ar-dj": m,
            "ar-dz": m,
            "ar-eg": m,
            "ar-er": m,
            "ar-il": m,
            "ar-iq": m,
            "ar-jo": m,
            "ar-km": m,
            "ar-kw": m,
            "ar-lb": m,
            "ar-ly": m,
            "ar-ma": m,
            "ar-mr": m,
            "ar-om": m,
            "ar-ps": m,
            "ar-qa": m,
            "ar-sa": m,
            "ar-sd": m,
            "ar-so": m,
            "ar-ss": m,
            "ar-sy": m,
            "ar-td": m,
            "ar-tn": m,
            "ar-ye": m,
            "bn-bd": "bn",
            bn: "bn",
            "bn-in": "bn",
            "bs-latn-ba": "bs-latn",
            "bs-latn": "bs-latn",
            "bg-bg": "bg",
            bg: "bg",
            "ca-ad": lb,
            ca: lb,
            "ca-es": lb,
            "ca-es-valencia": lb,
            "ca-fr": lb,
            "ca-it": lb,
            "zh-cn": Sb,
            "zh-chs": Sb,
            "zh-hans-hk": Sb,
            "zh-hans-mo": Sb,
            "zh-sg": Sb,
            "zh-hk": ac,
            "zh-cht": ac,
            "zh-mo": ac,
            "zh-tw": ac,
            "hr-ba": "hr",
            hr: "hr",
            "hr-hr": "hr",
            "cs-cz": "cs",
            cs: "cs",
            "da-dk": "da",
            da: "da",
            "da-gl": "da",
            "nl-aw": bb,
            nl: bb,
            "nl-be": bb,
            "nl-bq": bb,
            "nl-cw": bb,
            "nl-nl": bb,
            "nl-sr": bb,
            "nl-sx": bb,
            "en-001": b,
            en: b,
            "en-029": b,
            "en-150": b,
            "en-ag": b,
            "en-ai": b,
            "en-as": b,
            "en-at": b,
            "en-au": b,
            "en-bb": b,
            "en-be": b,
            "en-bi": b,
            "en-bm": b,
            "en-bs": b,
            "en-bw": b,
            "en-bz": b,
            "en-ca": b,
            "en-cc": b,
            "en-ch": b,
            "en-ck": b,
            "en-cm": b,
            "en-cx": b,
            "en-cy": b,
            "en-de": b,
            "en-dk": b,
            "en-dm": b,
            "en-er": b,
            "en-fi": b,
            "en-fj": b,
            "en-fk": b,
            "en-fm": b,
            "en-gb": b,
            "en-gd": b,
            "en-gg": b,
            "en-gh": b,
            "en-gi": b,
            "en-gm": b,
            "en-gu": b,
            "en-gy": b,
            "en-hk": b,
            "en-id": b,
            "en-ie": b,
            "en-il": b,
            "en-im": b,
            "en-in": b,
            "en-io": b,
            "en-je": b,
            "en-jm": b,
            "en-ke": b,
            "en-ki": b,
            "en-kn": b,
            "en-ky": b,
            "en-lc": b,
            "en-lr": b,
            "en-ls": b,
            "en-mg": b,
            "en-mh": b,
            "en-mo": b,
            "en-mp": b,
            "en-ms": b,
            "en-mt": b,
            "en-mu": b,
            "en-mw": b,
            "en-my": b,
            "en-na": b,
            "en-nf": b,
            "en-ng": b,
            "en-nl": b,
            "en-nr": b,
            "en-nu": b,
            "en-nz": b,
            "en-pg": b,
            "en-ph": b,
            "en-pk": b,
            "en-pn": b,
            "en-pr": b,
            "en-pw": b,
            "en-rw": b,
            "en-sb": b,
            "en-sc": b,
            "en-sd": b,
            "en-se": b,
            "en-sg": b,
            "en-sh": b,
            "en-si": b,
            "en-sl": b,
            "en-ss": b,
            "en-sx": b,
            "en-sz": b,
            "en-tc": b,
            "en-tk": b,
            "en-to": b,
            "en-tt": b,
            "en-tv": b,
            "en-tz": b,
            "en-ug": b,
            "en-um": b,
            "en-us": b,
            "en-vc": b,
            "en-vg": b,
            "en-vi": b,
            "en-vu": b,
            "en-ws": b,
            "en-za": b,
            "en-zm": b,
            "en-zw": b,
            "et-ee": "et",
            et: "et",
            "fil-ph": "fil",
            fil: "fil",
            "fi-fi": "fi",
            fi: "fi",
            "fr-029": h,
            fr: h,
            "fr-be": h,
            "fr-bf": h,
            "fr-bi": h,
            "fr-bj": h,
            "fr-bl": h,
            "fr-ca": h,
            "fr-cd": h,
            "fr-cf": h,
            "fr-cg": h,
            "fr-ch": h,
            "fr-ci": h,
            "fr-cm": h,
            "fr-dj": h,
            "fr-dz": h,
            "fr-fr": h,
            "fr-ga": h,
            "fr-gf": h,
            "fr-gn": h,
            "fr-gp": h,
            "fr-gq": h,
            "fr-ht": h,
            "fr-km": h,
            "fr-lu": h,
            "fr-ma": h,
            "fr-mc": h,
            "fr-mf": h,
            "fr-mg": h,
            "fr-ml": h,
            "fr-mq": h,
            "fr-mr": h,
            "fr-mu": h,
            "fr-nc": h,
            "fr-ne": h,
            "fr-pf": h,
            "fr-pm": h,
            "fr-re": h,
            "fr-rw": h,
            "fr-sc": h,
            "fr-sn": h,
            "fr-sy": h,
            "fr-td": h,
            "fr-tg": h,
            "fr-tn": h,
            "fr-vu": h,
            "fr-wf": h,
            "fr-yt": h,
            "de-at": cb,
            de: cb,
            "de-be": cb,
            "de-ch": cb,
            "de-de": cb,
            "de-it": cb,
            "de-li": cb,
            "de-lu": cb,
            "el-cy": "el",
            el: "el",
            "el-gr": "el",
            "gu-in": "gu",
            gu: "gu",
            "he-il": "he",
            he: "he",
            "hi-in": "hi",
            hi: "hi",
            "hu-hu": "hu",
            hu: "hu",
            "is-is": "is",
            is: "is",
            "id-id": "id",
            id: "id",
            "ga-ie": "ga",
            ga: "ga",
            "it-ch": Tb,
            it: Tb,
            "it-it": Tb,
            "it-sm": Tb,
            "it-va": Tb,
            "ja-jp": "ja",
            ja: "ja",
            "kn-in": "kn",
            kn: "kn",
            "kk-kz": "kk",
            kk: "kk",
            "sw-cd": Ub,
            sw: Ub,
            "sw-ke": Ub,
            "sw-tz": Ub,
            "sw-ug": Ub,
            "ko-kp": "ko",
            ko: "ko",
            "ko-kr": "ko",
            "lv-lv": "lv",
            lv: "lv",
            "lt-lt": "lt",
            lt: "lt",
            "mg-mg": "mg",
            mg: "mg",
            "ms-bn": bc,
            ms: bc,
            "ms-my": bc,
            "ms-sg": bc,
            "ml-in": "ml",
            ml: "ml",
            "mt-mt": "mt",
            mt: "mt",
            "mi-nz": "mi",
            mi: "mi",
            "mr-in": "mr",
            mr: "mr",
            "nb-no": J,
            nb: J,
            no: J,
            "nb-sj": J,
            "nn-no": J,
            nn: J,
            "fa-ir": "fa",
            fa: "fa",
            "pl-pl": "pl",
            pl: "pl",
            "pt-ao": M,
            pt: M,
            "pt-br": M,
            "pt-ch": M,
            "pt-cv": M,
            "pt-gq": M,
            "pt-gw": M,
            "pt-lu": M,
            "pt-mo": M,
            "pt-mz": M,
            "pt-st": M,
            "pt-tl": M,
            "pt-pt": "pt-pt",
            "pa-arab-pk": Vb,
            "pa-arab": Vb,
            pa: Vb,
            "pa-in": Vb,
            "pa-guru": Vb,
            "ro-md": "ro",
            ro: "ro",
            "ro-ro": "ro",
            "ru-by": fb,
            ru: fb,
            "ru-kg": fb,
            "ru-kz": fb,
            "ru-md": fb,
            "ru-ru": fb,
            "ru-ua": fb,
            "sr-cyrl-ba": Wb,
            "sr-cyrl": Wb,
            "sr-cyrl-me": Wb,
            "sr-cyrl-rs": Wb,
            "sr-cyrl-xk": Wb,
            "sr-latn-ba": Xb,
            "sr-latn": Xb,
            "sr-latn-me": Xb,
            "sr-latn-rs": Xb,
            "sr-latn-xk": Xb,
            "sk-sk": "sk",
            sk: "sk",
            "sl-si": "sl",
            sl: "sl",
            "es-419": q,
            es: q,
            "es-ar": q,
            "es-bo": q,
            "es-br": q,
            "es-bz": q,
            "es-cl": q,
            "es-co": q,
            "es-cr": q,
            "es-cu": q,
            "es-do": q,
            "es-ec": q,
            "es-es": q,
            "es-gq": q,
            "es-gt": q,
            "es-hn": q,
            "es-mx": q,
            "es-ni": q,
            "es-pa": q,
            "es-pe": q,
            "es-ph": q,
            "es-pr": q,
            "es-py": q,
            "es-sv": q,
            "es-us": q,
            "es-uy": q,
            "es-ve": q,
            "sv-ax": cc,
            sv: cc,
            "sv-fi": cc,
            "sv-se": cc,
            "ta-in": Yb,
            ta: Yb,
            "ta-lk": Yb,
            "ta-my": Yb,
            "ta-sg": Yb,
            "te-in": "te",
            te: "te",
            "th-th": "th",
            th: "th",
            "to-to": "to",
            to: "to",
            "tr-cy": "tr",
            tr: "tr",
            "tr-tr": "tr",
            "uk-ua": "uk",
            uk: "uk",
            "ur-in": "ur",
            ur: "ur",
            "ur-pk": "ur",
            "vi-vn": "vi",
            vi: "vi",
            "cy-gb": "cy",
            cy: "cy"
        },
        ic = {
            af: g,
            ar: "الأصلي",
            bn: g,
            "bs-latn": g,
            bg: "Първоначален текст",
            ca: g,
            "zh-chs": "原文",
            "zh-cht": "原始語言",
            yue: g,
            hr: g,
            cs: "Původní",
            da: "Oprindelig",
            nl: "Origineel",
            en: g,
            et: "Lähtetekst",
            fj: g,
            fil: g,
            fi: "Alkuperäinen",
            fr: "Langue source",
            de: g,
            el: "Πρωτότυπο",
            gu: g,
            ht: g,
            he: "מקור",
            hi: "मूल",
            mww: g,
            hu: "Eredeti",
            is: g,
            id: "Asli",
            ga: g,
            it: "Originale",
            ja: "翻訳元",
            kn: g,
            kk: g,
            sw: g,
            tlh: g,
            "tlh-qaak": g,
            ko: "원문 언어",
            lv: "Oriģināls",
            lt: "Originalas",
            mg: g,
            ms: g,
            ml: g,
            mt: g,
            mi: g,
            mr: g,
            yua: g,
            no: g,
            otq: g,
            fa: g,
            pl: "Oryginał",
            pt: g,
            "pt-pt": g,
            pa: g,
            ro: g,
            ru: "Исходный текст",
            sm: g,
            "sr-cyrl": g,
            "sr-latn": g,
            sk: "Pôvodný text",
            sl: "Izvirnik",
            es: g,
            sv: g,
            ty: g,
            ta: g,
            te: g,
            th: "ต้นฉบับ",
            to: g,
            tr: g,
            uk: "Оригінал",
            ur: g,
            vi: "Bản gốc",
            cy: g
        };
    window["localizedLangs"] = kc;
    window["languageDirs"] = fc;
    window["languageMappings"] = jb;
    window["localizedOriginal"] = ic;
    var i = new function () {
        var t = "100%",
            k = "0px",
            h = n,
            m = o,
            g = "0",
            b = this,
            z = [66, 77, 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            l = [],
            v = [{
                a: "A",
                l: 26
            }, {
                a: "a",
                l: 26
            }, {
                a: g,
                l: 10
            }, {
                a: "+",
                l: 1
            }, {
                a: u,
                l: 1
            }];
        for (var s = 0; s < v.length; ++s)
            for (var w = 0; w < v[s].l; ++w) l.push(String.fromCharCode(v[s].a.charCodeAt(0) + w));
        b.addEvent = function (a, c, d, e) {
            var b = function () {
                return d(a, e)
            };
            if (a.addEventListener) a.addEventListener(c, b, m);
            else if (a.attachEvent) a.attachEvent("on" + c, b);
            return b
        };
        b.removeEvent = function (a, c, b) {
            if (a.removeEventListener) a.removeEventListener(c, b, m);
            else if (a.detachEvent) a.detachEvent("on" + c, b)
        };
        var d = b.getStyleValue = function (c, b) {
                if (c.style[b]) return c.style[b];
                if (c.currentStyle) return !c.currentStyle[b] ? a : c.currentStyle[b];
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    b = b.replace(/([A-Z])/g, "-$1").toLowerCase();
                    var d = document.defaultView.getComputedStyle(c, a);
                    return d && d.getPropertyValue(b)
                }
                return a
            },
            M = b.fixIEQuirks = function (a) {
                if (a.tagName.toLowerCase() === "select") return;
                var f = d(a, "width");
                if (f && f.indexOf(h) > e) a.style.width = parseInt(f) + parseInt(g + d(a, "borderLeftWidth")) + parseInt(g + d(a, "borderRightWidth")) + parseInt(g + d(a, "paddingLeft")) + parseInt(g + d(a, "paddingRight")) + h;
                var c = d(a, "height");
                if (c && c.indexOf(h) > e) a.style.height = parseInt(c) + parseInt(g + d(a, "borderTopWidth")) + parseInt(g + d(a, "borderBottomWidth")) + parseInt(g + d(a, "paddingTop")) + parseInt(g + d(a, "paddingBottom")) + h;
                for (var b = 0; b < a.childNodes.length; ++b)
                    if (a.childNodes[b].nodeType === 1) M(a.childNodes[b])
            };
        b.absXPos = function (a) {
            if (a.getBoundingClientRect) return a.getBoundingClientRect().left + (Math.max(a.ownerDocument.documentElement.scrollLeft, a.ownerDocument.body.scrollLeft) - Math.max(a.ownerDocument.documentElement.clientLeft, a.ownerDocument.documentElement.offsetLeft));
            else return B(a) + C(a)
        };

        function B(a) {
            return a.offsetLeft + (a.offsetParent && a.offsetParent.nodeType == 1 ? B(a.offsetParent) : 0)
        }

        function C(a) {
            return (a.parentNode && a.parentNode.nodeType == 1 ? C(a.parentNode) : 0) + (a.nodeName.toLowerCase() != "html" && a.nodeName.toLowerCase() != "body" && a.scrollLeft ? -a.scrollLeft : 0)
        }
        b.absYPos = function (a) {
            if (a.getBoundingClientRect) return a.getBoundingClientRect().top + (Math.max(a.ownerDocument.documentElement.scrollTop, a.ownerDocument.body.scrollTop) - Math.max(a.ownerDocument.documentElement.clientTop, a.ownerDocument.documentElement.offsetTop));
            else return D(a) + F(a)
        };

        function D(a) {
            return a.offsetTop + (a.offsetParent && a.offsetParent.nodeType == 1 ? D(a.offsetParent) : 0)
        }

        function F(a) {
            return (a.parentNode && a.parentNode.nodeType == 1 ? F(a.parentNode) : 0) + (a.nodeName.toLowerCase() != "html" && a.nodeName.toLowerCase() != "body" && a.scrollTop ? -a.scrollTop : 0)
        }
        b.getVisibleWidth = function (b) {
            var a = r;
            if (window.innerWidth && window.innerWidth > a) a = window.innerWidth;
            else if (b.documentElement.clientWidth && b.documentElement.clientWidth > a) a = b.documentElement.clientWidth;
            else if (b.body.clientWidth && b.body.clientWidth > a) a = b.body.clientWidth;
            return a
        };
        b.getVisibleHeight = function (a) {
            return L(a) ? a.body.clientHeight : a.documentElement.clientHeight
        };
        b.getStringByteCount = function (a) {
            return c.escapeNonAscii ? encodeURIComponent(a).length : encodeURIComponent(a).replace(/%\w\w/g, " ").length
        };
        var J = b.getBlockParent = function (a) {
                var b = a._display = a._display || i.getStyleValue(a, "display"),
                    c = a._position = a._position || i.getStyleValue(a, mb);
                return b && b.toLowerCase() == "inline" && c.toLowerCase() == "static" && a.parentNode && a.parentNode.nodeType == 1 ? J(a.parentNode) : a
            },
            L = b.isQuirksMode = function (a) {
                if (a.compatMode && a.compatMode.indexOf("CSS") != e) return m;
                else return p
            },
            G = b.isInternetExplorer11OrHigher = function () {
                var a = m;
                if (navigator.appName == "Netscape") {
                    var c = navigator.userAgent,
                        b = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
                    if (b.exec(c) != j) {
                        rv = parseFloat(RegExp.$1);
                        if (rv >= 11) a = p
                    }
                }
                return a
            },
            O = b.isInternetExplorerAnyVersion = function () {
                var a = y(),
                    b = G();
                return a || b
            },
            y = b.isInternetExplorer = function () {
                return window.navigator.userAgent.toUpperCase().indexOf("MSIE") > e
            };
        b.setGradient = function (a, b, c, d) {
            if (!d) d = a.offsetHeight;
            if (a._mstGradCol1 != b.toString() || a._mstGradCol2 != c.toString()) {
                if (a._mstGradElem && a._mstGradElem.parentNode == a) a.removeChild(a._mstGradElem);
                if (b.toString() == c.toString()) a.style.backgroundColor = "#" + b.toString();
                else if (y() && (!document.documentMode || document.documentMode < 8)) I(a, b, c, d);
                else {
                    a.style.backgroundRepeat = "repeat-x";
                    a.style.backgroundImage = "url('data:image/x-ms-bmp;base64," + K(H(b, c, d)) + "')"
                }
                a._mstGradCol1 = b.toString();
                a._mstGradCol2 = c.toString()
            }
        };

        function I(a, b, c, f) {
            var e = ",endColorStr=#FF",
                d = "progid:DXImageTransform.Microsoft.Gradient(startColorStr=#FF";
            a._mstGradElem = document.createElement(A);
            a._mstGradElem.style.fontSize = k;
            a._mstGradElem.style.width = t;
            a._mstGradElem.style.height = f + h;
            a._mstGradElem.style.marginBottom = "-" + a._mstGradElem.style.height;
            a.insertBefore(a._mstGradElem, a.firstChild);
            a._mstGradElem.appendChild(document.createElement(A));
            a._mstGradElem.appendChild(document.createElement(A));
            a._mstGradElem.firstChild.style.width = a._mstGradElem.lastChild.style.width = t;
            a._mstGradElem.firstChild.style.height = a._mstGradElem.lastChild.style.height = f / 2 + h;
            a._mstGradElem.firstChild.style.fontSize = a._mstGradElem.lastChild.style.fontSize = k;
            a._mstGradElem.firstChild.style.filter = d + c + e + c.interpolate(b, .5) + ")";
            a._mstGradElem.lastChild.style.filter = d + b + e + b.interpolate(c, .5) + ")"
        }

        function H(f, g, c) {
            var e = 1 * c,
                a = [];
            for (var b = 0; b < z.length; ++b) a.push(z[b]);
            q(a, 2, 54 + e * 4);
            q(a, 18, 1);
            q(a, 22, c);
            q(a, 34, e * 4);
            for (var b = 0; b < c; ++b) {
                var d = b < c / 2 ? f.interpolate(g, .5 - b / c) : f.interpolate(g, b / c);
                a.push(d.b);
                a.push(d.g);
                a.push(d.r);
                a.push(x)
            }
            return a
        }

        function q(a, b, c) {
            a.splice(b, 1, c & x);
            a.splice(b + 1, 1, c >>> 8 & x);
            a.splice(b + 2, 1, c >>> f & x);
            a.splice(b + 3, 1, c >>> 24 & x)
        }
        b.applyProtectiveCss = function (a) {
            var d = "content-box",
                c = "normal",
                b = E;
            a.style.backgroundAttachment = "scroll";
            a.style.backgroundColor = "Transparent";
            a.style.backgroundImage = b;
            a.style.color = "White";
            a.style.fontStyle = c;
            a.style.fontVariant = c;
            a.style.fontWeight = c;
            a.style.letterSpacing = c;
            a.style.lineHeight = c;
            a.style.margin = k;
            a.style.outline = b;
            a.style.overflow = Y;
            a.style.padding = k;
            a.style.verticalAlign = "baseline";
            a.style.wordSpacing = c;
            a.style.fontFamily = '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif';
            try {
                a.style.fontSize = "inherit"
            } catch (e) {
                a.style.fontSize = t
            }
            a.style.textTransform = b;
            a.style.textDecoration = b;
            a.style.border = k;
            a.style.boxSizing = d;
            a.style.MozBoxSizing = d;
            a.style.float = b;
            a.style.maxWidth = b
        };

        function K(c) {
            var e = 1048576,
                d = [];
            while (c.length) {
                var b = [];
                b.push(c.shift());
                d.push(l[b[0] >> 2 & 63]);
                b.push(c.length > 0 ? c.shift() : e);
                b.push(c.length > 0 ? c.shift() : e);
                d.push(l[(b[0] << 4 | b[1] >>> 4) & 63]);
                d.push(b[1] == e ? "=" : l[(b[1] << 2 | b[2] >>> 6) & 63]);
                d.push(b[2] == e ? "=" : l[b[2] & 63])
            }
            return d.join(a)
        }
        var N = b.clone = function (a) {
            var c = {};
            for (var b in a)
                if (typeof a[b] === "object" && a !== j) c[b] = this.clone(a);
                else c[b] = a[b];
            return c
        };
        b.compress = function (i) {
            var d = {},
                g = 0,
                h = 0,
                b = a,
                c, e, f = [];
            while (c = i.charAt(h++)) {
                d[c] = c.charCodeAt(0);
                e = b + c;
                if (d[e]) b = e;
                else {
                    d[e] = --g;
                    f.push(d[b]);
                    b = c
                }
            }
            if (b) f.push(d[b]);
            return f
        };
        b.decompress = function (f) {
            var d = {},
                e = 0,
                g = 0,
                c = String.fromCharCode(f[g++]),
                a, b, h = c;
            while (a = f[g++]) {
                if (a > 0) d[a] = String.fromCharCode(a);
                if (d[a]) b = d[a];
                else if (a + 1 == e) b = c + c.charAt(0);
                else throw "Invalid input data";
                h += b;
                d[--e] = c + b.charAt(0);
                c = b
            }
            return h
        };
        return b
    };

    function C(e, d, c) {
        var a = this;
        a.r = e;
        a.g = d;
        a.b = c;
        for (var b in a) a[b] = a[b] > x ? x : a[b] < 0 ? 0 : a[b];
        a.toString = function () {
            var c = "0" + this.r.toString(f),
                b = "0" + this.g.toString(f),
                a = "0" + this.b.toString(f);
            return (c.substr(c.length - 2) + b.substr(b.length - 2) + a.substr(a.length - 2)).toUpperCase()
        };
        a.interpolate = function (b, c) {
            var a = this;
            if (a.toString() == b.toString()) return new C(a.r, a.g, a.b);
            return new C(Math.round(a.r + c * (b.r - a.r)), Math.round(a.g + c * (b.g - a.g)), Math.round(a.b + c * (b.b - a.b)))
        };
        return a
    }
    C.parse = function (a) {
        var b = a.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/i);
        if (b) return new C(parseInt(b[1], 10), parseInt(b[2], 10), parseInt(b[3], 10));
        a = a.split(" ")[0];
        if (a.substr(0, 1) == "#") {
            if (a.length == 4) return new C(f * parseInt(a.substr(1, 1), f), f * parseInt(a.substr(2, 1), f), f * parseInt(a.substr(3, 1), f));
            else if (a.length == 7) return new C(parseInt(a.substr(1, 2), f), parseInt(a.substr(3, 2), f), parseInt(a.substr(5, 2), f))
        } else if (C.nameTable[a.toLowerCase()]) return C.parse(C.nameTable[a.toLowerCase()]);
        else throw "Color format not suported: " + a;
    };
    C.nameTable = {
        Black: "#000000",
        Navy: "#000080",
        DarkBlue: "#00008B",
        MediumBlue: "#0000CD",
        Blue: "#0000FF",
        DarkGreen: "#006400",
        Green: "#008000",
        Teal: "#008080",
        DarkCyan: "#008B8B",
        DeepSkyBlue: "#00BFFF",
        DarkTurquoise: "#00CED1",
        MediumSpringGreen: "#00FA9A",
        Lime: "#00FF00",
        SpringGreen: "#00FF7F",
        Aqua: "#00FFFF",
        Cyan: "#00FFFF",
        MidnightBlue: "#191970",
        DodgerBlue: "#1E90FF",
        LightSeaGreen: "#20B2AA",
        ForestGreen: "#228B22",
        SeaGreen: "#2E8B57",
        DarkSlateGray: "#2F4F4F",
        LimeGreen: "#32CD32",
        MediumSeaGreen: "#3CB371",
        Turquoise: "#40E0D0",
        RoyalBlue: "#4169E1",
        SteelBlue: "#4682B4",
        DarkSlateBlue: "#483D8B",
        MediumTurquoise: "#48D1CC",
        "Indigo ": "#4B0082",
        DarkOliveGreen: "#556B2F",
        CadetBlue: "#5F9EA0",
        CornflowerBlue: "#6495ED",
        MediumAquaMarine: "#66CDAA",
        DimGray: "#696969",
        SlateBlue: "#6A5ACD",
        OliveDrab: "#6B8E23",
        SlateGray: "#708090",
        LightSlateGray: "#778899",
        MediumSlateBlue: "#7B68EE",
        LawnGreen: "#7CFC00",
        Chartreuse: "#7FFF00",
        Aquamarine: "#7FFFD4",
        Maroon: "#800000",
        Purple: "#800080",
        Olive: "#808000",
        Gray: "#808080",
        SkyBlue: "#87CEEB",
        LightSkyBlue: "#87CEFA",
        BlueViolet: "#8A2BE2",
        DarkRed: "#8B0000",
        DarkMagenta: "#8B008B",
        SaddleBrown: "#8B4513",
        DarkSeaGreen: "#8FBC8F",
        LightGreen: "#90EE90",
        MediumPurple: "#9370D8",
        DarkViolet: "#9400D3",
        PaleGreen: "#98FB98",
        DarkOrchid: "#9932CC",
        YellowGreen: "#9ACD32",
        Sienna: "#A0522D",
        Brown: "#A52A2A",
        DarkGray: "#A9A9A9",
        LightBlue: "#ADD8E6",
        GreenYellow: "#ADFF2F",
        PaleTurquoise: "#AFEEEE",
        LightSteelBlue: "#B0C4DE",
        PowderBlue: "#B0E0E6",
        FireBrick: "#B22222",
        DarkGoldenRod: "#B8860B",
        MediumOrchid: "#BA55D3",
        RosyBrown: "#BC8F8F",
        DarkKhaki: "#BDB76B",
        Silver: "#C0C0C0",
        MediumVioletRed: "#C71585",
        "IndianRed ": "#CD5C5C",
        Peru: "#CD853F",
        Chocolate: "#D2691E",
        Tan: "#D2B48C",
        LightGrey: "#D3D3D3",
        PaleVioletRed: "#D87093",
        Thistle: "#D8BFD8",
        Orchid: "#DA70D6",
        GoldenRod: "#DAA520",
        Crimson: "#DC143C",
        Gainsboro: "#DCDCDC",
        Plum: "#DDA0DD",
        BurlyWood: "#DEB887",
        LightCyan: "#E0FFFF",
        Lavender: "#E6E6FA",
        DarkSalmon: "#E9967A",
        Violet: "#EE82EE",
        PaleGoldenRod: "#EEE8AA",
        LightCoral: "#F08080",
        Khaki: "#F0E68C",
        AliceBlue: "#F0F8FF",
        HoneyDew: "#F0FFF0",
        Azure: "#F0FFFF",
        SandyBrown: "#F4A460",
        Wheat: "#F5DEB3",
        Beige: "#F5F5DC",
        WhiteSmoke: "#F5F5F5",
        MintCream: "#F5FFFA",
        GhostWhite: "#F8F8FF",
        Salmon: "#FA8072",
        AntiqueWhite: "#FAEBD7",
        Linen: "#FAF0E6",
        LightGoldenRodYellow: "#FAFAD2",
        OldLace: "#FDF5E6",
        Red: "#FF0000",
        Fuchsia: "#FF00FF",
        Magenta: "#FF00FF",
        DeepPink: "#FF1493",
        OrangeRed: "#FF4500",
        Tomato: "#FF6347",
        HotPink: "#FF69B4",
        Coral: "#FF7F50",
        Darkorange: "#FF8C00",
        LightSalmon: "#FFA07A",
        Orange: "#FFA500",
        LightPink: "#FFB6C1",
        Pink: "#FFC0CB",
        Gold: "#FFD700",
        PeachPuff: "#FFDAB9",
        NavajoWhite: "#FFDEAD",
        Moccasin: "#FFE4B5",
        Bisque: "#FFE4C4",
        MistyRose: "#FFE4E1",
        BlanchedAlmond: "#FFEBCD",
        PapayaWhip: "#FFEFD5",
        LavenderBlush: "#FFF0F5",
        SeaShell: "#FFF5EE",
        Cornsilk: "#FFF8DC",
        LemonChiffon: "#FFFACD",
        FloralWhite: "#FFFAF0",
        Snow: "#FFFAFA",
        Yellow: "#FFFF00",
        LightYellow: "#FFFFE0",
        Ivory: "#FFFFF0",
        White: "#FFFFFF"
    };
    new function () {
        var a = {};
        for (var b in C.nameTable) a[b.toLowerCase()] = C.nameTable[b];
        C.nameTable = a
    };
    var mc = function () {
            function a(a, b) {
                this.Name = a, this.Code = b
            }
            return a
        }(),
        oc = function () {
            function a(a, b, c) {
                this.SignIn = a, (this.SignOut = b, this.Help = c)
            }
            return a
        }(),
        w;
    (function (d) {
        var W = dc,
            H = ec,
            h = "value",
            o = j,
            r = "{0}",
            q = E,
            m = B;

        function Sb(n, e, d) {
            var j = nb,
                h = ob;
            e === void 0 && (e = "true"), (d === void 0 && (d = a), (x = Util.GetElement(pb), (b = Util.GetElement(db), (A = Util.GetElement(qb), (J = Util.GetElement(rb), (K = Util.GetElement(sb), (G = d == a, i = d)))))));
            var f = document.createElement("link");
            f.setAttribute(P, window._mstConfig.floaterStylePath), f.setAttribute("rel", tb);
            var k = document.getElementsByTagName(D)[0];
            k.insertBefore(f, k.firstChild), (b.onmousedown = Ob, (x.setAttribute(h, j), (x.setAttribute(ub, vb), (A.setAttribute(h, j), Z = n))));
            var l = b.getElementsByTagName("input");
            for (var g = 0; g < l.length; g++) {
                var m = l[g];
                m.getAttribute("type").toLowerCase() == ab && m.setAttribute("onclick", wb)
            }
            e.toLowerCase() == N && (S = !1), (T = !0, (window._bwmid ? (window._bwmid += xb) : (window._bwmid = yb), (Qb(zb, (document.location.protocol == "https:" ? Ab : Bb) + Cb), !O && S && (c.serviceClient.Community.forceLoad(), O = !0))))
        }

        function V() {
            b.style.display = m
        }

        function C(d) {
            if (!T) {
                setTimeout(function () {
                    C(d)
                }, k);
                return
            }
            var c;
            if (!U)
                if (c = document.getElementById(Db)) {
                    var b = c.getBoundingClientRect();
                    window.Util.IsElementInViewport(c) ? b.left == 0 && b.top == 0 ? setTimeout(function () {
                        b = c.getBoundingClientRect(), v(b.left, b.top)
                    }, 200) : v(b.left, b.top) : v(k, k)
                } else c || v(k, k);
            U = !0, (u(), (V(), (x.style.display = m, f = d)));
            var e = setInterval(function () {
                if (window.LanguageMenu) {
                    window.LanguageMenu.onChanged = Nb;
                    try {
                        try {
                            window.LanguageMenu.setValue(f)
                        } catch (b) {
                            console.error(b)
                        }
                        g = Util.GetElement(eb), i == a ? (g.parentNode.style.display = q) : (g.parentNode.style.display = m, G ? (g.innerHTML = window._mstConfig.autoDetected.replace(r, p[i])) : (g.innerHTML = p[i]))
                    } catch (b) {
                        console.warn(b)
                    }
                    clearInterval(e)
                }
            }, 1);
            z = !0, (l && clearTimeout(l), y || (w = !0, I()))
        }

        function Tb() {
            b.style.display = q
        }

        function u() {
            x.style.display = q, (J.style.display = q, (A.style.display = q, (z = !1, clearTimeout(l))))
        }

        function v(a, c) {
            b.style.top = c + n, b.style.left = a + n
        }

        function X() {
            M(), (w = !0, I())
        }

        function bb(e) {
            e >= 0 && e < t && (w = !1, (clearTimeout(l), (M(), mb())));
            var d = o;
            try {
                d = Microsoft.Translator.Widget.GetAutoDetectedLanguage()
            } catch (k) {}
            if (d && window.LanguageMenu && window.LanguageMenu.getValue) {
                i = d, (g.parentNode.style.display = m, G ? (g.innerHTML = window._mstConfig.autoDetected.replace(r, p[i])) : (g.innerHTML = p[i]));
                var n = p[d],
                    f = p[window.LanguageMenu.getValue()],
                    j = location.href.substr(0, location.href.length - (location.hash || a).length),
                    q = document.location.search.length == 0 ? "?" : s,
                    b = Util.GetElement(Eb).getAttribute(h);
                b = b.replace(r, f), b = b.replace(Q, n);
                var c = Util.GetElement(Fb).getAttribute(h);
                c = c.replace(r, encodeURIComponent(j + q + H + window.LanguageMenu.getValue())), (c = c.replace(Q, encodeURIComponent(j)), (Util.GetElement(Gb).setAttribute(P, Hb + b + "&body=" + c), (Util.GetElement(Ib).setAttribute("title", Util.GetElement(Jb).getAttribute(h).replace(r, f)), window.Util.SetCookie("mstto", window.LanguageMenu.getValue(), !1))))
            }
        }

        function cb(a) {
            console.log(a)
        }

        function fb() {
            Microsoft.Translator.Widget.RestoreOriginal(), Tb()
        }

        function gb() {
            u(), C(f)
        }

        function hb() {
            clearTimeout(l), (y = !0, C(f))
        }

        function ib() {
            y = !1, z && I()
        }

        function I() {
            w && !y && z && (l = setTimeout(function () {
                lb()
            }, 7e3))
        }

        function jb() {
            var c = Kb;
            u(), V();
            var b = location.href.substr(0, location.href.length - (location.hash || a).length);
            location.search.length == 0 ? Util.GetElement(c).setAttribute(h, b + Lb + f) : location.search.indexOf("__mstto") != e ? b.match(/__mstto=(.+)([&]+)/i) ? Util.GetElement(c).setAttribute(h, b.replace(/__mstto=(.+)([&&]+)/i, H + f + s)) : b.match(/__mstto=(.+)/i) && Util.GetElement(c).setAttribute(h, b.replace(/__mstto=(.+)/i, H + f)) : Util.GetElement(c).setAttribute(h, b + Mb + f), J.style.display = m
        }

        function kb() {
            u()
        }

        function lb() {
            w && !y && z && (u(), A.style.display = m)
        }

        function M() {
            K.style.visibility = R
        }

        function mb() {
            K.style.visibility = Y
        }

        function Nb() {
            f.toLowerCase() != window[Zb].getValue().toLowerCase() && (clearTimeout(l), (f = window.LanguageMenu.getValue(), window.LanguageMenu.elemHeader.focus()))
        }

        function Ob(a) {
            return a = a || event, (L = a.clientX, (F = a.clientY, (document.onmousemove = Pb, (document.onmouseup = Rb, (document.body.focus(), (document.onselectstart = function () {
                return !1
            }, (b.ondragstart = function () {
                return !1
            }, (Util.addClass(b, W), !1))))))))
        }

        function Pb(a) {
            a = a || event;
            var c = Util.getPosition(b),
                d = a.clientX - L,
                e = a.clientY - F;
            return v(parseInt(c.left) + d, parseInt(c.top) + e), (L = a.clientX, (F = a.clientY, !1))
        }

        function Rb(a) {
            return a = a || event, (document.onmousemove = o, (document.onselectstart = o, (b.ondragstart = o, (Util.removeClass(b, W), !1))))
        }
        var p = {},
            Z, f, i = o,
            l = o,
            w = !1,
            x, b, A, J, K, g, L, F, O = !1,
            S = !0,
            y = !1,
            z = !0,
            T = !1,
            U = !1,
            G;
        d.Initialize = Sb, (d.Show = C, (d.TranslationComplete = X, (d.TranslationProgress = bb, (d.TranslationError = cb, (d.OnClose = fb, (d.OnShareBackClick = gb, (d.OnMouseOverFloater = hb, (d.OnMouseOutFloater = ib, (d.ShowSharePanel = jb, d.ShowEmbed = kb)))))))))
    })(w || (w = {})), (l.FloaterInitialize = function (a, b, c) {
        w.Initialize(a, b, c)
    }, (l.FloaterShowSharePanel = function () {
        w.ShowSharePanel()
    }, (l.FloaterOnClose = function () {
        return w.OnClose(), !1
    }, (l.FloaterOnShareBackClick = function () {
        w.OnShareBackClick()
    }, (l.OnMouseOverFloater = function () {
        return w.OnMouseOverFloater(), !1
    }, l.OnMouseOutFloater = function () {
        return w.OnMouseOutFloater(), !1
    })))));
    var Pb = document.getElementById(db);
    Pb != j && Pb.parentNode.removeChild(Pb);
    var nc = function () {
        var h = "object",
            g = I,
            i = "onComplete",
            c = L,
            f = W,
            d = j;

        function b() {
            var b = this;
            b.languageNames = [], (b.langLocalized = d, (b.appId = window._mstConfig.appId, (b.unTranslateDelegate = d, (b.Links = new oc(window._mstConfig.SignIn ? window._mstConfig.SignIn : a, window._mstConfig.SignOut ? window._mstConfig.SignOut : a, "http://go.microsoft.com/?linkid=9722454"), (b.UserName = window._mstConfig.UserName ? window._mstConfig.UserName : a, b.languageCodes = [])))));
            for (var c in window.localizedLangs) b.languageCodes[b.languageCodes.length] = c
        }
        return b.prototype.Translate = function (a, b, c, d, e, f, g) {
            this.TranslateElement(a, b, document.documentElement, c, d, e, f, g, !0)
        }, (b.prototype.TranslateElement = function (o, h, e, j, k, l, m, p, b) {
            var a = this;
            e === void 0 && (e = document.documentElement), (b === void 0 && (b = !0), (a.validate(o, "from", !1, f), a.validate(h, "to", !0, f)));
            if (!a.isElement(e) && !a.isNode(e)) throw new Error("Invalid DomElement");
            a.validate(j, "onProgress", !1, c), (a.validate(k, "onError", !1, c), (a.validate(l, i, !1, c), (a.validate(m, "onRestoreOriginal", !1, c), (a.validate(p, "timeOut", !1, g, !0), a.validate(b, "showFloater", !1, "boolean")))));
            var n = !0;
            a.lastToLanguage = h, (a.domTranslator != d && a.domTranslator.cancel && a.domTranslator.cancel(), b && w.Show(h));
            var r = function () {
                    q(t), n = !0;
                    try {
                        b && w.TranslationComplete()
                    } catch (a) {
                        console.error(a)
                    }
                    try {
                        l && l()
                    } catch (a) {
                        console.error(a)
                    }
                },
                s = function (c) {
                    try {
                        b && w.TranslationError(c)
                    } catch (a) {
                        console.error(a)
                    }
                    try {
                        k && k(c)
                    } catch (a) {
                        console.error(a)
                    }
                },
                q = function (c) {
                    if (n) return;
                    c == t && (n = !0);
                    try {
                        b && w.TranslationProgress(c)
                    } catch (a) {
                        console.error(a)
                    }
                    try {
                        j && j(c)
                    } catch (a) {
                        console.error(a)
                    }
                };
            m && (a.unTranslateDelegate = m)
        }, (b.prototype.validate = function (a, c, e, b, f) {
            var d = " should be of type ";
            if (e) {
                if (!a) throw new Error(c + " is required");
                if (typeof a != b) throw new Error(c + d + b);
            } else if (a && typeof a != b) throw new Error(c + d + b);
            if (b == g && f && a && a < 0) throw new Error(c + " should be a positive number");
        }, (b.prototype.isNode = function (a) {
            return typeof Node == h ? a instanceof Node : a && typeof a == h && typeof a.nodeType == g && typeof a.nodeName == f
        }, (b.prototype.isElement = function (a) {
            return typeof HTMLElement == h ? a instanceof HTMLElement : a && typeof a == h && a !== d && a.nodeType === 1 && typeof a.nodeName == f
        }, (b.prototype.RestoreOriginal = function () {
            var a = this;
            a.domTranslator && a.domTranslator.cancel && a.domTranslator.cancel();
            if (a.unTranslateDelegate) try {
                a.unTranslateDelegate(a.lastToLanguage)
            } catch (b) {
                console.error(b)
            }
        }, (b.prototype.GetLanguagesForTranslate = function (b, e, j, k) {
            var a = this;
            a.validate(b, "locale", !0, f), (a.validate(e, i, !0, c), (a.validate(j, "onError", !1, c), a.validate(k, "timeOut", !1, g, !0)));
            if (a.languageNames[b] != d) {
                try {
                    e(a.languageNames[b])
                } catch (h) {
                    console.error(h)
                }
                return
            }
        }, (b.prototype.GetLanguagesForTranslateLocalized = function () {
            var a = this;
            if (!a.langLocalized) {
                a.langLocalized = [];
                for (var b in window.localizedLangs) a.langLocalized[a.langLocalized.length] = new mc(window.localizedLangs[b], b)
            }
            return a.langLocalized
        }, (b.prototype.GetAutoDetectedLanguage = function () {
            if (!this.domTranslator || !this.domTranslator.detectedLanguage) throw new Error("Can not return auto detected language before making a translation with 'from' parameter set to null ");
            return this.domTranslator.detectedLanguage
        }, (b.prototype.SetUpdatedAccessToken = function (c) {
            var i = window._mstConfig.baseURL.split(u),
                b = i[2].split(":")[0];
            b = b.substring(4, b.length), c = encodeURIComponent(c);
            var d = document.getElementsByTagName(S);
            if (d && d.length > 0)
                for (var g = 0; g < d.length; g++) {
                    var j = d[g],
                        h = j.getAttribute("src");
                    if (h && (h.toLowerCase().indexOf("roledashboard.aspx") != e || h.toLowerCase().indexOf("bulkdashboard.aspx") != e)) {
                        var k = "https://" + i[2],
                            k = k.replace("www.", "ssl.");
                        j.contentWindow.postMessage("TRNS_TOKEN_UPDATE" + c, k)
                    }
                }
            var f = document.createElement("script");
            f.type = kb, f.charset = "UTF-8";
            var m = window._mstConfig.onErrorHandlerName ? Nb + window._mstConfig.onErrorHandlerName : a;
            f.src = (location && location.href && location.href.indexOf("https") == 0 ? "https://ssl." + b : "http://www." + b) + "/ajax/v3/WidgetV3.ashx?action=refreshToken&trnsaccesstoken=" + c + m;
            var l = document.getElementsByTagName(D)[0] || document.documentElement;
            l.insertBefore(f, l.firstChild)
        }, (b.prototype.UpdateAppID = function (a, b) {
            this.appId = a, (window._mstConfig.appId = this.appId, Microsoft.Translator.Widget.UpdateDashboardLink(encodeURIComponent(b)))
        }, (b.prototype.UpdateDashboardLink = function (a) {
            Microsoft.Translator.Community.updateWidgetInfo(a)
        }, b)))))))))))
    }();
    l.Widget = new nc;
    var jc = new function () {
            var e = o,
                h = e,
                k = 600,
                l = 430,
                q = "#0F0F5F",
                m = "#F0F0A0",
                s;
            return function (s, L, t, P, z, w) {
                var X = "touchstart",
                    W = "pointerup",
                    V = "mouseout",
                    S = "mouseover",
                    I = E,
                    D = p,
                    u = this;
                if (s._mstTooltip) try {
                    s._mstTooltip.detach()
                } catch (cb) {}
                s._mstTooltip = L._mstTooltip = u;
                if (!t) t = s;
                var x = e,
                    K = e,
                    O = s.style.color,
                    M = s.style.backgroundColor,
                    o = s.ownerDocument,
                    N = e,
                    Q = u.hover = function (d) {
                        if (h) return;
                        if (z.showHighlight) {
                            var b = s.style.color;
                            try {
                                b = "#" + C.parse(s.style.color).toString()
                            } catch (c) {}
                            if (b != q) O = s.style.color;
                            var a = s.style.backgroundColor;
                            try {
                                a = "#" + C.parse(s.style.backgroundColor).toString()
                            } catch (c) {}
                            if (a != m) M = s.style.backgroundColor;
                            //s.style.color = q;
                            s.style.backgroundColor = m
                        }
                        if (z.showTooltips && d) {
                            x = D;
                            setTimeout(Z, k)
                        }
                        if (d && w && w[s._mstHash] && w[s._mstHash]._mstTooltip) w[s._mstHash]._mstTooltip.hover()
                    },
                    bb = u.unhover = function (a) {
                        if (h || N) {
                            N = e;
                            return
                        }
                        if (z.showHighlight) {
                            s.style.color = O;
                            s.style.backgroundColor = M
                        }
                        if (z.showTooltips && a) {
                            x = e;
                            setTimeout(Y, k)
                        }
                        if (a && w && w[s._mstHash] && w[s._mstHash]._mstTooltip) w[s._mstHash]._mstTooltip.unhover()
                    };

                function Z() {
                    if (h) return;
                    if (x) kb()
                }
                var kb = u.show = function () {
                    var cb = gb,
                        W = b,
                        N = "none 0px",
                        bb = Ob,
                        ab = U,
                        M = "normal",
                        eb = "0px 0px 0px 0px",
                        E = A,
                        C = v;
                    if (K) return;
                    else K = D;
                    if (!o._mstTooltip) {
                        var lb = c.baseURL.substr(0, 8) + c.baseURL.substr(8).replace(/\/.*$/, Rb),
                            X = e;
                        if (jb[c.locale] && fc[jb[c.locale]] && fc[jb[c.locale]] == C) X = D;
                        o._mstTooltip = o.createElement(E);
                        o._mstTooltip.translate = e;
                        o._mstTooltip.setAttribute("translate", J);
                        o._mstTooltip.style.display = I;
                        o._mstTooltip.style.position = hb;
                        o._mstTooltip.style.zIndex = ib;
                        o._mstTooltip.style.margin = eb;
                        o._mstTooltip.style.border = "2px solid #D2D2D2";
                        o._mstTooltip.style.padding = eb;
                        o._mstTooltip.style.color = "#000000";
                        o._mstTooltip.style.backgroundColor = "#E6E6E6";
                        o._mstTooltip.style.fontFamily = "Arial, Helvetica, Sans-Serif";
                        o._mstTooltip.style.fontStyle = M;
                        o._mstTooltip.style.fontVariant = M;
                        o._mstTooltip.style.fontWeight = M;
                        o._mstTooltip.style.fontSize = "12px";
                        o._mstTooltip.style.lineHeight = M;
                        if (!X) {
                            o._mstTooltip.style.direction = d;
                            o._mstTooltip.style.textAlign = F
                        } else {
                            o._mstTooltip.style.direction = C;
                            o._mstTooltip.style.textAlign = ab
                        }
                        var p = o.createElement(E);
                        if (!X) p.style.styleFloat = p.style.cssFloat = ab;
                        else p.style.styleFloat = p.style.cssFloat = F;
                        var j = o.createElement("a");
                        j.href = c.lpURL;
                        j.target = "_blank";
                        j.style.display = bb;
                        j.style.padding = "4px";
                        j.style.border = N;
                        j.style.cursor = T;
                        j.style.textDecoration = I;
                        j.style.textAlign = G;
                        var u = o.createElement(y);
                        u.src = c.imagePath + "binglogo_ctf.png";
                        u.style.width = "36px";
                        u.style.height = "14px";
                        u.style.border = N;
                        j.appendChild(u);
                        p.appendChild(j);
                        o._mstTooltip.cl = o.createElement("a");
                        o._mstTooltip.cl.style.padding = "4px 4px 4px 4px";
                        o._mstTooltip.cl.style.border = N;
                        o._mstTooltip.cl.style.textAlign = G;
                        o._mstTooltip.cl.style.textDecoration = I;
                        o._mstTooltip.cl.style.verticalAlign = "top";
                        o._mstTooltip.cl.style.display = bb;
                        o._mstTooltip.cl.style.cursor = T;
                        var w = o.createElement(y);
                        w.src = c.imagePath + "tooltip_close.gif";
                        w.style.border = N;
                        w.style.width = H;
                        w.style.height = H;
                        o._mstTooltip.cl.appendChild(w);
                        p.appendChild(o._mstTooltip.cl);
                        o._mstTooltip.appendChild(p);
                        var k = o.createElement(E);
                        k.style.margin = "4px 4px 8px 4px";
                        k.style.fontWeight = "bold";
                        k.style.fontFamily = "Segoe UI";
                        k.style.fontSize = "9px";
                        k.style.letterSpacing = "0px";
                        k.style.textTransform = "uppercase";
                        k.style.color = "#4D4D4D";
                        if (!z.sourceFrame) {
                            var q = g;
                            try {
                                q = ic[jb[c.locale || W] || W] || q
                            } catch (V) {}
                            q += ":"
                        } else {
                            var q = "Translation";
                            try {
                                q = localizedTranslation[jb[c.locale || W] || W] || q
                            } catch (V) {}
                        }
                        k.appendChild(o.createTextNode(q));
                        o._mstTooltip.appendChild(k);
                        o._mstTooltip.cp = o.createElement(E);
                        o._mstTooltip.appendChild(o._mstTooltip.cp);
                        o._mstTooltip.cb = o.createElement("span");
                        o._mstTooltip.cb.style.display = bb;
                        o._mstTooltip.cb.style.margin = "0px 4px 4px 4px";
                        o._mstTooltip.cb.style.fontFamily = "Arial";
                        o._mstTooltip.cb.style.fontSize = "12px";
                        o._mstTooltip.cb.style.color = "black";
                        o._mstTooltip.cp.appendChild(o._mstTooltip.cb);
                        o.body.appendChild(o._mstTooltip)
                    }
                    o._mstTooltip.cl.onclick = R;
                    o._mstTooltip.style.width = a;
                    o._mstTooltip.cb.style.whiteSpace = "nowrap";
                    o._mstTooltip.cb.innerHTML = a;
                    o._mstTooltip.cb.appendChild(o.createTextNode(L.innerText || L.textContent));
                    o._mstTooltip.style.display = B;
                    for (var db in P) try {
                        o._mstTooltip.cp.style[db] = P[db]
                    } catch (V) {
                        if (c.debug);
                    }
                    o._mstTooltip.onmouseover = function () {
                        x = D;
                        Q();
                        Z()
                    };
                    o._mstTooltip.onmouseout = function () {
                        x = e;
                        setTimeout(Y, r)
                    };
                    var O = Math.max(i.getVisibleWidth(o), r),
                        S = window.pageXOffset || o.documentElement.scrollLeft || o.body.scrollLeft,
                        kb = Math.max(o.documentElement.scrollWidth, o.body.scrollWidth);
                    if (Microsoft.TranslatorOverride && Microsoft.TranslatorOverride.showTooltip) try {
                        Microsoft.TranslatorOverride.showTooltip(L, s, o._mstTooltip);
                        l = 430
                    } catch (V) {}
                    var m = o._mstTooltip.cb.offsetWidth + 12;
                    if (m > t.offsetWidth) m = t.offsetWidth;
                    if (m > O - f) m = O - f;
                    if (m < l) m = l;
                    o._mstTooltip.style.width = m.toString() + n;
                    o._mstTooltip.cb.style.whiteSpace = a;
                    var h, fb = i.getStyleValue(s, cb) == C || i.getStyleValue(s, "text-align") == ab;
                    if (fb) h = i.absXPos(s) + s.offsetWidth - o._mstTooltip.offsetWidth;
                    else h = i.absXPos(s);
                    if (h + o._mstTooltip.offsetWidth > i.absXPos(t) + t.offsetWidth) h = i.absXPos(t) + t.offsetWidth - o._mstTooltip.offsetWidth;
                    if (h < i.absXPos(t) && i.absXPos(t) + m < kb) h = i.absXPos(t);
                    if (i.getStyleValue(s, cb) != C) {
                        if (h + o._mstTooltip.offsetWidth > O + S - 8) h = O + S - 8 - o._mstTooltip.offsetWidth;
                        if (h < S + 8) h = S + 8
                    }
                    o._mstTooltip.style.left = h + n;
                    o._mstTooltip.style.top = Math.max(i.absYPos(s) - (o._mstTooltip.offsetHeight + 8), 8) + n
                };

                function Y() {
                    if (h) return;
                    if (!x) R()
                }
                var R = u.hide = function () {
                        ab(e);
                        if (!K) return;
                        else K = e;
                        if (z.showHighlight) {
                            s.style.color = O;
                            s.style.backgroundColor = M
                        }
                        if (o._mstTooltip) o._mstTooltip.style.display = I
                    },
                    ab = u.setLock = function (a) {
                        h = a
                    },
                    lb = u.tap = function (a) {
                        if (window.WidgetLastHoveredItem != j) window.WidgetLastHoveredItem._mstTooltip.unhover(window.WidgetLastHoveredItem);
                        N = D;
                        if (o._mstTooltip) setTimeout(function () {
                            o._mstTooltip.style.display = B
                        }, k + 10);
                        window.WidgetLastHoveredItem = a
                    },
                    mb = u.detach = function () {
                        i.removeEvent(s, S, eb);
                        i.removeEvent(s, V, fb);
                        i.removeEvent(s, s, window.navigator.msPointerEnabled ? W : X, db)
                    },
                    eb = i.addEvent(s, S, Q),
                    fb = i.addEvent(s, V, bb),
                    db = i.addEvent(s, window.navigator.msPointerEnabled ? W : X, lb)
            }
        },
        qc = new function (K) {
            var lb = 1600,
                M = y,
                C = "span",
                t = A,
                bb = n,
                tb = j,
                h = E,
                w = B,
                D = Ob,
                Ib = "MSTCTransPanel",
                P = p,
                d = o,
                z = this,
                mc = 0,
                Ab, Hb, Bb, wb, Fb, g, yb, Y, db, zb, Xb, x, rb, fb, eb, cb, ab, Wb, V, Jb, ec, pb, Mb, ac, bc, Tb, dc, Ub, ic, lc, Gb, fc, b, I, kb, Zb, xb, ub, nb, m, jc, jb = d,
                Cb = P,
                gc = 1e6,
                k, l = 0,
                Db, G, Q;
            window._mstCmCb = function () {
                c.appId = document.getElementById("MSTCAppIdToken").innerHTML;
                kb = parseInt(document.getElementById("MSTCMaxRating").innerHTML);
                Zb = document.getElementById("MSTCImagePath").innerHTML;
                xb = document.getElementById("MSTCAuthLang").innerHTML.toLowerCase();
                ub = document.getElementById("MSTCDashboardUrl").href;
                yb = document.getElementById("MSTCContent");
                Y = document.getElementById("MSTCExpandLink");
                db = document.getElementById("MSTCRootPanel");
                zb = document.getElementById("MSTCLoading");
                Xb = document.getElementById("MSTCSubmitting");
                x = document.getElementById(Ib);
                rb = document.getElementById("MSTCPrevNextPanel");
                fb = document.getElementById("MSTCPrevLink");
                eb = document.getElementById("MSTCNextLink");
                cb = document.getElementById("MSTCPrevCount");
                ab = document.getElementById("MSTCNextCount");
                Wb = document.getElementById("MSTCFooterPanel");
                V = document.getElementById("MSTCDashboardLink");
                bc = document.getElementById("MSTCApprove");
                Tb = document.getElementById("MSTCApproveTooltip");
                dc = document.getElementById("MSTCReject");
                Ub = document.getElementById("MSTCRejectTooltip");
                Jb = document.getElementById("MSTCTransPanelError");
                ec = document.getElementById("MSTCTransPanelErrorMsg");
                pb = document.getElementById("MSTCOKImgBtn");
                Mb = document.getElementById("MSTCHelpImgBtn");
                if (pb) pb.onclick = mb;
                if (i.isInternetExplorer() && i.isQuirksMode(document)) i.fixIEQuirks(g);
                fb.onclick = function () {
                    sb(-3);
                    return d
                };
                eb.onclick = function () {
                    sb(3);
                    return d
                };
                if (V)
                    if (Cb) {
                        V.onclick = Eb;
                        var a = document.getElementById("MSTTDashboardLink");
                        if (a) {
                            a.parentNode.style.display = D;
                            a.onclick = Eb;
                            a.href = "javascript: " + a.title
                        }
                    } else V.style.visibility = R;
                if (!window.Microsoft) window.Microsoft = {};
                window.Microsoft.TranslatorOverride = {
                    showTooltip: Yb,
                    hideTooltip: vb
                };
                if (kb >= 5) window.Microsoft.TranslatorOverride.showHighlight = Vb
            };
            var Yb = z.showTooltip = function (a, b, c) {
                    if (!g || g.ownerDocument != c.ownerDocument) return;
                    m = a._mstTooltip;
                    Hb = a.getAttribute(O);
                    Bb = b.getAttribute(O);
                    wb = a;
                    Fb = b;
                    jb = d;
                    Y.onclick = Lb;
                    g.style.display = w;
                    db.style.display = h;
                    x.style.display = h;
                    mb();
                    c.appendChild(g)
                },
                Lb = z.showTranslations = function () {
                    Y.onclick = Kb;
                    db.style.display = w;
                    zb.style.display = w;
                    x.style.display = h;
                    mb();
                    rb.style.display = h;
                    c.serviceClient.GetTranslations(c.appId, wb._mstNormalize(), Hb, Bb, 24, c.category ? {
                        Category: c.category
                    } : tb, Pb, Rb, 7e3);
                    return d
                },
                kc = z.updateWidgetInfo = function (a) {
                    I = a;
                    nb = P
                };

            function Pb(b) {
                zb.style.display = h;
                x.innerHTML = a;
                x.style.display = w;
                if (b.Translations.length > 4) rb.style.display = w;
                var u = kb >= 5 && kb >= Math.abs(b.Translations[0].Rating) && (!xb || xb == Bb.toLowerCase()),
                    o = b.Translations.length > 0 && b.Translations[0].Rating >= 5,
                    v = !b.NoEdit && b.Translations.length == 1,
                    s = b.Reject,
                    i, p = b.Translations.length;
                for (i = 0; i < p; i++)
                    if (b.Translations[i].Rating == 5) break;
                if (i != p) {
                    var q = b.Translations[i].TranslatedText;
                    for (var f = 0; f < b.Translations.length; f++) {
                        if (f == i) continue;
                        if (q == b.Translations[f].TranslatedText) {
                            if (f < i) i--;
                            b.Translations.splice(f, 1);
                            f--
                        }
                    }
                }
                var j = e,
                    n = e;
                for (var f = 0; f < b.Translations.length; ++f) {
                    if (j == e && b.Translations[f].Rating < 5) j = f;
                    if (j != e && b.Translations[f].Rating > -5) n = f
                }
                if (j >= 0 && n > j)
                    for (var f = j; f < n; ++f)
                        for (var m = f + 1; m <= n; ++m)
                            if (b.Translations[f].Count < b.Translations[m].Count) {
                                var y = b.Translations[f];
                                b.Translations[f] = b.Translations[m];
                                b.Translations[m] = y
                            } k = [];
                while (b.Translations.length > 0) {
                    var r = b.Translations.shift();
                    try {
                        k.push(new Sb(r, x, u, o, v, s))
                    } catch (t) {
                        if (c.debug);
                        continue
                    }
                    if (o) o = d
                }
                if (b.Hover && k.length && k[0].hover) k[0].hover();
                l = 0;
                sb();
                if (document._mstTooltip && (document._mstTooltip.style.display == h || g.style.display == h)) vb();
                return k.slice(0)
            }

            function mb() {
                Jb.style.display = h
            }

            function Rb() {
                if (c.debug);
                Kb()
            }

            function Kb() {
                jb = d;
                m.setLock(d);
                Y.onclick = Lb;
                g.style.display = w;
                db.style.display = h;
                x.style.display = h;
                mb();
                return d
            }

            function sb(c) {
                if (jb) return d;
                if (!c) l = 0;
                else l += c;
                if (l < 0) l = 0;
                else if (l >= k.length) l -= 3;
                m.setLock(P);
                for (var b = 0; b < k.length; ++b)
                    if (b >= l && b < l + 3) k[b].panel.style.display = w;
                    else k[b].panel.style.display = h;
                var f = l,
                    e = Math.max(k.length - (l + 3), 0);
                cb.innerHTML = "(" + f.toString() + ")";
                ab.innerHTML = "(" + e.toString() + ")";
                if (f > 0) {
                    fb.style.color = "#59F";
                    cb.style.display = a
                } else {
                    fb.style.color = "#999";
                    cb.style.display = h
                }
                if (e > 0) {
                    eb.style.color = "#59F";
                    ab.style.display = a
                } else {
                    eb.style.color = "#999";
                    ab.style.display = h
                }
                setTimeout(function () {
                    m.setLock(d)
                }, 500)
            }

            function Sb(a, y, A, z) {
                var s = "4px 1px 0px 3px",
                    r = "4px 3px 0px 1px",
                    q = gb,
                    e = this.panel = document.createElement(t);
                e.className = Ib;
                y.appendChild(e);
                a.OriginalText = wb._mstNormalize();
                var u = Fb._mstDenormalize(a.TranslatedText),
                    l = document.createElement(t);
                l.className = "MSTCTransBox";
                if (z) l.style.color = "#006622";
                l.appendChild(document.createTextNode(u.innerText || u.textContent));
                e.appendChild(l);
                var b = document.createElement(t);
                b.className = "MSTCStatsTab";
                e.insertBefore(b, e.firstChild);
                var k = document.createElement(t);
                k.className = "MSTCVoteCount";
                b.appendChild(k);
                if (a.Rating > 5) {
                    var h = document.createElement(C),
                        w = document.createElement(M);
                    w.src = c.imagePath + "ctfbadge.gif";
                    h.appendChild(w);
                    k.appendChild(h);
                    if (a.Rating >= 10) h.style.backgroundColor = "#F2C341";
                    else if (a.Rating >= 8) h.style.backgroundColor = "#B2B2B2";
                    else if (a.Rating >= 6) h.style.backgroundColor = "#8C7853"
                } else if (a.Rating == 5) {
                    var x = document.createElement(C),
                        d = document.createElement(M);
                    d.src = c.imagePath + "ctfmt.gif";
                    d.style.margin = "2px 2px 0px 3px";
                    x.appendChild(d);
                    k.appendChild(x)
                } else if (a.Count) {
                    var p = document.createElement(C),
                        g = document.createElement(Z);
                    g.style.display = D;
                    g.appendChild(document.createTextNode(a.Count));
                    p.appendChild(g);
                    var d = document.createElement(M);
                    d.src = c.imagePath + "ctfvotes.gif";
                    p.appendChild(d);
                    k.appendChild(p);
                    if (i.getStyleValue(yb, q) == v) {
                        g.style.margin = r;
                        d.style.margin = "7px 1px 0px 3px"
                    } else {
                        g.style.margin = s;
                        d.style.margin = "3px 3px 0px 1px"
                    }
                } else b.parentNode.removeChild(b);
                if (a.Flags) {
                    var j = document.createElement(t);
                    j.className = "MSTCFlagCount";
                    j.style.marginTop = "2px";
                    b.appendChild(j);
                    var n = document.createElement(C);
                    n.style.width = n.style.minWidth = "1px";
                    n.style.height = "21px";
                    j.appendChild(n);
                    var o = document.createElement(C),
                        f = document.createElement(Z);
                    f.style.display = D;
                    f.appendChild(document.createTextNode(a.Flags));
                    o.appendChild(f);
                    var m = document.createElement(M);
                    m.src = c.imagePath + "ctfflags.gif";
                    o.appendChild(m);
                    j.appendChild(o);
                    if (i.getStyleValue(yb, q) == v) {
                        f.style.margin = r;
                        m.style.margin = "7px 1px 0px 2px"
                    } else {
                        f.style.margin = s;
                        m.style.margin = "7px 2px 0px 1px"
                    }
                }
                b.style.marginTop = (e.offsetHeight - b.offsetHeight) / 2 + bb
            }
            var vb = z.hideTooltip = function () {
                    jb = d;
                    g.style.display = h;
                    if (m) m.hide();
                    if (b && b.parentNode == document.body) try {
                        document.body.removeChild(b)
                    } catch (a) {}
                },
                Eb = z.showDashboard = function () {
                    var j = hb;
                    vb();
                    if (m) m.setLock(P);
                    if (!ub) return;
                    b = document.createElement(t);
                    b.style.position = j;
                    b.style.zIndex = ib;
                    b.style.width = "97%";
                    b.style.margin = "44px 8px";
                    b.style.borderRight = b.style.borderBottom = "solid 1px black";
                    b.style.backgroundColor = "white";
                    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || r;
                    if (h < r) h = r;
                    h -= 60;
                    var g = document.createElement(S);
                    g.style.width = "100%";
                    g.style.height = h.toString() + bb;
                    g.src = 'javascript:document.write("Loading...")';
                    b.appendChild(g);
                    var a = document.createElement("a");
                    try {
                        i.applyProtectiveCss(a)
                    } catch (k) {
                        if (c.debug);
                    }
                    a.style.display = D;
                    a.style.position = j;
                    a.style.styleFloat = U;
                    a.style.top = "4px";
                    a.style.cursor = T;
                    a.title = "Close dashboard";
                    var f = document.createElement(C);
                    f.style.display = D;
                    f.style.width = "28px";
                    f.style.height = "28px";
                    f.style.marginRight = "16px";
                    a.appendChild(f);
                    var e = document.createElement(M);
                    try {
                        i.applyProtectiveCss(e)
                    } catch (k) {
                        if (c.debug);
                    }
                    e.src = c.imagePath + "ctfdashboardclose.gif";
                    e.style.display = D;
                    e.style.marginTop = H;
                    e.style.marginLeft = H;
                    e.style.border = "0px";
                    f.appendChild(e);
                    a.onclick = function () {
                        if (m) m.setLock(d);
                        document.body.removeChild(b)
                    };
                    b.appendChild(a);
                    b.style.height = h.toString() + bb;
                    b.style.overflow = R;
                    b.style.textAlign = F;
                    window.scrollTo(0, 0);
                    document.body.insertBefore(b, document.body.firstChild);
                    setTimeout(function () {
                        a.style.right = "4px";
                        if (!i.isInternetExplorer()) a.style.left = (b.offsetWidth - a.offsetWidth).toString() + bb;
                        var d = encodeURIComponent(location.href);
                        if (d.lenght > lb) d = d.substr(0, lb);
                        var e = ub + "?" + ob() + "&url=" + d + "&from=" + encodeURIComponent(c.from) + "&to=" + encodeURIComponent(c.to) + "&category=" + encodeURIComponent(c.category) + "&usr=" + encodeURIComponent(cc());
                        g.src = e
                    }, 0);
                    return d
                };

            function ob() {
                var b = a;
                if (!nb) b += "siteData=" + I;
                else b += "trnsaccesstoken=" + I;
                if (G) b += Nb + G;
                return b
            }
            var q = 0;

            function Vb(a, b, c) {
                if (!a.transItems || !a.transItems.length) return;
                q = 0;
                qb(a, b, c)
            }

            function qb(a, f, g) {
                if (q >= a.transItems.length) return;
                var b = [],
                    e = 0;
                for (var d = q; d < a.transItems.length && e < lb && d - q < 10; ++d) {
                    var h = a.transItems[d].src._mstNormalize();
                    e += i.getStringByteCount(h);
                    b.push(h)
                }
                if (e >= lb) b.pop();
                c.serviceClient.GetTranslationsArray(c.appId, b, f, g, 3, c.category ? {
                    Category: c.category
                } : tb, function (d) {
                    for (var c = 0; c < d.length; ++c)
                        if (d[c].Translations.length > 1)
                            if (d[c].Translations[0].Rating > 5) a.transItems[q + c].tgt.style.backgroundColor = "#E6E6E6";
                            else if (d[c].Translations[1].Count < 0) a.transItems[q + c].tgt.style.backgroundColor = "#E5917F";
                    else a.transItems[q + c].tgt.style.backgroundColor = "#B9E4FC";
                    q += b.length;
                    qb(a, f, g)
                }, function () {
                    q += b.length > 1 ? b.length : 1;
                    qb(a, f, g)
                }, 7e3)
            }
            var hc = z.forceLoad = function () {
                if (Q) Q()
            };

            function cc() {
                var a = Gb.innerText || Gb.textContent;
                if (!a) {
                    var b = document.cookie.match(/mstcid=([^;]+)/i);
                    if (b) a = b[1];
                    else {
                        a = Math.floor(Math.random() * 1e9).toString(f);
                        document.cookie = "mstcid=" + a + "; expires=Sun, 01-Jan-2040 01:01:01 GMT; path=" + ((location.host.indexOf("bing") > e && location.pathname.indexOf("/translator")) > e ? location.pathname : u)
                    }
                }
                return a
            }
            new function () {
                var b, e;
                b = K.match(/siteData=([^&]*)/i);
                if (b) {
                    I = b[1];
                    nb = d
                } else {
                    b = K.match(/trnsaccesstoken=([^&]*)/i);
                    if (b) {
                        I = b[1];
                        nb = P
                    }
                }
                b = K.match(/onerror=([^&]+)/i);
                if (b) G = b[1];
                Ab = c.locale;
                b = K.match(/loc=([^&]+)/);
                if (b) Ab = b[1];
                b = K.match(/ctfLanguages=([^&]*)/);
                if (b) e = b[1];
                b = K.match(/showDashboard=([^&]*)/);
                if (b && (b[1].toLowerCase() == N || b[1].toLowerCase() == J)) Cb = d;
                if (e) {
                    Db = {};
                    var j = e.split(",");
                    for (var f = 0; f < j.length; ++f) Db[j[f].toLowerCase()] = 1
                }
                if (I) Q = function () {
                    var b = "MicrosoftTranslatorCommunity";
                    if (!Q) return;
                    Q = tb;
                    g = document.getElementById(b);
                    if (g) g.parentNode.removeChild(g);
                    g = document.createElement(t);
                    g.id = b;
                    g.style.display = h;
                    document.body.insertBefore(g, document.body.firstChild);
                    var d = a;
                    if (i.isInternetExplorer() && i.isQuirksMode(document)) d = "&inrt=1";
                    ac = Qb("/ajax/v3/community.aspx?fmt=js&loc=" + Ab + d + s + ob(), c.rootURL)
                };
                if (c.tokRef) {
                    window._mstRefTok = function (a) {
                        c.appId = a
                    };
                    setInterval(function () {
                        if (_eTokenScript) _eTokenScript.parentNode.removeChild(_eTokenScript);
                        _eTokenScript = Qb("/ajax/v3/community.aspx?reftok=1&" + ob(), c.rootURL)
                    }, c.tokRef * 1e3)
                }

                function k(a) {
                    var b = X;
                    if (typeof a.data == W && a.data.indexOf(b) == 0) {
                        var c = a.data.substring(b.length);
                        if (window[G] && typeof window[G] == L) window[G](c)
                    }
                }
                if (window.addEventListener) addEventListener("message", k, d);
                else attachEvent("onmessage", k)
            };
            c.serviceClient.Community = z
        }(c.baseURL),
        w;
    (function (g) {
        var ib = dc,
            X = ec,
            m = "value",
            y = "{0}",
            x = E,
            V = "style",
            f = Zb,
            u = B,
            W = K,
            i = p,
            b = o,
            v = j,
            w = {},
            ac, h, q = v,
            r = v,
            A = b,
            G, d, J, S, O, l, T, U, hb = b,
            fb = i,
            z = b,
            C = i,
            cb = b,
            gb = b,
            M;

        function jb(p, h, e) {
            var f = "_bwmid",
                l = nb,
                k = ob;
            if (h === void 0) h = "true";
            if (e === void 0) e = a;
            G = Util.GetElement(pb);
            d = Util.GetElement(db);
            J = Util.GetElement(qb);
            S = Util.GetElement(rb);
            O = Util.GetElement(sb);
            M = e == a;
            q = e;
            var g = document.createElement("link");
            g.setAttribute(P, window[W].floaterStylePath);
            g.setAttribute("rel", tb);
            var m = document.getElementsByTagName(D)[0];
            m.insertBefore(g, m.firstChild);
            d.onmousedown = cc;
            G.setAttribute(k, l);
            G.setAttribute(ub, vb);
            J.setAttribute(k, l);
            ac = p;
            var n = d.getElementsByTagName("input");
            for (var j = 0; j < n.length; j++) {
                var o = n[j];
                if (o.getAttribute("type").toLowerCase() == ab) o.setAttribute("onclick", wb)
            }
            if (h.toLowerCase() == N) fb = b;
            cb = i;
            if (window[f]) window[f] += xb;
            else window[f] = yb;
            Qb(zb, (document.location.protocol == "https:" ? Ab : Bb) + Cb);
            if (!hb && fb) {
                c.serviceClient.Community.forceLoad();
                hb = i
            }
        }
        g.Initialize = jb;

        function bb() {
            d.style.display = u
        }

        function I(d) {
            if (!cb) {
                setTimeout(function () {
                    I(d)
                }, k);
                return
            }
            var c;
            if (!gb)
                if (c = document.getElementById(Db)) {
                    var b = c.getBoundingClientRect();
                    if (window["Util"].IsElementInViewport(c))
                        if (b.left == 0 && b.top == 0) setTimeout(function () {
                            b = c.getBoundingClientRect();
                            H(b.left, b.top)
                        }, 200);
                        else H(b.left, b.top);
                    else H(k, k)
                } else if (!c) H(k, k);
            gb = i;
            F();
            bb();
            G.style.display = u;
            h = d;
            var e = setInterval(function () {
                if (window[f]) {
                    window[f].onChanged = bc;
                    try {
                        try {
                            window[f].setValue(h)
                        } catch (b) {
                            console.error(b)
                        }
                        l = Util.GetElement(eb);
                        if (q == a) l.parentNode[V].display = x;
                        else {
                            l.parentNode[V].display = u;
                            if (M) l.innerHTML = window[W].autoDetected.replace(y, w[q]);
                            else l.innerHTML = w[q]
                        }
                    } catch (b) {
                        console.warn(b)
                    }
                    clearInterval(e)
                }
            }, 1);
            C = i;
            if (r) clearTimeout(r);
            if (!z) {
                A = i;
                L()
            }
        }
        g.Show = I;

        function Wb() {
            d.style.display = x
        }

        function F() {
            G.style.display = x;
            S.style.display = x;
            J.style.display = x;
            C = b;
            clearTimeout(r)
        }

        function H(a, b) {
            d.style.top = b + n;
            d.style.left = a + n
        }

        function Pb() {
            Z();
            A = i;
            L()
        }
        g.TranslationComplete = Pb;

        function Rb(g) {
            if (g >= 0 && g < t) {
                A = b;
                clearTimeout(r);
                Z();
                Xb()
            }
            var e = v;
            try {
                e = Microsoft.Translator.Widget.GetAutoDetectedLanguage()
            } catch (n) {}
            if (e && window[f] && window[f].getValue) {
                q = e;
                l.parentNode[V].display = u;
                if (M) l.innerHTML = window[W].autoDetected.replace(y, w[q]);
                else l.innerHTML = w[q];
                var k = w[e],
                    h = w[window[f].getValue()],
                    i = location.href.substr(0, location.href.length - (location.hash || a).length),
                    j = document.location.search.length == 0 ? "?" : s,
                    c = Util.GetElement(Eb).getAttribute(m);
                c = c.replace(y, h);
                c = c.replace(Q, k);
                var d = Util.GetElement(Fb).getAttribute(m);
                d = d.replace(y, encodeURIComponent(i + j + X + window[f].getValue()));
                d = d.replace(Q, encodeURIComponent(i));
                Util.GetElement(Gb).setAttribute(P, Hb + c + "&body=" + d);
                Util.GetElement(Ib).setAttribute("title", Util.GetElement(Jb).getAttribute(m).replace(y, h));
                window["Util"].SetCookie("mstto", window[f].getValue(), b)
            }
        }
        g.TranslationProgress = Rb;

        function Vb(a) {
            console.log(a)
        }
        g.TranslationError = Vb;

        function mb() {
            Microsoft.Translator.Widget.RestoreOriginal();
            Wb()
        }
        g.OnClose = mb;

        function Ub() {
            F();
            I(h)
        }
        g.OnShareBackClick = Ub;

        function Sb() {
            clearTimeout(r);
            z = i;
            I(h)
        }
        g.OnMouseOverFloater = Sb;

        function Tb() {
            z = b;
            if (C) L()
        }
        g.OnMouseOutFloater = Tb;

        function L() {
            if (A && !z && C) r = setTimeout(function () {
                Ob()
            }, 7e3)
        }

        function Yb() {
            var c = Kb;
            F();
            bb();
            var b = location.href.substr(0, location.href.length - (location.hash || a).length);
            if (location.search.length == 0) Util.GetElement(c).setAttribute(m, b + Lb + h);
            else if (location.search.indexOf("__mstto") != e) {
                if (b.match(/__mstto=(.+)([&]+)/i)) Util.GetElement(c).setAttribute(m, b.replace(/__mstto=(.+)([&&]+)/i, X + h + s));
                else if (b.match(/__mstto=(.+)/i)) Util.GetElement(c).setAttribute(m, b.replace(/__mstto=(.+)/i, X + h))
            } else Util.GetElement(c).setAttribute(m, b + Mb + h);
            S.style.display = u
        }
        g.ShowSharePanel = Yb;

        function lb() {
            F()
        }
        g.ShowEmbed = lb;

        function Ob() {
            if (A && !z && C) {
                F();
                J.style.display = u
            }
        }

        function Z() {
            O.style.visibility = R
        }

        function Xb() {
            O.style.visibility = Y
        }

        function bc() {
            if (h.toLowerCase() != window[f].getValue().toLowerCase()) {
                clearTimeout(r);
                h = window[f].getValue();
                window[f].elemHeader.focus()
            }
        }

        function cc(a) {
            a = a || event;
            T = a.clientX;
            U = a.clientY;
            document.onmousemove = Nb;
            document.onmouseup = kb;
            document.body.focus();
            document.onselectstart = function () {
                return b
            };
            d.ondragstart = function () {
                return b
            };
            Util.addClass(d, ib);
            return b
        }

        function Nb(a) {
            a = a || event;
            var c = Util.getPosition(d),
                e = a.clientX - T,
                f = a.clientY - U;
            H(parseInt(c.left) + e, parseInt(c.top) + f);
            T = a.clientX;
            U = a.clientY;
            return b
        }

        function kb(a) {
            a = a || event;
            document.onmousemove = v;
            document.onselectstart = v;
            d.ondragstart = v;
            Util.removeClass(d, ib);
            return b
        }
    })(w || (w = {}));
    l.FloaterInitialize = function (b, a, c) {
        w.Initialize(b, a, c)
    };
    l.FloaterShowSharePanel = function () {
        w.ShowSharePanel()
    };
    l.FloaterOnClose = function () {
        w.OnClose();
        return o
    };
    l.FloaterOnShareBackClick = function () {
        w.OnShareBackClick()
    };
    l.OnMouseOverFloater = function () {
        w.OnMouseOverFloater();
        return o
    };
    l.OnMouseOutFloater = function () {
        w.OnMouseOutFloater();
        return o
    };
    var Pb = document.getElementById(db);
    if (Pb != j) Pb.parentNode.removeChild(Pb)
};

function CUtil() {
    var f = "character",
        e = true,
        d = false,
        b = null,
        c = -1,
        a = this,
        g = navigator.userAgent.toLowerCase();
    a.MSIE = g.indexOf("msie") != c && g.indexOf("opera") == c;
    a.MSIE6 = a.MSIE && g.indexOf("msie 6.") != c;
    a.MSIE7 = a.MSIE && g.indexOf("msie 7.") != c;
    a.FIREFOX = g.indexOf("firefox") != c;
    a.SAFARI = g.indexOf("applewebkit") != c;
    a.BvError = {
        Unknown: 0,
        ConnectionError: 1,
        ConnectionRefused: 2,
        TranslationDisallowed: 3,
        SameLanguage: 4,
        ContentInDestLang: 5,
        NotFound: 6,
        Forbidden: 7,
        NameUnresolved: 8,
        Timeout: 9,
        URLBlocked: 10,
        HashMissing: 11,
        HashMismatch: 12,
        TimeParsingFailure: 13,
        HashExpired: 14
    };
    a.GetPath = function () {
        var a = "/";
        if (location.pathname) {
            a = location.pathname.match(/\/\w*/i);
            if (a) a = a[0]
        }
        return a
    };
    a.AddFavorites = function () {
        var a = document.title,
            b = window.location.href;
        if (this.FIREFOX) window.sidebar.addPanel(a, b, "");
        else window.external.AddFavorite(b, a)
    };
    a.SetCookie = function (c, b, d, a) {
        if (window.mscc === undefined || window.mscc.hasConsent()) {
            if (!a) a = "/";
            document.cookie = c + "=" + b + (d ? "; expires=Sun, 01-Jan-2040 01:01:01 GMT" : "") + "; path=" + a
        }
    };
    a.DeleteCookie = function (b, a) {
        if (!a) a = "/";
        document.cookie = b + "=;Thu, 01 Jan 1970 00:00:01 GMT; path=" + a
    };
    a.GetCookie = function (d) {
        var c = "document.cookie.match(/",
            a = eval(c + d + "s*=([^;]*)(;|$)/);");
        if (a != b) return a[1];
        else {
            a = eval(c + d + "s*([^;]*)(;|$)/);");
            if (a != b) return a[1];
            else return b
        }
    };
    a.AddEvent = function (a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, d);
        else if (a.attachEvent) a.attachEvent("on" + b, c)
    };
    a.RemoveEvent = function (a, b, c) {
        if (a.removeEventListener) a.removeEventListener(b, c, d);
        else if (a.detachEvent) a.detachEvent("on" + b, c)
    };
    a.AbsXPos = function (a) {
        return a.offsetLeft + (a.offsetParent != b ? this.AbsXPos(a.offsetParent) : 0)
    };
    a.AbsYPos = function (a) {
        return a.offsetTop + (a.offsetParent != b ? this.AbsYPos(a.offsetParent) : 0)
    };
    a.SetDDLByVal = function (c, b) {
        for (var a = 0; a < b.options.length; a++)
            if (b.options[a].value == c) {
                b.options[a].selected = e;
                return
            }
    };
    a.GetElement = function (a) {
        if (arguments.length <= 0) return b;
        if (document.getElementById) return document.getElementById(a);
        else if (document.all) return document.all(a);
        else if (document.layers) return window.document.layers[a];
        else return b
    };
    a.GetStyleObject = function (a) {
        if (document.getElementById && document.getElementById(a)) return document.getElementById(a).style;
        else if (document.all && document.all(a)) return document.all(a).style;
        else if (document.layers && document.layers[a]) return document.layers[a];
        else return d
    };
    a.GetStyleValue = function (e, c) {
        var a = document.getElementById(e) || document.body,
            d;
        if (a.currentStyle) d = a.currentStyle[c] || a.currentStyle.getAttribute(c.replace("-"));
        else if (window.getComputedStyle) d = document.defaultView.getComputedStyle(a, b).getPropertyValue(c);
        return d
    };
    a.GetComputedStyle = function (e, c) {
        var a = document.getElementById(e) || document.body,
            d;
        if (window.getComputedStyle) d = document.defaultView.getComputedStyle(a, b).getPropertyValue(c);
        else if (a.currentStyle) d = a.currentStyle[c] || a.currentStyle.getAttribute(c.replace("-"));
        return d
    };
    a.GetScrollBounds = function (a) {
        if (a == b) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        var e, f, d, c;
        if (a.documentElement != b && a.documentElement.scrollTop != b && a.documentElement.scrollTop >= a.body.scrollTop) {
            e = a.documentElement.scrollLeft;
            f = a.documentElement.scrollTop;
            d = a.documentElement.scrollWidth;
            c = a.documentElement.scrollHeight
        } else {
            e = a.body.scrollLeft;
            f = a.body.scrollTop;
            d = a.body.scrollWidth;
            c = a.body.scrollHeight
        }
        return {
            x: e,
            y: f,
            width: d,
            height: c
        }
    };
    a.getLanguageDirStyle = function (b) {
        var a;
        if (Microsoft.Translator.languageDirs[b] == "rtl") a = {
            direction: "rtl",
            textAlign: "right"
        };
        else a = {
            direction: "ltr",
            textAlign: "left"
        };
        return a
    };
    a.setScrollValue = function (a, b, e, f, c) {
        var d = a.ownerDocument.defaultView ? a.ownerDocument.defaultView : a.ownerDocument.parentWindow;
        if (d.scrollBy) d.scrollBy(e, f);
        else {
            a["scroll" + c] = b;
            a.ownerDocument.body["scroll" + c] = b
        }
    };
    a.GetUrlParameter = function (e, a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var d = "[\\?&]" + a + "=([^&#]*)",
            f = new RegExp(d, "i"),
            c = f.exec(e);
        if (c == b) return b;
        else return c[1]
    };
    a.GetDocumentUrl = function (d) {
        var e = "/bv.aspx",
            b = "a=",
            a = "";
        if (d.location.hash.length > 1) a = d.location.hash.substring(1);
        else if (d.location.search.indexOf(b) > 0) a = decodeURIComponent(d.location.search.substring(d.location.search.indexOf(b) + 2));
        while (a && a.toLowerCase().indexOf(e) >= 0 && a.toLowerCase().indexOf(b) >= 0) a = decodeURIComponent(a.substring(a.toLowerCase().indexOf(b) + 2));
        if (a.length > 0) {
            a = a.replace(/^\s*/, "").replace(/\s*$/, "");
            if (a.indexOf("?") == c) a = a.replace("&", "?")
        }
        if (a && a.indexOf("://") == c) a = "http://" + a;
        if (a && a.toLowerCase().indexOf(e) >= 0) a = "";
        return a
    };
    a.SendPostRequest = function (f, c, e) {
        var a = document.createElement("form");
        a.action = f;
        a.method = "post";
        a.target = e;
        for (var d in c)
            if (c.hasOwnProperty(d)) {
                var b = document.createElement("input");
                b.name = d;
                b.value = c[d];
                b.type = "hidden";
                a.appendChild(b)
            } document.body.appendChild(a);
        a.submit();
        document.body.removeChild(a)
    };
    a.Log = function (b, a) {
        if (window.mscc === undefined || window.mscc.hasConsent()) Microsoft.Translator.LoadScript("/sync.ashx?svc=" + b + "&" + a.join("&"))
    };
    a.GetCaretPosition = function (a) {
        var g = 0;
        if (a.selectionStart || a.selectionStart == "0") g = a.selectionStart;
        else if (document.selection) {
            var i = document.selection.createRange(),
                j = 0,
                k = 0;
            if (i && i.parentElement() == a) {
                var e = a.value.length,
                    l = a.value.replace(/\r\n/g, "\n"),
                    b = a.createTextRange();
                b.moveToBookmark(i.getBookmark());
                var h = a.createTextRange();
                h.collapse(d);
                if (b.compareEndPoints("StartToEnd", h) > c) j = k = e;
                else {
                    j = -b.moveStart(f, -e);
                    if (b.compareEndPoints("EndToEnd", h) > c) k = e;
                    else k = -b.moveEnd(f, -e)
                }
            }
            g = j
        }
        return g
    };
    a.SetSelectionRange = function (a, c, d) {
        if (a.setSelectionRange) {
            a.focus();
            a.setSelectionRange(c, d)
        } else if (a.createTextRange) {
            var b = a.createTextRange();
            b.collapse(e);
            b.moveEnd(f, d);
            b.moveStart(f, c);
            b.select()
        }
    };
    a.SetCaretToPosition = function (b, a) {
        this.SetSelectionRange(b, a, a)
    };
    a.addClass = function (d, c) {
        var b = d.className.split(" ");
        for (var a = 0; a < b.length; a++)
            if (c == b[a]) return;
        d.className += " " + c
    };
    a.removeClass = function (c, d) {
        var b = c.className.split(" ");
        c.className = "";
        for (var a = 0; a < b.length; a++)
            if (d != b[a]) {
                c.className += b[a];
                if (a == b.length - 1) c.className += " "
            }
    };
    a.IsBrowserIE = function () {
        var a = window.navigator.userAgent.toUpperCase();
        if (a.indexOf("MSIE") > 0) return e;
        if (!!a.match(/TRIDENT\/7\./)) return e;
        return d
    };
    a.IsBrowserEdge = function () {
        return window.navigator.userAgent.toUpperCase().indexOf("EDGE") > c
    };
    a.IsDeviceIOS = function () {
        return /IPAD|IPHONE|IPOD/.test(navigator.userAgent.toUpperCase()) && !window.MSStream
    };
    a.getPosition = function (a) {
        var b = 0,
            c = 0;
        while (a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop)) {
            b += a.offsetLeft - a.scrollLeft;
            c += a.offsetTop - a.scrollTop;
            a = a.offsetParent
        }
        return {
            top: c,
            left: b
        }
    };
    a.IsElementInViewport = function (b) {
        var a = b.getBoundingClientRect();
        return a.top >= 0 && a.left >= 0 && a.bottom <= (window.innerHeight || document.documentElement.clientHeight) && a.right <= (window.innerWidth || document.documentElement.clientWidth)
    };
    return a
}
var Util = new CUtil;
var MtPopUpList = function () {
    var a = this;
    a.onChanged = null;
    a.shiftKeyDown = false;
    a.MRUL = [];
    a.MAX_MRUL = 2
};
MtPopUpList.prototype = {
    keysBuffer: "",
    Init: function (d, c, i, g, h) {
        var a = this;
        a.Items = [];
        a.Keys = [];
        a.KeyMap = " " + c.join(" ") + " ";
        a.keysBuffer = "";
        var f = 0;
        for (var b = 0; b < c.length; b++) {
            a.Items[c[b]] = i[b];
            if (c[b] != "-") {
                a.Keys[f] = c[b];
                f++
            }
        }
        a.onChanged = g;
        document.onclick = a.HideCurrentPopup;
        a.elemHeader = Util.GetElement("__" + d + "_header");
        a.elemSvID = Util.GetElement(d + "_svid");
        a.elemTextId = Util.GetElement(d + "_textid");
        a.elemPopup = document.getElementById(h);
        a.cropText();
        if (a.elemPopup != null) {
            a.elemPopup.onkeydown = (new a.doKeyDown(a, a.HideCurrentPopup)).execute;
            a.elemPopup.onkeyup = (new a.doKeyUp(a)).execute;
            a.elemPopup.onkeypress = (new a.doKeyPress(a)).execute
        }
        a.name = d;
        a.mrul_cookie = d + "_lpmru";
        var e = Util.GetCookie(a.mrul_cookie);
        if (e != null && e != "undefined") a.MRUL = e.split(",");
        else a.MRUL = []
    },
    getLinks: function () {
        return this.elemPopup.getElementsByTagName("a")
    },
    getActiveLink: function () {
        var a = this.getLinks(),
            c = this.elemSvID.value;
        if (c != null)
            for (var b = 0; b < a.length; b++)
                if (a[b].href.match("#" + c + "$") != null) return a[b];
        return a[0]
    },
    getByLetter: function (i, h, e) {
        var d = this,
            g = String.fromCharCode(h).toUpperCase(),
            f = d.getActiveLink(),
            a = [],
            b;
        for (b = 0; b < e.length; b++) a[b] = e[b];
        a.sort(function (c, d) {
            var a = c.innerText || c.textContent,
                b = d.innerText || d.textContent;
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        });
        var c = 0;
        for (; c < a.length; c++)
            if (f == a[c]) {
                c++;
                break
            } for (; c < a.length; c++)
            if (d.getFirstChar(a[c]) == g) return d.getHref(a[c]);
        for (b = 0; b < a.length; b++)
            if (d.getFirstChar(a[b]) == g && f != a[b]) return d.getHref(a[b]);
        return null
    },
    getFirstChar: function (b) {
        var a = b.innerText || b.textContent;
        if (a != undefined && a != null && a.length > 0) return a.substr(0, 1).toUpperCase();
        else return ""
    },
    getNextKey: function (e, d) {
        var b = this,
            a = 0;
        for (var c = 0; c < b.Keys.length; c++)
            if (b.Keys[c] == e) {
                a = c;
                break
            } a = a + d;
        if (a > b.Keys.length) a = 0;
        else if (a < 0) a = b.Keys.length - 1;
        return b.Keys[a]
    },
    getNextSibling: function (g, f) {
        var e = this.getActiveLink(),
            c = e.parentNode;
        while (c.tagName.toLowerCase() != "tr" && c.parentNode != null) c = c.parentNode;
        var b = c.getElementsByTagName("a"),
            a = 0;
        for (var d = 0; d < b.length; d++)
            if (e.href == b[d].href) {
                a = d;
                break
            } a = a + f;
        if (a < 0) a = 0;
        else if (a >= b.length) a = b.length - 1;
        return this.getHref(b[a])
    },
    doKeyUp: function (a) {
        this.execute = function (b) {
            if (!b) b = window.event;
            if (b.keyCode == 16) {
                a.shiftKeyDown = false;
                if (b.preventDefault) b.preventDefault();
                else b.returnValue = false;
                b.cancelBubble = true;
                return true
            } else return false
        }
    },
    doKeyPress: function (a) {
        this.execute = function (b) {
            if (!b) b = window.event;
            a.keysBuffer += String.fromCharCode(b.charCode || b.keyCode).toLowerCase();
            clearTimeout(a.keyTimeOut);
            a.keyTimeOut = setTimeout(function () {
                a.keysBuffer = ""
            }, 1e3)
        }
    },
    doKeyDown: function (a, b) {
        this.execute = function (e) {
            var c = false,
                d = null;
            if (!e) e = window.event;
            var g = a.getLinks(),
                f = a.elemSvID.value,
                j = c;
            switch (e.keyCode) {
                case 16:
                    a.shiftKeyDown = true;
                    return c;
                case 9:
                    if (a.shiftKeyDown) d = a.getNextKey(f, -1);
                    else d = a.getNextKey(f, 1);
                    break;
                case 40:
                    d = a.getNextKey(f, 1);
                    break;
                case 38:
                    d = a.getNextKey(f, -1);
                    break;
                case 39:
                    d = a.getNextSibling(f, 1);
                    break;
                case 37:
                    d = a.getNextSibling(f, -1);
                    break;
                case 13:
                case 27:
                    b();
                    return c;
                default:
                    j = true
            }
            if (!j) {
                var i = g[0];
                for (var h = 0; h < g.length; h++)
                    if (g[h].href.indexOf("#" + d) != -1) {
                        i = g[h];
                        break
                    } try {
                    i.focus();
                    i.onclick()
                } catch (k) {}
                return c
            } else {
                window.evt = e;
                setTimeout(function () {
                    if (!e) e = window.evt;
                    var c = a.getLinks(),
                        d;
                    for (var b = 0; b < c.length; b++) {
                        var f = c[b].outerText || c[b].text;
                        if (f.toLowerCase().indexOf(a.keysBuffer) == 0 && f != (a.getActiveLink().outerText || a.getActiveLink().text)) {
                            d = c[b];
                            break
                        }
                    }
                    try {
                        if (d) {
                            d.focus();
                            d.onclick()
                        }
                    } catch (g) {}
                }, 30)
            }
            return true
        }
    },
    Hide: function () {
        this.HideCurrentPopup()
    },
    Show: function (c, b) {
        var d = true,
            a = this;
        if (b) {
            if (b.keyCode == 27) {
                a.Hide(c, b);
                return d
            }
            if (b.keyCode && b.keyCode != 40) return false;
            if (window.curDisplayedPopup == c) {
                a.HideCurrentPopup();
                return d
            }
            a.HideCurrentPopup();
            b.cancelBubble = d;
            if (a.ChangeObjectDisplay(c, "block")) {
                window.curDisplayedDDHeader = a.elemHeader;
                window.curDisplayedPopup = c;
                a.getActiveLink().focus();
                Util.addClass(a.elemHeader, "DDSActive");
                return d
            }
        }
        return false
    },
    cropText: function () {
        var c = "overflow",
            a = this,
            f = "...",
            b = a.elemHeader.innerHTML;
        a.elemHeader.title = b;
        a.elemHeader.innerHTML += "____";
        a.elemHeader.style[c] = "hidden";
        var g = a.elemHeader.clientWidth,
            h = a.elemHeader.scrollWidth,
            d = g * 1 / h * 1;
        if (d < 1) {
            var e = Math.ceil(d * b.length);
            if (e < b.length) b = String(b).substring(0, e - f.length) + f
        }
        a.elemHeader.style[c] = "visible";
        a.elemHeader.innerHTML = b
    },
    getHref: function (a) {
        return a.href.substr(a.href.indexOf("#") + 1)
    },
    setValue: function (b, f) {
        var a = this;
        if (b) {
            var c = (new RegExp(" (" + b + ") ", "i")).exec(a.KeyMap);
            if (c && c[1]) b = c[1]
        }
        if (a.Items[b] == null) throw new Error("Value is not in the current list.");
        a.elemSvID.value = b;
        a.elemHeader.value = a.Items[b];
        if (f != "true") a.addMRUL(b);
        var e = document.getElementById(a.name);
        if (e.tagName == "SELECT")
            for (var d = 0; d < e.options.length; d++) {
                var g = e.options[d];
                if (g.value == b) {
                    g.selected = "selected";
                    break
                }
            }
        a.setText(a.Items[b], f)
    },
    getValue: function () {
        return this.elemSvID.value
    },
    setText: function (c, d) {
        var a = this,
            b = document.getElementById(a.name);
        if (b.tagName.toLowerCase() == "select")
            if (b.value == "") b.options[0].text = c;
            else if (b.options[0].value == "") b.options[0].text = a.Items[""];
        a.elemTextId.value = c;
        a.elemHeader.innerHTML = c;
        a.cropText();
        if (d != "true") a.onChanged(c, a.Items[c])
    },
    getText: function () {
        return this.elemTextId.value
    },
    onclick: function (a) {
        this.setValue(a);
        return false
    },
    ondragstart: function (a) {
        if (!a) a = window.event;
        if (a.preventDefault) a.preventDefault()
    },
    OnSelectedValueChanged: function () {
        return this.onChanged
    },
    HideCurrentPopup: function () {
        if (window.curDisplayedPopup) {
            Util.GetElement(window.curDisplayedPopup).style.display = "none";
            Util.removeClass(window.curDisplayedDDHeader, "DDSActive");
            window.curDisplayedPopup = false;
            window.curDisplayedDDHeader = null
        }
        this.shiftKeyDown = false
    },
    ChangeObjectDisplay: function (c, b) {
        var a = Util.GetStyleObject(c);
        if (a && a.display) {
            a.display = b;
            return true
        } else return false
    },
    addMRUL: function (d) {
        var a = this;
        if (!d) return;
        if (a.MRUL[0] == d) return;
        var c = 0,
            b;
        for (b = 1; b < a.MRUL.length; b++)
            if (a.MRUL[b] == d) {
                c = b;
                break
            } if (c == 0) a.MRUL.unshift(d);
        else {
            var e = c > 0 ? a.MRUL[c] : d;
            for (b = c; b > 0; b--) a.MRUL[b] = a.MRUL[b - 1];
            a.MRUL[0] = e
        }
        while (a.MRUL.length > a.MAX_MRUL) a.MRUL.pop();
        Util.SetCookie(a.mrul_cookie, a.MRUL, true, Util.GetPath())
    }
};
window['_mstConfig'].floaterStylePath = 'http://www.microsofttranslator.com/static/26497291/css/WidgetV3.css?v=26497291';
window['_mstConfig'].translateWithBing = '通过 {0} 翻译';
window['_mstConfig'].withBing = '通过 {0}';
window['_mstConfig'].autoDetected = '{0}（已自动检测）';

function loadAllScripts(fn) {
    var intervalID = setInterval(function () {
        if (document.readyState != 'complete') return;
        clearInterval(intervalID);
        fn();
    }, 10);
}

function onloadCallback() {
    var head = document.getElementsByTagName('head')[0];
    try {
        var body = document.getElementsByTagName('body')[0];
        var numChildren = body.children.length;
        var numScripts = body.getElementsByTagName('script').length;

        function appendHTMLToBody(html) {
            var temp = document.createElement('div');
            temp.innerHTML = html;
            for (var i = 0; i < temp.children.length; i++) {
                body.appendChild(temp.children[i]);
            }
        }
        appendHTMLToBody(decodeURIComponent('%3ctitle%3e%20%3c%2ftitle%3e'));
        appendHTMLToBody(decodeURIComponent('%20%3cdiv%20id%3d%22WidgetFloaterPanels%22%20translate%3d%22no%22%20style%3d%22display%3a%20none%3btext-align%3a%20left%3bdirection%3a%20ltr%22%20class%3d%22LTRStyle%22%20%3e%20%3cdiv%20id%3d%22WidgetFloater%22%20style%3d%22display%3a%20none%22%20%3e%20%3cdiv%20id%3d%22WidgetLogoPanel%22%3e%20%3cspan%20id%3d%22WidgetTranslateWithSpan%22%20style%3d%22text-align%3aleft%3b%22%3e%e5%bf%85%e5%ba%94%e5%9c%a8%e7%ba%bf%e7%bf%bb%e8%af%91%3c%2fspan%3e%20%3cspan%20id%3d%22WidgetCloseButton%22%20title%3d%22%e9%80%80%e5%87%ba%e7%bf%bb%e8%af%91%22%20onclick%3d%22Microsoft.Translator.FloaterOnClose()%22%3e%3cimg%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f26497291%2fimg%2fclose_x.png%22%20id%3d%22WidgetCloseImage%22%20class%3d%22WidgetCloseImage%22%20%2f%3e%3c%2fspan%3e%3c%2fdiv%3e%20%3cdiv%20id%3d%22LanguageMenuPanel%22%3e%20%3ca%20href%3d%22https%3a%2f%2faka.ms%2fwidget-retirement%22%20target%3d%22_blank%22%20title%3d%22%e7%bb%93%e6%9d%9f%e5%af%b9%e7%bd%91%e9%a1%b5%e7%bf%bb%e8%af%91%20%e5%b0%8f%e5%b7%a5%e5%85%b7%e7%9a%84%e6%94%af%e6%8c%81%22%3e%e4%b8%8d%e5%8f%af%e7%94%a8%3c%2fa%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22CTFLinksPanel%22%3e%20%3cspan%20id%3d%22ExternalLinksPanel%22%3e%3ca%20id%3d%22BingTranslatorLink%22%20title%3d%22bing.com%2ftranslator%22%20href%3d%22http%3a%2f%2fwww.bing.com%2ftranslator%22%20target%3d%22_blank%22%3e%20%3cimg%20id%3d%22BingTranslatorLinkImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f26497291%2fimg%2fbingmark.png%22%20%2f%3e%3c%2fa%3e%20%3ca%20id%3d%22FacebookLink%22%20href%3d%22https%3a%2f%2fwww.facebook.com%2fmicrosofttranslator%22%20title%3d%22Facebook%20%e5%bf%85%e5%ba%94%e5%9c%a8%e7%ba%bf%e7%bf%bb%e8%af%91%22%20target%3d%22_blank%22%3e%20%3cimg%20id%3d%22FacebookImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f26497291%2fimg%2ffbookmark.png%22%20%2f%3e%3c%2fa%3e%20%3c%2fspan%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22FloaterProgressBar%22%3e%20%3cdiv%20id%3d%22ProgressFill%22%20%3e%20%e6%ad%a3%e5%9c%a8%e7%bf%bb%e8%af%91...%20%3c%2fdiv%3e%20%3c%2fdiv%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22WidgetFloaterCollapsed%22%20style%3d%22display%3a%20none%22%3e%20%3cspan%20id%3d%22WidgetFloaterCollapsedSpan%22%3e%e5%bf%85%e5%ba%94%e5%9c%a8%e7%ba%bf%e7%bf%bb%e8%af%91%3c%2fspan%3e%20%3cspan%20id%3d%22WidgetCloseButtonCollapsed%22%20title%3d%22%e9%80%80%e5%87%ba%e7%bf%bb%e8%af%91%22%20onclick%3d%22Microsoft.Translator.FloaterOnClose()%22%3e%3cimg%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f26497291%2fimg%2fclose_x.png%22%20id%3d%22WidgetCloseImageCollapsed%22%20class%3d%22WidgetCloseImage%22%20%2f%3e%3c%2fspan%3e%3c%2fdiv%3e%20%3cdiv%20id%3d%22FloaterSharePanel%22%20style%3d%22display%3a%20none%22%20%3e%20%3cdiv%20id%3d%22ShareTextDiv%22%3e%20%3cspan%20id%3d%22ShareTextSpan%22%3e%20%e5%a4%8d%e5%88%b6%e4%b8%8b%e9%9d%a2%e7%9a%84%20URL%20%3c%2fspan%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22ShareTextboxDiv%22%3e%20%3cinput%20name%3d%22ShareTextbox%22%20type%3d%22text%22%20id%3d%22ShareTextbox%22%20readonly%3d%22readonly%22%20%2f%3e%20%3ca%20id%3d%22EmailLink%22%20title%3d%22%e9%80%9a%e8%bf%87%e7%94%b5%e5%ad%90%e9%82%ae%e4%bb%b6%e5%8f%91%e9%80%81%e6%ad%a4%e7%bf%bb%e8%af%91%22%3e%20%3cimg%20id%3d%22EmailImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f26497291%2fimg%2femail_icon.png%22%20%2f%3e%3c%2fa%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22ShareFooter%22%3e%20%3cspan%20id%3d%22ShareHelpSpan%22%3e%3ca%20id%3d%22ShareHelpLink%22%3e%20%3cimg%20id%3d%22ShareHelpImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f26497291%2fimg%2fembed_question.png%22%20%2f%3e%3c%2fa%3e%3c%2fspan%3e%20%3cspan%20id%3d%22ShareBackSpan%22%3e%3ca%20id%3d%22ShareBack%22%20href%3d%22javascript%3aMicrosoft.Translator.FloaterOnShareBackClick()%22%20title%3d%22%e8%bf%94%e5%9b%9e%e7%bf%bb%e8%af%91%22%3e%20%e8%bf%94%e5%9b%9e%3c%2fa%3e%3c%2fspan%3e%20%3c%2fdiv%3e%20%3cinput%20name%3d%22EmailSubject%22%20type%3d%22hidden%22%20id%3d%22EmailSubject%22%20value%3d%22%e6%9f%a5%e7%9c%8b%e6%ad%a4%e9%a1%b5%e4%bb%8e%20%7b1%7d%20%e5%88%b0%20%7b0%7d%20%e7%9a%84%e7%bf%bb%e8%af%91%22%20%2f%3e%20%3cinput%20name%3d%22EmailBody%22%20type%3d%22hidden%22%20id%3d%22EmailBody%22%20value%3d%22%e8%af%91%e6%96%87%3a%20%7b0%7d%250d%250a%e5%8e%9f%e6%96%87%3a%20%7b1%7d%250d%250a%250d%250a%e8%87%aa%e5%8a%a8%e7%bf%bb%e8%af%91%e7%94%b1%20Microsoft%c2%ae%20Translator%20%e6%8f%90%e4%be%9b%250d%250ahttp%3a%2f%2fwww.bing.com%2ftranslator%3fref%3dMSTWidget%22%20%2f%3e%20%3cinput%20type%3d%22hidden%22%20id%3d%22ShareHelpText%22%20value%3d%22%e6%ad%a4%e9%93%be%e6%8e%a5%e5%85%81%e8%ae%b8%e8%ae%bf%e9%97%ae%e8%80%85%e5%90%af%e5%8a%a8%e6%9c%ac%e9%a1%b5%e9%9d%a2%ef%bc%8c%e5%b9%b6%e8%87%aa%e5%8a%a8%e7%bf%bb%e8%af%91%e4%b8%ba%7b0%7d%e3%80%82%22%2f%3e%20%3c%2fdiv%3e%20%3c%2fdiv%3e%20'));
        var code = '';
        var scripts = body.getElementsByTagName('script');
        for (var i = numScripts; i < scripts.length; i++) {
            if (scripts[i].innerHTML.length != 0) {
                code += scripts[i].innerHTML;
            }
        }
        eval(code);
    } catch (e) {
        console.error(e);
    }
    Microsoft.Translator.FloaterInitialize('zh-CHS', 'true', '');
}
loadAllScripts(onloadCallback);