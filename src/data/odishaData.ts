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
    contentStatus: 'published',
    id: 'c10_eng_ch1',
    classLevel: 'Class 10',
    subjectId: 'english',
    chapterNumber: 1,
    titleEnglish: 'A Letter to God',
    titleOdia: 'ଏ ଲେଟର ଟୁ ଗଡ୍ (ଭଗବାନଙ୍କୁ ଚିଠି)',
    examWeightageMarks: 8,
    learningObjectives: ['Understand Lencho\'s unwavering faith in God and human nature.', 'Analyze how the postmaster showed compassion and empathy.', 'Learn 15 key vocabulary words from the chapter.', 'Master BSE Odisha board 2-mark, 5-mark, and objective question formats.', 'Recognize dramatic irony and how it is used in the story\'s ending.'],
    realLifeApplications: ['Teaches empathy, kindness, and helping strangers in need without expecting recognition.', 'Shows how optimism and hope can help people cope with loss and disaster.', 'Encourages honest self-reflection about how we judge the people who help us.'],
    summaryEnglish: 'Lencho, a hardworking farmer whose house sits on the crest of a low hill, watches his corn crop get completely destroyed by a sudden hailstorm just when it was ready for harvest. Rather than despair, Lencho places his faith in God and writes a letter asking for a hundred pesos so he can resow his field and feed his family until the next crop. The letter reaches the local post office, where the amiable postmaster is moved by Lencho\'s simple faith. To avoid disappointing him, the postmaster organizes a collection among himself, his employees, and friends, but they can only gather seventy pesos. He sends the money to Lencho in an envelope signed \'God\'. When Lencho counts the money and finds it short by thirty pesos, he is not shaken in his faith in God — instead, he assumes the post office staff must have stolen the rest, and writes a second letter addressed to God accusing the workers of being \'a bunch of crooks\'.',
    summaryOdia: 'ଲେଞ୍ଚୋ ଜଣେ ପରିଶ୍ରମୀ କୃଷକ, ଯାହାର ଘର ଏକ ନୀଚା ପାହାଡ଼ର ଶିଖରରେ ଅବସ୍ଥିତ। ଫସଲ ପାଚିଲା ବେଳେ ହଠାତ୍ କୁଆପଥର ବର୍ଷା ହୋଇ ତାଙ୍କର ମକା ଫସଲ ସମ୍ପୂର୍ଣ୍ଣ ନଷ୍ଟ ହୋଇଯାଏ। ନିରାଶ ନ ହୋଇ ସେ ଭଗବାନଙ୍କ ଉପରେ ବିଶ୍ୱାସ ରଖି ଏକ ଚିଠି ଲେଖନ୍ତି, ଯେଉଁଥିରେ ପୁଣି ଫସଲ ବୁଣିବା ପାଇଁ ୧୦୦ ପେସୋ ମାଗନ୍ତି। ଡାକଘରର ଦୟାଳୁ ପୋଷ୍ଟମାଷ୍ଟର ଏହା ପଢ଼ି ପ୍ରଭାବିତ ହୋଇ ନିଜ କର୍ମଚାରୀ ଓ ବନ୍ଧୁମାନଙ୍କଠାରୁ ଚାନ୍ଦା ସଂଗ୍ରହ କରନ୍ତି, କିନ୍ତୁ ମାତ୍ର ୭୦ ପେସୋ ଏକାଠି ହୁଏ। \'ଭଗବାନ\' ନାମରେ ସହେି ଟଙ୍କା ଲେଞ୍ଚୋଙ୍କୁ ପଠାଯାଏ। ଟଙ୍କା ଗଣି ୩୦ ପେସୋ କମ ପାଇ ଲେଞ୍ଚୋ ଭଗବାନଙ୍କ ଉପରୁ ବିଶ୍ୱାସ ହରାନ୍ତି ନାହିଁ, ବରଂ ଡାକଘର କର୍ମଚାରୀମାନଙ୍କୁ \'ଠକ ସଂଘ\' ବୋଲି ଅଭିଯୋଗ କରି ଆଉ ଏକ ଚିଠି ଲେଖନ୍ତି।',
    lineByLineExplanation: [{ paragraphNo: 1, textEnglish: 'Lencho\'s house stood alone on a hilltop overlooking the valley, from where he could see his ripening corn field spread out below, right next to the river.', textOdia: 'ଲେଞ୍ଚୋଙ୍କ ଘର ଉପତ୍ୟକାର ଏକ ପାହାଡ଼ ଶିଖରରେ ଏକୁଟିଆ ଥିଲା, ଯେଉଁଠାରୁ ନଦୀ ପାଖରେ ଥିବା ପାଚିଲା ମକା ଫସଲ ଦେଖାଯାଉଥିଲା।', keyNote: 'Sets up the isolation of Lencho\'s home and his dependence on this one field.' }, { paragraphNo: 2, textEnglish: 'During a meal, exactly as Lencho had predicted, heavy raindrops began falling, and dark storm clouds rolled in from the north-east.', textOdia: 'ଖାଇବା ସମୟରେ, ଲେଞ୍ଚୋ ପୂର୍ବାନୁମାନ କରିଥିବା ପରି ବଡ଼ ବର୍ଷା ବିନ୍ଦୁ ପଡ଼ିବାକୁ ଲାଗିଲା, ଓ ଉତ୍ତର-ପୂର୍ବ ଦିଗରୁ ମେଘ ମାଡ଼ିଆସିଲା।', keyNote: 'Lencho reads weather signs like an experienced farmer — foreshadows the disaster.' }, { paragraphNo: 3, textEnglish: 'The rain quickly turned into a violent hailstorm; the falling ice looked to Lencho like frozen pearls, and for a moment he even found it beautiful.', textOdia: 'ବର୍ଷା ଶୀଘ୍ର ଏକ ପ୍ରବଳ କୁଆପଥର ବର୍ଷାରେ ପରିଣତ ହେଲା; ପଡ଼ୁଥିବା ବରଫ ଲେଞ୍ଚୋଙ୍କୁ ଜମାଇ ମୋତି ପରି ଦେଖାଗଲା, ଏବଂ ସେ ଏକ ମୁହୂର୍ତ୍ତ ପାଇଁ ଏହାକୁ ସୁନ୍ଦର ମଧ୍ୟ ଅନୁଭବ କଲେ।', keyNote: 'Irony: something that looks beautiful (hail) becomes the cause of his ruin.' }, { paragraphNo: 4, textEnglish: 'Once the storm passed, the fields lay white with hail, as if covered in salt, and every single corn plant had been destroyed.', textOdia: 'ଝଡ଼ ସରିବା ପରେ, ଫସଲ ଖେତ ଲୁଣ ଛିଞ୍ଚିଥିବା ପରି ବରଫରେ ଧଳା ହୋଇଯାଇଥିଲା, ଏବଂ ପ୍ରତ୍ୟେକ ମକା ଗଛ ନଷ୍ଟ ହୋଇଯାଇଥିଲା।', keyNote: 'Complete loss of the year\'s only source of income.' }, { paragraphNo: 5, textEnglish: 'Lencho\'s only hope now was help from God, so he sat down to write a letter asking for a hundred pesos to sow his field again and survive till the next harvest.', textOdia: 'ଲେଞ୍ଚୋଙ୍କର ଏବେ ଏକମାତ୍ର ଭରସା ଭଗବାନଙ୍କଠାରୁ ସାହାଯ୍ୟ ଥିଲା, ତେଣୁ ସେ ୧୦୦ ପେସୋ ମାଗି ପୁଣି ଫସଲ ବୁଣିବା ପାଇଁ ଏକ ଚିଠି ଲେଖିଲେ।', keyNote: 'Central turning point — Lencho\'s faith drives the plot forward.' }, { paragraphNo: 6, textEnglish: 'At the post office, the postmaster read the letter and laughed at first, but then became serious, moved by the writer\'s simple, unwavering faith.', textOdia: 'ଡାକଘରରେ ପୋଷ୍ଟମାଷ୍ଟର ଚିଠି ପଢ଼ି ପ୍ରଥମେ ହସିଲେ, କିନ୍ତୁ ଲେଖକଙ୍କ ସରଳ ଓ ଅଟଳ ବିଶ୍ୱାସ ଦେଖି ଗମ୍ଭୀର ହୋଇଗଲେ।', keyNote: 'Shows the postmaster\'s transformation from amusement to genuine concern.' }, { paragraphNo: 7, textEnglish: 'Not wanting to destroy Lencho\'s faith, the postmaster collected money from his own salary and asked his employees and friends to contribute; together they raised seventy pesos.', textOdia: 'ଲେଞ୍ଚୋଙ୍କ ବିଶ୍ୱାସ ଭାଙ୍ଗିବାକୁ ନ ଚାହୁଁ ପୋଷ୍ଟମାଷ୍ଟର ନିଜ ଦରମାରୁ ଟଙ୍କା ଦେଲେ ଓ କର୍ମଚାରୀ-ବନ୍ଧୁମାନଙ୍କୁ ଚାନ୍ଦା ମାଗିଲେ; ମିଶି ୭୦ ପେସୋ ଏକାଠି ହେଲା।', keyNote: 'Demonstrates collective human kindness inspired by one man\'s faith.' }, { paragraphNo: 8, textEnglish: 'When Lencho returned to collect his letter and counted the money, he was not surprised to receive it — that only confirmed his faith — but he was troubled that it was thirty pesos short.', textOdia: 'ଲେଞ୍ଚୋ ଚିଠି ନେବାକୁ ଆସି ଟଙ୍କା ଗଣିବା ପରେ ଆଶ୍ଚର୍ଯ୍ୟ ହେଲେ ନାହିଁ — ଏହା ତାଙ୍କ ବିଶ୍ୱାସକୁ ପୁଷ୍ଟ କଲା — କିନ୍ତୁ ୩୦ ପେସୋ କମ ପାଇ ସେ ଚିନ୍ତିତ ହେଲେ।', keyNote: 'Sets up the story\'s central irony in the final paragraph.' }, { paragraphNo: 9, textEnglish: 'Convinced that God could never make a mistake or fail to send the full amount, Lencho sat at the same table again and wrote another letter — this time accusing the post office staff of being \'a bunch of crooks\'.', textOdia: 'ଭଗବାନ କେବେ ହେଁ ଭୁଲ୍ କରିପାରନ୍ତି ନାହିଁ ବୋଲି ଦୃଢ଼ ବିଶ୍ୱାସ ରଖି, ଲେଞ୍ଚୋ ପୁଣି ସେହି ଟେବୁଲରେ ବସି ଆଉ ଏକ ଚିଠି ଲେଖିଲେ — ଏଥର ଡାକଘର କର୍ମଚାରୀମାନଙ୍କୁ \'ଠକ ସଂଘ\' ବୋଲି ଅଭିଯୋଗ କରି।', keyNote: 'The story\'s dramatic irony: the very people who helped him are blamed.' }],
    keyWords: [{ word: 'Crest', meaningEnglish: 'Top of a hill', meaningOdia: 'ପାହାଡ଼ର ଶିଖର' }, { word: 'Downpour', meaningEnglish: 'Heavy rainfall', meaningOdia: 'ପ୍ରବଳ ବର୍ଷା' }, { word: 'Plague of locusts', meaningEnglish: 'A swarm of insects that destroys crops', meaningOdia: 'ଫସଲ ନଷ୍ଟ କରୁଥିବା ଝିଣ୍ଟିକା ଦଳ' }, { word: 'Conscience', meaningEnglish: 'An inner sense of right and wrong', meaningOdia: 'ବିବେକ' }, { word: 'Pesos', meaningEnglish: 'The currency used in Mexico and some Latin American countries', meaningOdia: 'ଲାଟିନ୍ ଆମେରିକାର ମୁଦ୍ରା' }, { word: 'Amiable', meaningEnglish: 'Friendly and pleasant in manner', meaningOdia: 'ମିଳାମିଶା ଓ ସ୍ନେହୀ ସ୍ୱଭାବର' }, { word: 'Ripe', meaningEnglish: 'Fully grown and ready to be harvested', meaningOdia: 'ପାଚିଲା' }, { word: 'Harvest', meaningEnglish: 'The process of gathering a ripe crop', meaningOdia: 'ଫସଲ ଅମଳ' }, { word: 'Hailstones', meaningEnglish: 'Small, hard balls of ice that fall like rain during a storm', meaningOdia: 'କୁଆପଥର' }, { word: 'Faith', meaningEnglish: 'Complete trust or confidence in someone or something', meaningOdia: 'ବିଶ୍ୱାସ' }, { word: 'Sow', meaningEnglish: 'To plant seeds in the ground', meaningOdia: 'ବୁଣିବା' }, { word: 'Correspondence', meaningEnglish: 'The exchange of letters', meaningOdia: 'ପତ୍ରାଳାପ' }, { word: 'Contribute', meaningEnglish: 'To give money or help along with others toward a shared goal', meaningOdia: 'ଚାନ୍ଦା ଦେବା' }, { word: 'Postmark', meaningEnglish: 'An official mark stamped on a letter by the post office', meaningOdia: 'ଡାକ ଠପ୍ପା' }, { word: 'Crook', meaningEnglish: 'A dishonest person', meaningOdia: 'ଠକ' }],
    shortQuestions: [{ id: 'sq1', qEnglish: 'Where was Lencho\'s house situated?', qOdia: 'ଲେଞ୍ଚୋଙ୍କ ଘର କେଉଁଠାରେ ଅବସ୍ଥିତ ଥିଲା?', answerEnglish: 'Lencho\'s house was situated on the crest of a low hill, the only house in the entire valley.', answerOdia: 'ଲେଞ୍ଚୋଙ୍କ ଘର ଏକ ନୀଚା ପାହାଡ଼ର ଶିଖରରେ ଥିଲା, ଯାହା ସମଗ୍ର ଉପତ୍ୟକାରେ ଏକମାତ୍ର ଘର ଥିଲା।', marks: 2 }, { id: 'sq2', qEnglish: 'Why did Lencho write a letter to God?', qOdia: 'ଲେଞ୍ଚୋ ଭଗବାନଙ୍କୁ ଚିଠି କାହିଁକି ଲେଖିଥିଲେ?', answerEnglish: 'After the hailstorm destroyed his entire corn crop, Lencho wrote to God asking for a hundred pesos so he could resow his field and support his family until the next harvest.', answerOdia: 'କୁଆପଥର ବର୍ଷାରେ ଫସଲ ନଷ୍ଟ ହେବା ପରେ, ପୁଣି ବୁଣିବା ଓ ପରିବାର ପୋଷିବା ପାଇଁ ୧୦୦ ପେସୋ ମାଗି ସେ ଭଗବାନଙ୍କୁ ଚିଠି ଲେଖିଥିଲେ।', marks: 2 }, { id: 'sq3', qEnglish: 'What did Lencho compare the falling raindrops to, and why?', qOdia: 'ଲେଞ୍ଚୋ ପଡ଼ୁଥିବା ବର୍ଷା ବିନ୍ଦୁକୁ କାହା ସହିତ ତୁଳନା କରିଥିଲେ, ଏବଂ କାହିଁକି?', answerEnglish: 'Lencho compared the raindrops to new coins, because he believed good rain would mean a bumper corn harvest and, therefore, money for his family.', answerOdia: 'ସେ ବର୍ଷା ବିନ୍ଦୁକୁ ନୂଆ ମୁଦ୍ରା ସହିତ ତୁଳନା କରିଥିଲେ, କାରଣ ଭଲ ବର୍ଷା ମାନେ ଭଲ ଫସଲ ଏବଂ ଅର୍ଥ ମିଳିବ ବୋଲି ସେ ଭାବିଥିଲେ।', marks: 2 }, { id: 'sq4', qEnglish: 'How did the hailstorm affect Lencho\'s field?', qOdia: 'କୁଆପଥର ବର୍ଷା ଲେଞ୍ଚୋଙ୍କ ଫସଲ ଉପରେ କି ପ୍ରଭାବ ପକାଇଲା?', answerEnglish: 'The hailstorm completely destroyed the corn field; not a single plant survived, and the field was left covered in white hail as if sprinkled with salt.', answerOdia: 'କୁଆପଥର ବର୍ଷା ମକା ଫସଲକୁ ସମ୍ପୂର୍ଣ୍ଣ ନଷ୍ଟ କରିଦେଲା; ଗୋଟିଏ ମଧ୍ୟ ଗଛ ବଞ୍ଚିଲା ନାହିଁ, ଏବଂ ଖେତ ଲୁଣ ଛିଞ୍ଚିଥିବା ପରି ଧଳା ହୋଇଗଲା।', marks: 2 }, { id: 'sq5', qEnglish: 'What was the postmaster\'s first reaction on reading Lencho\'s letter?', qOdia: 'ଲେଞ୍ଚୋଙ୍କ ଚିଠି ପଢ଼ି ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ପ୍ରଥମ ପ୍ରତିକ୍ରିୟା କ\'ଣ ଥିଲା?', answerEnglish: 'The postmaster first laughed heartily at the letter\'s address to God, but he soon turned serious once he understood the depth of Lencho\'s faith.', answerOdia: 'ଚିଠିର ଠିକଣା ଦେଖି ପୋଷ୍ଟମାଷ୍ଟର ପ୍ରଥମେ ହସିଲେ, କିନ୍ତୁ ଲେଞ୍ଚୋଙ୍କ ବିଶ୍ୱାସର ଗଭୀରତା ବୁଝି ସେ ଗମ୍ଭୀର ହୋଇଗଲେ।', marks: 2 }, { id: 'sq6', qEnglish: 'How much money did the postmaster and his helpers manage to collect?', qOdia: 'ପୋଷ୍ଟମାଷ୍ଟର ଏବଂ ତାଙ୍କ ସହକାରୀମାନେ କେତେ ଟଙ୍କା ସଂଗ୍ରହ କରିଥିଲେ?', answerEnglish: 'Despite their efforts and generosity, they could only collect seventy pesos, thirty less than Lencho had asked for.', answerOdia: 'ସେମାନଙ୍କ ଉଦାରତା ସତ୍ତ୍ୱେ, ସେମାନେ ମାତ୍ର ୭୦ ପେସୋ ସଂଗ୍ରହ କରିପାରିଥିଲେ, ଯାହା ମାଗିଥିବା ଠାରୁ ୩୦ କମ ଥିଲା।', marks: 2 }, { id: 'sq7', qEnglish: 'Why did the post office employees sign the letter as \'God\'?', qOdia: 'ଡାକଘର କର୍ମଚାରୀମାନେ ଚିଠିରେ \'ଭଗବାନ\' ବୋଲି ସ୍ୱାକ୍ଷର କାହିଁକି କରିଥିଲେ?', answerEnglish: 'They signed it as \'God\' because that was who Lencho had addressed his letter to, and they wanted him to believe his prayer had been answered directly.', answerOdia: 'ଲେଞ୍ଚୋ ଭଗବାନଙ୍କୁ ଚିଠି ଲେଖିଥିବାରୁ, ସେମାନେ ତାଙ୍କ ପ୍ରାର୍ଥନା ସିଧାସଳଖ ଉତ୍ତର ପାଇଛି ବୋଲି ବିଶ୍ୱାସ କରାଇବାକୁ \'ଭଗବାନ\' ନାମରେ ସ୍ୱାକ୍ଷର କରିଥିଲେ।', marks: 2 }, { id: 'sq8', qEnglish: 'What did Lencho do immediately after counting the money he received?', qOdia: 'ଟଙ୍କା ଗଣିବା ପରେ ଲେଞ୍ଚୋ ତୁରନ୍ତ କ\'ଣ କରିଥିଲେ?', answerEnglish: 'Finding the amount thirty pesos short, Lencho immediately sat down and wrote a second letter to God, accusing the post office workers of stealing part of the money.', answerOdia: '୩୦ ପେସୋ କମ ପାଇ, ଲେଞ୍ଚୋ ତୁରନ୍ତ ବସି ଭଗବାନଙ୍କୁ ଆଉ ଏକ ଚିଠି ଲେଖିଲେ, ଡାକଘର କର୍ମଚାରୀମାନେ ଟଙ୍କାର କିଛି ଅଂଶ ଚୋରାଇଥିବା ଅଭିଯୋଗ କରି।', marks: 2 }],
    longQuestions: [{ id: 'lq1', qEnglish: 'Describe the character of Lencho as depicted in \'A Letter to God\'.', qOdia: '\'A Letter to God\' ପାଠ ଆଧାରରେ ଲେଞ୍ଚୋଙ୍କ ଚରିତ୍ର ଚିତ୍ରଣ କର।', answerEnglish: 'Lencho was a simple, hardworking farmer who depended entirely on his one cornfield for his family\'s survival. He possessed an unshakeable, almost childlike faith in God — when disaster struck, his first instinct was to ask God directly for help, fully trusting that his prayer would be answered. This same innocent faith, however, made him unable to imagine that people, not a miracle, had helped him; instead he suspected honest men of theft. His character shows both the strength and the narrowness of blind faith.', answerOdia: 'ଲେଞ୍ଚୋ ଜଣେ ସରଳ, ପରିଶ୍ରମୀ କୃଷକ ଥିଲେ ଯାହାର ପରିବାର ଏକମାତ୍ର ମକା ଫସଲ ଉପରେ ନିର୍ଭରଶୀଳ ଥିଲା। ଭଗବାନଙ୍କ ଉପରେ ତାଙ୍କର ଅଟଳ, ପ୍ରାୟ ଶିଶୁ ପରି ବିଶ୍ୱାସ ଥିଲା। ଏହି ସରଳତା ତାଙ୍କୁ ମଣିଷ ସାହାଯ୍ୟକୁ ଚିହ୍ନିବାରୁ ବଞ୍ଚିତ କରି ସାଧୁ ଲୋକଙ୍କୁ ଠକ ବୋଲି ଭାବିବାକୁ ବାଧ୍ୟ କଲା।', marks: 5 }, { id: 'lq2', qEnglish: 'Describe the postmaster\'s character and explain what his actions reveal about him.', qOdia: 'ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ଚରିତ୍ର ବର୍ଣ୍ଣନା କର ଏବଂ ତାଙ୍କ କାର୍ଯ୍ୟ ତାଙ୍କ ବିଷୟରେ କ\'ଣ ପ୍ରକାଶ କରେ ତାହା ବ୍ୟାଖ୍ୟା କର।', answerEnglish: 'The postmaster was a large, good-humoured man who could easily have dismissed Lencho\'s letter as foolish. Instead, he was deeply moved by the writer\'s faith and felt personally responsible for not disappointing it. He organized a collection from his own pocket and from his employees and friends, showing genuine compassion and a strong sense of responsibility, even though he himself could not fully match the amount requested.', answerOdia: 'ପୋଷ୍ଟମାଷ୍ଟର ଜଣେ ମୋଟା, ହସମୁଖା ମଣିଷ ଥିଲେ ଯିଏ ଲେଞ୍ଚୋଙ୍କ ଚିଠିକୁ ମୂର୍ଖତା ବୋଲି ଏଡ଼ାଇ ଦେଇ ପାରିଥାନ୍ତେ। ପରିବର୍ତ୍ତେ, ସେ ଲେଖକଙ୍କ ବିଶ୍ୱାସରେ ପ୍ରଭାବିତ ହୋଇ ନିଜେ ଦାୟିତ୍ୱ ନେଇ ଚାନ୍ଦା ସଂଗ୍ରହ କଲେ, ଯାହା ତାଙ୍କର ପ୍ରକୃତ ଦୟା ଓ ଦାୟିତ୍ୱବୋଧ ଦେଖାଏ।', marks: 5 }, { id: 'lq3', qEnglish: 'How does the story \'A Letter to God\' show that one person\'s faith can inspire kindness in others?', qOdia: '\'A Letter to God\' କାହାଣୀ କିପରି ଦେଖାଏ ଯେ ଜଣଙ୍କ ବିଶ୍ୱାସ ଅନ୍ୟମାନଙ୍କ ମଧ୍ୟରେ ଦୟା ଜାଗ୍ରତ କରିପାରେ?', answerEnglish: 'Lencho\'s simple, sincere letter — written with no doubt that God would answer — moved the postmaster so deeply that he felt compelled to act. His response then inspired his employees and friends to contribute money as well, even though none of them were personally obligated to help a stranger. The chain of kindness that follows shows how genuine faith and need, openly expressed, can draw out generosity in people who might otherwise never have been involved.', answerOdia: 'ଲେଞ୍ଚୋଙ୍କ ସରଳ ଚିଠି ପୋଷ୍ଟମାଷ୍ଟରଙ୍କୁ ଏତେ ପ୍ରଭାବିତ କଲା ଯେ ସେ ନିଜେ କାର୍ଯ୍ୟ କରିବାକୁ ବାଧ୍ୟ ହେଲେ, ଏବଂ ତାଙ୍କ ଉଦାହରଣ ଅନ୍ୟମାନଙ୍କୁ ମଧ୍ୟ ସାହାଯ୍ୟ କରିବାକୁ ପ୍ରେରଣା ଦେଲା।', marks: 5 }, { id: 'lq4', qEnglish: 'Explain the irony in the ending of \'A Letter to God\'.', qOdia: '\'A Letter to God\' ର ଶେଷରେ ଥିବା ବ୍ୟଙ୍ଗାତ୍ମକତା ବ୍ୟାଖ୍ୟା କର।', answerEnglish: 'The irony lies in the fact that the very people who acted selflessly to help Lencho — giving up their own money to preserve a stranger\'s faith — are the ones accused by him of dishonesty. Lencho\'s blind faith in God as an infallible, direct sender of money makes it impossible for him to consider that ordinary, generous humans were behind the help he received, so he unfairly labels his benefactors as thieves.', answerOdia: 'ବ୍ୟଙ୍ଗାତ୍ମକତା ଏହିଠାରେ ଅଛି ଯେ ନିଃସ୍ୱାର୍ଥ ଭାବରେ ସାହାଯ୍ୟ କରିଥିବା ଲୋକମାନଙ୍କୁ ହିଁ ଲେଞ୍ଚୋ ଅଭିଯୋଗ କରନ୍ତି। ଭଗବାନଙ୍କ ଉପରେ ତାଙ୍କ ଅନ୍ଧ ବିଶ୍ୱାସ ମନୁଷ୍ୟ ସାହାଯ୍ୟକୁ ଚିହ୍ନିବାରୁ ତାଙ୍କୁ ବଞ୍ଚିତ କରେ।', marks: 5 }, { id: 'lq5', qEnglish: 'Describe the setting of the story and explain how nature affects Lencho\'s life.', qOdia: 'କାହାଣୀର ପରିବେଶ ବର୍ଣ୍ଣନା କର ଏବଂ ପ୍ରକୃତି ଲେଞ୍ଚୋଙ୍କ ଜୀବନକୁ କିପରି ପ୍ରଭାବିତ କରେ ତାହା ବ୍ୟାଖ୍ୟା କର।', answerEnglish: 'Lencho lives in an isolated house on a hilltop overlooking a valley, with his family\'s entire livelihood dependent on one cornfield near the river. This setting emphasizes both the beauty and the danger of nature — the same rain that could bring a bumper harvest also brings the hailstorm that destroys everything he has, showing how completely a farmer\'s fortune can rest in nature\'s hands.', answerOdia: 'ଲେଞ୍ଚୋ ଉପତ୍ୟକା ଉପରେ ଥିବା ଏକ ପାହାଡ଼ ଶିଖରର ଏକୁଟିଆ ଘରେ ରୁହନ୍ତି, ଓ ପରିବାରର ସମସ୍ତ ଜୀବିକା ନଦୀ ପାଖର ଏକମାତ୍ର ମକା ଫସଲ ଉପରେ ନିର୍ଭରଶୀଳ। ଏହା ପ୍ରକୃତିର ସୌନ୍ଦର୍ଯ୍ୟ ଓ ବିପଦ ଦୁଇଟିକୁ ହିଁ ଦେଖାଏ।', marks: 5 }],
    pyqs: [{ year: '2023', question: 'What did the postmaster do after reading Lencho\'s letter?', answer: 'The postmaster laughed initially but soon became serious. To keep Lencho\'s faith intact, he collected 70 pesos from friends and staff and mailed it to Lencho signed \'God\'.', marks: 2 }, { year: '2022', question: 'Why did Lencho say the raindrops were like \'new coins\'?', answer: 'Lencho anticipated that good rain would yield a bumper harvest of corn, which would bring money (coins) for his family.', marks: 2 }, { year: '2021', question: 'What request did Lencho make in his letter to God?', answer: 'He asked God for a hundred pesos so that he could sow his field again and support his family until the next harvest.', marks: 2 }, { year: '2019', question: 'Why was Lencho not surprised to find money in the envelope, but was troubled?', answer: 'He was not surprised because he had complete faith God would answer; he was troubled only because the amount was thirty pesos less than he had asked for.', marks: 3 }],
    hotsQuestions: [{ question: 'Why is Lencho\'s faith described as ironical at the end of the story?', answer: 'It is ironical because Lencho called the very post office workers who anonymously saved his family from starvation \'a bunch of crooks\', unable to see their kindness because of his rigid belief that only God, not people, could have helped him.' }, { question: 'Do you think the postmaster\'s decision to send the money was the right one? Why or why not?', answer: 'Most readers would agree it was right — the postmaster chose kindness and protecting a stranger\'s faith over simply ignoring an unusual request, even though it meant personal cost to himself and his colleagues.' }, { question: 'If Lencho had known the truth about where the money came from, how might the story have ended differently?', answer: 'He might have felt gratitude toward the postmaster and his colleagues instead of anger, and the story would have highlighted human generosity directly rather than through dramatic irony.' }, { question: 'What does this story suggest about the relationship between faith and human effort?', answer: 'It suggests that while faith can inspire hope and even move others to act kindly, human effort and generosity are often the real force behind what looks like an answered prayer.' }],
    fillInBlanks: [{ id: 'fib1', question: 'Lencho compared the large raindrops to new _______.', answer: 'coins' }, { id: 'fib2', question: 'The postmaster collected ________ pesos for Lencho.', answer: '70' }, { id: 'fib3', question: 'Lencho\'s house was situated on the _______ of a low hill.', answer: 'crest' }, { id: 'fib4', question: 'Lencho asked God for _______ pesos in his letter.', answer: 'a hundred / 100' }, { id: 'fib5', question: 'The post office employees sent the money signed as _______.', answer: 'God' }, { id: 'fib6', question: 'Lencho called the post office employees a bunch of _______ in his second letter.', answer: 'crooks' }, { id: 'fib7', question: 'The hailstorm left the field looking as if it were sprinkled with _______.', answer: 'salt' }, { id: 'fib8', question: 'Lencho\'s family depended entirely on their _______ field for survival.', answer: 'corn' }],
    trueFalse: [{ id: 'tf1', statement: 'Lencho was angry when he counted the money in the letter.', isTrue: true, explanation: 'He found only 70 pesos instead of the 100 he had asked for.' }, { id: 'tf2', statement: 'The postmaster was a rude and unhelpful man.', isTrue: false, explanation: 'The postmaster was large, amiable, and very generous with his time and money.' }, { id: 'tf3', statement: 'Lencho lost his faith in God after receiving less money than he asked for.', isTrue: false, explanation: 'His faith remained unshaken; he blamed the post office workers instead of God.' }, { id: 'tf4', statement: 'The postmaster used his own salary to help make up the collection.', isTrue: true, explanation: 'He contributed part of his own salary along with donations from employees and friends.' }, { id: 'tf5', statement: 'Lencho\'s entire family helped him write the letter to God.', isTrue: false, explanation: 'The story shows Lencho writing the letter alone at his table.' }, { id: 'tf6', statement: 'The hailstorm destroyed only part of Lencho\'s crop.', isTrue: false, explanation: 'The hailstorm destroyed the entire cornfield, leaving nothing behind.' }, { id: 'tf7', statement: 'Lencho believed God could never make a mistake.', isTrue: true, explanation: 'This unwavering belief is exactly why he blamed the post office staff instead of doubting God.' }, { id: 'tf8', statement: 'The postmaster ignored Lencho\'s letter completely.', isTrue: false, explanation: 'The postmaster read it carefully and was moved enough to organize a collection.' }],
    matchFollowing: [{ left: 'Hailstones', right: 'Frozen pearls' }, { left: 'Lencho', right: 'An ox of a man' }, { left: 'Postmaster', right: 'Amiable fellow' }, { left: 'Money sent', right: '70 pesos' }, { left: 'Money requested', right: '100 pesos' }, { left: 'Signature on the reply', right: 'God' }],
    examTips: ['BSE Odisha 2-mark questions often ask about Lencho\'s emotions before and after the rain.', 'Remember the exact number of pesos requested (100) and received (70) — a very common fill-in-the-blank.', 'For 5-mark character sketches, always mention BOTH Lencho\'s positive faith and his flawed assumption about the post office staff.', 'The irony of the ending is a frequently asked long-answer topic — practice explaining it in your own words.'],
    quickRevision: ['Lencho: hardworking farmer, house on a hilltop, entire livelihood depends on one cornfield.', 'Hailstorm destroys the ripe corn crop completely — compared to being \'sprinkled with salt\'.', 'Lencho writes a letter to God asking for 100 pesos to resow his field.', 'Postmaster: large, amiable man, moved by Lencho\'s faith, organizes a collection.', 'Only 70 pesos collected — signed and sent to Lencho as if from God.', 'Lencho is not surprised to receive money (proves his faith) but is upset it\'s 30 pesos short.', 'Irony: Lencho accuses the honest post office staff of theft, never doubting God.', 'Theme: the power of faith to move others to kindness, and the blindness that rigid faith can cause.', 'Key numbers to remember: 100 pesos asked, 70 pesos sent, 30 pesos short.', 'Key vocabulary: crest, downpour, amiable, pesos, crook, harvest.'],
    mcqs: [{ id: 'mcq1', difficulty: 'Easy', questionEnglish: 'Where was Lencho\'s house located?', questionOdia: 'ଲେଞ୍ଚୋଙ୍କ ଘର କେଉଁଠାରେ ଥିଲା?', optionsEnglish: ['In the middle of the valley', 'On the crest of a low hill', 'Beside the post office', 'Near a big city'], optionsOdia: ['ଉପତ୍ୟକା ମଝିରେ', 'ଏକ ନୀଚା ପାହାଡ଼ର ଶିଖରରେ', 'ଡାକଘର ପାଖରେ', 'ଏକ ବଡ଼ ସହର ପାଖରେ'], correctOptionIndex: 1, explanationEnglish: 'The story describes Lencho\'s house as the only one in the valley, sitting on the crest of a low hill.' }, { id: 'mcq2', difficulty: 'Easy', questionEnglish: 'What crop did Lencho grow?', questionOdia: 'ଲେଞ୍ଚୋ କେଉଁ ଫସଲ ଚାଷ କରୁଥିଲେ?', optionsEnglish: ['Wheat', 'Rice', 'Corn', 'Sugarcane'], optionsOdia: ['ଗହମ', 'ଚାଉଳ', 'ମକା', 'ଆଖୁ'], correctOptionIndex: 2, explanationEnglish: 'Lencho\'s entire livelihood depended on his cornfield.' }, { id: 'mcq3', difficulty: 'Easy', questionEnglish: 'What natural disaster destroyed Lencho\'s crop?', questionOdia: 'କେଉଁ ପ୍ରାକୃତିକ ବିପର୍ଯ୍ୟୟ ଲେଞ୍ଚୋଙ୍କ ଫସଲ ନଷ୍ଟ କଲା?', optionsEnglish: ['Flood', 'Drought', 'Hailstorm', 'Earthquake'], optionsOdia: ['ବନ୍ୟା', 'ମରୁଡ଼ି', 'କୁଆପଥର ବର୍ଷା', 'ଭୂମିକମ୍ପ'], correctOptionIndex: 2, explanationEnglish: 'A sudden hailstorm destroyed the entire ripe cornfield.' }, { id: 'mcq4', difficulty: 'Easy', questionEnglish: 'How much money did Lencho ask God for?', questionOdia: 'ଲେଞ୍ଚୋ ଭଗବାନଙ୍କଠାରୁ କେତେ ଟଙ୍କା ମାଗିଥିଲେ?', optionsEnglish: ['50 pesos', '70 pesos', '100 pesos', '150 pesos'], optionsOdia: ['୫୦ ପେସୋ', '୭୦ ପେସୋ', '୧୦୦ ପେସୋ', '୧୫୦ ପେସୋ'], correctOptionIndex: 2, explanationEnglish: 'Lencho requested exactly one hundred pesos in his letter.' }, { id: 'mcq5', difficulty: 'Easy', questionEnglish: 'Who read Lencho\'s letter at the post office?', questionOdia: 'ଡାକଘରରେ ଲେଞ୍ଚୋଙ୍କ ଚିଠି କିଏ ପଢ଼ିଲେ?', optionsEnglish: ['A clerk', 'The postmaster', 'A farmer', 'Lencho\'s friend'], optionsOdia: ['ଏକ କ୍ଲାର୍କ', 'ପୋଷ୍ଟମାଷ୍ଟର', 'ଏକ କୃଷକ', 'ଲେଞ୍ଚୋଙ୍କ ବନ୍ଧୁ'], correctOptionIndex: 1, explanationEnglish: 'The amiable postmaster personally read and responded to the unusual letter.' }, { id: 'mcq6', difficulty: 'Easy', questionEnglish: 'How much money did Lencho actually receive?', questionOdia: 'ଲେଞ୍ଚୋ ପ୍ରକୃତରେ କେତେ ଟଙ୍କା ପାଇଲେ?', optionsEnglish: ['100 pesos', '90 pesos', '70 pesos', '30 pesos'], optionsOdia: ['୧୦୦ ପେସୋ', '୯୦ ପେସୋ', '୭୦ ପେସୋ', '୩୦ ପେସୋ'], correctOptionIndex: 2, explanationEnglish: 'The postmaster and his helpers could only gather seventy pesos.' }, { id: 'mcq7', difficulty: 'Easy', questionEnglish: 'Who did Lencho blame for the missing money?', questionOdia: 'ଅନୁପସ୍ଥିତ ଟଙ୍କା ପାଇଁ ଲେଞ୍ଚୋ କାହାକୁ ଦୋଷ ଦେଲେ?', optionsEnglish: ['God', 'The post office employees', 'His neighbours', 'Himself'], optionsOdia: ['ଭଗବାନ', 'ଡାକଘର କର୍ମଚାରୀ', 'ପଡ଼ୋଶୀ', 'ନିଜକୁ'], correctOptionIndex: 1, explanationEnglish: 'Lencho accused the post office staff of stealing part of the money, never blaming God.' }, { id: 'mcq8', difficulty: 'Easy', questionEnglish: 'What did the falling hail remind Lencho of before he realized the danger?', questionOdia: 'ବିପଦ ବୁଝିବା ପୂର୍ବରୁ ପଡ଼ୁଥିବା କୁଆପଥର ଲେଞ୍ଚୋଙ୍କୁ କାହା ମନେ ପକାଇଲା?', optionsEnglish: ['Frozen pearls', 'Broken glass', 'White flowers', 'Cotton balls'], optionsOdia: ['ଜମାଇ ମୋତି', 'ଭଙ୍ଗା ଚିନି', 'ଧଳା ଫୁଲ', 'ତୁଳା ବଲ'], correctOptionIndex: 0, explanationEnglish: 'Lencho briefly found the falling hailstones as beautiful as frozen pearls.' }, { id: 'mcq9', difficulty: 'Easy', questionEnglish: 'What is the currency mentioned in the story?', questionOdia: 'କାହାଣୀରେ କେଉଁ ମୁଦ୍ରାର ଉଲ୍ଲେଖ ଅଛି?', optionsEnglish: ['Rupees', 'Dollars', 'Pesos', 'Pounds'], optionsOdia: ['ଟଙ୍କା', 'ଡଲାର', 'ପେସୋ', 'ପାଉଣ୍ଡ'], correctOptionIndex: 2, explanationEnglish: 'Pesos is the currency used in the Latin American setting of the story.' }, { id: 'mcq10', difficulty: 'Easy', questionEnglish: 'Whose name was signed on the letter that came with the money?', questionOdia: 'ଟଙ୍କା ସହିତ ଆସିଥିବା ଚିଠିରେ କାହାର ନାମ ସ୍ୱାକ୍ଷର ଥିଲା?', optionsEnglish: ['The postmaster', 'God', 'Lencho', 'A stranger'], optionsOdia: ['ପୋଷ୍ଟମାଷ୍ଟର', 'ଭଗବାନ', 'ଲେଞ୍ଚୋ', 'ଏକ ଅଜଣା ବ୍ୟକ୍ତି'], correctOptionIndex: 1, explanationEnglish: 'To preserve Lencho\'s belief, the reply was signed \'God\'.' }, { id: 'mcq11', difficulty: 'Medium', questionEnglish: 'Why did Lencho feel confident writing directly to God for help?', questionOdia: 'ଭଗବାନଙ୍କୁ ସିଧାସଳଖ ଚିଠି ଲେଖିବାରେ ଲେଞ୍ଚୋ କାହିଁକି ଆତ୍ମବିଶ୍ୱାସୀ ଥିଲେ?', optionsEnglish: ['He had written to God before with success', 'He had complete, unquestioning faith in God', 'The postmaster suggested it', 'He had no other address to write to'], optionsOdia: ['ସେ ପୂର୍ବରୁ ମଧ୍ୟ ଭଗବାନଙ୍କୁ ଚିଠି ଲେଖି ସଫଳ ହୋଇଥିଲେ', 'ତାଙ୍କର ଭଗବାନଙ୍କ ଉପରେ ଅଟଳ ବିଶ୍ୱାସ ଥିଲା', 'ପୋଷ୍ଟମାଷ୍ଟର ପରାମର୍ଶ ଦେଇଥିଲେ', 'ଲେଖିବାକୁ ତାଙ୍କର ଅନ୍ୟ କୌଣସି ଠିକଣା ନ ଥିଲା'], correctOptionIndex: 1, explanationEnglish: 'The story emphasizes Lencho\'s deep, simple faith as the reason for his direct appeal to God.' }, { id: 'mcq12', difficulty: 'Medium', questionEnglish: 'What does the postmaster\'s decision to organize a collection reveal about him?', questionOdia: 'ଚାନ୍ଦା ସଂଗ୍ରହ କରିବାର ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ନିଷ୍ପତ୍ତି ତାଙ୍କ ବିଷୟରେ କ\'ଣ ପ୍ରକାଶ କରେ?', optionsEnglish: ['He was a wealthy man with no worries', 'He was compassionate and felt responsible for a stranger\'s faith', 'He wanted public recognition', 'He was following post office rules'], optionsOdia: ['ସେ ଏକ ଧନୀ ମଣିଷ ଥିଲେ', 'ସେ ଦୟାଳୁ ଥିଲେ ଓ ଅଜଣା ବ୍ୟକ୍ତିର ବିଶ୍ୱାସ ପାଇଁ ଦାୟିତ୍ୱବୋଧ କରୁଥିଲେ', 'ସେ ଜନ ସ୍ୱୀକୃତି ଚାହୁଁଥିଲେ', 'ସେ ଡାକଘର ନିୟମ ପାଳନ କରୁଥିଲେ'], correctOptionIndex: 1, explanationEnglish: 'His actions reflect genuine compassion, not obligation or self-interest.' }, { id: 'mcq13', difficulty: 'Medium', questionEnglish: 'Why is the story\'s title \'A Letter to God\' significant?', questionOdia: 'କାହାଣୀର ନାମ \'A Letter to God\' କାହିଁକି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ?', optionsEnglish: ['It refers to a letter God actually wrote', 'It highlights Lencho\'s unusual and sincere act of faith', 'It is simply the postmaster\'s idea of a joke', 'It refers to a religious ceremony'], optionsOdia: ['ଏହା ଭଗବାନ ପ୍ରକୃତରେ ଲେଖିଥିବା ଏକ ଚିଠିକୁ ସୂଚିତ କରେ', 'ଏହା ଲେଞ୍ଚୋଙ୍କ ଅସାଧାରଣ ଓ ସାଚ୍ଚା ବିଶ୍ୱାସକୁ ଉଜାଗର କରେ', 'ଏହା ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ପରିହାସ ମାତ୍ର', 'ଏହା ଏକ ଧାର୍ମିକ ଉତ୍ସବକୁ ସୂଚିତ କରେ'], correctOptionIndex: 1, explanationEnglish: 'The title centers on Lencho\'s remarkable direct address to God, the emotional core of the story.' }, { id: 'mcq14', difficulty: 'Medium', questionEnglish: 'What can be inferred about Lencho\'s economic situation from the story?', questionOdia: 'କାହାଣୀରୁ ଲେଞ୍ଚୋଙ୍କ ଆର୍ଥିକ ଅବସ୍ଥା ବିଷୟରେ କ\'ଣ ଅନୁମାନ କରାଯାଇପାରେ?', optionsEnglish: ['He was very wealthy with several fields', 'He depended entirely on one small field for survival', 'He had a stable job apart from farming', 'He owned a large business in town'], optionsOdia: ['ସେ ବହୁତ ଧନୀ ଥିଲେ ଓ ଅନେକ ଫସଲ ଥିଲା', 'ସେ ବଞ୍ଚିବା ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ଏକ ଛୋଟ ଖେତ ଉପରେ ନିର୍ଭରଶୀଳ ଥିଲେ', 'ଚାଷ ବ୍ୟତୀତ ତାଙ୍କର ଏକ ସ୍ଥାୟୀ ଚାକିରି ଥିଲା', 'ସେ ସହରରେ ଏକ ବଡ଼ ବ୍ୟବସାୟର ମାଲିକ ଥିଲେ'], correctOptionIndex: 1, explanationEnglish: 'The story shows Lencho as a poor farmer whose entire family\'s survival depended on this single harvest.' }, { id: 'mcq15', difficulty: 'Medium', questionEnglish: 'How does the postmaster try to protect Lencho\'s faith?', questionOdia: 'ପୋଷ୍ଟମାଷ୍ଟର ଲେଞ୍ଚୋଙ୍କ ବିଶ୍ୱାସକୁ ରକ୍ଷା କରିବାକୁ କିପରି ଚେଷ୍ଟା କରନ୍ତି?', optionsEnglish: ['By telling Lencho the truth', 'By ignoring the letter', 'By organizing a collection and sending money signed as \'God\'', 'By reporting Lencho to the police'], optionsOdia: ['ଲେଞ୍ଚୋଙ୍କୁ ସତ କହି', 'ଚିଠିକୁ ଅଣଦେଖା କରି', 'ଚାନ୍ଦା ସଂଗ୍ରହ କରି ଓ \'ଭଗବାନ\' ନାମରେ ଟଙ୍କା ପଠାଇ', 'ଲେଞ୍ଚୋଙ୍କୁ ପୋଲିସକୁ ରିପୋର୍ଟ କରି'], correctOptionIndex: 2, explanationEnglish: 'Sending the money anonymously, signed \'God\', keeps Lencho\'s belief intact.' }, { id: 'mcq16', difficulty: 'Medium', questionEnglish: 'What literary device is most evident in the story\'s ending?', questionOdia: 'କାହାଣୀର ଶେଷରେ କେଉଁ ସାହିତ୍ୟିକ କୌଶଳ ସବୁଠାରୁ ସ୍ପଷ୍ଟ?', optionsEnglish: ['Simile', 'Irony', 'Alliteration', 'Personification'], optionsOdia: ['ଉପମା', 'ବ୍ୟଙ୍ଗ', 'ଅନୁପ୍ରାସ', 'ମାନବୀକରଣ'], correctOptionIndex: 1, explanationEnglish: 'The ending is a classic example of irony — the helpers are wrongly accused.' }, { id: 'mcq17', difficulty: 'Medium', questionEnglish: 'What does Lencho\'s reaction to receiving less money suggest about his personality?', questionOdia: 'କମ ଟଙ୍କା ପାଇବାରେ ଲେଞ୍ଚୋଙ୍କ ପ୍ରତିକ୍ରିୟା ତାଙ୍କ ବ୍ୟକ୍ତିତ୍ୱ ବିଷୟରେ କ\'ଣ ସୂଚିତ କରେ?', optionsEnglish: ['He is easily satisfied and grateful', 'His faith is so rigid he cannot consider human explanations', 'He is greedy and ungrateful', 'He suspects God of dishonesty'], optionsOdia: ['ସେ ସହଜରେ ସନ୍ତୁଷ୍ଟ ଓ କୃତଜ୍ଞ', 'ତାଙ୍କ ବିଶ୍ୱାସ ଏତେ ଦୃଢ଼ ଯେ ମାନବ ବ୍ୟାଖ୍ୟାକୁ ସେ ବିଚାର କରିପାରନ୍ତି ନାହିଁ', 'ସେ ଲୋଭୀ ଓ ଅକୃତଜ୍ଞ', 'ସେ ଭଗବାନଙ୍କୁ ଅସାଧୁ ବୋଲି ସନ୍ଦେହ କରନ୍ତି'], correctOptionIndex: 1, explanationEnglish: 'His inability to consider a human explanation shows how rigid and literal his faith is.' }, { id: 'mcq18', difficulty: 'Medium', questionEnglish: 'Why might the writer have chosen a postmaster, rather than a random stranger, to help Lencho?', questionOdia: 'ଲେଞ୍ଚୋଙ୍କୁ ସାହାଯ୍ୟ କରିବାକୁ ଲେଖକ କାହିଁକି ଏକ ଅଜଣା ବ୍ୟକ୍ତି ପରିବର୍ତ୍ତେ ପୋଷ୍ଟମାଷ୍ଟରଙ୍କୁ ବାଛିଥିଲେ?', optionsEnglish: ['Because postmasters are always wealthy', 'Because the postmaster naturally receives the letter, making the plot believable', 'Because postmasters are religious figures', 'Because it makes the story shorter'], optionsOdia: ['କାରଣ ପୋଷ୍ଟମାଷ୍ଟର ସର୍ବଦା ଧନୀ ହୋଇଥାନ୍ତି', 'କାରଣ ଚିଠି ସ୍ୱାଭାବିକ ଭାବରେ ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ପାଖରେ ପହଞ୍ଚେ, ଯାହା କାହାଣୀକୁ ବିଶ୍ୱାସଯୋଗ୍ୟ କରେ', 'କାରଣ ପୋଷ୍ଟମାଷ୍ଟର ଧାର୍ମିକ ବ୍ୟକ୍ତି', 'କାରଣ ଏହା କାହାଣୀକୁ ଛୋଟ କରେ'], correctOptionIndex: 1, explanationEnglish: 'The postmaster is the logical person to receive and act on a letter addressed to God — it fits naturally into the plot.' }, { id: 'mcq19', difficulty: 'Medium', questionEnglish: 'What theme is most strongly conveyed through the postmaster\'s actions?', questionOdia: 'ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ କାର୍ଯ୍ୟ ମାଧ୍ୟମରେ କେଉଁ ବିଷୟବସ୍ତୁ ସବୁଠାରୁ ଦୃଢ଼ ଭାବରେ ପ୍ରକାଶ ପାଏ?', optionsEnglish: ['Greed', 'Human kindness and generosity', 'Religious devotion', 'Jealousy'], optionsOdia: ['ଲୋଭ', 'ମାନବିକ ଦୟା ଓ ଉଦାରତା', 'ଧାର୍ମିକ ଭକ୍ତି', 'ଈର୍ଷା'], correctOptionIndex: 1, explanationEnglish: 'His organizing a collection for a stranger highlights human generosity as a central theme.' }, { id: 'mcq20', difficulty: 'Medium', questionEnglish: 'What is the most likely reason Lencho never suspects the postmaster of helping him?', questionOdia: 'ପୋଷ୍ଟମାଷ୍ଟର ତାଙ୍କୁ ସାହାଯ୍ୟ କରିଥିବେ ବୋଲି ଲେଞ୍ଚୋ କାହିଁକି ସନ୍ଦେହ କରନ୍ତି ନାହିଁ?', optionsEnglish: ['He never met the postmaster', 'His faith frames the event only as an act of God, not of ordinary people', 'He dislikes the postmaster', 'He does not believe post offices handle money'], optionsOdia: ['ସେ ପୋଷ୍ଟମାଷ୍ଟରଙ୍କୁ କେବେ ଭେଟି ନ ଥିଲେ', 'ତାଙ୍କ ବିଶ୍ୱାସ ଏହାକୁ କେବଳ ଭଗବାନଙ୍କ କାର୍ଯ୍ୟ ଭାବରେ ହିଁ ଦେଖେ, ସାଧାରଣ ଲୋକଙ୍କ ନୁହେଁ', 'ସେ ପୋଷ୍ଟମାଷ୍ଟରଙ୍କୁ ଅପସନ୍ଦ କରନ୍ତି', 'ସେ ବିଶ୍ୱାସ କରନ୍ତି ନାହିଁ ଯେ ଡାକଘର ଟଙ୍କା ପରିଚାଳନା କରେ'], correctOptionIndex: 1, explanationEnglish: 'Lencho\'s rigid faith frames all events as directly caused by God, blinding him to the human effort involved.' }, { id: 'mcq21', difficulty: 'Hard', questionEnglish: 'Which statement best explains why the story\'s irony works effectively as social commentary?', questionOdia: 'କେଉଁ ବକ୍ତବ୍ୟ ସବୁଠାରୁ ଭଲ ଭାବରେ ବ୍ୟାଖ୍ୟା କରେ ଯେ କାହାଣୀର ବ୍ୟଙ୍ଗ ସାମାଜିକ ମନ୍ତବ୍ୟ ଭାବରେ କାହିଁକି କାର୍ଯ୍ୟକାରୀ ହୁଏ?', optionsEnglish: ['It shows that generosity is always rewarded with gratitude', 'It exposes how rigid belief systems can prevent people from recognizing real human goodness', 'It proves that post offices cannot be trusted', 'It shows that farmers are generally dishonest'], optionsOdia: ['ଏହା ଦେଖାଏ ଯେ ଉଦାରତା ସର୍ବଦା କୃତଜ୍ଞତା ପାଏ', 'ଏହା ଦେଖାଏ ଯେ କଠୋର ବିଶ୍ୱାସ ପ୍ରକୃତ ମାନବିକତାକୁ ଚିହ୍ନିବାରୁ ଲୋକଙ୍କୁ ବାଧା ଦେଇପାରେ', 'ଏହା ପ୍ରମାଣ କରେ ଯେ ଡାକଘରକୁ ବିଶ୍ୱାସ କରାଯାଇ ପାରିବ ନାହିଁ', 'ଏହା ଦେଖାଏ ଯେ କୃଷକମାନେ ସାଧାରଣତଃ ଅସାଧୁ'], correctOptionIndex: 1, explanationEnglish: 'The story\'s irony critiques how absolute, unquestioning belief can blind someone to visible acts of human kindness.' }, { id: 'mcq22', difficulty: 'Hard', questionEnglish: 'How does the author use the setting (an isolated farm dependent on one crop) to strengthen the story\'s central conflict?', questionOdia: 'ଲେଖକ ପରିବେଶ (ଏକ ଫସଲ ଉପରେ ନିର୍ଭରଶୀଳ ଏକୁଟିଆ ଫାର୍ମ) କୁ ବ୍ୟବହାର କରି କାହାଣୀର ମୁଖ୍ୟ ଦ୍ୱନ୍ଦ୍ୱକୁ କିପରି ଦୃଢ଼ କରନ୍ତି?', optionsEnglish: ['It makes the setting purely decorative with no story function', 'It raises the stakes of the crop\'s destruction to a matter of survival, justifying the desperate letter', 'It shows that Lencho lived in a big, wealthy town', 'It has no connection to the plot'], optionsOdia: ['ଏହା ପରିବେଶକୁ କେବଳ ସୌନ୍ଦର୍ଯ୍ୟ ପାଇଁ ବ୍ୟବହାର କରେ', 'ଏହା ଫସଲ ନଷ୍ଟକୁ ବଞ୍ଚିବାର ପ୍ରଶ୍ନ ପାଇଁ ଉଠାଏ, ଯାହା ହତାଶ ଚିଠିକୁ ଯୁକ୍ତିଯୁକ୍ତ କରେ', 'ଏହା ଦେଖାଏ ଯେ ଲେଞ୍ଚୋ ଏକ ବଡ଼, ଧନୀ ସହରରେ ରହୁଥିଲେ', 'ଏହାର କାହାଣୀ ସହିତ କୌଣସି ସମ୍ପର୍କ ନାହିଁ'], correctOptionIndex: 1, explanationEnglish: 'The isolated, single-crop-dependent setting makes the destruction an existential crisis, motivating Lencho\'s extreme action of writing to God.' }, { id: 'mcq23', difficulty: 'Hard', questionEnglish: 'What does the difference between the amount requested (100) and received (70) most likely symbolize?', questionOdia: 'ମାଗିଥିବା (୧୦୦) ଓ ପାଇଥିବା (୭୦) ଟଙ୍କାର ପାର୍ଥକ୍ୟ ସମ୍ଭବତଃ କ\'ଣକୁ ପ୍ରତୀକ କରେ?', optionsEnglish: ['The limits of human generosity compared to the ideal of divine, unlimited provision', 'A printing mistake in the story', 'The postmaster\'s dishonesty', 'Inflation in the local currency'], optionsOdia: ['ଈଶ୍ୱରୀୟ, ଅସୀମ ପ୍ରଦାନର ଆଦର୍ଶ ତୁଳନାରେ ମାନବିକ ଉଦାରତାର ସୀମା', 'କାହାଣୀରେ ଏକ ମୁଦ୍ରଣ ତ୍ରୁଟି', 'ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ଅସାଧୁତା', 'ସ୍ଥାନୀୟ ମୁଦ୍ରାରେ ମୁଦ୍ରାସ୍ଫୀତି'], correctOptionIndex: 0, explanationEnglish: 'The shortfall highlights the real, practical limits of human generosity, unlike the boundless help Lencho imagined from God.' }, { id: 'mcq24', difficulty: 'Hard', questionEnglish: 'Which best describes the narrative technique used to build sympathy for Lencho early in the story?', questionOdia: 'କାହାଣୀ ପ୍ରାରମ୍ଭରେ ଲେଞ୍ଚୋ ପ୍ରତି ସହାନୁଭୂତି ସୃଷ୍ଟି କରିବାକୁ କେଉଁ ବର୍ଣ୍ଣନାତ୍ମକ କୌଶଳ ବ୍ୟବହୃତ ହୋଇଛି?', optionsEnglish: ['Describing his wealth and comfort', 'Describing his hard work, hope, and complete dependence on the crop before its destruction', 'Focusing entirely on the postmaster', 'Using humour throughout'], optionsOdia: ['ତାଙ୍କ ଧନ ଓ ଆରାମ ବର୍ଣ୍ଣନା କରି', 'ଫସଲ ନଷ୍ଟ ହେବା ପୂର୍ବରୁ ତାଙ୍କ ପରିଶ୍ରମ, ଆଶା, ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ ନିର୍ଭରଶୀଳତା ବର୍ଣ୍ଣନା କରି', 'ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ଉପରେ ଧ୍ୟାନ ଦେଇ', 'ସାରା କାହାଣୀରେ ହାସ୍ୟରସ ବ୍ୟବହାର କରି'], correctOptionIndex: 1, explanationEnglish: 'The early description of Lencho\'s hard work, hope for a good harvest, and total dependence on the field builds reader sympathy before the disaster strikes.' }, { id: 'mcq25', difficulty: 'Hard', questionEnglish: 'What broader observation about human nature does the postmaster\'s colleagues\' willingness to contribute support?', questionOdia: 'ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ସହକର୍ମୀମାନଙ୍କ ଚାନ୍ଦା ଦେବାର ଇଚ୍ଛା ମାନବ ପ୍ରକୃତି ବିଷୟରେ କେଉଁ ବ୍ୟାପକ ପର୍ଯ୍ୟବେକ୍ଷଣକୁ ସମର୍ଥନ କରେ?', optionsEnglish: ['People rarely help strangers without reward', 'Genuine need, sincerely expressed, can inspire collective generosity even among strangers', 'Only religious people are generous', 'Office colleagues always compete rather than cooperate'], optionsOdia: ['ଲୋକମାନେ ପୁରସ୍କାର ବିନା ଅଜଣା ଲୋକଙ୍କୁ କ୍ୱଚିତ ସାହାଯ୍ୟ କରନ୍ତି', 'ସାଚ୍ଚା ଆବଶ୍ୟକତା, ସାଚ୍ଚା ଭାବରେ ପ୍ରକାଶ ପାଇଲେ, ଅଜଣା ଲୋକଙ୍କ ମଧ୍ୟରେ ମଧ୍ୟ ସାମୂହିକ ଉଦାରତା ଜାଗ୍ରତ କରିପାରେ', 'କେବଳ ଧାର୍ମିକ ଲୋକମାନେ ହିଁ ଉଦାର', 'ଅଫିସ ସହକର୍ମୀମାନେ ସର୍ବଦା ପ୍ରତିଯୋଗିତା କରନ୍ତି, ସହଯୋଗ ନୁହେଁ'], correctOptionIndex: 1, explanationEnglish: 'The colleagues\' willingness to help a complete stranger reflects the story\'s theme that sincere need can inspire collective kindness.' }, { id: 'mcq26', difficulty: 'Hard', questionEnglish: 'In literary terms, what role does the postmaster play in relation to Lencho?', questionOdia: 'ସାହିତ୍ୟିକ ଦୃଷ୍ଟିରୁ, ଲେଞ୍ଚୋଙ୍କ ସହିତ ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ଭୂମିକା କ\'ଣ?', optionsEnglish: ['The antagonist who opposes Lencho', 'An unseen benefactor who unknowingly becomes the target of suspicion', 'A narrator commenting on the plot', 'Lencho\'s relative'], optionsOdia: ['ଏକ ପ୍ରତିପକ୍ଷ ଯିଏ ଲେଞ୍ଚୋଙ୍କ ବିରୋଧ କରେ', 'ଏକ ଅଦୃଶ୍ୟ ଉପକାରକ ଯିଏ ଅଜାଣତରେ ସନ୍ଦେହର ଲକ୍ଷ୍ୟ ହୁଏ', 'ଏକ ବର୍ଣ୍ଣନାକାରୀ ଯିଏ କାହାଣୀ ଉପରେ ମନ୍ତବ୍ୟ ଦିଏ', 'ଲେଞ୍ଚୋଙ୍କ ସମ୍ପର୍କୀୟ'], correctOptionIndex: 1, explanationEnglish: 'The postmaster acts as an unseen benefactor whose kindness ironically makes him the object of Lencho\'s unfair suspicion.' }, { id: 'mcq27', difficulty: 'Hard', questionEnglish: 'Why might the writer have chosen NOT to reveal the postmaster\'s role to Lencho within the story?', questionOdia: 'ଲେଖକ କାହିଁକି ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ଭୂମିକା ଲେଞ୍ଚୋଙ୍କୁ ପ୍ରକାଶ ନ କରିବାକୁ ବାଛିଥିଲେ?', optionsEnglish: ['To make the story shorter', 'To preserve the dramatic irony that gives the ending its emotional and thematic impact', 'Because the postmaster asked to remain anonymous for tax reasons', 'Because the writer forgot to include it'], optionsOdia: ['କାହାଣୀକୁ ଛୋଟ କରିବାକୁ', 'ଶେଷର ଭାବନାତ୍ମକ ଓ ବିଷୟବସ୍ତୁଗତ ପ୍ରଭାବ ଦେଉଥିବା ବ୍ୟଙ୍ଗକୁ ବଜାୟ ରଖିବାକୁ', 'କାରଣ ପୋଷ୍ଟମାଷ୍ଟର ଟିକସ କାରଣରୁ ଗୁପ୍ତ ରହିବାକୁ ମାଗିଥିଲେ', 'କାରଣ ଲେଖକ ଏହାକୁ ଅନ୍ତର୍ଭୁକ୍ତ କରିବାକୁ ଭୁଲିଗଲେ'], correctOptionIndex: 1, explanationEnglish: 'Keeping Lencho unaware is essential to the story\'s dramatic irony and its commentary on blind faith.' }, { id: 'mcq28', difficulty: 'Hard', questionEnglish: 'What is the most significant contrast the story draws between Lencho\'s expectation and reality?', questionOdia: 'ଲେଞ୍ଚୋଙ୍କ ଆଶା ଓ ବାସ୍ତବତା ମଧ୍ୟରେ କାହାଣୀ କେଉଁ ସବୁଠାରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ପାର୍ଥକ୍ୟ ଦେଖାଏ?', optionsEnglish: ['He expected divine intervention and received human kindness instead, but could not see the difference', 'He expected nothing but received everything', 'He expected help from friends but received nothing', 'He expected a bad harvest but got a good one'], optionsOdia: ['ସେ ଈଶ୍ୱରୀୟ ହସ୍ତକ୍ଷେପ ଆଶା କରୁଥିଲେ ଓ ପରିବର୍ତ୍ତେ ମାନବିକ ଦୟା ପାଇଲେ, କିନ୍ତୁ ପାର୍ଥକ୍ୟ ବୁଝି ପାରିଲେ ନାହିଁ', 'ସେ କିଛି ଆଶା କରୁ ନ ଥିଲେ ଓ ସବୁକିଛି ପାଇଲେ', 'ସେ ବନ୍ଧୁଙ୍କଠାରୁ ସାହାଯ୍ୟ ଆଶା କରୁଥିଲେ ଓ କିଛି ପାଇଲେ ନାହିଁ', 'ସେ ଖରାପ ଫସଲ ଆଶା କରୁଥିଲେ ଓ ଭଲ ପାଇଲେ'], correctOptionIndex: 0, explanationEnglish: 'The core contrast is between the divine help Lencho believed he received and the very human generosity that actually helped him.' }, { id: 'mcq29', difficulty: 'Hard', questionEnglish: 'How does the story\'s structure (disaster → letter → response → second letter) contribute to its impact?', questionOdia: 'କାହାଣୀର ଗଠନ (ବିପର୍ଯ୍ୟୟ → ଚିଠି → ପ୍ରତିକ୍ରିୟା → ଦ୍ୱିତୀୟ ଚିଠି) ଏହାର ପ୍ରଭାବରେ କିପରି ସହାୟକ ହୁଏ?', optionsEnglish: ['It builds tension and hope, then subverts expectations with an ironic twist at the end', 'It repeats the same event for emphasis without any development', 'It has no clear structure', 'It is structured as a simple list of facts'], optionsOdia: ['ଏହା ତନାବ ଓ ଆଶା ସୃଷ୍ଟି କରେ, ତାପରେ ଶେଷରେ ଏକ ବ୍ୟଙ୍ଗାତ୍ମକ ମୋଡ଼ ସହିତ ଆଶାକୁ ପରିବର୍ତ୍ତନ କରେ', 'ଏହା ଗୁରୁତ୍ୱ ପାଇଁ ସମାନ ଘଟଣା ପୁନରାବୃତ୍ତି କରେ', 'ଏହାର କୌଣସି ସ୍ପଷ୍ଟ ଗଠନ ନାହିଁ', 'ଏହା ତଥ୍ୟର ଏକ ସରଳ ତାଲିକା ଭାବରେ ଗଠିତ'], correctOptionIndex: 0, explanationEnglish: 'The four-part structure builds sympathy and hope, then delivers its ironic point through the twist of the second letter.' }, { id: 'mcq30', difficulty: 'Hard', questionEnglish: 'What lesson about judging others does the story most strongly suggest through Lencho\'s final action?', questionOdia: 'ଲେଞ୍ଚୋଙ୍କ ଅନ୍ତିମ କାର୍ଯ୍ୟ ମାଧ୍ୟମରେ ଅନ୍ୟମାନଙ୍କୁ ବିଚାର କରିବା ବିଷୟରେ କାହାଣୀ କେଉଁ ପାଠ ସବୁଠାରୁ ଦୃଢ଼ ଭାବରେ ପ୍ରସ୍ତାବ ଦିଏ?', optionsEnglish: ['We should always trust official institutions completely', 'We should be careful not to assume dishonesty in others based on our own fixed beliefs', 'Farmers are generally suspicious people', 'Post offices should never handle money'], optionsOdia: ['ଆମେ ସର୍ବଦା ସରକାରୀ ସଂସ୍ଥାଙ୍କୁ ସମ୍ପୂର୍ଣ୍ଣ ବିଶ୍ୱାସ କରିବା ଉଚିତ', 'ଆମେ ନିଜ ଦୃଢ଼ ବିଶ୍ୱାସ ଆଧାରରେ ଅନ୍ୟମାନଙ୍କୁ ଅସାଧୁ ବୋଲି ଅନୁମାନ କରିବାରୁ ସାବଧାନ ରହିବା ଉଚିତ', 'କୃଷକମାନେ ସାଧାରଣତଃ ସନ୍ଦେହପ୍ରବଣ ଲୋକ', 'ଡାକଘର କେବେ ହେଁ ଟଙ୍କା ପରିଚାଳନା କରିବା ଉଚିତ ନୁହେଁ'], correctOptionIndex: 1, explanationEnglish: 'Lencho\'s mistaken accusation is a caution against letting rigid personal beliefs lead to unfair judgments of others.' }],
    practiceQuestions: [{ id: 'pq1', type: 'comprehension', questionEnglish: 'In one sentence, summarize what happens to Lencho\'s crop.', answerEnglish: 'A sudden hailstorm completely destroys Lencho\'s entire ripe cornfield.' }, { id: 'pq2', type: 'comprehension', questionEnglish: 'What does Lencho do immediately after the hailstorm?', answerEnglish: 'He writes a letter to God asking for a hundred pesos.' }, { id: 'pq3', type: 'comprehension', questionEnglish: 'Who reads Lencho\'s letter and how does he react?', answerEnglish: 'The postmaster reads it — laughing at first, then becoming serious once he understands Lencho\'s sincere faith.' }, { id: 'pq4', type: 'comprehension', questionEnglish: 'How do the post office employees respond to the letter?', answerEnglish: 'They contribute money along with the postmaster to collect as much as they can for Lencho.' }, { id: 'pq5', type: 'comprehension', questionEnglish: 'Why does Lencho write a second letter?', answerEnglish: 'Because he received thirty pesos less than he had asked for and assumed the post office staff had taken it.' }, { id: 'pq6', type: 'vocabulary', questionEnglish: 'Use the word \'amiable\' in a sentence of your own.', answerEnglish: '(Sample) The amiable shopkeeper always greeted his customers with a warm smile.' }, { id: 'pq7', type: 'vocabulary', questionEnglish: 'Give one synonym for \'downpour\'.', answerEnglish: 'Deluge / heavy rain / cloudburst.' }, { id: 'pq8', type: 'vocabulary', questionEnglish: 'What is the Odia meaning of \'conscience\'?', answerEnglish: 'ବିବେକ' }, { id: 'pq9', type: 'vocabulary', questionEnglish: 'Use \'harvest\' as both a noun and a verb in two separate sentences.', answerEnglish: '(Sample) Noun: The harvest was ready by October. Verb: Farmers harvest the crop once it ripens.' }, { id: 'pq10', type: 'vocabulary', questionEnglish: 'What does \'sow\' mean, and how is it different from \'harvest\'?', answerEnglish: '\'Sow\' means to plant seeds, while \'harvest\' means to gather the ripe crop — they are opposite ends of the farming cycle.' }, { id: 'pq11', type: 'grammar', questionEnglish: 'Identify the tense used in: \'Lencho was watching the sky anxiously.\'', answerEnglish: 'Past continuous tense.' }, { id: 'pq12', type: 'grammar', questionEnglish: 'Rewrite in indirect speech: Lencho said, \'I need a hundred pesos.\'', answerEnglish: 'Lencho said that he needed a hundred pesos.' }, { id: 'pq13', type: 'grammar', questionEnglish: 'Identify the figure of speech: \'The hail looked like frozen pearls.\'', answerEnglish: 'Simile (comparison using \'like\').' }, { id: 'pq14', type: 'grammar', questionEnglish: 'Combine into one sentence: \'The hailstorm came. It destroyed the crop.\'', answerEnglish: 'The hailstorm came and destroyed the crop.' }, { id: 'pq15', type: 'writing', questionEnglish: 'Write a 5-line diary entry as Lencho, describing how you felt the night after the hailstorm.', answerEnglish: '(Guidance) Should express shock, despair, and eventual determination to seek help — evaluated for content and language, not a single fixed answer.' }, { id: 'pq16', type: 'writing', questionEnglish: 'Write a short paragraph (60-80 words) on \'The Importance of Faith\' inspired by this story.', answerEnglish: '(Guidance) Should discuss how faith gave Lencho hope, while also noting its limits — evaluated for content and language.' }, { id: 'pq17', type: 'analytical', questionEnglish: 'Do you agree with the postmaster\'s decision to hide the truth from Lencho? Give reasons.', answerEnglish: '(Open-ended — accept well-reasoned answers on either side, e.g. agreeing it preserved kindness and hope, or disagreeing that honesty would have been better.)' }, { id: 'pq18', type: 'analytical', questionEnglish: 'What would you have done differently if you were the postmaster?', answerEnglish: '(Open-ended — evaluate based on reasoning, not a fixed answer.)' }, { id: 'pq19', type: 'analytical', questionEnglish: 'Is Lencho\'s accusation against the post office employees fair? Justify your answer.', answerEnglish: 'It is not fair, since the employees acted generously; however, it is understandable given Lencho\'s rigid faith that only God could be responsible.' }, { id: 'pq20', type: 'analytical', questionEnglish: 'What does this story teach us about not judging a situation without full information?', answerEnglish: 'It teaches that jumping to conclusions without knowing the full facts can lead to unfairly blaming innocent, well-meaning people.' }],
    isPremium: false,
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

  {
    id: 'c10_eng_ch3',
    classLevel: 'Class 10',
    subjectId: 'english',
    chapterNumber: 3,
    titleEnglish: 'The Solitary Reaper',
    titleOdia: 'ଦ ସଲିଟାରୀ ରିପର (ଏକାକୀ ଫସଲ କଟାଳୀ) - William Wordsworth',
    examWeightageMarks: 6,
    learningObjectives: [
      'Appreciate Wordsworth as a Romantic poet who finds deep meaning in simple rural life.',
      'Understand how the poet compares the girl\'s song to the nightingale and the cuckoo.',
      'Learn poetic devices used: simile, rhetorical question, and imagery.',
      'Practice BSE Odisha style 2-mark and 5-mark poem-based questions.'
    ],
    realLifeApplications: [
      'Shows how ordinary moments and simple people can move us deeply even without understanding their exact words.',
      'Teaches appreciation of nature and rural life, and how music/art can be universal despite language barriers.'
    ],
    summaryEnglish: 'While travelling through the Scottish Highlands, the poet notices a young girl working alone in a field, cutting and binding grain while singing a sad, beautiful song in Gaelic. He cannot understand her words, but her melancholy tune moves him so deeply that he compares it to the song of a nightingale welcoming tired travellers in the Arabian desert and a cuckoo announcing spring in the Hebrides. He wonders whether she sings of old sorrows, battles, or everyday troubles that recur again and again. Whatever the theme, her song seems to have no end. The poet watches and listens motionless, and even after he has walked far away, the melody stays in his heart.',
    summaryOdia: 'ସ୍କଟଲାଣ୍ଡର ପାହାଡ଼ିଆ ଅଞ୍ଚଳରେ ଭ୍ରମଣ କରୁଥିବା ସମୟରେ କବି ଏକ ଯୁବତୀକୁ ଏକୁଟିଆ ଫସଲ କାଟୁଥିବା ଓ ବାନ୍ଧୁଥିବା ଦେଖନ୍ତି, ଯିଏ ଏକ ଦୁଃଖଦ ମଧୁର ଗୀତ ଗାଉଥାନ୍ତି। କବି ତାଙ୍କ ଭାଷା ବୁଝି ପାରନ୍ତି ନାହିଁ, କିନ୍ତୁ ସେହି ସ୍ୱର ତାଙ୍କୁ ଏତେ ପ୍ରଭାବିତ କରେ ଯେ ସେ ଏହାକୁ ମରୁଭୂମିରେ ଥକିଯାଇଥିବା ଯାତ୍ରୀଙ୍କ ପାଇଁ ବୁଲବୁଲ ପକ୍ଷୀର ଗୀତ ଓ ବସନ୍ତ ଘୋଷଣା କରୁଥିବା କୋଇଲି ସହିତ ତୁଳନା କରନ୍ତି। ଗୀତ ପୁରୁଣା ଦୁଃଖ, ଯୁଦ୍ଧ, କିମ୍ବା ପ୍ରତିଦିନର ସାଧାରଣ କଷ୍ଟ ବିଷୟରେ କି ନାହିଁ, ତାହା ସେ ଜାଣି ପାରନ୍ତି ନାହିଁ। କବି ସ୍ଥିର ହୋଇ ଶୁଣନ୍ତି, ଓ ବହୁ ଦୂର ଚାଲିଗଲା ପରେ ମଧ୍ୟ ସେହି ସଙ୍ଗୀତ ତାଙ୍କ ହୃଦୟରେ ରହିଯାଏ।',
    lineByLineExplanation: [
      {
        paragraphNo: 1,
        textEnglish: 'Stanza 1: The poet asks the reader to behold (look at) a solitary Highland girl reaping and singing by herself in the field. He requests others passing by to either stop and listen quietly or walk past gently, because her sad song fills the whole valley.',
        textOdia: 'ପ୍ରଥମ ପଦ: କବି ପାଠକମାନଙ୍କୁ ଏକ ଏକୁଟିଆ ପାହାଡ଼ିଆ ଝିଅକୁ ଫସଲ କାଟି ଗୀତ ଗାଉଥିବା ଦେଖିବାକୁ କୁହନ୍ତି। ସେ ଯାତ୍ରୀମାନଙ୍କୁ ଅନୁରୋଧ କରନ୍ତି ଯେ ହୁଏତ ଠିଆ ହୋଇ ଚୁପଚାପ ଶୁଣନ୍ତୁ, ନଚେତ୍ ଧୀରେ ଚାଲିଯାଆନ୍ତୁ, କାରଣ ତାଙ୍କର ଦୁଃଖଦ ଗୀତ ସମଗ୍ର ଉପତ୍ୟକାକୁ ଭରି ଦେଇଛି।',
        keyNote: 'The word "solitary" is repeated to stress her aloneness — an important word for objective questions.'
      },
      {
        paragraphNo: 2,
        textEnglish: 'Stanza 2: The poet says her voice is more welcome than a nightingale singing to weary travellers resting in the shade of an Arabian desert oasis, and sweeter than a cuckoo\'s call breaking the silence of spring seas among the Hebrides islands.',
        textOdia: 'ଦ୍ୱିତୀୟ ପଦ: କବି କୁହନ୍ତି ତାଙ୍କ ସ୍ୱର ମରୁଭୂମିରେ ଥକିଯାଇଥିବା ଯାତ୍ରୀଙ୍କୁ ଛାଇରେ ବିଶ୍ରାମ ଦେଉଥିବା ବୁଲବୁଲ ପକ୍ଷୀଠାରୁ ଅଧିକ ସ୍ୱାଗତଯୋଗ୍ୟ, ଏବଂ ହେବ୍ରାଇଡ୍ସ ଦ୍ୱୀପପୁଞ୍ଜରେ ବସନ୍ତ ନୀରବତାକୁ ଭଙ୍ଗ କରୁଥିବା କୋଇଲିର ସ୍ୱରଠାରୁ ଅଧିକ ମଧୁର।',
        keyNote: 'Two similes used here: nightingale (Arabian desert) and cuckoo-bird (Hebrides) — commonly asked as MCQ/fill-in-the-blank.'
      },
      {
        paragraphNo: 3,
        textEnglish: 'Stanza 3: The poet wonders what the girl is singing about — perhaps old, unhappy, far-off battles and events, or maybe a simple, familiar sorrow, loss, or pain that has happened before and could happen again in ordinary life.',
        textOdia: 'ତୃତୀୟ ପଦ: କବି ଭାବନ୍ତି ଝିଅଟି କ\'ଣ ବିଷୟରେ ଗାଉଛନ୍ତି — ହୁଏତ ପୁରୁଣା, ଦୁଃଖଦ, ଦୂର ଯୁଦ୍ଧ ଓ ଘଟଣା ବିଷୟରେ, କିମ୍ବା ହୁଏତ ଏକ ସାଧାରଣ, ପରିଚିତ ଦୁଃଖ କିମ୍ବା କ୍ଷତି ବିଷୟରେ ଯାହା ପୂର୍ବରୁ ଘଟିଛି ଏବଂ ପୁଣି ଘଟିପାରେ।',
        keyNote: 'Poet uses a rhetorical question here — he never gets or needs an answer.'
      },
      {
        paragraphNo: 4,
        textEnglish: 'Stanza 4: Whatever her song was about, it seemed to the poet as if it had no end — she sang as though she could go on forever, bent over her work. The poet watched her in silence, and long after he had left and climbed the hill, the music continued to live on in his heart.',
        textOdia: 'ଚତୁର୍ଥ ପଦ: ତାଙ୍କ ଗୀତ ଯାହା ବିଷୟରେ ହେଉ ନା କାହିଁକି, ତାହା କବିଙ୍କୁ ଅନନ୍ତ ମନେ ହେଲା — ସେ ଯେମିତି ସର୍ବଦା କାମ କରି ଗାଉଥିବେ। କବି ନୀରବରେ ଦେଖିଲେ, ଓ ପାହାଡ଼ ଚଢ଼ି ବହୁ ଦୂର ଚାଲିଗଲା ପରେ ମଧ୍ୟ ସେହି ସଙ୍ଗୀତ ତାଙ୍କ ହୃଦୟରେ ରହିଗଲା।',
        keyNote: 'Last two lines are frequently asked as a 2-mark quote-based question: music lives in the heart "long after it was heard no more."'
      }
    ],
    keyWords: [
      { word: 'Solitary', meaningOdia: 'ଏକୁଟିଆ', meaningEnglish: 'Alone, single' },
      { word: 'Reaping', meaningOdia: 'ଫସଲ କଟା', meaningEnglish: 'Cutting a crop of grain' },
      { word: 'Melancholy', meaningOdia: 'ବିଷାଦମୟ', meaningEnglish: 'A feeling of deep sadness' },
      { word: 'Vale', meaningOdia: 'ଉପତ୍ୟକା', meaningEnglish: 'A valley' },
      { word: 'Hebrides', meaningOdia: 'ହେବ୍ରାଇଡ୍ସ ଦ୍ୱୀପପୁଞ୍ଜ', meaningEnglish: 'A group of islands off the west coast of Scotland' }
    ],
    shortQuestions: [
      {
        id: 'sr_sq1',
        qEnglish: 'What was the Highland girl doing when the poet saw her?',
        qOdia: 'କବି ଝିଅକୁ ଦେଖିଲାବେଳେ ସେ କ\'ଣ କରୁଥିଲେ?',
        answerEnglish: 'She was working alone in the field, cutting and binding grain while singing a sad, beautiful song.',
        answerOdia: 'ସେ ଏକୁଟିଆ ଫସଲ କାଟି ବାନ୍ଧୁଥିଲେ ଓ ସାଙ୍ଗକୁ ଏକ ଦୁଃଖଦ ମଧୁର ଗୀତ ଗାଉଥିଲେ।',
        marks: 2
      },
      {
        id: 'sr_sq2',
        qEnglish: 'With which two birds does the poet compare the girl\'s song?',
        qOdia: 'କବି ଝିଅର ଗୀତକୁ କେଉଁ ଦୁଇଟି ପକ୍ଷୀ ସହିତ ତୁଳନା କରନ୍ତି?',
        answerEnglish: 'He compares it to the nightingale singing to weary desert travellers and the cuckoo announcing spring among the Hebrides.',
        answerOdia: 'ସେ ଏହାକୁ ମରୁଭୂମି ଯାତ୍ରୀଙ୍କ ପାଇଁ ଗାଉଥିବା ବୁଲବୁଲ ଓ ହେବ୍ରାଇଡ୍ସରେ ବସନ୍ତ ଘୋଷଣା କରୁଥିବା କୋଇଲି ସହିତ ତୁଳନା କରନ୍ତି।',
        marks: 2
      }
    ],
    longQuestions: [
      {
        id: 'sr_lq1',
        qEnglish: 'Why does the poet say the girl\'s song "seemed to have no ending"? Explain with reference to the poem.',
        qOdia: 'କବି କାହିଁକି କୁହନ୍ତି ଝିଅର ଗୀତର "କୌଣସି ଶେଷ ନାହିଁ" ଥିଲା ପରି ମନେ ହେଉଥିଲା? କବିତା ଆଧାରରେ ବ୍ୟାଖ୍ୟା କର।',
        answerEnglish: 'The girl sang continuously as she bent over her sickle, cutting and binding grain, and her song seemed to flow endlessly with her steady rhythm of work. The poet felt her song had no fixed end because she kept singing the same tune again and again as she worked, suggesting the timeless, ongoing nature of rural labour and folk music.',
        answerOdia: 'ଝିଅ ତାଙ୍କ କାସ୍ତି ଉପରେ ଝୁକି ଫସଲ କାଟୁଥିବା ସମୟରେ ନିରନ୍ତର ଗାଉଥିଲେ, ଏବଂ ତାଙ୍କ କାର୍ଯ୍ୟର ସ୍ଥିର ତାଳ ସହିତ ଗୀତ ମଧ୍ୟ ଅନନ୍ତ ଭାବେ ପ୍ରବାହିତ ହେଉଥିଲା ପରି ମନେ ହେଲା। ଏହା ଗ୍ରାମୀଣ ଶ୍ରମ ଓ ଲୋକଗୀତର ସ୍ଥାୟୀ, ନିରନ୍ତର ପ୍ରକୃତିକୁ ସୂଚିତ କରେ।',
        marks: 5
      }
    ],
    pyqs: [
      { year: '2023', question: 'What does the poet request the passers-by to do on seeing the reaper?', answer: 'He requests them to either stop and listen quietly to her song, or to pass by gently without disturbing her.', marks: 2 },
      { year: '2022', question: 'What guesses does the poet make about the theme of the girl\'s song?', answer: 'He guesses it could be about old, sad, far-off battles, or about a simple, familiar everyday sorrow that has happened before and may happen again.', marks: 3 }
    ],
    hotsQuestions: [
      { question: 'Even though the poet does not understand the girl\'s language, why is he so deeply moved by her song?', answer: 'This shows that the beauty and emotion of music can be felt through tone and melody alone, without needing to understand the exact words — proving that art and feeling are universal.' }
    ],
    fillInBlanks: [
      { id: 'sr_fib1', question: 'The poet compares the girl\'s voice to a _______ singing to tired desert travellers.', answer: 'nightingale' },
      { id: 'sr_fib2', question: 'The cuckoo-bird\'s song breaks the silence of the seas among the _______ islands.', answer: 'Hebrides' }
    ],
    trueFalse: [
      { id: 'sr_tf1', statement: 'The poet understood every word of the girl\'s song.', isTrue: false, explanation: 'The song was in Gaelic and the poet could not understand the words, only the melody moved him.' },
      { id: 'sr_tf2', statement: 'The music stayed in the poet\'s heart even after he had walked far away.', isTrue: true, explanation: 'The poem ends by saying the music lived in his heart "long after it was heard no more."' }
    ],
    matchFollowing: [
      { left: 'Nightingale', right: 'Sings to Arabian desert travellers' },
      { left: 'Cuckoo-bird', right: 'Breaks silence of spring in Hebrides' },
      { left: 'Solitary girl', right: 'Reaping and singing alone' }
    ],
    examTips: [
      'A very common 2-mark question: name the two birds used in similes for the girl\'s song (nightingale and cuckoo).',
      'For 5-mark answers, always mention that the poet never learns the actual meaning of the song — the beauty lies in not knowing.'
    ],
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

// Real leaderboard entries now come from Firestore (see /api/leaderboard) — populated
// automatically as real students complete mock tests. No fake/sample names here.
export const LEADERBOARD_DATA: LeaderboardEntry[] = [];

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
