document.addEventListener('click', async (e) => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  const target = document.getElementById(btn.dataset.copyTarget);
  if (!target) return;
  const text = target.innerText;
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  const label = btn.textContent;
  btn.textContent = 'コピーしました！';
  btn.classList.add('copied');
  setTimeout(() => { btn.textContent = label; btn.classList.remove('copied'); }, 1800);
});
