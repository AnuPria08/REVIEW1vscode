import React,{useState} from 'react'


function Register() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
   
    const save = (e) => {
        e.preventDefault();
        const obj = {
            id,name,email,phone,address,pincode
        }
        fetch("http://localhost:8080/home",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(obj)}).then(console.log("Details Added Successful"));
    }

  
    return ( 
        <div className='container' style={{paddingTop:250}}>
       
        <center><div>
        
        <form id='form'>
        
        <h1>Registration form</h1>
        <div className='row'>
            <label>ID</label>
            <input type="text" value={id} onChange={(event) => setId(event.target.value)} placeholder='Type id here'/> 
        </div>
       
        <div className='row' >
            <label>Name</label>
            <input type="text"  value={name} onChange={(event) => setName(event.target.value)} placeholder='Type name  here'/> 
        
        </div>
       
        <div className='row' >
            <label>Email</label>
            <input type="text"  value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Type Your Email' /> 
        
        </div>
        <div className='row' >
            <label>Phone</label>
            <input type="text"  value={phone} onChange={(event) => setPhone(event.target.value)} placeholder='Type Phone  here' /> 
        
        </div>
        <div className='row' >
            <label>Address</label>
            <input type="email"  value={address} onChange={(event) => setAddress(event.target.value)} placeholder='Type address  here' /> 
        
        </div>
        <div className='row' style={{padding:10}}>
            <label>Pincode</label>
            <input type="text"  value={pincode} onChange={(event) => setPincode(event.target.value)} placeholder='Type pincode  here' /> 
        
        </div>
       
            <button className='btn btn-primary' onClick={save}>SUBMIT</button>
        
        
    </form>
    </div>
    </center>
    </div>
        
    
     );
}

export default Register;