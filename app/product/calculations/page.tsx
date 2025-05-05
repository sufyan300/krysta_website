import { Button } from "@/components/ui/button"

export default function CalculationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-b from-[#f0f4ff] via-[#d9e6ff] to-[#0066ff] py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-800 mb-4">Product / Sales Tax API</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get accurate sales tax <br />
              calculations in real time
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              Krysta's API delivers precise sales tax calculations in real time, handling tax law changes and ensuring
              seamless compliance.
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
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
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
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 14 2.5 2.5L16 10" />
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

      {/* Apply Sales Tax Instantly Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Apply sales tax instantly — at scale</h2>
              <p className="text-lg text-gray-700 mb-8">
                Krysta's sales tax API delivers lightning-fast performance, clocking in at sub-20ms with 99.99% uptime.
                This ensures your customers instantly receive accurate tax data at checkout. Our scalable sales tax API
                and calculation engines maintain exceptional speed and reliability, no matter the transaction volume, so
                you can handle high traffic without a hitch.
              </p>
            </div>
            <div className="bg-blue-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Krysta</h3>
                <div className="mb-4">
                  <div className="flex space-x-2 mb-4">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm">AutoFile</div>
                    <div className="text-sm"></div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Pause and AutoFile
                    </Button>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-xs">
                      Enroll new state
                    </Button>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-6 gap-2 text-sm font-medium mb-2">
                    <div>State</div>
                    <div>Frequency</div>
                    <div>Enrollment</div>
                    <div>Active period</div>
                    <div>Estimated due</div>
                    <div>Filing status</div>
                  </div>
                  {[
                    {
                      state: "Georgia",
                      frequency: "Monthly",
                      enrollment: "Active",
                      period: "April 2021",
                      amount: "$38.24",
                      status: "Ready To Schedule",
                    },
                    {
                      state: "Vermont",
                      frequency: "Monthly",
                      enrollment: "Active",
                      period: "April 2021",
                      amount: "$38.64",
                      status: "Ready To Schedule",
                    },
                    {
                      state: "Nevada",
                      frequency: "Monthly",
                      enrollment: "Active",
                      period: "April 2021",
                      amount: "$238.24",
                      status: "Ready To Schedule",
                    },
                    {
                      state: "New Jersey",
                      frequency: "Monthly",
                      enrollment: "Active",
                      period: "April 2021",
                      amount: "$98.22",
                      status: "Ready To Schedule",
                    },
                    {
                      state: "North Carolina",
                      frequency: "Monthly",
                      enrollment: "Pending",
                      period: "May 2021",
                      amount: "$38.24",
                      status: "Submitted",
                    },
                    {
                      state: "Kentucky",
                      frequency: "Monthly",
                      enrollment: "Submitted",
                      period: "",
                      amount: "",
                      status: "",
                    },
                  ].map((item, index) => (
                    <div key={index} className="grid grid-cols-6 gap-2 text-xs py-2 border-t">
                      <div>{item.state}</div>
                      <div>{item.frequency}</div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded-md ${
                            item.enrollment === "Active"
                              ? "bg-green-100 text-green-800"
                              : item.enrollment === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item.enrollment}
                        </span>
                      </div>
                      <div>{item.period}</div>
                      <div>{item.amount}</div>
                      <div className="flex items-center">
                        <span>{item.status}</span>
                        {item.status && (
                          <span className="ml-1 text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 16v-4" />
                              <path d="M12 8h.01" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stay on Top of Tax Changes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Krysta</h3>
                <div className="mb-4">
                  <div className="flex space-x-2 mb-4">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm">AutoFile</div>
                    <div className="text-sm"></div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Pause and AutoFile
                    </Button>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-xs">
                      Enroll new state
                    </Button>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-6 gap-2 text-sm font-medium mb-2">
                    <div>State</div>
                    <div>Frequency</div>
                    <div>Enrollment</div>
                    <div>Active period</div>
                    <div>Estimated due</div>
                    <div>Filing status</div>
                  </div>
                  {[
                    {
                      state: "Georgia",
                      frequency: "Monthly",
                      enrollment: "Active",
                      period: "April 2021",
                      amount: "$38.24",
                      status: "Ready To Schedule",
                    },
                    {
                      state: "Vermont",
                      frequency: "Monthly",
                      enrollment: "Active",
                      period: "April 2021",
                      amount: "$38.64",
                      status: "Ready To Schedule",
                    },
                    {
                      state: "Nevada",
                      frequency: "Monthly",
                      enrollment: "Active",
                      period: "April 2021",
                      amount: "$238.24",
                      status: "Ready To Schedule",
                    },
                    {
                      state: "New Jersey",
                      frequency: "Monthly",
                      enrollment: "Active",
                      period: "April 2021",
                      amount: "$98.22",
                      status: "Ready To Schedule",
                    },
                    {
                      state: "North Carolina",
                      frequency: "Monthly",
                      enrollment: "Pending",
                      period: "May 2021",
                      amount: "$38.24",
                      status: "Submitted",
                    },
                    {
                      state: "Kentucky",
                      frequency: "Monthly",
                      enrollment: "Submitted",
                      period: "",
                      amount: "",
                      status: "",
                    },
                  ].map((item, index) => (
                    <div key={index} className="grid grid-cols-6 gap-2 text-xs py-2 border-t">
                      <div>{item.state}</div>
                      <div>{item.frequency}</div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded-md ${
                            item.enrollment === "Active"
                              ? "bg-green-100 text-green-800"
                              : item.enrollment === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item.enrollment}
                        </span>
                      </div>
                      <div>{item.period}</div>
                      <div>{item.amount}</div>
                      <div className="flex items-center">
                        <span>{item.status}</span>
                        {item.status && (
                          <span className="ml-1 text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 16v-4" />
                              <path d="M12 8h.01" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Stay on top of tax changes with zero effort</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our team diligently tracks the latest sales tax laws across states, counties, cities, and special taxing
                districts. Whenever tax rates change, we implement them in real-time on our platform. You don't have to
                worry about staying on top of these changes, including product exemptions and sales tax holidays —
                Krysta ensures you're always compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Krysta Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-500 p-8 rounded-lg">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Krysta</h3>
                <h4 className="text-lg font-medium mb-4">Linked Partner Accounts</h4>
                <div className="bg-blue-500 text-white text-sm p-3 rounded mb-4">
                  You've selected 4 of 10 integrations included in your plan.
                </div>
                <div className="mb-6">
                  <div className="grid grid-cols-4 gap-2 text-sm font-medium mb-2">
                    <div>Partner</div>
                    <div>Account ID</div>
                    <div>Transaction Range</div>
                    <div></div>
                  </div>
                  {[
                    { partner: "woo", id: "12312", status: "No transactions imported" },
                    { partner: "walmart", id: "1232345", status: "No transactions imported" },
                    { partner: "etsy", id: "23424", status: "No transactions imported" },
                    { partner: "shopify", id: "114151", status: "No transactions imported" },
                  ].map((item, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 text-xs py-2 border-t">
                      <div>{item.partner}</div>
                      <div>{item.id}</div>
                      <div>{item.status}</div>
                      <div>
                        <a href="#" className="text-blue-500">
                          unlink
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div className="bg-white p-3 rounded border flex items-center justify-center">
                    <span className="text-xs">Shopify</span>
                  </div>
                  <div className="bg-white p-3 rounded border flex items-center justify-center">
                    <span className="text-xs">Walmart</span>
                  </div>
                  <div className="bg-white p-3 rounded border flex items-center justify-center">
                    <span className="text-xs">WooCommerce</span>
                  </div>
                  <div className="bg-white p-3 rounded border flex items-center justify-center">
                    <span className="text-xs">Etsy</span>
                  </div>
                  <div className="bg-white p-3 rounded border flex items-center justify-center">
                    <span className="text-xs">Square</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Krysta integrations</h2>
              <p className="text-lg text-gray-700 mb-8">
                In just a few minutes, you can seamlessly connect your commerce or ERP platform to Krysta's sales tax
                API and calculation engine through our prebuilt integration. Experience the simplicity and efficiency
                for yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculate Exact Rate Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Calculate the exact rate for every sale</h2>
              <p className="text-lg text-gray-700 mb-8">
                Krysta uses rooftop-level calculations to ensure your customer's exact address is matched with the
                correct tax rate in their jurisdiction. Our advanced AI-driven product classification tool analyzes all
                your products and recommends the appropriate tax code for each one, ensuring full compliance with ease.
              </p>
            </div>
            <div className="bg-blue-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Krysta</h3>
                <div className="mb-4">
                  <div className="flex space-x-2 mb-4">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm">Transactions</div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-600">TOTAL EXPECT TAX</div>
                      <div className="font-bold">$7.54</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">TOTAL ACTUAL TAX</div>
                      <div className="font-bold">$7.54</div>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold mb-4">Full Tax Breakdown</h4>
                  <div className="grid grid-cols-4 gap-2 text-sm font-medium mb-2">
                    <div>Name</div>
                    <div>Rate</div>
                    <div>Expected</div>
                    <div>Actual</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs py-2 border-t">
                    <div>State</div>
                    <div>5.000%</div>
                    <div>$7.54</div>
                    <div>$7.54</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs py-2 border-t">
                    <div>County</div>
                    <div>0.000%</div>
                    <div>$0.00</div>
                    <div>$0.00</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs py-2 border-t">
                    <div>City</div>
                    <div>0.000%</div>
                    <div>$0.00</div>
                    <div>$0.00</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs py-2 border-t">
                    <div>Special</div>
                    <div>n/a</div>
                    <div>$0.00</div>
                    <div>$0.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
