import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://management-system-a81dd-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const usersInDB = ref(database, "users")

const formSignUpEl = document.getElementById('form-sign-up')

formSignUpEl.addEventListener('submit', signUpUser)

function signUpUser(e) {
  e.preventDefault();
  const newUserFormData = new FormData(formSignUpEl)
  console.log(newUserFormData)
  const email = newUserFormData.get('email')
  const userName = newUserFormData.get('user-name')
  const password = newUserFormData.get('password')
  console.log(email, userName, password)
  const newUser = {
    email: email,
    userName: userName,
    password: password
  }
  push(usersInDB, newUser)

  formSignUpEl.reset()
}

