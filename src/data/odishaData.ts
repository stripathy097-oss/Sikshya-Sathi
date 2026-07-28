import { Subject, Chapter, QuizQuestion, MockTest, PDFDocument, GrammarTopic, LeaderboardEntry, NotificationItem, Flashcard } from '../types';

export const ODISHA_DISTRICTS = [
  'Angul', 'Balangir', 'Balasore (Baleswar)', 'Bargarh', 'Bhadrak', 'Boudh',
  'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur',
  'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar (Keonjhar)',
  'Khordha (Bhubaneswar)', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur',
  'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur (Sonepur)', 'Sundargarh'
];

export const SUBJECTS: Subject[] = [
  {
    id: 'odia',
    nameEnglish: 'Sahitya (Odia)',
    nameOdia: 'ସାହିତ୍ୟ ସିନ୍ଧୁ / ଦୀପ୍ତି',
    iconName: 'BookOpen',
    color: 'bg-emerald-500',
    chaptersCount: 12
  },
  {
    id: 'english',
    nameEnglish: 'High School English',
    nameOdia: 'ଇଂରାଜୀ ସାହିତ୍ୟ o ବ୍ୟାକରଣ',
    iconName: 'Languages',
    color: 'bg-blue-600',
    chaptersCount: 10
  },
  {
    id: 'math',
    nameEnglish: 'Mathematics (Bija Ganita & Parimiti)',
    nameOdia: 'ମାଧ୍ୟମିକ ବୀଜଗଣିତ ଓ ଜ୍ୟାମିତି',
    iconName: 'Calculator',
    color: 'bg-indigo-600',
    chaptersCount: 14
  },
  {
    id: 'physical_science',
    nameEnglish: 'Physical Science (Bhoutika Bigyan)',
    nameOdia: 'ଭୌତିକ ବିଜ୍ଞାନ',
    iconName: 'Atom',
    color: 'bg-purple-600',
    chaptersCount: 10
  },
  {
    id: 'life_science',
    nameEnglish: 'Life Science (Jiba Bigyan)',
    nameOdia: 'ଜୀବ ବିଜ୍ଞାନ',
    iconName: 'Dna',
    color: 'bg-teal-600',
    chaptersCount: 9
  },
  {
    id: 'history_pol',
    nameEnglish: 'History & Political Science',
    nameOdia: 'ଇତିହାସ ଓ ରାଜନୀତି ବିଜ୍ଞାନ',
    iconName: 'Landmark',
    color: 'bg-amber-600',
    chaptersCount: 11
  },
  {
    id: 'geo_econ',
    nameEnglish: 'Geography & Economics',
    nameOdia: 'ଭୂଗୋଳ ଓ ଅର୍ଥନୀତି',
    iconName: 'Globe',
    color: 'bg-rose-600',
    chaptersCount: 8
  }
];

