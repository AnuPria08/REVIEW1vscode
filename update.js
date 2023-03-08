import React, { useState } from 'react';
// import './post.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
//import './put.css';

function Update1() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('')
 
  async function update(event) {
    event.preventDefault();
    try {
        await axios.put("http://localhost:8080/home",
            {

                id: id,
                name:name,
                email:email,
                phone:phone,
                address:address,
                pincode:pincode
            });
        alert("Successfully Update");
        setId();
        setName();
        setEmail();
        setPhone();
        setAddress();
        setPincode();


    }
    catch (err) {
        alert("update Failed");
    }
}

  return (
    <form id="form" >
      <h1>UPDATE FORM</h1>
      <label for="id">Id:</label>
      <br></br>
        <input className="input" type="text" value={id} onChange={(event) => setId(event.target.value)} />
        <br></br>
      <label for="name">Name : </label>
      <br></br>
        <input className="input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br></br>
      <label for="email">Email:</label>
      <br></br>
        <input className="input" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br></br>
      <label className="phone">Phone:</label>
      <br></br>
        <input className="input" type="number" value={phone} onChange={(event) => setPhone(event.target.value)} />
        <br></br>
      <label className="address">Address:</label>
      <br></br>
        <input className="input" type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        <br></br>
      <label className="pincode">Pincode</label>
      <br></br>
        <input className="input" type="text" value={pincode} onChange={(event) => setPincode(event.target.value)} />
        <br></br>
      <button className="btn btn success" type="submit" onClick={update}>Update</button>
    </form>
  );
}



function Update() {
  const [fit, setFit] = useState([]);

  function handleAddTelevision(fits) {
    setFit([...fit, fits]);
  }

  return (
    <div className='all'>
    <br/>
    <div className="container">
      {/* <h1 className="title">TELEVISION DETAILS</h1> */}
      <Update1 Form onAddTelevision={handleAddTelevision} />

    </div>
    <br/><br/>
    {/* <center>
    <Link to='/'>
                <button type="submit" class="btn btn-primary" style={{padding
                :'5px'}}
                >Back</button>
            </Link></center> */}
    </div>
    
  );
}

export default Update;