console.log("loading site");
$( document ).ready(function() {
    $("#links a").hover(function (){
            $(this).css("text-decoration", "underline");
        },function(){
            $(this).css("text-decoration", "none");
        }
    );

    window.sr = ScrollReveal({ reset: true });
    sr.reveal('#header', { duration: 400 },100);
    sr.reveal('#about', { duration: 400 },100);
    sr.reveal('#sounds', { duration: 400 },100);
    sr.reveal('#cooking', { duration: 400 },100);
    sr.reveal('#fitness', { duration: 400 },100);

    $(".scroll").on('click', function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
    });
});
