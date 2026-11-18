(function () {
  "use strict";

  var PANELS = [
    {
      src: "art/panel_01.webp",
      ken: "kb-in-up",
      glow: "dust",
      beats: [
        {
          speaker: "",
          text: "Before the warlocks of Thornhold forgot my name, there were two of us. Born on the same night. Born with more power than a village should ever hold."
        }
      ]
    },
    {
      src: "art/panel_02.webp",
      ken: "kb-pan-right",
      glow: "dust",
      beats: [
        {
          speaker: "",
          text: "They said a gift like ours would ruin a house. Mother only smiled."
        },
        {
          speaker: "Mother",
          text: "Come inside, you two. It's nearly dark.",
          remembered: true
        }
      ]
    },
    {
      src: "art/panel_03.webp",
      ken: "kb-in-right",
      glow: "violet",
      beats: [
        {
          speaker: "",
          text: "My brother was the wild one. He took what he wanted. I told myself I was nothing like him."
        }
      ]
    },
    {
      src: "art/panel_04.webp",
      ken: "kb-in-left",
      glow: "gold",
      beats: [
        {
          speaker: "",
          text: "But the temptation lived in me, too. I thought of using the gift for greed. For a glance from a girl who had never looked my way. I hated that I could."
        }
      ]
    },
    {
      src: "art/panel_05.webp",
      ken: "kb-in-center",
      glow: "dust",
      beats: [
        {
          speaker: "",
          text: "I could not live with a heart that wanted such things. So I found a way to cut the darkness out of me. A ritual older than Thornhold itself."
        }
      ]
    },
    {
      src: "art/panel_06.webp",
      ken: "kb-in-up",
      glow: "ritual",
      beats: [
        {
          speaker: "",
          text: "I succeeded. The darkness left me. But when the light returned, my brother was not the same."
        }
      ]
    },
    {
      src: "art/panel_07.webp",
      ken: "kb-in-center",
      glow: "ash",
      beats: [
        {
          speaker: "",
          text: "All the good in him was gone. As if I had stolen it. He became a storm the valley could not weather."
        }
      ]
    },
    {
      src: "art/panel_08.webp",
      ken: "kb-pan-right",
      glow: "gold",
      beats: [
        {
          speaker: "",
          text: "I should have ended it. I could not. He is my brother. How do you raise a hand against your own blood?"
        }
      ]
    },
    {
      src: "art/panel_09.webp",
      ken: "kb-in-right",
      glow: "dust",
      beats: [
        {
          speaker: "",
          text: "So I went looking for someone stronger than my love for him. Someone who could do what I cannot."
        }
      ]
    },
    {
      src: "art/panel_10.webp",
      ken: "kb-in-center",
      glow: "gold",
      beats: [
        {
          speaker: "",
          text: "If you can hear me, I need a hero. Help me find my brother. Help me stop him. I will walk with you as far as I can. The rest, I must leave to you."
        }
      ]
    }
  ];

  var stage = document.getElementById("stage");
  var layerA = document.getElementById("layer-a");
  var layerB = document.getElementById("layer-b");
  var caption = document.getElementById("caption");
  var speakerEl = document.getElementById("speaker");
  var lineEl = document.getElementById("line");
  var hintEl = document.getElementById("continue-hint");
  var skipBtn = document.getElementById("btn-skip");
  var muteBtn = document.getElementById("btn-mute");
  var overlay = document.getElementById("overlay");
  var overlayBody = document.getElementById("overlay-body");
  var canvas = document.getElementById("particles");
  var ctx = canvas.getContext("2d");

  var front = layerA;
  var back = layerB;
  var panelIndex = 0;
  var beatIndex = 0;
  var typing = false;
  var typed = "";
  var fullText = "";
  var typeTimer = null;
  var mode = "intro"; // intro | playing | finale | ended
  var glow = "dust";
  var particles = [];
  var muted = false;
  var audio = null;
  var reducedMotion = false;

  try {
    reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  function preload() {
    PANELS.forEach(function (p) {
      var img = new Image();
      img.src = p.src;
    });
  }

  function resizeCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawnParticles(kind, count) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    for (var i = 0; i < count; i++) {
      var p = {
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.8,
        a: 0.05 + Math.random() * 0.35,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.12 - Math.random() * 0.35,
        life: 40 + Math.random() * 180,
        max: 0,
        kind: kind
      };
      p.max = p.life;
      if (kind === "violet") {
        p.vy = -0.4 - Math.random() * 0.7;
        p.vx = (Math.random() - 0.5) * 0.5;
        p.x = w * 0.55 + (Math.random() - 0.3) * w * 0.4;
        p.y = h * 0.45 + Math.random() * h * 0.25;
      } else if (kind === "ritual") {
        p.x = w * 0.5 + (Math.random() - 0.5) * w * 0.28;
        p.y = h * 0.7 + Math.random() * h * 0.15;
        p.vy = -0.5 - Math.random() * 0.9;
        p.a = 0.15 + Math.random() * 0.45;
      } else if (kind === "gold") {
        p.x = w * 0.5 + (Math.random() - 0.5) * w * 0.5;
        p.y = h * 0.4 + Math.random() * h * 0.3;
      } else if (kind === "ash") {
        p.vy = 0.15 + Math.random() * 0.35;
        p.vx = (Math.random() - 0.5) * 0.4;
        p.a = 0.08 + Math.random() * 0.2;
      }
      particles.push(p);
    }
  }

  function tickParticles() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    if (mode === "intro" || mode === "ended") {
      requestAnimationFrame(tickParticles);
      return;
    }
    var target = glow === "ritual" ? 70 : glow === "violet" ? 55 : glow === "gold" ? 40 : glow === "ash" ? 35 : 18;
    if (particles.length < target) spawnParticles(glow, 2);
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;
      var fade = Math.max(0, p.life / p.max);
      var alpha = p.a * fade;
      if (p.kind === "violet") ctx.fillStyle = "rgba(170, 90, 255," + alpha + ")";
      else if (p.kind === "ash") ctx.fillStyle = "rgba(160, 200, 140," + alpha * 0.7 + ")";
      else if (p.kind === "ritual" && i % 5 === 0) ctx.fillStyle = "rgba(50, 20, 40," + alpha * 0.5 + ")";
      else ctx.fillStyle = "rgba(230, 201, 138," + alpha + ")";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      if (p.life <= 0 || p.y < -10 || p.y > h + 10) particles.splice(i, 1);
    }
    requestAnimationFrame(tickParticles);
  }

  function initAudio() {
    if (audio) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    var ac = new AC();
    var master = ac.createGain();
    master.gain.value = 0;
    master.connect(ac.destination);

    function tone(freq, type, gainVal, filterFreq) {
      var osc = ac.createOscillator();
      var g = ac.createGain();
      var f = ac.createBiquadFilter();
      osc.type = type;
      osc.frequency.value = freq;
      f.type = "lowpass";
      f.frequency.value = filterFreq;
      g.gain.value = gainVal;
      osc.connect(f);
      f.connect(g);
      g.connect(master);
      osc.start();
      return { osc: osc, filter: f, gain: g };
    }

    var low = tone(55, "sine", 0.22, 140);
    var mid = tone(82.4, "triangle", 0.07, 280);
    var high = tone(329.6, "sine", 0.02, 1200);
    // slow drift
    var t0 = ac.currentTime;
    if (low.osc.frequency.linearRampToValueAtTime) {
      try {
        low.osc.frequency.setValueAtTime(55, t0);
        low.osc.frequency.linearRampToValueAtTime(58, t0 + 8);
        mid.osc.frequency.setValueAtTime(82.4, t0);
        mid.osc.frequency.linearRampToValueAtTime(78, t0 + 11);
      } catch (e) {}
    }

    audio = { ac: ac, master: master, voices: [low, mid, high] };
    fadeAudio(muted ? 0 : 0.085, 1.6);
  }

  function fadeAudio(to, seconds) {
    if (!audio) return;
    var now = audio.ac.currentTime;
    audio.master.gain.cancelScheduledValues(now);
    audio.master.gain.setValueAtTime(audio.master.gain.value, now);
    audio.master.gain.linearRampToValueAtTime(to, now + seconds);
  }

  function setMute(next) {
    muted = next;
    muteBtn.textContent = muted ? "Sound off" : "Sound on";
    fadeAudio(muted ? 0 : 0.085, 0.4);
  }

  function clearType() {
    if (typeTimer) {
      clearTimeout(typeTimer);
      typeTimer = null;
    }
    typing = false;
  }

  function typeSpeed(ch, prev) {
    if (ch === "…" || ch === "—" || ch === ".") return 280;
    if (ch === "," || ch === ";") return 140;
    if (prev === "." || prev === "…") return 80;
    return 28;
  }

  function showHint(on) {
    if (on) hintEl.classList.add("show");
    else hintEl.classList.remove("show");
  }

  function setLine(beat, text) {
    if (beat.speaker) {
      speakerEl.hidden = false;
      speakerEl.textContent = beat.speaker;
    } else {
      speakerEl.hidden = true;
      speakerEl.textContent = "";
    }
    if (beat.remembered) lineEl.classList.add("remembered");
    else lineEl.classList.remove("remembered");
    lineEl.textContent = text;
  }

  function startBeat() {
    var panel = PANELS[panelIndex];
    var beat = panel.beats[beatIndex];
    fullText = beat.text;
    typed = "";
    setLine(beat, "");
    caption.classList.add("show");
    showHint(false);
    typing = true;
    function step() {
      if (!typing) return;
      if (typed.length >= fullText.length) {
        typing = false;
        typeTimer = null;
        showHint(true);
        return;
      }
      var ch = fullText.charAt(typed.length);
      var prev = typed.charAt(typed.length - 1);
      typed += ch;
      lineEl.textContent = typed;
      typeTimer = setTimeout(step, typeSpeed(ch, prev));
    }
    typeTimer = setTimeout(step, 220);
  }

  function finishBeat() {
    clearType();
    var panel = PANELS[panelIndex];
    var beat = panel.beats[beatIndex];
    typed = fullText;
    setLine(beat, fullText);
    showHint(true);
  }

  function swapLayers(panel) {
    var incoming = back;
    incoming.className = "layer";
    incoming.style.backgroundImage = "url('" + panel.src + "')";
    // restart ken burns
    void incoming.offsetWidth;
    incoming.classList.add(reducedMotion ? "" : panel.ken);
    incoming.classList.add("visible");
    front.classList.remove("visible");
    back = front;
    front = incoming;
    // after fade, clear old ken class from the hidden layer
    setTimeout(function () {
      if (back !== front) {
        back.className = "layer";
        back.style.backgroundImage = "none";
      }
    }, 1200);
  }

  function showPanel(index, withFade) {
    panelIndex = index;
    beatIndex = 0;
    glow = PANELS[index].glow;
    particles = [];
    var panel = PANELS[index];
    if (withFade === false) {
      front.className = "layer visible" + (reducedMotion ? "" : " " + panel.ken);
      front.style.backgroundImage = "url('" + panel.src + "')";
      back.className = "layer";
      back.style.backgroundImage = "none";
    } else {
      swapLayers(panel);
    }
    startBeat();
  }

  function showIntro() {
    mode = "intro";
    caption.classList.remove("show");
    showHint(false);
    skipBtn.classList.remove("show");
    muteBtn.classList.remove("show");
    overlayBody.innerHTML =
      '<div class="eyebrow">A tale of Thornhold</div>' +
      "<h1>Thornhold</h1>" +
      "<h2>Relics of the Warlord</h2>" +
      '<div class="gold-rule"></div>' +
      '<div class="prompt">Click or press Space to begin</div>';
    overlay.classList.add("show");
    front.className = "layer";
    back.className = "layer";
  }

  function startStory() {
    initAudio();
    if (audio && audio.ac.state === "suspended") audio.ac.resume();
    mode = "playing";
    overlay.classList.remove("show");
    skipBtn.classList.add("show");
    muteBtn.classList.add("show");
    showPanel(0, false);
  }

  function showFinale() {
    mode = "finale";
    clearType();
    // land on the last panel if we skipped
    if (panelIndex !== PANELS.length - 1 || !front.classList.contains("visible")) {
      panelIndex = PANELS.length - 1;
      glow = PANELS[panelIndex].glow;
      front.className = "layer visible" + (reducedMotion ? "" : " " + PANELS[panelIndex].ken);
      front.style.backgroundImage = "url('" + PANELS[panelIndex].src + "')";
      back.className = "layer";
    }
    var last = PANELS[PANELS.length - 1];
    var lastBeat = last.beats[last.beats.length - 1];
    setLine(lastBeat, lastBeat.text);
    caption.classList.add("show");
    showHint(false);
    skipBtn.classList.remove("show");
    overlayBody.innerHTML =
      "<h1>Thornhold</h1>" +
      "<h2>Relics of the Warlord</h2>" +
      '<div class="gold-rule"></div>' +
      '<button class="btn-begin" id="btn-begin" type="button">Begin your journey</button>';
    overlay.classList.add("show");
    var btn = document.getElementById("btn-begin");
    if (btn) btn.addEventListener("click", function (e) {
      e.stopPropagation();
      beginJourney();
    });
  }

  function beginJourney() {
    mode = "ended";
    caption.classList.remove("show");
    overlayBody.innerHTML =
      "<h1>Thornhold</h1>" +
      '<div class="gold-rule"></div>' +
      '<p class="closing">The journey would begin here.</p>' +
      '<p class="closing" style="margin-top:0.7rem;font-size:0.95rem;">This is a sample of the opening cut scene.</p>' +
      '<div class="gold-rule"></div>' +
      '<button class="btn-begin" id="btn-again" type="button">Play again</button>';
    overlay.classList.add("show");
    var btn = document.getElementById("btn-again");
    if (btn) btn.addEventListener("click", function (e) {
      e.stopPropagation();
      showIntro();
    });
  }

  function advance() {
    if (mode === "intro") {
      startStory();
      return;
    }
    if (mode === "finale" || mode === "ended") return;
    if (typing) {
      finishBeat();
      return;
    }
    var panel = PANELS[panelIndex];
    if (beatIndex < panel.beats.length - 1) {
      beatIndex += 1;
      startBeat();
      return;
    }
    if (panelIndex < PANELS.length - 1) {
      showPanel(panelIndex + 1, true);
      return;
    }
    showFinale();
  }

  stage.addEventListener("click", function (e) {
    if (e.target.closest && (e.target.closest("button") || e.target.tagName === "BUTTON")) return;
    advance();
  });

  document.addEventListener("keydown", function (e) {
    if (e.code === "Space" || e.code === "Enter" || e.code === "ArrowRight") {
      e.preventDefault();
      advance();
    } else if (e.code === "Escape") {
      if (mode === "playing") showFinale();
    }
  });

  skipBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (mode === "playing") showFinale();
  });

  muteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    initAudio();
    if (audio && audio.ac.state === "suspended") audio.ac.resume();
    setMute(!muted);
  });

  window.addEventListener("resize", resizeCanvas);

  preload();
  resizeCanvas();
  requestAnimationFrame(tickParticles);
  showIntro();

  // Expose a tiny hook for headless tests.
  window.__thornholdCutscene = {
    advance: advance,
    skip: showFinale,
    begin: beginJourney,
    start: startStory,
    get mode() { return mode; },
    get panel() { return panelIndex; },
    get beat() { return beatIndex; },
    get typing() { return typing; },
    get text() { return lineEl.textContent; },
    panels: PANELS.length
  };
})();
