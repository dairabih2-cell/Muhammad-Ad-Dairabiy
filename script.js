/**
 * ==========================================================================
 * MUHAMMAD AD DAIRABIY // VIBRANT DAYTIME IMMERSIVE PIXEL REALM
 * World Fidelity Pass: Believable Urban Planning, Multi-Zone Ecosystem,
 * Y-Sorting Depth Rendering, Living NPCs, Train Sequence, Kraken Encounter,
 * Blue Fireball Fast Travel & Journey-to-Content Navigation.
 * Dominant Typography: 'Press Start 2P', monospace
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA STORE (100% Authentic Student Profile & 3 Selected Projects)
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

    // Destination Registry for Spatial Navigation
    destinations: {
      home: {
        id: 'home',
        name: 'HOME VALLEY',
        subtitle: 'Rumah & Kebun Abiy',
        icon: '🏠',
        x: -560,
        y: -180,
        radius: 70,
        color: '#48b872',
        actionText: 'RUMAH ABIY',
        targetModal: 'modal-about',
        visited: true
      },
      about: {
        id: 'about',
        name: 'ABOUT SANCTUM',
        subtitle: 'Profil Siswa & Minat',
        icon: '📜',
        x: -280,
        y: -180,
        radius: 75,
        color: '#f1c40f',
        actionText: 'TENTANG ABIY',
        targetModal: 'modal-about',
        visited: false
      },
      skills: {
        id: 'skills',
        name: 'TECH FORGE',
        subtitle: 'Workshop & Alat Digital',
        icon: '⚡',
        x: 320,
        y: -180,
        radius: 75,
        color: '#3498db',
        actionText: 'KEAHLIAN & ALAT',
        targetModal: 'modal-skills',
        visited: false
      },
      monas: {
        id: 'monas',
        name: 'MONAS PLAZA',
        subtitle: 'Proyek 01: Monumen Nasional',
        icon: '🗼',
        x: -340,
        y: 420,
        radius: 80,
        color: '#f1c40f',
        actionText: 'PROYEK 01: MONAS',
        targetModal: 'modal-project',
        projectId: 1,
        visited: false
      },
      durkheim: {
        id: 'durkheim',
        name: 'DURKHEIM ARCHIVE',
        subtitle: 'Proyek 02: Biografi Durkheim',
        icon: '📚',
        x: 160,
        y: 440,
        radius: 80,
        color: '#9b59b6',
        actionText: 'PROYEK 02: DURKHEIM',
        targetModal: 'modal-project',
        projectId: 2,
        visited: false
      },
      pollution: {
        id: 'pollution',
        name: 'ECO SANCTUM',
        subtitle: 'Proyek 03: Infografis Lingkungan',
        icon: '🌿',
        x: 720,
        y: 460,
        radius: 80,
        color: '#2ecc71',
        actionText: 'PROYEK 03: LINGKUNGAN',
        targetModal: 'modal-project',
        projectId: 3,
        visited: false
      },
      contact: {
        id: 'contact',
        name: 'COMM BEACON',
        subtitle: 'Menara Sinyal & Kontak',
        icon: '📡',
        x: 1040,
        y: 180,
        radius: 75,
        color: '#e74c3c',
        actionText: 'HUBUNGI ABIY',
        targetModal: 'modal-contact',
        visited: false
      }
    }
  };

  // --------------------------------------------------------------------------
  // 2. RETRO 8-BIT AUDIO SYNTHESIZER
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

    playTone(freq, type = 'square', duration = 0.08, gainVal = 0.04) {
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
      this.playTone(175, 'triangle', 0.04, 0.02);
    }

    click() {
      this.playTone(540, 'square', 0.03, 0.03);
    }

    fireballTransform() {
      this.init();
      if (this.muted || !this.ctx) return;
      for (let i = 0; i < 8; i++) {
        setTimeout(() => this.playTone(300 + i * 85, 'sawtooth', 0.06, 0.025), i * 30);
      }
    }

    arrivalFanfare() {
      this.init();
      if (this.muted || !this.ctx) return;
      const notes = [392, 523, 659, 784, 1046];
      notes.forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 'square', 0.1, 0.035), idx * 60);
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
    const shirt = '#3498db';
    const jacket = '#1a365d';
    const pants = '#1f2937';
    const eyes = '#111827';
    const shoes = '#f8fafc';

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
    ctx.fillStyle = '#2ecc71';
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
  // 4. WORLD FIDELITY ENGINE (CANVAS 2D 60FPS WITH Y-SORTING DEPTH)
  // --------------------------------------------------------------------------
  class VibrantWorldEngine {
    constructor() {
      this.canvas = document.getElementById('realm-canvas');
      this.ctx = this.canvas.getContext('2d');

      this.minimapCanvas = document.getElementById('minimap-canvas');
      this.minimapCtx = this.minimapCanvas.getContext('2d');

      this.bigMapCanvas = document.getElementById('big-map-canvas');
      this.bigMapCtx = this.bigMapCanvas.getContext('2d');

      this.width = window.innerWidth;
      this.height = window.innerHeight;

      // Player State Machine
      this.player = {
        x: -560,
        y: -180,
        state: 'IDLE', // 'IDLE' | 'WALKING' | 'TRANSFORMING_IN' | 'BLUE_FIREBALL' | 'TRANSFORMING_OUT' | 'ARRIVED'
        targetX: null,
        targetY: null,
        destTarget: null,
        speed: 3.6,
        fireballSpeed: 15,
        facing: 'down',
        walkCycle: 0,
        stepTimer: 0,
        animTimer: 0,
        fireballTrail: []
      };

      // Camera System with Cinematic Lerp & Dynamic Zoom
      this.camera = {
        x: -560,
        y: -180,
        zoom: 1.0,
        targetZoom: 1.0,
        lerp: 0.08
      };

      // Input State
      this.keys = {
        w: false, a: false, s: false, d: false,
        up: false, left: false, down: false, right: false
      };
      this.joystickVector = { x: 0, y: 0 };
      this.isTouchActive = false;

      // Environmental World Elements
      this.clouds = [];
      this.seaWaves = [];
      this.fountainParticles = [];
      this.train = {
        x: -500,
        y: 160,
        speed: 3.2,
        state: 'CRUISING', // 'APPROACHING' | 'STOPPED' | 'CRUISING'
        dwellTimer: 0,
        smokeTimer: 0,
        smokePuffs: []
      };
      this.kraken = {
        x: 880,
        y: -320,
        tentacleProgress: 0,
        active: false
      };

      // Living NPCs with Behavior States
      this.npcs = [
        { id: 1, x: 440, y: 220, type: 'shopper', role: 'Citizen', dir: 1, range: 60, currentX: 440, pauseTimer: 0, color: '#e67e22' },
        { id: 2, x: 560, y: 240, type: 'business', role: 'Worker', dir: -1, range: 80, currentX: 560, pauseTimer: 0, color: '#2c3e50' },
        { id: 3, x: -380, y: 440, type: 'tourist', role: 'Photographer', x: -380, y: 440, photoFlashTimer: 0, color: '#e74c3c' },
        { id: 4, x: 190, y: 470, type: 'student', role: 'Reader', x: 190, y: 470, readBob: 0, color: '#8e44ad' },
        { id: 5, x: -60, y: -360, type: 'sailor', role: 'Fisherman', x: -60, y: -360, rodBob: 0, color: '#2980b9' },
        { id: 6, x: 480, y: 140, type: 'passenger', role: 'Commuter', x: 480, y: 140, watchCheck: 0, color: '#27ae60' },
        // Seagulls over ocean
        { id: 7, type: 'seagull', startX: -100, startY: -280, angle: 0, speed: 0.02, radiusX: 90, radiusY: 45 },
        { id: 8, type: 'seagull', startX: 420, startY: -340, angle: Math.PI, speed: 0.018, radiusX: 110, radiusY: 55 }
      ];

      this.destinations = REALM_DATA.destinations;
      this.nearestLandmark = null;
      this.currentZoneName = 'HOME VALLEY';
      this.activeModal = null;
      this.isGameActive = false;

      this.initEnvironment();
      this.bindEvents();
    }

    initEnvironment() {
      // Drifting Daytime Clouds
      this.clouds = [];
      for (let i = 0; i < 14; i++) {
        this.clouds.push({
          x: (Math.random() - 0.5) * 3200,
          y: -600 + Math.random() * 1200,
          speed: 0.2 + Math.random() * 0.3,
          width: 80 + Math.random() * 120,
          height: 35 + Math.random() * 30,
          alpha: 0.45 + Math.random() * 0.35
        });
      }

      // Beach & Ocean Animated Wave Crests
      this.seaWaves = [];
      for (let i = 0; i < 35; i++) {
        this.seaWaves.push({
          x: 40 + Math.random() * 1100,
          y: -520 + Math.random() * 400,
          size: 14 + Math.random() * 22,
          speed: 0.003 + Math.random() * 0.004,
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

      // Pointer Click-to-Move
      this.canvas.addEventListener('pointerdown', (e) => {
        if (this.activeModal) return;
        if (e.target !== this.canvas) return;

        const screenX = e.clientX;
        const screenY = e.clientY;
        const worldX = (screenX - this.width / 2) / this.camera.zoom + this.camera.x;
        const worldY = (screenY - this.height / 2) / this.camera.zoom + this.camera.y;

        // Check if destination was directly clicked
        let clickedDest = null;
        Object.values(this.destinations).forEach(dest => {
          if (Math.hypot(dest.x - worldX, dest.y - worldY) < dest.radius + 35) {
            clickedDest = dest;
          }
        });

        if (clickedDest) {
          this.initiateJourney(clickedDest.id);
        } else {
          if (this.player.state === 'BLUE_FIREBALL') return;
          this.player.targetX = worldX;
          this.player.targetY = worldY;
          this.player.destTarget = null;
          sfx.click();
        }
      });

      // Big Map Canvas Teleport/Travel
      this.bigMapCanvas.addEventListener('click', (e) => {
        const rect = this.bigMapCanvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        const mapWidth = this.bigMapCanvas.width;
        const mapHeight = this.bigMapCanvas.height;

        const worldX = ((clickX / mapWidth) - 0.5) * 2200;
        const worldY = ((clickY / mapHeight) - 0.5) * 1600;

        let closest = null;
        let minDist = 130;
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
    // JOURNEY CONTROLLER
    // ------------------------------------------------------------------------
    initiateJourney(destinationId) {
      const dest = this.destinations[destinationId];
      if (!dest) return;

      closeAllModals();
      const dist = Math.hypot(dest.x - this.player.x, dest.y - this.player.y);

      const ticker = document.getElementById('travel-status-bar');
      const tickerText = document.getElementById('travel-status-text');
      if (ticker && tickerText) {
        ticker.classList.remove('hidden');
        tickerText.textContent = `TRAVELING TO: ${dest.name}...`;
      }

      this.player.destTarget = dest;
      this.player.targetX = dest.x;
      this.player.targetY = dest.y;

      if (dist > 220) {
        sfx.fireballTransform();
        this.player.state = 'TRANSFORMING_IN';
        this.player.animTimer = 0;
        this.camera.targetZoom = 0.84;
      } else {
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
      this.camera.targetZoom = 0.84;
    }

    onArrivalAtDestination(dest) {
      this.player.state = 'ARRIVED';
      this.camera.targetZoom = 1.12;
      sfx.arrivalFanfare();

      const ticker = document.getElementById('travel-status-bar');
      if (ticker) ticker.classList.add('hidden');

      if (dest) {
        dest.visited = true;
        this.currentZoneName = dest.name;

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
    // UPDATE ENGINE LOOP
    // ------------------------------------------------------------------------
    update() {
      if (this.activeModal) return;

      // 1. Player State Machine (Walking, Blue Fireball Flight, Arrival)
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
        if (this.player.targetX !== null && this.player.targetY !== null) {
          const dx = this.player.targetX - this.player.x;
          const dy = this.player.targetY - this.player.y;
          const dist = Math.hypot(dx, dy);

          if (dist > 16) {
            this.player.x += (dx / dist) * this.player.fireballSpeed;
            this.player.y += (dy / dist) * this.player.fireballSpeed;

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
        if (pt.alpha <= 0) this.player.fireballTrail.splice(i, 1);
      }

      // World Boundary Clamping
      this.player.x = Math.max(-1100, Math.min(1300, this.player.x));
      this.player.y = Math.max(-700, Math.min(800, this.player.y));

      // Camera Smooth Follow & Dynamic Zoom
      this.camera.x += (this.player.x - this.camera.x) * this.camera.lerp;
      this.camera.y += (this.player.y - this.camera.y) * this.camera.lerp;
      this.camera.zoom += (this.camera.targetZoom - this.camera.zoom) * 0.05;

      // Update Daytime Drifting Clouds
      this.clouds.forEach(c => {
        c.x += c.speed;
        if (c.x > 1400) c.x = -1400;
      });

      // Update Animated Train Sequence
      const cityStationX = 520;
      const homeStationX = -460;

      if (this.train.state === 'CRUISING') {
        this.train.x += this.train.speed;
        // Check for station stops
        if (Math.abs(this.train.x - cityStationX) < 10 || Math.abs(this.train.x - homeStationX) < 10) {
          this.train.state = 'STOPPED';
          this.train.dwellTimer = 120; // dwell for ~2 seconds
        }
        if (this.train.x > 850) this.train.x = -750;
      } else if (this.train.state === 'STOPPED') {
        this.train.dwellTimer -= 1;
        if (this.train.dwellTimer <= 0) {
          this.train.state = 'CRUISING';
          this.train.x += this.train.speed;
        }
      }

      this.train.smokeTimer++;
      if (this.train.smokeTimer % 12 === 0) {
        this.train.smokePuffs.push({ x: this.train.x + 35, y: this.train.y - 20, size: 6, alpha: 0.75 });
      }
      for (let i = this.train.smokePuffs.length - 1; i >= 0; i--) {
        const p = this.train.smokePuffs[i];
        p.y -= 0.5;
        p.size += 0.35;
        p.alpha -= 0.02;
        if (p.alpha <= 0) this.train.smokePuffs.splice(i, 1);
      }

      // Update Kraken Encounter in Deep Ocean (x: 880, y: -320)
      const distToKraken = Math.hypot(this.player.x - this.kraken.x, this.player.y - this.kraken.y);
      if (distToKraken < 420) {
        this.kraken.active = true;
        this.kraken.tentacleProgress = Math.min(1, this.kraken.tentacleProgress + 0.015);
      } else {
        this.kraken.tentacleProgress = Math.max(0, this.kraken.tentacleProgress - 0.02);
        if (this.kraken.tentacleProgress <= 0) this.kraken.active = false;
      }

      // Update Living NPCs with Waypoints & Activities
      this.npcs.forEach(npc => {
        if (npc.type === 'shopper' || npc.type === 'business') {
          if (npc.pauseTimer > 0) {
            npc.pauseTimer -= 1;
          } else {
            npc.currentX += npc.dir * 0.7;
            if (Math.abs(npc.currentX - npc.x) > npc.range) {
              npc.dir *= -1;
              npc.pauseTimer = 60; // pause to look at shop
            }
          }
        } else if (npc.type === 'tourist') {
          npc.photoFlashTimer = (npc.photoFlashTimer + 1) % 180;
        } else if (npc.type === 'seagull') {
          npc.angle += npc.speed;
        }
      });

      // Update Plaza Fountain Water Jets
      if (Math.random() < 0.6) {
        this.fountainParticles.push({
          x: 480 + (Math.random() - 0.5) * 12,
          y: 400 - 16,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -2.5 - Math.random() * 2,
          alpha: 1.0,
          size: 2.5
        });
      }
      for (let i = this.fountainParticles.length - 1; i >= 0; i--) {
        const fp = this.fountainParticles[i];
        fp.x += fp.vx;
        fp.y += fp.vy;
        fp.vy += 0.18; // gravity
        fp.alpha -= 0.035;
        if (fp.alpha <= 0) this.fountainParticles.splice(i, 1);
      }

      // Proximity to Landmarks
      this.nearestLandmark = null;
      let minDistance = Infinity;
      let zoneName = 'VIBRANT REALM';

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
    // RENDER WITH Y-SORTING DEPTH MANAGEMENT
    // ------------------------------------------------------------------------
    render() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      ctx.save();
      ctx.translate(this.width / 2, this.height / 2);
      ctx.scale(this.camera.zoom, this.camera.zoom);
      ctx.translate(-this.camera.x, -this.camera.y);

      // 1. LAYER 1: Sky, Terrain, Roads & Water
      this.drawDaytimeTerrain(ctx);

      // 2. LAYER 2: Railway Tracks & Ocean Shoreline Waves
      this.drawRailwayAndOcean(ctx);

      // 3. LAYER 3: Y-Sorted Physical Entities (Buildings, Trees, Props, NPCs, Player, Train)
      this.drawYSortedEntities(ctx);

      // 4. LAYER 4: Drifting Daytime Clouds & Seagulls
      this.drawCloudsAndSeagulls(ctx);

      ctx.restore();

      // 5. LAYER 5: Radar Minimap & Big Map Modal
      this.renderMinimap();
      if (this.activeModal === 'modal-map') {
        this.renderBigMap();
      }
    }

    // ------------------------------------------------------------------------
    // DAYTIME TERRAIN & URBAN ROADS
    // ------------------------------------------------------------------------
    drawDaytimeTerrain(ctx) {
      // Sky/Water base
      ctx.fillStyle = '#64b5f6';
      ctx.fillRect(-1400, -900, 3000, 2000);

      // Vibrant Green Meadow Grass
      ctx.fillStyle = '#48b872';
      ctx.fillRect(-950, -500, 1900, 1150);

      // Sunny Warm Beach Shoreline (x: -220 to 180, y: -450 to -80)
      ctx.fillStyle = '#f4d06f';
      ctx.fillRect(-220, -460, 280, 320);

      // Tropical Blue Ocean (x: 60 to 1300, y: -550 to 0)
      ctx.fillStyle = '#0077b6';
      ctx.fillRect(60, -550, 1240, 480);

      // City Paved District Foundation (x: 240 to 860, y: 0 to 600)
      ctx.fillStyle = '#475569';
      ctx.fillRect(240, 40, 640, 460);

      // City Sidewalk Tiles (Paving blocks)
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(250, 50, 620, 440);

      // Main City Roads (Asphalt with Markings)
      // Horizontal Main Ave (y: 200)
      ctx.fillStyle = '#334155';
      ctx.fillRect(250, 180, 620, 44);
      // Vertical Broadway (x: 520)
      ctx.fillRect(500, 50, 44, 440);

      // White Dashed Road Markings
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 2;
      ctx.setLineDash([12, 10]);
      ctx.beginPath();
      // Horizontal center line
      ctx.moveTo(250, 202); ctx.lineTo(870, 202);
      // Vertical center line
      ctx.moveTo(522, 50); ctx.lineTo(522, 490);
      ctx.stroke();
      ctx.setLineDash([]);

      // Zebra Crossings at Intersections
      ctx.fillStyle = '#ffffff';
      for (let z = 0; z < 6; z++) {
        ctx.fillRect(490 + z * 12, 168, 6, 12);
        ctx.fillRect(490 + z * 12, 224, 6, 12);
      }

      // Cobblestone Pathways Linking Shrines across Grass
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 24;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(-560, -180); // Home
      ctx.lineTo(-280, -180); // About
      ctx.lineTo(320, -180);  // Skills
      ctx.lineTo(-340, 420);  // Monas
      ctx.lineTo(160, 440);   // Durkheim
      ctx.lineTo(720, 460);   // Eco
      ctx.lineTo(1040, 180);  // Comm
      ctx.stroke();

      // Cobble Stone Inset Path
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 10;
      ctx.stroke();
    }

    drawRailwayAndOcean(ctx) {
      const ry = 160;
      // Train Ties
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(-750, ry);
      ctx.lineTo(900, ry);
      ctx.stroke();

      // Steel Rails
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-750, ry - 4); ctx.lineTo(900, ry - 4);
      ctx.moveTo(-750, ry + 4); ctx.lineTo(900, ry + 4);
      ctx.stroke();

      // Ocean Waves Animations
      const time = performance.now();
      this.seaWaves.forEach(w => {
        const waveX = w.x + Math.sin(time * w.speed + w.phase) * 10;
        const waveY = w.y;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(waveX, waveY, w.size * 0.4, Math.PI, 0);
        ctx.stroke();
      });

      // Wooden Beach Pier & Dock
      ctx.fillStyle = '#854d0e';
      ctx.fillRect(-65, -390, 28, 140);
      ctx.strokeStyle = '#3d2612';
      ctx.lineWidth = 2;
      ctx.strokeRect(-65, -390, 28, 140);
      // Pier Dock Pilings
      ctx.fillStyle = '#451a03';
      ctx.fillRect(-68, -260, 6, 12);
      ctx.fillRect(-40, -260, 6, 12);
    }

    // ------------------------------------------------------------------------
    // Y-SORTED ENTITY PIPELINE (BUILDINGS, TREES, NPCS, PLAYER, MONUMENTS)
    // ------------------------------------------------------------------------
    drawYSortedEntities(ctx) {
      const entities = [];

      // 1. Add Player
      entities.push({
        y: this.player.y,
        draw: () => this.drawPlayerSprite(ctx)
      });

      // 2. Add Destinations / Landmarks
      Object.values(this.destinations).forEach(dest => {
        entities.push({
          y: dest.y,
          draw: () => this.drawLandmarkEntity(ctx, dest)
        });
      });

      // 3. Add Buildings & Shops in City
      const buildings = [
        // Residential Cottages near Home
        { x: -620, y: -200, w: 48, h: 36, roofColor: '#b91c1c', wallColor: '#fef3c7', type: 'cottage', roofStyle: 'gable' },
        { x: -500, y: -260, w: 52, h: 38, roofColor: '#1d4ed8', wallColor: '#e0e7ff', type: 'cottage', roofStyle: 'hip' },
        // Commercial Downtown Storefronts
        { x: 300, y: 130, w: 64, h: 52, roofColor: '#047857', wallColor: '#d1fae5', type: 'shop', awning: '#ef4444', label: 'CAFE' },
        { x: 380, y: 130, w: 68, h: 54, roofColor: '#7c3aed', wallColor: '#ede9fe', type: 'shop', awning: '#3b82f6', label: 'STUDIO' },
        { x: 620, y: 130, w: 72, h: 56, roofColor: '#c2410c', wallColor: '#ffedd5', type: 'shop', awning: '#f59e0b', label: 'STORE' },
        { x: 710, y: 130, w: 65, h: 52, roofColor: '#0369a1', wallColor: '#e0f2fe', type: 'shop', awning: '#10b981', label: 'BOOK' },
        // Mid-rise Skyscraper Offices
        { x: 320, y: 290, w: 70, h: 74, roofColor: '#334155', wallColor: '#64748b', type: 'office', floors: 3 },
        { x: 660, y: 290, w: 80, h: 84, roofColor: '#1e293b', wallColor: '#475569', type: 'office', floors: 4 }
      ];

      buildings.forEach(b => {
        entities.push({
          y: b.y,
          draw: () => this.drawBuilding(ctx, b)
        });
      });

      // 4. Add Civic Plaza Central Fountain
      entities.push({
        y: 400,
        draw: () => this.drawFountain(ctx, 480, 400)
      });

      // 5. Add Train Stations (Home & City)
      entities.push({
        y: 160,
        draw: () => this.drawTrainStation(ctx, -460, 160, 'HOME STN')
      });
      entities.push({
        y: 160,
        draw: () => this.drawTrainStation(ctx, 520, 160, 'CITY CENTRAL')
      });

      // 6. Add Animated Train
      entities.push({
        y: this.train.y,
        draw: () => this.drawTrainCars(ctx)
      });

      // 7. Add Kraken (if active)
      if (this.kraken.tentacleProgress > 0) {
        entities.push({
          y: this.kraken.y,
          draw: () => this.drawKrakenEntity(ctx)
        });
      }

      // 8. Add Handcrafted Trees & Street Lamps
      const sceneryProps = [
        // Home Valley Trees
        { x: -680, y: -160, type: 'oak' },
        { x: -440, y: -150, type: 'oak' },
        { x: -580, y: -280, type: 'pine' },
        // Beach Palm Trees
        { x: -140, y: -380, type: 'palm' },
        { x: -80, y: -410, type: 'palm' },
        { x: 0, y: -360, type: 'palm' },
        // Park & City Trees
        { x: 430, y: 360, type: 'oak' },
        { x: 530, y: 360, type: 'oak' },
        { x: 430, y: 440, type: 'pine' },
        { x: 530, y: 440, type: 'pine' },
        // Eco-Sanctum Forest
        { x: 670, y: 390, type: 'pine' },
        { x: 770, y: 410, type: 'pine' },
        { x: 720, y: 520, type: 'oak' },
        // Street Lamps with Warm Daytime Glow
        { x: 270, y: 176, type: 'lamp' },
        { x: 470, y: 176, type: 'lamp' },
        { x: 570, y: 176, type: 'lamp' },
        { x: 790, y: 176, type: 'lamp' },
        // Park Benches
        { x: 450, y: 380, type: 'bench' },
        { x: 510, y: 380, type: 'bench' },
        // Parked Bicycles & Hydrants
        { x: 370, y: 176, type: 'bike' },
        { x: 610, y: 176, type: 'hydrant' }
      ];

      sceneryProps.forEach(sp => {
        entities.push({
          y: sp.y,
          draw: () => this.drawProp(ctx, sp)
        });
      });

      // 9. Add NPCs
      this.npcs.forEach(npc => {
        entities.push({
          y: npc.y || 220,
          draw: () => this.drawNPCEntity(ctx, npc)
        });
      });

      // Sort all entities by Y position (top-to-bottom depth ordering)
      entities.sort((a, b) => a.y - b.y);

      // Execute Draw for each in correct depth order
      entities.forEach(ent => ent.draw());
    }

    // ------------------------------------------------------------------------
    // SPRITE DRAWING HELPERS (BUILDINGS, PROPS, FOUNTAIN, TRAIN, KRAKEN)
    // ------------------------------------------------------------------------
    drawBuilding(ctx, b) {
      // Soft Ground Shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
      ctx.fillRect(b.x - b.w / 2 + 6, b.y - 4, b.w, 14);

      // Main Facade Wall
      ctx.fillStyle = b.wallColor;
      ctx.fillRect(b.x - b.w / 2, b.y - b.h, b.w, b.h);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.strokeRect(b.x - b.w / 2, b.y - b.h, b.w, b.h);

      // Roof
      ctx.fillStyle = b.roofColor;
      if (b.type === 'cottage') {
        ctx.beginPath();
        ctx.moveTo(b.x - b.w / 2 - 4, b.y - b.h);
        ctx.lineTo(b.x, b.y - b.h - 16);
        ctx.lineTo(b.x + b.w / 2 + 4, b.y - b.h);
        ctx.fill();
        ctx.stroke();
      } else {
        // Flat roof with parapet trim
        ctx.fillRect(b.x - b.w / 2 - 2, b.y - b.h - 6, b.w + 4, 8);
        ctx.strokeRect(b.x - b.w / 2 - 2, b.y - b.h - 6, b.w + 4, 8);
      }

      // Windows & Storefront Details
      if (b.type === 'shop') {
        // Striped Awning
        ctx.fillStyle = b.awning || '#ef4444';
        ctx.fillRect(b.x - b.w / 2 + 4, b.y - b.h + 18, b.w - 8, 10);
        // Glass Display Window
        ctx.fillStyle = '#bae6fd';
        ctx.fillRect(b.x - b.w / 2 + 8, b.y - b.h + 30, b.w / 2 - 6, 16);
        // Door
        ctx.fillStyle = '#78350f';
        ctx.fillRect(b.x + 6, b.y - 20, 16, 20);
        // Label
        ctx.fillStyle = '#1e293b';
        ctx.font = '5px "Press Start 2P", monospace';
        ctx.fillText(b.label, b.x - 12, b.y - b.h + 12);
      } else if (b.type === 'office') {
        // Window Grid
        for (let r = 0; r < b.floors; r++) {
          for (let c = 0; c < 3; c++) {
            ctx.fillStyle = '#e0f2fe';
            ctx.fillRect(b.x - b.w / 2 + 8 + c * 18, b.y - b.h + 10 + r * 18, 12, 12);
            ctx.strokeStyle = '#64748b';
            ctx.strokeRect(b.x - b.w / 2 + 8 + c * 18, b.y - b.h + 10 + r * 18, 12, 12);
          }
        }
      }
    }

    drawFountain(ctx, x, y) {
      // Base Basin Shadow & Stone
      ctx.fillStyle = 'rgba(15, 23, 42, 0.22)';
      ctx.beginPath(); ctx.ellipse(x + 4, y + 2, 34, 16, 0, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#64748b';
      ctx.beginPath(); ctx.ellipse(x, y - 4, 32, 16, 0, 0, Math.PI * 2); ctx.fill();

      // Water Pool
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath(); ctx.ellipse(x, y - 6, 26, 12, 0, 0, Math.PI * 2); ctx.fill();

      // Center Pillar
      ctx.fillStyle = '#cbd5e1';
      ctx.fillRect(x - 6, y - 22, 12, 16);
      ctx.fillRect(x - 10, y - 26, 20, 5);

      // Water Jet Particles
      this.fountainParticles.forEach(fp => {
        ctx.fillStyle = `rgba(240, 249, 255, ${fp.alpha})`;
        ctx.beginPath(); ctx.arc(fp.x, fp.y, fp.size, 0, Math.PI * 2); ctx.fill();
      });
    }

    drawTrainStation(ctx, x, y, name) {
      // Platform Shadow & Raised Stone
      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
      ctx.fillRect(x - 46, y - 4, 96, 12);

      ctx.fillStyle = '#334155';
      ctx.fillRect(x - 48, y - 28, 96, 24);
      ctx.fillStyle = '#cbd5e1';
      ctx.fillRect(x - 46, y - 26, 92, 4); // White tactile safety line

      // Roof Canopy
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(x - 44, y - 48, 88, 6);
      // Support Posts
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(x - 40, y - 42, 4, 16);
      ctx.fillRect(x + 36, y - 42, 4, 16);

      // Station Sign
      ctx.fillStyle = '#f1c40f';
      ctx.font = '5.5px "Press Start 2P", monospace';
      ctx.fillText(name, x - 32, y - 36);
    }

    drawTrainCars(ctx) {
      const tx = this.train.x;
      const ty = this.train.y;

      // Train Puffy Smoke
      this.train.smokePuffs.forEach(p => {
        ctx.fillStyle = `rgba(248, 250, 252, ${p.alpha})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
      });

      // Locomotive Shadow & Body
      ctx.fillStyle = 'rgba(15, 23, 42, 0.28)';
      ctx.fillRect(tx - 6, ty - 2, 60, 8);

      ctx.fillStyle = '#0f766e';
      ctx.fillRect(tx, ty - 22, 52, 22);
      // Locomotive Cabin & Headlight
      ctx.fillStyle = '#14b8a6';
      ctx.fillRect(tx + 36, ty - 26, 14, 22);
      ctx.fillStyle = '#fef08a';
      ctx.fillRect(tx + 48, ty - 12, 6, 6); // Headlight

      // Passenger Car 1
      ctx.fillStyle = 'rgba(15, 23, 42, 0.28)';
      ctx.fillRect(tx - 68, ty - 2, 60, 8);

      ctx.fillStyle = '#0284c7';
      ctx.fillRect(tx - 62, ty - 22, 56, 22);
      // Lit Windows with Passenger Silhouettes
      ctx.fillStyle = '#fef08a';
      ctx.fillRect(tx - 56, ty - 18, 12, 10);
      ctx.fillRect(tx - 38, ty - 18, 12, 10);
      ctx.fillRect(tx - 20, ty - 18, 12, 10);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(tx - 52, ty - 14, 4, 6);
      ctx.fillRect(tx - 34, ty - 14, 4, 6);
    }

    drawKrakenEntity(ctx) {
      const kx = this.kraken.x;
      const ky = this.kraken.y;
      const prog = this.kraken.tentacleProgress;
      const time = performance.now() * 0.003;
      const sway = Math.sin(time * 2) * 12;

      // Swirling Water Foam
      ctx.strokeStyle = `rgba(186, 230, 253, ${prog * 0.8})`;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(kx, ky, 55 * prog, 0, Math.PI * 2); ctx.stroke();

      // 3 Giant Purple Kraken Tentacles
      const offsets = [-35, 0, 35];
      offsets.forEach((ox, idx) => {
        const h = 60 * prog;
        ctx.fillStyle = '#6b21a8';
        ctx.beginPath();
        ctx.moveTo(kx + ox - 10, ky);
        ctx.quadraticCurveTo(kx + ox + sway, ky - h * 0.6, kx + ox + sway * 1.3, ky - h);
        ctx.quadraticCurveTo(kx + ox + 10 + sway, ky - h * 0.6, kx + ox + 10, ky);
        ctx.fill();

        // Suction Cups
        ctx.fillStyle = '#f472b6';
        for (let s = 0; s < 4; s++) {
          ctx.fillRect(kx + ox + (sway * s * 0.25) - 1, ky - s * (h / 4) - 6, 3, 3);
        }
      });
    }

    drawProp(ctx, p) {
      const time = performance.now() * 0.002;
      const sway = Math.sin(time + p.x) * 2;

      // Shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
      ctx.beginPath(); ctx.ellipse(p.x + 3, p.y + 2, 10, 5, 0, 0, Math.PI * 2); ctx.fill();

      if (p.type === 'oak') {
        // Trunk
        ctx.fillStyle = '#78350f';
        ctx.fillRect(p.x - 3, p.y - 14, 6, 14);
        // Foliage with wind sway
        ctx.fillStyle = '#15803d';
        ctx.beginPath(); ctx.arc(p.x + sway, p.y - 28, 18, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#22c55e';
        ctx.beginPath(); ctx.arc(p.x - 3 + sway, p.y - 32, 12, 0, Math.PI * 2); ctx.fill();
      } else if (p.type === 'pine') {
        ctx.fillStyle = '#78350f';
        ctx.fillRect(p.x - 3, p.y - 12, 6, 12);
        ctx.fillStyle = '#065f46';
        ctx.beginPath();
        ctx.moveTo(p.x - 14 + sway, p.y - 12);
        ctx.lineTo(p.x + sway, p.y - 38);
        ctx.lineTo(p.x + 14 + sway, p.y - 12);
        ctx.fill();
      } else if (p.type === 'palm') {
        ctx.fillStyle = '#92400e';
        ctx.fillRect(p.x - 3, p.y - 24, 6, 24);
        ctx.fillStyle = '#16a34a';
        ctx.fillRect(p.x - 20 + sway, p.y - 32, 40, 8);
        ctx.fillRect(p.x - 12 + sway, p.y - 38, 24, 8);
      } else if (p.type === 'lamp') {
        ctx.fillStyle = '#334155';
        ctx.fillRect(p.x - 2, p.y - 24, 4, 24);
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(p.x - 5, p.y - 28, 10, 6);
      } else if (p.type === 'bench') {
        ctx.fillStyle = '#78350f';
        ctx.fillRect(p.x - 10, p.y - 8, 20, 8);
        ctx.fillStyle = '#334155';
        ctx.fillRect(p.x - 8, p.y - 4, 3, 4);
        ctx.fillRect(p.x + 5, p.y - 4, 3, 4);
      } else if (p.type === 'bike') {
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(p.x - 6, p.y - 8, 12, 6);
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(p.x - 8, p.y - 4, 4, 4);
        ctx.fillRect(p.x + 4, p.y - 4, 4, 4);
      } else if (p.type === 'hydrant') {
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(p.x - 4, p.y - 10, 8, 10);
      }
    }

    drawNPCEntity(ctx, npc) {
      if (npc.type === 'seagull') return; // rendered in sky layer

      const nx = npc.currentX || npc.x;
      const ny = npc.y || 220;

      // Shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.22)';
      ctx.beginPath(); ctx.ellipse(nx, ny + 2, 7, 3, 0, 0, Math.PI * 2); ctx.fill();

      // Body & Head
      ctx.fillStyle = npc.color || '#3b82f6';
      ctx.fillRect(nx - 4, ny - 14, 8, 10);
      ctx.fillStyle = '#ffd3a5';
      ctx.fillRect(nx - 3, ny - 20, 6, 6);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(nx - 3, ny - 4, 2, 4);
      ctx.fillRect(nx + 1, ny - 4, 2, 4);

      // Tourist Camera Flash
      if (npc.type === 'tourist' && npc.photoFlashTimer < 6) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.arc(nx - 6, ny - 14, 8, 0, Math.PI * 2); ctx.fill();
      }
    }

    drawLandmarkEntity(ctx, dest) {
      const time = performance.now() * 0.003;
      const isNearby = this.nearestLandmark && this.nearestLandmark.id === dest.id;

      // Ground Base Platform
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
      ctx.beginPath(); ctx.ellipse(dest.x + 4, dest.y + 4, dest.radius * 0.65, dest.radius * 0.35, 0, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = isNearby ? '#e2e8f0' : '#cbd5e1';
      ctx.beginPath(); ctx.ellipse(dest.x, dest.y, dest.radius * 0.6, dest.radius * 0.3, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = isNearby ? '#f1c40f' : (dest.visited ? '#2ecc71' : '#64748b');
      ctx.lineWidth = 2;
      ctx.stroke();

      // Monument Structure
      this.drawMonumentGraphic(ctx, dest.id, dest.x, dest.y, time);

      // Title Badge
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.fillRect(dest.x - 70, dest.y + 36, 140, 24);
      ctx.strokeStyle = isNearby ? '#f1c40f' : '#334155';
      ctx.lineWidth = 1;
      ctx.strokeRect(dest.x - 70, dest.y + 36, 140, 24);

      ctx.fillStyle = isNearby ? '#f1c40f' : '#ffffff';
      ctx.font = '6.5px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(dest.name, dest.x, dest.y + 47);

      ctx.fillStyle = dest.color;
      ctx.font = '5.5px "Press Start 2P", monospace';
      ctx.fillText(dest.subtitle, dest.x, dest.y + 56);
    }

    drawMonumentGraphic(ctx, id, x, y, time) {
      switch (id) {
        case 'home':
          // Abiy's Residence
          ctx.fillStyle = '#b45309';
          ctx.fillRect(x - 18, y - 26, 36, 24);
          ctx.fillStyle = '#dc2626'; // Terracotta roof
          ctx.beginPath();
          ctx.moveTo(x - 22, y - 26); ctx.lineTo(x, y - 44); ctx.lineTo(x + 22, y - 26);
          ctx.fill();
          ctx.fillStyle = '#fef08a'; // Lit window
          ctx.fillRect(x - 10, y - 20, 8, 8);
          ctx.fillStyle = '#451a03'; // Door
          ctx.fillRect(x + 2, y - 16, 8, 14);
          break;

        case 'about':
          // Codex Shrine
          ctx.fillStyle = '#334155';
          ctx.fillRect(x - 18, y - 26, 36, 26);
          ctx.fillStyle = '#f1c40f';
          ctx.fillRect(x - 12, y - 20, 24, 14);
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(x - 6, y - 14, 12, 3);
          break;

        case 'skills':
          // Tech Workshop Forge
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(x - 20, y - 24, 40, 24);
          ctx.fillStyle = '#38bdf8';
          ctx.fillRect(x - 14, y - 18, 28, 12);
          ctx.fillStyle = '#22c55e';
          ctx.fillRect(x - 6, y - 12, 12, 4);
          break;

        case 'monas':
          // Monas National Obelisk
          ctx.fillStyle = '#f8fafc';
          ctx.fillRect(x - 18, y - 10, 36, 12); // Base cawan
          ctx.fillRect(x - 6, y - 46, 12, 38);  // Shaft
          ctx.fillStyle = '#f1c40f';            // Golden flame
          ctx.fillRect(x - 5, y - 56, 10, 10);
          break;

        case 'durkheim':
          // Classical Library & Academic Study
          ctx.fillStyle = '#6b21a8';
          ctx.fillRect(x - 20, y - 26, 40, 26);
          ctx.fillStyle = '#e9d5ff';
          ctx.fillRect(x - 14, y - 20, 28, 14);
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(x - 6, y - 14, 4, 4);
          ctx.fillRect(x + 2, y - 10, 4, 4);
          break;

        case 'pollution':
          // Eco Sanctum Nature Installation
          ctx.fillStyle = '#78350f';
          ctx.fillRect(x - 4, y - 14, 8, 16);
          ctx.fillStyle = '#16a34a';
          ctx.beginPath(); ctx.arc(x, y - 26, 20, 0, Math.PI * 2); ctx.fill();
          break;

        case 'contact':
          // High Satellite Comm Beacon
          ctx.fillStyle = '#64748b';
          ctx.fillRect(x - 4, y - 40, 8, 42);
          ctx.fillStyle = '#ef4444';
          ctx.beginPath(); ctx.arc(x, y - 42, 12, 0, Math.PI); ctx.fill();
          break;
      }
    }

    drawPlayerSprite(ctx) {
      const px = this.player.x;
      const py = this.player.y;
      const time = performance.now() * 0.006;

      // 1. Blue Fireball State
      if (this.player.state === 'BLUE_FIREBALL' || this.player.state === 'TRANSFORMING_IN' || this.player.state === 'TRANSFORMING_OUT') {
        this.player.fireballTrail.forEach(pt => {
          ctx.fillStyle = `rgba(52, 152, 219, ${pt.alpha * 0.6})`;
          ctx.beginPath(); ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2); ctx.fill();
        });

        const pulse = 16 + 4 * Math.sin(time * 3);
        ctx.fillStyle = 'rgba(0, 206, 201, 0.45)';
        ctx.beginPath(); ctx.arc(px, py, pulse + 8, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = '#3498db';
        ctx.beginPath(); ctx.arc(px, py, pulse, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = '#cffff0';
        ctx.beginPath(); ctx.arc(px, py, pulse * 0.55, 0, Math.PI * 2); ctx.fill();

        for (let s = 0; s < 4; s++) {
          const spAngle = time * 4 + s * (Math.PI / 2);
          const spDist = pulse + 6;
          ctx.fillStyle = '#fff';
          ctx.fillRect(px + Math.cos(spAngle) * spDist - 2, py + Math.sin(spAngle) * spDist - 2, 4, 4);
        }
        return;
      }

      // 2. Normal Walking / Idle Human Avatar
      const scale = 2.5;
      const isWalk = this.player.state === 'WALKING';
      const walkBob = isWalk ? Math.sin(this.player.walkCycle) * 2 : Math.sin(time) * 0.8;

      ctx.save();
      ctx.translate(px, py - 16 + walkBob);

      // Character Ground Shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
      ctx.beginPath(); ctx.ellipse(0, 16 - walkBob, 10, 5, 0, 0, Math.PI * 2); ctx.fill();

      const skin = '#ffd3a5';
      const hair = '#2c1e19';
      const jacket = '#1a365d';
      const shirt = '#3498db';
      const pants = '#1f2937';
      const shoes = '#f8fafc';

      // Head & Hair
      ctx.fillStyle = hair;
      ctx.fillRect(-6 * scale / 2, -12 * scale / 2, 6 * scale, 3 * scale);
      ctx.fillStyle = skin;
      ctx.fillRect(-5 * scale / 2, -9 * scale / 2, 5 * scale, 4 * scale);

      // Eyes
      ctx.fillStyle = '#111827';
      if (this.player.facing === 'down') {
        ctx.fillRect(-3 * scale / 2, -7 * scale / 2, 1.5 * scale, 1.5 * scale);
        ctx.fillRect(1 * scale / 2, -7 * scale / 2, 1.5 * scale, 1.5 * scale);
      } else if (this.player.facing === 'left') {
        ctx.fillRect(-4 * scale / 2, -7 * scale / 2, 1.5 * scale, 1.5 * scale);
      } else if (this.player.facing === 'right') {
        ctx.fillRect(1.5 * scale / 2, -7 * scale / 2, 1.5 * scale, 1.5 * scale);
      }

      // Torso
      ctx.fillStyle = jacket;
      ctx.fillRect(-6 * scale / 2, -5 * scale / 2, 6 * scale, 5 * scale);
      ctx.fillStyle = shirt;
      ctx.fillRect(-2 * scale / 2, -5 * scale / 2, 2 * scale, 5 * scale);

      // Legs
      ctx.fillStyle = pants;
      const legOffset = isWalk ? Math.sin(this.player.walkCycle) * 3 : 0;
      ctx.fillRect(-5 * scale / 2, 0, 2 * scale, 3 * scale + legOffset);
      ctx.fillRect(1 * scale / 2, 0, 2 * scale, 3 * scale - legOffset);

      ctx.fillStyle = shoes;
      ctx.fillRect(-5 * scale / 2, 3 * scale + legOffset, 2 * scale, 1.5 * scale);
      ctx.fillRect(1 * scale / 2, 3 * scale - legOffset, 2 * scale, 1.5 * scale);

      ctx.restore();
    }

    drawCloudsAndSeagulls(ctx) {
      // Drifting Daytime Clouds
      this.clouds.forEach(c => {
        ctx.fillStyle = `rgba(255, 255, 255, ${c.alpha})`;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.height * 0.6, 0, Math.PI * 2);
        ctx.arc(c.x + c.width * 0.3, c.y - 6, c.height * 0.7, 0, Math.PI * 2);
        ctx.arc(c.x + c.width * 0.6, c.y, c.height * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Gliding Seagulls
      this.npcs.forEach(npc => {
        if (npc.type === 'seagull') {
          const gx = npc.startX + Math.cos(npc.angle) * npc.radiusX;
          const gy = npc.startY + Math.sin(npc.angle) * npc.radiusY;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(gx - 4, gy, 8, 2);
          ctx.fillRect(gx - 2, gy - 2, 4, 2);
        }
      });
    }

    // ------------------------------------------------------------------------
    // MINIMAP & BIG MAP CRT
    // ------------------------------------------------------------------------
    renderMinimap() {
      const mCtx = this.minimapCtx;
      const w = this.minimapCanvas.width;
      const h = this.minimapCanvas.height;

      mCtx.fillStyle = '#0f172a';
      mCtx.fillRect(0, 0, w, h);

      mCtx.strokeStyle = '#334155';
      mCtx.lineWidth = 1;
      mCtx.strokeRect(2, 2, w - 4, h - 4);

      const scale = (w / 2) / 1100;
      Object.values(this.destinations).forEach(dest => {
        const bx = w / 2 + dest.x * scale;
        const by = h / 2 + dest.y * scale;
        mCtx.fillStyle = dest.visited ? '#2ecc71' : '#f1c40f';
        mCtx.fillRect(bx - 2, by - 2, 4, 4);
      });

      const px = w / 2 + this.player.x * scale;
      const py = h / 2 + this.player.y * scale;
      mCtx.fillStyle = this.player.state === 'BLUE_FIREBALL' ? '#00cec9' : '#3498db';
      mCtx.fillRect(px - 2.5, py - 2.5, 5, 5);
    }

    renderBigMap() {
      const bCtx = this.bigMapCtx;
      const w = this.bigMapCanvas.width;
      const h = this.bigMapCanvas.height;

      bCtx.fillStyle = '#060a14';
      bCtx.fillRect(0, 0, w, h);

      bCtx.strokeStyle = '#1e293b';
      bCtx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        bCtx.beginPath(); bCtx.moveTo(x, 0); bCtx.lineTo(x, h); bCtx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        bCtx.beginPath(); bCtx.moveTo(0, y); bCtx.lineTo(w, y); bCtx.stroke();
      }

      bCtx.strokeStyle = '#334155';
      bCtx.beginPath();
      bCtx.moveTo(w / 2, 0); bCtx.lineTo(w / 2, h);
      bCtx.moveTo(0, h / 2); bCtx.lineTo(w, h / 2);
      bCtx.stroke();

      const scale = (w / 2) / 1200;
      Object.values(this.destinations).forEach(dest => {
        const nx = w / 2 + dest.x * scale;
        const ny = h / 2 + dest.y * scale;

        bCtx.strokeStyle = '#334155';
        bCtx.beginPath();
        bCtx.moveTo(w / 2, h / 2);
        bCtx.lineTo(nx, ny);
        bCtx.stroke();

        bCtx.fillStyle = dest.visited ? '#2ecc71' : '#f1c40f';
        bCtx.beginPath(); bCtx.arc(nx, ny, 6, 0, Math.PI * 2); bCtx.fill();

        bCtx.fillStyle = '#f8fafc';
        bCtx.font = '6.5px "Press Start 2P", monospace';
        bCtx.textAlign = 'center';
        bCtx.fillText(dest.name, nx, ny + 14);
      });

      const pnx = w / 2 + this.player.x * scale;
      const pny = h / 2 + this.player.y * scale;
      const time = performance.now() * 0.005;

      bCtx.strokeStyle = '#3498db';
      bCtx.lineWidth = 2;
      bCtx.beginPath(); bCtx.arc(pnx, pny, 8 + 2 * Math.sin(time), 0, Math.PI * 2); bCtx.stroke();
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
  // 5. MODAL & QUICK VIEW CONTROLLER
  // --------------------------------------------------------------------------
  let currentProjectIndex = 1;
  const game = new VibrantWorldEngine();

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

    if (counterEl) counterEl.textContent = `${id} / 3`;

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
  // 6. INITIALIZATION
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    const cinAvatar = document.getElementById('cinematic-avatar-canvas');
    if (cinAvatar) drawPixelAvatar(cinAvatar.getContext('2d'), 64);

    const aboutAvatar = document.getElementById('about-avatar-canvas');
    if (aboutAvatar) drawPixelAvatar(aboutAvatar.getContext('2d'), 80);

    renderQuickViewProjects();

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

    const btnGateQuick = document.getElementById('btn-gate-quickview');
    if (btnGateQuick) {
      btnGateQuick.addEventListener('click', () => {
        sfx.init();
        cinematicLayer.classList.add('hidden');
        game.start();
        toggleQuickView(true);
      });
    }

    document.querySelectorAll('.hud-nav button[data-dest]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const destId = e.currentTarget.getAttribute('data-dest');
        if (destId) game.initiateJourney(destId);
      });
    });

    const mapBtn = document.getElementById('hud-btn-map');
    if (mapBtn) mapBtn.addEventListener('click', () => openModal('modal-map'));

    const minimapBox = document.getElementById('minimap-container');
    if (minimapBox) minimapBox.addEventListener('click', () => openModal('modal-map'));

    const sfxBtn = document.getElementById('hud-btn-sfx');
    const sfxIcon = document.getElementById('sfx-icon');
    if (sfxBtn && sfxIcon) {
      sfxIcon.textContent = sfx.muted ? '🔇' : '🔊';
      sfxBtn.addEventListener('click', () => {
        const unmuted = sfx.toggleMute();
        sfxIcon.textContent = unmuted ? '🔊' : '🔇';
      });
    }

    const viewBtn = document.getElementById('hud-btn-viewmode');
    if (viewBtn) viewBtn.addEventListener('click', () => toggleQuickView(true));

    const exitDocsBtn = document.getElementById('btn-exit-quickview');
    if (exitDocsBtn) exitDocsBtn.addEventListener('click', () => toggleQuickView(false));

    document.querySelectorAll('.modal-close-btn, .modal-close-action').forEach(btn => {
      btn.addEventListener('click', () => closeAllModals());
    });

    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) backdrop.addEventListener('click', () => closeAllModals());

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
