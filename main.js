//fichier js pour la page d'accueil

// Fonction pour gérer le lien actif
function setActiveNavLink() {
    console.log('setActiveNavLink fonction called');
    const currentPath = window.location.pathname;
    console.log(currentPath);

    //not working -> en cours de résolution
    // problème avec la récupération des liens dans le header
    document.querySelectorAll('header a').forEach(link => {
        const linkPath = link.getAttribute('href');
        console.log(linkPath);
        if (currentPath.endsWith(linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Exécuter setActiveNavLink quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    setActiveNavLink();
});


document.addEventListener('click', function(e) {
    if (e.target.id === 'burger-menu') {
        console.log('burger-menu clicked');
        const nav = document.getElementById('myTopnav');
        nav.classList.toggle('responsive');
        e.target.classList.toggle('active');
    }
});

// Gestion des cartes de témoignages
document.addEventListener('DOMContentLoaded', function() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  testimonialCards.forEach(card => {
    const content = card.querySelector('p');
    
    // Vérifier si le contenu dépasse la hauteur maximale
    const isOverflowing = content.scrollHeight > content.clientHeight;
    
    if (!isOverflowing) {
      // Si pas de débordement, on retire les éléments de "Lire la suite"
      card.style.cursor = 'default';
      const gradient = card.querySelector('p::after');
      if (gradient) gradient.style.display = 'none';
      card.classList.add('no-overflow');
    } else {
      // Si débordement, on ajoute le comportement d'expansion
      card.addEventListener('click', function() {
        if (this.classList.contains('expanded')) {
          this.classList.remove('expanded');
          return;
        }
        
        // On réduit toutes les autres cartes
        testimonialCards.forEach(c => c.classList.remove('expanded'));
        
        // On expand la carte cliquée
        this.classList.add('expanded');
      });
    }
  });
  
  // Fermer les cartes expandées quand on clique en dehors
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.testimonial-card')) {
      testimonialCards.forEach(card => card.classList.remove('expanded'));
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonial-track');
    // ... remove all carousel related code
});