export const CHAPTERS_DATA: Chapter[] = [
  // ---------------- CLASS 10 ENGLISH ----------------
  {
    id: 'c10_eng_ch1',
    classLevel: 'Class 10',
    subjectId: 'english',
    chapterNumber: 1,
    titleEnglish: 'A Letter to God',
    titleOdia: 'ଏ ଲେଟର ଟୁ ଗଡ୍ (ଭଗବାନଙ୍କୁ ଚିଠି)',
    examWeightageMarks: 8,
    learningObjectives: [
      'Understand Lencho’s unwavering faith in God and human nature.',
      'Analyze how the postmaster showed compassion and empathy.',
      'Learn key vocabulary: crest, downpour, plague of locusts, crook.',
      'Master BSE Odisha board 2-mark and 5-mark subjective question writing.'
    ],
    realLifeApplications: [
      'Teaches empathy, kindness, and helping strangers in need without expecting recognition.',
      'Shows how optimism sustains humans during natural disasters.'
    ],
    summaryEnglish: 'Lencho, a hardworking farmer in a crest of a low hill, suffers complete destruction of his corn field due to a severe hailstorm. With firm faith in God, he writes a letter asking for 100 pesos. The kind postmaster collects 70 pesos from employees and sends it to Lencho. Lencho calls the post office employees a "bunch of crooks", believing God could not make a mistake.',
    summaryOdia: 'ଲେଞ୍ଚୋ ଜଣେ ପରିଶ୍ରମୀ କୃଷକ ଥିଲେ। ଏକ ପ୍ରବଳ କୁଆପଥର ବୃଷ୍ଟି ଯୋଗୁଁ ତାଙ୍କର ମକା ଫସଲ ସମ୍ପୂର୍ଣ୍ଣ ନଷ୍ଟ ହୋଇଗଲା। ଭଗବାନଙ୍କ ଉପରେ ଦୃଢ଼ ବିଶ୍ୱାସ ରଖି ସେ ୧୦୦ ପେସୋ ମାଗି ଭଗବାନଙ୍କୁ ଏକ ଚିଠି ଲେଖିଥିଲେ। ଡାକପାଳ ଏବଂ କର୍ମଚାରୀମାନେ ୭୦ ପେସୋ ଏକାଠି କରି ପଠାଇଥିଲେ, କିନ୍ତୁ ଲେଞ୍ଚୋ ସେମାନଙ୍କୁ ଠକ ସଂଘ ("bunch of crooks") ବୋଲି ଭାବିଥିଲା।',
    lineByLineExplanation: [
      {
        paragraphNo: 1,
        textEnglish: 'The house—the only one in the entire valley—sat on the crest of a low hill. From this height one could see the river and the field of ripe corn dotted with flowers.',
        textOdia: 'ସମ୍ପୂର୍ଣ୍ଣ ଉପତ୍ୟକାରେ ଗୋଟିଏ ମାତ୍ର ଘର ନୀଚା ପାହାଡ଼ର ଶିଖରରେ ଥିଲା। ସେଠାରୁ ନଦୀ ଓ ପାଚିଲା ମକା ଫସଲ ସ୍ପଷ୍ଟ ଦେଖାଯାଉଥିଲା।',
        keyNote: 'BSE Odisha objective Q: "crest" means top of a hill.'
      },
      {
        paragraphNo: 2,
        textEnglish: 'It was during the meal that, just as Lencho had predicted, big drops of rain began to fall. In the north-east huge mountains of clouds could be seen approaching.',
        textOdia: 'ଖାଇବା ସମୟରେ, ଲେଞ୍ଚୋ ପୂର୍ବାନୁମାନ କରିଥିବା ପରି, ବଡ଼ ବଡ଼ ବର୍ଷା ବିନ୍ଦୁ ପଡ଼ିବାକୁ ଲାଗିଲା। ଉତ୍ତର-ପୂର୍ବ ଦିଗରୁ ମେଘମାଳା ମାଡ଼ିଆସୁଥିଲା।',
        keyNote: 'Clouds approached from North-East direction.'
      }
    ],
    keyWords: [
      { word: 'Crest', meaningOdia: 'ପାହାଡ଼ର ଶିଖର', meaningEnglish: 'Top of a hill' },
      { word: 'Downpour', meaningOdia: 'ପ୍ରବଳ ବର୍ଷା', meaningEnglish: 'Heavy rainfall' },
      { word: 'Plague of locusts', meaningOdia: 'ଝିଣ୍ଟିକା ଦଳ', meaningEnglish: 'Swarm of insects that destroy crops' },
      { word: 'Conscience', meaningOdia: 'ବିବେକ', meaningEnglish: 'An inner sense of right and wrong' },
      { word: 'Pesos', meaningOdia: 'ମୁଦ୍ରା (ଲାଟିନ୍ ଆମେରିକା)', meaningEnglish: 'Currency of Latin American countries' }
    ],
    shortQuestions: [
      {
        id: 'sq1',
        qEnglish: 'Where was Lencho’s house situated?',
        qOdia: 'ଲେଞ୍ଚୋଙ୍କ ଘର କେଉଁଠାରେ ଅବସ୍ଥିତ ଥିଲା?',
        answerEnglish: 'Lencho’s house was situated on the crest of a low hill in a solitary valley.',
        answerOdia: 'ଲେଞ୍ଚୋଙ୍କ ଘର ନିର୍ଜନ ଉପତ୍ୟକାର ଏକ ନୀଚା ପାହାଡ଼ର ଶିଖରରେ ଅବସ୍ଥିତ ଥିଲା।',
        marks: 2
      },
      {
        id: 'sq2',
        qEnglish: 'Why did Lencho write a letter to God?',
        qOdia: 'ଲେଞ୍ଚୋ ଭଗବାନଙ୍କୁ ଚିଠି କାହିଁକି ଲେଖିଥିଲେ?',
        answerEnglish: 'Lencho wrote a letter to God asking for 100 pesos to replant his field and live until the next crop after hailstorm destroyed everything.',
        answerOdia: 'କୁଆପଥର ବୃଷ୍ଟି ଯୋଗୁଁ ଫସଲ ନଷ୍ଟ ହୋଇଯିବାରୁ ପରିବାର ଚଳାଇବା ଓ ନୂଆ ଫସଲ ବୁଣିବା ପାଇଁ ୧୦୦ ପେସୋ ମାଗି ସେ ଚିଠି ଲେଖିଥିଲେ।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'lq1',
        qEnglish: 'Describe the character of Lencho as depicted in "A Letter to God".',
        qOdia: '"A Letter to God" ପାଠ ଆଧାରରେ ଲେଞ୍ଚୋଙ୍କ ଚରିତ୍ର ଚିତ୍ରଣ କର।',
        answerEnglish: 'Lencho was a simple, dedicated farmer who worked like an ox in his fields. He possessed an unwavering and childlike faith in God. When his crops were destroyed by hailstones, he did not lose hope but addressed a letter directly to God. However, his innocence led him to suspect the post office staff as "a bunch of crooks".',
        answerOdia: 'ଲେଞ୍ଚୋ ଜଣେ ସରଳ ଓ ପରିଶ୍ରମୀ କୃଷକ ଥିଲେ। ଭଗବାନଙ୍କ ଉପରେ ତାଙ୍କର ଅଗାଧ ବିଶ୍ୱାସ ଥିଲା। ଫସଲ ନଷ୍ଟ ହେବା ସତ୍ତ୍ୱେ ସେ ହତାଶ ନହୋଇ ସିଧାସଳଖ ଭଗବାନଙ୍କୁ ଚିଠି ଲେଖିଥିଲେ। ସେ ସରଳ ହୋଇଥିବାରୁ ଡାକ କର୍ମଚାରୀଙ୍କୁ ସନ୍ଦେହ କରିଥିଲେ।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2023', question: 'What did the postmaster do after reading Lencho\'s letter?', answer: 'The postmaster laughed initially but soon became serious. To keep Lencho\'s faith intact, he collected 70 pesos from friends and staff and mailed it to Lencho signed "God".', marks: 2 },
      { year: '2022', question: 'Why did Lencho say the raindrops were like "new coins"?', answer: 'Lencho anticipated that a good rain would yield a bumper harvest of corn, which would bring money (coins) for his family.', marks: 2 }
    ],
    hotsQuestions: [
      { question: 'Why is Lencho\'s faith described as ironical at the end of the story?', answer: 'It is ironical because Lencho called the very post office workers who anonymously saved his family from starvation "a bunch of crooks".' }
    ],
    caseStudies: [
      {
        passage: 'God: if you don’t help me, my family and I will go hungry this year. I need a hundred pesos in order to sow my field again and to live until the crop comes...',
        questions: [
          { q: 'Who wrote these lines and to whom?', a: 'Lencho wrote these lines in a letter addressed to God.' },
          { q: 'How many pesos did he demand and why?', a: 'He demanded 100 pesos to resow his destroyed corn field.' }
        ]
      }
    ],
    fillInBlanks: [
      { id: 'fib1', question: 'Lencho compared the large raindrops to new _______.', answer: 'coins' },
      { id: 'fib2', question: 'The postmaster collected ________ pesos for Lencho.', answer: '70' }
    ],
    trueFalse: [
      { id: 'tf1', statement: 'Lencho was angry when he counted the money in the letter.', isTrue: true, explanation: 'He found only 70 pesos instead of 100 pesos.' },
      { id: 'tf2', statement: 'The postmaster was a rude and unhelpful man.', isTrue: false, explanation: 'The postmaster was fat, amiable, and very generous.' }
    ],
    matchFollowing: [
      { left: 'Hailstones', right: 'Frozen pearls' },
      { left: 'Lencho', right: 'An ox of a man' },
      { left: 'Postmaster', right: 'Amiable fellow' }
    ],
    examTips: [
      'BSE Odisha 2-mark questions often ask about Lencho\'s emotions before and after the rain.',
      'Remember the exact number of pesos requested (100) and received (70).'
    ],
    isPremium: false
  },

  {
    id: 'c10_eng_ch2',
    classLevel: 'Class 10',
    subjectId: 'english',
    chapterNumber: 2,
    titleEnglish: 'At the High School',
    titleOdia: 'ଆଟ୍ ଦ ହାଇସ୍କୁଲ (ମହାତ୍ମା ଗାନ୍ଧୀଙ୍କ ଆତ୍ମଜୀବନୀ)',
    examWeightageMarks: 6,
    learningObjectives: [
      'Understand Mahatma Gandhi’s early school experiences at Kathiawar High School.',
      'Appreciate the importance of hand-writing, physical exercise, and moral discipline.',
      'Learn lessons on truthfulness and respectful conduct towards teachers.'
    ],
    realLifeApplications: [
      'Emphasizes that good handwriting is an essential part of complete education.',
      'Promotes physical fitness and daily exercise alongside academic study.'
    ],
    summaryEnglish: 'In this excerpt from his autobiography "The Story of My Experiments with Truth", M.K. Gandhi reflects on his school days at Rajkot. He was not a brilliant student but held his character in high regard. He narrates incidents involving Mr. Giles (spelling test of "kettle"), Headmaster Dorabji Edulji Gimi (compulsory gymnastics), and his Sanskrit teacher Krishnashankar Pandya.',
    summaryOdia: 'ମହାତ୍ମା ଗାନ୍ଧୀଙ୍କ ଆତ୍ମଜୀବନୀରୁ ଗୃହୀତ ଏହି ପାଠରେ ରାଜକୋଟ ହାଇସ୍କୁଲରେ ତାଙ୍କର ଛାତ୍ରଜୀବନ ସମ୍ପର୍କରେ ବର୍ଣ୍ଣନା କରାଯାଇଛି। ସେ ନିଜ ନୈତିକ ଚରିତ୍ରକୁ ବହୁତ ଗୁରୁତ୍ୱ ଦେଉଥିଲେ। ଜିମି ସାର୍‌ଙ୍କ ବାଧ୍ୟତାମୂଳକ ବ୍ୟାୟାମ, ଜିଲ୍ସ ସାର୍‌ଙ୍କ ‘Kettle’ ଶବ୍ଦ ପରୀକ୍ଷା ଓ ସଂସ୍କୃତ ଶିକ୍ଷକଙ୍କ ପ୍ରତି ଶ୍ରଦ୍ଧା ବିଷୟରେ ଏଠାରେ ଆଲୋଚନା କରାଯାଇଛି।',
    keyWords: [
      { word: 'Autobiography', meaningOdia: 'ଆତ୍ମଜୀବନୀ', meaningEnglish: 'Story of a person written by himself' },
      { word: 'Gymnastics', meaningOdia: 'ଶାରୀରିକ ବ୍ୟାୟାମ', meaningEnglish: 'Physical exercises' },
      { word: 'Persian', meaningOdia: 'ପାରସୀ ଭାଷା', meaningEnglish: 'Language of Persia' },
      { word: 'Spelling', meaningOdia: 'ବନାନ', meaningEnglish: 'Correct sequence of letters' }
    ],
    shortQuestions: [
      {
        id: 'hs_sq1',
        qEnglish: 'Why was Gandhi fined six annas by Mr. Gimi?',
        qOdia: 'ଗାନ୍ଧୀଜୀଙ୍କୁ ଜିମି ସାର୍ କାହିଁକି ୬ ଅଣା ଜରିମାନା କରିଥିଲେ?',
        answerEnglish: 'Gandhi missed the compulsory Saturday afternoon gymnastics class due to cloudy weather and having no watch.',
        answerOdia: 'ମେଘୁଆ ଆକାଶ ଓ ଘଣ୍ଟା ନଥିବାରୁ ସେ ଶନିବାର ସନ୍ଧ୍ୟା ବ୍ୟାୟାମ କ୍ଲାସରେ ବିଳମ୍ବରେ ପହଞ୍ଚିଥିଲେ, ଫଳରେ ଜରିମାନା ହୋଇଥିଲେ।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'hs_lq1',
        qEnglish: 'What were Gandhi’s views on good handwriting as expressed in "At the High School"?',
        qOdia: 'ସୁନ୍ଦର ହସ୍ତାକ୍ଷର ସମ୍ପର୍କରେ ଗାନ୍ଧୀଜୀଙ୍କ ମତାମତ ବୁଝାଅ।',
        answerEnglish: 'Gandhi initially neglected handwriting. But later in South Africa, seeing the beautiful writing of lawyers and young men, he realized that "bad handwriting should be regarded as a sign of an imperfect education". He advocated drawing before writing.',
        answerOdia: 'ଗାନ୍ଧୀଜୀ ଦକ୍ଷିଣ ଆଫ୍ରିକାରେ ଯୁବକମାନଙ୍କ ସୁନ୍ଦର ଅକ୍ଷର ଦେଖି ଅନୁତାପ କରିଥିଲେ। ସେ କହିଥିଲେ "ଖରାପ ହସ୍ତାକ୍ଷର ଅସମ୍ପୂର୍ଣ୍ଣ ଶିକ୍ଷାର ଲକ୍ଷଣ"।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2023', question: 'What false notion did Gandhi hold regarding gymnastics in school?', answer: 'Gandhi falsely believed that gymnastics had nothing to do with education and that physical training was inferior to intellectual study.', marks: 2 }
    ],
    fillInBlanks: [
      { id: 'hs_f1', question: 'Gandhi’s Sanskrit teacher was ________.', answer: 'Krishnashankar Pandya' }
    ],
    trueFalse: [
      { id: 'hs_tf1', statement: 'Gandhi copied the word kettle from his neighbor\'s slate.', isTrue: false, explanation: 'Even when prompted by the teacher, Gandhi refused to copy.' }
    ],
    matchFollowing: [
      { left: 'Mr. Giles', right: 'Educational Inspector' },
      { left: 'Mr. Gimi', right: 'Disciplinarian Headmaster' },
      { left: 'Krishnashankar Pandya', right: 'Sanskrit Teacher' }
    ],
    examTips: ['Remember the line: "Bad handwriting should be regarded as a sign of an imperfect education" for short answer quotes.'],
    isPremium: false
  },

  // ---------------- CLASS 10 MATHEMATICS ----------------
  {
    id: 'c10_math_ch1',
    classLevel: 'Class 10',
    subjectId: 'math',
    chapterNumber: 1,
    titleEnglish: 'Linear Simultaneous Equations',
    titleOdia: 'ଯୁଗପତ୍ ସରଳସମୀକରଣ (Simultaneous Linear Equations)',
    examWeightageMarks: 10,
    learningObjectives: [
      'Understand two-variable linear equations: a1x + b1y + c1 = 0 and a2x + b2y + c2 = 0.',
      'Master Substitution, Elimination, and Cross-Multiplication (ବଜ୍ରଗୁଣନ).',
      'Derive and apply consistency conditions: Unique, Infinite, or No Solution.'
    ],
    realLifeApplications: [
      'Used in business profit calculation, age problems, speed-distance-time problems, and current/boat downstream-upstream problems.'
    ],
    summaryEnglish: 'System of two linear equations in two variables: a1x + b1y + c1 = 0 and a2x + b2y + c2 = 0. Methods of solution: Substitution, Elimination, and Cross-Multiplication (ବଜ୍ରଗୁଣନ ପ୍ରଣାଳୀ). Conditions for consistency: Unique solution if a1/a2 ≠ b1/b2; Infinite solutions if a1/a2 = b1/b2 = c1/c2; No solution if a1/a2 = b1/b2 ≠ c1/c2.',
    summaryOdia: 'ଦୁଇଟି ଅଜ୍ଞାତ ରାଶିବିଶିଷ୍ଟ ଦୁଇଟି ଏକଘାତୀ ସମୀକରଣ: a1x + b1y + c1 = 0 ଏବଂ a2x + b2y + c2 = 0। ସମାଧାନର ପ୍ରଣାଳୀ: ପ୍ରତିସ୍ଥାପନ, ଅପନୟନ, ଏବଂ ବଜ୍ରଗୁଣନ (Cross-Multiplication)। ସଙ୍ଗତ ଓ ଅନନ୍ୟ ସମାଧାନ ଶର୍ତ୍ତ: a1/a2 ≠ b1/b2। ଅସଂଖ୍ୟ ସମାଧାନ: a1/a2 = b1/b2 = c1/c2। ଅସଙ୍ଗତ (ସମାଧାନ ନାହିଁ): a1/a2 = b1/b2 ≠ c1/c2।',
    formulas: [
      { name: 'Cross Multiplication Formula', formula: 'x = (b1c2 - b2c1)/(a1b2 - a2b1), y = (c1a2 - c2a1)/(a1b2 - a2b1)', units: 'dimensionless units', explanationOdia: 'ବଜ୍ରଗୁଣନ ପ୍ରଣାଳୀରେ x ଓ y ର ମୂଲ୍ୟ ନିର୍ଣ୍ଣୟ ପାଇଁ ଡିଟରମିନାଣ୍ଟ ସୂତ୍ର।', trickToRemember: 'b c a b cycle: Write coefficients in order b1 c1 a1 b1 and b2 c2 a2 b2.' },
      { name: 'Condition for Unique Solution', formula: 'a1 / a2 ≠ b1 / b2', units: 'ratio', explanationOdia: 'ରେଖାଦ୍ୱୟ ଗୋଟିଏ ବିନ୍ଦୁରେ ଛେଦ କରନ୍ତି।' }
    ],
    numericals: [
      {
        question: 'Solve for x and y: 2x + 3y = 8 and 3x + 2y = 7.',
        solutionSteps: [
          'Multiply equation (1) by 2: 4x + 6y = 16',
          'Multiply equation (2) by 3: 9x + 6y = 21',
          'Subtracting: -5x = -5 => x = 1',
          'Substitute x = 1 in 2(1) + 3y = 8 => 3y = 6 => y = 2'
        ],
        finalAnswer: 'x = 1, y = 2'
      }
    ],
    keyWords: [
      { word: 'Consistent (ସଙ୍ଗତ)', meaningOdia: 'ଅତିକମରେ ଗୋଟିଏ ସମାଧାନ ଥାଏ', meaningEnglish: 'Has at least one solution' },
      { word: 'Inconsistent (ଅସଙ୍ଗତ)', meaningOdia: 'କୌଣସି ସମାଧାନ ନଥାଏ', meaningEnglish: 'Has no common solution' },
      { word: 'Cross-Multiplication', meaningOdia: 'ବଜ୍ରଗୁଣନ ପ୍ରଣାଳୀ', meaningEnglish: 'Method using determinants ratio' }
    ],
    shortQuestions: [
      {
        id: 'm_sq1',
        qEnglish: 'Find the value of k for which x + 2y - 5 = 0 and 3x + ky - 15 = 0 have infinitely many solutions.',
        qOdia: 'x + 2y - 5 = 0 ଏବଂ 3x + ky - 15 = 0 ର ଅସଂଖ୍ୟ ସମାଧାନ ଥିଲେ k ର ମୂଲ୍ୟ ନିର୍ଣ୍ଣୟ କର।',
        answerEnglish: 'Condition: a1/a2 = b1/b2 => 1/3 = 2/k => k = 6.',
        answerOdia: 'ଶର୍ତ୍ତ: 1/3 = 2/k => k = 6।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'm_lq1',
        qEnglish: 'A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Determine the speed of the stream and that of the boat in still water.',
        qOdia: 'ଗୋଟିଏ ଡଙ୍ଗା ସ୍ରୋତର ପ୍ରତିକୂଳରେ ୩୦ କିମି ଓ ଅନୁକୂଳରେ ୪୪ କିମି ଯିବାକୁ ୧୦ ଘଣ୍ଟା ନିଏ... ସ୍ଥିର ଜଳରେ ଡଙ୍ଗାର ବେଗ ଓ ସ୍ରୋତର ବେଗ ନିର୍ଣ୍ଣୟ କର।',
        answerEnglish: 'Let boat speed in still water = x km/h, stream speed = y km/h. Equations: 30/(x-y) + 44/(x+y) = 10 and 40/(x-y) + 55/(x+y) = 13. Solving gives x = 8 km/h (boat speed) and y = 3 km/h (stream speed).',
        answerOdia: 'ସ୍ଥିର ଜଳରେ ଡଙ୍ଗାର ବେଗ = ୮ କିମି/ଘଣ୍ଟା, ସ୍ରୋତର ବେଗ = ୩ କିମି/ଘଣ୍ଟା।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2024', question: 'For what value of k will system kx + 3y = 1 and 12x + ky = 2 have no solution?', answer: 'For no solution: k/12 = 3/k ≠ 1/2 => k^2 = 36 => k = ±6. But k/12 ≠ 1/2 => k ≠ 6. Hence k = -6.', marks: 2 }
    ],
    fillInBlanks: [
      { id: 'm_fib1', question: 'If a1/a2 ≠ b1/b2, the graphs are ________ lines.', answer: 'intersecting' }
    ],
    trueFalse: [
      { id: 'm_tf1', statement: 'Parallel lines have infinitely many solutions.', isTrue: false, explanation: 'Parallel lines never intersect, so no solution.' }
    ],
    matchFollowing: [
      { left: 'a1/a2 ≠ b1/b2', right: 'Unique Solution' },
      { left: 'a1/a2 = b1/b2 = c1/c2', right: 'Infinitely Many Solutions' },
      { left: 'a1/a2 = b1/b2 ≠ c1/c2', right: 'No Solution' }
    ],
    examTips: [
      'Cross-multiplication formula x = (b1c2 - b2c1)/(a1b2 - a2b1) is asked every year in BSE Odisha board subjective exam.'
    ],
    isPremium: false
  },

  {
    id: 'c10_math_ch2',
    classLevel: 'Class 10',
    subjectId: 'math',
    chapterNumber: 2,
    titleEnglish: 'Quadratic Equations',
    titleOdia: 'ଦ୍ୱିଘାତ ସମୀକରଣ (Quadratic Equations)',
    examWeightageMarks: 8,
    learningObjectives: [
      'Master standard form ax^2 + bx + c = 0 (a ≠ 0).',
      'Understand Sridharacharya Formula: x = (-b ± √(b^2 - 4ac)) / 2a.',
      'Analyze Discriminant D = b^2 - 4ac and nature of roots.'
    ],
    realLifeApplications: [
      'Calculating trajectory of projectiles, area optimizations, profit maximizing parabolas.'
    ],
    summaryEnglish: 'An equation of the form ax^2 + bx + c = 0 where a ≠ 0. Roots are given by x = (-b ± √D)/(2a) where Discriminant D = b^2 - 4ac. Nature of roots: D > 0 (real and distinct), D = 0 (real and equal), D < 0 (no real roots). Sum of roots α+β = -b/a, Product of roots αβ = c/a.',
    summaryOdia: 'ax^2 + bx + c = 0 (a ≠ 0) ରୂପୀ ସମୀକରଣ। ନିରୂପକ (Discriminant) D = b^2 - 4ac। D > 0 ହେଲେ ବାସ୍ତବ ଓ ଅସମାନ ମୂଳ; D = 0 ହେଲେ ବାସ୍ତବ ଓ ସମାନ; D < 0 ହେଲେ କୌଣସି ବାସ୍ତବ ମୂଳ ନଥାଏ। ମୂଳଦ୍ୱୟର ଯୋଗଫଳ α+β = -b/a, ଗୁଣଫଳ αβ = c/a।',
    formulas: [
      { name: 'Quadratic Formula (Sridharacharya)', formula: 'x = (-b ± √(b^2 - 4ac)) / (2a)', units: 'roots value', explanationOdia: 'ଦ୍ୱିଘାତ ସମୀକରଣର ମୂଳଦ୍ୱୟ ନିର୍ଣ୍ଣୟ ସୂତ୍ର।' },
      { name: 'Discriminant (ନିରୂପକ)', formula: 'D = b^2 - 4ac', units: 'scalar', explanationOdia: 'ମୂଳଦ୍ୱୟର ସ୍ୱରୂପ ନିରୂପଣ କରେ।' }
    ],
    numericals: [
      {
        question: 'Solve 2x^2 - 7x + 3 = 0 using Sridharacharya formula.',
        solutionSteps: [
          'a = 2, b = -7, c = 3',
          'D = b^2 - 4ac = (-7)^2 - 4(2)(3) = 49 - 24 = 25',
          'x = (7 ± √25) / 4 = (7 ± 5) / 4',
          'Roots: x = 12/4 = 3 or x = 2/4 = 1/2'
        ],
        finalAnswer: 'x = 3, x = 1/2'
      }
    ],
    keyWords: [
      { word: 'Discriminant (ନିରୂପକ)', meaningOdia: 'D = b^2 - 4ac', meaningEnglish: 'Determines nature of roots' },
      { word: 'Roots (ମୂଳ)', meaningOdia: 'ସମୀକରଣକୁ ସିଦ୍ଧ କରୁଥିବା x ର ମୂଲ୍ୟ', meaningEnglish: 'Values satisfying equation' }
    ],
    shortQuestions: [
      {
        id: 'qe_sq1',
        qEnglish: 'Find the discriminant of equation 2x^2 - 4x + 3 = 0 and state nature of roots.',
        qOdia: '2x^2 - 4x + 3 = 0 ସମୀକରଣର ନିରୂପକ ନିର୍ଣ୍ଣୟ କର।',
        answerEnglish: 'D = (-4)^2 - 4(2)(3) = 16 - 24 = -8. Since D < 0, roots are not real.',
        answerOdia: 'D = -8 < 0, ତେଣୁ ବାସ୍ତବ ମୂଳ ନାହିଁ।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'qe_lq1',
        qEnglish: 'The sum of two numbers is 15 and sum of their reciprocals is 3/10. Find the numbers.',
        qOdia: 'ଦୁଇଟି ସଂଖ୍ୟାର ଯୋଗଫଳ ୧୫ ଓ ସେମାନଙ୍କ ବ୍ୟୁତ୍କ୍ରମର ଯୋଗଫଳ ୩/୧୦ ହେଲେ, ସଂଖ୍ୟା ଦୁଇଟି କେତେ?',
        answerEnglish: 'Let numbers be x and (15 - x). 1/x + 1/(15-x) = 3/10 => 15 / (15x - x^2) = 3/10 => x^2 - 15x + 50 = 0. Solving gives x = 10 or x = 5.',
        answerOdia: 'ସଂଖ୍ୟା ଦୁଇଟି ହେଉଛି ୧୦ ଏବଂ ୫।',
        marks: 5
      }
    ],
    fillInBlanks: [
      { id: 'qe_f1', question: 'Sum of roots of ax^2 + bx + c = 0 is _______.', answer: '-b/a' }
    ],
    trueFalse: [
      { id: 'qe_tf1', statement: 'If D = 0, roots are real and equal.', isTrue: true, explanation: 'x = -b/2a for both roots.' }
    ],
    matchFollowing: [
      { left: 'D > 0', right: 'Real and Distinct' },
      { left: 'D = 0', right: 'Real and Equal' },
      { left: 'D < 0', right: 'No Real Roots' }
    ],
    examTips: ['Always write "a ≠ 0" when defining quadratic equation in 2-mark definitions.'],
    isPremium: false
  },

  // ---------------- CLASS 10 PHYSICAL SCIENCE ----------------
  {
    id: 'c10_ps_ch1',
    classLevel: 'Class 10',
    subjectId: 'physical_science',
    chapterNumber: 1,
    titleEnglish: 'Chemical Reactions and Equations',
    titleOdia: 'ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଓ ରାସାୟନିକ ସମୀକରଣ',
    examWeightageMarks: 7,
    learningObjectives: [
      'Distinguish chemical changes from physical changes.',
      'Balance chemical equations based on Law of Conservation of Mass.',
      'Classify Combination, Decomposition, Displacement, Double Displacement, and Redox reactions.',
      'Identify daily corrosion and rancidity examples.'
    ],
    realLifeApplications: [
      'Rusting of iron bridges, digestion of food, combustion of LPG gas, white-washing walls using quicklime.'
    ],
    summaryEnglish: 'Types of chemical reactions: Combination (ସଂଶ୍ଲେଷଣ), Decomposition (ବିଘଟନ), Displacement (ବିସ୍ଥାପନ), Double Displacement (ଦ୍ବି-ବିସ୍ଥାପନ), and Redox reactions (ଜାରଣ-ବିଜାରଣ). Balancing equations based on Law of Conservation of Mass.',
    summaryOdia: 'ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାର ପ୍ରକାରଭେଦ: ସଂଶ୍ଲେଷଣ (Combination), ବିଘଟନ (Decomposition), ବିସ୍ଥାପନ (Displacement), ଦ୍ବି-ବିସ୍ଥାପନ (Double Displacement), ଏବଂ ଜାରଣ-ବିଜାରଣ (Redox)। ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ନିୟମ ଆଧାରରେ ସମୀକରଣର ସମତୁଲତା (Balancing)।',
    diagrams: [
      {
        title: 'Electrolysis of Water (ଜଳର ବିଦ୍ୟୁତ୍ ବିଘଟନ)',
        descriptionOdia: 'ପ୍ଲାଷ୍ଟିକ୍ ମଗ୍, ଗ୍ରାଫାଇଟ୍ ରଡ୍, ଆନୋଡ୍ ଓ କାଥୋଡ୍‌ରେ ହାଇଡ୍ରୋଜେନ୍ (2 Vol) ଓ ଅକ୍ସିଜେନ୍ (1 Vol) ସଂଗ୍ରହ।',
        svgType: 'atom',
        drawingSteps: ['Draw a beaker with water.', 'Insert two inverted test tubes over carbon electrodes.', 'Connect to 6V battery.', 'Label Anode (+ O2) and Cathode (- H2).']
      }
    ],
    keyWords: [
      { word: 'Exothermic (ତାପଉତ୍ପାଦୀ)', meaningOdia: 'ଯେଉଁ ପ୍ରତିକ୍ରିୟାରେ ତାପ ଉତ୍ପନ୍ନ ହୁଏ', meaningEnglish: 'Heat is released' },
      { word: 'Endothermic (ତାପଶୋଷୀ)', meaningOdia: 'ଯେଉଁ ପ୍ରତିକ୍ରିୟାରେ ତାପ ଶୋଷିତ ହୁଏ', meaningEnglish: 'Heat is absorbed' },
      { word: 'Rancidity (କଲରାପଣ/ଗନ୍ଧିଆ)', meaningOdia: 'ତେଲ ବା ଫ୍ୟାଟ୍ ଜାରିତ ହୋଇ ଦୁର୍ଗନ୍ଧ ହେବା', meaningEnglish: 'Oxidation of fats and oils' }
    ],
    shortQuestions: [
      {
        id: 'ps_sq1',
        qEnglish: 'Why is respiration considered an exothermic reaction?',
        qOdia: 'ଶ୍ୱସନକୁ ଏକ ତାପଉତ୍ପାଦୀ ପ୍ରତିକ୍ରିୟା କାହିଁକି କୁହାଯାଏ?',
        answerEnglish: 'During respiration, glucose reacts with oxygen in body cells to release energy along with carbon dioxide and water.',
        answerOdia: 'ଶ୍ୱସନ ସମୟରେ ଗ୍ଲୁକୋଜ୍ ଅମ୍ଳଜାନ ସହ ପ୍ରତିକ୍ରିୟା କରି ଶରୀରରେ ଶକ୍ତି ଓ ତାପ ଉତ୍ପନ୍ନ କରେ, ତେଣୁ ଏହା ତାପଉତ୍ପାଦୀ।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'ps_lq1',
        qEnglish: 'Explain Redox reaction with suitable balanced chemical equation example.',
        qOdia: 'ସମତୁଲ ସମୀକରଣ ସହ ଜାରଣ-ବିଜାରଣ (Redox) ପ୍ରତିକ୍ରିୟା ବୁଝାଅ।',
        answerEnglish: 'A reaction where oxidation and reduction occur simultaneously. Example: CuO + H2 -> Cu + H2O. Here CuO is reduced to Cu, and H2 is oxidized to H2O.',
        answerOdia: 'ଯେଉଁ ପ୍ରତିକ୍ରିୟାରେ ଜାରଣ ଓ ବିଜାରଣ ଏକାସଙ୍ଗେ ଘଟେ, ତାହା Redox। ଉଦାହରଣ: CuO + H2 -> Cu + H2O। CuO ବିଜାରିତ ହୋଇ Cu ହୁଏ ଏବଂ H2 ଜାରିତ ହୋଇ H2O ହୁଏ।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2023', question: 'Why should a magnesium ribbon be cleaned before burning in air?', answer: 'To remove the protective layer of basic magnesium carbonate from its surface so that it burns readily with oxygen.', marks: 2 }
    ],
    fillInBlanks: [
      { id: 'ps_fib1', question: 'Rusting of iron is an example of ________.', answer: 'Corrosion (କ୍ଷୟ)' }
    ],
    trueFalse: [
      { id: 'ps_tf1', statement: 'Decomposition reaction requires energy in form of heat, light or electricity.', isTrue: true, explanation: 'Energy breaks down reactant into simpler products.' }
    ],
    matchFollowing: [
      { left: 'CaO + H2O -> Ca(OH)2', right: 'Combination Reaction' },
      { left: '2Pb(NO3)2 -> 2PbO + 4NO2 + O2', right: 'Decomposition Reaction' },
      { left: 'Fe + CuSO4 -> FeSO4 + Cu', right: 'Displacement Reaction' }
    ],
    examTips: [
      'Always balance chemical equations step by step using hit-and-trial method for board exam 3-markers.'
    ],
    isPremium: false
  },

  // ---------------- CLASS 10 LIFE SCIENCE ----------------
  {
    id: 'c10_ls_ch1',
    classLevel: 'Class 10',
    subjectId: 'life_science',
    chapterNumber: 1,
    titleEnglish: 'Nutrition in Living Organisms',
    titleOdia: 'ପୋଷଣ (Nutrition)',
    examWeightageMarks: 8,
    learningObjectives: [
      'Understand Autotrophic (ସଙ୍ଗୀ ପୋଷଣ/ସାଲୋକଶ୍ଲେଷଣ) and Heterotrophic Nutrition.',
      'Study Light Phase (Grana) and Dark Phase (Stroma) of Photosynthesis.',
      'Explore Human Digestive System (ମାନବ ପାଚନ ତନ୍ତ୍ର) enzymes: Amylase, Pepsin, Trypsin, Lipase.'
    ],
    realLifeApplications: [
      'Helps understand balanced diet, importance of chlorophyll, solar energy trapping, and human digestive health.'
    ],
    summaryEnglish: 'Nutrition is the process of intake and utilization of nutrients. Autotrophic nutrition occurs in green plants through Photosynthesis: 6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O (in presence of sunlight and chlorophyll). Human digestive system consists of mouth, esophagus, stomach, small intestine, large intestine, liver, and pancreas.',
    summaryOdia: 'ପୋଷଣ ହେଉଛି ଖାଦ୍ୟ ଗ୍ରହଣ ଓ ତାର ବ୍ୟବହାର ପ୍ରକ୍ରିୟା। ସବୁଜ ଉଦ୍ଭିଦ ସାଲୋକଶ୍ଲେଷଣ (Photosynthesis) ଦ୍ୱାରା ନିଜ ଖାଦ୍ୟ ନିଜେ ପ୍ରସ୍ତୁତ କରନ୍ତି: ୬CO2 + ୧୨H2O -> C6H12O6 + ୬O2 + ୬H2O। ମାନବ ପାଚନ ତନ୍ତ୍ରରେ ଲାଳ, ପାକସ୍ଥଳୀ ରସ (HCl + Pepsin), ପିତ୍ତ ରସ, ଓ ଅଗ୍ନାଶୟ ରସ ଖାଦ୍ୟ ହଜମ କରନ୍ତି।',
    diagrams: [
      {
        title: 'Photosynthesis & Chloroplast Structure (ହରିତଲବକ)',
        descriptionOdia: 'ଗ୍ରାନା (Grana - ଆଲୋକ ପ୍ରକ୍ରିୟା) ଏବଂ ଷ୍ଟ୍ରୋମା (Stroma - ଅନ୍ଧକାର ପ୍ରକ୍ରିୟା)।',
        svgType: 'photosynthesis',
        drawingSteps: ['Draw outer double membrane.', 'Draw stacks of coin-like Thylakoids (Grana).', 'Label fluid Matrix (Stroma).']
      }
    ],
    keyWords: [
      { word: 'Autotrophic (ସ୍ୱଭୋଜୀ)', meaningOdia: 'ନିଜ ଖାଦ୍ୟ ନିଜେ ପ୍ରସ୍ତୁତ କରୁଥିବା ଜୀବ', meaningEnglish: 'Organisms making own food' },
      { word: 'Stroma (ଷ୍ଟ୍ରୋମା)', meaningOdia: 'ହରିତଲବକର ତରଳ ମ୍ୟାଟ୍ରିକ୍ସ', meaningEnglish: 'Fluid matrix where dark reaction occurs' },
      { word: 'Pepsin (ପେପ୍‌ସିନ୍)', meaningOdia: 'ପାକସ୍ଥଳୀରେ ଆମିଷ ହଜମ କରୁଥିବା ଏଞ୍ଜାଇମ୍', meaningEnglish: 'Protein digesting enzyme in stomach' }
    ],
    shortQuestions: [
      {
        id: 'ls_sq1',
        qEnglish: 'Where do light and dark reactions of photosynthesis take place?',
        qOdia: 'ସାଲୋକଶ୍ଲେଷଣର ଆଲୋକ ଓ ଅନ୍ଧକାର ପ୍ରକ୍ରିୟା କେଉଁଠି ଘଟେ?',
        answerEnglish: 'Light reaction occurs in Grana (Thylakoids) and Dark reaction occurs in Stroma of Chloroplast.',
        answerOdia: 'ଆଲୋକ ପ୍ରକ୍ରିୟା ଗ୍ରାନା (ଥାଇଲାକଏଡ୍) ରେ ଏବଂ ଅନ୍ଧକାର ପ୍ରକ୍ରିୟା ଷ୍ଟ୍ରୋମାରେ ସଂଘଟିତ ହୁଏ।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'ls_lq1',
        qEnglish: 'Describe the process of digestion of carbohydrates, proteins, and fats in the human small intestine.',
        qOdia: 'ମାନବ କ୍ଷୁଦ୍ରାନ୍ତ୍ରରେ ସ୍ୱେତସାର, ଆମିଷ ଓ ସ୍ନେହସାରର ପାଚନ ପ୍ରକ୍ରିୟା ବର୍ଣ୍ଣନା କର।',
        answerEnglish: 'Pancreatic juice contains Amylase (starches to maltose), Trypsin (proteins to peptides), and Lipase (emulsified fats to fatty acids & glycerol). Intestinal juice completes digestion into glucose, amino acids, and fatty acids.',
        answerOdia: 'ଅଗ୍ନାଶୟ ରସର ଆମାଇଲେଜ୍ ସ୍ୱେତସାରକୁ, ଟ୍ରିପ୍‌ସିନ୍ ଆମିଷକୁ, ଓ ଲାଇପେଜ୍ ସ୍ନେହସାରକୁ ସରଳ ଗ୍ଲୁକୋଜ୍, ଆମିନୋ ଏସିଡ୍ ଓ ଫ୍ୟାଟି ଏସିଡ୍‌ରେ ପରିଣତ କରେ।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2023', question: 'What is the role of HCl in the human stomach?', answer: 'Hydrochloric acid (HCl) creates an acidic medium required for activation of Pepsinogen into Pepsin and kills harmful bacteria present in ingested food.', marks: 2 }
    ],
    fillInBlanks: [
      { id: 'ls_f1', question: 'Chlorophyll contains the metal element ________.', answer: 'Magnesium (Mg)' }
    ],
    trueFalse: [
      { id: 'ls_tf1', statement: 'Bile juice contains powerful digestive enzymes.', isTrue: false, explanation: 'Bile juice contains no enzymes; it only emulsifies fats.' }
    ],
    matchFollowing: [
      { left: 'Grana', right: 'Light Reaction' },
      { left: 'Stroma', right: 'Dark Reaction' },
      { left: 'Salivary Amylase', right: 'Ptyalin' }
    ],
    examTips: ['Remember that bile juice has NO digestive enzymes, but is essential for fat emulsification!'],
    isPremium: false
  },

  // ---------------- CLASS 10 HISTORY & POLITICAL SCIENCE ----------------
  {
    id: 'c10_hist_ch1',
    classLevel: 'Class 10',
    subjectId: 'history_pol',
    chapterNumber: 1,
    titleEnglish: 'Rise of Indian Nationalism & Freedom Movement',
    titleOdia: 'ଭାରତୀୟ ଜାତୀୟତାବାଦର ଉନ୍ମେଷ ଓ ଗାନ୍ଧୀଯୁଗ',
    examWeightageMarks: 8,
    learningObjectives: [
      'Understand Non-Cooperation Movement (1920) led by Mahatma Gandhi.',
      'Analyze Jallianwala Bagh Massacre (13 April 1919) and Rowlatt Act.',
      'Study Civil Disobedience Movement & Dandi Salt March (1930).',
      'Examine Odisha’s role in Inchudi Salt Satyagraha led by Gopabandhu Choudhury & Rama Devi.'
    ],
    realLifeApplications: [
      'Teaches non-violent resistance (Satyagraha), civic duty, constitutional values, and pride in Odisha history.'
    ],
    summaryEnglish: 'The Indian National Movement entered its Gandhian era after World War I. Gandhi introduced Satyagraha against the Rowlatt Act. Following the Jallianwala Bagh Tragedy, the Non-Cooperation Movement was launched in 1920. In 1930, Gandhi marched to Dandi to break the salt law. In Odisha, Inchudi in Balasore became famous as the second Dandi.',
    summaryOdia: 'ପ୍ରଥମ ବିଶ୍ୱଯୁଦ୍ଧ ପରେ ଭାରତୀୟ ସ୍ୱାଧୀନତା ସଂଗ୍ରାମ ଗାନ୍ଧୀଯୁଗରେ ପ୍ରବେଶ କଲା। ରାଓଲାଟ୍ ଆଇନ୍ ବିରୋଧରେ ସତ୍ୟାଗ୍ରହ ଓ ଜାଲିଆନାୱାଲା ବାଗ୍ ହତ୍ୟାକାଣ୍ଡ ପରେ ୧୯୨୦ରେ ଅସହଯୋଗ ଆନ୍ଦୋଳନ ଆରମ୍ଭ ହେଲା। ୧୯୩୦ରେ ଗାନ୍ଧୀଜୀ ଦାଣ୍ଡି ଯାତ୍ରା କରି ଲବଣ ଆଇନ୍ ଭଙ୍ଗ କଲେ। ଓଡ଼ିଶାର ବାଲେଶ୍ୱର ଜିଲ୍ଲାର ଇଞ୍ଛୁଡ଼ି ଦ୍ୱିତୀୟ ଦାଣ୍ଡି ଭାବେ ଖ୍ୟାତି ଲାଭ କଲା।',
    keyWords: [
      { word: 'Satyagraha (ସତ୍ୟାଗ୍ରହ)', meaningOdia: 'ସତ୍ୟ ଓ ଅହିଂସା ମାଧ୍ୟମରେ ଦୃଢ଼ ଦାବି', meaningEnglish: 'Insistence on truth through non-violence' },
      { word: 'Inchudi (ଇଞ୍ଛୁଡ଼ି)', meaningOdia: 'ଓଡ଼ିଶାର ବାଲେଶ୍ୱର ଜିଲ୍ଲାର ପ୍ରସିଦ୍ଧ ଲବଣ ସତ୍ୟାଗ୍ରହ ପୀଠ', meaningEnglish: 'Famous Salt Satyagraha site in Odisha' }
    ],
    shortQuestions: [
      {
        id: 'hist_sq1',
        qEnglish: 'Why is Inchudi famous in the history of Odisha freedom movement?',
        qOdia: 'ଓଡ଼ିଶା ସ୍ୱାଧୀନତା ସଂଗ୍ରାମ ଇତିହାସରେ ଇଞ୍ଛୁଡ଼ି କାହିଁକି ପ୍ରସିଦ୍ଧ?',
        answerEnglish: 'Inchudi in Balasore district is famous because it was the chief center of Salt Satyagraha in Odisha in 1930, often called the Second Dandi.',
        answerOdia: '୧୯୩୦ ମସିହାରେ ଇଞ୍ଛୁଡ଼ିଠାରେ ଓଡ଼ିଶାର ମୁଖ୍ୟ ଲବଣ ସତ୍ୟାଗ୍ରହ ହୋଇଥିବାରୁ ଏହାକୁ ଦ୍ୱିତୀୟ ଦାଣ୍ଡି କୁହାଯାଏ।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'hist_lq1',
        qEnglish: 'Describe the causes and results of the Non-Cooperation Movement (1920-22).',
        qOdia: '୧୯୨୦-୨୨ ଅସହଯୋଗ ଆନ୍ଦୋଳନର କାରଣ ଓ ଫଳାଫଳ ଆଲୋଚନା କର।',
        answerEnglish: 'Causes: Rowlatt Act, Jallianwala Bagh massacre, Khilafat movement. Features: Surrender of titles, boycott of foreign clothes and schools. Suspended after Chauri Chaura incident (1922). Result: Created mass national awakening.',
        answerOdia: 'କାରଣ: ରାଓଲାଟ୍ ଆଇନ୍, ଜାଲିଆନାୱାଲା ବାଗ୍ ହତ୍ୟାକାଣ୍ଡ ଓ ଖିଲାଫତ୍ ମୁଦ୍ଦା। ସୌରୀଚୌରା ହିଂସାକାଣ୍ଡ ପରେ ଗାନ୍ଧୀଜୀ ଆନ୍ଦୋଳନ ସ୍ଥଗିତ ରଖିଥିଲେ।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2024', question: 'When did the Jallianwala Bagh massacre take place and who ordered the firing?', answer: 'On 13th April 1919 at Amritsar; General Dyer ordered open firing on peaceful protesters.', marks: 2 }
    ],
    fillInBlanks: [
      { id: 'h_f1', question: 'The Dandi Salt March started from ________ Ashram.', answer: 'Sabarmati' }
    ],
    trueFalse: [
      { id: 'h_tf1', statement: 'Utkalmani Gopabandhu Das led the Non-Cooperation movement in Odisha.', isTrue: true, explanation: 'Utkalmani formed Utkal Pradesh Congress Committee.' }
    ],
    matchFollowing: [
      { left: 'Jallianwala Bagh', right: '13 April 1919' },
      { left: 'Dandi March', right: '12 March 1930' },
      { left: 'Chauri Chaura', right: '5 February 1922' }
    ],
    examTips: ['Always mention exact dates (13 April 1919, 12 March 1930) in BSE history answers.'],
    isPremium: false
  },

  // ---------------- CLASS 10 GEOGRAPHY & ECONOMICS ----------------
  {
    id: 'c10_geo_ch1',
    classLevel: 'Class 10',
    subjectId: 'geo_econ',
    chapterNumber: 1,
    titleEnglish: 'Resource and Development',
    titleOdia: 'ସମ୍ବଳ ଓ ବିକାଶ (Resources & Development)',
    examWeightageMarks: 7,
    learningObjectives: [
      'Classify resources: Biotic/Abiotic, Renewable/Non-renewable, Individual/Community/National/International.',
      'Study Soil types of India & Odisha: Alluvial (ପାଟୁ ମାଟି), Black (କୃଷ୍ଣ ମୃତ୍ତିକା), Red & Yellow, Laterite.',
      'Understand Soil Erosion (ମୃତ୍ତିକା କ୍ଷୟ) and Conservation techniques.'
    ],
    realLifeApplications: [
      'Promotes sustainable development, water conservation, preventing soil erosion in agricultural fields.'
    ],
    summaryEnglish: 'Everything available in our environment that satisfies human needs, provided it is technologically accessible, economically feasible, and culturally acceptable is a Resource. Classification of soils in India: Alluvial, Black (Regur - ideal for cotton), Red & Yellow, Laterite, Arid, and Forest soils.',
    summaryOdia: 'ଆମ ପରିବେଶରେ ଉପଲବ୍ଧ ଯେଉଁ ବସ୍ତୁ ମାନବର ଆବଶ୍ୟକତା ପୂରଣ କରେ ତାହା ସମ୍ବଳ। ସମ୍ବଳ ଶ୍ରେଣୀବିଭାଗ: ଜୈବ/ଅଜୈବ, ନବୀକରଣ ଯୋଗ୍ୟ/ଅଯୋଗ୍ୟ। ଭାରତର ମୃତ୍ତିକା: ପାଟୁ, କୃଷ୍ଣ (ରେଗୁର - କପା ଚାଷ ପାଇଁ ଉତ୍ତମ), ଲୋହିତ, ଓ ଲାଟେରାଇଟ୍ ମୃତ୍ତିକା।',
    keyWords: [
      { word: 'Sustainable Development (ସୁସ୍ଥିର ବିକାଶ)', meaningOdia: 'ଭବିଷ୍ୟତ ପାଇଁ ସମ୍ବଳ ସଂରକ୍ଷିତ ରଖି ବିକାଶ', meaningEnglish: 'Development meeting present needs without compromising future' },
      { word: 'Regur Soil (ରେଗୁର ମୃତ୍ତିକା)', meaningOdia: 'କୃଷ୍ଣ ମୃତ୍ତିକା (କପା ଚାଷ ପାଇଁ ଉପଯୁକ୍ତ)', meaningEnglish: 'Black cotton soil' }
    ],
    shortQuestions: [
      {
        id: 'geo_sq1',
        qEnglish: 'Which soil is known as Regur soil and which crop grows best in it?',
        qOdia: 'କେଉଁ ମୃତ୍ତିକାକୁ ରେଗୁର ମୃତ୍ତିକା କୁହାଯାଏ ଏବଂ ଏଥିରେ କେଉଁ ଫସଲ ଭଲ ହୁଏ?',
        answerEnglish: 'Black soil is known as Regur soil. Cotton crop grows best in it.',
        answerOdia: 'କୃଷ୍ଣ ମୃତ୍ତିକାକୁ ରେଗୁର ମୃତ୍ତିକା କୁହାଯାଏ। ଏଥିରେ କପା ଚାଷ ସବୁଠାରୁ ଭଲ ହୁଏ।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'geo_lq1',
        qEnglish: 'What is Soil Erosion? Describe four measures taken for soil conservation in hilly areas.',
        qOdia: 'ମୃତ୍ତିକା କ୍ଷୟ କାହାକୁ କୁହନ୍ତି? ପାହାଡ଼ିଆ ଅଞ୍ଚଳରେ ମୃତ୍ତିକା ସଂରକ୍ଷଣର ଚାରୋଟି ଉପାୟ ଲେଖ।',
        answerEnglish: 'Denudation of soil cover and subsequent washing down is soil erosion. Measures: Contour ploughing, Terrace farming, Strip cropping, and Shelter belts of trees.',
        answerOdia: 'ଉପରିସ୍ଥ ମୃତ୍ତିକା ସ୍ତର ନଷ୍ଟ ହେବାକୁ ମୃତ୍ତିକା କ୍ଷୟ କୁହାଯାଏ। ଉପାୟ: ସମୋଚ୍ଚ ରେଖା ପ୍ରଣାଳୀରେ ଚାଷ, ସୋପାନ ଚାଷ, ଏବଂ ରକ୍ଷକ ମେଖଳା (Shelterbelts)।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2023', question: 'Define Sustainable Development.', answer: 'Development that takes place without damaging the environment, and development in the present should not compromise the needs of future generations.', marks: 2 }
    ],
    fillInBlanks: [
      { id: 'g_f1', question: 'Alluvial soil deposited by new floods is called ________.', answer: 'Khadar' }
    ],
    trueFalse: [
      { id: 'g_tf1', statement: 'Bangar is old alluvial soil containing calcareous deposits (Kankar).', isTrue: true, explanation: 'Bangar is higher in clay and kankar nodules.' }
    ],
    matchFollowing: [
      { left: 'Black Soil', right: 'Cotton Cultivation' },
      { left: 'Khadar', right: 'New Alluvium' },
      { left: 'Bangar', right: 'Old Alluvium' }
    ],
    examTips: ['Remember Khadar = New & Fertile; Bangar = Old & Kankar.'],
    isPremium: false
  },

  // ---------------- CLASS 9 SAHITYA (ODIA) ----------------
  {
    id: 'c9_odia_ch1',
    classLevel: 'Class 9',
    subjectId: 'odia',
    chapterNumber: 1,
    titleEnglish: 'Vande Utkala Janani',
    titleOdia: 'ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ (କାନ୍ତକବି ଲକ୍ଷ୍ମୀକାନ୍ତ ମହାପାତ୍ର)',
    examWeightageMarks: 10,
    learningObjectives: [
      'Understand Odisha State Anthem written by Kantakabi Laxmikanta Mohapatra.',
      'Appreciate Utkal Mother’s natural glory, rivers, green fields, and holy temples.',
      'Master lines for recitation and Class 9 BSE board exam poetry explanation.'
    ],
    realLifeApplications: [
      'Inspires patriotism, respect for Odisha state heritage, and unity among Odia people.'
    ],
    summaryEnglish: 'Vande Utkala Janani is the State Anthem of Odisha written by Kantakabi Laxmikanta Mohapatra. The poem depicts the natural beauty, serene rivers (Mahanadi, Brahmani), dense green forests, sacred temples, and glorious history of Mother Utkal.',
    summaryOdia: '‘ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ’ ଓଡ଼ିଶାର ରାଜ୍ୟ ସଙ୍ଗୀତ, ଯାହା କାନ୍ତକବି ଲକ୍ଷ୍ମୀକାନ୍ତ ମହାପାତ୍ରଙ୍କ ଦ୍ୱାରା ରଚିତ। ଏହି କବିତାରେ ଉତ୍କଳ ମାତାଙ୍କର ସୁନ୍ଦର ପ୍ରାକୃତିକ ଶୋଭା, ପବିତ୍ର ନଦୀ, ସୁନୀଳ ସମୁଦ୍ର ତଟ, ସବୁଜ ବନାନୀ, ଶାସ୍ତ୍ରଜ୍ଞ ପଣ୍ଡିତ ଓ ବୀରପୁତ୍ରମାନଙ୍କର ଯଶ ଗାନ କରାଯାଇଛି।',
    lineByLineExplanation: [
      {
        paragraphNo: 1,
        textEnglish: 'Vande Utkala Janani! Charu hasamayee, charu bhashamayee, Janani, Janani, Janani!',
        textOdia: 'ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ! ଚାରୁ ହାସମୟୀ, ଚାରୁ ଭାଷମୟୀ, ଜନନୀ, ଜନନୀ, ଜନନୀ!',
        keyNote: 'Meaning: Hail Mother Utkal, who possesses a sweet smile and beautiful language.'
      }
    ],
    keyWords: [
      { word: 'ଚାରୁ ହାସମୟୀ', meaningOdia: 'ସୁନ୍ଦର ହାସ୍ୟଯୁକ୍ତା', meaningEnglish: 'Beautiful smiling mother' },
      { word: 'ତଟୀନୀ', meaningOdia: 'ନଦୀ', meaningEnglish: 'River' },
      { word: 'ଘନ ବନାନୀ', meaningOdia: 'ଗହନ ଜଙ୍ଗଲ', meaningEnglish: 'Dense forest' }
    ],
    shortQuestions: [
      {
        id: 'o_sq1',
        qEnglish: 'Who composed "Vande Utkala Janani"?',
        qOdia: '‘ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ’ ରଚୟିତା କିଏ?',
        answerEnglish: 'Kantakabi Laxmikanta Mohapatra composed "Vande Utkala Janani".',
        answerOdia: 'କାନ୍ତକବି ଲକ୍ଷ୍ମୀକାନ୍ତ ମହାପାତ୍ର ‘ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ’ ରଚନା କରିଥିଲେ।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'o_lq1',
        qEnglish: 'Describe how Mother Utkal is glorified in "Vande Utkala Janani".',
        qOdia: '‘ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ’ କବିତାରେ ଉତ୍କଳ ଜନନୀଙ୍କ ରୂପଶ୍ରୀ କିପରି ବର୍ଣ୍ଣିତ?',
        answerEnglish: 'Mother Utkal is praised for her serene sea shore, pure waters of rivers, lush green paddy fields, majestic temples, and heroic sons who sacrificed for their motherland.',
        answerOdia: 'ଉତ୍କଳ ମାତାଙ୍କ ଶରୀର ସମୁଦ୍ରର ପବିତ୍ର ଜଳଦ୍ୱାରା ଧୌତ, ତଟଦେଶ ସୁନ୍ଦର ତାଳତମାଳ ଗଛରେ ଶୋଭିତ, ସବୁଜ ଧାନ୍ୟକ୍ଷେତ୍ର ଓ ଐତିହାସିକ ମନ୍ଦିରରାଜି ଦ୍ୱାରା ସେ ସୁଶୋଭିତା।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2023', question: 'In which year was Vande Utkala Janani first sung at Utkal Sammilani?', answer: 'It was first sung at the 1912 Balasore Utkal Sammilani session.', marks: 2 }
    ],
    fillInBlanks: [
      { id: 'o_fib1', question: 'ପୂତ ଚାରିତ୍ର ________ ଜନନୀ।', answer: 'ଶାସ୍ତ୍ର ଜ୍ଞାନୀ' }
    ],
    trueFalse: [
      { id: 'o_tf1', statement: '‘ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ’ କବିତାଟି ଉତ୍କଳ ସମ୍ମିଳନୀରେ ପ୍ରଥମ ଗାନ କରାଯାଇଥିଲା।', isTrue: true, explanation: '୧୯୧୨ ମସିହା ବାଲେଶ୍ୱର ଉତ୍କଳ ସମ୍ମିଳନୀରେ ପ୍ରଥମ ଗାନ କରାଯାଇଥିଲା।' }
    ],
    matchFollowing: [
      { left: 'ଉତ୍କଳ ଜନନୀ', right: 'ଚାରୁ ଭାଷମୟୀ' },
      { left: 'ନଦୀକୂଳ', right: 'ଶୀକର ସମୀର' },
      { left: 'ମନ୍ଦିର', right: 'ପୁଣ୍ୟ ତୀର୍ଥ' }
    ],
    examTips: [
      'Learn key lines of Vande Utkala Janani for BSE Odisha Class 9 Odia literature poetry short answers.'
    ],
    isPremium: false
  },

  // ---------------- CLASS 9 MATHEMATICS ----------------
  {
    id: 'c9_math_ch1',
    classLevel: 'Class 9',
    subjectId: 'math',
    chapterNumber: 1,
    titleEnglish: 'Real Numbers & Number System',
    titleOdia: 'ବାସ୍ତବ ସଂଖ୍ୟା (Real Numbers)',
    examWeightageMarks: 8,
    learningObjectives: [
      'Understand Natural (N), Whole (W), Integers (Z), Rational (Q), and Irrational numbers (Q\').',
      'Represent irrational numbers √2, √3, √5 on the Number Line.',
      'Master Rationalization of denominators (ହରର ପରିମେୟୀକରଣ) and Laws of Exponents.'
    ],
    realLifeApplications: [
      'Used in precision engineering, calculating square roots in geometry, scale conversions.'
    ],
    summaryEnglish: 'Real Numbers (R) consists of all Rational (Q) and Irrational numbers (Q\'). Rational numbers can be written as p/q (q ≠ 0) with terminating or non-terminating recurring decimal expansion. Irrational numbers have non-terminating non-recurring decimal representation. Every real number corresponds to a unique point on the number line.',
    summaryOdia: 'ବାସ୍ତବ ସଂଖ୍ୟା (R) = ପରିମେୟ ସଂଖ୍ୟା (Q) + ଅପରିମେୟ ସଂଖ୍ୟା (Q\')। p/q (q ≠ 0) ରୂପୀ ସଂଖ୍ୟା ପରିମେୟ। √2, √3, π ଅପରିମେୟ ସଂଖ୍ୟା। ଅସସୀମ ଅନାବୃତ୍ତ ଦଶମିକ ରୂପ ଅପରିମେୟ ସଂଖ୍ୟାର ଲକ୍ଷଣ।',
    formulas: [
      { name: 'Rationalization Identity', formula: '1 / (a + √b) = (a - √b) / (a^2 - b)', units: 'algebraic form', explanationOdia: 'ହରରେ ଥିବା ଅପରିମେୟ ସଂଖ୍ୟା କାଢ଼ିବା ପାଇଁ ଅନୁବନ୍ଧୀ ଅପରିମେୟ (Conjugate) ଦ୍ୱାରା ଗୁଣନ କରାଯାଏ।' }
    ],
    numericals: [
      {
        question: 'Rationalize the denominator of 1 / (3 + √2).',
        solutionSteps: [
          'Multiply numerator and denominator by (3 - √2)',
          'Numerator = 1 * (3 - √2) = 3 - √2',
          'Denominator = (3 + √2)(3 - √2) = 3^2 - (√2)^2 = 9 - 2 = 7'
        ],
        finalAnswer: '(3 - √2) / 7'
      }
    ],
    keyWords: [
      { word: 'Rational Number (ପରିମେୟ ସଂଖ୍ୟା)', meaningOdia: 'p/q (q ≠ 0) ଆକାରର ସଂଖ୍ୟା', meaningEnglish: 'Numbers represented as p/q' },
      { word: 'Rationalization (ପରିମେୟୀକରଣ)', meaningOdia: 'ହରରୁ ଅପରିମେୟ ସଙ୍କେତ ହଟାଇବା', meaningEnglish: 'Converting irrational denominator to rational' }
    ],
    shortQuestions: [
      {
        id: 'rn_sq1',
        qEnglish: 'Find two rational numbers between 1/3 and 1/2.',
        qOdia: '୧/୩ ଏବଂ ୧/୨ ମଧ୍ୟରେ ଦୁଇଟି ପରିମେୟ ସଂଖ୍ୟା ନିର୍ଣ୍ଣୟ କର।',
        answerEnglish: '1/3 = 10/30 and 1/2 = 15/30. Two rational numbers are 11/30 and 12/30 (or 2/5).',
        answerOdia: '୧୧/୩୦ ଏବଂ ୧୨/୩୦ (ବା ୨/୫)।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'rn_lq1',
        qEnglish: 'Prove that √2 is an irrational number.',
        qOdia: 'ପ୍ରମାଣ କର ଯେ √2 ଏକ ଅପରିମେୟ ସଂଖ୍ୟା।',
        answerEnglish: 'Assume √2 is rational = p/q where p, q are co-prime. 2 = p^2/q^2 => p^2 = 2q^2 => p is divisible by 2. Let p = 2k => 4k^2 = 2q^2 => q^2 = 2k^2 => q is also divisible by 2. This contradicts co-prime condition. Hence √2 is irrational.',
        answerOdia: 'ବିପରୀତ କଳ୍ପନା ଦ୍ୱାରା ପ୍ରମାଣ: √2 = p/q (p, q ସହ-ମୌଳିକ)। p ଓ q ର ସାଧାରଣ ଗୁଣନୀୟକ ୨ ବାହାରୁଥିବାରୁ ଏହା ବିରୋଧାଭାସ, ତେଣୁ √2 ଅପରିମେୟ।',
        marks: 5
      }
    ],
    fillInBlanks: [
      { id: 'rn_f1', question: 'Decimal expansion of an irrational number is non-terminating ________.', answer: 'non-recurring (ଅନାବୃତ୍ତ)' }
    ],
    trueFalse: [
      { id: 'rn_tf1', statement: 'Every real number can be represented by a unique point on the number line.', isTrue: true, explanation: 'Number line is also called Real Number Line.' }
    ],
    matchFollowing: [
      { left: '√2, √3, π', right: 'Irrational Numbers' },
      { left: '22/7, 0.75, 3/5', right: 'Rational Numbers' }
    ],
    examTips: ['Remember that π is irrational, but 22/7 is a rational approximation!'],
    isPremium: false
  },

  // ---------------- CLASS 9 SCIENCE ----------------
  {
    id: 'c9_sci_ch1',
    classLevel: 'Class 9',
    subjectId: 'physical_science',
    chapterNumber: 1,
    titleEnglish: 'Cell - The Fundamental Unit of Life',
    titleOdia: 'କୋଷ - ଜୀବନର ମୌଳିକ ଏକକ (Cell Structure)',
    examWeightageMarks: 9,
    learningObjectives: [
      'Understand Cell discovery (Robert Hooke 1665) and Cell Theory (Schleiden & Schwann).',
      'Distinguish Plant Cell vs Animal Cell, Prokaryote vs Eukaryote.',
      'Study Cell Organelles: Mitochondria (Powerhouse), Lysosome (Suicide bag), Ribosome (Protein factory), Chloroplast.'
    ],
    realLifeApplications: [
      'Helps understand human body growth, cancer biology, plant cellular respiration, and tissue repair.'
    ],
    summaryEnglish: 'The cell is the structural and functional unit of all living organisms. Robert Hooke discovered cells in cork slice in 1665. Mitochondria is called the Powerhouse of the cell because it produces ATP. Lysosomes are known as Suicide bags because their digestive enzymes destroy damaged cells.',
    summaryOdia: 'କୋଷ ଜୀବନର ଗଠନମୂଳକ ଓ କାର୍ଯ୍ୟକାରୀ ଏକକ। ୧୬୬୫ ମସିହାରେ ରବର୍ଟ ହୁକ୍ କୋଷ ଆବିଷ୍କାର କରିଥିଲେ। ମାଇଟୋକଣ୍ଡ୍ରିଆକୁ କୋଷର "ଶକ୍ତି କେନ୍ଦ୍ର" (Powerhouse - ATP) ଏବଂ ଲାଇସୋସୋମ୍‌କୁ "ଆତ୍ମଘାତୀ ଥଳୀ" (Suicide bag) କୁହାଯାଏ।',
    diagrams: [
      {
        title: 'Plant Cell vs Animal Cell Structure (ଉଦ୍ଭିଦ ଓ ପ୍ରାଣୀ କୋଷ)',
        descriptionOdia: 'ଉଦ୍ଭିଦ କୋଷରେ କୋଷଭିତ୍ତି (Cell Wall) ଓ ବଡ଼ ରସଧାନୀ (Vacuole) ଥାଏ, ପ୍ରାଣୀ କୋଷରେ କୋଷଭିତ୍ତି ନଥାଏ।',
        svgType: 'cell',
        drawingSteps: ['Draw outer Cell Wall & Plasma Membrane.', 'Place central Nucleus with Nucleolus.', 'Draw Mitochondria, Endoplasmic Reticulum, Chloroplasts.']
      }
    ],
    keyWords: [
      { word: 'Mitochondria (ମାଇଟୋକଣ୍ଡ୍ରିଆ)', meaningOdia: 'କୋଷର ଶକ୍ତି କେନ୍ଦ୍ର (ATP)', meaningEnglish: 'Powerhouse of the cell' },
      { word: 'Lysosome (ଲାଇସୋସୋମ୍)', meaningOdia: 'ଆତ୍ମଘାତୀ ଥଳୀ', meaningEnglish: 'Suicidial bags containing digestive enzymes' }
    ],
    shortQuestions: [
      {
        id: 'cell_sq1',
        qEnglish: 'Why are lysosomes called suicide bags of a cell?',
        qOdia: 'ଲାଇସୋସୋମ୍‌କୁ କୋଷର ଆତ୍ମଘାତୀ ଥଳୀ କାହିଁକି କୁହାଯାଏ?',
        answerEnglish: 'When a cell gets damaged or worn out, lysosomes burst and their hydrolytic digestive enzymes digest their own cell.',
        answerOdia: 'କୋଷ କ୍ଷତିଗ୍ରସ୍ତ ହେଲେ ଲାଇସୋସୋମ୍‌ ଫାଟିଯାଏ ଏବଂ ଏହାର ପାଚକ ଏଞ୍ଜାଇମ୍‌ ନିଜ କୋଷକୁ ହଜମ କରିଦିଏ।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'cell_lq1',
        qEnglish: 'Differentiate between Plant Cell and Animal Cell with four key differences.',
        qOdia: 'ଉଦ୍ଭିଦ କୋଷ ଓ ପ୍ରାଣୀ କୋଷ ମଧ୍ୟରେ ଚାରୋଟି ମୁଖ୍ୟ ପାର୍ଥକ୍ୟ ଲେଖ।',
        answerEnglish: '1. Plant cell has Cell Wall; Animal cell lacks cell wall. 2. Plant cell contains Chloroplasts; Animal cell lacks chloroplasts. 3. Plant cell has a large central Vacuole; Animal cell has small vacuoles. 4. Centrosome is absent in plant cells.',
        answerOdia: '୧. ଉଦ୍ଭିଦ କୋଷରେ ସେଲ୍ୟୁଲୋଜ୍ ନିର୍ମିତ କୋଷଭିତ୍ତି ଥାଏ; ପ୍ରାଣୀ କୋଷରେ ନଥାଏ। ୨. ଉଦ୍ଭିଦ କୋଷରେ ହରିତଲବକ ଥାଏ। ୩. ଉଦ୍ଭିଦ କୋଷରେ ବଡ଼ ରସଧାନୀ ଥାଏ।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2023', question: 'Which cell organelle is known as the Powerhouse of the cell and why?', answer: 'Mitochondria; because it generates cellular energy currency in the form of ATP during respiration.', marks: 2 }
    ],
    fillInBlanks: [
      { id: 'c_f1', question: 'Energy currency of the cell is ________.', answer: 'ATP (Adenosine Triphosphate)' }
    ],
    trueFalse: [
      { id: 'c_tf1', statement: 'Prokaryotic cells have a well-defined nuclear membrane.', isTrue: false, explanation: 'Prokaryotes lack a defined nuclear membrane (nucleoid only).' }
    ],
    matchFollowing: [
      { left: 'Mitochondria', right: 'Powerhouse (ATP)' },
      { left: 'Lysosome', right: 'Suicide Bag' },
      { left: 'Ribosome', right: 'Protein Factory' }
    ],
    examTips: ['Always draw neat labelled diagrams for 5-mark cell structure questions in BSE science exams!'],
    isPremium: false
  }
];

