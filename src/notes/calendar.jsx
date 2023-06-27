import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { getAuthUrl, setCredentials, createEvent } from './googleCalendar';

const CalendarComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [eventSummary, setEventSummary] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');

  const handleGoogleLoginSuccess = async (response) => {
    try {
      await setCredentials(response.code);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error setting Google credentials:', error);
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();

    const event = {
      summary: eventSummary,
      startDateTime,
      endDateTime,
    };

    try {
      const createdEvent = await createEvent(event);
      console.log('Event created:', createdEvent);
      // Clear form fields
      setEventSummary('');
      setStartDateTime('');
      setEndDateTime('');
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Create Event</h1>
          <form onSubmit={handleEventSubmit}>
            <input
              type="text"
              placeholder="Event Summary"
              value={eventSummary}
              onChange={(e) => setEventSummary(e.target.value)}
            />
            <input
              type="datetime-local"
              placeholder="Start Date and Time"
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.target.value)}
            />
            <input
              type="datetime-local"
              placeholder="End Date and Time"
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.target.value)}
            />
            <button type="submit">Create Event</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Google Calendar Integration</h1>
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign in with Google"
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            scope="https://www.googleapis.com/auth/calendar.events"
            accessType="offline"
            responseType="code"
            isSignedIn={true}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
