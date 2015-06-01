!function(n){"use strict";var a="animsition",i={init:function(t){t=n.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"},t);var o=i.supportCheck.call(this,t);if(!o)return"console"in window||(window.console={},window.console.log=function(n){return n}),console.log("Animsition does not support this browser."),i.destroy.call(this);var e=i.optionCheck.call(this,t);return e&&i.addOverlay.call(this,t),t.loading&&i.addLoading.call(this,t),this.each(function(){var o=this,e=n(this),s=n(window),l=e.data(a);l||(t=n.extend({},t),e.data(a,{options:t}),s.on("load."+a+" pageshow."+a,function(){i.pageIn.call(o)}),s.on("unload."+a,function(){}),n(t.linkElement).on("click."+a,function(a){a.preventDefault();var t=n(this),e=t.attr("href");2===a.which||a.metaKey||a.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&a.ctrlKey?window.open(e,"_blank"):i.pageOut.call(o,t,e)}))})},addOverlay:function(a){n(a.overlayParentElement).prepend('<div class="'+a.overlayClass+'"></div>')},addLoading:function(a){n(a.loadingParentElement).append('<div class="'+a.loadingClass+'"></div>')},removeLoading:function(){var i=n(this),t=i.data(a).options,o=n(t.loadingParentElement).children("."+t.loadingClass);o.fadeOut().remove()},supportCheck:function(a){var i=n(this),t=a.unSupportCss,o=t.length,e=!1;0===o&&(e=!0);for(var s=0;o>s;s++)if("string"==typeof i.css(t[s])){e=!0;break}return e},optionCheck:function(a){var i,t=n(this);return i=a.overlay||t.data("animsition-overlay")?!0:!1},animationCheck:function(i,t,o){var e=n(this),s=e.data(a).options,l=typeof i,r=!t&&"number"===l,c=t&&"string"===l&&i.length>0;return r||c?i=i:t&&o?i=s.inClass:!t&&o?i=s.inDuration:t&&!o?i=s.outClass:t||o||(i=s.outDuration),i},pageIn:function(){var t=this,o=n(this),e=o.data(a).options,s=o.data("animsition-in-duration"),l=o.data("animsition-in"),r=i.animationCheck.call(t,s,!1,!0),c=i.animationCheck.call(t,l,!0,!0),d=i.optionCheck.call(t,e);e.loading&&i.removeLoading.call(t),d?i.pageInOverlay.call(t,c,r):i.pageInBasic.call(t,c,r)},pageInBasic:function(a,i){var t=n(this);t.trigger("animsition.start").css({"animation-duration":i/1e3+"s"}).addClass(a).animateCallback(function(){t.removeClass(a).css({opacity:1}).trigger("animsition.end")})},pageInOverlay:function(i,t){var o=n(this),e=o.data(a).options;o.trigger("animsition.start").css({opacity:1}),n(e.overlayParentElement).children("."+e.overlayClass).css({"animation-duration":t/1e3+"s"}).addClass(i).animateCallback(function(){o.trigger("animsition.end")})},pageOut:function(t,o){var e=this,s=n(this),l=s.data(a).options,r=t.data("animsition-out"),c=s.data("animsition-out"),d=t.data("animsition-out-duration"),u=s.data("animsition-out-duration"),m=r?r:c,h=d?d:u,p=i.animationCheck.call(e,m,!0,!1),v=i.animationCheck.call(e,h,!1,!1),f=i.optionCheck.call(e,l);f?i.pageOutOverlay.call(e,p,v,o):i.pageOutBasic.call(e,p,v,o)},pageOutBasic:function(a,i,t){var o=n(this);o.css({"animation-duration":i/1e3+"s"}).addClass(a).animateCallback(function(){location.href=t})},pageOutOverlay:function(t,o,e){var s=this,l=n(this),r=l.data(a).options,c=l.data("animsition-in"),d=i.animationCheck.call(s,c,!0,!0);n(r.overlayParentElement).children("."+r.overlayClass).css({"animation-duration":o/1e3+"s"}).removeClass(d).addClass(t).animateCallback(function(){location.href=e})},destroy:function(){return this.each(function(){var i=n(this);n(window).unbind("."+a),i.css({opacity:1}).removeData(a)})}};n.fn.animateCallback=function(a){var i="animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";return this.each(function(){n(this).bind(i,function(){return n(this).unbind(i),a.call(this)})})},n.fn.animsition=function(t){return i[t]?i[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void n.error("Method "+t+" does not exist on jQuery."+a):i.init.apply(this,arguments)}}(jQuery);