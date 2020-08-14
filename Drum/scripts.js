


function dokey1(e){
	fileName=e;
	audio = new Audio(`sounds/${fileName}.mp3`);
	audio.play();
}
function dokey(e){
	fileName=e;
	audio = new Audio(`sounds/${fileName}.wav`);
	audio.play();
}