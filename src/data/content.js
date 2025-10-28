// All preserved content from the original HTML site
// CRITICAL: This content must remain exactly as written

export const schoolInfo = {
  name: "Peninsula Tamil School",
  tagline: "Preserving Tamil language and culture for future generations in the Bay Area.",
  phone: "(650) 555-1234",
  email: "info@peninsulatamilschool.org",
  address: {
    venue: "Foster City Recreation Center",
    street: "1000 E Hillsdale Blvd",
    city: "Foster City",
    state: "CA",
    zip: "94404",
    full: "Foster City Recreation Center, 1000 E Hillsdale Blvd, Foster City, CA 94404"
  },
  schedule: {
    day: "Every Sunday",
    time: "10:00 AM - 12:30 PM",
    duration: "34 weeks (August through May)",
    students: "Students Pre-K to Grade 10",
    welcome: "All levels welcome"
  },
  social: {
    facebook: "https://www.facebook.com/PeninsulaTamilSchool",
    instagram: "https://www.instagram.com/pts_insta1920"
  },
  enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSfQ6O7ydiFo1bh2ZIqwGIx3y5PSgqBSkko5rilFHKRp6nHn9Q/viewform",
  nonprofit: {
    status: "501(c)(3) Nonprofit Organization",
    ein: "45-5506063"
  }
};

export const heroContent = {
  title: "Welcome to Peninsula Tamil School",
  subtitle: "Preserving Tamil Language and Culture for Future Generations",
  primaryCTA: "Enroll Now",
  secondaryCTA: "Learn More"
};

export const missionContent = {
  title: "Our Mission",
  text: "Peninsula Tamil School is a volunteer-driven, nonprofit organization dedicated to helping children and adults learn Tamil language and explore Indian culture. We have been serving the San Francisco Bay Area community for over 17 years, providing quality Tamil education every Sunday at Foster City Recreation Center."
};

export const quickInfoCards = [
  {
    title: "About Us",
    description: "Learn about our history, mission, and the dedicated volunteers who make Tamil education accessible to our community.",
    linkText: "Learn More",
    linkUrl: "/about"
  },
  {
    title: "Classes",
    description: "Explore our grade-level curriculum from Pre-K through Grade 10, with classes every Sunday morning.",
    linkText: "View Classes",
    linkUrl: "/classes"
  },
  {
    title: "Enrollment",
    description: "Ready to join? Register your child for Tamil classes and become part of our vibrant learning community.",
    linkText: "Register Now",
    linkUrl: schoolInfo.enrollmentLink,
    external: true
  }
];

export const upcomingEvents = [
  {
    month: "JAN",
    day: "21",
    title: "PTS Pongal & Teacher Appreciation",
    description: "Celebrate Pongal with traditional cooking, performances, and honor our dedicated teachers!"
  },
  {
    month: "APR",
    day: "14",
    title: "Annual Day",
    description: "Our biggest celebration with student performances, cultural programs, and awards ceremony!"
  }
];

export const aboutContent = {
  pageTitle: "About Peninsula Tamil School",
  pageSubtitle: "Preserving Tamil Heritage Through Education",
  story: {
    title: "Our Story",
    paragraphs: [
      "Peninsula Tamil School was established over 17 years ago to serve the Tamil-speaking community in the San Francisco Bay Area. What began as a small group of families committed to passing on their linguistic and cultural heritage has grown into a thriving educational institution serving students each year.",
      "Our school operates on a volunteer-driven model, with dedicated parents, educators, and community members contributing their time and expertise to ensure that future generations maintain a strong connection to Tamil language, literature, and culture.",
      "Located at Foster City Recreation Center, we conduct classes every Sunday, providing a consistent and structured learning environment for students from Pre-Kindergarten through Grade 10."
    ]
  },
  mission: {
    title: "Our Mission",
    text: "To provide quality Tamil language education and foster appreciation for Indian cultural heritage among children and adults in the Peninsula area through dedicated volunteer instruction and community engagement."
  },
  offerings: {
    title: "What We Offer",
    items: [
      "Structured curriculum from Pre-K through Grade 10",
      "Experienced volunteer teachers with Tamil language expertise",
      "Language learning combined with cultural education",
      "Regular community events and celebrations",
      "Convenient Sunday classes",
      "Annual showcase of student learning",
      "Family involvement opportunities",
      "Affordable fees"
    ]
  },
  joinCommunity: {
    title: "Join Our Community",
    text: "Whether you're seeking Tamil language education for your children or interested in volunteering, we welcome you to join the Peninsula Tamil School community."
  }
};

