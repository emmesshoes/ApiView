import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, selectUserData } from '../../store/userSlice.js';
import './estilos.css'; // Estilos CSS para la card

function formatDate(dateString) {
    // Crear un objeto Date a partir de la cadena de fecha
    const dateObj = new Date(dateString);

    // Obtener el día, mes y año del objeto Date
    const day = dateObj.getDate().toString().padStart(2, '0'); // Agregar un cero inicial si es necesario
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Los meses se indexan desde 0, por eso sumamos 1
    const year = dateObj.getFullYear();

    // Formatear la fecha en el formato deseado (dd/mm/aaaa)
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}


function Tarjeta2() {
    const [selectedUser, setSelectedUser] = useState(null);
    const dispatch = useDispatch();
    const userData = useSelector(selectUserData);

    const handleMouseOver = (event) => {
        const title = event.target.dataset.title;
        const info = event.target.dataset.value;
        document.getElementById('user_title').textContent = title;
        document.getElementById('user_info').textContent = info;
    };

    const fetchRandomUser = async () => {
        try {
          const response = await axios.get('https://randomuser.me/api/');
          dispatch(setUserData(response.data.results[0]));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    const handleRefreshClick = async () => {
       await fetchRandomUser();
    };
    
  return (
    
    <div className="card card-wide">
       
      <div className="details">
        <div className="user_photo horizontal_center" id="user_photo">
          <a href={() => {}} className="refresh" onClick={handleRefreshClick}>New</a>
          {userData && (
            <div>
            <img className="image" src={userData.picture.large} alt="Imagen" /> {/* Imagen circular */}
            </div>
        )}    
        </div>
        <p id="user_title"></p>
        <p id="user_info"></p>
      </div>
      {userData && (
      <ul className="values_list horizontal_center" id="values_list">
        <li onMouseOver={handleMouseOver} data-title={`Hi, My name is`} data-value={`${userData.name.first}  ${userData.name.last}`} data-label="name" className="active"></li>
        <li onMouseOver={handleMouseOver} data-title={`My email address is`} data-value={userData.email} data-label="email" data-caps="false"></li>
        <li onMouseOver={handleMouseOver} data-title={`My birthday is`} data-value={formatDate(userData.dob.date)} data-label="birthday"></li>
        <li onMouseOver={handleMouseOver} data-title={`My address is`} data-value={`${userData.location.street.name} ${userData.location.street.number}`} data-label="location"></li>
        <li onMouseOver={handleMouseOver} data-title={`My phone number is`} data-value={userData.cell} data-label="phone"></li>
        <li onMouseOver={handleMouseOver} data-title={`My password is`} data-value={userData.login.password} data-label="pass" data-caps="false"></li>
        </ul>
      )}  
    </div>
     
  );
}

export default Tarjeta2;
