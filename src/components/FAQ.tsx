import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BilingualText } from '../types';
import { Reveal } from './Reveal';

const faqs: { q: BilingualText; a: BilingualText }[] = [
  {
    q: { mr: 'स्वराज्य एक्सप्लोरर म्हणजे काय?', en: 'What is Swarajya Explorer?' },
    a: { mr: 'स्वराज्य एक्सप्लोरर हे महाराष्ट्राच्या ऐतिहासिक किल्ल्यांचा डिजिटल वारसा अनुभव देणारे व्यासपीठ आहे. यात इतिहास, ट्रेकिंग माहिती, नकाशे आणि कथा एकत्र आहेत.', en: 'Swarajya Explorer is a digital heritage platform offering an immersive experience of Maharashtra\'s historic forts, combining history, trekking information, maps, and stories.' },
  },
  {
    q: { mr: 'किल्ल्यांची माहिती किती भाषांमध्ये उपलब्ध आहे?', en: 'In how many languages is the fort information available?' },
    a: { mr: 'सर्व माहिती मराठी आणि इंग्रजी या दोन्ही भाषांमध्ये उपलब्ध आहे. नेव्हिगेशन बारमधील भाषा स्विचरने तुम्ही भाषा बदलू शकता.', en: 'All information is available in both Marathi and English. You can switch languages using the language switcher in the navigation bar.' },
  },
  {
    q: { mr: 'मी माझ्या ट्रेकचे नियोजन कसे करू शकतो?', en: 'How can I plan my trek?' },
    a: { mr: 'प्रत्येक किल्ल्याच्या पानावर ट्रेक कठीणता, कालावधी, उंची, सर्वोत्तम हंगाम, पाणी उपलब्धता आणि कॅम्पिंग माहिती दिलेली आहे. हवामान अपडेट्स देखील उपलब्ध आहेत.', en: 'Each fort page provides trek difficulty, duration, altitude, best season, water availability, and camping info. Live weather updates are also available.' },
  },
  {
    q: { mr: 'ट्रेक पासपोर्ट म्हणजे काय?', en: 'What is the Trek Passport?' },
    a: { mr: 'ट्रेक पासपोर्टमध्ये तुम्ही भेट दिलेले किल्ले चिन्हांकित करू शकता, आवडते जतन करू शकता आणि इच्छासूची तयार करू शकता. तुमची प्रगती ट्रॅक करा.', en: 'The Trek Passport lets you mark visited forts, save favorites, and build a wishlist. Track your exploration progress over time.' },
  },
  {
    q: { mr: 'हे व्यासपीठ शाळा आणि महाविद्यालयांसाठी उपयुक्त आहे का?', en: 'Is this platform useful for schools and colleges?' },
    a: { mr: 'होय! स्वराज्य एक्सप्लोरर हे विद्यार्थ्यांसाठी इतिहास शिकण्याचे उत्कृष्ट साधन आहे. इंटरॅक्टिव्ह कालरेषा, वीर योद्ध्यांची माहिती आणि प्रश्नमंजुषा शिक्षणासाठी आदर्श आहेत.', en: 'Yes! Swarajya Explorer is an excellent educational tool for students. The interactive timeline, heroes section, and quiz are ideal for learning.' },
  },
  {
    q: { mr: 'किल्ल्यांचे नकाशे आणि स्थान कसे पाहावे?', en: 'How do I view fort maps and locations?' },
    a: { mr: 'इंटरॅक्टिव्ह नकाशा पानावर महाराष्ट्रातील सर्व किल्ले दाखवले आहेत. कोणत्याही मार्करवर क्लिक करून किल्ल्याचे तपशील पहा.', en: 'The interactive map page shows all forts across Maharashtra. Click any marker to view fort details and navigate to its page.' },
  },
];

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-spacing border-t border-white/5">
      <div className="container-premium">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow mb-4 justify-center">{t({ mr: 'मदत केंद्र', en: 'Help Center' })}</p>
            <h2 className="heading-lg">{t({ mr: 'वारंवार विचारले जाणारे प्रश्न', en: 'Frequently Asked Questions' })}</h2>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="glass-surface rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-semibold text-white text-lg">{t(faq.q)}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(217, 119, 6, 0.15)' }}>
                    {open === i ? <Minus className="w-4 h-4" style={{ color: 'var(--gold)' }} /> : <Plus className="w-4 h-4" style={{ color: 'var(--gold)' }} />}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate-400 leading-relaxed">{t(faq.a)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
