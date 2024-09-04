'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Howl } from 'howler';

let sendSound = null;
let receiveSound = null;

const initializeSounds = () => {
  if (!sendSound) {
    sendSound = new Howl({
      src: ['/send.mp3'],
      volume: 1,
      onload: () => console.log('Send sound loaded successfully'),
      onloaderror: (id, error) => console.error('Error loading send sound:', error),
    });
  }
  if (!receiveSound) {
    receiveSound = new Howl({
      src: ['/receive.mp3'],
      volume: 1,
      onload: () => console.log('Receive sound loaded successfully'),
      onloaderror: (id, error) => console.error('Error loading receive sound:', error),
    });
  }
};

const SeenBy = ({ users, delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`flex items-center space-x-2 mt-2 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {users.map((user, index) => (
        <div
          key={index}
          className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-semibold"
        >
          {user[0]}
        </div>
      ))}
    </div>
  );
};

const ChatMessage = ({ message, isUser, onMessageDisplayed }) => {
  const [typing, setTyping] = useState(!isUser);

  useEffect(() => {
    if (!isUser) {
      const timer = setTimeout(() => {
        setTyping(false);
        onMessageDisplayed();
      }, 1500); // Adjust typing delay as needed
      return () => clearTimeout(timer);
    } else {
      onMessageDisplayed(); // Ensure message displayed callback is triggered for user messages
    }
  }, [isUser, onMessageDisplayed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} mb-4 px-2 sm:px-4`}
    >
      <span className="text-xs sm:text-sm text-gray-500 mb-1">{message.user}</span>
      <div
        className={`rounded-3xl py-2 px-4 sm:py-3 sm:px-5 max-w-xs sm:max-w-md ${isUser ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'} shadow-lg`}
      >
        {typing ? (
          <div className="flex space-x-1">
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                ease: 'easeInOut',
                delay: 0.4,
              }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />
          </div>
        ) : (
          <p className="text-sm">{message.text}</p>
        )}
      </div>
      {!isUser && (
        <SeenBy 
          users={['Raj', 'Shobitha', 'Hrishikesh', 'Kannika']} 
          delay={1.65}
        />
      )}
    </motion.div>
  );
};

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { text: 'Hey, did you guys hear about the college fest !! 🤠', isUser: false, user: 'Raj' },
    { text: 'No way! When is it? 🤔', isUser: false, user: 'Shobitha' },
    { text: 'It’s on October 25th. There’s going to be a bunch of cool stuff—workshops, competitions, and a ton of fun activities. 🔥', isUser: false, user: 'Hrishikesh' },
    { text: 'That sounds awesome! What’s the theme this year?🤠', isUser: false, user: 'Kannika' },
    { text: 'Awesome, thanks for the info!🤠', isUser: false, user: 'Binod' },
  ]);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const [showReplyOptions, setShowReplyOptions] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState({ send: false, receive: false });
  const [showLetsGoButton, setShowLetsGoButton] = useState(false); // New state for Let's Go button
  const chatContainerRef = useRef(null); // Create a reference for the chat container

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!audioInitialized) {
        initializeSounds();
        setAudioInitialized(true);
        document.removeEventListener('click', handleUserInteraction);
      }
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [audioInitialized]);

  useEffect(() => {
    if (currentIndex < messages.length) {
      const showNextMessage = () => {
        const message = messages[currentIndex];
        setVisibleMessages((prev) => [...prev, message]);
        setCurrentIndex(currentIndex + 1);

        // Reset sound played state
        setSoundPlayed({ send: false, receive: false });
      };

      const timer = setTimeout(showNextMessage, 2400);

      return () => clearTimeout(timer);
    } else {
      // All messages are displayed, show reply options
      setShowReplyOptions(true);
      setShowLetsGoButton(true); // Show Let's Go button
    }
  }, [currentIndex, messages]);

  const handleMessageDisplayed = useCallback(() => {
    const lastMessage = visibleMessages[visibleMessages.length - 1];
    
    if (lastMessage && !lastMessage.isUser && !soundPlayed.receive && receiveSound) {
      console.log('Playing receive sound');
      receiveSound.play();
      setSoundPlayed((prev) => ({ ...prev, receive: true }));
    }

    if (lastMessage && lastMessage.isUser && !soundPlayed.send && sendSound) {
      console.log('Playing send sound');
      sendSound.play();
      setSoundPlayed((prev) => ({ ...prev, send: true }));
    }
  }, [visibleMessages, soundPlayed]);

  useEffect(() => {
    handleMessageDisplayed();
  }, [visibleMessages, handleMessageDisplayed]);

  useEffect(() => {
    // Scroll the chat container to the bottom whenever new messages are added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  const addMessage = (text, isUser) => {
    const newMessage = { text, isUser, user: isUser ? 'You' : 'Unknown' };
    setMessages((prev) => [...prev, newMessage]);

    if (isUser) {
      setShowReplyOptions(false); // Hide options immediately after sending a message
    }
  };

  // Scroll to Hero section when "Let's Go" button is clicked
  const handleLetsGoClick = () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render reply options when all messages are displayed
  const renderReplyOptions = () => {
    const options = [
      'Should be really interesting!😅?',
      'Cool 😎',
    ];

    return (
      <div className="flex space-x-4 justify-center py-2 absolute bottom-24 left-1/2 transform -translate-x-1/2">
        {options.map((option, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 text-lg font-semibold shadow-lg"
            onClick={() => addMessage(option, true)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="relative bg-gray-900 h-screen overflow-hidden">
      <div ref={chatContainerRef} className="overflow-auto p-4 pb-16">
        <div className="flex flex-col">
          <AnimatePresence>
            {visibleMessages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg}
                isUser={msg.isUser}
                onMessageDisplayed={handleMessageDisplayed}
              />
            ))}
          </AnimatePresence>
          {showReplyOptions && renderReplyOptions()}
        </div>
      </div>
      {showLetsGoButton && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 text-lg font-semibold shadow-lg"
            onClick={handleLetsGoClick}
          >
            Let&apos;s Go!
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
