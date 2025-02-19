import random

class Map:
    def __init__(self, name, terrain_type):
        self.name = name
        self.terrain_type = terrain_type

    def __str__(self):
        return f"{self.name} ({self.terrain_type})"

class GameManager:
    def __init__(self, tech_tree):
        self.tech_tree = tech_tree
        self.maps = [
            Map("Tropical Island", "island"),
            Map("Desert Wasteland", "desert"),
            Map("Rugged Canyon", "canyon"),
            Map("Lush Forest", "forest"),
            Map("Snowy Mountains", "mountains"),
            Map("Rolling Plains", "plains")
        ]

    def load_game(self):
        print("Loading game...")
        # Load player progress, settings, etc.
        # Retrieve the tech tree from the TechTree instance
        self.tech_tree = tech_tree

    def start_game(self):
        print("Starting game...")
        # Initialize game loop
        self.spawn_player()
        self.spawn_map()
        self.run_game()

    def spawn_player(self):
        # Spawn the player's vehicle based on their progress in the tech tree
        country = random.choice(list(self.tech_tree.tree.keys()))
        vehicle = self.tech_tree.get_vehicles_by_country(country)[0]
        print(f"Spawning player with {vehicle}")

    def spawn_map(self):
        # Randomly select a map for the player to spawn in
        self.current_map = random.choice(self.maps)
        print(f"Spawning player on {self.current_map}")

    def run_game(self):
        print("Running game loop...")
        # Game logic, rendering, input handling, etc.

# Create the TechTree instance
tech_tree = TechTree()
# Add vehicles to the tech tree (as before)

# Create the GameManager and load the game
game_manager = GameManager(tech_tree)
game_manager.load_game()
game_manager.start_game()
