$(document).on('scroll',function() {
    if($(document).scrollTop() > 80) {
        $('#page-top-link').html("AJ Holloway (Top)")
    }
    else {
        $('#page-top-link').html("AJ Holloway")
    }
})