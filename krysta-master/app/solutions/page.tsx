import { Button } from "@/components/ui/button"
import { CheckCircle, ShoppingCart, Store, BarChart, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#e6f0ff] to-[#e6f0ff] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions for Every Industry</h1>
            <p className="text-xl text-gray-700 mb-8">
              No matter your business type, Krysta has a solution to simplify your sales tax compliance.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-6">
              Find Your Solution
            </Button>
          </div>
        </div>
      </section>

      {/* E-commerce Section */}
      <section className="py-16 md:py-24" id="ecommerce">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-6">
                <ShoppingCart className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">E-commerce Solutions</h2>
              <p className="text-xl text-gray-600 mb-6">
                Navigate the complex world of online sales tax with confidence. Our platform automatically calculates
                the correct tax rates for every jurisdiction where you have nexus.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span>Automatic nexus determination based on your sales activity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span>Real-time tax calculations for all 50 states and local jurisdictions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span>Integrations with major e-commerce platforms</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg overflow-hidden">
              <Image
                src="/modern-ecommerce-dashboard.png"
                alt="E-commerce Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Retail Section */}
      <section className="py-16 md:py-24 bg-gray-50" id="retail">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white rounded-lg p-6 shadow-lg overflow-hidden">
              <Image
                src="/modern-retail-checkout.png"
                alt="Retail POS Integration"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block p-3 bg-green-100 rounded-lg mb-6">
                <Store className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Retail Solutions</h2>
              <p className="text-xl text-gray-600 mb-6">
                Streamline your in-store sales tax management with our retail-focused solutions. Integrate with your POS
                system for seamless tax calculations and reporting.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span>POS system integrations for real-time tax calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span>Multi-location support with location-specific tax rates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span>Simplified reporting for physical store locations</span>
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Section */}
      <section className="py-16 md:py-24" id="saas">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 bg-purple-100 rounded-lg mb-6">
                <BarChart className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">SaaS Solutions</h2>
              <p className="text-xl text-gray-600 mb-6">
                Navigate the unique challenges of software and subscription sales tax with our specialized SaaS
                solutions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span>Specialized handling of digital goods and services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span>Subscription billing tax management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span>International tax compliance for global SaaS businesses</span>
                </li>
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg overflow-hidden">
              <Image
                src="/saas-dashboard-overview.png"
                alt="SaaS Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Businesses of All Sizes</h2>
            <p className="text-xl text-gray-600">See what our customers have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-600">SJ</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Krysta has completely transformed how we handle sales tax. What used to take days now happens
                automatically."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-600">MC</span>
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">CFO, RetailPlus</p>
                </div>
              </div>
              <p className="text-gray-700">
                "With stores in 15 states, tax compliance was a nightmare before Krysta. Now it's one of the easiest
                parts of our financial operations."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-blue-600">JW</span>
                </div>
                <div>
                  <h4 className="font-bold">Jessica Williams</h4>
                  <p className="text-gray-600 text-sm">Founder, SaaSify</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As we expanded internationally, Krysta scaled with us. Their SaaS-specific solutions have been
                invaluable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Find the right solution for your business
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a demo with our team to see how Krysta can work for you.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-md px-6 py-6 text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
