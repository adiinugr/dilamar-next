import {
  HiChat,
  HiClipboardList,
  HiDesktopComputer,
  HiLightBulb,
  HiPencilAlt,
  HiPhotograph,
} from "react-icons/hi";

export const basic = [
  {
    id: 1,
    title: "Standard Undangan",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Google Maps",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Date Countdown",
    isAvailable: false,
  },
  {
    id: 4,
    title: "Music",
    isAvailable: false,
  },
  {
    id: 5,
    title: "Fitur Pesan",
    isAvailable: false,
  },
  {
    id: 6,
    title: "Gallery",
    isAvailable: false,
  },
  {
    id: 7,
    title: "Story",
    isAvailable: false,
  },
  {
    id: 8,
    title: "Custom Request",
    isAvailable: false,
  },
];

export const standard = [
  {
    id: 1,
    title: "Standard Undangan",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Google Maps",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Date Countdown",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Music",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Fitur Pesan",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Gallery",
    isAvailable: false,
  },
  {
    id: 7,
    title: "Story",
    isAvailable: false,
  },
  {
    id: 8,
    title: "Custom Request",
    isAvailable: false,
  },
];
export const premium = [
  {
    id: 1,
    title: "Standard Undangan",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Google Maps",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Date Countdown",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Music",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Fitur Pesan",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Gallery",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Story",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Custom Request",
    isAvailable: true,
  },
];

export const premiumImage = [
  {
    id: 1,
    url: "/images/first-meet.jpg",
  },
  {
    id: 2,
    url: "/images/first-date.jpg",
  },
  {
    id: 3,
    url: "/images/the-proposal.jpg",
  },
  {
    id: 4,
    url: "/images/jeremy-weddings.jpg",
  },
  {
    id: 5,
    url: "/images/man.jpg",
  },
  {
    id: 6,
    url: "/images/roses.jpg",
  },
];

export const galleryImage = [
  {
    id: 1,
    url: "/images/gallery/1.png",
  },
  {
    id: 2,
    url: "/images/gallery/2.png",
  },
  {
    id: 3,
    url: "/images/gallery/3.png",
  },
  {
    id: 4,
    url: "/images/gallery/4.png",
  },
  {
    id: 5,
    url: "/images/gallery/5.png",
  },
];

export const featuresData = [
  {
    id: 1,
    icon: (
      <HiDesktopComputer
        className="text-dark border-2 border-main rounded-full p-4"
        size={60}
      />
    ),
    title: "Tampilan Responsive",
    desc:
      "Tampilan website undangan kami akan menyesuaikan media yang digunakan pengguna. Jadi tidak perlu khawatir tampilannya rusak/ kepotong ya.",
  },
  {
    id: 2,
    icon: (
      <HiLightBulb
        className="text-dark border-2 border-main rounded-full p-4"
        size={60}
      />
    ),
    title: "Fitur Beragam",
    desc:
      "Ada banyak fitur seperti Google Maps, Pesan, Gallery, RSVP, dll. Kamu bahkan bisa request fitur yang belum ada di template.",
  },
  {
    id: 3,
    icon: (
      <HiPencilAlt
        className="text-dark border-2 border-main rounded-full p-4"
        size={60}
      />
    ),
    title: "Custom Request",
    desc:
      "Keunggulan kami adalah menerima permintaan pelanggan sesuai dengan kebutuhan.",
  },
  {
    id: 4,
    icon: (
      <HiClipboardList
        className="text-dark border-2 border-main rounded-full p-4"
        size={60}
      />
    ),
    title: "Bebas Pilih Template",
    desc: "Pilih desain yang kamu suka dan kami akan hadirkan untukkmu.",
  },
  {
    id: 5,
    icon: (
      <HiPhotograph
        className="text-dark border-2 border-main rounded-full p-4"
        size={60}
      />
    ),
    title: "Masukkin Foto Sepuasmu",
    desc:
      "Rasanya kurang jika sudah shoot banyak foto tapi yang bisa dimasukkin hanya satu dua. Di KataNikah tidak ada batasan dalam memasukkan foto, tenang saja.",
  },
  {
    id: 6,
    icon: (
      <HiChat
        className="text-dark border-2 border-main rounded-full p-4"
        size={60}
      />
    ),
    title: "Konsultasi Sepuasnya",
    desc:
      "Kamu bebas merencanakan ingin membuat undangan seperti apa. Konsultasikan dengan kami.",
  },
];

export const getStartedData = [
  {
    id: 1,
    number: "01",
    title: "Pilih Template",
    desc: "Tunjukkan desain undangan yang kamu inginkan.",
  },
  {
    id: 2,
    number: "02",
    title: "Sesuaikan",
    desc: "Pilih warna favoritmu, masukkan fotomu, detail pernikahanmu.",
  },
  {
    id: 3,
    number: "03",
    title: "Sebarkan",
    desc: "Kirimkan undangan websitemu ke teman dan kerabat tercintamu.",
  },
];

export const testimony = [
  {
    id: 1,
    text: "Please ini kece banget unadangan web nya!!! Thank you",
    author: "Hanny.",
  },
  {
    id: 2,
    text: "Wah.. Mantab! Terimakasi kaka. 😊😊😊",
    author: "Nanda A.",
  },
  {
    id: 3,
    text: "Sudah tak lihat dan hasilnya luar biasa 🤩👍🏻👍🏻",
    author: "Rosy",
  },
  {
    id: 4,
    text:
      "Kakk undangannya udah saya liat dan baguusssssss banget saya suka 😍",
    author: "May",
  },
];

export const faqData = [
  {
    id: 1,
    question: "Custom Request itu apa kak?",
    answer:
      "Semua fitur yang belum ada di KataNikah. Jadi jika kakak punya fitur yang ingin dipakai namun belum tercantum di paket, maka itu termasuk Custom Requset. Contohnya seperti RSVP, Add to Calendar, ingin tampilan khusus, dll",
  },
  {
    id: 2,
    question: "Berapa lama proses pengerjaannya?",
    answer:
      "Jika desain yang diinginkan sesuai template sekitar 3 hari. Namun jika ada request lain, bisa selesai sampai 1 minggu",
  },
  {
    id: 3,
    question: "Beneran bisa kasih foto sebanyak mungkin?",
    answer: "Yups.. Untuk paket premium bebas mau kasih foto berapapun.",
  },
];
