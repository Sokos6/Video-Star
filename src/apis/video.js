import axios from 'axios';

const KEY = 'AIzaSyD4uGpEqx-YsRv26-DhBw4WZypsS-YhdHg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY,
  },
});
