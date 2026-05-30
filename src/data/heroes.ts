import { Hero } from '../types';

export const heroes: Hero[] = [
  {
    id: 'jijabai',
    name: { mr: 'राजमाता जिजाबाई', en: 'Rajmata Jijabai' },
    title: { mr: 'स्वराज्याची जननी', en: 'Mother of Swarajya' },
    biography: {
      mr: 'जिजाबाई या शिवाजी महाराजांच्या आई होत्या. त्यांनी शिवाजींना स्वराज्याची प्रेरणा दिली आणि रामायण-महाभारतातील कथांद्वारे त्यांच्यात शौर्य आणि धर्मनिष्ठा रुजवली. त्या एक कुशल प्रशासक आणि धोरणी राजमाता होत्या.',
      en: 'Jijabai was the mother of Shivaji Maharaj. She inspired him with stories from Ramayana and Mahabharata, instilling courage and righteousness. She was a skilled administrator and visionary queen mother.'
    },
    contributions: [
      { mr: 'शिवाजी महाराजांना स्वराज्याची प्रेरणा', en: 'Inspired Shivaji Maharaj towards Swarajya' },
      { mr: 'कुशल प्रशासन आणि मार्गदर्शन', en: 'Skilled administration and guidance' },
      { mr: 'धार्मिक आणि सांस्कृतिक मूल्यांचे संवर्धन', en: 'Preservation of religious and cultural values' },
    ],
    birthYear: 1598,
    deathYear: 1674,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Rajmata_Jijabai.jpg/440px-Rajmata_Jijabai.jpg',
    relatedForts: ['shivneri', 'raigad'],
    category: 'queen',
  },
  {
    id: 'tanaji',
    name: { mr: 'सुभेदार तानाजी मालुसरे', en: 'Subedar Tanaji Malusare' },
    title: { mr: 'सिंहगडचा सिंह', en: 'The Lion of Sinhagad' },
    biography: {
      mr: 'तानाजी मालुसरे हे शिवाजी महाराजांचे बालमित्र आणि विश्वासू सरदार होते. त्यांनी ४ फेब्रुवारी १६७० रोजी सिंहगडची लढाई लढली. मुलाच्या लग्नाला सोडून ते किल्ला जिंकण्यासाठी गेले आणि वीरगती प्राप्त केली. "गड आला पण सिंह गेला" हे शिवाजी महाराजांचे उद्गार.',
      en: 'Tanaji Malusare was a childhood friend and trusted commander of Shivaji Maharaj. He fought the Battle of Sinhagad on February 4, 1670. He left his son\'s wedding to capture the fort and attained martyrdom. Shivaji Maharaj said "The fort is won but the lion is lost".'
    },
    contributions: [
      { mr: 'सिंहगडची लढाई जिंकली', en: 'Won the Battle of Sinhagad' },
      { mr: 'स्वराज्यासाठी सर्वोच्च बलिदान', en: 'Supreme sacrifice for Swarajya' },
      { mr: 'अतुलनीय शौर्य आणि निष्ठेचे प्रतीक', en: 'Symbol of unmatched bravery and loyalty' },
    ],
    birthYear: 1600,
    deathYear: 1670,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tanaji_Malusare.jpg/440px-Tanaji_Malusare.jpg',
    relatedForts: ['sinhagad'],
    category: 'warrior',
  },
  {
    id: 'bajiprabhu',
    name: { mr: 'बाजी प्रभू देशपांडे', en: 'Baji Prabhu Deshpande' },
    title: { mr: 'पावनखिंडचा वीर', en: 'Hero of Pawan Khind' },
    biography: {
      mr: 'बाजी प्रभू देशपांडे हे शिवाजी महाराजांचे विश्वासू सरदार होते. १६६० मध्ये पन्हाळ्यावरून शिवाजी महाराजांच्या सुटकेवेळी त्यांनी घोडखिंडीत शत्रूला रोखून धरले. विशालगडावरून तोफेचा आवाज ऐकेपर्यंत ते लढत राहिले आणि वीरगती प्राप्त केली. त्यांच्या बलिदानामुळे घोडखिंडीचे नाव पावनखिंड ठेवले गेले.',
      en: 'Baji Prabhu Deshpande was a trusted commander of Shivaji Maharaj. During Shivaji\'s escape from Panhala in 1660, he held back the enemy at Ghod Khind. He fought until he heard the cannon from Vishalgad confirming Shivaji\'s safety, then attained martyrdom. The pass was renamed Pawan Khind in his honor.'
    },
    contributions: [
      { mr: 'पावनखिंडीत शत्रूला रोखून शिवाजी महाराजांचे रक्षण', en: 'Protected Shivaji Maharaj by holding enemies at Pawan Khind' },
      { mr: 'स्वराज्यासाठी प्राणार्पण', en: 'Sacrificed life for Swarajya' },
      { mr: 'अतुलनीय शौर्य आणि स्वामिनिष्ठेचे उदाहरण', en: 'Example of unmatched bravery and loyalty' },
    ],
    birthYear: 1615,
    deathYear: 1660,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Baji_Prabhu_Deshpande.jpg/440px-Baji_Prabhu_Deshpande.jpg',
    relatedForts: ['panhala'],
    category: 'warrior',
  },
  {
    id: 'netaji',
    name: { mr: 'नेताजी पालकर', en: 'Netaji Palkar' },
    title: { mr: 'स्वराज्याचे सरसेनापती', en: 'Commander-in-Chief of Swarajya' },
    biography: {
      mr: 'नेताजी पालकर हे मराठा साम्राज्याचे पहिले सरसेनापती होते. त्यांनी अनेक लढायांमध्ये मराठा सैन्याचे नेतृत्व केले. मुघलांनी पकडल्यानंतर त्यांना धर्मांतर करण्यास भाग पाडले, परंतु शिवाजी महाराजांनी त्यांना परत स्वीकारले आणि शुद्धीकरण केले.',
      en: 'Netaji Palkar was the first Commander-in-Chief of the Maratha Empire. He led the Maratha army in numerous battles. After being captured by Mughals and forced to convert, Shivaji Maharaj welcomed him back and performed his reconversion ceremony.'
    },
    contributions: [
      { mr: 'मराठा सैन्याचे सरसेनापती म्हणून नेतृत्व', en: 'Led the Maratha army as Commander-in-Chief' },
      { mr: 'अनेक लढायांमध्ये विजय', en: 'Victories in numerous battles' },
      { mr: 'स्वराज्याच्या विस्तारात महत्त्वपूर्ण योगदान', en: 'Significant contribution to expansion of Swarajya' },
    ],
    birthYear: 1620,
    deathYear: 1681,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Netaji_Palkar.jpg/440px-Netaji_Palkar.jpg',
    relatedForts: ['rajgad', 'raigad'],
    category: 'warrior',
  },
  {
    id: 'hambirrao',
    name: { mr: 'हंबीरराव मोहिते', en: 'Hambirrao Mohite' },
    title: { mr: 'मराठा साम्राज्याचे सेनापती', en: 'General of the Maratha Empire' },
    biography: {
      mr: 'हंबीरराव मोहिते हे मराठा साम्राज्याचे सरसेनापती होते. संभाजी महाराजांच्या काळात त्यांनी अनेक लढायांमध्ये मराठा सैन्याचे नेतृत्व केले. ते एक अत्यंत कुशल सेनानी आणि रणनीतिकार होते.',
      en: 'Hambirrao Mohite was the Commander-in-Chief of the Maratha Empire. He led the Maratha army in numerous battles during Sambhaji Maharaj\'s reign. He was an extremely skilled warrior and strategist.'
    },
    contributions: [
      { mr: 'मराठा सैन्याचे सरसेनापती', en: 'Commander-in-Chief of Maratha army' },
      { mr: 'अनेक लढायांमध्ये विजय मिळवला', en: 'Won numerous battles' },
      { mr: 'मराठा साम्राज्याचे रक्षण', en: 'Protected the Maratha Empire' },
    ],
    birthYear: 1640,
    deathYear: 1687,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hambirrao_Mohite.jpg/440px-Hambirrao_Mohite.jpg',
    relatedForts: ['raigad', 'panhala'],
    category: 'warrior',
  },
];
