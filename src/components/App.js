import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ id: Date.now(), name: "", age: "" }]);

  const handleChange = (id, event) => {
    const { name, value } = event.target;
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [name]: value } : field
      )
    );
  };

  const addField = () => {
    setFields([...fields, { id: Date.now(), name: "", age: "" }]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedData = fields.map(({ id, ...rest }) => rest);
    console.log("Submitted Data:", submittedData);
  };
  
  return (
    <div>
      <h2>Dynamic Fields Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id}>
            <input 
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(field.id, e)}
              required
            />
            <input 
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(field.id, e)}
              required
            />
            <button type="button" onClick={() => removeField(field.id)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add Fields
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
