const enterButton = document.getElementById('enter-site');
const bookEntrance = document.getElementById('book-entrance');
const homepage = document.getElementById('homepage');

enterButton.addEventListener('click', () => {
  // Grab selected theme and age
  const theme = document.getElementById('theme-select').value;
  const age = document.getElementById('age-select').value;

  console.log('User selected theme:', theme);
  console.log('User selected age:', age);

  // Apply theme (example)
  if (theme === 'space') {
    document.body.style.background = '#0b0c27';
  } else if (theme === 'forest') {
    document.body.style.background = '#2e4a1f';
  }

  // Hide book, show homepage
  bookEntrance.style.display = 'none';
  homepage.style.display = 'block';
});
