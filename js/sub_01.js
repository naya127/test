$(function () {
    baloonUp();

    function baloonUp() {
        $('.airplane').animate({
            'top': 220
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.airplane').animate({
            'top': 200
        }, 700, null, baloonUp);
    }});