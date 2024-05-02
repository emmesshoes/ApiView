
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { setUserData, selectUserData } from '../../store/userSlice.js';
import { useSelector } from 'react-redux';

function Imagen() {
    const userData = useSelector(selectUserData);
    
  return (
    <Container>
      <Image src={userData.picture.large} roundedCircle />  
    </Container>
  );
}

export default Imagen;