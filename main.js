// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get references to our menus and buttons
  const mainMenu = document.getElementById("main-menu");
  const equipmentMenu = document.getElementById("equipment-menu");
  const gameContainer = document.getElementById("game-container");

  const btnAirBattle = document.getElementById("btn-air-battle");
  const btnTankBattle = document.getElementById("btn-tank-battle");
  const btnShipBattle = document.getElementById("btn-ship-battle");
  const btnStartGame = document.getElementById("btn-start-game");

  // Variables for equipment selections
  let selectedMode = "";
  let selectedAircraft = "";
  let selectedAmmo = "";
  let selectedMissile = "";

  // When a mode is selected, hide the main menu and show the equipment menu
  btnAirBattle.addEventListener("click", () => {
    selectedMode = "air";
    mainMenu.classList.add("hidden");
    equipmentMenu.classList.remove("hidden");
  });
  // You can add similar event listeners for tank and ship battles
  btnTankBattle.addEventListener("click", () => {
    selectedMode = "tank";
    mainMenu.classList.add("hidden");
    equipmentMenu.classList.remove("hidden");
  });
  btnShipBattle.addEventListener("click", () => {
    selectedMode = "ship";
    mainMenu.classList.add("hidden");
    equipmentMenu.classList.remove("hidden");
  });

  // Start Game button: store the selections and initialize the game
  btnStartGame.addEventListener("click", () => {
    // Get values from selectors
    selectedAircraft = document.getElementById("aircraft-select").value;
    selectedAmmo = document.getElementById("ammo-select").value;
    selectedMissile = document.getElementById("missile-select").value;
    
    // Hide the equipment menu and show the game container
    equipmentMenu.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    
    // Initialize the game based on selected mode
    initGame();
  });

  // --- Game Initialization using Three.js ---
  function initGame() {
    // Create a basic Three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      gameContainer.clientWidth / gameContainer.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a WebGL renderer and add it to our container
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(gameContainer.clientWidth, gameContainer.clientHeight);
    gameContainer.appendChild(renderer.domElement);

    // Add a basic object to represent our aircraft (placeholder)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    const aircraft = new THREE.Mesh(geometry, material);
    scene.add(aircraft);

    // Example: Mach speed calculation (assuming speed in m/s)
    const speedOfSound = 343; // m/s at sea level
    let aircraftSpeed = 0; // starting speed (m/s)
    
    // Function to update aircraft speed (you can tie this to user input)
    function updateAircraftSpeed(deltaSpeed) {
      aircraftSpeed += deltaSpeed;
      const machNumber = aircraftSpeed / speedOfSound;
      console.log("Current Speed (m/s):", aircraftSpeed, "Mach:", machNumber.toFixed(2));
      // Here you can add effects based on Mach number, e.g., sonic boom at Mach > 1
    }
    
    // Dummy update call (for testing speed changes)
    updateAircraftSpeed(100); // Increase speed by 100 m/s

    // Render loop
    function animate() {
      requestAnimationFrame(animate);

      // Example movement: rotate the aircraft for demonstration
      aircraft.rotation.x += 0.01;
      aircraft.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
    
    // Further code for handling player input, spawning projectiles,
    // and adding more game mechanics would be implemented here.
  }
});
