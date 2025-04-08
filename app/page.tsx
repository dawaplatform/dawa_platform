import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <main className="w-full max-w-6xl px-6 py-16 flex flex-col items-center">
        {/* Header with logo */}
        <div className="w-full flex justify-center mb-16">
          <Image
            src="/logo.svg"
            alt="DAWA logo"
            width={250}
            height={120}
            priority
          />
        </div>

        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Welcome to <span className="text-[#ffa200]">DAWA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            The ultimate marketplace platform launching soon!
          </p>
        </div>

        {/* Countdown section */}
        <div className="w-full max-w-3xl bg-black text-white p-8 rounded-lg text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Official Launch
          </h2>
          <p className="text-xl md:text-2xl mb-2">
            Friday, 8th April 2025 at 3:00 PM
          </p>
          <p className="text-sm md:text-base opacity-75">
            Mark your calendar and be ready!
          </p>
        </div>

        {/* About DAWA section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#ffa200]">
              What is DAWA?
            </h3>
            <p className="text-gray-700 mb-4">
              DAWA is a comprehensive marketplace platform connecting buyers and sellers, 
              making it easy to buy, sell, and discover products and services in your area.
            </p>
            <p className="text-gray-700">
              Whether you're looking to sell your items or find great deals, DAWA 
              provides a seamless experience with powerful search capabilities and 
              user-friendly listings.
            </p>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#ffa200]">
              Platform Features
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Easy-to-use seller dashboard</li>
              <li>• Customizable listing options</li>
              <li>• Powerful search and filtering</li>
              <li>• Secure messaging between buyers and sellers</li>
              <li>• Premium subscription tiers for enhanced visibility</li>
              <li>• Mobile-friendly design for on-the-go access</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 bg-black text-white text-center">
        <p>© 2025 DAWA Platform. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Coming soon to connect buyers and sellers everywhere.
        </p>
      </footer>
    </div>
  );
}
