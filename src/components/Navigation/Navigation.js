import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeIcon from '../../img/svg/resume.svg';
import ProfileIcon from '../../img/svg/profile.svg';

const Navigation = () => {
  const navigate = useNavigate();
  const [currentIcon, setCurrentIcon] = useState('defaultIcon.png'); // Set default icon

  const toggleRoutes = () => {
    const currentPath = window.location.pathname;

    if (currentPath === '/') {
      setCurrentIcon(ProfileIcon);
      navigate('/resume');
    } else {
      setCurrentIcon(ResumeIcon);
      navigate('/');
    }
  };

  return (
    <div className='navigation'>
      <img src={currentIcon} onClick={toggleRoutes}></img>
    </div>
  );
};

export default Navigation;
