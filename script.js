/**
 * JavaScript Interactive Script
 * Portfolio of Muhammad Ad Dairabiy (Siswa SMAN 70 Jakarta Kelas X-D)
 * Modern, Authentic, Responsive & Anti AI-Slop
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. DATA STORE: Projects Information (100% Authentic Student Data)
  // -------------------------------------------------------------------------
  const studentProjects = {
    1: {
      id: 1,
      title: 'Proyek Video Edukatif Monas',
      category: 'School • Creative',
      tags: ['Video Edukasi', 'Sejarah', 'Kerja Sama Tim'],
      summary: 'Proyek video dokumenter dan edukasi sejarah mengenai Monumen Nasional (Monas) Jakarta yang dikerjakan bersama teman sekelompok.',
      about: 'Proyek ini bertujuan mengenalkan sejarah perjuangan bangsa, arsitektur cawan, dan simbol lidah api Monas melalui tayangan video yang informatif.',
      role: 'Mencari informasi materi sejarah, menyusun poin naskah materi, dan membantu menentukan konsep alur video bersama kelompok.',
      whatIDid: 'Mengumpulkan bahan riset sejarah Monas, berdiskusi mengenai urutan scene video, dan membantu rekan satu tim saat proses pengambilan dan penyusunan materi.',
      tools: 'Materi riset sejarah, smartphone, dan aplikasi video editor dasar.',
      learnings: [
        'Belajar pentingnya kerja sama kelompok dan pembagian tugas yang adil.',
        'Belajar menyederhanakan informasi sejarah agar mudah dipahami penonton.',
        'Mengenal dasar-dasar alur pembuatan video edukasi.'
      ],
      image: 'assets/projects/monas/monas-video-preview.jpg',
      imageCaption: 'Dokumentasi Video Edukatif Monas',
      imageAlt: 'Dokumentasi Video Edukatif Monumen Nasional Jakarta',
      secondaryLink: {
        url: 'https://youtu.be/DpoM_Qq4wT0',
        label: 'Tonton Video di YouTube'
      },
      quizKey: 'monas'
    },
    2: {
      id: 2,
      title: 'Infografis Pencemaran Lingkungan',
      category: 'School • Creative',
      tags: ['Infografis', 'Canva', 'Sains Lingkungan', 'Prinsip 3R'],
      summary: 'Desain infografis visual mengenai berbagai jenis pencemaran lingkungan (udara, air, tanah), dampaknya bagi kehidupan, dan solusi nyata 3R.',
      about: 'Tugas mata pelajaran sains/lingkungan untuk menyampaikan bahaya polusi dan mengajak teman-teman memilah sampah melalui media visual yang menarik.',
      role: 'Membantu proyek secara keseluruhan, terutama mengerjakan bagian solusi ramah lingkungan dan membantu membawakan presentasi di depan kelas.',
      whatIDid: 'Mendesain bagian solusi dan pemilahan sampah di Canva, memilih ikon yang sesuai, dan menyusun poin presentasi bersama anggota kelompok.',
      tools: 'Canva (aplikasi desain grafis).',
      learnings: [
        'Melatih kemampuan presentasi dan berbicara di hadapan teman sekelas.',
        'Memahami penerapan prinsip 3R (Reduce, Reuse, Recycle) untuk mengurangi sampah.',
        'Belajar membuat tata letak visual infografis yang seimbang dan nyaman dibaca.'
      ],
      image: 'assets/projects/pollution/pollution-infographic.jpg',
      imageCaption: 'Infografis Keanekaragaman Hayati & Pencemaran Lingkungan',
      imageAlt: 'Infografis Keanekaragaman Hayati dan Ancaman Pencemaran Lingkungan',
      quizKey: 'pollution'
    },
    3: {
      id: 3,
      title: 'Presentasi Teknologi Notion AI',
      category: 'School • Technology',
      tags: ['Notion AI', 'Kecerdasan Buatan', 'Slide Presentasi', 'Teknologi'],
      summary: 'Presentasi mengenai pemanfaatan alat bantu Notion AI untuk meningkatkan produktivitas belajar siswa, seperti mencatat dan merangkum materi.',
      about: 'Di proyek ini saya membuat presentasi tentang Notion AI dan belajar bagaimana AI bisa digunakan untuk membantu kegiatan belajar sehari-hari.',
      role: 'Menyusun materi presentasi tentang fitur Notion AI, menyiapkan slide, dan mempresentasikan materi tersebut di hadapan kelas.',
      whatIDid: 'Mengeksplorasi fitur-fitur Notion AI untuk mencatat dan merangkum, membuat materi penjelasan yang mudah dipahami, serta menjawab pertanyaan teman-teman saat sesi tanya jawab.',
      tools: 'Notion AI dan aplikasi slide presentasi.',
      learnings: [
        'Belajar bagaimana teknologi AI dapat dimanfaatkan secara bijak untuk mendukung aktivitas belajar.',
        'Menyadari bahwa informasi dari AI harus tetap diperiksa dan diverifikasi kebenarannya oleh manusia.',
        'Meningkatkan rasa percaya diri saat menjelaskan topik teknologi di depan kelas.'
      ],
      image: 'assets/projects/notion-ai/notion-slide-preview.jpg',
      imageCaption: 'Slide Presentasi Edukasi Memahami Notion AI',
      imageAlt: 'Slide Presentasi Edukasi Memahami Notion AI',
      quizKey: 'notion_ai'
    },
    4: {
      id: 4,
      title: 'Biografi Émile Durkheim',
      category: 'School • Creative',
      tags: ['Sosiologi', 'Karton & Fisik', 'Tokoh Klasik', 'Kerja Sama'],
      summary: 'Penyusunan media biografi tokoh sosiologi klasik Émile Durkheim dan teori fakta sosial yang ditulis dan dihias langsung di media karton fisik.',
      about: 'Tugas sosiologi untuk mempelajari riwayat hidup, konsep fakta sosial, dan pengaruh pemikiran Émile Durkheim terhadap masyarakat modern.',
      role: 'Mencari informasi materi, menyusun ringkasan, menuliskan bagian materi di atas karton, membuat dekorasi karton, dan melakukan presentasi kelompok.',
      whatIDid: 'Membaca referensi biografi Durkheim, menulis materi dengan spidol di atas lembaran karton, menghias layout visual karton secara manual, dan mempresentasikan hasilnya bersama tim.',
      tools: 'Karton, alat tulis (spidol, pena, penggaris), dan perlengkapan fisik pendukung tugas.',
      learnings: [
        'Memahami konsep dasar sosiologi dan pemikiran tokoh Émile Durkheim.',
        'Melatih kerja sama kelompok dalam mengerjakan media fisik bersama.',
        'Mengasah kreativitas penyusunan layout manual di atas media kertas/karton.'
      ],
      image: 'assets/projects/durkheim/durkheim-biography.jpg',
      imageCaption: 'Lembar Karton Biografi & Teori Émile Durkheim',
      imageAlt: 'Lembar Biografi dan Teori Sosiologi Émile Durkheim',
      quizKey: 'durkheim'
    },
    5: {
      id: 5,
      title: 'Kerajinan Daur Ulang',
      category: 'School • Creative',
      tags: ['Daur Ulang', 'Karton & Koran', 'Upcycling', 'Kreativitas'],
      summary: 'Karya produk bernilai guna dan estetis dari barang bekas yang dirakit bersama kelompok untuk memanfaatkan kembali limbah kertas/karton.',
      about: 'Proyek prakarya dan lingkungan hidup untuk mengubah barang bekas di sekitar menjadi produk yang bermanfaat serta mengedukasi pentingnya pemilahan sampah.',
      role: 'Mencari ide desain produk kerajinan, membuat produk bersama, memotong dan merakit bahan, serta melakukan presentasi hasil kerajinan.',
      whatIDid: 'Mengumpulkan bahan bekas yang bersih, memotong karton dan koran sesuai pola, merekatkan dengan lem, menyusun komponen hingga jadi produk utuh, dan memamerkannya di kelas.',
      tools: 'Karton bekas, koran bekas, gunting, dan lem.',
      learnings: [
        'Belajar cara memanfaatkan barang bekas di sekitar menjadi barang yang bernilai guna.',
        'Mengasah kreativitas dan ketelitian dalam merakit bahan secara manual.',
        'Melatih kekompakan kerja sama kelompok dalam menyelesaikan produk tepat waktu.'
      ],
      image: 'assets/projects/recycling/recycling-project.jpg',
      imageCaption: 'Dokumentasi Proyek Kerajinan Daur Ulang & Pilah Sampah',
      imageAlt: 'Dokumentasi Edukasi dan Pemilahan Sampah Proyek Daur Ulang',
      quizKey: 'recycling'
    }
  };

  // -------------------------------------------------------------------------
  // 2. DATA STORE: Learning Journey (5 Authentic Steps)
  // -------------------------------------------------------------------------
  const journeyData = {
    1: {
      stepBadge: 'Tahap 1: SMP',
      stepIndicator: 'Langkah 1 dari 5',
      title: 'Awal Mula Tertarik pada Sains & Komputer di SMP',
      desc: 'Di bangku SMPN 68 Jakarta Selatan, rasa penasaran saya mulai tumbuh melalui kegiatan ekstrakurikuler Klub IPA. Di sana saya belajar mengamati fenomena sekitar, melatih logika berpikir ilmiah, dan mulai sering menggunakan komputer untuk mengerjakan tugas sekolah.',
      takeaway: 'Klub IPA SMPN 68 Jaksel • Melatih rasa ingin tahu • Awal mula memakai komputer'
    },
    2: {
      stepBadge: 'Tahap 2: Masuk SMAN 70 Jakarta',
      stepIndicator: 'Langkah 2 dari 5',
      title: 'Memasuki Jenjang SMA Negeri 70 Jakarta (Kelas X-D)',
      desc: 'Memulai masa SMA di kelas X-D dengan lingkungan baru. Saya mulai aktif beradaptasi dengan tugas-tugas akademik, belajar bekerja sama dalam kelompok, serta mengeksplorasi penggunaan software seperti Canva dan presentasi untuk tugas kelas.',
      takeaway: 'Kelas X-D SMAN 70 Jakarta • Adaptasi akademik • Kolaborasi tugas kelompok'
    },
    3: {
      stepBadge: 'Tahap 3: Eksplorasi Teknologi',
      stepIndicator: 'Langkah 3 dari 5',
      title: 'Mulai Tertarik pada AI & Perkakas Digital',
      desc: 'Perkembangan AI yang pesat membuat saya sangat penasaran. Saya mulai mencoba berbagai alat bantu seperti Notion AI untuk membantu mengorganisir catatan belajar, merangkum materi pelajaran, dan mencari ide untuk tugas kreatif.',
      takeaway: 'Eksplorasi Notion AI • Pemanfaatan AI untuk belajar • Meningkatkan efisiensi'
    },
    4: {
      stepBadge: 'Tahap 4: Proyek Sekolah Nyata',
      stepIndicator: 'Langkah 4 dari 5',
      title: 'Mengerjakan Berbagai Proyek Tugas Sekolah',
      desc: 'Mempraktikkan apa yang dipelajari ke dalam karya nyata: mulai dari video edukasi Monas, infografis pencemaran lingkungan, presentasi Notion AI, biografi karton sosiologi, hingga kerajinan daur ulang dari barang bekas.',
      takeaway: '5 Proyek Sekolah Tuntas • Melatih presentasi & desain • Pengalaman kerja kelompok'
    },
    5: {
      stepBadge: 'Tahap 5: Belajar Coding & Masa Depan',
      stepIndicator: 'Langkah 5 dari 5',
      title: 'Mulai Belajar Dasar Coding & Mengeksplorasi Minat',
      desc: 'Terpacu oleh tugas ekstrakurikuler Klub Robotik, saya mulai belajar dasar-dasar coding dan pembuatan website. Saya ingin terus mengeksplorasi bidang teknologi untuk mempersiapkan diri sebelum melanjutkan ke bangku kuliah nanti.',
      takeaway: 'Tugas Klub Robotik • Mulai belajar dasar coding • Eksplorasi bidang teknologi masa depan'
    }
  };

  // -------------------------------------------------------------------------
  // 3. DATA STORE: Dedicated Project Quizzes (Tepat 3 Soal Tiap Proyek)
  // -------------------------------------------------------------------------
  const projectQuizzes = {
    monas: {
      title: 'Kuis Singkat — Proyek Video Monas',
      subtitle: '3 pertanyaan berdasarkan isi materi dan proyek video edukatif Monas',
      questions: [
        {
          q: 'Berapa tinggi Monumen Nasional (Monas) Jakarta?',
          options: ['77 meter', '100 meter', '132 meter', '150 meter'],
          correct: 2,
          feedback: 'Tepat! Monumen Nasional (Monas) memiliki tinggi 132 meter.'
        },
        {
          q: 'Monas dibangun untuk mengenang peristiwa apa?',
          options: [
            'Perjuangan kemerdekaan Indonesia',
            'Pembangunan kota Jakarta',
            'Deklarasi ASEAN',
            'Hari Sumpah Pemuda'
          ],
          correct: 0,
          feedback: 'Benar! Monas dibangun untuk mengenang perjuangan kemerdekaan bangsa Indonesia.'
        },
        {
          q: 'Bagian lidah api pada puncak Monas dilapisi oleh material apa?',
          options: ['Emas murni', 'Perak', 'Tembaga', 'Aluminium'],
          correct: 0,
          feedback: 'Tepat! Bagian lidah api kemerdekaan di puncak Monas dilapisi oleh emas murni.'
        }
      ]
    },
    pollution: {
      title: 'Kuis Singkat — Pencemaran Lingkungan',
      subtitle: '3 pertanyaan berdasarkan materi infografis lingkungan & solusi 3R',
      questions: [
        {
          q: 'Apa kepanjangan dari prinsip 3R dalam pengelolaan sampah?',
          options: [
            'Reduce, Reuse, Recycle',
            'Remove, Repair, Return',
            'Reduce, Repair, Replace',
            'Reuse, Remove, Recycle'
          ],
          correct: 0,
          feedback: 'Benar! 3R adalah singkatan dari Reduce, Reuse, dan Recycle.'
        },
        {
          q: 'Asap dari kendaraan bermotor dan pabrik merupakan contoh dari pencemaran...',
          options: ['Udara', 'Air', 'Tanah', 'Suara'],
          correct: 0,
          feedback: 'Tepat! Asap knalpot kendaraan dan cerobong pabrik merupakan pencemaran udara.'
        },
        {
          q: 'Mengapa sampah anorganik seperti plastik berbahaya jika dibuang sembarangan?',
          options: [
            'Karena cepat hilang dengan sendirinya',
            'Karena sangat sulit terurai secara alami dan mencemari tanah serta air',
            'Karena membuat tanah menjadi terlalu subur',
            'Karena menghasilkan oksigen berlebihan'
          ],
          correct: 1,
          feedback: 'Benar! Sampah plastik membutuhkan puluhan hingga ratusan tahun untuk terurai.'
        }
      ]
    },
    notion_ai: {
      title: 'Kuis Singkat — Presentasi Notion AI',
      subtitle: '3 pertanyaan seputar presentasi kecerdasan buatan & Notion AI',
      questions: [
        {
          q: 'Notion AI merupakan alat bantu produktivitas yang berbasis pada teknologi apa?',
          options: ['Artificial Intelligence (AI)', 'Mesin pencari web', 'Game edukasi', 'Sistem operasi komputer'],
          correct: 0,
          feedback: 'Tepat! Notion AI adalah fitur produktivitas berbasis Artificial Intelligence (Kecerdasan Buatan).'
        },
        {
          q: 'Salah satu manfaat utama Notion AI bagi kegiatan belajar siswa adalah...',
          options: [
            'Membantu mencatat, merangkum, dan mengorganisir ide',
            'Menggantikan seluruh kehadiran siswa di kelas',
            'Memperbaiki perangkat keras komputer yang rusak',
            'Mengirimkan surat fisik secara otomatis'
          ],
          correct: 0,
          feedback: 'Benar! Notion AI sangat berguna untuk membantu mencatat, merangkum materi, dan mengelola tugas.'
        },
        {
          q: 'Mengapa informasi atau teks yang dihasilkan oleh AI tetap perlu diperiksa kembali oleh manusia?',
          options: [
            'Karena AI selalu 100% salah',
            'Karena informasi dari AI tetap perlu diverifikasi kebenarannya oleh manusia',
            'Karena AI tidak bisa menulis dalam bahasa Indonesia',
            'Karena AI hanya bisa digunakan oleh orang dewasa'
          ],
          correct: 1,
          feedback: 'Tepat! AI adalah alat bantu, sehingga manusia tetap perlu memverifikasi dan memeriksa hasilnya.'
        }
      ]
    },
    durkheim: {
      title: 'Kuis Singkat — Biografi Émile Durkheim',
      subtitle: '3 pertanyaan seputar tokoh sosiologi Émile Durkheim & tugas fisik karton',
      questions: [
        {
          q: 'Émile Durkheim dikenal sebagai salah satu tokoh penting dalam perkembangan ilmu apa?',
          options: ['Sosiologi', 'Biologi Molekuler', 'Astronomi', 'Teknik Mesin'],
          correct: 0,
          feedback: 'Tepat! Émile Durkheim adalah salah satu tokoh pendiri utama ilmu sosiologi.'
        },
        {
          q: 'Salah satu konsep teori sosiologi yang sangat terkenal dari Émile Durkheim adalah...',
          options: ['Fakta Sosial (Social Facts)', 'Hukum Gravitasi', 'Teori Relativitas', 'Hukum Termodinamika'],
          correct: 0,
          feedback: 'Benar! Konsep fakta sosial (social facts) merupakan sumbangsih pemikiran besar Durkheim.'
        },
        {
          q: 'Media apa yang digunakan untuk membuat tugas biografi Émile Durkheim ini?',
          options: [
            'Karton, alat tulis, dan perlengkapan fisik',
            'Aplikasi 3D Modeling Virtual Reality',
            'Aplikasi Pemrograman Database',
            'Kamera Drone Profesional'
          ],
          correct: 0,
          feedback: 'Tepat! Proyek ini dibuat secara manual menggunakan karton, spidol/alat tulis, dan dekorasi fisik.'
        }
      ]
    },
    recycling: {
      title: 'Kuis Singkat — Kerajinan Daur Ulang',
      subtitle: '3 pertanyaan seputar kerajinan dari barang bekas & pemanfaatan limbah',
      questions: [
        {
          q: 'Bahan utama apa yang digunakan dalam proyek kerajinan daur ulang ini?',
          options: [
            'Karton bekas dan koran bekas',
            'Besi baja dan semen',
            'Kaca kristal impor',
            'Kayu gelondongan utuh'
          ],
          correct: 0,
          feedback: 'Benar! Proyek ini memanfaatkan bahan bekas ramah lingkungan yaitu karton dan koran bekas.'
        },
        {
          q: 'Apa tujuan utama dari kegiatan daur ulang (recycling)?',
          options: [
            'Mengurangi jumlah sampah dan memanfaatkan kembali barang bekas',
            'Menambah timbunan limbah di tempat pembuangan',
            'Membakar semua sampah di ruang terbuka',
            'Membuang limbah ke sungai'
          ],
          correct: 0,
          feedback: 'Tepat! Daur ulang bertujuan mengurangi limbah dan memberi nilai guna baru pada barang bekas.'
        },
        {
          q: 'Apa hal utama yang dipelajari selama proses perakitan kerajinan bersama teman sekelompok?',
          options: [
            'Kreativitas dan kerja sama tim dalam menyelesaikan produk',
            'Cara merakit roket luar angkasa',
            'Cara membeli barang baru yang mahal',
            'Cara menghindari kerja kelompok'
          ],
          correct: 0,
          feedback: 'Benar! Proyek ini melatih kreativitas pemanfaatan barang bekas dan kerja sama tim.'
        }
      ]
    }
  };

  // -------------------------------------------------------------------------
  // 4. DATA STORE: General Quiz Tentang Saya (Tepat 5 Soal Nyata)
  // -------------------------------------------------------------------------
  const generalQuizData = {
    title: 'Kuis Tentang Saya (5 Soal)',
    subtitle: 'Uji seberapa kenal Anda dengan profil dan cerita Muhammad Ad Dairabiy!',
    questions: [
      {
        q: 'Di manakah Muhammad Ad Dairabiy bersekolah saat ini?',
        options: [
          'SMA Negeri 70 Jakarta (Kelas X-D)',
          'SMA Negeri 8 Jakarta',
          'SMP Negeri 68 Jakarta Selatan',
          'SMA Negeri 28 Jakarta'
        ],
        correct: 0,
        feedback: 'Tepat! Dairabiy adalah siswa kelas X-D di SMA Negeri 70 Jakarta.'
      },
      {
        q: 'Apa alasan awal dibuatnya website portfolio ini?',
        options: [
          'Tugas dari ekstrakurikuler Klub Robotik SMAN 70',
          'Tugas akhir kelulusan sekolah',
          'Mengikuti turnamen esports',
          'Melamar pekerjaan profesional'
        ],
        correct: 0,
        feedback: 'Benar! Awalnya tugas ekskul Klub Robotik, lalu dikembangkan untuk persiapan kuliah dan masa depan.'
      },
      {
        q: 'Apa fokus minat teknologi terbesar yang paling menarik perhatian Dairabiy?',
        options: [
          'Kecerdasan Buatan (AI) dan Teknologi',
          'Perbaikan Mesin Truk Berat',
          'Pertanian Tradisional',
          'Manajemen Saham Perbankan'
        ],
        correct: 0,
        feedback: 'Tepat! Dairabiy sangat tertarik pada perkembangan AI dan dunia teknologi digital.'
      },
      {
        q: 'Manakah di antara aktivitas berikut yang menjadi salah satu hobi santai Dairabiy?',
        options: [
          'Mendengarkan musik, desain, dan video editing',
          'Balap mobil sirkuit internasional',
          'Menyelam gua bawah tanah',
          'Terjun payung ekstrem'
        ],
        correct: 0,
        feedback: 'Benar! Selain suka desain dan video editing, Dairabiy suka mendengarkan musik saat santai.'
      },
      {
        q: 'Bagaimana status atau tingkat kemampuan coding Dairabiy saat ini?',
        options: [
          'Masih pemula dan sedang belajar dasar-dasar coding',
          'Senior Software Architect 10 tahun pengalaman',
          'Expert AI Specialist internasional',
          'Master Developer Silicon Valley'
        ],
        correct: 0,
        feedback: 'Tepat! Dairabiy adalah siswa yang masih pemula dalam coding dan terus belajar hal-hal baru.'
      }
    ]
  };

  // -------------------------------------------------------------------------
  // 5. SCROLL PROGRESS INDICATOR
  // -------------------------------------------------------------------------
  const progressBar = document.getElementById('scroll-progress-bar');
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });

  // -------------------------------------------------------------------------
  // 6. HERO DYNAMIC TYPING EFFECT
  // -------------------------------------------------------------------------
  const typingRole = document.getElementById('typing-role');
  const studentPhases = [
    'Siswa Kelas X-D SMAN 70 Jakarta',
    'Masih belajar coding & pemrograman',
    'Tertarik eksplorasi AI & teknologi',
    'Suka desain grafis & video editing'
  ];

  let currentPhaseIdx = 0;
  let charIdx = 0;
  let isBackspacing = false;
  const typeSpeed = 75;
  const backSpeed = 40;
  const holdTime = 2200;

  function handleTyping() {
    if (!typingRole) return;
    const text = studentPhases[currentPhaseIdx];

    if (isBackspacing) {
      typingRole.textContent = text.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typingRole.textContent = text.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isBackspacing ? backSpeed : typeSpeed;

    if (!isBackspacing && charIdx === text.length) {
      delay = holdTime;
      isBackspacing = true;
    } else if (isBackspacing && charIdx === 0) {
      isBackspacing = false;
      currentPhaseIdx = (currentPhaseIdx + 1) % studentPhases.length;
      delay = 300;
    }

    setTimeout(handleTyping, delay);
  }

  handleTyping();

  // -------------------------------------------------------------------------
  // 7. LEARNING JOURNEY STEPPER INTERACTION
  // -------------------------------------------------------------------------
  const journeyNodes = document.querySelectorAll('.j-node');
  const jBadgeStep = document.getElementById('j-badge-step');
  const jStepIndicator = document.getElementById('j-step-indicator');
  const jDisplayTitle = document.getElementById('j-display-title');
  const jDisplayText = document.getElementById('j-display-text');
  const jTakeawayVal = document.getElementById('j-takeaway-val');
  const jDisplayCard = document.getElementById('journey-display-card');

  journeyNodes.forEach(node => {
    node.addEventListener('click', () => {
      const step = node.getAttribute('data-step');
      const data = journeyData[step];
      if (!data) return;

      journeyNodes.forEach(n => {
        n.classList.remove('active');
        n.setAttribute('aria-selected', 'false');
      });
      node.classList.add('active');
      node.setAttribute('aria-selected', 'true');

      if (jDisplayCard) {
        jDisplayCard.style.animation = 'none';
        void jDisplayCard.offsetWidth; // trigger reflow
        jDisplayCard.style.animation = 'journey-fade 0.35s ease-out';
      }

      if (jBadgeStep) jBadgeStep.textContent = data.stepBadge;
      if (jStepIndicator) jStepIndicator.textContent = data.stepIndicator;
      if (jDisplayTitle) jDisplayTitle.textContent = data.title;
      if (jDisplayText) jDisplayText.textContent = data.desc;
      if (jTakeawayVal) jTakeawayVal.textContent = data.takeaway;
    });
  });

  // -------------------------------------------------------------------------
  // 8. SKILLS INTERACTION & TOOLTIP CALLOUT
  // -------------------------------------------------------------------------
  const skillBadges = document.querySelectorAll('.skill-badge-item');
  const calloutTitle = document.getElementById('callout-title');
  const calloutDesc = document.getElementById('callout-desc');

  skillBadges.forEach(badge => {
    const desc = badge.getAttribute('data-desc');
    const name = badge.querySelector('.skill-name')?.textContent || 'Kemampuan';

    const updateSkillCallout = () => {
      skillBadges.forEach(b => b.classList.remove('selected'));
      badge.classList.add('selected');
      if (calloutTitle) calloutTitle.textContent = name;
      if (calloutDesc && desc) calloutDesc.textContent = desc;
    };

    badge.addEventListener('mouseenter', updateSkillCallout);
    badge.addEventListener('click', updateSkillCallout);
  });

  // -------------------------------------------------------------------------
  // 9. PROJECT FILTER SYSTEM
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter').toLowerCase();

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category').toLowerCase();
        if (filterVal === 'all' || cat.includes(filterVal)) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 10. PROJECT MODAL & LIGHTBOX SYSTEM
  // -------------------------------------------------------------------------
  const projectModal = document.getElementById('project-modal');
  const projectModalInner = document.getElementById('modal-inner');
  const projectModalClose = document.getElementById('modal-close-btn');
  const projectModalBackdrop = document.getElementById('modal-backdrop');

  const lightboxModal = document.getElementById('image-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  function openLightbox(src, caption, alt) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || caption || 'Pratinjau Hasil Karya Asli';
    if (lightboxCaption) {
      lightboxCaption.innerHTML = `<i class="fa-solid fa-image text-cyan"></i> ${caption || ''}`;
    }
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  function openProjectDetail(id) {
    const proj = studentProjects[id];
    if (!proj || !projectModalInner) return;

    let secondaryActionHTML = '';
    if (proj.secondaryLink) {
      secondaryActionHTML = `
        <div class="p-external-link-btn">
          <a href="${proj.secondaryLink.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-block" title="Buka video dokumentasi Monas di YouTube">
            <i class="fa-brands fa-youtube" style="color: #ef4444;"></i>
            <span>${proj.secondaryLink.label}</span>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 11px; opacity: 0.7;"></i>
          </a>
        </div>
      `;
    }

    projectModalInner.innerHTML = `
      <div class="project-modal-header">
        <span class="project-modal-tag">${proj.category}</span>
        <h3 class="project-modal-title">${proj.title}</h3>
        <div class="project-modal-chips">
          ${proj.tags.map(t => `<span class="tool-tag">${t}</span>`).join('')}
        </div>
      </div>

      <p class="p-summary-desc">${proj.summary}</p>

      <div class="project-details-grid">
        <div class="p-detail-card">
          <span class="p-detail-title"><i class="fa-solid fa-circle-info"></i> Tentang Proyek</span>
          <p class="p-detail-val">${proj.about}</p>
        </div>
        <div class="p-detail-card">
          <span class="p-detail-title"><i class="fa-solid fa-user-check"></i> Peran Saya</span>
          <p class="p-detail-val">${proj.role}</p>
        </div>
        <div class="p-detail-card">
          <span class="p-detail-title"><i class="fa-solid fa-list-check"></i> Yang Saya Kerjakan</span>
          <p class="p-detail-val">${proj.whatIDid}</p>
        </div>
        <div class="p-detail-card">
          <span class="p-detail-title"><i class="fa-solid fa-wrench"></i> Alat / Bahan</span>
          <p class="p-detail-val">${proj.tools}</p>
        </div>
      </div>

      <h4 class="p-section-heading"><i class="fa-solid fa-graduation-cap text-cyan"></i> Yang Saya Pelajari</h4>
      <ul class="p-learnings-list">
        ${proj.learnings.map(item => `<li><i class="fa-solid fa-check"></i> <span>${item}</span></li>`).join('')}
      </ul>

      <!-- HASIL KARYA ASLI SECTION -->
      <h4 class="p-section-heading"><i class="fa-solid fa-image text-cyan"></i> Hasil Karya Asli</h4>
      <div class="p-output-box">
        <div class="p-preview-trigger" id="modal-img-trigger" title="Klik untuk memperbesar gambar">
          <img src="${proj.image}" alt="${proj.imageAlt}" class="p-modal-img" loading="lazy">
          <div class="p-zoom-hint">
            <i class="fa-solid fa-magnifying-glass-plus"></i>
            <span>Klik untuk perbesar</span>
          </div>
        </div>
        <div class="p-output-caption-bar">
          <span><i class="fa-solid fa-camera"></i> ${proj.imageCaption}</span>
          <small style="color: var(--accent-cyan); font-weight: 600;">100% Foto Karya Asli</small>
        </div>
      </div>
      ${secondaryActionHTML}

      <!-- QUICK QUIZ TRIGGER BUTTON -->
      <div class="modal-quiz-callout">
        <div class="m-quiz-info">
          <h4><i class="fa-solid fa-brain text-cyan"></i> Kuis Singkat Proyek</h4>
          <p>Uji pemahaman Anda seputar materi <strong>${proj.title}</strong> (3 soal interaktif).</p>
        </div>
        <button class="btn btn-primary start-project-quiz-btn" data-quiz="${proj.quizKey}" data-id="${proj.id}" title="Mulai kuis interaktif 3 soal">
          <i class="fa-solid fa-play"></i>
          <span>Mulai Kuis (3 Soal)</span>
        </button>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook image preview click to Lightbox
    const imgTrigger = projectModalInner.querySelector('#modal-img-trigger');
    if (imgTrigger) {
      imgTrigger.addEventListener('click', () => {
        openLightbox(proj.image, proj.imageCaption, proj.imageAlt);
      });
    }

    // Hook quiz trigger inside modal
    const quizBtn = projectModalInner.querySelector('.start-project-quiz-btn');
    if (quizBtn) {
      quizBtn.addEventListener('click', () => {
        const quizKey = quizBtn.getAttribute('data-quiz');
        const projId = parseInt(quizBtn.getAttribute('data-id'), 10);
        openProjectQuiz(quizKey, projId);
      });
    }
  }

  function closeProjectDetail() {
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
      if (projectModalInner) projectModalInner.innerHTML = '';
    }
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-project-btn');
    if (btn) {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      openProjectDetail(id);
    }
  });

  if (projectModalClose) projectModalClose.addEventListener('click', closeProjectDetail);
  if (projectModalBackdrop) projectModalBackdrop.addEventListener('click', closeProjectDetail);

  // -------------------------------------------------------------------------
  // 11. QUICK QUIZ SYSTEM (ABOUT ME 5 SOAL & PROYEK 3 SOAL)
  // -------------------------------------------------------------------------
  const quizModal = document.getElementById('quiz-modal');
  const quizModalClose = document.getElementById('quiz-modal-close');
  const quizModalBackdrop = document.getElementById('quiz-modal-backdrop');
  const quizNavBtn = document.getElementById('quiz-nav-btn');
  const footerQuizLink = document.getElementById('footer-quiz-link');
  const quizContainer = document.getElementById('quiz-container');

  let activeQuizData = null;
  let activeProjectId = null;
  let currentQuizIdx = 0;
  let quizScore = 0;
  let quizAnswered = false;

  function openProjectQuiz(quizKey, projectId) {
    const qGroup = projectQuizzes[quizKey];
    if (!qGroup) return;

    activeQuizData = qGroup;
    activeProjectId = projectId;
    currentQuizIdx = 0;
    quizScore = 0;

    // Smoothly close project modal
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
    }

    renderQuizQuestion();

    if (quizModal) {
      quizModal.classList.add('active');
      quizModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function openGeneralQuiz() {
    activeQuizData = generalQuizData;
    activeProjectId = null;
    currentQuizIdx = 0;
    quizScore = 0;

    renderQuizQuestion();

    if (quizModal) {
      quizModal.classList.add('active');
      quizModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function renderQuizQuestion() {
    if (!quizContainer || !activeQuizData) return;
    const questions = activeQuizData.questions;
    const totalQ = questions.length;
    const qData = questions[currentQuizIdx];
    const progressPercent = ((currentQuizIdx + 1) / totalQ) * 100;
    quizAnswered = false;

    quizContainer.innerHTML = `
      <div class="quiz-header-top">
        <span class="quiz-header-badge"><i class="fa-solid fa-brain"></i> Quick Quiz</span>
        <span class="quiz-step-tag">Soal ${currentQuizIdx + 1} dari ${totalQ}</span>
      </div>
      <h3 class="quiz-title">${activeQuizData.title}</h3>
      <p class="quiz-sub">${activeQuizData.subtitle}</p>

      <div class="quiz-progress-track" aria-label="Progress kuis: ${Math.round(progressPercent)}%">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="quiz-card">
        <h4 class="quiz-q-text">${currentQuizIdx + 1}. ${qData.q}</h4>

        <div class="quiz-opts-group">
          ${qData.options.map((opt, i) => `
            <button class="quiz-opt-btn" data-opt="${i}">
              <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
              <span class="opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-feedback-strip" id="quiz-feedback-strip"></div>

        <button class="btn btn-primary btn-block" id="quiz-next-btn" style="display: none; margin-top: 16px;">
          <span>${currentQuizIdx + 1 === totalQ ? 'Lihat Hasil Akhir' : 'Lanjut ke Soal Berikutnya'}</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    // Hook options click
    const optButtons = quizContainer.querySelectorAll('.quiz-opt-btn');
    const feedbackBox = document.getElementById('quiz-feedback-strip');
    const nextBtn = document.getElementById('quiz-next-btn');

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizAnswered) return;
        quizAnswered = true;

        const chosen = parseInt(btn.getAttribute('data-opt'), 10);
        optButtons.forEach(b => b.disabled = true);

        if (chosen === qData.correct) {
          btn.classList.add('correct');
          quizScore++;
          feedbackBox.className = 'quiz-feedback-strip show correct';
          feedbackBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${qData.feedback}</span>`;
        } else {
          btn.classList.add('wrong');
          if (optButtons[qData.correct]) {
            optButtons[qData.correct].classList.add('correct');
          }
          feedbackBox.className = 'quiz-feedback-strip show wrong';
          feedbackBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <span>${qData.feedback}</span>`;
        }

        if (nextBtn) {
          nextBtn.style.display = 'inline-flex';
          nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentQuizIdx++;
        if (currentQuizIdx < totalQ) {
          renderQuizQuestion();
        } else {
          renderQuizResult();
        }
      });
    }
  }

  function renderQuizResult() {
    if (!quizContainer || !activeQuizData) return;
    const totalQ = activeQuizData.questions.length;
    let scoreFeedback = '';

    // Dynamic authentic feedback messages with light humor
    if (activeProjectId === null) {
      // General Quiz Tentang Saya (5 Soal)
      if (quizScore === 5) {
        scoreFeedback = 'Kenal saya banget 😎 Mantap!';
      } else if (quizScore >= 3) {
        scoreFeedback = 'Sudah lumayan kenal! 👍';
      } else {
        scoreFeedback = 'Kayaknya harus keliling portfolio dulu 😭';
      }
    } else {
      // Project Quiz (3 Soal)
      if (quizScore === 3) {
        scoreFeedback = 'Luar biasa! Kamu paham betul detail proyek ini 🎯';
      } else if (quizScore === 2) {
        scoreFeedback = 'Bagus! Sudah memahami sebagian besar isi proyek 👍';
      } else {
        scoreFeedback = 'Masih ada yang keliru, yuk baca lagi detail proyeknya! 📖';
      }
    }

    quizContainer.innerHTML = `
      <div class="quiz-result-box">
        <div class="quiz-trophy-icon">
          <i class="fa-solid ${quizScore >= totalQ - 1 ? 'fa-trophy text-cyan' : quizScore >= 1 ? 'fa-circle-check text-emerald' : 'fa-lightbulb text-amber'}"></i>
        </div>
        <span class="quiz-header-badge">Kuis Selesai!</span>
        <h3 class="quiz-title" style="margin-top: 6px;">Hasil Kuis Anda</h3>
        <div class="quiz-score-badge">Skor: ${quizScore} / ${totalQ}</div>
        <p class="quiz-result-msg">${scoreFeedback}</p>
        
        <div class="quiz-result-actions">
          <button class="btn btn-secondary" id="quiz-retake-btn">
            <i class="fa-solid fa-rotate-left"></i>
            <span>Coba Lagi</span>
          </button>
          ${activeProjectId ? `
            <button class="btn btn-primary" id="quiz-back-project-btn">
              <i class="fa-solid fa-arrow-left"></i>
              <span>Kembali ke Proyek</span>
            </button>
          ` : `
            <button class="btn btn-primary" id="quiz-finish-btn">
              <i class="fa-solid fa-check"></i>
              <span>Selesai</span>
            </button>
          `}
        </div>
      </div>
    `;

    const retakeBtn = document.getElementById('quiz-retake-btn');
    const backProjectBtn = document.getElementById('quiz-back-project-btn');
    const finishBtn = document.getElementById('quiz-finish-btn');

    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        currentQuizIdx = 0;
        quizScore = 0;
        renderQuizQuestion();
      });
    }

    if (backProjectBtn) {
      backProjectBtn.addEventListener('click', () => {
        const pId = activeProjectId;
        closeQuizModal();
        if (pId) {
          setTimeout(() => openProjectDetail(pId), 150);
        }
      });
    }

    if (finishBtn) {
      finishBtn.addEventListener('click', closeQuizModal);
    }
  }

  function closeQuizModal() {
    if (quizModal) {
      quizModal.classList.remove('active');
      quizModal.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  if (quizNavBtn) quizNavBtn.addEventListener('click', openGeneralQuiz);
  if (footerQuizLink) footerQuizLink.addEventListener('click', openGeneralQuiz);
  if (quizModalClose) quizModalClose.addEventListener('click', closeQuizModal);
  if (quizModalBackdrop) quizModalBackdrop.addEventListener('click', closeQuizModal);

  // -------------------------------------------------------------------------
  // 12. SECTION REVEAL (INTERSECTION OBSERVER)
  // -------------------------------------------------------------------------
  const revealSections = document.querySelectorAll('.section-reveal');
  const sectionObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealSections.forEach(sec => sectionObserver.observe(sec));

  // -------------------------------------------------------------------------
  // 13. ACTIVE NAVIGATION LINK ON SCROLL & MOBILE MENU DRAWER
  // -------------------------------------------------------------------------
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav-link');
  const allSections = document.querySelectorAll('section[id]');

  if (navToggle) {
    navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
  }
  if (navClose) {
    navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
  }
  navLinks.forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
  });

  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 140;

    allSections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const targetNav = document.querySelector(`.nav-menu a[href*='${id}']`);

      if (targetNav) {
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(l => l.classList.remove('active'));
          targetNav.classList.add('active');
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 14. CONTACT FORM VALIDATION & TOAST NOTIFICATION
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('sender-subject').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !subject || !message) {
        displayToast('Harap lengkapi semua kolom formulir.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        displayToast('Format alamat email tidak valid.', 'error');
        return;
      }

      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Mengirimkan Pesan...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        contactForm.reset();
        displayToast(`Terima kasih, ${name}! Pesan Anda telah dicatat (dairabih2@gmail.com).`, 'success');
      }, 850);
    });
  }

  function displayToast(msg, type = 'success') {
    const wrapper = document.getElementById('toast-wrapper');
    if (!wrapper) return;

    const toast = document.createElement('div');
    toast.className = `toast-item ${type === 'easter-egg' ? 'easter-egg' : ''}`;

    let icon = 'fa-circle-check text-cyan';
    if (type === 'error') icon = 'fa-circle-exclamation text-coral';
    if (type === 'easter-egg') icon = 'fa-sparkles text-purple';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${msg}</span>`;
    wrapper.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = '0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // -------------------------------------------------------------------------
  // 15. BACK TO TOP BUTTON & ESC KEY MODAL CLOSER
  // -------------------------------------------------------------------------
  const backTopBtn = document.getElementById('back-top-btn');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 350) {
      if (backTopBtn) backTopBtn.classList.add('visible');
    } else {
      if (backTopBtn) backTopBtn.classList.remove('visible');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxModal && lightboxModal.classList.contains('active')) {
        closeLightbox();
      } else if (quizModal && quizModal.classList.contains('active')) {
        closeQuizModal();
      } else if (projectModal && projectModal.classList.contains('active')) {
        closeProjectDetail();
      }
    }
  });

  // -------------------------------------------------------------------------
  // 16. EASTER EGG (Click Logo 5 Times)
  // -------------------------------------------------------------------------
  const brandLogo = document.getElementById('brand-easter-logo');
  let logoClickCount = 0;
  let logoClickTimer = null;

  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      logoClickCount++;
      clearTimeout(logoClickTimer);

      if (logoClickCount === 5) {
        e.preventDefault();
        displayToast('🎉 Keren! Kamu menemukan rahasia tersembunyi. Semangat belajar!', 'easter-egg');
        logoClickCount = 0;
      } else {
        logoClickTimer = setTimeout(() => {
          logoClickCount = 0;
        }, 1200);
      }
    });
  }

  // -------------------------------------------------------------------------
  // 17. CURRENT YEAR DYNAMIC UPDATE
  // -------------------------------------------------------------------------
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
