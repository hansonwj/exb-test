System.register(["jimu-core","jimu-arcgis"],(function(e,t){var a={},o={};return{setters:[function(e){a.AbstractMessageAction=e.AbstractMessageAction,a.DataSourceManager=e.DataSourceManager,a.Immutable=e.Immutable,a.MessageCarryData=e.MessageCarryData,a.MessageType=e.MessageType,a.MutableStoreManager=e.MutableStoreManager,a.RecordSetChangeType=e.RecordSetChangeType,a.getAppStore=e.getAppStore},function(e){o.ActionType=e.ActionType,o.SHOW_ON_MAP_DATA_ID_PREFIX=e.SHOW_ON_MAP_DATA_ID_PREFIX}],execute:function(){e((()=>{"use strict";var e={26826:e=>{e.exports=o},48891:e=>{e.exports=a}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{default:()=>n});var e=r(48891),t=r(26826);function a(t,a){var r;const s=function(t,a){var r,s;const n=o(),i=null===(r=null==n?void 0:n.widgets)||void 0===r?void 0:r[t],u=null===(s=null==i?void 0:i.manifest)||void 0===s?void 0:s.publishMessages;let d=e.MessageCarryData.UseDataSource;return null==u||u.forEach((e=>{const t=e;(null==t?void 0:t.messageCarryData)&&(null==t?void 0:t.messageType)===a&&(d=null==t?void 0:t.messageCarryData)})),d}(t,a),n=o(),i=null===(r=null==n?void 0:n.widgets)||void 0===r?void 0:r[t],u=(null==i?void 0:i.useDataSources)||(0,e.Immutable)([]),d=function(t){var a;const o=null!==(a=null==t?void 0:t.map((e=>({dataSourceId:e,mainDataSourceId:e,rootDataSourceId:null}))))&&void 0!==a?a:[];return(0,e.Immutable)(o)}(null==i?void 0:i.outputDataSources)||(0,e.Immutable)([]),l=null==u?void 0:u.asMutable({deep:!0}).concat(null==d?void 0:d.asMutable({deep:!0}));switch(s){case e.MessageCarryData.OutputDataSource:return d;case e.MessageCarryData.UseDataSource:return u;case e.MessageCarryData.BothDataSource:return(0,e.Immutable)(l)}}function o(){var t,a,o;return window.jimuConfig.isBuilder?null===(a=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===a?void 0:a.appConfig:null===(o=(0,e.getAppStore)().getState())||void 0===o?void 0:o.appConfig}class n extends e.AbstractMessageAction{filterMessageDescription(t){if(t.messageType===e.MessageType.DataRecordSetChange){const o=e.DataSourceManager.getInstance();return a(t.widgetId,t.messageType).some((e=>{const t=o.getDataSource(e.dataSourceId);if(t){const e=t.getDataSourceJson();return!(!e||!e.geometryType)}return!1}))}return!1}filterMessage(e){return!0}onRemoveListen(t,a){var o;const r=(null===(o=e.MutableStoreManager.getInstance().getStateValue([this.widgetId]))||void 0===o?void 0:o.showOnMapDatas)||{},s={};Object.entries(r).forEach((e=>{var t;(null===(t=e[1])||void 0===t?void 0:t.messageWidgetId)!==a&&(s[e[0]]=e[1])})),e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"showOnMapDatas",s)}onExecute(a,o){var r;const s=this._getActiveViewId(this.widgetId,(0,e.getAppStore)().getState().jimuMapViewsInfo),n=this._getDefaultViewId(this.widgetId,(0,e.getAppStore)().getState().jimuMapViewsInfo),i=s||n;let u=(null===(r=e.MutableStoreManager.getInstance().getStateValue([this.widgetId]))||void 0===r?void 0:r.showOnMapDatas)||{};return a.changeType===e.RecordSetChangeType.CreateUpdate?a.dataRecordSets.forEach((e=>{const r=this._getIdBase(e.name),d=`${r}???`,l=s?`${r}${s}`:d;n&&n===s&&delete u[d],u[l]={mapWidgetId:this.widgetId,messageWidgetId:a.widgetId,jimuMapViewId:i,dataSet:e,type:t.ActionType.MessageAction,symbolOption:(null==o?void 0:o.isUseCustomSymbol)?o.symbolOption:!1===(null==o?void 0:o.isUseCustomSymbol)?null:void 0,title:l}})):a.changeType===e.RecordSetChangeType.Remove&&a.dataRecordSetNames.forEach((e=>{const t=this._getIdBase(e),a={};Object.entries(u).forEach((e=>{0!==e[0].indexOf(t)&&(a[e[0]]=e[1])})),u=a})),e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"showOnMapDatas",u),Promise.resolve(!0)}_getIdBase(e){return`${t.SHOW_ON_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${e}_`}_getActiveViewId(e,t){return Object.keys(t||{}).find((a=>t[a].mapWidgetId===e&&t[a].isActive))}_getDefaultViewId(e,t){return Object.keys(t||{}).find((a=>t[a].mapWidgetId===e))}}})(),s})())}}}));