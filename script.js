//The reason we use const is because the days wont change at all
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//We change month and year into m and y and use let since we might need to change later
function getDayOfWeek(day, month, year) {
  let m = month;
  let y = year;
  //we are putting less of 2 since it does not accept jan and feb thus counting them as 13 and 14 of the previous year
  if (m <= 2) {
    m = m + 12;
    y = y - 1;
  }
//spliting the number to two like eg 19 and 98 for example 19/divided to 100 people 98% shared to the rest
  const CC = parseInt(y / 100);
  const YY = y % 100;

  const part1 = parseInt(CC / 4) - 2 * CC - 1;
  const part2 = parseInt((5 * YY) / 4);
  const part3 = parseInt((26 * (m + 1)) / 10);

  const h = part1 + part2 + part3 + day;
  //after the calculation the number you get you divide by 7 to get the day

  const dayIndex = ((h % 7) + 7) % 7;

  return dayIndex;
}

function generateName() {
  const day = +document.getElementById("day").value;
  const month = +document.getElementById("month").value;
  const year = +document.getElementById("year").value;
  const gender = document.getElementById("gender").value;

  const dayIndex = getDayOfWeek(day, month, year);
  const dayName = days[dayIndex];

  let akanName;
  if (gender === "male") {
    akanName = maleNames[dayIndex];
  } else {
    akanName = femaleNames[dayIndex];
  }

  const resultBox = document.getElementById("result");
  resultBox.innerHTML =
    "You were born on a " +
    dayName +
    "!<span>" +
    akanName +
    "</span>Your Akan soul Name";
  resultBox.classList.remove("hidden");

  resultBox.scrollIntoView({ behavior: "smooth" });
}

const btn = document.getElementById("btn");
btn.addEventListener("click", generateName);
