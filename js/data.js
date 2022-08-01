// "use strict";
let products = [
    {
    badge:  {
      title: "Sale",
      bg: "sale"
    },
    image: "https://d6v6s.github.io/img/product/product-1.jpg",
    title: "Kui Ye Chen’s AirPods",
    price: 250,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 3,
    id: 1,
    category: {
      id: 1,
      name: "Electronic",
        }
    },
    {
    badge:  {
        title: "",
        bg: ""
    },
    image: "https://d6v6s.github.io/img/product/product-2.jpg",
    title: "Air Jordan 12 gym red",
    price: 300.33,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    stars: 0,
    id: 2,
    category: {
      id: 2,
      name: "Shoes",
       }

    },
    {
        badge: {
            title: "New",
            bg: "new"
        },
        image: "https://d6v6s.github.io/img/product/product-3.jpg",
        title: "Cyan cotton t-shirt",
        price: 30,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 2,
      id: 3,
      category: {
        id: 3,
        name: "T-shirt",
        }
    },
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d6v6s.github.io/img/product/product-4.jpg",
        title: "Timex Unisex Originals",
        price: 350,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 5,
      id: 4,
      category: {
      id: 4,
      name: "Watches",
        }
    },  
    {
        badge: {
            title: "Sale",
            bg: "sale"
        },
        image: "https://d6v6s.github.io/img/product/product-5.jpg",
        title: "Red digital smartwatch",
        price: 150,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 1,
      id: 5,
            category: {
      id: 1,
      name: "Electronic",
        }
    },  
    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d6v6s.github.io/img/product/product-6.jpg",
        title: "Nike air max 95",
        price: 250,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 5,
      id: 6,
      category: {
      id: 2,
      name: "Shoes",
        }
    },  
    {
        badge: {
            title: "Sold",
            bg: "sold"
        },
        image: "https://d6v6s.github.io/img/product/product-7.jpg",
        title: "Joemalone Women prefume",
        price: 25,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 4,
      id: 7,
      category: {
      id: 5,
      name: "Parfume",
        }
    },  
    {
        badge: {
            title: "New",
            bg: "new"
        },
        image: "https://d6v6s.github.io/img/product/product-8.jpg",
        title: "Apple Watch",
        price: 350,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 5,
      id: 8,
            category: {
      id: 4,
      name: "Watches",
        }
    },  
    {
        badge: {
            title: "Sold",
            bg: "sold"
        },
        image: "https://d6v6s.github.io/img/product/product-9.jpg",
        title: "Men silver Byron Watch",
        price: 351,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 3,
      id: 9,
      category: {
      id: 4,
      name: "Watches",
        }
    },  
    {
        badge: {
            title: "New",
            bg: "new"
        },
        image: "https://d6v6s.github.io/img/product/product-10.jpg",
        title: "Ploaroid one step camera",
        price: 451,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 0,
      id: 10,
            category: {
      id: 1,
      name: "Electronic",
        }
    },  

    {
        badge: {
            title: "",
            bg: ""
        },
        image: "https://d6v6s.github.io/img/product/product-11.jpg",
        title: "Gray Nike running shoes",
        price: 151,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 2,
      id: 11,
      category: {
      id: 2,
      name: "Shoes",
        }
        
    },  

    {
        badge: {
            title: "New",
            bg: "new"
        },
        image: "https://d6v6s.github.io/img/product/product-12.jpg",
        title: "Black DSLR lense",
        price: 51,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
        stars: 1,
      id: 12,
      category: {
      id: 1,
      name: "Electronic",
        }
        
    },  
];