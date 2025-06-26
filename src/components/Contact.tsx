import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  // Example EmailJS recipe email template (for reference):
  // Subject: New Recipe Submission
  // Body: "Recipe Name: {{recipe_name}}\nIngredients: {{ingredients}}\nInstructions: {{instructions}}\nFrom: {{user_email}}"

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fromEmailField = form.current?.querySelector('input[name="from_email"]') as HTMLInputElement;
    if (fromEmailField) {
      fromEmailField.value = e.target.value;
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userNameField = form.current?.querySelector('input[name="user_name"]') as HTMLInputElement;
    if (userNameField) {
      userNameField.value = e.target.value;
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs.sendForm(
      'service_r77g6uq', // replace with your EmailJS service ID
      'template_8mtok6j', // replace with your EmailJS template ID
      form.current,
      'q3RoWKQusixcwHgIq' // replace with your EmailJS public key
    )
    .then(() => {
      alert('Mensaje enviado!');
      form.current?.reset();
    }, () => {
      alert('Error al enviar el mensaje.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-indigo-100 via-pink-50 to-white">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Contactame & Compra</h2>
        <form ref={form} onSubmit={sendEmail} className="bg-white rounded-2xl p-8 shadow-xl fade-in">
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="name">Nombre</label>
            <input name="user_name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" type="text" id="name" placeholder="Tu Nombre" required onChange={handleNameChange} />
            <input name="user_name" type="hidden" value="" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
            <input name="user_email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" type="email" id="email" placeholder="tu@email.com" required onChange={handleEmailChange} />
            <input name="from_email" type="hidden" value="" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold" htmlFor="message">Mensaje</label>
            <textarea name="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" id="message" rows={4} placeholder="Estas interesado en alguna pintura? Preguntame aqui!" required />
          </div>
          <button type="submit" className="w-full py-3 bg-pink-500 hover:bg-indigo-500 text-white font-bold rounded-lg transition">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 