import React, { useState, useEffect } from 'react';
import axios from 'axios';



const apiKeyNasa = "5Szmghgym6a0yCVFI46q866b886dwSYL0TUQ60rF";

function APOD() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    fetchAPOD();
  }, []);

  const fetchAPOD = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      setApodData(response.data);
    } catch (error) {
      console.error('Error fetching APOD:', error);
    }
  };

  return (
    <div>
      <h2>Astronomy Picture of the Day (APOD)</h2>
      {apodData && (
        <div>
          <h3>{apodData.title}</h3>
          {apodData.media_type === 'image' ? (
            <img src={apodData.url} alt={apodData.title} />
          ) : (
            <iframe src={apodData.url} title={apodData.title} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
          )}
          <p>{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default APOD;




