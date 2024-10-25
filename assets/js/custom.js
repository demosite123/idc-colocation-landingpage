/**
 * Created by ToiLDA on 4/23/17.
 */

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


//$("#range").ionRangeSlider({
//    min: 1,
//    max: 5,
//    from: 3,
//    postfix: ' vCPU'
//});

//$("#range-ram").ionRangeSlider({
//    min: 1,
//    max: 5,
//    from: 3,
//    postfix: ' GB'
//});

//$("#sas-range").ionRangeSlider({
//    min: 100,
//    max: 800,
//    from: 500,
//    postfix: 'GB'
//});

//$("#ranger-1").ionRangeSlider({
//    min: 100,
//    max: 800,
//    from: 500,
//    postfix: 'GB'
//});

//$("#ranger-2").ionRangeSlider({
//    min: 100,
//    max: 800,
//    from: 500,
//    postfix: 'GB'
//});

//$("#range-network").ionRangeSlider({
//    min: 100,
//    max: 800,
//    from: 500,
//    postfix: 'GB'
//});