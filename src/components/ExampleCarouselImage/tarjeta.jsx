import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, selectUserData } from '../../store/userSlice.js';
import './Tarjeta.css'; // Estilos CSS para la card

function Tarjeta() {
    const userData = useSelector(selectUserData);
  return (
    <div className="card-container">
      <div className="circle-image-container">
        <div className="circle"></div> {/* Círculo que contendrá la imagen */}
        {userData && (
            <div>
            <img className="image" src={userData.picture.large} alt="Imagen" /> {/* Imagen circular */}
            </div>
        )}    
        <div className="line"></div> {/* Línea que pasa por el centro */}
      </div>
      <div className="line"></div> {/* Línea que pasa por el centro */}
      <div className="card-content">
        <h2>Título de la Card</h2>
        <p>Contenido de la card...</p>
      </div>
    </div>
  );
}

export default Tarjeta;
