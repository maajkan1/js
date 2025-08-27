let totalKalori = 0;
let display = document.querySelector(".kallo");
let laggaPa = document.getElementById("kalori");
let form = document.getElementById("kalori-form");

display.innerHTML = "Nuvarande kalorier = " + totalKalori;
form.addEventListener("submit", raknaKalorier); 

function raknaKalorier(e) {
    e.preventDefault();
    let kalorier = Number(laggaPa.value);

    if (!isNaN(kalorier) && kalorier > 0 && kalorier < 2000) {
        totalKalori += kalorier;
        display.innerHTML = "Nuvarande kalorier = " + totalKalori;
    }
    else {
        alert("Saja boys");
    }
    laggaPa.value = "";
}

