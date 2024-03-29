
const bakeryInfo = {
    home: {
        tagline:"We make pastries for the people!",
        taglineAction: "Treat yourself without breaking the bank today!",
        headerAboutTitle: "We're a Local Small Business!",
        headerAboutDescript: " We're a local bakers that immigrated from France, so we wanted to share the food magic with all of you! We started up this bakery so that we could provide fresh, delicious, and affordable baked goods.",
        headerBenefitsTitle: "Our pastries should be as good as the ones you could get in France and we'll do it by putting humans first.",
        headerBenefit1: "Everything is hand made with traditional recipes.",
        headerBenefit1Ex: " We make the dough in house and only bake it when orders come in so they can be as fresh as possible! Our recipes are coming straight from Europe so we can make the best quality pastries.",
        headerBenefit2: "We make all of our goods as affordable as possible.",
        headerBenefit2Ex: "We want anybody to be able to try our homemade goods and be able to treat yourselves to something amazing! We try to buy locally and get our ingredients as affordable as possible, but we want to make sure that you're getting the best quality food.",
        headerBenefit3: "We have multiple ways for you to get our goods.",
        // Add to end of 3Ex when we are no longer a cottage food operation
        // And soon, you'll be able to find our goods at grocery stores and coffee shops near you.
        headerBenefit3Ex: "Don't let us not having a store front yet stop you from ordering our amazing pastries! We have pickup/carry out options and we'll deliver almost anywhere in the Vegas Valley. We even have our products at Farmer's Markets from time to time!",
        headerWholesaleTitle: "Let us provide you with quality products!",
        headerWholesaleDescript: "If you have a business that would benefit from selling baked goods, we'd love to help you provide that to your customers. We already provide a variety of baked goods for wholesale, but we also do customizations. Let's work together to find something that's perfect for your business.",
    },
    aboutUs: {
        missionTagline: "We've opened up our home in Vegas to bring you all fresh and traditional baked goods.",
        missionDescript: "We're Vegas locals that want to bring our heritage to an affordable level for everyone. That's why we're opening our home and using our own French knowledge to make these baked goods for everyone in Vegas. ",
        // Change mission descript 2 to the below string when we are no longer a cottage food operation
        // We don't have a store-front yet but you might be able to find us soon at a coffeshop or grocery store near you, or you can order directly from us!
        missionDescript2: "We don't have a store-front yet but you can order directly from us!",
        service1: "Small Batch Orders",
        service1Ex: "For a small group of friends or your family",
        service2: "Catering",
        service2Ex: "For when we can all throw parties again and for events",
        // service3: "Wholesale",
        // service3Ex: "For businesses that sell meals or snacks",
        service4: "Pick-up / Carryout",
        service5: "Deliveries",
        service6: "Online Ordering via Facebook or Website",
        giveBack1: "Teach bakery classes for the community",
        giveBack2: "Getting our ingredients from local sources",
        giveBack3: "Bringing fresh, tasty, healthy, handcrafted goods to an affordable level for everyone.",
        giveBack4: "Giving opportunities to other minorities to come work with us.",
        actionTitle: "Have any other questions?",
        actionDescript: "We'd be happy to answer them! You can click the link below to go to our contact form or you can message us on Facebook.",
        //the orders need to have a link and a link name associated with them
        order1: "Message us on ",
        order1Link: "https://www.facebook.com/ArtisanBakeries/",
        order1LinkName: "Facebook",
        order2: "Use this ",
        order2Link: "/Order",
        order2LinkName: "Order Form",
        order3: " (info@artisanbakeriesusa.com)",
        order3Link: "/Contact",
        order3LinkName: "Email us",
        orderExtraInfo: "When you order, please give us at least three days notice and ask about the minimum order requirements for the items you're interested in.",
        //You'll have to enter the contact info on About.js
    },
    contactUs: {
        overallDescript: "Send us an email with the Contact Form or check out our Facebook page below.",
        formDescript: {
            line1: "This form will help craft an email to info@artisanbakeriesusa.com. ",
            line2: "Once you fill out the form it will open up your default mail app and fill everything out for you. ",
            line3: "You'll just have to press send!"
        },
        formSubjects: {
            caterInquiry: "CateringInquiry-",
            // wholesaleInquiry: "WholesaleInquiry-",
            customizationInquiry: "CustomizationInquiry-",
            otherInquiry: "",
        },
        fbSectionDescript: "Here you can message us and check out our posts and events for new specialities and promos.",
        phone: " (702) 475-3415",
        email: " info@artisanbakeriesusa.com",
        email2: " partnerships@artisanbakeriesusa.com",
        facebookLink: "https://www.facebook.com/ArtisanBakeries",
        facebookLinkText: "Chocolatine Artisan Bakeries",
        hours: " Mon-Sun: 8 AM - 7 PM",
        delivery: " Delivery and ",
        carryout: " Carryout Available",
        address: " 8515 Iron Mountain Rd, Las Vegas NV 89143",

    },
    menu: {
        topNotes: {
            note1: {
                firstPart: "To see the options and ordering info for each type of ordering style click on the button below for the small batch menu or the catering menu. ",
            },
            note2: {
                firstPart: "* Our food can be made gluten free or low sugar if needed! ",
                linkText: "Message us",
                link: "/Contact",
                secondPart: " to see what we can do."
            },
        },
        bottomNotes: {
            note1: {
                firstPart: "* Our food is made in a cottage food operation that is not subject to government food safety inspection."
            },
            note2: {
                firstPart: "* Our food is made in the same area as nut products and gluten products. Please,",
                linkText: " message us",
                link: "/Contact",
                secondPart: " if you need your food prepared in a different way.",
            }
        },
        monthlySpecials: {

        },
        smallBatch: {
            sizing: {
                sm: "2 packs",
                med: "6 packs",
                lg: "12 packs"
            },
            description: "Best for a small group or just yourself ;)",
            orderInfo: {
                line1: "We have three different sizes so you can find the one that best fits your needs.",
                line2: "You can order more than one count of a certain size order, like two small orders of chocolate croissants.",
                line3: "Delivery or pick up happens on Friday and Monday. Let us know which day you need your order on and at what time."
            },
            savory: {
                croissantBased: {
                    Butter: {
                        name: "Butter Croissant",
                        pack: "Pack of 1",
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
                        pack: "Pack of 1",
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
                        pack: "Pack of 1",
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
                        pack: "Pack of 10",
                        price: {
                            sm:"$7.60",
                            med: "$22.80",
                            lg: "$45.60"
                        },
                        description: "Snack size croissant sticks with a seasoning on top. It's perfect to accompany your tea or coffee or even as a snack on its own!",
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
                        pack: "Pack of 1",
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
                        pack: "Pack of 1",
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
                        pack: "Pack of 1",
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
                        pack: "Pack of 1",
                        price: {
                            sm:"$8.00",
                            med: "$24.00",
                            lg: "Not Available Yet"
                        },
                        description: "A soft, buttery loaf. It's perfect for sandwiches or even french toast.",
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
                        pack: "Pack of 1",
                        price: {
                            sm:"$11.00",
                            med:"$33.00",
                            lg: "Not Available Yet"
                        },
                        description: "A soft, buttery loaf. It's perfect for sandwiches or even french toast.",
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
                        pack: "Pack of 1",
                        price: {
                            sm:"$15.00",
                            med:"$45.00",
                            lg: "Not Available Yet"
                        },
                        description: "A soft, buttery loaf. It's perfect for sandwiches or even french toast.",
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
                    ShortBread: {
                        name: "Savory Shortbread Cookies",
                        pack: "Pack of 5",
                        price: {
                            sm: "$4.00",
                            med: "$12.00",
                            lg: "$24.00",
                        },
                        description: "Savory shortbread cookies that work great with your meals or as a snack.",
                        shortIngredient: "Contains: wheat, dairy (butter, cheese)",
                        longIngredient: "Butter, Flour, Sugar, Thyme (fresh and dried) or Basil (fresh and dried), Merlot Bellavitano Cheese or Apricot Stilton",
                        option1: {
                            title: "Flavors",
                            choices: {
                                one: "Merlot Cheese and Thyme",
                                two: "Apricot Stilton and Basil"
                            }
                        }
                    },
                }
            },
            sweet: {
                croissantBased: {
                    Almond: {
                        name: "Almond Croissant",
                        pack: "Pack of 1",
                        price: {
                            sm: "$6.50",
                            med: "$19.50",
                            lg: "$39.00",
                        },
                        description: "A croissant filled with almond cream and topped with toasted almonds.",
                        shortIngredient: "Contains: wheat, dairy (milk, butter), tree nuts",
                        longIngredient: "Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water, Almond Extract (Water, Alcohol, and Oil of Bitter Almond), Vanilla Extract (Water, Natural Vanilla Extract, Ethyl Alcohol, Fructose), Almond Slices",
                    },
                    Chocolate: {
                        name: "Chocolate Croissant",
                        pack: "Pack of 1",
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
                        name: "Chocolate Twists",
                        pack: "Pack of 1",
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
                        name: "Small Nutella Loaf",
                        pack: "Pack of 1",
                        price: {
                            sm: "$3.00",
                            med: "$9.00",
                            lg: "$18.00",
                        },
                        description: "A beautiful brioche loaf filled with nutella.",
                        shortIngredient: "Contains: wheat, dairy (milk, eggs, butter), tree nuts",
                        longIngredient: "Wheat Flour, Water, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Dough conditioner (Vegetable Gums - Arabic Gum, Guar Gum - Wheat Flour, Enzymes), Yeast, Nutella (Sugar, Palm Oil, Skim Milk, Cocoa, Soy, Lecithin as Emulsifier, Vanillin, Hazelnuts)",
                    },
                    FruitLoaf: {
                        name: "Small Fruit Loaf",
                        pack: "Pack of 1",
                        price: {
                            sm: "$3.00",
                            med: "$9.00",
                            lg: "$18.00",
                        },
                        description: "A beautiful brioche loaf filled with dried fruits that depend on the season.",
                        shortIngredient: "Contains: wheat, dairy (milk, eggs, butter), tree nuts",
                        longIngredient: "Wheat Flour, Water, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), Salt, Dough conditioner (Vegetable Gums - Arabic Gum, Guar Gum - Wheat Flour, Enzymes), Yeast, Dried Fruits",
                    },
                },
                other: {
                    // crepes: {
    
                    // },
                    Financiers: {
                        name: "Financiers",
                        pack: "Pack of 1",
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
                        pack: "Pack of 5",
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
                    ShortBread: {
                        name: "Shortbread Cookies (Pack of 5)",
                        pack: "Pack of 5",
                        price: {
                            sm: "$4.00",
                            med: "$12.00",
                            lg: "$24.00",
                        },
                        description: "Shortbread cookies that work great as a dessert or as a snack.",
                        shortIngredient: "Contains: wheat, dairy (butter), honey",
                        longIngredient: "Butter, flour, sugar, lavendar, local honey",
                        option1: {
                            title: "Flavors",
                            choices: {
                                one: "Lavender and Local Honey",
                            }
                        }
                    },
                }
            },
            specialOrder: {
                info: "For these items, size small is 6 items, size medium is 12 items, and size large is 24 items. Please order 5 days in advance! ",
                items: {
                    TartsTurnovers: {
                        name: "Tarts and Turnovers",
                        pack: "Pack of 1",
                        price: {
                            sm: "$6.00",
                            med: "$18.00",
                            lg: "$36.00",
                        },
                        description: "We offer either open-faced tarts or sealed turnover with various fillings!",
                        shortIngredient: "Contains: wheat, dairy, soy, tree nuts",
                        longIngredient: "Enriched Wheat Flour (niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), Malted Barley Flour, Water, Butter (pasteurized cream), Ascorbic acid as dough conditioner, Shortening (Palm oil, Beta carotene - color - Water, Vital Gluten), Salt, Almond Extract (Water, Alcohol and Oil of Bitter Almond),  Vanilla Extract (Water, Natural Vanilla Extract, Ethyl Alcohol, Fructose)",
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
                    Muffins: {
                        name: "Muffins",
                        pack: "Pack of 1",
                        price: {
                            sm: "$3.00",
                            med: "$9.00",
                            lg: "$18.00",
                        },
                        description: "We offer either open-faced tarts or sealed turnover with various fillings!",
                        shortIngredient: "Contains: wheat, soy",
                        longIngredient: "Wheat Flour, Baking Powder (Corn Starch, Sodium Bicarbonate, Sodium Aluminum Sulfate, Monocalcium Phosphate), Salt, Sugar, Canola oil, Chocolate Powder (Cocoa), Chocolate Chips (Sugar, Cocoa Butter, Soy Lecithin, Natural Vanilla Extract) or Cherries, or Blueberries, or Apples",
                        option1: {
                            title: "Flavors",
                            choices: {
                                one: "Chocolate Chip",
                                two: "Chocolate",
                                three: "Blueberries",
                                four: "Apple",
                            },
                        }
                    },
                    // Cakes: {
        
                    // },
                    // Phyllo: {
        
                    // }
                },
                
            }
        },
        cateringInfo: {
            sizing: {
                sm: "12 of each item in combo",
                lg: "24 of each item in combo",
            },
            description: "For those small gatherings or parties you want to have",
            orderInfo: {
                line1: "Each section below will give you combo options. It will explain what choices of items come with each combo.",
                line2: "The sizing determines how many of each item you get in the combo but you can order as many combos as necessary to have enough for your gathering.",
                line3: "Please contact us if there's something you'd like to have in your combo that isn't listed. Click on the Contact button in the navigation bar."
            },
            cateringMenu: {
                breakfast: {
                    description: "Please pick one of the sizes below and then choose 3 items below. It can be the same item if you want or it can be 3 different items.",
                    choices: {

                    }
                },
                lunchDinner: {
                    description: "",
                    choices: {

                    }
                },
                sides: {
                    description: "",
                    choices: {

                    }
                },
                desserts: {
                    description: "",
                    choices: {

                    }
                }
            },
        },
        shipping: {
            sizing: {
                sm: "12 packs",
            },
            shippingTypes: {
                baked: "Fully baked but sent frozen",
                unbaked: "Unbaked goods sent frozen for you to proof and bake",
                both: "A set of both fully baked frozen goods and unbaked frozen goods"
            },
            description: "Best for a small group or just yourself in you're not in Vegas!",
            orderInfo: {
                line1: "For the trial period we only have one size!",
                line2: "However, we have different types of shipping methods to choose from: Fully baked goods that are frozen and shipped to you, Unbaked frozen goods that you can back yourself, or a combination of both!",
                line3: "We'll ship these items on the nearest Monday to ensure the items will get to you in a timely fashion but we can't guarentee it will arrive on a specific day",
                line4: "For this trial period, each pack is only $5! The only thing we ask from you is that you fill out a feedback form telling us if our products made it, how easy it was to prepare them to it, and if you liked our food."
            },
        },
        wholesale: {
            OrderInfo: "Select the menu items you're interested in and we'll discuss pricing and creation options.",
            
        },
        

    },
    order: {
        topNotes: {
            note1: {
                firstPart: "Review your order down below and then input your information and choose your payment method.",
            },
            note2: {
                firstPart: "You can delete items in the review section but to add a new item plese go back to the Menu.",
            },
            note3: {
                firstPart:"Make sure to click the 'Place Order' button to submit your order and don't hesitate to contact us if there are any issues.",
            },
        },
        bottomNotes: {
            note1: {
                firstPart: "* If you order is over 50 dollars, you automatically get 5% off! *",
            },
            note2: {
                firstPart: "* 3% added to the total of online payments to cover electronic fees *",
            },
        },
    }
}

export default bakeryInfo