!function($){var e=0,i=0,t=0,r=10,l=0,n="ontouchstart"in window||navigator.msMaxTouchPoints>0,s="onorientationchange"in window,o=!1,a=!1,d=!1,c=!1,f=!1,h=!1,u=!1,S="pointer",v="pointer",g=new Array,b=new Array,p=new Array,m=new Array,w=new Array,O=new Array,y=new Array,k=new Array,C=new Array,N=new Array,x=new Array,T=new Array,A=new Array,E={showScrollbar:function(e,i){e.scrollbarHide&&$("."+i).css({opacity:e.scrollbarOpacity,filter:"alpha(opacity:"+100*e.scrollbarOpacity+")"})},hideScrollbar:function(e,i,t,l,n,s,o,a,d,c){if(e.scrollbar&&e.scrollbarHide)for(var f=t;t+25>f;f++)i[i.length]=E.hideScrollbarIntervalTimer(r*f,l[t],(t+24-f)/24,n,s,o,a,d,c,e)},hideScrollbarInterval:function(e,i,t,r,n,s,o,a,d){l=-1*e/x[a]*(n-s-o-r),E.setSliderOffset("."+t,l),$("."+t).css({opacity:d.scrollbarOpacity*i,filter:"alpha(opacity:"+d.scrollbarOpacity*i*100+")"})},slowScrollHorizontalInterval:function(e,i,t,r,n,s,o,a,d,c,f,h,u,S,v,g,b,p,m){if(m.infiniteSlider){if(t<=-1*x[g]||t<=-1*T[g]){var w=$(e).width();if(t<=-1*T[g]){var O=-1*f[0];$(i).each(function(e){E.setSliderOffset($(i)[e],O+b),e<h.length&&(h[e]=-1*O),O+=v[e]}),t+=-1*h[0],N[g]=-1*h[0]+b,x[g]=N[g]+w-s,C[g]=0}for(;t<=-1*x[g];){var A=0,W=E.getSliderOffset($(i[0]),"x");$(i).each(function(e){E.getSliderOffset(this,"x")<W&&(W=E.getSliderOffset(this,"x"),A=e)});var M=N[g]+w;E.setSliderOffset($(i)[A],M),N[g]=-1*h[1]+b,x[g]=N[g]+w-s,h.splice(0,1),h.splice(h.length,0,-1*M+b),C[g]++}}if(t>=-1*N[g]||t>=0){var w=$(e).width();if(t>0){var O=-1*f[0];for($(i).each(function(e){E.setSliderOffset($(i)[e],O+b),e<h.length&&(h[e]=-1*O),O+=v[e]}),t-=-1*h[0],N[g]=-1*h[0]+b,x[g]=N[g]+w-s,C[g]=S;-1*h[0]-w+b>0;){var P=0,B=E.getSliderOffset($(i[0]),"x");$(i).each(function(e){E.getSliderOffset(this,"x")>B&&(B=E.getSliderOffset(this,"x"),P=e)});var M=N[g]-v[P];E.setSliderOffset($(i)[P],M),h.splice(0,0,-1*M+b),h.splice(h.length-1,1),N[g]=-1*h[0]+b,x[g]=N[g]+w-s,C[g]--,y[g]++}}for(;t>-1*N[g];){var P=0,B=E.getSliderOffset($(i[0]),"x");$(i).each(function(e){E.getSliderOffset(this,"x")>B&&(B=E.getSliderOffset(this,"x"),P=e)});var M=N[g]-v[P];E.setSliderOffset($(i)[P],M),h.splice(0,0,-1*M+b),h.splice(h.length-1,1),N[g]=-1*h[0]+b,x[g]=N[g]+w-s,C[g]--}}}var I=!1,q=E.calcActiveOffset(m,t,h,s,C[g],S,c,g),M=(q+C[g]+S)%S;if(m.infiniteSlider?M!=k[g]&&(I=!0):q!=y[g]&&(I=!0),I){var z=new E.args("change",m,e,$(e).children(":eq("+M+")"),M,p);$(e).parent().data("args",z),""!=m.onSlideChange&&m.onSlideChange(z)}if(y[g]=q,k[g]=M,t=Math.floor(t),g!=$(e).parent().data("args").data.sliderNumber)return!0;if(E.setSliderOffset(e,t),m.scrollbar){l=Math.floor((-1*t-N[g]+b)/(x[g]-N[g]+b)*(o-a-n));var D=n-d;t>=-1*N[g]+b?(D=n-d- -1*l,E.setSliderOffset($("."+r),0),$("."+r).css({width:D+"px"})):t<=-1*x[g]+1?(D=o-a-d-l,E.setSliderOffset($("."+r),l),$("."+r).css({width:D+"px"})):(E.setSliderOffset($("."+r),l),$("."+r).css({width:D+"px"}))}},slowScrollHorizontal:function(e,i,t,l,n,s,o,a,d,c,f,h,u,S,v,g,b,p,m,w,T){var A=E.getSliderOffset(e,"x"),W=new Array,M=new Array,P=0,B=25/1024*a,I=!1;frictionCoefficient=T.frictionCoefficient,elasticFrictionCoefficient=T.elasticFrictionCoefficient,snapFrictionCoefficient=T.snapFrictionCoefficient,n>T.snapVelocityThreshold&&T.snapToChildren&&!m?P=1:n<-1*T.snapVelocityThreshold&&T.snapToChildren&&!m&&(P=-1),-1*B>n?n=-1*B:n>B&&(n=B),$(e)[0]!==$(p)[0]&&(P=-1*P,n=-2*n);var q=C[v];if(T.infiniteSlider)var z=N[v],D=x[v];for(var X=new Array,H=new Array,j=0;j<u.length;j++)X[j]=u[j],j<i.length&&(H[j]=E.getSliderOffset($(i[j]),"x"));for(;n>1||-1>n;){if(n*=frictionCoefficient,A+=n,(A>-1*N[v]||A<-1*x[v])&&!T.infiniteSlider&&(n*=elasticFrictionCoefficient,A+=n),T.infiniteSlider){if(-1*D>=A){for(var R=$(e).width(),V=0,L=H[0],j=0;j<H.length;j++)H[j]<L&&(L=H[j],V=j);var Y=z+R;H[V]=Y,z=-1*X[1]+w,D=z+R-a,X.splice(0,1),X.splice(X.length,0,-1*Y+w),q++}if(A>=-1*z){for(var R=$(e).width(),F=0,U=H[0],j=0;j<H.length;j++)H[j]>U&&(U=H[j],F=j);var Y=z-S[F];H[F]=Y,X.splice(0,0,-1*Y+w),X.splice(X.length-1,1),z=-1*X[0]+w,D=z+R-a,q--}}W[W.length]=A,M[M.length]=n}var _=!1,G=E.calcActiveOffset(T,A,X,a,q,b,y[v],v),K=(G+q+b)%b;if(T.snapToChildren&&(T.infiniteSlider?K!=k[v]&&(_=!0):G!=y[v]&&(_=!0),0>P&&!_?(G++,G>=u.length&&!T.infiniteSlider&&(G=u.length-1)):P>0&&!_&&(G--,0>G&&!T.infiniteSlider&&(G=0))),T.snapToChildren||(A>-1*N[v]||A<-1*x[v])&&!T.infiniteSlider){for((A>-1*N[v]||A<-1*x[v])&&!T.infiniteSlider?W.splice(0,W.length):(W.splice(.1*W.length,W.length),A=W.length>0?W[W.length-1]:A);A<X[G]-.5||A>X[G]+.5;)A=(A-X[G])*snapFrictionCoefficient+X[G],W[W.length]=A;W[W.length]=X[G]}var Q=1;W.length%2!=0&&(Q=0);for(var J=0,Z=0,ee=0;ee<t.length;ee++)clearTimeout(t[ee]);for(var ie=(G+q+b)%b,te=0,ee=Q;ee<W.length;ee+=2)(ee==Q||Math.abs(W[ee]-te)>1||ee>=W.length-2)&&(te=W[ee],t[t.length]=E.slowScrollHorizontalIntervalTimer(r*ee,e,i,W[ee],l,o,a,d,c,f,G,h,u,g,b,S,v,w,ie,T));var _=!1,K=(G+C[v]+b)%b;T.infiniteSlider?K!=k[v]&&(_=!0):G!=y[v]&&(_=!0),""!=T.onSlideComplete&&W.length>1&&(t[t.length]=E.onSlideCompleteTimer(r*(ee+1),T,e,$(e).children(":eq("+K+")"),ie,v)),t[t.length]=E.updateBackfaceVisibilityTimer(r*(ee+1),i,v,b,T),O[v]=t,E.hideScrollbar(T,t,ee,W,l,o,a,c,f,v)},onSlideComplete:function(e,i,t,r,l){var n=g[l]!=r?!0:!1,s=new E.args("complete",e,$(i),t,r,r);$(i).parent().data("args",s),""!=e.onSlideComplete&&e.onSlideComplete(s),g[l]=r},getSliderOffset:function(e,i){var t=0;if(i="x"==i?4:5,!a||d||c)t=parseInt($(e).css("left"),10);else{for(var r=new Array("-webkit-transform","-moz-transform","transform"),l,n=0;n<r.length;n++)if(void 0!=$(e).css(r[n])&&$(e).css(r[n]).length>0){l=$(e).css(r[n]).split(",");break}t=void 0==l[i]?0:parseInt(l[i],10)}return t},setSliderOffset:function(e,i){i=parseInt(i,10),$(e).css(!a||d||c?{left:i+"px"}:{msTransform:"matrix(1,0,0,1,"+i+",0)",webkitTransform:"matrix(1,0,0,1,"+i+",0)",MozTransform:"matrix(1,0,0,1,"+i+",0)",transform:"matrix(1,0,0,1,"+i+",0)"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(o=!0,S="-webkit-grab",v="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")?(u=!0,S="move",v="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?(d=!0,h=!0):null!=navigator.userAgent.match("MSIE 8")?(c=!0,h=!0):null!=navigator.userAgent.match("MSIE 9")&&(f=!0,h=!0)},has3DTransform:function(){var e=!1,i=$("<div />").css({msTransform:"matrix(1,1,1,1,1,1)",webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});return""==i.attr("style")?e=!1:u&&parseInt(navigator.userAgent.split("/")[3],10)>=21?e=!1:void 0!=i.attr("style")&&(e=!0),e},getSlideNumber:function(e,i,t){return(e-C[i]+t)%t},calcActiveOffset:function(e,i,t,r,l,n,s,o){var a=!1,d=new Array,c;i>t[0]&&(c=0),i<t[t.length-1]&&(c=n-1);for(var f=0;f<t.length;f++)t[f]<=i&&t[f]>i-r&&(a||t[f]==i||(d[d.length]=t[f-1]),d[d.length]=t[f],a=!0);0==d.length&&(d[0]=t[t.length-1]);for(var h=r,u=0,f=0;f<d.length;f++){var S=Math.abs(i-d[f]);h>S&&(u=d[f],h=S)}for(var f=0;f<t.length;f++)u==t[f]&&(c=f);return c},changeSlide:function(e,i,t,l,n,s,o,a,d,c,f,h,u,S,v,g,b,p){E.autoSlidePause(S);for(var m=0;m<l.length;m++)clearTimeout(l[m]);var w=Math.ceil(p.autoSlideTransTimer/10)+1,N=E.getSliderOffset(i,"x"),x=h[e],T=x-N,A=e-(y[S]+C[S]+g)%g;if(p.infiniteSlider){e=(e-C[S]+2*g)%g;var W=!1;0==e&&2==g&&(e=g,h[e]=h[e-1]-$(t).eq(0).outerWidth(!0),W=!0),x=h[e],T=x-N;var M=new Array(h[e]-$(i).width(),h[e]+$(i).width());W&&h.splice(h.length-1,1);for(var P=0;P<M.length;P++)Math.abs(M[P]-N)<Math.abs(T)&&(T=M[P]-N)}0>T&&-1==A?T+=$(i).width():T>0&&1==A&&(T-=$(i).width());var B=new Array,I,q;E.showScrollbar(p,n);for(var P=0;w>=P;P++)I=P,I/=w,I--,q=N+T*(Math.pow(I,5)+1),B[B.length]=q;for(var z=(e+C[S]+g)%g,D=0,P=0;P<B.length;P++)if((0==P||Math.abs(B[P]-D)>1||P>=B.length-2)&&(D=B[P],l[P]=E.slowScrollHorizontalIntervalTimer(r*(P+1),i,t,B[P],n,s,o,a,d,c,e,f,h,v,g,u,S,b,z,p)),0==P&&""!=p.onSlideStart){var X=(y[S]+C[S]+g)%g;p.onSlideStart(new E.args("start",p,i,$(i).children(":eq("+X+")"),X,e))}var H=!1;p.infiniteSlider?z!=k[S]&&(H=!0):e!=y[S]&&(H=!0),H&&""!=p.onSlideComplete&&(l[l.length]=E.onSlideCompleteTimer(r*(P+1),p,i,$(i).children(":eq("+z+")"),z,S)),O[S]=l,E.hideScrollbar(p,l,P,B,n,s,o,d,c,S),E.autoSlide(i,t,l,n,s,o,a,d,c,f,h,u,S,v,g,b,p)},changeOffset:function(e,i,t,l,n,s,o,a,d,c,f,h,u,S,v,g,b,p){E.autoSlidePause(S);for(var m=0;m<l.length;m++)clearTimeout(l[m]);p.infiniteSlider||(e=e>-1*N[S]+b?-1*N[S]+b:e,e=e<-1*x[S]?-1*x[S]:e);var w=Math.ceil(p.autoSlideTransTimer/10)+1,T=E.getSliderOffset(i,"x"),A=(E.calcActiveOffset(p,e,h,o,C,g,y[S],S)+C[S]+g)%g,W=h.slice();if(p.snapToChildren&&!p.infiniteSlider)e=h[A];else if(p.infiniteSlider&&p.snapToChildren){for(;e>=W[0];)W.splice(0,0,W[g-1]+$(i).width()),W.splice(g,1);for(;e<=W[g-1];)W.splice(g,0,W[0]-$(i).width()),W.splice(0,1);A=E.calcActiveOffset(p,e,W,o,C,g,y[S],S),e=W[A]}var M=e-T,P=new Array,B,I;E.showScrollbar(p,n);for(var q=0;w>=q;q++)B=q,B/=w,B--,I=T+M*(Math.pow(B,5)+1),P[P.length]=I;for(var z=(A+C[S]+g)%g,D=0,q=0;q<P.length;q++)if((0==q||Math.abs(P[q]-D)>1||q>=P.length-2)&&(D=P[q],l[q]=E.slowScrollHorizontalIntervalTimer(r*(q+1),i,t,P[q],n,s,o,a,d,c,A,f,h,v,g,u,S,b,z,p)),0==q&&""!=p.onSlideStart){var z=(y[S]+C[S]+g)%g;p.onSlideStart(new E.args("start",p,i,$(i).children(":eq("+z+")"),z,A))}var X=!1;p.infiniteSlider?z!=k[S]&&(X=!0):A!=y[S]&&(X=!0),X&&""!=p.onSlideComplete&&(l[l.length]=E.onSlideCompleteTimer(r*(q+1),p,i,$(i).children(":eq("+z+")"),z,S)),O[S]=l,E.hideScrollbar(p,l,q,P,n,s,o,d,c,S),E.autoSlide(i,t,l,n,s,o,a,d,c,f,h,u,S,v,g,b,p)},autoSlide:function(e,i,t,r,l,n,s,o,a,d,c,f,h,u,S,v,g){return m[h].autoSlide?(E.autoSlidePause(h),void(b[h]=setTimeout(function(){!g.infiniteSlider&&y[h]>c.length-1&&(y[h]=y[h]-S);var b=y[h]+C[h]+1;E.changeSlide(b,e,i,t,r,l,n,s,o,a,d,c,f,h,u,S,v,g),E.autoSlide(e,i,t,r,l,n,s,o,a,d,c,f,h,u,S,v,g)},g.autoSlideTimer+g.autoSlideTransTimer))):!1},autoSlidePause:function(e){clearTimeout(b[e])},isUnselectable:function(e,i){return""!=i.unselectableSelector&&1==$(e).closest(i.unselectableSelector).length?!0:!1},slowScrollHorizontalIntervalTimer:function(e,i,t,r,l,n,s,o,a,d,c,f,h,u,S,v,g,b,p,m){var w=setTimeout(function(){E.slowScrollHorizontalInterval(i,t,r,l,n,s,o,a,d,c,f,h,u,S,v,g,b,p,m)},e);return w},onSlideCompleteTimer:function(e,i,t,r,l,n){var s=setTimeout(function(){E.onSlideComplete(i,t,r,l,n)},e);return s},hideScrollbarIntervalTimer:function(e,i,t,r,l,n,s,o,a,d){var c=setTimeout(function(){E.hideScrollbarInterval(i,t,r,l,n,s,o,a,d)},e);return c},updateBackfaceVisibilityTimer:function(e,i,t,r,l){var n=setTimeout(function(){E.updateBackfaceVisibility(i,t,r,l)},e);return n},updateBackfaceVisibility:function(e,i,t,r){for(var l=(y[i]+C[i]+t)%t,n=Array(),s=0;s<2*r.hardwareAccelBuffer;s++){var o=E.mod(l+s-r.hardwareAccelBuffer,t);if("visible"==$(e).eq(o).css("-webkit-backface-visibility")){n[n.length]=o;var a=E.mod(o+2*r.hardwareAccelBuffer,t),d=E.mod(o-2*r.hardwareAccelBuffer,t);$(e).eq(o).css("-webkit-backface-visibility","hidden"),-1==n.indexOf(d)&&$(e).eq(d).css("-webkit-backface-visibility",""),-1==n.indexOf(a)&&$(e).eq(a).css("-webkit-backface-visibility","")}}},mod:function(e,i){var t=e%i;return 0>t?t+i:t},args:function(e,i,t,r,l,n){this.prevSlideNumber=void 0==$(t).parent().data("args")?void 0:$(t).parent().data("args").prevSlideNumber,this.prevSlideObject=void 0==$(t).parent().data("args")?void 0:$(t).parent().data("args").prevSlideObject,this.targetSlideNumber=n+1,this.targetSlideObject=$(t).children(":eq("+n+")"),this.slideChanged=!1,"load"==e?(this.targetSlideNumber=void 0,this.targetSlideObject=void 0):"start"==e?(this.targetSlideNumber=void 0,this.targetSlideObject=void 0):"change"==e?(this.slideChanged=!0,this.prevSlideNumber=void 0==$(t).parent().data("args")?i.startAtSlide:$(t).parent().data("args").currentSlideNumber,this.prevSlideObject=$(t).children(":eq("+this.prevSlideNumber+")")):"complete"==e&&(this.slideChanged=$(t).parent().data("args").slideChanged),this.settings=i,this.data=$(t).parent().data("iosslider"),this.sliderObject=t,this.sliderContainerObject=$(t).parent(),this.currentSlideObject=r,this.currentSlideNumber=l+1,this.currentSliderOffset=-1*E.getSliderOffset(t,"x")},preventDrag:function(e){e.preventDefault()},preventClick:function(e){return e.stopImmediatePropagation(),!1},enableClick:function(){return!0}};E.setBrowserInfo();var W={init:function(r,o){a=E.has3DTransform();var f=$.extend(!0,{elasticPullResistance:.6,frictionCoefficient:.92,elasticFrictionCoefficient:.6,snapFrictionCoefficient:.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarPaging:!1,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:.9,desktopClickDrag:!1,keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0,navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5e3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,hardwareAccelBuffer:5,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"",onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},r);return void 0==o&&(o=this),$(o).each(function(r){function o(){E.autoSlidePause(a),Ne=$(ne).find("a"),xe=$(ne).find("[onclick]"),Te=$(ne).find("*"),$(V).css("width",""),$(V).css("height",""),$(ne).css("width",""),se=$(ne).children().not("script").get(),oe=new Array,ae=new Array,f.responsiveSlides&&$(se).css("width",""),x[a]=0,Z=new Array,H=$(V).parent().width(),L=$(V).outerWidth(!0),f.responsiveSlideContainer&&(L=$(V).outerWidth(!0)>H?H:$(V).width()),$(V).css({position:f.stageCSS.position,top:f.stageCSS.top,left:f.stageCSS.left,overflow:f.stageCSS.overflow,zIndex:f.stageCSS.zIndex,webkitPerspective:1e3,webkitBackfaceVisibility:"hidden",msTouchAction:"pan-y",width:L}),$(f.unselectableSelector).css({cursor:"default"});for(var e=0;e<se.length;e++){oe[e]=$(se[e]).width(),ae[e]=$(se[e]).outerWidth(!0);var i=ae[e];f.responsiveSlides&&(ae[e]>L?(i=L+-1*(ae[e]-oe[e]),oe[e]=i,ae[e]=L):i=oe[e],$(se[e]).css({width:i})),$(se[e]).css({overflow:"hidden",position:"absolute"}),Z[e]=-1*x[a],x[a]=x[a]+i+(ae[e]-oe[e])}f.snapSlideCenter&&(R=.5*(L-ae[0]),f.responsiveSlides&&ae[0]>L&&(R=0)),T[a]=2*x[a];for(var e=0;e<se.length;e++)E.setSliderOffset($(se[e]),-1*Z[e]+x[a]+R),Z[e]=Z[e]-x[a];if(!f.infiniteSlider&&!f.snapSlideCenter){for(var t=0;t<Z.length&&!(Z[t]<=-1*(2*x[a]-L));t++)fe=t;Z.splice(fe+1,Z.length),Z[Z.length]=-1*(2*x[a]-L)}for(var t=0;t<Z.length;t++)ee[t]=Z[t];if(K&&(m[a].startAtSlide=m[a].startAtSlide>Z.length?Z.length:m[a].startAtSlide,f.infiniteSlider?(m[a].startAtSlide=(m[a].startAtSlide-1+de)%de,y[a]=m[a].startAtSlide):(m[a].startAtSlide=m[a].startAtSlide-1<0?Z.length-1:m[a].startAtSlide,y[a]=m[a].startAtSlide-1),k[a]=y[a]),N[a]=x[a]+R,$(ne).css({position:"relative",cursor:S,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:x[a]+"px"}),Ce=x[a],x[a]=2*x[a]-L+2*R,ge=L>Ce+R||0==L?!0:!1,ge&&$(ne).css({cursor:"default"}),j=$(V).parent().outerHeight(!0),Y=$(V).height(),f.responsiveSlideContainer&&(Y=Y>j?j:Y),$(V).css({height:Y}),E.setSliderOffset(ne,Z[y[a]]),f.infiniteSlider&&!ge){for(var r=E.getSliderOffset($(ne),"x"),l=(C[a]+de)%de*-1;0>l;){var n=0,s=E.getSliderOffset($(se[0]),"x");$(se).each(function(e){E.getSliderOffset(this,"x")<s&&(s=E.getSliderOffset(this,"x"),n=e)});var o=N[a]+Ce;E.setSliderOffset($(se)[n],o),N[a]=-1*Z[1]+R,x[a]=N[a]+Ce-L,Z.splice(0,1),Z.splice(Z.length,0,-1*o+R),l++}for(;-1*Z[0]-Ce+R>0&&f.snapSlideCenter&&K;){var d=0,c=E.getSliderOffset($(se[0]),"x");$(se).each(function(e){E.getSliderOffset(this,"x")>c&&(c=E.getSliderOffset(this,"x"),d=e)});var o=N[a]-ae[d];E.setSliderOffset($(se)[d],o),Z.splice(0,0,-1*o+R),Z.splice(Z.length-1,1),N[a]=-1*Z[0]+R,x[a]=N[a]+Ce-L,C[a]--,y[a]++}for(;r<=-1*x[a];){var n=0,s=E.getSliderOffset($(se[0]),"x");$(se).each(function(e){E.getSliderOffset(this,"x")<s&&(s=E.getSliderOffset(this,"x"),n=e)});var o=N[a]+Ce;E.setSliderOffset($(se)[n],o),N[a]=-1*Z[1]+R,x[a]=N[a]+Ce-L,Z.splice(0,1),Z.splice(Z.length,0,-1*o+R),C[a]++,y[a]--}}return E.setSliderOffset(ne,Z[y[a]]),E.updateBackfaceVisibility(se,a,de,f),f.desktopClickDrag||$(ne).css({cursor:"default"}),f.scrollbar&&($("."+B).css({margin:f.scrollbarMargin,overflow:"hidden",display:"none"}),$("."+B+" ."+I).css({border:f.scrollbarBorder}),U=parseInt($("."+B).css("marginLeft"))+parseInt($("."+B).css("marginRight")),_=parseInt($("."+B+" ."+I).css("borderLeftWidth"),10)+parseInt($("."+B+" ."+I).css("borderRightWidth"),10),D=""!=f.scrollbarContainer?$(f.scrollbarContainer).width():L,X=L/Ce*(D-U),f.scrollbarHide||(ie=f.scrollbarOpacity),$("."+B).css({position:"absolute",left:0,width:D-U+"px",margin:f.scrollbarMargin}),"top"==f.scrollbarLocation?$("."+B).css("top","0"):$("."+B).css("bottom","0"),$("."+B+" ."+I).css({borderRadius:f.scrollbarBorderRadius,background:f.scrollbarBackground,height:f.scrollbarHeight,width:X-_+"px",minWidth:f.scrollbarHeight,border:f.scrollbarBorder,webkitPerspective:1e3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:ie,filter:"alpha(opacity:"+100*ie+")",boxShadow:f.scrollbarShadow}),E.setSliderOffset($("."+B+" ."+I),Math.floor((-1*Z[y[a]]-N[a]+R)/(x[a]-N[a]+R)*(D-U-X))),$("."+B).css({display:"block"}),q=$("."+B+" ."+I),z=$("."+B)),f.scrollbarDrag&&!ge&&$("."+B+" ."+I).css({cursor:S}),f.infiniteSlider&&(ve=(x[a]+L)/3),""!=f.navSlideSelector&&$(f.navSlideSelector).each(function(e){$(this).css({cursor:"pointer"}),$(this).unbind(ke).bind(ke,function(i){$(this).unbind("touchstart"==i.type?"click.iosSliderEvent":"touchstart.iosSliderEvent"),ke=i.type+".iosSliderEvent",E.changeSlide(e,ne,se,u,I,X,L,D,U,_,ee,Z,ae,a,ve,de,R,f)})}),""!=f.navPrevSelector&&($(f.navPrevSelector).css({cursor:"pointer"}),$(f.navPrevSelector).unbind(ke).bind(ke,function(e){$(this).unbind("touchstart"==e.type?"click.iosSliderEvent":"touchstart.iosSliderEvent"),ke=e.type+".iosSliderEvent";var i=(y[a]+C[a]+de)%de;(i>0||f.infiniteSlider)&&E.changeSlide(i-1,ne,se,u,I,X,L,D,U,_,ee,Z,ae,a,ve,de,R,f)})),""!=f.navNextSelector&&($(f.navNextSelector).css({cursor:"pointer"}),$(f.navNextSelector).unbind(ke).bind(ke,function(e){$(this).unbind("touchstart"==e.type?"click.iosSliderEvent":"touchstart.iosSliderEvent"),ke=e.type+".iosSliderEvent";var i=(y[a]+C[a]+de)%de;(i<Z.length-1||f.infiniteSlider)&&E.changeSlide(i+1,ne,se,u,I,X,L,D,U,_,ee,Z,ae,a,ve,de,R,f)})),f.autoSlide&&!ge&&""!=f.autoSlideToggleSelector&&($(f.autoSlideToggleSelector).css({cursor:"pointer"}),$(f.autoSlideToggleSelector).unbind(ke).bind(ke,function(e){$(this).unbind("touchstart"==e.type?"click.iosSliderEvent":"touchstart.iosSliderEvent"),ke=e.type+".iosSliderEvent",be?(E.autoSlide(ne,se,u,I,X,L,D,U,_,ee,Z,ae,a,ve,de,R,f),be=!1,$(f.autoSlideToggleSelector).removeClass("on")):(E.autoSlidePause(a),be=!0,$(f.autoSlideToggleSelector).addClass("on"))})),E.autoSlide(ne,se,u,I,X,L,D,U,_,ee,Z,ae,a,ve,de,R,f),$(V).bind("mouseleave.iosSliderEvent",function(){return be?!0:void E.autoSlide(ne,se,u,I,X,L,D,U,_,ee,Z,ae,a,ve,de,R,f)}),$(V).bind("touchend.iosSliderEvent",function(){return be?!0:void E.autoSlide(ne,se,u,I,X,L,D,U,_,ee,Z,ae,a,ve,de,R,f)}),f.autoSlideHoverPause&&$(V).bind("mouseenter.iosSliderEvent",function(){E.autoSlidePause(a)}),$(V).data("iosslider",{obj:Ae,settings:f,scrollerNode:ne,slideNodes:se,numberOfSlides:de,centeredSlideOffset:R,sliderNumber:a,originalOffsets:ee,childrenOffsets:Z,sliderMax:x[a],scrollbarClass:I,scrollbarWidth:X,scrollbarStageWidth:D,stageWidth:L,scrollMargin:U,scrollBorder:_,infiniteSliderOffset:C[a],infiniteSliderWidth:ve,slideNodeOuterWidths:ae,shortContent:ge}),K=!1,!0}e++;var a=e,u=new Array;m[a]=$.extend({},f),N[a]=0,x[a]=0;var b=0,M=new Array(0,0),P=new Array(0,0),B="scrollbarBlock"+e,I="scrollbar"+e,q,z,D,X,H,j,R=0,V=$(this),L,Y,F,U,_,G,K=!0,Q=-1,J=new Array,Z,ee=new Array,ie=0,te=0,re=0,le=0,ne=$(this).children(":first-child"),se,oe,ae,de=$(ne).children().not("script").length,ce=!1,fe=0,he=!1,ue=void 0,Se=0,ve;C[a]=0;var ge=!1;g[a]=-1;var be=!1;p[a]=V,w[a]=!1;var pe,me=0,we=0,Oe=!1,ye=!1,ke="touchstart.iosSliderEvent click.iosSliderEvent",Ce,Ne,xe,Te;A[a]=!1,O[a]=new Array,f.scrollbarDrag&&(f.scrollbar=!0,f.scrollbarHide=!1);var Ae=$(this),Ee=Ae.data("iosslider");if(void 0!=Ee)return!0;var We=["d","e","m","o"," ","v","e","r","s","i","o","n"],Me=Math.floor(12317*Math.random());$(ne).parent().append("<i class = 'i"+Me+"'></i>").append("<i class = 'i"+Me+"'></i>"),$(".i"+Me).css({position:"absolute",right:"10px",bottom:"10px",zIndex:1e3,fontStyle:"normal",background:"#fff",opacity:.2}).eq(1).css({bottom:"auto",right:"auto",top:"10px",left:"10px"});for(var r=0;r<We.length;r++)$(".i"+Me).html($(".i"+Me).html()+We[r]);if(parseInt($().jquery.split(".").join(""),10)>=14.2?$(this).delegate("img","dragstart.iosSliderEvent",function(e){e.preventDefault()}):$(this).find("img").bind("dragstart.iosSliderEvent",function(e){e.preventDefault()}),f.infiniteSlider&&(f.scrollbar=!1),f.infiniteSlider&&1==de&&(f.infiniteSlider=!1),f.scrollbar&&(""!=f.scrollbarContainer?$(f.scrollbarContainer).append("<div class = '"+B+"'><div class = '"+I+"'></div></div>"):$(ne).parent().append("<div class = '"+B+"'><div class = '"+I+"'></div></div>")),!o())return!0;$(this).find("a").bind("mousedown",E.preventDrag),$(this).find("[onclick]").bind("click",E.preventDrag).each(function(){$(this).data("onclick",this.onclick)});var Q=E.calcActiveOffset(f,E.getSliderOffset($(ne),"x"),Z,L,C[a],de,void 0,a),Pe=(Q+C[a]+de)%de,Be=new E.args("load",f,ne,$(ne).children(":eq("+Pe+")"),Pe,Pe);if($(V).data("args",Be),""!=f.onSliderLoaded&&f.onSliderLoaded(Be),g[a]=Pe,f.scrollbarPaging&&f.scrollbar&&!ge&&($(z).css("cursor","pointer"),$(z).bind("click.iosSliderEvent",function(e){this==e.target&&(e.pageX>$(q).offset().left?W.nextPage(V):W.prevPage(V))})),m[a].responsiveSlides||m[a].responsiveSlideContainer){var Ie=s?"orientationchange":"resize";$(window).bind(Ie+".iosSliderEvent-"+a,function(){if(!o())return!0;var e=$(V).data("args");""!=f.onSliderResize&&f.onSliderResize(e)})}if(!f.keyboardControls&&!f.tabToAdvance||ge||$(document).bind("keydown.iosSliderEvent",function(e){if(!d&&!c)var e=e.originalEvent;if("INPUT"==e.target.nodeName)return!0;if(A[a])return!0;if(37==e.keyCode&&f.keyboardControls){e.preventDefault();var i=(y[a]+C[a]+de)%de;(i>0||f.infiniteSlider)&&E.changeSlide(i-1,ne,se,u,I,X,L,D,U,_,ee,Z,ae,a,ve,de,R,f)}else if(39==e.keyCode&&f.keyboardControls||9==e.keyCode&&f.tabToAdvance){e.preventDefault();var i=(y[a]+C[a]+de)%de;(i<Z.length-1||f.infiniteSlider)&&E.changeSlide(i+1,ne,se,u,I,X,L,D,U,_,ee,Z,ae,a,ve,de,R,f)}}),n||f.desktopClickDrag){var qe=!1,ze=!1,De=$(ne),Xe=$(ne),He=null,je=!1;f.scrollbarDrag&&(De=De.add(q),Xe=Xe.add(z)),$(De).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent",function(e){if($(window).one("scroll.iosSliderEvent",function(e){qe=!1}),qe)return!0;if(qe=!0,ze=!1,$(Xe).unbind("touchstart"==e.type?"mousedown.iosSliderEvent":"touchstart.iosSliderEvent"),A[a]||ge)return qe=!1,ce=!1,!0;if(je=E.isUnselectable(e.target,f))return qe=!1,ce=!1,!0;if(pe=$(this)[0]===$(q)[0]?q:ne,!d&&!c)var e=e.originalEvent;if(E.autoSlidePause(a),Te.unbind(".disableClick"),"touchstart"==e.type)eventX=e.touches[0].pageX,eventY=e.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(c)try{document.selection.empty()}catch(e){}else document.selection.empty();eventX=e.pageX,eventY=e.pageY,he=!0,ue=ne,$(this).css({cursor:v})}M=new Array(0,0),P=new Array(0,0),i=0,ce=!1;for(var t=0;t<u.length;t++)clearTimeout(u[t]);var r=E.getSliderOffset(ne,"x");r>-1*N[a]+R+Ce?(r=-1*N[a]+R+Ce,E.setSliderOffset($("."+I),r),$("."+I).css({width:X-_+"px"})):r<-1*x[a]&&(r=-1*x[a],E.setSliderOffset($("."+I),D-U-X),$("."+I).css({width:X-_+"px"}));var l=$(this)[0]===$(q)[0]?N[a]:0;te=-1*(E.getSliderOffset(this,"x")-eventX-l),re=-1*(E.getSliderOffset(this,"y")-eventY),M[1]=eventX,P[1]=eventY,ye=!1}),$(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",function(e){if(!d&&!c)var e=e.originalEvent;if(A[a]||ge||je||!qe)return!0;var r=0;if("touchmove"==e.type)eventX=e.touches[0].pageX,eventY=e.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty||window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(c)try{document.selection.empty()}catch(e){}else document.selection.empty();if(eventX=e.pageX,eventY=e.pageY,!he)return!0;if(!h&&("undefined"!=typeof e.webkitMovementX||"undefined"!=typeof e.webkitMovementY)&&0===e.webkitMovementY&&0===e.webkitMovementX)return!0}if(M[0]=M[1],M[1]=eventX,i=(M[1]-M[0])/2,P[0]=P[1],P[1]=eventY,t=(P[1]-P[0])/2,!ce){var n=(y[a]+C[a]+de)%de,s=new E.args("start",f,ne,$(ne).children(":eq("+n+")"),n,void 0);$(V).data("args",s),""!=f.onSlideStart&&f.onSlideStart(s)}if((t>f.verticalSlideLockThreshold||t<-1*f.verticalSlideLockThreshold)&&"touchmove"==e.type&&!ce&&(Oe=!0),(i>f.horizontalSlideLockThreshold||i<-1*f.horizontalSlideLockThreshold)&&"touchmove"==e.type&&e.preventDefault(),(i>f.slideStartVelocityThreshold||i<-1*f.slideStartVelocityThreshold)&&(ce=!0),ce&&!Oe){var o=E.getSliderOffset(ne,"x"),u=$(pe)[0]===$(q)[0]?N[a]:R,S=$(pe)[0]===$(q)[0]?(N[a]-x[a]-R)/(D-U-X):1,v=$(pe)[0]===$(q)[0]?f.scrollbarElasticPullResistance:f.elasticPullResistance,g=f.snapSlideCenter&&$(pe)[0]===$(q)[0]?0:R,b=f.snapSlideCenter&&$(pe)[0]===$(q)[0]?R:0;if("touchmove"==e.type&&(le!=e.touches.length&&(te=-1*o+eventX),le=e.touches.length),f.infiniteSlider){if(o<=-1*x[a]){var p=$(ne).width();if(o<=-1*T[a]){var m=-1*ee[0];$(se).each(function(e){E.setSliderOffset($(se)[e],m+R),e<Z.length&&(Z[e]=-1*m),m+=ae[e]}),te-=-1*Z[0],N[a]=-1*Z[0]+R,x[a]=N[a]+p-L,C[a]=0}else{var w=0,O=E.getSliderOffset($(se[0]),"x");$(se).each(function(e){E.getSliderOffset(this,"x")<O&&(O=E.getSliderOffset(this,"x"),w=e)});var W=N[a]+p;E.setSliderOffset($(se)[w],W),N[a]=-1*Z[1]+R,x[a]=N[a]+p-L,Z.splice(0,1),Z.splice(Z.length,0,-1*W+R),C[a]++}}if(o>=-1*N[a]||o>=0){var p=$(ne).width();if(o>=0){var m=-1*ee[0];for($(se).each(function(e){E.setSliderOffset($(se)[e],m+R),e<Z.length&&(Z[e]=-1*m),m+=ae[e]}),te+=-1*Z[0],N[a]=-1*Z[0]+R,x[a]=N[a]+p-L,C[a]=de;-1*Z[0]-p+R>0;){var B=0,z=E.getSliderOffset($(se[0]),"x");$(se).each(function(e){E.getSliderOffset(this,"x")>z&&(z=E.getSliderOffset(this,"x"),B=e)});var W=N[a]-ae[B];E.setSliderOffset($(se)[B],W),Z.splice(0,0,-1*W+R),Z.splice(Z.length-1,1),N[a]=-1*Z[0]+R,x[a]=N[a]+p-L,C[a]--,y[a]++}}else{var B=0,z=E.getSliderOffset($(se[0]),"x");$(se).each(function(e){E.getSliderOffset(this,"x")>z&&(z=E.getSliderOffset(this,"x"),B=e)});var W=N[a]-ae[B];E.setSliderOffset($(se)[B],W),Z.splice(0,0,-1*W+R),Z.splice(Z.length-1,1),N[a]=-1*Z[0]+R,x[a]=N[a]+p-L,C[a]--}}}else{var p=$(ne).width();o>-1*N[a]+R&&(r=(N[a]+-1*(te-u-eventX+g)*S-u)*v*-1/S),o<-1*x[a]&&(r=(x[a]+b+-1*(te-u-eventX)*S-u)*v*-1/S)}if(E.setSliderOffset(ne,-1*(te-u-eventX-r)*S-u+b),f.scrollbar){E.showScrollbar(f,I),l=Math.floor((te-eventX-r-N[a]+g)/(x[a]-N[a]+R)*(D-U-X)*S);var H=X;0>=l?(H=X-_- -1*l,E.setSliderOffset($("."+I),0),$("."+I).css({width:H+"px"})):l>=D-U-_-X?(H=D-U-_-l,E.setSliderOffset($("."+I),l),$("."+I).css({width:H+"px"})):E.setSliderOffset($("."+I),l)}"touchmove"==e.type&&(G=e.touches[0].pageX);var j=!1,Y=E.calcActiveOffset(f,-1*(te-eventX-r),Z,L,C[a],de,void 0,a),F=(Y+C[a]+de)%de;if(f.infiniteSlider?F!=k[a]&&(j=!0):Y!=y[a]&&(j=!0),j){y[a]=Y,k[a]=F,ye=!0;var s=new E.args("change",f,ne,$(ne).children(":eq("+F+")"),F,F);$(V).data("args",s),""!=f.onSlideChange&&f.onSlideChange(s),E.updateBackfaceVisibility(se,a,de,f)}}});var Re=$(window);if(c||d)var Re=$(document);$(De).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent",function(e){var e=e.originalEvent;if(ze)return!1;if(ze=!0,A[a]||ge)return!0;if(je)return!0;if(0!=e.touches.length)for(var r=0;r<e.touches.length;r++)e.touches[r].pageX==G&&E.slowScrollHorizontal(ne,se,u,I,i,t,X,L,D,U,_,ee,Z,ae,a,ve,de,pe,ye,R,f);else E.slowScrollHorizontal(ne,se,u,I,i,t,X,L,D,U,_,ee,Z,ae,a,ve,de,pe,ye,R,f);return Oe=!1,qe=!1,!0}),$(Re).bind("mouseup.iosSliderEvent-"+a,function(e){if(ce?Ne.unbind("click.disableClick").bind("click.disableClick",E.preventClick):Ne.unbind("click.disableClick").bind("click.disableClick",E.enableClick),xe.each(function(){this.onclick=function(e){return ce?!1:void($(this).data("onclick")&&$(this).data("onclick").call(this,e||window.event))},this.onclick=$(this).data("onclick")}),parseFloat($().jquery)>=1.8?Te.each(function(){var e=$._data(this,"events");if(void 0!=e&&void 0!=e.click&&"iosSliderEvent"!=e.click[0].namespace){if(!ce)return!1;$(this).one("click.disableClick",E.preventClick);var i=$._data(this,"events").click,t=i.pop();i.splice(0,0,t)}}):parseFloat($().jquery)>=1.6&&Te.each(function(){var e=$(this).data("events");if(void 0!=e&&void 0!=e.click&&"iosSliderEvent"!=e.click[0].namespace){if(!ce)return!1;$(this).one("click.disableClick",E.preventClick);var i=$(this).data("events").click,t=i.pop();i.splice(0,0,t)}}),!w[a]){if(ge)return!0;if(f.desktopClickDrag&&$(ne).css({cursor:S}),f.scrollbarDrag&&$(q).css({cursor:S}),he=!1,void 0==ue)return!0;E.slowScrollHorizontal(ue,se,u,I,i,t,X,L,D,U,_,ee,Z,ae,a,ve,de,pe,ye,R,f),ue=void 0}Oe=!1,qe=!1})}})},destroy:function(e,i){return void 0==i&&(i=this),$(i).each(function(){var i=$(this),t=i.data("iosslider");if(void 0==t)return!1;void 0==e&&(e=!0),E.autoSlidePause(t.sliderNumber),w[t.sliderNumber]=!0,$(window).unbind(".iosSliderEvent-"+t.sliderNumber),$(document).unbind(".iosSliderEvent-"+t.sliderNumber),$(document).unbind("keydown.iosSliderEvent"),$(this).unbind(".iosSliderEvent"),$(this).children(":first-child").unbind(".iosSliderEvent"),$(this).children(":first-child").children().unbind(".iosSliderEvent"),$(t.settings.scrollbarBlockNode).unbind(".iosSliderEvent"),e&&($(this).attr("style",""),$(this).children(":first-child").attr("style",""),$(this).children(":first-child").children().attr("style",""),$(t.settings.navSlideSelector).attr("style",""),$(t.settings.navPrevSelector).attr("style",""),$(t.settings.navNextSelector).attr("style",""),$(t.settings.autoSlideToggleSelector).attr("style",""),$(t.settings.unselectableSelector).attr("style","")),t.settings.scrollbar&&$(".scrollbarBlock"+t.sliderNumber).remove();for(var r=O[t.sliderNumber],l=0;l<r.length;l++)clearTimeout(r[l]);i.removeData("iosslider"),i.removeData("args")})},update:function(e){return void 0==e&&(e=this),$(e).each(function(){var e=$(this),i=e.data("iosslider");if(void 0==i)return!1;i.settings.startAtSlide=e.data("args").currentSlideNumber,W.destroy(!1,this),1!=i.numberOfSlides&&i.settings.infiniteSlider&&(i.settings.startAtSlide=(y[i.sliderNumber]+1+C[i.sliderNumber]+i.numberOfSlides)%i.numberOfSlides),W.init(i.settings,this);var t=new E.args("update",i.settings,i.scrollerNode,$(i.scrollerNode).children(":eq("+(i.settings.startAtSlide-1)+")"),i.settings.startAtSlide-1,i.settings.startAtSlide-1);$(i.stageNode).data("args",t),""!=i.settings.onSliderUpdate&&i.settings.onSliderUpdate(t)})},addSlide:function(e,i){return this.each(function(){var t=$(this),r=t.data("iosslider");return void 0==r?!1:(0==$(r.scrollerNode).children().length?($(r.scrollerNode).append(e),t.data("args").currentSlideNumber=1):r.settings.infiniteSlider?(1==i?$(r.scrollerNode).children(":eq(0)").before(e):$(r.scrollerNode).children(":eq("+(i-2)+")").after(e),C[r.sliderNumber]<-1&&y[r.sliderNumber]--,t.data("args").currentSlideNumber>=i&&y[r.sliderNumber]++):(i<=r.numberOfSlides?$(r.scrollerNode).children(":eq("+(i-1)+")").before(e):$(r.scrollerNode).children(":eq("+(i-2)+")").after(e),t.data("args").currentSlideNumber>=i&&t.data("args").currentSlideNumber++),
t.data("iosslider").numberOfSlides++,void W.update(this))})},removeSlide:function(e){return this.each(function(){var i=$(this),t=i.data("iosslider");return void 0==t?!1:($(t.scrollerNode).children(":eq("+(e-1)+")").remove(),y[t.sliderNumber]>e-1&&y[t.sliderNumber]--,i.data("iosslider").numberOfSlides--,void W.update(this))})},goToSlide:function(e,i,t){return void 0==t&&(t=this),$(t).each(function(){var t=$(this),r=t.data("iosslider");return void 0==r||r.shortContent?!1:(e=e>r.childrenOffsets.length?r.childrenOffsets.length-1:e-1,void 0!=i&&(r.settings.autoSlideTransTimer=i),void E.changeSlide(e,$(r.scrollerNode),$(r.slideNodes),O[r.sliderNumber],r.scrollbarClass,r.scrollbarWidth,r.stageWidth,r.scrollbarStageWidth,r.scrollMargin,r.scrollBorder,r.originalOffsets,r.childrenOffsets,r.slideNodeOuterWidths,r.sliderNumber,r.infiniteSliderWidth,r.numberOfSlides,r.centeredSlideOffset,r.settings))})},prevSlide:function(e){return this.each(function(){var i=$(this),t=i.data("iosslider");if(void 0==t||t.shortContent)return!1;var r=(y[t.sliderNumber]+C[t.sliderNumber]+t.numberOfSlides)%t.numberOfSlides;void 0!=e&&(t.settings.autoSlideTransTimer=e),(r>0||t.settings.infiniteSlider)&&E.changeSlide(r-1,$(t.scrollerNode),$(t.slideNodes),O[t.sliderNumber],t.scrollbarClass,t.scrollbarWidth,t.stageWidth,t.scrollbarStageWidth,t.scrollMargin,t.scrollBorder,t.originalOffsets,t.childrenOffsets,t.slideNodeOuterWidths,t.sliderNumber,t.infiniteSliderWidth,t.numberOfSlides,t.centeredSlideOffset,t.settings),y[t.sliderNumber]=r})},nextSlide:function(e){return this.each(function(){var i=$(this),t=i.data("iosslider");if(void 0==t||t.shortContent)return!1;var r=(y[t.sliderNumber]+C[t.sliderNumber]+t.numberOfSlides)%t.numberOfSlides;void 0!=e&&(t.settings.autoSlideTransTimer=e),(r<t.childrenOffsets.length-1||t.settings.infiniteSlider)&&E.changeSlide(r+1,$(t.scrollerNode),$(t.slideNodes),O[t.sliderNumber],t.scrollbarClass,t.scrollbarWidth,t.stageWidth,t.scrollbarStageWidth,t.scrollMargin,t.scrollBorder,t.originalOffsets,t.childrenOffsets,t.slideNodeOuterWidths,t.sliderNumber,t.infiniteSliderWidth,t.numberOfSlides,t.centeredSlideOffset,t.settings),y[t.sliderNumber]=r})},prevPage:function(e,i){return void 0==i&&(i=this),$(i).each(function(){var i=$(this),t=i.data("iosslider");if(void 0==t)return!1;var r=E.getSliderOffset(t.scrollerNode,"x")+t.stageWidth;void 0!=e&&(t.settings.autoSlideTransTimer=e),E.changeOffset(r,$(t.scrollerNode),$(t.slideNodes),O[t.sliderNumber],t.scrollbarClass,t.scrollbarWidth,t.stageWidth,t.scrollbarStageWidth,t.scrollMargin,t.scrollBorder,t.originalOffsets,t.childrenOffsets,t.slideNodeOuterWidths,t.sliderNumber,t.infiniteSliderWidth,t.numberOfSlides,t.centeredSlideOffset,t.settings)})},nextPage:function(e,i){return void 0==i&&(i=this),$(i).each(function(){var i=$(this),t=i.data("iosslider");if(void 0==t)return!1;var r=E.getSliderOffset(t.scrollerNode,"x")-t.stageWidth;void 0!=e&&(t.settings.autoSlideTransTimer=e),E.changeOffset(r,$(t.scrollerNode),$(t.slideNodes),O[t.sliderNumber],t.scrollbarClass,t.scrollbarWidth,t.stageWidth,t.scrollbarStageWidth,t.scrollMargin,t.scrollBorder,t.originalOffsets,t.childrenOffsets,t.slideNodeOuterWidths,t.sliderNumber,t.infiniteSliderWidth,t.numberOfSlides,t.centeredSlideOffset,t.settings)})},lock:function(){return this.each(function(){var e=$(this),i=e.data("iosslider");return void 0==i||i.shortContent?!1:($(i.scrollerNode).css({cursor:"default"}),void(A[i.sliderNumber]=!0))})},unlock:function(){return this.each(function(){var e=$(this),i=e.data("iosslider");return void 0==i||i.shortContent?!1:($(i.scrollerNode).css({cursor:S}),void(A[i.sliderNumber]=!1))})},getData:function(){return this.each(function(){var e=$(this),i=e.data("iosslider");return void 0==i||i.shortContent?!1:i})},autoSlidePause:function(){return this.each(function(){var e=$(this),i=e.data("iosslider");return void 0==i||i.shortContent?!1:(m[i.sliderNumber].autoSlide=!1,E.autoSlidePause(i.sliderNumber),i)})},autoSlidePlay:function(){return this.each(function(){var e=$(this),i=e.data("iosslider");return void 0==i||i.shortContent?!1:(m[i.sliderNumber].autoSlide=!0,E.autoSlide($(i.scrollerNode),$(i.slideNodes),O[i.sliderNumber],i.scrollbarClass,i.scrollbarWidth,i.stageWidth,i.scrollbarStageWidth,i.scrollMargin,i.scrollBorder,i.originalOffsets,i.childrenOffsets,i.slideNodeOuterWidths,i.sliderNumber,i.infiniteSliderWidth,i.numberOfSlides,i.centeredSlideOffset,i.settings),i)})}};$.fn.iosSlider=function(e){return W[e]?W[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void $.error("invalid method call!"):W.init.apply(this,arguments)}}(jQuery);