var display = document.querySelector('#display');

function showDisplay(value) {
  if (value == '.') {
    if (display.value == '' || display.value == 'underfined') {
      display.value = '0';
    } else {
      display.value += '0';
    }
  }

  display.value += value;
}


function clearAll() {
  display.value = '';
}


function result() {
  let y = eval(display.value);
  display.value = y

  if (display.value == 'undefined') {
    display.value = '';
  }
}