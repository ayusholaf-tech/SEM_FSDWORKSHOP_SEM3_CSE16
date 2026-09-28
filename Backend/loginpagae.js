import axios from 'axios'
import { useState } from 'react'

const Usersignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:4001/create',
        formData
      )

      console.log(response.data)
      alert("Signup Successful!") ;
    } catch (error) {
      console.log(error)
      alert("Signup failed")
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div>
        <h2>User Sign Up</h2>

        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="id">User ID</label>
          <input
            id="id"
            name="id"
            type="text"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </div>
    </div>
  )
}

export default Usersignup