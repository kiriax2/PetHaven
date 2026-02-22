import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adoption.css';

const Adoption = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [filterBreed, setFilterBreed] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('adoptedPets')) || [];
    setAdoptedPets(saved);
  }, []);

  const pets = [
    { name: 'Loki', type: 'Cat', breed: 'Maine Coon', age: 4, gender: 'Male', status: 'Ready for Adoption', image: '/images/2.jpg' },
    { name: 'Philip', type: 'Dog', breed: 'German Shepherd', age: 5, gender: 'Female', status: 'Ready for Adoption', image: '/images/1.jpg' },
    { name: 'Nala', type: 'Cat', breed: 'Persian', age: 5, gender: 'Female', status: 'Ready for Adoption', image: '/images/3.jpg' },
    { name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', age: 3, gender: 'Male', status: 'Ready for Adoption', image: '/images/4.jpg' },
    { name: 'Coco', type: 'Dog', breed: 'Poodle', age: 2, gender: 'Female', status: 'Ready for Adoption', image: '/images/5.jpg' },
  ];

  const isAdopted = (petName) => adoptedPets.some((p) => p.name === petName);

  const handleAdopt = (pet) => {
    if (!isLoggedIn) {
      alert('Please log in before adopting a pet.');
      navigate('/login');
      return;
    }
    navigate('/adopt-form', { state: { pet } });
  };

  const filteredPets = pets
    .filter((p) => (filterType === 'All' || p.type === filterType))
    .filter((p) => (filterBreed === 'All' || p.breed === filterBreed))
    .filter((p) => (filterStatus === 'All' || p.status === filterStatus))
    .sort((a, b) => (sortOrder === 'asc' ? a.age - b.age : b.age - a.age));

  return (
    <div className="adoption-container">
      <h1>Looking for a Home</h1>
      <p>Meet our adorable pets waiting for their forever families.</p>

      {/* Filters */}
      <div className="filter-bar">
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option>All</option>
          <option>Cat</option>
          <option>Dog</option>
        </select>

        <select value={filterBreed} onChange={(e) => setFilterBreed(e.target.value)}>
          <option>All</option>
          <option>Bengal</option>
          <option>Siamese</option>
          <option>Persian</option>
          <option>Golden Retriever</option>
          <option>Poodle</option>
        </select>

        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option>All</option>
          <option>Ready for Adoption</option>
          <option>Under Rehab</option>
        </select>

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Sort by Age (Young → Old)</option>
          <option value="desc">Sort by Age (Old → Young)</option>
        </select>
      </div>

      {/* Pet Grid */}
      <div className="pet-grid">
        {filteredPets.map((pet, index) => {
          const adopted = isAdopted(pet.name) || pet.status !== 'Ready for Adoption';
          return (
            <div key={index} className="pet-card">
              <img src={pet.image} alt={pet.name} className="pet-image" />
              <div className="pet-info">
                <h3>{pet.name}</h3>
                <p>Type: {pet.type}</p>
                <p>Breed: {pet.breed}</p>
                <p>Age: {pet.age}</p>
                <p>Gender: {pet.gender}</p>

                <p className={`status ${adopted ? 'unavailable' : 'available'}`}>
                  {adopted ? 'Not Available' : pet.status}
                </p>

                {adopted ? (
                  <button className="adopt-btn disabled" disabled>
                    Not Available
                  </button>
                ) : (
                  <button className="adopt-btn" onClick={() => handleAdopt(pet)}>
                    Adopt Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Adoption;
