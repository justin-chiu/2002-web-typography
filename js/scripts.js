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

function unplaceAllNotes(){
    $('span.note-circle').each(function(){
        var noteid = $(this).attr('id');
        var refid = '#' + noteid + '-ref';
        // var noteTop = $(this).offset().top;
        $(refid).removeAttr('style');
    });
}

// on load
$(window).on('load',function(){
    var windowWidth = $(window).width();
    if (windowWidth >= 1112) {
        findDimensions();
    }
});

$(window).resize(function(){
    var windowWidth = $(window).width();
    if (windowWidth >= 1112) {
        findDimensions();
    }
    else if (windowWidth < 1112) {
        unplaceAllNotes();
    }
});

var translation = [
    {},
    {
        'original': '<em>Pues lo mismo nuestro tiempo es un cuerpo, <br>y &eacute;l es el espiritu del tiempo,<br>que gobierna cuanto hay en &eacute;l.</em>',
        'english': 'Because our time is in itself a body, <br>and that in turn is the spirit of time, <br>which governs all that is in it.'
    },
    {},
    {},
    {},
    {},
    {},
    {
        'original': '<em>Un h&eacute;ros ne s’engage nulle part! Il est tout le contraire d’un domestique</em>.',
        'english': 'A hero cannot be engaged anywhere! He is the opposite of a servant.'
    },
    {
        'original': '<em>Matisse me racontait un jour comment, jeune encore et d&eacute;sol&eacute; de ne pouvoir peindre comme tout le monde, il avait d&eacute;couvert avec ivresse, devant les Goya du Mus&eacute;e de Lille, que “la peinture pouvait &ecirc;tre un langage,” et m&ecirc;me qu’elle pouvait “n&ecirc;tre que cela.”</em>',
        'english': 'Matisse was telling me one day how, when he was still young and dismayed at his inability to paint like everybody else, he discovered with great excitement, while looking at the Goyas in the Musée de Lille, that ‘painting could be a language,’ and even that it could ”be nothing but that.”'
    }
];

var blockid;
var blocknumber;

$('blockquote.translation').hover(function(){
    blockid = $(this).attr('id');
    blocknumber = parseInt(blockid.replace('block-',''));
    var toEnglish = translation[blocknumber]['english'];
    $(this).find('.quote-text').html(toEnglish);
},
function(){
    var toOriginal = translation[blocknumber]['original'];''
    $(this).find('.quote-text').html(toOriginal); 
});

