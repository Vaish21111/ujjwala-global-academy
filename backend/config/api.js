// API Configuration

import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.VITE_FUNAPIKEY;
export const API_CONFIG = {
  // API Ninjas Configuration
  API_NINJAS: {
    BASE_URL: 'https://api.api-ninjas.com/v1',
    API_KEY: apiKey, // Replace with your actual API key
    ENDPOINTS: {
      FACTS: '/facts'
    }
  }
};

// Helper function to get API Ninjas headers
export const getApiNinjasHeaders = () => ({
  'X-Api-Key': API_CONFIG.API_NINJAS.API_KEY,
  'Content-Type': 'application/json'
});

