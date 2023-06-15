import React, {useState} from 'react';

const FullDetailsForm = () => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [year, setYear] = useState('');

    const nameHandler = (e)=>{
        setName(e.target.value)
    };
    const professionHandler = (e)=>{
        setProfession(e.target.value)
    };
    const yearHandler = (e)=>{
        setYear(e.target.value)
    };
  return (
    <div>
      <form >
        <div>
            <label htmlFor="">Full Name:</label>
            <input type="text" 
            required
            placeholder='Enter Full Name'
            value= {name}
            onChange={nameHandler}/>
        </div>
        <div>
            <label htmlFor="">Profession:</label>
            <input type="text" 
            required
            placeholder='Enter your Profession'
            value= {profession}
            onChange={professionHandler}/>
        </div>
        <div>
            <label htmlFor="">Year of Study:</label>
            <input type="date" 
            required
            placeholder='Enter Year'
            value= {year}
            onChange={yearHandler}/>
        </div>
        {/* <div>
            <label htmlFor="">Full Name:</label>
            <input type="text" 
            required
            placeholder='Enter Full Name'
            value= {name}
            onChange={nameHandler}/>
        </div>
        <div>
            <label htmlFor="">Full Name:</label>
            <input type="text" 
            required
            placeholder='Enter Full Name'
            value= {name}
            onChange={nameHandler}/>
        </div> */}
      </form>
      <div>
        <button type='submit'>Add</button>
      </div>
    </div>
  )
}

export default FullDetailsForm;
