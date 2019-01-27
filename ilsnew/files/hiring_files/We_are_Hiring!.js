// Created by iWeb 3.0.4 local-build-20130201

setTransparentGifURL('Media/transparent.gif');

function hostedOnDM() {
	return false;
}

function onPageLoad() {
	loadMozillaCSS('files/hiring_files/We_are_Hiring!Moz.css')
	adjustLineHeightIfTooBig('id1');
	adjustFontSizeIfTooBig('id1');
	adjustLineHeightIfTooBig('id2');
	adjustFontSizeIfTooBig('id2');
	Widget.onload();
	fixAllIEPNGs('Media/transparent.gif');
	fixupIECSS3Opacity('id3');
	performPostEffectsFixups()
}

function onPageUnload() {
	Widget.onunload();
}