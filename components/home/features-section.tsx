import { Calendar, UserCheck, Zap } from 'lucide-react'

const features = [

  {
    icon: UserCheck,
    title: 'العمر +21',
    description: 'نرحب بجميع العملاء الذين تتجاوز أعمارهم 21 عاماً',
  },
  {
    icon: Zap,
    title: 'حجز فوري',
    description: 'احجز سيارتك في دقائق واستلمها في الموعد المحدد',
  },

    {
    icon: Calendar,
    title: 'الحد الأدنى للتأجير 5 أيام',
    description: 'نوفر لك المرونة في اختيار مدة الإيجار المناسبة لاحتياجاتك',
  },
]

export function FeaturesSection() {
  return (
   <section className="py-8 bg-secondary">
  <div className="container mx-auto px-4 lg:px-8">
    
    <div className="grid grid-cols-2 gap-4">

      {features.map((feature, index) => (
        <div
          key={index}
          className={`
            bg-card rounded-2xl p-8 text-center shadow-sm
            ${index === 2 ? 'col-span-2 flex justify-center' : ''}
          `}
        >
          <div className={`${index === 2 ? 'max-w-sm w-full' : ''}`}>

            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <feature.icon className="w-8 h-8 text-accent" />
            </div>

            <h3 className="text-[20px] font-bold text-primary mb-3">
              {feature.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>
  )
}
