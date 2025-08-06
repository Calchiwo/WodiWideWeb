<script>
  const lightBtn = document.getElementById('light-mode-btn');
  const darkBtn = document.getElementById('dark-mode-btn');
  const copyBtn = document.getElementById('copy-link-btn');

  lightBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
  });

  darkBtn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
  });

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('🔗 Link copied to clipboard!'))
      .catch(() => alert('❌ Failed to copy link'));
  });
</script>
