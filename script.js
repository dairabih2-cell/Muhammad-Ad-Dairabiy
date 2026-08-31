/**
 * ==========================================================================
 * MUHAMMAD AD DAIRABIY // PIXEL CITY — MY LEARNING WORLD
 * Comprehensive Interactive JavaScript Engine
 * Features: Authentic 5 Projects, 20-Question Quiz Arena, Lightbox Gallery,
 * Interactive Buildings, 8-Bit Web Audio Synthesizer, Living NPCs,
 * Day/Night Sky Switcher, Contact Form & Mobile Navigation
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA STORE: 5 AUTHENTIC SCHOOL PROJECTS
  // --------------------------------------------------------------------------
  const PROJECTS_DATA = {
    1: {
      id: 1,
      title: 'Proyek Video Edukatif Monas',
      category: 'media',
      categoryLabel: 'Desain & Video',
      tags: ['Video Edukasi', 'Sejarah Monas 132m', 'Kerja Sama Tim', 'CapCut'],
      summary: 'Proyek video dokumenter dan edukasi sejarah mengenai Monumen Nasional (Monas) Jakarta yang dikerjakan bersama teman sekelompok.',
      overview: 'Proyek kelompok yang membahas dan mengeksplorasi Monumen Nasional (Monas) sebagai salah satu ikon penting Jakarta dan Indonesia. Informasi mengenai sejarah kemerdekaan, tinggi 132 meter, fungsi cawan, serta lidah api emas dikumpulkan dan dikemas menjadi materi visual dan video yang mudah dipahami.',
      role: 'Mencari informasi materi sejarah, menyusun poin naskah materi, dan membantu menentukan konsep alur video bersama kelompok.',
      tools: 'Materi riset sejarah, smartphone, dan aplikasi video editor (CapCut).',
      whatIDid: 'Mengumpulkan bahan riset sejarah Monas, berdiskusi mengenai urutan scene video, dan membantu rekan satu tim saat proses pengambilan dan penyusunan materi.',
      learnings: [
        'Belajar pentingnya kerja sama kelompok dan pembagian tugas yang adil.',
        'Belajar menyederhanakan informasi sejarah agar mudah dipahami penonton.',
        'Mengenal dasar-dasar alur pembuatan video edukasi.'
      ],
      image: 'assets/projects/monas/monas-video-preview.jpg',
      imageCaption: 'Dokumentasi Video Edukatif Monas',
      videoUrl: 'https://youtu.be/DpoM_Qq4wT0',
      externalLinks: {
        googleDrive: '' // Diisi jika link drive view-only tersedia
      },
      gallery: [
        {
          src: 'assets/projects/monas/monas-video-preview.jpg',
          caption: 'Dokumentasi Visual Video Edukatif Monas (132 Meter & Sejarah)'
        }
      ],
      quizKey: 'monas'
    },
    2: {
      id: 2,
      title: 'Infografis Pencemaran Lingkungan',
      category: 'media',
      categoryLabel: 'Desain & Media',
      tags: ['Infografis', 'Canva', 'Sains Lingkungan', 'Prinsip 3R'],
      summary: 'Desain infografis visual mengenai berbagai jenis pencemaran lingkungan (udara, air, tanah), dampaknya bagi kehidupan, dan solusi nyata 3R.',
      overview: 'Proyek infografis yang membahas permasalahan pencemaran lingkungan dan berbagai solusi yang dapat dilakukan untuk menguranginya. Proyek ini dibuat untuk menyampaikan informasi sains secara singkat, visual, dan menarik perhatian teman sekelas.',
      role: 'Membantu proyek secara keseluruhan, terutama mengerjakan bagian solusi ramah lingkungan dan membantu membawakan presentasi di depan kelas.',
      tools: 'Canva (aplikasi desain grafis).',
      whatIDid: 'Mendesain bagian solusi dan pemilahan sampah di Canva, memilih ikon yang sesuai, dan menyusun poin presentasi bersama anggota kelompok.',
      learnings: [
        'Melatih kemampuan presentasi dan berbicara di hadapan teman sekelas.',
        'Memahami penerapan prinsip 3R (Reduce, Reuse, Recycle) untuk mengurangi sampah.',
        'Belajar membuat tata letak visual infografis yang seimbang dan nyaman dibaca.'
      ],
      image: 'assets/projects/pollution/pollution-infographic.jpg',
      imageCaption: 'Infografis Keanekaragaman Hayati & Pencemaran Lingkungan',
      videoUrl: '',
      externalLinks: {
        googleDrive: ''
      },
      gallery: [
        {
          src: 'assets/projects/pollution/pollution-infographic.jpg',
          caption: 'Infografis Keanekaragaman Hayati & Solusi 3R'
        }
      ],
      quizKey: 'pollution'
    },
    3: {
      id: 3,
      title: 'Presentasi Teknologi Notion AI',
      category: 'tech',
      categoryLabel: 'AI & Teknologi',
      tags: ['Notion AI', 'Kecerdasan Buatan', 'Slide Presentasi', 'Teknologi'],
      summary: 'Presentasi mengenai pemanfaatan alat bantu Notion AI untuk meningkatkan produktivitas belajar siswa, seperti mencatat dan merangkum materi.',
      overview: 'Di proyek ini saya membuat presentasi tentang Notion AI dan belajar bagaimana kecerdasan buatan dapat digunakan secara bijak untuk membantu kegiatan belajar siswa sehari-hari.',
      role: 'Menyusun materi presentasi tentang fitur Notion AI, menyiapkan slide, dan mempresentasikan materi tersebut di hadapan kelas.',
      tools: 'Notion AI dan aplikasi slide presentasi.',
      whatIDid: 'Mengeksplorasi fitur-fitur Notion AI untuk mencatat dan merangkum, membuat materi penjelasan yang mudah dipahami, serta menjawab pertanyaan teman-teman saat sesi tanya jawab.',
      learnings: [
        'Belajar bagaimana teknologi AI dapat dimanfaatkan secara bijak untuk mendukung aktivitas belajar.',
        'Menyadari bahwa informasi dari AI harus tetap diperiksa dan diverifikasi kebenarannya oleh manusia.',
        'Meningkatkan rasa percaya diri saat menjelaskan topik teknologi di depan kelas.'
      ],
      image: 'assets/projects/notion-ai/notion-slide-preview.jpg',
      imageCaption: 'Slide Presentasi Edukasi Memahami Notion AI',
      videoUrl: '',
      externalLinks: {
        googleDrive: ''
      },
      gallery: [
        {
          src: 'assets/projects/notion-ai/notion-slide-preview.jpg',
          caption: 'Slide Presentasi Edukasi Memahami Notion AI'
        }
      ],
      quizKey: 'notion_ai'
    },
    4: {
      id: 4,
      title: 'Biografi Émile Durkheim',
      category: 'physical',
      categoryLabel: 'Fisik & Prakarya',
      tags: ['Sosiologi', 'Karton & Fisik', 'Tokoh Klasik', 'Kerja Sama'],
      summary: 'Penyusunan media biografi tokoh sosiologi klasik Émile Durkheim dan teori fakta sosial yang ditulis dan dihias langsung di media karton fisik.',
      overview: 'Tugas sosiologi untuk mempelajari riwayat hidup, konsep fakta sosial, dan pengaruh pemikiran Émile Durkheim terhadap masyarakat modern melalui lembar karton A3 manual.',
      role: 'Mencari informasi materi, menyusun ringkasan, menuliskan bagian materi di atas karton, membuat dekorasi karton, dan melakukan presentasi kelompok.',
      tools: 'Karton, alat tulis (spidol, pena, penggaris), dan perlengkapan fisik pendukung tugas.',
      whatIDid: 'Membaca referensi biografi Durkheim, menulis materi dengan spidol di atas lembaran karton, menghias layout visual karton secara manual, dan mempresentasikan hasilnya bersama tim.',
      learnings: [
        'Memahami konsep dasar sosiologi dan pemikiran tokoh Émile Durkheim.',
        'Melatih kerja sama kelompok dalam mengerjakan media fisik bersama.',
        'Mengasah kreativitas penyusunan layout manual di atas media kertas/karton.'
      ],
      image: 'assets/projects/durkheim/durkheim-biography.jpg',
      imageCaption: 'Lembar Karton Biografi & Teori Émile Durkheim',
      videoUrl: '',
      externalLinks: {
        googleDrive: ''
      },
      gallery: [
        {
          src: 'assets/projects/durkheim/durkheim-biography.jpg',
          caption: 'Mind Map Visual Biografi Émile Durkheim (Media Karton A3)'
        }
      ],
      quizKey: 'durkheim'
    },
    5: {
      id: 5,
      title: 'Kerajinan Daur Ulang',
      category: 'physical',
      categoryLabel: 'Fisik & Prakarya',
      tags: ['Daur Ulang', 'Karton & Koran', 'Upcycling', 'Kreativitas'],
      summary: 'Karya produk bernilai guna dan estetis dari barang bekas yang dirakit bersama kelompok untuk memanfaatkan kembali limbah kertas/karton.',
      overview: 'Proyek prakarya dan lingkungan hidup untuk mengubah barang bekas di sekitar menjadi produk yang bermanfaat serta mengedukasi pentingnya pemilahan sampah.',
      role: 'Mencari ide desain produk kerajinan, membuat produk bersama, memotong dan merakit bahan, serta melakukan presentasi hasil kerajinan.',
      tools: 'Karton bekas, koran bekas, gunting, dan lem.',
      whatIDid: 'Mengumpulkan bahan bekas yang bersih, memotong karton dan koran sesuai pola, merekatkan dengan lem, menyusun komponen hingga jadi produk utuh, dan memamerkannya di kelas.',
      learnings: [
        'Belajar cara memanfaatkan barang bekas di sekitar menjadi barang yang bernilai guna.',
        'Mengasah kreativitas dan ketelitian dalam merakit bahan secara manual.',
        'Melatih kekompakan kerja sama kelompok dalam menyelesaikan produk tepat waktu.'
      ],
      image: 'assets/projects/recycling/recycling-project.jpg',
      imageCaption: 'Dokumentasi Proyek Kerajinan Daur Ulang & Pilah Sampah',
      videoUrl: '',
      externalLinks: {
        googleDrive: ''
      },
      gallery: [
        {
          src: 'assets/projects/recycling/recycling-project.jpg',
          caption: 'Dokumentasi Edukasi dan Pemilahan Sampah Proyek Daur Ulang'
        }
      ],
      quizKey: 'recycling'
    }
  };

  // --------------------------------------------------------------------------
  // 2. DATA STORE: 20 QUIZ QUESTIONS (5 ABOUT ME + 15 PROJECT QUESTIONS)
  // --------------------------------------------------------------------------
  const QUIZZES_DATA = {
    about_me: {
      title: 'Kuis Tentang Saya (5 Soal)',
      subtitle: 'Uji seberapa kenal kamu dengan profil Muhammad Ad Dairabiy!',
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
    },
    monas: {
      title: 'Kuis Proyek Monas (3 Soal)',
      subtitle: '3 pertanyaan berdasarkan isi materi proyek video edukasi Monas',
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
      title: 'Kuis Pencemaran Lingkungan (3 Soal)',
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
      title: 'Kuis Presentasi Notion AI (3 Soal)',
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
      title: 'Kuis Biografi Émile Durkheim (3 Soal)',
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
      title: 'Kuis Kerajinan Daur Ulang (3 Soal)',
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

  // --------------------------------------------------------------------------
  // 3. RETRO 8-BIT AUDIO SYNTHESIZER (WEB AUDIO API)
  // --------------------------------------------------------------------------
  class RetroSoundSynth {
    constructor() {
      this.ctx = null;
      this.isMuted = localStorage.getItem('abiy_pixel_sfx_muted') === 'true';
      this.updateButtonUI();
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.isMuted = !this.isMuted;
      localStorage.setItem('abiy_pixel_sfx_muted', this.isMuted);
      this.updateButtonUI();
      if (!this.isMuted) {
        this.playClick();
      }
      return !this.isMuted;
    }

    updateButtonUI() {
      const soundBtn = document.getElementById('btn-sound-toggle');
      const soundIcon = document.getElementById('sound-icon');
      if (soundBtn && soundIcon) {
        if (this.isMuted) {
          soundBtn.classList.add('muted');
          soundIcon.className = 'fa-solid fa-volume-xmark';
          soundBtn.title = 'Efek Suara Dimatikan (Klik untuk menyalakan)';
        } else {
          soundBtn.classList.remove('muted');
          soundIcon.className = 'fa-solid fa-volume-high';
          soundBtn.title = 'Efek Suara Menyala (Klik untuk mematikan)';
        }
      }
    }

    playTone(freq, type = 'square', duration = 0.08, gainVal = 0.05) {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;

      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        // Ignore audio errors gracefully
      }
    }

    playClick() {
      this.playTone(580, 'triangle', 0.06, 0.04);
    }

    playBuildingSelect() {
      if (this.isMuted) return;
      this.init();
      this.playTone(440, 'square', 0.06, 0.04);
      setTimeout(() => this.playTone(660, 'square', 0.08, 0.04), 60);
    }

    playCorrect() {
      if (this.isMuted) return;
      this.init();
      this.playTone(523.25, 'triangle', 0.08, 0.06); // C5
      setTimeout(() => this.playTone(659.25, 'triangle', 0.08, 0.06), 80); // E5
      setTimeout(() => this.playTone(783.99, 'triangle', 0.14, 0.06), 160); // G5
    }

    playWrong() {
      if (this.isMuted) return;
      this.init();
      this.playTone(280, 'sawtooth', 0.1, 0.06);
      setTimeout(() => this.playTone(190, 'sawtooth', 0.2, 0.06), 90);
    }

    playTrophy() {
      if (this.isMuted) return;
      this.init();
      const notes = [440, 554, 659, 880];
      notes.forEach((note, idx) => {
        setTimeout(() => this.playTone(note, 'square', 0.1, 0.06), idx * 100);
      });
    }
  }

  const sfx = new RetroSoundSynth();

  const soundToggleBtn = document.getElementById('btn-sound-toggle');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const active = sfx.toggleMute();
      displayToast(active ? '🔊 Efek suara 8-bit diaktifkan.' : '🔇 Efek suara dinonaktifkan.', 'info');
    });
  }

  // --------------------------------------------------------------------------
  // 4. DAY / NEON NIGHT THEME SWITCHER
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  let currentTheme = localStorage.getItem('abiy_pixel_theme') || 'night';

  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('abiy_pixel_theme', theme);
    if (theme === 'day') {
      document.body.classList.remove('theme-night');
      document.body.classList.add('theme-day');
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
      if (themeToggleBtn) themeToggleBtn.title = 'Ganti ke Malam Neon';
    } else {
      document.body.classList.remove('theme-day');
      document.body.classList.add('theme-night');
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
      if (themeToggleBtn) themeToggleBtn.title = 'Ganti ke Siang Cerah';
    }
  }

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      sfx.playClick();
      const nextTheme = currentTheme === 'night' ? 'day' : 'night';
      applyTheme(nextTheme);
      displayToast(nextTheme === 'day' ? '☀️ Suasana kota: Siang Cerah' : '🌙 Suasana kota: Malam Neon', 'info');
    });
  }

  // --------------------------------------------------------------------------
  // 5. HERO SECTION DYNAMIC TYPING EFFECT
  // --------------------------------------------------------------------------
  const typingRoleEl = document.getElementById('typing-role');
  const studentPhases = [
    'Siswa Kelas X-D SMAN 70 Jakarta',
    'Masih belajar coding & web dasar',
    'Tertarik pada AI & teknologi digital',
    'Suka desain grafis & video editing'
  ];

  let currentPhaseIdx = 0;
  let charIdx = 0;
  let isBackspacing = false;
  const typeSpeed = 75;
  const backSpeed = 35;
  const holdTime = 2000;

  function handleTyping() {
    if (!typingRoleEl) return;
    const text = studentPhases[currentPhaseIdx];

    if (isBackspacing) {
      charIdx--;
      typingRoleEl.textContent = text.substring(0, charIdx);
      if (charIdx <= 0) {
        isBackspacing = false;
        currentPhaseIdx = (currentPhaseIdx + 1) % studentPhases.length;
        setTimeout(handleTyping, 400);
        return;
      }
      setTimeout(handleTyping, backSpeed);
    } else {
      charIdx++;
      typingRoleEl.textContent = text.substring(0, charIdx);
      if (charIdx >= text.length) {
        isBackspacing = true;
        setTimeout(handleTyping, holdTime);
        return;
      }
      setTimeout(handleTyping, typeSpeed);
    }
  }

  setTimeout(handleTyping, 600);

  // --------------------------------------------------------------------------
  // 6. INTERACTIVE PIXEL CITY BUILDINGS & LIVING NPCS
  // --------------------------------------------------------------------------
  const pixelBuildings = document.querySelectorAll('.pixel-building');
  pixelBuildings.forEach(b => {
    b.addEventListener('mouseenter', () => {
      sfx.playTone(700, 'sine', 0.03, 0.015);
    });

    b.addEventListener('click', () => {
      sfx.playBuildingSelect();
      const target = b.getAttribute('data-target');
      const buildingType = b.getAttribute('data-building');

      if (target) {
        const targetEl = document.querySelector(target);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (buildingType === 'quiz') {
        setTimeout(() => startQuiz('about_me'), 400);
      }
    });

    b.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        b.click();
      }
    });
  });

  // City quick jump buttons
  const cityJumpBtns = document.querySelectorAll('[data-jump]');
  cityJumpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      const dest = btn.getAttribute('data-jump');
      const destEl = document.querySelector(dest);
      if (destEl) {
        destEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Living NPCs interactive click dialogues
  const npcDialogs = {
    'npc-walker': [
      'Halo! Aku lagi jalan ke SMAN 70 nih! 👋',
      'Sudah coba kuis 20 soal di Quiz Center?',
      'Jangan lupa tonton video Monas di Project Hub!',
      'Semangat belajar terus setiap hari!'
    ],
    'npc-waver': [
      'Hai! Aku teman sekelas Abiy di X-D! ✨',
      'Tugas sosiologi Durkheim waktu itu seru banget!',
      'Prakarya daur ulang dari karton juga seru lho!',
      'Selamat menjelajahi Pixel City!'
    ],
    'npc-coder': [
      'Lagi ngetik syntax dasar HTML & CSS nih 💻',
      'Coding itu menyenangkan kalau dinikmati!',
      'Awalnya bikin web karena tugas Robotik lho.',
      'Yuk eksplorasi teknologi bersama!'
    ],
    'npc-cat': [
      'Meow~ Selamat datang di kota belajar! 🐱',
      'Purrrr... Jangan lupa cek 5 proyek Abiy ya!',
      'Nyan! Kucing pixel siap menyemangati belajarmu!',
      'Meow meow~ 🐾'
    ]
  };

  Object.keys(npcDialogs).forEach(npcId => {
    const npcEl = document.getElementById(npcId);
    const bubbleEl = npcEl ? npcEl.querySelector('.npc-bubble') : null;
    let dialogIdx = 0;

    if (npcEl && bubbleEl) {
      npcEl.addEventListener('click', (e) => {
        e.stopPropagation();
        sfx.playTone(850, 'triangle', 0.08, 0.05);
        const list = npcDialogs[npcId];
        dialogIdx = (dialogIdx + 1) % list.length;
        bubbleEl.textContent = list[dialogIdx];
        bubbleEl.style.opacity = '1';
        bubbleEl.style.transform = 'translateX(-50%) translateY(-4px)';
        setTimeout(() => {
          bubbleEl.style.transform = 'translateX(-50%) translateY(0)';
        }, 200);
      });
    }
  });

  // --------------------------------------------------------------------------
  // 7. RENDER 5 PROJECTS IN PROJECT HUB
  // --------------------------------------------------------------------------
  const projectsGrid = document.getElementById('projects-grid');
  let currentFilter = 'all';

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const projectList = Object.values(PROJECTS_DATA).filter(p => {
      if (filter === 'all') return true;
      return p.category === filter;
    });

    projectList.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project-card pixel-box';
      card.setAttribute('data-id', p.id);

      const tagsHtml = p.tags.map(t => '<span class="project-tag">' + t + '</span>').join('');

      card.innerHTML = 
        '<div class="project-thumb-box" data-action="open-modal" data-id="' + p.id + '" tabindex="0" role="button" aria-label="Buka detail ' + p.title + '">' +
          '<span class="project-badge-category">' + p.categoryLabel + '</span>' +
          '<img src="' + p.image + '" alt="' + p.title + '" class="project-thumb-img" loading="lazy">' +
          '<span class="project-zoom-hint"><i class="fa-solid fa-magnifying-glass-plus"></i> Detail</span>' +
        '</div>' +
        '<div class="project-card-body">' +
          '<h3 class="project-card-title">' + p.title + '</h3>' +
          '<div class="project-tags-list">' + tagsHtml + '</div>' +
          '<p class="project-card-summary">' + p.summary + '</p>' +
          '<div class="project-card-role-box">' +
            '<strong>Peran Saya:</strong> ' + p.role +
          '</div>' +
          '<div class="project-card-actions">' +
            '<button type="button" class="pixel-btn-sm btn-primary btn-open-detail" data-id="' + p.id + '">' +
              '<i class="fa-solid fa-eye"></i> <span>Detail</span>' +
            '</button>' +
            '<button type="button" class="pixel-btn-sm btn-secondary btn-card-quiz" data-quiz-key="' + p.quizKey + '">' +
              '<i class="fa-solid fa-gamepad"></i> <span>Kuis</span>' +
            '</button>' +
          '</div>' +
        '</div>';

      projectsGrid.appendChild(card);
    });

    // Attach click listeners to cards
    document.querySelectorAll('.btn-open-detail, .project-thumb-box').forEach(el => {
      el.addEventListener('click', () => {
        sfx.playClick();
        const id = parseInt(el.getAttribute('data-id'), 10);
        openProjectModal(id);
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = parseInt(el.getAttribute('data-id'), 10);
          openProjectModal(id);
        }
      });
    });

    document.querySelectorAll('.btn-card-quiz').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick();
        const key = btn.getAttribute('data-quiz-key');
        const quizSection = document.getElementById('quiz');
        if (quizSection) {
          quizSection.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => startQuiz(key), 400);
      });
    });
  }

  // Initial render
  renderProjects('all');

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderProjects(currentFilter);
    });
  });

  // --------------------------------------------------------------------------
  // 8. PROJECT DETAIL MODAL SYSTEM
  // --------------------------------------------------------------------------
  const projectModal = document.getElementById('project-modal');
  const projectModalContent = document.getElementById('project-modal-content');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const btnCloseProjModal = document.getElementById('btn-close-project-modal');
  const btnModalCloseAction = document.getElementById('btn-modal-close-action');
  const btnProjModalPrev = document.getElementById('btn-proj-modal-prev');
  const btnProjModalNext = document.getElementById('btn-proj-modal-next');
  const projModalCounter = document.getElementById('proj-modal-counter');

  let activeModalProjectId = 1;
  const projectKeys = Object.keys(PROJECTS_DATA).map(k => parseInt(k, 10));

  function openProjectModal(id) {
    const project = PROJECTS_DATA[id];
    if (!project || !projectModal || !projectModalContent) return;

    activeModalProjectId = id;
    const currentIdx = projectKeys.indexOf(id) + 1;
    if (projModalCounter) {
      projModalCounter.textContent = currentIdx + ' / ' + projectKeys.length;
    }

    // Video button rendering (Only if URL exists)
    const hasVideo = Boolean(project.videoUrl && project.videoUrl.trim() !== '');
    const videoBtnHtml = hasVideo ? 
      '<a href="' + project.videoUrl + '" target="_blank" rel="noopener noreferrer" class="pixel-btn btn-danger">' +
        '<i class="fa-solid fa-play"></i> <span>Tonton Video Monas</span>' +
      '</a>' : '';

    // Google Drive button rendering (Only if URL exists)
    const hasDrive = Boolean(project.externalLinks && project.externalLinks.googleDrive && project.externalLinks.googleDrive.trim() !== '');
    const driveBtnHtml = hasDrive ? 
      '<a href="' + project.externalLinks.googleDrive + '" target="_blank" rel="noopener noreferrer" class="pixel-btn btn-secondary">' +
        '<i class="fa-solid fa-folder-open"></i> <span>Lihat Dokumentasi Lengkap</span>' +
      '</a>' : '';

    const learningsHtml = project.learnings.map(item => '<li><i class="fa-solid fa-check"></i> <span>' + item + '</span></li>').join('');

    projectModalContent.innerHTML = 
      '<div class="detail-hero-box" id="modal-img-trigger" title="Klik untuk membuka galeri foto layar penuh">' +
        '<img src="' + project.image + '" alt="' + project.title + '" class="detail-hero-img">' +
        '<div class="detail-hero-caption">' +
          '<i class="fa-solid fa-camera"></i> ' + project.imageCaption + ' (Klik untuk zoom)' +
        '</div>' +
      '</div>' +

      '<div class="detail-section">' +
        '<h3 class="detail-label"><i class="fa-solid fa-circle-info"></i> RINGKASAN PROYEK</h3>' +
        '<p class="detail-text">' + project.overview + '</p>' +
      '</div>' +

      '<div class="detail-section">' +
        '<h3 class="detail-label"><i class="fa-solid fa-user-gear"></i> PERAN SAYA</h3>' +
        '<p class="detail-text">' + project.role + '</p>' +
      '</div>' +

      '<div class="detail-section">' +
        '<h3 class="detail-label"><i class="fa-solid fa-wrench"></i> ALAT & BAHAN</h3>' +
        '<p class="detail-text">' + project.tools + '</p>' +
      '</div>' +

      '<div class="detail-section">' +
        '<h3 class="detail-label"><i class="fa-solid fa-list-check"></i> YANG SAYA KERJAKAN</h3>' +
        '<p class="detail-text">' + project.whatIDid + '</p>' +
      '</div>' +

      '<div class="detail-section">' +
        '<h3 class="detail-label"><i class="fa-solid fa-graduation-cap"></i> YANG SAYA PELAJARI</h3>' +
        '<ul class="detail-learnings-list">' + learningsHtml + '</ul>' +
      '</div>' +

      '<div class="detail-actions-row">' +
        videoBtnHtml +
        driveBtnHtml +
        '<button type="button" class="pixel-btn btn-primary" id="btn-modal-start-quiz" data-quiz-key="' + project.quizKey + '">' +
          '<i class="fa-solid fa-gamepad"></i> <span>Kuis Proyek Ini (3 Soal)</span>' +
        '</button>' +
      '</div>';

    // Lightbox trigger from modal image
    const imgTrigger = document.getElementById('modal-img-trigger');
    if (imgTrigger) {
      imgTrigger.addEventListener('click', () => {
        openLightbox(project.gallery, 0);
      });
    }

    // Modal quiz trigger
    const modalQuizBtn = document.getElementById('btn-modal-start-quiz');
    if (modalQuizBtn) {
      modalQuizBtn.addEventListener('click', () => {
        const qKey = modalQuizBtn.getAttribute('data-quiz-key');
        closeProjectModal();
        const quizSection = document.getElementById('quiz');
        if (quizSection) quizSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => startQuiz(qKey), 400);
      });
    }

    projectModal.classList.remove('hidden');
    if (modalBackdrop) modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (projectModal) projectModal.classList.add('hidden');
    if (modalBackdrop) modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (btnCloseProjModal) btnCloseProjModal.addEventListener('click', () => { sfx.playClick(); closeProjectModal(); });
  if (btnModalCloseAction) btnModalCloseAction.addEventListener('click', () => { sfx.playClick(); closeProjectModal(); });
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  if (btnProjModalPrev) {
    btnProjModalPrev.addEventListener('click', () => {
      sfx.playClick();
      const currentIdx = projectKeys.indexOf(activeModalProjectId);
      const prevIdx = (currentIdx - 1 + projectKeys.length) % projectKeys.length;
      openProjectModal(projectKeys[prevIdx]);
    });
  }

  if (btnProjModalNext) {
    btnProjModalNext.addEventListener('click', () => {
      sfx.playClick();
      const currentIdx = projectKeys.indexOf(activeModalProjectId);
      const nextIdx = (currentIdx + 1) % projectKeys.length;
      openProjectModal(projectKeys[nextIdx]);
    });
  }

  // --------------------------------------------------------------------------
  // 9. LIGHTBOX IMAGE GALLERY (FULLSCREEN PREVIEW)
  // --------------------------------------------------------------------------
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxPrevBtn = document.getElementById('lightbox-prev');
  const lightboxNextBtn = document.getElementById('lightbox-next');

  let activeGallery = [];
  let activeGalleryIdx = 0;

  function openLightbox(gallery, startIdx = 0) {
    if (!gallery || gallery.length === 0 || !lightboxModal) return;
    activeGallery = gallery;
    activeGalleryIdx = startIdx;
    updateLightboxUI();

    lightboxModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    sfx.playClick();
  }

  function updateLightboxUI() {
    const item = activeGallery[activeGalleryIdx];
    if (!item) return;

    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxCaption) lightboxCaption.textContent = item.caption || '';
    if (lightboxCounter) lightboxCounter.textContent = (activeGalleryIdx + 1) + ' / ' + activeGallery.length;
  }

  function closeLightbox() {
    if (lightboxModal) lightboxModal.classList.add('hidden');
    if (!projectModal || projectModal.classList.contains('hidden')) {
      document.body.style.overflow = '';
    }
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', () => { sfx.playClick(); closeLightbox(); });
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', () => {
      sfx.playClick();
      activeGalleryIdx = (activeGalleryIdx - 1 + activeGallery.length) % activeGallery.length;
      updateLightboxUI();
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', () => {
      sfx.playClick();
      activeGalleryIdx = (activeGalleryIdx + 1) % activeGallery.length;
      updateLightboxUI();
    });
  }

  // --------------------------------------------------------------------------
  // 10. QUICK QUIZ ARENA (20 INTERACTIVE QUESTIONS ENGINE)
  // --------------------------------------------------------------------------
  const quizSelectorGrid = document.getElementById('quiz-selector-grid');
  const quizActiveArena = document.getElementById('quiz-active-arena');

  let activeQuizKey = 'about_me';
  let currentQIdx = 0;
  let quizScore = 0;
  let answered = false;

  function startQuiz(quizKey) {
    const quizData = QUIZZES_DATA[quizKey];
    if (!quizData || !quizActiveArena || !quizSelectorGrid) return;

    activeQuizKey = quizKey;
    currentQIdx = 0;
    quizScore = 0;
    answered = false;

    quizSelectorGrid.classList.add('hidden');
    quizActiveArena.classList.remove('hidden');

    renderQuizStep();
    sfx.playClick();
  }

  function renderQuizStep() {
    const quizData = QUIZZES_DATA[activeQuizKey];
    if (!quizData || !quizActiveArena) return;

    const q = quizData.questions[currentQIdx];
    const totalQ = quizData.questions.length;
    answered = false;

    const optionsHtml = q.options.map((opt, idx) => 
      '<button type="button" class="quiz-option-btn" data-index="' + idx + '">' +
        '<span class="quiz-option-key">' + String.fromCharCode(65 + idx) + '</span>' +
        '<span class="quiz-option-label">' + opt + '</span>' +
      '</button>'
    ).join('');

    const nextBtnLabel = (currentQIdx + 1 === totalQ) ? 'Lihat Hasil 🏆' : 'Soal Berikutnya ▶';

    quizActiveArena.innerHTML = 
      '<div class="quiz-header-status">' +
        '<span class="quiz-category-tag">' + quizData.title + '</span>' +
        '<span class="quiz-counter-tag">SOAL ' + (currentQIdx + 1) + ' / ' + totalQ + '</span>' +
      '</div>' +

      '<div class="quiz-question-box">' +
        '<h3 class="quiz-question-text">' + q.q + '</h3>' +
      '</div>' +

      '<div class="quiz-options-list" id="quiz-options-container">' +
        optionsHtml +
      '</div>' +

      '<div class="quiz-feedback-box hidden" id="quiz-feedback-box">' +
      '</div>' +

      '<div class="quiz-footer-actions">' +
        '<button type="button" class="pixel-btn-sm btn-secondary" id="btn-quiz-back-hub">' +
          '<i class="fa-solid fa-arrow-left"></i> <span>Ganti Kuis</span>' +
        '</button>' +
        '<button type="button" class="pixel-btn-sm btn-primary hidden" id="btn-quiz-next">' +
          '<span>' + nextBtnLabel + '</span>' +
        '</button>' +
      '</div>';

    // Attach option click listeners
    const optionBtns = quizActiveArena.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
        handleAnswer(selectedIdx);
      });
    });

    const backHubBtn = document.getElementById('btn-quiz-back-hub');
    if (backHubBtn) {
      backHubBtn.addEventListener('click', () => {
        sfx.playClick();
        exitQuizToHub();
      });
    }

    const nextBtn = document.getElementById('btn-quiz-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        sfx.playClick();
        if (currentQIdx + 1 < totalQ) {
          currentQIdx++;
          renderQuizStep();
        } else {
          renderQuizResult();
        }
      });
    }
  }

  function handleAnswer(selectedIndex) {
    answered = true;
    const quizData = QUIZZES_DATA[activeQuizKey];
    const q = quizData.questions[currentQIdx];
    const isCorrect = selectedIndex === q.correct;

    if (isCorrect) {
      quizScore++;
      sfx.playCorrect();
    } else {
      sfx.playWrong();
    }

    const optionBtns = quizActiveArena.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    const feedbackBox = document.getElementById('quiz-feedback-box');
    const nextBtn = document.getElementById('btn-quiz-next');

    if (feedbackBox) {
      feedbackBox.className = 'quiz-feedback-box ' + (isCorrect ? 'correct' : 'wrong');
      feedbackBox.innerHTML = 
        '<h4 class="quiz-feedback-title">' + (isCorrect ? '✅ JAWABAN BENAR!' : '❌ JAWABAN KURANG TEPAT!') + '</h4>' +
        '<p class="quiz-feedback-desc">' + q.feedback + '</p>';
      feedbackBox.classList.remove('hidden');
    }

    if (nextBtn) {
      nextBtn.classList.remove('hidden');
      nextBtn.focus();
    }
  }

  function renderQuizResult() {
    const quizData = QUIZZES_DATA[activeQuizKey];
    const totalQ = quizData.questions.length;
    sfx.playTrophy();

    let studentFeedback = '';
    if (activeQuizKey === 'about_me') {
      if (quizScore === 5) {
        studentFeedback = 'Kenal saya banget 😎 Siap jalan bareng keliling Pixel City!';
      } else if (quizScore >= 3) {
        studentFeedback = 'Sudah lumayan kenal dengan profil dan cerita belajar saya!';
      } else {
        studentFeedback = 'Kayaknya harus jalan-jalan keliling Pixel City dulu nih biar makin kenal 😭';
      }
    } else {
      if (quizScore === 3) {
        studentFeedback = 'Sempurna 3/3! Kamu membaca dan memahami proyek ini dengan sangat baik 🌟';
      } else if (quizScore === 2) {
        studentFeedback = 'Bagus 2/3! Pemahamanmu terhadap proyek ini sudah cukup baik.';
      } else {
        studentFeedback = 'Belum maksimal, yuk baca ulang rangkuman proyeknya di Project Hub!';
      }
    }

    quizActiveArena.innerHTML = 
      '<div class="quiz-result-card">' +
        '<div class="result-trophy-icon">' +
          '<i class="fa-solid fa-trophy"></i>' +
        '</div>' +
        '<div class="result-score-badge">SKOR AKHIR: ' + quizScore + ' / ' + totalQ + '</div>' +
        '<h3 class="result-title">Hasil Kuis Selesai!</h3>' +
        '<p class="result-msg">' + studentFeedback + '</p>' +

        '<div class="result-buttons-row">' +
          '<button type="button" class="pixel-btn btn-secondary" id="btn-quiz-retake">' +
            '<i class="fa-solid fa-rotate-left"></i> <span>Ulangi Kuis Ini</span>' +
          '</button>' +
          '<button type="button" class="pixel-btn btn-primary" id="btn-quiz-hub-return">' +
            '<i class="fa-solid fa-list"></i> <span>Pilih Kuis Lain</span>' +
          '</button>' +
        '</div>' +
      '</div>';

    const retakeBtn = document.getElementById('btn-quiz-retake');
    const hubReturnBtn = document.getElementById('btn-quiz-hub-return');

    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        startQuiz(activeQuizKey);
      });
    }

    if (hubReturnBtn) {
      hubReturnBtn.addEventListener('click', () => {
        sfx.playClick();
        exitQuizToHub();
      });
    }
  }

  function exitQuizToHub() {
    if (quizSelectorGrid) quizSelectorGrid.classList.remove('hidden');
    if (quizActiveArena) {
      quizActiveArena.classList.add('hidden');
      quizActiveArena.innerHTML = '';
    }
  }

  // Quiz Selector Mode Buttons
  const startQuizBtns = document.querySelectorAll('.btn-start-quiz');
  startQuizBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-quiz-key');
      startQuiz(key);
    });
  });

  // Shortcut Buttons
  const btnHeroQuiz = document.getElementById('btn-hero-quiz');
  const btnNavQuickQuiz = document.getElementById('btn-nav-quick-quiz');
  const btnDrawerQuiz = document.getElementById('btn-drawer-quiz');
  const btnQuizAboutMe = document.getElementById('btn-quiz-about-me');
  const btnJumpProjectQuiz = document.getElementById('btn-jump-project-quiz');

  function jumpAndStartQuiz(key = 'about_me') {
    const quizSec = document.getElementById('quiz');
    if (quizSec) quizSec.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => startQuiz(key), 400);
  }

  if (btnHeroQuiz) btnHeroQuiz.addEventListener('click', () => jumpAndStartQuiz('about_me'));
  if (btnNavQuickQuiz) btnNavQuickQuiz.addEventListener('click', () => jumpAndStartQuiz('about_me'));
  if (btnDrawerQuiz) {
    btnDrawerQuiz.addEventListener('click', () => {
      closeDrawer();
      jumpAndStartQuiz('about_me');
    });
  }
  if (btnQuizAboutMe) btnQuizAboutMe.addEventListener('click', () => jumpAndStartQuiz('about_me'));
  if (btnJumpProjectQuiz) btnJumpProjectQuiz.addEventListener('click', () => jumpAndStartQuiz('monas'));

  // --------------------------------------------------------------------------
  // 11. SCROLL PROGRESS & SPY ACTIVE NAVIGATION
  // --------------------------------------------------------------------------
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Progress bar
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = scrolled + '%';
    }

    // Back to top button visibility
    const backTopBtn = document.getElementById('back-top-btn');
    if (backTopBtn) {
      if (window.scrollY > 400) {
        backTopBtn.classList.add('visible');
      } else {
        backTopBtn.classList.remove('visible');
      }
    }

    // Active Section Spy
    const scrollPos = window.scrollY + 160;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const targetNav = document.querySelector('.nav-link[href="#' + id + '"]');

      if (targetNav) {
        if (scrollPos >= top && scrollPos < top + secHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          targetNav.classList.add('active');
        }
      }
    });
  });

  const backTopBtn = document.getElementById('back-top-btn');
  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      sfx.playClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 12. MOBILE DRAWER NAVIGATION
  // --------------------------------------------------------------------------
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    sfx.playClick();
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (navToggleBtn) navToggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    if (navToggleBtn) navToggleBtn.setAttribute('aria-expanded', 'false');
  }

  if (navToggleBtn) navToggleBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // --------------------------------------------------------------------------
  // 13. CONTACT FORM VALIDATION & TOAST SYSTEM
  // --------------------------------------------------------------------------
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
        sfx.playWrong();
        displayToast('Harap lengkapi semua kolom bertanda bintang (*).', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        sfx.playWrong();
        displayToast('Format alamat email tidak valid.', 'error');
        return;
      }

      const origBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Mengirimkan Pesan...</span>';

      setTimeout(() => {
        sfx.playCorrect();
        submitBtn.disabled = false;
        submitBtn.innerHTML = origBtnHtml;
        contactForm.reset();
        displayToast('Terima kasih, ' + name + '! Pesan Anda telah dicatat (dairabih2@gmail.com).', 'success');
      }, 900);
    });
  }

  function displayToast(msg, type = 'success') {
    const wrapper = document.getElementById('toast-wrapper');
    if (!wrapper) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item ' + type;

    let icon = 'fa-circle-check text-green';
    if (type === 'error') icon = 'fa-circle-exclamation text-coral';
    if (type === 'info') icon = 'fa-circle-info text-cyan';
    if (type === 'easter-egg') icon = 'fa-wand-magic-sparkles text-purple';

    toast.innerHTML = '<i class="fa-solid ' + icon + '"></i> <span>' + msg + '</span>';
    wrapper.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-20px)';
      toast.style.transition = '0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --------------------------------------------------------------------------
  // 14. EASTER EGG & KEYBOARD CONTROLS
  // --------------------------------------------------------------------------
  const brandLogo = document.getElementById('brand-logo');
  let logoClickCount = 0;
  let logoTimer = null;

  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      logoClickCount++;
      clearTimeout(logoTimer);

      if (logoClickCount === 5) {
        e.preventDefault();
        sfx.playTrophy();
        displayToast('🎉 Secret Unlocked! Semangat belajar coding dan membangun masa depan!', 'easter-egg');
        logoClickCount = 0;
      } else {
        logoTimer = setTimeout(() => {
          logoClickCount = 0;
        }, 1400);
      }
    });
  }

  // Escape & Arrow keys navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
        closeLightbox();
      } else if (projectModal && !projectModal.classList.contains('hidden')) {
        closeProjectModal();
      } else if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    } else if (e.key === 'ArrowLeft') {
      if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
        if (lightboxPrevBtn) lightboxPrevBtn.click();
      }
    } else if (e.key === 'ArrowRight') {
      if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
        if (lightboxNextBtn) lightboxNextBtn.click();
      }
    }
  });

  // Dynamic Current Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
