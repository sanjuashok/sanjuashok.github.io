console.log("loading site");
$( document ).ready(function() {
    $("#links a").hover(function (){
            $(this).css("text-decoration", "underline");
        },function(){
            $(this).css("text-decoration", "none");
        }
    );

    window.sr = ScrollReveal({ reset: true });
    sr.reveal('#about', { duration: 400 });
    sr.reveal('#sounds', { duration: 400 });
    sr.reveal('#cooking', { duration: 400 });
    sr.reveal('#fitness', { duration: 400 });
});
