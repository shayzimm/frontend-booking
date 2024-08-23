import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    // Submit the booking data to your backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Guests</label>
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
        </select>
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
