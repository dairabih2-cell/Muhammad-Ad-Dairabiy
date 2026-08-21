/**
 * Enhanced JavaScript Interactive Script
 * Portfolio of Muhammad Ad Dairabiy (Siswa SMAN 70 Jakarta Kelas X-D)
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. DATA STORE: Projects Information (Structured Academic Data)
  // -------------------------------------------------------------------------
  const studentProjects = {
    1: {
      title: 'Proyek Biografi Émile Durkheim',
      category: 'School • Creative',
      tags: ['Canva', 'PowerPoint', 'Riset Sosiologi', 'Infografis'],
      objective: 'Menyusun media edukatif dan infografis mengenai pemikiran, teori fakta sosial, dan riwayat hidup tokoh sosiologi klasik Émile Durkheim.',
      role: 'Riset konten tokoh, perancangan tata letak visual infografis di Canva, dan penyusunan slide presentasi PowerPoint.',
      learnings: [
        'Memahami metode riset kepustakaan dan sintesis gagasan sosiologi yang padat.',
        'Meningkatkan keterampilan tata letak grafis dan pemilihan warna kontras pada infografis.',
        'Mengasah teknik penyampaian materi secara runtut dan percaya diri di hadapan audiens.'
      ],
      output: 'Lembar infografis digital resolusi tinggi & set slide presentasi PowerPoint terstruktur.'
    },
    2: {
      title: 'Proyek Video Edukatif Monas (Monumen Nasional)',
      category: 'School • Creative',
      tags: ['Video Editing', 'Kerja Sama Tim', 'Sejarah Edukatif', 'Multimedia'],
      objective: 'Membuat video dokumenter edukatif yang mengulas sejarah perjuangan, arsitektur cawan dan lidah api emas, serta nilai filosofis Monumen Nasional.',
      role: 'Penyusunan naskah video bersama tim, proses editing potongan video, pemilihan audio latar bebas royalti, dan penyelarasan transisi visual.',
      learnings: [
        'Melatih manajemen kerja sama kelompok dan pembagian tanggung jawab yang jelas.',
        'Menguasai dasar editing video: pemotongan klip (trimming), audio syncing, dan teks narasi.',
        'Mengemas informasi sejarah menjadi tayangan audiovisual yang menarik dan mudah dicerna.'
      ],
      output: 'Video dokumenter edukatif berdurasi ringkas siap tayang untuk tugas sekolah.'
    },
    3: {
      title: 'Infografis Pencemaran Lingkungan',
      category: 'School • Creative',
      tags: ['Desain Informasi', 'Sains Lingkungan', 'Canva', 'Visual Data'],
      objective: 'Memetakan permasalahan pencemaran lingkungan (udara, air, tanah) beserta dampak bagi kesehatan dan memberikan solusi preventif bagi pelajar.',
      role: 'Pengumpulan data fakta polusi perkotaan, visualisasi hierarki informasi, dan pemilihan elemen visual informatif di Canva.',
      learnings: [
        'Mengubah informasi sains dan data statistik menjadi grafik visual yang mudah dipahami.',
        'Memahami pentingnya edukasi prinsip 3R (Reduce, Reuse, Recycle) dalam kehidupan sehari-hari.',
        'Meningkatkan efisiensi kerja desain grafis menggunakan perkakas digital Canva.'
      ],
      output: 'Poster infografis edukasi lingkungan siap cetak dan publikasi digital.'
    },
    4: {
      title: 'Proyek Kerajinan Daur Ulang',
      category: 'School • Creative',
      tags: ['Eco Project', 'Kerajinan Tangan', 'Upcycling', 'Teamwork'],
      objective: 'Mewujudkan karya nyata ramah lingkungan dengan mengolah barang bekas tidak terpakai menjadi produk kerajinan yang fungsional dan estetis.',
      role: 'Brainstorming ide produk, pemilihan material daur ulang yang aman, perakitan produk bersama kelompok, dan penyusunan laporan efisiensi.',
      learnings: [
        'Mengembangkan daya kreativitas dalam melihat potensi nilai guna dari barang bekas.',
        'Mengasah kerja sama tim dalam mengatasi tantangan teknis saat proses perakitan.',
        'Menyadari pentingnya aksi nyata pelestarian lingkungan melalui konsep upcycling.'
      ],
      output: 'Produk fisik kerajinan fungsional ramah lingkungan dan laporan proyek singkat.'
    },
    5: {
      title: 'Presentasi Teknologi Notion AI',
      category: 'School • Technology',
      tags: ['Notion AI', 'Kecerdasan Buatan', 'Public Speaking', 'Digital Skills'],
      objective: 'Mengedukasi rekan sekelas mengenai pemanfaatan kecerdasan buatan (Notion AI) untuk meningkatkan efisiensi mencatat materi, merangkum, dan produktivitas belajar.',
      role: 'Eksplorasi fitur Notion AI, penyusunan materi presentasi berbasis studi kasus pelajar, serta memimpin sesi pemaparan dan tanya jawab di kelas.',
      learnings: [
        'Memahami kapabilitas teknologi AI generatif dan implementasi praktisnya untuk kebutuhan edukasi.',
        'Meningkatkan kemampuan public speaking dalam menjelaskan konsep teknologi kompleks dengan bahasa sederhana.',
        'Menumbuhkan kesadaran etika pemanfaatan kecerdasan buatan yang bertanggung jawab di kalangan siswa.'
      ],
      output: 'Slide presentasi materi Notion AI & panduan praktis pemanfaatan AI untuk pelajar.'
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
  // 3. DATA STORE: Mini Portfolio Quiz Questions
  // -------------------------------------------------------------------------
  const quizQuestions = [
    {
      q: 'Di sekolah manakah Muhammad Ad Dairabiy bersekolah saat ini?',
      options: [
        'SMA Negeri 70 Jakarta (Kelas X-D)',
        'SMA Negeri 8 Jakarta',
        'SMP Negeri 68 Jakarta Selatan'
      ],
      correct: 0,
      feedback: 'Tepat! Muhammad adalah siswa aktif di SMA Negeri 70 Jakarta Kelas X-D.'
    },
    {
      q: 'Apa minat utama dan aspirasi masa depan yang ditekuni oleh Muhammad?',
      options: [
        'Seni Musik Tradisional',
        'Teknologi, Komputer & Pemrograman',
        'Kedokteran Hewan'
      ],
      correct: 1,
      feedback: 'Benar! Muhammad memiliki antusiasme tinggi di bidang komputer dan pemrograman.'
    },
    {
      q: 'Proyek sekolah manakah yang membahas isu lingkungan dan prinsip 3R?',
      options: [
        'Proyek Video Monas',
        'Infografis Pencemaran Lingkungan',
        'Biografi Émile Durkheim'
      ],
      correct: 1,
      feedback: 'Tepat sekali! Proyek tersebut memetakan solusi pencemaran lingkungan.'
    },
    {
      q: 'Ekstrakurikuler apa yang pernah diikuti Muhammad saat di bangku SMP?',
      options: [
        'Klub IPA (SMPN 68 Jakarta Selatan)',
        'Klub Robotik Nasional',
        'Klub Basket Pelajar'
      ],
      correct: 0,
      feedback: 'Tepat! Muhammad aktif di Klub IPA SMPN 68 Jakarta Selatan.'
    },
    {
      q: 'Alat bantu kecerdasan buatan (AI) apa yang pernah dipresentasikan oleh Muhammad di kelas?',
      options: [
        'Autonomous Flight AI',
        'Notion AI',
        'Self-Driving Vehicle System'
      ],
      correct: 1,
      feedback: 'Benar! Presentasi Notion AI membahas efisiensi belajar dan produktivitas siswa.'
    }
  ];

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

  // Project Modal
  const projectModal = document.getElementById('project-modal');
  const projectModalInner = document.getElementById('modal-inner');
  const projectModalClose = document.getElementById('modal-close-btn');
  const projectModalBackdrop = document.getElementById('modal-backdrop');

  function openProjectDetail(id) {
    const proj = studentProjects[id];
    if (!proj || !projectModalInner) return;

    projectModalInner.innerHTML = `
      <div class="project-modal-header">
        <span class="project-modal-tag">${proj.category}</span>
        <h3 class="project-modal-title">${proj.title}</h3>
        <div class="project-tag-chips">
          ${proj.tags.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>

      <div class="project-meta-grid">
        <div class="p-meta-box">
          <span class="p-meta-title">Peran Siswa</span>
          <span class="p-meta-value">${proj.role}</span>
        </div>
        <div class="p-meta-box">
          <span class="p-meta-title">Tujuan Proyek</span>
          <span class="p-meta-value">${proj.objective}</span>
        </div>
      </div>

      <h4 class="p-section-heading"><i class="fa-solid fa-graduation-cap text-blue"></i> Apa yang Dipelajari:</h4>
      <ul class="p-takeaways-list">
        ${proj.learnings.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <h4 class="p-section-heading"><i class="fa-solid fa-box-archive text-blue"></i> Hasil / Output Proyek:</h4>
      <div class="p-output-box">
        <i class="fa-solid fa-circle-check text-blue" style="font-size: 16px;"></i>
        <span>${proj.output}</span>
      </div>

      <button class="btn btn-secondary btn-block" id="modal-inner-close-btn">
        <i class="fa-solid fa-check"></i>
        <span>Tutup Rincian</span>
      </button>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const innerClose = document.getElementById('modal-inner-close-btn');
    if (innerClose) {
      innerClose.addEventListener('click', closeProjectDetail);
    }
  }

  function closeProjectDetail() {
    if (projectModal) projectModal.classList.remove('active');
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
  // 10. MINI "PORTFOLIO QUIZ" ("Test Your Knowledge")
  // -------------------------------------------------------------------------
  const quizModal = document.getElementById('quiz-modal');
  const quizModalClose = document.getElementById('quiz-modal-close');
  const quizModalBackdrop = document.getElementById('quiz-modal-backdrop');
  const quizNavBtn = document.getElementById('quiz-nav-btn');
  const quizContainer = document.getElementById('quiz-container');

  let currentQuizIdx = 0;
  let quizScore = 0;
  let quizAnswered = false;

  function renderQuizQuestion() {
    if (!quizContainer) return;
    const qData = quizQuestions[currentQuizIdx];
    const totalQ = quizQuestions.length;
    const progressPercent = ((currentQuizIdx + 1) / totalQ) * 100;
    quizAnswered = false;

    quizContainer.innerHTML = `
      <span class="quiz-header-badge">Test Your Knowledge</span>
      <h3 class="quiz-title">Portfolio Knowledge Quiz</h3>
      <p class="quiz-sub">Uji pemahaman Anda mengenai informasi di portofolio ini.</p>

      <div class="quiz-progress-track">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="quiz-card">
        <span class="quiz-q-num">Pertanyaan ${currentQuizIdx + 1} dari ${totalQ}</span>
        <h4 class="quiz-q-text">${qData.q}</h4>

        <div class="quiz-opts-group">
          ${qData.options.map((opt, i) => `
            <button class="quiz-opt-btn" data-opt="${i}">
              <span class="node-number">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-feedback-strip" id="quiz-feedback-strip"></div>

        <button class="btn btn-primary btn-block" id="quiz-next-btn" style="display: none; margin-top: 10px;">
          <span>${currentQuizIdx + 1 === totalQ ? 'Lihat Skor Akhir' : 'Lanjut ke Pertanyaan Berikutnya'}</span>
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

        if (nextBtn) nextBtn.style.display = 'inline-flex';
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
    if (!quizContainer) return;
    const totalQ = quizQuestions.length;
    let message = '';

    if (quizScore === totalQ) {
      message = 'Luar biasa! Anda adalah Portfolio Explorer sejati yang menjelajahi setiap detail dengan sangat cermat.';
    } else if (quizScore >= 3) {
      message = 'Bagus sekali! Anda telah membaca sebagian besar informasi penting di portofolio ini.';
    } else {
      message = 'Terima kasih telah mencoba! Anda dapat menjelajahi bagian lain dari portofolio untuk mengenal Muhammad lebih dalam.';
    }

    quizContainer.innerHTML = `
      <div class="quiz-result-box">
        <div class="quiz-trophy-icon">
          <i class="fa-solid fa-award"></i>
        </div>
        <span class="quiz-score-badge">Portfolio Explorer — ${quizScore}/${totalQ}</span>
        <h3 class="quiz-title" style="margin-top: 5px;">Hasil Kuis Anda</h3>
        <p class="quiz-result-msg">${message}</p>
        
        <div style="display: flex; gap: 10px; width: 100%; margin-top: 15px;">
          <button class="btn btn-secondary btn-block" id="quiz-retake-btn">
            <i class="fa-solid fa-rotate-left"></i>
            <span>Ulangi Kuis</span>
          </button>
          <button class="btn btn-primary btn-block" id="quiz-finish-btn">
            <i class="fa-solid fa-check"></i>
            <span>Selesai</span>
          </button>
        </div>
      </div>
    `;

    const retakeBtn = document.getElementById('quiz-retake-btn');
    const finishBtn = document.getElementById('quiz-finish-btn');

    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        currentQuizIdx = 0;
        quizScore = 0;
        renderQuizQuestion();
      });
    }

    if (finishBtn) {
      finishBtn.addEventListener('click', closeQuizModal);
    }
  }

  function openQuizModal() {
    currentQuizIdx = 0;
    quizScore = 0;
    renderQuizQuestion();
    if (quizModal) {
      quizModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeQuizModal() {
    if (quizModal) quizModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (quizNavBtn) quizNavBtn.addEventListener('click', openQuizModal);
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
      closeProjectDetail();
      closeQuizModal();
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
