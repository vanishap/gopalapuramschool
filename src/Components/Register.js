import React,{useState} from 'react'

const Register = () => {
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName] = useState('');
    const [registrationCode, setRegistrationCode] = useState('');

    const firstNameHandler =(e)=>{
        setFirstName(e.target.value)
    };

    const lastNameHandler =(e)=>{
        setLastName(e.target.value)
    };

    const registrationcodeHandler =(e)=>{
        setRegistrationCode(e.target.value)
    };

    const submitForm =(e)=>{
        e.preventDefault();
    }
    
    return(
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>First Name:</label>
                    <input 
                    required
                    type='text'
                    value= {firstName}
                    onChange={firstNameHandler}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                    required
                    type='text'
                    value= {lastName}
                    onChange={lastNameHandler}/>
                </div>
                <div>
                    <label>Registration Code:</label>
                    <input 
                    required
                    type='text'
                    value= {registrationCode}
                    onChange={registrationcodeHandler}/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register;
