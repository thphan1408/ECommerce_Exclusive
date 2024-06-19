import { getDataFromFirebase } from './src/services/firebaseService.js'
import { loadComponent } from './src/utils/loadComponent.js'
import { activeMenu, handleDropdown } from './src/utils/handleFunction.js'
import { route, handleLocation } from './src/routes/handleRoutes.js'

// Hàm gọi các component vào index.html và xử lý sự kiện sau khi load
const initComponents = async () => {
  await loadComponent(
    './src/components/header/header.html',
    'top-header-container',
  )
  handleDropdown()

  await loadComponent(
    './src/components/navigation/navigation.html',
    'navigation-container',
  )
  activeMenu()

  await loadComponent('./src/components/footer/footer.html', 'footer-container')
}

// Hàm để lấy dữ liệu từ Firestore và xử lý dữ liệu sau khi lấy được
const fetchData = async () => {
  try {
    const data = await getDataFromFirebase()
    console.log('Data from Firebase:', data)
    // Sử dụng dữ liệu lấy được (nếu cần)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Khởi tạo các component và lấy dữ liệu
initComponents()
fetchData()

// Thiết lập routing
window.onpopstate = handleLocation
window.route = route
handleLocation()
