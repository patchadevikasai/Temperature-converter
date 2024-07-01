function convertTemperaturetofahrenheit() {
    let celsius = document.getElementById("celsius").value; 
    let fahrenheitresult = document.getElementById("fahrenheitresult");
    if (celsius === "") 
    { 
        fahrenheitresult.textContent = ""; 
    } 
    else 
    {
        let fahrenheit = (celsius * 9 / 5) + 32; 
        fahrenheit =fahrenheit.toFixed(2); 
        fahrenheitresult.textContent ="Fahrenheit: " + fahrenheit;
    }
}
function convertTemperaturetocelsius()
{
   let fahrenheit=document.getElementById("fahrenheit").value;
   let celsiusresult=document.getElementById("celsiusresult");
   if(fahrenheit==="")
    {
        celsiusresult.textContent=" ";
    }
    else{
        let celsius=(fahrenheit-32)*5/9;
        celsius=celsius.toFixed(2);
        celsiusresult.textContent="Celsius:"+celsius;
    }
}