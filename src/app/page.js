"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    const avatarFile = document.querySelector('#avatarInput')?.files?.[0];

    if (!name || !surname || !email) {
      alert("Please fill out the first name, last name, and email fields.");
      return;
    }

    const userData = {
      name,
      surname,
      email,
      phone,
      about,
      avatar: avatarFile ? URL.createObjectURL(avatarFile) : null,
    };

    localStorage.setItem('portfolioData', JSON.stringify(userData));
    router.push('/preview');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 px-4">
      <div className="bg-white w-full max-w-3xl h-auto p-6 sm:p-8 border-2 rounded-2xl">
        <h1 className="text-black text-2xl sm:text-3xl text-center font-bold mb-6">
          Let's create your portfolio
        </h1>

        <div className="text-center mb-4">
          <h2 className="font-bold text-base sm:text-lg">Upload Your Avatar</h2>
          <input
            id="avatarInput"
            type="file"
            accept="image/*"
            className="mt-2 border-2 border-black rounded-2xl p-2 w-full sm:w-auto"
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>

        {/* Name */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4 mb-4">
          <label className="text-black text-base sm:text-xl font-bold w-32">Name:</label>
          <input
            type="text"
            className="flex-1 h-10 border-2 border-black rounded-2xl pl-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Surname */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4 mb-4">
          <label className="text-black text-base sm:text-xl font-bold w-32">Surname:</label>
          <input
            type="text"
            className="flex-1 h-10 border-2 border-black rounded-2xl pl-2 w-full"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4 mb-4">
          <label className="text-black text-base sm:text-xl font-bold w-32">E-mail:</label>
          <input
            type="email"
            className="flex-1 h-10 border-2 border-black rounded-2xl pl-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4 mb-4">
          <label className="text-black text-base sm:text-xl font-bold w-32">Phone No:</label>
          <input
            type="number"
            className="flex-1 h-10 border-2 border-black rounded-2xl pl-2 w-full no-spinner"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* About You */}
        <div className="flex flex-col sm:flex-row items-start gap-x-4 mb-6">
          <label className="text-black text-base sm:text-xl font-bold w-32 pt-1">About You:</label>
          <textarea
            className="flex-1 h-24 border-2 border-black rounded-2xl p-2 resize-none w-full"
            placeholder="Tell us about yourself..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button
            className="w-32 h-10 bg-black text-white rounded-2xl font-bold hover:bg-gray-900 transition"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
