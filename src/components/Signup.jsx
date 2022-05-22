import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase"

function Signup() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [name, setName] = useState("")
  let [loader, setLoader] = useState(false)
  let [error, setError] = useState("")
  let [user, setUser] = useState("")

  async function processSignup() {
    try {
      setLoader(true)
      let userCred = await createUserWithEmailAndPassword(auth, email, password)
      setUser(userCred.user)
    } catch (err) {
        setError(err.message)
        setTimeout(() => {
          setError("")
        }, 2000);
    }
    setLoader(false)
  }

  return (
    <>
      {
        error != "" ? <h1>Error is {error}</h1> :
          loader == true ? <h1>...Loading</h1> : 
            user != "" ? 
              <>
                <h1>Signed up User is {user.uid}</h1>
              </> :
                <>
                  <input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder='Email'></input>
                  <br></br>
                  <input type="password" onChange={(e) => {setPassword(e.target.value)}} value={password} placeholder='Password'></input>
                  <br></br>
                  <input type="text" onChange={(e) => {setName(e.target.value)}} value={name} placeholder='Full Name'></input>
                  <br></br>
                  <button type='click' onClick={processSignup}>Signup</button>
              </>
      }
    </>
  )
}

export default Signup