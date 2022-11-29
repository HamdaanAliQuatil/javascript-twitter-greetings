// importing necessary modules
import Twitter from 'twitter';
import dotenv from 'dotenv';
import { format } from 'date-fns';

// loading environment variables
dotenv.config();

// creating a new instance of Twitter
const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// fetch the current day name
const today = format(new Date(), 'EEEE');

async function main(){
    const params = {
        location: 'Have a great ' + today + '!',
    }
    await client.post('account/update_profile', params);
    console.log('Profile updated!');
}

main().catch(e => console.error(e));
