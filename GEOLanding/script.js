const feedbackBtn = document.getElementById('feedback-btn');
const feedbackForm = document.getElementById('feedback-form');

feedbackBtn.addEventListener('click', function() {
  feedbackBtn.style.display = 'none';
  feedbackForm.style.display = 'block';
});

// Получаем текущее значение счетчика из localStorage
let count = localStorage.getItem('pageViewCount');

// Если значение еще не установлено, то присваиваем ему 0
if (count === null) {
  count = 0;
}

// Увеличиваем значение счетчика на 1
count++;

// Сохраняем новое значение в localStorage
localStorage.setItem('pageViewCount', count);

document.querySelector('#pageviews').innerHTML = count;

console.log(count)
