import { route } from '../routes/handleRoutes.js'


function handleDropdown() {
  const languageButton = document.getElementById('language-button')
  const dropdownMenu = document.getElementById('dropdown-menu')

  if (languageButton && dropdownMenu) {
    languageButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('open')
    })

    document.addEventListener('click', (event) => {
      if (
        !languageButton.contains(event.target) &&
        !dropdownMenu.contains(event.target)
      ) {
        dropdownMenu.classList.remove('open')
      }
    })

    dropdownMenu.querySelectorAll('li').forEach((item) => {
      item.addEventListener('click', (event) => {
        languageButton.querySelector('span').innerText = event.target.innerText
        dropdownMenu.classList.remove('open')
      })
    })
  }
}

// function active (element)
function activeMenu() {
  const menuItems = document.querySelectorAll('.menu-header .menu-item')

  menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      route(event)
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
}
// end function active (element)

export { handleDropdown, activeMenu }
