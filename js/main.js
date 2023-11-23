console.log("hello");


let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let degree = document.getElementById("degree");
let speed = document.getElementById("speed");
let iconfile;
let imgBox = document.getElementById("img-box");
//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const city = document.getElementById("city");
const btn = document.getElementById("btn");

btn.addEventListener("click" , () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=9da154a32c3c6656a2ec03d4a421c380`)
    .then((res) => res.json()).then((data) => {

        console.log(data);
     // Setting HTML here
     city.value = ""
     loc.innerHTML = data.name;
     tempvalue.innerHTML = Math.round(data.main.temp - 273.15);
     climate.innerHTML = data.weather[0].main;
     speed.innerHTML = data.wind.speed;
     degree.innerHTML=data.wind.deg;
     imgBox.innerHTML = `
     <div>
         <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
     </div>
 `   
    }) 
})

// function changeImage(){
//     var img = document.getElementById('image');
//     img.src= "./assests/css/images/cloud-sun.png";
// }

























// searchButton.addEventListener("click", ( ) => {
//     console.log(searchInput)
// })

// function content(){
//     let content = document.getElementById("tempicon") ;
//     
//  }






