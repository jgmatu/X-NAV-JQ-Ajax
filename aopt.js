$ ( document ).ready(function() {
      var i = 1;

      $( "p#click" + i).click(function(){
            request("op1.html");
      });

      var handData = function(data) {
            $("div#fill" + i).html(data);

            i = i + 1;
            $("p#click" + i).click(function(){
                  request("op" + i + ".html");
            })
      }

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

      var handError = function(jqXHR, text) {
            console.log(jqXHR.responseText);
      }

      var handAlways = function() {
            console.log("Get complete!");
      }
});
