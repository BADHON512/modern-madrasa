import React from "react";

const GoogleMap = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="w-full h-[450px] overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.936013496994!2d90.00031907000711!3d23.86193252672621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755f7c5d0e34487%3A0x7c5eb08c9f83ea4d!2sDarul%20Ihsan%20Cadet%20Madrasah%20%26%20School!5e0!3m2!1sen!2sbd!4v1741800144726!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          className="border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
