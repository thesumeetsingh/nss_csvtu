function Testimonials() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
        <div className="bg-gray-800 p-6 rounded-lg">
          <img src="https://via.placeholder.com/50" alt="Profile" className="h-12 w-12 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Shubham Sharma</h3>
          <p className="text-gray-300">NSS has been a life-changing experience, teaching me the value of community service.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <img src="https://via.placeholder.com/50" alt="Profile" className="h-12 w-12 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Aarti Agarwal</h3>
          <p className="text-gray-300">Being part of NSS helped me develop leadership skills and a sense of responsibility.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <img src="https://via.placeholder.com/50" alt="Profile" className="h-12 w-12 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Rohan Patil</h3>
          <p className="text-gray-300">The initiatives by NSS inspired me to contribute to society in meaningful ways.</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;