export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-700 mb-4">❌ Payment Canceled</h1>
      <p className="text-lg text-gray-700 mb-4">Your payment was not processed. If you need assistance, please contact support or try again.</p>
      <a
        href="/"
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
