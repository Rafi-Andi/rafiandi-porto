const nameField = document.querySelector('#name')

const nameValue = sessionStorage.getItem('NAME_VALUE') || "There";

nameField.innerHTML = `${nameValue}`