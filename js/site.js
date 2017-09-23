console.log("loading site");
$( document ).ready(function() {
    $("#links a").hover(function (){
            console.log("loading function");
            $(this).css("text-decoration", "underline");
        },function(){
            $(this).css("text-decoration", "none");
        }
    );
});
