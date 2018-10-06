document.querySelector('#submit').onclick = function (e) {
  let form_name = document.querySelector('#name').value;
  let form_email = document.querySelector('#email').value;
  window.localStorage.setItem("name", form_name);
  window.localStorage.setItem("email", form_email);
}