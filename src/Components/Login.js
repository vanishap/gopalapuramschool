import React,{useState} from 'react';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const emailHandler = (e)=>{
        setEmail(e.target.value);
    };
    const passwordHandler = (e)=>{
        setPassword(e.target.value);
    };
    const formHandler = (e)=>{
        e.preventDefault();
        setEmail('');
        setPassword('');
    }
  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
            <label>Email:</label>
            <input type='email'
            value= {email}
            required
            onChange={emailHandler}
            />
        </div>
        <div>
            <label>Password:</label>
            <input type='password'
            value= {password}
            required
            onChange={passwordHandler}
            />
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
