import { Api } from "./api.js";
import { HTML } from "./helpers.js";

let showPeopleBtn = document.getElementById("show-people");
let peopleList = document.getElementById("people-list");
let clearBtn = document.getElementById("clear");
clearBtn.style.display = "none";

showPeopleBtn.onclick = function () {
  showPeople();
  showPeopleBtn.style.display = "none";
  clearBtn.style.display = "block";
};

clearBtn.onclick = function () {
  clear(peopleList);
  clearBtn.style.display = "none";
  showPeopleBtn.style.display = "block";
};

/**
 * Renders list of people from database
 */
async function showPeople() {
  let people = await getPeople();
  let list = document.getElementById("people-list");
  people.forEach((person) => HTML.addPersonListItem(person, list));
  registerDogInfoBtnEvents();
}

/**
 *
 * @returns Promise containing array of people objects
 */
async function getPeople() {
  return await Api.getAllPeople();
}

/**
 * Enable event listeners on all "Show Dog Info" buttons in people list
 */
function registerDogInfoBtnEvents() {
  let btns = document.getElementsByClassName("dog-info-btn");
  for (let btn of btns) {
    btn.addEventListener("click", showDogInfo);
  }
}

/**
 * Renders a peron's dog's information below people list
 * @param {Event} event
 */
async function showDogInfo(event) {
  let dogInfoDiv = document.getElementById("dog-info");
  clear(dogInfoDiv);
  let dogId = event.target.dataset.dogid;
  let dog = await Api.getDogById(dogId);
  HTML.renderDogInfo(dog, dogInfoDiv);
}

/**
 * Clears HTML content of specific element or the entire DOM
 * (except Clear and Show People buttons)
 * @param {Element} element
 */
function clear(element = null) {
  if (element !== null && !(element instanceof Event)) {
    element.innerHTML = null;
  } else {
    document.getElementById("people-list").innerHTML = null;
    document.getElementById("dog-info").innerHTML = null;
  }
}
