(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7lmZ":function(t,n){},P7k8:function(t,n,i){"use strict";i.r(n);var s={data:function(){return{}},mounted:function(){!function(){var t;t=function(){!function(t){var n=t.getContext("2d"),i=0,s=0,a=[],e=function(){this.x=this.y=this.dx=this.dy=0,this.reset()};e.prototype.reset=function(){this.y=Math.random()*s,this.x=Math.random()*i,this.dx=Math.random()-.5,this.dy=.5*Math.random()+.5},i=window.innerWidth,s=window.innerHeight,t.width=i,t.height=s,function(t){if(t!==a.length){a=[];for(var n=0;n<t;n++)a.push(new e)}}(i*s/1e4),function t(){n.clearRect(0,0,i,s),n.fillStyle="#f6f9fa",a.forEach(function(t){t.y+=t.dy,t.x+=t.dx,t.y>s&&(t.y=0),t.x>i&&(t.reset(),t.y=0),n.beginPath(),n.arc(t.x,t.y,5,0,2*Math.PI,!1),n.fill()}),window.requestAnimationFrame(t)}()}(document.getElementById("snow"))},"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}()}},a=i("JFUb"),e=Object(a.a)(s,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"body",attrs:{translate:"no"}},[n("div",{staticClass:"content"},[n("canvas",{staticClass:"snow",attrs:{id:"snow",width:"1349",height:"400"}}),this._v(" "),n("div",{staticClass:"main-text"},[n("h1",[this._v("天啊！那页走丢了。。。")]),this._v(" "),n("div",{staticClass:"main-text-a"},[n("router-link",{staticClass:"home-link",attrs:{to:"/"}},[this._v(" 先去首页看看 ？")])],1)]),this._v(" "),this._m(0)])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"ground"},[n("div",{staticClass:"mound"},[n("div",{staticClass:"mound_text"},[this._v("404")]),this._v(" "),n("div",{staticClass:"mound_spade"})])])}],!1,function(t){i("7lmZ")},"data-v-509f430d",null);n.default=e.exports}}]);