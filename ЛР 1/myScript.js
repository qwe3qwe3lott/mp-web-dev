$(document).ready(function(){

});

function changePage(pageNum) {
    if (pageNum == 1) { var pageURL = 'one.html'; }
    if (pageNum == 2) { var pageURL = 'two.html'; }
    if (pageNum == 3) { var pageURL = 'three.html'; }
    window.location.href = pageURL;
}