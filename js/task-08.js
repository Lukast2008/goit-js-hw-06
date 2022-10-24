const formRef = document.querySelector("form");

formRef.addEventListener("submit", onClick);

function onClick(event) {
  event.preventDefault();
  const valueMail = event.target.email.value.trim();
  const valuePassword = event.target.password.value.trim();

  if (valueMail === "" || valuePassword === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const personData = { email: valueMail, password: valuePassword };

    console.log(personData);
  }
  event.currentTarget.reset();
}
