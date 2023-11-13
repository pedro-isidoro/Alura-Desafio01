import { useState } from 'react'
import { Link } from 'react-router-dom';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState();
  const [unit, setUnit] = useState('');
  const [unit2, setUnit2] = useState('');


  const fahrenheitToCelsius = ((temperature - 32) * 5/9);
  const fahrenheitToKelvin = (((temperature - 32) * 5/9) + 273.15);
  
  const kelvinToFahrenheit = ((temperature - 273.15) * 9/5 + 32);
  const kelvinToCelsius = (temperature - 273.15);

  const celsiusToFahrenheit = (temperature * 9/5 + 32);
  const celsiusToKelvin = (temperature - 0 + 273.15); 

  if(unit == 'Fahrenheit' && unit2 == 'Celsius'){
    var valueTemperature = fahrenheitToCelsius
    .toFixed(2);
    var text = `A temperatura ${temperature} em ${unit} é ${valueTemperature} em ${unit2}`;

  }else if(unit == 'Fahrenheit' && unit2 == 'Kelvin'){
    var valueTemperature = fahrenheitToKelvin
    .toFixed(2);
    var text = `A temperatura ${temperature} em ${unit} é ${valueTemperature} em ${unit2}`;

  }else if(unit == 'Kelvin' && unit2 == 'Fahrenheit'){
    var valueTemperature = kelvinToFahrenheit
    .toFixed(2);
    var text = `A temperatura ${temperature} em ${unit} é ${valueTemperature} em ${unit2}`;

  }else if(unit == 'Kelvin' && unit2 == 'Celsius'){
    var valueTemperature = kelvinToCelsius
    .toFixed(2);
    var text = `A temperatura ${temperature} em ${unit} é ${valueTemperature} em ${unit2}`;

  }else if(unit == 'Celsius' && unit2 == 'Fahrenheit'){
    var valueTemperature = celsiusToFahrenheit
    var text = `A temperatura ${temperature} em ${unit} é ${valueTemperature} em ${unit2}`;

  }else if(unit == 'Celsius' && unit2 == 'Kelvin'){
    var valueTemperature = celsiusToKelvin
    var text = `A temperatura ${temperature} em ${unit} é ${valueTemperature} em ${unit2}`;

  }else{
    var text = `Unidade de medida da temperatura está errada!!`;
  }

  function addTextToP(){
    const paragraph = document.getElementById('paragraph');

    paragraph.innerHTML = text;
  }
  return (
    <div className='converter'>
        <h1 className='title'>Conversor de Fahrenheit / Celsius / Kelvin</h1>
        <div className='input-div'>
            <input className='text' type="text" onChange={(e)=>{setTemperature(e.target.value)}} placeholder='Qual a temperatura'/>
            <input className='text' type="text" onChange={(e)=>{setUnit(e.target.value)}} placeholder='Unidade de medida'/>
            <input className='text' type="text" onChange={(e)=>{setUnit2(e.target.value)}} placeholder='Para qual Unidade?'/>
        </div>
        <div className='paragraph-div'>
            <p className='paragraph' id='paragraph'></p>
        </div>
        <div className="links">    
          <button className='btn' onClick={addTextToP}>Resultado!</button>
          <Link className='btn-converter' to='/global-converter'>4° Conversor</Link>
        </div>
    </div>
  )
}
  
export default TemperatureConverter