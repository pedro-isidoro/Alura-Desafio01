import { useState } from 'react'
import { Link } from 'react-router-dom';
import { addCoinsBackground } from '../toReal/App';

function MundialConverter() {
  const [value, setValue] = useState();
  const [coin, setCoin] = useState('');
  const [coin2, setCoin2] = useState('');

  const dollarToReal = (value * 4.91); 
  const dollarToEuro = (value * 0.93); 
  const dollarToPound = (value * 0.81); 
  const realToDollar = (value * 0.20); 
  const realToEuro = (value * 0.19); 
  const realToPound = (value * 0.17);
  const euroToReal = (value * 5.25); 
  const euroToDollar = (value * 1.07); 
  const euroToPound = (value * 0.87);
  const poundToEuro = (value * 1.15);
  const poundToReal = (value * 6.03); 
  const poundToDollar = (value * 1.23); 

  if(coin == 'Dolar' && coin2 == 'Real'){
    var valueTemperature = dollarToReal
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Dolar' && coin2 == 'Euro'){
    var valueTemperature = dollarToEuro
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Dolar' && coin2 == 'Libra'){
    var valueTemperature = dollarToPound
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Real' && coin2 == 'Dolar'){
    var valueTemperature = realToDollar
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Real' && coin2 == 'Euro'){
    var valueTemperature = realToEuro
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Real' && coin2 == 'Libra'){
    var valueTemperature = realToPound
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Euro' && coin2 == 'Real'){
    var valueTemperature = euroToReal
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Euro' && coin2 == 'Dolar'){
    var valueTemperature = euroToDollar
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Euro' && coin2 == 'Libra'){
    var valueTemperature = euroToPound
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Libra' && coin2 == 'Euro'){
    var valueTemperature = poundToEuro
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Libra' && coin2 == 'Real'){
    var valueTemperature = poundToReal
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else if(coin == 'Libra' && coin2 == 'Dolar'){
    var valueTemperature = poundToDollar
    .toFixed(2);
    var text = `O valor de ${value} em ${coin} é ${valueTemperature} em ${coin2}`;

  }else{
    var text = `Nome da moeda está errada!!`;
  }

  function addTextToP(){
    const paragraph = document.getElementById('paragraph');

    paragraph.innerHTML = text;
  }
  return (
    <div className='converter'>
        <h1 className='title'>Conversor de Dolar / Real / Euro / Libra</h1>
        <div className='input-div'>
            <input className='text' type="text" onChange={(e)=>{setValue(e.target.value)}} placeholder='Digite o valor'/>
            <input className='text' type="text" onChange={(e)=>{setCoin(e.target.value)}} placeholder='Nome da moeda'/>
            <input className='text' type="text" onChange={(e)=>{setCoin2(e.target.value)}} placeholder='Para qual moeda?'/>
        </div>
        <div className='paragraph-div'>
            <p className='paragraph' id='paragraph'></p>
        </div>
        <div className="links">    
          <button className='btn' onClick={addTextToP}>Resultado!</button>
          <Link className='btn-converter' onClick={addCoinsBackground} to='/'>1° Conversor</Link>
        </div>
    </div>
  )
}
  
export default MundialConverter