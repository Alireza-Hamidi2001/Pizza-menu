import hotdogImg from "../assets/images/hotdog.png";
import hamburger1Img from "../assets/images/ham1.png";
import hamburger2Img from "../assets/images/ham2.png";
import potatoImg from "../assets/images/potato.png";
import cakeImg from "../assets/images/cake.png";
import stakeImg from "../assets/images/stake.png";
import soupImg from "../assets/images/soup1.png";
import fruitKebabImg from "../assets/images/fruit-kebab.png";

export const pizzaData = [
    {
        name: "Hotdog",
        ingredients: [
            "Sausage",
            "Hotdog bun",
            "Mustard",
            "Ketchup",
            "Onions",
            "Pickles",
        ],
        price: 4.5,
        photoName: hotdogImg,
        soldOut: false,
    },
    {
        name: "Cake",
        ingredients: [
            "Flour",
            "Sugar",
            "Eggs",
            "Butter",
            "Baking powder",
            "Vanilla extract",
        ],
        price: 6,
        photoName: cakeImg,
        soldOut: false,
    },
    {
        name: "Hamburger",
        ingredients: [
            "Beef patty",
            "Lettuce",
            "Tomato",
            "Onion",
            "Ketchup",
            "Burger bun",
        ],
        price: 5.5,
        photoName: hamburger1Img,
        soldOut: false,
    },
    {
        name: "Cheese burger",
        ingredients: [
            "Double beef patty",
            "Cheese",
            "Bacon",
            "Pickles",
            "Lettuce",
            "Burger bun",
        ],
        price: 7,
        photoName: hamburger2Img,
        soldOut: true,
    },
    {
        name: "Steak",
        ingredients: [
            "Beef steak",
            "Salt",
            "Black pepper",
            "Garlic",
            "Butter",
            "Rosemary",
        ],
        price: 12,
        photoName: stakeImg,
        soldOut: false,
    },
    {
        name: "Fruit Kebab",
        ingredients: [
            "Pineapple",
            "Strawberry",
            "Kiwi",
            "Melon",
            "Grapes",
            "Skewers",
        ],
        price: 3.5,
        photoName: fruitKebabImg,
        soldOut: false,
    },
    {
        name: "Soup",
        ingredients: [
            "Chicken broth",
            "Noodles",
            "Ginger",
            "Soy sauce",
            "Vegetables",
            "Chicken",
        ],
        price: 5.5,
        photoName: soupImg,
        soldOut: true,
    },
    {
        name: "Potato Fries",
        ingredients: [
            "Potatoes",
            "Vegetable oil",
            "Salt",
            "Black pepper (optional)",
            "Paprika (optional)",
        ],
        price: 2.5,
        photoName: potatoImg,
        soldOut: false,
    },
];
