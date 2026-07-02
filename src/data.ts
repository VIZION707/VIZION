import { Hadith, Collection } from './types';

export const collections: Collection[] = [
  { id: 'bukhari', name: 'Sahih al-Bukhari', arabicName: 'صحيح البخاري', count: 7563 },
  { id: 'muslim', name: 'Sahih Muslim', arabicName: 'صحيح مسلم', count: 3033 },
  { id: 'abudawud', name: 'Sunan Abu Dawud', arabicName: 'سنن أبي داود', count: 5274 },
  { id: 'tirmidhi', name: "Jami' at-Tirmidhi", arabicName: 'جامع الترمذي', count: 3956 },
  { id: 'nasai', name: "Sunan an-Nasa'i", arabicName: 'سنن النسائي', count: 5758 },
  { id: 'ibnmajah', name: 'Sunan Ibn Majah', arabicName: 'سنن ابن ماجه', count: 4341 },
];

export const mockHadiths: Hadith[] = [
  {
    id: 'bukhari_1_1',
    collection: 'Sahih al-Bukhari',
    book: 'Revelation',
    chapter: 'How the Divine Inspiration started to be revealed to Allah\'s Messenger',
    chapter_number: '1',
    hadith_number: '1',
    arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا، أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ',
    english: 'The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for.',
    french: 'Les actes ne valent que par les intentions et à chacun selon son intention. Celui dont l\'émigration a pour but un profit mondain ou une femme à épouser, son émigration sera comptée pour ce vers quoi il a émigré.',
    narrator: 'Umar bin Al-Khattab',
    grade: 'Sahih',
    reference: 'Sahih al-Bukhari 1',
    keywords: ['intention', 'deeds', 'migration', 'niyyah'],
    topics: ['Faith', 'Knowledge'],
    source: 'Sunnah.com'
  },
  {
    id: 'muslim_1_1',
    collection: 'Sahih Muslim',
    book: 'The Book of Faith',
    chapter: 'Explanation of Iman, Islam and Ihsan',
    chapter_number: '1',
    hadith_number: '8',
    arabic: 'الإِسْلاَمُ أَنْ تَشْهَدَ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَتُقِيمَ الصَّلاَةَ وَتُؤْتِيَ الزَّكَاةَ وَتَصُومَ رَمَضَانَ وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلاً',
    english: 'Islam implies that you testify that there is no god but Allah and that Muhammad is the messenger of Allah, and you establish prayer, pay Zakat, observe the fast of Ramadan, and perform pilgrimage to the (House) if you are solvent enough (to bear the expense of) the journey.',
    french: 'L\'Islam consiste à attester qu\'il n\'y a de divinité digne d\'adoration qu\'Allah et que Mohammed est le Messager d\'Allah, à accomplir la prière, à s\'acquitter de la Zakat, à jeûner le mois de Ramadan et à effectuer le pèlerinage à la Maison (la Mecque) si tu en as les moyens.',
    narrator: 'Umar bin Al-Khattab',
    grade: 'Sahih',
    reference: 'Sahih Muslim 8a',
    keywords: ['pillars', 'islam', 'prayer', 'zakat', 'fasting', 'hajj'],
    topics: ['Faith', 'Prayer', 'Fasting', 'Charity'],
    source: 'Sunnah.com'
  },
  {
    id: 'bukhari_10_1',
    collection: 'Sahih al-Bukhari',
    book: 'Call to Prayers (Adhaan)',
    chapter: 'The excellence of the Adhaan',
    chapter_number: '1',
    hadith_number: '608',
    arabic: 'لَوْ يَعْلَمُ النَّاسُ مَا فِي النِّدَاءِ وَالصَّفِّ الأَوَّلِ، ثُمَّ لَمْ يَجِدُوا إِلاَّ أَنْ يَسْتَهِمُوا عَلَيْهِ لاَسْتَهَمُوا',
    english: 'If the people knew the reward for pronouncing the Adhan and for standing in the first row (in congregational prayers) and found no other way to get that except by drawing lots they would draw lots',
    french: 'Si les gens savaient ce qu\'il y a (comme récompense) dans l\'appel à la prière et le premier rang, et qu\'ils ne trouvaient d\'autre moyen pour y accéder que de tirer au sort, ils l\'auraient fait.',
    narrator: 'Abu Hurairah',
    grade: 'Sahih',
    reference: 'Sahih al-Bukhari 615',
    keywords: ['adhan', 'prayer', 'first row', 'reward'],
    topics: ['Prayer'],
    source: 'Sunnah.com'
  },
  {
    id: 'tirmidhi_4_1',
    collection: 'Jami\' at-Tirmidhi',
    book: 'Righteousness And Maintaining Good Relations',
    chapter: 'Being Dutiful To Parents',
    chapter_number: '1',
    hadith_number: '1899',
    arabic: 'رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ',
    english: 'The Lord\'s pleasure is in the parent\'s pleasure, and the Lord\'s anger is in the parent\'s anger.',
    french: 'L\'agrément du Seigneur se trouve dans l\'agrément des parents, et la colère du Seigneur se trouve dans la colère des parents.',
    narrator: 'Abdullah bin Amr',
    grade: 'Hasan',
    reference: 'Jami` at-Tirmidhi 1899',
    keywords: ['parents', 'pleasure', 'anger', 'lord'],
    topics: ['Parents', 'Good Character'],
    source: 'Sunnah.com'
  },
  {
    id: 'muslim_3_1',
    collection: 'Sahih Muslim',
    book: 'The Book of Purification',
    chapter: 'The Excellence Of Wudu',
    chapter_number: '1',
    hadith_number: '223',
    arabic: 'الطُّهُورُ شَطْرُ الإِيمَانِ وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ',
    english: 'Purity is half of iman (faith). \'Al-hamdu lillah\' (praise be to Allah) fills the scales...',
    french: 'La purification est la moitié de la foi, (dire) « Louange à Allah » remplit la balance...',
    narrator: 'Abu Malik Al-Ash\'ari',
    grade: 'Sahih',
    reference: 'Sahih Muslim 223',
    keywords: ['purity', 'faith', 'praise', 'wudu'],
    topics: ['Faith', 'Patience'],
    source: 'Sunnah.com'
  }
];

export const allTopics = [
  'Prayer', 'Charity', 'Patience', 'Parents', 'Marriage', 
  'Business', 'Justice', 'Knowledge', 'Repentance', 'Quran', 
  'Faith', 'Good Character'
];
