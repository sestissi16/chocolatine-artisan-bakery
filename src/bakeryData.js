

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
        smallBatchInfo: {
            sm: "2 of a same item",
            med: "6 of a same item",
            lg: "12 of a same item"
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
            }
        },
        wholesaleInfo: "Select the menu items you're interested in and we'll discuss pricing and creation options.",
        monthlySpecials: {

        },
        savory: {
            croissantBased: {
                Butter: {
                    name: "Butter Croissant",
                    price: {
                        smallBatch: "4.00 sm | 12.00 md | 24.00 lg",
                    },
                    description: "Just a nice buttery croissant",
                    shortIngredient: "Contains: wheat, dairy (milk, butter)",
                    longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                },
                Everything: {
                    name: "Everything Spiced Croissant",
                    price: {
                        smallBatch:"4.00 sm. | 12.00 md | 24.00 lg",
                    },
                    description: "A croissant with a blend of herbs and spices sprinkled on top",
                    shortIngredient: "Contains: wheat, dairy (milk, butter)",
                    longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Poppy seeds, Sesame Seeds, Herb Blend"
                },
                Lunch: {
                    name: "Lunch Croissant Square",
                    price: {
                        smallBatch:"7.60 sm. | 22.80 md | 45.60 lg",
                    },
                    description: "Slices of Ham or Turkey and swiss or cheddar cheese enveloped in croissant dough.",
                    shortIngredient: "Contains: wheat, dairy (milk, butter)",
                    longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Cheese (swiss, cheddar), Ham or Turkey",
                    option1: {
                        title: "Combos",
                        one: "Ham and Swiss",
                        two: "Turkey and Cheddar",
                        three: "Three cheese combo"
                    }
                },
                Crostinis: {
                    name: "Croissant Crostinis",
                    price: {
                        smallBatch:"7.60 sm. | 22.80 md | 45.60 lg",
                    },
                    description: "Snack size croissant sticks with a seasoning on top. It's perfect to accompany your tea or coffee or even as a snack on its own!",
                    shortIngredient: "Contains: wheat, dairy (milk, butter)",
                    longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Cheese (swiss, cheddar), Herbs, Seasonings, Honey",
                    option1: {
                        title: "Toppings",
                        one: "Everything Seasoning Mix",
                        two: "Shredded Cheese Mix",
                        three: "Honey"
                    }
                }
            },
            breadBased: {
                Buns: {
                    name: "Brioche Buns",
                    price: {
                        smallBatch:"Varies based on sizing",
                    },
                    description: "Soft, buttery buns that are perfect for sandwiches, burgers, and more.",
                    shortIngredient: "Contains: wheat, dairy (milk, eggs, butter)",
                    longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                    option1: {
                        title: "Sizing",
                        one: "Sliders (60 g) - $1.30 sm | $3.90 md | $7.80 lg",
                        two: "Medium (90 g) - $1.60 sm | $4.80 md | $9.60 lg",
                        three: "Large (110g) - $1.90 sm | $5.70 md | $11.40 lg"
                    }
                },
                BroicheLoaf: {
                    name: "Brioche Loaf",
                    price: {
                        smallBatch:"Varies based on sizing",
                    },
                    description: "A soft, buttery loaf. The ordering size is different because it's a loaf. There are small, medium, and large size loafs and they come in a batch of 1.",
                    shortIngredient: "Contains: wheat, dairy (milk, eggs, butter)",
                    longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water",
                    option1: {
                        title: "Sizing",
                        one: "Small - $4.00 ",
                        two: "Medium - $5.50 ",
                        three: "Large - $7.50 "
                    }
                },
            },
            other: {
                // SavoryCrepes: {

                // },
            }
        },
        sweet: {
            croissantBased: {
                almond: {

                },
                chocolate: {

                },
                chocoTwist: {

                },
            },
            breadBased: {
                nutellaBun: {

                }
            },
            other: {
                // crepes: {

                // },
                financiers: {

                },
                truffles: {

                },
            }
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
        specialOrder: {
            info: "These items will can only be made if you order six or more each and need to be ordered 5 days ahead of when you need them.",
            tartsTurnovers: {
                    
            },
            bakedBrie: {

            },
            muffins: {

            },
            cakes: {

            },
            phyllo: {

            }
        }
    }
}

export default bakeryInfo