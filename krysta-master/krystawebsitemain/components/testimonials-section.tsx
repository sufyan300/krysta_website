export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What Our Customers Say</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Trusted by businesses of all sizes</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-blue-600">EC</span>
              </div>
              <div>
                <h4 className="font-bold">Emma Clark</h4>
                <p className="text-gray-600 text-sm">CEO, Fashion Forward</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Since implementing Krysta, we've saved countless hours on tax compliance. Our team can focus on growth
              while knowing our tax obligations are handled correctly."
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-blue-600">JT</span>
              </div>
              <div>
                <h4 className="font-bold">James Thompson</h4>
                <p className="text-gray-600 text-sm">CFO, TechGadgets Inc.</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Managing sales tax across 15 states used to be our biggest headache. With Krysta, it's now automated and
              accurate. We've eliminated the risk of non-compliance."
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-blue-600">ML</span>
              </div>
              <div>
                <h4 className="font-bold">Maria Lopez</h4>
                <p className="text-gray-600 text-sm">Owner, Craftology</p>
              </div>
            </div>
            <p className="text-gray-700">
              "As a small business expanding nationally, tax compliance was overwhelming. Krysta made it simple and
              affordable. Now I can sell anywhere with confidence."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
