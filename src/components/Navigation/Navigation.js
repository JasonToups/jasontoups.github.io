import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeIcon from '../../img/svg/resume.svg';
import ProfileIcon from '../../img/svg/profile.svg';

const Navigation = () => {
  const navigate = useNavigate();
  const [currentIcon, setCurrentIcon] = useState(ResumeIcon); // Set default icon

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
      <img src={currentIcon} alt='nav icon' onClick={toggleRoutes}></img>
    </div>
  );
};

export default Navigation;
