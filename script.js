

const button = document.querySelector(".button-89");
button.addEventListener('click',(e)=>{
    e.preventDefault();
    const place = document.getElementById("location").value;
    function updateTemp(data){
        const element=document.getElementById("result");
        element.innerHTML = `Today's Temperature: ${data.current.temp_c} in celcius`;
    }


    const apiWeather = fetch(
      `http://api.weatherapi.com/v1/current.json?key=93d44eb041e64aa9a8b121046252103&q=${place}&aqi=no`
    );
    apiWeather
      .then((response) => response.json())
      .then((data) => updateTemp(data));

});



    

