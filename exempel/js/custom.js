$('body').on('mouseenter mouseleave', '.dropdown', function(e) {
    var _d = $(e.target).closest('.dropdown');
    _d.addClass('show-it');
    setTimeout(function() {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show-it');
    }, 100);
});

$(document).ready(function () {
    var links = $('.navbar ul li a');
    $.each(links, function (key, va) {
        if (va.href == document.URL) {
            $(this).addClass('active');
        }
    });
    document.title = document.getElementsByTagName("h1")[0].innerHTML;
});
