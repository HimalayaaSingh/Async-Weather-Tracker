

const API_KEY = '2ce37e88854cb9dab09eb258b9b3dd0d'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const btnLoader = document.getElementById('btn-loader');
const btnText = document.querySelector('.btn-text');
const weatherDisplay = document.getElementById('weather-display');
const errorMsg = document.getElementById('error-msg');

const cityNameEl = document.getElementById('city-name');
const dateDisplay = document.getElementById('date-display');
const tempEl = document.getElementById('temp');
const conditionEl = document.getElementById('condition');
const weatherIconEl = document.getElementById('weather-icon');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const historyList = document.getElementById('history-list');

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c[Event Loop] DOM Content Loaded (Synchronous)', 'color: green; font-weight: bold;');
    loadHistory();
    setTodayDate();
});

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if(city) handleSearch(city);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if(city) handleSearch(city);
    }
});


async function handleSearch(city) {

    console.log('--------------------------------');
    console.log('[Sync] 1. Function handleSearch called');
    console.log('[Sync] 2. Before Async Fetch Call');
    
    toggleLoader(true);
    errorMsg.style.display = 'none';
    weatherDisplay.style.display = 'none';

    try {
        
        const data = await fetchWeatherData(city);
        
       
        console.log('[Async] 5. Data received, updating UI');
        
        updateUI(data);
        saveToHistory(city);
        
    } catch (error) {
    
        console.error('[Error] Fetch failed:', error);
        showError(error.message);
    } finally {
        
        toggleLoader(false);
    }


    console.log('[Sync] 3. After Async Fetch Call (Event Loop continues)');
    console.log('--------------------------------');
}
function fetchWeatherData(city) {
    return fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
            console.log('[Promise] 4. Response received, checking status');
            if (!response.ok) {
                throw new Error(`City not found or API error (${response.status})`);
            }
            return response.json();
        })
        .catch(err => {
            throw err; 
        });
}


function updateUI(data) {
    cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
    tempEl.textContent = Math.round(data.main.temp);
    conditionEl.textContent = data.weather[0].description;
    humidityEl.textContent = `${data.main.humidity}%`;
    windEl.textContent = `${data.wind.speed} m/s`;
    
    
    const iconCode = data.weather[0].icon;
    weatherIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
    weatherDisplay.style.display = 'block';
    cityInput.value = ''; 
}

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
    
    errorMsg.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(5px)' },
        { transform: 'translateX(0)' }
    ], { duration: 300 });
}

function toggleLoader(isLoading) {
    if (isLoading) {
        btnLoader.style.display = 'block';
        btnText.style.display = 'none';
        searchBtn.disabled = true;
    } else {
        btnLoader.style.display = 'none';
        btnText.style.display = 'block';
        searchBtn.disabled = false;
    }
}

function setTodayDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
}


function saveToHistory(city) {
    let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
 
    if (!history.includes(city)) {
        history.unshift(city);
        if (history.length > 5) history.pop();
        localStorage.setItem('weatherHistory', JSON.stringify(history));
        loadHistory(); 
    }
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        historyList.innerHTML = '<li style="color:#999; font-size:0.8rem;">No recent searches</li>';
        return;
    }

    history.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        li.classList.add('history-item');
        li.addEventListener('click', () => {
            cityInput.value = city;
            handleSearch(city);
        });
        historyList.appendChild(li);
    });
}