/* =========================================================
   TOURS — every tour on the website comes from this list.

   To ADD a tour: copy one { ... } block, paste it at the end,
   give it a new unique "id" (lowercase, dashes, no spaces)
   and change the text. It will appear on the Tours page and
   get its own page at tour.html?id=<your-id> automatically.

   To REMOVE a tour: delete its { ... } block.
   To feature a tour on the home page: set featured: true.
   Fields you don't need (duration, days, times, groupSize,
   itinerary, addons, notes, gallery, videos) can be left out.
   Photos live in assets/img/. Videos (optional) live in assets/video/.
   ========================================================= */
window.TOURS = [
  {
    id: "tea-farm-tour",
    featured: true,
    title: "Tea Farm Tour",
    category: "Farm",
    image: "assets/img/tea-pickers.jpg",
    summary:
      "A morning on the farm: breakfast, the tea nursery and fields, planting, a picking masterclass and our famous Riara iced tea.",
    duration: "2.5 hours",
    times: "10:00 AM – 12:30 PM",
    languages: "English & Kiswahili",
    priceFrom: "KES 2,500",
    prices: [
      ["Kenyan resident", "KES 2,500"],
      ["International adult, with lunch", "US$45"],
      ["International adult, without lunch", "US$35"],
      ["Children under 12", "US$10"],
    ],
    intro:
      "Follow tea from seedling to cup. You'll see young plants in our nursery and mature bushes in the field, learn to plant and pick tea from the people who do it every day, and visit our packing facility where Riara Tea is packed.",
    itinerary: [
      ["10:00 AM", "Arrival and welcome with tea and a small pancake breakfast"],
      ["", "Briefing on the day's activities and what to look out for on the farm"],
      ["", "Tea tour: from seedlings in the nursery to mature plants in the tea field"],
      ["", "Tea planting: learn how to build a nursery and care for tea plants"],
      ["", "Plant a tea seedling of your own (optional)"],
      ["", "Tea picking masterclass with a skilled tea picker"],
      ["", "Visit our tea packing facility and buy our own Riara Tea"],
      ["", "Back to the garden for questions"],
      ["", "Presentation of the famous Riara iced tea"],
      ["12:30 PM", "Departure"],
    ],
    includes: [
      "Welcome tea and pancake breakfast",
      "Guided tour of the tea nursery and fields",
      "Tea planting lesson and your own seedling to plant",
      "Tea picking masterclass",
      "Visit to our tea packing facility",
      "Riara iced tea",
    ],
    addons: ["Farm-to-table lunch (included in the international \"with lunch\" price)", "Dog walk with our farm dogs: KES 1,000"],
    gallery: ["assets/img/tea-valley.jpg", "assets/img/guided-field-visit.jpg", "assets/img/tea-fields.jpg"],
  },

  {
    id: "tea-factory-tour",
    featured: true,
    title: "Tea Factory Tour",
    category: "Factory",
    image: "assets/img/factory-visitors.jpg",
    summary:
      "A guided tour of Maramba Tea Factory, then our farm: plant your own tea tree, taste our teas and finish with a barbecue lunch.",
    days: "Tuesday – Saturday",
    times: "9:00 AM start",
    groupSize: "3 – 20 people",
    languages: "English & Kiswahili",
    priceFrom: "US$75",
    prices: [
      ["Adult", "US$75"],
      ["Child", "US$25"],
      ["Children under 2", "Free"],
      ["Groups of 5 or more adults", "Children go free"],
    ],
    intro:
      "See the whole journey of tea in one day. Start at Maramba Tea Factory, where a guide shows you how green leaf is processed and packed. Then come to Riara Farm to get your hands in the soil, plant a tea tree of your own, and relax over a tasting and lunch in the garden.",
    itinerary: [
      ["9:00 AM", "Arrive at Maramba Tea Factory for a guided tour of tea processing, from the arrival of the green leaf to the packing of the finished tea"],
      ["", "Tea tour of Riara Farm: learn how tea is planted and grown and try some of the farm work"],
      ["", "Plant your personal tea seedling, labelled with your name. It will never be pruned, so it can grow into a full tea tree"],
      ["", "Visit our tea packing facility, enjoy a tea tasting ceremony and buy our own Riara Tea"],
      ["", "Barbecue lunch in the garden"],
    ],
    includes: [
      "Guided tour of Maramba Tea Factory",
      "Guided tour of Riara Farm",
      "Your own tea tree, planted and labelled with your name",
      "Tea tasting ceremony",
      "Barbecue lunch in the garden",
    ],
    addons: ["Dog walk with our farm dogs: KES 1,000"],
    notes: [
      "Factory visits are arranged with Maramba Tea Factory management. We'll confirm your date when you book.",
      "The factory is open to visitors at 9:00 AM, Tuesday to Saturday.",
      "Minimum 3 people and maximum 20 per tour. Smaller groups can still book at an extra cost.",
      "Please book at least 48 hours ahead. A non-refundable deposit of half the total confirms your booking.",
    ],
    gallery: ["assets/img/factory-floor-wide.jpg", "assets/img/factory-machines.jpg", "assets/img/factory-drying-fan.jpg", "assets/img/factory-floor.jpg", "assets/img/tea-grading.jpg", "assets/img/tea-tasting.jpg"],
    videos: [
      { src: "assets/video/factory-rolling.mp4", poster: "assets/video/factory-rolling-poster.jpg", caption: "Fresh leaf moving through the rolling machines" },
      { src: "assets/video/factory-sorting.mp4", poster: "assets/video/factory-sorting-poster.jpg", caption: "The factory floor during production" },
    ],
  },

  {
    id: "school-student-tour",
    featured: true,
    title: "School & Student Tour",
    category: "Education",
    image: "assets/img/tea-shoots.jpg",
    summary:
      "The full farm experience for students: tea, the milk parlour, the sheep shed and the avocado orchard.",
    times: "Arrival at 10:00 AM",
    languages: "English & Kiswahili",
    priceFrom: "KES 1,000",
    prices: [["Per student", "KES 1,000"]],
    intro:
      "A day of learning on a working farm. Students get the full tour experience and an in-depth explanation of how every part of the farm works, from tea to dairy, sheep and avocados.",
    itinerary: [
      ["10:00 AM", "Arrival at the farm"],
      ["", "Full tea tour experience"],
      ["", "In-depth explanation of all farm functions"],
      ["", "Visit the milk parlour"],
      ["", "Visit the sheep shed"],
      ["", "Visit the avocado orchard"],
    ],
    includes: [
      "Full tea tour experience",
      "In-depth explanation of all farm functions",
      "Milk parlour visit",
      "Sheep shed visit",
      "Avocado orchard visit",
    ],
    notes: ["Contact us to arrange a date for your school or class."],
    gallery: ["assets/img/tea-flower.jpg", "assets/img/guided-field-visit.jpg", "assets/img/tea-fields.jpg"],
  },

  {
    id: "avocado-tour",
    featured: true,
    title: "Avocado Orchard Tour",
    category: "Orchard",
    image: "assets/img/banner-farm-path.jpg",
    summary:
      "A guided walk through our avocado orchard with a local agronomist, fruit picking when in season, and lunch.",
    languages: "English & Kiswahili",
    priceFrom: "US$25",
    prices: [["Per person", "US$25"]],
    intro:
      "Discover the other crop growing at Riara. A local agronomist walks you through the orchard and explains how avocados are grown, and when the fruit is in season you can join a picking masterclass. The tour ends with a farm-to-table lunch.",
    includes: [
      "Guided tour of the orchard by a local agronomist",
      "Avocado picking masterclass when the fruit is in season",
      "Farm-to-table lunch",
    ],
    addons: ["Dog walk with our farm dogs: KES 1,000"],
    gallery: ["assets/img/indigenous-forest.jpg", "assets/img/farmhouse.jpg"],
  },
];
