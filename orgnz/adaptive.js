$(document).ready(function() {
    let width = $(window).width();
    console.log(width);
    switch (width) {
        case 360:
            $(".item").width("330");
            break;
        case 411:
            $(".item").width("385");
            break;
        case 320:
            $(".item").width("292");
            break;
        case 375:
            $(".item").width("350");
            break;
        case 768:
            $(".item").width(762);
            break;
        default:
            $(".wrapper").css({
                "display": "flex",
                "justify-content": "center",
                "align-items": "flex-end",
                "flex-direction": "column",
                "width": "300px",
                "margin": "auto",
                "position": "static",
                "min-height": "100%",
                "background": "linear-gradient(305deg, rgba(164,97,204,.5) 0.0%, rgba(16,125,255,.36) 100.0%);",
            });
            $(".footer").width(300);
            $(".footer > input[type=text]").width(232);
            $(".item").width(270);
            $(".content").height("100%");
            $(".container-fluid").css("padding-right", "10px")
            break;
    }
})

