$(document).ready(function() {
   function search(input) {
     // Note: Using format=json and callback=? triggers
     // a JSONP response.
     var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&servedby=1&curtimestamp=1&redirects=resolve&search=' + input + '&callback=?';
     $.getJSON(wikiUrl, wikiCallback);
   }
  
  var wikiCallback = function(json) {
    $('#result').empty(); // Clear out existing elements
      _.forEach(_.zip(json[1], json[2], json[3]), function(triple) {
      var head = triple[0];
      var body = triple[1];
      var url = triple[2];
      var html = '<div class="row result text-left">' +
            '<h3><a href="' + url + '" target="_blank">' + head + '</a></h3>' +
            '<div class="col-md-12">' + body + '</div></div>';
      $('#result').append(html);

    })
  }
  
  $("#searchForm").submit(function() {
      search($("#searchText").val());
      return false;
  });
})