/*! For license information please see bf845a7efcc16ef4164ac16644bd6a0c.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[68476],{68476:(e,t,i)=>{i.r(t),i.d(t,{arcgis_new_item_pages_data_store_select_cloud_credentials:()=>h});var a=i(28384),s=i(76134),n=i(58892),c=i(72074),l=i(54871),o=i(16665),r=i(65508),d=i(62683);i(27010),i(41171),i(66716),i(62381),i(83397),i(83129),i(24552),i(85142),i(72022),i(96729),i(58728),i(86739),i(31546),i(18869),i(46220),i(82463),i(48507),i(48333),i(86274);const h=class{constructor(e){(0,a.r)(this,e),this.newItemUpdatePage=(0,a.c)(this,"newItemUpdatePage",7),this.credentialType=null,this.authenticationTypes=["activeDirectory","sharedKey","sasToken","anonymous"],this.identityTypes=["userAssignedIdentity"],this.selectedAuthenticationType=void 0,this.selectedIdentityType=void 0,this.endpoint="",this.token="",this.tenantId="",this.clientId="",this.clientSecret="",this.accessKey="",this.secretKey="",this.accountName="",this.accountKey="",this.containerName="",this.selectedRegionId=null,this.storageURL="",this.bucketName="",this.cloudFolder="",this.regionSelectOptions=[],this.showPrivateURL=!1,this.credentialTypeOptions=[],this.missingFields={},this.loading=!1,this.loaderType="indeterminate",this.loaderMessage=void 0,this.invalidEndpoint=!1,this.error=void 0}async componentWillLoad(){this.i18n=l.u.i18n.dataStoreSelectCloud,this.credentialTypesI18N=l.u.i18n.dataStoreSelectCloud.credentialTypes,this.provider="bdfs"===n.a.addDataStoreType?n.a.bdfsCloudProvider:n.a.provider,this.populateCredentialTypes();const e=await(0,c.f)(this.provider);this.addOptions((null==e?void 0:e.result)||[]),this.populateFields()}populateFields(){const{provider:e}=this;switch(e){case"amazon":n.a.credentialType&&(this.credentialType=n.a.credentialType),this.accessKey=n.a.accessKey,this.secretKey=n.a.secretKey,n.a.selectedRegion&&(this.selectedRegionId=n.a.selectedRegion.id),this.storageURL=n.a.storageURL,this.bucketName=n.a.bucketName,this.cloudFolder=n.a.cloudFolder;break;case"azure":case"azuredatalakegen2store":this.selectedAuthenticationType="azure"===e?n.a.azureAuthenticationType||this.authenticationTypes[0]:"sharedKey",this.selectedIdentityType=n.a.azureIdentityType||"userAssignedIdentity",this.tenantId=n.a.tenantId,this.clientId=n.a.clientId,this.clientSecret=n.a.clientSecret,this.token=n.a.token,this.endpoint=n.a.endpoint,this.accountKey=n.a.accountKey,this.accountName=n.a.accountName,n.a.environment&&(this.selectedRegionId=n.a.environment.id),this.containerName=n.a.containerName,this.cloudFolder=n.a.cloudFolder;break;case"google":"accessKey"===n.a.credentialType&&(this.credentialType=n.a.credentialType,this.accessKey=n.a.accessKey,this.secretKey=n.a.secretKey,this.bucketName=n.a.bucketName),this.cloudFolder=n.a.cloudFolder;break;case"alibaba":this.accessKey=n.a.accessKey,this.secretKey=n.a.secretKey,n.a.selectedRegion&&(this.selectedRegionId=n.a.selectedRegion.id),this.storageURL=n.a.storageURL,this.bucketName=n.a.bucketName,this.cloudFolder=n.a.cloudFolder}}saveFieldStates(){var e,t,i,a,s,c;const{provider:l}=this;switch(l){case"amazon":n.a.credentialType=this.credentialType,n.a.accessKey=null===(e=this.accessKey)||void 0===e?void 0:e.trim(),n.a.secretKey=null===(t=this.secretKey)||void 0===t?void 0:t.trim(),n.a.selectedRegion=this.regionSelectOptions.find((e=>e.id===this.selectedRegionId)),"custom"===this.selectedRegionId?n.a.storageURL=this.storageURL:n.a.storageURL="",n.a.bucketName=this.bucketName,n.a.cloudFolder=this.cloudFolder;break;case"azure":case"azuredatalakegen2store":n.a.azureAuthenticationType="azure"===l?this.selectedAuthenticationType:"sharedKey",n.a.azureIdentityType=this.selectedIdentityType,n.a.tenantId=this.tenantId,n.a.clientId=this.clientId,n.a.clientSecret=this.clientSecret,n.a.token=this.token,n.a.accountKey=this.accountKey,n.a.accountName=this.accountName,n.a.endpoint=this.endpoint,n.a.environment=this.regionSelectOptions.find((e=>e.id===this.selectedRegionId)),n.a.containerName=this.containerName,n.a.cloudFolder=this.cloudFolder;break;case"google":n.a.credentialType=this.credentialType,n.a.accessKey=null===(i=this.accessKey)||void 0===i?void 0:i.trim(),n.a.secretKey=null===(a=this.secretKey)||void 0===a?void 0:a.trim(),n.a.bucketName=this.bucketName,n.a.cloudFolder=this.cloudFolder;break;case"alibaba":n.a.accessKey=null===(s=this.accessKey)||void 0===s?void 0:s.trim(),n.a.secretKey=null===(c=this.secretKey)||void 0===c?void 0:c.trim(),n.a.selectedRegion=this.regionSelectOptions.find((e=>e.id===this.selectedRegionId)),"custom"===this.selectedRegionId?n.a.storageURL=this.storageURL:n.a.storageURL="",n.a.bucketName=this.bucketName,n.a.cloudFolder=this.cloudFolder}}populateCredentialTypes(){const{provider:e,credentialTypesI18N:t}=this,i=Object.keys(t).filter((t=>{const i="amazon"===e&&"privateKey"===t,a="google"===e&&"accessKey"!==t,n=!s.c.portal.isPortal&&"IAMRole"===t;return!(i||a||n)})).map((e=>({label:t[e],value:e})));i.length>0&&(this.credentialType=i[0].value),this.credentialTypeOptions=i,this.authenticationTypes=s.c.portal.isPortal?this.authenticationTypes:["sharedKey","sasToken"]}addOptions(e){const{provider:t,i18n:i}=this;let a="id";if(this.regionSelectOptions=[...e],"azure"===t&&(a="storageEndpointSuffix"),"amazon"===t||"alibaba"===t){const e={displayName:i.custom,[a]:"custom"};this.regionSelectOptions=[...this.regionSelectOptions,e]}if("azure"===t||"azuredatalakegen2store"===t){const e={displayName:i.other,id:"other"};this.regionSelectOptions=[...this.regionSelectOptions,e]}this.regionSelectOptions.length>0&&(this.selectedRegionId=this.regionSelectOptions[0].id)}async handleNext(){if(this.validateCloudCredentials())if(this.saveFieldStates(),n.a.regions=this.regionSelectOptions,s.c.portal.isPortal)this.newItemUpdatePage.emit("dataStoreSelectServerList");else{this.loading=!0,this.loaderMessage=this.i18n.validating;const{orgId:e,portal:t}=s.c.user,i="amazon"===this.provider?this.bucketName:this.containerName;r.i.title=(0,d.f)(this.provider,i);const a=(0,o.d)(n.a),{result:l,error:h}=await(0,c.v)(e,t,a);"success"===(null==l?void 0:l.status)?this.newItemUpdatePage.emit("itemProperties"):(console.error(h),this.handleError())}}validateCloudCredentials(){const{provider:e,i18n:t,credentialType:i,endpoint:a,token:s,accessKey:n,secretKey:c,selectedRegionId:l,storageURL:o,bucketName:r,accountName:d,accountKey:h,containerName:u,tenantId:p,clientId:g,clientSecret:y,selectedAuthenticationType:v,selectedIdentityType:m}=this,b={};"amazon"===e&&(b[t.accessKey]="accessKey"===i&&!n,b[t.secretKey]="accessKey"===i&&!c,b[t.bucketName]=!r,b[t.storageURL]="custom"===l&&!o),"google"===e&&("accessKey"===i&&(b[t.accessKey]=!n,b[t.secretKey]=!c),b[t.bucketName]=!r),"azure"===e&&("sharedKey"===v?(b[t.accountKey]=!h,b[t.accountName]=!d):b[t.accountName]=!d&&"other"!==l&&"anonymous"!==v,"sasToken"===v&&(b[t.token]=!s),"activeDirectory"===v&&("servicePrincipal"===m?(b[t.tenantId]=!p,b[t.clientId]=!g,b[t.clientSecret]=!y):"userAssignedIdentity"===m&&(b[t.clientId]=!g)),b[t.containerName]=!u,b[t.storageURL]="custom"===l&&!o,b[t.endpoint]=("anonymous"===v||"other"===l)&&!a),"azuredatalakegen2store"===e&&("sharedKey"===v&&(b[t.accountKey]=!h),b[t.accountName]=!d&&"other"!==l,b[t.containerName]=!u,b[t.endpoint]="other"===l&&!a),"alibaba"===e&&(b[t.accessKey]=!n,b[t.secretKey]=!c,b[t.bucketName]=!r,b[t.storageURL]="custom"===l&&!o),this.missingFields=Object.assign({},b);for(const e in this.missingFields)if(this.missingFields[e])return!1;return!(("azure"===e||"azuredatalakegen2store"===e)&&"other"===l&&this.invalidEndpoint)}generateErrorMsg(e){const{i18n:t}=this;return t.errorInfo.replace("${missingField}",e)}handleError(){this.loading=!1;const e=this.i18n.errors.onlineValidationFailed.heading,t=this.i18n.errors.onlineValidationFailed.description;this.error={title:e,description:t}}togglePrivateURL(e){const{provider:t}=this;"azure"!==t&&(this.showPrivateURL="custom"===e)}render(){var e,t;const{i18n:i,provider:n,credentialTypeOptions:c,credentialType:l,regionSelectOptions:o,selectedAuthenticationType:r,selectedIdentityType:d,authenticationTypes:h,identityTypes:u,endpoint:p,token:g,tenantId:y,clientId:v,clientSecret:m,accessKey:b,secretKey:I,showPrivateURL:k,storageURL:K,bucketName:T,cloudFolder:N,accountName:f,accountKey:R,containerName:C,selectedRegionId:S,missingFields:F,invalidEndpoint:z}=this;return(0,a.h)("div",null,(0,a.h)("arcgis-new-item-loader",{type:this.loaderType,active:this.loading,text:this.loaderMessage}),(0,a.h)("arcgis-new-item-description",{header:s.c.portal.isPortal?i.connectionInfoEnterprise:i.connectionInfoOnline}),(0,a.h)("div",{class:"configure-form"},(0,a.h)("calcite-label",null,i.provider,(0,a.h)("calcite-input",{value:i.cloudProviders[n],disabled:!0})),("amazon"===n||"google"===n)&&(0,a.h)("calcite-label",{for:"credential-type-select"},i.credentialType,(0,a.h)("calcite-select",{id:"credential-type-select",label:"credential-type-select",onCalciteSelectChange:e=>{const t=e.target.value;this.missingFields={},this.credentialType=t},disabled:c.length<2},c.map((e=>(0,a.h)("calcite-option",{key:e.value,label:e.label,value:e.value,selected:e.value===this.credentialType}))))),("azure"===n||"azuredatalakegen2store"===n)&&(0,a.h)(a.F,null,"azure"===n&&(0,a.h)("calcite-label",{for:"authentication-type-select"},i.authenticationType,(0,a.h)("calcite-select",{id:"authentication-type-select",label:"authentication-type-select",onCalciteSelectChange:e=>{const t=e.target.value;this.missingFields={},this.selectedAuthenticationType=t}},h.map((e=>(0,a.h)("calcite-option",{key:e,id:e,label:i.authenticationTypes[e],value:e,selected:r===e}))))),"azuredatalakegen2store"===n&&(0,a.h)("calcite-label",null,i.authenticationType,(0,a.h)("calcite-input",{value:i.authenticationTypes[r],disabled:!0})),(0,a.h)("calcite-label",{for:"token-input",class:{hide:"sasToken"!==r}},i.token,(0,a.h)("calcite-input",{id:"token-input",value:g,onCalciteInputChange:e=>{const t=e.target.value;this.token=t},placeholder:i.sasTokenPlaceholder,status:F[i.token]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.token]}},this.generateErrorMsg(i.token))),(0,a.h)("calcite-label",{for:"identity-type-select",class:{hide:"activeDirectory"!==r}},i.identityType,(0,a.h)("calcite-tile-select-group",{layout:"vertical",id:"identity-type-select"},u.map((e=>(0,a.h)("calcite-tile-select",{key:e,checked:d===e,heading:i.identityTypes[e],name:"identity-type-select","input-enabled":!0,width:"full",type:"radio",value:e,onCalciteTileSelectChange:e=>{const t=e.target.value;this.selectedIdentityType=t}}))))),(0,a.h)("calcite-label",{for:"optional-client-id-input",class:{hide:"activeDirectory"!==r||"userAssignedIdentity"!==d}},i.clientId,(0,a.h)("calcite-input",{id:"optional-client-id-input",value:v,onCalciteInputChange:e=>{const t=e.target.value;this.clientId=t},status:F[i.clientId]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.clientId]}},this.generateErrorMsg(i.clientId))),(0,a.h)("calcite-label",{for:"tenant-id-input",class:{hide:"activeDirectory"!==r||"servicePrincipal"!==d}},i.tenantId,(0,a.h)("calcite-input",{id:"tenant-id-input",value:y,onCalciteInputChange:e=>{const t=e.target.value;this.tenantId=t},status:F[i.tenantId]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.tenantId]}},this.generateErrorMsg(i.tenantId))),(0,a.h)("calcite-label",{for:"client-id-input",class:{hide:"activeDirectory"!==r||"servicePrincipal"!==d}},i.clientId,(0,a.h)("calcite-input",{id:"client-id-input",value:v,onCalciteInputChange:e=>{const t=e.target.value;this.clientId=t},status:F[i.clientId]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.clientId]}},this.generateErrorMsg(i.clientId))),(0,a.h)("calcite-label",{for:"client-secret-input",class:{hide:"activeDirectory"!==r||"servicePrincipal"!==d}},i.clientSecret,(0,a.h)("calcite-input",{id:"client-secret-input",type:"password",value:m,onCalciteInputChange:e=>{const t=e.target.value;this.clientSecret=t},status:F[i.clientSecret]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.clientSecret]}},this.generateErrorMsg(i.clientSecret))),(0,a.h)("calcite-label",{for:"account-name-input",class:{hide:("other"===S||"anonymous"===r)&&"sharedKey"!==r}},i.accountName,(0,a.h)("calcite-input",{id:"account-name-input",value:f,onCalciteInputChange:e=>{const t=e.target.value;this.accountName=t},status:F[i.accountName]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.accountName]}},this.generateErrorMsg(i.accountName))),(0,a.h)("calcite-label",{for:"account-key-input",class:{hide:"sharedKey"!==r}},i.accountKey,(0,a.h)("calcite-input",{id:"account-key-input",type:"password",value:R,onCalciteInputChange:e=>{const t=e.target.value;this.accountKey=t},status:F[i.accountKey]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.accountKey]}},this.generateErrorMsg(i.accountKey))),(0,a.h)("calcite-label",{for:"environment-select",class:{hide:"anonymous"===r}},i.storageDomain,(0,a.h)("calcite-select",{id:"environment-select",label:"environment-select",onCalciteSelectChange:e=>{const t=e.target.value;this.selectedRegionId=t}},o.map((e=>(0,a.h)("calcite-option",{key:e.id,id:e.id,label:`${e.displayName} ${e.storageEndpointSuffix?`(${e.storageEndpointSuffix})`:""}`,value:e.id,selected:e.id===this.selectedRegionId}))))),(0,a.h)("calcite-label",{for:"endpoint-input",class:{hide:!0,show:"other"===S||"anonymous"===r}},i.endpoint,(0,a.h)("calcite-input",{id:"endpoint-input",value:p,onCalciteInputChange:e=>{const t=e.target.value;!t.toLowerCase().startsWith("https")&&t.length>0?this.invalidEndpoint=!0:(this.invalidEndpoint=!1,this.endpoint=t)},placeholder:i.endpointPlaceholder,status:F[i.endpoint]||z?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.endpoint]&&!z}},this.invalidEndpoint?i.invalidEndpoint:this.generateErrorMsg(i.endpoint))),(0,a.h)("calcite-label",{for:"container-name-input"},i.containerName,(0,a.h)("calcite-input",{id:"container-name-input",value:C,onCalciteInputChange:e=>{const t=e.target.value;this.containerName=t},status:F[i.containerName]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.containerName]}},this.generateErrorMsg(i.containerName)))),"azure"!==n&&"azuredatalakegen2store"!==n&&(0,a.h)(a.F,null,(0,a.h)("calcite-label",{for:"access-key-input"},i.accessKey,(0,a.h)("calcite-input",{id:"access-key-input",value:b,disabled:"IAMRole"===l||"privateKey"===l,onCalciteInputChange:e=>{const t=e.target.value;this.accessKey=t},status:F[i.accessKey]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.accessKey]}},this.generateErrorMsg(i.accessKey))),(0,a.h)("calcite-label",{for:"secret-key-input"},i.secretKey,(0,a.h)("calcite-input",{id:"secret-key-input",value:I,type:"password",disabled:"IAMRole"===l||"privateKey"===l,onCalciteInputChange:e=>{const t=e.target.value;this.secretKey=t},status:F[i.secretKey]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.secretKey]}},this.generateErrorMsg(i.secretKey))),(0,a.h)("calcite-label",{for:"region-select"},i.region,(0,a.h)("calcite-select",{id:"region-select",label:"region-select",onCalciteSelectChange:e=>{const t=e.target.value;this.selectedRegionId=t},disabled:"google"===n},o.map((e=>(0,a.h)("calcite-option",{key:e.id,id:e.id,label:e.displayName,value:e.id,selected:e.id===this.selectedRegionId}))))),k&&(0,a.h)("calcite-label",{for:"storage-url-input"},i.storageURL,(0,a.h)("calcite-input",{id:"storage-url-input",value:K,onCalciteInputChange:e=>{const t=e.target.value;this.storageURL=t},status:F[i.storageURL]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.storageURL]}},this.generateErrorMsg(i.storageURL))),(0,a.h)("calcite-label",{for:"bucket-name-input"},i.bucketName,(0,a.h)("calcite-input",{id:"bucket-name-input",value:T,onCalciteInputChange:e=>{const t=e.target.value;this.bucketName=t},status:F[i.bucketName]?"invalid":"idle"}),(0,a.h)("calcite-input-message",{icon:!0,status:"invalid",class:{hide:!F[i.bucketName]}},this.generateErrorMsg(i.bucketName)))),(0,a.h)("calcite-label",{for:"cloud-folder-input"},i.cloudFolder,(0,a.h)("calcite-input",{id:"cloud-folder-input",value:N,placeholder:i.cloudFolderPlaceHolder,onCalciteInputChange:e=>{const t=e.target.value;this.cloudFolder=t}}))),(0,a.h)("arcgis-new-item-alert",{active:void 0!==this.error,heading:null===(e=this.error)||void 0===e?void 0:e.title,description:null===(t=this.error)||void 0===t?void 0:t.description,onAlertDismiss:()=>{this.error=void 0}}))}static get watchers(){return{selectedRegionId:["togglePrivateURL"]}}};h.style="calcite-label{--calcite-label-margin-bottom:1.25rem}.configure-form{margin-top:1.5rem}.hide{display:none}.show{display:block}"},62683:(e,t,i)=>{i.d(t,{f:()=>a});const a=(e,t)=>{let i;const a=null!=t?t:"";switch(e){case"amazon":i=`AmazonS3_${a}`;break;case"azure":i=`Microsoft_Azure_Storage_${a}`;break;case"bigQuery":i=`BigQuery_${a}`;break;case"snowflake":i=`Snowflake_${a}`}return i.replace(/ /g,"_").replace(/-/g,"_")}}}]);