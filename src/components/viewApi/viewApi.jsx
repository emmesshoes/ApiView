import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, selectUserData } from '../../store/userSlice.js';
import axios from 'axios';

function RandomUserComponent() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      dispatch(setUserData(response.data.results[0]));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Random User Generator</h2>
      <button onClick={fetchRandomUser}>Generar Usuario</button>
      <div>
        {userData && (
          <div>
            <img src={userData.picture.large} alt="User" />
            <p>Nombre: {userData.name.first} {userData.name.last}</p>
            <p>Correo electrónico: {userData.email}</p>
            <p>Teléfono: {userData.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RandomUserComponent;
