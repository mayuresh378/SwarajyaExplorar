import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { BilingualText } from '../types';

interface Treasure {
  num: string;
  title: BilingualText;
  desc: BilingualText;
  image: string;
}

const treasures: Treasure[] = [
  {
    num: '01',
    title: { mr: 'दुर्गवैभव : भव्य किल्ले', en: 'Durga Vaibhav: The Majestic Forts' },
    desc: { mr: 'महाराष्ट्रातील नऊ ऐतिहासिक किल्ल्यांचा शोध घ्या. प्रत्येक किल्ला शौर्य आणि सामरिक तेजाची थरारक कथा सांगतो — छत्रपती शिवाजी महाराजांच्या दूरदृष्टीचा साक्षीदार.', en: 'Explore nine historic forts of Maharashtra. Each fort depicts thrilling tales of valor and strategic brilliance — a testament to the vision of Chhatrapati Shivaji Maharaj.' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Raigad_Fort_Aerial.jpg/1280px-Raigad_Fort_Aerial.jpg',
  },
  {
    num: '02',
    title: { mr: 'शस्त्र दालन', en: 'Shastra Daalan: Hall of Arms' },
    desc: { mr: 'मराठा योद्ध्यांनी वापरलेल्या तलवारी, चिलखत आणि शस्त्रांचा संग्रह. या ऐतिहासिक युद्धसाधनांमागील कलाकुसर, सामर्थ्य आणि शौर्याचा अनुभव घ्या.', en: 'A gallery of swords, armor, and weapons once used by Maratha warriors. Discover the artistry, power, and spirit behind these historic tools of battle.' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pratapgad_fort.jpg/1280px-Pratapgad_fort.jpg',
  },
  {
    num: '03',
    title: { mr: 'राज्याभिषेक सोहळा', en: 'The Coronation' },
    desc: { mr: '६ जून १६७४ रोजी रायगडावर झालेला छत्रपती शिवाजी महाराजांचा भव्य राज्याभिषेक. स्वराज्याच्या स्थापनेचा आणि सार्वभौमत्वाचा ऐतिहासिक क्षण पुन्हा अनुभवा.', en: 'The grand coronation of Chhatrapati Shivaji Maharaj at Raigad on June 6, 1674. Relive the historic moment of Swarajya\'s establishment and sovereignty.' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Rajgad_Balekilla.jpg/1280px-Rajgad_Balekilla.jpg',
  },
  {
    num: '04',
    title: { mr: 'सागरी दुर्ग', en: 'The Sea Forts' },
    desc: { mr: 'अरबी समुद्रातील सिंधुदुर्ग आणि विजयदुर्ग — मराठा आरमाराची शान. नौदल वास्तुकलेचा उत्कृष्ट नमुना आणि कोकण किनारपट्टीच्या रक्षणाची कहाणी.', en: 'Sindhudurg and Vijaydurg in the Arabian Sea — the pride of the Maratha Navy. Masterpieces of naval architecture and guardians of the Konkan coast.' },
    image: '/images/sindhudurg/cover.jpeg',
  },
];

export default function TreasuresShowcase() {
  const { t } = useLanguage();

  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 pattern-overlay opacity-40"></div>
      <div className="container-premium relative">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4 justify-center"
          >
            {t({ mr: 'अनमोल वारसा', en: 'Priceless Heritage' })}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mb-5"
          >
            {t({ mr: 'स्वराज्याचे खजिने', en: 'Treasures of Swarajya' })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink-soft text-lg"
          >
            {t({ mr: 'स्वराज्याच्या भावनेचे प्रतीक असलेल्या अमूल्य वारशाचा शोध घ्या.', en: 'Explore the priceless relics that embody the spirit of Swarajya.' })}
          </motion.p>
        </div>

        <div className="space-y-24">
          {treasures.map((treasure, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`relative ${isReversed ? 'lg:order-2' : ''}`}
                >
                  <div className="rounded-3xl overflow-hidden glow-saffron">
                    <img src={treasure.image} alt={t(treasure.title)} className="w-full h-[420px] object-cover" loading="lazy" />
                  </div>
                  {/* Large number badge */}
                  <div className={`absolute -top-6 ${isReversed ? '-right-4' : '-left-4'} font-display text-7xl font-bold gold-text opacity-90`}>
                    {treasure.num}
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={isReversed ? 'lg:order-1' : ''}
                >
                  <span className="font-display text-sm font-bold tracking-[0.3em]" style={{ color: 'var(--saffron)' }}>
                    {treasure.num}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-ink mt-3 mb-5 leading-tight">
                    {t(treasure.title)}
                  </h3>
                  <div className="w-16 h-1 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, var(--saffron), var(--gold))' }}></div>
                  <p className="text-ink-soft text-lg leading-relaxed">
                    {t(treasure.desc)}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
