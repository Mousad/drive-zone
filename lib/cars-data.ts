export interface Car {
  id: string
  name: string
  nameEn: string
  category: 'luxury' | 'sedan' | 'suv'
  categoryAr: string
  pricePerDay: number
  pricePerWeek: number
  pricePerMonth: number
  image: string
  gallery: string[]
  specs: {
    seats: number
    transmission: string
    fuelType: string
    year: number
  }
  features: string[]
  description: string
}

export const cars: Car[] = [
  {
    id: 'mercedes-s-class',
    name: 'مرسيدس S-Class',
    nameEn: 'Mercedes S-Class',
    category: 'luxury',
    categoryAr: 'سيارات فاخرة',
    pricePerDay: 1500,
    pricePerWeek: 9000,
    pricePerMonth: 35000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80',
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=1200&q=80',
    ],
    specs: {
      seats: 5,
      transmission: 'أوتوماتيك',
      fuelType: 'بنزين',
      year: 2024,
    },
    features: ['نظام ملاحة', 'مقاعد جلد', 'كاميرا خلفية', 'بلوتوث', 'تكييف أوتوماتيك'],
    description: 'سيارة فاخرة بمواصفات عالية توفر أقصى درجات الراحة والأناقة',
  },
  {
    id: 'bmw-7-series',
    name: 'بي ام دبليو الفئة السابعة',
    nameEn: 'BMW 7 Series',
    category: 'luxury',
    categoryAr: 'سيارات فاخرة',
    pricePerDay: 1400,
    pricePerWeek: 8500,
    pricePerMonth: 32000,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
      'https://images.unsplash.com/photo-1520050206757-01b00f220fec?w=1200&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
    ],
    specs: {
      seats: 5,
      transmission: 'أوتوماتيك',
      fuelType: 'بنزين',
      year: 2024,
    },
    features: ['نظام ملاحة', 'مقاعد جلد', 'كاميرا 360', 'نظام صوتي فاخر', 'مثبت سرعة'],
    description: 'تجربة قيادة استثنائية مع أحدث التقنيات الألمانية',
  },
  {
    id: 'audi-a8',
    name: 'أودي A8',
    nameEn: 'Audi A8',
    category: 'luxury',
    categoryAr: 'سيارات فاخرة',
    pricePerDay: 1300,
    pricePerWeek: 8000,
    pricePerMonth: 30000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&q=80',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80',
    ],
    specs: {
      seats: 5,
      transmission: 'أوتوماتيك',
      fuelType: 'بنزين',
      year: 2024,
    },
    features: ['نظام ملاحة', 'مقاعد مُدفأة', 'فتحة سقف', 'شاشة لمس', 'مساعد ركن'],
    description: 'أناقة ألمانية مع تقنيات متطورة للرفاهية المطلقة',
  },
  {
    id: 'toyota-camry',
    name: 'تويوتا كامري',
    nameEn: 'Toyota Camry',
    category: 'sedan',
    categoryAr: 'سيارات سيدان',
    pricePerDay: 400,
    pricePerWeek: 2500,
    pricePerMonth: 9000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&q=80',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&q=80',
    ],
    specs: {
      seats: 5,
      transmission: 'أوتوماتيك',
      fuelType: 'بنزين',
      year: 2024,
    },
    features: ['بلوتوث', 'كاميرا خلفية', 'تكييف', 'مثبت سرعة'],
    description: 'سيارة عملية وموثوقة للاستخدام اليومي',
  },
  {
    id: 'honda-accord',
    name: 'هوندا أكورد',
    nameEn: 'Honda Accord',
    category: 'sedan',
    categoryAr: 'سيارات سيدان',
    pricePerDay: 380,
    pricePerWeek: 2300,
    pricePerMonth: 8500,
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80',
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=1200&q=80',
    ],
    specs: {
      seats: 5,
      transmission: 'أوتوماتيك',
      fuelType: 'بنزين',
      year: 2024,
    },
    features: ['شاشة لمس', 'بلوتوث', 'كاميرا خلفية', 'تكييف أوتوماتيك'],
    description: 'راحة وأداء متميز مع اقتصاد في استهلاك الوقود',
  },
  {
    id: 'nissan-altima',
    name: 'نيسان ألتيما',
    nameEn: 'Nissan Altima',
    category: 'sedan',
    categoryAr: 'سيارات سيدان',
    pricePerDay: 350,
    pricePerWeek: 2100,
    pricePerMonth: 8000,
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&q=80',
    ],
    specs: {
      seats: 5,
      transmission: 'أوتوماتيك',
      fuelType: 'بنزين',
      year: 2024,
    },
    features: ['بلوتوث', 'كاميرا خلفية', 'تكييف', 'نظام صوتي'],
    description: 'تصميم عصري مع تقنيات أمان متقدمة',
  },
  {
    id: 'range-rover-sport',
    name: 'رينج روفر سبورت',
    nameEn: 'Range Rover Sport',
    category: 'suv',
    categoryAr: 'سيارات SUV',
    pricePerDay: 1800,
    pricePerWeek: 11000,
    pricePerMonth: 42000,
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=1200&q=80',
      'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=1200&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80',
    ],
    specs: {
      seats: 7,
      transmission: 'أوتوماتيك',
      fuelType: 'بنزين',
      year: 2024,
    },
    features: ['دفع رباعي', 'نظام ملاحة', 'مقاعد جلد', 'فتحة سقف بانوراما', 'كاميرا 360'],
    description: 'فخامة بريطانية مع قدرات طرق وعرة استثنائية',
  },
  {
    id: 'toyota-land-cruiser',
    name: 'تويوتا لاندكروزر',
    nameEn: 'Toyota Land Cruiser',
    category: 'suv',
    categoryAr: 'سيارات SUV',
    pricePerDay: 1200,
    pricePerWeek: 7500,
    pricePerMonth: 28000,
    image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?w=1200&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    ],
    specs: {
      seats: 8,
      transmission: 'أوتوماتيك',
      fuelType: 'بنزين',
      year: 2024,
    },
    features: ['دفع رباعي', 'نظام ملاحة', 'مقاعد جلد', 'كاميرا خلفية', 'مثبت سرعة'],
    description: 'أسطورة الصحراء مع متانة لا تضاهى',
  },
  {
    id: 'mercedes-gle',
    name: 'مرسيدس GLE',
    nameEn: 'Mercedes GLE',
    category: 'suv',
    categoryAr: 'سيارات SUV',
    pricePerDay: 1400,
    pricePerWeek: 8500,
    pricePerMonth: 32000,
    image: 'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=1200&q=80',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
    ],
    specs: {
      seats: 5,
      transmission: 'أوتوماتيك',
      fuelType: 'بنزين',
      year: 2024,
    },
    features: ['دفع رباعي', 'نظام MBUX', 'مقاعد مُدفأة', 'كاميرا 360', 'مساعد ركن'],
    description: 'رفاهية SUV مع تقنيات مرسيدس المتطورة',
  },
]

export const categories = [
  {
    id: 'luxury',
    name: 'سيارات فاخرة',
    nameEn: 'Luxury',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    description: 'تجربة قيادة استثنائية مع أفخم السيارات',
  },
  {
    id: 'sedan',
    name: 'سيارات سيدان',
    nameEn: 'Sedan',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    description: 'راحة وعملية للاستخدام اليومي',
  },
  {
    id: 'suv',
    name: 'سيارات SUV',
    nameEn: 'SUV',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    description: 'قوة ومساحة لجميع المغامرات',
  },
]

export const locations = [
  'مدينة نصر',
  'المهندسين',
  'الزمالك',
  'مدينة 6 أكتوبر',
  'الشيخ زايد',
  'التجمع الخامس',
  'مطار القاهرة الدولي',
  'وسط البلد',
]