export const MOCK_TESTS: MockTest[] = [
  {
    id: 'mt_c10_grand_1',
    titleEnglish: 'Class 10 BSE Grand Board Mock Test 1',
    titleOdia: 'ଦଶମ ଶ୍ରେଣୀ ବୋର୍ଡ ମ୍ୟାଟ୍ରିକ୍ ସମ୍ପୂର୍ଣ୍ଣ ମକ୍ ଟେଷ୍ଟ - ୧',
    classLevel: 'Class 10',
    durationMinutes: 45,
    totalMarks: 30,
    isPremium: false,
    questions: [
      {
        id: 'q1',
        classLevel: 'Class 10',
        subjectId: 'english',
        difficulty: 'Easy',
        questionEnglish: 'What did Lencho compare the raindrops falling from the sky to?',
        questionOdia: 'ଆକାଶରୁ ଖସୁଥିବା ବର୍ଷା ବିନ୍ଦୁକୁ ଲେଞ୍ଚୋ କାହା ସହିତ ତୁଳନା କରିଥିଲେ?',
        optionsEnglish: ['Silver coins', 'New coins', 'Pearls', 'Diamonds'],
        optionsOdia: ['ରୂପା ମୁଦ୍ରା', 'ନୂଆ ମୁଦ୍ରା', 'ମୋତି', 'ହୀରା'],
        correctOptionIndex: 1,
        explanationEnglish: 'Lencho said the big drops were 10 cent pieces and small ones were 5 cent pieces (new coins).',
        explanationOdia: 'ଲେଞ୍ଚୋ ବଡ଼ ବିନ୍ଦୁକୁ ୧୦ ସେଣ୍ଟ ଓ ସାନ ବିନ୍ଦୁକୁ ୫ ସେଣ୍ଟର ନୂଆ ମୁଦ୍ରା ସହ ତୁଳନା କରିଥିଲେ।'
      },
      {
        id: 'q2',
        classLevel: 'Class 10',
        subjectId: 'math',
        difficulty: 'Medium',
        questionEnglish: 'If 2x + 3y = 12 and x - y = 1, then what is the value of (x, y)?',
        questionOdia: 'ଯଦି 2x + 3y = 12 ଏବଂ x - y = 1, ତେବେ (x, y) ର ମୂଲ୍ୟ କେତେ?',
        optionsEnglish: ['(3, 2)', '(2, 3)', '(4, 1)', '(5, 0)'],
        optionsOdia: ['(3, 2)', '(2, 3)', '(4, 1)', '(5, 0)'],
        correctOptionIndex: 0,
        explanationEnglish: 'x = y + 1 => 2(y+1) + 3y = 12 => 5y = 10 => y = 2, x = 3.',
        explanationOdia: 'x = 3 ଏବଂ y = 2 ସମୀକରଣ ଦ୍ୱୟକୁ ସିଦ୍ଧ କରେ।'
      },
      {
        id: 'q3',
        classLevel: 'Class 10',
        subjectId: 'physical_science',
        difficulty: 'Medium',
        questionEnglish: 'Which gas is evolved when zinc granules react with dilute hydrochloric acid?',
        questionOdia: 'ଜିଙ୍କ୍ ଗୁଣ୍ଡ ଲଘୁ ହାଇଡ୍ରୋକ୍ଲୋରିକ୍ ଏସିଡ୍ ସହ ପ୍ରତିକ୍ରିୟା କଲେ କେଉଁ ଗ୍ୟାସ୍ ନିର୍ଗତ ହୁଏ?',
        optionsEnglish: ['Oxygen gas', 'Carbon dioxide gas', 'Hydrogen gas', 'Nitrogen gas'],
        optionsOdia: ['ଅମ୍ଳଜାନ ଗ୍ୟାସ୍', 'ଅଙ୍ଗାରକାମ୍ଳ ଗ୍ୟାସ୍', 'ଉଦ୍‌ଜାନ (Hydrogen) ଗ୍ୟାସ୍', 'ଯବକ୍ଷାରଜାନ ଗ୍ୟାସ୍'],
        correctOptionIndex: 2,
        explanationEnglish: 'Zn + 2HCl -> ZnCl2 + H2^. Hydrogen gas pops when brought near a flame.',
        explanationOdia: 'Zn + 2HCl -> ZnCl2 + H2 (ଉଦ୍‌ଜାନ ଗ୍ୟାସ୍)।'
      },
      {
        id: 'q4',
        classLevel: 'Class 10',
        subjectId: 'life_science',
        difficulty: 'Hard',
        questionEnglish: 'Where does the dark reaction (Light Independent Phase) of photosynthesis take place in plants?',
        questionOdia: 'ଉଦ୍ଭିଦର ସାଲୋକଶ୍ଲେଷଣର ଅନ୍ଧକାର ପ୍ରକ୍ରିୟା (Dark Reaction) କେଉଁଠାରେ ଘଟେ?',
        optionsEnglish: ['Grana', 'Stroma', 'Thylakoid', 'Mitochondria'],
        optionsOdia: ['ଗ୍ରାନା (Grana)', 'ଷ୍ଟ୍ରୋମା (Stroma)', 'ଥାଇଲାକଏଡ୍', 'ମାଇଟୋକଣ୍ଡ୍ରିଆ'],
        correctOptionIndex: 1,
        explanationEnglish: 'Light reaction happens in Grana/Thylakoid; Dark reaction happens in the Stroma of chloroplast.',
        explanationOdia: 'ଅନ୍ଧକାର ପ୍ରକ୍ରିୟା ହରିତଲବକର ଷ୍ଟ୍ରୋମା (Stroma) ରେ ସଂଘଟିତ ହୁଏ।'
      }
    ]
  },
  {
    id: 'mt_c9_grand_1',
    titleEnglish: 'Class 9 BSE Odisha Full Syllabus Test',
    titleOdia: 'ନବମ ଶ୍ରେଣୀ ସମ୍ପୂର୍ଣ୍ଣ ମାସିକ ପରୀକ୍ଷା',
    classLevel: 'Class 9',
    durationMinutes: 30,
    totalMarks: 20,
    isPremium: false,
    questions: [
      {
        id: 'q9_1',
        classLevel: 'Class 9',
        subjectId: 'odia',
        difficulty: 'Easy',
        questionEnglish: 'Which poet wrote "Vande Utkala Janani"?',
        questionOdia: '‘ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ’ କାହାର ରଚନା?',
        optionsEnglish: ['Kavisurya Baladeva Rath', 'Kantakabi Laxmikanta Mohapatra', 'Fakir Mohan Senapati', 'Radhanath Ray'],
        optionsOdia: ['କବିସୂର୍ଯ୍ୟ ବଳଦେବ ରଥ', 'କାନ୍ତକବି ଲକ୍ଷ୍ମୀକାନ୍ତ ମହାପାତ୍ର', 'ଫକୀର ମୋହନ ସେନାପତି', 'ରାଧାନାଥ ରାୟ'],
        correctOptionIndex: 1,
        explanationEnglish: 'Kantakabi Laxmikanta Mohapatra.',
        explanationOdia: 'କାନ୍ତକବି ଲକ୍ଷ୍ମୀକାନ୍ତ ମହାପାତ୍ର।'
      }
    ]
  }
];

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: 'gt_tenses',
    titleEnglish: 'Tenses and Time',
    titleOdia: 'କାଳ ଓ ସମୟ (Tenses & Aspects)',
    rules: [
      {
        ruleEnglish: 'Present Simple is used for habitual truths and scientific facts.',
        ruleOdia: 'ଅଭ୍ୟାସଗତ ସତ୍ୟ ଓ ବୈଜ୍ଞାନିକ ତଥ୍ୟ ପାଇଁ Present Simple ବ୍ୟବହୃତ ହୁଏ।',
        exampleEnglish: 'The sun rises in the east. Water boils at 100°C.',
        exampleOdia: 'ସୂର୍ଯ୍ୟ ପୂର୍ବ ଦିଗରେ ଉଦୟ ହୁଅନ୍ତି।'
      },
      {
        ruleEnglish: 'Present Perfect uses Has/Have + V3 for actions completed recently with present effect.',
        ruleOdia: 'ସଦ୍ୟ ଶେଷ ହୋଇଥିବା କାର୍ଯ୍ୟ ପାଇଁ Has/Have + କ୍ରିୟାର ତୃତୀୟ ରୂପ (V3) ବ୍ୟବହାର କରାଯାଏ।',
        exampleEnglish: 'I have finished my homework.',
        exampleOdia: 'ମୁଁ ମୋର ଗୃହକାର୍ଯ୍ୟ ଶେଷ କରିସାରିଛି।'
      }
    ],
    practiceQuestions: [
      {
        sentence: 'He ________ (go) to Cuttack yesterday.',
        options: ['goes', 'went', 'has gone', 'had gone'],
        answer: 'went',
        explanation: 'Past Simple is used because "yesterday" specifies a completed time in the past.'
      },
      {
        sentence: 'Oil ________ (float) on water.',
        options: ['floats', 'is floating', 'floated', 'has floated'],
        answer: 'floats',
        explanation: 'Universal truth take present simple.'
      }
    ]
  },
  {
    id: 'gt_voice',
    titleEnglish: 'Active and Passive Voice',
    titleOdia: 'କର୍ତ୍ତୃବାଚ୍ୟ ଓ କର୍ମବାଚ୍ୟ',
    rules: [
      {
        ruleEnglish: 'Object becomes Subject; verb is changed to Be + V3 form.',
        ruleOdia: 'କର୍ମ ପ୍ରଧାନ ହୋଇ କର୍ତ୍ତା ଶେଷକୁ ଯାଏ ଓ କ୍ରିୟା Be + V3 ରୂପ ନିଏ।',
        exampleEnglish: 'Active: The postmaster helped Lencho. -> Passive: Lencho was helped by the postmaster.',
        exampleOdia: 'ଡାକପାଳ ଲେଞ୍ଚୋଙ୍କୁ ସାହାଯ୍ୟ କଲେ। -> ଲେଞ୍ଚୋ ଡାକପାଳଙ୍କ ଦ୍ୱାରା ସାହାଯ୍ୟପ୍ରାପ୍ତ ହେଲେ।'
      }
    ],
    practiceQuestions: [
      {
        sentence: 'Convert to Passive: "The teacher teaches English."',
        options: ['English is taught by the teacher.', 'English was taught by the teacher.', 'English is teaching by teacher.', 'English taught teacher.'],
        answer: 'English is taught by the teacher.',
        explanation: 'Present simple active becomes "is/am/are + V3" in passive.'
      }
    ]
  },
  {
    id: 'gt_prepositions',
    titleEnglish: 'Prepositions',
    titleOdia: 'ଅବ୍ୟୟ / Preposition',
    rules: [
      {
        ruleEnglish: 'Use "in" for enclosed spaces/cities; "at" for specific spots/small places.',
        ruleOdia: 'ବଡ଼ ସହର/ରାଜ୍ୟ ପାଇଁ "in"; ନିର୍ଦ୍ଦିଷ୍ଟ ସ୍ଥାନ/ଛୋଟ ଗାଁ ପାଇଁ "at" ବ୍ୟବହୃତ ହୁଏ।',
        exampleEnglish: 'He lives at Januganj in Balasore.',
        exampleOdia: 'ସେ ବାଲେଶ୍ୱରର ଜାନୁଗଞ୍ଜଠାରେ ରୁହନ୍ତି।'
      }
    ],
    practiceQuestions: [
      {
        sentence: 'Lencho had firm faith ________ God.',
        options: ['in', 'on', 'upon', 'with'],
        answer: 'in',
        explanation: 'Faith takes preposition "in".'
      }
    ]
  }
];

