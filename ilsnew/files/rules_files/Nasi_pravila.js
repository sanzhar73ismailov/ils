// Created by iWeb 3.0.4 local-build-20130508

setTransparentGifURL('Media/transparent.gif');

function hostedOnDM() {
	return false;
}

function onPageLoad() {
	loadMozillaCSS('files/rules_files/Nasi_pravilaMoz.css')
	adjustLineHeightIfTooBig('id1');
	adjustFontSizeIfTooBig('id1');
	adjustLineHeightIfTooBig('id2');
	adjustFontSizeIfTooBig('id2');
	detectBrowser();
	Widget.onload();
	fixupAllIEPNGBGs();
	fixAllIEPNGs('Media/transparent.gif');
	performPostEffectsFixups()
}

function onPageUnload() {
	Widget.onunload();
}