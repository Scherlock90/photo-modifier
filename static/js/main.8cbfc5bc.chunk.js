(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r);a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(148),i=a(5),s=(a(58),a(46)),m=a.n(s),u=a(47),d=a.n(u),g=a(48),p=a.n(g),E=a(50),b=a.n(E),h=function(e){var t=e.value,a=e.max,n=e.onChange,r=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{id:"label"},r),c.a.createElement(b.a,{min:0,max:a,value:t,step:1,onChange:n}))};function v(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),o=Object(i.a)(l,2),s=o[0],u=o[1],g=Object(n.useState)(0),p=Object(i.a)(g,2),E=p[0],b=p[1],v=Object(n.useState)(1),x=Object(i.a)(v,2),f=x[0],y=x[1],O=Object(n.useState)(0),j=Object(i.a)(O,2),S=j[0],C=j[1],w=Object(n.useState)(0),k=Object(i.a)(w,2),N=k[0],I=k[1],R=Object(n.useState)(0),B=Object(i.a)(R,2),F=B[0],H=B[1],W=Object(n.useState)(0),z=Object(i.a)(W,2),L=z[0],P=z[1],A=Object(n.useState)(0),G=Object(i.a)(A,2),J=G[0],T=G[1],U=Object(n.useState)(0),q=Object(i.a)(U,2),M=q[0],V=q[1],$=Object(n.useState)("#1de9b6"),D=Object(i.a)($,2),K=D[0],Q=D[1],X=Object(n.useState)("Franek!"),Y=Object(i.a)(X,2),Z=Y[0],_=Y[1],ee=Object(n.useState)(d.a),te=Object(i.a)(ee,2),ae=te[0],ne=te[1];function ce(e){var t=document.querySelector(".imgStyle").getBoundingClientRect();return P(parseInt(t.width.toFixed(0))),T(parseInt(t.height.toFixed(0))),V(parseInt(t.width.toFixed(0))*parseInt(t.height.toFixed(0))),{width:L,height:J,allPix:M}}var re={transform:"rotate(".concat(F,"deg)"),filter:"sepia(".concat(S,") grayscale(").concat(N,") saturate(").concat(f,") invert(").concat(E,") contrast(").concat(a,") brightness(").concat(s,")")},le={color:K,borderRadius:"5%",display:"grid",gridTemplateColumns:"auto auto auto",gridTemplateRows:"80px 200px",gridGap:"200px",padding:"10px",height:"600px",backgroundColor:"rgba(28,34,47,.5)"},oe={cursor:"pointer"},ie={height:"50px",width:"200px",marginBlockEnd:"0",marginBlockStart:"0",padding:"1em",color:K},se={color:K},me={color:K,fontSize:"40px",padding:"1em 0 0 0"};return c.a.createElement("div",null,c.a.createElement("div",{style:me},"React Photo-Modifier ",c.a.createElement("br",null)," with Hooks"),c.a.createElement("div",null,c.a.createElement("span",null,c.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}))),c.a.createElement("div",{style:le},c.a.createElement("div",{className:"settings"},c.a.createElement(h,{max:100,value:s,onChange:function(e,t){return u(t),t}},c.a.createElement("span",{style:se},"Brightness ",s," ","%")),c.a.createElement(h,{max:100,value:a,onChange:function(e,t){return r(t),t}},c.a.createElement("span",{style:se},"Contrast ",a," ","%")),c.a.createElement(h,{max:100,value:N,onChange:function(e,t){return I(t),t}},c.a.createElement("span",{style:se},"Grayscale ",N," ","%")),c.a.createElement(h,{max:100,value:f,onChange:function(e,t){return y(t),t}},c.a.createElement("span",{style:se},"Saturate ",f," ","%")),c.a.createElement(h,{max:100,value:S,onChange:function(e,t){return C(t),t}},c.a.createElement("span",{style:se},"Sepia ",S," ","%")),c.a.createElement(h,{max:100,value:E,onChange:function(e,t){return b(t),t}},c.a.createElement("span",{style:se},"Invert ",E," ","%")),c.a.createElement(h,{max:360,value:F,onChange:function(e,t){return H(t),t>=1&&ce(),t}},c.a.createElement("span",{style:se},"Rotation ",F," ","deg")),c.a.createElement("div",{className:"buttonContainer"},c.a.createElement("div",{className:"buttonOnSettings"},c.a.createElement("button",{style:oe,onClick:function(){return _("Lucek")}},"Change name")),c.a.createElement("div",{className:"buttonOnSettings"},c.a.createElement("button",{style:oe,onClick:function(){return Q("#00e5ff")}},"Change color")))),c.a.createElement("div",null,c.a.createElement("div",{style:{padding:"3.5em 0 3.5em 0"}},c.a.createElement("img",{src:ae,style:re,className:"imgStyle",onClick:ce})),c.a.createElement("p",{className:"colorStyle",style:se}," ",Z),c.a.createElement("div",{className:"buttonImage"},c.a.createElement("input",{type:"file",id:"image",onChange:function(e){ne(URL.createObjectURL(e.target.files[0]))}}))),c.a.createElement("div",{style:{width:"232px",maxHeight:"1000px",height:"300px",borderRadius:"5%"}},c.a.createElement("p",{style:ie},"Width: ",L," px"),c.a.createElement("p",{style:ie},"Height: ",J," px"),c.a.createElement("p",{style:ie},"Size: ",M," px"),c.a.createElement("div",{className:"buttonImage"},c.a.createElement("button",{onClick:ce,className:"cursorPointer",type:"button"},'Value of Height/Width/Size"')))))}a(144);var x=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement(v,null)))};l.a.render(c.a.createElement(o.a,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,a){e.exports=a.p+"static/media/logo.0305800a.svg"},47:function(e,t,a){e.exports=a.p+"static/media/sen.c2312b66.jpg"},52:function(e,t,a){e.exports=a(145)},57:function(e,t,a){},58:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.8cbfc5bc.chunk.js.map