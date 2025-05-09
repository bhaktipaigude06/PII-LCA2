// Custom function to display alert and log message
function showMessage(message) {
    console.log(message);
    alert(message);
  }
  
  // DOM traversal methods
  const allCards = document.querySelectorAll(".card"); // querySelectorAll
  const headings = document.getElementsByTagName("h3"); // getElementsByTagName
  
  // Mouse-based events: hover effect and click
  allCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.classList.add("hover-effect");
    });
  
    card.addEventListener("mouseout", () => {
      card.classList.remove("hover-effect");
    });
  
    const button = card.querySelector(".know-more");
    if (button) {
      button.addEventListener("click", () => {
        showMessage(`You clicked on: ${card.querySelector("h3").textContent}`);
      });
    }
  });
  
  // DOM tree navigation
  const firstCard = document.querySelector(".portfolio-section").firstElementChild;
  console.log("First card content:", firstCard.children[1].textContent); // .children
  
  // Key-based event listener
  // Pressing 'n' adds a new card
  document.body.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "n") {
      addNewCard();
    }
  });
  
  // Function to add new card dynamically
  function addNewCard() {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
      <h3>New Skill</h3>
      <p>This card was added dynamically when you pressed 'n'!</p>
      <button class="know-more">Know more</button>
    `;
  
    const portfolio = document.getElementById("portfolio");
    console.log(portfolio);
    portfolio.appendChild(newCard);
  
    // Re-attach event listeners to the new card
    newCard.addEventListener("mouseover", () => {
      newCard.classList.add("hover-effect");
    });
  
    newCard.addEventListener("mouseout", () => {
      newCard.classList.remove("hover-effect");
    });
  
    newCard.querySelector(".know-more").addEventListener("click", () => {
      showMessage("You clicked on: New Skill");
    });
  }
  
  // Optional: Define CSS class via JS for hover-effect if not already in stylesheet
  const style = document.createElement('style');
  style.textContent = `
    .hover-effect {
      transform: scale(1.05);
      transition: transform 0.3s ease;
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
  