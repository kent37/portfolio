$(document).ready(function() {
  count = function(s, c) {
    var re = new RegExp(c, 'g');
    var m = re[Symbol.match](s);
    return m==null ? 0 : m.length;
  }
  
  $('.button').click(function() {
    // Get the key code
    var key = $(this).attr('key');
    if (key == undefined)
      key = $(this).text();
    
    // Get the current text
    var text = $('.output span').text();
    
    // If it is already error, only clear is allowed
    if (text==='Error') {
      if (key==='b') key = 'C';
      if (key !== 'C')
        return;
    }
    // Handle keys
    if (key==='b')
      text = text.slice(0, -1);
    else if (key ==='=') {
      try {
        text = eval(text);
      }
      catch (e) { text = 'Error';}
    }
    else if (key==='C')
      text = '';
    else if (key==='.') {
      if (!/\./.test(text)) { // Only add one .
        text = text + key;
      }
    }
    else if (key===')') {
      if (count(text, '\\(') > count(text, '\\)'))
        text = text + ')';
    }
    else
        text = text + key;
    $('.output span').text(text);
  })
})