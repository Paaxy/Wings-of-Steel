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
    fbxLoader.load(
      'assets/models/your_model.fbx', // Change this to your model's path
      (object) => {
        // Adjust the model's scale and position if needed
        object.scale.set(0.01, 0.01, 0.01); // Example scale adjustment
        object.position.set(0, 0, 0);
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error occurred while loading the FBX model:', error);
      }
    );

    // Optional: Add OrbitControls for camera navigation (requires additional script)
    // Uncomment the following lines if you want to use OrbitControls:
    /*
    import { OrbitControls } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/examples/jsm/controls/OrbitControls.js';
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    */

    // Render loop
    function animate() {
      requestAnimationFrame(animate);

      // You can add any custom animations or game logic here

      renderer.render(scene, camera);
    }
    animate();
  }
});
