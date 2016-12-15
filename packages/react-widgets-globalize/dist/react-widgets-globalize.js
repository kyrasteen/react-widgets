/*! (c) 2014 - present: Jason Quense | https://github.com/jquense/react-widgets/blob/master/LICENSE.md */
!function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){return e=new Date(e),e.setFullYear(e.getFullYear()+10),e.setMilliseconds(e.getMilliseconds()-1),e}function o(e){return e=new Date(e),e.setFullYear(e.getFullYear()+100),e.setMilliseconds(e.getMilliseconds()-1),e}function u(e){function t(t){return t?e(t):e}function r(e){return function(t,r){return a(r)[e](t)}}function a(r){var a=e.locale()||{},n=a.locale,o=void 0===n?r:n;if(o=r||o,u[o])return u[o];var f=t(r);return u[o]={firstWeekday:f.dateFormatter({raw:"e"}),date:f.dateFormatter({date:"short"}),time:f.dateFormatter({time:"short"}),default:f.dateFormatter({datetime:"medium"}),header:f.dateFormatter({raw:"MMMM yyyy"}),footer:f.dateFormatter({date:"full"}),weekday:f.dateFormatter({raw:"eeeeee"}),dayOfMonth:f.dateFormatter({raw:"dd"}),month:f.dateFormatter({raw:"MMM"}),year:f.dateFormatter({raw:"yyyy"}),number:f.numberFormatter({maximumFractionDigits:0}),decimalChar:f.numberFormatter({raw:"0.0"})}}var u=Object.create(null),f={formats:{date:r("date"),time:r("time"),default:r("default"),header:r("header"),footer:r("footer"),weekday:r("weekday"),dayOfMonth:r("dayOfMonth"),month:r("month"),year:r("year"),decade:function(e,t,r){return r.format(e,r.formats.year,t)+" - "+r.format(n(e),r.formats.year,t)},century:function(e,t,r){return r.format(e,r.formats.year,t)+" - "+r.format(o(e),r.formats.year,t)}},propType:d.PropTypes.oneOfType([d.PropTypes.string,d.PropTypes.object,d.PropTypes.func]),firstOfWeek:function(e){var t=new Date,r=a(e).firstWeekday(t);return r=Math.max(parseInt(r,10)-1,0),Math.abs(t.getDay()-r)},parse:function(e,r,a){return r="string"==typeof r?{raw:r}:r,t(a).parseDate(e,r)},format:function(e,r,a){return r="string"==typeof r?{raw:r}:r,t(a).formatDate(e,r)}},i={formats:{default:r("number")},propType:d.PropTypes.oneOfType([d.PropTypes.object,d.PropTypes.func]),parse:function(e,r){return t(r).parseNumber(e)},format:function(e,r,a){return null==e?e:r&&r.currency?t(a).formatCurrency(e,r.currency,r):t(a).formatNumber(e,r)},decimalChar:function(e,t){var r=a(t).decimalChar(1.1);return r[r.length-2]||"."},precision:function(e){return e&&null!=e.maximumFractionDigits?e.maximumFractionDigits:null}};return{date:f,number:i}}function f(e){function t(t){return t?e.findClosestCulture(t):e.culture()}function r(e){return e=t(e),e&&e.calendar.firstDay||0}function a(e){var r=t(arguments[1]),a=r.name,n=function(){return r.calendar.days.namesShort.slice()},o=f[a]||(f[a]=n());return o[e.getDay()]}function u(e,r){var a=t(r),n=a.numberFormat;return"string"==typeof e&&(e.indexOf("p")!==-1&&(n=n.percent),e.indexOf("c")!==-1&&(n=n.curency)),n}var f=Object.create(null),i={formats:{date:"d",time:"t",default:"f",header:"MMMM yyyy",footer:"D",weekday:a,dayOfMonth:"dd",month:"MMM",year:"yyyy",decade:function(e,t,r){return r.format(e,r.formats.year,t)+" - "+r.format(n(e),r.formats.year,t)},century:function(e,t,r){return r.format(e,r.formats.year,t)+" - "+r.format(o(e),r.formats.year,t)}},firstOfWeek:r,parse:function(t,r,a){return e.parseDate(t,r,a)},format:function(t,r,a){return e.format(t,r,a)}},c={formats:{default:"D"},parse:function(t,r){return e.parseFloat(t,10,r)},format:function(t,r,a){return e.format(t,r,a)},decimalChar:function(e,t){var r=u(e,t);return r["."]||"."},precision:function(e,t){var r=u(e,t);return"string"==typeof e&&e.length>1?parseFloat(e.substr(1)):r?r.decimals:null}};return{date:i,number:c}}t.__esModule=!0;var i=r(1),c=a(i),d=r(2),s=r(3),m=a(s),l=c.default.locale&&!c.default.cultures?u(c.default):f(c.default);m.default.setLocalizers(l),t.default=l,e.exports=t.default},function(e,t){e.exports=window.Globalize},function(e,t){e.exports=window.React},function(e,t){e.exports=window.ReactWidgets}]);
//# sourceMappingURL=react-widgets-globalize.js.map