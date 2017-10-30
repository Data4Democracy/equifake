/*
// Toggle listener
function toggleProp(selection) {
  // Identify which statement was clicked
  let num = selection.target.id[selection.target.id.length - 1]

  // Select corresponding propaganda element
  let propSelected = document.getElementById(`explanation-${num}`)

  // Hide any prop and interests elements that are already displayed or highlighted
  if (document.querySelector('.collapse-custom.on')) {
    let propCurrent = document.querySelector('.collapse.in')
    let interestCurrent = document.querySelector('.collapse-custom.on')
    propCurrent.classList.remove('in')
    interestCurrent.classList.remove('on')
  }

  // Display clicked interest and corresponding description
  propSelected.classList.add('in')
  selection.target.classList.add('on')
}


// Add event listener for all interest elements
const interests = document.getElementsByClassName('collapse-custom')


for (let i of interests) {
  i.addEventListener('click', toggleProp);
}
*/


$(function() {
  $('.collapse-custom').on('click', function(evt) {
    $('.collapse-custom').removeClass('on');
    $('.collapse').removeClass('in');
    $(this).addClass('on');

    $($(this).data('target')).addClass('in');
  });
});
