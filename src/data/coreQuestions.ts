import type { QuestionItem, RatingOption, ScaleFamily } from '../types/questions';
import type { SocionicsElement } from '../types/socionics';
import type { MeasurementChannel, QuestionContext } from '../types/questions';

const VERSION = '2026.06.instrument.v1';

const scaleLabels: Record<ScaleFamily, string[]> = {
  automaticity: ['Tidak muncul alami', 'Harus kupikirkan lama', 'Tergantung keadaan', 'Cukup spontan', 'Hampir tanpa usaha'],
  comfort: ['Terasa mengganggu', 'Agak berat', 'Biasa saja', 'Cukup nyaman', 'Seperti tempat pulang'],
  threat: ['Hampir tidak mengganggu', 'Sedikit menekan', 'Tergantung situasi', 'Cukup membuat tegang', 'Mudah membuatku freeze'],
  relief: ['Tidak banyak membantu', 'Kadang membantu', 'Netral', 'Cukup melegakan', 'Seperti beban diambil'],
  recognition: ['Tidak penting dipuji', 'Sedikit ingin diakui', 'Biasa saja', 'Cukup ingin dilihat', 'Sangat ingin dihargai'],
  frequency: ['Hampir tidak pernah', 'Jarang', 'Kadang', 'Sering', 'Hampir selalu'],
  importance: ['Tidak penting', 'Agak kecil', 'Tergantung keadaan', 'Cukup penting', 'Sangat penting']
};

const meanings: Record<ScaleFamily, string[]> = {
  automaticity: [
    'Proses ini biasanya tidak muncul sebagai reaksi pertama.',
    'Aku bisa melakukannya, tetapi perlu jeda dan tenaga sadar.',
    'Kadang muncul, kadang tidak, tergantung orang dan keadaan.',
    'Proses ini cukup cepat naik ke permukaan.',
    'Proses ini seperti jalan refleks; aku sering sudah bergerak sebelum menjelaskan.'
  ],
  comfort: [
    'Situasi seperti ini membuatku ingin menjauh atau mempercepat selesai.',
    'Aku masih bisa berada di sana, tetapi tubuh atau pikiranku agak menegang.',
    'Rasanya netral; tidak terlalu berat dan tidak terlalu menarik.',
    'Aku cukup mudah menetap di suasana seperti ini.',
    'Ada rasa pas, seperti keadaan akhirnya bisa dihuni dengan tenang.'
  ],
  threat: [
    'Tuntutan ini jarang mengganggu arahku.',
    'Ada tekanan kecil, tetapi masih mudah kutangani.',
    'Kadang aman, kadang terasa menekan.',
    'Aku bisa tegang dan terlalu sadar diri di area ini.',
    'Aku mudah diam, kaku, defensif, atau ingin kabur dari tuntutan ini.'
  ],
  relief: [
    'Bantuan seperti ini tidak terlalu mengubah keadaan batinku.',
    'Kadang membantu, tetapi tidak selalu terasa tepat.',
    'Rasanya biasa saja.',
    'Aku merasa lebih ringan ketika orang lain membawa ini dengan baik.',
    'Beban seperti diambil; aku bisa bernapas lagi.'
  ],
  recognition: [
    'Aku tidak terlalu butuh dilihat di area ini.',
    'Ada sedikit rasa ingin diakui, tetapi kecil.',
    'Rasanya tengah-tengah.',
    'Aku cukup ingin usahaku diperhatikan.',
    'Pengakuan di area ini terasa sangat berarti bagiku.'
  ],
  frequency: [
    'Ini jarang menjadi caraku merespons keadaan.',
    'Kadang muncul, tetapi bukan kebiasaan utama.',
    'Muncul pada beberapa situasi saja.',
    'Cukup sering terlihat dalam tindakanku.',
    'Ini hampir selalu menjadi bagian dari caraku bergerak.'
  ],
  importance: [
    'Area ini biasanya tidak kuanggap penting.',
    'Kupikirkan sedikit, tetapi cepat lewat.',
    'Pentingnya bergantung pada keadaan.',
    'Cukup penting untuk memengaruhi tindakanku.',
    'Aku sulit mengabaikannya karena terasa sangat menentukan.'
  ]
};

