import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mt-2">
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
        <div className="mb-4">
          <label className="block mb-2">Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={() => login(username, password)}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Se connecter
        </button>
      </div>
    </div>
  );
}

export default Login;
