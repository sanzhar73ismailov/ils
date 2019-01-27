// Created by iWeb 3.0.4 local-build-20130127

setTransparentGifURL('Media/transparent.gif');

function hostedOnDM() {
	return false;
}

function onPageLoad() {
	loadMozillaCSS('files/feedbacks_files/Otzyvy_o_nasMoz.css')
	adjustLineHeightIfTooBig('id1');
	adjustFontSizeIfTooBig('id1');
	detectBrowser();
	Widget.onload();
	performPostEffectsFixups()
}

function onPageUnload() {
	Widget.onunload();
}