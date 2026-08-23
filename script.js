/**
 * Enhanced JavaScript Interactive Script
 * Portfolio of Muhammad Ad Dairabiy (Siswa SMAN 70 Jakarta Kelas X-D)
 * FINAL STABLE REVISION
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. DATA STORE: Projects Information (Structured Academic Data & Authentic Outputs)
  // -------------------------------------------------------------------------
  const studentProjects = {
    1: {
      id: 1,
      title: 'Proyek Video Edukatif Monas',
      category: 'School • Creative',
      tags: ['Video Edukasi', 'Video Editing', 'Edukasi Sejarah', 'Multimedia'],
      summary: 'Kolaborasi video edukasi dokumenter mengenai nilai sejarah perjuangan kemerdekaan, arsitektur cawan dan lidah api emas, serta nilai filosofis Monumen Nasional Jakarta.',
      role: 'Penyusunan naskah video bersama tim, proses editing potongan klip video, pemilihan audio latar bebas royalti, dan penyelarasan transisi visual.',
      learnings: [
        'Melatih manajemen kerja sama kelompok dan pembagian tanggung jawab yang jelas.',
        'Menguasai dasar editing video: pemotongan klip (trimming), audio syncing, dan teks narasi.',
        'Mengemas informasi sejarah menjadi tayangan audiovisual yang menarik dan mudah dicerna.'
      ],
      image: 'assets/projects/monas/monas-video-preview.jpg',
      imageCaption: 'Dokumentasi Video Edukatif Monas',
      imageAlt: 'Dokumentasi Video Edukatif Monumen Nasional Jakarta',
      secondaryLink: {
        url: 'https://youtu.be/DpoM_Qq4wT0',
        label: '▶ Tonton Video di YouTube'
      },
      quizKey: 'monas'
    },
    2: {
      id: 2,
      title: 'Infografis Pencemaran Lingkungan',
      category: 'School • Creative',
      tags: ['Infografis Visual', 'Desain Grafis', 'Sains Lingkungan', 'Visual Data'],
      summary: 'Visualisasi infografis tipe pencemaran lingkungan (udara, air, tanah), dampak bagi ekosistem dan kesehatan, serta aksi nyata preventif pelestarian alam melalui prinsip 3R.',
      role: 'Pengumpulan data fakta polusi perkotaan, visualisasi hierarki informasi, dan pemilihan elemen grafis informatif di Canva.',
      learnings: [
        'Mengubah informasi sains dan data statistik menjadi grafik visual yang mudah dipahami.',
        'Memahami pentingnya edukasi prinsip 3R (Reduce, Reuse, Recycle) dalam kehidupan sehari-hari.',
        'Meningkatkan efisiensi kerja desain grafis menggunakan perkakas digital Canva.'
      ],
      image: 'assets/projects/pollution/pollution-infographic.jpg',
      imageCaption: 'Infografis Pencemaran Lingkungan',
      imageAlt: 'Infografis Keanekaragaman Hayati dan Ancaman Pencemaran Lingkungan',
      quizKey: 'pollution'
    },
    3: {
      id: 3,
      title: 'Presentasi Teknologi Notion AI',
      category: 'School • Technology',
      tags: ['Notion AI', 'Kecerdasan Buatan', 'Public Speaking', 'Digital Skills'],
      summary: 'Penyusunan dan presentasi materi pemanfaatan kecerdasan buatan (Notion AI) untuk produktivitas mencatat materi, merangkum, dan efisiensi manajemen belajar siswa.',
      role: 'Eksplorasi fitur Notion AI, penyusunan materi presentasi berbasis studi kasus pelajar, serta memimpin sesi pemaparan dan tanya jawab di kelas.',
      learnings: [
        'Memahami kapabilitas teknologi AI generatif dan implementasi praktisnya untuk kebutuhan edukasi.',
        'Meningkatkan kemampuan public speaking dalam menjelaskan konsep teknologi kompleks dengan bahasa sederhana.',
        'Menumbuhkan kesadaran etika pemanfaatan kecerdasan buatan yang bertanggung jawab di kalangan siswa.'
      ],
      image: 'assets/projects/notion-ai/notion-slide-preview.jpg',
      imageCaption: 'Presentasi Teknologi Notion AI',
      imageAlt: 'Slide Presentasi Edukasi Memahami Notion AI',
      quizKey: 'notion_ai'
    },
    4: {
      id: 4,
      title: 'Proyek Biografi Émile Durkheim',
      category: 'School • Creative',
      tags: ['Media Biografi', 'Riset Sosiologi', 'Fakta Sosial', 'PowerPoint'],
      summary: 'Penyusunan media biografi dan infografis mengenai riwayat hidup tokoh, metodologi ilmiah sosiologi, dan teori fakta sosial Émile Durkheim.',
      role: 'Riset konten tokoh kepustakaan, perancangan tata letak visual infografis di Canva, dan penyusunan slide presentasi PowerPoint.',
      learnings: [
        'Memahami metode riset kepustakaan dan sintesis gagasan sosiologi yang padat.',
        'Meningkatkan keterampilan tata letak grafis dan pemilihan warna kontras pada infografis.',
        'Mengasah teknik penyampaian materi secara runtut dan percaya diri di hadapan audiens.'
      ],
      image: 'assets/projects/durkheim/durkheim-biography.jpg',
      imageCaption: 'Media Biografi Émile Durkheim',
      imageAlt: 'Lembar Biografi dan Teori Sosiologi Émile Durkheim',
      quizKey: 'durkheim'
    },
    5: {
      id: 5,
      title: 'Proyek Kerajinan Daur Ulang',
      category: 'School • Creative',
      tags: ['Kerajinan Daur Ulang', 'Eco Project', 'Pilah Sampah', 'Teamwork'],
      summary: 'Karya produk bernilai guna dan estetis yang dibuat bersama kelompok dari pemanfaatan material bahan limbah bekas ramah lingkungan.',
      role: 'Brainstorming ide produk, pemilihan material daur ulang yang aman, perakitan produk bersama kelompok, dan penyusunan laporan proyek.',
      learnings: [
        'Mengembangkan daya kreativitas dalam melihat potensi nilai guna dari barang bekas.',
        'Mengasah kerja sama tim dalam mengatasi tantangan teknis saat proses perakitan.',
        'Menyadari pentingnya aksi nyata pelestarian lingkungan melalui konsep upcycling.'
      ],
      image: 'assets/projects/recycling/recycling-project.jpg',
      imageCaption: 'Dokumentasi Proyek Kerajinan Daur Ulang',
      imageAlt: 'Dokumentasi Edukasi dan Pemilahan Sampah Proyek Daur Ulang',
      quizKey: 'recycling'
    }
  };

  // -------------------------------------------------------------------------
  // 2. DATA STORE: Learning Journey Steps
  // -------------------------------------------------------------------------
  const journeyData = {
    1: {
      badge: 'Tahapan: SMP',
      title: 'Exploring Science & Technology',
      desc: 'Memulai ketertarikan pada metode ilmiah dan observasi fenomena alam melalui kegiatan ekstrakurikuler Klub IPA di SMPN 68 Jakarta Selatan. Melatih rasa ingin tahu, cara berpikir kritis, dan eksplorasi awal penggunaan komputer.',
      takeaway: 'Observasi Ilmiah • Klub IPA SMPN 68 Jaksel • Dasar Eksplorasi Komputer'
    },
    2: {
      badge: 'Tahapan: SMA (SMAN 70 Jakarta)',
      title: 'Developing Digital Skills',
      desc: 'Melanjutkan pendidikan di SMA Negeri 70 Jakarta Kelas X-D. Berfokus mengembangkan keterampilan software produktivitas (Microsoft Office, Canva), desain infografis, dan komunikasi efektif dalam mempresentasikan ide.',
      takeaway: 'Kelas X-D SMAN 70 Jakarta • Microsoft Office & Canva • Komunikasi Akademik'
    },
    3: {
      badge: 'Tahapan: Programming Exploration',
      title: 'Exploring Logic & Fundamentals',
      desc: 'Mulai mendalami cara kerja perangkat lunak dan logika pemrograman komputer. Mempelajari alur algoritma dasar, struktur data sederhana, dan pemikiran komputasional untuk memecahkan masalah.',
      takeaway: 'Logika Algoritma • Computational Thinking • Eksplorasi Dasar Kode'
    },
    4: {
      badge: 'Tahapan: Collaborative Works',
      title: 'Building Projects & Presentations',
      desc: 'Mengimplementasikan keterampilan yang dipelajari ke dalam proyek nyata sekolah: pembuatan infografis biografi tokoh, video edukasi Monas, infografis lingkungan, kerajinan daur ulang, dan pemaparan teknologi Notion AI.',
      takeaway: '5 Proyek Sekolah Tuntas • Multimedia & AI • Kerja Sama Tim Teruji'
    },
    5: {
      badge: 'Tahapan: Future Vision',
      title: 'Future Growth in Technology',
      desc: 'Berkomitmen untuk terus belajar, memperluas wawasan seputar ilmu komputer dan teknologi informasi, serta mempersiapkan diri guna berkarier dan berkontribusi di industri digital masa depan.',
      takeaway: 'Growth Mindset • Aspirasi Karier IT & Pemrograman • Pembelajar Berkelanjutan'
    }
  };

  // -------------------------------------------------------------------------
  // 3. DATA STORE: Dedicated Project Quizzes (5 Questions Each)
  // -------------------------------------------------------------------------
  const projectQuizzes = {
    monas: {
      title: 'Quick Quiz — Monas',
      subtitle: 'Kuis seputar pengetahuan umum Monumen Nasional (Monas)',
      questions: [
        {
          q: 'Berapa tinggi Monas?',
          options: ['77 meter', '100 meter', '132 meter', '150 meter'],
          correct: 2, // C
          feedback: 'Tepat! Monumen Nasional (Monas) memiliki tinggi 132 meter.'
        },
        {
          q: 'Monas berada di kota mana?',
          options: ['Bandung', 'Jakarta', 'Surabaya', 'Yogyakarta'],
          correct: 1, // B
          feedback: 'Benar! Monas terletak di pusat kota Jakarta, Indonesia.'
        },
        {
          q: 'Apa nama bagian Monas yang berada di paling atas?',
          options: ['Cawan', 'Lidah Api', 'Museum', 'Pelataran'],
          correct: 1, // B
          feedback: 'Tepat! Bagian paling atas Monas adalah Lidah Api.'
        },
        {
          q: 'Monas dibangun untuk mengenang...',
          options: [
            'Perjuangan kemerdekaan Indonesia',
            'Pembangunan Jakarta',
            'Berdirinya ASEAN',
            'Sumpah Pemuda'
          ],
          correct: 0, // A
          feedback: 'Benar! Monas dibangun untuk mengenang perjuangan kemerdekaan Indonesia.'
        },
        {
          q: 'Apa yang melapisi bagian lidah api Monas?',
          options: ['Emas', 'Perak', 'Tembaga', 'Aluminium'],
          correct: 0, // A
          feedback: 'Tepat! Bagian lidah api Monas dilapisi oleh emas murni.'
        }
      ]
    },
    pollution: {
      title: 'Quick Quiz — Pencemaran Lingkungan',
      subtitle: 'Kuis seputar isu pencemaran lingkungan & prinsip 3R',
      questions: [
        {
          q: 'Apa yang dimaksud dengan pencemaran lingkungan?',
          options: [
            'Perubahan lingkungan menjadi lebih bersih',
            'Masuknya zat atau bahan yang mengganggu lingkungan',
            'Penanaman pohon',
            'Penghematan energi'
          ],
          correct: 1, // B
          feedback: 'Benar! Pencemaran lingkungan adalah masuknya zat atau bahan yang mengganggu lingkungan.'
        },
        {
          q: 'Contoh pencemaran udara adalah...',
          options: ['Asap kendaraan', 'Menanam pohon', 'Mendaur ulang sampah', 'Membersihkan sungai'],
          correct: 0, // A
          feedback: 'Tepat! Asap kendaraan bermotor merupakan contoh nyata pencemaran udara.'
        },
        {
          q: 'Sampah plastik yang dibuang sembarangan dapat mencemari...',
          options: ['Udara saja', 'Air dan tanah', 'Cahaya', 'Suara'],
          correct: 1, // B
          feedback: 'Benar! Sampah plastik anorganik mencemari air dan tanah karena sulit terurai.'
        },
        {
          q: 'Salah satu cara mengurangi sampah adalah...',
          options: ['3R', '3S', '5W', '4P'],
          correct: 0, // A
          feedback: 'Tepat! Prinsip 3R merupakan salah satu cara utama dalam mengurangi timbulan sampah.'
        },
        {
          q: '3R adalah...',
          options: [
            'Reduce, Reuse, Recycle',
            'Remove, Repair, Return',
            'Reduce, Repair, Return',
            'Reuse, Remove, Recycle'
          ],
          correct: 0, // A
          feedback: 'Benar! 3R adalah Reduce, Reuse, dan Recycle.'
        }
      ]
    },
    notion_ai: {
      title: 'Quick Quiz — Notion AI',
      subtitle: 'Kuis seputar teknologi kecerdasan buatan & Notion AI',
      questions: [
        {
          q: 'Notion AI merupakan...',
          options: ['Alat bantu berbasis AI', 'Mesin pencari', 'Game', 'Sistem operasi'],
          correct: 0, // A
          feedback: 'Tepat! Notion AI merupakan alat bantu produktivitas berbasis kecerdasan buatan.'
        },
        {
          q: 'Salah satu manfaat Notion AI adalah membantu...',
          options: ['Mencatat dan mengembangkan ide', 'Memperbaiki kendaraan', 'Memasak', 'Mengukur suhu'],
          correct: 0, // A
          feedback: 'Benar! Salah satu manfaat Notion AI adalah membantu mencatat dan mengembangkan ide belajar.'
        },
        {
          q: 'AI merupakan singkatan dari...',
          options: ['Automatic Internet', 'Artificial Intelligence', 'Advanced Information', 'Automated Interface'],
          correct: 1, // B
          feedback: 'Tepat! AI merupakan singkatan dari Artificial Intelligence.'
        },
        {
          q: 'Mengapa hasil dari AI sebaiknya diperiksa kembali?',
          options: [
            'Karena AI selalu salah',
            'Karena informasi dari AI tetap perlu diverifikasi',
            'Karena AI tidak bisa menulis',
            'Karena AI tidak bisa digunakan untuk belajar'
          ],
          correct: 1, // B
          feedback: 'Benar! Informasi dari AI tetap perlu diverifikasi kebenarannya oleh manusia.'
        },
        {
          q: 'Notion AI dapat digunakan sebagai...',
          options: ['Alat bantu produktivitas', 'Alat olahraga', 'Kamera', 'Alat musik'],
          correct: 0, // A
          feedback: 'Tepat! Notion AI dapat digunakan sebagai alat bantu produktivitas.'
        }
      ]
    },
    durkheim: {
      title: 'Quick Quiz — Émile Durkheim',
      subtitle: 'Kuis seputar tokoh sosiologi Émile Durkheim & teorinya',
      questions: [
        {
          q: 'Siapakah Émile Durkheim?',
          options: ['Tokoh sosiologi', 'Tokoh olahraga', 'Seniman', 'Astronaut'],
          correct: 0, // A
          feedback: 'Tepat! Émile Durkheim adalah salah satu tokoh pendiri utama sosiologi.'
        },
        {
          q: 'Émile Durkheim berasal dari...',
          options: ['Prancis', 'Inggris', 'Jerman', 'Italia'],
          correct: 0, // A
          feedback: 'Benar! Émile Durkheim merupakan tokoh yang berasal dari Prancis.'
        },
        {
          q: 'Durkheim dikenal sebagai tokoh penting dalam perkembangan...',
          options: ['Biologi', 'Sosiologi', 'Astronomi', 'Geografi'],
          correct: 1, // B
          feedback: 'Tepat! Durkheim dikenal sebagai tokoh penting dalam perkembangan ilmu sosiologi.'
        },
        {
          q: 'Salah satu konsep terkenal Durkheim adalah...',
          options: ['Fakta sosial', 'Relativitas', 'Seleksi alam', 'Evolusi'],
          correct: 0, // A
          feedback: 'Benar! Konsep fakta sosial (social facts) merupakan salah satu teori terkenal dari Durkheim.'
        },
        {
          q: 'Salah satu karya terkenal Durkheim adalah...',
          options: [
            'The Division of Labour in Society',
            'The Wealth of Nations',
            'Das Kapital',
            'The Republic'
          ],
          correct: 0, // A
          feedback: 'Tepat! The Division of Labour in Society adalah salah satu karya paling terkenal dari Durkheim.'
        }
      ]
    },
    recycling: {
      title: 'Quick Quiz — Daur Ulang',
      subtitle: 'Kuis seputar daur ulang & pemanfaatan material ramah lingkungan',
      questions: [
        {
          q: 'Apa tujuan utama daur ulang?',
          options: ['Mengurangi limbah', 'Menambah sampah', 'Membakar semua sampah', 'Membuang sampah ke sungai'],
          correct: 0, // A
          feedback: 'Tepat! Tujuan utama daur ulang adalah mengurangi limbah lingkungan.'
        },
        {
          q: 'Apa yang dimaksud dengan Recycle?',
          options: [
            'Menggunakan kembali barang tanpa perubahan',
            'Mengolah kembali barang menjadi sesuatu yang dapat digunakan',
            'Membuang barang',
            'Membakar barang'
          ],
          correct: 1, // B
          feedback: 'Benar! Recycle adalah mengolah kembali barang menjadi sesuatu yang dapat digunakan kembali.'
        },
        {
          q: 'Salah satu contoh bahan yang dapat didaur ulang adalah...',
          options: ['Botol plastik', 'Asap', 'Cahaya', 'Suara'],
          correct: 0, // A
          feedback: 'Tepat! Botol plastik merupakan contoh bahan anorganik yang dapat didaur ulang.'
        },
        {
          q: 'Salah satu manfaat daur ulang adalah...',
          options: [
            'Mengurangi jumlah sampah',
            'Menambah pencemaran',
            'Menghabiskan sumber daya',
            'Menambah limbah'
          ],
          correct: 0, // A
          feedback: 'Benar! Manfaat utama daur ulang adalah mengurangi jumlah sampah yang menumpuk.'
        },
        {
          q: 'Prinsip 3R terdiri dari...',
          options: [
            'Reduce, Reuse, Recycle',
            'Read, Run, Rest',
            'Repair, Remove, Return',
            'Reduce, Replace, Return'
          ],
          correct: 0, // A
          feedback: 'Tepat! Prinsip 3R terdiri dari Reduce, Reuse, dan Recycle.'
        }
      ]
    }
  };

  // General Portfolio Quiz (Triggered via Header Navigation)
  const generalQuizData = {
    title: 'Portfolio Knowledge Quiz',
    subtitle: 'Uji pemahaman Anda mengenai profil dan karya Muhammad Ad Dairabiy.',
    questions: [
      {
        q: 'Di sekolah manakah Muhammad Ad Dairabiy bersekolah saat ini?',
        options: [
          'SMA Negeri 70 Jakarta (Kelas X-D)',
          'SMA Negeri 8 Jakarta',
          'SMP Negeri 68 Jakarta Selatan',
          'SMA Negeri 28 Jakarta'
        ],
        correct: 0,
        feedback: 'Tepat! Muhammad adalah siswa aktif di SMA Negeri 70 Jakarta Kelas X-D.'
      },
      {
        q: 'Apa minat utama dan aspirasi masa depan yang ditekuni oleh Muhammad?',
        options: [
          'Seni Musik Tradisional',
          'Teknologi, Komputer & Pemrograman',
          'Kedokteran Hewan',
          'Desain Busana'
        ],
        correct: 1,
        feedback: 'Benar! Muhammad memiliki antusiasme tinggi di bidang komputer dan pemrograman.'
      },
      {
        q: 'Proyek sekolah manakah yang mengulas arsitektur dan sejarah kemerdekaan?',
        options: [
          'Proyek Video Edukatif Monas',
          'Infografis Pencemaran Lingkungan',
          'Proyek Biografi Émile Durkheim',
          'Presentasi Teknologi Notion AI'
        ],
        correct: 0,
        feedback: 'Tepat! Proyek Video Monas mengulas sejarah kemerdekaan dan arsitektur Monas.'
      },
      {
        q: 'Ekstrakurikuler apa yang pernah diikuti Muhammad saat di bangku SMP?',
        options: [
          'Klub IPA (SMPN 68 Jakarta Selatan)',
          'Klub Robotik Nasional',
          'Klub Basket Pelajar',
          'PMR Unit Madya'
        ],
        correct: 0,
        feedback: 'Tepat! Muhammad aktif di Klub IPA SMPN 68 Jakarta Selatan.'
      },
      {
        q: 'Alat bantu kecerdasan buatan (AI) apa yang pernah dipresentasikan oleh Muhammad di kelas?',
        options: [
          'Autonomous Flight AI',
          'Notion AI',
          'Self-Driving Vehicle System',
          'Voice Synthesizer Studio'
        ],
        correct: 1,
        feedback: 'Benar! Presentasi Notion AI membahas efisiensi belajar dan produktivitas siswa.'
      }
    ]
  };

  // -------------------------------------------------------------------------
  // 4. SCROLL PROGRESS INDICATOR
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
  // 5. HERO DYNAMIC TYPING EFFECT
  // -------------------------------------------------------------------------
  const typingRole = document.getElementById('typing-role');
  const studentInterests = [
    'Teknologi & Komputer',
    'Eksplorasi Pemrograman',
    'Pengembangan Konten Digital',
    'Siswa Kelas X-D SMAN 70 Jakarta'
  ];

  let currentInterestIdx = 0;
  let charIdx = 0;
  let isBackspacing = false;
  const typeSpeed = 80;
  const backSpeed = 45;
  const holdTime = 2000;

  function handleTyping() {
    if (!typingRole) return;
    const text = studentInterests[currentInterestIdx];

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
      currentInterestIdx = (currentInterestIdx + 1) % studentInterests.length;
      delay = 350;
    }

    setTimeout(handleTyping, delay);
  }

  handleTyping();

  // -------------------------------------------------------------------------
  // 6. INTERACTIVE "ABOUT ME" TABS
  // -------------------------------------------------------------------------
  const aboutTabBtns = document.querySelectorAll('.about-tab-btn');
  const aboutPanes = document.querySelectorAll('.about-tab-pane');

  aboutTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button states
      aboutTabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Switch active pane smoothly
      aboutPanes.forEach(pane => {
        if (pane.id === `pane-${targetTab}`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 7. "MY LEARNING JOURNEY" STEPPER
  // -------------------------------------------------------------------------
  const journeyNodes = document.querySelectorAll('.journey-node');
  const jBadge = document.getElementById('journey-badge');
  const jTitle = document.getElementById('journey-title');
  const jDesc = document.getElementById('journey-desc');
  const jTakeaway = document.getElementById('journey-takeaway');
  const jCard = document.getElementById('journey-detail-card');

  journeyNodes.forEach(node => {
    node.addEventListener('click', () => {
      const step = node.getAttribute('data-step');
      const data = journeyData[step];
      if (!data) return;

      journeyNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      if (jCard) {
        // Trigger subtle refresh animation
        jCard.style.animation = 'none';
        void jCard.offsetWidth; // trigger reflow
        jCard.style.animation = 'journey-fade 0.3s ease';
      }

      if (jBadge) jBadge.textContent = data.badge;
      if (jTitle) jTitle.textContent = data.title;
      if (jDesc) jDesc.textContent = data.desc;
      if (jTakeaway) jTakeaway.textContent = data.takeaway;
    });
  });

  // -------------------------------------------------------------------------
  // 8. SKILLS INTERACTION & TOOLTIP CALLOUT
  // -------------------------------------------------------------------------
  const skillCards = document.querySelectorAll('.skill-card-item');
  const skillDetailText = document.getElementById('skill-detail-text');

  skillCards.forEach(card => {
    const desc = card.getAttribute('data-desc');

    const updateSkillDetail = () => {
      skillCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      if (skillDetailText && desc) {
        skillDetailText.textContent = desc;
      }
    };

    card.addEventListener('mouseenter', updateSkillDetail);
    card.addEventListener('click', updateSkillDetail);
  });

  // -------------------------------------------------------------------------
  // 9. PROJECT FILTER & STRUCTURED MODAL SHOWCASE
  // -------------------------------------------------------------------------
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-token-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.getAttribute('data-filter').toLowerCase();

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

  // Project Modal Elements
  // Project Modal Elements
  const projectModal = document.getElementById('project-modal');
  const projectModalInner = document.getElementById('modal-inner');
  const projectModalClose = document.getElementById('modal-close-btn');
  const projectModalBackdrop = document.getElementById('modal-backdrop');

  // Lightbox / Image Viewer Elements
  const lightboxModal = document.getElementById('image-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  function openLightbox(src, caption, alt) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || caption || 'Pratinjau Karya';
    if (lightboxCaption) {
      lightboxCaption.innerHTML = `<i class="fa-solid fa-image"></i> ${caption || ''}`;
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
        <div class="project-secondary-action">
          <a href="${proj.secondaryLink.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-block" title="Buka video dokumentasi Monas di YouTube">
            <i class="fa-brands fa-youtube text-red" style="color: #ef4444;"></i>
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
        <div class="project-tag-chips">
          ${proj.tags.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>

      <p class="p-summary-desc">${proj.summary}</p>

      <div class="project-meta-grid">
        <div class="p-meta-box">
          <span class="p-meta-title"><i class="fa-solid fa-user-gear text-blue"></i> My Role</span>
          <span class="p-meta-value">${proj.role}</span>
        </div>
      </div>

      <h4 class="p-section-heading"><i class="fa-solid fa-graduation-cap text-blue"></i> What I Learned</h4>
      <ul class="p-takeaways-list">
        ${proj.learnings.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <div class="p-section-divider"></div>

      <!-- HASIL KARYA SECTION (Direct Visual Output & Lightbox Viewer) -->
      <h4 class="p-section-heading p-out-heading"><i class="fa-solid fa-folder-open text-blue"></i> 📁 Hasil Karya</h4>
      
      <div class="project-visual-output">
        <div class="project-output-preview-card">
          <div class="project-output-img-wrap" id="project-preview-trigger" title="Klik untuk melihat dalam ukuran penuh">
            <img src="${proj.image}" alt="${proj.imageAlt}" class="project-output-img" loading="lazy">
            <div class="zoom-hint-badge">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
              <span>Klik untuk perbesar</span>
            </div>
          </div>
          <div class="project-output-caption">
            <i class="fa-solid fa-image"></i>
            <span>${proj.imageCaption}</span>
          </div>
        </div>
        ${secondaryActionHTML}
      </div>

      <div class="p-section-divider"></div>

      <!-- QUICK QUIZ SECTION -->
      <div class="project-quiz-trigger-card">
        <div class="quiz-trigger-info">
          <h4 class="quiz-trigger-title"><i class="fa-solid fa-brain text-blue"></i> 🧠 Quick Quiz</h4>
          <p class="quiz-trigger-desc">Uji pemahaman Anda seputar materi <strong>${proj.title}</strong> melalui 5 pertanyaan interaktif.</p>
        </div>
        <button class="btn btn-secondary btn-block start-project-quiz-btn" data-quiz="${proj.quizKey}" data-id="${proj.id}" title="Mulai kuis interaktif 5 soal">
          <i class="fa-solid fa-brain text-blue"></i>
          <span>🧠 Take Quick Quiz</span>
        </button>
      </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook image click to open lightbox
    const previewTrigger = projectModalInner.querySelector('#project-preview-trigger');
    if (previewTrigger) {
      previewTrigger.addEventListener('click', () => {
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
      if (projectModalInner) {
        projectModalInner.innerHTML = '';
      }
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
  // 10. INTERACTIVE QUIZ SYSTEM (Dedicated & General Knowledge)
  // -------------------------------------------------------------------------
  const quizModal = document.getElementById('quiz-modal');
  const quizModalClose = document.getElementById('quiz-modal-close');
  const quizModalBackdrop = document.getElementById('quiz-modal-backdrop');
  const quizNavBtn = document.getElementById('quiz-nav-btn');
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

    // Close project modal smoothly without removing body lock
    if (projectModal) {
      projectModal.classList.remove('active');
      if (projectModalInner) projectModalInner.innerHTML = '';
    }

    renderQuizQuestion();

    if (quizModal) {
      quizModal.classList.add('active');
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
        <span class="quiz-header-badge">🧠 Quick Quiz</span>
        <span class="quiz-step-tag">Question ${currentQuizIdx + 1}/${totalQ}</span>
      </div>
      <h3 class="quiz-title">${activeQuizData.title}</h3>
      <p class="quiz-sub">${activeQuizData.subtitle}</p>

      <div class="quiz-progress-track" aria-label="Progress kuis: ${Math.round(progressPercent)}%">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="quiz-card">
        <h4 class="quiz-q-text">${currentQuizIdx + 1}. ${qData.q.replace(/^\d+\.\s*/, '')}</h4>

        <div class="quiz-opts-group">
          ${qData.options.map((opt, i) => `
            <button class="quiz-opt-btn" data-opt="${i}">
              <span class="node-number">${String.fromCharCode(65 + i)}</span>
              <span class="quiz-opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-feedback-strip" id="quiz-feedback-strip"></div>

        <button class="btn btn-primary btn-block" id="quiz-next-btn" style="display: none; margin-top: 12px;">
          <span>${currentQuizIdx + 1 === totalQ ? 'Lihat Hasil Quiz' : 'Next'}</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    // Hook answer choices
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
          feedbackBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${qData.feedback}`;
        } else {
          btn.classList.add('wrong');
          optButtons[qData.correct].classList.add('correct');
          feedbackBox.className = 'quiz-feedback-strip show wrong';
          feedbackBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${qData.feedback}`;
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

    // Exact score feedback messages matching user specification
    if (quizScore === 5) {
      scoreFeedback = 'Excellent! You really know this topic! 🏆';
    } else if (quizScore === 4) {
      scoreFeedback = 'Great job! 🚀';
    } else if (quizScore === 3) {
      scoreFeedback = 'Nice! You got the basics! 👍';
    } else {
      scoreFeedback = 'Good start! Explore the project again! 🔎';
    }

    quizContainer.innerHTML = `
      <div class="quiz-result-box">
        <div class="quiz-trophy-icon">
          <i class="fa-solid ${quizScore >= 4 ? 'fa-award' : quizScore === 3 ? 'fa-circle-check' : 'fa-lightbulb'}"></i>
        </div>
        <span class="quiz-header-badge">Quiz Complete!</span>
        <h3 class="quiz-title" style="margin-top: 5px;">Hasil Kuis Anda</h3>
        <div class="quiz-score-badge">Your Score: ${quizScore}/5</div>
        <p class="quiz-result-msg">${scoreFeedback}</p>
        
        <div class="quiz-result-actions">
          <button class="btn btn-secondary" id="quiz-retake-btn">
            <i class="fa-solid fa-rotate-left"></i>
            <span>Try Again</span>
          </button>
          ${activeProjectId ? `
            <button class="btn btn-primary" id="quiz-back-project-btn">
              <i class="fa-solid fa-arrow-left"></i>
              <span>Back to Project</span>
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
    if (quizModal) quizModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (quizNavBtn) quizNavBtn.addEventListener('click', openGeneralQuiz);
  if (quizModalClose) quizModalClose.addEventListener('click', closeQuizModal);
  if (quizModalBackdrop) quizModalBackdrop.addEventListener('click', closeQuizModal);

  // -------------------------------------------------------------------------
  // 11. ELEGANT EASTER EGG (Click Logo 5 Times)
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
        displayToast('Curiosity unlocked 👀 — You found something hidden. Keep exploring!', 'easter-egg');
        logoClickCount = 0;
      } else {
        logoClickTimer = setTimeout(() => {
          logoClickCount = 0;
        }, 1200);
      }
    });
  }

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
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  revealSections.forEach(sec => sectionObserver.observe(sec));

  // -------------------------------------------------------------------------
  // 13. ACTIVE NAVIGATION LINK ON SCROLL & MOBILE MENU
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
    const scrollPos = window.pageYOffset + 120;

    allSections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const targetNav = document.querySelector(`.nav-menu a[href*='${id}']`);

      if (targetNav) {
        if (scrollPos >= top && scrollPos < top + height) {
          targetNav.classList.add('active');
        } else {
          targetNav.classList.remove('active');
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 14. CONTACT FORM & TOAST NOTIFICATION
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
        displayToast(`Terima kasih, ${name}! Pesan berhasil dikirim ke dairabih2@gmail.com.`, 'success');
      }, 900);
    });
  }

  function displayToast(msg, type = 'success') {
    const wrapper = document.getElementById('toast-wrapper');
    if (!wrapper) return;

    const toast = document.createElement('div');
    toast.className = `toast-item ${type === 'easter-egg' ? 'easter-egg' : ''}`;

    let icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-exclamation';
    if (type === 'easter-egg') icon = 'fa-sparkles';

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
      } else {
        closeProjectDetail();
        closeQuizModal();
      }
    }
  });

  // -------------------------------------------------------------------------
  // 16. CURRENT YEAR DYNAMIC UPDATE
  // -------------------------------------------------------------------------
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
