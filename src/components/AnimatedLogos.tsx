import React from 'react';

const AnimatedLogos = () => {
  return (
    <div className="animated-logos-container">
      {/* React Logo */}
      <div className="floating-logo logo-react">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12 1C15.5 1 18.5 2.5 20.5 5C22.5 7.5 23 10.5 23 12C23 13.5 22.5 16.5 20.5 19C18.5 21.5 15.5 23 12 23C8.5 23 5.5 21.5 3.5 19C1.5 16.5 1 13.5 1 12C1 10.5 1.5 7.5 3.5 5C5.5 2.5 8.5 1 12 1Z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
          <path d="M12 5C15 5 17.5 6 19 7.5C20.5 9 21 10.5 21 12C21 13.5 20.5 15 19 16.5C17.5 18 15 19 12 19C9 19 6.5 18 5 16.5C3.5 15 3 13.5 3 12C3 10.5 3.5 9 5 7.5C6.5 6 9 5 12 5Z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
          <path d="M12 9C13.5 9 15 9.5 16 10.5C17 11.5 17.5 13 17.5 12C17.5 11 17 9.5 16 8.5C15 7.5 13.5 7 12 7C10.5 7 9 7.5 8 8.5C7 9.5 6.5 11 6.5 12C6.5 13 7 14.5 8 15.5C9 16.5 10.5 17 12 17C13.5 17 15 16.5 16 15.5C17 14.5 17.5 13 17.5 12" stroke="#61DAFB" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* Google Logo */}
      <div className="floating-logo logo-google">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>

      {/* JavaScript Logo */}
      <div className="floating-logo logo-javascript">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
          <path d="M7.5 18.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5v-6h-2v6c0 .5-.5 1-1 1s-1-.5-1-1h-1z" fill="#000"/>
          <path d="M14.5 21c1.5 0 2.5-.5 3-1.5.5-1 .5-2 0-3-.5-1-1.5-1.5-3-1.5h-1v2h1c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1h-2c0 1.5 1 2.5 2.5 2.5z" fill="#000"/>
        </svg>
      </div>

      {/* Python Logo */}
      <div className="floating-logo logo-python">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.5 2 6 4.5 6 8v2h6v1H6c-2 0-4 1.5-4 4s2 4 4 4h2v-2c0-2 2-4 4-4h6c2 0 4-2 4-4V8c0-3.5-2.5-6-6-6h-6z" fill="#3776AB"/>
          <path d="M12 22c3.5 0 6-2.5 6-6v-2h-6v-1h6c2 0 4-1.5 4-4s-2-4-4-4h-2v2c0 2-2 4-4 4H6c-2 0-4 2-4 4v1c0 3.5 2.5 6 6 6h4z" fill="#FFD43B"/>
          <circle cx="9" cy="6" r="1" fill="#FFF"/>
          <circle cx="15" cy="18" r="1" fill="#FFF"/>
        </svg>
      </div>

      {/* Node.js Logo */}
      <div className="floating-logo logo-nodejs">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z" fill="#8CC84B"/>
          <path d="M12 1.85v20.3c.27 0 .55-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z" fill="#689F38"/>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedLogos;