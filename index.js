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
  let monthElement = document.querySelector(".month");
  monthElement.innerHTML = time.format("MMMM Do, YYYY");
}
setInterval(timeUpdate, 1000);
