function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-300">
            We are a student-led organization at IIT Bombay dedicated to social impact and community development.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Blog</h3>
          <p className="text-gray-300">NSS IIT Bombay: Our Journey So Far - June 2025</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Have a Question?</h3>
          <p className="text-gray-300">NSS Office, IIT Bombay</p>
          <p className="text-gray-300">Phone: +91-9876543210</p>
          <p className="text-gray-300">Email: nss@iitb.ac.in</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <a href="#" className="text-gray-300 hover:text-blue-400">Twitter</a>
        <a href="#" className="text-gray-300 hover:text-blue-400">Instagram</a>
        <a href="#" className="text-gray-300 hover:text-blue-400">YouTube</a>
      </div>
      <p className="text-center text-gray-500 mt-6">© 2025 NSS IIT Bombay. All rights reserved.</p>
    </footer>
  );
}

export default Footer;