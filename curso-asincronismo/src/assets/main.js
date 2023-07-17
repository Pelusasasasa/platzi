const axios = require('axios') ;
const API = "https://youtube-v3-alternative.p.rapidapi.com/video";

const options = {
  method: 'GET',
  params: {id: 'dQw4w9WgXcQ'},
  headers: {
    'X-RapidAPI-Key': '8b0498cf0cmsh9237da6b6416cc9p1d5fc4jsndd65375138de',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
    const response = await axios.request(urlApi,options);
    console.log(response.data);
};

(async () => {
    try {
        const videos = await fetchData(API);
        let viwe = `
        ${videos.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
        `)}
        `;
    } catch (error) {
        
    }
})();