import React from 'react';

export default function HackathonDetails() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Event Dates */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Event Dates</h2>
          <p>The hackathon will take place from <strong>October 12th</strong> to <strong>October 14th, 2024</strong>.</p>
        </section>

        {/* Rules */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Rules</h2>
          <ul className="list-disc pl-6">
            <li>Teams must consist of 2-5 members.</li>
            <li>All work should be original and done during the hackathon period.</li>
            <li>Respect all participants and mentors.</li>
            <li>Follow the provided coding standards and submission guidelines.</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">FAQs</h2>
          <div className="mb-4">
            <h3 className="font-semibold">What is the theme of the hackathon?</h3>
            <p>The theme will be announced on the first day of the hackathon.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">How do I register?</h3>
            <p>You can register through the registration form available on the homepage.</p>
          </div>
          <div>
            <h3 className="font-semibold">Are there any participation fees?</h3>
            <p>No, participation is completely free.</p>
          </div>
        </section>

        {/* Prizes */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Prizes</h2>
          <p>Winners will receive the following prizes:</p>
          <ul className="list-disc pl-6">
            <li>1st Place: $5000 + mentorship opportunity</li>
            <li>2nd Place: $3000 + tech goodies</li>
            <li>3rd Place: $1500 + swag bags</li>
          </ul>
        </section>

        {/* Judging Criteria */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Judging Criteria</h2>
          <p>Projects will be judged on:</p>
          <ul className="list-disc pl-6">
            <li>Innovation and creativity</li>
            <li>Technical implementation</li>
            <li>Design and usability</li>
            <li>Impact and scalability</li>
          </ul>
        </section>

        {/* Sponsors */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Sponsors</h2>
          <p>We are proudly sponsored by:</p>
          <ul className="list-disc pl-6">
            <li>Google</li>
            <li>Microsoft</li>
            <li>GitHub</li>
            <li>Amazon Web Services (AWS)</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p>If you have any questions, feel free to reach out:</p>
          <p>Email: <a href="mailto:info@hackathon.com" className="text-blue-500">info@hackathon.com</a></p>
          <p>Phone: +123-456-7890</p>
        </section>
      </div>
    </div>
  );
}
