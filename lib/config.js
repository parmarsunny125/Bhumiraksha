// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyD7xBJld2acyqxUdaZMS7tH0baWmz3zVQo',
    authDomain: 'bhumiraksha-2c8a5.firebaseapp.com',
    projectId: 'bhumiraksha-2c8a5',
    storageBucket: 'bhumiraksha-2c8a5.appspot.com',
    messagingSenderId: '322381479090',
    appId: '1:322381479090:web:5ce51fe8f18e3055281dab',
    measurementId: 'G-ZME9C9MG3V'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export { app }
