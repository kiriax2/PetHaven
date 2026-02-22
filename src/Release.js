import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Release.css';

const Release = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (!isLoggedIn || !savedUser) {
      alert('Please log in to view your adopted pets.');
      navigate('/login');
      return;
    }

    setUser(savedUser);

    const allAdopted = JSON.parse(localStorage.getItem('adoptedPets')) || [];
    const userPets = allAdopted.filter(
      (p) => p && p.owner === savedUser.username && p.name && p.image
    );
    setAdoptedPets(userPets);
  }, [isLoggedIn, navigate]);

  const handleRelease = (pet) => {
    if (!pet || !pet.name) return;

    // Remove this pet from allAdopted list
    const allAdopted = JSON.parse(localStorage.getItem('adoptedPets')) || [];
    const updated = allAdopted.filter(
      (p) => !(p.name === pet.name && p.owner === user.username)
    );
    localStorage.setItem('adoptedPets', JSON.stringify(updated));

    // Update local state
    setAdoptedPets(updated.filter((p) => p.owner === user.username));

    alert(`${pet.name} has been released and is now available for adoption again.`);
  };

  if (!isLoggedIn) return null;

  return (
    <div className="release-container">
      <h1>My Adopted Pets</h1>
      <p>Manage your adopted pets here. You can release them if you wish to rehome them.</p>

      {adoptedPets.length === 0 ? (
        <p>You haven’t adopted any pets yet.</p>
      ) : (
        <div className="release-grid">
          {adoptedPets.map((pet, index) => (
            <div key={index} className="release-card">
              {pet.image && <img src={pet.image} alt={pet.name} />}
              <h3>{pet.name}</h3>
              <p><strong>Breed:</strong> {pet.breed}</p>
              <p><strong>Type:</strong> {pet.type}</p>
              <button onClick={() => handleRelease(pet)}>Release</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Release;
