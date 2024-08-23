import React from 'react';
import CreateProfileForm, { profileData } from '../components/CreateProfileForm';

const ProfilePage: React.FC = () => {
  const handleProfileSubmit = (formData: profileData) => {
    console.log('Profile created:', formData);
    // Here you would typically send the formData to your backend
  };

  return (
    <div className="container mx-auto my-8">
      <CreateProfileForm onSubmit={handleProfileSubmit} />
    </div>
  );
};

export default ProfilePage;
