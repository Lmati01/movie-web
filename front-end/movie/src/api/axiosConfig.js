import axios from 'axios';
export default axios.create({
baseURL:'https://9c96-103-106239104-.ap.ngrok.io',
headers:{"ngrok-skip-browser-warning":"true"}
});