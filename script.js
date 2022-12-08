let input = document.querySelector('#input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button = document.querySelector('#btn');
let country = document.querySelector('.country');


function Search(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  let tempValue = Math.floor(data['main']['temp'] -273.15);
  let nameValue = data['name'];
  let descValue = data['weather'][0]['description'];
  let countryValue = data['sys']['country'];

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;  
  temp.innerHTML = tempValue + "°C";
  country.innerHTML = countryValue;
  input.value ="";
})

.catch(err => alert("Name of the city not defined !"));
}