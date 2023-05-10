const r00 = document.getElementById("r00");
const r01 = document.getElementById("r01");
const r02 = document.getElementById("r02");
const r03 = document.getElementById("r03");
const r04 = document.getElementById("r04");
const r05 = document.getElementById("r05");
const r06 = document.getElementById("r06");

const r10 = document.getElementById("r10");
const r11 = document.getElementById("r11");
const r12 = document.getElementById("r12");
const r13 = document.getElementById("r13");
const r14 = document.getElementById("r14");
const r15 = document.getElementById("r15");
const r16 = document.getElementById("r16");

const r20 = document.getElementById("r20");
const r21 = document.getElementById("r21");
const r22 = document.getElementById("r22");
const r23 = document.getElementById("r23");
const r24 = document.getElementById("r24");
const r25 = document.getElementById("r25");
const r26 = document.getElementById("r26");

const r30 = document.getElementById("r30");
const r31 = document.getElementById("r31");
const r32 = document.getElementById("r32");
const r33 = document.getElementById("r33");
const r34 = document.getElementById("r34");
const r35 = document.getElementById("r35");
const r36 = document.getElementById("r36");

const r40 = document.getElementById("r40");
const r41 = document.getElementById("r41");
const r42 = document.getElementById("r42");
const r43 = document.getElementById("r43");
const r44 = document.getElementById("r44");
const r45 = document.getElementById("r45");
const r46 = document.getElementById("r46");

const r50 = document.getElementById("r50");
const r51 = document.getElementById("r51");
const r52 = document.getElementById("r52");
const r53 = document.getElementById("r53");
const r54 = document.getElementById("r54");
const r55 = document.getElementById("r55");
const r56 = document.getElementById("r56");

const playerleft = document.getElementById("playerleft");
const leftanimation = document.getElementById("leftanimation");
const playerraight = document.getElementById("playerraight");
const raightanimation = document.getElementById("raightanimation");

const start = document.getElementById("start");
const reset = document.getElementById("reset");
const minuty = document.getElementById("minuty");
const sekundy = document.getElementById("sekundy");
const czas = document.getElementById("stoper");
//funkcja licznika czasu
start.addEventListener("click", set);
start.addEventListener("click", stoper);
reset.addEventListener("click", function () {
  location.reload();
});

let minutes = 0;
let seconds = 0;
function stoper() {
  intervalstoper = setInterval(() => {
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes < 10) {
        minuty.innerHTML = "0" + minutes + " : ";
      } else {
        minuty.innerHTML = minutes + " : ";
      }
    }
    seconds++;
    if (minutes == 0) {
      if (seconds < 10) {
        sekundy.innerHTML = "00 : 0" + seconds;
      } else {
        sekundy.innerHTML = "00 : " + seconds;
      }
    } else {
      if (seconds < 10) {
        sekundy.innerHTML = "&nbsp" + "0" + seconds;
      } else {
        sekundy.innerHTML = "&nbsp" + seconds;
      }
    }
  }, 1000);
  start.removeEventListener("click", stoper);
  //

  raightanimation.removeAttribute("style");
  playerleft.style.borderColor = " #fbda61";

  leftanimation.style.position = "absolute";
  leftanimation.style.borderColor = " #ff2525";
  leftanimation.style.width = "25vh";
  leftanimation.style.height = "15vh";
  leftanimation.style.borderRadius = "40px";
  leftanimation.style.border = "5px solid ";
  leftanimation.style.borderColor = "none ";
  leftanimation.style.zIndex = "-1";
  leftanimation.style.animation = "turnanimationyellow 1s steps(4)";
  //
}
//koniec gry stoper
function stopstoper() {
  clearInterval(intervalstoper);
  console.log("M" + minutes + "S" + seconds);
}

let player = 0;
let scorey = 0;
let scorer = 0;
let score2y = 0;
let score2r = 0;
let score3y = 0;
let score3r = 0;
let score4y = 0;
const tab = [];
for (let i = 0; i < 6; i++) {
  tab[i] = [];
  for (let j = 0; j < 7; j++) {
    tab[i][j] = null;
  }
}

//brak mozliwosci klikania

function stop() {
  let g;

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
      g = "r" + j + i;
      document.getElementById(g).removeEventListener("click", action);
      //console.log("STOP" + g);
    }
  }
}
//przywrocenie mozliwosci klikania

