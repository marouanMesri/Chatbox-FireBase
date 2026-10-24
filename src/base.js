import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "chatbox-app-cc430.firebaseapp.com",
    databaseURL: "https://chatbox-app-cc430.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base