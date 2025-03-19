export const siteConfig = {
  name: "Maros Molnár",
  description: "Profesionálny fitness tréner a fyzioterapeut",
  url: "https://marosmolnar.sk",
  ogImage: "/images/og-image.jpg",
  links: {
    instagram: "https://instagram.com/marosmolnar",
    facebook: "https://facebook.com/marosmolnar",
    email: "info@marosmolnar.sk",
    phone: "+421900000000", // Replace with actual phone number
  },
}

export const navLinks = [
  {
    title: "Domov",
    href: "/",
  },
  {
    title: "O mne",
    href: "/o-mne",
  },
  {
    title: "Služby",
    href: "/sluzby",
    children: [
      {
        title: "Fitness tréning",
        href: "/sluzby/fitness",
        description: "Individuálne tréningové plány a osobný tréning",
      },
      {
        title: "Fyzioterapia",
        href: "/sluzby/fyzioterapia",
        description: "Odborná fyzioterapia a rehabilitácia",
      },
    ],
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
]

export const services = {
  fitness: {
    title: "Fitness Tréning",
    description: "Individuálne tréningové plány a osobný tréning",
    features: [
      {
        title: "Osobný tréning",
        description: "Individuálne tréningy pod mojím dohľadom",
        price: "30€ / hodina",
      },
      {
        title: "Tréningový plán",
        description: "Vytvorenie individuálneho tréningového plánu",
        price: "od 50€",
      },
      {
        title: "Online koučing",
        description: "Pravidelné konzultácie a úpravy tréningového plánu",
        price: "od 80€ / mesiac",
      },
    ],
  },
  physio: {
    title: "Fyzioterapia",
    description: "Odborná fyzioterapia a rehabilitácia",
    features: [
      {
        title: "Diagnostika",
        description: "Komplexné vyšetrenie a diagnostika problému",
        price: "40€ / hodina",
      },
      {
        title: "Rehabilitácia",
        description: "Liečebná rehabilitácia a cvičenia",
        price: "35€ / hodina",
      },
      {
        title: "Manuálna terapia",
        description: "Špecializované techniky manuálnej terapie",
        price: "40€ / hodina",
      },
    ],
  },
}

export const testimonials = [
  {
    name: "Peter Novák",
    text: "Vďaka Marošovi som sa zbavil dlhodobých bolestí chrbta a zlepšil svoju kondíciu. Jeho prístup je profesionálny a výsledky sú viditeľné.",
    image: "/images/testimonials/peter.jpg",
  },
  {
    name: "Jana Kováčová",
    text: "Maroš mi pomohol po zranení kolena. Jeho odborné znalosti a individuálny prístup mi pomohli vrátiť sa späť k športu rýchlejšie, ako som očakávala.",
    image: "/images/testimonials/jana.jpg",
  },
  {
    name: "Martin Horváth",
    text: "S Marošom trénujem už rok a výsledky sú neuveriteľné. Jeho tréningové plány sú efektívne a vždy prispôsobené mojim potrebám.",
    image: "/images/testimonials/martin.jpg",
  },
]