export const PDF_LIBRARY_DATA: PDFDocument[] = [
  {
    id: 'pdf_1',
    titleEnglish: 'BSE Odisha Class 10 English Sahitya Book',
    titleOdia: 'ଦଶମ ଶ୍ରେଣୀ ହାଇସ୍କୁଲ ଇଂରାଜୀ ପାଠ୍ୟପୁସ୍ତକ',
    classLevel: 'Class 10',
    subjectId: 'english',
    category: 'Textbook',
    sizeMB: 8.5,
    isPremium: false,
    downloadUrl: '#',
    pagesCount: 140
  },
  {
    id: 'pdf_2',
    titleEnglish: 'BSE Odisha Class 10 Mathematics Formula Guide',
    titleOdia: 'ମାଧ୍ୟମିକ ବୀଜଗଣିତ ଓ ଜ୍ୟାମିତି ସୂତ୍ର ସଂଗ୍ରହ',
    classLevel: 'Class 10',
    subjectId: 'math',
    category: 'Notes',
    sizeMB: 4.2,
    isPremium: false,
    downloadUrl: '#',
    pagesCount: 48
  },
  {
    id: 'pdf_3',
    titleEnglish: 'Class 10 Physical Science 10-Year Board PYQs',
    titleOdia: 'ଭୌତିକ ବିଜ୍ଞାନ ଗତ ୧୦ ବର୍ଷର ବୋର୍ଡ ପ୍ରଶ୍ନୋତ୍ତର (୨୦୧୪-୨୦୨୪)',
    classLevel: 'Class 10',
    subjectId: 'physical_science',
    category: 'PYQ (Previous Year)',
    year: '2024',
    sizeMB: 12.0,
    isPremium: true,
    downloadUrl: '#',
    pagesCount: 110
  },
  {
    id: 'pdf_4',
    titleEnglish: 'Class 9 Sahitya Sindhu Complete Notes PDF',
    titleOdia: 'ନବମ ଶ୍ରେଣୀ ସାହିତ୍ୟ ସିନ୍ଧୁ ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରଶ୍ନୋତ୍ତର',
    classLevel: 'Class 9',
    subjectId: 'odia',
    category: 'Notes',
    sizeMB: 6.8,
    isPremium: false,
    downloadUrl: '#',
    pagesCount: 95
  }
];

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { rank: 1, name: 'Soumya Ranjan Sahoo', district: 'Cuttack', school: 'Ravenshaw Collegiate School', points: 2850, classLevel: 'Class 10', badge: '🏆 State Topper' },
  { rank: 2, name: 'Priyanka Mohanty', district: 'Khordha (Bhubaneswar)', school: 'Capital High School', points: 2720, classLevel: 'Class 10', badge: '🥈 Star Scholar' },
  { rank: 3, name: 'Ashish Kumar Jena', district: 'Balasore (Baleswar)', school: 'Zilla School Balasore', points: 2610, classLevel: 'Class 10', badge: '🥉 Math Wizard' },
  { rank: 4, name: 'Subhashree Nayak', district: 'Puri', school: 'Puri Zilla School', points: 2480, classLevel: 'Class 10', badge: '⭐ Science Champ' },
  { rank: 5, name: 'Dibyanshu Pradhan', district: 'Sambalpur', school: 'CSB Zilla School Sambalpur', points: 2390, classLevel: 'Class 9', badge: '🌟 Class 9 Topper' },
  { rank: 6, name: 'Aakash Behera', district: 'Ganjam', school: 'City High School Berhampur', points: 2250, classLevel: 'Class 10', badge: '🔥 Quiz Master' }
];

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: 'notif_1',
    title: 'Daily Quiz Challenge Ready!',
    titleOdia: 'ଦୈନିକ କୁଇଜ୍ ପ୍ରସ୍ତୁତ!',
    message: 'Test your knowledge on Class 10 Math & Physical Science today. Earn +50 points!',
    time: '10 mins ago',
    type: 'quiz',
    isRead: false
  },
  {
    id: 'notif_2',
    title: 'Exam Countdown Alert ⏳',
    titleOdia: 'ବୋର୍ଡ ପରୀକ୍ଷା ଗଣନା ⏳',
    message: 'BSE Odisha Matriculation HSC Board Exams are approaching in 140 days. Keep studying!',
    time: '2 hours ago',
    type: 'countdown',
    isRead: false
  },
  {
    id: 'notif_3',
    title: 'New Chapter Notes Uploaded',
    titleOdia: 'ନୂଆ ଅଧ୍ୟାୟ ନୋଟ୍ ଅପଲୋଡ୍ ହୋଇଛି',
    message: 'Class 10 Life Science - Control & Coordination notes are now available in Learn section.',
    time: '1 day ago',
    type: 'notes',
    isRead: true
  }
];

