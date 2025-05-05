import { Button } from "@/components/ui/button"
import {
  Building,
  Clock,
  FileText,
  MapPin,
  BarChart3,
  BookOpen,
  Ship,
  User,
  Briefcase,
  Calculator,
  Lock,
} from "lucide-react"
import Link from "next/link"

export default function MidMarketPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 via-blue-50 to-red-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block p-2 bg-white/80 rounded-lg mb-4">
              <span className="text-sm text-gray-600">Solutions / Mid-Large Enterprise</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sales tax compliance at scale</h1>
            <Button className="bg-black hover:bg-gray-800 text-white rounded-md px-6 py-3">contact sales</Button>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gray-100 rounded-lg mb-4">
              <span className="text-sm">Boost your productivity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Save time and reduce errors with automation</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Manual processes or outdated software can drain your resources. Krysta's cloud automation platform
              streamlines sales tax compliance, making it easy and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gradient-to-b from-white to-pink-100 p-8 rounded-lg">
            <div className="p-6">
              <div className="mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automate time-consuming tasks</h3>
              <p className="text-gray-700 mb-4">
                Krysta reduces the administrative burden on your finance team, allowing them to stay productive and
                focus on using their expertise.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reduce errors and manage audits</h3>
              <p className="text-gray-700 mb-4">
                Krysta's automation platform ensures accurate sales tax collection and timely return filing for every
                state where you're enrolled.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Always have the latest data at hand</h3>
              <p className="text-gray-700 mb-4">
                When you need to check your sales tax status, Krysta quickly provides the total amount collected and due
                for each jurisdiction.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Simplify processes and reduce costs</h3>
              <p className="text-gray-700 mb-4">
                Krysta helps you save time and reduce costs by integrating sales tax automation into your daily finance
                operations.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gray-100 rounded-lg mb-4">
              <span className="text-sm">Boost your productivity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Keep compliance in check as your business expands.</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Krysta ensures your finance team scales compliance effortlessly as your business expands into new markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gradient-to-b from-pink-50 to-pink-200 p-8 rounded-lg">
            <div className="p-6">
              <div className="mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">File in more states effortlessly</h3>
              <p className="text-gray-700 mb-4">
                Krysta AutoFile automatically submits your returns to each state, ensuring accuracy and timely filing.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Track potential new tax liabilities</h3>
              <p className="text-gray-700 mb-4">
                Krysta's Economic Nexus Insights dashboard notifies you when nearing nexus thresholds in a new state.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fill in the knowledge gaps</h3>
              <p className="text-gray-700 mb-4">
                Your team doesn't need to know it all. Krysta's sales tax experts keep the platform updated with the
                latest tax code changes.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <Ship className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Handle busy sales seasons with ease</h3>
              <p className="text-gray-700 mb-4">
                Krysta's high-performance sales tax engine and API are fast and reliable, even during peak seasons like
                Black Friday or Cyber Monday.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gray-100 rounded-lg mb-4">
              <span className="text-sm">Boost your productivity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">More ways we support your team's success.</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our award-winning support team and educational resources have helped thousands of mid-market businesses
              manage sales tax compliance with ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gradient-to-b from-pink-50 to-pink-200 p-8 rounded-lg">
            <div className="p-6">
              <div className="mb-4">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Get up and running quickly</h3>
              <p className="text-gray-700 mb-4">
                Our dedicated onboarding and technical support team will assist you through every step to get started
                with Krysta.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customize your Krysta set up</h3>
              <p className="text-gray-700 mb-4">
                For more than just a basic integration, Krysta's REST API enables you to build a custom connection with
                your business.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Become a Krysta power user</h3>
              <p className="text-gray-700 mb-4">
                Access video tutorials and articles on our free customer education portal, or contact our live support
                team for assistance.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build your sales tax skills</h3>
              <p className="text-gray-700 mb-4">
                We offer a wealth of resources on sales tax, including state- and industry-specific materials.
              </p>
              <Link href="#" className="flex items-center text-gray-900 font-medium">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Tax Life Cycle Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Krysta automates the sales tax life cycle</h2>
          <p className="text-lg text-center mb-16">
            Krysta simplifies sales tax compliance every step of the way. Here's how our platform works:
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 border-2 border-blue-200 rounded-full flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-2 border-blue-200 border-dashed"></div>
                <div className="w-16 h-16 flex items-center justify-center">
                  <Building className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-sm font-bold mb-2">Connect your e-commerce or ERP platform</h3>
              <p className="text-sm text-gray-600">
                Prebuilt integrations with popular platforms quickly connect Krysta to your existing systems.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 border-2 border-blue-200 rounded-full flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-2 border-blue-200 border-dashed"></div>
                <div className="w-16 h-16 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-blue-500" />
                </div>
              </div>
              <h3 className="text-sm font-bold mb-2">Determine economic nexus</h3>
              <p className="text-sm text-gray-600">
                Our Nexus Insights Dashboard and notifications help you stay ahead of your sales tax responsibilities by
                state.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 border-2 border-blue-200 rounded-full flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-2 border-blue-200 border-dashed"></div>
                <div className="w-16 h-16 flex items-center justify-center">
                  <Calculator className="w-10 h-10 text-blue-500" />
                </div>
              </div>
              <h3 className="text-sm font-bold mb-2">Collect accurate sales tax at checkout</h3>
              <p className="text-sm text-gray-600">
                Our real-time calculation engine and sales tax API provides rooftop-level, product-specific sales tax.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 border-2 border-blue-200 rounded-full flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-2 border-blue-200 border-dashed"></div>
                <div className="w-16 h-16 flex items-center justify-center">
                  <FileText className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-sm font-bold mb-2">Access sales tax reports</h3>
              <p className="text-sm text-gray-600">
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
