var global_country =document.getElementById("global-country");
global_year = document.getElementById("global-year");
var global_search_btn = document.getElementById("global-search-btn");
let current_city 
var selectedCountryCode
var selectedYear =2026
var borders = ""
 let cites
 let page_title   = document.getElementById("page-title");
var page_subtitle = document.getElementById("page-subtitle");
var asideLinks = document.querySelectorAll(".sidebar-nav a");
let today = new Date().toISOString().split('T')[0];
let current_datetime =document.getElementById("current-datetime");
let stat_holidays = document.getElementById("stat-holidays");
let stat_events = document.getElementById("stat-events");
let stat_saved = document.getElementById("stat-saved");
var holidays_events_longweekends = JSON.parse(localStorage.getItem("allCards")) || [];;


 // End of variables
console.log(asideLinks);

function getFormattedDateTime() {
    const now = new Date();
    
    const options = { 
        weekday: 'short',
        month: 'short',     
        day: 'numeric',     
        hour: '2-digit',    
        minute: '2-digit',  
        hour12: true        
    };
    let formatted = now.toLocaleString('en-US', options);
    return formatted; 
}
current_datetime.innerText = getFormattedDateTime();
setInterval(() => { 
    current_datetime.innerText = getFormattedDateTime();
}, 60000);


getAllCountries()

async function getAllCountries() {
    console.log("Fetching all countries...");
    let response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
     countriesData = await response.json();
    console.log(countriesData)
    displayCountries(countriesData);
   
}

function displayCountries(countries)
{
   var cartona = `  <option value="" selected>Select Country</option>`;
   for (var i = 0; i < countries.length; i++) {
       cartona += `
      
                    <option value="${countries[i].countryCode}">${countries[i].name}</option>
       `;
   }
   global_country.innerHTML = cartona;


  global_country.addEventListener("change",function(){
    selectedCountryCode = global_country.value;
    var selectedCountryname = global_country.options[global_country.selectedIndex].text;
    console.log("Selected Country Code:",selectedCountryname); 
    getAllCity(selectedCountryCode,selectedCountryname);


    global_year.addEventListener("change",function(){
        selectedYear = global_year.value;
        console.log("Selected Year:",selectedYear); 
    }
        
    );
  });

}


async function getAllCity(countryCode,selectedCountryname) {
    console.log("Fetching all city...");
    let response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    cites = await response.json();
    console.log(cites);
        document.getElementById("selected-destination").innerHTML= ` 
    <div class="selected-flag">
                  <img id="selected-country-flag" src="https://flagcdn.com/w40/${countryCode.toLowerCase()}.png" alt="country-flag">
                </div>
                <div class="selected-info">
                  <span class="selected-country-name" id="selected-country-name">${selectedCountryname}</span>
                  <span class="selected-city-name" id="selected-city-name">• ${cites[0].capital[0]}</span>
                </div>
                <button class="clear-selection-btn" id="clear-selection-btn">
                  <i class="fa-solid fa-xmark"></i>
                </button>`
                document.getElementById("global-city").innerHTML= `
                <option value="${cites[0].capital[0]}">${cites[0].capital[0]}</option>
                `;
    current_city = cites[0].capital[0];
}

