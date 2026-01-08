const foodItems = [
    {
      id: 1,
      name: "Veg Burger",
      price: 120,
      category: "veg",
      image: "https://media.istockphoto.com/id/1323194107/photo/plant-based-black-bean-burger-on-a-sesame-seed-bun.jpg?s=612x612&w=0&k=20&c=m4TXkYuG20dE6ZqRZz8PdVU6HIUWoJqizaxOmf418pQ="
    },
    {
      id: 2,
      name: "Paneer Pizza",
      price: 250,
      category: "veg",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      name: "Chicken Biryani",
      price: 180,
      category: "nonveg",
      image: "https://www.shutterstock.com/image-photo/traditional-chicken-biryani-served-brass-600nw-2622739739.jpg"
    },
    {
      id: 4,
      name: "French Fries",
      price: 90,
      category: "veg",
      image: "https://images4.alphacoders.com/998/998705.jpg"
    },
    {
      id: 5,
      name: "Chicken Rice",
      price: 120,
      category: "nonveg",
      image: "https://thumbs.dreamstime.com/b/delicious-spicy-chicken-fried-rice-homemade-cast-iron-wok-94297571.jpg"
    },
    {
      id: 6,
      name: "Paneer Tikka",
      price: 220,
      category: "veg",
      image: "https://thumbs.dreamstime.com/b/indian-food-celebrations-dishes-like-paneer-tikka-chicken-masala-their-vibrant-colors-aromatic-spices-bring-festive-joy-329320659.jpg"
    },
    {
      id: 7,
      name: "Veg Samosa",
      price: 20,
      category: "veg",
      image: "https://t4.ftcdn.net/jpg/04/66/42/25/360_F_466422564_LICnIvfjfGhieSKG4gxU35LirfjrxbOB.jpg"
    },
    {
      id: 8,
      name: "Gobi 65",
      price: 150,
      category: "veg",
      image: "https://thumbs.dreamstime.com/b/gobi-manchurian-popular-indo-chinese-food-made-cauliflower-florets-served-white-plate-over-rustic-wooden-table-selective-225787158.jpg"
    },
    {
      id: 9,
      name: "Aloo Tikki",
      price: 80,
      category: "veg",
      image: "https://www.shutterstock.com/image-photo/alu-tikki-cheese-tomato-mint-600nw-2189063497.jpg"
    },
    {
      id: 10,
      name: "Chicken 65",
      price: 180,
      category: "nonveg",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"
    },
    {
      id: 11,
      name: "Chicken Tikka",
      price: 220,
      category: "nonveg",
      image: "https://media.istockphoto.com/id/1191410023/photo/chicken-tikka-with-mint-chutney-directly-above-photo.jpg?s=612x612&w=0&k=20&c=UPYad6fjNR_a6-llEZICoNgRfkmDrPugw7hsVswX2WI="
    },
    {
      id: 12,
      name: "Tandoori Chicken (Full)",
      price: 450,
      category: "nonveg",
      image: "https://cti.farziengineer.co/products/Chicken_Whole_in_tandoori_With_Skin-02a48764cccd.jpg?auto=format&sharp=20&ixlib=react-9.3.0"
    },
    {
      id: 13,
      name: "Fish Fry",
      price: 280,
      category: "nonveg",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUvyss5JSeaXD9isw_NJJ0iHkqYOqy3xdgBDRPPJ8khivM6ym5hdtqhlkUnYFPvhaUMOqq1Rf4s25ZOBExGg13K9r00v8Y6UKKlC4JBWeaNCERjfoxt8YoL-LPHwFsCQApAZiLCPb8wS0/s1600/9234.jpg"
    },
    {
      id: 14,
      name: "Dal Makhani",
      price: 160,
      category: "veg",
      image: "https://t3.ftcdn.net/jpg/08/49/52/72/360_F_849527258_uZ2uxCidsx9OMIPajT1U7SGmQd5aqwhq.jpg"
    },
    {
      id: 15,
      name: "Chole Masala",
      price: 140,
      category: "veg",
      image: "https://media.istockphoto.com/id/1182758935/photo/homemade-indian-chickpea-chana-masala.jpg?s=612x612&w=0&k=20&c=t9hk82loyPEu37eFnA8v-oKGscX4_ektoiwUsXVsegs="
    },
    {
      id: 16,
      name: "Paneer Butter Masala",
      price: 200,
      category: "veg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GMD_WH9sl6HjJ4CObB9Lim-51zBji9n5KA&s"
    },
    {
      id: 17,
      name: "Shahi Paneer",
      price: 220,
      category: "veg",
      image: "https://t4.ftcdn.net/jpg/08/24/35/87/360_F_824358712_32xGA30Y1XNegYq50MzFMGBJhyk04Pyv.jpg"
    },
    {
      id: 18,
      name: "Veg Kurma",
      price: 150,
      category: "veg",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-kurma-vegetable-korma-recipe-500x375.jpg"
    },
    {
      id: 19,
      name: "Butter Chicken",
      price: 260,
      category: "nonveg",
      image: "https://salasdaily.com/cdn/shop/files/butterchickewithbone.webp?v=1689922999"
    },
    {
      id: 20,
      name: "Chicken Curry",
      price: 220,
      category: "nonveg",
      image: "https://www.shutterstock.com/image-photo/homemade-chicken-curry-pan-wooden-600nw-2476480287.jpg"
    },
    {
      id: 21,
      name: "Chicken Chettinad",
      price: 240,
      category: "nonveg",
      image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/11/Chicken-Chettinad-Thumbnail.jpg"
    },
    {
      id: 22,
      name: "Mutton Curry",
      price: 380,
      category: "nonveg",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/23/f1/d7/3a/mutton-rogan-josh.jpg"
    },
    {
      id: 23,
      name: "Egg Curry",
      price: 150,
      category: "nonveg",
      image: "https://images.services.kitchenstories.io/EPAs3NYa-v4uK2NumQYwhJ4Cd58=/3840x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2899-photo-final-3x4.jpg"
    },
    {
      id: 24,
      name: "Steamed Rice",
      price: 100,
      category: "veg",
      image: "https://media.istockphoto.com/id/491090528/photo/cooked-rice.jpg?s=612x612&w=0&k=20&c=WNeDEUEioyyk6FQZQrVMrtFMDVdtbwtK951eZ8q5FNY="
    },
    {
      id: 25,
      name: "Jeera Rice",
      price: 140,
      category: "veg",
      image: "https://vaya.in/recipes/wp-content/uploads/2019/01/Jeera-Rice.jpg"
    },
    {
      id: 26,
      name: "Veg Biryani",
      price: 180,
      category: "veg",
      image: "https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs="
    },
    {
      id: 27,
      name: "Mutton Biryani",
      price: 350,
      category: "nonveg",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-mutton-biryani-meal-in-a-plate-on-table-image_15645442.jpg"
    },
    {
      id: 28,
      name: "Tandoori Roti",
      price: 20,
      category: "veg",
      image: "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-500x375.jpg"
    },
    {
      id: 29,
      name: "Butter Roti",
      price: 25,
      category: "veg",
      image: "https://cdn.uengage.io/uploads/28289/image-2ZXKF9-1742797463.jpg"
    },
    {
      id: 30,
      name: "Plain Naan",
      price: 35,
      category: "veg",
      image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM="
    },
    {
      id: 31,
      name: "Butter Naan",
      price: 45,
      category: "veg",
      image: "https://cdn.uengage.io/uploads/10295/image-9153-1765522414.jpg"
    },
    {
      id: 32,
      name: "Paratha",
      price: 50,
      category: "veg",
      image: "https://t3.ftcdn.net/jpg/09/45/46/72/360_F_945467264_13rCx2nGR9wb9wrVt2g2FEFB4tE4b8sW.jpg"
    },
    {
      id: 33,
      name: "Mutton Sukka",
      price: 420,
      category: "nonveg",
      image: "https://www.awesomecuisine.com/wp-content/uploads/2014/07/Mutton-Sukka.jpg"
    },
    {
      id: 34,
      name: "Fish Curry",
      price: 260,
      category: "nonveg",
      image: "https://vismaifood.com/storage/app/uploads/public/fa9/eb5/467/thumb__700_0_0_0_auto.jpg"
    },
    {
      id: 35,
      name: "Prawn Chettinad",
      price: 400,
      category: "nonveg",
      image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/12/Chettinad-Prawn-Masala-Thumbnail.jpg"
    },
    {
      id: 36,
      name: "Crab Masala",
      price: 450,
      category: "nonveg",
      image: "https://img-global.cpcdn.com/recipes/211c2bfde5ba8c90/680x781cq80/grandmas-spicy-crab-curry-recipe-main-photo.jpg"
    },
  ];
  