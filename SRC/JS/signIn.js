// Validate
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone')
const pass = document.getElementById('pass')
const cfpass = document.getElementById('cfpass')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkInputs()

})
// Kiểm tra tên người dùng 
function checkInputs() {
  const usernameVal = username.value.trim()
  const phoneVal = phoneNumber.value.trim()
  const emailVal = email.value.trim()
  const passVal = pass.value.trim()
  const cfpassVal = cfpass.value.trim()

  if (usernameVal === '') return setError(username, 'Username cannot be empty')
  else if (usernameVal.length < 8) return setError(username, 'Username must have at least 8 character')
  else { setSuccess(username) }

  if (emailVal === '') return setError(email, 'Enter Email')
  else if (!isEmail(emailVal)) return setError(email, 'PLease enter the correct Email format')
  else { setSuccess(email) }

  if (phoneVal === '') return setError(phoneNumber, 'Enter Phone Number')
  else if (!isPhone(phoneVal)) return setError(phoneNumber, 'PLease enter the correct Phone Number')
  else { setSuccess(phoneNumber) }

  if (passVal === '') return setError(pass, 'Enter Password')
  else if (passVal.length < 6) return setError(pass, 'Password must have more than 6 chracter')
  else { setSuccess(pass) }

  if (cfpassVal === '') return setError(cfpass, 'Re-enter Password')
  else if (passVal !== cfpassVal) return setError(cfpass, 'Password does not match, please re-enter Password')
  else { setSuccess(cfpass) }
}

function isPhone(phone) {
  const ph = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  return ph.test(phone)
}

function isEmail(email) {
  const em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return em.test(email);
}

// Thêm sự kiện khi bắt lỗi
function setError(input, message) {
  const inputControl = input.parentElement
  const small = inputControl.querySelector('small')
  inputControl.classList = 'input_control error'
  small.innerText = message
}
//Thêm sự kiện khi thành công
function setSuccess(input) {
  const inputControl = input.parentElement
  inputControl.className = 'input_control success'
}
