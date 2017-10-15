// *** We'll probably have to change some of the names
// Assumes interests elements have attributes: id="interest-__num__" class="interest"
// Assumes propaganda elements have attributes: id="prop-__num__" class="prop"


// Toggle listener
function toggleProp(selection) {

  // Identify which statement was clicked
  let num = selection.target.id[selection.target.id.length - 1]

  // Select corresponding propaganda element
  let prop = document.getElementById(`prop-${num}`)

  // Toggle display for element
  if (prop.style.display === '' || prop.style.display === 'none') {
    prop.style.display = 'block'
  } else {
    prop.style.display = 'none'
  }
}

// Add event listener for all interest elements
const interests = document.getElementsByClassName('interest')

for (let elem of interests) {
  elem.addEventListener('click', toggleProp);
}
