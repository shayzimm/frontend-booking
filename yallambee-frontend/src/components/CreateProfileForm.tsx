import React, { useState } from 'react';

interface ProfileData {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  dob: string; // or Date
}

interface CreateProfileFormProps {
  onSubmit: (profileData: ProfileData) => void;
}

const CreateProfileForm: React.FC<CreateProfileFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProfileData>({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    phone: '',
    dob: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for email, username, firstName, lastName, phone, dob */}
      {/* Example for email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add other input fields in a similar way */}
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreateProfileForm;
