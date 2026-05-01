export const homeImages = {
  hero: "/images/home-hero.jpg",
  about: "/images/home-about.jpg",
  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg"
  ]
};

export const defaultMenuSections = [
  {
    id: "starters",
    titleAr: "وجبة أولى",
    titleHe: "מנה ראשונה",
    items: [
      { id: 1, ar: "حمص", he: "חומוס", price: 30, image: "/images/hummus.jpg" },
      { id: 2, ar: "حمص فقع", he: "חומוס פטריות", price: 35, image: "/images/hummus.jpg" },
      { id: 3, ar: "طحينة", he: "טחינה", price: 30, image: "/images/hummus.jpg" },
      { id: 4, ar: "حمص لحمة", he: "חומוס בשר", price: 70, image: "/images/meat-hummus.jpg" },
      { id: 5, ar: "مسبحة", he: "מסבחה", price: 30, image: "/images/hummus.jpg" },
      { id: 6, ar: "لبنة", he: "לבנה", price: 35, image: "/images/labaneh.jpg" },
      { id: 7, ar: "باذنجان على النار", he: "חציל על האש", price: 35, image: "/images/eggplant.jpg" },
      { id: 8, ar: "سلطة عربية", he: "סלט ירקות", price: 30, image: "/images/salad.jpg" },
      { id: 9, ar: "سلطة تبولة", he: "סלט טבולה", price: 35, image: "/images/tabbouleh.jpg" },
      { id: 10, ar: "سلطة فتوش", he: "סלט פטוש", price: 40, image: "/images/fattoush.jpg" }
    ]
  },
  {
    id: "hot",
    titleAr: "وجبة ساخنة",
    titleHe: "מנה חמה",
    items: [
      { id: 11, ar: "فقع ساخن", he: "פטריות חמות", price: 45, image: "/images/mushrooms.jpg" },
      { id: 12, ar: "فقع موكرم", he: "פטריות מוקרמות", price: 60, image: "/images/mushrooms.jpg" },
      { id: 13, ar: "كبة 3 حبات", he: "קובה 3 יחידות", price: 30, image: "/images/kubbeh.jpg" },
      { id: 14, ar: "ورق عنب", he: "עלי גפן", price: 40, image: "/images/grape-leaves.jpg" },
      { id: 15, ar: "مجدرة / رز", he: "מגדרה / אורז", price: 35, image: "/images/rice.jpg" },
      { id: 16, ar: "بطاطا مقلية", he: "צ׳יפס", price: 25, image: "/images/fries.jpg" }
    ]
  },
  {
    id: "vegetarian",
    titleAr: "وجبة نباتية",
    titleHe: "מנות צמחוניות",
    items: [
      { id: 17, ar: "سباغتي صلصة بندورة", he: "ספגטי רוטב עגבניות", price: 65, image: "/images/pasta.jpg" },
      { id: 18, ar: "سباغتي صلصة كريمة", he: "ספגטי רוטב שמנת", price: 70, image: "/images/pasta.jpg" },
      { id: 19, ar: "رافيولي", he: "רביולי", price: 70, image: "/images/ravioli.jpg" }
    ]
  },
  {
    id: "main",
    titleAr: "مشاوي ووجبات رئيسية",
    titleHe: "מנות עיקריות",
    items: [
      { id: 20, ar: "شقف دجاج", he: "ששליק פרגיות", price: 80, image: "/images/chicken.jpg" },
      { id: 21, ar: "شقف خروف", he: "ששליק כבש", price: 90, image: "/images/lamb.jpg" },
      { id: 22, ar: "كباب حلبي", he: "קבב חלבי", price: 90, image: "/images/kebab.jpg" },
      { id: 23, ar: "لفة شامية", he: "לפה שאמי", price: 95, image: "/images/lafa.jpg" },
      { id: 24, ar: "ستيك انتريكوت", he: "סטייק אנטריקוט", price: 120, image: "/images/steak.jpg" },
      { id: 25, ar: "ستيك فيليه عجل", he: "סטייק פילה עגל", price: 130, image: "/images/steak.jpg" },
      { id: 26, ar: "أضلاع خروف", he: "צלעות כבש", price: 120, image: "/images/lamb-ribs.jpg" },
      { id: 27, ar: "شنيسيل", he: "שניצל", price: 70, image: "/images/schnitzel.jpg" },
      { id: 28, ar: "مشكل مشاوي", he: "גריל מעורב", price: 140, image: "/images/grill.jpg" }
    ]
  },
  {
    id: "drinks",
    titleAr: "مشروبات",
    titleHe: "שתייה",
    items: [
      { id: 29, ar: "مياه معدنية", he: "מים מינרלים", price: 10, image: "/images/drinks.jpg" },
      { id: 30, ar: "كوكا كولا", he: "קוקה קולה", price: 12, image: "/images/drinks.jpg" },
      { id: 31, ar: "سبرايت", he: "ספרייט", price: 12, image: "/images/drinks.jpg" },
      { id: 32, ar: "فانتا", he: "פאנטה", price: 12, image: "/images/drinks.jpg" },
      { id: 33, ar: "كأس ليمونادا", he: "כוס לימונדה", price: 15, image: "/images/lemonade.jpg" },
      { id: 34, ar: "إبريق ليمونادا", he: "קנקן לימונדה", price: 35, image: "/images/lemonade.jpg" },
      { id: 35, ar: "مشروب طاقة XL", he: "XL", price: 15, image: "/images/drinks.jpg" }
    ]
  },
  {
    id: "desserts",
    titleAr: "حلويات",
    titleHe: "קינוחים",
    items: [
      { id: 36, ar: "كنافة بيتية", he: "כנאפה ביתית", price: 30, image: "/images/knafeh.jpg" },
      { id: 37, ar: "مهلبية / سحلب", he: "מהלבי / סחלב", price: 20, image: "/images/dessert.jpg" },
      { id: 38, ar: "رز بحليب", he: "אורז עם חלב", price: 30, image: "/images/dessert.jpg" }
    ]
  }
];
export const menuSections = defaultMenuSections;