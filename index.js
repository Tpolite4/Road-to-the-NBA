//////////////////////////////////////////////////////
///                                                ///
///                  FCNY UNIT 5                   ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
//////////////////////////////////////////////////////

// Object containing all messages
const messages = {
  A: 'Welcome To Road To The NBA!',
  A1: 'Which Of These Schools Would You Like To Go? Yale? Louisville? UConn?',
  B1: 'What Are Your Grades? (4.0 Scale)',
  C: 'Continue:',
  D: 'Did Not Get In, Sorry.',
  E: 'Get Ready To Rate Your Skills',
  E1: 'Shooting Skills (A-C Scale)',
  E2: 'Passing Skills (A-C Scale)',
  E3: 'Defense Skills (A-C Scales)',
  E4: 'Athleticism Skills (A-C Scales)',
  F: 'You Won The National Championship!',
  F1: 'You Won Twenty Games In Your First Season',
  F2: 'Miss Season Due To Grades',
  G: 'Lets See How Your Story Goes...',
  G1: 'Try Harder, You Went Undrafted',
  G2: 'Congrats, You Made The NBA!',
  H: 'Thank You For Playing',
  I: 'Yale',
  J: 'Louisville',
  L: 'UConn',
  M: 'We will now evaluate your freshman season',
};

// Variables to push
const playerProfile = [];

// Start Game
function beginGame() {
  const response = confirm(messages.A);
  if (response) {
    nextQuestion();
  } else {
    // End Game
    alert('Game Over!');
    beginGame();
  }
}
// choosing school prompt
function nextQuestion() {
  const response = prompt(messages.A1);
  if (
    response.toUpperCase() === 'YALE' ||
    response.toUpperCase() === 'LOUISVILLE' ||
    response.toUpperCase() === 'UCONN'
  ) {
    let gpa = prompt(messages.B1);
    if (Number(gpa) >= 0.0 && Number(gpa) <= 4.0) {
      if (Number(gpa >= 3.0)) {
        playerProfile.push(Number(gpa));
        alert('Congrats, You Got In!');
        nextQuestion2();
      } else alert(messages.D);
      beginGame();
    }
  }
}

// Continue Prompt
function nextQuestion2() {
  const response = confirm(messages.C);
  if (response) {
    alert(messages.E);
    nextQuestion3();
  } else {
    alert('Game Over!');
    beginGame;
  }
}

//rate skills prompt
function nextQuestion3() {
  let response = prompt(messages.E1);
  if (
    response.toUpperCase() === 'A' ||
    response.toUpperCase() === 'B' ||
    response.toUpperCase() === 'C'
  ) {
    playerProfile.push(response);
  } else {
    alert('Not a proper answer!');
    nextQuestion3();
  }
  response = prompt(messages.E2);
  if (
    response.toUpperCase() === 'A' ||
    response.toUpperCase() === 'B' ||
    response.toUpperCase() === 'C'
  ) {
    playerProfile.push(response);
  } else {
    alert('Not a proper answer!');
    nextQuestion3();
  }
  response = prompt(messages.E3);
  if (
    response.toUpperCase() === 'A' ||
    response.toUpperCase() === 'B' ||
    response.toUpperCase() === 'C'
  ) {
    playerProfile.push(response);
  } else {
    alert('Not a proper answer!');
    nextQuestion3();
  }
  response = prompt(messages.E4);
  if (
    response.toUpperCase() === 'A' ||
    response.toUpperCase() === 'B' ||
    response.toUpperCase() === 'C'
  ) {
    playerProfile.push(response);
  } else {
    alert('Not a proper answer!');
    nextQuestion3();
  }
  nextQuestion4();
}
// Game End
function nextQuestion4() {
  if (playerProfile[0] > 3.6 && skills() === true) {
    alert(messages.F);
    alert(messages.G2);
    alert(messages.H);
  } else {
    alert(messages.F1);
    alert(messages.G1);
    alert(messages.H);
  }
}

function skills() {
  let champ = 0;
  for (let i = 1; i < playerProfile.length; i++) {
    if (playerProfile[i].toUpperCase() === 'A') {
      champ++;
    }
  }
  if (champ >= 2) {
    return true;
  }

  return false;
}

// don't forget to initiate your game!!
beginGame();

/**
 * topic: highschool prospect choosing college for basketball
 * "Welcome to Road to the NBA"
 *  "Enter" & "No, I want to be a Doctor"
 *    *USER clicks options*
 * *if enter is clicked, game begins*
 * *if other is clicked, restart*
 *
 * "Which of these schools would you like to go? Yale? Louisville? UConn?"
 * if statement: selected school log next prompt
 *      Yale: What are your Grades (4.0 gpa scale)
 *        >=3.7 gpa - continue
 *        <=3.6 - Did not get in
 *      Louisville: What are your grades (4.0 gpa scale)
 *          >=3.2 gpa - continue
 *          <=3.1 - did not get in
 *      UConn: what are your grades (4.0 gpa scale)
 *          >=3.5 - continue
 *          <=3.4 - did not get in
 *if did not get in: GAME OVER, Restart
 *
 * "What are your skills(prompt)"Shooting, Passing, Defense, Athleticism"
 *
 *
 *        for each skill in (Object) type A, B, or C
 *        different objects per skill* (for each letter - starter, bench)
 *
 *
 *Evaluate Freshman Season
 *    4.0 gpa && A in Skill = Win ratio  "Wins National Championship!"
 *    3.5 gpa && B in one or two Skill = "Won Twenty Games!"
 *Did you make it to the NBA
 *  if statment: based on line 91
 * make nba draft
 *    Prompt: `Congrats, you made the NBA!`
 * Undrafted
 *  if statement : based on line 92
 *    Prompt: "Try Harder, you went undrafted"
 *
 *End Game/Restart
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
