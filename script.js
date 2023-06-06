// DECOMPTE SCRIP
        // Date cible (24 juin)
        var targetDate = new Date('2023-06-24T00:00:00');
    
        function updateCountdown() {
          var now = new Date();
          var timeLeft = targetDate - now;
    
          // Calcul des jours, heures, minutes et secondes restants
          var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
          // Mise à jour des valeurs dans le décompte
          document.getElementById("days").innerHTML = days+":";
          document.getElementById("hours").innerHTML = hours+":";
          document.getElementById("minutes").innerHTML = minutes+":";
          document.getElementById("seconds").innerHTML = seconds;
    
          // Mise à jour toutes les secondes
          setTimeout(updateCountdown, 1000);
        }
    
        // Démarrage du décompte au chargement de la page
        updateCountdown();



        