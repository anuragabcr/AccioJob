function OpeningCeremony(callback) {
  console.log("Let the games begin!");
  document.writeln("<br />Let the games begin!");
  setTimeout(() => {
    const score = { red: 0, blue: 0, green: 0, yellow: 0 };
    console.log("Opening Ceremony - Starting Scores:", score);
    document.writeln(
      "<br />Opening Ceremony - Starting Scores:",
      JSON.stringify(score)
    );
    callback(score, Race100M);
  }, 1000);
}

function Race100M(score, callback) {
  setTimeout(() => {
    const raceTimes = {
      red: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
      blue: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
      green: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
      yellow: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
    };

    const fastestColor = Object.keys(raceTimes).reduce((winner, color) =>
      raceTimes[winner] > raceTimes[color] ? color : winner
    );
    const secondFastestColor = Object.keys(raceTimes).reduce((second, color) =>
      color !== fastestColor && raceTimes[second] > raceTimes[color]
        ? color
        : second
    );

    score[fastestColor] += 50;
    score[secondFastestColor] += 25;

    console.log("Race 100M Results:", raceTimes);
    document.writeln("<br />Race 100M Results:", JSON.stringify(raceTimes));
    console.log("Updated Scores:", score);
    document.writeln("<br />Updated Scores:", JSON.stringify(score));
    callback(score, LongJump);
  }, 3000);
}

function LongJump(score, callback) {
  const winningColor = ["red", "yellow", "green", "blue"][
    Math.floor(Math.random() * 4)
  ];
  score[winningColor] += 150;

  console.log("Long Jump Winner:", winningColor);
  document.writeln("<br />Long Jump Winner:", JSON.stringify(winningColor));
  console.log("Updated Scores:", score);
  document.writeln("<br />Updated Scores:", JSON.stringify(score));
  callback(score, HighJump);
}

function HighJump(score, callback) {
  const userGuess = prompt(
    "What colour secured the highest jump? (red, yellow, green, blue)"
  );

  if (userGuess && Object.keys(score).includes(userGuess.toLowerCase())) {
    score[userGuess.toLowerCase()] += 100;
    console.log("High Jump Winner:", userGuess);
    document.writeln("<br />High Jump Winner:", JSON.stringify(userGuess));
  } else {
    console.log("Event was cancelled");
    document.writeln("<br />Event was cancelled");
  }

  console.log("Updated Scores:", score);
  document.writeln("<br />Updated Scores:", JSON.stringify(score));
  callback(score, AwardCeremony);
}

function AwardCeremony(score) {
  const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
  const [first, second, third] = sortedScores;

  console.log(`${first[0]} came first with ${first[1]} points. `);
  document.writeln(`<br />${first[0]} came first with ${first[1]} points. `);
  console.log(`${second[0]} came second with ${second[1]} points. `);
  document.writeln(`<br />${second[0]} came second with ${second[1]} points. `);
  console.log(`${third[0]} came third with ${third[1]} points. `);
  document.writeln(`<br />${third[0]} came third with ${third[1]} points. `);
}

OpeningCeremony(Race100M);
