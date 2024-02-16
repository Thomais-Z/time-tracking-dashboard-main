import * as data from './data.json';

const dailyBtn = document.querySelector('.daily-btn');
const weeklyBtn = document.querySelector('.weekly-btn');
const monthlyBtn = document.querySelector('.monthly-btn');

const currentTime = document.querySelectorAll('.current-time');
const previousTime = document.querySelectorAll('.previous-time');

const daily = function () {
  currentTime.forEach((_, i) => {
    currentTime[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
    previousTime[
      i
    ].innerHTML = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
  });
};
daily();

const weekly = function () {
  currentTime.forEach((_, i) => {
    currentTime[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
    previousTime[
      i
    ].innerHTML = `Yesterday - ${data[i].timeframes.weekly.previous}hrs`;
  });
};

const monthly = function () {
  currentTime.forEach((_, i) => {
    currentTime[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
    previousTime[
      i
    ].innerHTML = `Yesterday - ${data[i].timeframes.monthly.previous}hrs`;
  });
};

dailyBtn.addEventListener('click', () => {
  // dailyBtn.classList.remove('non-active');
  dailyBtn.classList.add('active');
  weeklyBtn.classList.remove('active');
  monthlyBtn.classList.remove('active');
  daily();
});

weeklyBtn.addEventListener('click', () => {
  dailyBtn.classList.remove('active');
  weeklyBtn.classList.add('active');
  monthlyBtn.classList.remove('active');
  weekly();
});

monthlyBtn.addEventListener('click', () => {
  dailyBtn.classList.remove('active');
  weeklyBtn.classList.remove('active');
  monthlyBtn.classList.add('active');
  monthly();
});
