export interface AvailableEvent {
  id: number;
  banner: string;
  title: string;
  date: string;
  location: string;
  city: string;
  eventType: string;
  remainingTickets: number;
}

export const eventsData: AvailableEvent[] = [
  {
    id: 1111,
    banner:
      "https://fastly.picsum.photos/id/453/2048/1365.jpg?hmac=A8uxtdn4Y600Z5b2ngnn9hCXAx8sUnOVzprtDnz6DK8",
    title: "کنسرت یک خواننده معروف",
    date: "جمعه ۲۸ دی",
    location: "سالن میلاد نمایشگاه بین المللی",
    city: "تهران",
    eventType: "کنسرت‌ها",
    remainingTickets: 20,
  },
  {
    id: 1112,
    banner:
      "https://fastly.picsum.photos/id/494/5000/3334.jpg?hmac=zEUiTgRPj1Xeuka128IHrqzAU6wxINtDC4LAj6xn27k",
    title: "نمایش یک روز خاموش",
    date: "چهارشنبه ۲۶ دی تا ۳ بهمن",
    location: "پردیس تئاتر شهرزاد",
    city: "تهران",
    eventType: "تئاترها",
    remainingTickets: 200,
  },
  {
    id: 1113,
    banner:
      "https://fastly.picsum.photos/id/782/5000/3338.jpg?hmac=N-aQ1v5OWZf20ryx2eZuf5tq01fUMtf9dd_D9tqkkJ4",
    title: "تنهایی یک مرد (مفهوم زندگی)",
    date: "پنجشنبه ۴ بهمن",
    location: "سالن تئاتر مرکزی",
    city: "تهران",
    eventType: "تئاترها",
    remainingTickets: 0,
  },
  {
    id: 1114,
    banner:
      "https://fastly.picsum.photos/id/998/5000/3338.jpg?hmac=yaE-JjQeaQRYhB_8W8mnYhtR_neSbokA38UUjNgxbDw",
    title: "نامه ای به خود",
    date: "سه شنبه ۲۵ دی",
    location: "سالن شرق مال",
    city: "تهران",
    eventType: "تئاترها",
    remainingTickets: 64,
  },
  {
    id: 1115,
    banner:
      "https://fastly.picsum.photos/id/158/4836/3224.jpg?hmac=Gu_3j3HxZgR74iw1sV0wcwlnSZSeCi7zDWLcjblOp_c",
    title: "کنسرت گروه جدید بند",
    date: "سه شنبه ۲۵ تا ۳۰ دی",
    location: "تالار مرکزی",
    city: "شیراز",
    eventType: "کنسرت‌ها",
    remainingTickets: 117,
  },
  {
    id: 1116,
    banner:
      "https://fastly.picsum.photos/id/1082/5000/3334.jpg?hmac=44XgU_oubiefk4FmdomL506on7YDW51TgGUmsau8PRE",
    title: "کنسرت گروه ارکستر صدای زندگی",
    date: "شنبه ۲۲ تا ۲۳ دی",
    location: "سالن اجرای موسیقی",
    city: "کرج",
    eventType: "کنسرت‌ها",
    remainingTickets: 35,
  },
  {
    id: 1117,
    banner:
      "https://fastly.picsum.photos/id/1014/5000/3324.jpg?hmac=Wk6ynFuJCtugtEXeG6ZMadyuE9ICbZJI-pUMsAKw0y8",
    title: "من بی تو - نمایشنامه خوانی",
    date: "شنبه ۲۹ دی تا ۲ بهمن",
    location: "سالن تئاتر شهر",
    city: "اصفهان",
    eventType: "تئاترها",
    remainingTickets: 72,
  },
  {
    id: 1118,
    banner:
      "https://fastly.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4",
    title: "کنسرت خواننده معروف",
    date: "سه شنبه ۲۵ تا ۲۶ دی",
    location: "سالن موسیقی مرکزی",
    city: "اصفهان",
    eventType: "کنسرت‌ها",
    remainingTickets: 94,
  },
  {
    id: 1119,
    banner:
      "https://fastly.picsum.photos/id/334/2304/1536.jpg?hmac=ihrh84KbSSW-zvp-oRz8FGCVOWvPAD3SZvYPS0v3mv8",
    title: "دوئت گیتار گروه راک بند",
    date: "سه شنبه ۲۵ دی",
    location: "سالن برج میلاد",
    city: "تهران",
    eventType: "کنسرت‌ها",
    remainingTickets: 13,
  },
  {
    id: 1120,
    banner:
      "https://fastly.picsum.photos/id/452/4096/2722.jpg?hmac=VFr5l8FshPX1LW4DCpHm99QQgWMsHW5Lr70-6ZQZuFg",
    title: "کنسرت خواننده محبوب",
    date: "پنجشنبه ۲۷ دی",
    location: "تالار اصلی شهر",
    city: "رشت",
    eventType: "کنسرت‌ها",
    remainingTickets: 98,
  },
  {
    id: 1121,
    banner:
      "https://fastly.picsum.photos/id/317/1935/1089.jpg?hmac=veRodF8Ti5rEi0KWd2JMP9fUYm8jtTlq2zdmLCUM0uc",
    title: "آنسوی پل",
    date: "جمعه ۲۸ دی",
    location: "سالن تئاتر شهر",
    city: "تهران",
    eventType: "تئاترها",
    remainingTickets: 0,
  },
  {
    id: 1122,
    banner:
      "https://fastly.picsum.photos/id/679/2448/2448.jpg?hmac=71JYlO1_4t9oZQ1G9ssLs7psBq6Su6iOKOKzcj8g1UQ",
    title: "نمایش پیتر",
    date: "چهارشنبه ۳ تا ۵ بهمن",
    location: "سالن تئاتر شهر",
    city: "کرج",
    eventType: "تئاترها",
    remainingTickets: 70,
  },
  {
    id: 1123,
    banner:
      "https://fastly.picsum.photos/id/352/3264/2176.jpg?hmac=3yabp6hSm3kYnpkVROyHcC_yE0AH6eRGotMnyBnPnRc",
    title: "نمایش موزیکال شب",
    date: "پنجشنبه ۲۷ دی",
    location: "تالار بزرگ مال",
    city: "تهران",
    eventType: "کنسرت‌ها",
    remainingTickets: 0,
  },
  {
    id: 1124,
    banner:
      "https://fastly.picsum.photos/id/318/3264/2448.jpg?hmac=zkYZ29-Ww_A4O_kZ3gjlpFQuEYELWgeM6aI_CMG01BU",
    title: "پاریس من (نمایش فرنگی)",
    date: "سه شنبه ۲ تا ۵ بهمن",
    location: "سالن شهرداری",
    city: "گرگان",
    eventType: "تئاترها",
    remainingTickets: 120,
  },
  {
    id: 1125,
    banner:
      "https://fastly.picsum.photos/id/240/2972/1932.jpg?hmac=jSM5F-6jynDsu3mm6G_xzUttYE2MkdnwkqwsmDfjeFs",
    title: "اپرای زنان کوچک",
    date: "پنجشنبه ۴ تا ۵ بهمن",
    location: "سالن موسیقی مرکزی",
    city: "تبریز",
    eventType: "کنسرت‌ها",
    remainingTickets: 234,
  },
  {
    id: 1126,
    banner:
      "https://fastly.picsum.photos/id/117/1544/1024.jpg?hmac=xFWtVUv1xkFVVidifC3drKerU_k_za4w28fv5etvxRc",
    title: "کنسرت تازه بند",
    date: "سه شنبه ۲۵ دی",
    location: "سالن مال غربی",
    city: "تهران",
    eventType: "کنسرت‌ها",
    remainingTickets: 102,
  },
  {
    id: 1127,
    banner:
      "https://fastly.picsum.photos/id/819/3264/3264.jpg?hmac=1ZalXesmDNvJwkdpJ1VWdeyBrZT40CSEk3cZ_LDyQsI",
    title: "نمایش درهای بهشت",
    date: "سه شنبه ۲۵ دی",
    location: "سالن مال غربی",
    city: "تهران",
    eventType: "تئاترها",
    remainingTickets: 0,
  },
  {
    id: 1128,
    banner:
      "https://fastly.picsum.photos/id/1079/4496/3000.jpg?hmac=G-dJcpU08vEMqjUz2rb3IxjOG99rcePqW9BF1IsPLf0",
    title: "تئاتر موزیکال شکسپیر",
    date: "شنبه ۲۹ دی تا ۱ بهمن",
    location: "تالار بزرگ شهر",
    city: "قزوین",
    eventType: "تئاترها",
    remainingTickets: 67,
  },
];
