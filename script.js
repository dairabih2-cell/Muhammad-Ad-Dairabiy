/**
 * ==========================================================================
 * MUHAMMAD AD DAIRABIY // PIXEL ART INTERACTIVE DIGITAL REALM
 * Complete Game Engine, HUD, Audio Synth, Modals & Quick View Manager
 * Inspired by Peter Oravec (peteroravec.com)
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA STORE (100% Authentic Student Information)
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

    // Realm Landmark Points
    landmarks: [
      {
        id: 'spawn',
        name: 'SPAWN PLAZA',
        icon: '🏛️',
        x: 0,
        y: 0,
        radius: 80,
        color: '#ffd166',
        actionText: 'INTRODUKSI ABIY',
        targetModal: 'modal-about',
        visited: true
      },
      {
        id: 'about',
        name: 'CODEX SANCTUM',
        icon: '📜',
        x: -280,
        y: -240,
        radius: 75,
        color: '#4ecca3',
        actionText: 'BACA TENTANG SAYA',
        targetModal: 'modal-about',
        visited: false
      },
      {
        id: 'skills',
        name: 'TECH FORGE',
        icon: '⚡',
        x: 280,
        y: -240,
        radius: 75,
        color: '#54a0ff',
        actionText: 'LIHAT KEAHLIAN & ALAT',
        targetModal: 'modal-skills',
        visited: false
      },
      {
        id: 'monas',
        name: 'MONAS OBELISK',
        icon: '🗼',
        x: -380,
        y: 160,
        radius: 75,
        color: '#ffd166',
        actionText: 'PROYEK 01: MONUMEN NASIONAL',
        targetModal: 'modal-project',
        projectId: 1,
        visited: false
      },
      {
        id: 'durkheim',
        name: 'DURKHEIM ARCHIVE',
        icon: '📚',
        x: 380,
        y: 160,
        radius: 75,
        color: '#ff9ff3',
        actionText: 'PROYEK 02: ÉMILE DURKHEIM',
        targetModal: 'modal-project',
        projectId: 2,
        visited: false
      },
      {
        id: 'pollution',
        name: 'ECO SANCTUM',
        icon: '🌿',
        x: 180,
        y: 380,
        radius: 75,
        color: '#4ecca3',
        actionText: 'PROYEK 03: INFOGRAFIS LINGKUNGAN',
        targetModal: 'modal-project',
        projectId: 3,
        visited: false
      },
      {
        id: 'contact',
        name: 'COMM BEACON',
        icon: '📡',
        x: -180,
        y: 380,
        radius: 75,
        color: '#ef476f',
        actionText: 'HUBUNGI ABIY',
        targetModal: 'modal-contact',
        visited: false
      }
    ]
  };

  // --------------------------------------------------------------------------
  // 2. RETRO 8-BIT SOUND SYNTHESIZER (WEB AUDIO API)
  // --------------------------------------------------------------------------
  class SoundSynth {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('abiy_sfx_muted') === 'true';
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
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
      } catch (e) {
        // Audio policy ignore
      }
    }

    step() {
      this.playTone(180, 'triangle', 0.04, 0.02);
    }

    click() {
      this.playTone(480, 'square', 0.03, 0.03);
    }

    interact() {
      this.init();
      if (this.muted || !this.ctx) return;
      // Arpeggio chime
      const notes = [330, 440, 660, 880];
      notes.forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 'square', 0.09, 0.05), idx * 60);
      });
    }

    modalClose() {
      this.init();
      if (this.muted || !this.ctx) return;
      const notes = [660, 440, 220];
      notes.forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 'triangle', 0.07, 0.04), idx * 50);
      });
    }

    teleport() {
      this.init();
      if (this.muted || !this.ctx) return;
      for (let i = 0; i < 6; i++) {
        setTimeout(() => this.playTone(200 + i * 150, 'sawtooth', 0.06, 0.04), i * 35);
      }
    }
  }

  const sfx = new SoundSynth();

  // --------------------------------------------------------------------------
  // 3. PIXEL ART DRAWING HELPERS
  // --------------------------------------------------------------------------
  function drawPixelAvatar(ctx, size = 64) {
    const scale = size / 16;
    ctx.imageSmoothingEnabled = false;

    // Palette
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

    // Glasses / Rim
    ctx.fillStyle = '#4ecca3';
    ctx.fillRect(4 * scale, 5 * scale, 3 * scale, 1 * scale);
    ctx.fillRect(9 * scale, 5 * scale, 3 * scale, 1 * scale);
    ctx.fillRect(7 * scale, 6 * scale, 2 * scale, 1 * scale);

    // Shirt & Jacket
    ctx.fillStyle = jacket;
    ctx.fillRect(3 * scale, 9 * scale, 10 * scale, 4 * scale);
    ctx.fillStyle = shirt;
    ctx.fillRect(6 * scale, 9 * scale, 4 * scale, 4 * scale);

    // Pants
    ctx.fillStyle = pants;
    ctx.fillRect(4 * scale, 13 * scale, 3 * scale, 2 * scale);
    ctx.fillRect(9 * scale, 13 * scale, 3 * scale, 2 * scale);

    // Shoes
    ctx.fillStyle = shoes;
    ctx.fillRect(3 * scale, 15 * scale, 4 * scale, 1 * scale);
    ctx.fillRect(9 * scale, 15 * scale, 4 * scale, 1 * scale);
  }

  // --------------------------------------------------------------------------
  // 4. GAME ENGINE (CANVAS 2D 60FPS)
  // --------------------------------------------------------------------------
  class GameRealm {
    constructor() {
      this.canvas = document.getElementById('realm-canvas');
      this.ctx = this.canvas.getContext('2d');
      
      this.minimapCanvas = document.getElementById('minimap-canvas');
      this.minimapCtx = this.minimapCanvas.getContext('2d');

      this.bigMapCanvas = document.getElementById('big-map-canvas');
      this.bigMapCtx = this.bigMapCanvas.getContext('2d');

      // World Settings
      this.worldSize = 2000;
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      // Player State
      this.player = {
        x: 0,
        y: 0,
        targetX: null,
        targetY: null,
        speed: 3.5,
        vx: 0,
        vy: 0,
        facing: 'down', // 'down', 'up', 'left', 'right'
        walkCycle: 0,
        isMoving: false,
        stepTimer: 0
      };

      // Camera
      this.camera = {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        lerp: 0.1
      };

      // Input State
      this.keys = {
        w: false, a: false, s: false, d: false,
        up: false, left: false, down: false, right: false,
        e: false, space: false
      };

      this.joystickVector = { x: 0, y: 0 };
      this.isTouchActive = false;

      // Environment Particles (Floating Dust / Star particles)
      this.particles = [];
      this.initParticles();

      // Landmarks Reference
      this.landmarks = REALM_DATA.landmarks;
      this.nearestLandmark = null;
      this.currentZoneName = 'SPAWN PLAZA';

      // Timers & Loops
      this.lastFrameTime = performance.now();
      this.activeModal = null;
      this.isGameRunning = false;

      this.bindEvents();
    }

    initParticles() {
      this.particles = [];
      for (let i = 0; i < 120; i++) {
        this.particles.push({
          x: (Math.random() - 0.5) * this.worldSize,
          y: (Math.random() - 0.5) * this.worldSize,
          size: Math.random() < 0.7 ? 1.5 : 2.5,
          color: Math.random() < 0.5 ? '#4ecca3' : (Math.random() < 0.7 ? '#ffd166' : '#54a0ff'),
          alpha: 0.2 + Math.random() * 0.6,
          speedY: -0.2 - Math.random() * 0.3,
          speedX: (Math.random() - 0.5) * 0.2,
          flicker: Math.random() * Math.PI
        });
      }
    }

    start() {
      this.isGameRunning = true;
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
          if (e.key === 'Escape') {
            closeAllModals();
          }
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

      // Canvas Mouse Click-to-Move
      this.canvas.addEventListener('pointerdown', (e) => {
        if (this.activeModal) return;
        if (e.target !== this.canvas) return;

        // Convert screen coordinates to world coordinates
        const screenX = e.clientX;
        const screenY = e.clientY;
        const worldX = screenX - this.width / 2 + this.camera.x;
        const worldY = screenY - this.height / 2 + this.camera.y;

        this.player.targetX = worldX;
        this.player.targetY = worldY;
        sfx.click();
      });

      // Big Map CRT click-to-teleport
      this.bigMapCanvas.addEventListener('click', (e) => {
        const rect = this.bigMapCanvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        const mapWidth = this.bigMapCanvas.width;
        const mapHeight = this.bigMapCanvas.height;

        // Map scale: world coords (-600 to 600) maps to canvas
        const worldX = ((clickX / mapWidth) - 0.5) * 1200;
        const worldY = ((clickY / mapHeight) - 0.5) * 1200;

        // Find nearest landmark to clicked point
        let closest = null;
        let minDist = 90;
        this.landmarks.forEach(lm => {
          const dist = Math.hypot(lm.x - worldX, lm.y - worldY);
          if (dist < minDist) {
            minDist = dist;
            closest = lm;
          }
        });

        if (closest) {
          this.teleportTo(closest.x, closest.y, closest.name);
          closeAllModals();
        } else {
          this.teleportTo(worldX, worldY, 'EXPLORATION POINT');
          closeAllModals();
        }
      });

      // Minimap click opens Big Map
      const minimapBox = document.getElementById('minimap-container');
      if (minimapBox) {
        minimapBox.addEventListener('click', () => {
          openModal('modal-map');
        });
      }

      // Mobile Touch Joystick
      this.setupTouchControls();
    }

    setupTouchControls() {
      const joystickBase = document.getElementById('joystick-base');
      const joystickThumb = document.getElementById('joystick-thumb');
      const btnInteract = document.getElementById('btn-touch-interact');

      if (!joystickBase || !joystickThumb) return;

      let touchId = null;
      const maxRadius = 40;

      const handleTouchStart = (e) => {
        for (let i = 0; i < e.changedTouches.length; i++) {
          const touch = e.changedTouches[i];
          const rect = joystickBase.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dist = Math.hypot(touch.clientX - centerX, touch.clientY - centerY);

          if (dist < 80 && touchId === null) {
            touchId = touch.identifier;
            this.isTouchActive = true;
            this.updateJoystick(touch.clientX, touch.clientY, centerX, centerY, maxRadius, joystickThumb);
            break;
          }
        }
      };

      const handleTouchMove = (e) => {
        if (!this.isTouchActive) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
          const touch = e.changedTouches[i];
          if (touch.identifier === touchId) {
            const rect = joystickBase.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            this.updateJoystick(touch.clientX, touch.clientY, centerX, centerY, maxRadius, joystickThumb);
            break;
          }
        }
      };

      const handleTouchEnd = (e) => {
        for (let i = 0; i < e.changedTouches.length; i++) {
          if (e.changedTouches[i].identifier === touchId) {
            touchId = null;
            this.isTouchActive = false;
            this.joystickVector = { x: 0, y: 0 };
            joystickThumb.style.transform = `translate(0px, 0px)`;
            break;
          }
        }
      };

      joystickBase.addEventListener('touchstart', handleTouchStart, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd, { passive: false });
      window.addEventListener('touchcancel', handleTouchEnd, { passive: false });

      if (btnInteract) {
        btnInteract.addEventListener('click', (e) => {
          e.preventDefault();
          this.triggerInteraction();
        });
      }
    }

    updateJoystick(touchX, touchY, centerX, centerY, maxRadius, thumbEl) {
      const dx = touchX - centerX;
      const dy = touchY - centerY;
      const dist = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);

      const clampedDist = Math.min(dist, maxRadius);
      const thumbX = Math.cos(angle) * clampedDist;
      const thumbY = Math.sin(angle) * clampedDist;

      thumbEl.style.transform = `translate(${thumbX}px, ${thumbY}px)`;

      // Normalized vector
      this.joystickVector = {
        x: thumbX / maxRadius,
        y: thumbY / maxRadius
      };

      // Reset click-to-move if using joystick
      this.player.targetX = null;
      this.player.targetY = null;
    }

    teleportTo(x, y, zoneName = '') {
      this.player.x = x;
      this.player.y = y;
      this.player.targetX = null;
      this.player.targetY = null;
      this.camera.x = x;
      this.camera.y = y;
      sfx.teleport();

      if (zoneName) {
        this.currentZoneName = zoneName;
      }
    }

    triggerInteraction() {
      if (this.nearestLandmark) {
        sfx.interact();
        this.nearestLandmark.visited = true;

        if (this.nearestLandmark.projectId) {
          openProjectModal(this.nearestLandmark.projectId);
        } else if (this.nearestLandmark.targetModal) {
          openModal(this.nearestLandmark.targetModal);
        }
      }
    }

    update() {
      if (this.activeModal) return;

      let moveX = 0;
      let moveY = 0;

      // 1. Keyboard Input
      if (this.keys.w || this.keys.up) moveY -= 1;
      if (this.keys.s || this.keys.down) moveY += 1;
      if (this.keys.a || this.keys.left) moveX -= 1;
      if (this.keys.d || this.keys.right) moveX += 1;

      // 2. Virtual Joystick Input
      if (this.isTouchActive && (Math.abs(this.joystickVector.x) > 0.1 || Math.abs(this.joystickVector.y) > 0.1)) {
        moveX = this.joystickVector.x;
        moveY = this.joystickVector.y;
      }

      // 3. Click to Move Input
      if (this.player.targetX !== null && this.player.targetY !== null) {
        const dx = this.player.targetX - this.player.x;
        const dy = this.player.targetY - this.player.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 6) {
          moveX = dx / dist;
          moveY = dy / dist;
        } else {
          this.player.targetX = null;
          this.player.targetY = null;
        }
      }

      // Normalize diagonal movement
      const inputLen = Math.hypot(moveX, moveY);
      if (inputLen > 0) {
        this.player.isMoving = true;
        const normX = (moveX / inputLen) * Math.min(inputLen, 1);
        const normY = (moveY / inputLen) * Math.min(inputLen, 1);

        this.player.x += normX * this.player.speed;
        this.player.y += normY * this.player.speed;

        // Facing direction
        if (Math.abs(normX) > Math.abs(normY)) {
          this.player.facing = normX > 0 ? 'right' : 'left';
        } else {
          this.player.facing = normY > 0 ? 'down' : 'up';
        }

        // Animation cycle
        this.player.walkCycle += 0.2;
        this.player.stepTimer += 1;
        if (this.player.stepTimer % 18 === 0) {
          sfx.step();
        }
      } else {
        this.player.isMoving = false;
      }

      // World Bounds Clamping (-800 to 800)
      const bound = 800;
      this.player.x = Math.max(-bound, Math.min(bound, this.player.x));
      this.player.y = Math.max(-bound, Math.min(bound, this.player.y));

      // Smooth Camera Follow
      this.camera.x += (this.player.x - this.camera.x) * this.camera.lerp;
      this.camera.y += (this.player.y - this.camera.y) * this.camera.lerp;

      // Update Particles
      this.particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.flicker += 0.05;
        if (p.y < this.camera.y - this.height / 2 - 50) {
          p.y = this.camera.y + this.height / 2 + 50;
          p.x = this.camera.x + (Math.random() - 0.5) * this.width;
        }
      });

      // Check Proximity to Landmarks
      this.nearestLandmark = null;
      let minDistance = Infinity;
      let zoneName = 'DIGITAL REALM';

      this.landmarks.forEach(lm => {
        const dist = Math.hypot(lm.x - this.player.x, lm.y - this.player.y);
        if (dist < lm.radius + 35 && dist < minDistance) {
          minDistance = dist;
          this.nearestLandmark = lm;
          zoneName = lm.name;
        }
      });

      this.currentZoneName = zoneName;

      // Update HUD Coordinates & Prompt
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
      if (this.nearestLandmark) {
        promptEl.classList.remove('hidden');
        promptTextEl.textContent = this.nearestLandmark.actionText;
      } else {
        promptEl.classList.add('hidden');
      }
    }

    render() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      const cx = this.width / 2 - this.camera.x;
      const cy = this.height / 2 - this.camera.y;

      // 1. Draw Realm Grid Floor & Pathways
      this.drawRealmFloor(ctx, cx, cy);

      // 2. Draw Floating Particles
      this.drawParticles(ctx, cx, cy);

      // 3. Draw Landmarks (Monuments, Shrines & Exhibits)
      this.landmarks.forEach(lm => {
        this.drawLandmark(ctx, lm, cx, cy);
      });

      // 4. Draw Click Target Indicator (if moving by click)
      if (this.player.targetX !== null && this.player.targetY !== null) {
        this.drawClickTarget(ctx, this.player.targetX + cx, this.player.targetY + cy);
      }

      // 5. Draw Player Avatar Character
      this.drawPlayer(ctx, this.player.x + cx, this.player.y + cy);

      // 6. Draw Minimap & Big Map Canvas
      this.renderMinimap();
      if (this.activeModal === 'modal-map') {
        this.renderBigMap();
      }
    }

    drawRealmFloor(ctx, cx, cy) {
      const gridSize = 48;
      const startX = Math.floor((-cx) / gridSize) * gridSize;
      const startY = Math.floor((-cy) / gridSize) * gridSize;
      const endX = startX + this.width + gridSize * 2;
      const endY = startY + this.height + gridSize * 2;

      // Dark Space Ground
      ctx.fillStyle = '#0a0d18';
      ctx.fillRect(0, 0, this.width, this.height);

      // Subtle Cyber Grid Lines
      ctx.strokeStyle = '#121728';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = startX; x <= endX; x += gridSize) {
        ctx.moveTo(x + cx, 0);
        ctx.lineTo(x + cx, this.height);
      }
      for (let y = startY; y <= endY; y += gridSize) {
        ctx.moveTo(0, y + cy);
        ctx.lineTo(this.width, y + cy);
      }
      ctx.stroke();

      // Pathways Connecting All Landmarks to Spawn (0,0)
      ctx.strokeStyle = '#1f2742';
      ctx.lineWidth = 24;
      ctx.lineCap = 'round';
      ctx.beginPath();
      this.landmarks.forEach(lm => {
        ctx.moveTo(0 + cx, 0 + cy);
        ctx.lineTo(lm.x + cx, lm.y + cy);
      });
      ctx.stroke();

      // Cobblestone / Pathway Core Lines
      ctx.strokeStyle = '#2d385e';
      ctx.lineWidth = 8;
      ctx.beginPath();
      this.landmarks.forEach(lm => {
        ctx.moveTo(0 + cx, 0 + cy);
        ctx.lineTo(lm.x + cx, lm.y + cy);
      });
      ctx.stroke();

      // Outer Bound Ring
      ctx.strokeStyle = '#ef476f';
      ctx.lineWidth = 3;
      ctx.setLineDash([12, 12]);
      ctx.beginPath();
      ctx.arc(0 + cx, 0 + cy, 800, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    drawParticles(ctx, cx, cy) {
      this.particles.forEach(p => {
        const screenX = p.x + cx;
        const screenY = p.y + cy;

        if (screenX >= -10 && screenX <= this.width + 10 && screenY >= -10 && screenY <= this.height + 10) {
          const alpha = p.alpha * (0.6 + 0.4 * Math.sin(p.flicker));
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
          ctx.fillRect(screenX, screenY, p.size, p.size);
        }
      });
      ctx.globalAlpha = 1;
    }

    drawLandmark(ctx, lm, cx, cy) {
      const lx = lm.x + cx;
      const ly = lm.y + cy;

      // Culling if off screen
      if (lx < -120 || lx > this.width + 120 || ly < -120 || ly > this.height + 120) return;

      const time = performance.now() * 0.003;
      const isNearby = this.nearestLandmark && this.nearestLandmark.id === lm.id;

      // 1. Base Platform
      ctx.fillStyle = isNearby ? '#1b233d' : '#141829';
      ctx.strokeStyle = isNearby ? '#ffd166' : (lm.visited ? '#4ecca3' : '#3d4b75');
      ctx.lineWidth = isNearby ? 3 : 2;

      ctx.beginPath();
      ctx.arc(lx, ly, lm.radius * 0.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 2. Pulsing Beacon Ring
      ctx.strokeStyle = lm.color;
      ctx.lineWidth = isNearby ? 2 : 1;
      ctx.beginPath();
      const ringScale = 0.7 + 0.08 * Math.sin(time + lm.x);
      ctx.arc(lx, ly, lm.radius * ringScale, 0, Math.PI * 2);
      ctx.stroke();

      // 3. Custom Pixel Structures per Landmark
      this.drawLandmarkStructure(ctx, lm, lx, ly, time);

      // 4. Floating Icon & Name Badge
      const bob = Math.sin(time * 2 + lm.y) * 4;
      
      // Floating Alert / Exclamation if unvisited
      if (!lm.visited) {
        ctx.fillStyle = '#ffd166';
        ctx.font = '10px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('!', lx, ly - 46 + bob);
      }

      // Title Tag
      ctx.fillStyle = 'rgba(10, 13, 24, 0.85)';
      ctx.fillRect(lx - 60, ly + 36, 120, 16);
      ctx.strokeStyle = isNearby ? '#ffd166' : '#2b3558';
      ctx.lineWidth = 1;
      ctx.strokeRect(lx - 60, ly + 36, 120, 16);

      ctx.fillStyle = isNearby ? '#ffd166' : '#c8d6e5';
      ctx.font = '6.5px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(lm.name, lx, ly + 44);
    }

    drawLandmarkStructure(ctx, lm, x, y, time) {
      switch (lm.id) {
        case 'spawn':
          // Central Digital Obelisk
          ctx.fillStyle = '#4ecca3';
          ctx.fillRect(x - 6, y - 24, 12, 28);
          ctx.fillStyle = '#ffd166';
          ctx.fillRect(x - 4, y - 30, 8, 8);
          break;

        case 'about':
          // Codex Shrine / Ancient Library Screen
          ctx.fillStyle = '#2c3e50';
          ctx.fillRect(x - 14, y - 22, 28, 24);
          ctx.fillStyle = '#4ecca3';
          ctx.fillRect(x - 10, y - 18, 20, 16);
          // Book glyph
          ctx.fillStyle = '#fff';
          ctx.fillRect(x - 6, y - 12, 12, 4);
          break;

        case 'skills':
          // Cyber Workstation & Tool Chest
          ctx.fillStyle = '#1e272e';
          ctx.fillRect(x - 16, y - 20, 32, 22);
          ctx.fillStyle = '#54a0ff';
          ctx.fillRect(x - 12, y - 16, 24, 12);
          // Tool icon
          ctx.fillStyle = '#ffd166';
          ctx.fillRect(x - 4, y - 12, 8, 4);
          break;

        case 'monas':
          // Monas Tower Replica
          ctx.fillStyle = '#e2e8f0';
          ctx.fillRect(x - 12, y - 6, 24, 8); // Base bowl
          ctx.fillRect(x - 4, y - 28, 8, 24); // Shaft
          // Golden Flame
          ctx.fillStyle = '#ffd166';
          ctx.fillRect(x - 3, y - 34, 6, 6);
          break;

        case 'durkheim':
          // Sociological Library & Study
          ctx.fillStyle = '#341f97';
          ctx.fillRect(x - 14, y - 22, 28, 24);
          ctx.fillStyle = '#ff9ff3';
          ctx.fillRect(x - 10, y - 18, 20, 16);
          // Mindmap dots
          ctx.fillStyle = '#fff';
          ctx.fillRect(x - 4, y - 12, 3, 3);
          ctx.fillRect(x + 2, y - 8, 3, 3);
          break;

        case 'pollution':
          // Eco Sanctum (Tree & River nature)
          ctx.fillStyle = '#57606f';
          ctx.fillRect(x - 4, y - 12, 8, 14); // Trunk
          ctx.fillStyle = '#2ed573';
          ctx.beginPath();
          ctx.arc(x, y - 18, 14, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'contact':
          // Satellite Comm Tower
          ctx.fillStyle = '#718093';
          ctx.fillRect(x - 3, y - 28, 6, 30);
          ctx.fillStyle = '#ef476f';
          ctx.beginPath();
          ctx.arc(x, y - 30, 8, 0, Math.PI);
          ctx.fill();
          break;
      }
    }

    drawClickTarget(ctx, x, y) {
      const time = performance.now() * 0.006;
      ctx.strokeStyle = '#4ecca3';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y, 10 + 2 * Math.sin(time), 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#4ecca3';
      ctx.fillRect(x - 2, y - 2, 4, 4);
    }

    drawPlayer(ctx, x, y) {
      const scale = 2.5;
      const isWalk = this.player.isMoving;
      const walkBob = isWalk ? Math.sin(this.player.walkCycle) * 2 : 0;

      ctx.save();
      ctx.translate(x, y - 16 + walkBob);

      // Character Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.beginPath();
      ctx.ellipse(0, 16 - walkBob, 10, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Skin & Hair
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

      // Eyes (Directional)
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

    renderMinimap() {
      const mCtx = this.minimapCtx;
      const w = this.minimapCanvas.width;
      const h = this.minimapCanvas.height;

      mCtx.fillStyle = '#060810';
      mCtx.fillRect(0, 0, w, h);

      // Radar Grid
      mCtx.strokeStyle = '#141c30';
      mCtx.lineWidth = 1;
      mCtx.beginPath();
      mCtx.arc(w / 2, h / 2, w / 2 - 2, 0, Math.PI * 2);
      mCtx.stroke();

      // Landmarks blips
      const scale = (w / 2) / 750;
      this.landmarks.forEach(lm => {
        const blipX = w / 2 + lm.x * scale;
        const blipY = h / 2 + lm.y * scale;

        mCtx.fillStyle = lm.visited ? '#4ecca3' : '#ffd166';
        mCtx.fillRect(blipX - 2, blipY - 2, 4, 4);
      });

      // Player Blip
      const pX = w / 2 + this.player.x * scale;
      const pY = h / 2 + this.player.y * scale;
      mCtx.fillStyle = '#54a0ff';
      mCtx.fillRect(pX - 2.5, pY - 2.5, 5, 5);
    }

    renderBigMap() {
      const bCtx = this.bigMapCtx;
      const w = this.bigMapCanvas.width;
      const h = this.bigMapCanvas.height;

      bCtx.fillStyle = '#04060c';
      bCtx.fillRect(0, 0, w, h);

      // CRT Grid
      bCtx.strokeStyle = '#131b2e';
      bCtx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        bCtx.beginPath();
        bCtx.moveTo(x, 0);
        bCtx.lineTo(x, h);
        bCtx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        bCtx.beginPath();
        bCtx.moveTo(0, y);
        bCtx.lineTo(w, y);
        bCtx.stroke();
      }

      // Center crosshair
      bCtx.strokeStyle = '#2b3a5e';
      bCtx.beginPath();
      bCtx.moveTo(w / 2, 0); bCtx.lineTo(w / 2, h);
      bCtx.moveTo(0, h / 2); bCtx.lineTo(w, h / 2);
      bCtx.stroke();

      // Landmark Nodes
      const scale = (w / 2) / 600;
      this.landmarks.forEach(lm => {
        const nodeX = w / 2 + lm.x * scale;
        const nodeY = h / 2 + lm.y * scale;

        // Node line to center
        bCtx.strokeStyle = '#1a243d';
        bCtx.beginPath();
        bCtx.moveTo(w / 2, h / 2);
        bCtx.lineTo(nodeX, nodeY);
        bCtx.stroke();

        // Node circle
        bCtx.fillStyle = lm.visited ? '#4ecca3' : '#ffd166';
        bCtx.beginPath();
        bCtx.arc(nodeX, nodeY, 6, 0, Math.PI * 2);
        bCtx.fill();

        // Label
        bCtx.fillStyle = '#e2e8f0';
        bCtx.font = '7px "Press Start 2P", monospace';
        bCtx.textAlign = 'center';
        bCtx.fillText(lm.name, nodeX, nodeY + 14);
      });

      // Player Marker (Flashing)
      const pNodeX = w / 2 + this.player.x * scale;
      const pNodeY = h / 2 + this.player.y * scale;
      const time = performance.now() * 0.005;

      bCtx.strokeStyle = '#54a0ff';
      bCtx.lineWidth = 2;
      bCtx.beginPath();
      bCtx.arc(pNodeX, pNodeY, 8 + 2 * Math.sin(time), 0, Math.PI * 2);
      bCtx.stroke();

      bCtx.fillStyle = '#fff';
      bCtx.fillRect(pNodeX - 2, pNodeY - 2, 4, 4);
    }

    loop() {
      this.update();
      this.render();
      requestAnimationFrame(this.loop);
    }
  }

  // --------------------------------------------------------------------------
  // 5. MODAL & DIALOG SYSTEM
  // --------------------------------------------------------------------------
  let currentProjectIndex = 1;
  const game = new GameRealm();

  function openModal(modalId) {
    const backdrop = document.getElementById('modal-backdrop');
    const modal = document.getElementById(modalId);

    if (!modal) return;

    // Close any already open modal
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
  // 6. INITIALIZATION & EVENT ATTACHMENTS
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Draw Static Avatars
    const preloaderAvatar = document.getElementById('preloader-avatar-canvas');
    if (preloaderAvatar) drawPixelAvatar(preloaderAvatar.getContext('2d'), 64);

    const aboutAvatar = document.getElementById('about-avatar-canvas');
    if (aboutAvatar) drawPixelAvatar(aboutAvatar.getContext('2d'), 80);

    const hudAvatar = document.getElementById('hud-avatar-mini');
    if (hudAvatar) hudAvatar.textContent = '👾';

    // 2. Populate Document / Quick View Projects
    renderQuickViewProjects();

    // 3. Setup Preloader Progress Bar Simulation
    const fillEl = document.getElementById('progress-fill');
    const textEl = document.getElementById('loading-text');
    const actionsEl = document.getElementById('gate-actions');
    const loadingContainer = document.getElementById('loading-container');

    let progress = 0;
    const loadInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 25) + 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(loadInterval);
        fillEl.style.width = '100%';
        textEl.textContent = 'REALM READY // 100%';

        setTimeout(() => {
          loadingContainer.classList.add('hidden');
          actionsEl.classList.remove('hidden');
        }, 300);
      } else {
        fillEl.style.width = `${progress}%`;
        textEl.textContent = `LOADING REALM... ${progress}%`;
      }
    }, 120);

    // 4. Start Game Button
    const btnStart = document.getElementById('btn-start-game');
    const preloaderGate = document.getElementById('preloader-gate');
    if (btnStart) {
      btnStart.addEventListener('click', () => {
        sfx.init();
        sfx.interact();
        preloaderGate.style.opacity = '0';
        setTimeout(() => {
          preloaderGate.classList.add('hidden');
          game.start();
        }, 500);
      });
    }

    // 5. Gate Quick View Button
    const btnGateQuick = document.getElementById('btn-gate-quickview');
    if (btnGateQuick) {
      btnGateQuick.addEventListener('click', () => {
        sfx.init();
        preloaderGate.classList.add('hidden');
        game.start();
        toggleQuickView(true);
      });
    }

    // 6. HUD Nav Buttons
    const hudMap = {
      'hud-btn-about': 'modal-about',
      'hud-btn-skills': 'modal-skills',
      'hud-btn-projects': 'modal-all-projects',
      'hud-btn-contact': 'modal-contact',
      'hud-btn-map': 'modal-map'
    };

    Object.keys(hudMap).forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.addEventListener('click', () => {
          openModal(hudMap[btnId]);
        });
      }
    });

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
      viewBtn.addEventListener('click', () => {
        toggleQuickView(true);
      });
    }

    const exitDocsBtn = document.getElementById('btn-exit-quickview');
    if (exitDocsBtn) {
      exitDocsBtn.addEventListener('click', () => {
        toggleQuickView(false);
      });
    }

    // 7. Modal Close Buttons
    document.querySelectorAll('.modal-close-btn, .modal-close-action').forEach(btn => {
      btn.addEventListener('click', () => {
        closeAllModals();
      });
    });

    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        closeAllModals();
      });
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

    // 9. All Projects Modal Item Triggers
    document.querySelectorAll('.open-proj-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = parseInt(e.currentTarget.getAttribute('data-target'), 10);
        if (targetId) {
          openProjectModal(targetId);
        }
      });
    });
  });

})();
