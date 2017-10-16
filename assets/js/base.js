// *** We'll probably have to change some of the names
// Assumes interests elements have attributes: id="interest-__num__" class="interest"
// Assumes propaganda elements have attributes: id="prop-__num__" class="prop"


// Toggle listener
function toggleProp(selection) {

  // Identify which statement was clicked
  let num = selection.target.id[selection.target.id.length - 1]

  // Select corresponding propaganda element
  let prop = document.getElementById(`prop-${num}`)

  // Hide any prop elements that are already displayed
  let propList = document.getElementsByClassName('prop')
  for (p of propList) {
    if (p.style.display === 'block' && p.id != prop.id) {
      p.removeAttribute('style')
    }
  }

  // Toggle display for clicked element
  if (window.getComputedStyle(prop).getPropertyValue('display') === 'none') {
    prop.style.display = 'block'
  } else {
    prop.removeAttribute('style')
  }
}

// Add event listener for all interest elements
const interests = document.getElementsByClassName('interest')

for (let elem of interests) {
  elem.addEventListener('click', toggleProp);
}
