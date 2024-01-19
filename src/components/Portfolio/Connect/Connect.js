import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigation } from '../../../contexts/NavigationContext';
import ConnectIcon from './ConnectIcon';

const Connect = ({ data }) => {
  const navigate = useNavigate();
  const { setPath } = useNavigation();

  const handleResumeClick = () => {
    setPath('/resume');
    navigate('/resume');
  };

  return (
    <section id='connect' className='connect'>
      <div className='connect-header'>
        <img
          className='connect-image'
          src={data.header.source}
          alt={data.header.alt}
        />
      </div>
      <div className='section-container'>
        <div className='connect-background section-background'>
          <motion.img
            src={data.background.circle.source}
            alt={data.background.circle.alt}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        <div className='connect-content section-foreground'>
          <div className='connect-card-background glass-background'>
            <img
              className='profile-pic'
              src={data.profilePic.source}
              alt={data.profilePic.alt}
            />
            <div className='connect-card-foreground'>
              <div className='connect-card'>
                <h3>{data.subheader}</h3>
                <aside>{data.aside}</aside>
                <div className='connect-icons-container'>
                  {data.icons.map((icon, index) => (
                    <ConnectIcon key={index} data={icon} />
                  ))}
                </div>
                <button type={data.button.type} onClick={handleResumeClick}>
                  {data.button.text}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
