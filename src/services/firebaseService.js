import { signInWithEmailAndPassword } from 'firebase/auth'
import { fetchFirestoreData } from '../utils/fetchFirestoreData.js'
import { auth } from '../configs/firebase.config.js'

export async function login(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log('user:', user)
    // return user
  } catch (error) {
    console.log('error:', error)
  }
}

export const getDataFromFirebase = async () => {
  try {
    //Đăng nhập vào Firebase
    await login('th.phan1408@gmail.com', '123456')

    // Lấy dữ liệu từ collection "users"
    const customersData = await fetchFirestoreData('Customers')
    // console.log('Data from "customers" collection:', customersData)

    // Lấy dữ liệu từ collection "products"
    const productsData = await fetchFirestoreData('Products')
    // console.log('Data from "products" collection:', productsData)

    // Lấy dữ liệu từ collection "Orders"
    const ordersData = await fetchFirestoreData('Orders')
    // console.log('Data from "orders" collection:', ordersData)

    // Xử lý dữ liệu nhận được từ Firestore
    return {
      customers: customersData,
      products: productsData,
      orders: ordersData,
    }
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error)
  }
}
