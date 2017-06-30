
    var accessToken = "79288ab2f5b740e2943622c1221e0ba6",
    baseUrl = "https://api.api.ai/v1/",
    $speechInput,
    $recBtn,
    recognition,
    messageRecording = "Recording...",
    messageCouldntHear = "I couldn't hear you, could you say that again?",
    messageInternalError = "Oh no, there has been an internal server error",
    messageSorry = "I'm sorry, I don't have the answer to that yet.";

    $speechInput.keypress(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    send();
       }
      });

    $recBtn.on("click", function(event) {
    switchRecognition();
      });

    $(".debug__btn").on("click", function() {
   $(this).next().toggleClass("is-active");
   return false;
   });