import {
  HiChat,
  HiClipboardList,
  HiDesktopComputer,
  HiLightBulb,
  HiPencilAlt,
  HiPhotograph
} from "react-icons/hi";

export const templateData = [
  {
    id: 1,
    name: "Basic 1",
    imageSrc: "/images/mockup/basic-1.png",
    link: "/template/basic1"
  },
  {
    id: 2,
    name: "Basic 2",
    imageSrc: "/images/mockup/basic-2.png",
    link: "/template/basic2"
  },
  {
    id: 3,
    name: "Basic 2",
    imageSrc: "/images/mockup/basic-3.png",
    link: "/template/basic2"
  },
  {
    id: 4,
    name: "Standard 1",
    imageSrc: "/images/mockup/standard-1.png",
    link: "/template/standard1/Nama+Tamu"
  },
  {
    id: 5,
    name: "Standard 2",
    imageSrc: "/images/mockup/standard-2.png",
    link: "/template/standard2/Nama+Tamu"
  },
  {
    id: 6,
    name: "Standard 3",
    imageSrc: "/images/mockup/standard-3.png",
    link: "/template/standard3/Nama+Tamu"
  },
  {
    id: 7,
    name: "Premium 1",
    imageSrc: "/images/mockup/premium-1.png",
    link: "/template/premium1/Nama+Tamu"
  },
  {
    id: 8,
    name: "Premium 2",
    imageSrc: "/images/mockup/premium-2.png",
    link: "/template/premium2/Nama+Tamu"
  },
  {
    id: 9,
    name: "Premium 3",
    imageSrc: "/images/mockup/premium-3.png",
    link: "/template/premium3/Nama+Tamu"
  }
];

export const packageLists = [
  {
    id: 1,
    title: "Standard Undangan",
    isBasic: true,
    isStandard: true,
    isPremium: true
  },
  {
    id: 2,
    title: "Google Maps",
    isBasic: true,
    isStandard: true,
    isPremium: true
  },
  {
    id: 3,
    title: "Date Countdown",
    isBasic: false,
    isStandard: true,
    isPremium: true
  },
  {
    id: 4,
    title: "Nama Tamu",
    isBasic: false,
    isStandard: true,
    isPremium: true
  },
  {
    id: 5,
    title: "Music",
    isBasic: false,
    isStandard: true,
    isPremium: true
  },
  {
    id: 6,
    title: "Fitur Pesan",
    isBasic: false,
    isStandard: true,
    isPremium: true
  },
  {
    id: 7,
    title: "Gallery",
    isBasic: false,
    isStandard: false,
    isPremium: true
  },
  {
    id: 8,
    title: "RSVP",
    isBasic: false,
    isStandard: false,
    isPremium: true
  },
  {
    id: 9,
    title: "Story",
    isBasic: false,
    isStandard: false,
    isPremium: true
  },
  {
    id: 10,
    title: "Request Fitur",
    isBasic: false,
    isStandard: false,
    isPremium: true
  }
];

export const premiumImage = [
  {
    id: 1,
    url: "/images/first-meet.jpg"
  },
  {
    id: 2,
    url: "/images/first-date.jpg"
  },
  {
    id: 3,
    url: "/images/the-proposal.jpg"
  },
  {
    id: 4,
    url: "/images/jeremy-weddings.jpg"
  },
  {
    id: 5,
    url: "/images/man.jpg"
  },
  {
    id: 6,
    url: "/images/roses.jpg"
  }
];

export const galleryImage = [
  {
    id: 1,
    url: "/images/gallery/1.png"
  },
  {
    id: 2,
    url: "/images/gallery/2.png"
  },
  {
    id: 3,
    url: "/images/gallery/3.png"
  },
  {
    id: 4,
    url: "/images/gallery/4.png"
  },
  {
    id: 5,
    url: "/images/gallery/5.png"
  }
];

