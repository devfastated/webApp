const person = [
    `{
        "name": "Romer Jasen"
    }`
]

const obj = JSON.parse(person);


document.getElementById("app").innerHTML = "Hi " + obj.name;