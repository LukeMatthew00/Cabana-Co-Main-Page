/* ==========================================
   CABANA & CO. SCRIPT (app.js)
   ========================================== */

// Make sure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Project Data
const blueprintData = {
  'scale-a': {
    name: 'Scale A',
    title: 'Enterprise Domination',
    desc: 'Structured machine learning campaigns executed concurrently on Meta, Google Search, YouTube, TikTok, and programmatic networks to lock in premium conversion loops.',
    metrics: [
      { label: 'Avg Conversion Rate', val: '4.8%' },
      { label: 'Funnel Scaling Velocity', val: '10x scale' },
      { label: 'Managed Ad Spend', val: '$100K - $1M+ /mo' },
      { label: 'Retention Loop Life', val: '24+ Months' },
      { label: 'Client Dedication', val: '8 Growth Strategists' },
      { label: 'Channel Coverage', val: '5 Networks (Omni)' }
    ]
  },
  'scale-b': {
    name: 'Scale B',
    title: 'Market Disruption',
    desc: 'Rapid scaling runs focused heavily on high-intent search acquisition, premium creative assets, and landing page conversion optimizations for immediate market capture.',
    metrics: [
      { label: 'Avg Conversion Rate', val: '3.2%' },
      { label: 'Funnel Scaling Velocity', val: '5x scale' },
      { label: 'Managed Ad Spend', val: '$30K - $100K /mo' },
      { label: 'Retention Loop Life', val: '12+ Months' },
      { label: 'Client Dedication', val: '4 Growth Strategists' },
      { label: 'Channel Coverage', val: '3 Networks (Focused)' }
    ]
  }
};

const globeClientHubs = [
  { lat: 14.9548, lng: 120.9008, label: 'Baliuag (HQ)', size: 35, color: '#d4af37' }, // Baliuag
  { lat: 40.7128, lng: -74.0060, label: 'New York', size: 18, color: '#ffffff' },
  { lat: 51.5074, lng: -0.1278, label: 'London', size: 15, color: '#ffffff' },
  { lat: 48.8566, lng: 2.3522, label: 'Paris', size: 15, color: '#ffffff' },
  { lat: 35.6762, lng: 139.6503, label: 'Tokyo', size: 18, color: '#ffffff' },
  { lat: 1.3521, lng: 103.8198, label: 'Singapore', size: 18, color: '#ffffff' },
  { lat: 46.2044, lng: 6.1432, label: 'Geneva', size: 15, color: '#ffffff' },
  { lat: -33.8688, lng: 151.2093, label: 'Sydney', size: 15, color: '#ffffff' },
  { lat: -26.2041, lng: 28.0473, label: 'Johannesburg', size: 15, color: '#ffffff' },
  { lat: -23.5505, lng: -46.6333, label: 'Sao Paulo', size: 15, color: '#ffffff' },
  { lat: 34.0522, lng: -118.2437, label: 'Los Angeles', size: 18, color: '#ffffff' },
  { lat: 43.6532, lng: -79.3832, label: 'Toronto', size: 15, color: '#ffffff' },
  { lat: 25.2048, lng: 55.2708, label: 'Dubai', size: 18, color: '#ffffff' },
  { lat: 52.5200, lng: 13.4050, label: 'Berlin', size: 15, color: '#ffffff' },
  { lat: 19.0760, lng: 72.8777, label: 'Mumbai', size: 15, color: '#ffffff' },
  { lat: 64.1466, lng: -21.9426, label: 'Reykjavik', size: 12, color: '#ffffff' },
  { lat: 30.0444, lng: 31.2357, label: 'Cairo', size: 15, color: '#ffffff' },
  { lat: 6.5244, lng: 3.3792, label: 'Lagos', size: 15, color: '#ffffff' },
  { lat: -12.0464, lng: -77.0428, label: 'Lima', size: 15, color: '#ffffff' },
  { lat: -34.6037, lng: -58.3816, label: 'Buenos Aires', size: 15, color: '#ffffff' },
  { lat: 21.3069, lng: -157.8583, label: 'Honolulu', size: 12, color: '#ffffff' },
  { lat: 61.2181, lng: -149.9003, label: 'Anchorage', size: 12, color: '#ffffff' }
];

