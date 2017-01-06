$(document).ready(function() {
  newQuote = function() {
    $.getJSON('http://quotes.stormconsultancy.co.uk/random.json', function(json) {
      $('#quote').html(json.quote);
      $('#author').html(json.author);
      $('#link').attr('href', json.permalink);
      $('#tweet').attr('href', "https://twitter.com/intent/tweet?text=%22" + truncateString(json.quote + ' - ' + json.author, 140) + "%22");
    })
    
  }
  
  $('#refresh').on('click', newQuote);
  newQuote();
})

function truncateString(str, num) {
  if (str.length <= num)
    return str;
  
  if (num>3) num = num - 3;
  return str.substr(0, num) + '...';
}
