/*! For license information please see 844046b4d38c88c370e0b7811f543aa5.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[30423],{30423:(e,t,i)=>{i.r(t),i.d(t,{calcite_tooltip:()=>p,calcite_tree:()=>g,calcite_tree_item:()=>k});var n=i(30396),o=i(9615),a=i(58738),r=i(31964),s=i(60131),c=i(39591),l=i(32544),d=i(90770);const h="aria-describedby";function m(e){const{referenceElement:t}=e;return("string"==typeof t?(0,o.q)(e,{id:t}):t)||null}const u=new class{constructor(){this.registeredElements=new WeakMap,this.hoverTimeout=null,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.keyDownHandler=e=>{if("Escape"===e.key&&!e.defaultPrevented){const{activeTooltipEl:t}=this;if(t&&t.open){this.clearHoverTimeout(),this.toggleTooltip(t,!1);const i=m(t);i instanceof Element&&i.contains(e.target)&&e.preventDefault()}}},this.queryHoveredTooltip=e=>{const{activeTooltipEl:t}=this;if(t&&e.includes(t))return void this.clearHoverTimeout();const i=this.queryTooltip(e);i?this.toggleHoveredTooltip(i,!0):t&&this.toggleHoveredTooltip(t,!1)},this.pointerMoveHandler=e=>{const t=e.composedPath();this.clearHoverTimeout(),this.hoverTimeout=window.setTimeout((()=>this.queryHoveredTooltip(t)),500)},this.pointerDownHandler=e=>{if(!(0,o.i)(e))return;const t=this.queryTooltip(e.composedPath());this.clickedTooltip=t,t?.closeOnClick&&(this.toggleTooltip(t,!1),this.clearHoverTimeout())},this.focusInHandler=e=>{this.queryFocusedTooltip(e,!0)},this.focusOutHandler=e=>{this.queryFocusedTooltip(e,!1)},this.toggleHoveredTooltip=(e,t)=>{t&&this.closeExistingTooltip(),this.toggleTooltip(e,t)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler,{capture:!0}),document.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.addEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.addEventListener("focusin",this.focusInHandler,{capture:!0}),document.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),document.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.removeEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.removeEventListener("focusin",this.focusInHandler,{capture:!0}),document.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}clearHoverTimeout(){window.clearTimeout(this.hoverTimeout)}closeExistingTooltip(){const{activeTooltipEl:e}=this;e&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,t){this.closeExistingTooltip(),t&&this.clearHoverTimeout(),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,t&&(this.activeTooltipEl=e)}queryFocusedTooltip(e,t){const i=this.queryTooltip(e.composedPath());i&&i!==this.clickedTooltip?this.toggleFocusedTooltip(i,t):this.clickedTooltip=null}},p=class{constructor(e){(0,n.r)(this,e),this.calciteTooltipBeforeClose=(0,n.c)(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=(0,n.c)(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=(0,n.c)(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=(0,n.c)(this,"calciteTooltipOpen",6),this.guid=`calcite-tooltip-${(0,r.g)()}`,this.hasLoaded=!1,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e,(0,s.c)(this)},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=m(this.el),(0,a.c)(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:n}=this;e&&i&&!n&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(h,t),u.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(h),u.unregisterElement(e))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=a.b,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(e){e?this.reposition(!0):(0,a.u)(this.el)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){(0,s.c)(this),this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),(0,a.a)(this,this.effectiveReferenceElement,this.el),(0,s.d)(this)}async reposition(e=!1){const{el:t,effectiveReferenceElement:i,placement:n,overlayPositioning:o,offsetDistance:r,offsetSkidding:s,arrowEl:c}=this;return(0,a.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:n,offsetDistance:r,offsetSkidding:s,includeArrow:!0,arrowEl:c,type:"tooltip"},e)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:e,label:t,open:i}=this,r=e&&i,s=!r;return(0,n.h)(n.H,{"aria-hidden":(0,o.t)(s),"aria-label":t,"aria-live":"polite","calcite-hydrated-hidden":s,id:this.getId(),role:"tooltip"},(0,n.h)("div",{class:{[a.F.animation]:!0,[a.F.animationActive]:r},ref:this.setTransitionEl},(0,n.h)("div",{class:"arrow",ref:e=>this.arrowEl=e}),(0,n.h)("div",{class:"container"},(0,n.h)("slot",null))))}get el(){return(0,n.g)(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};function f(e,t){const i="down"===t?"nextElementSibling":"previousElementSibling";let n=e,o=null;for(;a=n,a?.matches("calcite-tree-item");){if(!n.disabled){o=n;break}n=n[i]}var a;return o}p.style='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=right]) .arrow,:host([data-placement^=left]) .arrow{direction:ltr;text-align:start}:host([data-placement^=left]) .arrow{inset-inline-end:-4px}:host([data-placement^=right]) .arrow{inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}';const g=class{constructor(e){(0,n.r)(this,e),this.calciteTreeSelect=(0,n.c)(this,"calciteTreeSelect",6),this.lines=!1,this.child=void 0,this.scale="m",this.selectionMode="single",this.selectedItems=[]}componentWillRender(){const e=this.el.parentElement?.closest("calcite-tree");this.lines=e?e.lines:this.lines,this.scale=e?e.scale:this.scale,this.selectionMode=e?e.selectionMode:this.selectionMode,this.child=!!e}render(){return(0,n.h)(n.H,{"aria-multiselectable":this.child?void 0:("multiple"===this.selectionMode||"multichildren"===this.selectionMode).toString(),role:this.child?void 0:"tree",tabIndex:this.getRootTabIndex()},(0,n.h)("slot",null))}onFocus(){if(!this.child){const e=this.el.querySelector("calcite-tree-item[selected]:not([disabled])")||this.el.querySelector("calcite-tree-item:not([disabled])");(0,o.h)(e)}}onFocusIn(e){(e.relatedTarget===this.el||!this.el.contains(e.relatedTarget))&&this.el.removeAttribute("tabindex")}onFocusOut(e){!this.el.contains(e.relatedTarget)&&(this.el.tabIndex=this.getRootTabIndex())}onClick(e){const t=e.target,i=(0,o.n)(t.querySelectorAll("calcite-tree-item"));if(this.child)return;if(this.child||(e.preventDefault(),e.stopPropagation()),"ancestors"===this.selectionMode&&!this.child)return void this.updateAncestorTree(e);const n="none"===this.selectionMode,a=null!==this.selectionMode&&(!t.hasChildren||t.hasChildren&&("children"===this.selectionMode||"multichildren"===this.selectionMode)),r=!n&&e.detail.modifyCurrentSelection&&("multiple"===this.selectionMode||"multichildren"===this.selectionMode),s="multichildren"===this.selectionMode||"children"===this.selectionMode,c=!r&&(("single"===this.selectionMode||"multiple"===this.selectionMode)&&i.length<=0||"children"===this.selectionMode||"multichildren"===this.selectionMode),l="children"===this.selectionMode||"multichildren"===this.selectionMode;if(!this.child){const d=[];a&&d.push(t),s&&i.forEach((e=>{d.push(e)})),c&&(0,o.n)(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach((e=>{d.includes(e)||(e.selected=!1)})),l&&!e.detail.forceToggle&&(t.expanded=!0),r&&window.getSelection().removeAllRanges(),r&&t.selected||s&&e.detail.forceToggle?d.forEach((e=>{e.disabled||(e.selected=!1)})):n||d.forEach((e=>{e.disabled||(e.selected=!0)}))}this.selectedItems=n?[t]:(0,o.n)(this.el.querySelectorAll("calcite-tree-item")).filter((e=>e.selected)),this.calciteTreeSelect.emit(),e.stopPropagation()}keyDownHandler(e){const t=this.el.closest("calcite-tree:not([child])"),i=e.target;if(t===this.el&&"CALCITE-TREE-ITEM"===i.tagName&&this.el.contains(i))if("ArrowDown"!==e.key){if("ArrowUp"===e.key){const t=f(i.previousElementSibling,"up");t&&(t.focus(),e.preventDefault())}if("ArrowLeft"===e.key&&!i.disabled){if(i.hasChildren&&i.expanded)return i.expanded=!1,void e.preventDefault();const t=i.parentElement.closest("calcite-tree-item");return!t||i.hasChildren&&!1!==i.expanded?void 0:(t.focus(),void e.preventDefault())}"ArrowRight"!==e.key||i.disabled||i.hasChildren&&(i.expanded&&(0,o.u)(this.el).activeElement===i?(f(i.querySelector("calcite-tree-item"),"down")?.focus(),e.preventDefault()):(i.expanded=!0,e.preventDefault()))}else{const t=f(i.nextElementSibling,"down");t&&(t.focus(),e.preventDefault())}}updateAncestorTree(e){const t=e.target;if(t.disabled)return;const i=[];let n=t.parentElement.closest("calcite-tree-item");for(;n;)i.push(n),n=n.parentElement.closest("calcite-tree-item");const a=Array.from(t.querySelectorAll("calcite-tree-item:not([disabled])")),r=a.filter((e=>!e.hasChildren)),s=a.filter((e=>e.hasChildren)),c=t.hasChildren?!(t.selected||t.indeterminate):!t.selected;function l(e,t){const i=e.filter((e=>e.selected)),n=e.filter((e=>!e.selected));t.selected=i.length===e.length,t.indeterminate=i.length>0&&n.length>0}r.forEach((e=>{e.selected=c,e.indeterminate=!1})),s.forEach((e=>{l(Array.from(e.querySelectorAll(":scope > calcite-tree > calcite-tree-item")),e)})),t.hasChildren?l(a,t):(t.selected=c,t.indeterminate=!1),i.forEach((e=>{const t=(0,o.n)(e.querySelectorAll("calcite-tree-item")),i=t.filter((e=>e.selected));if(0===i.length)return e.selected=!1,void(e.indeterminate=!1);const n=i.length<t.length;e.indeterminate=n,e.selected=!n})),this.selectedItems=(0,o.n)(this.el.querySelectorAll("calcite-tree-item")).filter((e=>e.selected)),this.calciteTreeSelect.emit()}getRootTabIndex(){return this.child?-1:0}get el(){return(0,n.g)(this)}};g.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}";const v="children",b="bullet-point",y="check",k=class{constructor(e){(0,n.r)(this,e),this.calciteInternalTreeItemSelect=(0,n.c)(this,"calciteInternalTreeItemSelect",6),this.openTransitionProp="opacity",this.transitionProp="expanded",this.iconClickHandler=e=>{e.stopPropagation(),this.expanded=!this.expanded},this.childrenClickHandler=e=>e.stopPropagation(),this.updateParentIsExpanded=(e,t)=>{(0,o.g)(e,v,{all:!0,selector:"calcite-tree-item"}).forEach((e=>e.parentExpanded=t))},this.updateAncestorTree=()=>{if(this.selected&&"ancestors"===this.selectionMode){const e=[];let t=this.parentTreeItem;for(;t;)e.push(t),t=t.parentElement?.closest("calcite-tree-item");e.forEach((e=>e.indeterminate=!0))}},this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=(0,o.s)(e)},this.disabled=!1,this.expanded=!1,this.iconFlipRtl=void 0,this.iconStart=void 0,this.selected=!1,this.parentExpanded=!1,this.depth=-1,this.hasChildren=null,this.lines=void 0,this.scale=void 0,this.indeterminate=void 0,this.selectionMode=void 0,this.updateAfterInitialRender=!1,this.hasEndActions=!1}expandedHandler(e){this.updateParentIsExpanded(this.el,e),(0,s.o)(this,!0)}getselectionMode(){this.isSelectionMultiLike="multiple"===this.selectionMode||"multichildren"===this.selectionMode}onBeforeOpen(){this.transitionEl.style.transform="scaleY(1)"}onOpen(){this.transitionEl.style.transform="none"}onBeforeClose(){}onClose(){this.transitionEl.style.transform="scaleY(0)"}connectedCallback(){if(this.parentTreeItem=this.el.parentElement?.closest("calcite-tree-item"),this.parentTreeItem){const{expanded:e}=this.parentTreeItem;this.updateParentIsExpanded(this.parentTreeItem,e)}(0,c.c)(this)}disconnectedCallback(){(0,c.d)(this)}componentWillRender(){this.hasChildren=!!this.el.querySelector("calcite-tree"),this.depth=0;let e,t=this.el.closest("calcite-tree");if(t)for(this.selectionMode=t.selectionMode,this.scale=t.scale||"m",this.lines=t.lines;t&&(e=t.parentElement?.closest("calcite-tree"),e!==t);)t=e,this.depth=this.depth+1}componentWillLoad(){this.expanded&&(0,s.o)(this,!0),requestAnimationFrame((()=>this.updateAfterInitialRender=!0))}componentDidLoad(){this.updateAncestorTree()}componentDidRender(){(0,l.u)(this,(()=>this.parentExpanded||1===this.depth))}render(){const e="rtl"===(0,o.b)(this.el),t="single"===this.selectionMode||"children"===this.selectionMode,i="multiple"===this.selectionMode||"multichildren"===this.selectionMode,a="none"===this.selectionMode&&!this.hasChildren,r=this.hasChildren?(0,n.h)("calcite-icon",{class:{chevron:!0,[d.C.rtl]:e},"data-test-id":"icon",icon:"chevron-right",onClick:this.iconClickHandler,scale:"l"===this.scale?"m":"s"}):null,s=(0,n.h)("slot",{key:"default-slot"}),c="ancestors"===this.selectionMode?(0,n.h)("label",{class:"checkbox-label",key:"checkbox-label"},(0,n.h)("calcite-checkbox",{checked:this.selected,class:"checkbox","data-test-id":"checkbox",indeterminate:this.hasChildren&&this.indeterminate,scale:this.scale,tabIndex:-1}),s):null,l=t?b:i?y:a?"blank":null,h=l?(0,n.h)("calcite-icon",{class:{"bullet-point":l===b,checkmark:l===y,[d.C.rtl]:e},icon:l,scale:"l"===this.scale?"m":"s"}):null,m=!(this.parentExpanded||1===this.depth),u=this.updateAfterInitialRender&&this.expanded,{hasEndActions:p}=this,f=(0,n.h)("slot",{key:"actionsEndSlot",name:"actions-end",onSlotchange:this.actionsEndSlotChangeHandler}),g=(0,n.h)("calcite-icon",{class:"icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"l"===this.scale?"m":"s"});return(0,n.h)(n.H,{"aria-expanded":this.hasChildren?(0,o.t)(u):void 0,"aria-hidden":(0,o.t)(m),"aria-selected":this.selected?"true":i?"false":void 0,"calcite-hydrated-hidden":m,role:"treeitem"},(0,n.h)("div",{class:{"item--expanded":u}},(0,n.h)("div",{class:{"node-container":!0,[d.C.rtl]:e},"data-selection-mode":this.selectionMode,ref:e=>this.defaultSlotWrapper=e},r,h,this.iconStart?g:null,c||s,(0,n.h)("div",{class:"actions-end",hidden:!p},f)),(0,n.h)("div",{class:{"children-container":!0,[d.C.rtl]:e},"data-test-id":"calcite-tree-children",onClick:this.childrenClickHandler,ref:e=>this.setTransitionEl(e),role:this.hasChildren?"group":void 0},(0,n.h)("slot",{name:v}))))}setTransitionEl(e){this.transitionEl=e}onClick(e){const[t]=(0,o.r)(this.el,"a");if(t&&"a"!==e.composedPath()[0].tagName.toLowerCase()){const e=""===t.target?"_self":t.target;window.open(t.href,e)}this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:"ancestors"===this.selectionMode||this.isSelectionMultiLike,forceToggle:!1})}keyDownHandler(e){let t;switch(e.key){case" ":if("none"===this.selectionMode)return;this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,forceToggle:!1}),e.preventDefault();break;case"Enter":if("none"===this.selectionMode)return;const i=(0,o.n)(this.el.children).find((e=>e.matches("a")));i?(i.click(),this.selected=!0):this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,forceToggle:!1}),e.preventDefault();break;case"Home":t=this.el.closest("calcite-tree:not([child])");const n=t.querySelector("calcite-tree-item");n?.focus();break;case"End":t=this.el.closest("calcite-tree:not([child])");let a=t.children[t.children.length-1],r=(0,o.n)(a.children).find((e=>e.matches("calcite-tree")));for(;r;)a=r.children[t.children.length-1],r=(0,o.n)(a.children).find((e=>e.matches("calcite-tree")));a?.focus()}}get el(){return(0,n.g)(this)}static get watchers(){return{expanded:["expandedHandler"],selectionMode:["getselectionMode"]}}};k.style='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-ui-text-3)}[hidden]{display:none}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-container{--calcite-tree-padding-y:0.25rem}:host([scale=s]) .node-container .checkbox,:host([scale=s]) .node-container .chevron,:host([scale=s]) .node-container .checkmark,:host([scale=s]) .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-container .icon-start,:host([scale=s]) .node-container .actions-end{margin-inline:0.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-container{--calcite-tree-padding-y:0.5rem}:host([scale=m]) .node-container .checkbox,:host([scale=m]) .node-container .chevron,:host([scale=m]) .node-container .checkmark,:host([scale=m]) .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-container .icon-start,:host([scale=m]) .node-container .actions-end{margin-inline:0.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-container{--calcite-tree-padding-y:0.75rem}:host([scale=l]) .node-container .checkbox,:host([scale=l]) .node-container .chevron,:host([scale=l]) .node-container .checkmark,:host([scale=l]) .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-container .icon-start,:host([scale=l]) .node-container .actions-end{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;inset-block-start:0px;z-index:1;inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:"";background-color:var(--calcite-ui-border-2)}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline-color:transparent}:host(:focus){outline:2px solid transparent;outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}slot[name=actions-end]::slotted(*),.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch;overflow:visible}.checkbox{line-height:0}.checkbox-label{pointer-events:none;display:flex;align-items:center}.checkbox:focus{outline:2px solid transparent;outline-offset:2px}.children-container{position:relative;block-size:0px;overflow:hidden;margin-inline-start:1.25rem;transform:scaleY(0);opacity:0;transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out;transform-origin:top}.item--expanded>.children-container{overflow:visible;opacity:1;block-size:auto}.node-container{position:relative;display:flex;align-items:center;padding-block:var(--calcite-tree-padding-y);padding-inline:0}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}:host([has-children][expanded]:not([selected]):not([selection-mode=none])) .node-container ::slotted(*){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([has-children][selected]) .node-container[data-selection-mode=children],:host([has-children][selected]) .node-container[data-selection-mode=multichildren]{color:var(--calcite-ui-brand)}.chevron{position:relative;align-self:center;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded>.node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}'},39591:(e,t,i)=>{i.d(t,{c:()=>c,d:()=>l});var n=i(30396),o=i(77041);const a=new Set;let r;const s={childList:!0};function c(e){r||(r=(0,o.c)("mutation",d)),r.observe(e.el,s)}function l(e){a.delete(e.el),d(r.takeRecords()),r.disconnect();for(const[e]of a.entries())r.observe(e,s)}function d(e){e.forEach((({target:e})=>{(0,n.f)(e)}))}},9615:(e,t,i)=>{i.d(t,{a:()=>b,b:()=>d,c:()=>f,d:()=>C,e:()=>l,f:()=>h,g:()=>E,h:()=>y,i:()=>D,j:()=>k,k:()=>s,l:()=>r,m:()=>A,n:()=>c,o:()=>S,p:()=>I,q:()=>p,r:()=>T,s:()=>H,t:()=>M,u:()=>m});var n=i(96440),o=i(31964),a=i(90770);const r={getShadowRoot:!0};function s(e){return e?e.id=e.id||`${e.tagName.toLowerCase()}-${(0,o.g)()}`:""}function c(e){return Array.isArray(e)?e:Array.from(e)}function l(e){const t=f(e,`.${a.C.darkMode}, .${a.C.lightMode}`);return t?.classList.contains("calcite-mode-dark")?"dark":"light"}function d(e){const t=f(e,"[dir]");return t?t.getAttribute("dir"):"ltr"}function h(e,t,i){const n=`[${t}]`,o=e.closest(n);return o?o.getAttribute(t):i}function m(e){return e.getRootNode()}function u(e){return e.host||null}function p(e,{selector:t,id:i}){return function e(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);const o=m(n),a=i?"getElementById"in o?o.getElementById(i):null:t?o.querySelector(t):null,r=u(o);return a||(r?e(r):null)}(e)}function f(e,t){return function e(i){return i?i.closest(t)||e(u(m(i))):null}(e)}function g(e,t){return v(e,t)}function v(e,t){if(!e)return;const i=t(e);if(void 0!==i)return i;const{parentNode:n}=e;return v(n instanceof ShadowRoot?n.host:n,t)}function b(e,t){return!!g(t,(t=>t===e||void 0))}async function y(e){if(e)return function(e){return"function"==typeof e?.setFocus}(e)?e.setFocus():e.focus()}function k(e){((0,n.t)(e,r)[0]||e).focus()}const x=":not([slot])";function E(e,t,i){t&&!Array.isArray(t)&&"string"!=typeof t&&(i=t,t=null);const n=t?Array.isArray(t)?t.map((e=>`[slot="${e}"]`)).join(","):`[slot="${t}"]`:x;return i?.all?function(e,t,i){let n=t===x?w(e,x):Array.from(e.querySelectorAll(t));n=i&&!1===i.direct?n:n.filter((t=>t.parentElement===e)),n=i?.matches?n.filter((e=>e?.matches(i.matches))):n;const o=i?.selector;return o?n.map((e=>Array.from(e.querySelectorAll(o)))).reduce(((e,t)=>[...e,...t]),[]).filter((e=>!!e)):n}(e,n,i):function(e,t,i){let n=t===x?w(e,x)[0]||null:e.querySelector(t);n=i&&!1===i.direct||n?.parentElement===e?n:null,n=i?.matches?n?.matches(i.matches)?n:null:n;const o=i?.selector;return o?n?.querySelector(o):n}(e,n,i)}function w(e,t){return e?Array.from(e.children||[]).filter((e=>e?.matches(t))):[]}function T(e,t){return Array.from(e.children).filter((e=>e.matches(t)))}function C(e,t,i){return"string"==typeof t&&""!==t?t:""===t?e[i]:void 0}function S(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)}function M(e){return Boolean(e).toString()}function H(e){return!!A(e).length}function A(e){return e.target.assignedElements({flatten:!0})}function D(e){return!(!e.isPrimary||0!==e.button)}const I=(e,t,i)=>{const n=e.indexOf(t),o=0===n,a=n===e.length-1;let r;switch(i="previous"===i&&o?"last":"next"===i&&a?"first":i){case"first":r=e[0];break;case"last":r=e[e.length-1];break;case"next":r=e[n+1]||e[0];break;case"previous":r=e[n-1]||e[e.length-1]}return y(r),r}},31964:(e,t,i)=>{i.d(t,{g:()=>n});const n=()=>[2,1,1,1,3].map((e=>{let t="";for(let i=0;i<e;i++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")},77041:(e,t,i)=>{function n(e,t,i){const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,i)}i.d(t,{c:()=>n})}}]);