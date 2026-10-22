import { MenuCategory, Product } from '../types';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'pizza', name: 'Pizza', shortDesc: 'Stone-baked with rich mozzarella and savoury toppings' },
  { id: 'burgers', name: 'Burgers', shortDesc: 'Crispy chicken & beef burgers on toasted brioche' },
  { id: 'fried-chicken', name: 'Crispy Fried Chicken', shortDesc: 'Golden crispy spiced fried chicken broast' },
  { id: 'shawarma-wraps', name: 'Shawarma & Wraps', shortDesc: 'Tender spiced grilled chicken in warm pita and wraps' },
  { id: 'sandwiches', name: 'Sandwiches', shortDesc: 'Multi-layer club sandwiches with fries and dips' },
  { id: 'grilled-continental', name: 'Grilled & Continental', shortDesc: 'Steaks, platters and sizzling grilled specialties' },
  { id: 'cakes-bakery', name: 'Cakes & Bakery', shortDesc: 'Artisanal celebration cakes, fudge cakes and fresh breads' },
  { id: 'pastries-sweets', name: 'Pastries & Sweets', shortDesc: 'Traditional Pakistani mithai and European cream pastries' },
  { id: 'coffee-beverages', name: 'Coffee & Beverages', shortDesc: 'Espresso, cappuccino, cold coffee and refreshing drinks' },
  { id: 'shakes-desserts', name: 'Shakes & Desserts', shortDesc: 'Thick gourmet milkshakes, sundaes and ice creams' }
];

