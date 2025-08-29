let totalKalori = 0;
let display = document.querySelector(".kallo");
let addKalori = document.getElementById("kalori");
let form = document.getElementById("kalori-form");
let selectList = document.createElement("select")
selectList.id = "mySelect";
let selectListDiv = document.getElementById("select-list");

display.innerHTML = "Nuvarande kalorier = " + totalKalori;
form.addEventListener("submit", raknaKalorier);

function raknaKalorier(e) {
    e.preventDefault();
    let kalorier = Number(addKalori.value);

    if (!isNaN(kalorier) && kalorier > 0 && kalorier < 2000) {
        totalKalori += kalorier;
        display.innerHTML = "Nuvarande kalorier = " + totalKalori;
    }
    else {
        alert("Saja boys");
    }
    addKalori.value = "";
}
const displayMat = () => {
fetch('./meals_with_calories.json')
    .then(response => response.json())
    .then(data => data.forEach(data => 
    {
        let options = document.createElement("option")
        options.value = data.Kalorier;
        options.text = data.Namn + " (kcal: " + data.Kalorier + ")";
        selectList.appendChild(options);
        
    }
    ))  .catch(error => console.log('Error:' , error));
}
displayMat();

selectListDiv.appendChild(selectList);

selectList.addEventListener("change", function addKaloriViaSelectList() {
    let selectListValue = Number(selectList.value);
    totalKalori += selectListValue;

    display.innerHTML = "Nuvarande kalorier = " + totalKalori;
});

function resetTotalKalori(e) {
    e.preventDefault();

    totalKalori = 0;

    display.innerHTML = "Nuvarande kalorier = " + totalKalori;
}

let rensaKaloriTillNoll = document.getElementById("rensa")

rensaKaloriTillNoll.addEventListener("click", resetTotalKalori);

