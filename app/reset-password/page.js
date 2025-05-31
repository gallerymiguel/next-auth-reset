'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const RESET_PASSWORD = gql`
  mutation ResetPassword($token: String!, $newPassword: String!) {
    resetPassword(token: $token, newPassword: $newPassword)
  }
`;

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [resetPassword, { loading, error }] = useMutation(RESET_PASSWORD);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const token = new URLSearchParams(window.location.search).get('token');
    if (!token) {
      setMessage('Invalid or missing token.');
      return;
    }

    try {
      const { data } = await resetPassword({
        variables: { token, newPassword: password },
      });
      setMessage(data.resetPassword || 'Password reset successful!');
    } catch (err) {
      console.error("GraphQL Error:", err);
      setMessage("");
    }
  };

return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 space-y-6">
  <h1 className="text-4xl font-extrabold text-white drop-shadow-lg text-center">
    AI Video & Audio Transcript Summarizer
  </h1>
  <p className="text-white/80 text-sm text-center max-w-md">
    Reset your password to access your account and manage your transcripts.
  </p>

  <div className="backdrop-blur-md bg-white/30 border border-white/20 p-8 rounded-2xl shadow-2xl max-w-md w-full">
    <h2 className="text-2xl font-bold text-white text-center mb-4">Reset Your Password</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 rounded-md bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />

      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md font-semibold transition"
      >
        {loading ? 'Resetting...' : 'Reset Password'}
      </button>

      {message && <p className="text-sm text-white text-center">{message}</p>}
      {error && <p className="text-sm text-red-200 text-center">{error.message.replace('GraphQL error: ', '')}</p>}
    </form>
  </div>
</div>

);

}
