// Created by iWeb 3.0.4 local-build-20130504

setTransparentGifURL('Media/transparent.gif');

function hostedOnDM() {
	return false;
}

function onPageLoad() {
	loadMozillaCSS('files/test_download_files/Skacaj_test_dla_opredelenia_tvoego_urovnaMoz.css')
	adjustLineHeightIfTooBig('id1');
	adjustFontSizeIfTooBig('id1');
	adjustLineHeightIfTooBig('id2');
	adjustFontSizeIfTooBig('id2');
	adjustLineHeightIfTooBig('id3');
	adjustFontSizeIfTooBig('id3');
	detectBrowser();
	Widget.onload();
	performPostEffectsFixups()
}

function onPageUnload() {
	Widget.onunload();
}