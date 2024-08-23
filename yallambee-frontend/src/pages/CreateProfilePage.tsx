import React from 'react';
import CreateProfileForm from '../components/CreateProfileForm';

const CreateProfilePage: React.FC = () => {
  const handleProfileSubmit = (profileData: ProfileData) => {
    console.log('Profile data:', profileData);
    // Submit the profile data to the backend or state management
  };

  return (
    <div className="container mx-auto my-8">
      <CreateProfileForm onSubmit={handleProfileSubmit} />
    </div>
  );
};

export default CreateProfilePage;
