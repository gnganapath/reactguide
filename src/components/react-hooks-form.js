import React, {useState} from 'react';


export default reactHooksForm = () =>{

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber ] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const [dob, setDob] = useState();
  const [gender, setGender] = useState("");

  const [ skillset, setSkillset ] = useState(
    {
      uiSkills: false,      
      apiService: false,
      devOps: false,
      uiSkillDetails:[],
    }
  )

  const[frontEnds, setFrontEnds] = useState(["React", "Angular"]);

  const handleChange = (e) =>{
    // the default radio button value gets default then later entry (i.e) radio button will give any string as value , 
    console.log(`${email}`, `${password}`,`${gender}`)
  }

  const onGenderChangeValue = (e) =>{
    setGender(e.target.value)
    console.log(e.target.value)
  }

  const simpleFormSubmit = (e) =>{
      e.preventDefault();
      console.log(`Full name -> ${firstName} ${lastName}`, `username -> ${username}`,`mobileNumber -> ${mobileNumber}`,`Email -> ${email}`, `Password -> ${password}`,`Gender -> ${gender}`,
      `dob -> ${dob}`, `gender -> ${gender}`, 'Skillset->', skillset );
  }
  return (
    <div className="App">
      <div> <h3>React Form Example</h3></div>
      <form onSubmit={simpleFormSubmit} onChange={handleChange}>
        <div className="form-control">
          <label>First Name</label>
          <input type="text" name="firstName"  onChange={e=>setFirstName(e.target.value)} />  
          </div>
        <div className="form-control">
          <label>Last Name</label>
          <input type="text" name="lastName"  onChange={e=>setLastName(e.target.value)} /> 
        </div>
        <div className="form-control">
          <label>Username</label>
          <input type="text" name="username"  onChange={e=>setUsername(e.target.value)} />   
        </div>
        <div className="form-control">
          <label>Mobile Number -  input type -Number</label>
          <input type="number" name="mobileNumber"  onChange={e=>setMobileNumber(e.target.value)} />   
        </div>
        <div className="form-control">
          <label>Email -  input type -email</label>
          <input type="email" name="email"  onChange={e=>setEmail(e.target.value)} />   
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" onChange={e=>setPassword(e.target.value)} />
        </div>
        <div className="form-control">
          <label>Re-type Password -  input type -password</label>
          <input type="password" name="repeatpassword" onChange={e=>setRepeatpassword(e.target.value)} />
        </div>

        <div className="form-control">
          <label>Date of Birth -  input type -Date</label>
          <input type="date" name="dob" onChange={e=>setDob(e.target.value)} />
        </div>        
        <div className="form-control" >
          <label>Gender - Radio group button</label>
          <div>
            <input type="radio" value="Male" name="gender" checked={gender === "Male"} onChange={onGenderChangeValue}/> Male
            <input type="radio" value="Female" name="gender" checked={gender === "Female"} onChange={onGenderChangeValue}/> Female
            <input type="radio" value="Other" name="gender" checked={gender === "Other"} onChange={onGenderChangeValue}/> Other
          </div>
        </div>
        <div className="form-control" >
          <label>Skill Set - Checkbox</label>          
            
            <div>
            <label>
              <input
                name="acceptedTerms"
                type="checkbox"
                onChange={e => setSkillset({uiskills: e.target.value})}
                required />UI/Front End:
              
            <select
              name="uiSkills"             
              onChange={e => setSkillset( {uiSkillDetails: e.target.value})}
              required multiple>
              <option key=""></option>
              {frontEnds.map(uiFrontend => (
                <option key={uiFrontend}>{uiFrontend}</option>
              ))}
            </select>
          </label>
          </div>
        </div>

        <div className="form-control">
          <label></label>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}