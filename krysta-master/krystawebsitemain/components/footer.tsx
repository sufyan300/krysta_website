import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-8">
            <Link href="/" className="text-4xl font-bold">
              KRYSTA
            </Link>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-300">
                10019 NE 141st Street Kirkland WA 98034
                <br />
                United States
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm text-gray-300">Call us : +19198187261</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="8" r="0.5" fill="currentColor"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m9 11 3-3 3 3"></path>
                </svg>
                <span className="sr-only">Pinterest</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 11v4.833A3.167 3.167 0 0 1 11.833 19h-3.666A3.167 3.167 0 0 1 5 15.833V11a5 5 0 0 1 10 0Z"></path>
                  <path d="M10 5.5V3"></path>
                  <path d="M14 6h1a2 2 0 0 1 2 2v1"></path>
                  <path d="M14 15h1a2 2 0 0 0 2-2v-1"></path>
                  <path d="M6 15H5a2 2 0 0 1-2-2v-1"></path>
                  <path d="M6 6H5a2 2 0 0 0-2 2v1"></path>
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product/platform" className="text-gray-300 hover:text-white text-sm">
                  Sales Tax Platform
                </Link>
              </li>
              <li>
                <Link href="/product/calculations" className="text-gray-300 hover:text-white text-sm">
                  Real Time Calculation
                </Link>
              </li>
              <li>
                <Link href="/product/reports" className="text-gray-300 hover:text-white text-sm">
                  Sales Tax Reports
                </Link>
              </li>
              <li>
                <Link href="/product/nexus" className="text-gray-300 hover:text-white text-sm">
                  Nexus Insights
                </Link>
              </li>
              <li>
                <Link href="/product/filing" className="text-gray-300 hover:text-white text-sm">
                  Filing
                </Link>
              </li>
              <li>
                <Link href="/product/integrations" className="text-gray-300 hover:text-white text-sm">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/product/registration" className="text-gray-300 hover:text-white text-sm">
                  State Tax Registrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/retail" className="text-gray-300 hover:text-white text-sm">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/solutions/food-beverage" className="text-gray-300 hover:text-white text-sm">
                  Food and Beverage
                </Link>
              </li>
              <li>
                <Link href="/solutions/medical" className="text-gray-300 hover:text-white text-sm">
                  Medical
                </Link>
              </li>
              <li>
                <Link href="/solutions/saas" className="text-gray-300 hover:text-white text-sm">
                  SaaS
                </Link>
              </li>
              <li>
                <Link href="/solutions/services" className="text-gray-300 hover:text-white text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions/mid-market" className="text-gray-300 hover:text-white text-sm">
                  Mid-Market Business
                </Link>
              </li>
              <li>
                <Link href="/solutions/small-business" className="text-gray-300 hover:text-white text-sm">
                  Small Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
