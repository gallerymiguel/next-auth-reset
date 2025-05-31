export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-4">Thank you for your support. Your payment has been processed.</p>
      <a
        href="/"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
