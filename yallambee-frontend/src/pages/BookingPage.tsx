import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage: React.FC = () => {
    return (
        <div className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-6">Book Your Stay</h2>
            <p className="text-sm">Please select a minimum of 2 days</p>
            <BookingForm />
        </div>
    );
};

export default BookingPage;
