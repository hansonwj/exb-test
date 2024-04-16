/*! For license information please see e1db1b48652125f83af9857872a7d70d.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[19928],{19928:(e,t,i)=>{i.r(t),i.d(t,{calcite_combobox:()=>w});var n=i(30396),s=i(69254),o=i(9615),a=i(58738),l=i(56214),c=i(31964),r=i(32544),h=i(37145),d=i(29340),m=i(36578),p=i(77041),u=i(60131),f=i(39351),b=i(81443),g=i(58435);const v="combobox-item-",x="combobox-chip-",I="combobox-label-",C="combobox-listbox-",E="combobox-input-",w=class{constructor(e){(0,n.r)(this,e),this.calciteComboboxChange=(0,n.c)(this,"calciteComboboxChange",6),this.calciteComboboxFilterChange=(0,n.c)(this,"calciteComboboxFilterChange",6),this.calciteComboboxChipClose=(0,n.c)(this,"calciteComboboxChipClose",6),this.calciteComboboxBeforeClose=(0,n.c)(this,"calciteComboboxBeforeClose",6),this.calciteComboboxClose=(0,n.c)(this,"calciteComboboxClose",6),this.calciteComboboxBeforeOpen=(0,n.c)(this,"calciteComboboxBeforeOpen",6),this.calciteComboboxOpen=(0,n.c)(this,"calciteComboboxOpen",6),this.placement=a.d,this.internalValueChangeFlag=!1,this.textInput=null,this.mutationObserver=(0,p.c)("mutation",(()=>this.updateItems())),this.resizeObserver=(0,p.c)("resize",(()=>this.setMaxScrollerHeight())),this.guid=(0,c.g)(),this.inputHeight=0,this.ignoreSelectedEventsFlag=!1,this.openTransitionProp="opacity",this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,a.f)(t,e):null},this.getValue=()=>{const e=this.selectedItems.map((e=>e?.value?.toString()));return e?.length?e.length>1?e:e[0]:""},this.onLabelClick=()=>{this.setFocus()},this.keydownHandler=e=>{const{key:t}=e;switch(t){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),e.preventDefault()):this.open&&(this.open=!1,e.preventDefault());break;case"ArrowLeft":this.previousChip(),e.preventDefault();break;case"ArrowRight":this.nextChip(),e.preventDefault();break;case"ArrowUp":e.preventDefault(),this.shiftActiveItemIndex(-1),this.comboboxInViewport()||this.el.scrollIntoView();break;case"ArrowDown":e.preventDefault(),this.open||(this.open=!0),this.shiftActiveItemIndex(1),this.comboboxInViewport()||this.el.scrollIntoView();break;case" ":this.textInput.value||(e.preventDefault(),this.open=!0,this.shiftActiveItemIndex(1));break;case"Home":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(0),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"End":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(this.filteredItems.length-1),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"Escape":this.open=!1,e.preventDefault();break;case"Enter":this.activeItemIndex>-1?(this.toggleSelection(this.filteredItems[this.activeItemIndex]),e.preventDefault()):this.activeChipIndex>-1?(this.removeActiveChip(),e.preventDefault()):this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),e.preventDefault()):e.defaultPrevented||(0,l.s)(this)&&e.preventDefault();break;case"Delete":case"Backspace":this.activeChipIndex>-1?(e.preventDefault(),this.removeActiveChip()):!this.text&&this.isMulti()&&(e.preventDefault(),this.removeLastChip())}},this.toggleCloseEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxClose",this.toggleCloseEnd)},this.toggleOpenEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxOpen",this.toggleOpenEnd)},this.setMaxScrollerHeight=async()=>{const{listContainerEl:e,open:t,referenceEl:i}=this;if(!e||!t)return;await this.reposition(!0);const n=this.getMaxScrollerHeight();e.style.maxHeight=n>0?`${n}px`:"",e.style.minWidth=`${i.clientWidth}px`,await this.reposition(!0)},this.calciteChipCloseHandler=e=>{this.open=!1;const t=this.items.find((t=>t===e));t&&this.toggleSelection(t,!1),this.calciteComboboxChipClose.emit()},this.clickHandler=e=>{e.composedPath().some((e=>"CALCITE-CHIP"===e.tagName))||(this.open=!this.open,this.updateActiveItemIndex(0),this.setFocus())},this.setInactiveIfNotContained=e=>{const t=e.composedPath();!this.open||t.includes(this.el)||t.includes(this.referenceEl)||(this.allowCustomValues&&this.text.trim().length&&this.addCustomChip(this.text),"single"===this.selectionMode&&(this.textInput&&(this.textInput.value=""),this.text="",this.filterItems(""),this.updateActiveItemIndex(-1)),this.open=!1)},this.setFloatingEl=e=>{this.floatingEl=e,(0,a.c)(this,this.referenceEl,this.floatingEl)},this.setContainerEl=e=>{this.resizeObserver.observe(e),this.listContainerEl=e,this.transitionEl=e,(0,u.c)(this)},this.setReferenceEl=e=>{this.referenceEl=e,(0,a.c)(this,this.referenceEl,this.floatingEl)},this.inputHandler=e=>{const t=e.target.value;this.text=t,this.filterItems(t),t&&(this.activeChipIndex=-1)},this.filterItems=(()=>{const e=(e,t)=>e&&t.some((({label:t,value:i})=>e.tagName===b.c?i===e.label:i===e.textLabel||i===e.value||t===e.textLabel||t===e.value));return(0,g.d)((t=>{const i=(0,s.f)(this.data,t);this.getCombinedItems().forEach((t=>{const n=!e(t,i);t.hidden=n;const[s,o]=t.ancestors;(e(s,i)||e(o,i))&&(t.hidden=!1),n||t.ancestors.forEach((e=>e.hidden=!1))})),this.filteredItems=this.getfilteredItems(),this.calciteComboboxFilterChange.emit()}),100)})(),this.internalComboboxChangeEvent=()=>{this.calciteComboboxChange.emit()},this.emitComboboxChange=(0,g.d)(this.internalComboboxChangeEvent,0),this.updateItems=()=>{this.items=this.getItems(),this.groupItems=this.getGroupItems(),this.data=this.getData(),this.selectedItems=this.getSelectedItems(),this.filteredItems=this.getfilteredItems(),this.needsIcon=this.getNeedsIcon(),this.allowCustomValues||this.setMaxScrollerHeight()},this.scrollToActiveItem=()=>{const e=this.filteredItems[this.activeItemIndex];if(!e)return;const t=this.calculateSingleItemHeight(e),{offsetHeight:i,scrollTop:n}=this.listContainerEl;i+n<e.offsetTop+t?this.listContainerEl.scrollTop=e.offsetTop-i+t:e.offsetTop<n&&(this.listContainerEl.scrollTop=e.offsetTop)},this.comboboxFocusHandler=()=>{this.textInput?.focus()},this.comboboxBlurHandler=e=>{this.setInactiveIfNotContained(e)},this.open=!1,this.disabled=!1,this.label=void 0,this.placeholder=void 0,this.placeholderIcon=void 0,this.placeholderIconFlipRtl=!1,this.maxItems=0,this.name=void 0,this.allowCustomValues=void 0,this.overlayPositioning="absolute",this.required=!1,this.selectionMode="multiple",this.scale="m",this.value=null,this.flipPlacements=void 0,this.messages=void 0,this.messageOverrides=void 0,this.selectedItems=[],this.filteredItems=[],this.items=[],this.groupItems=[],this.needsIcon=void 0,this.activeItemIndex=-1,this.activeChipIndex=-1,this.activeDescendant="",this.text="",this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(e){e||(0,a.u)(this.floatingEl),this.disabled?this.open=!1:this.setMaxScrollerHeight()}handleDisabledChange(e){e||(this.open=!1)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}valueHandler(e){if(!this.internalValueChangeFlag){const t=this.getItems();Array.isArray(e)?t.forEach((t=>t.selected=e.includes(t.value))):e?t.forEach((t=>t.selected=e===t.value)):t.forEach((e=>e.selected=!1)),this.updateItems()}}onMessagesChange(){}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}selectedItemsHandler(){this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1}documentClickHandler(e){(0,o.i)(e)&&this.setInactiveIfNotContained(e)}calciteComboboxItemChangeHandler(e){if(this.ignoreSelectedEventsFlag)return;const t=e.target,i=this.filteredItems.indexOf(t);this.updateActiveItemIndex(i),this.toggleSelection(t,t.selected)}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:n,overlayPositioning:s,filteredFlipPlacements:o}=this;return(0,a.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:s,placement:n,flipPlacements:o,type:"menu"},e)}async setFocus(){await(0,d.c)(this),this.textInput?.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1}connectedCallback(){(0,m.c)(this),(0,f.c)(this),this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1,this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),(0,h.c)(this),(0,l.c)(this),(0,u.c)(this),this.setFilteredPlacements(),this.reposition(!0),this.open&&this.openHandler(this.open)}async componentWillLoad(){(0,d.a)(this),this.updateItems(),await(0,f.s)(this)}componentDidLoad(){(0,l.a)(this,this.getValue()),this.reposition(!0),(0,d.s)(this)}componentDidRender(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(!0),this.inputHeight=this.el.offsetHeight),(0,r.u)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),(0,h.d)(this),(0,l.d)(this),(0,a.a)(this,this.referenceEl,this.floatingEl),(0,u.d)(this),(0,m.d)(this),(0,f.d)(this)}textHandler(){this.updateActiveItemIndex(-1)}effectiveLocaleChange(){(0,f.u)(this,this.effectiveLocale)}comboboxInViewport(){const e=this.el.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)}onBeforeOpen(){this.calciteComboboxBeforeOpen.emit()}onOpen(){this.calciteComboboxOpen.emit()}onBeforeClose(){this.calciteComboboxBeforeClose.emit()}onClose(){this.calciteComboboxClose.emit()}getMaxScrollerHeight(){const e=this.getCombinedItems().filter((e=>!e.hidden)),{maxItems:t}=this;let i=0,n=0;return e.length>t&&e.forEach((e=>{if(i<t&&t>0){const t=this.calculateSingleItemHeight(e);t>0&&(n+=t,i++)}})),n}calculateSingleItemHeight(e){if(!e)return;let t=e.offsetHeight;return Array.from(e.querySelectorAll(b.C)).map((e=>e?.offsetHeight)).forEach((e=>{t-=e})),t}getCombinedItems(){return[...this.groupItems,...this.items]}toggleSelection(e,t=!e.selected){e&&(this.isMulti()?(e.selected=t,this.updateAncestors(e),this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.resetText(),this.filterItems("")):(this.ignoreSelectedEventsFlag=!0,this.items.forEach((i=>i.selected=i===e&&t)),this.ignoreSelectedEventsFlag=!1,this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.textInput&&(this.textInput.value=e.textLabel),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems("")))}updateAncestors(e){if("ancestors"!==this.selectionMode)return;const t=(0,b.g)(e),i=(0,b.a)(e);e.selected?t.forEach((e=>{e.selected=!0})):(i.forEach((e=>e.selected=!1)),[...t].forEach((e=>{(0,b.h)(e)||(e.selected=!1)})))}getfilteredItems(){return this.items.filter((e=>!e.hidden))}getSelectedItems(){if(!this.isMulti()){const e=this.items.find((({selected:e})=>e));return e?[e]:[]}return this.items.filter((e=>e.selected&&("ancestors"!==this.selectionMode||!(0,b.h)(e)))).sort(((e,t)=>{const i=this.selectedItems.indexOf(e),n=this.selectedItems.indexOf(t);return i>-1&&n>-1?i-n:n-i}))}getData(){return this.items.map((e=>({filterDisabled:e.filterDisabled,value:e.value,label:e.textLabel})))}getNeedsIcon(){return"single"===this.selectionMode&&this.items.some((e=>e.icon))}resetText(){this.textInput&&(this.textInput.value=""),this.text=""}getItems(){return Array.from(this.el.querySelectorAll(b.b)).filter((e=>!e.disabled))}getGroupItems(){return Array.from(this.el.querySelectorAll(b.c))}addCustomChip(e,t){const i=this.items.find((t=>t.textLabel===e));if(i)this.toggleSelection(i,!0);else{this.isMulti()||this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1);const i=document.createElement(b.b);i.value=e,i.textLabel=e,i.selected=!0,this.el.appendChild(i),this.resetText(),t&&this.setFocus(),this.updateItems(),this.filterItems(""),this.emitComboboxChange()}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()}previousChip(){if(this.text)return;const e=this.selectedItems.length-1,t=this.activeChipIndex;this.activeChipIndex=-1===t?e:Math.max(t-1,0),this.updateActiveItemIndex(-1),this.focusChip()}nextChip(){if(this.text||-1===this.activeChipIndex)return;const e=this.selectedItems.length-1,t=this.activeChipIndex+1;t>e?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=t,this.focusChip()),this.updateActiveItemIndex(-1)}focusChip(){const e=this.selectedItems[this.activeChipIndex]?.guid,t=e?this.referenceEl.querySelector(`#${x}${e}`):null;t?.setFocus()}shiftActiveItemIndex(e){const{length:t}=this.filteredItems,i=(this.activeItemIndex+t+e)%t;this.updateActiveItemIndex(i),this.scrollToActiveItem()}updateActiveItemIndex(e){this.activeItemIndex=e;let t=null;this.filteredItems.forEach(((i,n)=>{n===e?(i.active=!0,t=`${v}${i.guid}`):i.active=!1})),this.activeDescendant=t,this.activeItemIndex>-1&&(this.activeChipIndex=-1)}isMulti(){return"single"!==this.selectionMode}renderChips(){const{activeChipIndex:e,scale:t,selectionMode:i,messages:s}=this;return this.selectedItems.map(((o,a)=>{const l={chip:!0,"chip--active":e===a},c=[...[...(0,b.g)(o)].reverse(),o].map((e=>e.textLabel)),r="ancestors"!==i?o.textLabel:c.join(" / ");return(0,n.h)("calcite-chip",{class:l,closable:!0,icon:o.icon,iconFlipRtl:o.iconFlipRtl,id:o.guid?`${x}${o.guid}`:null,key:o.textLabel,messageOverrides:{dismissLabel:s.removeTag},onCalciteChipClose:()=>this.calciteChipCloseHandler(o),scale:t,title:r,value:o.value},r)}))}renderInput(){const{guid:e,disabled:t,placeholder:i,selectionMode:s,selectedItems:o,open:a}=this,l="single"===s,c=o[0],r=!a&&l&&!!c;return(0,n.h)("span",{class:{"input-wrap":!0,"input-wrap--single":l}},r&&(0,n.h)("span",{class:{label:!0,"label--icon":!!c?.icon},key:"label"},c.textLabel),(0,n.h)("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":`${C}${e}`,"aria-label":(0,h.g)(this),class:{input:!0,"input--single":!0,"input--transparent":this.activeChipIndex>-1,"input--hidden":r,"input--icon":!!this.placeholderIcon},disabled:t,id:`${E}${e}`,key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:i,ref:e=>this.textInput=e,type:"text"}))}renderListBoxOptions(){return this.filteredItems.map((e=>(0,n.h)("li",{"aria-selected":(0,o.t)(e.selected),id:e.guid?`${v}${e.guid}`:null,role:"option",tabindex:"-1"},e.textLabel)))}renderFloatingUIContainer(){const{setFloatingEl:e,setContainerEl:t,open:i}=this,s={"list-container":!0,[a.F.animation]:!0,[a.F.animationActive]:i};return(0,n.h)("div",{"aria-hidden":"true",class:{"floating-ui-container":!0,"floating-ui-container--active":i},ref:e},(0,n.h)("div",{class:s,ref:t},(0,n.h)("ul",{class:{list:!0,"list--hide":!i}},(0,n.h)("slot",null))))}renderIconStart(){const{selectedItems:e,placeholderIcon:t,selectionMode:i,placeholderIconFlipRtl:s}=this,o=e[0],a=o?.icon,l="single"===i;return(!this.open&&o?!!a&&l:!!this.placeholderIcon&&(!o||l))&&(0,n.h)("span",{class:"icon-start"},(0,n.h)("calcite-icon",{class:"selected-icon",flipRtl:this.open&&o?o.iconFlipRtl:s,icon:!this.open&&o?a:t,scale:"s"}))}renderIconEnd(){const{open:e}=this;return(0,n.h)("span",{class:"icon-end"},(0,n.h)("calcite-icon",{icon:e?"chevron-up":"chevron-down",scale:"s"}))}render(){const{guid:e,label:t,open:i}=this,s="single"===this.selectionMode;return(0,n.h)(n.H,{onClick:this.comboboxFocusHandler},(0,n.h)("div",{"aria-autocomplete":"list","aria-controls":`${C}${e}`,"aria-expanded":(0,o.t)(i),"aria-haspopup":"listbox","aria-labelledby":`${I}${e}`,"aria-live":"polite","aria-owns":`${C}${e}`,class:{wrapper:!0,"wrapper--single":s||!this.selectedItems.length,"wrapper--active":i},onClick:this.clickHandler,onKeyDown:this.keydownHandler,ref:this.setReferenceEl,role:"combobox"},(0,n.h)("div",{class:"grid-input"},this.renderIconStart(),!s&&this.renderChips(),(0,n.h)("label",{class:"screen-readers-only",htmlFor:`${E}${e}`,id:`${I}${e}`},t),this.renderInput()),this.renderIconEnd()),(0,n.h)("ul",{"aria-labelledby":`${I}${e}`,"aria-multiselectable":"true",class:"screen-readers-only",id:`${C}${e}`,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderFloatingUIContainer(),(0,n.h)(l.H,{component:this}))}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],value:["valueHandler"],messageOverrides:["onMessagesChange"],flipPlacements:["flipPlacementsHandler"],selectedItems:["selectedItemsHandler"],text:["textHandler"],effectiveLocale:["effectiveLocaleChange"]}}};w.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{flex-grow:1;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-inline-size:120px;margin-block-end:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-block:0px;padding:0px}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:flex;flex-grow:1}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;inline-size:1rem;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{--calcite-floating-ui-z-index:600;display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},56214:(e,t,i)=>{i.d(t,{H:()=>v,a:()=>u,c:()=>d,d:()=>p,r:()=>h,s:()=>r});var n=i(9615),s=i(30396);const o="hidden-form-input";function a(e){return"checked"in e}const l=new WeakMap,c=new WeakSet;function r(e){const{formEl:t}=e;return!!t&&("requestSubmit"in t?t.requestSubmit():t.submit(),!0)}function h(e){e.formEl?.reset()}function d(e){const{el:t,value:i}=e,s=(0,n.c)(t,"form");if(!s||function(e,t){const i="calciteInternalFormComponentRegister";let n=!1;return e.addEventListener(i,(e=>{n=e.composedPath().some((e=>c.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),n}(s,t))return;e.formEl=s,e.defaultValue=i,a(e)&&(e.defaultChecked=e.checked);const o=(e.onFormReset||m).bind(e);s.addEventListener("reset",o),l.set(e.el,o),c.add(t)}function m(){a(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function p(e){const{el:t,formEl:i}=e;if(!i)return;const n=l.get(t);i.removeEventListener("reset",n),l.delete(t),e.formEl=null,c.delete(t)}function u(e,t){e.defaultValue=t}const f=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},b=e=>e.removeEventListener("change",f);function g(e,t,i){const{defaultValue:n,disabled:s,name:o,required:l}=e;t.defaultValue=n,t.disabled=s,t.name=o,t.required=l,t.tabIndex=-1,a(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t)}const v=({component:e})=>(function(e){const{el:t,formEl:i,name:n,value:s}=e,{ownerDocument:a}=t,l=t.querySelectorAll(`input[slot="${o}"]`);if(!i||!n)return void l.forEach((e=>{b(e),e.remove()}));const c=Array.isArray(s)?s:[s],r=[],h=new Set;let d;l.forEach((t=>{const i=c.find((e=>e==t.value));null!=i?(h.add(i),g(e,t,i)):r.push(t)})),c.forEach((t=>{if(h.has(t))return;let i=r.pop();i||(i=a.createElement("input"),i.slot=o),d||(d=a.createDocumentFragment()),d.append(i),i.addEventListener("change",f),g(e,i,t)})),d&&t.append(d),r.forEach((e=>{b(e),e.remove()}))}(e),(0,s.h)("slot",{name:o}))},37145:(e,t,i)=>{i.d(t,{a:()=>a,c:()=>p,d:()=>u,g:()=>f,l:()=>o});var n=i(9615);const s="calciteInternalLabelClick",o="calciteInternalLabelConnected",a="calciteInternaLabelDisconnected",l="calcite-label",c=new WeakMap,r=new WeakMap,h=new WeakMap,d=new Set,m=e=>{const{id:t}=e,i=t&&(0,n.q)(e,{selector:`${l}[for="${t}"]`});if(i)return i;const s=(0,n.c)(e,l);return!s||function(e,t){let i;const n="custom-element-ancestor-check",s=n=>{n.stopImmediatePropagation();const s=n.composedPath();i=s.slice(s.indexOf(t),s.indexOf(e))};e.addEventListener(n,s,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,s);return i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(s,e)?null:s};function p(e){const t=m(e.el);if(c.has(t)||!t&&d.has(e))return;const i=v.bind(e);if(t){e.labelEl=t;const n=b.bind(e);c.set(e.labelEl,n),e.labelEl.addEventListener(s,n),d.delete(e),document.removeEventListener(o,r.get(e)),h.set(e,i),document.addEventListener(a,i)}else d.has(e)||(i(),document.removeEventListener(a,h.get(e)))}function u(e){if(d.delete(e),document.removeEventListener(o,r.get(e)),document.removeEventListener(a,h.get(e)),r.delete(e),h.delete(e),!e.labelEl)return;const t=c.get(e.labelEl);e.labelEl.removeEventListener(s,t),c.delete(e.labelEl)}function f(e){return e.label||e.labelEl?.textContent?.trim()||""}function b(e){this.disabled||this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function g(){d.has(this)&&p(this)}function v(){d.add(this);const e=r.get(this)||g.bind(this);r.set(this,e),document.addEventListener(o,e)}},81443:(e,t,i)=>{i.d(t,{C:()=>a,a:()=>r,b:()=>s,c:()=>o,d:()=>l,e:()=>d,g:()=>c,h:()=>h});var n=i(9615);const s="CALCITE-COMBOBOX-ITEM",o="CALCITE-COMBOBOX-ITEM-GROUP",a=`${s}, ${o}`;function l(e){const t=e.parentElement?.closest(a),i=t?.parentElement?.closest(a);return[t,i].filter((e=>e))}function c(e){return e.ancestors?.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName))||[]}function r(e){return(0,n.n)(e.querySelectorAll("calcite-combobox-item"))}function h(e){return(0,n.n)(e.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function d(e){return document.evaluate("ancestor::calcite-combobox-item",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}}}]);