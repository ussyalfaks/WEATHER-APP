document.addEventListener('DOMContentLoaded', function () {
       const sumbmitbtn = document.getElementById('submit-btn');
       sumbmitbtn.addEventListener('click', function () {
       
              const inputbtn = document.getElementById('input-btn').value;
              fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputbtn + '&appid=afaa8eea1769b4359fd8e07b2efcefbd')
                     .then(response => response.json())
                     .then(data => {
                            const cityName = data.name;
                            const tem = data.main.temp;
                            const temp = tem - 273.15;
                            const description = data.weather[0].description;
                            const WS = data.wind.speed;
                            const humid = data.main.humidity;
                            const ico = data.weather[0].icon;
                            document.querySelector('.location-timezone').textContent = cityName;
                            document.querySelector('.temperature-degree').textContent = temp.toFixed(0);
                            document.querySelector('.temperature-description').textContent = description;
                            document.querySelector('.wind-speed').textContent = WS + " km/h winds";
                            document.querySelector('.humidity').textContent = humid + " % Precipitation";
                            document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + ico + ".png";

                     })
                     .catch(res => alert('Please Type Right City Name'));
       });

       //CLOCK
       clock();
       let inc = 1000;
       function clock() {
              let hours = document.getElementById('hour');
              let minute = document.getElementById('minute');
              let ampm = document.getElementById('ampm');

              let h = new Date().getHours();
              let m = new Date().getMinutes()
              var am = 'AM';

              if (h > 12) {
                     h = h - 12;
                     var am = 'pm';
              }

              h = (h < 10) ? '0' + h : h;
              m = (m < 10) ? '0' + m : m;
              hours.innerHTML = h;
              minute.innerHTML = m;
              ampm.innerHTML = am;
       }
       setInterval(clock, inc)
});