async function global_search_btnF(hamada=1)
{
  if (hamada==1) {
     console.log(cites);
    console.log(cites[0].capitalInfo.latlng[0]);
    console.log(cites[0].capitalInfo.latlng[0]);
   if (cites[0].borders)
     {
     for (let index = 0; index < cites[0].borders.length; index++) {
        borders += `<span class="extra-tag border-tag">${cites[0].borders[index]}</span>`;
        
    }
   }
   
    const currencies = cites[0].currencies;


const currencyKey = Object.keys(currencies)[0]; 


const name = currencies[currencyKey].name;
const symbol = currencies[currencyKey].symbol;

function getTimeByTimezone(offsetString) 
{
    const offset = parseInt(offsetString.replace("UTC", ""));
  
  
    const now = new Date();
    const utcDate = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

    
    const targetDate = new Date(utcDate.getTime() + (offset * 3600000));

    
    return targetDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}


const timezoneFromAPI = "UTC-03:00"; 
console.log(getTimeByTimezone(timezoneFromAPI)); 

setInterval(() => {
    const currentTime = getTimeByTimezone("UTC-03:00");
    document.querySelector('#country-local-time').innerText = currentTime;
}, 1000);

      document.getElementById("dashboard-country-info-section").innerHTML= ` 
     <div class="section-header">
              <h2><i class="fa-solid fa-flag"></i> Country Information</h2>
            </div>
            <div id="dashboard-country-info" class="dashboard-country-info">
              
              <div class="dashboard-country-header">
                     <img id="dashboard-country-flag" src="${cites[0].flags.png}" alt="${cites[0].flags.alt}"  
                class="dashboard-country-flag">

                <div class="dashboard-country-title">
                  <h3 id="dashboard-country-name">${cites[0].name.common}</h3>
                  <p id="official-name" class="official-name">${cites[0].name.official}</p>
                  <span id="region" class="region"><i class="fa-solid fa-location-dot"></i> ${cites[0].continents[0]} • ${cites[0].subregion}</span>
                </div>
              </div>
              
              <div class="dashboard-local-time">
                <div class="local-time-display">
                  <i class="fa-solid fa-clock"></i>
                  <span class="local-time-value" id="country-local-time">${getTimeByTimezone(timezoneFromAPI)}</span>
                  <span id="local-time-zone" class="local-time-zone">${cites[0].timezones[0]}</span>
                </div>
              </div>
              
              <div class="dashboard-country-grid">
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-building-columns"></i>
                  <span class="label">Capital</span>
                  <span id="Capital" class="value">${cites[0].capital[0]}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-users"></i>
                  <span class="label">Population</span>
                  <span id="Population" class="value">${cites[0].population}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-ruler-combined"></i>
                  <span class="label">Area</span>
                  <span id="Area" class="value">${cites[0].area} km²</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-globe"></i>
                  <span class="label">Continent</span>
                  <span id="Continent" class="value">${cites[0].continents[0]}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-phone"></i>
                  <span class="label">Calling Code</span>
                  <span id="Calling_Code" class="value">${cites[0].continents[0]}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-car"></i>
                  <span class="label">Driving Side</span>
                  <span id="Driving_Side" class="value">${cites[0].car.side}</span>
                </div>
                <div class="dashboard-country-detail">
                  <i class="fa-solid fa-calendar-week"></i>
                  <span class="label">Week Starts</span>
                  <span id="Week_Starts" class="value">${cites[0].startOfWeek}</span>
                </div>
              </div>
              
              <div class="dashboard-country-extras">
                <div class="dashboard-country-extra">
                  <h4><i class="fa-solid fa-coins"></i> Currency</h4>
                  <div class="extra-tags">
                    <span id="Currency" class="extra-tag"> ${name} (${selectedCountryCode} ${symbol})</span>
                  </div>
                </div>
                <div class="dashboard-country-extra">
                  <h4><i class="fa-solid fa-language"></i> Languages</h4>
                  <div class="extra-tags">
                    <span id="Languages" class="extra-tag">${Object.values(cites[0].languages)}</span>
                  </div>
                </div>
                <div class="dashboard-country-extra">
                  <h4><i class="fa-solid fa-map-location-dot"></i> Neighbors</h4>
                  <div id="Neighbors" class="extra-tags">
                  ${borders}
                  </div>
                </div>
              </div>
              
              <div class="dashboard-country-actions">
                <a href="${cites[0].maps.googleMaps}" target="_blank" class="btn-map-link">
                  <i class="fa-solid fa-map"></i> View on Google Maps
                </a>
              </div>
              
            </div>
  `
  console.log("borders elements:", borders);
 /*borders.forEach(element => {
   element.addEventListener("click",function(){
        selectedCountryCode = element.innerText;
        var selectedCountryname = element.innerText;
        console.log("Selected Country Code:",selectedCountryname); 
        getAllCity(selectedCountryCode,selectedCountryname);
    });
  });*/  ;
  }
  else{

  }
   
}

global_search_btn.addEventListener("click",function(){
      global_search_btnF(); 
}
)

// End of Dashboard

