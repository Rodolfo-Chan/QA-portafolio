export default function Contact() {
  return (
    <section id="contact" className="py-12">
      {/* Título con animación */}
      <h2 className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="800">
        Get In Touch
      </h2>
      
      {/* Contenedor del formulario con animación */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
           data-aos="fade-up"
           data-aos-offset="150"
           data-aos-duration="600">
        
        {/* Formulario sin animaciones internas */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium dark:text-gray-100">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-qa-primary focus:border-transparent dark:bg-gray-700"
              required 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium dark:text-gray-100">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-qa-primary focus:border-transparent dark:bg-gray-700"
              required 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium dark:text-gray-100">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-qa-primary focus:border-transparent dark:bg-gray-700"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="block mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded dark:text-gray-100"
          >
            Send Message
          </button>
        </form>
        
        {/* Información de contacto sin animación */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">Contact Information</h3>
          <div className="space-y-3">
            <p className="flex items-center dark:text-gray-100">
              <svg className="w-5 h-5 mr-3 text-qa-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              rodolfochan2910@gmail.com
            </p>
            <p className="flex items-center dark:text-gray-100">
              <svg className="w-5 h-5 mr-3 text-qa-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +52 (986) 103-9171
            </p>
            <p className="flex items-center dark:text-gray-100">
              <svg className="w-5 h-5 mr-3 text-qa-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Tizimin,Yucatan
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}