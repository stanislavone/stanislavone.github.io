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

            break;
    }
})