const reactions = [
  'Aku biasanya membiarkan percakapan lewat tanpa mengubah posisi.',
  'Aku berhenti sebentar, menarik napas, lalu merespons seperlunya.',
  'Aku melihat keadaan dulu sebelum memilih cara bergerak.',
  'Aku mulai menata ucapan, chat, atau tindakan agar situasi lebih terkendali.',
  'Aku langsung menangkap pola dan tubuhku seperti sudah tahu harus bergerak ke mana.'
];

function makeOptions(scaleFamily: ScaleFamily): RatingOption[] {
  return ([1, 2, 3, 4, 5] as const).map((value, index) => {
    const signed = value === 3 ? 0 : value > 3 ? 1 : -1;
    const intensity = value === 3 ? 0 : value === 2 || value === 4 ? 0.5 : 1;
    return {
      value,
      label: scaleLabels[scaleFamily][index],
      meaning: meanings[scaleFamily][index],
      reaction: reactions[index],
      score: {
        direction: signed,
        intensity,
        reliability: value === 3 ? 0.55 : value === 2 || value === 4 ? 0.82 : 0.95
      }
    };
  });
}

const channelScale: Record<MeasurementChannel, ScaleFamily> = {
  producer: 'automaticity',
  flexible: 'comfort',
  mask: 'frequency',
  threat: 'threat',
  receiver: 'relief',
  aspiration: 'recognition',
  dismissive: 'frequency',
  background: 'frequency'
};

const contextCycle: QuestionContext[] = [
  'new_situation', 'group', 'private', 'work', 'friendship', 'study', 'public', 'time_pressure',
  'decision', 'general', 'conflict', 'family', 'body', 'romance'
];

