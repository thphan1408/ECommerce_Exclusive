const urlPageTitlle = 'E-commerce Exlusive'

// function handle routing URL and render page content
const routes = {
  404: {
    page: '/src/pages/notFound/notFound.html',
    title: '404 |' + urlPageTitlle,
    description: 'Page not found',
  },
  '/': {
    page: '/src/pages/home/home.html',
    title: 'Home | ' + urlPageTitlle,
    description: 'Home page',
  },
  '/contact': {
    page: '/src/pages/contact/contact.html',
    title: 'Contact | ' + urlPageTitlle,
    description: 'Contact page',
  },
  '/about': {
    page: '/src/pages/about/about.html',
    title: 'About | ' + urlPageTitlle,
    description: 'About page',
  },
  '/signUp': {
    page: '/src/pages/signUp/signUp.html',
    title: 'Sign Up | ' + urlPageTitlle,
    description: 'Sign Up page',
  },
  '/wishlist': {
    page: '/src/pages/wishlist/wishlist.html',
    title: 'Wishlist | ' + urlPageTitlle,
    description: 'Wishlist page',
  },
  '/cart': {
    page: '/src/pages/cart/cart.html',
    title: 'Cart | ' + urlPageTitlle,
    description: 'Cart page',
  },
}

const route = (event) => {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({}, '', event.target.href)
  handleLocation()
}

const handleLocation = async () => {
  const location = window.location.pathname

  const route = routes[location] || routes['404']
  const html = await fetch(route.page).then((response) => response.text())

  document.getElementById('app-container').innerHTML = html
  document.title = route.title
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', route.description)
}
// end function handle routing

export { route, handleLocation }
