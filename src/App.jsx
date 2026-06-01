import { useMemo, useRef, useState } from 'react';

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\"\\,.<>?/`~";

function App() {
  const fullNameRef = useRef(null);
  const specializationRef = useRef(null);
  const experienceRef = useRef(null);
  const [description, setDescription] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const isUsernameValid = useMemo(() => {
    const charsValid = userName.split('').every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    );
    return charsValid && userName.trim().length >= 6;
  }, [userName]);

  const ispasswordValid = useMemo(() => {

    return (
      password.trim().length >= 8 &&
      password.split('').some(char => letters.includes(char)) &&
      password.split('').some(char => numbers.includes(char)) &&
      password.split('').some(char => symbols.includes(char))
    );
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return (description.trim().length >= 100 &&
      description.trim().length < 1000
    );

  }, [description]);


  const handleSubmit = e => {
    e.preventDefault();

    const fullName = fullNameRef.current?.value || '';
    const specialization = specializationRef.current?.value || '';
    const experience = experienceRef.current?.value || '';

    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experience.trim() ||
      Number(experience) <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !ispasswordValid ||
      !isDescriptionValid
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
            ref={fullNameRef}
          />
        </label>
        <label>
          <p>Username</p>
          <input type="text"
            value={userName} onChange={(e) => setUserName(e.target.value)}
          />
          {userName.trim() && (
            <p style={{ color: isUsernameValid ? 'green' : 'red' }}>
              {isUsernameValid ? 'Username valido' : 'Deve avere almeno 6 caratteri alfanomerici.'}
            </p>
          )}
        </label>

        <label>
          <p>Password</p>
          <input type="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          {password.trim() && (
            <p style={{ color: ispasswordValid ? 'green' : 'red' }}>
              {ispasswordValid ? 'Password valida' : 'Deve avere almeno 8 caratteri, 1 lettera, 1 numero, 1 simbolo.'}
            </p>
          )}
        </label>
        <label>
          <p>specializzazione</p>
          <select
            ref={specializationRef}
            defaultValue=""
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
            ref={experienceRef}
          />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {description.trim() && (
            <p style={{ color: isDescriptionValid ? 'green' : 'red' }}>
              {isDescriptionValid ? 'Descrizione valid' : `Deve avere tra 100 e 1000 caratteri (${description.trim().length})`}
            </p>

          )}
        </label>

        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default App
