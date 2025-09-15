// hamburger + dropdown (bez ARIA)
(()=> {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('#navigacijaa') || document.querySelector('.navigacija');
  const prodLi = nav?.querySelector('.padajuci-meni');
  const prodLink = document.getElementById('proizvodi-link');
  const isMobile = () => matchMedia('(max-width:900px)').matches;

  // Hamburger
  hamburger?.addEventListener('click', () => nav?.classList.toggle('active'));

  // Dropdown na mobilnom
  prodLink?.addEventListener('click', (e) => {
    if (!isMobile()) return;
    e.preventDefault();
    prodLi?.classList.toggle('open');
  });

  // Klik van menija zatvara dropdown (mobilni)
  document.addEventListener('click', (e) => {
    if (!isMobile() || !prodLi) return;
    if (!prodLi.contains(e.target)) prodLi.classList.remove('open');
  });

  // Prelazak na desktop – reset stanja
  addEventListener('resize', () => {
    if (!isMobile()){ nav?.classList.remove('active'); prodLi?.classList.remove('open'); }
  });
})();
