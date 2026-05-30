import { BilingualText } from '../types';

export interface QuizQuestion {
  id: number;
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  explanation: BilingualText;
  relatedFortId?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: { mr: 'शिवाजी महाराजांनी जिंकलेला पहिला किल्ला कोणता?', en: 'Which was the first fort captured by Shivaji Maharaj?' },
    options: [
      { mr: 'रायगड', en: 'Raigad' },
      { mr: 'तोरणा', en: 'Torna' },
      { mr: 'सिंहगड', en: 'Sinhagad' },
      { mr: 'राजगड', en: 'Rajgad' },
    ],
    correctIndex: 1,
    explanation: { mr: 'तोरणा हा शिवाजी महाराजांनी वयाच्या १६ व्या वर्षी १६४३ मध्ये जिंकलेला पहिला किल्ला. याने स्वराज्याची सुरुवात झाली.', en: 'Torna was the first fort captured by Shivaji Maharaj at age 16 in 1643. This marked the beginning of Swarajya.' },
    relatedFortId: 'torna',
  },
  {
    id: 2,
    question: { mr: 'शिवाजी महाराजांचा राज्याभिषेक कोणत्या किल्ल्यावर झाला?', en: 'On which fort was Shivaji Maharaj crowned?' },
    options: [
      { mr: 'राजगड', en: 'Rajgad' },
      { mr: 'रायगड', en: 'Raigad' },
      { mr: 'प्रतापगड', en: 'Pratapgad' },
      { mr: 'शिवनेरी', en: 'Shivneri' },
    ],
    correctIndex: 1,
    explanation: { mr: 'रायगड किल्ल्यावर ६ जून १६७४ रोजी शिवाजी महाराजांचा राज्याभिषेक झाला.', en: 'Shivaji Maharaj was crowned at Raigad Fort on June 6, 1674.' },
    relatedFortId: 'raigad',
  },
  {
    id: 3,
    question: { mr: 'सिंहगडची लढाई कोणी लढली?', en: 'Who fought the Battle of Sinhagad?' },
    options: [
      { mr: 'बाजी प्रभू देशपांडे', en: 'Baji Prabhu Deshpande' },
      { mr: 'नेताजी पालकर', en: 'Netaji Palkar' },
      { mr: 'तानाजी मालुसरे', en: 'Tanaji Malusare' },
      { mr: 'हंबीरराव मोहिते', en: 'Hambirrao Mohite' },
    ],
    correctIndex: 2,
    explanation: { mr: 'तानाजी मालुसरे यांनी ४ फेब्रुवारी १६७० रोजी सिंहगडची लढाई लढली आणि वीरगती प्राप्त केली.', en: 'Tanaji Malusare fought the Battle of Sinhagad on February 4, 1670 and attained martyrdom.' },
    relatedFortId: 'sinhagad',
  },
  {
    id: 4,
    question: { mr: 'शिवाजी महाराजांचे जन्मस्थान कोणते?', en: 'What is the birthplace of Shivaji Maharaj?' },
    options: [
      { mr: 'रायगड', en: 'Raigad' },
      { mr: 'राजगड', en: 'Rajgad' },
      { mr: 'शिवनेरी', en: 'Shivneri' },
      { mr: 'तोरणा', en: 'Torna' },
    ],
    correctIndex: 2,
    explanation: { mr: 'शिवनेरी किल्ल्यावर १९ फेब्रुवारी १६३० रोजी शिवाजी महाराजांचा जन्म झाला.', en: 'Shivaji Maharaj was born at Shivneri Fort on February 19, 1630.' },
    relatedFortId: 'shivneri',
  },
  {
    id: 5,
    question: { mr: 'पावनखिंडीत कोणी बलिदान दिले?', en: 'Who sacrificed their life at Pawan Khind?' },
    options: [
      { mr: 'तानाजी मालुसरे', en: 'Tanaji Malusare' },
      { mr: 'बाजी प्रभू देशपांडे', en: 'Baji Prabhu Deshpande' },
      { mr: 'नेताजी पालकर', en: 'Netaji Palkar' },
      { mr: 'मुरारबाजी देशपांडे', en: 'Murarbaji Deshpande' },
    ],
    correctIndex: 1,
    explanation: { mr: 'बाजी प्रभू देशपांडे यांनी १६६० मध्ये पन्हाळ्यावरून शिवाजी महाराजांच्या सुटकेवेळी पावनखिंडीत वीरगती प्राप्त केली.', en: 'Baji Prabhu Deshpande sacrificed his life at Pawan Khind in 1660 during Shivaji Maharaj\'s escape from Panhala.' },
    relatedFortId: 'panhala',
  },
  {
    id: 6,
    question: { mr: 'सिंधुदुर्ग किल्ला कोठे बांधला गेला?', en: 'Where was Sindhudurg fort built?' },
    options: [
      { mr: 'डोंगरावर', en: 'On a mountain' },
      { mr: 'नदीकाठी', en: 'On a riverbank' },
      { mr: 'अरबी समुद्रात', en: 'In the Arabian Sea' },
      { mr: 'मैदानावर', en: 'On a plain' },
    ],
    correctIndex: 2,
    explanation: { mr: 'सिंधुदुर्ग अरबी समुद्रातील खडकाळ बेटावर १६६४-१६६७ मध्ये बांधला गेला.', en: 'Sindhudurg was built on a rocky island in the Arabian Sea between 1664-1667.' },
    relatedFortId: 'sindhudurg',
  },
  {
    id: 7,
    question: { mr: 'मराठा आरमाराचे मुख्यालय कोणत्या किल्ल्यावर होते?', en: 'Which fort served as the headquarters of the Maratha Navy?' },
    options: [
      { mr: 'सिंधुदुर्ग', en: 'Sindhudurg' },
      { mr: 'विजयदुर्ग', en: 'Vijaydurg' },
      { mr: 'रायगड', en: 'Raigad' },
      { mr: 'पन्हाळा', en: 'Panhala' },
    ],
    correctIndex: 1,
    explanation: { mr: 'विजयदुर्ग हे मराठा आरमाराचे मुख्यालय होते. हा पश्चिम किनारपट्टीवरील सर्वात मजबूत सागरी किल्ला होता.', en: 'Vijaydurg served as the headquarters of the Maratha Navy. It was the strongest sea fort on the western coast.' },
    relatedFortId: 'vijaydurg',
  },
  {
    id: 8,
    question: { mr: 'राजगड किती वर्षे स्वराज्याची राजधानी होता?', en: 'How many years was Rajgad the capital of Swarajya?' },
    options: [
      { mr: '१० वर्षे', en: '10 years' },
      { mr: '२६ वर्षे', en: '26 years' },
      { mr: '१५ वर्षे', en: '15 years' },
      { mr: '३० वर्षे', en: '30 years' },
    ],
    correctIndex: 1,
    explanation: { mr: 'राजगड १६४८ ते १६७४ पर्यंत म्हणजे २६ वर्षे स्वराज्याची राजधानी होता.', en: 'Rajgad was the capital of Swarajya from 1648 to 1674, i.e., 26 years.' },
    relatedFortId: 'rajgad',
  },
];
