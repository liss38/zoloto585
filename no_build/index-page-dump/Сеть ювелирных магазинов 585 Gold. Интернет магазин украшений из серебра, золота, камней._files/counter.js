/**
 * asynchronous report class
 *
 * @author Jangot, KiD, serj
 *
 * @param url for request (should be a picture)
 *
 */
function adhandsReport(url) {
    this.url = url?url:'http://sedu.adhands.ru/site/';
    this.dataType = 'string';
    this.fortyDays = 3456000;

    var requiredParams = [
        'utm_campaign',
        'utm_medium',
        'utm_source'
    ];

    var optionalParams = [
        'utm_content',
        'campaign',
        'ad',
        'phrase',
        'key'
    ];

    /**
     * Filter params
     *
     * @param params
     * @returns {{}}
     */
    var filterParams = function(params) {
        var filteredParams = {};
        var findParams = requiredParams.concat(optionalParams);

        for (var i = 0;i<findParams.length;i++) {
            var name = findParams[i];
            if (params[name]) {
                filteredParams[name] = params[name];
            }
        }
        return filteredParams;
    };

    /**
     * Add length variable
     *
     * @param params
     * @return {boolean}
     */
    var hasRequiredUtmParams = function(params) {
        var object = params || {};
        var length = 0;

        for (var i = 0;i<requiredParams.length;i++) {
            var name = requiredParams[i];
            if (object[name]) {
                length++;
            }
        }
        return (length === requiredParams.length);
    };

    /**
     * stores data for request
     */
    this.storedData = {};

    /**
     * function for data call without parameters, it return data object call
     * with "name" return value this name call width "name" & "value" set with
     * value
     */
    this.data = function(name, value) {
        if (arguments.length == 0) {
            return this.getData();
        } else if (arguments.length == 1) {
            return this.storedData[name];
        } else {
            this.storedData[name] = value;
            return this;
        }
    };

    /**
     * @return data
     */
    this.getData = function () {
        var string = '',
            ref = ''
            ;
        switch (this.dataType) {
            case 'string':
                for (var name in this.storedData) if (this.storedData.hasOwnProperty(name)) {
                    if (name == 'ref') {
                        ref = this.storedData[name];
                        continue;
                    }
                    string += (name + '=' + this.storedData[name] + '&');
                }
                if (ref != '') {
                    string += ('ref=' + ref + '&');
                }
                string = string.substring(0, string.length - 1);
                break;
            case 'JSON':
                string = '{';
                for (var name in this.storedData) if (this.storedData.hasOwnProperty(name)) {
                    if (name == 'ref') {
                        ref = this.storedData[name];
                        continue;
                    }
                    string += ('"' + name + '"' + ':' + '"' + this.storedData[name]) + '"' + ',';
                }
                if (ref != '') {
                    string += ('"ref":"' + ref + '",');
                }
                string = string.substring(0, string.length - 1) + '}';
                break;
        }
        return string;
    };

    /**
     * send data to server
     */
    this.send = function () {
        if (arguments.length > 0 && (typeof arguments[0] == 'object')) {
            for (var key in arguments[0]) if (arguments[0].hasOwnProperty(key)) {
                this.data(key, arguments[0][key]);
            }
        }
        var img = document.createElement('img');
        var data = this.getData();
        img.src = this.url + '?' + data;
    };

    /**
     * set id in storedData
     */
    this.id = function (value) {
        this.data('clid', value);
    };

    /**
     * set link in storedData
     */
    this.link = function (value) {
        this.data('link', value);
    };

    /**
     * Try write test variable and check existing test variable
     *
     * @returns {boolean}
     */
    this.cookiesIsWritable = function() {
        return ("cookie" in document
            && (document.cookie.length > 0
            || (document.cookie = "adhands_test")
                .indexOf
                .call(document.cookie, "adhands_test") > -1
            ));
    };

    /**
     * Set cookie value
     *
     * @param name string
     * @param value mixed
     * @param props object
     */
    this.setCookie = function(name, value, props) {
        var props = props || {};
        var exp = props.expires;
        if (typeof exp == "number" && exp) {
            var d = new Date();
            d.setTime(d.getTime() + exp * 1000);
            exp = props.expires = d
        }
        if(exp && exp.toUTCString) {
            props.expires = exp.toUTCString()
        }

        var value = encodeURIComponent(value);
        var updatedCookie = name + "=" + value;
        for(var propName in props) if (props.hasOwnProperty(propName)) {
            updatedCookie += "; " + propName;
            var propValue = props[propName];
            if(propValue !== true){
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    };

    /**
     * Get cookie value
     *
     * @param name
     * @returns {string|null}
     */
    this.getCookie = function(name) {
        var result = null;
        var value = document.cookie;
        var start = value.indexOf(" " + name + "=");
        if (start == -1) {
            start = value.indexOf(name + "=");
        }
        if (start != -1) {
            start = value.indexOf("=", start) + 1;
            var end = value.indexOf(";", start);
            if (end == -1) {
                end = value.length;
            }
            result = decodeURIComponent(value.substring(start,end));
        }
        return result;
    };

    /**
     * Generate UID
     *
     * @returns string
     */
    this.uidGenerator = function() {
        var s4 = function() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    };

    /**
     * Get UID
     *
     * @returns string
     */
    this.getUid = function() {
        var uid;
        if (this.hasCookie('adhands_uid')) {
            uid = this.getCookie('adhands_uid');
        } else {
            uid = this.uidGenerator();
            this.setCookie('adhands_uid', uid, {expires: this.fortyDays, path: '/'});
        }

        return uid;
    };

    /**
     * Invalidate labels
     */
    this.clearUtmCookies = function() {
        var allParams = requiredParams.concat(optionalParams);
        for (var key in allParams) if (allParams.hasOwnProperty(key)) {
            this.setCookie('adhands_'+allParams[key], null, {expires: -1, path: '/'});
        }
    };

    /**
     * Create data to add cookies
     *
     * @param params object
     * @returns object
     */
    this.setUtmCookies = function(params) {
        this.clearUtmCookies();
        params.time = new Date().getTime();
        if (typeof params == 'object') {
            for (var key in params) if (params.hasOwnProperty(key)) {
                this.setCookie('adhands_'+key, params[key], {expires: this.fortyDays, path: '/'});
            }
        }
        return params;
    };

    /**
     * Get utm cookies from cookies
     *
     * @returns object
     */
    this.getUtmCookies = function() {
        var params = {};
        var findParams = requiredParams.concat(optionalParams);

        for (var i=0;i<findParams.length;i++) {
            params=this.checkCookieAndAdd(findParams[i],params);
        }
        params=this.checkCookieAndAdd('time',params);
        return params;
    };

    /**
     * Check cookie and add to object
     *
     * @param name string
     * @param paramsObject object
     * @returns object
     */
    this.checkCookieAndAdd = function(name, paramsObject) {
        var nameWithPrefix = 'adhands_' + name;
        if (this.hasCookie(nameWithPrefix)) {
            paramsObject[name] = this.getCookie(nameWithPrefix);
        }
        return paramsObject;
    };

    /**
     * Check existing cookie
     *
     * @param name
     * @returns {boolean}
     */
    this.hasCookie = function(name) {
        return this.getCookie(name) !== null;
    };

    /**
     * save location
     */
    this.data('ref', encodeURIComponent(document.referrer));

    /**
     * Check cookies is switched to ON
     */
    this.data(
        'adhands_cookies_enabled',
        +(this.cookiesIsWritable())
    );

    /**
     * fingerprint
     */
    var fp = new Fingerprint();
    this.data('fingerprint', fp.get());

    /**
     * Set UTM cookies
     */
    var params = {};
    if (this.cookiesIsWritable()) {
        var searchParams = [];
        if (location.search) {
            var ub = new AdHandsUrlBuilder(location.search);
            searchParams = filterParams(ub.getParams());
        }
        params = (location.search && hasRequiredUtmParams(searchParams))
                ? this.setUtmCookies(searchParams)
                : this.getUtmCookies()
            ;
    }

    params.uid = this.getUid();
    for (var key in params) if (params.hasOwnProperty(key)) {
        this.data('adhands_' + key, params[key]);
    }

}

/*
 * fingerprintJS 0.3.2 - Fast browser fingerprint library
 * https://github.com/Valve/fingerprintjs
 * Copyright (c) 2013 Valentin Vasilyev (iamvalentin@gmail.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
/*jslint browser: true, indent: 2 */
(function(scope) {
    'use strict';

    var Fingerprint = function(){
        var nativeForEach = Array.prototype.forEach;
        var nativeMap = Array.prototype.map;
        this.each = function(obj, iterator, context) {
            if(obj === null) return;
            if(nativeForEach && obj.forEach === nativeForEach) {
                obj.forEach(iterator, context);
            } else if (obj.length === +obj.length) {
                for (var i = 0, l = obj.length; i < l; i++) {
                    if (iterator.call(context, obj[i], i, obj) === {}) return;
                }
            } else {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (iterator.call(context, obj[key], key, obj) === {}) return;
                    }
                }
            }
        };
        this.map = function(obj, iterator, context) {
            var results = [];
            // Not using strict equality so that this acts as a
            // shortcut to checking for `null` and `undefined`.
            if (obj == null) return results;
            if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
            this.each(obj, function(value, index, list) {
                results[results.length] = iterator.call(context, value, index, list);
            });
            return results;
        };
    };

    Fingerprint.prototype = {

        get: function(){
            var keys = [
                navigator.userAgent,
                navigator.language,
                screen.colorDepth,
                new Date().getTimezoneOffset(),
                !!scope.sessionStorage,
                this.hasLocalStorage(),
                !!window.indexedDB,
// @todo this code throw error if counter.js included in head tag: typeof(document.body.addBehavior),
                typeof(window.openDatabase),
                navigator.cpuClass,
                navigator.platform,
                navigator.doNotTrack
            ];
            var pluginsString = this.map(navigator.plugins, function(p){
                var mimeTypes = this.map(p, function(mt){
                    return [mt.type, mt.suffixes].join('~');
                }).join(',');
                return [p.name, p.description, mimeTypes].join('::');
            }, this).join(';');
            keys.push(pluginsString);
            return this.murmurhash3_32_gc(keys.join('###'), 31);
        },

        /**
         * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
         *
         * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
         * @see http://github.com/garycourt/murmurhash-js
         * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
         * @see http://sites.google.com/site/murmurhash/
         *
         * @param {string} key ASCII only
         * @param {number} seed Positive integer only
         * @return {number} 32-bit positive integer hash
         */

        murmurhash3_32_gc: function(key, seed) {
            var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;

            remainder = key.length & 3; // key.length % 4
            bytes = key.length - remainder;
            h1 = seed;
            c1 = 0xcc9e2d51;
            c2 = 0x1b873593;
            i = 0;

            while (i < bytes) {
                k1 =
                    ((key.charCodeAt(i) & 0xff)) |
                        ((key.charCodeAt(++i) & 0xff) << 8) |
                        ((key.charCodeAt(++i) & 0xff) << 16) |
                        ((key.charCodeAt(++i) & 0xff) << 24);
                ++i;

                k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

                h1 ^= k1;
                h1 = (h1 << 13) | (h1 >>> 19);
                h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
                h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
            }

            k1 = 0;

            switch (remainder) {
                case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
                case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
                case 1: k1 ^= (key.charCodeAt(i) & 0xff);

                    k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
                    k1 = (k1 << 15) | (k1 >>> 17);
                    k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
                    h1 ^= k1;
            }

            h1 ^= key.length;

            h1 ^= h1 >>> 16;
            h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= h1 >>> 13;
            h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
            h1 ^= h1 >>> 16;

            return h1 >>> 0;
        },

        // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
        hasLocalStorage: function(){
            try{
                return !!scope.localStorage;
            } catch(e) {
                return true; // SecurityError when referencing it means it exists
            }
        }
    };

    scope.Fingerprint = Fingerprint;

    /**
     * Parsing url
     *
     * @param url string
     * @returns {{getParams: Function}}
     */
    function AdHandsUrlBuilder(url) {
        var paramsObject = {};
        /**
         * Parsing location.search
         * @param stringUrl
         *
         * todo: split by '*', because flash banners use '*' instead '&' in utm-labels
         */
        var fillParamsObject = function(stringUrl) {
            var i,
                paramObject,
                urlParams = (stringUrl) ? stringUrl.split(/[&*]/) : []
                ;
            for (i = 0; i < urlParams.length; i++) {
                paramObject = urlParams[i].split('=');
                paramsObject[paramObject[0]] = paramObject[1];
            }

        };

        /**
         * init constructor
         *
         * @param searchUrl
         */
        var init = function(searchUrl) {
            var stringUrl = searchUrl.substring(1);
            fillParamsObject(stringUrl);
        };

        if(url){
            init(url);
        }

        return {
            getParams: function() {
                return paramsObject;
            }
        };
    }

    scope.AdHandsUrlBuilder = AdHandsUrlBuilder;
})(window);