import React from 'react';

const Contact = () => (
  <section id="contact" className="p-8">
    <h2 className="text-2xl font-bold">Contact</h2>
    <form className="mt-4 space-y-4">
      <label className="block">
        Nom:
        <input type="text" name="name" className="mt-1 block w-full border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Email:
        <input type="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md" />
      </label>
      <label className="block">
        Message:
        <textarea name="message" className="mt-1 block w-full border-gray-300 rounded-md"></textarea>
      </label>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Envoyer</button>
    </form>
  </section>
);

export default Contact;
