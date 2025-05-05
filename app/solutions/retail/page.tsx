import Image from "next/image";

export default function RetailSolutionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-b from-[#f0f4ff] via-[#d9e6ff] to-[#0066ff] min-h-[65vh] flex items-end overflow-hidden p-0">
        <div className="container mx-auto px-4 w-full h-full">
          <div className="flex flex-col md:flex-row items-end w-full min-h-[65vh] h-full">
            <div className="md:w-1/2 mb-8 md:mb-0 pt-32 pb-20">
              <div className="bg-white/10 text-black text-sm py-2 px-4 rounded-full inline-block mb-4">
                Solutions / Retail
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Sales Tax compliance <br />
                for multichannel <br />
                Retail
              </h1>
              <p className="text-xl text-gray-800 mb-8">
                Consolidate multichannel sales data into one solution that automates filings and remittances.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-md">contact sales</button>
            </div>
            <div className="md:w-1/2 flex justify-center items-end h-full m-0 p-0">
              <Image
                src="/retail.png"
                alt="Retail sales tax solution"
                width={500}
                height={700}
                className="object-contain object-bottom w-full max-w-[500px] h-full m-0 p-0"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrate all of your e-commerce channels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Krysta</h3>
                <h4 className="text-lg font-medium mb-4">Linked Partner Accounts</h4>
                <div className="border-b pb-4 mb-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="font-medium">Partner</div>
                    <div className="font-medium">Account ID</div>
                    <div className="font-medium">Transaction Range</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm mt-2">
                    <div>Amazon</div>
                    <div>acct_1F3jfd8Hf8fnf</div>
                    <div>08/29/2021 - 09/02/2021</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">Etsy</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">Stripe</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">Chargebee</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">PayPal</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">Shopify</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">Magento</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">Salesforce</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">Amazon</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">SquareSpace</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">Square</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">Walmart</div>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center text-xs">WooCommerce</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Integrate all of your e-commerce channels</h2>
              <p className="text-lg text-gray-700 mb-8">
                Krysta makes it easy to connect your sales channels and systems. Integrate with our suite of vetted
                e-commerce platforms, ERPs, marketplaces, and shopping carts directly from the Krysta dashboard.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                For custom needs, our technical team can help with integration.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Tested and certified for quality:</span> Krysta's integrations are
                    rigorously tested to meet the highest standards.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Seamless platform connections:</span> Connect with platforms like
                    Shopify, NetSuite, Salesforce, Amazon, and Squarespace.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Return-ready reports:</span> Krysta aggregates your transaction data and
                    sales tax to generate easy-to-read, return-ready reports.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Custom API integration:</span> Use the Krysta API to integrate with your
                    custom-built shopping cart or web sales solution.
                  </div>
                </li>
              </ul>
              <button className="mt-8 bg-black text-white px-6 py-3 rounded-md">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Scalable compliance for your busiest seasons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Scalable compliance for your busiest seasons</h2>
              <p className="text-lg text-gray-700 mb-6">
                Meeting customer demand across all channels is essential, especially during peak seasons like Black
                Friday or Cyber Monday.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With Krysta's fast, reliable API and sales tax engine, you'll never worry about inaccurate rates,
                checkout delays, or missed economic nexus obligations.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Reliability and high performance:</span> Krysta's API delivers sub-25ms
                    response times with 99.99% uptime, ensuring instant, accurate sales tax at checkout.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Tax liability tracking & alerts:</span> Our Economic Nexus Insights
                    dashboard notifies you when you're nearing nexus thresholds in new states.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Effortless filing across states:</span> Krysta AutoFile automatically
                    submits accurate returns to multiple states on time.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Security-first approach:</span> Compliant with GDPR, HIPAA, and SOC II,
                    we prioritize the protection of your data.
                  </div>
                </li>
              </ul>
              <button className="mt-8 bg-black text-white px-6 py-3 rounded-md">Get Started</button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Krysta</h3>
                <div className="flex space-x-4 mb-6">
                  <button className="px-4 py-2 bg-gray-100 rounded-md">Overview</button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Economic Nexus Insights</button>
                </div>
                <h4 className="text-2xl font-bold mb-4">Economic nexus insights</h4>
                <p className="mb-4">States with economic nexus (2)</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded mr-2"></div>
                      <h5 className="text-lg font-bold">Alabama</h5>
                    </div>
                    <p className="text-sm mb-2">The economic nexus requirement for sales was met in May 2021</p>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm">
                        <span>Sales: $425.3k of 250k</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">Transactions: N/A</div>
                    </div>
                    <button className="mt-4 px-4 py-1 bg-white border border-blue-500 text-blue-500 rounded-md text-sm">
                      Learn More
                    </button>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded mr-2"></div>
                      <h5 className="text-lg font-bold">North Carolina</h5>
                    </div>
                    <p className="text-sm mb-2">The economic nexus requirement for sales was met in June 2021</p>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm">
                        <span>Sales: $92.5k of $100k</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full w-[92%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>Transactions: 220 of 200</span>
                        <span>110%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <button className="mt-4 px-4 py-1 bg-white border border-blue-500 text-blue-500 rounded-md text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accurate sales tax for every product Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Accurate sales tax for every product in every channel</h2>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're selling apparel, furniture, or school supplies, misclassifying products can cause
                compliance issues.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Krysta monitors tax laws and rates, ensuring accurate sales tax calculations no matter where you sell.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Comprehensive product tax code coverage:</span> Assign the right tax
                    code to each product for accurate sales tax calculation.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Precise sales tax rates:</span> Our API applies rooftop-accurate rates
                    based on state, county, city, and district.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Ongoing monitoring of tax laws:</span> Our team ensures rates and tax
                    content are always up-to-date with the latest regulations.
                  </div>
                </li>
              </ul>
              <button className="mt-8 bg-black text-white px-6 py-3 rounded-md">Get Started</button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Krysta</h3>
                <h4 className="text-lg font-medium mb-4">Product Categorization & Exemptions</h4>

                <div className="mb-6">
                  <h5 className="text-xl font-bold mb-2">Athletic running shoes</h5>
                  <p className="text-gray-600 mb-4">
                    Shoes used for the primary purpose of athletic activities, including running, training, and more
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded mr-2"></div>
                      <h6 className="text-lg font-bold">Missouri</h6>
                    </div>
                    <p className="text-blue-800">Athletic running shoes are taxable</p>
                    <div className="flex items-center mt-2">
                      <svg
                        className="w-4 h-4 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <p>Product taxed at 0.8% rate</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-medium">Tax code</p>
                    <p>55111601A2200</p>
                  </div>

                  <div>
                    <p className="font-medium">Business-to-business (B2B)</p>
                    <div className="flex items-center mt-1">
                      <svg
                        className="w-4 h-4 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <p>Business-to-consumer (B2C)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Businesses Section */}
      <section className="py-20 bg-gradient-to-b from-[#f0f4ff] via-[#d9e6ff] to-[#0066ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-white/10 text-black text-sm py-2 px-4 rounded-full inline-block mb-4">
              Boost your productivity
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Businesses <br />
              of All Sizes
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              From startups to enterprises, businesses across industries rely on Krysta Compliance to stay tax-compliant
              without the headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Krysta Calculate</h3>
              <p className="text-sm">
                Accurate sales tax calculations Real-time rates across 14,000+ jurisdictions in the US, always current
                and always accurate.
              </p>
              <a href="#" className="inline-flex items-center mt-4 text-sm">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Integration ecosystem</h3>
              <p className="text-sm">
                Streamlined reporting Detailed reports organized by state, jurisdiction, and filing frequency to
                simplify your compliance.
              </p>
              <a href="#" className="inline-flex items-center mt-4 text-sm">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Krysta AutoFile</h3>
              <p className="text-sm">
                Automated filing service We prepare and submit your sales tax returns on time, every time.
              </p>
              <a href="#" className="inline-flex items-center mt-4 text-sm">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Secure data encryption</h3>
              <p className="text-sm">Ensure your data's safety with top-tier encryption.</p>
              <a href="#" className="inline-flex items-center mt-4 text-sm">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Tax Life Cycle Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Krysta automates the sales tax life cycle</h2>
            <p className="text-xl text-gray-700">
              Krysta simplifies sales tax compliance every step of the way. Here's how our platform works:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 relative">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  ></path>
                </svg>
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2">Connect your e-commerce or ERP platform</h3>
              <p className="text-gray-600">
                Prebuilt integrations with popular platforms quickly connect Krysta to your existing systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 relative">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
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
                <svg
                  className="w-10 h-10 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2">Collect accurate sales tax at checkout</h3>
              <p className="text-gray-600">
                Our real-time calculation engine and sales tax API provides rooftop-level, product-specific sales tax.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 relative">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
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
    </div>
  )
}
