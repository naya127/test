$(function () {
    baloonUp();

    function baloonUp() {
        $('.airplane').animate({
            'top': 331
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.airplane').animate({
            'top': 300
        }, 700, null, baloonUp);
    }});

$(function () {
    baloonUp();

    function baloonUp() {
        $('.start_airplane').animate({
            'top': 20
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.start_airplane').animate({
            'top': 10
        }, 700, null, baloonUp);
    }});