const globeArcs = [
  { startLat: 14.9548, startLng: 120.9008, endLat: 40.7128, endLng: -74.0060, color: '#d4af37' }, // NY
  { startLat: 14.9548, startLng: 120.9008, endLat: 51.5074, endLng: -0.1278, color: '#d4af37' }, // London
  { startLat: 14.9548, startLng: 120.9008, endLat: 48.8566, endLng: 2.3522, color: '#d4af37' }, // Paris
  { startLat: 14.9548, startLng: 120.9008, endLat: 35.6762, endLng: 139.6503, color: '#d4af37' }, // Tokyo
  { startLat: 14.9548, startLng: 120.9008, endLat: 1.3521, endLng: 103.8198, color: '#d4af37' }, // Singapore
  { startLat: 14.9548, startLng: 120.9008, endLat: 46.2044, endLng: 6.1432, color: '#d4af37' }, // Geneva
  { startLat: 14.9548, startLng: 120.9008, endLat: -33.8688, endLng: 151.2093, color: '#d4af37' }, // Sydney
  { startLat: 14.9548, startLng: 120.9008, endLat: -26.2041, endLng: 28.0473, color: '#d4af37' }, // Johannesburg
  { startLat: 14.9548, startLng: 120.9008, endLat: -23.5505, endLng: -46.6333, color: '#d4af37' }, // Sao Paulo
  { startLat: 14.9548, startLng: 120.9008, endLat: 34.0522, endLng: -118.2437, color: '#d4af37' }, // LA
  { startLat: 14.9548, startLng: 120.9008, endLat: 43.6532, endLng: -79.3832, color: '#d4af37' }, // Toronto
  { startLat: 14.9548, startLng: 120.9008, endLat: 25.2048, endLng: 55.2708, color: '#d4af37' }, // Dubai
  { startLat: 14.9548, startLng: 120.9008, endLat: 52.5200, endLng: 13.4050, color: '#d4af37' }, // Berlin
  { startLat: 14.9548, startLng: 120.9008, endLat: 19.0760, endLng: 72.8777, color: '#d4af37' }, // Mumbai
  { startLat: 14.9548, startLng: 120.9008, endLat: 64.1466, endLng: -21.9426, color: '#d4af37' }, // Reykjavik
  { startLat: 14.9548, startLng: 120.9008, endLat: 30.0444, endLng: 31.2357, color: '#d4af37' }, // Cairo
  { startLat: 14.9548, startLng: 120.9008, endLat: 6.5244, endLng: 3.3792, color: '#d4af37' }, // Lagos
  { startLat: 14.9548, startLng: 120.9008, endLat: -12.0464, endLng: -77.0428, color: '#d4af37' }, // Lima
  { startLat: 14.9548, startLng: 120.9008, endLat: -34.6037, endLng: -58.3816, color: '#d4af37' }, // Buenos Aires
  { startLat: 14.9548, startLng: 120.9008, endLat: 21.3069, endLng: -157.8583, color: '#d4af37' }, // Honolulu
  { startLat: 14.9548, startLng: 120.9008, endLat: 61.2181, endLng: -149.9003, color: '#d4af37' } // Anchorage
];

const globeRings = [
  { lat: 14.9548, lng: 120.9008, color: '#d4af37', maxR: 8, speed: 1.8, repeat: 1200 }
];

// Document Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  initLenis();
  handlePreloader();
  initCustomCursor();
  initMobileMenu();
  initHeroAnimations();
  initBlueprintSwitcher();
  initServicesAccordion();
  init3DGlobe();
  initBaliuagClock();
  initCountryWheel();
  initBriefingModal();
});

// 1. Initialize Lenis (Smooth Scroll)
function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Sync scrollTrigger with lenis
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

// 2. Preloader Completion
function handlePreloader() {
  const preloader = document.getElementById("preloader");
  const preloaderBar = document.getElementById("preloaderBar");
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // Animate out preloader
      gsap.to(preloaderBar, { width: "100%", duration: 0.3, onComplete: () => {
        gsap.to(preloader, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            preloader.style.display = "none";
            // Trigger entry reveals
            revealEntryContent();
          }
        });
      }});
    } else {
      preloaderBar.style.width = `${progress}%`;
    }
  }, 80);
}

// 3. Custom Cursor Mechanics
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  
  if (!cursor) return;

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
  });

  const interactiveElements = document.querySelectorAll("a, button, select, input, textarea, .tab_btn, .accordion_item");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
}

