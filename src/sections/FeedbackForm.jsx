// FeedbackForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send feedback email using EmailJS
    const templateParams = {
      feedback: "This is a test feedback",
      user_email: "", // Your email or user input field for email
    };

    emailjs
      .send(
        "service_4u56dce",      // Your EmailJS service ID
        "template_4x4zxbd",     // Your EmailJS template ID
        templateParams,
        "_U3JAWowYbgSW75pk"          // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setMessage("Thanks for your feedback!");
          setFeedback("");  // Clear the feedback textarea
        },
        (error) => {
          console.log("FAILED...", error);
          setMessage("Sorry, there was an error. Please try again.");
        }
      );
  };

  return (
    <div className="feedback-form">
      <h2 className="text-center text-2xl mb-4">Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Write your feedback here..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-themeyellow"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-themepurple text-white px-6 py-3 w-full rounded-lg hover:bg-themeyellow hover:text-black focus:outline-none focus:ring-2 focus:ring-themeyellow transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit Feedback
        </button>
      </form>
      {message && (
        <div className="mt-4 text-center text-lg text-green-600">
          {message}
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
