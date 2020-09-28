import React, { useState, useRef } from 'react';
import RenderGuest from './renderGuest';
let idNumber = 0;
//hello world
// const LOCAL_STORAGE_KEY = 'todosApp.todos';

function App() {
  const [guestArray, setGuestArray] = useState([]);
  const FirstNameRef = useRef();
  const SecondNameRef = useRef();

  function handleAddGuest() {
    const firstName = FirstNameRef.current.value;
    const secondName = SecondNameRef.current.value;
    setGuestArray((newGuest) => {
      return [
        ...newGuest,
        {
          id: idNumber++,
          name: firstName,
          secondname: secondName,
          status: false,
        },
      ];
    });
  }
  function attending(id) {
    const newGuestArray = [...guestArray];
    const guest = newGuestArray.find((guest) => guest.id === id);
    guest.status = !guest.status;
    setGuestArray(newGuestArray);
  }

  return (
    <>
      <input ref={FirstNameRef} type="text" placeholder="First Name" />
      <input ref={SecondNameRef} type="text" placeholder="Second Name" />

      <button onClick={handleAddGuest}>Add Guest</button>
      <RenderGuest
        guestArray={guestArray}
        attending={attending}
        setGuestArray={setGuestArray}
      />
    </>
  );
}

export default App;
// useEffect(() => {
//   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if (storedTodos) setTodos(storedTodos);
// }, []);

// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
// }, [todos]);
