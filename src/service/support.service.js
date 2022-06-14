import axios from 'axios';
import { config } from './config';

export const aboutFormSubmission = (email, message, response) => {
    return axios.post(config.baseUrl + `/contact`, { email: email, message: message, recaptcha: response });
}