const promptBank: Record<SocionicsElement, Record<MeasurementChannel, string[]>> = {
  Ne: {
    producer: [
      'Saat obrolan mulai mentok, kepalaku cepat mencari jalan lain yang masih bisa dicoba.',
      'Ketika rencana awal batal, aku spontan melihat beberapa pintu samping yang sebelumnya tidak dibahas.'
    ],
    flexible: [
      'Kalau orang lain buntu, aku nyaman melempar kemungkinan baru tanpa harus memaksakan semuanya dipakai.',
      'Aku bisa bermain dengan beberapa pilihan untuk membantu situasi bergerak, lalu melepas yang tidak cocok.'
    ],
    mask: [
      'Di depan orang yang menuntut ide segar, aku bisa terlihat banyak opsi, walau di dalam rasanya agak akting.',
      'Saat harus tampil kreatif, aku bisa mengeluarkan alternatif, tetapi setelah itu rasanya cepat kosong.'
    ],
    threat: [
      'Ketika orang memaksaku melihat banyak kemungkinan sekaligus, aku bisa bingung dan ingin segera memilih satu saja.',
      'Jika semua pintu harus dibuka bersamaan, pikiranku mudah ramai dan tubuhku ingin menutup layar.'
    ],
    receiver: [
      'Aku merasa lega ketika seseorang menunjukkan pilihan lain yang tidak terpikir olehku tanpa membuatku merasa bodoh.',
      'Saat aku terkunci pada satu jalan, bantuan berupa opsi baru bisa membuat napasku lebih longgar.'
    ],
    aspiration: [
      'Aku senang ketika orang melihatku mampu menemukan kemungkinan baru, meski aku belum selalu stabil melakukannya.',
      'Ada rasa bangga kecil saat idemu yang tadinya liar ternyata membantu orang lain bergerak.'
    ],
    dismissive: [
      'Aku bisa melihat banyak opsi, tetapi sering menganggapnya belum penting sebelum ada alasan nyata untuk memilih.',
      'Kemungkinan baru boleh saja lewat, tapi aku tidak selalu merasa perlu mengejarnya satu per satu.'
    ],
    background: [
      'Tanpa banyak bicara, aku sering otomatis menyisakan jalan cadangan kalau situasi berubah.',
      'Aku kadang baru sadar sudah menyiapkan alternatif saat orang lain bertanya, “kalau ini gagal gimana?”'
    ]
  },
  Ni: {
    producer: [
      'Saat sesuatu baru dimulai, aku cepat menangkap arah yang mungkin sedang dibentuk oleh keadaan.',
      'Aku sering merasakan kapan suatu situasi belum matang, bahkan sebelum punya bukti lengkap.'
    ],
    flexible: [
      'Aku nyaman memakai perkiraan timing untuk membantu rencana orang lain tidak bergerak terlalu cepat atau terlambat.',
      'Jika suasana berubah pelan, aku bisa menyesuaikan langkah tanpa perlu menjelaskan semua firasatku.'
    ],
    mask: [
      'Ketika diminta terlihat visioner, aku bisa bicara soal arah besar, tapi rasanya seperti memakai jas yang agak kaku.',
      'Aku dapat membuat rencana jangka panjang di depan orang, namun setelahnya perlu waktu untuk merasa benar-benar yakin.'
    ],
    threat: [
      'Jika orang menuntutku memprediksi arah jauh ke depan, aku bisa tegang dan takut salah membaca momen.',
      'Pertanyaan “nanti jadinya ke mana?” kadang membuatku diam karena semua konsekuensi terasa kabur.'
    ],
    receiver: [
      'Aku lega ketika seseorang membantuku melihat urutan kejadian dan kapan sebaiknya bergerak.',
      'Saat pikiranku tersebar, orang yang menenangkan tempo dan arah sering membuatku lebih siap.'
    ],
    aspiration: [
      'Aku ingin dilihat sebagai orang yang punya timing bagus, meski kadang aku baru yakin setelah kejadian lewat.',
      'Pujian karena membaca arah dengan tepat terasa menempel lama di kepalaku.'
    ],
    dismissive: [
      'Aku bisa membayangkan konsekuensi panjang, tetapi sering merasa lebih baik tidak membesar-besarkannya.',
      'Aku menangkap arah perubahan, lalu menyimpannya saja karena tidak semua orang perlu mendengar versiku.'
    ],
    background: [
      'Di latar, aku sering menunggu momen yang pas tanpa merasa perlu menyebutnya strategi.',
      'Aku kadang mengubah langkah kecil karena ritme keadaan terasa bergeser, sebelum orang lain sadar.'
    ]
  },
  Se: {
    producer: [
      'Saat keadaan perlu keputusan nyata, tubuhku cepat ingin mengambil posisi dan menghentikan tarik-ulur.',
      'Kalau batasku dilanggar, aku spontan merasa harus menegaskan ruangku.'
    ],
    flexible: [
      'Aku nyaman memberi dorongan tegas ketika situasi memang butuh gerak, lalu menurunkannya saat sudah cukup.',
      'Tekanan langsung bisa kupakai sebagai alat, bukan selalu sebagai pertarungan pribadi.'
    ],
    mask: [
      'Di tempat yang keras, aku bisa memasang wajah tegas, walau setelahnya rasanya menguras.',
      'Aku bisa terlihat tidak gentar saat harus maju, tetapi di dalam ada rasa sedang memaksa diri.'
    ],
    threat: [
      'Konfrontasi mendadak mudah membuat tubuhku kaku, seperti belum tahu harus maju atau mundur.',
      'Ketika seseorang menekan terlalu langsung, aku bisa diam lama lalu menyesal karena tidak membalas tepat waktu.'
    ],
    receiver: [
      'Aku lega ketika orang lain bisa mengambil alih tekanan nyata dan membuat batas situasi lebih jelas.',
      'Saat keadaan terlalu mendesak, dukungan yang tegas bisa membuatku merasa tidak sendirian.'
    ],
    aspiration: [
      'Aku ingin diakui mampu berani dan tegas, walau tidak selalu nyaman menjadi orang paling depan.',
      'Saat orang percaya aku bisa mengambil posisi, ada bagian diriku yang langsung ingin membuktikannya.'
    ],
    dismissive: [
      'Aku bisa menekan keadaan kalau perlu, tetapi tidak selalu menganggap adu kuat sebagai hal penting.',
      'Aku melihat siapa yang punya daya dorong, lalu sering memilih tidak ikut bermain kecuali perlu.'
    ],
    background: [
      'Tanpa banyak bicara, aku bisa menjaga batas praktis agar orang tidak melewati garis yang jelas.',
      'Aku sering baru sadar sudah membuat keadaan lebih aman dengan berdiri, menatap, atau mengambil alih kecil.'
    ]
  },
  Si: {
    producer: [
      'Aku cepat menangkap kalau ruangan, makanan, suhu, atau ritme mulai tidak enak dihuni.',
      'Saat tubuh mulai memberi sinyal, aku spontan ingin menata ulang keadaan agar lebih nyaman.'
    ],
    flexible: [
      'Aku nyaman menyesuaikan ritme, tempat, atau cara kerja supaya orang bisa bertahan lebih lama.',
      'Kenyamanan kecil bisa kupakai sebagai alat untuk membuat kegiatan lebih manusiawi.'
    ],
    mask: [
      'Aku bisa tampak sangat memperhatikan detail nyaman, tetapi kadang itu kulakukan karena takut dinilai tidak peka.',
      'Saat jadi tuan rumah, aku bisa sibuk memastikan semuanya enak, meski tubuhku sendiri mulai capek.'
    ],
    threat: [
      'Tuntutan menjaga kenyamanan semua orang bisa membuatku tegang dan takut ada yang tidak puas.',
      'Jika tubuhku dipaksa tetap stabil saat keadaan kacau, aku mudah kehilangan arah kecil.'
    ],
    receiver: [
      'Aku sangat lega ketika ada orang yang memperhatikan makan, istirahat, suhu, atau jeda tanpa harus kuminta.',
      'Bantuan yang membuat tubuhku kembali nyaman sering terasa lebih berarti daripada nasihat panjang.'
    ],
    aspiration: [
      'Aku ingin dihargai saat bisa membuat suasana lebih enak dan tidak menyiksa tubuh orang.',
      'Pujian karena membuat ruang terasa nyaman bisa membuatku merasa benar-benar berguna.'
    ],
    dismissive: [
      'Aku tahu cara membuat keadaan lebih nyaman, tetapi sering menganggap itu detail kecil yang tidak perlu dibahas.',
      'Aku bisa merawat ritme tubuh, tapi tidak selalu mau menjadikannya pusat percakapan.'
    ],
    background: [
      'Di latar, aku sering otomatis menyesuaikan cahaya, posisi duduk, atau jeda agar keadaan lebih enak.',
      'Orang kadang baru sadar setelah aku pergi bahwa banyak detail nyaman tadi diam-diam kuurus.'
    ]
  },
  Te: {
    producer: [
      'Saat masalah muncul, aku cepat mencari cara yang benar-benar bekerja, bukan sekadar terdengar bagus.',
      'Aku spontan bertanya apa buktinya, apa hasilnya, dan cara mana yang paling hemat tenaga.'
    ],
    flexible: [
      'Aku nyaman memakai data, daftar, atau prosedur praktis untuk membantu orang mencapai hasil.',
      'Kalau cara lama macet, aku bisa mengganti metode selama hasilnya lebih jelas.'
    ],
    mask: [
      'Di tempat yang menuntut produktif, aku bisa tampil sangat teratur, walau batinku merasa sedang mengejar standar luar.',
      'Aku bisa bicara angka dan target saat diperlukan, tetapi kadang rasanya seperti sedang menjaga citra kompeten.'
    ],
    threat: [
      'Jika diminta membuktikan hasil dengan cepat, aku bisa panik dan merasa semua usahaku kurang valid.',
      'Pertanyaan tentang angka, output, atau efisiensi kadang membuatku kaku ketika belum punya pegangan.'
    ],
    receiver: [
      'Aku lega saat seseorang menunjukkan cara praktis yang sudah terbukti, tanpa membuatku merasa tidak mampu.',
      'Bantuan berupa langkah kerja yang jelas sering langsung menurunkan beban di kepalaku.'
    ],
    aspiration: [
      'Aku ingin diakui sebagai orang yang bisa menghasilkan sesuatu yang nyata dan berguna.',
      'Ketika hasil kerjaku terlihat efektif, aku merasa ingin mengulang pola itu dengan lebih rapi.'
    ],
    dismissive: [
      'Aku bisa mencari cara paling efisien, tetapi kadang menganggap pembicaraan hasil terlalu kering untuk dibesar-besarkan.',
      'Aku tahu mana yang bekerja, lalu sering langsung pakai saja tanpa banyak menjualnya.'
    ],
    background: [
      'Tanpa ribut, aku sering memperbaiki alur agar pekerjaan lebih cepat selesai.',
      'Aku kadang sudah menghitung cara hemat tenaga sebelum orang lain selesai mendiskusikan niatnya.'
    ]
  },
  Ti: {
    producer: [
      'Saat penjelasan berantakan, aku cepat ingin merapikan definisi dan hubungan antarbagian.',
      'Aku spontan mencari aturan di balik keadaan supaya semuanya tidak terasa acak.'
    ],
    flexible: [
      'Aku nyaman memakai kerangka logis untuk membantu orang memahami masalah tanpa harus menang debat.',
      'Struktur bisa kupakai sebagai alat bantu, lalu kulepas ketika keadaan sudah cukup jelas.'
    ],
    mask: [
      'Di ruang yang menuntut jawaban sangat rapi, aku bisa terlihat logis, tapi takut ada celah yang terlihat.',
      'Aku bisa menyusun argumen formal saat diminta, walau setelahnya kepalaku terasa terlalu penuh.'
    ],
    threat: [
      'Jika orang menekan definisi dan konsistensi terlalu keras, aku bisa freeze karena takut salah langkah.',
      'Debat yang meminta presisi seketika kadang membuat mulutku diam sebelum pikiranku selesai.'
    ],
    receiver: [
      'Aku lega ketika seseorang merapikan aturan main dan menjelaskan batas masalah dengan tenang.',
      'Saat semua terasa campur aduk, struktur yang jelas dari orang lain membuatku bisa bernapas.'
    ],
    aspiration: [
      'Aku ingin diakui mampu berpikir runtut, meski kadang masih merapikan kerangka di belakang layar.',
      'Pujian karena penjelasanku masuk akal terasa sangat memuaskan.'
    ],
    dismissive: [
      'Aku bisa melihat inkonsistensi, tetapi sering merasa tidak semua celah perlu diperdebatkan.',
      'Aku paham struktur masalah, lalu memilih diam karena membahasnya terlalu detail terasa melelahkan.'
    ],
    background: [
      'Di latar, aku sering otomatis menyusun kategori supaya keputusan orang lain tidak saling tabrak.',
      'Aku kadang membetulkan urutan logika tanpa merasa sedang melakukan hal besar.'
    ]
  },
  Fe: {
    producer: [
      'Saat suasana ruangan turun, aku cepat menangkap nadanya dan ingin mengubah ritme percakapan.',
      'Aku spontan tahu kapan perlu menghangatkan, menenangkan, atau membuat orang tertawa sebentar.'
    ],
    flexible: [
      'Aku nyaman mengatur ekspresi dan nada untuk membantu kelompok bergerak lebih enak.',
      'Suasana sosial bisa kupakai sebagai alat, bukan selalu harus menjadi pusat diriku.'
    ],
    mask: [
      'Aku bisa tampil ramah dan ekspresif saat dituntut, tetapi setelahnya rasanya seperti baterai habis.',
      'Di keramaian, aku bisa mengikuti nada kelompok meski dalam hati merasa sedang memainkan peran.'
    ],
    threat: [
      'Ketika orang menuntutku membaca suasana dan bereaksi tepat, aku bisa kaku dan takut salah nada.',
      'Ledakan emosi kelompok bisa membuatku diam karena tidak tahu ekspresi mana yang aman.'
    ],
    receiver: [
      'Aku lega ketika seseorang bisa mencairkan suasana tanpa memaksaku tampil duluan.',
      'Orang yang membawa energi hangat bisa membuatku merasa lebih aman berada di kelompok.'
    ],
    aspiration: [
      'Aku ingin dihargai ketika berhasil membuat suasana lebih hidup atau lebih tenang.',
      'Ketika ekspresiku diterima, ada rasa berani yang muncul untuk lebih terbuka.'
    ],
    dismissive: [
      'Aku bisa membaca suasana, tetapi sering menganggap drama sosial tidak perlu dibesarkan.',
      'Aku tahu kapan orang sedang memainkan nada tertentu, lalu memilih tidak ikut larut.'
    ],
    background: [
      'Tanpa terasa spesial, aku sering mengubah nada suara agar orang lain lebih nyaman bicara.',
      'Aku kadang sudah menurunkan ketegangan ruangan sebelum orang sadar suasananya tadi berat.'
    ]
  },
  Fi: {
    producer: [
      'Saat bertemu orang, aku cepat menangkap jarak batin: siapa dekat, siapa belum aman, siapa perlu batas.',
      'Aku spontan membaca apakah sebuah tindakan terasa tulus, pantas, atau sudah melewati garis.'
    ],
    flexible: [
      'Aku nyaman menjaga kedekatan dan batas personal agar hubungan tidak terasa dipaksa.',
      'Aku bisa menyesuaikan jarak dengan orang lain tanpa harus membuat semuanya dramatis.'
    ],
    mask: [
      'Saat harus terlihat sangat peduli, aku bisa melakukannya, tapi takut rasanya tidak benar-benar tulus.',
      'Aku bisa menjaga sopan santun relasional di depan orang, walau di dalam sedang mengukur jarak aman.'
    ],
    threat: [
      'Jika orang menuntutku menentukan rasa percaya atau loyalitas seketika, aku bisa tegang dan menutup diri.',
      'Konflik yang menyeret kedekatan personal sering membuatku takut salah menilai hati orang.'
    ],
    receiver: [
      'Aku lega saat seseorang menjaga batas dan kepercayaan dengan halus tanpa banyak menuntut.',
      'Perlakuan yang terasa tulus dan tidak memaksa sering membuatku lebih mudah membuka diri.'
    ],
    aspiration: [
      'Aku ingin dikenal sebagai orang yang bisa menjaga hubungan dengan pantas dan setia.',
      'Pujian karena aku bisa membaca batas personal terasa dalam, meski aku pura-pura biasa saja.'
    ],
    dismissive: [
      'Aku bisa membaca jarak batin, tetapi sering tidak mau membahasnya karena terasa terlalu personal.',
      'Aku tahu siapa yang terasa dekat atau jauh, lalu menyimpannya tanpa perlu membuat pengumuman.'
    ],
    background: [
      'Di latar, aku sering otomatis menjaga batas agar hubungan tidak berubah jadi aneh.',
      'Aku kadang melindungi kepercayaan seseorang tanpa merasa perlu diberi kredit.'
    ]
  }
};

