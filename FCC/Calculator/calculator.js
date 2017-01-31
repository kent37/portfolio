$(document).ready(function() {
  $('.button').click(function() {
    var key = $(this).attr('key');
    if (key == undefined)
      key = $(this).text();
    var text = $('.output').text();
    if (key==='b')
      text = text.slice(0, -1);
    else if (key ==='=')
      text = eval(text);
    else if (key==='C')
      text = '';
    else
        text = text + key;
    $('.output').text(text);
  })
})