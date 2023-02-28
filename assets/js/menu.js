const menu = [
  // STARTERS
  {
    url: "assets/img/menu/starters/olives.avif",
    name: "Olives",
    price: "5,00",
    category: "starters",
    descriptionDe: "deutsch",
    descriptionEn: "Portion of olives",
  },
  {
    url: "assets/img/menu/starters/burrata.avif",
    name: "Burrata",
    price: "11,00",
    category: "starters",
    descriptionDe: "deutsch",
    descriptionEn:
      "buffalo burrata from Brandenburg, rocket and cherry tomatoes",
  },
  {
    url: "assets/img/menu/starters/Mozzarella_di_Bufala.avif",
    name: "Mozzarella di Bufala",
    price: "11,00",
    category: "starters",
    descriptionDe: "deutsch",
    descriptionEn:
      "buffalo mozzarella from Brandenburg, rocket and cherry tomatoes",
  },
  // SALADS
  {
    url: "assets/img/menu/salads/Basic_Salat.avif",
    name: "Basic Salat",
    price: "7,50",
    category: "salads",
    descriptionDe: "deutsch",
    descriptionEn: "seasonal salad, mit Balsamic-Dressing",
  },
  {
    url: "assets/img/menu/salads/Artichoke_Salad.avif",
    name: "Artichoke Salad",
    price: "10,50",
    category: "salads",
    descriptionDe: "deutsch",
    descriptionEn: "soaked in oil, with balsamic-dressing",
  },
  {
    url: "assets/img/menu/salads/Avocado_Cheese_Salad.avif",
    name: "Avocado Cheese Salad",
    price: "10,50",
    category: "salads",
    descriptionDe: "deutsch",
    descriptionEn: "with Balsamic-Dressing",
  },
  {
    url: "assets/img/menu/salads/Tuna_Salad.avif",
    name: "Tuna Salad",
    price: "11,50",
    category: "salads",
    descriptionDe: "deutsch",
    descriptionEn: "with Balsamic-Dressing",
  },
  // PIZZA
  {
    url: "assets/img/menu/pizza/Margherita_Pizza.avif",
    name: "Margherita Pizza",
    price: "11,00",
    category: "pizza",
    descriptionDe: "deutsch",
    descriptionEn: "with tomato sauce Gustarosso, Fior di Latte and basil",
  },
  {
    url: "assets/img/menu/pizza/Bufala_Pizza.avif",
    name: "Bufala Pizza",
    price: "15,00",
    category: "pizza",
    descriptionDe: "deutsch",
    descriptionEn:
      "with tomato sauce Gustarosso, basil, buffalo mozzarella from Brandenburg and dried tomatoes",
  },
  {
    url: "assets/img/menu/pizza/Burrata_Pizza.avif",
    name: "Burrata Pizza",
    price: "14,50",
    category: "pizza",
    descriptionDe: "deutsch",
    descriptionEn:
      "with tomato sauce Gustarosso, buffalo burrata from Brandenburg and basil",
  },
  {
    url: "assets/img/menu/pizza/Carciofi_Pizza.avif",
    name: "Carciofi Pizza",
    price: "12,00",
    category: "pizza",
    descriptionDe: "deutsch",
    descriptionEn:
      "vegan or vegetarian\nwith artichokes, spinach, sun-dried tomatoes",
  },
  {
    url: "assets/img/menu/pizza/Pastrami_Pizza.avif",
    name: "Pastrami Pizza",
    price: "15,00",
    category: "pizza",
    descriptionDe: "deutsch",
    descriptionEn:
      "with tomato sauce Gustarosso, Fior di Latte, air-dried beef ham, creme fraiche and oregano",
  },
  {
    url: "assets/img/menu/pizza/Quattro_Formaggi_Pizza.avif",
    name: "Quattro Formaggi Pizza",
    price: "12,00",
    category: "pizza",
    descriptionDe: "deutsch",
    descriptionEn: "with four different types of cheese",
  },
  {
    url: "assets/img/menu/pizza/Salmone_Pizza.avif",
    name: "Salmone Pizza",
    price: "16,00",
    category: "pizza",
    descriptionDe: "deutsch",
    descriptionEn:
      "with creme fraiche, smoked salmon, avocado, herder cheese and pink pepper",
  },
  {
    url: "assets/img/menu/pizza/Tonno_Pizza.avif",
    name: "Tonno Pizza",
    price: "14,00",
    category: "pizza",
    descriptionDe: "deutsch",
    descriptionEn:
      "with tomato sauce Gustarosso, Fior di Latte, tuna, onions and oregano",
  },
  {
    url: "assets/img/menu/pizza/Vegetariana_Pizza.avif",
    name: "Vegetariana Pizza",
    price: "12,00",
    category: "pizza",
    descriptionDe: "deutsch",
    descriptionEn:
      "vegan or vegetarian\nwith tomato sauce Gustarosso, zucchini, aubergines, champignons and oregano",
  },
  // PASTA
  {
    url: "",
    name: "Penne Napoli",
    price: "11,00",
    category: "pasta",
    descriptionDe: "deutsch",
    descriptionEn: "short pasta with tomato sauce",
  },
  {
    url: "assets/img/menu/pasta/Lasagne.avif",
    name: "Lasagne",
    price: "11,50",
    category: "pasta",
    descriptionDe: "deutsch",
    descriptionEn: "homemade",
  },
  {
    url: "",
    name: "Penne Arrabiata",
    price: "12,00",
    category: "pasta",
    descriptionDe: "deutsch",
    descriptionEn: "short pasta with napoli sauce, chili and garlic",
  },
  {
    url: "",
    name: "Tagliatelle Ragú alla Bolognese",
    price: "13,50",
    category: "pasta",
    descriptionDe: "deutsch",
    descriptionEn: "ribbon noodles with beef ragú",
  },
  {
    url: "",
    name: "Tagliatelle Salmone",
    price: "16,00",
    category: "pasta",
    descriptionDe: "deutsch",
    descriptionEn:
      "ribbon noodles with rose sauce, salmon fillet, dill, parsley and date tomatoes",
  },
  {
    url: "",
    name: "Tagliatelle con Crema al Tartufo",
    price: "16,00",
    category: "pasta",
    descriptionDe: "deutsch",
    descriptionEn:
      "ribbon noodles with porcini mushrooms, truffle cream and truffle oil",
  },
  // DESSERT
  {
    url: "assets/img/menu/dessert/Tiramisu.avif",
    name: "Tiramisu",
    price: "7,00 (incl. 2€ deposit)",
    category: "dessert",
    descriptionDe: "deutsch",
    descriptionEn:
      "Due to the way they are stored, the products can come into contact with nuts.",
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
