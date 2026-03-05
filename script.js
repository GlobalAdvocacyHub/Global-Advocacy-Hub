// ENTER SITE BUTTON
const enterButton = document.getElementById('enter-site');
const bookEntrance = document.getElementById('book-entrance');
const homepage = document.getElementById('homepage');

// START EXPLORING BUTTON
const startButton = document.getElementById('start-exploring');

enterButton.addEventListener('click', () => {
  const theme = document.getElementById('theme-select').value;
  const age = document.getElementById('age-select').value;

  console.log('User theme:', theme);
  console.log('User age level:', age);

  // Apply theme colors
  if(theme === 'space') {
    document.body.style.background = '#0b0c27';
    homepage.style.color = '#b0cfff';
    startButton.style.background = '#1a1aff';
  } else if(theme === 'forest') {
    document.body.style.background = '#2e4a1f';
    homepage.style.color = '#d9f0c1';
    startButton.style.background = '#4a7c3a';
  } else if(theme === 'dark') {
    document.body.style.background = '#1a1a1a';
    homepage.style.color = '#cccccc';
    startButton.style.background = '#6a0dad';
  } else {
    document.body.style.background = '#1e1e2f';
    homepage.style.color = '#fff';
    startButton.style.background = '#ff69b4';
  }

  // Animate book closing
  bookEntrance.style.transition = 'opacity 1s ease-out';
  bookEntrance.style.opacity = 0;
  setTimeout(() => {
    bookEntrance.style.display = 'none';
    homepage.style.display = 'block';
  }, 1000);
});

// START EXPLORING BUTTON ACTION
startButton.addEventListener('click', () => {
  alert("Welcome to the Globe & Exploration Layer! 🌎✨ (This is where we’ll add the interactive globe, mythology zones, and daily activities.)");
});
