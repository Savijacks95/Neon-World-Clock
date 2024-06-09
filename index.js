function timeUpdate() {
  let time = moment();
  let seattleElement = document.querySelector("#Seattle");
  let seattleDate = seattleElement.querySelector(".date");
  let seattleTime = seattleElement.querySelector(".digital-time");
  let seattleTimeZone = time.tz("America/Vancouver");
  seattleDate.innerHTML = time.format("MMMM Do, YYYY");
  seattleTime.innerHTML = seattleTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let delhiElement = document.querySelector("#Delhi");
  let delhiDate = delhiElement.querySelector(".date");
  let delhiTime = delhiElement.querySelector(".digital-time");
  let delhiTimeZone = time.tz("Asia/Kolkata");
  delhiDate.innerHTML = time.format("MMMM Do, YYYY");
  delhiTime.innerHTML = delhiTimeZone.format("h:mm:ss [<small>]A[</small>]");

  let zurichElement = document.querySelector("#Zurich");
  let zurichDate = zurichElement.querySelector(".date");
  let zurichTime = zurichElement.querySelector(".digital-time");
  let zurichTimeZone = time.tz("Europe/Zurich");
  zurichDate.innerHTML = time.format("MMMM Do, YYYY");
  zurichTime.innerHTML = zurichTimeZone.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(timeUpdate, 1000);

function mainTimeUpdate() {
  let time = moment().tz("Asia/Seoul");
  let mainHr = document.querySelector("#timeClock .hours");
  let mainMn = document.querySelector("#timeClock .minutes");
  let mainSc = document.querySelector("#timeClock .seconds");
  let ampm = document.querySelector("#timeClock .day-night");

  let monthElement = document.querySelector(".month");
  monthElement.innerHTML = time.format("MMMM Do, YYYY");

  mainHr.innerHTML = time.format("h:");
  mainMn.innerHTML = time.format("mm:");
  mainSc.innerHTML = time.format("ss");
  ampm.innerHTML = time.format("A");
}
setInterval(mainTimeUpdate, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let citiesElement = document.querySelector("#main-location");
  citiesElement.innerHTML = `
   <div class="place">${cityName}</div>
          <div id="timeClock">
            <div class="hours">${cityTime.format("h:")}</div>
            <div class="minutes">${cityTime.format("mm:")}</div>
            <div class="seconds">${cityTime.format("ss")}</div>
            <div class="day-night">${cityTime.format("A")}</div>
          </div>
          <div class="month">${cityTime.format("MMMM Do, YYYY")}</div>
  `;
}

let selectElement = document.querySelector("#city");

selectElement.addEventListener("change", updateCity);
