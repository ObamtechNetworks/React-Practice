import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //   function handleChange(event) {
  //     const value = event.target.value;
  //     setName(value);
  //   }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}
          type="text"
          value={name.firstName}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        />
        <button onClick={(event) => handleSubmit(event)}>Add</button>
      </form>
    </div>
  );
}
