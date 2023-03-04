const menu = [
  // STARTERS
  {
    url: "assets/img/menu/starters/olives.avif",
    name: "Oliven",
    price: "5,00",
    category: "starters",
    descriptionDe: "Portion Oliven",
    descriptionEn: "Portion of olives",
  },
  {
    url: "assets/img/menu/starters/burrata.avif",
    name: "Burrata",
    price: "11,00",
    category: "starters",
    descriptionDe: "Büffelburrata aus Brandenburg, Rucola und Kirschtomaten",
    descriptionEn:
      "buffalo burrata from Brandenburg, rocket and cherry tomatoes",
  },
  {
    url: "assets/img/menu/starters/Mozzarella_di_Bufala.avif",
    name: "Mozzarella di Bufala",
    price: "11,00",
    category: "starters",
    descriptionDe: "Büffelmozzarella aus Brandenburg, Rucola und Kirschtomaten",
    descriptionEn:
      "buffalo mozzarella from Brandenburg, rocket and cherry tomatoes",
  },
  // SALADS
  {
    url: "assets/img/menu/salads/Basic_Salat.avif",
    name: "Basic Salat",
    price: "7,50",
    category: "salads",
    descriptionDe: "Salat nach Saison, mit Balsamico-Dressing",
    descriptionEn: "seasonal salad, mit Balsamic-Dressing",
  },
  {
    url: "assets/img/menu/salads/Artichoke_Salad.avif",
    name: "Artichoke Salad",
    price: "10,50",
    category: "salads",
    descriptionDe: "in Öl eingelegt, mit Balsamico-Dressing",
    descriptionEn: "soaked in oil, with balsamic-dressing",
  },
  {
    url: "assets/img/menu/salads/Avocado_Cheese_Salad.avif",
    name: "Avocado Cheese Salad",
    price: "10,50",
    category: "salads",
    descriptionDe: "mit Balsamico-Dressing",
    descriptionEn: "with Balsamic-Dressing",
  },
  {
    url: "assets/img/menu/salads/Tuna_Salad.avif",
    name: "Tuna Salad",
    price: "11,50",
    category: "salads",
    descriptionDe: "mit Balsamico-Dressing",
    descriptionEn: "with Balsamic-Dressing",
  },
  // PIZZA
  {
    url: "assets/img/menu/pizza/Margherita_Pizza.avif",
    name: "Margherita Pizza",
    price: "11,00",
    category: "pizza",
    descriptionDe: "mit Tomatensoße Gustarosso, Fior di Latte und Basilikum",
    descriptionEn: "with tomato sauce Gustarosso, Fior di Latte and basil",
  },
  {
    url: "assets/img/menu/pizza/Vegetariana_Pizza.avif",
    name: "Vegetariana Pizza",
    price: "12,00",
    category: "pizza",
    descriptionDe:
      "vegan oder vegetarisch\nmit Tomatensoße Gustarosso, Zucchini, Auberginen, Champignons und Oregano",
    descriptionEn:
      "vegan or vegetarian\nwith tomato sauce Gustarosso, zucchini, aubergines, champignons and oregano",
  },
  {
    url: "assets/img/menu/pizza/Carciofi_Pizza.avif",
    name: "Carciofi Pizza",
    price: "12,00",
    category: "pizza",
    descriptionDe:
      "vegan oder vegetarisch\nmit Artischocken, Spinat und getrockneten Tomaten",
    descriptionEn:
      "vegan or vegetarian\nwith artichokes, spinach, sun-dried tomatoes",
  },
  {
    url: "assets/img/menu/pizza/Quattro_Formaggi_Pizza.avif",
    name: "Quattro Formaggi Pizza",
    price: "12,00",
    category: "pizza",
    descriptionDe: "mit vier verschiedenen Käsesorten",
    descriptionEn: "with four different types of cheese",
  },
  {
    url: "assets/img/menu/pizza/Tonno_Pizza.avif",
    name: "Tonno Pizza",
    price: "14,00",
    category: "pizza",
    descriptionDe:
      "mit Tomatensoße Gustarosso, Fior di Latte, Thunfisch, Zwiebeln und Oregano",
    descriptionEn:
      "with tomato sauce Gustarosso, Fior di Latte, tuna, onions and oregano",
  },
  {
    url: "assets/img/menu/pizza/Burrata_Pizza.avif",
    name: "Burrata Pizza",
    price: "14,50",
    category: "pizza",
    descriptionDe:
      "mit Tomatensoße Gustarosso, Büffelburrata aus Brandenburg und Basilikum",
    descriptionEn:
      "with tomato sauce Gustarosso, buffalo burrata from Brandenburg and basil",
  },
  {
    url: "assets/img/menu/pizza/Bufala_Pizza.avif",
    name: "Bufala Pizza",
    price: "15,00",
    category: "pizza",
    descriptionDe:
      "mit Tomatensoße Gustarosso, Basilikum, Büffelmozzarella aus Brandenburg und getrockneten Tomaten",
    descriptionEn:
      "with tomato sauce Gustarosso, basil, buffalo mozzarella from Brandenburg and dried tomatoes",
  },
  {
    url: "assets/img/menu/pizza/Pastrami_Pizza.avif",
    name: "Pastrami Pizza",
    price: "15,00",
    category: "pizza",
    descriptionDe:
      "mit Tomatensoße Gustarosso, Fior di Latte, luftgetrockneten Rinderschinken, Creme Fraiche und Oregano",
    descriptionEn:
      "with tomato sauce Gustarosso, Fior di Latte, air-dried beef ham, creme fraiche and oregano",
  },
  {
    url: "assets/img/menu/pizza/Salmone_Pizza.avif",
    name: "Salmone Pizza",
    price: "16,00",
    category: "pizza",
    descriptionDe:
      "mit Creme Fraiche, Räucherlachs, Avocado, Hirtenkäse und rosa Pfeffer",
    descriptionEn:
      "with creme fraiche, smoked salmon, avocado, herder cheese and pink pepper",
  },
  // PASTA
  {
    url: "",
    name: "Penne Napoli",
    price: "11,00",
    category: "pasta",
    descriptionDe: "Kurznudeln mit Tomatensoße",
    descriptionEn: "short pasta with tomato sauce",
  },
  {
    url: "assets/img/menu/pasta/Lasagne.avif",
    name: "Lasagne",
    price: "11,50",
    category: "pasta",
    descriptionDe: "selbstgemacht",
    descriptionEn: "homemade",
  },
  {
    url: "",
    name: "Penne Arrabiata",
    price: "12,00",
    category: "pasta",
    descriptionDe: "Kurznudeln mit Napolisoße, Chili und Knoblauch",
    descriptionEn: "short pasta with napoli sauce, chili and garlic",
  },
  {
    url: "",
    name: "Tagliatelle Ragú alla Bolognese",
    price: "13,50",
    category: "pasta",
    descriptionDe: "Bandnudeln mit Rindfleisch-Ragú",
    descriptionEn: "ribbon noodles with beef ragú",
  },
  {
    url: "",
    name: "Tagliatelle Salmone",
    price: "16,00",
    category: "pasta",
    descriptionDe:
      "Bandnudeln mit Rose-Soße, Lachsfilet, Dill, Petersilie und Datteltomaten",
    descriptionEn:
      "ribbon noodles with rose sauce, salmon fillet, dill, parsley and date tomatoes",
  },
  {
    url: "",
    name: "Tagliatelle con Crema al Tartufo",
    price: "16,00",
    category: "pasta",
    descriptionDe: "Bandnudeln mit Steinpilzen, Trüffelcreme und Trüffelöl",
    descriptionEn:
      "ribbon noodles with porcini mushrooms, truffle cream and truffle oil",
  },
  // DESSERT
  {
    url: "assets/img/menu/dessert/Tiramisu.avif",
    name: "Tiramisu",
    price: "7,00",
    category: "dessert",
    descriptionDe:
      "Due to the way they are stored, the products can come into contact with nuts.\n(incl. 2€ deposit)",
    descriptionEn:
      "Due to the way they are stored, the products can come into contact with nuts.\n(incl. 2€ deposit)",
  },
  // DRINKS
  {
    url: "assets/img/menu/drinks/Proviant_Cola_0,33l.avif",
    name: "Proviant Cola 0,33l",
    price: "3,00",
    category: "drinks",
    descriptionDe: "inkl. 0,08€ Pfand, 9,09€/l",
    descriptionEn: "incl. 0,08€ deposit, 9,09€/l",
  },
  {
    url: "assets/img/menu/drinks/Proviant_Cola_Sugarfree_0,33l.avif",
    name: "Proviant Cola Sugarfree 0,33l",
    price: "3,00",
    category: "drinks",
    descriptionDe: "inkl. 0,08€ Pfand, 9,09€/l",
    descriptionEn: "incl. 0,08€ deposit, 9,09€/l",
  },
  {
    url: "assets/img/menu/drinks/Proviant_Limo_Orange_Lemonade_0,33l.avif",
    name: "Proviant Limo Orange Lemonade 0,33l",
    price: "3,00",
    category: "drinks",
    descriptionDe: "inkl. 0,08€ Pfand, 9,09€/l",
    descriptionEn: "incl. 0,08€ deposit, 9,09€/l",
  },
  {
    url: "assets/img/menu/drinks/Proviant_Limo_Lemonade_0,33l.avif",
    name: "Proviant Limo Lemonade 0,33l",
    price: "3,00",
    category: "drinks",
    descriptionDe: "inkl. 0,08€ Pfand, 9,09€/l",
    descriptionEn: "incl. 0,08€ deposit, 9,09€/l",
  },
  {
    url: "assets/img/menu/drinks/Proviant_Limo_Lemon_Ginger_0,33l.avif",
    name: "Proviant Limo Lemon & Ginger 0,33l",
    price: "3,00",
    category: "drinks",
    descriptionDe: "inkl. 0,08€ Pfand, 9,09€/l",
    descriptionEn: "incl. 0,08€ deposit, 9,09€/l",
  },
  {
    url: "assets/img/menu/drinks/Proviant_Limo_Rhubarb_Lemonade_0,33l.avif",
    name: "Proviant Limo Rhubarb Lemonade 0,33l",
    price: "3,00",
    category: "drinks",
    descriptionDe: "inkl. 0,08€ Pfand, 9,09€/l",
    descriptionEn: "incl. 0,08€ deposit, 9,09€/l",
  },
  {
    url: "assets/img/menu/drinks/Proviant_Spritzer_Apple_0,33l.avif",
    name: "Proviant Spritzer Apple 0,33l",
    price: "3,00",
    category: "drinks",
    descriptionDe: "inkl. 0,08€ Pfand, 9,09€/l",
    descriptionEn: "incl. 0,08€ deposit, 9,09€/l",
  },
  {
    url: "assets/img/menu/drinks/Viva_con_Agua_Sparkling_0,33l.avif",
    name: "Viva con Agua Sparkling 0,33l",
    price: "2,50",
    category: "drinks",
    descriptionDe: "inkl. 0,15€ Pfand, 7,58€/l",
    descriptionEn: "incl. 0,15€ deposit, 7,58€/l",
  },
  {
    url: "assets/img/menu/drinks/Viva_con_Agua_Sparkling_0,75l.avif",
    name: "Viva con Agua Sparkling 0,75l",
    price: "4,80",
    category: "drinks",
    descriptionDe: "inkl. 0,15€ Pfand, 6,40€/l",
    descriptionEn: "incl. 0,15€ deposit, 6,40€/l",
  },
  {
    url: "assets/img/menu/drinks/Viva_con_Agua_Still_0,33l.avif",
    name: "Viva con Agua Still 0,33l",
    price: "2,50",
    category: "drinks",
    descriptionDe: "inkl. 0,15€ Pfand, 7,58€/l",
    descriptionEn: "incl. 0,15€ deposit, 7,58€/l",
  },
  {
    url: "assets/img/menu/drinks/Viva_con_Agua_Still_0,75l.avif",
    name: "Viva con Agua Still 0,75l",
    price: "4,80",
    category: "drinks",
    descriptionDe: "inkl. 0,15€ Pfand, 6,40€/l",
    descriptionEn: "incl. 0,15€ deposit, 6,40€/l",
  },
  {
    url: "assets/img/menu/drinks/Ostmost_Apple_Juice_0,33l.avif",
    name: "Ostmost Apple Juice 0,33l",
    price: "3,00",
    category: "drinks",
    descriptionDe: "inkl. 0,08€ Pfand, 9,09€/l",
    descriptionEn: "incl. 0,08€ deposit, 9,09€/l",
  },
];

const menuContainer = document.getElementById("menu-container");
for (const item of menu) {
  const colEl = document.createElement("div");
  colEl.classList = `col-lg-6 menu-item filter-${item.category}`;

  const imgDivEl = document.createElement("div");
  imgDivEl.classList = "menu-img";
  imgDivEl.style.backgroundImage = `url(${item.url})`;

  const nameEl = document.createElement("a");
  nameEl.innerHTML = item.name;

  const priceEl = document.createElement("span");
  priceEl.innerHTML = `€${item.price}`;

  const contentEl = document.createElement("div");
  contentEl.classList = "menu-content";
  contentEl.append(nameEl, priceEl);

  const menuDescDeEl = document.createElement("div");
  menuDescDeEl.classList = "menu-ingredients";
  menuDescDeEl.innerHTML = item.descriptionDe;
  const menuDescEnEl = document.createElement("div");
  menuDescEnEl.classList = "menu-ingredients";
  menuDescEnEl.innerHTML = item.descriptionEn;

  colEl.append(imgDivEl, contentEl, menuDescDeEl, menuDescEnEl);
  menuContainer.appendChild(colEl);
}
