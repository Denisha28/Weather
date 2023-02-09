function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='dd4bc47d89ada73819a403aed4444120';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&unit=metric')
        .then(response=>response.json())
        .then(data=>{
            var t=data['main']['temp']
            document.getElementById("output").innerHTML=t;
        })
}