// 4. Entry Reveals (Only reveal header on page load, texts will be revealed on scroll)
function revealEntryContent() {
  // Reveal logo and navbar items
  gsap.from("#mainHeader", {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
}

// 5. Mobile Navigation Menu
function initMobileMenu() {
  const trigger = document.getElementById("mobileMenuBtn");
  const panel = document.getElementById("mobileNavPanel");
  const items = document.querySelectorAll(".mobile_nav_item");

  if (!trigger || !panel) return;

  const toggleMenu = () => {
    const isActive = trigger.classList.toggle("active");
    panel.classList.toggle("active", isActive);
    document.body.style.overflow = isActive ? "hidden" : "";
  };

  trigger.addEventListener("click", toggleMenu);

  items.forEach(item => {
    item.addEventListener("click", () => {
      trigger.classList.remove("active");
      panel.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

// 6. Hero 3D Zoom Parallax Animations
function initHeroAnimations() {
  const skyline = document.getElementById("heroZoomSkyline");
  const interior = document.getElementById("heroZoomInterior");

  if (!skyline || !interior) return;

  // Header Scroll background add
  ScrollTrigger.create({
    trigger: "#hero",
    start: "bottom 90px",
    onEnter: () => document.getElementById("mainHeader").classList.add("scrolled"),
    onLeaveBack: () => document.getElementById("mainHeader").classList.remove("scrolled")
  });

  // Create sliding zoom ScrollTrigger timeline
  const heroTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "+=150%", // Extended scroll distance for a smooth, gradual reveal
      scrub: true,
      pin: true,
      invalidateOnRefresh: true
    }
  });

  // Set initial states
  gsap.set(skyline, { scale: 0.98, opacity: 0.1 });
  gsap.set(interior, { scale: 1.0, opacity: 1.0 });

  heroTL
    // 1. Zoom/scale up the penthouse interior photo (walking forward)
    .to(interior, { scale: 3.5, opacity: 0, ease: "power2.inOut" }, 0)
    
    // 2. Parallax zoom/scale up the skyline background balcony photo
    .to(skyline, { scale: 1.08, opacity: 1, ease: "power1.inOut" }, 0)

    // 3. Reveal hero texts at the end of the scroll trigger (from 45% to 100% scroll depth)
    .to("#heroTitleLeft", { opacity: 1, y: 0, ease: "power2.out" }, 0.45)
    .to("#heroTitleRight", { opacity: 1, y: 0, ease: "power2.out" }, 0.45)
    .to(".text-reveal-slow", { opacity: 1, y: 0, stagger: 0.08, ease: "power2.out" }, 0.6);

  // About Header reveal
  gsap.from("#aboutHeading", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "top 40%",
      scrub: 1
    },
    opacity: 0.2,
    y: 20,
    ease: "power2.out"
  });
}

// 7. Interactive Marketing Funnel Blueprint Switcher
function initBlueprintSwitcher() {
  const tabs = document.querySelectorAll(".tab_btn");
  const scaleName = document.getElementById("blueprintScaleName");
  const scaleTitle = document.getElementById("blueprintScaleTitle");
  const metricsContainer = document.getElementById("blueprintMetrics");
  const description = document.getElementById("blueprintDesc");

  if (!metricsContainer) return;

  const renderBlueprint = (scaleKey) => {
    const data = blueprintData[scaleKey];
    if (!data) return;

    scaleName.textContent = data.name;
    scaleTitle.textContent = data.title;
    description.textContent = data.desc;

    // Clear old metrics
    metricsContainer.innerHTML = '';

    // Animate & append metrics
    data.metrics.forEach((m, idx) => {
      const item = document.createElement("div");
      item.className = "metric_item";
      item.innerHTML = `
        <div class="l1 text-gray">${m.label}</div>
        <div class="p5 text-light" style="font-weight:600; margin-top:0.2rem;">${m.val}</div>
      `;
      metricsContainer.appendChild(item);

      // Simple GSAP staggered reveal
      gsap.from(item, {
        opacity: 0,
        x: -15,
        duration: 0.4,
        delay: idx * 0.05,
        ease: "power2.out"
      });
    });
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const scaleKey = tab.getAttribute("data-scale");
      renderBlueprint(scaleKey);
    });
  });

  // Initial load
  renderBlueprint('scale-a');
}

