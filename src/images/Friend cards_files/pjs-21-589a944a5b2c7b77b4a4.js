webpackJsonp([21],{"7Dxt":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=Object(m.a)(e),n=function(e){function n(){var t,i,a;r(this,n);for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];return t=i=o(this,e.call.apply(e,[this].concat(c))),i.state={impressionStarted:!1,impressionLogged:!1},i.currentNs=function(){return Date.now()*g},i.startTime=0,i.debugPinImpressions=v&&"Pin"===i.props.impressionType&&i.props.viewer.isEmployee,i.handleVisibilityChanged=function(e){var t=i.props,n=t.componentType,r=t.contextLog,o=t.contextLogData,a=t.impressionAuxFields,s=t.impressionType,c=t.loggingId,p=t.slotIndex,l=t.viewParameter,u=t.viewType,d=t.viewData;if(e)i.startTime=i.currentNs(),i.debugPinImpressions&&(console.log(p+" started timer"),i.setState({impressionStarted:!0}));else{var m,h,f=b[s],y=f.idType,v=i.currentNs(),g=Object.assign((m={endTime:v},m[y]=c,m.slotIndex=p,m.time=i.startTime,m.renderDuration=v-i.startTime,m),a);r(f.eventType,Object.assign({component:n,eventData:(h={},h[f.impressionType]=[g],h),view:u,viewParameter:l,viewData:d},o)),i.debugPinImpressions&&(console.log(p+" logged for "+(v-i.startTime)/1e9+"s"),i.setState({impressionStarted:!1,impressionLogged:!0}))}},a=t,o(i,a)}return i(n,e),n.prototype.render=function e(){return s.createElement(t,Object.assign({onVisibilityChanged:this.handleVisibilityChanged,debugImpressionStarted:this.debugPinImpressions?this.state.impressionStarted:void 0,debugImpressionLogged:this.debugPinImpressions?this.state.impressionLogged:void 0},this.props))},n}(s.Component);return Object(h.compose)(y.a,d.a)(n)}t.a=a;var s=n("d6ZO"),c=n.n(s),p=n("IaRT"),l=n.n(p),u=n("FJZF"),d=n("i0Ug"),m=n("sHx0"),h=n("MQ2h"),f=n.n(h),y=n("Kqaz"),v=u.a.getQueryStringParams()&&u.a.getQueryStringParams().debug_impression_log,b={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170}},g=1e6},RvAN:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("d6ZO"),s=n.n(a),c=n("GGB8"),p=n.n(c),l=n("W/Cr"),u=n("IaRT"),d=n.n(u),m=n("WBZ1"),h=n.n(m),f=n("gEaE"),y=n("7IpV"),v={UP:"up",DOWN:"down"},b=100,g=function(e){function t(){var n,i,a;r(this,t);for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];return n=i=o(this,e.call.apply(e,[this].concat(c))),i.handleScroll=h()(function(){if(!i.props.isFetching){var e=i.props.scrollThreshold;Object(y.c)(i._container)-Object(y.d)(i._container)-Object(y.a)(i._container)<e&&i.fetchMore()}},b),i.addEventListeners=function(e){var t=i.props.useWindow;t&&(e=window),i.removeEventListeners(),e&&(t||e.addEventListener("wheel",i.preventScroll),e.addEventListener("scroll",i.handleScroll)),i._container=e},i.preventScroll=function(e){var t=e.deltaY<0?v.UP:v.DOWN,n=i._container.scrollHeight-i._container.scrollTop-i._container.clientHeight==0,r=0===i._container.scrollTop;(t===v.DOWN&&n||t===v.UP&&r)&&e.preventDefault()},a=n,o(i,a)}return i(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function e(t){var n=t.data,r=t.onDataFetched;n&&r(n.length)},t.prototype.componentWillUnmount=function e(){this.removeEventListeners()},t.prototype.removeEventListeners=function e(){var t=this.props.useWindow;this._container&&(t||this._container.removeEventListener("wheel",this.preventScroll),this._container.removeEventListener("scroll",this.handleScroll))},t.prototype.fetchMore=function e(){this.props.isFetching||(this.props.isAtEnd?this._container.removeEventListener("scroll",this.handleScroll):this.props.fetchMoreData())},t.prototype.render=function e(){var t=this.props,n=t.className,r=t.data,o=t.isFetching,i=t.renderEmptyState,a=t.renderItem;return!o&&r&&0===r.length?i():s.a.createElement("div",{className:p()(n,"listContainer"),ref:this.addEventListeners},this.props.data?s.a.createElement("ul",{className:"scrollableList"},this.props.data.map(function(e,t){return a(e,t)})):null,this.props.isAtEnd?null:s.a.createElement("div",{className:"loadingItem"},s.a.createElement(f.F,{accessibilityLabel:l.a._("Loading items"),show:this.props.isFetching})))},t}(a.Component);g.defaultProps={data:[],onDataFetched:function e(){},scrollThreshold:400,useWindow:!1},t.a=g},nX0T:function(e,t,n){"use strict";var r=n("d6ZO"),o=n.n(r),i=n("s149"),a=n("gEJd"),s=function e(t){return r.createElement(a.a,Object.assign({},t,{timeSpentManager:i.a}))};t.a=s},"pN+K":function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return Object(m.a)("function"==typeof e?e(t):e||{})}function c(e){return e?e.WrappedComponent?e.WrappedComponent.name||"unknown":e.displayName?e.displayName:e.name?e.name:"unknown":"null-subject"}function p(e){var t=e.name,n=e.options;return Object(d.connect)(_({name:t,options:n||{}}))}t.a=s,t.c=p;var l=n("d6ZO"),u=n.n(l),d=n("DUIN"),m=n("lJK6"),h=n("FfPm"),f=n("IaRT"),y=n.n(f),v=n("S+Qs"),b=function e(t,n){return JSON.stringify(t)===JSON.stringify(n)},g=function e(t){var n={};return function(e){return function(r,o){var i=r.resources,a=i.fetching,p=i.data,l=e.some(function(e){var t=e.name,n=e.options;return a[t]&&a[t][s(n,o)]}),u={},d=void 0,m=[];e.forEach(function(e){var r=e.name,i=e.options,a=e.key;if(p[r]){var l=s(i,o);if(n[r]||(l in p[r]?h.default.increment("webapp.withResource.cache-hit",.05,{resource:r,cache_size:Object.keys(p[r]).length,level:"success",v:1,component:c(t)}):Object.keys(p[r]).length?h.default.increment("webapp.withResource.populated-cache-miss",1,{resource:r,cache_size:Object.keys(p[r]).length,level:"error",v:1,component:c(t)}):h.default.increment("webapp.withResource.empty-cache-miss",.1,{resource:r,cache_size:Object.keys(p[r]).length,level:"warn",v:1,component:c(t)})),n[r]=!0,p[r][l]){var f=p[r][l],y=f.data,v=f.nextBookmark,b=f.error;u[a]=y,m.push(v),b&&(d=b)}}else h.default.increment("webapp.withResource.no-cache",1,{resource:r,cache_size:0,level:"error",v:1,component:c(t)})});var f=e.every(function(e){var t=e.key;return void 0!==u[t]});return{resourceLoaded:f,isAtEnd:f&&!l&&m.every(function(e){return"-end-"===e}),isFetching:l,nextBookmark:m[0],resourceData:u,error:d}}}},w=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(e){var c,p;return p=c=function(c){function p(){var e,n,r;o(this,p);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return e=n=i(this,c.call.apply(c,[this].concat(l))),n.loadData=function(e){t.forEach(function(t){var n=t.options,r=t.name,o="function"==typeof n?n(e):n;e.dispatch(Object(v.a)(r,o))})},n.loadMoreData=function(e){t.forEach(function(t){var n=t.options,r=t.name,o="function"==typeof n?n(e):n;e.dispatch(Object(v.d)(r,o))})},n.resourcesHash=JSON.stringify(t.map(function(e){return Object.assign({},e,{options:s(e.options,n.props)})})),r=e,i(n,r)}return a(p,c),p.prototype.componentDidMount=function e(){!1!==n.allowStale?this.props.resourceLoaded||this.loadData(this.props):this.loadData(this.props)},p.prototype.UNSAFE_componentWillReceiveProps=function e(n){var r=JSON.stringify(t.map(function(e){return Object.assign({},e,{options:s(e.options,n)})}));this.resourcesHash!==r&&(this.loadData(n),this.resourcesHash=r)},p.prototype.shouldComponentUpdate=function e(t){for(var n=[].concat(Object.keys(this.props),Object.keys(t)),r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var i;if(r){if(o>=n.length)break;i=n[o++]}else{if((o=n.next()).done)break;i=o.value}var a=i;if("resourceData"===a){if(!b(this.props.resourceData,t.resourceData))return!0}else if(this.props[a]!==t[a])return!0}return!1},p.prototype.UNSAFE_componentWillUpdate=function e(t){!this.props.resourceLoaded&&t.resourceLoaded&&this.props.onResourceLoaded&&this.props.onResourceLoaded(),!this.props.error&&t.error&&this.props.onResourceError&&this.props.onResourceError(t.error)},p.prototype.render=function t(){var n=this,o=this.props,i=o.error,a=o.isAtEnd,s=o.isFetching,c=o.resourceData,p=o.resourceLoaded,u=r(o,["error","isAtEnd","isFetching","resourceData","resourceLoaded"]);return delete u.onResourceError,delete u.onResourceLoaded,l.createElement(e,Object.assign({},c,u,{error:i,fetchMoreData:function e(){return n.loadMoreData(n.props)},isAtEnd:a,isFetching:s,refreshData:function e(){return n.loadData(n.props)},resourceLoaded:p}))},p}(l.Component),c.WrappedComponent=e,c.displayName=1===t.length?t[0].name:t.length+" resources",p}},E=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(e){var r={name:t.name,options:t.options||{},key:t.key||"data"};return Object(d.connect)(g(e)([r]))(w([r],n)(e))}},T=E;t.b=E;var _=function e(t){var n=t.name,r=t.options;return function(e,t){var o=e.resources.data;if(o[n]){var i=s(r,t);if(o[n][i])return{data:o[n][i].data}}return{data:null}}}},wygQ:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=n("d6ZO"),l=n.n(p),u=n("SnoN"),d=n("GGB8"),m=n.n(d),h=n("IaRT"),f=n.n(h),y={ONE:1,TWO:2,END:3},v=function(e){function t(){var n,i,a;r(this,t);for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];return n=i=o(this,e.call.apply(e,[this].concat(c))),i.state={educationStep:y.ONE},i.toStepTwo=function(){i.setState({educationStep:y.TWO})},i.dismissEducation=function(){var e=i.props.handleDismiss;i.setState({educationStep:y.END}),e()},a=n,o(i,a)}return i(t,e),t.prototype.componentDidMount=function e(){var t=this,n=this.props.stepDelay;this.educationStepTimer=setTimeout(function(){t.state.educationStep<y.TWO&&t.setState({educationStep:y.TWO})},n)},t.prototype.componentWillUnmount=function e(){clearTimeout(this.educationStepTimer)},t.prototype.renderPill=function e(t,n,r){return l.a.createElement("button",{onClick:r,className:m()("educationPill","slideIn",{fadeOut:n})},l.a.createElement("div",{className:"message"},t))},t.prototype.render=function e(){var t=this.state.educationStep,n=this.props,r=n.titleText,o=n.titleText2,i=this.renderPill(r,t===y.TWO,this.toStepTwo),a=this.renderPill(o,t===y.END,this.dismissEducation);return l.a.createElement("div",{className:"newsHubEducation"},l.a.createElement("div",{className:"educationStep stepOne"},(t===y.ONE||t===y.TWO)&&i),l.a.createElement("div",{className:"educationStep stepTwo bottom"},(t===y.TWO||t===y.END)&&a))},t}(p.Component),b=n("W/Cr"),g=n("zFaW"),w=n("7Dxt"),E=Object(w.a)(g.a),T=n("mnfW"),_=n("DUIN"),O=n("U5UW"),x=n("/S3G"),D=n("MQ2h"),S=n.n(D),I=n("gEaE"),N=function e(t){var n=t.closeNotificationsDropdown;return l.a.createElement(I.b,{display:"flex",justifyContent:"center",alignItems:"center"},l.a.createElement(O.a,{accessibilityLabel:b.a._("Settings","Link to your settings page"),url:"/settings",shape:"pill",onClick:n},l.a.createElement(I.J,{bold:!0,size:"md"},b.a._("Settings","Link to your settings page"))))},j=function e(t){return{showPanel:t.ui.notifications.showNewsHubDropdown,badgeCounts:t.ui.notifications.badgeCounts}},C=function e(t){return{closeNotificationsDropdown:function e(){return t(x.a)}}},P=Object(D.compose)(Object(_.connect)(j,C))(N),k=n("RvAN"),L=n("nX0T"),W=n("mHth"),R=n("YZkw"),F=n("pN+K"),H=n("N7XO"),A=n("Kqaz"),U=4,z=864e5,M=Object(F.b)({name:"NewsHubResource",options:{page_size:10}},{allowStale:!1})(k.a),J=function(e){function t(n){a(this,t);var r=s(this,e.call(this,n));return r.state={shouldEducate:!1},r.onDataFetched=function(e){var t=r.props.experience;r.hasEarlier=!1,r.hasSetting=!1,t&&e>U&&!r.state.shouldEducate&&r.setState({shouldEducate:!0})},r.handleItemClick=function(){r.handleComplete(),r.props.handleItemClick()},r.handleComplete=function(){var e=r.props,t=e.experienceClient,n=e.experience;n&&t.completeExperience(n.placement_id,n.experience_id)},r.handleDismiss=function(){var e=r.props,t=e.experienceClient,n=e.experience;n&&t.dismissExperience(n.placement_id,n.experience_id)},r.renderItem=function(e,t){var n={impressionAuxFields:{newsType:e.news_type},impressionType:"News",loggingId:e.id,slotIndex:t,viewParameter:3081,viewType:107};return l.a.createElement("li",{className:"newsHubItemWrapper",key:t},r.renderDate(e.last_updated_at,t),l.a.createElement(E,Object.assign({contentItemCount:e.content_item_count,contentItems:e.content_items,contentText:e.content_text,displayMode:e.encoded_display_mode,handleClick:r.handleItemClick,headerIconImageUrl:e.header_icon_image_url,headerIconObjects:e.header_icon_objects,headerText:e.header_text,id:e.id,lastUpdatedAt:e.last_updated_at,overrideClickUrl:e.override_click_url,subHeaderText:e.sub_header_text,siteType:r.props.siteType,textMapping:e.text_mapping,type:e.news_type,unread:e.unread,expGroup:r.expGroup},n)))},r.renderEmptyState=function(){return l.a.createElement(I.b,{height:400},l.a.createElement(I.b,{display:"flex",justifyContent:"center",color:"darkGray",shape:"pill",paddingY:5,margin:5},l.a.createElement(I.g,{xs:10},l.a.createElement(I.J,{bold:!0,color:"white",size:"lg"},b.a._("New! Discover ideas from your friends, followers and people who love your Pins!")))))},r.currentDay=null,r.today=new Date,r.today.setHours(0,0,0,0),r.hasEarlier=!1,r.hasSetting=!1,r.expGroup=n.experiments.v2ActivateExperiment("news_hub_css_time_exp"),r}return c(t,e),t.prototype.getChildContext=function e(){return{preloadingSupported:!0}},t.prototype.componentDidMount=function e(){var t=this.props,n=t.experience,r=t.experienceClient;n&&r.viewExperience(n.placement_id,n.experience_id),this.logPanelImpression()},t.prototype.shouldComponentUpdate=function e(t,n){if(this.state.shouldEducate===n.shouldEducate){var r=this.props.experience,o=t.experience;return(r||{}).id!==(o||{}).id}return!0},t.prototype.getEducation=function e(){var t=this.props.experience;if(this.state.shouldEducate&&t){var n=t.display_data,r=n.step_delay,o=n.title_text,i=n.title_text_2;return l.a.createElement(v,{handleDismiss:this.handleDismiss,stepDelay:r,titleText:o,titleText2:i})}return null},t.prototype.logPanelImpression=function e(){var t=this.props.contextLog,n=u.a.getInstance(),r=n.getViewFromContext();t(13,{view:107,viewParameter:3081}),n.addViewToContext(r)},t.prototype.renderDate=function e(t,n){var r=new Date(t);r.setHours(0,0,0,0);var o=["enabled_date","employees"].includes(this.expGroup);if(0===n&&(this.firstDay=r),0!==n&&null!==this.currentDay&&void 0!==this.currentDay){var i=this.currentDay;if(r.getTime()===i.getTime()||o&&this.hasEarlier)return null}this.currentDay=r;var a=void 0,s=["enabled_css"].includes(this.expGroup),c=["enabled_setting_text"].includes(this.expGroup);return a=r.getTime()===this.today.getTime()?b.a._("Today"):r.getTime()===new Date(this.today-864e5).getTime()?b.a._("Yesterday"):r&&r>=new Date(this.today-5184e5)?b.a.getHumanizedTimesince(r.toString()):T.b.formatDate(this.props.locale,r,T.b.DateFormatType.MONTH_DAY,!1),o&&(r.getTime()===this.firstDay.getTime()?a=b.a._("New","subtitle for new notifications in notification dropdown"):(a=b.a._("Earlier","subtitle for old notifications in notification dropdown"),this.hasEarlier=!0)),s?l.a.createElement("div",{className:"newsHubItemDateCssExp"},l.a.createElement(I.J,{bold:!0,size:"xl"},a)):o?l.a.createElement("div",{className:"newsHubItemDateCssExp"},l.a.createElement(I.J,{bold:!0,size:"md",color:"gray"},a)):c&&!this.hasSetting?(this.hasSetting=!0,l.a.createElement("div",{className:"newsHubItemDate"},l.a.createElement(I.b,{display:"inlineBlock"},l.a.createElement(I.J,{bold:!0,size:"xl"},a)),l.a.createElement("div",{className:"newsHubSetting"},l.a.createElement(P,null)))):l.a.createElement("div",{className:"newsHubItemDate"},l.a.createElement(I.J,{bold:!0,size:"xl"},a))},t.prototype.renderTitle=function e(){return["enabled_date","employees"].includes(this.expGroup)?l.a.createElement("div",{className:"newsHubTitleDateExp"},l.a.createElement(I.J,{bold:!0,size:"xl"},b.a._("Notifications","Title for news hub dropdown on the right upper corner in home page"))):null},t.prototype.render=function e(){return l.a.createElement(L.a,{view:107,viewParameter:3081},l.a.createElement("div",null,this.getEducation(),this.renderTitle(),l.a.createElement(M,{className:"newsHubPanel",onDataFetched:this.onDataFetched,renderEmptyState:this.renderEmptyState,renderItem:this.renderItem})))},t}(p.Component);J.childContextTypes={preloadingSupported:f.a.bool.isRequired},J.defaultProps={handleItemClick:function e(){}};var G=t.a=Object(D.compose)(Object(R.a)(1000035),A.a,W.a,H.a)(J)},ybIz:function(e,t,n){"use strict";function r(e){var t=e.handleItemClick,n=e.locale,r=e.siteType;return i.a.createElement("div",{className:"NewsConversationsDropdown"},i.a.createElement("div",{className:"content"},i.a.createElement(a.a,{handleItemClick:t,locale:n,siteType:r})))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n("d6ZO"),i=n.n(o),a=n("wygQ"),s=n("IaRT"),c=n.n(s)}});