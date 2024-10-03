import axios from 'axios';

export default axios.create({
    baseURL:'https://4d64-2603-7000-413e-fb51-5468-f1d2-4c68-4e48.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});