import React, { useState } from "react";

function Admin({ onLogout }) {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, formData]);
    setFormData({ name: "", email: "", age: "" });
  };

  return (
    <div className="container">
      <h2>Admin Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Data List</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name}, {item.email}, {item.age}
          </li>
        ))}
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Admin;
