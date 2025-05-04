import Image from "next/image"
import { Button } from "@/components/ui/button"
import TestimonialsSection from "@/components/testimonials-section"
import "./custom.css"
import { Calculator, Target, FileText, Lock } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section - Fixed Layout with Custom CSS */}
        <section className="hero-section bg-gradient-to-b from-[#e6f0ff] to-[#0066ff]">
          <div className="container mx-auto px-4 pt-12 md:pt-24 pb-0">
            <div className="hero-content flex flex-col md:flex-row">
              <div className="hero-text pb-8 md:pb-0 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-black">Sales Tax</span> <br />
                  <span className="text-black">Compliance,</span> <br />
                  <span className="text-[#1a365d]">Simplified</span>
                </h1>
                <p className="text-gray-800 mb-8 text-base sm:text-lg">
                  Sales tax is complex. Krysta makes it simple with automated calculations, reporting, and filing.
                </p>
                <div>
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-md px-6 py-2">Get started</Button>
                </div>
              </div>
              <div className="hero-image flex justify-center">
                <Image
                  src="homepage.png"
                  alt="Krysta consultant"
                  width={350}
                  height={330}
                  className="object-contain"
                  style={{ marginBottom: 0, display: 'block' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature 1: Reduce risk */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  Reduce your risk of errors and missed deadlines
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                  The Krysta platform automates sales tax compliance across 11,000 jurisdictions. Our indirect tax
                  software makes sure you always stay ahead of your economic nexus exposure, collect the right sales tax
                  rate on every product sold, and submit filings and remittances on time.
                </p>
                <Button variant="outline" className="border-black text-black hover:bg-gray-100 w-full md:w-auto">
                  More on AutoFile
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-6 md:mt-0">
                <Image
                  src="/1st.png"
                  alt="Krysta AutoFile dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Sell across more channels */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  Sell across more channels with less effort
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                  With Krysta, it's easy for multichannel sellers to expand to new markets and manage sales tax
                  compliance. Our cloud-based platform enables your business to scale seamlessly. AI-driven product
                  categorization, a real-time calculation engine, a flexible API, and aggregated transaction reports
                  remove your administrative burden.
                </p>
                <Button variant="outline" className="border-black text-black hover:bg-gray-100 w-full md:w-auto">
                  More on real-time calculation
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg order-0 md:order-2 mb-6 md:mb-0">
                <Image
                  src="/2nd.png"
                  alt="Krysta transactions dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Integrate with e-commerce */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  Integrate Krysta with your e-commerce or ERP platform
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                  Getting up and running with Krysta is simple. Choose from a wide range of built-in-house integrations
                  with platforms, ranging from Stripe to Shopify to NetSuite. The Krysta API gives you even more
                  flexibility for custom solutions.
                </p>
                <Button variant="outline" className="border-black text-black hover:bg-gray-100 w-full md:w-auto">
                  More on integrations
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-6 md:mt-0">
                <Image
                  src="/3rd.png"
                  alt="Krysta integrations"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature 4: Support */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Get support when you need it most</h2>
                <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                  Behind the TaxJar platform is a knowledgeable customer service team ready to help you be successful.
                  From onboarding, to educational resources, to award-winning support with dedicated email and phone
                  response times, we are committed to making your sales tax experience run smoothly.
                </p>
                <Button variant="outline" className="border-black text-black hover:bg-gray-100 w-full md:w-auto">
                  Krysta support center
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg order-0 md:order-2 mb-6 md:mb-0">
                <Image
                  src="/4th.png"
                  alt="Krysta knowledge base"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by Businesses of All Sizes Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <span className="px-4 py-1 bg-white rounded-full text-sm font-medium">Boost your productivity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
              Trusted by Businesses
              <br />
              of All Sizes
            </h2>

            <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-10 md:mb-16">
              From startups to enterprises, businesses across industries rely on Krysta Compliance to stay tax-compliant
              without the headaches.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Krysta Calculate */}
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center md:text-left">Krysta Calculate</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  Accurate sales tax calculations. Real-time rates across 14,000+ jurisdictions in the US, always
                  current and always accurate.
                </p>
                <a href="#" className="flex items-center text-black font-medium">
                  Learn more <span className="ml-1">→</span>
                </a>
              </div>

              {/* Integration ecosystem */}
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center md:text-left">Integration ecosystem</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  Streamlined reporting. Detailed reports organized by state, jurisdiction, and filing frequency to
                  simplify your compliance.
                </p>
                <a href="#" className="flex items-center text-black font-medium">
                  Learn more <span className="ml-1">→</span>
                </a>
              </div>

              {/* Krysta AutoFile */}
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center md:text-left">Krysta AutoFile</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  Automated filing service. We prepare and submit your sales tax returns on time, every time.
                </p>
                <a href="#" className="flex items-center text-black font-medium">
                  Learn more <span className="ml-1">→</span>
                </a>
              </div>

              {/* Secure data encryption */}
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center md:text-left">Secure data encryption</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  Ensure your data's safety with top-tier encryption.
                </p>
                <a href="#" className="flex items-center text-black font-medium">
                  Learn more <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Smartest Way to Handle Tax Compliance Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <span className="px-4 py-1 bg-gray-100 rounded-full text-sm font-medium">Everything you need</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
              The Smartest Way
              <br />
              to Handle Tax
              <br />
              Compliance
            </h2>

            <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-10 md:mb-16">
              Struggling with tax compliance? Krysta Compliance
              <br className="hidden sm:block" />
              automates everything for you:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card 1: Tax Calculation */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="h-32 sm:h-40 md:h-64 flex items-center justify-center">
                  <div className="hero-image flex justify-center w-full h-full">
                    <Image
                      src="/tax.png"
                      alt="Krysta consultant"
                      width={270}
                      height={330}
                      className="object-contain w-full h-auto max-h-32 sm:max-h-40 md:max-h-64"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Accurate Tax Calculation</h3>
                <p className="text-gray-700">
                  Real-time tax calculation at checkout ensures you collect the right amount every time, with precise
                  rates for every jurisdiction.
                </p>
              </div>

              {/* Card 2: Tax Filing */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="h-32 sm:h-40 md:h-64 flex items-center justify-center">
                  <div className="hero-image flex justify-center w-full h-full">
                    <Image
                      src="/img1.png"
                      alt="Krysta consultant"
                      width={300}
                      height={330}
                      className="object-contain w-full h-auto max-h-32 sm:max-h-40 md:max-h-64"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Automated Tax Filing</h3>
                <p className="text-gray-700">
                  Let Krysta handle your tax filings automatically, ensuring you never miss a deadline and always remain
                  compliant.
                </p>
              </div>

              {/* Card 3: Multi-State Compliance */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="h-32 sm:h-40 md:h-64 flex items-center justify-center">
                  <div className="hero-image flex justify-center w-full h-full">
                    <Image
                      src="3.png"
                      alt="Krysta consultant"
                      width={350}
                      height={330}
                      className="object-contain w-full h-auto max-h-32 sm:max-h-40 md:max-h-64"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Multi-State Compliance</h3>
                <p className="text-gray-700">
                  Automatically track tax rules and rates across all states, keeping your business compliant everywhere
                  you sell.
                </p>
              </div>

              {/* Card 4: Audit-Ready Reports */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="h-32 sm:h-40 md:h-64 flex items-center justify-center">
                  <div className="hero-image flex justify-center w-full h-full">
                    <Image
                      src="image (2).png"
                      alt="Krysta consultant"
                      width={300}
                      height={300}
                      className="object-contain w-full h-auto max-h-32 sm:max-h-40 md:max-h-64"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Audit-Ready Reports</h3>
                <p className="text-gray-700">
                  Access clear, detailed tax reports that keep your records organized, making audits and compliance
                  checks stress-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
      </main>
    </div>
  )
}