asideLinks.forEach(link => {
    let targetId
    link.addEventListener("click", function(event) {
         
        asideLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      
          targetId = this.getAttribute("data-view");
          console.log("Target ID:", targetId);
        let targetSection = document.getElementById(targetId);
        document.querySelectorAll("section").forEach(section => {
            section.classList.remove("active");
        });
        targetSection.classList.add("active");

         if (targetId=="holidays-view") {
    loadHolidays();
   
   
    }

     else if (targetId=="events-view") {
        if (cites) {
          loadEvents(4);
    }
    else{
        page_title.innerText = "Events";
  //page_subtitle.innerText = `Explore exciting events happening in ${current_city}, ${global_country.options[global_country.selectedIndex].text}. From concerts to festivals, discover what's on and plan your visit accordingly!`;
  page_subtitle.innerText = `Find concerts, sports, and entertainment`;
       document.getElementById("loading-overlay").classList.remove("hidden");
         setTimeout(() => {
            document.getElementById("loading-overlay").classList.add("hidden");
          }, 500);
         document.getElementById("events-content").innerHTML = " `<p class = \"d-flex justify-content-center align-item-center\">please select country from DashBord .</p>`"    
}
  }


     else if (targetId=="weather-view") {
      if (cites) {
         loadWeather(cites[0].capitalInfo.latlng[0],cites[0].capitalInfo.latlng[1],current_city);
      }
      else{
          page_title.innerText = "Weather";
  //page_subtitle.innerText = `Get the latest weather updates for ${cityName}, ${global_country.options[global_country.selectedIndex].text}. Stay informed about current conditions, forecasts, and more to plan your day effectively!`;
page_subtitle.innerText = `Check forecasts for any destination`
         document.getElementById("loading-overlay").classList.remove("hidden");
         setTimeout(() => {
            document.getElementById("loading-overlay").classList.add("hidden");
          }, 500);
         document.getElementById("weather-content").innerHTML = " `<p class = \"d-flex justify-content-center align-item-center\">please select country from DashBord .</p>`"
      }
       
    }


     else if (targetId=="long-weekends-view") {
        loadLong_weekends();
    }


     else if (targetId=="currency-view") {
        loadCurrency();
    }


     else if (targetId=="sun-times-view") {
      if (cites) {
         loadSun_Times(cites[0].capitalInfo.latlng[0],cites[0].capitalInfo.latlng[1],today);
      }
      else{
          page_title.innerText = "Sun Times";
 //page_subtitle.innerText = `Discover sunrise and sunset times for ${current_city}, ${global_country.options[global_country.selectedIndex].text}. Plan your outdoor activities around these beautiful moments of the day!`;
 page_subtitle.innerText = `Check sunrise and sunset times worldwide`;  
 
         document.getElementById("loading-overlay").classList.remove("hidden");
         setTimeout(() => {
            document.getElementById("loading-overlay").classList.add("hidden");
          }, 500);
         document.getElementById("sun-times-content").innerHTML = " `<p class = \"d-flex justify-content-center align-item-center\">please select country from DashBord .</p>`"
      }
       
    }

     else if (targetId=="my-plans-view") {
        loadMy_plans();
    }
    }
    );
   


   
}
);

 async function loadHolidays() {
  page_title.innerText = "Holidays";
  //page_subtitle.innerText = `Discover public holidays in ${global_country.options[global_country.selectedIndex].text} for the year ${selectedYear}. Plan your trips and festivities around these special dates!`;
  page_subtitle.innerText = `Explore public holidays around the world`;
    console.log("Loading holidays...");
    document.getElementById("loading-overlay").classList.remove("hidden");
    let response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/2026/${selectedCountryCode}`);
    let holidays = await response.json();
    console.log(holidays);
    var cartona = ``

    if (holidays.length>0) {
      stat_holidays.innerText = holidays.length;
      for (let index = 0; index < holidays.length; index++) {
        
        cartona += `
        <div class="holiday-card">
              <div class="holiday-card-header">
                <div class="holiday-date-box"><span class="day">7</span><span class="month">Jan</span></div>
                <button class="holiday-action-btn"><i class="fa-regular fa-heart"></i></button>
              </div>
              <h3>${holidays[index].localName}</h3>
              <p class="holiday-name">${holidays[index].name}</p>
              <div class="holiday-card-footer">
                <span class="holiday-day-badge"><i class="fa-regular fa-calendar"></i> Wednesday</span>
                ${holidays[index].global ? `<span class="holiday-type-badge">Public</span>` : `<span class="holiday-type-badge">Not Public</span>`}
              </div>
              
            </div>
        `;
    }
    }
    else
    {
      stat_holidays.innerText = 0;
        cartona = `<p class = "d-flex justify-content-center align-item-center">Select a country from the dashboard to explore public holidays.</p>`;
    }
    document.getElementById("loading-overlay").classList.add("hidden");
     document.getElementById("holidays-content").innerHTML = cartona;
   
}
// End of Holidays




async function loadEvents(size) {
    console.log("Loading events...");
    page_title.innerText = "Events";
    //page_subtitle.innerText = `Explore exciting events happening in ${current_city}, ${global_country.options[global_country.selectedIndex].text}. From concerts to festivals, discover what's on and plan your visit accordingly!`;
    page_subtitle.innerText = `Find concerts, sports, and entertainment`;
    document.getElementById("loading-overlay").classList.remove("hidden");
       let response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=VwECw2OiAzxVzIqnwmKJUG41FbeXJk1y&city=${current_city}&countryCode=${selectedCountryCode}&size=${size}`);
    let events = await response.json();
    console.log(events);
    var cartona = ``
    if (events._embedded) {
        for (let index = 0; index < events._embedded.events.length; index++) {
        
      cartona += `
       <div class="event-card">
              <div class="event-card-image">
                <img src="${events._embedded.events[index].images[0].url}" alt="Jazz Night">
                <span class="event-card-category">${events._embedded.events[index].type}</span>
                <button class="event-card-save"><i class="fa-regular fa-heart"></i></button>
              </div>
              <div class="event-card-body">
                <h3>${events._embedded.events[index].name}</h3>
                <div class="event-card-info">
                  <div><i class="fa-regular fa-calendar"></i>${events._embedded.events[index].dates.start.localDate}</div>
                  <div><i class="fa-solid fa-location-dot"></i>${events._embedded.events[index]._embedded.venues[0].name}</div>
                </div>
                <div class="event-card-footer">
                  <button class="btn-event"><i class="fa-regular fa-heart"></i> Save</button>
                  <a href="${events._embedded.events[index].url}" class="btn-buy-ticket"><i class="fa-solid fa-ticket"></i> Buy Tickets</a>
                </div>
              </div>
            </div>`
    }
     document.getElementById("events-content").innerHTML = cartona;
    }
    else {
        document.getElementById("events-content").innerHTML = `<p class = "d-flex justify-content-center align-item-center">No events found for this location.</p>`;
    }
    console.log("aloooo");
    document.getElementById("loading-overlay").classList.add("hidden");
   
}
// End of Events







async function loadWeather(lat, lon, cityName) {
  page_title.innerText = "Weather";
  //page_subtitle.innerText = `Get the latest weather updates for ${cityName}, ${global_country.options[global_country.selectedIndex].text}. Stay informed about current conditions, forecasts, and more to plan your day effectively!`;
page_subtitle.innerText = `Check forecasts for any destination`
 document.getElementById("loading-overlay").classList.remove("hidden");
    let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`);
    let weather = await response.json();

    console.log(weather);
    const currentCode = getWeatherInfo(weather.current.weather_code);
    console.log(currentCode);
        let localTime = new Date(weather.current.time);
        let actualTime =localTime.toLocaleDateString('en-US', { 
        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' 
    })
    var cartona = ` <div class="weather-hero-card ${currentCode.bgClass}">
              <div class="weather-location">
                <i class="fa-solid fa-location-dot"></i>
                <span>${cityName}</span>
                <span class="weather-time">${actualTime}</span>
              </div>
              <div class="weather-hero-main">
                <div class="weather-hero-left">
                  <div class="weather-hero-icon"><i class="fa-solid ${currentCode.icon}"></i></div>
                  <div class="weather-hero-temp">
                    <span class="temp-value">${Math.round(weather.current.temperature_2m)}</span>
                    <span class="temp-unit">${weather.current_units.temperature_2m}</span>
                  </div>
                </div>
                <div class="weather-hero-right">
                  <div class="weather-condition">${currentCode.text}</div>
                  <div class="weather-feels">Feels like ${Math.round(weather.current.apparent_temperature)}${weather.current_units.apparent_temperature}</div>
                  <div class="weather-high-low">
                    <span class="high"><i class="fa-solid fa-arrow-up"></i> ${Math.round(weather.daily.temperature_2m_max[0])}°</span>
                    <span class="low"><i class="fa-solid fa-arrow-down"></i> ${Math.round(weather.daily.temperature_2m_min[0])}°</span>
                  </div>
                </div>
              </div>
            </div>
            




            <!-- Weather Details Grid -->
            <div class="weather-details-grid">
              <div class="weather-detail-card">
                <div class="detail-icon humidity"><i class="fa-solid fa-droplet"></i></div>
                <div class="detail-info">
                  <span class="detail-label">Humidity</span>
                  <span class="detail-value">${weather.current.relative_humidity_2m}${weather.current_units.relative_humidity_2m}</span>
                </div>
              </div>
              <div class="weather-detail-card">
                <div class="detail-icon wind"><i class="fa-solid fa-wind"></i></div>
                <div class="detail-info">
                  <span class="detail-label">Wind</span>
                  <span class="detail-value">${weather.current.wind_speed_10m} ${weather.current_units.wind_speed_10m}</span>
                </div>
              </div>
              <div class="weather-detail-card">
                <div class="detail-icon uv"><i class="fa-solid fa-sun"></i></div>
                <div class="detail-info">
                  <span class="detail-label">UV Index</span>
                  <span class="detail-value">${weather.daily.uv_index_max[0]}</span>
                </div>
              </div>
              <div class="weather-detail-card">
                <div class="detail-icon precip"><i class="fa-solid fa-cloud-rain"></i></div>
                <div class="detail-info">
                  <span class="detail-label">Precipitation</span>
                  <span class="detail-value">${weather.daily.precipitation_probability_max[0]}%</span>
                </div>
              </div>
            </div>
            






            <!-- Hourly Forecast -->
            <div class="weather-section">
              <h3 class="weather-section-title"><i class="fa-solid fa-clock"></i> Hourly Forecast</h3>
              <div class="hourly-scroll">
                <div class="hourly-item now">
                  <span class="hourly-time">Now</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">22°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">10 AM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">23°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">11 AM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">24°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">12 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">25°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">1 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-sun"></i></div>
                  <span class="hourly-temp">25°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">2 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-cloud-sun"></i></div>
                  <span class="hourly-temp">24°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">3 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-cloud-sun"></i></div>
                  <span class="hourly-temp">23°</span>
                </div>
                <div class="hourly-item">
                  <span class="hourly-time">4 PM</span>
                  <div class="hourly-icon"><i class="fa-solid fa-cloud"></i></div>
                  <span class="hourly-temp">21°</span>
                </div>
              </div>
            </div>
            
            <!-- 7-Day Forecast -->
            <div class="weather-section">
              <h3 class="weather-section-title"><i class="fa-solid fa-calendar-week"></i> 7-Day Forecast</h3>
              <div class="forecast-list">
                <div class="forecast-day today">
                  <div class="forecast-day-name"><span class="day-label">Today</span><span class="day-date">25 Jan</span></div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weather.daily.temperature_2m_max[0]}°</span><span class="temp-min">${weather.daily.temperature_2m_min[0]}°</span></div>
                  <div class="forecast-precip"></div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">Sun</span><span class="day-date">26 Jan</span></div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weather.daily.temperature_2m_max[1]}°</span><span class="temp-min">${weather.daily.temperature_2m_min[1]}°</span></div>
                  <div class="forecast-precip"></div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">Mon</span><span class="day-date">27 Jan</span></div>
                  <div class="forecast-icon"><i class="fa-solid fa-cloud-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weather.daily.temperature_2m_max[2]}°</span><span class="temp-min">${weather.daily.temperature_2m_min[2]}°</span></div>
                  <div class="forecast-precip"><i class="fa-solid fa-droplet"></i><span>10%</span></div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">Tue</span><span class="day-date">28 Jan</span></div>
                  <div class="forecast-icon"><i class="fa-solid fa-cloud"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weather.daily.temperature_2m_max[3]}°</span><span class="temp-min">${weather.daily.temperature_2m_min[3]}°</span></div>
                  <div class="forecast-precip"><i class="fa-solid fa-droplet"></i><span>20%</span></div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">Wed</span><span class="day-date">29 Jan</span></div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weather.daily.temperature_2m_max[4]}°</span><span class="temp-min">${weather.daily.temperature_2m_min[4]}°</span></div>
                  <div class="forecast-precip"></div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">Thu</span><span class="day-date">30 Jan</span></div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weather.daily.temperature_2m_max[5]}°</span><span class="temp-min">${weather.daily.temperature_2m_min[5]}°</span></div>
                  <div class="forecast-precip"></div>
                </div>
                <div class="forecast-day">
                  <div class="forecast-day-name"><span class="day-label">Fri</span><span class="day-date">31 Jan</span></div>
                  <div class="forecast-icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="forecast-temps"><span class="temp-max">${weather.daily.temperature_2m_max[6]}°</span><span class="temp-min">${weather.daily.temperature_2m_min[6]}°</span></div>
                  <div class="forecast-precip"></div>
                </div>
              </div>
            </div>
            `
            document.getElementById("loading-overlay").classList.add("hidden");
            document.getElementById("weather-content").innerHTML = cartona;
}

