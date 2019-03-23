const array = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 194, 138, 5828, 18, 489, 2398, 981];
const total = array.length;
const per_page = 3;
const total_pages = Math.ceil(total/per_page);
let init = 0;
let limit = 3;
let p_array = [];
let $div = $('#msg');

function paginate(array, init, limit) {
  console.log(init, limit)
  p_array = array.slice(init, limit);
}

function verify_button_next() {
  p_array.length !== 3 ? (
    $('#next').attr('disabled', '')
  ) : (
    $('#next').removeAttr('disabled', '')  
  )
}

function next() {
  $div.empty();
  init += 3;
  limit += 3;
  paginate(array, init, limit)
  show();
  verify_button_next();
}
function previous() {
  $div.empty();
  init -= 3;
  limit -= 3;
  paginate(array, init, limit)
  show();
}

function show() {
  p_array.forEach((item, index) => {
    $div.append(`<div>${item}</div>`);
  });
}

next();
