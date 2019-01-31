// Created by iWeb 3.0.4 local-build-20130201

setTransparentGifURL('Media/transparent.gif');

function hostedOnDM() {
	return false;
}

function onPageLoad() {
	loadMozillaCSS('files/tutoring_files/RepetitorstvoMoz.css')
	adjustLineHeightIfTooBig('id1');
	adjustFontSizeIfTooBig('id1');
	adjustLineHeightIfTooBig('id2');
	adjustFontSizeIfTooBig('id2');
	Widget.onload();
	performPostEffectsFixups()
}

function onPageUnload() {
	Widget.onunload();
}