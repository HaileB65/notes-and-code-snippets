const formElement = document.getElementById("demo-form");

function handleSubmit(event){
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    console.log(formData);
    formData.forEach((key, value) => console.log(v, k));
}

formElement.addEventListener(`submit`, handleSubmit);

const nameInput = document.getElementById("name");
nameInput.addEventListener("input", validateName);

function validateName(e) {
    console.log(e);
    const value = e.target.value;
    if (value.match(/\d/)) {
        e.target.style.backgroundColor = "red";
    } else {
        e.target.style.backgroundColor = "";
    }
}

form.addEventListener(`change`, validateName);