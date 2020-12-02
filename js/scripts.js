var leftEdge;
var refwidth;

function findDimensions() {
    
    leftEdge = $('blockquote').first().offset().left;
    refwidth = $('.source').first().outerWidth();
    placeAllNotes();
}

function placeAllNotes(){
    $('span.note-circle').each(function(){
        var noteid = $(this).attr('id');
        var refid = '#' + noteid + '-ref';
        var noteTop = $(this).offset().top;
        $(refid).css('top',noteTop);
        $(refid).css('left',leftEdge);
        $(refid).css('width',refwidth);
    });
};

// on load
findDimensions();

$(window).resize(function(){
    var windowWidth = $(window).width();
    if (windowWidth >= 1112) {
        findDimensions();
    }
});