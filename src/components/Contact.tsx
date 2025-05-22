const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-to-t from-indigo-100 via-pink-50 to-white">
    <div className="max-w-xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Contact & Purchase</h2>
      <form className="bg-white rounded-2xl p-8 shadow-xl fade-in">
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" type="email" id="email" placeholder="you@email.com" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="message">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" id="message" rows={4} placeholder="Interested in a painting? Ask here!" />
        </div>
        <button type="submit" className="w-full py-3 bg-pink-500 hover:bg-indigo-500 text-white font-bold rounded-lg transition">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact; 