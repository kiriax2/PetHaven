import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AdoptionForm.css';

const AdoptionForm = () => {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', contact: '', address: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const pet = location.state?.pet;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, contact, address } = formData;
    if (!name || !contact || !address) {
      setMessage('❌ Please fill in all fields.');
      return false;
    }
    if (!/^[0-9]{8,15}$/.test(contact)) {
      setMessage('❌ Contact number must be digits only (8–15 numbers).');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let adoptedPets = JSON.parse(localStorage.getItem('adoptedPets')) || [];
    const savedUser = JSON.parse(localStorage.getItem('user'));
    adoptedPets.push({
      name: pet.name,
      type: pet.type,
      breed: pet.breed,
      image: pet.image,
      owner: savedUser.username,
    });
    localStorage.setItem('adoptedPets', JSON.stringify(adoptedPets));

    setMessage(`🎉 Congratulations! You have successfully adopted ${pet.name}.`);
    setTimeout(() => navigate('/adoption'), 2500);
  };

  if (!pet) {
    return <p>No pet selected for adoption.</p>;
  }

  return (
    <div className="adopt-form-container">
      {/* 🐾 Pet info preview */}
      <div className="adopt-pet-card">
        <img src={pet.image} alt={pet.name} className="adopt-pet-image" />
        <div className="adopt-pet-details">
          <h2>{pet.name}</h2>
          <p><strong>Type:</strong> {pet.type}</p>
          <p><strong>Breed:</strong> {pet.breed}</p>
        </div>
      </div>

      {/* 📝 Form */}
      <h1>Adopt {pet.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Contact Number:</label>
        <input name="contact" value={formData.contact} onChange={handleChange} required />

        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} required />

        <button type="submit">Submit Adoption</button>
      </form>

      {message && (
        <p className={message.includes('🎉') ? 'success' : 'error'}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AdoptionForm;
