$(document).ready(function() {

  // chiamata ajax
  $.ajax(
  {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    "method": "GET",
    "success": function (data, stato) {
      var rispostaServer = data.response;
      console.log(data.response);

    },
    "error": function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
    }

  });

  function rispostaServer(){
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for(var i = 0; i < response.length; i++){

      var context = {
        "poster" : music.poster,
        "title" : music.title,
        "author" : music.author,
        "genre" : music.genre,
        "year" : music.year
      };

      var html = template(context);

      $(".cds-container").append(html);
    }
  };



});




// "poster": "https://images.pyramidshop.com/images/_popup/ACPPR48056.jpg",
// "title": "Live at Wembley 86",
// "author": "Queen",
// "genre": "Pop",
// // "year": "1992"
