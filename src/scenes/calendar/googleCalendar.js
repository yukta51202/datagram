import { google } from 'googleapis';

// Load credentials from environment variables or configuration file
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

// Create an OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Generate the authentication URL
export const getAuthUrl = () => {
  const scopes = ['https://www.googleapis.com/auth/calendar.events'];
  return oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
};

// Set credentials based on the authorization code
export const setCredentials = async (code) => {
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
};

// Create a new event in the user's Google Calendar
export const createEvent = async (event) => {
  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  const eventData = {
    summary: event.summary,
    start: {
      dateTime: event.startDateTime,
    },
    end: {
      dateTime: event.endDateTime,
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: eventData,
    });

    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};
