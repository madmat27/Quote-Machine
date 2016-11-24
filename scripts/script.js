$(document).ready(function() {
  {
    $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(json) {
      author = json.quoteAuthor;
      text = "\"" + json.quoteText + "\"";
      $("#quote").html(text);
      $("#author").html(author);
      var bg = ["#581845", "#900C3F", "#C70039", "#FF5733", "black"];
      var rand = bg[Math.floor(Math.random() * bg.length)];
      $("div.quotebox").css("background-color", rand);
    });
  }

  var author = " ";
  var text = " ";
  $("#btnquote").on("click", function() {
    $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(json) {
      author = json.quoteAuthor;
      text = "\"" + json.quoteText + "\"";
      $("#quote").html(text);
      $("#author").html(author);
      var bg = ["#581845", "#900C3F", "#C70039", "#FF5733", "black"];
      var rand = bg[Math.floor(Math.random() * bg.length)];
      $("div.quotebox").css("background-color", rand);
    });
  });

  $("#twit-btn").on("click", function() {
    var copyright = "RandomQuoteMachine by @d4red3vil";
    var q = 'https://twitter.com/intent/tweet?text=' + text + ' ' + author + ' ' + copyright;
    window.open(q, 'twitter');
  });
})