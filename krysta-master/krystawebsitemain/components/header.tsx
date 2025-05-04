"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Monitor,
  Calculator,
  PieChart,
  Globe,
  ClipboardCheck,
  ExternalLink,
  FileText,
  ShoppingBag,
  Utensils,
  Plus,
  Computer,
  Briefcase,
  Building,
  Home,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Refs for dropdown containers
  const productDropdownRef = useRef<HTMLDivElement>(null)
  const solutionsDropdownRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle clicks outside of dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(event.target as Node) &&
        solutionsDropdownRef.current &&
        !solutionsDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    // We'll rely on the click outside handler to close the dropdown
    // This allows users to move the mouse away briefly without losing the dropdown
  }

  const handleNavigation = (href: string) => {
    router.push(href)
    setActiveDropdown(null) // Close dropdown after navigation
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const productItems = [
    { icon: <Monitor className="w-5 h-5 mr-2" />, label: "Sales Tax Compliance Platform", href: "/product/platform" },
    { icon: <Calculator className="w-5 h-5 mr-2" />, label: "Real Time Calculations", href: "/product/calculations" },
    { icon: <PieChart className="w-5 h-5 mr-2" />, label: "Sales Tax Reports", href: "/product/reports" },
    { icon: <Globe className="w-5 h-5 mr-2" />, label: "Nexus Insights", href: "/product/nexus" },
    { icon: <ClipboardCheck className="w-5 h-5 mr-2" />, label: "Filing and Remittance", href: "/product/filing" },
    { icon: <ExternalLink className="w-5 h-5 mr-2" />, label: "Integrations", href: "/product/integrations" },
    {
      icon: <FileText className="w-5 h-5 mr-2" />,
      label: "State Sales Tax Registration",
      href: "/product/registration",
    },
  ]

  const solutionItems = [
    { icon: <ShoppingBag className="w-5 h-5 mr-2" />, label: "Retail", href: "/solutions/retail" },
    { icon: <Utensils className="w-5 h-5 mr-2" />, label: "Food And Beverage", href: "/solutions/food-beverage" },
    { icon: <Plus className="w-5 h-5 mr-2" />, label: "Medical", href: "/solutions/medical" },
    { icon: <Computer className="w-5 h-5 mr-2" />, label: "SaaS", href: "/solutions/saas" },
    { icon: <Briefcase className="w-5 h-5 mr-2" />, label: "Services", href: "/solutions/services" },
    { icon: <Building className="w-5 h-5 mr-2" />, label: "Mid-Market Business", href: "/solutions/mid-market" },
    { icon: <Home className="w-5 h-5 mr-2" />, label: "Small Business", href: "/solutions/small-business" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-[#e6f0ff] py-3 md:py-6",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
            KRYSTA
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation - Right Aligned */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("product")}
              onMouseLeave={handleMouseLeave}
              ref={productDropdownRef}
            >
              <button
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
                  activeDropdown === "product" || pathname.startsWith("/product")
                    ? "bg-black/5 text-gray-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-black/5",
                )}
                onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}
              >
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "product" && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                  {productItems.map((item) => (
                    <button
                      key={item.label}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 w-full text-left"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
              ref={solutionsDropdownRef}
            >
              <button
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
                  activeDropdown === "solutions" || pathname.startsWith("/solutions")
                    ? "bg-black/5 text-gray-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-black/5",
                )}
                onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                  {solutionItems.map((item) => (
                    <button
                      key={item.label}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 w-full text-left"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === "/contact"
                  ? "bg-black/5 text-gray-900"
                  : "text-gray-600 hover:text-gray-900 hover:bg-black/5",
              )}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {/* Mobile Product Dropdown */}
              <div className="relative">
                <button
                  className={cn(
                    "flex justify-between items-center w-full px-4 py-3 text-left text-sm font-medium",
                    pathname.startsWith("/product") ? "text-gray-900 font-semibold" : "text-gray-600",
                  )}
                  onClick={() => toggleMobileDropdown("product")}
                >
                  Product
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      activeDropdown === "product" ? "transform rotate-180" : "",
                    )}
                  />
                </button>
                {activeDropdown === "product" && (
                  <div className="mt-1 pl-4 border-l-2 border-gray-200">
                    {productItems.map((item) => (
                      <button
                        key={item.label}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:text-gray-900 w-full text-left"
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Solutions Dropdown */}
              <div className="relative">
                <button
                  className={cn(
                    "flex justify-between items-center w-full px-4 py-3 text-left text-sm font-medium",
                    pathname.startsWith("/solutions") ? "text-gray-900 font-semibold" : "text-gray-600",
                  )}
                  onClick={() => toggleMobileDropdown("solutions")}
                >
                  Solutions
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      activeDropdown === "solutions" ? "transform rotate-180" : "",
                    )}
                  />
                </button>
                {activeDropdown === "solutions" && (
                  <div className="mt-1 pl-4 border-l-2 border-gray-200">
                    {solutionItems.map((item) => (
                      <button
                        key={item.label}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:text-gray-900 w-full text-left"
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Contact Link */}
              <Link
                href="/contact"
                className={cn(
                  "block px-4 py-3 text-sm font-medium",
                  pathname === "/contact" ? "text-gray-900 font-semibold" : "text-gray-600",
                )}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
