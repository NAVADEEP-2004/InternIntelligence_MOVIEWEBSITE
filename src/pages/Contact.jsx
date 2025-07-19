import React from 'react';
const Contact = () => (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 rounded text-black" />
        <input type="email" placeholder="Your Email" className="w-full p-2 rounded text-black" />
        <textarea placeholder="Message" className="w-full p-2 rounded text-black"></textarea>
        <button type="submit" className="bg-yellow-500 px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
  
export default Contact;