import './App.css'
import {useState} from 'react';

function App () {
  const [weight,setWeight] = useState(0);
  const [bottles,setBottles] = useState(1);
  const [time,setTime] = useState(1)
  const [gender,setGender] = useState('male')
  const [result,setResult] = useState(0)

  function calculate(e){
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsl = grams - (burning * time)
    let promille = 0;
    if (gender === 'male'){
      promille = gramsl / (weight * 0.7)
    }
    else {
     promille = gramsl / (weight * 0.6)
    }
    if (promille <= 0){
      promille = 0}
    setResult(promille);
  }

  return (
    <div id="container"> 
      <h3>Calculating blood alcohol level</h3>

    <form onSubmit={calculate}>
    
      <div>
        <label>Weight</label>
        </div>
      <input type='number' step='1'
      value={weight} 
      onChange={e => setWeight(e.target.value)} />
      <div>
        <label>Bottles</label>
      </div>
      <select 
      value={bottles} 
      onChange={e => setBottles(e.target.value)}>
        <option value='1'> 1</option>
        <option value='2'> 2</option>
        <option value='3'> 3</option>
        <option value='4'> 4</option>
        <option value='5'> 5</option>
        <option value='6'> 6</option>
        <option value='7'> 7</option>
        <option value='8'> 8</option>
        <option value='9'> 9</option>
        <option value='10'> 10</option>
        <option value='11'> 11</option>
        <option value='12'> 12</option>
       

      </select>

      <div>
        <label>Time</label>
      </div>
      <select
      value={time} 
      onChange={e => setTime(e.target.value)}
      >
        <option value='1'> 1</option>
        <option value='2'> 2</option>
        <option value='3'> 3</option>
        <option value='4'> 4</option>
        <option value='5'> 5</option>
        <option value='6'> 6</option>
        <option value='7'> 7</option>
        <option value='8'> 8</option>
      </select>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" 
        defaultChecked onChange={e => setGender (e.target.value)}/>
        <label> Male</label>
        <input type="radio" name="gender" value="female"
        onChange={e => setGender(e.target.value)}/>
         <label>Female</label>
         </div>

      <div>
        <output>{result.toFixed(2)}</output>
      </div>
        <button> Calculate</button>
    </form>
    </div>
  )
}

export default App
