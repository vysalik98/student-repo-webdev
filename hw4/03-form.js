const myForm = document.querySelector(".form");

const names = ["Username", "Email", "Password", "Newsletter", "Date"];

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(myForm);
  const formValues = {};
  for (const [name, value] of formData.entries()) {
    formValues[name] = value;
  }

  if (!Object.values(formValues).some(Boolean)) {
    console.warn("You must enter some data to submit this form");
    return;
  } else {
    console.log("========= Form Submission =========");
    for (const name of names) {
      if (name !== "Password") {
        const value = formValues[name];
        if (!value) {
          console.log(`${name}: no submission`);
        } else {
          console.log(`${name}: ${value}`);
        }
      }
    }

    myForm.reset();
  }
});
