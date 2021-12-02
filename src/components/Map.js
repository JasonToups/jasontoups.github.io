import React from 'react';

const Map = () => {

	return (
    <section className="map" id="map">
      <header className="header">
        <h2>Home</h2>
      </header>
      <iframe
        title="my hometown - Oakland, CA"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25220.862835352655!2d-122.28626548771012!3d37.79922890430395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80b44a06d98d%3A0x2198e9c945a8cf88!2sDowntown%20Oakland%2C%20Oakland%2C%20CA!5e0!3m2!1sen!2sus!4v1587523155833!5m2!1sen!2sus"
      ></iframe>
      <br />
      <small>
        <a
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25220.862835352655!2d-122.28626548771012!3d37.79922890430395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80b44a06d98d%3A0x2198e9c945a8cf88!2sDowntown%20Oakland%2C%20Oakland%2C%20CA!5e0!3m2!1sen!2sus!4v1587523155833!5m2!1sen!2sus"
        > </a>
      </small>
    </section>
	);
};

export default Map;
