import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../contexts/NavigationContext';
import ResumeIcon from '../../img/svg/resume.svg';
import ProfileIcon from '../../img/svg/profile.svg';

const Navigation = () => {
  const navigate = useNavigate();
  const { currentPath, setPath } = useNavigation();

  const toggleRoutes = () => {
    if (currentPath === '/') {
      setPath('/resume');
      navigate('/resume');
    } else {
      setPath('/');
      navigate('/');
    }
  };

  return (
    <div className='navigation'>
      <img
        src={currentPath === '/' ? ResumeIcon : ProfileIcon}
        alt='nav icon'
        onClick={toggleRoutes}
      ></img>
    </div>
  );
};

export default Navigation;
