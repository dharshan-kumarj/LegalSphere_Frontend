import React, { useState, useRef } from 'react';
import { Paperclip, Send } from 'lucide-react';

const InputBox = () => {
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload logic here
      console.log('Selected file:', file.name);
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message logic here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Spacing div to prevent content from being hidden behind fixed input */}
      <div className="h-24" />

      {/* Fixed input box at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            {/* File attachment button */}
            <button 
              onClick={handleFileClick}
              className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Paperclip className="h-6 w-6 text-gray-500" />
            </button>

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Message input */}
            <div className="flex-grow">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type here..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Send button */}
            <button
              onClick={handleSend}
              className={`flex-shrink-0 p-2 rounded-full transition-colors ${
                message.trim() 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-gray-100 text-gray-400'
              }`}
              disabled={!message.trim()}
            >
              <Send className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;