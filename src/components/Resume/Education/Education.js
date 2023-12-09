import React from 'react';

const Education = ({ data }) => {
  const { school, degreeType, department } = data;
  return (
    <div className='resume-section'>
      <h2 id='education'>Education</h2>
      <p>
        <em>
          {school} / {degreeType} {department}
        </em>
      </p>
    </div>
  );
};

export default Education;
