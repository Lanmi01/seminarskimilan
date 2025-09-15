document.addEventListener('DOMContentLoaded', function() {
  const kontaktForma = document.getElementById('kontakt-forma');

  kontaktForma.addEventListener('submit', function(event) {
      event.preventDefault();

      const ime = document.getElementById('ime').value;
      const email = document.getElementById('email').value;
      const poruka = document.getElementById('poruka').value;

      if (ime === '' || email === '' || poruka === '') {
          alert('Molimo popunite sva polja.');
      } else {
          alert('Poruka je uspešno poslata!');
          kontaktForma.reset();
      }
  });
});
