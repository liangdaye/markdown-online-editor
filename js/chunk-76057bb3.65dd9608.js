(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76057bb3"],{3379:function(e,t,n){"use strict";var a=n("9ac6"),r=n.n(a);r.a},"9ac6":function(e,t,n){},e103:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"export-page"},[n("div",{staticClass:"button-group"},[n("el-button",{attrs:{round:""},on:{click:e.onBackToMainPage}},[e._v("返回主页")]),n("el-button",{attrs:{round:"",type:"primary"},on:{click:e.onExportBtnClick}},[e._v("生成导出")])],1),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{id:"j-preview-vditor","element-loading-text":"正在努力，请稍候..."}})])},r=[],i=(n("96cf"),n("3b8d")),o=n("ff41"),c=n.n(o),u=(n("a481"),n("c0e9")),d=n.n(u),s=n("0132"),l=n.n(s),h=960,p=800,v=50,g=80,m=6,w=0,f=40,x=50,C="rgba(0, 0, 0, 0.21)";function b(e,t){var n=document.createElement("canvas");n.width=h*t,n.height=p*t;var a=n.getContext("2d"),r=m*t,i=r,o=0,c=i+n.width-2*r,u=o,d=c+r,s=r,l=d,v=s+n.height-2*r,g=c,w=v+r,f=i,x=w,C=f-r,b=v,T=C,k=s;return a.beginPath(),a.moveTo(i,o),a.lineTo(c,u),a.quadraticCurveTo(d,u,d,s),a.lineTo(l,v),a.quadraticCurveTo(l,w,g,w),a.lineTo(f,x),a.quadraticCurveTo(C,x,C,b),a.lineTo(T,k),a.quadraticCurveTo(T,o,i,o),a.clip(),a.drawImage(e,0,0),n}function T(e){var t=document.createElement("canvas");t.width=e.width+v,t.height=e.height+g;var n=t.getContext("2d");return n.shadowOffsetX=w,n.shadowOffsetY=f,n.shadowBlur=x,n.shadowColor=C,n.drawImage(e,v/2,0),t}var k=function(e){for(var t=[],n=[],a=e.querySelectorAll("svg"),r=0,i=a.length;r<i;r++){var o=a[r],c=o.parentNode,u=c.innerHTML,d=document.createElement("canvas");l()(d,u),t.push({parent:c,child:o}),c.removeChild(o),n.push({parent:c,child:d}),c.appendChild(d)}},E=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return k(t),n=getComputedStyle(t),h=+n.width.replace("px",""),p=+n.height.replace("px",""),a=window.devicePixelRatio,r={scale:a,allowTaint:!0,backgroundColor:"#fefefe"},e.next=8,d()(t,r);case 8:return i=e.sent,o=b(i,a),e.abrupt("return",T(o));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={name:"export-image",data:function(){return{isLoading:!0}},created:function(){this.$utils.updateHtmlStyle()},components:{},mounted:function(){this.initVditor(),this.$utils.hideVditorTextarea()},updated:function(){},methods:{initVditor:function(){var e=this,t={cache:!1,width:"61.8%",preview:{delay:1e3,show:!0}};this.vditor=new c.a("j-preview-vditor",t);var n=localStorage.getItem("vditorvditor");this.vditor.setValue(n),this.$nextTick((function(){e.isLoading=!1}))},exportAndDownloadImg:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:a=e.sent,r="download"in document.createElement("a"),r&&(i=document.createElement("a"),i.download=n,i.href=a.toDataURL(),i.click()),this.isLoading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),onBackToMainPage:function(){this.$router.push("/")},onExportBtnClick:function(){this.isLoading=!0;var e=document.getElementsByClassName("vditor-preview")[0],t=this.$utils.getExportFileName();this.exportAndDownloadImg(e,t)}}},L=y,B=(n("3379"),n("2877")),R=Object(B["a"])(L,a,r,!1,null,null,null);t["default"]=R.exports}}]);