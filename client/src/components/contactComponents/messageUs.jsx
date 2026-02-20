import { useState } from "react";

export default function MessageUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

    return (
      <div className="w-full max-w-lg mx-auto px-3 py-8 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
        
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          />
          
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 border border-gray-400 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-orange-300 text-white font-semibold py-3 rounded hover:bg-orange-400 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    );
}
