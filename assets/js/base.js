// *** We'll probably have to change some of the names
// Assumes interests elements have attributes: id="interest-__num__" class="interest"
// Assumes propaganda elements have attributes: id="prop-__num__" class="prop"


// Toggle listener
function toggleProp(selection) {

  // Identify which statement was clicked
  let num = selection.target.id[selection.target.id.length - 1]

  // Select corresponding propaganda element
  let propSelected = document.getElementById(`prop-${num}`)

  // Hide any prop elements that are already displayed
  let propList = document.getElementsByClassName('prop')
  
  for (p of propList) {
    if (p.style.display === 'block' && p.id != propSelected.id) {
      p.removeAttribute('style')
    }
  }

  // Toggle display for clicked element
  if (window.getComputedStyle(prop).getPropertyValue('display') === 'none') {
    propSelected.style.display = 'block'
  } else {
    propSelected.removeAttribute('style')
  }
}

// Add event listener for all interest elements
const interests = document.getElementsByClassName('interest')

for (let i of interests) {
  i.addEventListener('click', toggleProp);
}
