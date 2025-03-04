import React, { useState } from "react";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const removeField = (index) => {
    if (fields.length > 1) {
      const updatedFields = fields.filter((_, i) => i !== index);
      setFields(updatedFields);
    }
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = [...fields];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", fields);
    alert("Form submitted! Check the console.");
  };

  return (
    <div className="container">
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
              required
            />
            {fields.length > 1 && (
              <button type="button" onClick={() => removeField(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addField}>Add More..</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
