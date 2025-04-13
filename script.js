const chicken = document.getElementById('chicken');
const multipliers = document.querySelectorAll('.multiplier-circle');
const winPopup = document.getElementById('winPopup');
const multiplierValue = document.getElementById('multiplierValue');
const playButton = document.querySelector('.play-btn');
const jumpSound = document.getElementById('jumpSound'); 

const platformMultipliers = [1.03, 1.23, 1.63, 2.04, 3.50];

let gameInProgress = false; 

function startGame() { 

    gameInProgress = true;
    
    let randomMultiplierIndex = Math.floor(Math.random() * multipliers.length);
    let multiplierCircle = multipliers[randomMultiplierIndex];
    let multiplier = platformMultipliers[randomMultiplierIndex];
    
    multipliers.forEach(m => m.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'); // сброс подсветки
    multiplierCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // подсветка выбранного круга
    
    chicken.style.left = multiplierCircle.offsetLeft + "px";
    chicken.style.transform = `translateY(-100px)`; 
    
    jumpSound.play(); 
    
    setTimeout(() => {
        chicken.style.transform = `translateY(0)`; // Курочка приземляется
        showWinPopup(multiplier); // Показываем окно победы
    }, 500);
}

function showWinPopup(multiplier) {
  const popup = document.querySelector('.win-popup');
  const winSound = document.getElementById('winSound');

  popup.querySelector('p').textContent = `Multiplier: ${multiplier}x`;
  popup.classList.add('shake');
  popup.style.display = 'block';

  winSound.currentTime = 0;
  winSound.play();

  setTimeout(() => {
    popup.style.display = 'none';
    popup.classList.remove('shake');
    gameInProgress = false;
  }, 1000);
}



function closePopup() {
    winPopup.style.display = 'none';
    gameInProgress = false; // Разрешаем начать игру снова
}
