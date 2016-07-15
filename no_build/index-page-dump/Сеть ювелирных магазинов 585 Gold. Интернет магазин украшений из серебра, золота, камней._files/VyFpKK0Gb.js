var country = "RU"; var popupConfs = [{"id":"NyhD1sRf-","url":"https://app.popupdomination.com/popups/NyhD1sRf-/preview","overlayTransparency":"0.6","width":"802","height":"600","outerCss":"","redirect":{"url":"","type":"close","yesnourl":""},"reappear":"0","reappearOptin":"0","display":{"powered_link":"http://popupdomination.com","powered":false,"scheduleTo":"","scheduleFrom":"","scheduleTimezone":"-180","scheduleType":"manual","devices":"all","limitCountries":"all","nthvisit":"1","scrollPercent":"50","class":"popdom","type":"onclick","time":"0"},"querystrings":{"enabled":[""],"disabled":[""]},"overlay":{"type":"blur","color":"rgba(0,0,0,0.4)","cfvignette":"0","cfblur":"12","c2color":"rgba(232,229,229,0.4)","ccolor":"rgba(232,229,229,0.4)"},"pages":{"only":["zoloto585.ru/action/-VESNA-VREMYA-POLUCHAT-PODARKI/"],"type":"only","except":[""]},"type":"email"}]; var abConfs = []; "use strict";
var pdDsply = false;
var visiblePopupFrame;
var kUtkQzmde = function(popupConf) {
	'use strict';
	var popup, popupFrame, closeButton, powered, overlay, popupWrapper;
	var doc = document;
	var win = window;
	var popupDomination = {

		setCookie: function(forever){
			var d = new Date();
			var delay = popupConf.reappear;
			if(forever){
				delay = popupConf.reappearOptin || 525600;
			}
			d.setTime(d.getTime() + (delay*60*1000));
			var exp = "expires="+d.toUTCString();
			if(typeof popupConf.abid != 'undefined'){
				document.cookie = 'pdAB' + popupConf.abid + '=' + 'true' + ';path=/; ' + exp;
			} else {
				document.cookie = 'pd' + popupConf.id + '=' + 'true' + ';path=/; ' + exp;
			}
		},

		checkCookie: function(){
			var name = null;
			if(typeof popupConf.abid != 'undefined'){
				name = 'pdAB' + popupConf.abid + "=";
			} else {
				name = 'pd' + popupConf.id + "=";
			}
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1);
				if (c.indexOf(name) == 0) return true;
			}
			return false;
		},

		checkVisit: function(){
			var name = 'pv' + popupConf.id + "=";
			var ca = document.cookie.split(';');
			var d = new Date();
			d.setTime(d.getTime() + (525600*60*1000));
			var exp = "expires="+d.toUTCString();
			for(var i=0; i<ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1);
				if (c.indexOf(name) == 0) {
					var i = c.replace(name, '');
					i = parseInt(i) + 1;
					document.cookie = 'pv' + popupConf.id + '=' + i + '; ' + exp + '; ' + 'path=/';
					return i;
				}
			}
			document.cookie = 'pv' + popupConf.id + '=' + 1 + '; ' + exp + '; ' + 'path=/';
			return 1;
		},

		checkSchedule: function(){
			var start = new Date(popupConf.display.scheduleFrom).getTime()+(popupConf.display.scheduleTimezone * 60 * 1000);
			var end = new Date(popupConf.display.scheduleTo).getTime()+(popupConf.display.scheduleTimezone * 60 * 1000);
			start = new Date(start - new Date().getTimezoneOffset() * 60 * 1000);
			end = new Date(end - new Date().getTimezoneOffset() * 60 * 1000);
			//TODO: OPTIMIZE
			if(popupConf.display.scheduleFrom && start > new Date()){
				return true;
			}
			if(popupConf.display.scheduleTo && end < new Date()){
				return true;
			}
			return false;
		},

		closeAll: function(forever){
			pdDsply = false;
			forever = forever || false;
			if(popupConf.display.type == 'onload' || popupConf.display.type == 'onleave' || popupConf.display.type == 'onscroll'){
				popupDomination.setCookie(forever);
			}

			overlay.style.background = 'rgba(0,0,0,0)';
			popupFrame.style.top = "-500px";
			var blurreds = document.querySelectorAll("body>:not(#pdv4wrap)");
			if(blurreds){
				for(var i=0; i<blurreds.length; i++){
					var blurred = blurreds[i];
					blurred.style['-webkit-filter'] = 'none';
					blurred.style['-moz-filter'] = 'none';
					blurred.style['-o-filter'] = 'none';
					blurred.style['-ms-filter'] = 'none';
					blurred.style['filter'] = 'none';
				}
			}
			setTimeout(function(){
				if(powered && powered.parentNode)
					powered.parentNode.removeChild(powered);
				if(closeButton && closeButton.parentNode)
					closeButton.parentNode.removeChild(closeButton);
				if(overlay && overlay.parentNode)
					overlay.parentNode.removeChild(overlay);
				if(popupFrame && popupFrame.parentNode)
				popupFrame.parentNode.removeChild(popupFrame);
			}, 300);
		},

		popupIsNotInTheRightList: function(pageOptions){
			var show = false;
			var referer = window.location.host + window.location.pathname;
			referer = referer.replace(/\/?$/, '/');
			if(pageOptions.type == 'all'){
				show = true;
			}
			if(pageOptions && referer){
				if(pageOptions.type == 'except'){
					show = true;
					for (var i = 0; i < pageOptions.except.length; ++i) {
						var configPage = pageOptions.except[i];
						configPage = configPage.replace(/\/?$/, '/');
						if(configPage.indexOf('*') > -1){
							var split = configPage.split('*');
							if(referer.indexOf(split[0]) > -1 && referer.length > split[0].length ){
								show = false;
							}
						} else {
							if(configPage == referer){
								show = false;
							}
						}
					}
				} else if(pageOptions.type == 'only' && referer){
					show = false;
					for (var i = 0; i < pageOptions.only.length; ++i) {
					    var configPage = pageOptions.only[i];
							configPage = configPage.replace(/\/?$/, '/');
							if(configPage.indexOf('*') > -1){
								var split = configPage.split('*');
								if(referer.indexOf(split[0]) > -1 && referer.length > split[0].length ){
									show = true;
								}
							} else {
								if(configPage == referer){
									show = true;
								}
							}
					}
				}
			}
			return !show;
		},

		popupInEnabledQSList: function(queryStrings){
			var inList = false;
			var b = window.location.search;
			for (var i = 0; i < queryStrings.length; ++i) {
				var qs = queryStrings[i];
				if(b.indexOf(qs) > -1) {
					inList = true;
				}
			}
			return inList;
		},
		popupInDisabledQSList: function(queryStrings){
			var inList = false;
			var b = window.location.search;
			for (var i = 0; i < queryStrings.length; ++i) {
				var qs = queryStrings[i];
				if(b.indexOf(qs) > -1) {
					inList = true;
				}
			}
			return inList;
		},

		isMobileDevice: function(e){
			var isMobile = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silkce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))isMobile = true})(navigator.userAgent||navigator.vendor||window.opera);
			return isMobile;
		},

		showClick: function(e){
			e.preventDefault();
			popupDomination.show();
		},

		show: function(preload) {
			if(popupDomination.ifPopupShown()){
				return;
			}
			preload = preload || false;
			if(preload || popupConf.display.type != 'onleave'){
				if(popupConf.display.scheduleType == 'scheduled' && popupDomination.checkSchedule()){
					return;
				}
				if(popupDomination.checkCookie() && (popupConf.display.type == 'onload' || popupConf.display.type == 'onleave' || popupConf.display.type == 'onscroll')) {
					return;
				}
				if(popupConf.display.nthvisit && parseInt(popupConf.display.nthvisit) > 1){
					if(popupDomination.checkVisit() < parseInt(popupConf.display.nthvisit)){
						return;
					}
				}
				if(popupConf.pages && popupDomination.popupIsNotInTheRightList(popupConf.pages)){
					return;
				}
				if(popupConf.display.querystringsenabled && !popupDomination.popupInEnabledQSList(popupConf.querystrings.enabled)) {
					return;
				}
				if(popupConf.display.querystringsdisabled && popupDomination.popupInDisabledQSList(popupConf.querystrings.disabled)) {
					popupDomination.setCookie(true);
					return;
				}
				if(popupConf.display.devices && popupConf.display.devices != 'all'){
					var isMobile = popupDomination.isMobileDevice();
					if(popupConf.display.devices == 'mobile' && !isMobile){
						return;
					}
					if(popupConf.display.devices == 'desktop' && isMobile){
						return;
					}
				}
				if(popupConf.display.limitCountries && popupConf.display.limitCountries != 'all'){
					if(popupConf.display.limitCountries == 'allow'){
						if(typeof popupConf.display.acountries === "string" && popupConf.display.acountries != country){
							return;
						}
						if(popupConf.display.acountries instanceof Array && !(popupConf.display.acountries.indexOf(country) > -1)){
							return;
						}
					}
					else if(popupConf.display.limitCountries == 'disable'){
						if(typeof popupConf.display.dcountries === "string" && popupConf.display.dcountries == country){
							return;
						}
						if(popupConf.display.dcountries instanceof Array && popupConf.display.dcountries.indexOf(country) > -1){
							return;
						}
					}
				}
				overlay = popupDomination.createOverlay();
				doc.body.appendChild(overlay);
				popup = popupDomination.createPopup();
				closeButton = popupDomination.createClose();
				if(popupConf.display.powered){
					powered = popupDomination.createPowered();
				}
				popupWrapper = popupDomination.createPopupWrapper();
				if(!popupConf.display.forced){
					popupWrapper.appendChild(closeButton);
				}
				powered && popupWrapper.appendChild(powered);
				popupWrapper.appendChild(popup);
				doc.body.appendChild(popupWrapper);
			}

			if(!preload || popupConf.display.type == 'onclick'){
				win.addEventListener("resize", popupDomination.onResize);
				//we want to do animations here
				if(popupConf.display.type == 'onleave'){
					if(overlay){
						overlay.style.transition = 'all 2s 0.5s ease-in-out';
						overlay.style.transition = 'background-color 1s ease';
					}
					if(popupConf.overlay && popupConf.overlay.type == 'color' && overlay){
						overlay.style.background = popupConf.overlay.color || 'rgba(0,0,0,0.6)';
					}
					if(popupConf.overlay && popupConf.overlay.type == 'combined'){
						var vgn = 100 - parseInt(popupConf.overlay.cfvignette);
						var bg = popupConf.overlay.ccolor;
						var bg2 = popupConf.overlay.c2color || 'black';
						var bgStr = bg + ' ' + vgn + '%, ' + bg2 + ' 100%';
						overlay.style.background = bg;
						overlay.style.background = '-webkit-radial-gradient(' + bgStr + ')';
						overlay.style.background = '-o-radial-gradient(' + bgStr + ')';
						overlay.style.background = '-moz-radial-gradient(' + bgStr + ')';
						overlay.style.background = '-webkit-radial-gradient(' + bgStr + ')';
					}
					popupDomination.center(popupConf.width, popupConf.height);
				}
				if(popupFrame){
					popupFrame.addEventListener('load', function(){
						overlay.style.transition = 'all 2s 0.5s ease-in-out';
						overlay.style.transition = 'background-color 1s ease';
						if(popupConf.overlay && popupConf.overlay.type == 'color'){
							overlay.style.background = popupConf.overlay.color || 'rgba(0,0,0,0.6)';
						}
						if(popupConf.overlay && popupConf.overlay.type == 'combined'){
							var vgn = 100 - parseInt(popupConf.overlay.cfvignette);
							var bg = popupConf.overlay.ccolor;
							var bg2 = popupConf.overlay.c2color || 'black';
							var bgStr = bg + ' ' + vgn + '%, ' + bg2 + ' 100%';
							overlay.style.background = bg;
							overlay.style.background = '-webkit-radial-gradient(' + bgStr + ')';
							overlay.style.background = '-o-radial-gradient(' + bgStr + ')';
							overlay.style.background = '-moz-radial-gradient(' + bgStr + ')';
							overlay.style.background = '-webkit-radial-gradient(' + bgStr + ')';
						}
						popupDomination.center(popupConf.width, popupConf.height);
					});
				}

				//remove overlay on click
				if(!popupConf.display.forced){
					closeButton && overlay.addEventListener('click', function(){popupDomination.closeAll(false)});
				}
				closeButton && closeButton.addEventListener('click', function(){popupDomination.closeAll(false)});
				if(popupFrame && popupConf.display.type == 'onleave'){
					popupFrame.style.visibility = 'visible';
				}
			}

		},

		createOverlay: function() {
			var overlay = doc.createElement('div');
			overlay.id = "pdv4overlay";
			overlay.className = 'pdv4overlays';
			overlay.style.position = 'fixed';
			overlay.style.top = 0;
			overlay.style.left = 0;
			overlay.style.right = 0;
			overlay.style.bottom = 0;
			overlay.style.background = 'rgba(0,0,0,0)';
			overlay.style.width = 'calc(100% + 40px)';
			overlay.style.height = 'calc(100% + 40px)';
			overlay.style.margin = '-20px';
			overlay.style.visibility = 'hidden';
			overlay.style['z-index'] = 99999997;

			return overlay;
		},

		createPopupWrapper: function() {
			var wrap = doc.getElementById('pd4wrap') || doc.createElement('div');
			wrap.id = 'pdv4wrap';
			return wrap;
		},

		createClose: function() {
			var close = doc.createElement('span');
			close.id = 'pdv4close';
			close.style.color = 'rgba(255,255,255,1)';
			close.style['font-size'] = '50px';
			close.style.display = 'none';
			close.style.position = 'fixed';
			close.style.top = '0';
			close.style['text-shadow'] = '0 0 3px rgba(0,0,0,0.9)';
			close.style['line-height'] = '1';
			close.style.right = '20px';
			close.style.cursor = 'pointer';
			close.innerHTML = '×';
			close.style['z-index'] = 99999999;
			close.style['font-family'] = 'Helvetica Neue, Helvetica, Arial, sans-serif';
			return close;
		},

		createPowered: function(){
			var pwd = doc.createElement('a');
			pwd.id = 'powered';
			pwd.href = popupConf.display.powered_link || 'http://popupdomination.com';
			pwd.target = "_blank";
			pwd.style.color = 'rgba(255,255,255,0.9)';
			pwd.style['text-shadow'] = '0 0 8px rgba(0,0,0,1)';
			pwd.style['font-size'] = '16px';
			pwd.style.display = 'none';
			pwd.style.position = 'fixed';
			pwd.style.bottom = '10px';
			pwd.style.padding = '5px 10px';
			pwd.style['line-height'] = '1';
			pwd.style.cursor = 'pointer';
			pwd.style['text-decoration'] = 'none';
			pwd.innerHTML = 'Powered by <span style="text-decoration: underline">PopUpDomination</span>';
			pwd.style['z-index'] = 99999998;
			pwd.style['font-family'] = 'Helvetica Neue, Helvetica, Arial, sans-serif';
			return pwd;
		},

		createPopup: function() {
			popupFrame = doc.createElement('iframe');
			popupFrame.id = popupConf.id;

			popupFrame.style.position = 'fixed';
			popupFrame.style.border = 0;
			popupFrame.style.outline = 0;
			//popupFrame.style.transition = 'all 1s ease-in-out';
			popupFrame.style['max-width'] = '100%';
			popupFrame.style['max-height'] = '100%';
			popupFrame.style.visibility = 'hidden';
			var popupUrl = typeof popupConf.abid != 'undefined' ? popupConf.url + '/' + popupConf.abid : popupConf.url;
			var parser = document.createElement('a');
			parser.href = window.location.href;
			var refererPath = encodeURIComponent(parser.hostname+"|||"+parser.pathname);
			popupFrame.src = popupUrl + '?referer=' + refererPath + "&type=" + popupConf.type;
			popupFrame.style.width = popupConf.width + 'px';
			popupFrame.style.height = + popupConf.height + 'px';

			popupFrame.style['z-index'] = 99999998;
			popupDomination.center(popupConf.width, popupConf.height);


			return popupFrame;
		},

		center: function(popupWidth, popupHeight) {
			var popupWidth = typeof popupWidth !== 'undefined' ? popupWidth : popupFrame.clientWidth;
			var popupHeight = typeof popupHeight !== 'undefined' ? popupHeight : popupFrame.clientHeight;
			//var style = getComputedStyle(popupFrame);

			//popupWidth += parseInt(style.marginLeft) + parseInt(style.marginRight);
			//popupHeight += parseInt(style.marginTop) + parseInt(style.marginBottom);

			var windowWidth = doc.body.clientWidth;
			var windowHeight = win.innerHeight;
			var popupLeftOffset = windowWidth / 2 - popupWidth / 2;
			var popupTopOffset = windowHeight / 2 - popupHeight / 2;
			//var popupTopOffset = 100;

			if(popupLeftOffset < 0){
				popupLeftOffset = 0;
			}
			if(popupTopOffset < 0){
				popupTopOffset = 0;
			}

			if(popupFrame){
				popupFrame.style.top = popupTopOffset + 'px';
				popupFrame.style.left = popupLeftOffset + 'px';
			}

			//popupFrame.style.transition = 'all 0.5s ease-in-out';
			//popupFrame.style['-webkit-transition'] = 'all 0.5s ease-in-out';
			//popupFrame.style['-moz-transition'] = 'all 0.5s ease-in-out';
			//popupFrame.style['-o-transition'] = 'all 0.5s ease-in-out';

			if(popupFrame && popupFrame.contentWindow){
					popupFrame.contentWindow.postMessage('pdresize', "*");
					var eventMethod = win.addEventListener ? "addEventListener" : "attachEvent";
					var eventer = win[eventMethod];
					var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
					// Listen to message from child window
					eventer(messageEvent,function(e) {
						try {
				      var pdData = JSON.parse(e.data);
							switch(pdData.type) {
								case 'pdclose':
									if(popupConf.redirect && popupConf.redirect.type=='redirect')
										window.location.href = popupConf.redirect.url;
									popupDomination.closeAll(false);
									break;
									case 'pdjustclose':
										popupDomination.closeAll(false);
										break;
								case 'pdcloseandsubmit':
									if(popupConf.redirect.yesnourl) {
										window.location.href = popupConf.redirect.yesnourl;
									}
									popupDomination.closeAll(true);
									break;
								case 'pdaryes':
									popupDomination.closeAll(true);
									break;
								case 'pdarno':
									if(popupConf.redirect.yesnourl) {
										window.location.href = popupConf.redirect.yesnourl;
									}
									popupDomination.closeAll();
									break;
								case 'pdresize':
									if(!pdDsply || popupConf.display.type == 'onclick'){
										pdDsply = true;
										popupFrame.style.visibility = 'visible';
										overlay.style.visibility = 'visible';
										closeButton.style.display = 'block';
										if(powered){
											powered.style.display = 'block';
										}
										visiblePopupFrame = popupFrame;
										if(popupConf.overlay.type == 'blur' || popupConf.overlay.type == 'combined'){
											var blurreds = document.querySelectorAll("body>:not(#pdv4wrap)");
											var blurAmount = popupConf.overlay.cfblur || 3;
											if(blurreds){
												for(var i=0; i<blurreds.length; i++){
													var blurred = blurreds[i];
													blurred.style['-webkit-filter'] = 'blur('+blurAmount+'px)';
													blurred.style['-moz-filter'] = 'blur('+blurAmount+'px)';
													blurred.style['-o-filter'] = 'blur('+blurAmount+'px)';
													blurred.style['-ms-filter'] = 'blur('+blurAmount+'px)';
													blurred.style['filter'] = 'blur('+blurAmount+'px)';
												}
											}
										}
									}
									if(visiblePopupFrame.style.height != pdData.value + 'px') {
										visiblePopupFrame.style.height = pdData.value + 'px';
										popupDomination.center(undefined, pdData.value);
									}
									break;
								case 'pdredirect':
									window.location.href = pdData.value;
								break;
								default:
								break;
							}
				    } catch (e) {
				      return false;
				    }
					},false);
			}
		},

		onResize: function(){
			popupDomination.center();
		},

		ifPopupShown: function(){
			if(doc.getElementsByClassName('pdv4overlays')){
				var popupVisible = false;
				var overlays = doc.getElementsByClassName('pdv4overlays');
				for(var i = 0; i < overlays.length; ++i){
					if(overlays[i].style.visibility == 'visible'){
						popupVisible = true;
					}
				}
				if(popupVisible){
					return true;
				}
			}
			return false;
		},

		detectMouseLeave: function(e){
			if(popupDomination.ifPopupShown()){
				return;
			}
			if (e.toElement == null && e.relatedTarget == null) {
				document.body.removeEventListener('mouseout', popupDomination.detectMouseLeave);
		    popupDomination.show();
		  }
		},

		detectScroll: function(){
			var height = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
			var scrollPerc = parseInt(popupConf.display.scrollPercent) / 100;
			var lowPosition = window.scrollY + document.documentElement.clientHeight;
			if(lowPosition / height >= scrollPerc){
				popupDomination.show();
				window.removeEventListener('scroll', popupDomination.detectScroll);
			}
		}

	};
	if(popupConf.display.type == 'onload') {
		var time = parseInt(popupConf.display.time) * 1000;
		setTimeout(popupDomination.show, time);
	}

	if(popupConf.display.type == 'onleave') {
		if(popupDomination.isMobileDevice()){
			var previousPosition = 0;

			var detectOnScrollUp = function(){
				var lowPosition = window.scrollY + document.documentElement.clientHeight;
				if(previousPosition > lowPosition){
					popupDomination.show(true);
					popupDomination.show();
					window.removeEventListener('scroll', detectOnScrollUp);
				}
				previousPosition = lowPosition;
			};

			window.addEventListener('scroll', detectOnScrollUp);
		} else {
			popupDomination.show(true);
			document.body.addEventListener('mouseout', popupDomination.detectMouseLeave);
		}
	}


	if(popupConf.display.type == 'onclick') {
		var cl = popupConf.display.class;
		var targets = doc.getElementsByClassName(cl);
		for(var i=0; i<targets.length; i++){
			targets[i].onclick = popupDomination.showClick;
		}
	}

	if(popupConf.display.type == 'onscroll') {
		window.addEventListener('scroll', popupDomination.detectScroll);
	}
};
var randomP = function(popupIdsWithWeight){
	var weights = [];
	for(var i=0; i<popupIdsWithWeight.length; ++i) {
		var p = popupIdsWithWeight[i];
		weights.push(p.weight/100);
	};
  var num = Math.random(),
      s = 0,
      lastIndex = weights.length - 1;

  for (var i = 0; i < lastIndex; ++i) {
      s += weights[i];
      if (num < s) {
          return popupIdsWithWeight[i];
      }
  }
  return popupIdsWithWeight[lastIndex];
};
for(var i=0; i<popupConfs.length; ++i) {
	kUtkQzmde(popupConfs[i]);
}
for(var i=0; i<abConfs.length; ++i) {
	var ab = abConfs[i];
	var p = randomP(ab.popups);
	kUtkQzmde(p);
}
