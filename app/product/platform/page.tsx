import { Button } from "@/components/ui/button"
import { CheckCircle, Link2, Map, PercentCircle, FileText, Phone } from "lucide-react"

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-b from-[#f0f4ff] via-[#d9e6ff] to-[#0066ff] py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sales Tax Compliance, <br />
              Simplified
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              Sales tax is complex. Krysta makes it simple with automated calculations, reporting, and filing.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3 text-lg">Get started</Button>
          </div>
        </div>
      </section>

      {/* Sales Tax Life Cycle Section */}
      <section className="py-20 bg-white">
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
                <Link2 className="w-10 h-10 text-gray-700" />
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2">Connect your e-commerce or ERP platform</h3>
              <p className="text-gray-600">
                Prebuilt integrations with popular platforms quickly connect Krysta to your existing systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 relative">
                <Map className="w-10 h-10 text-gray-700" />
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
                <PercentCircle className="w-10 h-10 text-gray-700" />
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2">Collect accurate sales tax at checkout</h3>
              <p className="text-gray-600">
                Our real-time calculation engine and sales tax API provides rooftop-level, product-specific sales tax.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 relative">
                <FileText className="w-10 h-10 text-gray-700" />
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

      {/* E-commerce Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Integrate seamlessly with e-commerce & ERP platforms</h2>
              <p className="text-lg text-gray-700 mb-8">
                Prebuilt integrations make it easy to connect Krysta to your commerce platform in no time. All
                integrations are reliable, thoroughly tested, and certified for seamless performance.
              </p>
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3">
                More on integrations
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Krysta</h3>
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
          </div>
        </div>
      </section>

      {/* Real-time Calculation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Calculate accurate sales tax in real time</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our high-performance sales tax calculation engine delivers over 99% accuracy, ensuring precise tax
                calculations. Smart product classification automatically recommends the correct tax code for your
                products.
              </p>
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3">
                More on real-time calculation
              </Button>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Krysta</h3>
                <h4 className="text-lg font-medium mb-4">Product Categorization & Exemptions</h4>
                <div className="bg-white p-4 rounded-lg mb-4">
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
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
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
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <p>Business-to-consumer (B2C)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Tax Reports Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Access comprehensive sales tax reports</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our platform seamlessly consolidates orders from all your e-commerce channels into a single dashboard,
                providing you with a comprehensive view of your multichannel transactions and detailed state-by-state
                reports, including city, county, and special district breakdowns.
              </p>
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3">
                More on sales tax reports
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold mr-2">Actual Sales Tax Collected</h3>
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-blue-500 mr-4">$9,238.21</span>
                  <span className="text-2xl">California</span>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Sales Tax Report</Button>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Enroll in Autofile</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Nexus Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Track economic nexus across states</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our Nexus Insights Dashboard, combined with notifications, allows you to track your nexus exposure. When
                you're approaching nexus in a new state, we offer actionable recommendations for the next steps.
              </p>
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3">
                More on nexus dashboard
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Krysta</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded mr-2"></div>
                      <h4 className="text-lg font-bold">North Carolina</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      The economic nexus requirement for sales was met in June 2021
                    </p>
                    <div className="mb-2">
                      <p className="text-sm">Sales: 922.5k of 1000k</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <span className="text-xs">92%</span>
                    </div>
                    <div>
                      <p className="text-sm">Transactions: 220 of 200</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <span className="text-xs">200</span>
                    </div>
                    <Button variant="outline" className="mt-4 text-xs">
                      Learn More
                    </Button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded mr-2"></div>
                      <h4 className="text-lg font-bold">Alabama</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      The economic nexus requirement for sales was met in May 2021
                    </p>
                    <div className="mb-2">
                      <p className="text-sm">Sales: $425.3k of 250k</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <span className="text-xs">100%</span>
                    </div>
                    <div>
                      <p className="text-sm">Transactions: N/A</p>
                    </div>
                    <Button variant="outline" className="mt-4 text-xs">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AutoFile Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Automate filing & remittance</h2>
              <p className="text-lg text-gray-700 mb-8">
                The Krysta AutoFile service automatically files your returns and remittances for each state where you're
                registered, ensuring you never miss a due date.
              </p>
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3">
                More on AutoFile
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded mb-2"></div>
                  <h3 className="text-2xl font-bold">Texas</h3>
                  <p className="text-lg">Enrollment scheduled</p>
                </div>
                <p className="text-xl font-medium text-center mb-4">First AutoFile: October 2021</p>
                <p className="text-center text-gray-600">
                  Your enrollment has been approved and is scheduled to start in October 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get world-class support from our team</h2>
              <p className="text-lg text-gray-700 mb-8">
                When you need assistance, our comprehensive knowledge base, detailed technical documentation, and
                dedicated customer support team are here to help you find answers quickly.
              </p>
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800 rounded-md px-6 py-3">
                Krysta support center
              </Button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="aspect-[16/9] bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white mb-8">Video call placeholder</p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
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
