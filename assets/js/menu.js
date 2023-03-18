const menu = [
  // STARTERS
  {
    url: 'assets/img/menu/starters/olives.avif',
    'name-EN': 'Oliven',
    price: '5,00',
    category: 'starters',
    'description-DE': 'Portion Oliven',
    'description-EN': 'Portion of olives',
  },
  {
    url: 'assets/img/menu/starters/burrata.avif',
    'name-EN': 'Burrata',
    price: '11,00',
    category: 'starters',
    'description-DE': 'Büffelburrata aus Brandenburg, Rucola und Kirschtomaten',
    'description-EN': 'buffalo burrata from Brandenburg, rocket and cherry tomatoes',
  },
  {
    url: 'assets/img/menu/starters/Mozzarella_di_Bufala.avif',
    'name-EN': 'Mozzarella di Bufala',
    price: '11,00',
    category: 'starters',
    'description-DE': 'Büffelmozzarella aus Brandenburg, Rucola und Kirschtomaten',
    'description-EN': 'buffalo mozzarella from Brandenburg, rocket and cherry tomatoes',
  },
  // SALADS
  {
    url: 'assets/img/menu/salads/Basic_Salat.avif',
    'name-EN': 'Basic Salat',
    price: '7,50',
    category: 'salads',
    'description-DE': 'Salat nach Saison, mit Balsamico-Dressing',
    'description-EN': 'seasonal salad, mit Balsamic-Dressing',
  },
  {
    url: 'assets/img/menu/salads/Artichoke_Salad.avif',
    'name-EN': 'Artichoke Salad',
    price: '10,50',
    category: 'salads',
    'description-DE': 'in Öl eingelegt, mit Balsamico-Dressing',
    'description-EN': 'soaked in oil, with balsamic-dressing',
  },
  {
    url: 'assets/img/menu/salads/Avocado_Cheese_Salad.avif',
    'name-EN': 'Avocado Cheese Salad',
    price: '10,50',
    category: 'salads',
    'description-DE': 'mit Balsamico-Dressing',
    'description-EN': 'with Balsamic-Dressing',
  },
  {
    url: 'assets/img/menu/salads/Tuna_Salad.avif',
    'name-EN': 'Tuna Salad',
    price: '11,50',
    category: 'salads',
    'description-DE': 'mit Balsamico-Dressing',
    'description-EN': 'with Balsamic-Dressing',
  },
  // PIZZA
  {
    url: 'assets/img/menu/pizza/Margherita_Pizza.avif',
    'name-EN': 'Margherita Pizza',
    price: '11,00',
    category: 'pizza',
    'description-DE': 'mit Tomatensoße Gustarosso, Fior di Latte und Basilikum',
    'description-EN': 'with tomato sauce Gustarosso, Fior di Latte and basil',
  },
  {
    url: 'assets/img/menu/pizza/Vegetariana_Pizza.avif',
    'name-EN': 'Vegetariana Pizza',
    price: '12,00',
    category: 'pizza',
    'description-DE':
      'vegan oder vegetarisch\nmit Tomatensoße Gustarosso, Zucchini, Auberginen, Champignons und Oregano',
    'description-EN':
      'vegan or vegetarian\nwith tomato sauce Gustarosso, zucchini, aubergines, champignons and oregano',
  },
  {
    url: 'assets/img/menu/pizza/Carciofi_Pizza.avif',
    'name-EN': 'Carciofi Pizza',
    price: '12,00',
    category: 'pizza',
    'description-DE': 'vegan oder vegetarisch\nmit Artischocken, Spinat und getrockneten Tomaten',
    'description-EN': 'vegan or vegetarian\nwith artichokes, spinach, sun-dried tomatoes',
  },
  {
    url: 'assets/img/menu/pizza/Quattro_Formaggi_Pizza.avif',
    'name-EN': 'Quattro Formaggi Pizza',
    price: '12,00',
    category: 'pizza',
    'description-DE': 'mit vier verschiedenen Käsesorten',
    'description-EN': 'with four different types of cheese',
  },
  {
    url: 'assets/img/menu/pizza/Tonno_Pizza.avif',
    'name-EN': 'Tonno Pizza',
    price: '14,00',
    category: 'pizza',
    'description-DE': 'mit Tomatensoße Gustarosso, Fior di Latte, Thunfisch, Zwiebeln und Oregano',
    'description-EN': 'with tomato sauce Gustarosso, Fior di Latte, tuna, onions and oregano',
  },
  {
    url: 'assets/img/menu/pizza/Burrata_Pizza.avif',
    'name-EN': 'Burrata Pizza',
    price: '14,50',
    category: 'pizza',
    'description-DE': 'mit Tomatensoße Gustarosso, Büffelburrata aus Brandenburg und Basilikum',
    'description-EN': 'with tomato sauce Gustarosso, buffalo burrata from Brandenburg and basil',
  },
  {
    url: 'assets/img/menu/pizza/Bufala_Pizza.avif',
    'name-EN': 'Bufala Pizza',
    price: '15,00',
    category: 'pizza',
    'description-DE':
      'mit Tomatensoße Gustarosso, Basilikum, Büffelmozzarella aus Brandenburg und getrockneten Tomaten',
    'description-EN':
      'with tomato sauce Gustarosso, basil, buffalo mozzarella from Brandenburg and dried tomatoes',
  },
  {
    url: 'assets/img/menu/pizza/Pastrami_Pizza.avif',
    'name-EN': 'Pastrami Pizza',
    price: '15,00',
    category: 'pizza',
    'description-DE':
      'mit Tomatensoße Gustarosso, Fior di Latte, luftgetrockneten Rinderschinken, Creme Fraiche und Oregano',
    'description-EN':
      'with tomato sauce Gustarosso, Fior di Latte, air-dried beef ham, creme fraiche and oregano',
  },
  {
    url: 'assets/img/menu/pizza/Salmone_Pizza.avif',
    'name-EN': 'Salmone Pizza',
    price: '16,00',
    category: 'pizza',
    'description-DE': 'mit Creme Fraiche, Räucherlachs, Avocado, Hirtenkäse und rosa Pfeffer',
    'description-EN': 'with creme fraiche, smoked salmon, avocado, herder cheese and pink pepper',
  },
  // PASTA
  {
    url: '',
    'name-EN': 'Penne Napoli',
    price: '11,00',
    category: 'pasta',
    'description-DE': 'Kurznudeln mit Tomatensoße',
    'description-EN': 'short pasta with tomato sauce',
  },
  {
    url: 'assets/img/menu/pasta/Lasagne.avif',
    'name-EN': 'Lasagne',
    price: '11,50',
    category: 'pasta',
    'description-DE': 'selbstgemacht',
    'description-EN': 'homemade',
  },
  {
    url: '',
    'name-EN': 'Penne Arrabiata',
    price: '12,00',
    category: 'pasta',
    'description-DE': 'Kurznudeln mit Napolisoße, Chili und Knoblauch',
    'description-EN': 'short pasta with napoli sauce, chili and garlic',
  },
  {
    url: '',
    'name-EN': 'Tagliatelle Ragú alla Bolognese',
    price: '13,50',
    category: 'pasta',
    'description-DE': 'Bandnudeln mit Rindfleisch-Ragú',
    'description-EN': 'ribbon noodles with beef ragú',
  },
  {
    url: '',
    'name-EN': 'Tagliatelle Salmone',
    price: '16,00',
    category: 'pasta',
    'description-DE': 'Bandnudeln mit Rose-Soße, Lachsfilet, Dill, Petersilie und Datteltomaten',
    'description-EN':
      'ribbon noodles with rose sauce, salmon fillet, dill, parsley and date tomatoes',
  },
  {
    url: '',
    'name-EN': 'Tagliatelle con Crema al Tartufo',
    price: '16,00',
    category: 'pasta',
    'description-DE': 'Bandnudeln mit Steinpilzen, Trüffelcreme und Trüffelöl',
    'description-EN': 'ribbon noodles with porcini mushrooms, truffle cream and truffle oil',
  },
  // DESSERT
  {
    url: 'assets/img/menu/dessert/Tiramisu.avif',
    'name-EN': 'Tiramisu',
    price: '7,00',
    category: 'dessert',
    'description-DE':
      'Due to the way they are stored, the products can come into contact with nuts.\n(incl. 2€ deposit)',
    'description-EN':
      'Due to the way they are stored, the products can come into contact with nuts.\n(incl. 2€ deposit)',
  },
  // DRINKS
  {
    url: 'assets/img/menu/drinks/Proviant_Cola_0,33l.avif',
    'name-EN': 'Proviant Cola 0,33l',
    price: '3,00',
    category: 'drinks',
    'description-DE': 'inkl. 0,08€ Pfand, 9,09€/l',
    'description-EN': 'incl. 0,08€ deposit, 9,09€/l',
  },
  {
    url: 'assets/img/menu/drinks/Proviant_Cola_Sugarfree_0,33l.avif',
    'name-EN': 'Proviant Cola Sugarfree 0,33l',
    price: '3,00',
    category: 'drinks',
    'description-DE': 'inkl. 0,08€ Pfand, 9,09€/l',
    'description-EN': 'incl. 0,08€ deposit, 9,09€/l',
  },
  {
    url: 'assets/img/menu/drinks/Proviant_Limo_Orange_Lemonade_0,33l.avif',
    'name-EN': 'Proviant Limo Orange Lemonade 0,33l',
    price: '3,00',
    category: 'drinks',
    'description-DE': 'inkl. 0,08€ Pfand, 9,09€/l',
    'description-EN': 'incl. 0,08€ deposit, 9,09€/l',
  },
  {
    url: 'assets/img/menu/drinks/Proviant_Limo_Lemonade_0,33l.avif',
    'name-EN': 'Proviant Limo Lemonade 0,33l',
    price: '3,00',
    category: 'drinks',
    'description-DE': 'inkl. 0,08€ Pfand, 9,09€/l',
    'description-EN': 'incl. 0,08€ deposit, 9,09€/l',
  },
  {
    url: 'assets/img/menu/drinks/Proviant_Limo_Lemon_Ginger_0,33l.avif',
    'name-EN': 'Proviant Limo Lemon & Ginger 0,33l',
    price: '3,00',
    category: 'drinks',
    'description-DE': 'inkl. 0,08€ Pfand, 9,09€/l',
    'description-EN': 'incl. 0,08€ deposit, 9,09€/l',
  },
  {
    url: 'assets/img/menu/drinks/Proviant_Limo_Rhubarb_Lemonade_0,33l.avif',
    'name-EN': 'Proviant Limo Rhubarb Lemonade 0,33l',
    price: '3,00',
    category: 'drinks',
    'description-DE': 'inkl. 0,08€ Pfand, 9,09€/l',
    'description-EN': 'incl. 0,08€ deposit, 9,09€/l',
  },
  {
    url: 'assets/img/menu/drinks/Proviant_Spritzer_Apple_0,33l.avif',
    'name-EN': 'Proviant Spritzer Apple 0,33l',
    price: '3,00',
    category: 'drinks',
    'description-DE': 'inkl. 0,08€ Pfand, 9,09€/l',
    'description-EN': 'incl. 0,08€ deposit, 9,09€/l',
  },
  {
    url: 'assets/img/menu/drinks/Viva_con_Agua_Sparkling_0,33l.avif',
    'name-EN': 'Viva con Agua Sparkling 0,33l',
    price: '2,50',
    category: 'drinks',
    'description-DE': 'inkl. 0,15€ Pfand, 7,58€/l',
    'description-EN': 'incl. 0,15€ deposit, 7,58€/l',
  },
  {
    url: 'assets/img/menu/drinks/Viva_con_Agua_Sparkling_0,75l.avif',
    'name-EN': 'Viva con Agua Sparkling 0,75l',
    price: '4,80',
    category: 'drinks',
    'description-DE': 'inkl. 0,15€ Pfand, 6,40€/l',
    'description-EN': 'incl. 0,15€ deposit, 6,40€/l',
  },
  {
    url: 'assets/img/menu/drinks/Viva_con_Agua_Still_0,33l.avif',
    'name-EN': 'Viva con Agua Still 0,33l',
    price: '2,50',
    category: 'drinks',
    'description-DE': 'inkl. 0,15€ Pfand, 7,58€/l',
    'description-EN': 'incl. 0,15€ deposit, 7,58€/l',
  },
  {
    url: 'assets/img/menu/drinks/Viva_con_Agua_Still_0,75l.avif',
    'name-EN': 'Viva con Agua Still 0,75l',
    price: '4,80',
    category: 'drinks',
    'description-DE': 'inkl. 0,15€ Pfand, 6,40€/l',
    'description-EN': 'incl. 0,15€ deposit, 6,40€/l',
  },
  {
    url: 'assets/img/menu/drinks/Ostmost_Apple_Juice_0,33l.avif',
    'name-EN': 'Ostmost Apple Juice 0,33l',
    price: '3,00',
    category: 'drinks',
    'description-DE': 'inkl. 0,08€ Pfand, 9,09€/l',
    'description-EN': 'incl. 0,08€ deposit, 9,09€/l',
  },
]

const language = localStorage.getItem('language') || 'DE'
const menuContainer = document.getElementById('menu-container')

for (const item of menu) {
  item['name-DE'] = item['name-EN']
  const colEl = document.createElement('div')
  colEl.classList = `col-lg-6 menu-item filter-${item.category}`

  const imgDivEl = document.createElement('div')
  imgDivEl.classList = 'menu-img'
  imgDivEl.style.backgroundImage = `url(${item.url})`

  const nameEl = document.createElement('a')
  nameEl.innerHTML = item[`name-${language}`]

  const priceEl = document.createElement('span')
  priceEl.innerHTML = `€${item.price}`

  const contentEl = document.createElement('div')
  contentEl.classList = 'menu-content'
  contentEl.append(nameEl, priceEl)

  const menuDescEnEl = document.createElement('div')
  menuDescEnEl.classList = 'menu-ingredients'
  menuDescEnEl.innerHTML = item[`description-${language}`]

  colEl.append(imgDivEl, contentEl, menuDescEnEl)
  menuContainer.appendChild(colEl)
}