export const classesContent = {
  pageTitle: "Our Classes",
  pageSubtitle: "Tamil language education for all ages and levels",
  intro: "Our curriculum is designed to provide comprehensive Tamil language education from Pre-Kindergarten through Grade 10. Each level focuses on age-appropriate learning objectives that build upon previous knowledge.",
  levels: [
    {
      name: "Pre-K & Kindergarten",
      description: "Introduction to Tamil letters, basic vocabulary, and cultural stories through fun activities and games."
    },
    {
      name: "Grades 1-3",
      description: "Building reading and writing skills, expanding vocabulary, and learning simple grammar structures."
    },
    {
      name: "Grades 4-6",
      description: "Developing fluency in reading and writing, understanding grammar rules, and exploring Tamil literature."
    },
    {
      name: "Grades 7-10",
      description: "Advanced Tamil literature, poetry, essay writing, and deeper exploration of Tamil culture and history."
    }
  ],
  schedule: {
    title: "Class Schedule",
    when: "Every Sunday, 10:00 AM - 12:30 PM",
    where: "Foster City Recreation Center, 1000 E Hillsdale Blvd, Foster City, CA 94404",
    duration: "34 weeks (August through May)"
  },
  expectations: {
    title: "What to Expect",
    items: [
      "Interactive lessons with experienced teachers",
      "Age-appropriate learning materials",
      "Regular assessments and progress reports",
      "Cultural activities and events",
      "Opportunities for student performances"
    ]
  }
};

