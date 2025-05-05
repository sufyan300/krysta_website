import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#e6f0ff] to-[#e6f0ff] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Automate Your Sales Tax Compliance</h1>
            <p className="text-xl text-gray-700 mb-8">
              Our comprehensive platform handles every aspect of sales tax management, from calculation to filing.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-6">Start Free Trial</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24" id="features">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Complete Tax Management</h2>
            <p className="text-xl text-gray-600">Everything you need to stay compliant in one platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Calculations</h3>
              <p className="text-gray-600 mb-4">
                Real-time tax calculations based on location, product type, and current tax laws.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Simplified Reporting</h3>
              <p className="text-gray-600 mb-4">
                Generate accurate reports for any jurisdiction with just a few clicks.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Filing</h3>
              <p className="text-gray-600 mb-4">
                We handle your tax filings automatically, so you never miss a deadline.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Dashboard Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Dashboard for Complete Visibility</h2>
              <p className="text-lg text-gray-700 mb-6">
                Get a comprehensive view of your sales tax obligations across all jurisdictions. Our intuitive dashboard
                provides real-time insights into your compliance status.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>Real-time compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>Visual reporting and analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>Customizable alerts and notifications</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">See the Dashboard in Action</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/tax-dashboard-overview.png"
                alt="Krysta Tax Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">For small businesses</p>
              <div className="text-4xl font-bold mb-6">
                $99<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Up to 100 transactions/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>5 state filings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Basic reporting</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative transform hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 mb-6">For growing businesses</p>
              <div className="text-4xl font-bold mb-6">
                $199<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Up to 1,000 transactions/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>20 state filings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Advanced reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>API access</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large businesses</p>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited transactions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>All state filings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Custom reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to simplify your sales tax compliance?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses that trust Krysta for their tax needs.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-md px-6 py-6 text-lg">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
