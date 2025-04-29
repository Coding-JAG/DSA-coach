document.querySelector('.image-wrapper').addEventListener('click', () => {
    const text = document.querySelector('.image-wrapper').dataset.text;
    navigator.clipboard.writeText(text)
      .then(() => alert(`Copied: "${text}"`))
      .catch(err => alert("Failed to copy text."));
  });
  