export const eventsData = [
  {
    date: { month: "AUG", day: "20" },
    title: "First Day of PTS",
    time: "Sunday, August 20, 2023",
    location: "Foster City Recreation Center",
    description: "Welcome back! The 2023-2024 academic year begins. Meet your teachers and classmates!",
    featured: true
  },
  {
    date: { month: "SEP", day: "03" },
    title: "Labor Day Holiday",
    time: "Sunday, September 3, 2023",
    description: "No classes - Labor Day Holiday",
    featured: false
  },
  {
    date: { month: "OCT", day: "01" },
    title: "Fall Break Holiday",
    time: "Sunday, October 1, 2023",
    description: "No classes - Fall Break",
    featured: false
  },
  {
    date: { month: "OCT", day: "29" },
    title: "First Test",
    time: "Sunday, October 29, 2023",
    location: "Foster City Recreation Center",
    description: "First semester assessment for all students",
    featured: false
  },
  {
    date: { month: "NOV", day: "12" },
    title: "Deepavali Holiday",
    time: "Sunday, November 12, 2023",
    description: "No classes - Deepavali (Festival of Lights)",
    featured: false
  },
  {
    date: { month: "NOV", day: "19" },
    title: "PTS Deepavali Game Day",
    time: "Sunday, November 19, 2023 | 10:00 AM - 2:00 PM",
    location: "Foster City Recreation Center",
    description: "Special celebration with traditional games, activities, and cultural performances for Deepavali!",
    featured: true
  },
  {
    date: { month: "NOV", day: "26" },
    title: "Thanksgiving Holiday",
    time: "Sunday, November 26, 2023",
    description: "No classes - Thanksgiving Holiday",
    featured: false
  },
  {
    date: { month: "DEC", day: "17" },
    title: "Winter Break Hold",
    time: "December 17, 24, 31, 2023",
    description: "No classes during winter break (3 weeks)",
    featured: false
  },
  {
    date: { month: "JAN", day: "14" },
    title: "Pongal Holiday",
    time: "Sunday, January 14, 2024",
    description: "No classes - Pongal (Tamil Harvest Festival)",
    featured: false
  },
  {
    date: { month: "JAN", day: "21" },
    title: "PTS Pongal & Teacher Appreciation",
    time: "Sunday, January 21, 2024 | 10:00 AM - 2:00 PM",
    location: "Foster City Recreation Center",
    description: "Celebrate Pongal with traditional cooking, performances, and honor our dedicated teachers!",
    featured: true
  },
  {
    date: { month: "FEB", day: "18" },
    title: "President Day Holiday",
    time: "Sunday, February 18, 2024",
    description: "No classes - President's Day",
    featured: false
  },
  {
    date: { month: "MAR", day: "03" },
    title: "Second Test",
    time: "Sunday, March 3, 2024",
    location: "Foster City Recreation Center",
    description: "Second semester assessment for all students",
    featured: false
  },
  {
    date: { month: "MAR", day: "31" },
    title: "Spring Break Holiday",
    time: "Sunday, March 31, 2024",
    description: "No classes - Spring Break",
    featured: false
  },
  {
    date: { month: "APR", day: "14" },
    title: "Annual Day",
    time: "Sunday, April 14, 2024 | 2:00 PM - 6:00 PM",
    location: "Foster City Community Theater",
    description: "Our biggest celebration! Student performances, cultural programs, awards ceremony, and community gathering. All families invited!",
    featured: true
  },
  {
    date: { month: "MAY", day: "19" },
    title: "Final Test",
    time: "Sunday, May 19, 2024",
    location: "Foster City Recreation Center",
    description: "Final assessment for all students - End of year evaluation",
    featured: false
  },
  {
    date: { month: "MAY", day: "26" },
    title: "Graduation Day",
    time: "Sunday, May 26, 2024 | 2:00 PM - 5:00 PM",
    location: "Foster City Community Theater",
    description: "Celebrating our graduating students! Certificate distribution, recognition ceremony, and farewell performances. Join us in honoring our students' achievements!",
    featured: true
  }
];

export const galleryImages = [
  {
    src: "/images/tamil_1.webp",
    alt: "Tamil cultural performance",
    title: "Annual Day Performance",
    description: "Traditional Tamil dance by our students"
  },
  {
    src: "/images/tamil_3.webp",
    alt: "Tamil classroom",
    title: "Interactive Learning",
    description: "Students engaged in Tamil language activities"
  },
  {
    src: "/images/tamil_4.webp",
    alt: "Tamil cultural event",
    title: "Cultural Celebration",
    description: "Community gathering for Tamil festival"
  },
  {
    src: "/images/banner_1.webp",
    alt: "Tamil school event",
    title: "Pongal Celebration",
    description: "Traditional Tamil harvest festival"
  }
];

export const contactContent = {
  pageTitle: "Contact Us",
  pageSubtitle: "Get in touch with Peninsula Tamil School",
  getInTouch: "Get In Touch",
  contactCards: [
    {
      icon: "location",
      title: "Location",
      lines: [
        "Foster City Recreation Center",
        "1000 E Hillsdale Blvd",
        "Foster City, CA 94404"
      ]
    },
    {
      icon: "email",
      title: "Email",
      lines: ["info@peninsulatamilschool.org"]
    },
    {
      icon: "phone",
      title: "Phone",
      lines: ["(650) 555-1234"]
    },
    {
      icon: "clock",
      title: "Class Hours",
      lines: ["Sundays: 10:00 AM - 12:30 PM", "August through May"]
    }
  ],
  enrollment: {
    title: "Enrollment",
    text: "Ready to enroll your child in our Tamil language program? Click the button below to fill out our enrollment form."
  },
  questions: {
    title: "Questions?",
    text: "If you have any questions about our programs, registration, or anything else, please don't hesitate to reach out. We typically respond to emails within 24-48 hours."
  }
};
