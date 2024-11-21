const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion, index) => {
  // Click event for toggling
  accordion.onclick = function () {
    toggleAccordion(this);
  };

  // Keydown event for keyboard accessibility
  accordion.onkeydown = function (event) {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        toggleAccordion(this);
        break;
      case "ArrowDown":
        event.preventDefault();
        const next = accordionBtns[index + 1] || accordionBtns[0];
        next.focus();
        break;
      case "ArrowUp":
        event.preventDefault();
        const prev = accordionBtns[index - 1] || accordionBtns[accordionBtns.length - 1];
        prev.focus();
        break;
      case "Home":
        event.preventDefault();
        accordionBtns[0].focus();
        break;
      case "End":
        event.preventDefault();
        accordionBtns[accordionBtns.length - 1].focus();
        break;
    }
  };

  function toggleAccordion(button) {
    // Toggle 'is-open' class
    button.classList.toggle("is-open");

    // Get the content panel
    const content = button.nextElementSibling;

    // Update aria-expanded and aria-hidden
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      button.setAttribute("aria-expanded", "false");
      content.setAttribute("aria-hidden", "true");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      button.setAttribute("aria-expanded", "true");
      content.setAttribute("aria-hidden", "false");
    }
  }
});
