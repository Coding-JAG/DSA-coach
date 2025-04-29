document.querySelector('.image-wrapper').addEventListener('click', () => {
  const text = document.querySelector('.image-wrapper').dataset.text;
  navigator.clipboard.writeText(text)
    .then(() => alert('Prompt copied to clipboard!'))
    .catch(() => alert('Failed to copy the prompt.'));
});
