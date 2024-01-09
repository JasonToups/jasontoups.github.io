import React from 'react';
import Technology from './Technology';

const TechnologiesContainer = ({ data }) => {
  // I don't think this data needs to be desctructured.
  // const {
  //   image,
  //   imageAlt,
  //   imageUrl,
  //   title,
  //   imageTemp,
  //   company,
  //   job,
  //   tech,
  //   description,
  // } = data;

  return (
    <section className='technologies-container'>
      {data.map((item, index) => (
        <Technology data={(item, index)} />
      ))}
    </section>
  );
};

export default TechnologiesContainer;
