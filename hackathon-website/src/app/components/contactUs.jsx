export default function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          For any inquiries, reach out to us at:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li className="text-lg">Email: <a href="mailto:event@example.com" className="text-blue-500 hover:underline">event@example.com</a></li>
          <li className="text-lg">Phone: <a href="tel:+911234567890" className="text-blue-500 hover:underline">+91-1234567890</a></li>
        </ul>
      </div>
    </div>
  );
}
