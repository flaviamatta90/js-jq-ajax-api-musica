$(document).ready(function() {

  // chiamata ajax
  $.ajax(
  {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    "method": "GET",
    "success": function (data, stato) {
      var response = data.response;
      rispostaServer(response);
      console.log(data.response);

    },
    "error": function (richiesta, stato, errori) {
      alert("E' avvenuto un errore." + errore);
    }

  });

// scegliere il genere di musica
  $(".genere").change(function() {
    var select = $(this).val();

    if(select == ""){
      $(".cd").show();

    }else {
      $(".cd").hide();
      $(".cd[data-genere='"+select+"']").show();
    }

  });

// template-handlebars
  function rispostaServer(server){

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for(var i = 0; i < server.length; i++){

      var album = server[i];

      var context = {
        "poster" : album.poster,
        "title" : album.title,
        "author" : album.author,
        "genre" : album.genre,
        "year" : album.year
      };

      var html = template(context);

      $(".cds-container").append(html);
    }
  };





  // $(document).on('change', '#genere', function() {
  //       var genre = $('#genere').val();
  //       console.log(genre);
  //       $('.cd').each(function(){
  //         if ($(this).find('#genere').text() == genre) {
  //           console.log($(this));
  //           console.log($(this).find('#genere').text());
  //           $(this).show();
  //         } else {
  //           $(this).hide();
  //         }
  //
  //       });
  //     });


});




// "poster": "https://images.pyramidshop.com/images/_popup/ACPPR48056.jpg",
// "title": "Live at Wembley 86",
// "author": "Queen",
// "genre": "Pop",
// // "year": "1992"
