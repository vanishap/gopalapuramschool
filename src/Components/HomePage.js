import React,{useState} from 'react';


const HomePage = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [profession, setProfession] = useState('');
  const [users, setUsers] = useState([]);

  
  
  const formHandler =(e)=>{
    e.preventDefault();
    setUsers([name,year,profession, ...users]);
    setName('');
    setYear('');
    setProfession('');
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
        <button type='submit'>Add</button>
        </div>
        </form>
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
