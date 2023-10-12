import React, { useState, useEffect } from 'react';

const images = [
  'https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/94883050_851456548689981_9083014373932269568_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=300f58&_nc_ohc=YB430lgUFgkAX8TUq8U&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfBSh5b_faTVtWp0eU3OTeWlWJMOMnXET4mV2Sfp6b5L_w&oe=654F41DC',
  'https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/91980618_833091190526517_7031975702622633984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=lwNs3xQ0ik8AX-0iv1D&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfDTuXMkFXcMei37ExfSsZL_qcmogpIBHu99ENVMchk7mw&oe=654F1002',
  'https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/101556732_872731119895857_2442933301535571968_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=8xPD3EqXu3YAX-ccMjO&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfA49wLLbvqVr7xrqWtOZKrp1dTSNrSgNFchwhtzRTiSxQ&oe=654F30CB',
  'https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/101950600_874533099715659_8740915976788246528_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=O7dvxGL2HfoAX-Dso3e&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfClGlNJWCVoZm1nDoKMWqIpU3NM2MAUEI4T48X-y1jskw&oe=654F3005',
];

const ServicesPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change the image every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="service-page">
      <h2>Our Services</h2>
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt="Service" />
      </div>
    </div>
  );
};

export default ServicesPage;
