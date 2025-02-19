// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get references to our menus and buttons
  const mainMenu = document.getElementById("main-menu");
  const equipmentMenu = document.getElementById("equipment-menu");
  const gameContainer = document.getElementById("game-container");
  const loadingDiv = document.getElementById("loading");

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
    loadingDiv.classList.remove('hidden'); // Show loading

    // Initialize the game based on selected mode
    initGame();
  });

  // --- Game Initialization using Three.js and FBXLoader ---
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
    camera.position.set(0, 2, 5); // Adjust camera position as needed

    // Create a WebGL renderer and add it to our container
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(gameContainer.clientWidth, gameContainer.clientHeight);
    gameContainer.appendChild(renderer.domElement);

    // Add ambient and directional lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Load the FBX model using FBXLoader
    const fbxLoader = new THREE.FBXLoader();
    let modelPath = '';

    if (selectedMode === "air") {
      modelPath = 'assets/models/aircraft_model.fbx'; // Change this to your aircraft model's path
    } else if (selectedMode === "tank") {
      modelPath = 'assets/models/tank_model.fbx'; // Change this to your tank model's path
    } else if (selectedMode === "ship") {
      modelPath = 'assets/models/ship_model.fbx'; // Change this to your ship model's path
    }

    fbxLoader.load(
      modelPath,
      (object) => {
        loadingDiv.classList.add('hidden'); // Hide loading
        object.scale.set(0.01, 0.01, 0.01); // Example scale adjustment
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        loadingDiv.classList.add('hidden'); // Hide loading
        console.error('An error occurred while loading the FBX model:', error);
      }
    );

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = gameContainer.clientWidth / gameContainer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(gameContainer.clientWidth, gameContainer.clientHeight);
    });

    // Optional: Add OrbitControls for camera navigation
    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Render loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update(); // Update controls
      renderer.render(scene, camera);
    }
    animate();
  }
});
