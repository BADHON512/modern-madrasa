import React from 'react'

type Props = {}

const GoogleMap = (props: Props) => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34966.93217029819!2d89.98298397244653!3d23.863951579933836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755f603f1698647%3A0x894c2f1900643eb6!2sManikganj!5e1!3m2!1sen!2sbd!4v1741718692730!5m2!1sen!2sbd" 
          width="100%" 
          height="550" 
          className="border-0 rounded-md" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  )
}

export default GoogleMap;
