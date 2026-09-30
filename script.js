/* Edit these values to connect your real profile and contact service. */
const CONFIG = {
  email: "ashfaquemuhammedm@gmail.com",
  github: "https://github.com/ashfaquemuhammedm-oss",
  linkedin: "https://www.linkedin.com/in/ashfaque-muhammed-m-/",
  formEndpoint: "http://localhost:5000/api/contact", // Optional Formspree endpoint, e.g. https://formspree.io/f/xxxxxxx
};

const PROJECTS = [
  {
    number: "01",
    title: "OAR FRAGRANCE",
    className: "visual-oar",
    description:
      "A modern corporate website developed for OAR Fragrance to showcase its brand identity, fragrance manufacturing capabilities, services, and premium digital presence.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    features: [
      "Premium corporate brand presentation",
      "Responsive and modern user interface",
      "Fragrance manufacturing and service showcase",
    ],
    live: "https://www.oarfragrance.com/",
    github: "https://github.com/ashfaquemuhammedm-oss",
  },
  {
    number: "02",
    title: "AI RESUME SCREENING SYSTEM",
    className: "visual-resume",
    description:
      "An intelligent web app that compares resumes to job descriptions and surfaces ATS-style matching information.",
    tech: ["Python", "Flask", "NLP", "Machine Learning"],
    features: [
      "Resume and job-description analysis",
      "ATS-style match information",
      "NLP-powered relevance insights",
    ],
    live: "#",
    github: "https://github.com/ashfaquemuhammedm-oss",
  },
  {
    number: "03",
    title: "FAKE NEWS DETECTION",
    className: "visual-news",
    description:
      "A machine learning application for classifying news content using NLP and TF-IDF techniques.",
    tech: ["Python", "Pandas", "Scikit-learn", "NLP", "Streamlit"],
    features: [
      "Fake and real news classification",
      "TF-IDF text processing",
      "Simple Streamlit application interface",
    ],
    live: "https://fake-news-detection-tcsion.streamlit.app/",
    github: "https://github.com/ashfaquemuhammedm-oss",
  },
  {
    number: "04",
    title: "E-COMMERCE WEBSITE",
    className: "visual-commerce",
    description:
      "A modern responsive e-commerce frontend that keeps browsing clear, focused and enjoyable.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    features: [
      "Responsive commerce interface",
      "Clean product-first layout",
      "Modern frontend interactions",
    ],
    live: "https://shop-co-me.vercel.app/",
    github: "https://github.com/ashfaquemuhammedm-oss",
  },
];
const SKILLS = {
  FRONTEND: [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "Responsive Design",
  ],
  BACKEND: ["Python", "Node.js", "Express", "Flask", "REST APIs"],
  DATABASE: ["MongoDB", "MySQL"],
  "AI / DATA": ["Pandas", "NumPy", "Scikit-learn", "NLP", "Machine Learning"],
  TOOLS: ["Git", "GitHub", "VS Code", "Vercel"],
};

