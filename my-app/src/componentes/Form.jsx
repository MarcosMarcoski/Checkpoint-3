import { useState } from "react";

export function Form() {
  const [value, setValue] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [submit, setSubmit] = useState(false);

  function handleOnCHange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function handlesubmit() {
    setSubmit(true);
  }

  return (
    <div>
      <input
        type="text"
        name="nombre"
        value={value.nombre}
        onChange={handleOnCHange}
      />
      <input
        type="text"
        name="apellido"
        value={value.apellido}
        onChange={handleOnCHange}
      />
      <input
        type="text"
        name="email"
        value={value.email}
        onChange={handleOnCHange}
      />
      <button onClick={handlesubmit}>submit</button>
      {submit === true && (
        <div>
          <h2>{value.nombre}</h2>
          <h2>{value.apellido}</h2>
          <h2>{value.email}</h2>
        </div>
      )}
    </div>
  );
}
