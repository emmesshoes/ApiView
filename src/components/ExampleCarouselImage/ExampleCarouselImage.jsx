import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Divider from '@mui/material/Divider';
import Imagen from './imagen';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/userSlice.js';
import './CardPeople.css'; // Importa tu archivo CSS

function CardPeople() {
    const userData = useSelector(selectUserData);
  
    return (
      <div>
        {userData && (
          <Card className="custom-card" style={{ width: '18rem' }}>
            <div className="image-container">
            <div className="divider"></div>
              {/* Utiliza el componente Imagen aquí */}
              <Imagen src={userData.picture.large} alt="User" roundedCircle />
              {/* Línea divisoria */}
              
            </div>
            <Card.Body>
              <Card.Title>{userData.name.first} {userData.name.last}</Card.Title>
              <Card.Text>
                Aca poner algo.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Correo electrónico: {userData.email}</ListGroup.Item>
              <ListGroup.Item>Teléfono: {userData.phone}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        )}
      </div>
      
    );
  }
  
  

export default CardPeople;