function setLinks() {
  document
    .querySelectorAll('[data-social="github"],[data-contact="github"]')
    .forEach((a) => (a.href = CONFIG.github));
  document
    .querySelectorAll('[data-social="linkedin"],[data-contact="linkedin"]')
    .forEach((a) => (a.href = CONFIG.linkedin));
  document
    .querySelectorAll('[data-social="email"],[data-contact="email"]')
    .forEach((a) => (a.href = `mailto:${CONFIG.email}`));
  document
    .querySelectorAll('[data-contact="email"] b')
    .forEach((e) => (e.textContent = CONFIG.email));
  document
    .querySelectorAll('[data-contact="github"] b')
    .forEach((e) => (e.textContent = "github.com/yourusername"));
  document
    .querySelectorAll('[data-contact="linkedin"] b')
    .forEach((e) => (e.textContent = "linkedin.com/in/yourusername"));
}
function initLoader() {
  const loader = document.querySelector(".loader"),
    bar = loader.querySelector(".loader-bar span"),
    num = loader.querySelector(".loader-number"),
    step = loader.querySelector(".loader-step");
  let state = 0,
    steps = [
      "LOADING COMPONENTS...",
      "LOADING PROJECTS...",
      "LOADING EXPERIENCE...",
      "SYSTEM READY",
    ];
  const ticker = setInterval(() => {
    state = Math.min(state + 5, 100);
    bar.style.width = `${state}%`;
    num.textContent = String(state).padStart(2, "0");
    step.textContent = steps[Math.min(Math.floor(state / 26), 3)];
    if (state === 100) {
      clearInterval(ticker);
      setTimeout(() => {
        if (window.gsap)
          gsap.to(loader, {
            opacity: 0,
            duration: 0.45,
            onComplete: () => loader.remove(),
          });
        else loader.remove();
      }, 350);
    }
  }, 65);
}
function initNavbar() {
  const nav = document.querySelector(".nav-wrap"),
    links = [...document.querySelectorAll(".nav-links a")];
  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", scrollY > 30);
      document.querySelector(".scroll-progress").style.width =
        `${(scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100}%`;
    },
    { passive: true },
  );
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((a) =>
            a.classList.toggle(
              "active",
              a.getAttribute("href") === "#" + e.target.id,
            ),
          );
      }),
    { rootMargin: "-35% 0px -55%" },
  );
  sections.forEach((s) => observer.observe(s));
}
function initMobileMenu() {
  const btn = document.querySelector(".menu-toggle"),
    panel = document.querySelector(".nav-panel"),
    close = () => {
      panel.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("menu-open");
    };
  btn.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );
    document.body.classList.toggle("menu-open", open);
  });
  panel
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", close));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  addEventListener("resize", () => {
    if (innerWidth > 800) close();
  });
}
function initCursor() {
  if (
    matchMedia("(min-width: 1024px) and (pointer:fine)").matches &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const dot = document.querySelector(".cursor-dot"),
      ring = document.querySelector(".cursor-ring");
    addEventListener("mousemove", (e) => {
      dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      ring.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      dot.style.opacity = ring.style.opacity = 1;
    });
    document
      .querySelectorAll("a,button,input,textarea,.project-card,.profile-frame")
      .forEach((el) =>
        el.addEventListener("mouseenter", () => ring.classList.add("hover")),
      );
    document
      .querySelectorAll("a,button,input,textarea,.project-card,.profile-frame")
      .forEach((el) =>
        el.addEventListener("mouseleave", () => ring.classList.remove("hover")),
      );
  }
}
function typeText(el, text, speed = 65) {
  let i = 0;
  const run = () => {
    el.textContent = text.slice(0, i++);
    if (i <= text.length) setTimeout(run, speed);
  };
  run();
}
function initHeroAnimations() {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches,
    mobile = matchMedia("(max-width: 700px)").matches,
    role = document.querySelector(".typed-role");
  if (reduced) role.textContent = "FRONTEND DEVELOPER";
  else setTimeout(() => typeText(role, "FRONTEND DEVELOPER", 72), 850);
  if (window.gsap && !reduced && !mobile) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".hero-copy>*", {
      y: 26,
      opacity: 0,
      stagger: 0.1,
      duration: 0.75,
      delay: 0.55,
    });
    gsap.from(".hero-visual", { x: 45, opacity: 0, duration: 1, delay: 0.7 });
    gsap.to(".orbit-one", {
      rotation: 360,
      duration: 22,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".orbit-two", {
      rotation: -360,
      duration: 28,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".hero-profile", {
      y: -9,
      duration: 2.6,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
    gsap.utils.toArray(".floating-tag").forEach((tag, i) =>
      gsap.to(tag, {
        y: i % 2 ? 11 : -10,
        duration: 2 + i * 0.35,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      }),
    );
  }
}
function initQuickTerminal() {
  const target = document.getElementById("quick-terminal");
  const lines = [
    ["$ whoami", "ashfaque"],
    ["$ role", "Frontend Developer"],
    ["$ location", "India"],
    ["$ status", "Available for opportunities"],
  ];
  let i = 0;
  function add() {
    if (i >= lines.length) return;
    const [q, a] = lines[i++];
    target.insertAdjacentHTML(
      "beforeend",
      `<div><span class="prompt">${q}</span><br><span class="answer"></span></div>`,
    );
    const answer = target.lastElementChild.querySelector(".answer");
    let x = 0;
    const t = setInterval(() => {
      answer.textContent = a.slice(0, x++);
      if (x > a.length) {
        clearInterval(t);
        setTimeout(add, 280);
      }
    }, 25);
  }
  setTimeout(add, 800);
}
function initAboutCode() {
  const code = `<span class="code-key">const</span> developer = {\n  name: <span class="code-string">"Ashfaque Muhammed"</span>,\n  role: <span class="code-string">"Frontend Developer"</span>,\n  location: <span class="code-string">"India"</span>,\n  passion: <span class="code-string">"Building for the web"</span>\n};`;
  document.getElementById("about-code").innerHTML = code;
}
function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target,
          target = +el.dataset.count,
          duration = 1200,
          start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1),
            n = Math.floor(target * (1 - (1 - p) ** 3));
          el.textContent =
            (el.dataset.pad ? String(n).padStart(2, "0") : n) +
            (el.dataset.suffix || "");
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      }),
    { threshold: 0.6 },
  );
  els.forEach((el) => observer.observe(el));
}
function initSkills() {
  const root = document.getElementById("skill-groups");
  Object.entries(SKILLS).forEach(([cat, items]) => {
    root.insertAdjacentHTML(
      "beforeend",
      `<article class="skill-category reveal"><h3>${cat}</h3><div class="skill-list">${items.map((s) => `<div class="skill-chip"><i data-lucide="${s === "GitHub" ? "github" : "braces"}"></i>${s}</div>`).join("")}</div></article>`,
    );
  });
  document.getElementById("skills-code").innerHTML =
    `<span class="code-key">const</span> skills = [\n  <span class="code-string">"HTML"</span>,\n  <span class="code-string">"CSS"</span>,\n  <span class="code-string">"JavaScript"</span>,\n  <span class="code-string">"Tailwind CSS"</span>,\n  <span class="code-string">"Python"</span>,\n  <span class="code-string">"Node.js"</span>\n];`;
  window.lucide?.createIcons();
}
function initProjects() {
  const root = document.getElementById("projects-grid");
  PROJECTS.forEach((p, index) =>
    root.insertAdjacentHTML(
      "beforeend",
      `<article class="project-card reveal ${index === 0 ? "featured" : ""}" data-index="${index}"><div class="project-visual ${p.className}">${p.className === "visual-resume" ? '<div class="screen"></div>' : ""}</div><div class="project-info"><p class="project-number">PROJECT / ${p.number}</p><h3 class="project-title">${p.title}</h3><p class="project-description">${p.description}</p><div class="tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div></div><div class="project-footer"><div class="project-links"><a href="${p.live}" target="_blank" rel="noopener">LIVE DEMO ↗</a><a href="${p.github}" target="_blank" rel="noopener">GITHUB ↗</a></div></div></article>`,
    ),
  );
  window.lucide?.createIcons();
  if (matchMedia("(pointer:fine)").matches) {
    root.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect(),
          x = (e.clientX - r.left) / r.width - 0.5,
          y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
      });
      card.addEventListener("mouseleave", () => (card.style.transform = ""));
    });
  }
}
function initProjectLinks() {
  document
    .getElementById("projects-grid")
    ?.addEventListener("click", (event) => {
      const link = event.target.closest(".project-links a");
      if (link?.getAttribute("href") === "#") event.preventDefault();
    });
}
function initScrollAnimations() {
  if (!window.gsap || matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;
  gsap.utils.toArray(".reveal").forEach((el) =>
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: 0.65,
      scrollTrigger: { trigger: el, start: "top 88%" },
    }),
  );
  gsap.to(".timeline-fill", {
    height: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 70%",
      end: "bottom 70%",
      scrub: 1,
    },
  });
}
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const message = form.querySelector(".form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let valid = true;

    form.querySelectorAll("[required]").forEach((input) => {
      const ok =
        input.value.trim() && (input.type !== "email" || input.validity.valid);

      input.classList.toggle("invalid", !ok);
      valid &&= ok;
    });

    if (!valid) {
      message.textContent = "Please complete the highlighted fields.";
      message.className = "form-message";
      return;
    }

    const button = form.querySelector("button");

    button.disabled = true;
    button.firstChild.textContent = "SENDING... ";

    try {
      const data = {
        name: form.querySelector('[name="name"]').value.trim(),
        email: form.querySelector('[name="email"]').value.trim(),
        subject: form.querySelector('[name="subject"]').value.trim(),
        message: form.querySelector('[name="message"]').value.trim(),
      };

      const response = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      form.reset();

      message.textContent = "Message sent successfully! Thank you.";
      message.className = "form-message success";
    } catch (error) {
      console.error("Contact form error:", error);

      message.textContent =
        "Unable to send message right now. Please try again.";

      message.className = "form-message";
    } finally {
      button.disabled = false;
      button.firstChild.textContent = "SEND MESSAGE ";
    }
  });
}
function initInteractiveTerminal() {
  const terminal = document.querySelector(".interactive-terminal"),
    toggle = document.querySelector(".terminal-toggle"),
    toggleLabel = document.querySelector(".terminal-toggle-label"),
    consoleEl = document.querySelector(".terminal-console"),
    input = document.getElementById("terminal-input"),
    out = document.getElementById("terminal-output"),
    form = document.getElementById("terminal-form");
  if (
    !terminal ||
    !toggle ||
    !toggleLabel ||
    !consoleEl ||
    !input ||
    !out ||
    !form
  )
    return;

  const initialOutput =
    "$ help\n\nAvailable commands:\nabout\nskills\nprojects\ncontact\nclear\n\n";
  const setOpen = (open) => {
    terminal.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    consoleEl.setAttribute("aria-hidden", String(!open));
    toggleLabel.textContent = open ? "CLOSE ↓" : "OPEN ↑";
    if (open) requestAnimationFrame(() => input.focus());
  };

  out.textContent = initialOutput;
  toggle.addEventListener("click", () =>
    setOpen(!terminal.classList.contains("is-open")),
  );
  const commands = {
    help: "Available commands:\nabout\nskills\nprojects\ncontact\nclear",
    about:
      "Name: Ashfaque Muhammed M\nRole: Frontend Developer\nLocation: India",
    skills:
      "HTML\nCSS\nTailwind CSS\nJavaScript\nPython\nNode.js\nMongoDB\nGit\nGitHub",
    projects:
      "LARCH FRAGRANCE\nAI Resume Screening System\nFake News Detection\nE-Commerce Website",
    contact: `Email: ${CONFIG.email}\nGitHub: ${CONFIG.github}\nLinkedIn: ${CONFIG.linkedin}`,
  };
  const appendLine = (text, className = "") => {
    const line = document.createElement("div");
    if (className) line.className = className;
    line.textContent = text;
    out.append(line);
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cmd = input.value.trim().toLowerCase();
    if (!cmd) return;
    appendLine(`guest@ashfaque:~$ ${cmd}`, "terminal-command");
    if (cmd === "clear") out.replaceChildren();
    else {
      appendLine(
        commands[cmd] ||
          'Command not found.\nType "help" to see available commands.',
      );
      out.append(document.createElement("br"));
    }
    input.value = "";
    consoleEl.scrollTop = consoleEl.scrollHeight;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && terminal.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Keep this independent control available if a future page enhancement fails.
  initInteractiveTerminal();
  setLinks();
  initLoader();
  initNavbar();
  initMobileMenu();
  initCursor();
  initHeroAnimations();
  initQuickTerminal();
  initAboutCode();
  initCounters();
  initSkills();
  initProjects();
  initProjectLinks();
  initScrollAnimations();
  initContactForm();
  window.lucide?.createIcons();
});
