webpackJsonp([295],{"6c3S":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"PinLandingSeasonalOverlay",function(){return _});var i=o("d6ZO"),l=o.n(i),c=o("W/Cr"),s=o("WBZ1"),p=o.n(s),u=o("Kqaz"),y=o("MQ2h"),h=o.n(y),d=o("7IpV"),f=o("suNN"),m=o("kzic"),w=o("gEaE"),v=10,g=800,b=500,_=function(e){function t(){var o,r,i;n(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return o=r=a(this,e.call.apply(e,[this].concat(c))),r.state={showOverlay:!1},r.handleScroll=p()(function(){var e=r.state.showOverlay;Object(d.e)()>2*g&&!e&&r.showOverlay()},v),r.preventScrolling=function(){var e=document.body;e&&(e.__overflow__=e.style.overflow,e.style.overflow="hidden")},r.recoverScrolling=function(){var e=document.body;e&&(e.style.overflow=e.__overflow__,delete e.__overflow__)},r.showOverlay=function(){var e=r.props,t=e.contextLog,o=e.view;t(13,{view:e.viewType,viewParameter:e.viewParameterType,component:13307}),r.preventScrolling(),r.setState({showOverlay:!0}),o()},r.handleSeeMoreButtonClick=function(){var e=r.props,t=e.complete,o=e.contextLog,n=e.router;o(101,{view:e.viewType,viewParameter:e.viewParameterType,component:13307,element:10895}),r.setState({showOverlay:!1},function(){t(),n.push("/topics/halloween")})},r.handleDismissButtonClick=function(){var e=r.props,t=e.contextLog,o=e.dismiss;t(101,{view:e.viewType,viewParameter:e.viewParameterType,component:13307,element:10896}),r.setState({showOverlay:!1},function(){setTimeout(o,b)})},i=o,a(r,i)}return r(t,e),t.prototype.componentDidMount=function e(){window.addEventListener("scroll",this.handleScroll)},t.prototype.componentWillUnmount=function e(){this.state.showOverlay&&this.props.dismiss(),this.recoverScrolling(),window.removeEventListener("scroll",this.handleScroll)},t.prototype.render=function e(){var t=this.state.showOverlay,o=Math.ceil((new Date(2018,9,31)-new Date)/864e5);return l.a.createElement(w.b,{display:"flex",alignItems:"center",position:"fixed",width:"100%",height:t?"100%":0,bottom:!0,left:!0,right:!0,dangerouslySetInlineStyle:{__style:{zIndex:1,background:"rgba(51, 51, 51, 0.9)",WebkitTransition:"opacity 0.5s, height 1s",transition:"opacity 0.5s, height 1s",opacity:t?1:0}}},t&&l.a.createElement(l.a.Fragment,null,l.a.createElement(w.b,{display:"flex",direction:"column",alignItems:"center",position:"absolute",width:"100%"},l.a.createElement(w.b,{paddingY:2},l.a.createElement(w.l,{size:"lg",color:"orange"},c.a._("Boo! It’s almost Halloween","Welcome message on pin landing page"))),l.a.createElement(w.b,{paddingY:2},l.a.createElement(w.l,{size:"xs",color:"white"},Object(f.b)(c.a.ngettext("You officially have {{ count }} day left to find a costume and treats","You officially have {{ count }} days left to find a costume and treats",o,"Count down on Halloween"),{count:o}))),l.a.createElement(w.b,{dangerouslySetInlineStyle:{__style:{marginTop:"64px"}}},l.a.createElement(w.c,{accessibilityLabel:c.a._("See more inspiration about Halloween","Button lead to halloween topic page"),color:"transparent",size:"lg",text:"Show me inspiration",inline:!0,onClick:this.handleSeeMoreButtonClick}))),l.a.createElement(w.b,{padding:3,position:"absolute",top:!0,right:!0,dangerouslySetInlineStyle:{__style:{marginTop:"64px"}}},l.a.createElement(w.n,{accessibilityLabel:c.a._("Close modal","X button at the top right corner of an fullscreen overlay"),icon:"cancel",iconColor:"gray",size:"xl",onClick:this.handleDismissButtonClick}))))},t}(i.PureComponent);t.default=Object(y.compose)(u.a,m.withRouter)(_)}});