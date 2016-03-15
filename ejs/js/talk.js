//var talk2 = function(){
//    var synthes = new SpeechSynthesisUtterance();
//    var voices = speechSynthesis.getVoices();
//    voices.forEach(function(v, i){
//        //イタリア人風
//        if(v.name == 'Google Italiano') synthes.voice = v;
//    });
//    synthes.voiceURI = 'native';
//    synthes.volume = 1;
//    synthes.rate = 1;
//    synthes.pitch = 2;
//    synthes.text = 'No Programming, No Life';
//    synthes.lang = 'en-US';
//    speechSynthesis.speak(synthes);
//}
var audio = new Audio();
var talk = function(text){
    //var audio = document.createElement('audio');
    //audio.setAttribute('src', 'https://translate.google.com/translate_tts?tl=en&client=tw-ob&q=' + text);
    var param = "INPUT_TYPE=TEXT&OUTPUT_TYPE=AUDIO&INPUT_TEXT=" + encodeURIComponent(text) + "&HELP_TEXT=&exampleTexts=&VOICE_SELECTIONS=cmu-slt-hsmm%20en_US%20female%20hmm&AUDIO_OUT=WAVE_FILE&LOCALE=en_US&VOICE=cmu-slt-hsmm&AUDIO=WAVE_FILE"
    audio.src = "http://54.238.51.103:59125/process" + "?" + param;

    audio.addEventListener("ended",function(){
        $("#sign-talking").hide();
    });
    audio.load();
    $("#sign-talking").show();
    audio.play();
}