// importing necessary modules
import Twitter from 'twitter';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { format } from 'date-fns';

// loading environment variables
dotenv.config();

// creating a new instance of Twitter
const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});


