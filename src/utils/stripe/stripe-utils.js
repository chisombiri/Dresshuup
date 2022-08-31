// let's me know this is MY stripe instance
import { loadStripe } from "@stripe/stripe-js";

//get the .env file from react to load strip instance with publishable key
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
