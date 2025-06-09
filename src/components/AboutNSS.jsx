import objectiveBackground from '../assets/objective-background.jpg';
import theemblemBackground from '../assets/theemblem-background.jpg';
import nssbadgeBackground from '../assets/nssbadge-background.jpg';

function AboutNSS() {
  return (
    <section className="py-16 text-center w-full bg-gray-900">
      {/* Wrapper with background, border, and spacing */}
      <div className="mx-5 sm:mx-6 lg:mx-8 bg-gray-800 border border-gray-600 rounded-3xl">
        {/* Content */}
        <div className="px-6 sm:px-8 lg:px-12 py-10">
          <h2 className="text-3xl font-bold mb-10 text-white">About NSS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl w-full">
            {/* Objective Card */}
            <div
              className="relative bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:border hover:border-blue-400 hover:shadow-blue-400/50 hover:text-blue-300"
              style={{
                backgroundImage: `url(${objectiveBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-80 rounded-lg"></div>
              <div className="relative z-5">
                <h3 className="text-3xl font-semibold mb-4 text-white">The Objective</h3>
                <p className="text-lg text-white">
                  The National Service Scheme (NSS) aims to develop the personality of students through community service. It encourages youth to engage in voluntary work that promotes social and civic responsibility, national integration, and community development. Through various activities, NSS helps students understand the needs of society, foster leadership and teamwork, and contribute to nation-building with the spirit of selfless service. Guided by the motto "Not Me, But You," NSS inspires students to work for the welfare of others and become responsible citizens.
                </p>
              </div>
            </div>

            {/* The Emblem Card */}
            <div
              className="relative bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:border hover:border-blue-400 hover:shadow-blue-400/50 hover:text-blue-300"
              style={{
                backgroundImage: `url(${theemblemBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-80 rounded-lg"></div>
              <div className="relative z-5">
                <h3 className="text-3xl font-semibold mb-4 text-white">The Emblem</h3>
                <p className="text-lg text-white">
                  The Symbol of the National Service Scheme, as appearing on the cover, is based on the 'Rath' wheel of the Konark Sun Temple of Orissa. These giant wheels of the Sun Temple portray the cycle of time, preservation, and release, and signify the movement in life across time and space. The wheel is the progressive cycle of life. It stands for continuity as well as change and implies on the part of NSS for continuous striving forward for social transformation and upliftment.
                </p>
              </div>
            </div>

            {/* NSS Badge Card */}
            <div
              className="relative bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:border hover:border-blue-400 hover:shadow-blue-400/50 hover:text-blue-300"
              style={{
                backgroundImage: `url(${nssbadgeBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-80 rounded-lg"></div>
              <div className="relative z-5">
                <h3 className="text-3xl font-semibold mb-4 text-white">NSS Badge</h3>
                <p className="text-lg text-white">
                  The NSS symbol is embossed on the NSS Badge. The N.S.S. volunteers wear it while undertaking various community programs of community service. There are 24 wheels in the 'Rath' of the Sun Temple of Konark. Each wheel has eight bars, which represents 8 pahars of a day. Hence, the badge reminds the wearer to be in readiness for service of the nation round the clock, i.e., for 24 hours. The RED colour in the badge indicates that the NSS volunteers are full of blood, i.e., lively, active, and spirited. The NAVY BLUE colour indicates the cosmos of which the NSS is a tiny part, ready to contribute its share for the welfare of mankind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutNSS;