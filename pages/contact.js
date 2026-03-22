export default function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-semibold mb-4 text-center">Contact Us</h1>
      <p className="text-gray-600 text-center">
        If you have any questions or need assistance, please don't hesitate to reach out to us. We'll be happy to help.
      </p>
      <form action="/contact" method="POST" className="mt-4 space-y-4 w-[60%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input type="text" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
          </label>

          <label className="block">
            <span className="text-gray-700">Email</span>
            <input type="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
          </label>

          <label className="block">
            <span className="text-gray-700">Phone</span>
            <input type="text" name="phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
          </label>

          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea name="message" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
          </label>
        </div>

        <button type="submit" className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0a3758] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>
    </div>
  );
}