// 8. Services Accordion
function initServicesAccordion() {
  const items = document.querySelectorAll(".accordion_item");
  const section = document.getElementById("expertise");
  const bgImages = document.querySelectorAll(".accordion_bg_image");

  if (items.length === 0) return;

  items.forEach(item => {
    const trigger = item.querySelector(".accordion_trigger");
    const panel = item.querySelector(".accordion_panel");

    trigger.addEventListener("click", () => {
      const isAlreadyActive = item.classList.contains("active");

      // Close all panels
      items.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".accordion_panel").style.maxHeight = "0";
      });

      // Toggle active state
      if (!isAlreadyActive) {
        item.classList.add("active");
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });

    // Desktop hover backdrop switcher
    item.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 992) {
        const bgKey = item.getAttribute("data-bg");
        section.classList.add("hovered");
        
        bgImages.forEach(img => {
          img.classList.remove("active");
          if (img.id === `bg-${bgKey}`) {
            img.classList.add("active");
          }
        });
      }
    });

    item.addEventListener("mouseleave", () => {
      if (window.innerWidth >= 992) {
        // Only return to default if no panel is currently active
        const hasActivePanel = Array.from(items).some(i => i.classList.contains("active"));
        if (!hasActivePanel) {
          section.classList.remove("hovered");
          bgImages.forEach(img => {
            img.classList.remove("active");
            if (img.id === "bg-default") {
              img.classList.add("active");
            }
          });
        }
      }
    });
  });
}

// 9. Interactive 3D Globe with Globe.gl
function init3DGlobe() {
  const container = document.getElementById("globe3D");
  if (!container) return;

  // Set sizing based on container dimensions
  const width = container.clientWidth;
  const height = container.clientHeight || 500;

  const globe = Globe()
    (container)
    .width(width)
    .height(height)
    .backgroundColor('rgba(0,0,0,0)')
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .showAtmosphere(true)
    .atmosphereColor('#d4af37')
    // Highlight HQ with pulsing rings
    .ringsData(globeRings)
    .ringColor(d => d.color)
    .ringMaxRadius(d => d.maxR)
    .ringPropagationSpeed(d => d.speed)
    .ringRepeatPeriod(d => d.repeat)
    // Points / Custom Client Hub Coordinates
    .pointsData(globeClientHubs)
    .pointColor('color')
    .pointAltitude(0.05)
    .pointRadius(d => d.lat === 14.9548 ? 1.2 : 0.5)
    .pointsMerge(true)
    .pointLabel('label')
    // Connection Arcs / Lines from HQ
    .arcsData(globeArcs)
    .arcColor('color')
    .arcAltitude(0.25)
    .arcStroke(1.2)
    .arcDashLength(0.4)
    .arcDashGap(0.1)
    .arcDashAnimateTime(2000);

  // Configure Orbit Controls
  const controls = globe.controls();
  controls.enableZoom = false; // Keep scroll natural
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.8;
  
  // Set initial focus to Baliuag, Philippines
  globe.pointOfView({ lat: 14.9548, lng: 120.9008, altitude: 2.2 });

  // Handle Resize
  window.addEventListener("resize", () => {
    globe.width(container.clientWidth);
  });
}

// 10. Live Timezone Clock
function initBaliuagClock() {
  const clockElement = document.getElementById("baliuagClock");
  if (!clockElement) return;

  const updateClock = () => {
    // Baliuag/Philippines time is GMT+8
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const baliuagDate = new Date(utc + (3600000 * 8));
    
    let hours = baliuagDate.getHours();
    let minutes = baliuagDate.getMinutes();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    clockElement.textContent = `${hours}:${minutes}`;
  };

  updateClock();
  setInterval(updateClock, 30000); // Update every 30 seconds
}

// 11. Country Wheel Display
const countriesList = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador",
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea",
  "South Korea", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts & Nevis", "Saint Lucia", "Saint Vincent", "Samoa",
  "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function initCountryWheel() {
  const listContainer = document.getElementById("countriesWheelList");
  if (!listContainer) return;

  // Clear any existing children
  listContainer.innerHTML = '';

  const n = countriesList.length;
  
  // Construct list: prepend last country, then all original countries, then append first two countries
  const fullList = [
    countriesList[n - 1],
    ...countriesList,
    countriesList[0],
    countriesList[1]
  ];

  fullList.forEach((country) => {
    const item = document.createElement("div");
    item.className = "country_wheel_item";
    item.textContent = country;
    listContainer.appendChild(item);
  });

  const items = listContainer.querySelectorAll(".country_wheel_item");

  // We start at activeIndex = 1 (which represents original index 0)
  let activeIndex = 1;

  const updateClasses = (index) => {
    items.forEach((item, idx) => {
      item.classList.remove("active", "active-prev", "active-next");
      if (idx === index) {
        item.classList.add("active");
      } else if (idx === index - 1) {
        item.classList.add("active-prev");
      } else if (idx === index + 1) {
        item.classList.add("active-next");
      }
    });
  };

  // Set initial position: index 1 is at 40px relative to wrapper, so translateY = 0
  gsap.set(listContainer, { y: 0 });
  updateClasses(1);

  const scrollNext = () => {
    activeIndex++;
    updateClasses(activeIndex);

    gsap.to(listContainer, {
      y: (1 - activeIndex) * 40,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        // When we complete transition to index n+1 (which is the cloned first country)
        if (activeIndex === n + 1) {
          activeIndex = 1;
          updateClasses(1);
          gsap.set(listContainer, { y: 0 });
        }
      }
    });
  };

  // Automatically scroll item-by-item every 1.5 seconds
  setInterval(scrollNext, 1500);
}

