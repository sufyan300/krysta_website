import Image from "next/image";

export default function RegistrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-b from-[#f0f4ff] via-[#d9e6ff] to-[#0066ff] py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-800 mb-4">Product / State sales tax registrations</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Streamlined sales tax <br />
              registration
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              Before collecting sales tax, you must register for a sales tax permit. Krysta simplifies this process for
              paid plan users, saving you time to focus on your growing business.
            </p>
          </div>
        </div>
      </section>
       
       {/* Sales Tax Life Cycle Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gray-100 text-gray-700 text-sm py-2 px-4 rounded-full inline-block mb-4">
              Boost your productivity
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              KRYSTA automates the sales tax life cycle
            </h2>
            <p className="text-xl text-gray-700 text-center">
              Krysta simplifies sales tax compliance every step of the way. Here's how our platform works:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2">Connect your e-commerce or ERP platform</h3>
              <p className="text-gray-600">
                Prebuilt integrations with popular platforms quickly connect Krysta to your existing systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2">Determine economic nexus</h3>
              <p className="text-gray-600">
                Our Nexus Insights Dashboard and notifications help you stay ahead of your sales tax responsibilities by
                state.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2">Collect accurate sales tax at checkout</h3>
              <p className="text-gray-600">
                Our real-time calculation engine and sales tax API provides rooftop-level, product-specific sales tax.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2">Access sales tax reports</h3>
              <p className="text-gray-600">
                Our reporting dashboard compiles data from all your channels to give you the most up-to-date view of
                your transactions and tax liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Don't let sales tax registrations slow you down Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <Image
            src="../laptop.jpeg"
            alt="Krysta consultant"
            width={550}
            height={330}
            className="object-contain"
            style={{ marginBottom: 0, display: "block" }}
            priority
          />
      
            <div>
              <h2 className="text-4xl font-bold mb-6">Don't let sales tax registrations slow you down</h2>
              <p className="text-lg text-gray-700 mb-8">
                As your business expands, so do your sales tax obligations. Once you hit a nexus threshold, Krysta takes
                care of the registration process in each state, ensuring you're compliant. With each state having its
                own process, Krysta simplifies registration, allowing you to start collecting sales tax immediately,
                keeping your business compliant as it scales.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Krysta's sales tax registration service Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Krysta's sales tax registration service</h2>
              <p className="text-lg text-gray-700 mb-8">
                For $299 per state, Krysta handles sales tax registration where you've met nexus thresholds. We assist
                international companies with US-based bank accounts and an SSN or ITIN. Krysta supports third-party
                inventory nexus (e.g., Amazon FBA) but not other inventory or employee nexus. Registration support is
                available for Krysta paid plan users.
              </p>
            </div>
          
                  <Image
                    src="../laptop.jpeg"
                    alt="Krysta consultant"
                    width={550}
                    height={330}
                    className="object-contain"
                    style={{ marginBottom: 0, display: "block" }}
                    priority
                  />
              
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">How it Works</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto md:mx-0 mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Step one</h3>
              <p className="text-gray-700 mb-4">
                To get started, fill out this registration form within the Krysta app. You can use this form for all
                your state registrations. Here's the information you'll need to complete the registration form:
              </p>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>Prior year total sales</li>
                <li>Ownership information (most states require at least 80% ownership breakdown)</li>
                <li>Registration start date (date you reached nexus)</li>
                <li>Business details (address, Federal Employee Identification Number (FEIN), business name)</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto md:mx-0 mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Step two</h3>
              <p className="text-gray-700">
                Once you have completed the registration form, our team will reach out via email to confirm we have
                received your request. Then, we'll submit your registration to the state(s) within 30 days.
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto md:mx-0 mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Step three</h3>
              <p className="text-gray-700">
                After we submit your registration, the state will send you an email or letter confirming your
                registration is complete. Some states charge a registration fee and the fee will be handled during the
                registration process using the banking information you provided. Confirmation letters can be sent either
                by email or postal mail, depending on the state. If sent by postal mail, it could arrive within two to
                three weeks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
