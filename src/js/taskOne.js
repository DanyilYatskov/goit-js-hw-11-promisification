// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Значением исполнившегося промиса должно быть то кол - во миллисекунд которое передали во время вызова функции delay.

const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms && Number.isInteger(ms)) {
        resolve(ms);
      } else {
        const error = 'input error';
        reject(error);
      }
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);
const handleError = error => console.log(error);
// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
delay().then(logger).catch(handleError);
delay('asd').then(logger).catch(handleError);
delay(1.5).then(logger).catch(handleError);
