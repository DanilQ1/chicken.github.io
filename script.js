const chicken = document.getElementById('chicken');
const multipliers = document.querySelectorAll('.multiplier-circle');
const winPopup = document.getElementById('winPopup');
const multiplierValue = document.getElementById('multiplierValue');
const playButton = document.querySelector('.play-btn');
const jumpSound = document.getElementById('jumpSound'); 

const platformMultipliers = [
  1.03, 1.07, 1.12, 1.17, 1.23, 1.29, 1.36, 1.44, 1.53, 1.63,
  1.75, 1.88, 2.04, 2.22, 2.45, 2.72, 3.06, 3.50, 4.08, 4.90,
  6.13, 9.81, 19.44
];


let gameInProgress = false; 

function startGame() { 

    gameInProgress = true;
    
    let randomMultiplierIndex = Math.floor(Math.random() * multipliers.length);
    let multiplierCircle = multipliers[randomMultiplierIndex];
    let multiplier = platformMultipliers[randomMultiplierIndex];

    multipliers.forEach(m => m.style.backgroundColor = 'rgba(255, 255, 255, 0.2)');
    multiplierCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

    chicken.style.left = multiplierCircle.offsetLeft + "px";
    chicken.style.transform = `translateY(-100px)`;
    jumpSound.play();
    
    setTimeout(() => {
      chicken.style.transform = `translateY(0)`;
      showWinPopup(multiplier);
  }, 500);

  const scrollContainer = document.querySelector('.scroll-container');
  scrollContainer.scrollTo({
    left: multiplierCircle.offsetLeft - 200,
    behavior: 'smooth'
  });
  
  

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
}}
