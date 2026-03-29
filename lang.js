function setLang(lang) {
  document.body.classList.toggle('lang-en', lang === 'en');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

// Restore language preference on load
(function () {
  const saved = localStorage.getItem('lang');
  if (saved === 'en') setLang('en');
})();
