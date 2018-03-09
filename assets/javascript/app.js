var cartoonTitles = ['The Simpsons', 'Rugrats', 'Dexters Laboratory', 'Animaniacs', 'Futurama', 'South Park', 'Hey Arnold', 'Doug', 'Arthur', 'Rockos Modern Life', 'The Angry Beavers', 'Sailor Moon', 'Rocket Power'];
var currentGif; var pausedGif; var animatedGif; var stillGif;

function createButtons() {
    $('#cartoonButtons').empty();
    for(var i = 0; i < cartoonTitles.length; i++){
        var cartoonBtn = $('<button>').text(cartoonTitles[i]).addClass('cartoonBtn').attr({'data-name': cartoonTitles[i]});
        $('#cartoonButtons').append(cartoonBtn);
    }

    $('.cartoonBtn').on('click', function(){
        $('.display').empty();
        var thisShow = $(this).data('name');
        var giphyURL = "http://api.giphy.com/v1/gifs/search?q=cartoons&api_key=CTIpo3dzNWhgdTFPBKdW5z3SV3F7ce7q&limit=10";
        $.ajax({url: giphyURL, method: 'GET'}).done(function(giphy){
           currentGif = giphy.data;
           $.each(currentGif, function(index, value){
               animatedGif = value.images.original.url;
               pausedGif = value.images.original_still.url;
               var thisRating = value.rating;
               if(thisRating == ''){
                   thisRating = 'unrated';
               }
               var rating = $('<h5>').html('rated: '+thisRating).addClass('ratingStyle');
               stillGif = $('<img>').attr('data-animated', animatedGif).attr('data-paused', pausedGif).attr('src', pausedGif).addClass('playOnHover');
               var gifDisplay = $('<button>').append(rating, stillGif);
               $('.display').append(gifDisplay);
           });
        });
    });
}

$(document).on('mouseover','.playOnHover', function(){
    $(this).attr('src', $(this).data('animated'));
});
$(document).on('mouseleave','.playOnHover', function(){
    $(this).attr('src', $(this).data('paused'));
});

$('#showsAdded').on('click', function(){
var newShow = $('#newShowInput').val().trim();
cartoonTitles.push(newShow);
createButtons();
return false;
});

createButtons();