export const SAMPLE_DOUBT_PROMPTS = [
  {
    english: 'Explain why Lencho called the post office employees a "bunch of crooks".',
    odia: 'ଲେଞ୍ଚୋ ଡାକପାଳ କର୍ମଚାରୀଙ୍କୁ କାହିଁକି "bunch of crooks" ବୋଲି କହିଥିଲେ?'
  },
  {
    english: 'How to solve linear equations 2x + 3y = 8 and 3x + 2y = 7 by cross multiplication method?',
    odia: 'ବଜ୍ରଗୁଣନ ପ୍ରଣାଳୀରେ 2x + 3y = 8 ଏବଂ 3x + 2y = 7 ର ସମାଧାନ କିପରି କରିବେ?'
  },
  {
    english: 'What is the difference between Exothermic and Endothermic chemical reactions with examples?',
    odia: 'ତାପଉତ୍ପାଦୀ ଓ ତାପଶୋଷୀ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ କ\'ଣ?'
  },
  {
    english: 'Give important 5-mark subjective questions for BSE Odisha Class 10 Physical Science Chapter 1.',
    odia: 'ଦଶମ ଶ୍ରେଣୀ ଭୌତିକ ବିଜ୍ଞାନ ପ୍ରଥମ ଅଧ୍ୟାୟର ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ୫ ନମ୍ବରୀୟ ପ୍ରଶ୍ନ ଦିଅନ୍ତୁ।'
  }
];

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'fc_1',
    classLevel: 'Class 10',
    subjectId: 'english',
    category: 'Vocabulary',
    frontText: 'Solitary',
    frontOdia: 'ଏକାକୀ / ନିର୍ଜନ',
    backDefinitionEnglish: 'Done or existing alone; living without companions.',
    backDefinitionOdia: 'ଏକାକୀ ରହୁଥିବା ବା କାର୍ଯ୍ୟ କରୁଥିବା ବ୍ୟକ୍ତି।',
    exampleSentenceEnglish: 'The solitary reaper sang a melancholic song in the Scottish valley.',
    exampleSentenceOdia: 'ସେହି ଏକାକୀ ଧାନ କାଟୁଥିବା ଝିଅଟି ଉପତ୍ୟକାରେ ଏକ ମଧୁର ସଙ୍ଗୀତ ଗାଉଥିଲା।',
    examContextTip: 'High frequency word in Class 10 English Poem "The Solitary Reaper" by William Wordsworth.',
    difficulty: 'Medium'
  },
  {
    id: 'fc_2',
    classLevel: 'Class 10',
    subjectId: 'english',
    category: 'Vocabulary',
    frontText: 'Downpour',
    frontOdia: 'ମୁଷଳଧାରାରେ ବର୍ଷା',
    backDefinitionEnglish: 'A heavy, sudden fall of rain.',
    backDefinitionOdia: 'ପ୍ରବଳ ଏବଂ ଆକସ୍ମିକ ବର୍ଷାପାତ।',
    exampleSentenceEnglish: 'Lencho hoped for a good harvest, but needed a downpour or at least a shower.',
    exampleSentenceOdia: 'ଲେଞ୍ଚୋ ଭଲ ଫସଲ ପାଇଁ ଅନ୍ତତଃ ଗୋଟିଏ ପ୍ରବଳ ବର୍ଷାର ଆଶା କରୁଥିଲା।',
    examContextTip: 'From Chapter 1 "A Letter to God". Frequently asked in synonym/antonym sections.',
    difficulty: 'Easy'
  },
  {
    id: 'fc_3',
    classLevel: 'Class 10',
    subjectId: 'english',
    category: 'Grammar',
    frontText: 'Subject-Verb Agreement: "Neither / Nor"',
    frontOdia: 'Neither...Nor ର କ୍ରିୟା ବ୍ୟବହାର',
    backDefinitionEnglish: 'When two singular subjects are connected by "Neither...nor", the verb must be SINGULAR.',
    backDefinitionOdia: 'ଯେତେବେଳେ ଦୁଇଟି ଏକବଚନ କର୍ତ୍ତା "Neither...nor" ଦ୍ୱାରା ଯୋଡ଼ାଯାଏ, କ୍ରିୟା ସଦାବେଳେ ଏକବଚନ ହେବ।',
    exampleSentenceEnglish: 'Neither Lencho nor his son WAS present at the market.',
    exampleSentenceOdia: 'ନୋହିଁ ଲେଞ୍ଚୋ କି ନୋହିଁ ତାଙ୍କ ପୁଅ ବଜାରରେ ଉପସ୍ଥିତ ଥିଲେ।',
    examContextTip: 'BSE Odisha 1-mark grammar objective rule.',
    difficulty: 'Hard'
  },
  {
    id: 'fc_4',
    classLevel: 'Class 10',
    subjectId: 'english',
    category: 'Grammar',
    frontText: 'Direct to Indirect Narration (Universal Truth)',
    frontOdia: 'ପ୍ରତ୍ୟକ୍ଷ ରୁ ପରୋକ୍ଷ ଉକ୍ତି (ଚିରନ୍ତନ ସତ୍ୟ)',
    backDefinitionEnglish: 'If the reported speech expresses a universal truth or scientific fact, the tense DOES NOT change.',
    backDefinitionOdia: 'ଯଦି ଉକ୍ତିଟି ଚିରନ୍ତନ ସତ୍ୟ ବା ବୈଜ୍ଞାନିକ ତଥ୍ୟ ହୋଇଥାଏ, ତେବେ କାଳ (Tense) ପରିବର୍ତ୍ତନ ହୁଏ ନାହିଁ।',
    exampleSentenceEnglish: 'Teacher said, "The sun rises in the east." -> Teacher said that the sun rises in the east.',
    exampleSentenceOdia: 'ଶିକ୍ଷକ କହିଲେ, "ସୂର୍ଯ୍ୟ ପୂର୍ବ ଦିଗରେ ଉଦୟ ହୁଅନ୍ତି।"',
    examContextTip: 'Commonly tested in BSE Odisha matriculation Board Exams.',
    difficulty: 'Medium'
  },
  {
    id: 'fc_5',
    classLevel: 'Class 10',
    subjectId: 'physical_science',
    category: 'Science Term',
    frontText: 'Exothermic Reaction',
    frontOdia: 'ତାପଉତ୍ପାଦୀ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା',
    backDefinitionEnglish: 'A chemical reaction in which energy/heat is released into the surroundings.',
    backDefinitionOdia: 'ଯେଉଁ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ଉତ୍ପାଦ ସହିତ ତାପଶକ୍ତି ନିର୍ଗତ ହୋଇଥାଏ।',
    exampleSentenceEnglish: 'Respiration and burning of natural gas (methane) are exothermic reactions.',
    exampleSentenceOdia: 'ଶ୍ୱସନ ଏବଂ ପ୍ରାକୃତିକ ଗ୍ୟାସ୍‌ର ଦହନ ଏକ ତାପଉତ୍ପାଦୀ ପ୍ରତିକ୍ରିୟା।',
    examContextTip: 'Physical Science Chapter 1 core 2-mark subjective question.',
    difficulty: 'Easy'
  },
  {
    id: 'fc_6',
    classLevel: 'Class 10',
    subjectId: 'life_science',
    category: 'Science Term',
    frontText: 'Photosynthesis',
    frontOdia: 'ଆଲୋକ ସଂଶ୍ଳେଷଣ',
    backDefinitionEnglish: 'Process by which green plants manufacture glucose from CO2 and H2O in presence of sunlight & chlorophyll.',
    backDefinitionOdia: 'ସୂର୍ଯ୍ୟାଲୋକ ଓ ହରିତକର ଉପସ୍ଥିତିରେ ସବୁଜ ଉଦ୍ଭିଦ ଅଙ୍ଗାରକାମ୍ଳ ଓ ଜଳରୁ ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ କରିବା ପ୍ରକ୍ରିୟା।',
    exampleSentenceEnglish: '6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O',
    exampleSentenceOdia: '୬CO୨ + ୧୨H୨O -> C୬H୧୨O୬ + ୬O୨ + ୬H୨O (ଆଲୋକ ସଂଶ୍ଳେଷଣ ସମୀକରଣ)',
    examContextTip: 'Life Science Chapter 1 Nutrition key concept.',
    difficulty: 'Medium'
  },
  {
    id: 'fc_7',
    classLevel: 'Class 10',
    subjectId: 'math',
    category: 'Math Formula',
    frontText: 'Discriminant of Quadratic Equation',
    frontOdia: 'ଦ୍ୱିଘାତ ସମୀକରଣର ପ୍ରଭେଦକ (D)',
    backDefinitionEnglish: 'D = b² - 4ac. Determines the nature of roots (real/equal/complex).',
    backDefinitionOdia: 'D = b² - 4ac । D > 0 ହେଲେ ମୂଳଦ୍ୱୟ ବାସ୍ତବ ଓ ଅସମାନ, D = 0 ହେଲେ ମୂଳଦ୍ୱୟ ବାସ୍ତବ ଓ ସମାନ।',
    exampleSentenceEnglish: 'For 2x² - 4x + 3 = 0, D = (-4)² - 4(2)(3) = 16 - 24 = -8 (no real roots).',
    exampleSentenceOdia: 'D < 0 ହେଲେ କୌଣସି ବାସ୍ତବ ମୂଳ ନଥାଏ।',
    examContextTip: 'Algebra Chapter 2 compulsory formula for 1-mark & 3-mark questions.',
    difficulty: 'Hard'
  },
  {
    id: 'fc_8',
    classLevel: 'Class 9',
    subjectId: 'english',
    category: 'Vocabulary',
    frontText: 'Pinnacle',
    frontOdia: 'ସର୍ବୋଚ୍ଚ ଶିଖର / ଚୂଡ଼ା',
    backDefinitionEnglish: 'The most successful or highest point of development.',
    backDefinitionOdia: 'ସଫଳତା ବା ବିକାଶର ସର୍ବୋଚ୍ଚ ବିନ୍ଦୁ।',
    exampleSentenceEnglish: 'Winning the national championship was the pinnacle of her athletic career.',
    exampleSentenceOdia: 'ଜାତୀୟ ଚାମ୍ପିଅନ୍‌ସିପ୍ ଜିତିବା ତାଙ୍କର କ୍ରୀଡ଼ା ଜୀବନର ସର୍ବୋଚ୍ଚ ଶିଖର ଥିଲା।',
    examContextTip: 'Useful vocabulary for Class 9 & 10 essay writing and unseen passages.',
    difficulty: 'Medium'
  },
  {
    id: 'fc_9',
    classLevel: 'Class 10',
    subjectId: 'english',
    category: 'Literature',
    frontText: '70 Pesos',
    frontOdia: '୭୦ ପେସୋ (Lencho\'s money received)',
    backDefinitionEnglish: 'The amount collected by the Postmaster and sent to Lencho inside the envelope.',
    backDefinitionOdia: 'ଡାକପାଳ ନିଜ ଦରମା ଓ ସାଙ୍ଗମାନଙ୍କଠାରୁ ସଂଗ୍ରହ କରି ଲେଞ୍ଚୋକୁ ପଠାଇଥିବା ଟଙ୍କା।',
    exampleSentenceEnglish: 'Lencho asked for 100 pesos from God, but received only 70 pesos.',
    exampleSentenceOdia: 'ଲେଞ୍ଚୋ ଭଗବାନଙ୍କୁ ୧୦୦ ପେସୋ ମାଗିଥିଲେ, କିନ୍ତୁ କେବଳ ୭୦ ପେସୋ ପାଇଥିଲେ।',
    examContextTip: 'A Letter to God 1-mark objective question favorite.',
    difficulty: 'Easy'
  }
];

