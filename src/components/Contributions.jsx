import collaborationBackground from '../assets/contribution-background.jpg'; // Import the background image

function Contributions() {
  return (
    <section
      className="py-10 px-4 sm:px-6 lg:px-8 text-center w-full relative bg-gray-900"
      style={{ backgroundImage: `url(${collaborationBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-gray-900 opacity-80 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6">Our Contributions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl">
          <div>
            <p className="text-4xl font-bold text-blue-400">6,350</p>
            <p>Volunteers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-400">6,042</p>
            <p>Trees Planted</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-400">85</p>
            <p>Special Camps</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-400">79</p>
            <p>NSS Units</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contributions;