export const featuresData = [
  {
    id: 1,
    icon: (
      <HiDesktopComputer
        className="text-dark border-2 border-dark rounded-full p-4"
        size={60}
      />
    ),
    title: "Tampilan Responsive",
    desc: "Tampilan website undangan kami akan menyesuaikan media yang digunakan pengguna. Jadi tidak perlu khawatir tampilannya rusak/ kepotong ya."
  },
  {
    id: 2,
    icon: (
      <HiLightBulb
        className="text-dark border-2 border-dark rounded-full p-4"
        size={60}
      />
    ),
    title: "Fitur Beragam",
    desc: "Ada banyak fitur seperti Google Maps, Pesan, Gallery, RSVP, dll. Kamu bahkan bisa request fitur yang belum ada di template."
  },
  {
    id: 3,
    icon: (
      <HiPencilAlt
        className="text-dark border-2 border-dark rounded-full p-4"
        size={60}
      />
    ),
    title: "Custom Request",
    desc: "Keunggulan kami adalah menerima permintaan pelanggan sesuai dengan kebutuhan."
  },
  {
    id: 4,
    icon: (
      <HiClipboardList
        className="text-dark border-2 border-dark rounded-full p-4"
        size={60}
      />
    ),
    title: "Bebas Pilih Template",
    desc: "Pilih desain yang kamu suka dan kami akan hadirkan untukkmu."
  },
  {
    id: 5,
    icon: (
      <HiPhotograph
        className="text-dark border-2 border-dark rounded-full p-4"
        size={60}
      />
    ),
    title: "Masukkin Foto Sepuasmu",
    desc: "Rasanya kurang jika sudah shoot banyak foto tapi yang bisa dimasukkin hanya satu dua. Di KataNikah tidak ada batasan dalam memasukkan foto, tenang saja."
  },
  {
    id: 6,
    icon: (
      <HiChat
        className="text-dark border-2 border-dark rounded-full p-4"
        size={60}
      />
    ),
    title: "Konsultasi Sepuasnya",
    desc: "Kamu bebas merencanakan ingin membuat undangan seperti apa. Konsultasikan dengan kami."
  }
];

export const getStartedData = [
  {
    id: 1,
    number: "01",
    title: "Pilih Template",
    desc: "Tunjukkan desain undangan yang kamu inginkan."
  },
  {
    id: 2,
    number: "02",
    title: "Sesuaikan",
    desc: "Pilih warna favoritmu, masukkan fotomu, detail pernikahanmu."
  },
  {
    id: 3,
    number: "03",
    title: "Sebarkan",
    desc: "Kirimkan undangan websitemu ke teman dan kerabat tercintamu."
  }
];

export const testimony = [
  {
    id: 1,
    text: "Please ini kece banget unadangan web nya!!! Thank you",
    author: "Hanny."
  },
  {
    id: 2,
    text: "Wah.. Mantab! Terimakasi kaka. 😊😊😊",
    author: "Nanda A."
  },
  {
    id: 3,
    text: "Sudah tak lihat dan hasilnya luar biasa 🤩👍🏻👍🏻",
    author: "Rosy"
  },
  {
    id: 4,
    text: "Kakk undangannya udah saya liat dan baguusssssss banget saya suka 😍",
    author: "May"
  }
];

export const faqData = [
  {
    id: 1,
    question: "Request Fitur itu apa kak?",
    answer:
      "Jika kakak punya fitur yang ingin dipakai namun belum tercantum di paket, kakak boleh request kepada kami untuk membuatkannya. Namun fitur ini hanya ada di paket Premium."
  },
  {
    id: 2,
    question: "Berapa lama proses pengerjaannya?",
    answer:
      "Jika desain yang diinginkan sesuai template sekitar 3 hari. Namun jika ada request lain, bisa selesai sampai 1 minggu"
  },
  {
    id: 3,
    question: "Beneran bisa kasih foto sebanyak mungkin?",
    answer: "Yups.. Untuk paket premium bebas mau kasih foto berapapun."
  }
];
