import { Button } from "@/components/ui/button"
import { CheckCircle, Calculator, Link, FileText, Lock } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-100 via-blue-50 to-yellow-100 min-h-[80vh] flex items-end overflow-hidden p-0">
        <div className="container mx-auto px-4 w-full h-full">
          <div className="flex flex-col md:flex-row items-end w-full min-h-[80vh] h-full">
            <div className="md:w-1/2 mb-10 md:mb-0 pt-32 pb-20">
              <div className="bg-white/10 text-black text-sm py-2 px-4 rounded-full inline-block mb-4">
                Solutions / Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Stay current on sales tax laws for compliance.
              </h1>
              <p className="text-xl text-gray-800 mb-8">
                Selling services online? Stay ahead of compliance by automatically collecting and filing sales tax.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-md">contact sales</button>
            </div>
            <div className="md:w-1/2 hidden md:flex justify-center items-end h-full m-0 p-0">
              <Image
                src="/Services.png"
                alt="Krysta consultant"
                width={500}
                height={700}
                className="object-contain object-bottom w-full max-w-[500px] h-full m-0 p-0"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Superior Checkout Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-4">
                {/* Left transaction panel */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="text-lg font-medium mb-4">Krysta</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Order:</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>Item:</span>
                      <span>Total</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Item</span>
                      <div className="flex space-x-2">
                        <span>1x</span>
                        <span>$86.36</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>$9.10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Handling</span>
                      <span>$9.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discounts</span>
                      <span>($0.00)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>OrderSubtotal</span>
                      <span>$96.75</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Sales Tax</span>
                      <span>$104.29</span>
                    </div>
                    <button className="w-full border border-gray-300 rounded py-2 text-center">Order</button>
                  </div>
                </div>

                {/* Right transaction panel */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="font-medium mb-2">Transaction Details</h3>
                  <div className="text-sm">
                    <div className="flex justify-between mb-4">
                      <span>Order #253042955420</span>
                      <span>Order Date 04/30/21</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">SHIPPED FROM</p>
                        <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">SHIPPED TO</p>
                        <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
                      </div>
                    </div>

                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left">
                          <th>Item:</th>
                          <th>Qty</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Shipping</td>
                          <td>1</td>
                          <td>$86.36</td>
                        </tr>
                        <tr>
                          <td>Handling</td>
                          <td></td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Discounts</td>
                          <td></td>
                          <td>($0.00)</td>
                        </tr>
                        <tr>
                          <td>OrderSubtotal</td>
                          <td></td>
                          <td>$36.75</td>
                        </tr>
                        <tr>
                          <td>Sales Tax</td>
                          <td></td>
                          <td>$7.54</td>
                        </tr>
                        <tr className="font-bold">
                          <td>Order Total</td>
                          <td></td>
                          <td>$104.29</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="flex justify-between mt-4 text-sm">
                      <div>
                        <p>TOTAL EXPECT TAX</p>
                        <p className="font-bold">$7.54</p>
                      </div>
                      <div>
                        <p>TOTAL ACTUAL TAX</p>
                        <p className="font-bold">$7.54</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A superior checkout experience that reflects your service
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Customer service is key in every service-oriented business. Krysta's automation platform ensures you
                collect accurate sales tax in real time for every purchase.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Reliability and speed:</h3>
                    <p>
                      Krysta's API delivers sub-25ms response times with 99.99% uptime, providing instant, accurate tax
                      data at checkout.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Rates based on addresses:</h3>
                    <p>Our API applies rooftop-accurate rates based on state, county, city, and district.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Continuous tax law monitoring:</h3>
                    <p>Our team tracks the ever-changing tax codes across 14,000+ jurisdictions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Tools Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Automated tools for managing sales tax responsibilities
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Managing the complexities of sales tax can be challenging. Are accounting services taxed? What about
                hair care or car maintenance? Tax laws can change, and Krysta makes it easier to stay current,
                especially as you expand across states.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Simplified product classification:</h3>
                    <p>
                      Krysta's API helps you assign the correct product tax code to each service, ensuring accurate
                      sales tax identification.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Tax liability tracking & alerts:</h3>
                    <p>
                      Our Economic Nexus Insights dashboard notifies you when you're nearing nexus thresholds in new
                      states.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Effortless filing across states:</h3>
                    <p>Krysta AutoFile automatically submits accurate returns to multiple states on time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Comprehensive sales tax reports:</h3>
                    <p>
                      Our reporting dashboard provides access to all your sales tax records across channels for a
                      complete business overview.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Krysta</h3>
                <div className="flex space-x-6 mt-4">
                  <button className="text-gray-500 pb-2">Overview</button>
                  <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
                    Economic Nexus Insights
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Economic nexus insights</h3>
                <p className="mb-4">States with economic nexus (2)</p>

                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <div className="w-16 h-16 bg-blue-500 rounded mr-4 flex items-center justify-center text-white">
                      AL
                    </div>
                    <h4 className="text-2xl font-bold">Alabama</h4>
                  </div>

                  <p className="mb-2">The economic nexus requirement for sales was met in May 2021</p>

                  <div className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span>Sales: $425.3k of 2500k</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Transactions: N/A</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Connection Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Easy connection to e-commerce platforms, marketplaces, and carts
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Have a preferred marketplace or e-commerce vendor? Chances are, Krysta has a prebuilt integration for
                it. We build, test, and certify integrations with popular e-commerce solutions for quick and easy setup.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Tested and certified for quality:</h3>
                    <p>Krysta's integrations are rigorously tested to meet the highest standards.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Support for popular platforms:</h3>
                    <p>Our integrations include Amazon, Magento, Shopify, and Squarespace.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Customization with the Krysta API:</h3>
                    <p>Use the Krysta API to integrate with your custom-built shopping cart or web sales solution.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-gray-900 hover:bg-black text-white">Get Started</Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Krysta</h3>
                <div className="flex justify-between items-center mt-4">
                  <h4 className="text-xl font-bold">Linked Partner Accounts</h4>
                  <div className="text-gray-500">Transaction Range</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div>Partner</div>
                  <div>Account ID</div>
                  <div>08/29/2021 - 09/02/2021</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div>Amazon</div>
                  <div className="text-sm text-gray-500">acct_1F5jfd8IHF8Inf</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Platform logos placeholders */}
                {Array(9)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="bg-white border rounded-lg p-4 h-20 flex items-center justify-center">
                      <div className="text-gray-400 text-sm">Platform logo</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Businesses Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-6">Boost your productivity</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Businesses
            <br />
            of All Sizes
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            From startups to enterprises, businesses across industries rely on Krysta Compliance to stay tax-compliant
            without the headaches.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Krysta Calculate</h3>
              <p className="mb-3">Accurate sales tax calculations</p>
              <p className="mb-3">
                Real-time rates across 14,000+ jurisdictions in the US, always current and always accurate.
              </p>
              <a href="#" className="inline-flex items-center text-gray-700 hover:text-gray-900">
                Learn more <span className="ml-1">→</span>
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Link className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integration ecosystem</h3>
              <p className="mb-3">Streamlined reporting</p>
              <p className="mb-3">
                Detailed reports organized by state, jurisdiction, and filing frequency to simplify your compliance.
              </p>
              <a href="#" className="inline-flex items-center text-gray-700 hover:text-gray-900">
                Learn more <span className="ml-1">→</span>
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Krysta AutoFile</h3>
              <p className="mb-3">Automated filing service</p>
              <p className="mb-3">We prepare and submit your sales tax returns on time, every time.</p>
              <a href="#" className="inline-flex items-center text-gray-700 hover:text-gray-900">
                Learn more <span className="ml-1">→</span>
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure data encryption</h3>
              <p className="mb-3">Ensure your data's safety with top-tier encryption.</p>
              <a href="#" className="inline-flex items-center text-gray-700 hover:text-gray-900">
                Learn more <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Tax Life Cycle Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Krysta automates the sales
            <br />
            tax life cycle
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Krysta simplifies sales tax compliance every step of the way. Here's how our platform works:
          </p>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 border-2 border-blue-200 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link className="w-10 h-10 text-gray-700" />
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-sm font-medium mb-3">Connect your e-commerce or ERP platform</h3>
              <p className="text-sm">
                Prebuilt integrations with popular platforms quickly connect Krysta to your existing systems.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 border-2 border-blue-200 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calculator className="w-10 h-10 text-gray-700" />
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-sm font-medium mb-3">Determine economic nexus</h3>
              <p className="text-sm">
                Our Nexus Insights Dashboard and notifications help you stay ahead of your sales tax responsibilities by
                state.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 border-2 border-blue-200 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-blue-500">%</div>
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-sm font-medium mb-3">Collect accurate sales tax at checkout</h3>
              <p className="text-sm">
                Our real-time calculation engine and sales tax API provides rooftop-level, product-specific sales tax.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 border-2 border-blue-200 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-gray-700" />
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-sm font-medium mb-3">Access sales tax reports</h3>
              <p className="text-sm">
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
