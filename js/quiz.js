const questions = [
  { q: "When is my birthday?", a: ["January", "February", "December"], c: 2 },
  { q: "My favorite color?", a: ["Blue", "Pink", "Yellow"], c: 2 },
  { q: "I like coding?", a: ["Yes", "No", "Sometimes"], c: 0 },
  { q: "Favorite season?", a: ["Winter", "Summer", "Spring"], c: 0 },
  { q: "How many years is our code anniversary?", a: ["3", "5", "7"], c: 1 },
  { q: "How old am I right 2026/12/29 00:00 ULAT?", a: ["11", "12", "13"], c: 1 },
  { q: "Christmas tree is?", a: ["Rich", "Small", "Nothing"], c: 0 },
  { q: "How many code project he did?", a: ["55", "89", "76"], c: 2 },
  { q: "English 1st latest score?", a: ["90%", "100%", "98%"], c: 1 },
  { q: "I got my headphone since", a: ["1 Year", "2 Year", "1 and Half Years"], c: 1 },
  { q: "Duolingo English Score", a: ["120", "130", "125"], c: 1 },
  { q: "Does he loves you?", a: ["Yes", "No", "Maybe"], c: 0 },
  { q: "Have Temuulen got any bday idea?", a: ["Yes", "No", "Depends on"], c: 2 },
  { q: "What is my WPM?", a: ["86", "30", "85"], c: 2 },
  { q: "His Favorite emoji?", a: [":)", ":D", ":O"], c: 0 },
  { q: "What is his CPS?", a: ["10", "9", "11"], c: 0 },
  { q: "Final code?", a: ["1231", "1229", "1224", "0115", "0326", "8097", "1111", "2211", "0818", "0000", "popp", "1220", "0523", "0929", "1729", "0768", "9876"], c: 1 }
];

let current = 0;

const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");
const pEl = document.getElementById("progress");

loadQuestion();

function loadQuestion() {
  const q = questions[current];
  qEl.textContent = q.q;
  aEl.innerHTML = "";

  q.a.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = () => check(i);
    aEl.appendChild(btn);
  });

  pEl.textContent = `Question ${current + 1} / ${questions.length}`;
}

function check(i) {
  if (i === questions[current].c) {
    current++;
    if (current === questions.length) {
      window.location.href = "final.html";
    } else {
      loadQuestion();
    }
  } else {
    alert("Wrong 😜 try again");
  }
}
