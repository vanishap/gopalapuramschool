import React,{useState} from 'react';


const HomePage = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const nameHandler =(e)=>{
    setName(e.target.value);
  };

  const formHandler =(e)=>{
    e.preventDefault();
    if(!name) return;
    setUsers([name, ...users]);
    setName('');
  };

  return (
    <div>
      <p>Welcome</p>
      <div>
        <form onSubmit={formHandler}>
        <input type="text" 
        value={name}
        onChange={nameHandler}/>
        <button type='submit'>Add</button>
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
