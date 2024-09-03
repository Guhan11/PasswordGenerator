import React, { useState } from 'react'
import './PasswordGenerator.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PasswordGenerator = () => {
  const [length, setLength] = useState('')
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState('')
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    toast.success('Password copied to clipboard!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      })
  }

  const handleKeyDown=(e)=>{
    if(e.key ==="Enter"){
        generatePassword()
    }
  }

  const generatePassword = () => {
    let charSet = ''
    if (includeUppercase) charSet += 'ABCDESFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) charSet += 'abcdefghijklmnopqrstuwxyz'
    if (includeNumbers) charSet += '1234567890'
    if (includeSymbols) charSet += '~!@#$%^&*()_+'
    let generatePassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length)
      generatePassword += charSet[randomIndex]
    }
    setPassword(generatePassword)

    toast.success('Password Generated Successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      })
  }

  return (
    <div className="password-generator">
      <h2>Strong Password Generator</h2>
      <div className="input-group">
        <label htmlFor="num">Password Length: </label>
        <input
          type="number"
          id="num"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="upper"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <label htmlFor="upper">Include Uppercase</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="lower"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        <label htmlFor="lower">Include Lowercase</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="numbers"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="symbols"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
      <button className="generate-btn" onClick={generatePassword} >
        Generate Password
      </button>
      <div className="generate-password">
        <input type="text" readOnly  value={password}/>
        <button className="copy-btn" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default PasswordGenerator
