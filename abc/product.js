const products = {
  Badminton: [
    { id: 1, name: "KONEX PRO(311) - Plastic", price: 540, mrp: 540, description: "Unit | Shuttle | Stock: 20" },
    { id: 2, name: "OSCAR - Feather", price: 370, mrp: 370, description: "Unit | Shuttle | Stock: 15" },
    { id: 3, name: "SENU - Feather", price: 250, mrp: 250, description: "Unit | Shuttle | Stock: 15" },
    { id: 4, name: "Smash 500 - Plastic", price: 195, mrp: 195, description: "Unit | Shuttle | Stock: 20" },
    { id: 5, name: "Dexter \"D\"", price: 650, mrp: 650, description: "Unit | Badminton" },
    { id: 6, name: "VAVIS 2000", price: 600, mrp: 600, description: "Unit | Badminton" },
    { id: 7, name: "RMB 777", price: 700, mrp: 700, description: "Unit | Badminton" },
    { id: 8, name: "RMB 3000", price: 1350, mrp: 1350, description: "Unit | Badminton" },
    { id: 9, name: "RMB 4500", price: 2000, mrp: 2000, description: "Unit | Badminton" },
    { id: 10, name: "TOLEDOS *900* Feather", price: 590, mrp: 590, description: "Unit | Shuttle" },
    { id: 11, name: "TOLEDOS - 305 Plastic", price: 290, mrp: 290, description: "Unit | Shuttle" },
    { id: 12, name: "TOLEDOS 3330 - Plastic", price: 390, mrp: 390, description: "Unit | Shuttle" },
    { id: 13, name: "Wintech", price: 550, mrp: 550, description: "Unit | Badminton" },
    { id: 14, name: "Greyhound 2000", price: 350, mrp: 350, description: "Unit | Badminton" },
    { id: 15, name: "Greyhound 5000", price: 530, mrp: 530, description: "Unit | Badminton" },
    { id: 16, name: "Greyhound Classic", price: 630, mrp: 630, description: "Unit | Badminton" },
    { id: 17, name: "Toldos Ultra 205", price: 290, mrp: 290, description: "Unit | Shuttle" },
    { id: 18, name: "Feather Shuttle RMB", price: 400, mrp: 400, description: "Unit | Shuttle" },
    { id: 19, name: "Grip Kaushal", price: 40, mrp: 40, description: "Unit | Grip" },
    { id: 20, name: "Grip YONEX", price: 50, mrp: 50, description: "Unit | Grip" },
    { id: 21, name: "Grip 3PC", price: 90, mrp: 90, description: "Unit | Grip" },
    { id: 22, name: "Grip VICTOR", price: 45, mrp: 45, description: "Unit | Grip" }
  ],

  Cricket: [
    { id: 23, name: "Tennis Ball", price: 70, mrp: 70, description: "Unit | Ball", subCategory: "Ball" },
    { id: 24, name: "Tennis Ball *HEAD*", price: 165, mrp: 165, description: "Unit | Ball", subCategory: "Ball" },
    { id: 25, name: "Cosco Cricket Tennis", price: 115, mrp: 115, description: "Unit | Ball", subCategory: "Ball" },
    { id: 26, name: "Leather Ball", price: 350, mrp: 350, description: "Unit | Ball", subCategory: "Ball" },
    { id: 64, name: "Tennis Ball Box", price: 290, mrp: 290, description: "Unit | Ball", subCategory: "Ball" },

    { id: 27, name: "Cricket Bat SS", price: 1599, mrp: 1599, description: "Unit | Bat", subCategory: "Bat" },
    { id: 28, name: "Batting Gloves", price: 699, mrp: 699, description: "Unit | Gloves", subCategory: "Bat" },
    { id: 29, name: "Arm Guard", price: 199, mrp: 199, description: "Unit | Guard", subCategory: "Bat" },
    { id: 31, name: "Pads", price: 799, mrp: 799, description: "Unit | Pads", subCategory: "Bat" },

    { id: 30, name: "Helmet", price: 999, mrp: 999, description: "Unit | Helmet", subCategory: "Helmet" },

    { id: 32, name: "Stump Set", price: 299, mrp: 299, description: "Unit | Stumps", subCategory: "Wicket" },
    { id: 54, name: "Cricket Net", price: 450, mrp: 450, description: "Unit | Net", subCategory: "Wicket" },
    { id: 65, name: "Cricket Bails", price: 120, mrp: 120, description: "Unit | Bails", subCategory: "Wicket" }
  ],

  Football: [
    { id: 33, name: "Football (Red)", price: 399, mrp: 399, description: "Unit | Football" },
    { id: 34, name: "Football Studs", price: 1299, mrp: 1299, description: "Unit | Boots" },
    { id: 35, name: "Football Pump", price: 149, mrp: 149, description: "Unit | Pump" }
  ],

  Clothes: [
    { id: 36, name: "Underwear Pack", price: 120, mrp: 120, description: "Unit | Clothes" },
    { id: 37, name: "Sports Shoes (Kids)", price: 450, mrp: 450, description: "Unit | Shoes" },
    { id: 38, name: "Sports Shoes (Men)", price: 650, mrp: 650, description: "Unit | Shoes" },
    { id: 39, name: "Sports Shoes (Women)", price: 650, mrp: 650, description: "Unit | Shoes" }
  ],

  "Indoor Games": [
    { id: 40, name: "Chess Board", price: 199, mrp: 199, description: "Unit | Chess" },
    { id: 41, name: "Carrom Board", price: 1599, mrp: 1599, description: "Unit | Carrom" },
    { id: 42, name: "Carrom Coins", price: 120, mrp: 120, description: "Unit | Coins" },
    { id: 43, name: "Table Tennis Bat", price: 299, mrp: 299, description: "Unit | TT Bat" },
    { id: 44, name: "Table Tennis Ball", price: 80, mrp: 80, description: "Unit | TT Ball" }
  ],

  "Outdoor Games": [
    { id: 45, name: "Whistle", price: 50, mrp: 50, description: "Unit | Whistle" },
    { id: 46, name: "Volleyball", price: 499, mrp: 499, description: "Unit | Volleyball" },
    { id: 47, name: "Skipping Rope", price: 120, mrp: 120, description: "Unit | Rope" },
    { id: 48, name: "Frisbee", price: 99, mrp: 99, description: "Unit | Frisbee" },
    { id: 49, name: "Hockey Ball", price: 180, mrp: 180, description: "Unit | Ball" },
    { id: 50, name: "Tennis Racquet", price: 550, mrp: 550, description: "Unit | Tennis" },
    { id: 51, name: "Swimming Goggles", price: 299, mrp: 299, description: "Unit | Goggles" },
    { id: 52, name: "Dumbbells (Pair)", price: 699, mrp: 699, description: "Unit | Gym" },
    { id: 53, name: "Football Net", price: 350, mrp: 350, description: "Unit | Net" },
    { id: 55, name: "Bat Grip", price: 50, mrp: 50, description: "Unit | Grip" },
    { id: 56, name: "Hockey Stick", price: 650, mrp: 650, description: "Unit | Stick" },
    { id: 57, name: "Shot Put", price: 699, mrp: 699, description: "Unit | Shot Put" },
    { id: 58, name: "Basketball", price: 599, mrp: 599, description: "Unit | Basketball" },
    { id: 59, name: "Badminton Net", price: 290, mrp: 290, description: "Unit | Net" },
    { id: 60, name: "Hand Gripper", price: 150, mrp: 150, description: "Unit | Gripper" },
    { id: 61, name: "Scooter Board", price: 499, mrp: 499, description: "Unit | Scooter" },
    { id: 62, name: "Hula Hoop", price: 249, mrp: 249, description: "Unit | Hoop" },
    { id: 63, name: "Foot Pump", price: 150, mrp: 150, description: "Unit | Pump" },
    { id: 66, name: "Duffle Bag", price: 675, mrp: 675, description: "Unit | Bag" },
    { id: 67, name: "Fitness Jump Rope", price: 199, mrp: 199, description: "Unit | Rope" },
    { id: 68, name: "Dart Board", price: 450, mrp: 450, description: "Unit | Dart" },
    { id: 69, name: "Running Cone Set", price: 249, mrp: 249, description: "Unit | Cones" }
  ]
};
