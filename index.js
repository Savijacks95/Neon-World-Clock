const firstClock = document.getElementById("analogClock");
const secondClock = document.getElementById("analogClock-two");
const thirdClock = document.getElementById("analogClock-three");
const fourthClock = document.getElementById("analogClock-four");

const template = document.getElementById("analog-template");

const clock = template.content.cloneNode(true);
const clock2 = template.content.cloneNode(true);
const clock3 = template.content.cloneNode(true);
const clock4 = template.content.cloneNode(true);

firstClock.appendChild(clock);
secondClock.appendChild(clock2);
thirdClock.appendChild(clock3);
fourthClock.appendChild(clock4);

const digitalTime = document.getElementById("digitalTime-one");
const digitalTime2 = document.getElementById("digitalTime-two");
const digitalTime3 = document.getElementById("digitalTime-three");
const digitalTime4 = document.getElementById("digitalTime-four");

const digitalTemplate = document.getElementById("digital-template");

const digital = digitalTemplate.content.cloneNode(true);
const digital2 = digitalTemplate.content.cloneNode(true);
const digital3 = digitalTemplate.content.cloneNode(true);
const digital4 = digitalTemplate.content.cloneNode(true);

digitalTime.appendChild(digital);
digitalTime2.appendChild(digital2);
digitalTime3.appendChild(digital3);
digitalTime4.appendChild(digital4);
