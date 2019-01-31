// Created by iWeb 3.0.4 local-build-20130129

setTransparentGifURL('Media/transparent.gif');

function hostedOnDM() {
	return false;
}

function onPageLoad() {
	loadMozillaCSS('files/russian_trainings_files/Kursy_Russkogo_Azyka_v_AlmatyMoz.css')
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