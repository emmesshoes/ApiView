import React, { useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      {/* Aquí puedes colocar tu JSX */}
    </div>
  );
}

export default MyComponent;
