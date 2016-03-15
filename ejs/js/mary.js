var talk = function () {

    var param = "INPUT_TYPE=TEXT&OUTPUT_TYPE=AUDIO&INPUT_TEXT=Well%20to%20the%20world%20of%20speech%20synthesis!%0A&HELP_TEXT=&exampleTexts=&VOICE_SELECTIONS=cmu-slt-hsmm%20en_US%20female%20hmm&AUDIO_OUT=WAVE_FILE&LOCALE=en_US&VOICE=cmu-slt-hsmm&AUDIO=WAVE_FILE"

    //doSubmit();
    var url = "process" + "?" + param;
    var audioDestination = document.getElementById("audioDestination");
    while (audioDestination.childNodes.length > 0) {
        audioDestination.removeChild(audioDestination.firstChild);
    }

    // Check whether <audio> tag is supported:
    var audioType = document.getElementById('AUDIO').value;
    var mimeType = 'audio/' + audioType.substring(0, audioType.indexOf('_')).toLowerCase();
    if (mimeType == 'audio/wave') {
        mimeType = "audio/wav"; // for some reason Chrome likes this better
    }
    var audioTag = document.createElement('audio');
    if (!audioTag.canPlayType || audioTag.canPlayType(mimeType) == "no" || audioTag.canPlayType(mimeType) == "") {
        alert("cannot use audio tag for " + mimeType);
    } else {
        audioDestination.innerHTML = '<audio src="' + url + '" autoplay controls>' + '</audio>';
    }


}
