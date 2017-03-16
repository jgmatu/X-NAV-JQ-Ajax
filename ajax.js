$ ( document ).ready (function() {
      $ ("div").hide();
      $ (" #nextArticle ").hide();

      request("fich.html");
      request("file.html");

      $ ( "#article " ).click(function() {
            request("article.html");
            $ ( this ).hide();
            $ ( "#nextArticle" ).show();
      });

      $ ( "#nextArticle" ).click(function(){
            request("nextArticle.html");
            $ (" #nextArticle ").hide();
      });
});

var request = function (uri) {
      var req = $.ajax({
            type : "GET",
            url : uri,
            cache : false
      })
      req.done(handData);
      req.fail(handError);
      req.always(handAlways);
}

var handData = function (data) {
      $(" #data ").show();
      $(" #data ").append(data);
}

var handError = function(jqXHR, textFail) {
      $(" #error ").show();
      $(" #error ").append("<p>" + jqXHR.responseText + "</p>");
}

var handAlways = function () {
      $ (" #info ").show();
      $ (" #info ").append("<p> Asyncronous get complete! </p>");
}
