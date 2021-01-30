class Time {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
}

function changeClockNumber (digit, amount) {
  digit.classList.add('flip');

  setTimeout(function () {
    digit.innerHTML = '';

    setTimeout(function () {
      digit.innerHTML = amount;
      digit.classList.remove('flip');
    }, 300);
  }, 500);

  return;
}

function changeClock (time) {
  let secondDigit = document.querySelector(`.${time.name}_second_digit`);
  let firstDigit = document.querySelector(`.${time.name}_first_digit`);

  if (secondDigit.innerHTML === '' && firstDigit.innerHTML === '') {
    if (time.amount >= 10) {
      secondDigit.innerHTML = parseInt(time.amount / 10);
      firstDigit.innerHTML = time.amount % 10;
    } else {
      secondDigit.innerHTML = 0;
      firstDigit.innerHTML = time.amount;
    }

    return;
  }

  let clockTime = parseInt(secondDigit.innerHTML + firstDigit.innerHTML);

  if (clockTime !== time.amount) {
    if (time.amount >= 10) {
      if (parseInt(clockTime / 10) !== parseInt(time.amount / 10)) {
        changeClockNumber(secondDigit, parseInt(time.amount / 10));
      }

      changeClockNumber(firstDigit, time.amount % 10);
    } else {
      if (parseInt(clockTime / 10) !== 0) {
        secondDigit.innerHTML = 0;
      }

      changeClockNumber(firstDigit, time.amount);
    }
  }

  return;
}

function startClock () {
  let nowTime = new Date();

  let hours = new Time('hours', nowTime.getHours());
  let minutes = new Time('minutes', nowTime.getMinutes());
  let seconds = new Time('seconds', nowTime.getSeconds());

  let timeArray = new Array(hours, minutes, seconds);

  for (let i = 0; i < timeArray.length; i++) {
    changeClock(timeArray[i]);
  }
}

setInterval(startClock, 1000);
startClock();
