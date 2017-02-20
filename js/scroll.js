(function () {

var isOneSignalRemoved = false;
var oneSignalPopOver = null;
function onseSignalScroll(y) {
    if (y > 600 && !isOneSignalRemoved) {
        oneSignalPopOver = document.getElementById('onesignal-popover-container');
        if (oneSignalPopOver) {
            oneSignalPopOver.parentNode.removeChild(oneSignalPopOver);
        }
        isOneSignalRemoved = true;
    }
}

var isMenuFixed = false;
function menuScroll(y) {
    if (y > 100 && !isMenuFixed) {
        document.body.classList.add('menu--fixed');
        isMenuFixed = true;
    }
    if (y < 100 && isMenuFixed) {
        document.body.classList.remove('menu--fixed');
        isMenuFixed = false;
    }
}

var isFirstSidebarFixed = false;
var firstSidebarLastBlockY = 9999999; // wait for ready
function firstSidebarScroll(y) {
    if (y > firstSidebarLastBlockY && !isFirstSidebarFixed) {
        document.body.classList.add('first-sidebar-block--fixed');
        isFirstSidebarFixed = true;
    }
    if (y < firstSidebarLastBlockY && isFirstSidebarFixed) {
        document.body.classList.remove('first-sidebar-block--fixed');
        isFirstSidebarFixed = false;
    }
}

var isSecondSidebarLastBlockFixed = false;
var secondSidebarLastBlockY = 9999999; // wait for ready
function secondSidebarScroll(y) {
    if (y > secondSidebarLastBlockY && !isSecondSidebarLastBlockFixed) {
        document.body.classList.add('second-sidebar-block--fixed');
        isSecondSidebarLastBlockFixed = true;
    }
    if (y < secondSidebarLastBlockY && isSecondSidebarLastBlockFixed) {
        document.body.classList.remove('second-sidebar-block--fixed');
        isSecondSidebarLastBlockFixed = false;
    }
}


window.addEventListener('scroll', function () {
    var y = window.scrollY;
    var menuH = 60;

    menuScroll(y);
    onseSignalScroll(y);
    firstSidebarScroll(y + menuH);
    secondSidebarScroll(y + menuH);
});

// ready
jQuery(function () {
    firstSidebarLastBlockY = jQuery('.region-sidebar-first .block:last-child').offset().top;
    secondSidebarLastBlockY = jQuery('.region-sidebar-second .block:last-child').offset().top;

});

}());