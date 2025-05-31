export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-700 mb-4">❌ Payment Cancelled</h1>
      <p className="text-lg text-gray-700 mb-4">
        Your subscription was not processed. You can try again anytime.
      </p>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Go to Instagram
      </a>
    </div>
  );
}
