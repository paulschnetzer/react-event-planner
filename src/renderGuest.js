import React from 'react';

export default function RenderGuest({ guestArray, attending, setGuestArray }) {
  return guestArray.map((guest) => {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={guest.status}
            onChange={() => attending(guest.id)}
          />

          {guest.name + ' ' + guest.secondname}
        </label>
        <button
          onClick={() => {
            const newGuestArray = [...guestArray];
            const arraydelete = newGuestArray.filter(
              (deletguest) => deletguest.id !== guest.id,
            );

            setGuestArray(arraydelete);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
}
