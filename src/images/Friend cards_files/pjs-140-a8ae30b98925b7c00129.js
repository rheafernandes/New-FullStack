webpackJsonp([140],{"0+Oy":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=e.placementId;return u.createElement(w.a,{placementId:t,type:5,disableAutoView:!0},function(e){var t=e.complete,n=e.dismiss,a=e.display_data,o=e.view,i=a.anket,r=a.buttons,s=a.delay,l=a.detailed_text,c=a.subtitle_text,d=a.title_text,m=r[0],p=r[1];return i?u.createElement(h,{acceptButtonText:p.text,bodyText:l,declineButtonText:m.text,onComplete:t,onDismiss:n,onView:o,presentationDelay:s,subtitleText:c,surveyLink:p.uri,titleText:d}):u.createElement(S,{complete:t,dismiss:n,displayData:a,view:o})})}Object.defineProperty(t,"__esModule",{value:!0});var u=n("d6ZO"),d=n.n(u),m=n("W/Cr"),p=n("gEaE"),y=5e3,f=15e3,v="surveyLoaded",b="surveyFinished",h=function(e){function t(){var n,i,r;a(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=i=o(this,e.call.apply(e,[this].concat(l))),i.state={surveyAccepted:!1,surveyLoaded:!1,surveyLoadFailed:!1},i.processIFrameMessage=function(e){var t=i.props,n=t.presentationDelay,a=void 0===n?y:n,o=t.onComplete,r=t.onView,s=t.surveyLink,l=e.origin||e.originalEvent.origin;s.startsWith(l)&&(e.data===b?o():e.data===v&&(window.clearTimeout(i.loadSurveyFailureTimeout),i.loadSurveyTimeout=window.setTimeout(function(){r(),i.setState({surveyLoaded:!0})},a)))},i.handleShowSurvey=function(){i.setState({surveyAccepted:!0})},r=n,o(i,r)}return i(t,e),t.prototype.componentDidMount=function e(){var t=this;window.addEventListener("message",this.processIFrameMessage),this.loadSurveyFailureTimeout=window.setTimeout(function(){t.state.surveyLoaded||(window.clearTimeout(t.loadSurveyTimeout),t.setState({surveyLoadFailed:!0}))},15e3)},t.prototype.componentWillUnmount=function e(){window.removeEventListener("message",this.processIFrameMessage),window.clearTimeout(this.loadSurveyTimeout),window.clearTimeout(this.loadSurveyFailureTimeout)},t.prototype.render=function e(){var t=this.state,n=t.surveyAccepted,a=t.surveyLoadFailed,o=t.surveyLoaded;if(a)return null;var i=this.props,r=i.acceptButtonText,s=i.bodyText,l=i.declineButtonText,c=i.onDismiss,u=i.subtitleText,y=i.surveyLink,f=i.titleText,v=d.a.createElement("iframe",{className:n?"PinnerSurvey":"SurveyHidden",src:y,title:m.a._("Pinterest Survey","Accessible label for survey frame")});return o?d.a.createElement("div",{style:{zIndex:1e3,position:"absolute"}},d.a.createElement(p.x,{accessibilityCloseLabel:m.a._("close","Accessible label for the modal close button"),accessibilityModalLabel:m.a._("Have a few minutes to take a survey?","User evaluation survey"),footer:!n&&d.a.createElement(p.b,{display:"flex",justifyContent:"end",deprecatedPadding:{x:1}},d.a.createElement("div",{className:"p1"},d.a.createElement(p.c,{text:l,onClick:c})),d.a.createElement("div",{className:"p1"},d.a.createElement(p.c,{color:"red",text:r,onClick:this.handleShowSurvey}))),heading:n?"":f,onDismiss:c,role:"alertdialog",size:n?"lg":"md"},d.a.createElement("div",null,v),!n&&d.a.createElement(p.b,{deprecatedPadding:3},d.a.createElement(p.J,{smSize:"xs",mdSize:"sm",lgSize:"md"},u),d.a.createElement(p.J,{smSize:"xs",mdSize:"sm",lgSize:"md"},s)))):v},t}(u.Component),w=n("wUWH"),x=n("R6a3"),E=n("tmfO"),S=function(e){function t(){var n,a,o;r(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=a=s(this,e.call.apply(e,[this].concat(l))),a.state={surveyLoaded:!1},a.loadSurvey=function(){return a.setState({surveyLoaded:!0})},a.handleDismiss=function(){a.props.dismiss(),a.setState({surveyLoaded:!1})},a.handleComplete=function(){a.props.complete(),a.setState({surveyLoaded:!1})},o=n,s(a,o)}return l(t,e),t.prototype.componentDidMount=function e(){var t=this.props.displayData.delay;this.surveyTimer=window.setTimeout(this.loadSurvey,t)},t.prototype.componentWillUnmount=function e(){clearTimeout(this.surveyTimer)},t.prototype.render=function e(){var t=this;if(!this.state.surveyLoaded)return null;var n=this.props,a=n.displayData,o=a.buttons,i=a.detailed_text,r=a.title_text;return(0,n.view)(),d.a.createElement(x.a,{accessibilityCloseLabel:m.a._("close","Accessible label for the modal close button"),heading:r,accessibilityModalLabel:m.a._("Would you mind taking a survey?","User eval survey"),onDismiss:this.handleDismiss,size:"sm",footer:d.a.createElement(p.b,{display:"flex",justifyContent:"end"},o.map(function(e,n){return e.uri?d.a.createElement(p.b,{key:e.text,marginStart:1},d.a.createElement(E.b,{external:!0,to:e.uri},d.a.createElement(p.c,{color:"red",text:e.text,onClick:t.handleComplete}))):d.a.createElement(p.b,{key:e.text,marginStart:1},d.a.createElement(p.c,{text:e.text,onClick:t.handleDismiss}))}))},d.a.createElement(p.b,{padding:3},d.a.createElement(p.J,{size:"lg",smSize:"sm",mdSize:"md",lgSize:"lg"},i)))},t}(u.Component);t.default=c}});