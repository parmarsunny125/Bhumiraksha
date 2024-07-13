// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'add your google api key',
    authDomain: 'bhumiraksha-2c8a5.firebaseapp.com',
    projectId: 'bhumiraksha-2c8a5',
    storageBucket: 'bhumiraksha-2c8a5.appspot.com',
    messagingSenderId: '322381479090',
    appId: 'add your app id',
    measurementId: 'G-ZME9C9MG3V'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export { app }
