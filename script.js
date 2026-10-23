        $(document).ready(function() {
  // Target all anchor links that point to an ID
  $('a[href^="#"]').on('click', function(event) {
    // Ensure the hash has a value
    if (this.hash !== "") {
      event.preventDefault();
      
      var hash = this.hash;

      // Animate the scrollTop property over 800 milliseconds
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash to URL when done scrolling
        window.location.hash = hash;
      });
    }
  });
});