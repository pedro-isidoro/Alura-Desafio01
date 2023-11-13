import { useState } from 'react'
import { Link } from 'react-router-dom';
import { addStarsBackground, addFireBackground } from '../toReal/App';

function MetricConverter() {
  const [name, setName] = useState('');
  const [lightYearsValue, setValue] = useState('');
  const constant = 9.4607308e+15;
  var meterValue = (constant * lightYearsValue)
  .toFixed(2);
  var text = `Olá ${name}! O valor ${lightYearsValue} anos luz corvertido é ${meterValue}m`

  function addTextToP(){
    const paragraph = document.getElementById('paragraph');

    paragraph.innerHTML = text;
  };

  function background(){
    addStarsBackground();
    addFireBackground();
  }
  return (
    <div className='converter'>
        <h1 className='title'>Conversor de Anos-Luz para Metros</h1>
        <div className='input-div'>
            <input className='text' type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Digite seu Nome'/>
            <input className='text' type="text" onChange={(e)=>{setValue(e.target.value)}} placeholder='Valor em anos luz'/>
        </div>
        <div className='paragraph-div'>
            <p className='paragraph' id='paragraph'></p>
        </div>
        <div className="links">    
          <button className='btn' onClick={addTextToP}>Resultado!</button>
          <Link className='btn-converter' onClick={background} to='/temperature-converter'>3° Conversor</Link>
        </div>
    </div>
  )
}
  
export default MetricConverter