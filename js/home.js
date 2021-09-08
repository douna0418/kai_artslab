$(document).ready(function(){
    $("#menu").click(function(e){
        $(".list").toggleClass('active');
    });

    $("li,ul").click(function(){
        $(".list").toggleClass('active');
    })

    // $("#about").click(function(){
    //     $("iframe").attr("src","about.html")
    // })
});
   
   
