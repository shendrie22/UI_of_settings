import React, { useState } from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';

const UserFeedback = () => {
  const [activeTab, setActiveTab] = useState('feedback');
  const [showImage, setShowImage] = useState(false);
  const [imageUrl] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'feedback':
        return (
          <div className="border rounded p-4 w-[110%] h-[500px]">
            <h2 className="text-lg font-semibold mb-4">Rate your experience!</h2>
            <div className="flex items-center space-x-6">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      className="hidden"
                    />
                    <FaStar
                      className="star cursor-pointer"
                      color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                      size={20}
                    />
                  </label>
                );
              })}
            </div>

            <p className="mt-8 text-lg font-semibold">How was your experience with using SpotDesk?</p>
            <div className="flex flex-col items-end mt-4 w-3/6">
              <textarea
                className="w-full p-2 border rounded bg-gray-100"
                rows="9"
                placeholder="Tell us what can be improved..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <button
                className="mt-4 py-2 px-2 bg-black text-white rounded self-end cursor-pointer"
                onClick={() => {
                  console.log('Rating:', rating);
                  console.log('Feedback:', feedback);
                  // alert('Thank you for your feedback!');
                }}
              >
                Submit feedback
              </button>
            </div>
          </div>
        );

      case 'faqs':
        return (
          <div className="border rounded p-4 w-[110%] h-[500px]">
            {/* for now blanko n=muna update nalang namin tokapag meron nang content */}
          </div>
        );
      case 'guidelines':
        return (
          <div className="border rounded p-4 w-[110%] h-[500px]">
            {/* same din dito */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-4">
        {activeTab === 'feedback' ? 'Feedback' : activeTab === 'faqs' ? 'FAQs' : 'Guidelines'}
      </h1>
      <p className="text-base pb-12">
        {activeTab === 'feedback'
          ? 'Send us your feedback by answering the form below.'
          : activeTab === 'faqs'
          ? 'Frequently asked questions.'
          : 'The guide is designed to help the users easily utilize the features of SpotDesk system.'}
      </p>
      <div className="flex mb-0 border-b">
        <button
          className={`py-2 px-16 text-center mr-2 border rounded font-semibold ${activeTab === 'feedback' ? 'bg-black text-white' : 'text-black'}`}
          onClick={() => setActiveTab('feedback')}
        >
          Feedback
        </button>
        <button
          className={`px-20 text-center mr-2 border rounded font-semibold ${activeTab === 'faqs' ? 'bg-black text-white' : 'text-black'}`}
          onClick={() => setActiveTab('faqs')}
        >
          FAQs
        </button>
        <button
          className={`px-16 text-center mr-2 border rounded font-semibold ${activeTab === 'guidelines' ? 'bg-black text-white' : 'text-black'}`}
          onClick={() => setActiveTab('guidelines')}
        >
          Guidelines
        </button>
      </div>
      {renderContent()}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded relative">
            <img src={imageUrl} alt="Desk Map" className="max-w-full h-auto" />
            <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={() => setShowImage(false)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default UserFeedback;
