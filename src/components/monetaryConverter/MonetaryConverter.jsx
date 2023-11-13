import { useState } from 'react'
import { Link } from 'react-router-dom';
import { addStarsBackground } from '../toReal/App';

function MonetaryConverter(){
    const [name, setName] = useState('');
    const [bitcoinValue, setValue] = useState('');
    const quotationBitcoin = 180344.03;
    var realValue = (quotationBitcoin * bitcoinValue)
    .toFixed(2);
    const sinopse = `Cotação do Bitcoin: ${quotationBitcoin}`;
    var text = `Olá ${name}! O valor ${bitcoinValue} corvertido é R$ ${realValue}`;

    function addTextToP(){
        const paragraph = document.getElementById('paragraph');

        paragraph.innerHTML = sinopse;
        paragraph.innerHTML = text;
    }

    return(
        <div className='converter'>
            <h1 className='title'>Conversor de Bitcoin para Real</h1>
            <div className='input-div'>
                <input className='text' type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Digite seu Nome'/>
                <input className='text' type="text" onChange={(e)=>{setValue(e.target.value)}} placeholder='Valor em Bitcoin'/>
            </div>
            <div className='paragraph-div'>
                <p className='paragraph' id='paragraph'></p>
            </div>
            <div className="links">
                <button className='btn' onClick={addTextToP}>Resultado!</button>
                <Link className='btn-converter' onClick={addStarsBackground} to='/metric-converter'>2° Conversor</Link>
            </div>
        </div>
    )
}

export default MonetaryConverter