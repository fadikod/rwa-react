export const content = {
  nav: {
    diensten: { nl: 'Diensten', en: 'Services' },
    opleidingen: { nl: 'Opleidingen', en: 'Courses' },
    overOns: { nl: 'Over Ons', en: 'About Us' },
    contact: { nl: 'Contact', en: 'Contact' },
    bookCta: { nl: 'Boek Consult', en: 'Book Consult' },
  },

  home: {
    hero: {
      headline: { nl: 'Jouw stijl.\nJouw impact.', en: 'Your style.\nYour impact.' },
      subline: {
        nl: 'Premium styling advies & professionele opleidingen voor de moderne vrouw en man.',
        en: 'Premium styling advice & professional training for the modern woman and man.',
      },
      ctaPrimary: { nl: 'Bekijk Diensten', en: 'View Services' },
      ctaSecondary: { nl: 'Ontdek Opleidingen', en: 'Discover Courses' },
    },
    pillars: {
      title: { nl: 'Wat wij bieden', en: 'What we offer' },
      items: [
        {
          icon: 'user',
          title: { nl: 'Persoonlijk Advies', en: 'Personal Consulting' },
          description: {
            nl: 'Individueel stijladvies afgestemd op jouw persoonlijkheid, lichaamsvorm en levensstijl.',
            en: 'Individual style advice tailored to your personality, body shape and lifestyle.',
          },
          link: '/diensten',
        },
        {
          icon: 'academic-cap',
          title: { nl: 'Professionele Opleidingen', en: 'Professional Training' },
          description: {
            nl: 'Erkende beauty- en stylingopleidingen die jou klaarstomen voor een carrière in de industrie.',
            en: 'Accredited beauty and styling courses that prepare you for a career in the industry.',
          },
          link: '/opleidingen',
        },
        {
          icon: 'briefcase',
          title: { nl: 'Corporate Solutions', en: 'Corporate Solutions' },
          description: {
            nl: 'In-company trainingen en workshops voor teams die willen excelleren in persoonlijk leiderschap.',
            en: 'In-company training and workshops for teams that want to excel in personal leadership.',
          },
          link: '/diensten#corporate',
        },
      ],
    },
    stats: [
      { value: '500+', label: { nl: 'Tevreden klanten', en: 'Happy clients' } },
      { value: '10+', label: { nl: 'Jaar ervaring', en: 'Years experience' } },
      { value: '25+', label: { nl: 'Branchepartners', en: 'Industry partners' } },
      { value: '100+', label: { nl: 'Opgeleide professionals', en: 'Trained professionals' } },
    ],
    servicesSection: {
      tag: { nl: 'Onze Diensten', en: 'Our Services' },
      title: { nl: 'Alles voor jouw stijl & imago', en: 'Everything for your style & image' },
      subtitle: {
        nl: 'Van persoonlijke kleuranalyse tot zakelijke stijlcoaching — wij bieden een volledig pakket voor jouw visuele identiteit.',
        en: 'From personal colour analysis to business style coaching — we offer a complete package for your visual identity.',
      },
      viewAll: { nl: 'Alle diensten bekijken', en: 'View all services' },
    },
    featuredCourse: {
      tag: { nl: 'Uitgelichte Opleiding', en: 'Featured Course' },
      title: { nl: 'Beauty Stylist Certificering', en: 'Beauty Stylist Certification' },
      description: {
        nl: 'Een intensieve 2-jarige opleiding waarbij jij werkt in een echte salon en les krijgt van professionals uit de industrie. Leer alles over haar, nagels, visagie, lash & brow.',
        en: 'An intensive 2-year programme where you work in a real salon and learn from industry professionals. Master hair, nails, visagie, lash & brow.',
      },
      duration: { nl: '2 Jaar', en: '2 Years' },
      format: { nl: 'In-studio + Praktijkstage', en: 'In-studio + Internship' },
      level: { nl: 'Instapniveau', en: 'Foundation Level' },
      outcomes: [
        { nl: 'Haarstijling, knippen & kleuren', en: 'Hair styling, cutting & colouring' },
        { nl: 'Nagelstijling (gellac, BIAB, extensions)', en: 'Nail styling (gel, BIAB, extensions)' },
        { nl: 'Visagie & make-up technieken', en: 'Visagie & makeup techniques' },
        { nl: 'Lash & brow behandelingen', en: 'Lash & brow treatments' },
      ],
      cta: { nl: 'Bekijk Opleiding', en: 'View Course' },
    },
    testimonials: {
      tag: { nl: 'Wat klanten zeggen', en: 'What clients say' },
      title: { nl: 'Resultaten die spreken', en: 'Results that speak' },
      items: [
        {
          quote: {
            nl: 'Het kledingstijladvies heeft mij echt geholpen om mij zelfverzekerder te voelen in mijn werk. Ik weet nu precies wat bij mij past.',
            en: 'The clothing style advice really helped me feel more confident at work. I now know exactly what suits me.',
          },
          name: 'Sophie van den Berg',
          role: { nl: 'Marketing Manager', en: 'Marketing Manager' },
        },
        {
          quote: {
            nl: 'De kleuranalyse was een eye-opener. Eindelijk begrijp ik waarom bepaalde kleuren mij goed staan en andere niet.',
            en: 'The colour analysis was an eye-opener. I finally understand why certain colours suit me and others don\'t.',
          },
          name: 'Laura Hendriks',
          role: { nl: 'Ondernemer', en: 'Entrepreneur' },
        },
        {
          quote: {
            nl: 'De in-company training voor ons team was uitstekend. Professioneel, inspirerend en direct toepasbaar.',
            en: 'The in-company training for our team was excellent. Professional, inspiring and immediately applicable.',
          },
          name: 'Mark de Vries',
          role: { nl: 'HR Directeur', en: 'HR Director' },
        },
        {
          quote: {
            nl: 'Na de Beauty Stylist opleiding had ik direct werk gevonden in een topkapper in Rotterdam. De opleiding is echt top!',
            en: 'After the Beauty Stylist programme I immediately found work at a top salon in Rotterdam. The training is truly excellent!',
          },
          name: 'Yasmin Osei',
          role: { nl: 'Afgestudeerde', en: 'Graduate' },
        },
      ],
    },
    corporate: {
      tag: { nl: 'Corporate', en: 'Corporate' },
      title: { nl: 'Investeer in\njouw team', en: 'Invest in\nyour team' },
      description: {
        nl: 'Een professionele uitstraling begint bij bewust kleding- en kleurgebruik. Onze in-company trainingen helpen jouw medewerkers om hun persoonlijk merk te versterken — intern én extern.',
        en: 'A professional appearance starts with conscious use of clothing and colour. Our in-company trainings help your employees strengthen their personal brand — internally and externally.',
      },
      features: [
        { nl: 'Maatwerk workshops voor teams', en: 'Bespoke workshops for teams' },
        { nl: 'Zakelijk kledingadvies & personal branding', en: 'Business styling & personal branding' },
        { nl: 'Kleuranalyse sessies op locatie', en: 'Colour analysis sessions on-site' },
        { nl: 'Certificaat voor deelnemers', en: 'Certificate for participants' },
      ],
      cta: { nl: 'Neem Contact Op', en: 'Get in Touch' },
    },
    ctaBanner: {
      title: { nl: 'Klaar voor jouw transformatie?', en: 'Ready for your transformation?' },
      subtitle: {
        nl: 'Plan een gratis kennismakingsgesprek en ontdek welke dienst het beste bij jou past.',
        en: 'Schedule a free discovery call and find out which service suits you best.',
      },
      cta: { nl: 'Plan een gratis kennismaking', en: 'Schedule a free discovery call' },
    },
  },

  services: {
    hero: {
      tag: { nl: 'Diensten', en: 'Services' },
      title: { nl: 'Alles voor jouw\nvisuele identiteit', en: 'Everything for your\nvisual identity' },
      subtitle: {
        nl: 'Van persoonlijk stijladvies tot zakelijke coaching en in-company trainingen — maatwerk voor ieder doel.',
        en: 'From personal style advice to business coaching and in-company training — tailored to every goal.',
      },
    },
    items: [
      {
        id: 'kledingstijladvies',
        icon: 'sparkles',
        title: { nl: 'Kledingstijladvies', en: 'Clothing Style Advice' },
        tag: { nl: 'Persoonlijk', en: 'Personal' },
        description: {
          nl: 'Een diepgaande analyse van jouw persoonlijkheid, lichaamsvorm en levensstijl resulteert in concreet advies over welke kleding jou het beste staat. Leer hoe je accentueert wat je mooi vindt en camoufleer wat je wil verbergen.',
          en: 'An in-depth analysis of your personality, body shape and lifestyle results in concrete advice about which clothing suits you best. Learn how to accentuate what you love and conceal what you wish to hide.',
        },
        duration: { nl: '3–4 uur', en: '3–4 hours' },
        format: { nl: 'In-studio', en: 'In-studio' },
        includes: [
          { nl: 'Lichaamsvorm & proportie analyse', en: 'Body shape & proportion analysis' },
          { nl: 'Stijl- en persoonlijkheidsprofiel', en: 'Style & personality profile' },
          { nl: 'Praktisch winkeladvies', en: 'Practical shopping advice' },
          { nl: 'Persoonlijk stijlrapport', en: 'Personal style report' },
        ],
      },
      {
        id: 'kleuranalyse',
        icon: 'swatch',
        title: { nl: 'Kleuranalyse', en: 'Colour Analysis' },
        tag: { nl: 'Persoonlijk', en: 'Personal' },
        description: {
          nl: 'Ontdek welke kleuren jou laten stralen. Gebaseerd op jouw huidtint, oogkleur en haarkleur stellen wij een persoonlijk kleurenpalet samen dat als leidraad dient bij al jouw kledingkeuzes.',
          en: 'Discover which colours make you shine. Based on your skin tone, eye colour and hair colour we compile a personal colour palette that serves as a guide for all your clothing choices.',
        },
        duration: { nl: '2–3 uur', en: '2–3 hours' },
        format: { nl: 'In-studio', en: 'In-studio' },
        includes: [
          { nl: 'Seizoen- en toonanalyse', en: 'Seasonal & tonal analysis' },
          { nl: 'Persoonlijk kleurenwaaier', en: 'Personal colour fan' },
          { nl: 'Do\'s & don\'ts per kleurgroep', en: 'Do\'s & don\'ts per colour group' },
          { nl: 'Stofmonsters om mee te winkelen', en: 'Fabric swatches to shop with' },
        ],
      },
      {
        id: 'kleurenpaspoort',
        icon: 'identification',
        title: { nl: 'Kleurenpaspoort', en: 'Colour Passport' },
        tag: { nl: 'Verdieping', en: 'Advanced' },
        description: {
          nl: 'Het ultieme vervolg op de kleuranalyse. Wij creëren een uniek individueel kleurenpaspoort — een persoonlijk document met jouw complete kleurprofiel, combinatieschema\'s en styling tips dat je de rest van je leven kunt gebruiken.',
          en: 'The ultimate follow-up to colour analysis. We create a unique individual colour passport — a personal document with your complete colour profile, combination schemes and styling tips you can use for life.',
        },
        duration: { nl: '4–5 uur', en: '4–5 hours' },
        format: { nl: 'In-studio + Online', en: 'In-studio + Online' },
        includes: [
          { nl: 'Uitgebreide kleurenpaspoort document', en: 'Extensive colour passport document' },
          { nl: 'Combinatieschema\'s & outfitinspiratie', en: 'Combination schemes & outfit inspiration' },
          { nl: 'Digitale én fysieke kopie', en: 'Digital & physical copy' },
          { nl: 'Nabespreking na 30 dagen', en: 'Follow-up after 30 days' },
        ],
      },
      {
        id: 'zakelijk-kledingadvies',
        icon: 'briefcase',
        title: { nl: 'Zakelijk Kledingadvies', en: 'Business Styling Masterclass' },
        tag: { nl: 'Business', en: 'Business' },
        description: {
          nl: 'Vertaal jouw bedrijfswaarden naar een krachtig persoonlijk merk via kleding. In deze masterclass leer je hoe jouw uitstraling bijdraagt aan jouw professionele autoriteit, geloofwaardigheid en succes.',
          en: 'Translate your business values into a powerful personal brand through dress. In this masterclass you learn how your appearance contributes to your professional authority, credibility and success.',
        },
        duration: { nl: 'Halve of hele dag', en: 'Half or full day' },
        format: { nl: 'In-studio of op locatie', en: 'In-studio or on-site' },
        includes: [
          { nl: 'Personal branding via kledingkeuze', en: 'Personal branding through clothing choices' },
          { nl: 'Dresscode analyse per branche', en: 'Dress code analysis per industry' },
          { nl: 'Capsule wardrobe strategie', en: 'Capsule wardrobe strategy' },
          { nl: 'Presentatie- en zelfvertrouwenstips', en: 'Presentation & confidence tips' },
        ],
      },
      {
        id: 'mannen-styling',
        icon: 'user-circle',
        title: { nl: 'Mannen Styling', en: 'Men\'s Styling' },
        tag: { nl: 'Persoonlijk', en: 'Personal' },
        description: {
          nl: 'Stijladvies speciaal ontwikkeld voor mannen. Of je nu wilt werken aan je zakelijke uitstraling, casual garderobe of een compleet stijlprofiel — wij begeleiden jou stap voor stap naar een look die bij jou past.',
          en: 'Style advice specially developed for men. Whether you want to work on your business image, casual wardrobe or a complete style profile — we guide you step by step to a look that suits you.',
        },
        duration: { nl: '2–3 uur', en: '2–3 hours' },
        format: { nl: 'In-studio of Online', en: 'In-studio or Online' },
        includes: [
          { nl: 'Lichaams- en proportieanalyse voor mannen', en: 'Body & proportion analysis for men' },
          { nl: 'Kledingadvies per gelegenheid', en: 'Clothing advice per occasion' },
          { nl: 'Kleur- en patroonadvies', en: 'Colour & pattern advice' },
          { nl: 'Shopbegeleiding (optioneel)', en: 'Shopping guidance (optional)' },
        ],
      },
      {
        id: 'incompany',
        icon: 'building-office',
        title: { nl: 'In-Company Training', en: 'In-Company Training' },
        tag: { nl: 'Corporate', en: 'Corporate' },
        description: {
          nl: 'Op maat gemaakte workshops voor jouw team. Onze ervaren stylisten komen naar jouw bedrijf voor inspirerende sessies over kleur, stijl en persoonlijk leiderschap. Ideaal als teambuilding of professionele ontwikkeling.',
          en: 'Bespoke workshops for your team. Our experienced stylists come to your company for inspiring sessions on colour, style and personal leadership. Ideal as team building or professional development.',
        },
        duration: { nl: 'Op maat', en: 'Custom' },
        format: { nl: 'Op locatie (bij jouw bedrijf)', en: 'On-site (at your company)' },
        includes: [
          { nl: 'Kleur- en stijlworkshops voor teams', en: 'Colour & style workshops for teams' },
          { nl: 'Individuele mini-analyses per medewerker', en: 'Individual mini-analyses per employee' },
          { nl: 'Presentatie over personal branding', en: 'Presentation on personal branding' },
          { nl: 'Certificaat voor alle deelnemers', en: 'Certificate for all participants' },
        ],
      },
    ],
  },

  courses: {
    hero: {
      tag: { nl: 'Opleidingen', en: 'Courses' },
      title: { nl: 'Professionele\nopleidingen', en: 'Professional\ntraining programmes' },
      subtitle: {
        nl: 'Van instapniveau tot verdieping — wij bieden erkende en praktijkgerichte opleidingen in beauty en styling.',
        en: 'From foundation to advanced — we offer accredited, practice-oriented training in beauty and styling.',
      },
    },
    items: [
      {
        id: 'beauty-stylist',
        title: { nl: 'Beauty Stylist Certificering', en: 'Beauty Stylist Certification' },
        level: { nl: 'Instapniveau', en: 'Foundation' },
        levelColor: 'sage',
        duration: { nl: '2 Jaar', en: '2 Years' },
        format: { nl: 'In-studio + Praktijkstage', en: 'In-studio + Internship' },
        description: {
          nl: 'Een intensieve 2-jarige opleiding waarbij je werkt in een echte salon naast lessen van brancheexperts. Je bouwt een brede basis op in haar, nagels, visagie en lash & brow — en bent na afstuderen direct inzetbaar.',
          en: 'An intensive 2-year programme working in a real salon alongside lessons from industry experts. You build a broad foundation in hair, nails, visagie and lash & brow — ready to work immediately after graduating.',
        },
        modules: [
          { nl: 'Haarstijling: knippen, kleuren, blow-dry & vlechten', en: 'Hair styling: cutting, colouring, blow-dry & braiding' },
          { nl: 'Nagelstijling: gellac, BIAB & extensions', en: 'Nail styling: gel, BIAB & extensions' },
          { nl: 'Visagie & make-up technieken', en: 'Visagie & makeup techniques' },
          { nl: 'Lash & brow behandelingen', en: 'Lash & brow treatments' },
          { nl: 'Klantreceptie & behandelplanning', en: 'Client reception & treatment planning' },
          { nl: 'Ondernemerschap & klantgerichtheid', en: 'Entrepreneurship & customer focus' },
        ],
        careers: [
          { nl: 'Hairstylist', en: 'Hairstylist' },
          { nl: 'Nagelstyliste', en: 'Nail Technician' },
          { nl: 'Beautystylist', en: 'Beauty Stylist' },
        ],
        cta: { nl: 'Inschrijven', en: 'Enrol' },
      },
      {
        id: 'kleuranalyse-opleiding',
        title: { nl: 'Kleuranalyse Opleiding', en: 'Colour Analysis Training' },
        level: { nl: 'Professioneel', en: 'Professional' },
        levelColor: 'terracotta',
        duration: { nl: '12 Weken', en: '12 Weeks' },
        format: { nl: 'Online + Studio', en: 'Online + Studio' },
        description: {
          nl: 'In 12 weken leer je online op jouw eigen tempo de theorie van kleuranalyse, gevolgd door praktijksessies in onze studio. Na afronding kun je zelfstandig kleuranalyses uitvoeren voor klanten.',
          en: 'In 12 weeks you learn colour analysis theory online at your own pace, followed by practical sessions in our studio. After completion you can independently perform colour analyses for clients.',
        },
        modules: [
          { nl: 'Kleurtheorie & seizoensystemen', en: 'Colour theory & seasonal systems' },
          { nl: 'Huidtintanalyse & ondertoon bepaling', en: 'Skin tone analysis & undertone determination' },
          { nl: 'Persoonlijk kleurenpalet samenstellen', en: 'Composing a personal colour palette' },
          { nl: 'Klantgesprek & adviesvaardigheden', en: 'Client consultation & advisory skills' },
          { nl: 'Praktijksessies in de studio', en: 'Practical sessions in the studio' },
        ],
        careers: [
          { nl: 'Kleuranaliste', en: 'Colour Analyst' },
          { nl: 'Imagostylist', en: 'Image Stylist' },
          { nl: 'Personal Shopper', en: 'Personal Shopper' },
        ],
        cta: { nl: 'Inschrijven', en: 'Enrol' },
      },
      {
        id: 'kleurexpert',
        title: { nl: 'Kleurexpert Verdieping', en: 'Colour Expert Advanced' },
        level: { nl: 'Gevorderd', en: 'Advanced' },
        levelColor: 'taupe',
        duration: { nl: 'Flexibel', en: 'Flexible' },
        format: { nl: 'Online + Studio', en: 'Online + Studio' },
        description: {
          nl: 'De verdiepende opleiding voor wie al kleuranalyse heeft gestudeerd. Je leert een uniek individueel kleurenpaspoort te creëren voor elke klant — een gepersonaliseerd document dat een leven lang meegaat.',
          en: 'The advanced training for those who have already studied colour analysis. You learn to create a unique individual colour passport for each client — a personalised document that lasts a lifetime.',
        },
        modules: [
          { nl: 'Verdiepende kleurpsychologie', en: 'Advanced colour psychology' },
          { nl: 'Individueel kleurenpaspoort opstellen', en: 'Creating individual colour passports' },
          { nl: 'Combinatieschema\'s & capsule wardrobe', en: 'Combination schemes & capsule wardrobe' },
          { nl: 'Geavanceerde klantadviesstrategieën', en: 'Advanced client advisory strategies' },
        ],
        careers: [
          { nl: 'Kleurexpert', en: 'Colour Expert' },
          { nl: 'Senior Imagostylist', en: 'Senior Image Stylist' },
        ],
        cta: { nl: 'Inschrijven', en: 'Enrol' },
      },
      {
        id: 'mannen-styling-opleiding',
        title: { nl: 'Mannen Styling Opleiding', en: 'Men\'s Styling Programme' },
        level: { nl: 'Professioneel', en: 'Professional' },
        levelColor: 'terracotta',
        duration: { nl: 'Flexibel', en: 'Flexible' },
        format: { nl: 'Online', en: 'Online' },
        description: {
          nl: 'Specialiseer je in het stijladvies voor mannen. Een groeiende markt met veel vraag naar gekwalificeerde stylisten die begrijpen hoe mannenmode, proporties en kleurgebruik bij mannen werken.',
          en: 'Specialise in style advice for men. A growing market with high demand for qualified stylists who understand how men\'s fashion, proportions and colour work.',
        },
        modules: [
          { nl: 'Menswear: pasvorm, stoffen & dresscodes', en: 'Menswear: fit, fabrics & dress codes' },
          { nl: 'Kleur- en patroonanalyse voor mannen', en: 'Colour & pattern analysis for men' },
          { nl: 'Styling per gelegenheid', en: 'Styling per occasion' },
          { nl: 'Personal branding voor mannen', en: 'Personal branding for men' },
        ],
        careers: [
          { nl: 'Mannen Stylist', en: 'Men\'s Stylist' },
          { nl: 'Personal Shopper', en: 'Personal Shopper' },
        ],
        cta: { nl: 'Inschrijven', en: 'Enrol' },
      },
      {
        id: 'incompany-programma',
        title: { nl: 'In-Company Programma', en: 'In-Company Programme' },
        level: { nl: 'Corporate', en: 'Corporate' },
        levelColor: 'dark',
        duration: { nl: 'Op maat', en: 'Custom' },
        format: { nl: 'Op locatie', en: 'On-site' },
        description: {
          nl: 'Speciaal ontwikkeld voor bedrijven die hun medewerkers willen trainen op het gebied van kleding, kleur en persoonlijke uitstraling. Wij ontwerpen een programma volledig afgestemd op jouw bedrijfscultuur en doelen.',
          en: 'Specially developed for companies that want to train their employees in clothing, colour and personal presentation. We design a programme completely tailored to your company culture and goals.',
        },
        modules: [
          { nl: 'Groepsworkshop kleur & stijl', en: 'Group workshop colour & style' },
          { nl: 'Individuele mini-analyses', en: 'Individual mini-analyses' },
          { nl: 'Personal branding presentatie', en: 'Personal branding presentation' },
          { nl: 'Afsluiting & certificering', en: 'Closing & certification' },
        ],
        careers: [],
        cta: { nl: 'Offerte Aanvragen', en: 'Request Quote' },
      },
    ],
    faq: {
      title: { nl: 'Veelgestelde vragen', en: 'Frequently asked questions' },
      items: [
        {
          q: { nl: 'Wat zijn de toelatingseisen?', en: 'What are the admission requirements?' },
          a: {
            nl: 'Voor de Beauty Stylist Certificering zijn een vmbo diploma of mbo niveau 1 vereist. Voor de overige opleidingen zijn er geen formele vereisten — enthousiasme en motivatie zijn voldoende.',
            en: 'For the Beauty Stylist Certification a vmbo diploma or mbo level 1 is required. For other programmes there are no formal requirements — enthusiasm and motivation are sufficient.',
          },
        },
        {
          q: { nl: 'Wat zijn de kosten?', en: 'What are the costs?' },
          a: {
            nl: 'De kosten variëren per opleiding. De Beauty Stylist Certificering kost ca. €1.511/jaar + €220 materialen. Neem contact op voor de exacte tarieven van andere opleidingen.',
            en: 'Costs vary per programme. The Beauty Stylist Certification costs approx. €1,511/year + €220 materials. Contact us for exact pricing of other programmes.',
          },
        },
        {
          q: { nl: 'Zijn er stageplekken beschikbaar?', en: 'Are internship placements available?' },
          a: {
            nl: 'Ja, voor de Beauty Stylist Certificering werken wij samen met 25+ salonpartners in de regio voor stageplekken. Studenten lopen één dag per week stage gedurende het hele schooljaar.',
            en: 'Yes, for the Beauty Stylist Certification we work with 25+ salon partners in the region for internship placements. Students intern one day per week throughout the entire school year.',
          },
        },
        {
          q: { nl: 'Welke carrièremogelijkheden zijn er na afstuderen?', en: 'What career options are there after graduation?' },
          a: {
            nl: 'Afgestudeerden werken als hairstylist, nagelstyliste, beautystylist, kleuranaliste of imagostylist in salons, beautybedrijven of als zelfstandig ondernemer.',
            en: 'Graduates work as hairstylist, nail technician, beauty stylist, colour analyst or image stylist in salons, beauty companies or as self-employed professionals.',
          },
        },
      ],
    },
  },

  about: {
    hero: {
      tag: { nl: 'Over Ons', en: 'About Us' },
      title: { nl: 'Vakmanschap,\ncreatief & gedreven', en: 'Craftsmanship,\ncreative & driven' },
      subtitle: {
        nl: 'Wij zijn een studio waar stijl, kleur en persoonlijk leiderschap samenkomen. Onze missie: elke klant helpen zijn of haar unieke identiteit te laten stralen.',
        en: 'We are a studio where style, colour and personal leadership come together. Our mission: helping every client let their unique identity shine.',
      },
    },
    story: {
      tag: { nl: 'Ons Verhaal', en: 'Our Story' },
      title: { nl: 'Meer dan styling —\neen transformatie', en: 'More than styling —\na transformation' },
      body: {
        nl: '[Studio Name] werd opgericht vanuit een passie voor stijl en de overtuiging dat hoe je jezelf presenteert een enorm verschil maakt — zowel persoonlijk als professioneel. Wij combineren de diepgang van academisch onderwijs met de praktische focus van een resultaatgericht adviesburo.',
        en: '[Studio Name] was founded out of a passion for style and the conviction that how you present yourself makes an enormous difference — both personally and professionally. We combine the depth of academic education with the practical focus of a results-driven consultancy.',
      },
    },
    pillars: [
      {
        icon: 'star',
        title: { nl: 'Vakmanschap', en: 'Craftsmanship' },
        description: {
          nl: 'Al onze stylisten en docenten zijn ervaren professionals die hun vak met passie uitoefenen.',
          en: 'All our stylists and teachers are experienced professionals who practise their craft with passion.',
        },
      },
      {
        icon: 'light-bulb',
        title: { nl: 'Creativiteit', en: 'Creativity' },
        description: {
          nl: 'Wij denken out-of-the-box en zoeken altijd naar unieke oplossingen die passen bij jouw persoonlijkheid.',
          en: 'We think out-of-the-box and always look for unique solutions that fit your personality.',
        },
      },
      {
        icon: 'rocket-launch',
        title: { nl: 'Ondernemerschap', en: 'Entrepreneurship' },
        description: {
          nl: 'Onze studenten en klanten verlaten de studio met meer zelfvertrouwen en een ondernemende mindset.',
          en: 'Our students and clients leave the studio with more confidence and an entrepreneurial mindset.',
        },
      },
    ],
    team: {
      tag: { nl: 'Ons Team', en: 'Our Team' },
      title: { nl: 'Mensen achter de studio', en: 'People behind the studio' },
      members: [
        {
          name: '[Naam Stylist 1]',
          role: { nl: 'Hoofd Stylist & Oprichter', en: 'Head Stylist & Founder' },
          specialty: { nl: 'Kledingstijl & Kleuranalyse', en: 'Clothing Style & Colour Analysis' },
        },
        {
          name: '[Naam Docent 1]',
          role: { nl: 'Beauty Opleider', en: 'Beauty Trainer' },
          specialty: { nl: 'Haar & Nagels', en: 'Hair & Nails' },
        },
        {
          name: '[Naam Stylist 2]',
          role: { nl: 'Corporate Stylist', en: 'Corporate Stylist' },
          specialty: { nl: 'Zakelijk Kledingadvies', en: 'Business Styling' },
        },
      ],
    },
    partners: {
      tag: { nl: 'Onze Partners', en: 'Our Partners' },
      title: { nl: 'Samenwerking met de industrie', en: 'Collaboration with industry' },
      subtitle: {
        nl: 'Wij werken samen met toonaangevende namen in de beauty- en fashionwereld om onze studenten en klanten de beste ervaring te bieden.',
        en: 'We collaborate with leading names in the beauty and fashion world to offer our students and clients the best possible experience.',
      },
      items: ['BrainWash Kappers', 'Dutch Sustainable Fashion Week', 'Banlieue', 'Peter George d\'Angelino Tap', 'Studio Z'],
    },
  },

  contact: {
    hero: {
      tag: { nl: 'Contact', en: 'Contact' },
      title: { nl: 'Neem contact op', en: 'Get in touch' },
      subtitle: {
        nl: 'Heb je een vraag, wil je een consult boeken of meer weten over een opleiding? Wij staan voor je klaar.',
        en: 'Have a question, want to book a consult or learn more about a programme? We are here for you.',
      },
    },
    form: {
      name: { nl: 'Naam', en: 'Name' },
      email: { nl: 'E-mailadres', en: 'Email address' },
      subject: { nl: 'Onderwerp', en: 'Subject' },
      message: { nl: 'Bericht', en: 'Message' },
      submit: { nl: 'Verstuur Bericht', en: 'Send Message' },
      subjects: [
        { nl: 'Persoonlijk stijladvies', en: 'Personal style advice' },
        { nl: 'Kleuranalyse', en: 'Colour analysis' },
        { nl: 'Opleiding informatie', en: 'Course information' },
        { nl: 'In-company training', en: 'In-company training' },
        { nl: 'Overig', en: 'Other' },
      ],
      successMessage: {
        nl: 'Bedankt voor je bericht! Wij nemen zo snel mogelijk contact met je op.',
        en: 'Thank you for your message! We will get back to you as soon as possible.',
      },
    },
    info: {
      address: { nl: 'Adres', en: 'Address' },
      addressValue: '[Straat & Huisnummer], [Stad], [Postcode]',
      email: 'info@[studioname].nl',
      phone: '+31 (0)88 000 00 00',
      hours: {
        title: { nl: 'Openingstijden', en: 'Opening hours' },
        items: [
          { day: { nl: 'Maandag – Vrijdag', en: 'Monday – Friday' }, time: '09:00 – 18:00' },
          { day: { nl: 'Zaterdag', en: 'Saturday' }, time: '10:00 – 16:00' },
          { day: { nl: 'Zondag', en: 'Sunday' }, time: { nl: 'Gesloten', en: 'Closed' } },
        ],
      },
    },
  },

  footer: {
    tagline: {
      nl: 'Premium styling advies & professionele opleidingen.',
      en: 'Premium styling advice & professional training.',
    },
    diensten: { nl: 'Diensten', en: 'Services' },
    opleidingen: { nl: 'Opleidingen', en: 'Courses' },
    bedrijf: { nl: 'Bedrijf', en: 'Company' },
    copyright: {
      nl: '© 2025 [Studio Name]. Alle rechten voorbehouden.',
      en: '© 2025 [Studio Name]. All rights reserved.',
    },
  },
}
