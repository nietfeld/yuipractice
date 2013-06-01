/*
YUI 3.10.1 (build 8bc088e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/jsonp/jsonp.js']) {
   __coverage__['build/jsonp/jsonp.js'] = {"path":"build/jsonp/jsonp.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":36}}},"2":{"name":"JSONPRequest","line":42,"loc":{"start":{"line":42,"column":0},"end":{"line":42,"column":24}}},"3":{"name":"(anonymous_3)","line":58,"loc":{"start":{"line":58,"column":12},"end":{"line":58,"column":37}}},"4":{"name":"(anonymous_4)","line":118,"loc":{"start":{"line":118,"column":22},"end":{"line":118,"column":34}}},"5":{"name":"(anonymous_5)","line":128,"loc":{"start":{"line":128,"column":11},"end":{"line":128,"column":23}}},"6":{"name":"wrap","line":156,"loc":{"start":{"line":156,"column":8},"end":{"line":156,"column":37}}},"7":{"name":"(anonymous_7)","line":158,"loc":{"start":{"line":158,"column":16},"end":{"line":158,"column":32}}},"8":{"name":"(anonymous_8)","line":222,"loc":{"start":{"line":222,"column":13},"end":{"line":222,"column":35}}},"9":{"name":"(anonymous_9)","line":241,"loc":{"start":{"line":241,"column":10},"end":{"line":241,"column":27}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":251,"column":43}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":35}},"3":{"start":{"line":42,"column":0},"end":{"line":44,"column":1}},"4":{"start":{"line":43,"column":4},"end":{"line":43,"column":38}},"5":{"start":{"line":46,"column":0},"end":{"line":225,"column":2}},"6":{"start":{"line":59,"column":8},"end":{"line":59,"column":23}},"7":{"start":{"line":72,"column":8},"end":{"line":72,"column":28}},"8":{"start":{"line":85,"column":8},"end":{"line":85,"column":28}},"9":{"start":{"line":88,"column":8},"end":{"line":90,"column":27}},"10":{"start":{"line":92,"column":8},"end":{"line":92,"column":37}},"11":{"start":{"line":94,"column":8},"end":{"line":96,"column":9}},"12":{"start":{"line":95,"column":12},"end":{"line":95,"column":64}},"13":{"start":{"line":99,"column":8},"end":{"line":104,"column":39}},"14":{"start":{"line":129,"column":8},"end":{"line":133,"column":16}},"15":{"start":{"line":136,"column":8},"end":{"line":138,"column":9}},"16":{"start":{"line":137,"column":12},"end":{"line":137,"column":32}},"17":{"start":{"line":140,"column":8},"end":{"line":142,"column":9}},"18":{"start":{"line":141,"column":12},"end":{"line":141,"column":38}},"19":{"start":{"line":143,"column":8},"end":{"line":145,"column":9}},"20":{"start":{"line":144,"column":12},"end":{"line":144,"column":38}},"21":{"start":{"line":146,"column":8},"end":{"line":146,"column":32}},"22":{"start":{"line":149,"column":8},"end":{"line":149,"column":57}},"23":{"start":{"line":150,"column":8},"end":{"line":150,"column":46}},"24":{"start":{"line":152,"column":8},"end":{"line":154,"column":9}},"25":{"start":{"line":153,"column":12},"end":{"line":153,"column":24}},"26":{"start":{"line":156,"column":8},"end":{"line":187,"column":9}},"27":{"start":{"line":157,"column":12},"end":{"line":186,"column":21}},"28":{"start":{"line":159,"column":20},"end":{"line":160,"column":46}},"29":{"start":{"line":166,"column":24},"end":{"line":175,"column":25}},"30":{"start":{"line":167,"column":28},"end":{"line":167,"column":52}},"31":{"start":{"line":168,"column":28},"end":{"line":168,"column":52}},"32":{"start":{"line":170,"column":28},"end":{"line":173,"column":29}},"33":{"start":{"line":171,"column":32},"end":{"line":171,"column":48}},"34":{"start":{"line":172,"column":32},"end":{"line":172,"column":54}},"35":{"start":{"line":174,"column":28},"end":{"line":174,"column":51}},"36":{"start":{"line":178,"column":20},"end":{"line":180,"column":21}},"37":{"start":{"line":179,"column":24},"end":{"line":179,"column":52}},"38":{"start":{"line":182,"column":20},"end":{"line":184,"column":21}},"39":{"start":{"line":183,"column":24},"end":{"line":183,"column":77}},"40":{"start":{"line":191,"column":8},"end":{"line":191,"column":55}},"41":{"start":{"line":196,"column":8},"end":{"line":203,"column":21}},"42":{"start":{"line":205,"column":8},"end":{"line":205,"column":20}},"43":{"start":{"line":223,"column":8},"end":{"line":223,"column":50}},"44":{"start":{"line":227,"column":0},"end":{"line":227,"column":30}},"45":{"start":{"line":241,"column":0},"end":{"line":244,"column":2}},"46":{"start":{"line":242,"column":4},"end":{"line":242,"column":40}},"47":{"start":{"line":243,"column":4},"end":{"line":243,"column":60}},"48":{"start":{"line":246,"column":0},"end":{"line":248,"column":1}},"49":{"start":{"line":247,"column":4},"end":{"line":247,"column":23}}},"branchMap":{"1":{"line":88,"type":"cond-expr","locations":[{"start":{"line":89,"column":12},"end":{"line":89,"column":41}},{"start":{"line":90,"column":12},"end":{"line":90,"column":26}}]},"2":{"line":90,"type":"binary-expr","locations":[{"start":{"line":90,"column":12},"end":{"line":90,"column":20}},{"start":{"line":90,"column":24},"end":{"line":90,"column":26}}]},"3":{"line":92,"type":"binary-expr","locations":[{"start":{"line":92,"column":19},"end":{"line":92,"column":30}},{"start":{"line":92,"column":34},"end":{"line":92,"column":36}}]},"4":{"line":94,"type":"if","locations":[{"start":{"line":94,"column":8},"end":{"line":94,"column":8}},{"start":{"line":94,"column":8},"end":{"line":94,"column":8}}]},"5":{"line":132,"type":"binary-expr","locations":[{"start":{"line":132,"column":21},"end":{"line":132,"column":32}},{"start":{"line":132,"column":36},"end":{"line":132,"column":44}}]},"6":{"line":136,"type":"if","locations":[{"start":{"line":136,"column":8},"end":{"line":136,"column":8}},{"start":{"line":136,"column":8},"end":{"line":136,"column":8}}]},"7":{"line":140,"type":"if","locations":[{"start":{"line":140,"column":8},"end":{"line":140,"column":8}},{"start":{"line":140,"column":8},"end":{"line":140,"column":8}}]},"8":{"line":143,"type":"if","locations":[{"start":{"line":143,"column":8},"end":{"line":143,"column":8}},{"start":{"line":143,"column":8},"end":{"line":143,"column":8}}]},"9":{"line":152,"type":"if","locations":[{"start":{"line":152,"column":8},"end":{"line":152,"column":8}},{"start":{"line":152,"column":8},"end":{"line":152,"column":8}}]},"10":{"line":157,"type":"cond-expr","locations":[{"start":{"line":158,"column":16},"end":{"line":185,"column":17}},{"start":{"line":186,"column":16},"end":{"line":186,"column":20}}]},"11":{"line":166,"type":"if","locations":[{"start":{"line":166,"column":24},"end":{"line":166,"column":24}},{"start":{"line":166,"column":24},"end":{"line":166,"column":24}}]},"12":{"line":170,"type":"if","locations":[{"start":{"line":170,"column":28},"end":{"line":170,"column":28}},{"start":{"line":170,"column":28},"end":{"line":170,"column":28}}]},"13":{"line":178,"type":"if","locations":[{"start":{"line":178,"column":20},"end":{"line":178,"column":20}},{"start":{"line":178,"column":20},"end":{"line":178,"column":20}}]},"14":{"line":178,"type":"binary-expr","locations":[{"start":{"line":178,"column":24},"end":{"line":178,"column":46}},{"start":{"line":178,"column":50},"end":{"line":178,"column":72}}]},"15":{"line":182,"type":"if","locations":[{"start":{"line":182,"column":20},"end":{"line":182,"column":20}},{"start":{"line":182,"column":20},"end":{"line":182,"column":20}}]},"16":{"line":246,"type":"if","locations":[{"start":{"line":246,"column":0},"end":{"line":246,"column":0}},{"start":{"line":246,"column":0},"end":{"line":246,"column":0}}]}},"code":["(function () { YUI.add('jsonp', function (Y, NAME) {","","var isFunction = Y.Lang.isFunction;","","/**"," * <p>Provides a JSONPRequest class for repeated JSONP calls, and a convenience"," * method Y.jsonp(url, callback) to instantiate and send a JSONP request.</p>"," *"," * <p>Both the constructor as well as the convenience function take two"," * parameters: a url string and a callback.</p>"," *"," * <p>The url provided must include the placeholder string"," * &quot;{callback}&quot; which will be replaced by a dynamically"," * generated routing function to pass the data to your callback function."," * An example url might look like"," * &quot;http://example.com/service?callback={callback}&quot;.</p>"," *"," * <p>The second parameter can be a callback function that accepts the JSON"," * payload as its argument, or a configuration object supporting the keys:</p>"," * <ul>"," *   <li>on - map of callback subscribers"," *      <ul>"," *         <li>success - function handler for successful transmission</li>"," *         <li>failure - function handler for failed transmission</li>"," *         <li>timeout - function handler for transactions that timeout</li>"," *      </ul>"," *  </li>"," *  <li>format  - override function for inserting the proxy name in the url</li>"," *  <li>timeout - the number of milliseconds to wait before giving up</li>"," *  <li>context - becomes <code>this</code> in the callbacks</li>"," *  <li>args    - array of subsequent parameters to pass to the callbacks</li>"," *  <li>allowCache - use the same proxy name for all requests? (boolean)</li>"," * </ul>"," *"," * @module jsonp"," * @class JSONPRequest"," * @constructor"," * @param url {String} the url of the JSONP service"," * @param callback {Object|Function} the default callback configuration or"," *                                   success handler"," */","function JSONPRequest() {","    this._init.apply(this, arguments);","}","","JSONPRequest.prototype = {","    /**","     * Set up the success and failure handlers and the regex pattern used","     * to insert the temporary callback name in the url.","     *","     * @method _init","     * @param url {String} the url of the JSONP service","     * @param callback {Object|Function} Optional success callback or config","     *                  object containing success and failure functions and","     *                  the url regex.","     * @protected","     */","    _init : function (url, callback) {","        this.url = url;","","        /**","         * Map of the number of requests currently pending responses per","         * generated proxy.  Used to ensure the proxy is not flushed if the","         * request times out and there is a timeout handler and success","         * handler, and used by connections configured to allowCache to make","         * sure the proxy isn't deleted until the last response has returned.","         *","         * @property _requests","         * @private","         * @type {Object}","         */","        this._requests = {};","","        /**","         * Map of the number of timeouts received from the destination url","         * by generated proxy.  Used to ensure the proxy is not flushed if the","         * request times out and there is a timeout handler and success","         * handler, and used by connections configured to allowCache to make","         * sure the proxy isn't deleted until the last response has returned.","         *","         * @property _timeouts","         * @private","         * @type {Object}","         */","        this._timeouts = {};","","        // Accept a function, an object, or nothing","        callback = (isFunction(callback)) ?","            { on: { success: callback } } :","            callback || {};","","        var subs = callback.on || {};","","        if (!subs.success) {","            subs.success = this._defaultCallback(url, callback);","        }","","        // Apply defaults and store","        this._config = Y.merge({","                context: this,","                args   : [],","                format : this._format,","                allowCache: false","            }, callback, { on: subs });","    },","","    /**","     * Override this method to provide logic to default the success callback if","     * it is not provided at construction.  This is overridden by jsonp-url to","     * parse the callback from the url string.","     *","     * @method _defaultCallback","     * @param url {String} the url passed at construction","     * @param config {Object} (optional) the config object passed at","     *                        construction","     * @return {Function}","     */","    _defaultCallback: function () {},","","    /**","     * Issues the JSONP request.","     *","     * @method send","     * @param args* {any} any additional arguments to pass to the url formatter","     *              beyond the base url and the proxy function name","     * @chainable","     */","    send : function () {","        var self   = this,","            args   = Y.Array(arguments, 0, true),","            config = self._config,","            proxy  = self._proxy || Y.guid(),","            url;","","        // TODO: support allowCache as time value","        if (config.allowCache) {","            self._proxy = proxy;","        }","","        if (self._requests[proxy] === undefined) {","            self._requests[proxy] = 0;","        }","        if (self._timeouts[proxy] === undefined) {","            self._timeouts[proxy] = 0;","        }","        self._requests[proxy]++;","","","        args.unshift(self.url, 'YUI.Env.JSONP.' + proxy);","        url = config.format.apply(self, args);","","        if (!config.on.success) {","            return self;","        }","","        function wrap(fn, isTimeout) {","            return (isFunction(fn)) ?","                function (data) {","                    var execute = true,","                        counter = '_requests';","","                    //if (config.allowCache) {","                        // A lot of wrangling to make sure timeouts result in","                        // fewer success callbacks, but the proxy is properly","                        // cleaned up.","                        if (isTimeout) {","                            ++self._timeouts[proxy];","                            --self._requests[proxy];","                        } else {","                            if (!self._requests[proxy]) {","                                execute = false;","                                counter = '_timeouts';","                            }","                            --self[counter][proxy];","                        }","                    //}","","                    if (!self._requests[proxy] && !self._timeouts[proxy]) {","                        delete YUI.Env.JSONP[proxy];","                    }","","                    if (execute) {","                        fn.apply(config.context, [data].concat(config.args));","                    }","                } :","                null;","        }","","        // Temporary un-sandboxed function alias","        // TODO: queuing","        YUI.Env.JSONP[proxy] = wrap(config.on.success);","        ","        // Y.Get transactions block each other by design, but can easily","        //  be made non-blocking by just calling execute() on the transaction.","        // https://github.com/yui/yui3/pull/393#issuecomment-11961608","        Y.Get.js(url, {","            onFailure : wrap(config.on.failure),","            onTimeout : wrap(config.on.timeout, true),","            timeout   : config.timeout,","            charset   : config.charset,","            attributes: config.attributes,","            async     : config.async","        }).execute();","","        return self;","    },","","    /**","     * Default url formatter.  Looks for callback= in the url and appends it","     * if not present.  The supplied proxy name will be assigned to the query","     * param.  Override this method by passing a function as the","     * &quot;format&quot; property in the config object to the constructor.","     *","     * @method _format","     * @param url { String } the original url","     * @param proxy {String} the function name that will be used as a proxy to","     *      the configured callback methods.","     * @param args* {any} additional args passed to send()","     * @return {String} fully qualified JSONP url","     * @protected","     */","    _format: function (url, proxy) {","        return url.replace(/\\{callback\\}/, proxy);","    }","};","","Y.JSONPRequest = JSONPRequest;","","/**"," *"," * @method jsonp"," * @param url {String} the url of the JSONP service with the {callback}"," *          placeholder where the callback function name typically goes."," * @param c {Function|Object} Callback function accepting the JSON payload"," *          as its argument, or a configuration object (see above)."," * @param args* {any} additional arguments to pass to send()"," * @return {JSONPRequest}"," * @static"," * @for YUI"," */","Y.jsonp = function (url,c) {","    var req = new Y.JSONPRequest(url,c);","    return req.send.apply(req, Y.Array(arguments, 2, true));","};","","if (!YUI.Env.JSONP) {","    YUI.Env.JSONP = {};","}","","","}, '3.10.1', {\"requires\": [\"get\", \"oop\"]});","","}());"]};
}
var __cov_ujvKiDWGSwwCzJBwq2DGWA = __coverage__['build/jsonp/jsonp.js'];
__cov_ujvKiDWGSwwCzJBwq2DGWA.s['1']++;YUI.add('jsonp',function(Y,NAME){__cov_ujvKiDWGSwwCzJBwq2DGWA.f['1']++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['2']++;var isFunction=Y.Lang.isFunction;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['3']++;function JSONPRequest(){__cov_ujvKiDWGSwwCzJBwq2DGWA.f['2']++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['4']++;this._init.apply(this,arguments);}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['5']++;JSONPRequest.prototype={_init:function(url,callback){__cov_ujvKiDWGSwwCzJBwq2DGWA.f['3']++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['6']++;this.url=url;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['7']++;this._requests={};__cov_ujvKiDWGSwwCzJBwq2DGWA.s['8']++;this._timeouts={};__cov_ujvKiDWGSwwCzJBwq2DGWA.s['9']++;callback=isFunction(callback)?(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['1'][0]++,{on:{success:callback}}):(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['1'][1]++,(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['2'][0]++,callback)||(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['2'][1]++,{}));__cov_ujvKiDWGSwwCzJBwq2DGWA.s['10']++;var subs=(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['3'][0]++,callback.on)||(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['3'][1]++,{});__cov_ujvKiDWGSwwCzJBwq2DGWA.s['11']++;if(!subs.success){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['4'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['12']++;subs.success=this._defaultCallback(url,callback);}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['4'][1]++;}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['13']++;this._config=Y.merge({context:this,args:[],format:this._format,allowCache:false},callback,{on:subs});},_defaultCallback:function(){__cov_ujvKiDWGSwwCzJBwq2DGWA.f['4']++;},send:function(){__cov_ujvKiDWGSwwCzJBwq2DGWA.f['5']++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['14']++;var self=this,args=Y.Array(arguments,0,true),config=self._config,proxy=(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['5'][0]++,self._proxy)||(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['5'][1]++,Y.guid()),url;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['15']++;if(config.allowCache){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['6'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['16']++;self._proxy=proxy;}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['6'][1]++;}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['17']++;if(self._requests[proxy]===undefined){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['7'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['18']++;self._requests[proxy]=0;}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['7'][1]++;}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['19']++;if(self._timeouts[proxy]===undefined){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['8'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['20']++;self._timeouts[proxy]=0;}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['8'][1]++;}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['21']++;self._requests[proxy]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['22']++;args.unshift(self.url,'YUI.Env.JSONP.'+proxy);__cov_ujvKiDWGSwwCzJBwq2DGWA.s['23']++;url=config.format.apply(self,args);__cov_ujvKiDWGSwwCzJBwq2DGWA.s['24']++;if(!config.on.success){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['9'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['25']++;return self;}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['9'][1]++;}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['26']++;function wrap(fn,isTimeout){__cov_ujvKiDWGSwwCzJBwq2DGWA.f['6']++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['27']++;return isFunction(fn)?(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['10'][0]++,function(data){__cov_ujvKiDWGSwwCzJBwq2DGWA.f['7']++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['28']++;var execute=true,counter='_requests';__cov_ujvKiDWGSwwCzJBwq2DGWA.s['29']++;if(isTimeout){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['11'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['30']++;++self._timeouts[proxy];__cov_ujvKiDWGSwwCzJBwq2DGWA.s['31']++;--self._requests[proxy];}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['11'][1]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['32']++;if(!self._requests[proxy]){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['12'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['33']++;execute=false;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['34']++;counter='_timeouts';}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['12'][1]++;}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['35']++;--self[counter][proxy];}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['36']++;if((__cov_ujvKiDWGSwwCzJBwq2DGWA.b['14'][0]++,!self._requests[proxy])&&(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['14'][1]++,!self._timeouts[proxy])){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['13'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['37']++;delete YUI.Env.JSONP[proxy];}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['13'][1]++;}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['38']++;if(execute){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['15'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['39']++;fn.apply(config.context,[data].concat(config.args));}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['15'][1]++;}}):(__cov_ujvKiDWGSwwCzJBwq2DGWA.b['10'][1]++,null);}__cov_ujvKiDWGSwwCzJBwq2DGWA.s['40']++;YUI.Env.JSONP[proxy]=wrap(config.on.success);__cov_ujvKiDWGSwwCzJBwq2DGWA.s['41']++;Y.Get.js(url,{onFailure:wrap(config.on.failure),onTimeout:wrap(config.on.timeout,true),timeout:config.timeout,charset:config.charset,attributes:config.attributes,async:config.async}).execute();__cov_ujvKiDWGSwwCzJBwq2DGWA.s['42']++;return self;},_format:function(url,proxy){__cov_ujvKiDWGSwwCzJBwq2DGWA.f['8']++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['43']++;return url.replace(/\{callback\}/,proxy);}};__cov_ujvKiDWGSwwCzJBwq2DGWA.s['44']++;Y.JSONPRequest=JSONPRequest;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['45']++;Y.jsonp=function(url,c){__cov_ujvKiDWGSwwCzJBwq2DGWA.f['9']++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['46']++;var req=new Y.JSONPRequest(url,c);__cov_ujvKiDWGSwwCzJBwq2DGWA.s['47']++;return req.send.apply(req,Y.Array(arguments,2,true));};__cov_ujvKiDWGSwwCzJBwq2DGWA.s['48']++;if(!YUI.Env.JSONP){__cov_ujvKiDWGSwwCzJBwq2DGWA.b['16'][0]++;__cov_ujvKiDWGSwwCzJBwq2DGWA.s['49']++;YUI.Env.JSONP={};}else{__cov_ujvKiDWGSwwCzJBwq2DGWA.b['16'][1]++;}},'3.10.1',{'requires':['get','oop']});
