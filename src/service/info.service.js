import axios from 'axios';
import { config } from './config';

export const getInfo = () => {
    return axios.get(config.baseUrl + `/info`);
}
