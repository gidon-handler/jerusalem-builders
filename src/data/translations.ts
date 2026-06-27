export type Lang = 'en' | 'he'

export const t = {
  en: {
    dir: 'ltr' as const,
    companyName: 'Jerusalem Builders',
    companyTagline: 'Building the Future of Jerusalem',
    companyDesc:
      'Premium construction and renovation services in Jerusalem. We bring decades of expertise to every project — from luxury interiors to fortified safe rooms.',
    contactCta: 'Get a Free Quote',
    learnMore: 'Learn More',
    viewProject: 'View Project',
    nav: {
      home: 'Home',
      interior: 'Interior',
      exterior: 'Exterior',
      safeRooms: 'Safe Rooms',
      capsuleHomes: 'Capsule Homes',
      contact: 'Contact',
    },
    stats: [
      { value: '25+', label: 'Years Experience' },
      { value: '300+', label: 'Projects Completed' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '15+', label: 'Industry Awards' },
    ],
    categories: {
      interior: {
        id: 'interior',
        name: 'Interior Design',
        desc: 'Transform your living spaces with our expert interior design and renovation services. We blend modern aesthetics with Jerusalem\'s timeless character.',
      },
      exterior: {
        id: 'exterior',
        name: 'Exterior Construction',
        desc: 'From foundations to facades, our exterior construction work is built to last — combining structural integrity with architectural beauty.',
      },
      safeRooms: {
        id: 'safeRooms',
        name: 'Safe Rooms',
        desc: 'State-of-the-art reinforced safe rooms (Mamad) designed to protect your family while seamlessly integrating with your home\'s design.',
      },
      capsuleHomes: {
        id: 'capsuleHomes',
        name: 'Capsule Homes',
        desc: 'Innovative compact living solutions — fully equipped, architecturally stunning capsule homes that maximize every square meter.',
      },
    },
    projects: {
      interior: [
        {
          title: 'Jerusalem Stone Residence',
          location: 'Rehavia, Jerusalem',
          desc: 'A complete renovation of a 5-room apartment blending traditional Jerusalem stone with contemporary design. Open-plan living with custom millwork.',
          year: '2024',
          size: '180 m²',
        },
        {
          title: 'Modern Villa Interior',
          location: 'Ein Kerem, Jerusalem',
          desc: 'Luxury interior for a hilltop villa featuring high ceilings, bespoke furniture, and panoramic views. Natural materials throughout.',
          year: '2023',
          size: '320 m²',
        },
        {
          title: 'Old City Boutique Apartment',
          location: 'Jewish Quarter, Jerusalem',
          desc: 'Sensitive restoration of a historic Ottoman-era apartment — preserving original arches while adding modern comforts and smart-home systems.',
          year: '2024',
          size: '95 m²',
        },
      ],
      exterior: [
        {
          title: 'Katamon Residential Tower',
          location: 'Katamon, Jerusalem',
          desc: 'A 12-floor residential tower clad in local Jerusalem limestone. LEED-certified construction with rooftop gardens and underground parking.',
          year: '2023',
          size: '4,200 m²',
        },
        {
          title: 'Talpiot Office Complex',
          location: 'Talpiot, Jerusalem',
          desc: 'Modern commercial complex featuring a striking glass-and-stone facade, solar panels, and green terraces integrated into the building skin.',
          year: '2022',
          size: '2,800 m²',
        },
        {
          title: 'German Colony Townhouses',
          location: 'German Colony, Jerusalem',
          desc: 'Six luxury townhouses with private gardens, respectful of the neighborhood\'s 19th-century Templer architecture and heritage streetscape.',
          year: '2024',
          size: '1,100 m²',
        },
      ],
      safeRooms: [
        {
          title: 'Integrated Mamad — Family Home',
          location: 'Har Nof, Jerusalem',
          desc: 'A 9 m² reinforced safe room that doubles as a home office. Steel-reinforced concrete walls, blast-proof door, and ventilation system. Furnished and connected.',
          year: '2024',
          size: '9 m²',
        },
        {
          title: 'Luxury Safe Room Suite',
          location: 'Ramat Sharett, Jerusalem',
          desc: 'A premium safe room designed as a master dressing room. Armored walls concealed behind bespoke joinery, with concealed blast door and NBC filtration.',
          year: '2023',
          size: '14 m²',
        },
        {
          title: 'Retrofit Community Shelter',
          location: 'Pisgat Zeev, Jerusalem',
          desc: 'Retrofit safe room added to a 1980s apartment block — engineered to meet current Home Front Command standards without altering the building structure.',
          year: '2024',
          size: '12 m²',
        },
      ],
      capsuleHomes: [
        {
          title: 'Garden Capsule Studio',
          location: 'Beit Zayit, Jerusalem Hills',
          desc: 'A 28 m² off-grid capsule home nestled in olive grove. Prefabricated steel frame, triple-glazed panels, solar + battery system, composting toilet.',
          year: '2024',
          size: '28 m²',
        },
        {
          title: 'Urban Rooftop Capsule',
          location: 'Nachlaot, Jerusalem',
          desc: 'A rooftop addition on a 3-story building — a 35 m² capsule penthouse with a private terrace, panoramic city views, and a fully equipped kitchen.',
          year: '2023',
          size: '35 m²',
        },
        {
          title: 'Hillside Capsule Retreat',
          location: 'Mevasseret Zion',
          desc: 'A cluster of three interconnected capsule units for a family retreat. Cantilevered over a terraced hillside, with floor-to-ceiling glass and natural timber.',
          year: '2024',
          size: '3 × 22 m²',
        },
      ],
    },
    contact: {
      title: 'Start Your Project',
      subtitle: 'Ready to build something exceptional? Our team is here to guide you from first concept to finished project.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Tell us about your project',
      send: 'Send Message',
      address: 'Ben Yehuda 32, Jerusalem',
      tel: '+972 2-555-0100',
      hours: 'Sun–Thu 8:00–18:00',
    },
    footer: {
      rights: '© 2025 Jerusalem Builders. All rights reserved.',
      tagline: 'Building Jerusalem\'s future, one stone at a time.',
    },
  },
  he: {
    dir: 'rtl' as const,
    companyName: 'בוני ירושלים',
    companyTagline: 'בונים את עתיד ירושלים',
    companyDesc:
      'שירותי בנייה ושיפוץ פרימיום בירושלים. אנו מביאים עשרות שנות ניסיון לכל פרויקט — מעיצוב פנים יוקרתי עד חדרי ממ"ד מבוצרים.',
    contactCta: 'קבלו הצעת מחיר חינם',
    learnMore: 'קרא עוד',
    viewProject: 'צפה בפרויקט',
    nav: {
      home: 'ראשי',
      interior: 'פנים',
      exterior: 'חוץ',
      safeRooms: 'חדרי ממ"ד',
      capsuleHomes: 'בתי קפסולה',
      contact: 'צור קשר',
    },
    stats: [
      { value: '25+', label: 'שנות ניסיון' },
      { value: '300+', label: 'פרויקטים הושלמו' },
      { value: '98%', label: 'שביעות רצון לקוחות' },
      { value: '15+', label: 'פרסי תעשייה' },
    ],
    categories: {
      interior: {
        id: 'interior',
        name: 'עיצוב פנים',
        desc: 'שנו את חללי המגורים שלכם עם שירותי עיצוב השיפוץ המומחים שלנו. אנחנו משלבים אסתטיקה מודרנית עם האופי הנצחי של ירושלים.',
      },
      exterior: {
        id: 'exterior',
        name: 'בנייה חיצונית',
        desc: 'מיסודות ועד חזיתות, עבודות הבנייה החיצונית שלנו נבנות לעמוד לאורך שנים — שילוב של יציבות מבנית עם יופי אדריכלי.',
      },
      safeRooms: {
        id: 'safeRooms',
        name: 'חדרי ממ"ד',
        desc: 'חדרי ממ"ד מחוזקים חדישים שנועדו להגן על משפחתכם תוך שילוב חלק עם עיצוב הבית.',
      },
      capsuleHomes: {
        id: 'capsuleHomes',
        name: 'בתי קפסולה',
        desc: 'פתרונות מגורים קומפקטיים חדשניים — בתי קפסולה מאובזרים במלואם ומרהיבים אדריכלית שממקסמים כל מטר רבוע.',
      },
    },
    projects: {
      interior: [
        {
          title: 'דירת אבן ירושלמית',
          location: 'רחביה, ירושלים',
          desc: 'שיפוץ מלא של דירת 5 חדרים המשלבת אבן ירושלמית מסורתית עם עיצוב עכשווי. מרחב מגורים פתוח עם נגרות מותאמת אישית.',
          year: '2024',
          size: '180 מ"ר',
        },
        {
          title: 'פנים וילת יוקרה',
          location: 'עין כרם, ירושלים',
          desc: 'עיצוב פנים יוקרתי לווילה על גבעה עם תקרות גבוהות, ריהוט ייחודי ונוף פנורמי. חומרים טבעיים לאורך כל הבית.',
          year: '2023',
          size: '320 מ"ר',
        },
        {
          title: 'דירת בוטיק בעיר העתיקה',
          location: 'הרובע היהודי, ירושלים',
          desc: 'שיפוץ רגיש של דירה עות\'מאנית היסטורית — שמירה על הקשתות המקוריות תוך הוספת נוחיות מודרנית ומערכות בית חכם.',
          year: '2024',
          size: '95 מ"ר',
        },
      ],
      exterior: [
        {
          title: 'מגדל קטמון למגורים',
          location: 'קטמון, ירושלים',
          desc: 'מגדל מגורים בן 12 קומות המצופה באבן ירושלמית מקומית. בנייה מוסמכת LEED עם גינות גג וחניון תת-קרקעי.',
          year: '2023',
          size: '4,200 מ"ר',
        },
        {
          title: 'קומפלקס משרדים בתלפיות',
          location: 'תלפיות, ירושלים',
          desc: 'קומפלקס מסחרי מודרני עם חזית זכוכית-ואבן בולטת, פאנלים סולאריים ומרפסות ירוקות משולבות בעור הבניין.',
          year: '2022',
          size: '2,800 מ"ר',
        },
        {
          title: 'בתי עיר במושבה הגרמנית',
          location: 'המושבה הגרמנית, ירושלים',
          desc: 'שישה בתי עיר יוקרתיים עם גינות פרטיות, בכבוד לאדריכלות המושבה הגרמנית מהמאה ה-19 ורחוב המורשת.',
          year: '2024',
          size: '1,100 מ"ר',
        },
      ],
      safeRooms: [
        {
          title: 'ממ"ד משולב — בית משפחתי',
          location: 'הר נוף, ירושלים',
          desc: 'חדר ממ"ד של 9 מ"ר המשמש גם כמשרד ביתי. קירות בטון מזוין, דלת עמידה לפיצוץ ומערכת אוורור. מרוהט ומחובר.',
          year: '2024',
          size: '9 מ"ר',
        },
        {
          title: 'חדר ממ"ד יוקרתי',
          location: 'רמת שרת, ירושלים',
          desc: 'חדר ממ"ד פרימיום המעוצב כחדר הלבשה ראשי. קירות משוריינים מוסתרים מאחורי נגרות ייחודית, עם דלת נסתרת ופילטרציית NBC.',
          year: '2023',
          size: '14 מ"ר',
        },
        {
          title: 'מקלט קהילתי שדרוג',
          location: 'פסגת זאב, ירושלים',
          desc: 'חדר ממ"ד שדרוג שנוסף לבניין דירות מהשנות ה-80 — מהונדס לעמוד בתקנים הנוכחיים של פיקוד העורף מבלי לשנות את מבנה הבניין.',
          year: '2024',
          size: '12 מ"ר',
        },
      ],
      capsuleHomes: [
        {
          title: 'קפסולת גן סטודיו',
          location: 'בית זית, הרי ירושלים',
          desc: 'בית קפסולה של 28 מ"ר מחוץ לרשת בתוך חורשת זיתים. מסגרת פלדה טרומית, לוחות משולשים, מערכת סולארית + סוללה, שירותי קומפוסט.',
          year: '2024',
          size: '28 מ"ר',
        },
        {
          title: 'קפסולת גג עירונית',
          location: 'נחלאות, ירושלים',
          desc: 'תוספת גג על בניין 3 קומות — בית קפסולה פנטהאוז של 35 מ"ר עם מרפסת פרטית, נוף פנורמי לעיר ומטבח מאובזר.',
          year: '2023',
          size: '35 מ"ר',
        },
        {
          title: 'נסיגת קפסולה על גבעה',
          location: 'מבשרת ציון',
          desc: 'אשכול של שלושה יחידות קפסולה מחוברות לנסיגה משפחתית. בולט מעל גבעה מדורגת, עם זכוכית רצפה לתקרה ועץ טבעי.',
          year: '2024',
          size: '3 × 22 מ"ר',
        },
      ],
    },
    contact: {
      title: 'התחילו את הפרויקט שלכם',
      subtitle: 'מוכנים לבנות משהו יוצא דופן? הצוות שלנו כאן להנחות אתכם מהקונספט הראשון ועד הפרויקט המוגמר.',
      name: 'שם מלא',
      email: 'כתובת אימייל',
      phone: 'מספר טלפון',
      message: 'ספרו לנו על הפרויקט שלכם',
      send: 'שלח הודעה',
      address: 'בן יהודה 32, ירושלים',
      tel: '+972 2-555-0100',
      hours: 'א\'–ה\' 8:00–18:00',
    },
    footer: {
      rights: '© 2025 בני ירושלים בנייה. כל הזכויות שמורות.',
      tagline: 'בונים את עתיד ירושלים, אבן אחת בכל פעם.',
    },
  },
}

export const projectImages = {
  interior: [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80&fit=crop',
  ],
  exterior: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&fit=crop',
  ],
  safeRooms: [
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&fit=crop',
  ],
  capsuleHomes: [
    'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1601918774950-8d9d38ad3c09?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1595514535215-9c60d20b4b5c?w=800&q=80&fit=crop',
  ],
}