// 12. Marketing Briefing Modal Form & Ticket Pass Generation
function initBriefingModal() {
  const briefBtn = document.getElementById("briefBtn");
  const modal = document.getElementById("briefModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const form = document.getElementById("briefForm");
  const formView = document.getElementById("modalFormView");
  const successView = document.getElementById("modalSuccessView");
  const ticket = document.getElementById("boardingPassTicket");

  if (!modal || !briefBtn) return;

  // Form Fields & Errors
  const fields = {
    name: { el: document.getElementById("clientName"), error: document.getElementById("nameError") },
    email: { el: document.getElementById("clientEmail"), error: document.getElementById("emailError") },
    company: { el: document.getElementById("clientCompany"), error: document.getElementById("companyError") },
    consent: { el: document.getElementById("consentCheck"), error: document.getElementById("consentError") }
  };

  // Open modal
  const openModal = (e) => {
    e.preventDefault();
    modal.classList.add("active");
    // Reset views
    formView.style.display = "block";
    successView.style.display = "none";
    form.reset();
    clearErrors();
  };

  // Close modal
  const closeModal = () => {
    modal.classList.remove("active");
  };

  briefBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Client Side Validations
  const validateField = (key) => {
    const field = fields[key];
    if (!field) return true;

    let isValid = true;
    let message = '';

    if (field.el.required && !field.el.value.trim() && field.el.type !== 'checkbox') {
      isValid = false;
      message = 'This field is required.';
    } else if (field.el.type === 'email' && field.el.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.el.value.trim())) {
        isValid = false;
        message = 'Please provide a valid email.';
      }
    } else if (field.el.type === 'checkbox' && field.el.required && !field.el.checked) {
      isValid = false;
      message = 'Agreement is required to proceed.';
    }

    field.error.textContent = message;
    field.el.style.borderColor = isValid ? "" : "#ff4a4a";
    return isValid;
  };

  const clearErrors = () => {
    Object.keys(fields).forEach(key => {
      fields[key].error.textContent = '';
      fields[key].el.style.borderColor = '';
    });
  };

  // Submit Handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formValid = true;
    Object.keys(fields).forEach(key => {
      const fieldValid = validateField(key);
      if (!fieldValid) formValid = false;
    });

    if (formValid) {
      // Form submitted successfully, parse ticket values
      const passengerVal = fields.name.el.value;
      const companyVal = fields.company.el.value;
      const scaleSelect = document.getElementById("targetScale");
      const classVal = scaleSelect.options[scaleSelect.selectedIndex].text;
      const scaleKey = scaleSelect.value;

      document.getElementById("ticketPassengerName").textContent = passengerVal;
      document.getElementById("ticketOrganization").textContent = companyVal;
      document.getElementById("ticketClass").textContent = classVal.split(":")[0]; // "Scale A" or "Scale B"
      document.getElementById("ticketDestination").textContent = scaleKey === 'scale-a' ? 'BALIUAG HQ' : 'NEW YORK JFK HUB';

      // Animate transition to Boarding Pass Success ticket
      gsap.to(formView, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        onComplete: () => {
          formView.style.display = "none";
          successView.style.display = "block";
          gsap.fromTo(successView, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );

          // Bounce/Entrance animation for Boarding Pass Ticket
          gsap.fromTo(ticket,
            { scale: 0.9, rotate: -2 },
            { scale: 1, rotate: 0, duration: 0.8, ease: "elastic.out(1, 0.75)" }
          );
        }
      });
    }
  });

  // Inline blur validation
  Object.keys(fields).forEach(key => {
    fields[key].el.addEventListener("blur", () => validateField(key));
    fields[key].el.addEventListener("input", () => {
      // Clear error immediately when typing
      fields[key].error.textContent = '';
      fields[key].el.style.borderColor = '';
    });
  });
}
