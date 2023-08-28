import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () =>{
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51NegO4CFSFv9HZRaUNYN8I30wbAbzSKI7tYKIYt7qpEWWEszRvoMkoPMeKmW8eV7SqXyfhC6hKi72UiXDU8jNKYi006S8wh3J6');
    }

    return stripePromise;
}

export default getStripe;