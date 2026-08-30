/**
 * ==========================================================================
 * MUHAMMAD AD DAIRABIY // IMMERSIVE PIXEL REALM ENGINE
 * Journey-to-Content Navigation: WORLD -> PLAYER -> DESTINATION -> JOURNEY -> CONTENT
 * Blue Fireball Fast Travel, Train Transit, Multi-Zone World, Kraken Encounter
 * Dominant Font: 'Press Start 2P', monospace
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA STORE (100% Authentic Student Information & Destination System)
  // --------------------------------------------------------------------------
  const REALM_DATA = {
    profile: {
      name: 'Muhammad Ad Dairabiy',
      nickname: 'Abiy',
      role: 'Siswa · Desainer · Editor Video',
      school: 'SMAN 70 Jakarta (Kelas X-D)',
      tagline: 'Menciptakan pengalaman digital dan konten visual.',
      aboutP1: 'Saya adalah seorang siswa yang tertarik pada teknologi, desain, dan kreativitas digital.',
      aboutP2: 'Saya senang mengeksplorasi berbagai hal baru, mulai dari membuat situs web dan mengembangkan desain visual hingga mengedit video serta bereksperimen dengan teknologi baru dan alat AI.',
      aboutP3: 'Saya suka membuat desain, mengedit video, mengeksplorasi situs web, bereksperimen dengan teknologi baru, mendengarkan musik, dan mengembangkan proyek digital.',
      futureGoal: 'Saya ingin terus meningkatkan kemampuan di bidang teknologi, desain, dan pengembangan digital sambil membangun proyek yang melampaui tugas sekolah dan menjadi bagian dari portofolio pribadi saya.',
      email: 'dairabih2@gmail.com',
      instagram: '@abiyxd',
      instagramUrl: 'https://instagram.com/abiyxd'
    },

    skills: [
      {
        num: '01',
        title: 'EDITING VIDEO',
        desc: 'Membuat dan mengedit konten video dengan memperhatikan alur cerita, visual, transisi, dan penyampaian informasi.'
      },
      {
        num: '02',
        title: 'DESAIN GRAFIS',
        desc: 'Membuat poster, infografis, presentasi, dan konten visual digital.'
      },
      {
        num: '03',
        title: 'DESAIN UI/UX',
        desc: 'Mengeksplorasi desain antarmuka dan pengalaman pengguna dengan fokus pada pengalaman digital yang modern, menarik, dan mudah digunakan.'
      },
      {
        num: '04',
        title: 'PENGEMBANGAN WEB',
        desc: 'Mengeksplorasi pengembangan situs web dan mempelajari bagaimana desain dapat menjadi pengalaman digital yang interaktif.'
      },
      {
        num: '05',
        title: 'AI & ALAT DIGITAL',
        desc: 'Mengeksplorasi alat AI dan teknologi digital untuk mendukung pembelajaran, kreativitas, desain, dan pengembangan proyek.'
      }
    ],

    toolsPrimary: ['Canva', 'CapCut', 'Visual Studio Code', 'GitHub', 'Alat AI'],
    toolsSecondary: ['Figma', 'Adobe Photoshop', 'Notion', 'Notion AI'],

    projects: {
      1: {
        id: 1,
        title: 'Mengeksplorasi Monumen Nasional',
        year: '2026',
        category: 'Proyek Sekolah · Sejarah · Presentasi Visual',
        role: 'Riset · Konten · Presentasi',
        tools: 'Canva · CapCut · Alat AI',
        image: 'assets/projects/monas/monas-video-preview.jpg',
        caption: 'Dokumentasi Visual Riset & Video Monumen Nasional',
        overview: 'Proyek kelompok yang membahas dan mengeksplorasi Monumen Nasional (Monas) sebagai salah satu ikon penting Jakarta dan Indonesia. Informasi mengenai sejarah, fungsi, serta hal-hal menarik tentang Monas dikumpulkan dan dikemas menjadi materi visual dan video yang mudah dipahami.',
        process: 'Proses dimulai dengan mencari dan mengumpulkan informasi mengenai Monas, menentukan informasi yang paling relevan, kemudian menyusun materi agar memiliki alur yang jelas. Setelah itu, informasi dikembangkan menjadi materi visual dan video untuk kebutuhan presentasi kelompok.',
        challenge: 'Tantangan utamanya adalah memilih informasi yang benar-benar penting dari berbagai sumber dan menyampaikannya secara singkat tanpa membuat materi terlalu padat atau membosankan.',
        solution: 'Informasi dipilih berdasarkan relevansinya dengan topik, kemudian disusun secara terstruktur dan dikombinasikan dengan elemen visual agar materi lebih mudah dipahami dan menarik untuk dilihat.',
        result: 'Menghasilkan materi presentasi dan video mengenai Monumen Nasional yang dapat digunakan untuk menyampaikan informasi sejarah dan fakta mengenai Monas dengan cara yang lebih visual dan menarik.',
        learnings: 'Belajar bagaimana melakukan riset informasi, menyusun materi secara terstruktur, bekerja dalam kelompok, serta mengubah informasi menjadi konten visual yang lebih mudah dipahami.'
      },
      2: {
        id: 2,
        title: 'Biografi Émile Durkheim',
        year: '2026',
        category: 'Proyek Sekolah · Sosiologi · Desain Visual',
        role: 'Riset · Pengorganisasian Konten · Desain Visual',
        tools: 'Canva · Alat AI',
        image: 'assets/projects/durkheim/durkheim-biography.jpg',
        caption: 'Mind Map Visual Biografi & Pemikiran Émile Durkheim (Media Karton A3)',
        overview: 'Proyek kelompok yang membahas biografi dan pemikiran Émile Durkheim, salah satu tokoh penting dalam perkembangan ilmu sosiologi. Informasi mengenai kehidupan, pemikiran, dan kontribusinya disusun dalam bentuk visual agar lebih mudah dipahami.',
        process: 'Proses dimulai dengan mencari informasi mengenai Émile Durkheim, kemudian memilih informasi penting seperti latar belakang, kehidupan, pemikiran, dan kontribusinya terhadap sosiologi. Informasi tersebut kemudian diringkas dan disusun menggunakan konsep mind map pada media karton A3.',
        challenge: 'Tantangannya adalah mengubah informasi yang cukup banyak mengenai seorang tokoh menjadi materi yang singkat, jelas, dan tetap mudah dibaca pada media yang terbatas.',
        solution: 'Informasi dikelompokkan berdasarkan topik utama dan disusun menggunakan struktur mind map. Elemen visual juga digunakan untuk membedakan setiap bagian sehingga pembaca dapat memahami hubungan antar-informasi dengan lebih mudah.',
        result: 'Menghasilkan media visual berbentuk mind map mengenai Émile Durkheim yang merangkum informasi penting tentang kehidupan, pemikiran, dan kontribusinya dalam sosiologi.',
        learnings: 'Belajar merangkum informasi yang kompleks, mengatur informasi berdasarkan prioritas, membuat struktur visual, serta bekerja sama dalam mengembangkan sebuah proyek kelompok.'
      },
      3: {
        id: 3,
        title: 'Infografis Pencemaran Lingkungan',
        year: '2026',
        category: 'Proyek Sekolah · Infografis · Kesadaran Lingkungan',
        role: 'Riset · Konten · Desain Grafis',
        tools: 'Canva · Alat AI',
        image: 'assets/projects/pollution/pollution-infographic.jpg',
        caption: 'Desain Infografis Keanekaragaman Hayati & Solusi 3R',
        overview: 'Proyek infografis yang membahas permasalahan pencemaran lingkungan dan berbagai solusi yang dapat dilakukan untuk menguranginya. Proyek ini dibuat untuk menyampaikan informasi mengenai pencemaran lingkungan dengan cara yang singkat, visual, dan mudah dipahami.',
        process: 'Proses dimulai dengan mengidentifikasi informasi mengenai pencemaran lingkungan, kemudian menentukan poin-poin utama yang perlu dimasukkan ke dalam infografis. Setelah materi tersusun, informasi dikombinasikan dengan elemen desain seperti tipografi, ilustrasi, ikon, dan tata letak agar lebih mudah dibaca.',
        challenge: 'Tantangan utamanya adalah menyampaikan informasi yang cukup luas dalam ruang yang terbatas tanpa membuat infografis terlalu penuh dengan tulisan.',
        solution: 'Informasi disederhanakan menjadi poin-poin penting dan dikelompokkan berdasarkan topik. Bagian solusi difokuskan pada tindakan yang dapat dilakukan, seperti memilah sampah, menerapkan prinsip 3R, dan meningkatkan kesadaran terhadap lingkungan.',
        result: 'Menghasilkan infografis mengenai pencemaran lingkungan yang menyajikan permasalahan dan solusi secara ringkas serta visual sehingga informasi dapat dipahami dengan lebih cepat.',
        learnings: 'Belajar bagaimana menyederhanakan informasi menjadi konten visual, mengatur hierarki dalam desain, memilih informasi yang paling penting, dan membuat infografis yang komunikatif.'
      }
    },

    // Extended Multi-Zone Destination Registry
    destinations: {
      home: {
        id: 'home',
        name: 'HOME VALLEY',
        subtitle: 'Rumah & Tempat Mulai Abiy',
        icon: '🏠',
        x: -520,
        y: -220,
        radius: 70,
        color: '#4ecca3',
        actionText: 'RUMAH ABIY',
        targetModal: 'modal-about',
        visited: true
      },
      about: {
        id: 'about',
        name: 'ABOUT SANCTUM',
        subtitle: 'Perjalanan & Profil Siswa',
        icon: '📜',
        x: -280,
        y: -220,
        radius: 75,
        color: '#ffd166',
        actionText: 'TENTANG ABIY',
        targetModal: 'modal-about',
        visited: false
      },
      skills: {
        id: 'skills',
        name: 'TECH FORGE',
        subtitle: 'Workshop & Alat Digital',
        icon: '⚡',
        x: 280,
        y: -220,
        radius: 75,
        color: '#54a0ff',
        actionText: 'KEAHLIAN & ALAT',
        targetModal: 'modal-skills',
        visited: false
      },
      monas: {
        id: 'monas',
        name: 'MONAS PLAZA',
        subtitle: 'Proyek 01 — Monumen Nasional',
        icon: '🗼',
        x: -320,
        y: 380,
        radius: 80,
        color: '#ffd166',
        actionText: 'PROYEK 01: MONAS',
        targetModal: 'modal-project',
        projectId: 1,
        visited: false
      },
      durkheim: {
        id: 'durkheim',
        name: 'DURKHEIM ARCHIVE',
        subtitle: 'Proyek 02 — Biografi Durkheim',
        icon: '📚',
        x: 140,
        y: 400,
        radius: 80,
        color: '#ff9ff3',
        actionText: 'PROYEK 02: DURKHEIM',
        targetModal: 'modal-project',
        projectId: 2,
        visited: false
      },
      pollution: {
        id: 'pollution',
        name: 'ECO SANCTUM',
        subtitle: 'Proyek 03 — Infografis Lingkungan',
        icon: '🌿',
        x: 680,
        y: 420,
        radius: 80,
        color: '#4ecca3',
        actionText: 'PROYEK 03: LINGKUNGAN',
        targetModal: 'modal-project',
        projectId: 3,
        visited: false
      },
      contact: {
        id: 'contact',
        name: 'COMM BEACON',
        subtitle: 'Pemancar Sinyal & Kontak',
        icon: '📡',
        x: 950,
        y: 180,
        radius: 75,
        color: '#ef476f',
        actionText: 'HUBUNGI ABIY',
        targetModal: 'modal-contact',
        visited: false
      }
    }
  };

  // --------------------------------------------------------------------------
  // 2. RETRO 8-BIT SOUND SYNTHESIZER
  // --------------------------------------------------------------------------
  class SoundSynth {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('abiy_sfx_muted') === 'true';
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
      this.muted = !this.muted;
      localStorage.setItem('abiy_sfx_muted', this.muted);
      return !this.muted;
    }

    playTone(freq, type = 'square', duration = 0.08, gainVal = 0.05) {
      if (this.muted) return;
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
      } catch (e) {}
    }

    step() {
      this.playTone(160, 'triangle', 0.04, 0.02);
    }

    click() {
      this.playTone(520, 'square', 0.03, 0.03);
    }

    fireballTransform() {
      this.init();
      if (this.muted || !this.ctx) return;
      // Blue fireball whoosh sweep
      for (let i = 0; i < 8; i++) {
        setTimeout(() => this.playTone(280 + i * 90, 'sawtooth', 0.06, 0.03), i * 30);
      }
    }

    arrivalFanfare() {
      this.init();
      if (this.muted || !this.ctx) return;
      const notes = [392, 523, 659, 784, 1046];
      notes.forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 'square', 0.12, 0.04), idx * 60);
      });
    }

    modalClose() {
      this.init();
      if (this.muted || !this.ctx) return;
      const notes = [660, 440, 220];
      notes.forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 'triangle', 0.06, 0.03), idx * 40);
      });
    }
  }

  const sfx = new SoundSynth();

  // --------------------------------------------------------------------------
  // 3. PIXEL ART DRAWING HELPERS
  // --------------------------------------------------------------------------
  function drawPixelAvatar(ctx, size = 64) {
    const scale = size / 16;
    ctx.imageSmoothingEnabled = false;

    const skin = '#ffd3a5';
    const hair = '#2c1e19';
    const shirt = '#268bd2';
    const jacket = '#1a365d';
    const pants = '#1f2937';
    const eyes = '#111827';
    const shoes = '#e2e8f0';

    ctx.clearRect(0, 0, size, size);

    // Hair Top
    ctx.fillStyle = hair;
    ctx.fillRect(4 * scale, 1 * scale, 8 * scale, 3 * scale);
    ctx.fillRect(3 * scale, 2 * scale, 10 * scale, 3 * scale);

    // Face / Skin
    ctx.fillStyle = skin;
    ctx.fillRect(4 * scale, 4 * scale, 8 * scale, 5 * scale);

    // Eyes
    ctx.fillStyle = eyes;
    ctx.fillRect(5 * scale, 6 * scale, 2 * scale, 2 * scale);
    ctx.fillRect(9 * scale, 6 * scale, 2 * scale, 2 * scale);

    // Glasses
    ctx.fillStyle = '#4ecca3';
    ctx.fillRect(4 * scale, 5 * scale, 3 * scale, 1 * scale);
    ctx.fillRect(9 * scale, 5 * scale, 3 * scale, 1 * scale);
    ctx.fillRect(7 * scale, 6 * scale, 2 * scale, 1 * scale);

    // Jacket & Shirt
    ctx.fillStyle = jacket;
    ctx.fillRect(3 * scale, 9 * scale, 10 * scale, 4 * scale);
    ctx.fillStyle = shirt;
    ctx.fillRect(6 * scale, 9 * scale, 4 * scale, 4 * scale);

    // Pants & Shoes
    ctx.fillStyle = pants;
    ctx.fillRect(4 * scale, 13 * scale, 3 * scale, 2 * scale);
    ctx.fillRect(9 * scale, 13 * scale, 3 * scale, 2 * scale);

    ctx.fillStyle = shoes;
    ctx.fillRect(3 * scale, 15 * scale, 4 * scale, 1 * scale);
    ctx.fillRect(9 * scale, 15 * scale, 4 * scale, 1 * scale);
  }

  // --------------------------------------------------------------------------
  // 4. CORE IMMERSIVE ENGINE (CANVAS 2D 60FPS)
  // --------------------------------------------------------------------------
  class ImmersiveRealm {
    constructor() {
      this.canvas = document.getElementById('realm-canvas');
      this.ctx = this.canvas.getContext('2d');

      this.minimapCanvas = document.getElementById('minimap-canvas');
      this.minimapCtx = this.minimapCanvas.getContext('2d');

      this.bigMapCanvas = document.getElementById('big-map-canvas');
      this.bigMapCtx = this.bigMapCanvas.getContext('2d');

      this.width = window.innerWidth;
      this.height = window.innerHeight;

      // Player State Machine: 'IDLE' | 'WALKING' | 'TRANSFORMING_IN' | 'BLUE_FIREBALL' | 'TRANSFORMING_OUT' | 'ARRIVED'
      this.player = {
        x: -520, // Start at Home Valley
        y: -220,
        state: 'IDLE',
        targetX: null,
        targetY: null,
        destTarget: null, // Destination object
        speed: 3.5,
        fireballSpeed: 14,
        facing: 'down',
        walkCycle: 0,
        stepTimer: 0,
        animTimer: 0,
        fireballTrail: []
      };

      // Camera System with Dynamic Zoom
      this.camera = {
        x: -520,
        y: -220,
        zoom: 1.0,
        targetZoom: 1.0,
        lerp: 0.08,
        shake: 0
      };

      // Input State
      this.keys = {
        w: false, a: false, s: false, d: false,
        up: false, left: false, down: false, right: false
      };
      this.joystickVector = { x: 0, y: 0 };
      this.isTouchActive = false;

      // Environment & Atmospheric Systems
      this.particles = [];
      this.seaWaves = [];
      this.kraken = {
        x: 850,
        y: -250,
        tentacleProgress: 0, // 0 to 1
        active: false,
        timer: 0
      };
      this.train = {
        x: -400,
        y: 150,
        speed: 4,
        moving: true,
        smokeTimer: 0,
        smokePuffs: []
      };
      this.npcs = [
        { x: 460, y: 220, type: 'walker', range: 60, currentX: 460, dir: 1, color: '#f368e0' },
        { x: 540, y: 240, type: 'walker', range: 80, currentX: 540, dir: -1, color: '#ff9f43' },
        { x: -140, y: -230, type: 'seagull', startX: -140, startY: -230, angle: 0 }
      ];

      this.destinations = REALM_DATA.destinations;
      this.nearestLandmark = null;
      this.currentZoneName = 'HOME VALLEY';
      this.activeModal = null;
      this.isGameActive = false;

      this.initParticles();
      this.bindEvents();
    }

    initParticles() {
      // Dust / Stars
      this.particles = [];
      for (let i = 0; i < 140; i++) {
        this.particles.push({
          x: (Math.random() - 0.5) * 3200,
          y: (Math.random() - 0.5) * 2200,
          size: Math.random() < 0.7 ? 1.5 : 2.5,
          color: Math.random() < 0.5 ? '#4ecca3' : (Math.random() < 0.7 ? '#ffd166' : '#54a0ff'),
          alpha: 0.2 + Math.random() * 0.6,
          speedY: -0.2 - Math.random() * 0.3,
          speedX: (Math.random() - 0.5) * 0.2,
          flicker: Math.random() * Math.PI
        });
      }

      // Beach & Ocean Wave Rhythms
      this.seaWaves = [];
      for (let i = 0; i < 30; i++) {
        this.seaWaves.push({
          x: 100 + Math.random() * 1000,
          y: -400 + Math.random() * 320,
          len: 30 + Math.random() * 50,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    start() {
      this.isGameActive = true;
      this.resize();
      this.loop = this.loop.bind(this);
      requestAnimationFrame(this.loop);
    }

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx.imageSmoothingEnabled = false;
    }

    bindEvents() {
      window.addEventListener('resize', () => this.resize());

      // Keyboard Controls
      window.addEventListener('keydown', (e) => {
        if (this.activeModal) {
          if (e.key === 'Escape') closeAllModals();
          return;
        }

        switch (e.code) {
          case 'KeyW': this.keys.w = true; break;
          case 'KeyA': this.keys.a = true; break;
          case 'KeyS': this.keys.s = true; break;
          case 'KeyD': this.keys.d = true; break;
          case 'ArrowUp': this.keys.up = true; break;
          case 'ArrowLeft': this.keys.left = true; break;
          case 'ArrowDown': this.keys.down = true; break;
          case 'ArrowRight': this.keys.right = true; break;
          case 'KeyE':
          case 'Space':
          case 'Enter':
            e.preventDefault();
            this.triggerInteraction();
            break;
          case 'KeyM':
            e.preventDefault();
            openModal('modal-map');
            break;
          case 'KeyQ':
            e.preventDefault();
            toggleQuickView(true);
            break;
        }
      });

      window.addEventListener('keyup', (e) => {
        switch (e.code) {
          case 'KeyW': this.keys.w = false; break;
          case 'KeyA': this.keys.a = false; break;
          case 'KeyS': this.keys.s = false; break;
          case 'KeyD': this.keys.d = false; break;
          case 'ArrowUp': this.keys.up = false; break;
          case 'ArrowLeft': this.keys.left = false; break;
          case 'ArrowDown': this.keys.down = false; break;
          case 'ArrowRight': this.keys.right = false; break;
        }
      });

      // Canvas Pointer Down -> Click-to-Move
      this.canvas.addEventListener('pointerdown', (e) => {
        if (this.activeModal) return;
        if (e.target !== this.canvas) return;

        const screenX = e.clientX;
        const screenY = e.clientY;
        const worldX = (screenX - this.width / 2) / this.camera.zoom + this.camera.x;
        const worldY = (screenY - this.height / 2) / this.camera.zoom + this.camera.y;

        // Check if clicked near a destination
        let clickedDest = null;
        Object.values(this.destinations).forEach(dest => {
          if (Math.hypot(dest.x - worldX, dest.y - worldY) < dest.radius + 30) {
            clickedDest = dest;
          }
        });

        if (clickedDest) {
          this.initiateJourney(clickedDest.id);
        } else {
          // Normal manual walking to point
          if (this.player.state === 'BLUE_FIREBALL') return;
          this.player.targetX = worldX;
          this.player.targetY = worldY;
          this.player.destTarget = null;
          sfx.click();
        }
      });

      // Big Map Canvas click-to-travel
      this.bigMapCanvas.addEventListener('click', (e) => {
        const rect = this.bigMapCanvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        const mapWidth = this.bigMapCanvas.width;
        const mapHeight = this.bigMapCanvas.height;

        const worldX = ((clickX / mapWidth) - 0.5) * 2200;
        const worldY = ((clickY / mapHeight) - 0.5) * 1600;

        let closest = null;
        let minDist = 120;
        Object.values(this.destinations).forEach(dest => {
          const dist = Math.hypot(dest.x - worldX, dest.y - worldY);
          if (dist < minDist) {
            minDist = dist;
            closest = dest;
          }
        });

        closeAllModals();
        if (closest) {
          this.initiateJourney(closest.id);
        } else {
          this.initiateJourneyToCoords(worldX, worldY, 'EXPLORATION POINT');
        }
      });

      // Touch Virtual Joystick
      this.setupTouchControls();
    }

    setupTouchControls() {
      const base = document.getElementById('joystick-base');
      const thumb = document.getElementById('joystick-thumb');
      const btnAction = document.getElementById('btn-touch-interact');

      if (!base || !thumb) return;

      let touchId = null;
      const maxDist = 38;

      const onTouchStart = (e) => {
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          const rect = base.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          if (Math.hypot(t.clientX - cx, t.clientY - cy) < 75 && touchId === null) {
            touchId = t.identifier;
            this.isTouchActive = true;
            this.handleJoystick(t.clientX, t.clientY, cx, cy, maxDist, thumb);
            break;
          }
        }
      };

      const onTouchMove = (e) => {
        if (!this.isTouchActive) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          if (t.identifier === touchId) {
            const rect = base.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            this.handleJoystick(t.clientX, t.clientY, cx, cy, maxDist, thumb);
            break;
          }
        }
      };

      const onTouchEnd = (e) => {
        for (let i = 0; i < e.changedTouches.length; i++) {
          if (e.changedTouches[i].identifier === touchId) {
            touchId = null;
            this.isTouchActive = false;
            this.joystickVector = { x: 0, y: 0 };
            thumb.style.transform = 'translate(0px, 0px)';
            break;
          }
        }
      };

      base.addEventListener('touchstart', onTouchStart, { passive: false });
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd, { passive: false });
      window.addEventListener('touchcancel', onTouchEnd, { passive: false });

      if (btnAction) {
        btnAction.addEventListener('click', (e) => {
          e.preventDefault();
          this.triggerInteraction();
        });
      }
    }

    handleJoystick(tx, ty, cx, cy, maxDist, thumbEl) {
      const dx = tx - cx;
      const dy = ty - cy;
      const dist = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);

      const clamped = Math.min(dist, maxDist);
      const fx = Math.cos(angle) * clamped;
      const fy = Math.sin(angle) * clamped;

      thumbEl.style.transform = `translate(${fx}px, ${fy}px)`;
      this.joystickVector = {
        x: fx / maxDist,
        y: fy / maxDist
      };
      this.player.targetX = null;
      this.player.targetY = null;
    }

    // ------------------------------------------------------------------------
    // JOURNEY CONTROLLER: CLICK -> CHARACTER TRAVELS -> ARRIVAL -> CONTENT
    // ------------------------------------------------------------------------
    initiateJourney(destinationId) {
      const dest = this.destinations[destinationId];
      if (!dest) return;

      closeAllModals();
      const dist = Math.hypot(dest.x - this.player.x, dest.y - this.player.y);

      // Show travel status ticker
      const ticker = document.getElementById('travel-status-bar');
      const tickerText = document.getElementById('travel-status-text');
      if (ticker && tickerText) {
        ticker.classList.remove('hidden');
        tickerText.textContent = `TRAVELING TO: ${dest.name}...`;
      }

      this.player.destTarget = dest;
      this.player.targetX = dest.x;
      this.player.targetY = dest.y;

      // If long distance (> 220px), transform into BLUE FIREBALL!
      if (dist > 220) {
        sfx.fireballTransform();
        this.player.state = 'TRANSFORMING_IN';
        this.player.animTimer = 0;
        this.camera.targetZoom = 0.85; // Widen view during fast travel
      } else {
        // Normal direct walk
        this.player.state = 'WALKING';
        this.camera.targetZoom = 1.0;
      }
    }

    initiateJourneyToCoords(x, y, label) {
      const ticker = document.getElementById('travel-status-bar');
      const tickerText = document.getElementById('travel-status-text');
      if (ticker && tickerText) {
        ticker.classList.remove('hidden');
        tickerText.textContent = `TRAVELING TO: ${label}...`;
      }

      this.player.destTarget = null;
      this.player.targetX = x;
      this.player.targetY = y;
      sfx.fireballTransform();
      this.player.state = 'TRANSFORMING_IN';
      this.player.animTimer = 0;
      this.camera.targetZoom = 0.85;
    }

    onArrivalAtDestination(dest) {
      this.player.state = 'ARRIVED';
      this.camera.targetZoom = 1.12; // Focus zoom on destination
      sfx.arrivalFanfare();

      const ticker = document.getElementById('travel-status-bar');
      if (ticker) ticker.classList.add('hidden');

      if (dest) {
        dest.visited = true;
        this.currentZoneName = dest.name;

        // Open content modal after arrival framing
        setTimeout(() => {
          if (dest.projectId) {
            openProjectModal(dest.projectId);
          } else if (dest.targetModal) {
            openModal(dest.targetModal);
          }
          this.player.state = 'IDLE';
        }, 500);
      } else {
        setTimeout(() => {
          this.player.state = 'IDLE';
        }, 400);
      }
    }

    triggerInteraction() {
      if (this.nearestLandmark) {
        this.onArrivalAtDestination(this.nearestLandmark);
      }
    }

    // ------------------------------------------------------------------------
    // UPDATE LOOP
    // ------------------------------------------------------------------------
    update() {
      if (this.activeModal) return;

      // 1. Blue Fireball / Travel State Machine
      if (this.player.state === 'TRANSFORMING_IN') {
        this.player.animTimer += 1;
        if (this.player.animTimer > 18) {
          this.player.state = 'BLUE_FIREBALL';
        }
      } else if (this.player.state === 'TRANSFORMING_OUT') {
        this.player.animTimer += 1;
        if (this.player.animTimer > 18) {
          this.onArrivalAtDestination(this.player.destTarget);
        }
      } else if (this.player.state === 'BLUE_FIREBALL') {
        // High Speed Curved Flight towards Target
        if (this.player.targetX !== null && this.player.targetY !== null) {
          const dx = this.player.targetX - this.player.x;
          const dy = this.player.targetY - this.player.y;
          const dist = Math.hypot(dx, dy);

          if (dist > 16) {
            this.player.x += (dx / dist) * this.player.fireballSpeed;
            this.player.y += (dy / dist) * this.player.fireballSpeed;

            // Record motion trail
            this.player.fireballTrail.push({
              x: this.player.x,
              y: this.player.y,
              alpha: 1.0,
              size: 14 + Math.random() * 8
            });
          } else {
            this.player.x = this.player.targetX;
            this.player.y = this.player.targetY;
            this.player.targetX = null;
            this.player.targetY = null;
            this.player.state = 'TRANSFORMING_OUT';
            this.player.animTimer = 0;
            this.camera.targetZoom = 1.0;
          }
        }
      } else if (this.player.state === 'IDLE' || this.player.state === 'WALKING') {
        // Normal Walking Movement
        let mx = 0;
        let my = 0;

        if (this.keys.w || this.keys.up) my -= 1;
        if (this.keys.s || this.keys.down) my += 1;
        if (this.keys.a || this.keys.left) mx -= 1;
        if (this.keys.d || this.keys.right) mx += 1;

        if (this.isTouchActive && (Math.abs(this.joystickVector.x) > 0.1 || Math.abs(this.joystickVector.y) > 0.1)) {
          mx = this.joystickVector.x;
          my = this.joystickVector.y;
        }

        if (this.player.targetX !== null && this.player.targetY !== null) {
          const dx = this.player.targetX - this.player.x;
          const dy = this.player.targetY - this.player.y;
          const dist = Math.hypot(dx, dy);

          if (dist > 6) {
            mx = dx / dist;
            my = dy / dist;
          } else {
            this.player.targetX = null;
            this.player.targetY = null;
            if (this.player.destTarget) {
              this.onArrivalAtDestination(this.player.destTarget);
            }
          }
        }

        const len = Math.hypot(mx, my);
        if (len > 0) {
          this.player.state = 'WALKING';
          const nx = (mx / len) * Math.min(len, 1);
          const ny = (my / len) * Math.min(len, 1);

          this.player.x += nx * this.player.speed;
          this.player.y += ny * this.player.speed;

          if (Math.abs(nx) > Math.abs(ny)) {
            this.player.facing = nx > 0 ? 'right' : 'left';
          } else {
            this.player.facing = ny > 0 ? 'down' : 'up';
          }

          this.player.walkCycle += 0.22;
          this.player.stepTimer += 1;
          if (this.player.stepTimer % 18 === 0) sfx.step();
        } else {
          this.player.state = 'IDLE';
        }
      }

      // Update Fireball Trail
      for (let i = this.player.fireballTrail.length - 1; i >= 0; i--) {
        const pt = this.player.fireballTrail[i];
        pt.alpha -= 0.08;
        pt.size *= 0.92;
        if (pt.alpha <= 0) {
          this.player.fireballTrail.splice(i, 1);
        }
      }

      // World Boundary Clamping (-1200 to 1400)
      this.player.x = Math.max(-1100, Math.min(1300, this.player.x));
      this.player.y = Math.max(-700, Math.min(800, this.player.y));

      // Camera Smooth Follow & Dynamic Zoom
      this.camera.x += (this.player.x - this.camera.x) * this.camera.lerp;
      this.camera.y += (this.player.y - this.camera.y) * this.camera.lerp;
      this.camera.zoom += (this.camera.targetZoom - this.camera.zoom) * 0.05;

      // Update Environmental Systems:
      // A. Kraken Encounter in Deep Ocean (x: 850, y: -250)
      const distToKraken = Math.hypot(this.player.x - this.kraken.x, this.player.y - this.kraken.y);
      if (distToKraken < 450) {
        this.kraken.active = true;
        this.kraken.tentacleProgress = Math.min(1, this.kraken.tentacleProgress + 0.015);
      } else {
        this.kraken.tentacleProgress = Math.max(0, this.kraken.tentacleProgress - 0.02);
        if (this.kraken.tentacleProgress <= 0) this.kraken.active = false;
      }

      // B. Animated Train on Tracks (Home Station <-> City Station)
      this.train.x += this.train.speed;
      if (this.train.x > 750) this.train.x = -650;
      this.train.smokeTimer++;
      if (this.train.smokeTimer % 14 === 0) {
        this.train.smokePuffs.push({ x: this.train.x + 30, y: this.train.y - 18, size: 6, alpha: 0.8 });
      }
      for (let i = this.train.smokePuffs.length - 1; i >= 0; i--) {
        const p = this.train.smokePuffs[i];
        p.y -= 0.4;
        p.size += 0.3;
        p.alpha -= 0.02;
        if (p.alpha <= 0) this.train.smokePuffs.splice(i, 1);
      }

      // C. NPCs walking
      this.npcs.forEach(npc => {
        if (npc.type === 'walker') {
          npc.currentX += npc.dir * 0.8;
          if (Math.abs(npc.currentX - npc.x) > npc.range) npc.dir *= -1;
        } else if (npc.type === 'seagull') {
          npc.angle += 0.02;
        }
      });

      // D. Ambient Floating Particles
      this.particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.flicker += 0.05;
        if (p.y < this.camera.y - this.height / 2 - 50) {
          p.y = this.camera.y + this.height / 2 + 50;
          p.x = this.camera.x + (Math.random() - 0.5) * this.width;
        }
      });

      // Check Proximity to Nearest Landmark
      this.nearestLandmark = null;
      let minDistance = Infinity;
      let zoneName = 'IMMERSIVE REALM';

      Object.values(this.destinations).forEach(dest => {
        const dist = Math.hypot(dest.x - this.player.x, dest.y - this.player.y);
        if (dist < dest.radius + 40 && dist < minDistance) {
          minDistance = dist;
          this.nearestLandmark = dest;
          zoneName = dest.name;
        }
      });

      this.currentZoneName = zoneName;

      // Update HUD
      const coordsEl = document.getElementById('hud-coords-val');
      if (coordsEl) {
        coordsEl.textContent = `X: ${Math.round(this.player.x)} | Y: ${Math.round(this.player.y)}`;
      }
      const zoneEl = document.getElementById('hud-zone-name');
      if (zoneEl) {
        zoneEl.textContent = this.currentZoneName;
      }

      const promptEl = document.getElementById('interact-prompt');
      const promptTextEl = document.getElementById('prompt-action-text');
      if (this.nearestLandmark && this.player.state !== 'BLUE_FIREBALL') {
        promptEl.classList.remove('hidden');
        promptTextEl.textContent = this.nearestLandmark.actionText;
      } else {
        promptEl.classList.add('hidden');
      }
    }

    // ------------------------------------------------------------------------
    // RENDER LOOP
    // ------------------------------------------------------------------------
    render() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      ctx.save();
      // Apply Camera Transform & Dynamic Zoom
      ctx.translate(this.width / 2, this.height / 2);
      ctx.scale(this.camera.zoom, this.camera.zoom);
      ctx.translate(-this.camera.x, -this.camera.y);

      // 1. Draw Multi-Zone World Terrain
      this.drawWorldTerrain(ctx);

      // 2. Draw Train Tracks & Animated Metro Train
      this.drawRailwayAndTrain(ctx);

      // 3. Draw Ocean Waves & Kraken Encounter
      this.drawOceanAndKraken(ctx);

      // 4. Draw Atmospheric Particles
      this.drawParticles(ctx);

      // 5. Draw NPC Citizens & Seagulls
      this.drawNPCs(ctx);

      // 6. Draw Landmark Structures & Shrines
      Object.values(this.destinations).forEach(dest => {
        this.drawLandmark(ctx, dest);
      });

      // 7. Draw Player or Blue Fireball Transformation
      this.drawPlayerCharacter(ctx);

      ctx.restore();

      // 8. Draw HUD Radar Minimap & Big Map CRT
      this.renderMinimap();
      if (this.activeModal === 'modal-map') {
        this.renderBigMap();
      }
    }

    // ------------------------------------------------------------------------
    // WORLD TERRAIN & MULTI-ZONE DRAWING
    // ------------------------------------------------------------------------
    drawWorldTerrain(ctx) {
      // Space/Abyss background
      ctx.fillStyle = '#060810';
      ctx.fillRect(-1400, -900, 3000, 2000);

      // Zone 1 & 2: Main Green Continents
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(-900, -500, 1800, 1100);

      // Zone 2: Sandy Beach Shoreline (x: -180 to 200, y: -450 to -100)
      ctx.fillStyle = '#94723c';
      ctx.fillRect(-180, -420, 240, 260);
      ctx.fillStyle = '#d4a373';
      ctx.fillRect(-170, -410, 220, 240);

      // Beach Wooden Pier
      ctx.fillStyle = '#6b4c2b';
      ctx.fillRect(-60, -380, 24, 120);
      ctx.strokeStyle = '#3d2612';
      ctx.lineWidth = 2;
      ctx.strokeRect(-60, -380, 24, 120);

      // Zone 3: Open Ocean Blue Water (x: 60 to 1200, y: -500 to 0)
      ctx.fillStyle = '#092540';
      ctx.fillRect(60, -500, 1100, 420);
      ctx.fillStyle = '#0d3b66';
      ctx.fillRect(70, -490, 1080, 400);

      // Cobblestone Pathways Linking Shrines
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 26;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      // Home -> About -> Skills
      ctx.moveTo(-520, -220);
      ctx.lineTo(-280, -220);
      ctx.lineTo(280, -220);
      // About -> Monas -> Durkheim -> Eco -> Comm
      ctx.lineTo(-320, 380);
      ctx.lineTo(140, 400);
      ctx.lineTo(680, 420);
      ctx.lineTo(950, 180);
      ctx.stroke();

      // Pathway Center Cobble Line
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 10;
      ctx.stroke();

      // World Boundary Ring
      ctx.strokeStyle = '#ef476f';
      ctx.lineWidth = 3;
      ctx.setLineDash([16, 16]);
      ctx.strokeRect(-1000, -600, 2200, 1300);
      ctx.setLineDash([]);
    }

    drawRailwayAndTrain(ctx) {
      const ry = 150;
      // Train Tracks Ties
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(-700, ry);
      ctx.lineTo(800, ry);
      ctx.stroke();

      // Rails
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-700, ry - 4);
      ctx.lineTo(800, ry - 4);
      ctx.moveTo(-700, ry + 4);
      ctx.lineTo(800, ry + 4);
      ctx.stroke();

      // Train Station Platforms (Home & City)
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(-450, ry - 28, 90, 16);
      ctx.fillRect(450, ry - 28, 90, 16);
      ctx.fillStyle = '#ffd166';
      ctx.font = '6px "Press Start 2P", monospace';
      ctx.fillText('HOME STN', -440, ry - 18);
      ctx.fillText('CITY STN', 460, ry - 18);

      // Animated Smoke Puffs
      this.train.smokePuffs.forEach(p => {
        ctx.fillStyle = `rgba(226, 232, 240, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Retro Metro Train Cars
      const tx = this.train.x;
      // Locomotive
      ctx.fillStyle = '#0f766e';
      ctx.fillRect(tx, ry - 18, 55, 20);
      ctx.fillStyle = '#14b8a6';
      ctx.fillRect(tx + 40, ry - 16, 12, 16); // Cabin
      ctx.fillStyle = '#ffd166';
      ctx.fillRect(tx + 50, ry - 10, 4, 6); // Headlight
      // Carriage
      ctx.fillStyle = '#0e7490';
      ctx.fillRect(tx - 65, ry - 18, 58, 20);
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(tx - 55, ry - 14, 10, 8); // Window 1
      ctx.fillRect(tx - 35, ry - 14, 10, 8); // Window 2
      ctx.fillRect(tx - 15, ry - 14, 10, 8); // Window 3
    }

    drawOceanAndKraken(ctx) {
      const time = performance.now() * 0.003;

      // Animated Wave Foams
      this.seaWaves.forEach(w => {
        const wx = w.x + Math.sin(time + w.phase) * 6;
        const wy = w.y;
        ctx.strokeStyle = 'rgba(165, 243, 252, 0.45)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(wx, wy, 8, Math.PI, 0);
        ctx.stroke();
      });

      // Ocean Schooner / Sailboat (x: 420, y: -320)
      const boatX = 420;
      const boatY = -320 + Math.sin(time * 1.5) * 4;
      ctx.fillStyle = '#78350f';
      ctx.fillRect(boatX - 16, boatY, 32, 10);
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.moveTo(boatX, boatY - 24);
      ctx.lineTo(boatX + 14, boatY - 4);
      ctx.lineTo(boatX, boatY - 4);
      ctx.fill();

      // Area 04: Kraken Environmental Encounter (x: 850, y: -250)
      if (this.kraken.tentacleProgress > 0) {
        const kx = this.kraken.x;
        const ky = this.kraken.y;
        const prog = this.kraken.tentacleProgress;
        const sway = Math.sin(time * 2) * 12;

        // Giant Swirl
        ctx.strokeStyle = `rgba(56, 189, 248, ${prog * 0.7})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(kx, ky, 50 * prog, 0, Math.PI * 2);
        ctx.stroke();

        // 3 Giant Kraken Tentacles
        const tentacleOffsets = [-35, 0, 35];
        tentacleOffsets.forEach((ox, idx) => {
          const tHeight = 55 * prog;
          ctx.fillStyle = '#6b21a8';
          ctx.beginPath();
          ctx.moveTo(kx + ox - 8, ky);
          ctx.quadraticCurveTo(kx + ox + sway, ky - tHeight * 0.6, kx + ox + sway * 1.3, ky - tHeight);
          ctx.quadraticCurveTo(kx + ox + 8 + sway, ky - tHeight * 0.6, kx + ox + 8, ky);
          ctx.fill();

          // Suction Cups
          ctx.fillStyle = '#f472b6';
          for (let s = 0; s < 4; s++) {
            ctx.fillRect(kx + ox + (sway * s * 0.25), ky - s * (tHeight / 4) - 6, 3, 3);
          }
        });
      }
    }

    drawParticles(ctx) {
      this.particles.forEach(p => {
        const alpha = p.alpha * (0.6 + 0.4 * Math.sin(p.flicker));
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      ctx.globalAlpha = 1;
    }

    drawNPCs(ctx) {
      this.npcs.forEach(npc => {
        if (npc.type === 'walker') {
          // Pixel NPC
          ctx.fillStyle = npc.color;
          ctx.fillRect(npc.currentX - 5, npc.y - 16, 10, 12);
          ctx.fillStyle = '#ffd3a5';
          ctx.fillRect(npc.currentX - 3, npc.y - 22, 6, 6);
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(npc.currentX - 4, npc.y - 4, 3, 5);
          ctx.fillRect(npc.currentX + 1, npc.y - 4, 3, 5);
        } else if (npc.type === 'seagull') {
          const sx = npc.startX + Math.cos(npc.angle) * 70;
          const sy = npc.startY + Math.sin(npc.angle) * 40;
          ctx.fillStyle = '#fff';
          ctx.fillRect(sx - 4, sy, 8, 2);
          ctx.fillRect(sx - 2, sy - 2, 4, 2);
        }
      });
    }

    // ------------------------------------------------------------------------
    // LANDMARK DRAWING
    // ------------------------------------------------------------------------
    drawLandmark(ctx, dest) {
      const time = performance.now() * 0.003;
      const isNearby = this.nearestLandmark && this.nearestLandmark.id === dest.id;

      // Base Platform
      ctx.fillStyle = isNearby ? '#1e293b' : '#141829';
      ctx.strokeStyle = isNearby ? '#ffd166' : (dest.visited ? '#4ecca3' : '#334155');
      ctx.lineWidth = isNearby ? 3 : 2;
      ctx.beginPath();
      ctx.arc(dest.x, dest.y, dest.radius * 0.65, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Pulsing Beacon Ring
      ctx.strokeStyle = dest.color;
      ctx.lineWidth = isNearby ? 2.5 : 1.2;
      ctx.beginPath();
      ctx.arc(dest.x, dest.y, dest.radius * (0.75 + 0.08 * Math.sin(time + dest.x)), 0, Math.PI * 2);
      ctx.stroke();

      // Custom Pixel Monument Graphic
      this.drawMonumentGraphic(ctx, dest.id, dest.x, dest.y, time);

      // Title & Subtitle Badge
      ctx.fillStyle = 'rgba(10, 13, 24, 0.88)';
      ctx.fillRect(dest.x - 70, dest.y + 40, 140, 24);
      ctx.strokeStyle = isNearby ? '#ffd166' : '#2b3558';
      ctx.lineWidth = 1;
      ctx.strokeRect(dest.x - 70, dest.y + 40, 140, 24);

      ctx.fillStyle = isNearby ? '#ffd166' : '#e2e8f0';
      ctx.font = '6.5px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(dest.name, dest.x, dest.y + 51);

      ctx.fillStyle = dest.color;
      ctx.font = '5.5px "Press Start 2P", monospace';
      ctx.fillText(dest.subtitle, dest.x, dest.y + 60);
    }

    drawMonumentGraphic(ctx, id, x, y, time) {
      switch (id) {
        case 'home':
          // Abiy's Cottage
          ctx.fillStyle = '#b45309';
          ctx.fillRect(x - 16, y - 24, 32, 22);
          ctx.fillStyle = '#ef4444'; // Roof
          ctx.beginPath();
          ctx.moveTo(x - 20, y - 24);
          ctx.lineTo(x, y - 40);
          ctx.lineTo(x + 20, y - 24);
          ctx.fill();
          ctx.fillStyle = '#fef08a'; // Glowing Window
          ctx.fillRect(x - 8, y - 18, 6, 8);
          ctx.fillStyle = '#451a03'; // Door
          ctx.fillRect(x + 2, y - 14, 8, 12);
          break;

        case 'about':
          // Codex Shrine
          ctx.fillStyle = '#334155';
          ctx.fillRect(x - 16, y - 24, 32, 26);
          ctx.fillStyle = '#ffd166';
          ctx.fillRect(x - 10, y - 18, 20, 14);
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(x - 6, y - 12, 12, 3);
          break;

        case 'skills':
          // Tech Forge & Cyber Terminals
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(x - 18, y - 22, 36, 24);
          ctx.fillStyle = '#54a0ff';
          ctx.fillRect(x - 14, y - 18, 28, 12);
          ctx.fillStyle = '#4ecca3';
          ctx.fillRect(x - 6, y - 12, 12, 4);
          break;

        case 'monas':
          // Monas National Monument Obelisk
          ctx.fillStyle = '#f8fafc';
          ctx.fillRect(x - 16, y - 8, 32, 10); // Base Cawan
          ctx.fillRect(x - 5, y - 40, 10, 32); // Shaft
          ctx.fillStyle = '#ffd166'; // Golden Flame
          ctx.fillRect(x - 4, y - 48, 8, 8);
          break;

        case 'durkheim':
          // Classical Durkheim Study & Books
          ctx.fillStyle = '#581c87';
          ctx.fillRect(x - 18, y - 24, 36, 26);
          ctx.fillStyle = '#ff9ff3';
          ctx.fillRect(x - 12, y - 18, 24, 14);
          ctx.fillStyle = '#fff';
          ctx.fillRect(x - 4, y - 12, 4, 4);
          ctx.fillRect(x + 2, y - 8, 4, 4);
          break;

        case 'pollution':
          // Eco Sanctum Nature Tree & Clean River
          ctx.fillStyle = '#78350f';
          ctx.fillRect(x - 4, y - 14, 8, 16);
          ctx.fillStyle = '#22c55e';
          ctx.beginPath();
          ctx.arc(x, y - 24, 18, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'contact':
          // High Satellite Comm Tower
          ctx.fillStyle = '#64748b';
          ctx.fillRect(x - 3, y - 36, 6, 38);
          ctx.fillStyle = '#ef476f';
          ctx.beginPath();
          ctx.arc(x, y - 38, 10, 0, Math.PI);
          ctx.fill();
          // Radiating Rings
          ctx.strokeStyle = `rgba(239, 71, 111, ${0.5 + 0.5 * Math.sin(time * 3)})`;
          ctx.beginPath();
          ctx.arc(x, y - 38, 18, 0, Math.PI * 2);
          ctx.stroke();
          break;
      }
    }

    // ------------------------------------------------------------------------
    // PLAYER CHARACTER & BLUE FIREBALL TRANSFORMATION
    // ------------------------------------------------------------------------
    drawPlayerCharacter(ctx) {
      const px = this.player.x;
      const py = this.player.y;
      const time = performance.now() * 0.006;

      // 1. Draw Blue Fireball State
      if (this.player.state === 'BLUE_FIREBALL' || this.player.state === 'TRANSFORMING_IN' || this.player.state === 'TRANSFORMING_OUT') {
        // Draw Motion Trails
        this.player.fireballTrail.forEach(pt => {
          ctx.fillStyle = `rgba(84, 160, 255, ${pt.alpha * 0.6})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
          ctx.fill();
        });

        // Pulsing Azure Core Flame
        const pulse = 16 + 4 * Math.sin(time * 3);
        ctx.fillStyle = 'rgba(0, 210, 211, 0.4)';
        ctx.beginPath();
        ctx.arc(px, py, pulse + 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#54a0ff';
        ctx.beginPath();
        ctx.arc(px, py, pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#cffff0';
        ctx.beginPath();
        ctx.arc(px, py, pulse * 0.55, 0, Math.PI * 2);
        ctx.fill();

        // Electric Blue Sparks
        for (let s = 0; s < 4; s++) {
          const spAngle = time * 4 + s * (Math.PI / 2);
          const spDist = pulse + 6;
          ctx.fillStyle = '#fff';
          ctx.fillRect(px + Math.cos(spAngle) * spDist - 2, py + Math.sin(spAngle) * spDist - 2, 4, 4);
        }
        return;
      }

      // 2. Draw Normal Human Avatar
      const scale = 2.5;
      const isWalk = this.player.state === 'WALKING';
      const walkBob = isWalk ? Math.sin(this.player.walkCycle) * 2 : Math.sin(time) * 0.8;

      ctx.save();
      ctx.translate(px, py - 16 + walkBob);

      // Character Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.beginPath();
      ctx.ellipse(0, 16 - walkBob, 10, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Palette
      const skin = '#ffd3a5';
      const hair = '#2c1e19';
      const jacket = '#1a365d';
      const shirt = '#268bd2';
      const pants = '#1f2937';
      const shoes = '#e2e8f0';

      // Head & Hair
      ctx.fillStyle = hair;
      ctx.fillRect(-6 * scale / 2, -12 * scale / 2, 6 * scale, 3 * scale);
      ctx.fillStyle = skin;
      ctx.fillRect(-5 * scale / 2, -9 * scale / 2, 5 * scale, 4 * scale);

      // Eyes Directional
      ctx.fillStyle = '#111827';
      if (this.player.facing === 'down') {
        ctx.fillRect(-3 * scale / 2, -7 * scale / 2, 1.5 * scale, 1.5 * scale);
        ctx.fillRect(1 * scale / 2, -7 * scale / 2, 1.5 * scale, 1.5 * scale);
      } else if (this.player.facing === 'left') {
        ctx.fillRect(-4 * scale / 2, -7 * scale / 2, 1.5 * scale, 1.5 * scale);
      } else if (this.player.facing === 'right') {
        ctx.fillRect(1.5 * scale / 2, -7 * scale / 2, 1.5 * scale, 1.5 * scale);
      }

      // Torso / Jacket
      ctx.fillStyle = jacket;
      ctx.fillRect(-6 * scale / 2, -5 * scale / 2, 6 * scale, 5 * scale);
      ctx.fillStyle = shirt;
      ctx.fillRect(-2 * scale / 2, -5 * scale / 2, 2 * scale, 5 * scale);

      // Legs / Walking animation
      ctx.fillStyle = pants;
      const legOffset = isWalk ? Math.sin(this.player.walkCycle) * 3 : 0;
      ctx.fillRect(-5 * scale / 2, 0, 2 * scale, 3 * scale + legOffset);
      ctx.fillRect(1 * scale / 2, 0, 2 * scale, 3 * scale - legOffset);

      // Shoes
      ctx.fillStyle = shoes;
      ctx.fillRect(-5 * scale / 2, 3 * scale + legOffset, 2 * scale, 1.5 * scale);
      ctx.fillRect(1 * scale / 2, 3 * scale - legOffset, 2 * scale, 1.5 * scale);

      ctx.restore();
    }

    // ------------------------------------------------------------------------
    // MINIMAP & BIG MAP RENDERING
    // ------------------------------------------------------------------------
    renderMinimap() {
      const mCtx = this.minimapCtx;
      const w = this.minimapCanvas.width;
      const h = this.minimapCanvas.height;

      mCtx.fillStyle = '#060810';
      mCtx.fillRect(0, 0, w, h);

      mCtx.strokeStyle = '#1e293b';
      mCtx.lineWidth = 1;
      mCtx.strokeRect(2, 2, w - 4, h - 4);

      const scale = (w / 2) / 1000;
      Object.values(this.destinations).forEach(dest => {
        const bx = w / 2 + dest.x * scale;
        const by = h / 2 + dest.y * scale;
        mCtx.fillStyle = dest.visited ? '#4ecca3' : '#ffd166';
        mCtx.fillRect(bx - 2, by - 2, 4, 4);
      });

      // Player Blip
      const px = w / 2 + this.player.x * scale;
      const py = h / 2 + this.player.y * scale;
      mCtx.fillStyle = this.player.state === 'BLUE_FIREBALL' ? '#00d2d3' : '#54a0ff';
      mCtx.fillRect(px - 2.5, py - 2.5, 5, 5);
    }

    renderBigMap() {
      const bCtx = this.bigMapCtx;
      const w = this.bigMapCanvas.width;
      const h = this.bigMapCanvas.height;

      bCtx.fillStyle = '#04060c';
      bCtx.fillRect(0, 0, w, h);

      // CRT Grid
      bCtx.strokeStyle = '#111827';
      bCtx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        bCtx.beginPath(); bCtx.moveTo(x, 0); bCtx.lineTo(x, h); bCtx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        bCtx.beginPath(); bCtx.moveTo(0, y); bCtx.lineTo(w, y); bCtx.stroke();
      }

      // Center Axes
      bCtx.strokeStyle = '#1e293b';
      bCtx.beginPath();
      bCtx.moveTo(w / 2, 0); bCtx.lineTo(w / 2, h);
      bCtx.moveTo(0, h / 2); bCtx.lineTo(w, h / 2);
      bCtx.stroke();

      const scale = (w / 2) / 1100;
      Object.values(this.destinations).forEach(dest => {
        const nx = w / 2 + dest.x * scale;
        const ny = h / 2 + dest.y * scale;

        // Path Line to center
        bCtx.strokeStyle = '#1e293b';
        bCtx.beginPath();
        bCtx.moveTo(w / 2, h / 2);
        bCtx.lineTo(nx, ny);
        bCtx.stroke();

        // Node Circle
        bCtx.fillStyle = dest.visited ? '#4ecca3' : '#ffd166';
        bCtx.beginPath();
        bCtx.arc(nx, ny, 6, 0, Math.PI * 2);
        bCtx.fill();

        // Label
        bCtx.fillStyle = '#e2e8f0';
        bCtx.font = '6.5px "Press Start 2P", monospace';
        bCtx.textAlign = 'center';
        bCtx.fillText(dest.name, nx, ny + 14);
      });

      // Player Marker
      const pnx = w / 2 + this.player.x * scale;
      const pny = h / 2 + this.player.y * scale;
      const time = performance.now() * 0.005;

      bCtx.strokeStyle = '#54a0ff';
      bCtx.lineWidth = 2;
      bCtx.beginPath();
      bCtx.arc(pnx, pny, 8 + 2 * Math.sin(time), 0, Math.PI * 2);
      bCtx.stroke();

      bCtx.fillStyle = '#fff';
      bCtx.fillRect(pnx - 2, pny - 2, 4, 4);
    }

    loop() {
      this.update();
      this.render();
      requestAnimationFrame(this.loop);
    }
  }

  // --------------------------------------------------------------------------
  // 5. MODAL & QUICK VIEW MANAGER
  // --------------------------------------------------------------------------
  let currentProjectIndex = 1;
  const game = new ImmersiveRealm();

  function openModal(modalId) {
    const backdrop = document.getElementById('modal-backdrop');
    const modal = document.getElementById(modalId);

    if (!modal) return;

    document.querySelectorAll('.modal-window').forEach(m => m.classList.add('hidden'));
    backdrop.classList.remove('hidden');
    modal.classList.remove('hidden');
    game.activeModal = modalId;
    sfx.click();
  }

  function closeAllModals() {
    const backdrop = document.getElementById('modal-backdrop');
    document.querySelectorAll('.modal-window').forEach(m => m.classList.add('hidden'));
    backdrop.classList.add('hidden');
    game.activeModal = null;
    sfx.modalClose();
  }

  function openProjectModal(projectId) {
    currentProjectIndex = projectId;
    renderProjectDetail(projectId);
    openModal('modal-project');
  }

  function renderProjectDetail(id) {
    const proj = REALM_DATA.projects[id];
    if (!proj) return;

    const container = document.getElementById('project-detail-content');
    const counterEl = document.getElementById('proj-counter');

    if (counterEl) {
      counterEl.textContent = `${id} / 3`;
    }

    container.innerHTML = `
      <div class="proj-detail-header-card pixel-box-inset">
        <div class="proj-tag-row">
          <span class="proj-cat-badge">${proj.category}</span>
          <span class="proj-year-badge">TAHUN: ${proj.year}</span>
        </div>
        <h3 class="proj-headline">${proj.title}</h3>
        
        <div class="proj-meta-grid">
          <div class="proj-meta-item">
            <strong>PERAN SAYA:</strong>
            <span>${proj.role}</span>
          </div>
          <div class="proj-meta-item">
            <strong>ALAT YANG DIGUNAKAN:</strong>
            <span>${proj.tools}</span>
          </div>
        </div>
      </div>

      <div class="proj-media-container">
        <img src="${proj.image}" alt="${proj.caption}">
        <p class="proj-media-caption">📷 ${proj.caption}</p>
      </div>

      <div class="proj-section-block pixel-box-inset">
        <h4>GAMBARAN UMUM</h4>
        <p>${proj.overview}</p>
      </div>

      <div class="proj-section-block pixel-box-inset">
        <h4>PROSES KERJA</h4>
        <p>${proj.process}</p>
      </div>

      <div class="proj-section-block pixel-box-inset">
        <h4>TANTANGAN</h4>
        <p>${proj.challenge}</p>
      </div>

      <div class="proj-section-block pixel-box-inset">
        <h4>SOLUSI</h4>
        <p>${proj.solution}</p>
      </div>

      <div class="proj-section-block pixel-box-inset">
        <h4>HASIL PROYEK</h4>
        <p>${proj.result}</p>
      </div>

      <div class="proj-section-block pixel-box-inset highlight-box">
        <h4 style="color: var(--accent-gold);">PEMBELAJARAN & NILAI</h4>
        <p>${proj.learnings}</p>
      </div>
    `;
  }

  function toggleQuickView(show) {
    const overlay = document.getElementById('quickview-overlay');
    if (!overlay) return;
    if (show) {
      overlay.classList.remove('hidden');
      sfx.click();
    } else {
      overlay.classList.add('hidden');
      sfx.click();
    }
  }

  function renderQuickViewProjects() {
    const stack = document.getElementById('doc-projects-stack');
    if (!stack) return;

    stack.innerHTML = Object.values(REALM_DATA.projects).map(proj => `
      <div class="doc-project-full-card pixel-box-inset">
        <div class="proj-tag-row">
          <span class="proj-cat-badge">${proj.category}</span>
          <span class="proj-year-badge">TAHUN: ${proj.year}</span>
        </div>
        <h3 class="proj-headline">${proj.title}</h3>
        
        <div class="proj-media-container" style="margin: 8px 0;">
          <img src="${proj.image}" alt="${proj.caption}">
          <p class="proj-media-caption">${proj.caption}</p>
        </div>

        <div class="proj-meta-grid" style="margin-bottom: 8px;">
          <div class="proj-meta-item">
            <strong>PERAN:</strong> <span>${proj.role}</span>
          </div>
          <div class="proj-meta-item">
            <strong>ALAT:</strong> <span>${proj.tools}</span>
          </div>
        </div>

        <div class="content-section">
          <h4 class="section-label">GAMBARAN UMUM</h4>
          <p class="dialogue-p">${proj.overview}</p>
        </div>

        <div class="content-section">
          <h4 class="section-label">PROSES</h4>
          <p class="dialogue-p">${proj.process}</p>
        </div>

        <div class="content-section">
          <h4 class="section-label">TANTANGAN & SOLUSI</h4>
          <p class="dialogue-p"><strong>Tantangan:</strong> ${proj.challenge}</p>
          <p class="dialogue-p"><strong>Solusi:</strong> ${proj.solution}</p>
        </div>

        <div class="content-section">
          <h4 class="section-label">HASIL & PEMBELAJARAN</h4>
          <p class="dialogue-p"><strong>Hasil:</strong> ${proj.result}</p>
          <p class="dialogue-p"><strong>Pembelajaran:</strong> ${proj.learnings}</p>
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 6. INITIALIZATION & EVENT LISTENERS
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Static Pixel Avatars
    const cinAvatar = document.getElementById('cinematic-avatar-canvas');
    if (cinAvatar) drawPixelAvatar(cinAvatar.getContext('2d'), 64);

    const aboutAvatar = document.getElementById('about-avatar-canvas');
    if (aboutAvatar) drawPixelAvatar(aboutAvatar.getContext('2d'), 80);

    // 2. Render Accessible Quick View Project Data
    renderQuickViewProjects();

    // 3. Opening Cinematic Boot Sequence
    const fillEl = document.getElementById('progress-fill');
    const textEl = document.getElementById('loading-text');
    const actionsEl = document.getElementById('cinematic-actions');
    const loaderEl = document.getElementById('cinematic-loader');

    let progress = 0;
    const loadInt = setInterval(() => {
      progress += Math.floor(Math.random() * 25) + 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(loadInt);
        fillEl.style.width = '100%';
        textEl.textContent = 'REALM READY // 100%';

        setTimeout(() => {
          loaderEl.classList.add('hidden');
          actionsEl.classList.remove('hidden');
        }, 200);
      } else {
        fillEl.style.width = `${progress}%`;
        textEl.textContent = `LOADING REALM... ${progress}%`;
      }
    }, 100);

    // 4. Enter World Button -> Starts Journey Game
    const btnEnter = document.getElementById('btn-enter-world');
    const cinematicLayer = document.getElementById('cinematic-layer');
    if (btnEnter) {
      btnEnter.addEventListener('click', () => {
        sfx.init();
        sfx.arrivalFanfare();
        cinematicLayer.style.opacity = '0';
        setTimeout(() => {
          cinematicLayer.classList.add('hidden');
          game.start();
        }, 500);
      });
    }

    // 5. Direct Quick View Gate Button
    const btnGateQuick = document.getElementById('btn-gate-quickview');
    if (btnGateQuick) {
      btnGateQuick.addEventListener('click', () => {
        sfx.init();
        cinematicLayer.classList.add('hidden');
        game.start();
        toggleQuickView(true);
      });
    }

    // 6. HUD Destination Buttons -> Real Journey Navigation
    document.querySelectorAll('.hud-nav button[data-dest]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const destId = e.currentTarget.getAttribute('data-dest');
        if (destId) {
          game.initiateJourney(destId);
        }
      });
    });

    // Map Button
    const mapBtn = document.getElementById('hud-btn-map');
    if (mapBtn) {
      mapBtn.addEventListener('click', () => {
        openModal('modal-map');
      });
    }

    // Minimap Radar Click -> Opens Big Map
    const minimapBox = document.getElementById('minimap-container');
    if (minimapBox) {
      minimapBox.addEventListener('click', () => {
        openModal('modal-map');
      });
    }

    // SFX Toggle
    const sfxBtn = document.getElementById('hud-btn-sfx');
    const sfxIcon = document.getElementById('sfx-icon');
    if (sfxBtn && sfxIcon) {
      sfxIcon.textContent = sfx.muted ? '🔇' : '🔊';
      sfxBtn.addEventListener('click', () => {
        const unmuted = sfx.toggleMute();
        sfxIcon.textContent = unmuted ? '🔊' : '🔇';
      });
    }

    // View Mode Toggle (Docs)
    const viewBtn = document.getElementById('hud-btn-viewmode');
    if (viewBtn) {
      viewBtn.addEventListener('click', () => toggleQuickView(true));
    }
    const exitDocsBtn = document.getElementById('btn-exit-quickview');
    if (exitDocsBtn) {
      exitDocsBtn.addEventListener('click', () => toggleQuickView(false));
    }

    // 7. Modal Close Buttons
    document.querySelectorAll('.modal-close-btn, .modal-close-action').forEach(btn => {
      btn.addEventListener('click', () => closeAllModals());
    });

    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => closeAllModals());
    }

    // 8. Project Switcher (Prev / Next)
    const btnPrev = document.getElementById('btn-proj-prev');
    const btnNext = document.getElementById('btn-proj-next');

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        currentProjectIndex = currentProjectIndex > 1 ? currentProjectIndex - 1 : 3;
        renderProjectDetail(currentProjectIndex);
        sfx.click();
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        currentProjectIndex = currentProjectIndex < 3 ? currentProjectIndex + 1 : 1;
        renderProjectDetail(currentProjectIndex);
        sfx.click();
      });
    }
  });

})();
