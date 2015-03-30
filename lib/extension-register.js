function register(e){function t(e){var t=this;"@traceur"==e.name&&(c=System);var a,r=e.source.lastIndexOf("\n");-1!=r&&"//# sourceMappingURL="==e.source.substr(r+1,21)&&(a=e.source.substr(r+22,e.source.length-r-22),"undefined"!=typeof toAbsoluteURL&&(a=toAbsoluteURL(e.address,a))),__eval(e.source,e.address,a),"@traceur"==e.name&&(t.global.traceurSystem=t.global.System,t.global.System=c)}function a(e){for(var t=[],a=0,r=e.length;r>a;a++)-1==indexOf.call(t,e[a])&&t.push(e[a]);return t}function r(t,a,r,n){"string"!=typeof t&&(n=r,r=a,a=t,t=null),p=!0;var d;if(d="boolean"==typeof r?{declarative:!1,deps:a,execute:n,executingRequire:r}:{declarative:!0,deps:a,declare:r},t)d.name=t,e.defined[t]||(e.defined[t]=d);else if(d.declarative){if(m)throw new TypeError("Multiple anonymous System.register calls in the same module file.");m=d}}function n(e){if(!e.register){e.register=r,e.defined||(e.defined={});var t=e.onScriptLoad;e.onScriptLoad=function(e){t(e),m&&(e.metadata.entry=m),p&&(e.metadata.format=e.metadata.format||"register",e.metadata.registered=!0)}}}function d(e,t,a){if(a[e.groupIndex]=a[e.groupIndex]||[],-1==indexOf.call(a[e.groupIndex],e)){a[e.groupIndex].push(e);for(var r=0,n=e.normalizedDeps.length;n>r;r++){var i=e.normalizedDeps[r],o=t.defined[i];if(o&&!o.evaluated){var l=e.groupIndex+(o.declarative!=e.declarative);if(void 0===o.groupIndex||o.groupIndex<l){if(o.groupIndex&&(a[o.groupIndex].splice(indexOf.call(a[o.groupIndex],o),1),0==a[o.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");o.groupIndex=l}d(o,t,a)}}}}function i(e,t){var a=t.defined[e];a.groupIndex=0;var r=[];d(a,t,r);for(var n=!!a.declarative==r.length%2,i=r.length-1;i>=0;i--){for(var o=r[i],s=0;s<o.length;s++){var f=o[s];n?l(f,t):u(f,t)}n=!n}}function o(e){return v[e]||(v[e]={name:e,dependencies:[],exports:{},importers:[]})}function l(e,t){if(!e.module){var a=e.module=o(e.name),r=e.module.exports,n=e.declare.call(t.global,function(e,t){a.locked=!0,r[e]=t;for(var n=0,d=a.importers.length;d>n;n++){var i=a.importers[n];if(!i.locked){var o=indexOf.call(i.dependencies,a);i.setters[o](r)}}return a.locked=!1,t});if(a.setters=n.setters,a.execute=n.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+e.name);for(var d=0,i=e.normalizedDeps.length;i>d;d++){var s,u=e.normalizedDeps[d],f=t.defined[u],c=v[u];c?s=c.exports:f&&!f.declarative?s={"default":f.module.exports,__useDefault:!0}:f?(l(f,t),c=f.module,s=c.exports):s=t.get(u),c&&c.importers?(c.importers.push(a),a.dependencies.push(c)):a.dependencies.push(null),a.setters[d]&&a.setters[d](s)}}}function s(e,t){var a,r=t.defined[e];if(r)r.declarative?f(e,[],t):r.evaluated||u(r,t),a=r.module.exports;else if(a=t.get(e),!a)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&a&&a.__useDefault?a["default"]:a}function u(e,t){if(!e.module){var a={},r=e.module={exports:a,id:e.name};if(!e.executingRequire)for(var n=0,d=e.normalizedDeps.length;d>n;n++){var i=e.normalizedDeps[n],o=t.defined[i];o&&u(o,t)}e.evaluated=!0;var l=e.execute.call(t.global,function(a){for(var r=0,n=e.deps.length;n>r;r++)if(e.deps[r]==a)return s(e.normalizedDeps[r],t);throw new TypeError("Module "+a+" not declared as a dependency.")},a,r);l&&(r.exports=l)}}function f(e,t,a){var r=a.defined[e];if(!r.evaluated&&r.declarative){t.push(e);for(var n=0,d=r.normalizedDeps.length;d>n;n++){var i=r.normalizedDeps[n];-1==indexOf.call(t,i)&&(a.defined[i]?f(i,t,a):a.get(i))}r.evaluated||(r.evaluated=!0,r.module.execute.call(a.global))}}"undefined"==typeof indexOf&&(indexOf=Array.prototype.indexOf),"undefined"==typeof __eval&&(__eval=0||eval);var c;e.__exec=t;var m,p;n(e);var v={},g=/System\.register/,x=e.fetch;e.fetch=function(e){var t=this;return n(t),t.defined[e.name]?(e.metadata.format="defined",""):(m=null,p=!1,x.call(t,e))};var h=e.translate;e.translate=function(e){return this.register=r,this.__exec=t,e.metadata.deps=e.metadata.deps||[],Promise.resolve(h.call(this,e)).then(function(t){return(e.metadata.init||e.metadata.exports)&&(e.metadata.format=e.metadata.format||"global"),("register"==e.metadata.format||!e.metadata.format&&e.source.match(g))&&(e.metadata.format="register"),t})};var y=e.instantiate;e.instantiate=function(e){var t,n=this;if(n.defined[e.name])t=n.defined[e.name],t.deps=t.deps.concat(e.metadata.deps);else if(e.metadata.entry)t=e.metadata.entry;else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],execute:e.metadata.execute,executingRequire:e.metadata.executingRequire};else if("register"==e.metadata.format){m=null,p=!1;var d=n.global.System=n.global.System||n,o=d.register;if(d.register=r,n.__exec(e),d.register=o,m&&(t=m),!t&&d.defined[e.name]&&(t=d.defined[e.name]),!p&&!e.metadata.registered)throw new TypeError(e.name+" detected as System.register but didn't execute.")}if(!t&&"es6"!=e.metadata.format)return{deps:[],execute:function(){return n.newModule({})}};if(!t)return y.call(this,e);n.defined[e.name]=t,t.deps=a(t.deps),t.name=e.name;for(var l=[],s=0,u=t.deps.length;u>s;s++)l.push(Promise.resolve(n.normalize(t.deps[s],e.name)));return Promise.all(l).then(function(a){return t.normalizedDeps=a,{deps:t.deps,execute:function(){i(e.name,n),f(e.name,[],n),n.defined[e.name]=void 0;var a=n.newModule(t.declarative?t.module.exports:{"default":t.module.exports,__useDefault:!0});return a}}})}}