// دالة الترجمة من كود إلى أيقونة ونص

function getWeatherInfo(code) {
   if (code === 0) { // صافي
        return { text: "Clear Sky", icon: "fa-sun", bgClass: "weather-sunny" };
    } else if (code <= 3) { // غائم جزئياً
        return { text: "Partly Cloudy", icon: "fa-cloud-sun", bgClass: "weather-cloudy" };
    } else if (code >= 51) { // ممطر أو عواصف
        return { text: "Rainy", icon: "fa-cloud-showers-heavy", bgClass: "weather-rainy" };
    } else { // غائم كلياً (Overcast)
        return { text: "Overcast", icon: "fa-cloud", bgClass: "weather-cloudy" };
    }
}
// End of Weather






async function loadLong_weekends() {
  page_title.innerText = "Long Weekends";
  //page_subtitle.innerText = `Discover long weekends in ${global_country.options[global_country.selectedIndex].text} for the year ${selectedYear}. Plan your trips and leisure time around these extended breaks!`;
  page_subtitle.innerText = `Find the perfect mini-trip opportunities`;
  document.getElementById("loading-overlay").classList.remove("hidden");
    console.log("Loading long weekends...");
     let response = await fetch(`https://date.nager.at/api/v3/LongWeekend/${selectedYear}/${selectedCountryCode}`);
    let Long_weekends = await response.json();

    console.log(Long_weekends);
    if (Long_weekends.status !== 404) {
      console.log("Long weekends found:", Long_weekends);
       document.getElementById("loading-overlay").classList.remove("hidden");
    displayLongWeekends(Long_weekends);
    document.getElementById("loading-overlay").classList.add("hidden");
    }

    else {
      console.log("elseee");
        document.getElementById("loading-overlay").classList.remove("hidden");
        setTimeout(() => {  
        document.getElementById("loading-overlay").classList.add("hidden");
          }, 500);
          document.getElementById("lw-content").innerHTML = `<p class = "d-flex justify-content-center align-item-center">please select country from DashBord ..</p>`;
    }
    
    
}

