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

function getDayOfWeek(day, month, year) {
  let m = month;
  let y = year;

  if (m <= 2) {
    m = m + 12;
    y = y - 1;
  }

  const CC = parseInt(y / 100);
  const YY = y % 100;

  const part1 = parseInt(CC / 4) - 2 * CC - 1;
  const part2 = parseInt((5 * YY) / 4);
  const part3 = parseInt((26 * (m + 1)) / 10);

  const h = part1 + part2 + part3 + day;

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
