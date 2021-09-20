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
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsl = grams - (burning * time)
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
      </select>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked/><label> Male</label>
        <input type="radio" name="gender" value="female"/> <label>Female</label>
         </div>

      <div>
        <output>{result}</output>
      </div>
        <button> Calculate</button>
    </form>
    </div>
  )
}

export default App
