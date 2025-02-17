class Vehicle:
    def __init__(self, name, vehicle_type, level, country):
        self.name = name
        self.vehicle_type = vehicle_type
        self.level = level
        self.country = country

    def __str__(self):
        return f"{self.name} ({self.vehicle_type} - Level {self.level})"


class TechTree:
    def __init__(self):
        self.tree = {}

    def add_vehicle(self, vehicle):
        if vehicle.country not in self.tree:
            self.tree[vehicle.country] = []
        self.tree[vehicle.country].append(vehicle)

    def get_vehicles_by_country(self, country):
        return sorted(self.tree.get(country, []), key=lambda x: x.level)

    def display_tech_tree(self, country):
        vehicles = self.get_vehicles_by_country(country)
        print(f"\nTech Tree for {country}:")
        for vehicle in vehicles:
            print(vehicle)


# Initialize the Tech Tree system
tech_tree = TechTree()

# Adding USA Planes (weak to strong)
tech_tree.add_vehicle(Vehicle("P-51 Mustang", "Plane", 1, "USA"))
tech_tree.add_vehicle(Vehicle("F4U Corsair", "Plane", 2, "USA"))
tech_tree.add_vehicle(Vehicle("F-86 Sabre", "Plane", 3, "USA"))
tech_tree.add_vehicle(Vehicle("F-22 Raptor", "Plane", 4, "USA"))

# Adding UK Planes (weak to strong)
tech_tree.add_vehicle(Vehicle("Spitfire Mk I", "Plane", 1, "UK"))
tech_tree.add_vehicle(Vehicle("Hawker Hurricane", "Plane", 2, "UK"))
tech_tree.add_vehicle(Vehicle("Hawker Hunter", "Plane", 3, "UK"))
tech_tree.add_vehicle(Vehicle("Eurofighter Typhoon", "Plane", 4, "UK"))

# Adding France Planes (weak to strong)
tech_tree.add_vehicle(Vehicle("Dewoitine D.520", "Plane", 1, "France"))
tech_tree.add_vehicle(Vehicle("Mirage III", "Plane", 2, "France"))
tech_tree.add_vehicle(Vehicle("Mirage 2000", "Plane", 3, "France"))
tech_tree.add_vehicle(Vehicle("Rafale", "Plane", 4, "France"))

# Adding Russia Planes (weak to strong)
tech_tree.add_vehicle(Vehicle("Yak-9", "Plane", 1, "Russia"))
tech_tree.add_vehicle(Vehicle("MiG-15", "Plane", 2, "Russia"))
tech_tree.add_vehicle(Vehicle("MiG-29", "Plane", 3, "Russia"))
tech_tree.add_vehicle(Vehicle("Su-27", "Plane", 4, "Russia"))

# Adding China Planes (weak to strong)
tech_tree.add_vehicle(Vehicle("Shenyang J-6", "Plane", 1, "China"))
tech_tree.add_vehicle(Vehicle("J-10", "Plane", 2, "China"))
tech_tree.add_vehicle(Vehicle("J-20", "Plane", 3, "China"))
tech_tree.add_vehicle(Vehicle("J-31", "Plane", 4, "China"))

# Adding Japan Planes (weak to strong)
tech_tree.add_vehicle(Vehicle("A6M Zero", "Plane", 1, "Japan"))
tech_tree.add_vehicle(Vehicle("Ki-84 Hayate", "Plane", 2, "Japan"))
tech_tree.add_vehicle(Vehicle("F-4 Phantom II", "Plane", 3, "Japan"))
tech_tree.add_vehicle(Vehicle("F-2A", "Plane", 4, "Japan"))

# Adding Germany Planes (weak to strong)
tech_tree.add_vehicle(Vehicle("Bf 109", "Plane", 1, "Germany"))
tech_tree.add_vehicle(Vehicle("Fw 190", "Plane", 2, "Germany"))
tech_tree.add_vehicle(Vehicle("Me 262", "Plane", 3, "Germany"))
tech_tree.add_vehicle(Vehicle("Eurofighter Typhoon", "Plane", 4, "Germany"))

# Adding USA Tanks (weak to strong)
tech_tree.add_vehicle(Vehicle("M4 Sherman", "Tank", 1, "USA"))
tech_tree.add_vehicle(Vehicle("M26 Pershing", "Tank", 2, "USA"))
tech_tree.add_vehicle(Vehicle("M1 Abrams", "Tank", 3, "USA"))

