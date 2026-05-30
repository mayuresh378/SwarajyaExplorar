import { DailyHistoryEvent } from '../types';

export const dailyHistoryEvents: DailyHistoryEvent[] = [
  { id: '1', date: '02-19', year: 1630, title: { mr: 'शिवाजी महाराजांचा जन्म', en: 'Birth of Shivaji Maharaj' }, description: { mr: 'शिवनेरी किल्ल्यावर छत्रपती शिवाजी महाराजांचा जन्म झाला.', en: 'Chhatrapati Shivaji Maharaj was born at Shivneri Fort.' }, relatedFortId: 'shivneri' },
  { id: '2', date: '06-06', year: 1674, title: { mr: 'राज्याभिषेक', en: 'Coronation' }, description: { mr: 'रायगड किल्ल्यावर शिवाजी महाराजांचा राज्याभिषेक झाला.', en: 'Shivaji Maharaj was crowned at Raigad Fort.' }, relatedFortId: 'raigad' },
  { id: '3', date: '11-10', year: 1659, title: { mr: 'प्रतापगडची लढाई', en: 'Battle of Pratapgad' }, description: { mr: 'शिवाजी महाराजांनी अफझलखानाचा वध केला.', en: 'Shivaji Maharaj slew Afzal Khan.' }, relatedFortId: 'pratapgad' },
  { id: '4', date: '02-04', year: 1670, title: { mr: 'सिंहगडची लढाई', en: 'Battle of Sinhagad' }, description: { mr: 'तानाजी मालुसरे यांनी सिंहगड जिंकला आणि वीरगती प्राप्त केली.', en: 'Tanaji Malusare captured Sinhagad and attained martyrdom.' }, relatedFortId: 'sinhagad' },
  { id: '5', date: '07-13', year: 1660, title: { mr: 'पावनखिंडची लढाई', en: 'Battle of Pawan Khind' }, description: { mr: 'बाजी प्रभू देशपांडे यांनी पावनखिंडीत वीरगती प्राप्त केली.', en: 'Baji Prabhu Deshpande attained martyrdom at Pawan Khind.' }, relatedFortId: 'panhala' },
  { id: '6', date: '04-03', year: 1680, title: { mr: 'शिवाजी महाराजांचे निधन', en: 'Passing of Shivaji Maharaj' }, description: { mr: 'रायगड किल्ल्यावर शिवाजी महाराजांचे निधन झाले.', en: 'Shivaji Maharaj passed away at Raigad Fort.' }, relatedFortId: 'raigad' },
  { id: '7', date: '01-12', year: 1598, title: { mr: 'जिजाबाईंचा जन्म', en: 'Birth of Jijabai' }, description: { mr: 'राजमाता जिजाबाई यांचा जन्म.', en: 'Rajmata Jijabai was born.' } },
  { id: '8', date: '05-16', year: 1643, title: { mr: 'तोरणा किल्ला जिंकला', en: 'Torna Fort Captured' }, description: { mr: 'शिवाजी महाराजांनी वयाच्या १६ व्या वर्षी तोरणा किल्ला जिंकला - स्वराज्याची सुरुवात.', en: 'Shivaji Maharaj captured Torna Fort at age 16 - beginning of Swarajya.' }, relatedFortId: 'torna' },
  { id: '9', date: '11-20', year: 1667, title: { mr: 'सिंधुदुर्ग पूर्ण', en: 'Sindhudurg Completed' }, description: { mr: 'सिंधुदुर्ग सागरी किल्ल्याचे बांधकाम पूर्ण झाले.', en: 'Construction of Sindhudurg sea fort was completed.' }, relatedFortId: 'sindhudurg' },
  { id: '10', date: '09-24', year: 1657, title: { mr: 'राजगड राजधानी', en: 'Rajgad as Capital' }, description: { mr: 'राजगड स्वराज्याची अधिकृत राजधानी बनला.', en: 'Rajgad became the official capital of Swarajya.' }, relatedFortId: 'rajgad' },
];

export function getDailyHistory(): DailyHistoryEvent {
  const today = new Date();
  const monthDay = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const exactMatch = dailyHistoryEvents.find(e => e.date === monthDay);
  if (exactMatch) return exactMatch;
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  return dailyHistoryEvents[dayOfYear % dailyHistoryEvents.length];
}
