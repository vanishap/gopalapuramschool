import React,{useState} from 'react';


const HomePage = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [profession, setProfession] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  
  
  const formHandler =(e)=>{
    e.preventDefault();
    setUsers([name,year,profession,message, ...users]);
    setName('');
    setYear('');
    setProfession('');
    setMessage('');
  };

  return (
    <div>
      <p>Welcome</p>
      <div>
        <form onSubmit={formHandler}>
          <div>
        <input type="text" 
        value={name}
        placeholder='Name'
        onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
        <input type="number" 
        value={year}
        placeholder='Year Studied'
        onChange={(e)=>setYear(e.target.value)}/>
        </div>
        <div>
          <input type="text" 
            placeholder='Profession'
            value= {profession}
            onChange={(e)=>setProfession(e.target.value)}/>
        </div>
        <div>
        <label>Add your experiences:
            <textarea placeholder='Share your experience here.' 
             cols="40" rows="4"
             value={message}
             onChange={(e)=>setMessage(e.target.value)}
             ></textarea>
          </label>
        </div>
        <div>
        <button type='submit'>Submit</button>
        </div>
        </form>
        {/** add a text area so that they can give some brief idea about their career  */}
      </div>   
      {users && users.map(user=>{
        return (
          <div>
        <p>{user}</p>
        </div>
        )
      })}   
    </div>
  )
}

export default HomePage;
