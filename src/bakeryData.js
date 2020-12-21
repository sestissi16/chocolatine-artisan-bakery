
const bakeryInfo = {
    tagline:"We make pastries for the people!",
    aboutUs: {
        mission1Part1: "We've grown up eating",
        mission1Part2: "French baked goods and we wanted to share that with all of you.",
        mission1Emphasis: " incredible and fresh ",
        mission2: "",
        vision1: "Chocolatine's vision",
        vision2: "Second Sentence of vision if needed",
        serviceList: "Catering, Wholesale, Events, Small Batch Orders",
        serviceEx1: "Do you want a couple goodies for a quick breakfast?",
        serviceEx2: "Are you having an event?",
        serviceEx3: "Do you have a restaurant or cafe that sells snacks or lunch?",
        serviceSum: "We would love to work with you to give you fresh, local options to treat your family, friends, colleagues and guests!",
        process1: "Old-fashioned techniques",
        process2: "Baked fresh for your orders",
        process3: "Locally sourced with no added preservatives",
        processSum: "We're doing everything to bring quality products at an affordable price!",
        //the orders need to have a link and a link name associated with them
        order1: "Message us on ",
        order1Link: "https://www.facebook.com/ArtisanBakeries/",
        order1LinkName: "Facebook",
        order2: "Use this ",
        order2Link: "/Order",
        order2LinkName: "Order Form",
        order3: " (artisanbakeriesusa@gmail.com)",
        order3Link: "/Contact",
        order3LinkName: "Email us",
        orderExtraInfo: "When you order, please give us at least three days notice and ask about the minimum order requirements for the items you're interested in.",
        //You'll have to enter the contact info on About.js
    },
    menu: {
        topNotes: {
            note1: {
                firstPart: "* Our food can be made gluten free or low sugar if needed! ",
                linkText: "Message us",
                link: "/Contact",
                secondPart: " to see what we can do."
            },
            note2: {
                firstPart: "* We do small batch orders, catering, and wholesale, so select your ",
                linkText: "ordering style",
                link: "#OrderingTypesSection",
                secondPart: " below to see what's available for each!",
            }
        },
        monthlySpecials: {

        },
        smallBatch: {
            sizing: {
                sm: "2 of a same item",
                med: "6 of a same item",
                lg: "12 of a same item"
            },
            description: "Best for a small group or just yourself ;)",
            orderInfo: {
                line1: "We have three different sizes so you can find the one that best fits your needs.",
                line2: "You can order more than one count of a certain size order, like two small orders of chocolate croissants.",
                line3: "Please order three days before you need it."},
            savory: {
                croissantBased: {
                    Butter: {
                        name: "Butter Croissant",
                        price: {
                            sm: "$4.00",
                            med: "$12.00",
                            lg: "$24.00",
                        },
                        description: "Just a nice buttery croissant",
                        shortIngredient: "Contains: wheat, dairy (milk, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                    },
                    Everything: {
                        name: "Everything Spiced Croissant",
                        price: {
                            sm:"$4.00",
                            med: "$12.00",
                            lg: "$24.00"
                        },
                        description: "A croissant with a blend of herbs and spices sprinkled on top",
                        shortIngredient: "Contains: wheat, dairy (milk, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Poppy seeds, Sesame Seeds, Herb Blend"
                    },
                    Lunch: {
                        name: "Lunch Croissant Square",
                        price: {
                            sm:"$7.60",
                            med: "$22.80",
                            lg: "$45.60",
                        },
                        description: "Slices of Ham or Turkey and swiss or cheddar cheese enveloped in croissant dough.",
                        shortIngredient: "Contains: wheat, dairy (milk, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Cheese (swiss, cheddar), Ham or Turkey",
                        option1: {
                            title: "Combos",
                            choices: {
                                one: "Ham and Swiss",
                                two: "Turkey and Cheddar",
                                three: "Three cheese combo"
                            },
                        }
                    },
                    Crostinis: {
                        name: "Croissant Crostinis",
                        price: {
                            sm:"$7.60",
                            med: "$22.80",
                            lg: "$45.60"
                        },
                        description: "Snack size croissant sticks with a seasoning on top. It's perfect to accompany your tea or coffee or even as a snack on its own! They come in packs of 10.",
                        shortIngredient: "Contains: wheat, dairy (milk, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Cheese (swiss, cheddar), Herbs, Seasonings, Honey",
                        option1: {
                            title: "Toppings",
                            choices: {
                                one: "Everything Seasoning Mix",
                                two: "Shredded Cheese Mix",
                                three: "Honey"
                            },
                        }
                    }
                },
                breadBased: {
                    Buns60: {
                        name: "Brioche Slider Buns ",
                        price: {
                            sm: "$1.30",
                            med: "$3.90",
                            lg: "$7.80"
                        },
                        description: "Soft, buttery buns that are perfect for sandwiches, burgers, and more. They're about 60 grams each.",
                        shortIngredient: "Contains: wheat, dairy (milk, eggs, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                    },
                    Buns90: {
                        name: "Brioche Medium Buns ",
                        price: {
                            sm:"$1.60",
                            med: "$3.90",
                            lg: "$7.80"
                        },
                        description: "Soft, buttery buns that are perfect for sandwiches, burgers, and more. They're about 90 grams each.",
                        shortIngredient: "Contains: wheat, dairy (milk, eggs, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                    },
                    Buns110: {
                        name: "Brioche Large Buns ",
                        price: {
                            sm:"$1.90",
                            med:"$5.70",
                            lg:"$11.40"
                        },
                        description: "Soft, buttery buns that are perfect for sandwiches, burgers, and more. They're about 110 grams each.",
                        shortIngredient: "Contains: wheat, dairy (milk, eggs, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                    },
                    BroicheLoafSmall: {
                        name: "Small Brioche Loaf",
                        price: {
                            sm:"$8.00",
                            med: "$24.00",
                        },
                        description: "A soft, buttery loaf. The ordering size is different because it's a loaf.",
                        shortIngredient: "Contains: wheat, dairy (milk, eggs, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                        option1: {
                            title: "Form",
                            choices: {
                                one: "Challah Braid",
                                two: "Tear-Away Loaf",
                                three: "Classic Loaf"
                            },
                        }
                    },
                    BroicheLoafMedium: {
                        name: "Medium Brioche Loaf",
                        price: {
                            sm:"$11.00",
                            med:"$33.00"
                        },
                        description: "A soft, buttery loaf. The ordering size is different because it's a loaf.",
                        shortIngredient: "Contains: wheat, dairy (milk, eggs, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                        option1: {
                            title: "Form",
                            choices: {
                                one: "Challah Braid",
                                two: "Tear-Away Loaf",
                                three: "Classic Loaf"
                            },
                        }
                    },
                    BroicheLoafLarge: {
                        name: "Large Brioche Loaf",
                        price: {
                            sm:"$15.00",
                            med:"$45.00"
                        },
                        description: "A soft, buttery loaf. The ordering size is different because it's a loaf.",
                        shortIngredient: "Contains: wheat, dairy (milk, eggs, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                        option1: {
                            title: "Form",
                            choices: {
                                one: "Challah Braid",
                                two: "Tear-Away Loaf",
                                three: "Classic Loaf"
                            },
                        }
                    },
                },
                other: {
                    // SavoryCrepes: {
    
                    // },
                    // ShortBread: {
                    //     name: "Financiers",
                    //     price: {
                    //         sm: "$4.00",
                    //         med: "$12.00",
                    //         lg: "$24.00",
                    //     },
                    //     description: "The financier is similar to our coffeecake! It's flavored with almond and vanilla extract.",
                    //     shortIngredient: "Contains: wheat, dairy (egg whites, butter), tree nuts",
                    //     longIngredient: "Egg Whites, Sugar, Hi Gluten Flour, Salt, Almond Flour, Almond Meal, Butter (Pasteurized Cream), Vanilla Extract (Water, Natural Vanilla Extract, Ethyl Alcohol, Fructose)",
                    // },
                }
            },
            sweet: {
                croissantBased: {
                    Almond: {
                        name: "Almond Croissant",
                        price: {
                            sm: "$6.50",
                            med: "$19.50",
                            lg: "$39.00",
                        },
                        description: "A croissant filled with almond creme and topped with almonds.",
                        shortIngredient: "Contains: wheat, dairy (milk, butter), tree nuts",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Almond Extract (Water, Alcohol, and Oil of Bitter Almond), Vanilla Extract (Water, Natural Vanilla Extract, Ethyl Alcohol, Fructose), Almond Slices",
                    },
                    Chocolate: {
                        name: "Chocolate Croissant",
                        price: {
                            sm: "$5.00",
                            med: "$15.00",
                            lg: "$30.00",
                        },
                        description: "A croissant filled with pure chocolate bars.",
                        shortIngredient: "Contains: wheat, dairy (milk, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Chocolate Batons (44% cocoa)",
                    },
                    ChocoTwist: {
                        name: "Chocolate Croissant",
                        price: {
                            sm: "$5.25",
                            med: "$15.75",
                            lg: "$31.50",
                        },
                        description: "A croissant filled with pastry creme and chocolate chips and braided.",
                        shortIngredient: "Contains: wheat, dairy (milk, butter)",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Chocolate Chips, Pastry Cream (eggs, butter, milk, cornstarch, flour, vanilla extract, sugar, salt)",
                    },
                },
                breadBased: {
                    NutellaLoaf: {
                        name: "Nutella Loaf",
                        price: {
                            sm: "$3.00",
                            med: "$9.00",
                            lg: "$18.00",
                        },
                        description: "A beautiful brioche loaf filled with nutella.",
                        shortIngredient: "Contains: wheat, dairy (milk, eggs, butter), tree nuts",
                        longIngredient: "Wheat Flour, Water, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Dough conditioner (Vegetable Gums - Arabic Gum, Guar Gum - Wheat Flour, Enzymes), Yeast, Nutella (Sugar, Palm Oil, Skim Milk, Cocoa, Soy, Lecithin as Emulsifier, Vanillin, Hazelnuts)",
                    }
                },
                other: {
                    // crepes: {
    
                    // },
                    Financiers: {
                        name: "Financiers",
                        price: {
                            sm: "$4.00",
                            med: "$12.00",
                            lg: "$24.00",
                        },
                        description: "The financier is similar to our coffeecake! It's flavored with almond and vanilla extract.",
                        shortIngredient: "Contains: wheat, dairy (egg whites, butter), tree nuts",
                        longIngredient: "Egg Whites, Sugar, Hi Gluten Flour, Salt, Almond Flour, Almond Meal, Butter (Pasteurized Cream), Vanilla Extract (Water, Natural Vanilla Extract, Ethyl Alcohol, Fructose)",
                    },
                    Truffles: {
                        name: "Chocolate Truffles",
                        price: {
                            sm: "$4.00",
                            med: "$12.00",
                            lg: "$24.00",
                        },
                        description: "A chocolate ganache center coated in chocolate cocoa powder or coconut shavings.",
                        shortIngredient: "Contains: dairy (heavy whipping cream)",
                        longIngredient: "Baking Chocolate (70% cocoa), Heavy Whipping Cream, Vanilla Extract or Peppermint Extract or Orange Extract or Rum Extract & Coconut Extract, Cocoa Powder or Crystal Sugar & Dried Mint or Cocoa Powder & Nutmeg & Cinnamon or Coconut shavings",
                        option1: {
                            title: "Flavors",
                            choices: {
                                one: "Classic Chocolate",
                                two: "Orange",
                                three: "Rum Coconut",
                                four: "Peppermint",
                            },   
                        }
                    },
                    // ShortBread: {
                    //     name: "Financiers",
                    //     price: {
                    //         sm: "$4.00",
                    //         med: "$12.00",
                    //         lg: "$24.00",
                    //     },
                    //     description: "The financier is similar to our coffeecake! It's flavored with almond and vanilla extract.",
                    //     shortIngredient: "Contains: wheat, dairy (egg whites, butter), tree nuts",
                    //     longIngredient: "Egg Whites, Sugar, Hi Gluten Flour, Salt, Almond Flour, Almond Meal, Butter (Pasteurized Cream), Vanilla Extract (Water, Natural Vanilla Extract, Ethyl Alcohol, Fructose)",
                    // },
                }
            },
            specialOrder: {
                info: "These items will can only be made if you order six or more each and need to be ordered 5 days ahead of when you need them.",
                TartsTurnovers: {
                    name: "Tarts and Turnovers",
                    price: {
                        sm: "$6.00",
                        med: "$18.00",
                        lg: "$36.00",
                    },
                    description: "We offer either open-faced tarts or sealed turnover with various fillings!",
                    shortIngredient: "Contains: wheat, dairy, soy, tree nuts",
                    longIngredient: "Enriched Wheat Flour (niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), Malted Barley Flour, Water, Butter (pasteurized cream), Ascorbic acid as dough conditioner, Shortening (Palm oil, Beta carotene - color - Water, Vital Gluten), Salt, Almond Extract (Water, Alcohol and Oil of Bitter Almond)",
                    option1: {
                        title: "Flavors",
                        choices: {
                            one: "Apple",
                            two: "Nutella / Chocolate",
                            three: "Raspberry",
                            four: "Peach",
                        },
                    }
                },
                // BakedBrie: {
    
                // },
                // Muffins: {
    
                // },
                // Cakes: {
    
                // },
                // Phyllo: {
    
                // }
            }
        },
        cateringInfo: {
            combos: {
                breakfast: {
                    sm: "36 items. Choose up to three options below (3 options = 12 of each option)",
                    lg: "72 items. Choose up to three options below (3 options = 24 of each option)"
                },
                lunchDinner: {
                    sm: "36 personal entree items + 24 side items",
                    lg: ""
                },
            },
            cateringMenu: {
                breakfast: {
    
                },
                lunchDinner: {
    
                },
                sides: {
    
                },
                desserts: {
    
                }
            },
        },
        wholesale: {
            OrderInfo: "Select the menu items you're interested in and we'll discuss pricing and creation options.",
            
        },
        

    }
}

export default bakeryInfo