export const MENU_PRODUCTS: Product[] = [
  // --- PIZZA ---
  {
    id: 'pizza-chicken-supreme',
    name: 'Chicken Supreme Pizza',
    categoryId: 'pizza',
    description: 'Tender seasoned chicken cubes, black olives, bell peppers, mushrooms and 100% pure mozzarella on golden crust.',
    image: '/src/assets/images/pizza_supreme_special_1792155261571.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 1150,
    variants: [
      { id: 'supreme-s', name: 'Small (7")', price: 580, isPriceConfirmed: true },
      { id: 'supreme-m', name: 'Medium (10")', price: 1150, isPriceConfirmed: true },
      { id: 'supreme-l', name: 'Large (13")', price: 1650, isPriceConfirmed: true }
    ],
    tag: 'Customer Favourite',
    isPopular: true
  },
  {
    id: 'pizza-chicken-fajita',
    name: 'Chicken Fajita Pizza',
    categoryId: 'pizza',
    description: 'Spicy fajita chicken chunks, fresh onions, bell peppers and melted cheese blend with oregano.',
    image: '/src/assets/images/pizza_supreme_special_1792155261571.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 1100,
    variants: [
      { id: 'fajita-s', name: 'Small (7")', price: 550, isPriceConfirmed: true },
      { id: 'fajita-m', name: 'Medium (10")', price: 1100, isPriceConfirmed: true },
      { id: 'fajita-l', name: 'Large (13")', price: 1580, isPriceConfirmed: true }
    ],
    isPopular: true
  },
  {
    id: 'pizza-chicken-tikka',
    name: 'Chicken Tikka Pizza',
    categoryId: 'pizza',
    description: 'Traditional Pakistani tikka-marinated chicken, onions, herbs and cheese on signature baked crust.',
    image: '/src/assets/images/pizza_supreme_special_1792155261571.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 1100,
    variants: [
      { id: 'tikka-s', name: 'Small (7")', price: 550, isPriceConfirmed: true },
      { id: 'tikka-m', name: 'Medium (10")', price: 1100, isPriceConfirmed: true },
      { id: 'tikka-l', name: 'Large (13")', price: 1580, isPriceConfirmed: true }
    ]
  },
  {
    id: 'pizza-cheese-lover',
    name: 'Double Cheese Margherita Pizza',
    categoryId: 'pizza',
    description: 'Classic rich tomato herb sauce with generous double layers of gooey mozzarella cheese.',
    image: '/src/assets/images/pizza_supreme_special_1792155261571.jpg',
    isAvailable: true,
    isPriceConfirmed: false,
    tag: 'Vegetarian'
  },

  // --- BURGERS ---
  {
    id: 'burger-crispy-zinger',
    name: 'Crispy Zinger Burger',
    categoryId: 'burgers',
    description: 'Signature crispy whole fried chicken breast fillet, crunchy iceberg lettuce, melted cheddar cheese and special zesty sauce in toasted brioche sesame bun.',
    image: '/src/assets/images/crispy_zinger_burger_1792155262882.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 490,
    tag: 'Signature',
    isPopular: true
  },
  {
    id: 'burger-mighty-double-zinger',
    name: 'Mighty Double Zinger Burger',
    categoryId: 'burgers',
    description: 'Double crispy fried chicken fillets, double cheddar cheese, lettuce and signature house mayo.',
    image: '/src/assets/images/crispy_zinger_burger_1792155262882.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 750,
    isPopular: true
  },
  {
    id: 'burger-chicken-patty',
    name: 'Grilled Chicken Patty Burger',
    categoryId: 'burgers',
    description: 'Tender spiced minced chicken patty, fresh cucumber, tomatoes, creamy mayo and soft toasted bun.',
    image: '/src/assets/images/crispy_zinger_burger_1792155262882.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 360
  },
  {
    id: 'burger-beef-cheese',
    name: 'Classic Beef Cheese Burger',
    categoryId: 'burgers',
    description: 'Juicy seasoned beef patty with melted cheese, caramelized onions and signature barbecue relish.',
    image: '/src/assets/images/crispy_zinger_burger_1792155262882.jpg',
    isAvailable: true,
    isPriceConfirmed: false
  },

  // --- FRIED CHICKEN ---
  {
    id: 'fried-chicken-broast-quarter',
    name: 'Crispy Broast Chicken (Quarter)',
    categoryId: 'fried-chicken',
    description: '2 pcs crispy golden spiced fried chicken, served with seasoned french fries, dinner roll and garlic mayo dip.',
    image: '/src/assets/images/fried_chicken_broast_1792155313193.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 480,
    isPopular: true
  },
  {
    id: 'fried-chicken-broast-half',
    name: 'Crispy Broast Chicken (Half - 4 Pcs)',
    categoryId: 'fried-chicken',
    description: '4 pcs crunchy fried chicken with golden crinkle fries, dinner rolls and special dipping sauce.',
    image: '/src/assets/images/fried_chicken_broast_1792155313193.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 920
  },
  {
    id: 'fried-chicken-hot-wings',
    name: 'Crispy Fried Chicken Wings (6 Pcs)',
    categoryId: 'fried-chicken',
    description: 'Golden seasoned chicken wings with crunchy coating and spicy dip.',
    image: '/src/assets/images/fried_chicken_broast_1792155313193.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 420
  },
  {
    id: 'fried-chicken-family-bucket',
    name: 'Salt\'n Sweet Family Bucket (8 Pcs)',
    categoryId: 'fried-chicken',
    description: '8 pieces of crispy fried chicken, large fries, 4 dinner rolls and signature sauces.',
    image: '/src/assets/images/fried_chicken_broast_1792155313193.jpg',
    isAvailable: true,
    isPriceConfirmed: false,
    tag: 'Family Feast'
  },

  // --- SHAWARMA & WRAPS ---
  {
    id: 'shawarma-chicken-pita',
    name: 'Arabic Chicken Shawarma',
    categoryId: 'shawarma-wraps',
    description: 'Tender marinated grilled chicken breast, Arabian garlic toum sauce, pickled cucumbers wrapped in soft toasted pita bread.',
    image: '/src/assets/images/shawarma_wrap_platter_1792155262689.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 260,
    isPopular: true
  },
  {
    id: 'shawarma-chicken-cheese',
    name: 'Cheese Chicken Shawarma Wrap',
    categoryId: 'shawarma-wraps',
    description: 'Juicy spiced chicken shawarma loaded with melted cheddar cheese, mayo and crispy fries inside the wrap.',
    image: '/src/assets/images/shawarma_wrap_platter_1792155262689.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 330
  },
  {
    id: 'shawarma-zinger-wrap',
    name: 'Crispy Zinger Tortilla Wrap',
    categoryId: 'shawarma-wraps',
    description: 'Crunchy fried chicken strips, fresh lettuce, tomatoes and honey mustard or garlic sauce rolled in a grilled tortilla.',
    image: '/src/assets/images/shawarma_wrap_platter_1792155262689.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 380,
    isPopular: true
  },
  {
    id: 'shawarma-open-platter',
    name: 'Shawarma Platter with Fries & Hummus',
    categoryId: 'shawarma-wraps',
    description: 'Generous platter of shaved seasoned chicken, toasted pita wedges, crinkle fries, garlic sauce and pickles.',
    image: '/src/assets/images/shawarma_wrap_platter_1792155262689.jpg',
    isAvailable: true,
    isPriceConfirmed: false
  },

  // --- SANDWICHES ---
  {
    id: 'sandwich-club-classic',
    name: 'Triple-Decker Chicken Club Sandwich',
    categoryId: 'sandwiches',
    description: 'Three toasted bread slices layered with shredded roasted chicken, fried egg, cheese slice, crisp lettuce, tomato and creamy mayo. Served with french fries.',
    image: '/src/assets/images/club_sandwich_triple_1792155315172.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 450,
    tag: 'Classic',
    isPopular: true
  },
  {
    id: 'sandwich-grilled-chicken-cheese',
    name: 'Grilled Chicken & Cheese Sandwich',
    categoryId: 'sandwiches',
    description: 'Panini pressed toasted bread with seasoned chicken chunks and melted mozzarella.',
    image: '/src/assets/images/club_sandwich_triple_1792155315172.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 380
  },
  {
    id: 'sandwich-bbq-supreme',
    name: 'BBQ Chicken Grilled Sandwich',
    categoryId: 'sandwiches',
    description: 'Smoky BBQ glazed chicken fillet with crisp lettuce, onion rings and cheese.',
    image: '/src/assets/images/club_sandwich_triple_1792155315172.jpg',
    isAvailable: true,
    isPriceConfirmed: false
  },

  // --- GRILLED & CONTINENTAL ---
  {
    id: 'continental-chicken-steak',
    name: 'Grilled Chicken Sizzling Steak',
    categoryId: 'grilled-continental',
    description: 'Tender chicken breast steak served on a sizzling hot plate with sautéed vegetables, french fries and black pepper or mushroom sauce.',
    image: '/src/assets/images/shawarma_wrap_platter_1792155262689.jpg',
    isAvailable: true,
    isPriceConfirmed: false,
    tag: 'Sizzling Special'
  },
  {
    id: 'continental-chicken-parmesan',
    name: 'Crispy Chicken Parmesan with Pasta',
    categoryId: 'grilled-continental',
    description: 'Golden crumbed chicken topped with marinara sauce and melted cheese, accompanied by savoury pasta.',
    image: '/src/assets/images/pizza_supreme_special_1792155261571.jpg',
    isAvailable: true,
    isPriceConfirmed: false
  },

  // --- CAKES & BAKERY ---
  {
    id: 'cake-belgian-chocolate-fudge',
    name: 'Belgian Chocolate Fudge Cake (2 lbs)',
    categoryId: 'cakes-bakery',
    description: 'Moist layers of rich dark sponge filled and frosted with decadent Belgian chocolate ganache, topped with chocolate shavings.',
    image: '/src/assets/images/bakery_chocolate_fudge_cake_1792155262880.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 1400,
    variants: [
      { id: 'cake-fudge-1lb', name: '1 Pound', price: 750, isPriceConfirmed: true },
      { id: 'cake-fudge-2lb', name: '2 Pounds', price: 1400, isPriceConfirmed: true }
    ],
    tag: 'Artisan Bakery',
    isPopular: true
  },
  {
    id: 'cake-red-velvet',
    name: 'Red Velvet Cream Cheese Cake',
    categoryId: 'cakes-bakery',
    description: 'Classic velvety red sponge cake layered with silky cream cheese frosting and fine sponge crumbs.',
    image: '/src/assets/images/bakery_chocolate_fudge_cake_1792155262880.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 1500,
    variants: [
      { id: 'cake-rv-1lb', name: '1 Pound', price: 800, isPriceConfirmed: true },
      { id: 'cake-rv-2lb', name: '2 Pounds', price: 1500, isPriceConfirmed: true }
    ],
    isPopular: true
  },
  {
    id: 'cake-black-forest',
    name: 'Traditional Black Forest Cake',
    categoryId: 'cakes-bakery',
    description: 'Chocolate sponge cake layered with fresh whipped vanilla cream, dark cherries and dark chocolate curls.',
    image: '/src/assets/images/bakery_chocolate_fudge_cake_1792155262880.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 1200,
    variants: [
      { id: 'cake-bf-1lb', name: '1 Pound', price: 650, isPriceConfirmed: true },
      { id: 'cake-bf-2lb', name: '2 Pounds', price: 1200, isPriceConfirmed: true }
    ]
  },
  {
    id: 'cake-custom-celebration',
    name: 'Custom Birthday & Wedding Cake',
    categoryId: 'cakes-bakery',
    description: 'Customized designer fondant or buttercream cakes made to order for birthdays, anniversaries and special occasions.',
    image: '/src/assets/images/bakery_chocolate_fudge_cake_1792155262880.jpg',
    isAvailable: true,
    isPriceConfirmed: false,
    tag: 'Pre-Order'
  },

  // --- PASTRIES & SWEETS ---
  {
    id: 'pastry-chocolate-slice',
    name: 'Chocolate Ganache Pastry',
    categoryId: 'pastries-sweets',
    description: 'Individual pastry slice with dark chocolate sponge and smooth glossy ganache.',
    image: '/src/assets/images/bakery_chocolate_fudge_cake_1792155262880.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 160
  },
  {
    id: 'pastry-pineapple-slice',
    name: 'Pineapple Cream Pastry',
    categoryId: 'pastries-sweets',
    description: 'Light vanilla sponge layered with sweetened dairy cream and pineapple chunks.',
    image: '/src/assets/images/bakery_chocolate_fudge_cake_1792155262880.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 150
  },
  {
    id: 'sweets-gulab-jamun-kg',
    name: 'Special Gulab Jamun (Per Kg)',
    categoryId: 'pastries-sweets',
    description: 'Warm, soft khoya dumplings soaked in fragrant cardamom rose syrup. A timeless Pakistani delicacy.',
    image: '/src/assets/images/traditional_pakistani_sweets_1792155315064.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 900,
    variants: [
      { id: 'gj-half', name: 'Half Kg (500g)', price: 460, isPriceConfirmed: true },
      { id: 'gj-full', name: '1 Kg', price: 900, isPriceConfirmed: true }
    ],
    tag: 'Traditional Mithai',
    isPopular: true
  },
  {
    id: 'sweets-mix-mithai-box',
    name: 'Assorted Mithai Gift Box',
    categoryId: 'pastries-sweets',
    description: 'Luxury selection of pistachio barfi, cham cham, besan ladoo, kalakand and gulab jamun in festive presentation box.',
    image: '/src/assets/images/traditional_pakistani_sweets_1792155315064.jpg',
    isAvailable: true,
    isPriceConfirmed: false,
    tag: 'Gift Box'
  },

  // --- COFFEE & BEVERAGES ---
  {
    id: 'beverage-iced-cold-coffee',
    name: 'Chilled Iced Cold Coffee',
    categoryId: 'coffee-beverages',
    description: 'Smooth blended espresso with cold milk, sugar syrup, chocolate drizzle and a scoop of vanilla ice cream.',
    image: '/src/assets/images/frappe_shake_dessert_1792155315140.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 280,
    tag: 'Cafe Special',
    isPopular: true
  },
  {
    id: 'beverage-hot-cappuccino',
    name: 'Hot Espresso Cappuccino',
    categoryId: 'coffee-beverages',
    description: 'Freshly brewed aromatic coffee with velvety steamed milk foam and cocoa dusting.',
    image: '/src/assets/images/frappe_shake_dessert_1792155315140.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 240
  },
  {
    id: 'beverage-fresh-lime-soda',
    name: 'Fresh Mint Lime Soda',
    categoryId: 'coffee-beverages',
    description: 'Crisp, fizzy soda infused with freshly squeezed lime juice, mint leaves and black rock salt.',
    image: '/src/assets/images/frappe_shake_dessert_1792155315140.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 180
  },
  {
    id: 'beverage-soft-drink',
    name: 'Chilled Soft Drink Can / Bottle',
    categoryId: 'coffee-beverages',
    description: 'Selection of chilled carbonated drinks (Pepsi, 7Up, Mirinda, Coca-Cola).',
    image: '/src/assets/images/frappe_shake_dessert_1792155315140.jpg',
    isAvailable: true,
    isPriceConfirmed: false
  },

  // --- SHAKES, ICE CREAM & DESSERTS ---
  {
    id: 'shake-oreo-thick',
    name: 'Oreo Thick Shake',
    categoryId: 'shakes-desserts',
    description: 'Blended whole milk, vanilla ice cream and crunchy Oreo cookies, topped with whipped cream and crushed cookies.',
    image: '/src/assets/images/frappe_shake_dessert_1792155315140.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 320,
    isPopular: true
  },
  {
    id: 'shake-kitkat-chocolate',
    name: 'KitKat Chocolate Shake',
    categoryId: 'shakes-desserts',
    description: 'Creamy chocolate shake loaded with crisp KitKat wafer chunks and rich chocolate ganache.',
    image: '/src/assets/images/frappe_shake_dessert_1792155315140.jpg',
    isAvailable: true,
    isPriceConfirmed: true,
    price: 350
  },
  {
    id: 'dessert-ice-cream-sundae',
    name: 'Double Scoop Ice Cream Sundae',
    categoryId: 'shakes-desserts',
    description: 'Choice of mango, kulfa, chocolate or vanilla scoops with fruit cocktail, nuts and strawberry or chocolate syrup.',
    image: '/src/assets/images/frappe_shake_dessert_1792155315140.jpg',
    isAvailable: true,
    isPriceConfirmed: false
  }
];
