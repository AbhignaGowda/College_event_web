'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useMousePosition from './useMousePosition'
import styles from './About.module.css'

const About = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 40

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <h1 className='text-white'>About</h1>
        <div
          className={styles.text}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
            <div class="container mx-auto px-4 py-8">
        <header class="text-center mb-8">
            <h1 class="text-4xl font-bold mb-4">About Our College Event</h1>
            <p class="text-lg">Welcome to the <span class="font-semibold">[Event Name]</span> at <span class="font-semibold">[College Name]</span>!</p>
        </header>

        <section class="mb-8">
            <h2 class="text-3xl font-semibold mb-4">🎮 Gaming Extravaganza</h2>
            <p class="text-lg mb-4">Join us for an exhilarating gaming experience where you can compete in various popular games and showcase your skills. From strategy games to fast-paced action, our gaming arena will be the place to be. Don’t miss out on:</p>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>Tournaments:</strong> Compete in thrilling tournaments with exciting prizes awaiting the winners.</li>
                <li><strong>Casual Play:</strong> Enjoy a relaxed gaming experience with friends and fellow gamers.</li>
                <li><strong>Gaming Challenges:</strong> Take on unique gaming challenges and win special rewards.</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-3xl font-semibold mb-4">🚀 Hackathon</h2>
            <p class="text-lg mb-4">Unleash your creativity and problem-solving skills at our hackathon! This is your chance to collaborate with peers, tackle real-world problems, and innovate solutions. Here’s what to expect:</p>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>Team Challenges:</strong> Form teams and work on cutting-edge projects that can make a difference.</li>
                <li><strong>Workshops:</strong> Participate in workshops to enhance your skills and learn new technologies.</li>
                <li><strong>Mentorship:</strong> Get guidance from industry experts and experienced mentors throughout the event.</li>
                <li><strong>Prizes:</strong> Win exciting prizes and gain recognition for your innovative solutions.</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-3xl font-semibold mb-4">📚 Workshops and Networking</h2>
            <p class="text-lg mb-4">Expand your horizons and connect with like-minded individuals through our workshops and networking sessions. Engage in:</p>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>Skill-building Workshops:</strong> Attend workshops on various topics, from coding and design to entrepreneurship.</li>
                <li><strong>Networking Opportunities:</strong> Meet industry professionals, mentors, and fellow participants to build valuable connections.</li>
            </ul>
        </section>

        <section>
            <h2 class="text-3xl font-semibold mb-4">🎁 Prizes and Awards</h2>
            <p class="text-lg mb-4">We believe in celebrating excellence! There will be various awards and prizes for the winners of the gaming tournaments, hackathon challenges, and other competitions.</p>
        </section>

        <section class="text-center mt-8">
            <h2 class="text-3xl font-semibold mb-4">📅 Event Details</h2>
            <p class="text-lg mb-2">Date: <span class="font-semibold">[Event Date]</span></p>
            <p class="text-lg mb-2">Time: <span class="font-semibold">[Event Time]</span></p>
            <p class="text-lg mb-2">Location: <span class="font-semibold">[Event Location]</span></p>
            <p class="text-lg mb-2">Registration: <span class="font-semibold">[Registration Details]</span></p>
            <p class="text-lg mt-4">Join us for an unforgettable experience filled with fun, learning, and innovation. We look forward to seeing you there!</p>
            <p class="text-lg mt-4">For more information, stay tuned to our website or contact us at <span class="font-semibold">[Contact Information]</span>.</p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quam numquam vero eveniet facere laudantium, voluptatibus amet illo magni repellat beatae. Quaerat suscipit qui odio non velit voluptatum at recusandae magnam tenetur neque temporibus, quod cum consequuntur libero culpa! Dicta similique labore autem doloribus. Atque qui quasi adipisci molestiae maxime magni temporibus. Odio, nam laboriosam? Magni dolore quo distinctio maxime repellat harum omnis, voluptates explicabo ducimus, asperiores laboriosam. Optio quidem maxime reiciendis non, molestias nisi enim perferendis assumenda cumque culpa similique ullam alias voluptate, qui commodi distinctio nesciunt aut. Deleniti at eos distinctio ullam, non iste libero natus alias et.
        </section>
    </div>
        </div>
      </motion.div>

      <div className={styles.body}>
        <p className={styles.text}>
          This event is more than just a competition — it's a celebration of ingenuity and collaboration. With workshops, networking opportunities, and challenges across various tech domains, we aim to inspire participants to push their limits, experiment with new ideas, and learn new skills. The hackathon is open to individuals and teams, and there are exciting prizes for the most innovative solutions across categories like AI, blockchain, sustainability, and more.

          Whether you are a tech novice or a seasoned professional, our hackathon is designed to cater to all skill levels. We are committed to creating an inclusive and engaging environment where everyone can thrive. Don’t miss out on this opportunity to be part of something special and make a lasting impact in the world of technology.
        </p>

        <section className={styles.details}>
          <h2 className='text-white'>Event Schedule</h2>
          <ul className={styles.schedule}>
            <li><strong>Day 1:</strong> Opening Ceremony, Keynote Speech, Team Formation</li>
            <li><strong>Day 2:</strong> Hackathon Begins, Workshop Sessions, Team Collaboration</li>
            <li><strong>Day 3:</strong> Project Presentations, Judging, Awards Ceremony, Closing Party</li>
          </ul>
        </section>

        <section className={styles.sponsors}>
          <h2 className='text-white'>Our Sponsors</h2>
          <p>We are proud to partner with leading tech companies and organizations that support innovation and creativity. Our sponsors include:</p>
          <ul className={styles.sponsorList}>
            <li>TechCorp</li>
            <li>Innovate Ltd.</li>
            <li>FutureTech Solutions</li>
            <li>CodeMasters</li>
          </ul>
        </section>

        
      </div>
    </main>
  )
}

export default About
