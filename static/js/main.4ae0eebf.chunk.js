(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},20:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),r=a.n(s),l=(a(18),a(2)),o=a(3),c=a(5),u=a(4),h=a(6),m=(a(19),a(20),a(7)),d=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=t.target.id,n=t.target.value;switch(a){case"contrast":e.props.data.settings[0].value=n+"%";break;case"hue":e.props.data.settings[1].value=n+"deg";break;case"brightness":e.props.data.settings[2].value=n+"%";break;case"saturate":e.props.data.settings[3].value=n+"%";break;case"sepia":e.props.data.settings[4].value=n+"%";break;case"invert":e.props.data.settings[5].value=n+"%";break;case"rotation":e.props.data.settings[6].value=n}e.forceUpdate()},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"settings"},i.a.createElement(p,{settings:this.props.data.settings,url:this.props.data.image,onChange:this.handleChange}))}}]),t}(i.a.Component),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setVal=a.setVal.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"setVal",value:function(e,t){switch(e.name){case"contrast":return i.a.createElement("input",{type:"range",step:"1",min:"0",max:"200",id:e.name,onChange:t,defaultValue:e.value});case"hue":return i.a.createElement("input",{type:"range",step:"1",min:"0",max:"360",id:e.name,onChange:t,defaultValue:e.value});case"brightness":return i.a.createElement("input",{type:"range",step:"1",min:"0",max:"200",id:e.name,onChange:t,defaultValue:e.value});case"saturate":case"sepia":case"invert":case"grayscale":return i.a.createElement("input",{type:"range",step:"1",min:"0",max:"100",id:e.name,onChange:t,defaultValue:e.value});case"rotation":return i.a.createElement("input",{type:"range",step:"1",min:"0",max:"360",id:e.name,onChange:t,defaultValue:e.value});default:return i.a.createElement("input",{type:"range"})}}},{key:"render",value:function(){var e=this.props.onChange;return i.a.createElement("div",{className:"contentWrap"},i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"title"},"Filters"),this.props.settings.map(function(a,n){return i.a.createElement("div",{className:"setting"},i.a.createElement("label",{className:"filterName"},i.a.createElement("div",null,a.name),i.a.createElement("div",null,a.value)),t.prototype.setVal(a,e))})),i.a.createElement(g,{url:this.props.url,settings:this.props.settings}))}}]),t}(i.a.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._onMouseMove=function(e){a.setState({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY})},a.onBoundsElement=function(e){var t=document.querySelector(".guitar").getBoundingClientRect();console.log(t.width+" width i "+t.height+" height."),a.setState({width:t.width,height:t.height,AllPix:t.width*t.height})},a.onImgLoad=function(e){var t=e.target;a.setState({width:t.width,height:t.height})},a.rotate=function(e){var t=a.state.rotation+60;a.onBoundsElement(),t>=360&&(t=360),a.setState({rotation:t})},a.rotateleft=function(e){var t=a.state.rotation-60;a.onBoundsElement(),t<=-360&&(t=-360),a.setState({rotation:t})},a.fileHandler=function(e){e.preventDefault(),a.setState({imageField:URL.createObjectURL(e.target.files[0])})},a.state={imageField:"",rotation:0,width:0,height:0,x:0,y:0,AllPix:0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.settings[6].value>0&&this.onBoundsElement(),this.setState({width:this.state.width,height:this.state.height})}},{key:"render",value:function(){var e=this.state,t=e.rotation,a=e.width,n=e.height,s=e.x,r=e.y,l=e.AllPix,o=t,c=this.props.settings[6].value;c=o;var u={transform:"rotate(".concat(this.props.settings[6].value,"deg) rotate(").concat(t,"deg)"),filter:" contrast(".concat(this.props.settings[0].value,") hue-rotate(").concat(this.props.settings[1].value,") brightness(").concat(this.props.settings[2].value,") saturate(").concat(this.props.settings[3].value,") sepia(").concat(this.props.settings[4].value,")\n        invert(").concat(this.props.settings[5].value,")")};if(o>0)console.log("value"+c+" "+o),console.log(o=c),c=o;else if(360==c)return 360;var h={padding:"3em",maxWidth:"85%",maxHeight:"90%"};return i.a.createElement("div",{className:"imageContainer"},i.a.createElement("form",{style:{width:"auto",height:"800px",display:"flex",alignItems:"center",justifyContent:"center"},action:"/upload",method:"POST",encType:"multipart/form-data",onSubmit:this.handleSumbit},i.a.createElement("div",{className:"containerGuitar",style:h},i.a.createElement("div",{style:h},i.a.createElement("img",{id:"ing",src:this.state.imageField,className:"guitar",style:u,onClick:this.onBoundsElement,onMouseMove:this._onMouseMove,onLoad:this.onImgLoad}))),i.a.createElement("div",{style:{maxWidth:"30%",maxHeight:"90%",padding:"1em",lineHeight:"1.5em",color:"white",textAlign:"left"}},i.a.createElement("input",{type:"file",id:"imageField",onChange:this.fileHandler}),i.a.createElement("div",null,i.a.createElement("input",{onClick:this.rotate,type:"button",value:"Prawo"}),i.a.createElement("input",{onClick:this.rotateleft,type:"button",value:"Lewo"})),i.a.createElement("input",{onClick:this.onBoundsElement,type:"button",value:"Value of Height/Width/Px"}),i.a.createElement("div",{style:{textAlign:"left"}},i.a.createElement("p",null,"Width: ",a," "),i.a.createElement("p",null,"Height: ",n," "),i.a.createElement("p",null," Px: ",l," "),i.a.createElement("p",null,"Width inside img: ",s),i.a.createElement("p",null,"Height inside img: ",r)))))}}]),t}(i.a.Component);d.defaultProps={data:{settings:[{name:"contrast",value:"100%"},{name:"hue",value:"0deg"},{name:"brightness",value:"100%"},{name:"saturate",value:"100%"},{name:"sepia",value:"0%"},{name:"invert",value:"0%"},{name:"rotation",value:"0"}]}};var v=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement(d,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(26);r.a.render(i.a.createElement(f.a,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.4ae0eebf.chunk.js.map