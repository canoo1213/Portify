'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PreviewPage() {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('portfolioData');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Your Portfolio</h1>
      
      <div className="bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-3xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {data.avatar && (
          <img
            src={data.avatar}
            alt="Avatar"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover"
          />
        )}

        <div className="space-y-2 text-center sm:text-left">
          <p className='font-bold text-xl sm:text-2xl'>{data.name} <span>{data.surname}</span></p>
          <p className='font-medium'>{data.email}</p>
          <p className='font-medium'>{data.phone}</p>
          <p className='font-medium whitespace-pre-line'>{data.about}</p>
        </div>
      </div>

      <button
        onClick={() => router.push('/')}
        className="mt-8 px-6 py-2 bg-white text-black rounded-xl hover:bg-gray-200 font-semibold"
      >
        Geri Dön
      </button>
    </div>
  );
}