function set() {
  let g;

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
      g = "r" + j + i;
      document.getElementById(g).addEventListener("click", action);
      console.log("STOP" + g);
    }
  }
}
//Wygrywanie
const winwindow = document.getElementById("winwindow");
const winner = document.getElementById("winner");
const gametime = document.getElementById("gametime");
let playercolor;

function win() {
  const again = document.getElementById("again");
  winwindow.style.display = "flex";
  stopstoper();
  stop();

  if (minutes == 1) {
    gametime.innerHTML += minutes + "&nbsp" + "minuta" + "&nbsp";
  }
  if (minutes == 2 || minutes == 3 || minutes == 4) {
    gametime.innerHTML += minutes + "&nbsp" + "minuty" + "&nbsp";
  }
  if (minutes > 4) {
    gametime.innerHTML += minutes + "&nbsp" + "minut" + "&nbsp";
  }
  if (seconds == 1) {
    gametime.innerHTML += seconds + "&nbsp" + "sekunda";
  }
  if (seconds == 4 || seconds == 2 || seconds == 3) {
    gametime.innerHTML += seconds + "&nbsp" + "sekundy";
  }
  if (seconds > 4) gametime.innerHTML += seconds + "&nbsp" + "sekund";
  winner.innerHTML += playercolor;
  reset.removeEventListener("click", win);
  czas.style.display = "none";
}
again.addEventListener("click", function () {
  location.reload();
});
//
function action() {
  const idParts = this.getAttribute("id");
  const firstIdValue = parseInt(idParts[1]);
  const secondtIdValue = parseInt(idParts[2]);
  //warunki klikania w dobre okna
  if (
    (firstIdValue == 5 && tab[firstIdValue][secondtIdValue] == undefined) ||
    ((tab[firstIdValue + 1][secondtIdValue] == "yellow" ||
      tab[firstIdValue + 1][secondtIdValue] == "red") &&
      tab[firstIdValue][secondtIdValue] == undefined)
  ) {
    if (player == 0) {
      this.innerHTML = "";
      this.style.cursor = "default";

      stop();
      tab[firstIdValue][secondtIdValue] = "yellow";
      console.log(
        "tablica" +
          firstIdValue +
          secondtIdValue +
          tab[firstIdValue][secondtIdValue]
      );
      //Click!
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 6; j++) {
          if (tab[j][i] == "yellow" || tab[j][i] == "red") {
            if (tab[0][i] == "yellow" || tab[0][i] == "red") {
              break;
            }

            let c = "r" + (j - 1) + i;

            document.getElementById(c).innerHTML = "CLICK";
            document.getElementById(c).style.cursor = "pointer";
            document.getElementById(c).style.zIndex = "0";
            /* document.getElementById(c).style.animation =
              "clickanimation 1s cubic-bezier(0.82, 0, 0.4, 2) 0s 1 forwards normal;"; */
            document.getElementById(c).style.animationName = "clickanimation";
            document.getElementById(c).style.animationFillMode = "forwards";
            document.getElementById(c).style.animationDuration = "1s";
            document.getElementById(c).style.animationTimingFunction =
              "cubic-bezier(0.82, 0, 0.4, 2)";

            //console.log("j" + j + "i" + i + c);
            break;
          }
        }
      }

      //animacja przechodzenia
      let delay;
      let time = 0;
      for (let j = 0; j <= firstIdValue; j++) {
        let i = secondtIdValue;
        if (tab[j][i] == undefined) {
          let c = "r" + j + i;

          document.getElementById(c).innerHTML +=
            '<div id="ar' + j + i + '"></div>';
          d = "ar" + j + i;

          document.getElementById(d).style.position = "absolute";
          document.getElementById(d).style.zIndex = "-1";
          document.getElementById(d).style.borderRadius = "50%";
          document.getElementById(d).style.height = "8vh";
          document.getElementById(d).style.width = "8vh";
          document.getElementById(d).style.animation =
            " yellowanimationin 1s linear " + time + "s 1 none normal";
          time += 0.5;
          console.log(j + "+" + i);
          //console.log("czas" + time);
        }
        if (tab[j][i] == "yellow" || tab[j][i] == "red") {
          console.log(j + "koniec" + i);
          let c = "r" + j + i;
          document.getElementById(c).innerHTML +=
            '<div id="ar' + j + i + '"></div>';
          d = "ar" + j + i;

          document.getElementById(d).style.position = "absolute";
          document.getElementById(d).style.borderRadius = "50%";
          document.getElementById(d).style.height = "8vh";
          document.getElementById(d).style.width = "8vh";
          document.getElementById(d).style.animation =
            " yellowanimationend 1s linear " + time + "s 1 none normal";
          time += 0.5;
          console.log("czas" + time);
          delay = 1000 * time + 500;
          break;
        }
      }

      setTimeout(() => {
        this.style.backgroundColor = "yellow";
        this.style.boxShadow = "none";
        leftanimation.removeAttribute("style");
        player++;
        playerraight.style.borderColor = " red";
        playerleft.style.borderColor = "#c99ebc";
        raightanimation.style.position = "absolute";
        raightanimation.style.borderColor = " #ff2525";
        raightanimation.style.width = "25vh";
        raightanimation.style.height = "15vh";
        raightanimation.style.borderRadius = "40px";
        raightanimation.style.border = "5px solid  ";
        raightanimation.style.borderColor = "none ";
        raightanimation.style.zIndex = "-1";
        raightanimation.style.animation = "turnanimationred 1s steps(4)";
        set();
      }, delay);

      //Sprawdzenie w pionie
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 5; j++) {
          if (tab[j][i] == "yellow" && tab[j + 1][i] == "yellow") {
            scorey++;
            //console.log("wynik" + scorey);
            if (scorey == 3) {
              playercolor =
                "&nbsp" + '<span style="color: yellow">Yellow</span>';
              setTimeout(() => {
                win();
              }, delay);
            }
          } else {
            scorey = 0;
            //console.log("wynik" + scorey);
          }
        }
      }

      //Sprawdzenie w poziomie
      for (let j = 0; j < 6; j++) {
        for (let i = 0; i < 6; i++) {
          if (tab[j][i] == "yellow" && tab[j][i + 1] == "yellow") {
            score2y++;
            //console.log("wynik" + score2y);//
            if (score2y == 3) {
              playercolor =
                "&nbsp" + '<span style="color: yellow">Yellow</span>';
              setTimeout(() => {
                win();
              }, delay);
            }
          } else {
            score2y = 0;
            //console.log("wynik" + score2y);//
          }
        }
      }
      //Sprawdzenie na skos w prawo
      //p1
      let x = 2;
      for (let j = 5; j > 1; j--) {
        x++;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x + 1] == "yellow") {
            score3y++;
            //console.log(j + "@" + x);
          } else {
            score3y = 0;
          }
          if (score3y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p2
      score3y = 0;
      x = 1;
      for (let j = 5; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x + 1] == "yellow") {
            score3y++;
          } else {
            score3y = 0;
          }
          if (score3y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p3
      score3y = 0;
      x = 0;
      for (let j = 5; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x + 1] == "yellow") {
            score3y++;
            //console.log(j + "@" + x);
          } else {
            score3y = 0;
          }
          if (score3y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p4
      score3y = 0;
      x = -1;
      for (let j = 5; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x + 1] == "yellow") {
            score3y++;
          } else {
            score3y = 0;
          }
          if (score3y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p5
      score3y = 0;
      x = -1;
      for (let j = 4; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x + 1] == "yellow") {
            score3y++;
            //console.log(j + "@" + x);
          } else {
            score3y = 0;
          }
          if (score3y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p6
      score3y = 0;
      x = -1;
      for (let j = 3; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x + 1] == "yellow") {
            score3y++;
            //console.log(j + "@" + x);
          } else {
            score3y = 0;
          }
          if (score3y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //Sprawdznie na skos w lewo
      //l1
      x = 4;
      score4y = 0;
      for (let j = 5; j > 1; j--) {
        x--;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x - 1] == "yellow") {
            score4y++;
            //console.log(j + "@" + x);
          } else {
            score4y = 0;
          }
          if (score4y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l2
      x = 5;
      score4y = 0;
      for (let j = 5; j > 0; j--) {
        x--;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x - 1] == "yellow") {
            score4y++;
            //console.log(j + "@" + x);
          } else {
            score4y = 0;
          }
          if (score4y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l3
      x = 6;
      score4y = 0;
      for (let j = 5; j > -1; j--) {
        x--;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x - 1] == "yellow") {
            score4y++;
            //console.log(j + "@" + x);
          } else {
            score4y = 0;
          }
          if (score4y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l4
      x = 7;
      score4y = 0;
      for (let j = 5; j > -1; j--) {
        x--;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x - 1] == "yellow") {
            score4y++;
            //console.log(j + "@" + x);
          } else {
            score4y = 0;
          }
          if (score4y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l5
      x = 7;
      score4y = 0;
      for (let j = 4; j > -1; j--) {
        x--;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x - 1] == "yellow") {
            score4y++;
            //console.log(j + "@" + x);
          } else {
            score4y = 0;
          }
          if (score4y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l6
      x = 7;
      score4y = 0;
      for (let j = 3; j > -1; j--) {
        x--;
        {
          if (tab[j][x] == "yellow" && tab[j - 1][x - 1] == "yellow") {
            score4y++;
            //console.log(j + "@" + x);
          } else {
            score4y = 0;
          }
          if (score4y == 3) {
            playercolor = "&nbsp" + '<span style="color: yellow">Yellow</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
    } else {
      this.innerHTML = "";
      this.style.cursor = "default";
      stop();
      tab[firstIdValue][secondtIdValue] = "red";
      console.log(
        "tablica" +
          firstIdValue +
          secondtIdValue +
          tab[firstIdValue][secondtIdValue]
      );

      //Click!
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 6; j++) {
          if (tab[j][i] == "yellow" || tab[j][i] == "red") {
            if (tab[0][i] == "yellow" || tab[0][i] == "red") {
              break;
            }

            let c = "r" + (j - 1) + i;

            document.getElementById(c).innerHTML = "CLICK ";
            document.getElementById(c).style.cursor = "pointer";
            document.getElementById(c).style.zIndex = "0";
            document.getElementById(c).style.animationName = "clickanimation";
            document.getElementById(c).style.animationFillMode = "forwards";
            document.getElementById(c).style.animationDuration = "1s";
            document.getElementById(c).style.animationTimingFunction =
              "cubic-bezier(0.82, 0, 0.4, 2)";

            //console.log("j" + j + "i" + i + c);
            break;
          }
        }
      }
      //animacja
      let delay;
      let time = 0;
      for (let j = 0; j <= firstIdValue; j++) {
        let i = secondtIdValue;
        if (tab[j][i] == undefined) {
          let c = "r" + j + i;

          document.getElementById(c).innerHTML +=
            '<div id="ar' + j + i + '"></div>';
          d = "ar" + j + i;

          document.getElementById(d).style.position = "absolute";
          document.getElementById(d).style.zIndex = "-1";
          document.getElementById(d).style.borderRadius = "50%";
          document.getElementById(d).style.height = "8vh";
          document.getElementById(d).style.width = "8vh";
          document.getElementById(d).style.animation =
            " redanimationin 1s linear " + time + "s 1 none normal";
          time += 0.5;
          console.log(j + "+" + i);
          //console.log("czas" + time);
        }
        if (tab[j][i] == "yellow" || tab[j][i] == "red") {
          console.log(j + "koniec" + i);
          let c = "r" + j + i;
          document.getElementById(c).innerHTML +=
            '<div id="ar' + j + i + '"></div>';
          d = "ar" + j + i;

          document.getElementById(d).style.position = "absolute";
          document.getElementById(d).style.borderRadius = "50%";
          document.getElementById(d).style.height = "8vh";
          document.getElementById(d).style.width = "8vh";
          document.getElementById(d).style.animation =
            " redanimationend 1s linear " + time + "s 1 none normal";
          time += 0.5;
          console.log("czas" + time);
          delay = 1000 * time + 500;
          break;
        }
      }

      setTimeout(() => {
        this.style.backgroundColor = "red";
        this.style.boxShadow = "none";
        raightanimation.removeAttribute("style");
        player--;
        playerleft.style.borderColor = " #fbda61";
        playerraight.style.borderColor = " #c99ebc";
        leftanimation.style.position = "absolute";
        leftanimation.style.borderColor = " #ff2525";
        leftanimation.style.width = "25vh";
        leftanimation.style.height = "15vh";
        leftanimation.style.borderRadius = "40px";
        leftanimation.style.border = "5px solid ";
        leftanimation.style.borderColor = "none ";
        leftanimation.style.zIndex = "-1";
        leftanimation.style.animation = "turnanimationyellow 1s steps(4)";

        set();
      }, delay);
      //Sprawdzenie w pionie
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 5; j++) {
          if (tab[j][i] == "red" && tab[j + 1][i] == "red") {
            scorer++;
            //console.log("wynik" + scorer);
            if (scorer == 3) {
              playercolor = "&nbsp" + '<span style="color: red">Red</span>';
              setTimeout(() => {
                win();
              }, delay);
            }
          } else {
            scorer = 0;
            // console.log("wynik" + scorer);
          }
        }
      }
      //Sprawdzenie w poziomie
      for (let j = 0; j < 6; j++) {
        for (let i = 0; i < 6; i++) {
          if (tab[j][i] == "red" && tab[j][i + 1] == "red") {
            score2r++;
            // console.log("wynik" + score2r);//
            if (score2r == 3) {
              playercolor = "&nbsp" + '<span style="color: red">Red</span>';
              setTimeout(() => {
                win();
              }, delay);
            }
          } else {
            score2r = 0;
            //console.log("wynik" + score2r);//
          }
        }
      }
      //Sprawdzenie na skos w prawo
      //p1
      score3r = 0;
      let x = 2;
      for (let j = 5; j > 1; j--) {
        x++;
        {
          if (tab[j][x] == "red" && tab[j - 1][x + 1] == "red") {
            score3r++;
            //console.log(j + "@" + x);
          } else {
            score3r = 0;
          }
          if (score3r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p2
      score3r = 0;
      x = 1;
      for (let j = 5; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "red" && tab[j - 1][x + 1] == "red") {
            score3r++;
            //console.log(j + "@" + x);
          } else {
            score3r = 0;
          }
          if (score3r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p3
      score3r = 0;
      x = 0;
      for (let j = 5; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "red" && tab[j - 1][x + 1] == "red") {
            score3r++;
            //console.log(j + "@" + x);
          } else {
            score3r = 0;
          }
          if (score3r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p4
      score3r = 0;
      x = -1;
      for (let j = 5; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "red" && tab[j - 1][x + 1] == "red") {
            score3r++;
            //console.log(j + "@" + x);
          } else {
            score3r = 0;
          }
          if (score3r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p5
      score3r = 0;
      x = -1;
      for (let j = 4; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "red" && tab[j - 1][x + 1] == "red") {
            score3r++;
            //console.log(j + "@" + x);
          } else {
            score3r = 0;
          }
          if (score3r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //p6
      score3r = 0;
      x = -1;
      for (let j = 3; j > 0; j--) {
        x++;
        {
          if (tab[j][x] == "red" && tab[j - 1][x + 1] == "red") {
            score3r++;
            //console.log(j + "@" + x);
          } else {
            score3r = 0;
          }
          if (score3r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //Sprawdznie na skos w lewo
      //l1
      x = 4;
      score4r = 0;
      for (let j = 5; j > 1; j--) {
        x--;
        {
          if (tab[j][x] == "red" && tab[j - 1][x - 1] == "red") {
            score4r++;
            //console.log(j + "@" + x);
          } else {
            score4r = 0;
          }
          if (score4r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l2
      x = 5;
      score4r = 0;
      for (let j = 5; j > 0; j--) {
        x--;
        {
          if (tab[j][x] == "red" && tab[j - 1][x - 1] == "red") {
            score4r++;
            //console.log(j + "@" + x);
          } else {
            score4r = 0;
          }
          if (score4r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l3
      x = 6;
      score4r = 0;
      for (let j = 5; j > -1; j--) {
        x--;
        {
          if (tab[j][x] == "red" && tab[j - 1][x - 1] == "red") {
            score4r++;
            //console.log(j + "@" + x);
          } else {
            score4r = 0;
          }
          if (score4r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l4
      x = 7;
      score4r = 0;
      for (let j = 5; j > -1; j--) {
        x--;
        {
          if (tab[j][x] == "red" && tab[j - 1][x - 1] == "red") {
            score4r++;
            //console.log(j + "@" + x);
          } else {
            score4r = 0;
          }
          if (score4r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l5
      x = 7;
      score4r = 0;
      for (let j = 4; j > -1; j--) {
        x--;
        {
          if (tab[j][x] == "red" && tab[j - 1][x - 1] == "red") {
            score4r++;
            //console.log(j + "@" + x);
          } else {
            score4r = 0;
          }
          if (score4r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
      //l6
      x = 7;
      score4r = 0;
      for (let j = 3; j > -1; j--) {
        x--;
        {
          if (tab[j][x] == "red" && tab[j - 1][x - 1] == "red") {
            score4r++;
            //console.log(j + "@" + x);
          } else {
            score4r = 0;
          }
          if (score4r == 3) {
            playercolor = "&nbsp" + '<span style="color: red">Red</span>';
            setTimeout(() => {
              win();
            }, delay);
          }
        }
      }
    }
  }
}
