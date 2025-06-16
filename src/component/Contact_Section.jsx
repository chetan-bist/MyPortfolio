 import emailjs from "@emailjs/browser";
import { useState } from "react";
export default function Contact_Section(){

  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


   const sendEmail = (e) => {
     e.preventDefault();

     //Your EmailJS service ID, template ID, and Public Key

     const serviceId = 'service_65hk9j9';
     const templateId = 'template_dxpbcdz';
     const publicKey = '3NlBi0pZj26ht55vL';

     // Create a new object that contains dynamic template params
     const templateParams = {
      from_name: name,
      from_email:email,
      to_name: 'Chetan Bist',
      message: message,
     };

     //Send the email using EmailJS
     emailjs.send(serviceId,templateId,templateParams,publicKey)
     .then((Response) =>{
      alert('Email sent Successfully !');
      setName('');
      setEmail('');
      setMessage('');
     })
     .catch((error) =>{
      alert('Error Sending email:');
     })


  //   emailjs
  //     .sendForm(
  //       "service_0n3trdl",
  //       "template_fz1i6rb",
  //       form.current,
  //       "x6D4SHKfKpY9YzWMS"
  //     )
  //     .then(
  //       (result) => {
  //         alert("Message sent successfully!");
  //       },
  //       (error) => {
  //         alert("Message failed to send.");
  //         console.log(error.text);
  //       }
  //     );

  //   e.target.reset();
   };
    return(
        <section id="contact" className="px-8 py-16 bg-[#f3f1ee] animate-fade-in">
        <h3 className="text-3xl font-semibold mb-6">Contact</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4 text-[#5d5a58]">
            <p className="flex items-center gap-2">
              <img src="https://img.icons8.com/ios-filled/24/000000/email.png" alt="email" className="w-5 h-5" />
              Email: chetan@example.com
            </p>
            <p className="flex items-center gap-2">
              <img src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" className="w-5 h-5" />
              GitHub: github.com/chetanbist
            </p>
            <p className="flex items-center gap-2">
              <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" className="w-5 h-5" />
              LinkedIn: linkedin.com/in/chetanbist
            </p>
          </div>
          <form  onSubmit={sendEmail} className="space-y-4">
            <input type="text" name="user_name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
            <input type="email" name="user_email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" required />
            <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32" required></textarea>
            <button type="submit" className="bg-[#151412] text-white px-4 py-2 rounded hover:bg-[#3b3a38]">
              Send Message
            </button>
          </form>
        </div>
      </section>
    )
}