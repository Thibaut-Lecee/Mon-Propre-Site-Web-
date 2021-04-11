// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["Bonjour à tous et à toutes, je me présente, je m'appel Thibaut Lecee, j'ai actuellement 23 ans et je suis coach sportif depuis bientot 3 ans.", "Depuis l'arrivé du COVID, mon travail s'est brusquement arrêté et j'ai eu plus de temps à consacrer à ma seconde passion qui est le développement informatique.","J'ai décidé de me lancer à fond dans l'apprentissage du code, depuis près de 3 mois je me forme à temps plein en autodidacte aux langages Front tels que CSS, Javascript et HTML afin devenir le plus rapidement possible autonome.", "Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder.", "Afin de démarrer ma nouvelle carrière, je souhaite intégrer la formation « Développement informatique » en alternance au CESI de Saint-Etienne du Rouvray. Celle-ci débuterai dès le 27 Septembre 2021 et me permettrait d’obtenir mon diplôme de niveau V","Cette formation m'intéresse particulièrement puisqu'elle me permettrait d'acquérir une formation professionnalisante pour intégrer un poste de Développeur Informatique","Je suis donc à la recherche d'une entreprise qui pourrait me proposer un contrat en alternance de 2 ans, cela me permettrait ainsi d'être mis en situation et de découvrir mon futur métier. "],
  typeSpeed: 20,
});

// COMPTEUR LIVE

// Valeur compteur = 0

let compteur = 0;


//Si le compteur est à 0 et si on arrive au début de l'élément alors tu lance la fonction
// Donc fonction window et scroll  


$(window).scroll(function () {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {

    // Permet de savoir ou indiquer les chiffres
    $('.counter-value').each(function () {
      let $this = $(this),

        // data-count html va attribuer un chiffre à countTo
        countTo = $this.attr('data-count');
      $({

        // counTo = countNum --> sauf que counNum crée l'animation 
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
        {
          duration: 10000,
          easing: 'swing',
          step: function () {

            // Math.floor permet d'incrémenter
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
    });
    // A la fin le compteur doit être égale à 1
    compteur = 1;

  }
});



// ***AOS****
// METTRE LE AOS EN MAJUSCULE !!!!!!!!!!!!!!!!
AOS.init();