# Adding UK Tanks (weak to strong)
tech_tree.add_vehicle(Vehicle("Churchill Mk VII", "Tank", 1, "UK"))
tech_tree.add_vehicle(Vehicle("Centurion Mk 3", "Tank", 2, "UK"))
tech_tree.add_vehicle(Vehicle("Challenger 2", "Tank", 3, "UK"))

# Adding France Tanks (weak to strong)
tech_tree.add_vehicle(Vehicle("Char B1", "Tank", 1, "France"))
tech_tree.add_vehicle(Vehicle("AMX-13", "Tank", 2, "France"))
tech_tree.add_vehicle(Vehicle("Leclerc", "Tank", 3, "France"))

# Adding Russia Tanks (weak to strong)
tech_tree.add_vehicle(Vehicle("T-34", "Tank", 1, "Russia"))
tech_tree.add_vehicle(Vehicle("IS-2", "Tank", 2, "Russia"))
tech_tree.add_vehicle(Vehicle("T-90", "Tank", 3, "Russia"))

# Adding China Tanks (weak to strong)
tech_tree.add_vehicle(Vehicle("Type 59", "Tank", 1, "China"))
tech_tree.add_vehicle(Vehicle("Type 96", "Tank", 2, "China"))
tech_tree.add_vehicle(Vehicle("Type 99", "Tank", 3, "China"))

# Adding Japan Tanks (weak to strong)
tech_tree.add_vehicle(Vehicle("Chi-Ha", "Tank", 1, "Japan"))
tech_tree.add_vehicle(Vehicle("Type 61", "Tank", 2, "Japan"))
tech_tree.add_vehicle(Vehicle("Type 90", "Tank", 3, "Japan"))

# Adding Germany Tanks (weak to strong)
tech_tree.add_vehicle(Vehicle("Panzer IV", "Tank", 1, "Germany"))
tech_tree.add_vehicle(Vehicle("Panther", "Tank", 2, "Germany"))
tech_tree.add_vehicle(Vehicle("Leopard 2A7", "Tank", 3, "Germany"))

# Adding USA Ships (weak to strong)
tech_tree.add_vehicle(Vehicle("USS Fletcher", "Ship", 1, "USA"))
tech_tree.add_vehicle(Vehicle("USS Iowa", "Ship", 2, "USA"))
tech_tree.add_vehicle(Vehicle("USS Nimitz", "Ship", 3, "USA"))

# Adding UK Ships (weak to strong)
tech_tree.add_vehicle(Vehicle("HMS Campbeltown", "Ship", 1, "UK"))
tech_tree.add_vehicle(Vehicle("HMS King George V", "Ship", 2, "UK"))
tech_tree.add_vehicle(Vehicle("HMS Queen Elizabeth", "Ship", 3, "UK"))

# Adding France Ships (weak to strong)
tech_tree.add_vehicle(Vehicle("Le Fantasque", "Ship", 1, "France"))
tech_tree.add_vehicle(Vehicle("Charles de Gaulle", "Ship", 2, "France"))
tech_tree.add_vehicle(Vehicle("Jean Bart", "Ship", 3, "France"))

# Adding Russia Ships (weak to strong)
tech_tree.add_vehicle(Vehicle("Kirov", "Ship", 1, "Russia"))
tech_tree.add_vehicle(Vehicle("Soviet Sverdlov", "Ship", 2, "Russia"))
tech_tree.add_vehicle(Vehicle("Admiral Kuznetsov", "Ship", 3, "Russia"))

# Adding China Ships (weak to strong)
tech_tree.add_vehicle(Vehicle("Type 052", "Ship", 1, "China"))
tech_tree.add_vehicle(Vehicle("Type 071", "Ship", 2, "China"))
tech_tree.add_vehicle(Vehicle("Type 055", "Ship", 3, "China"))

# Adding Japan Ships (weak to strong)
tech_tree.add_vehicle(Vehicle("Fubuki-class", "Ship", 1, "Japan"))
tech_tree.add_vehicle(Vehicle("Yamato-class", "Ship", 2, "Japan"))
tech_tree.add_vehicle(Vehicle("Izumo-class", "Ship", 3, "Japan"))

# Adding Germany Ships (weak to strong)
tech_tree.add_vehicle(Vehicle("Type 1936A", "Ship", 1, "Germany"))
tech_tree.add_vehicle(Vehicle("Bismarck", "Ship", 2, "Germany"))
tech_tree.add_vehicle(Vehicle("Graf Zeppelin", "Ship", 3, "Germany"))

# Display all Tech Trees
countries = ["USA", "UK", "France", "Russia", "China", "Japan", "Germany"]
for country in countries:
    tech_tree.display_tech_tree(country)
