"use strict";
(function($) {
	document.addEventListener("wsInit", () => {
		let lsCheck = false;
		if (Object.prototype.hasOwnProperty.call(localStorage, 'recoda-settings')){
			var localStore = JSON.parse(localStorage.getItem('recoda-settings'));
		}else lsCheck = true;
		
		let c1 = jQuery('.oxygen-sidebar-tabs', parent.document);
		let c2 = jQuery('#oxygen-topbar', parent.document);
		let c2_= jQuery('#oxygen-sidebar', parent.document);
		let iconBlockpad = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24" x="0" y="0"/></g><g><g><path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.34,1,1,2.34,1,4v2h2V4z"/><path d="M3,20v-2H1v2c0,1.66,1.34,3,3,3h2v-2H4C3.45,21,3,20.55,3,20z"/><path d="M20,1h-2v2h2c0.55,0,1,0.45,1,1v2h2V4C23,2.34,21.66,1,20,1z"/><path d="M21,20c0,0.55-0.45,1-1,1h-2v2h2c1.66,0,3-1.34,3-3v-2h-2V20z"/><path d="M19,14.87V9.13c0-0.72-0.38-1.38-1-1.73l-5-2.88c-0.31-0.18-0.65-0.27-1-0.27s-0.69,0.09-1,0.27L6,7.39 C5.38,7.75,5,8.41,5,9.13v5.74c0,0.72,0.38,1.38,1,1.73l5,2.88c0.31,0.18,0.65,0.27,1,0.27s0.69-0.09,1-0.27l5-2.88 C18.62,16.25,19,15.59,19,14.87z M11,17.17l-4-2.3v-4.63l4,2.33V17.17z M12,10.84L8.04,8.53L12,6.25l3.96,2.28L12,10.84z M17,14.87l-4,2.3v-4.6l4-2.33V14.87z"/></g></g></svg>`
		
        let f1 = `<div id="tbf-advancer" ng-class="{'ws-selector-locked':iframeScope.isSelectorLocked(iframeScope.activeSelectors[iframeScope.component.active.id])}" ><div class="tbf-item ws-pa-item" ng-click="styleTabAdvance=false;closeTabs(['oxy_posts_grid', 'dynamicList', 'slider','navMenu','effects','gallery','oxy_header','oxy_testimonial','oxy_icon_box','oxy_pricing_box','oxy_progress_bar','oxy_superbox','ct_modal','oxy-pro-menu']);toggleSidebar(true)" ng-class="{'oxygen-sidebar-tabs-tab-active':!styleTabAdvance}">P</div><div class="tbf-item ws-pa-item" ng-click="showAllStylesFunc(); styleTabAdvance=true" ng-class="{'oxygen-sidebar-tabs-tab-active':styleTabAdvance,'ws-styles-present':iframeScope.isTabHasOptions()}">A</div> <div id="tbf-background" onclick="recoda.selectAdvanced('advanced', 'background')" data-title-r="Background" class="tbf-item" recoda-hint="A" ng-class="{'ws-styles-present' : iframeScope.isTabHasOptions('background')}"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg> </div><div id="tbf-size-space" onclick="recoda.selectAdvanced('advanced', 'position')" recoda-hint="S" ng-class="{'ws-styles-present' : iframeScope.isTabHasOptions('position')}" data-title-r="Size &amp; Spacing" class="tbf-item"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z"></path></svg> </div><div id="tbf-layout" onclick="recoda.selectAdvanced('advanced', 'layout')" data-title-r="Layout" recoda-hint="D" ng-class="{'ws-styles-present' : iframeScope.isTabHasOptions('layout')}" class="tbf-item"> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"></rect><path d="M5.33,20H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h1.33c1.1,0,2,0.9,2,2v12C7.33,19.1,6.44,20,5.33,20z M22,18V6 c0-1.1-0.9-2-2-2h-1.33c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2H20C21.11,20,22,19.1,22,18z M14.67,18V6c0-1.1-0.9-2-2-2h-1.33 c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h1.33C13.77,20,14.67,19.1,14.67,18z"></path></svg> </div><div id="tbf-typography" onclick="recoda.selectAdvanced('advanced', 'typography')" recoda-hint="F" data-title-r="Typography" ng-class="{'ws-styles-present' : iframeScope.isTabHasOptions('typography')}" class="tbf-item"> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z"></path></g></g></g></svg> </div><div id="tbf-borders" onclick="recoda.selectAdvanced('advanced', 'borders')" data-title-r="Borders" class="tbf-item" recoda-hint="Z" ng-class="{'ws-styles-present' : iframeScope.isTabHasOptions('borders')}"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></svg> </div><div id="tbf-effect" onclick="recoda.selectAdvanced('advanced', 'effects')" data-title-r="Effects" recoda-hint="X" ng-class="{'ws-styles-present' : iframeScope.isTabHasOptions('effects')}" class="tbf-item"> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M12,4.81L12,19c-3.31,0-6-2.63-6-5.87c0-1.56,0.62-3.03,1.75-4.14L12,4.81 M12,2L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87c0-2.17-0.9-4.14-2.35-5.57l0,0L12,2z"></path></g></svg></div><div id="tbf-css" onclick="recoda.selectAdvanced('advanced', 'custom-css')" data-title-r="Custom CSS" class="tbf-item" recoda-hint="C" ng-class="{'ws-styles-present' : !iframeScope.isInherited(iframeScope.component.active.id,'custom-css')}"> <div> CSS </div></div><div id="tbf-js" onclick="recoda.selectAdvanced('advanced', 'custom-js')" data-title-r="Custom JS" class="tbf-item" recoda-hint="V" ng-class="{'ws-styles-present' : !iframeScope.isInherited(iframeScope.component.active.id,'custom-js')}"> <div> JS </div></div><div id="tbf-att" onclick="recoda.selectAdvanced('advanced', 'custom-attributes')" data-title-r="Attributes" class="tbf-item" recoda-hint="B" ng-class="{'ws-styles-present' : iframeScope.isTabHasOptions('custom-attributes')}"> <div> ATT </div></div><div id="rews-blockpad" ng-if=" iframeScope.component.options[iframeScope.component.active.id]['name'] == 'ct_code_block' " data-title-r="BlockPad Editor" class="tbf-item" onclick="recoda.maximizeBlockpad()">${iconBlockpad}</div></div>`;
		let f2 = `<div id="tbf-side-manager" class="stv-radio-buttons-wrapper tbf-subitem2">  <div id="ws-dom"  onclick="recoda.panelator('dom');" class="tbf-side-item" recoda-hint="Q"> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"></path></svg> </div><div id="ws-selectors" onclick="recoda.panelator('selectors');" class="tbf-side-item" recoda-hint="W"> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"></rect><path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M12,20c-3.35,0-6-2.57-6-6.2 c0-2.34,1.95-5.44,6-9.14c4.05,3.7,6,6.79,6,9.14C18,17.43,15.35,20,12,20z M7.83,14c0.37,0,0.67,0.26,0.74,0.62 c0.41,2.22,2.28,2.98,3.64,2.87c0.43-0.02,0.79,0.32,0.79,0.75c0,0.4-0.32,0.73-0.72,0.75c-2.13,0.13-4.62-1.09-5.19-4.12 C7.01,14.42,7.37,14,7.83,14z"></path></svg></div><div id="ws-stylesheets" onclick="recoda.panelator('stylesheets');"  class="tbf-side-item" recoda-hint="E"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 1l-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"></path></svg></div><div id="ws-settings"  onclick="recoda.panelator('settings');" class="tbf-side-item" recoda-hint="R"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg></div><div id="ws-inspector"  class="tbf-side-item" onclick="recoda.panelator('inspector')" recoda-hint="T"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"> </path> </svg></div> </div>`;
		

		let blockpadTab = `<div class="oxygen-sidebar-advanced-subtab" onclick="recoda.maximizeBlockpad()">${iconBlockpad}<div style="margin-left: 27px">Blockpad view</div></div>`
		jQuery(blockpadTab).prependTo(`.oxygen-sidebar-flex-panel[ng-show="isActiveName('ct_code_block')"]`)

		$(document, parent.document).injector().invoke(function($compile) {
	
			
			
            c1.prepend($compile(f1)(angular.element("#ct-controller-ui").scope()));
		if (!lsCheck){
			if(localStore["ws-panelator-position"] == "sidepanel"){
				c2_.prepend($compile(f2)(angular.element("#ct-controller-ui").scope()));
			}
			else if(rewsLocalVars.oxyVersion.Version.charAt(0) == "4"){
				jQuery(f2).insertBefore( ".oxygen-save-button.oxygen-toolbar-button" );
			} 
			else{
				c2.append($compile(f2)(angular.element("#ct-controller-ui").scope()));
			}	
		}
		else if(rewsLocalVars.oxyVersion.Version.charAt(0) == "4"){
			jQuery(f2).insertBefore( ".oxygen-save-button.oxygen-toolbar-button" );
		} 
		else{
			c2.append($compile(f2)(angular.element("#ct-controller-ui").scope()));
		}
			
        });

	}); 
})(angular.element);