function psychometrics(elementIndex: number, channelIndex: number, variant: number) {
  return {
    ambiguity: Number((0.18 + ((elementIndex + variant) % 4) * 0.04).toFixed(2)),
    intensity: Number((0.56 + ((channelIndex + variant) % 4) * 0.08).toFixed(2)),
    discrimination: Number((0.72 + ((elementIndex + channelIndex + variant) % 3) * 0.07).toFixed(2)),
    socialDesirability: Number((0.22 + ((channelIndex + variant) % 5) * 0.05).toFixed(2)),
    extremityRisk: Number((0.18 + ((elementIndex + channelIndex + variant) % 4) * 0.04).toFixed(2))
  };
}

const elements = Object.keys(promptBank) as SocionicsElement[];
const channels = Object.keys(promptBank.Ne) as MeasurementChannel[];

export const CORE_QUESTIONS: QuestionItem[] = elements.flatMap((element, elementIndex) =>
  channels.flatMap((channel, channelIndex) =>
    promptBank[element][channel].map((statement, variant): QuestionItem => {
      const context = contextCycle[(elementIndex * 8 + channelIndex + variant * 5) % contextCycle.length];
      const scaleFamily = channelScale[channel];
      return {
        id: `core_${element.toLowerCase()}_${channel}_${variant + 1}`,
        kind: 'core',
        element,
        channel,
        context,
        scaleFamily,
        statementOriginal: statement,
        statementCasual: statement,
        responseFocus: `${context}:${channel}:${element}:v${variant + 1}`,
        options: makeOptions(scaleFamily),
        psychometrics: psychometrics(elementIndex, channelIndex, variant),
        version: VERSION
      };
    })
  )
);
