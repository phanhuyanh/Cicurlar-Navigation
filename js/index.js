$(".icon-menu").click(function(e) {

    if($(".menu ul li:nth-child(1)").hasClass("first")){
        $(".menu ul li:nth-child(1)").removeClass("first");
        $(".menu ul li:nth-child(2)").removeClass("second");
        $(".menu ul li:nth-child(3)").removeClass("third");
        $(".menu ul li:nth-child(4)").removeClass("four");
        $(".menu ul li:nth-child(5)").removeClass("five");
        $(".bg-wrap").addClass("-visible");
    }
    else{
        $(".menu ul li:nth-child(1)").addClass("first");
        $(".menu ul li:nth-child(2)").addClass("second");
        $(".menu ul li:nth-child(3)").addClass("third");
        $(".menu ul li:nth-child(4)").addClass("four");
        $(".menu ul li:nth-child(5)").addClass("five");
        $(".bg-wrap").removeClass("-visible");
    }
});

$(".bg-wrap").click(function(e) {
    $(".menu ul li:nth-child(1)").addClass("first");
    $(".menu ul li:nth-child(2)").addClass("second");
    $(".menu ul li:nth-child(3)").addClass("third");
    $(".menu ul li:nth-child(4)").addClass("four");
    $(".menu ul li:nth-child(5)").addClass("five");
    $(".bg-wrap").removeClass("-visible");
})