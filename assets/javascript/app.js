var cartoonTitles = ['The Simpsons', 'Rugrats', 'Dexters Laboratory', 'Animaniacs', 'Futurama', 'South Park', 'Hey Arnold', 'Doug', 'Arthur', 'Rockos Modern Life', 'The Angry Beavers', 'Sailor Moon', 'Rocket Power'];
var currentGif; var pausedGif; var animatedGif; var stillGif;

function createButtons() {
    $('#cartoonButtons').empty();
    for(var i = 0; i < cartoonTitles.length; i++){
        var cartoonBtn = $('<button>').text(cartoonTitles[i]).addClass('cartoonBtn').attr({'data-name': cartoonTitles[i]});
        $('#cartoonButtons').append(cartoonBtn);
    }
    
}