function displayLongWeekends(holidaysArray) {
    const container = document.getElementById('lw-content');
    container.innerHTML =""

    holidaysArray.forEach((holiday, index) => {
       
        const start = new Date(holiday.startDate);
        const end = new Date(holiday.endDate);
        
        const monthStart = start.toLocaleDateString('en-US', { month: 'short' });
        const monthEnd = end.toLocaleDateString('en-US', { month: 'short' });
        console.log(start);
        console.log(monthStart);
        console.log(start.getDate());


        
        const dateRange = `${monthStart} ${start.getDate()} ${selectedYear} - ${monthEnd} ${end.getDate()}, ${selectedYear}`;

   
        const infoBoxClass = holiday.needBridgeDay ? 'warning' : 'success';
        const infoBoxIcon = holiday.needBridgeDay ? 'fa-info-circle' : 'fa-check-circle';
        const infoBoxText = holiday.needBridgeDay 
            ? 'Requires taking a bridge day off' 
            : 'No extra days off needed!';


        let daysHTML = '';
        let currentDate = new Date(start);
        
        while (currentDate <= end) {
            const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
            const dayNum = currentDate.getDate();
           
            const isWeekend = currentDate.getDay() === 5 || currentDate.getDay() === 6; 
            
            daysHTML += `
                <div class="lw-day ${isWeekend ? 'weekend' : ''}">
                    <span class="name">${dayName}</span>
                    <span class="num">${dayNum}</span>
                </div>`;
            
            currentDate.setDate(currentDate.getDate() + 1);
        }

        
        const cardHTML = `
            <div class="lw-card">
              <div class="lw-card-header">
                <span class="lw-badge"><i class="fa-solid fa-calendar-days"></i> ${holiday.dayCount} Days</span>
                <button class="holiday-action-btn"><i class="fa-regular fa-heart"></i></button>
              </div>
              <h3>Long Weekend #${index + 1}</h3>
              <div class="lw-dates"><i class="fa-regular fa-calendar"></i> ${dateRange}</div>
              <div class="lw-info-box ${infoBoxClass}">
                <i class="fa-solid ${infoBoxIcon}"></i> ${infoBoxText}
              </div>
              <div class="lw-days-visual">
                ${daysHTML}
              </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}
// End of LongWeekends




async function loadCurrency() {
  page_title.innerText = "Currency";
  //page_subtitle.innerText = `Get the latest currency exchange rates for ${selectedCountryCode}. Stay updated with real-time conversions and make informed financial decisions!`;
  page_subtitle.innerText = `Convert currencies with live exchange rates`;
    console.log("Loading currency...");
    console.log(selectedCountryCode);
      let response = await fetch(`https://open.er-api.com/v6/latest/USD`);
    let currency = await response.json();
     console.log(currency);


     let response2 = await fetch(`https://v6.exchangerate-api.com/v6/805842951e5953ad31497176/pair/USD/EGP/100`);
    let currency2 = await response2.json();
 console.log(currency2);


    var cartona1 = `
    <div class="section-header">
              <h2><i class="fa-solid fa-star"></i> Quick Convert</h2>
            </div>
            <div class="popular-currencies-grid" id="popular-currencies">
              <div class="popular-currency-card">
                <img src="https://flagcdn.com/w40/eu.png" alt="EUR" class="flag">
                <div class="info"><div class="code">EUR</div><div class="name">Euro</div></div>
                <div class="rate">${currency.rates.EUR}</div>
              </div>
              <div class="popular-currency-card">
                <img src="https://flagcdn.com/w40/gb.png" alt="GBP" class="flag">
                <div class="info"><div class="code">GBP</div><div class="name">British Pound</div></div>
                <div class="rate">${currency.rates.GBP}</div>
              </div>
              <div class="popular-currency-card">
                <img src="https://flagcdn.com/w40/eg.png" alt="EGP" class="flag">
                <div class="info"><div class="code">EGP</div><div class="name">Egyptian Pound</div></div>
                <div class="rate">${currency.rates.EGP}</div>
              </div>
              <div class="popular-currency-card">
                <img src="https://flagcdn.com/w40/ae.png" alt="AED" class="flag">
                <div class="info"><div class="code">AED</div><div class="name">UAE Dirham</div></div>
                <div class="rate">${currency.rates.AED}</div>
              </div>
              <div class="popular-currency-card">
                <img src="https://flagcdn.com/w40/sa.png" alt="SAR" class="flag">
                <div class="info"><div class="code">SAR</div><div class="name">Saudi Riyal</div></div>
                <div class="rate">${currency.rates.SAR}</div>
              </div>
              <div class="popular-currency-card">
                <img src="https://flagcdn.com/w40/jp.png" alt="JPY" class="flag">
                <div class="info"><div class="code">JPY</div><div class="name">Japanese Yen</div></div>
                <div class="rate">${currency.rates.JPY}</div>
              </div>
              <div class="popular-currency-card">
                <img src="https://flagcdn.com/w40/ca.png" alt="CAD" class="flag">
                <div class="info"><div class="code">CAD</div><div class="name">Canadian Dollar</div></div>
                <div class="rate">${currency.rates.CAD}</div>
              </div>
              <div class="popular-currency-card">
                <img src="https://flagcdn.com/w40/in.png" alt="INR" class="flag">
                <div class="info"><div class="code">INR</div><div class="name">Indian Rupee</div></div>
                <div class="rate">${currency.rates.INR}</div>
              </div>
            </div>
    `
     document.getElementById("Quick_Convert_Currency").innerHTML = cartona1;
   



     var cartona2 = ``
     for (const [code, rate] of Object.entries(currency.rates)) { 
        cartona2 += `
        <option value="${code}">${code} - ${rate}</option>
        `;
    }
    
}
// End of loadCurrency   not complete


async function loadSun_Times(lat, lon,today) {
  page_title.innerText = "Sun Times";
 //page_subtitle.innerText = `Discover sunrise and sunset times for ${current_city}, ${global_country.options[global_country.selectedIndex].text}. Plan your outdoor activities around these beautiful moments of the day!`;
 page_subtitle.innerText = `Check sunrise and sunset times worldwide`;  
 
 console.log("Loading sun times...");

    let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${today}&formatted=0`);
    let Sun_Times = await response.json();
    console.log(Sun_Times);
    let localTime = new Date();

let formattedDate = localTime.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
});

let dayName = localTime.toLocaleDateString('en-US', { 
    weekday: 'long'
});

const sunData = Sun_Times.results; 
function formatSunTime(isoString) {
    return new Date(isoString).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}



// إذا أردت حساب طول النهار بالساعات
const hours = Math.floor(sunData.day_length / 3600);
const minutes = Math.floor((sunData.day_length % 3600) / 60);
const dayLength = `${hours}h ${minutes}m`;
const  dayLengthPercentage = ((sunData.day_length / 86400) * 100).toFixed(1);
let hoursLight = 24-hours
let minutesLight = 60-minutes
const darknessLength = `${hoursLight}h ${minutesLight}m`;
console.log(formattedDate); 
    var cartona = `
    <div class="view-header-card gradient-sunset">
            <div class="view-header-icon"><i class="fa-solid fa-sun"></i></div>
            <div class="view-header-content">
              <h2>Sunrise & Sunset Times</h2>
              <p>Plan your activities around golden hour - perfect for photographers</p>
            </div>
            <div class="view-header-selection">
              <div class="current-selection-badge">
                <img src="https://flagcdn.com/w40/eg.png" alt="Egypt" class="selection-flag">
                <span>Egypt</span>
                <span class="selection-city">• ${current_city}</span>
              </div>
            </div>
          </div>
          
          <div id="sun-times-content" class="sun-times-layout">
            <div class="sun-main-card">
              <div class="sun-main-header">
                <div class="sun-location">
                  <h2><i class="fa-solid fa-location-dot"></i> ${current_city}</h2>
                  <p>Sun times for your selected location</p>
                </div>
                <div class="sun-date-display">
                  <div class="date">${formattedDate}</div>
                  <div class="day">${dayName}</div>
                </div>
              </div>
              
              <div class="sun-times-grid">
                <div class="sun-time-card dawn">
                  <div class="icon"><i class="fa-solid fa-moon"></i></div>
                  <div class="label">Dawn</div>
                  <div class="time">${formatSunTime(sunData.civil_twilight_begin)}</div>
                  <div class="sub-label">Civil Twilight</div>
                </div>
                <div class="sun-time-card sunrise">
                  <div class="icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="label">Sunrise</div>
                  <div class="time">${formatSunTime(sunData.sunrise)}</div>
                  <div class="sub-label">Golden Hour Start</div>
                </div>
                <div class="sun-time-card noon">
                  <div class="icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="label">Solar Noon</div>
                  <div class="time">${formatSunTime(sunData.solar_noon)}</div>
                  <div class="sub-label">Sun at Highest</div>
                </div>
                <div class="sun-time-card sunset">
                  <div class="icon"><i class="fa-solid fa-sun"></i></div>
                  <div class="label">Sunset</div>
                  <div class="time">${formatSunTime(sunData.sunset)}</div>
                  <div class="sub-label">Golden Hour End</div>
                </div>
                <div class="sun-time-card dusk">
                  <div class="icon"><i class="fa-solid fa-moon"></i></div>
                  <div class="label">Dusk</div>
                  <div class="time">${formatSunTime(sunData.civil_twilight_end)}</div>
                  <div class="sub-label">Civil Twilight</div>
                </div>
                <div class="sun-time-card daylight">
                  <div class="icon"><i class="fa-solid fa-hourglass-half"></i></div>
                  <div class="label">Day Length</div>
                  <div class="time">${dayLength}</div>
                  <div class="sub-label">Total Daylight</div>
                </div>
              </div>
            </div>
            
            <div class="day-length-card">
              <h3><i class="fa-solid fa-chart-pie"></i> Daylight Distribution</h3>
              <div class="day-progress">
                <div class="day-progress-bar">
                  <div class="day-progress-fill" style="width: ${dayLengthPercentage}%"></div>
                </div>
              </div>
              <div class="day-length-stats">
                <div class="day-stat">
                  <div class="value">${dayLength}}</div>
                  <div class="label">Daylight</div>
                </div>
                <div class="day-stat">
                  <div class="value">${dayLengthPercentage}%</div>
                  <div class="label">of 24 Hours</div>
                </div>
                <div class="day-stat">
                  <div class="value">${darknessLength}</div>
                  <div class="label">Darkness</div>
                </div>
              </div>
            </div>
          </div>
    `   
    document.getElementById("sun-times-view").innerHTML = cartona;
}
// End of loadSun_Times


async function loadMy_plans() {
  page_title.innerText = "My Plans";
  //page_subtitle.innerText = `Manage your travel plans and itineraries in one place. Keep track of your destinations, accommodations, and activities for a seamless travel experience!`;
  page_subtitle.innerText = `Your saved holidays and events`;  
  console.log("Loading my plans...");
    
}

