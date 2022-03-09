const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  document.location.pathname("kolaci.html");
  Location.href("kolaci.html");

})

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

document.getElementById('check').addEventListener("click", () => {
  const logo = document.getElementById('logo');
  if (logo.classList.value.match('hide')) {
    logo.classList.remove('hide');
  } else {
    logo.classList.add('hide');
  }

})

$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });   
});






