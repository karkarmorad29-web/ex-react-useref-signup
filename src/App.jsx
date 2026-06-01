import { useState } from 'react'

import './App.css'

function App() {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experience.trim() ||
      Number(experience) <= 0 ||
      !description.trim()
    ) {
      alert('Error: Errore nella compilazione');
      return;
    }
    console.log('Submit effettuato:', {
      fullName,
      userName,
      password,
      specialization,
      experience,
      description,
    });
  }

  return (
    <div>

      <h1>Web developr</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome Completo</p>
          <input type="text"
            value={fullName} onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <label>
          <p>Username</p>
          <input type="text"
            value={userName} onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <label>
          <p>Password</p>
          <input type="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>specializzazione</p>
          <select value={specialization}
            onChange={e => setSpecialization(e.target.value)}
          >
            <option value="">Seleziona specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>

        <label>
          <p>Anni di esperienza</p>
          <input type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>

        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default App
