document.addEventListener('DOMContentLoaded', function () {
  var accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var target = document.querySelector(this.getAttribute('data-target'));

      // Toggle the visibility of the target
      if (target.classList.contains('is-open')) {
        target.classList.remove('is-open'); // Hide the content
        this.classList.add('is-collapsed'); // Update button state
      } else {
        // Close all open accordion items (optional)
        document.querySelectorAll('.accordion-collapse.is-open').forEach(function (openItem) {
          openItem.classList.remove('is-open');
        });
        document.querySelectorAll('.accordion-button').forEach(function (openButton) {
          openButton.classList.add('is-collapsed');
        });

        target.classList.add('is-open'); // Show the current content
        this.classList.remove('is-collapsed'); // Update button state
      }
    });
  });
});
