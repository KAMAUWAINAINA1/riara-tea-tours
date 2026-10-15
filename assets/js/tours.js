/* =========================================================
   TOURS — every tour on the website comes from this list.

   To ADD a tour: copy one { ... } block, paste it at the end,
   give it a new unique "id" (lowercase, dashes, no spaces)
   and change the text. It will appear on the Tours page and
   get its own page at tour.html?id=<your-id> automatically.

   To REMOVE a tour: delete its { ... } block.
   To feature a tour on the home page: set featured: true.
   Photos live in assets/img/.
   ========================================================= */
window.TOURS = [
  {
    id: "tea-farm-tour",
    featured: true,
    title: "Tea Farm Tour",
    category: "Farm",
    image: "assets/img/tea-pickers.jpg",
    summary:
      "A guided walk through our tea fields, the story of how Kenyan tea is made, and a tasting of our teas.",
    duration: "1.5 – 2 hours",
    days: "Monday – Saturday",
    times: "10:00 AM or 2:00 PM",
    languages: "English & Kiswahili",
    priceFrom: "KES 1,200",
    prices: [
      ["Kenyan resident (adult)", "KES 1,200"],
      ["Student (valid ID, weekdays)", "KES 1,000"],
      ["International visitor (adult)", "KES 3,500 (≈ US$25)"],
    ],
    intro:
      "Our simplest way to experience Riara. Walk the rows with a guide, hear how a leaf becomes the tea in your cup, then sit down to taste some of our teas. A good choice for short-stay travellers and first-time visitors.",
    includes: [
      "Guided walk through the tea fields",
      "A talk on Kenyan tea history and how tea is made",
      "Tasting of 2–3 premium teas",
      "Time for photos at the farm's best viewpoints",
    ],
    notes: [
      "Transport, meals and shop purchases are not included.",
      "The factory floor is not part of this tour. Choose the Tea Factory Tour for that.",
      "Please book at least 24 hours ahead. M-Pesa accepted.",
    ],
    gallery: ["assets/img/tea-valley.jpg", "assets/img/guided-field-visit.jpg", "assets/img/tea-fields.jpg"],
  },

  {
    id: "tea-factory-tour",
    featured: true,
    title: "Tea Factory Tour",
    category: "Factory",
    image: "assets/img/tea-grading.jpg",
    summary:
      "Go behind the scenes to watch the machines at work, from withering to grading, then taste and shop at factory prices.",
    duration: "About 2 – 3 hours",
    days: "Monday – Saturday",
    times: "By booking",
    languages: "English & Kiswahili",
    priceFrom: "KES 2,000",
    prices: [
      ["Adult (13+ years)", "KES 2,000"],
      ["Child (6–12 years)", "KES 1,000"],
      ["Student (valid ID)", "KES 1,200"],
      ["Family (2 adults + 2 children)", "KES 4,500"],
      ["International visitor (adult)", "From US$55"],
      ["Transport from Nairobi (return)", "From KES 3,500"],
    ],
    intro:
      "See how fresh leaf becomes finished tea on a working factory floor. Your guide takes you through each stage while the machines run, then you taste black, green and wellness teas and can visit the factory shop.",
    includes: [
      "Factory walkthrough covering withering, rolling, oxidation, drying, sorting and grading",
      "Handling the leaf at each stage of production",
      "Guided tasting of black, green and wellness teas",
      "Factory shop visit with discounted teas and gifts",
    ],
    addons: [
      "Stroll through the tea gardens",
      "Storytelling with our farmers",
      "Tree planting, ideal for CSR and community groups",
      "Traditional Kenyan tea preparation demonstration",
    ],
    notes: [
      "Please book at least 48 hours ahead.",
      "A 50% deposit by M-Pesa or bank transfer confirms your booking.",
    ],
    gallery: ["assets/img/tea-grading-tall.jpg", "assets/img/tea-tasting.jpg", "assets/img/guests-in-tea-field.jpg"],
  },

  {
    id: "group-corporate-tour",
    featured: true,
    title: "Group & Corporate Tour",
    category: "Groups",
    image: "assets/img/visitors-group.jpg",
    summary:
      "An outing for company teams, chamas, SACCOs, churches and friends, with group rates and optional add-ons.",
    duration: "About 2.5 hours (or a full day with add-ons)",
    days: "Daily, on request",
    times: "Flexible",
    languages: "English & Kiswahili (others by arrangement)",
    priceFrom: "KES 2,500 pp",
    prices: [
      ["10–19 people", "KES 2,800 per person"],
      ["20–49 people", "KES 2,500 per person"],
      ["50+ people", "Custom quote"],
      ["Children (6–12)", "KES 1,500"],
      ["International groups", "From US$65 per person"],
    ],
    intro:
      "Bring your team, chama, church group or friends for a day of learning and time together in the Limuru highlands. We adjust the day to suit your group.",
    includes: [
      "Full guided factory tour",
      "Q&A with our tea experts",
      "Guided tasting of our finest teas",
      "Factory shop visit at factory prices",
    ],
    addons: [
      "Tree planting for team-building or CSR",
      "Lunch in the garden",
      "Group photo session with printed souvenir",
      "Customised gift hampers",
    ],
    notes: [
      "Please book at least 48 hours ahead. Larger groups need more notice.",
      "We'll agree payment terms directly for large or corporate bookings.",
    ],
    gallery: ["assets/img/farmhouse-guests.jpg", "assets/img/guests-in-tea-field.jpg", "assets/img/farmhouse.jpg"],
  },

  {
    id: "school-student-tour",
    featured: true,
    title: "School & Student Tour",
    category: "Education",
    image: "assets/img/school-visit.jpg",
    summary:
      "A hands-on science and agribusiness lesson from field to factory that ties in with the curriculum.",
    duration: "1.5 – 3 hours",
    days: "Weekdays (Monday – Friday)",
    times: "10:00 AM or 2:00 PM",
    languages: "English & Kiswahili",
    priceFrom: "KES 1,000",
    prices: [
      ["Field tour (per student)", "KES 1,000"],
      ["Field + factory tour (per student)", "KES 1,200"],
      ["Classes of 10+ students", "Special group rate"],
    ],
    intro:
      "Students see agriculture, science and enterprise up close. They follow the leaf from the field to the factory floor and watch the physical and chemical changes at each step.",
    includes: [
      "The science of each stage: withering, rolling, oxidation, drying, grading",
      "Tea sorting challenge with expert guidance",
      "Q&A on sustainability, agribusiness and trade",
      "Tasting of different teas and their health benefits",
      "Material for school projects and reports",
    ],
    notes: [
      "Student rates need a valid student ID or school letter.",
      "We tailor the visit to your learning goals. Contact us for a quotation.",
    ],
    gallery: ["assets/img/students-tea-leaf.jpg", "assets/img/tea-grading.jpg", "assets/img/students-banner.jpg"],
  },

  {
    id: "family-tea-retreat",
    featured: true,
    title: "Family Tea Retreat",
    category: "Family",
    image: "assets/img/tea-picking-lesson.jpg",
    summary:
      "Picking and planting tea, blending your own family tea, nature walks, and juice and snacks for the kids.",
    duration: "Half day",
    days: "By booking",
    times: "Flexible",
    languages: "English & Kiswahili",
    priceFrom: "KES 6,000 / family",
    prices: [
      ["Kenyan family (up to 4 people)", "KES 6,000"],
      ["International family (up to 4 people)", "≈ US$95 / KES 12,000"],
      ["Larger families", "Ask us"],
    ],
    intro:
      "A relaxed day out in the green hills of Limuru for parents and children. It's hands-on, unhurried and great for the whole family.",
    includes: [
      "Tea picking and planting in the fields",
      "Make your own family tea blend to take home",
      "Gentle nature walk to spot native plants and birds",
      "Tea tasting for adults, with juice and snacks for kids",
      "A walk with our friendly farm dogs",
      "A family tea gift for international families",
    ],
    notes: [
      "Welcoming to children of all ages.",
      "A 50% advance payment confirms your booking.",
      "Bring comfortable shoes!",
    ],
    gallery: ["assets/img/tea-pickers.jpg", "assets/img/forest-walk.jpg", "assets/img/farmhouse.jpg"],
  },

  {
    id: "tea-wellness-retreat",
    featured: true,
    title: "Tea & Wellness Retreat",
    category: "Wellness",
    image: "assets/img/forest-walk.jpg",
    summary:
      "Slow down with nature walks, mindful tea tasting, blending workshops and meditation in our gardens.",
    duration: "Half day to full day",
    days: "By booking",
    times: "Flexible",
    languages: "English",
    priceFrom: "US$35",
    prices: [
      ["Kenyan resident (adult)", "From US$35. Ask for KES rate"],
      ["International adult", "US$55 – 75 / KES 7,000 – 10,000"],
      ["International group (10+)", "US$65 per person"],
    ],
    intro:
      "A calm escape to the farm. Walk the forest trails, taste our freshest teas, learn about tea rituals and find some quiet among the tea bushes. Good for solo travellers, couples and wellness groups.",
    includes: [
      "Guided nature walk through forest and tea trails",
      "Curated tasting of local and premium teas",
      "Hands-on blending workshop to make your own tea",
      "Mindfulness and meditation in the gardens",
      "Take-home Riara mug, your blend and a wellness brochure",
    ],
    addons: [
      "Iced and herbal tea service",
      "Premium tea pairings",
      "Massage and spa treatments",
      "Personalised tea gift kits",
    ],
    notes: ["Final price depends on the extras you choose.", "A 50% deposit confirms your booking."],
    gallery: ["assets/img/indigenous-forest.jpg", "assets/img/tea-tasting.jpg", "assets/img/tea-valley.jpg"],
  },
];
