import React, { useState } from "react";

const UserEntryForm = ({ saveUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      return;
    }
    saveUser(name, email)
    setName("");
    setEmail("");
  }
  return (
    <>
      <h2>User Entry Form</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserEntryForm;
