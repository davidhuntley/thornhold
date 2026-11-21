(function () {
  "use strict";

  var AFTER_LINE_PAUSE = 1200;

  var PANELS = [
    {
      src: "art/panel_01.webp",
      ken: "kb-in-up",
      glow: "dust",
      audio: "audio/line_01",
      text: "Two brothers were born on the same night, in a valley at the edge of the old forest. With a power no village should hold."
    },
    {
      src: "art/panel_02.webp",
      ken: "kb-pan-right",
      glow: "dust",
      audio: "audio/line_02",
      text: "One was quiet. The other was wild."
    },
    {
      src: "art/panel_03.webp",
      ken: "kb-in-right",
      glow: "violet",
      audio: "audio/line_03",
      text: "The wild one took what he wanted."
    },
    {
      src: "art/panel_04.webp",
      ken: "kb-in-left",
      glow: "gold",
      audio: "audio/line_04",
      text: "The quieter one bound a girl's heart."
    },
    {
      src: "art/panel_05.webp",
      ken: "kb-in-center",
      glow: "gold",
      audio: "audio/line_05",
      text: "He saw what he had done. And he let her go."
    },
    {
      src: "art/panel_06.webp",
      ken: "kb-in-up",
      glow: "dust",
      audio: "audio/line_06",
      text: "He sought a way to cut the darkness from himself."
    },
    {
      src: "art/panel_07.webp",
      ken: "kb-in-center",
      glow: "ritual",
      audio: "audio/line_07",
      text: "The darkness left him. What remained was only good."
    },
    {
      src: "art/panel_08.webp",
      ken: "kb-in-center",
      glow: "ash",
      audio: "audio/line_08",
      text: "But his brother was not the same."
    },
    {
      src: "art/panel_09.webp",
      ken: "kb-pan-right",
      glow: "gold",
      audio: "audio/line_09",
      text: "And so they were divided. Brother from brother."
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
  var voiceEl = document.getElementById("voice");

  var front = layerA;
  var back = layerB;
  var panelIndex = 0;
  var typing = false;
  var playingLine = false;
  var typed = "";
  var fullText = "";
  var typeTimer = null;
  var autoTimer = null;
  var mode = "intro";
  var glow = "dust";
  var particles = [];
  var muted = false;
  var audio = null;
  var reducedMotion = false;
  var preferOgg = false;

  try {
    reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  if (voiceEl) {
    preferOgg = !voiceEl.canPlayType("audio/mpeg") && !!voiceEl.canPlayType("audio/ogg");
  }

  function audioSrc(base) {
    return base + (preferOgg ? ".ogg" : ".mp3");
  }

  function preload() {
    PANELS.forEach(function (p) {
      var img = new Image();
      img.src = p.src;
      var a = new Audio();
      a.preload = "auto";
      a.src = audioSrc(p.audio);
    });
  }

  function frameSize() {
    var frame = document.getElementById("frame") || stage;
    return { w: frame.clientWidth || window.innerWidth, h: frame.clientHeight || window.innerHeight };
  }

  function resizeCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var size = frameSize();
    canvas.width = Math.floor(size.w * dpr);
    canvas.height = Math.floor(size.h * dpr);
    canvas.style.width = size.w + "px";
    canvas.style.height = size.h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawnParticles(kind, count) {
    var size = frameSize();
    var w = size.w;
    var h = size.h;
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
    var t0 = ac.currentTime;
    try {
      low.osc.frequency.setValueAtTime(55, t0);
      low.osc.frequency.linearRampToValueAtTime(58, t0 + 8);
      mid.osc.frequency.setValueAtTime(82.4, t0);
      mid.osc.frequency.linearRampToValueAtTime(78, t0 + 11);
    } catch (e) {}

    audio = { ac: ac, master: master, voices: [low, mid, high] };
    fadeDrone(muted ? 0 : 0.05, 1.6);
  }

  function fadeDrone(to, seconds) {
    if (!audio) return;
    var now = audio.ac.currentTime;
    audio.master.gain.cancelScheduledValues(now);
    audio.master.gain.setValueAtTime(audio.master.gain.value, now);
    audio.master.gain.linearRampToValueAtTime(to, now + seconds);
  }

  function setMute(next) {
    muted = next;
    muteBtn.textContent = muted ? "Sound off" : "Sound on";
    fadeDrone(muted ? 0 : 0.05, 0.4);
    if (voiceEl) {
      voiceEl.muted = muted;
      if (muted) {
        voiceEl.pause();
      }
    }
  }

  function clearType() {
    if (typeTimer) {
      clearTimeout(typeTimer);
      typeTimer = null;
    }
    typing = false;
  }

  function clearAuto() {
    if (autoTimer) {
      clearTimeout(autoTimer);
      autoTimer = null;
    }
  }

  function stopVoice() {
    if (!voiceEl) return;
    try {
      voiceEl.pause();
      voiceEl.onended = null;
      voiceEl.onerror = null;
      voiceEl.currentTime = 0;
    } catch (e) {}
    playingLine = false;
  }

  function typeSpeed(ch, prev, perChar) {
    var base = perChar || 28;
    if (ch === "…" || ch === "—" || ch === ".") return Math.max(180, base * 4);
    if (ch === "," || ch === ";") return Math.max(90, base * 2.5);
    if (prev === "." || prev === "…") return Math.max(50, base * 1.8);
    return base;
  }

  function showHint(on) {
    if (on) hintEl.classList.add("show");
    else hintEl.classList.remove("show");
  }

  function setLine(text) {
    speakerEl.hidden = true;
    speakerEl.textContent = "";
    lineEl.classList.remove("remembered");
    lineEl.textContent = text;
  }

  function startTyping(perChar) {
    typed = "";
    setLine("");
    caption.classList.add("show");
    showHint(false);
    typing = true;
    function step() {
      if (!typing) return;
      if (typed.length >= fullText.length) {
        typing = false;
        typeTimer = null;
        return;
      }
      var ch = fullText.charAt(typed.length);
      var prev = typed.charAt(typed.length - 1);
      typed += ch;
      lineEl.textContent = typed;
      typeTimer = setTimeout(step, typeSpeed(ch, prev, perChar));
    }
    typeTimer = setTimeout(step, 180);
  }

  function finishText() {
    clearType();
    typed = fullText;
    setLine(fullText);
  }

  function scheduleAdvance() {
    clearAuto();
    showHint(true);
    autoTimer = setTimeout(function () {
      autoTimer = null;
      if (mode === "playing") goNext();
    }, AFTER_LINE_PAUSE);
  }

  function onLineEnded() {
    playingLine = false;
    finishText();
    scheduleAdvance();
  }

  function playVoice(panel, onReady) {
    if (!voiceEl) {
      onReady(0);
      return;
    }
    stopVoice();
    voiceEl.muted = muted;
    voiceEl.src = audioSrc(panel.audio);
    voiceEl.onended = function () {
      onLineEnded();
    };
    voiceEl.onerror = function () {
      playingLine = false;
      if (typing) return; // typewriter will finish on its own timing
      onLineEnded();
    };
    var started = false;
    function ready() {
      if (started) return;
      started = true;
      var dur = 0;
      try { dur = voiceEl.duration || 0; } catch (e) {}
      if (!isFinite(dur)) dur = 0;
      onReady(dur);
    }
    voiceEl.onloadedmetadata = ready;
    var playAttempt = voiceEl.play();
    if (playAttempt && playAttempt.then) {
      playAttempt.then(function () {
        playingLine = !muted && !voiceEl.paused;
        if (voiceEl.readyState >= 1) ready();
      }).catch(function () {
        playingLine = false;
        onReady(0);
      });
    } else {
      playingLine = !muted;
      setTimeout(ready, 80);
    }
    // fallback if metadata never arrives
    setTimeout(function () { ready(); }, 800);
  }

  function startBeat() {
    var panel = PANELS[panelIndex];
    fullText = panel.text;
    clearAuto();
    clearType();
    caption.classList.add("show");
    showHint(false);

    function beginType(durationSec) {
      var perChar = 28;
      if (durationSec && durationSec > 0.5 && fullText.length > 0) {
        perChar = Math.max(16, Math.min(60, (durationSec * 0.92 * 1000) / fullText.length));
      }
      startTyping(perChar);
      if (!durationSec || muted || !playingLine) {
        // no voice playing: when typing finishes, pause then auto-advance
        var check = function () {
          if (mode !== "playing") return;
          if (typing) {
            setTimeout(check, 120);
            return;
          }
          if (!playingLine) scheduleAdvance();
        };
        setTimeout(check, 400);
      }
    }

    if (muted || !voiceEl) {
      playingLine = false;
      beginType(0);
      return;
    }
    playVoice(panel, beginType);
  }

  function swapLayers(panel) {
    var incoming = back;
    incoming.className = "layer";
    incoming.style.backgroundImage = "url('" + panel.src + "')";
    void incoming.offsetWidth;
    incoming.classList.add(reducedMotion ? "" : panel.ken);
    incoming.classList.add("visible");
    front.classList.remove("visible");
    back = front;
    front = incoming;
    setTimeout(function () {
      if (back !== front) {
        back.className = "layer";
        back.style.backgroundImage = "none";
      }
    }, 1200);
  }

  function showPanel(index, withFade) {
    panelIndex = index;
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
    clearAuto();
    clearType();
    stopVoice();
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
    clearAuto();
    clearType();
    stopVoice();
    if (panelIndex !== PANELS.length - 1 || !front.classList.contains("visible")) {
      panelIndex = PANELS.length - 1;
      glow = PANELS[panelIndex].glow;
      front.className = "layer visible" + (reducedMotion ? "" : " " + PANELS[panelIndex].ken);
      front.style.backgroundImage = "url('" + PANELS[panelIndex].src + "')";
      back.className = "layer";
    }
    caption.classList.remove("show");
    showHint(false);
    skipBtn.classList.remove("show");
    overlayBody.innerHTML =
      "<h1>Thornhold</h1>" +
      "<h2>Relics of the Warlord</h2>" +
      '<div class="gold-rule"></div>' +
      '<a class="btn-begin" id="btn-begin" href="../">Begin your journey</a>';
    overlay.classList.add("show");
  }

  function beginJourney() {
    window.location.href = "../";
  }

  function goNext() {
    clearAuto();
    stopVoice();
    if (panelIndex < PANELS.length - 1) {
      showPanel(panelIndex + 1, true);
      return;
    }
    showFinale();
  }

  function advance() {
    if (mode === "intro") {
      startStory();
      return;
    }
    if (mode === "finale" || mode === "ended") return;
    // Click skips ahead: if a line is still playing or typing, jump to the next panel.
    if (typing || playingLine || autoTimer) {
      finishText();
      goNext();
      return;
    }
    goNext();
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

  window.__thornholdCutscene = {
    advance: advance,
    skip: showFinale,
    begin: beginJourney,
    start: startStory,
    get mode() { return mode; },
    get panel() { return panelIndex; },
    get typing() { return typing; },
    get playing() { return playingLine; },
    get text() { return lineEl.textContent; },
    get muted() { return muted; },
    panels: PANELS.length,
    audioFor: function (i) { return audioSrc(PANELS[i].audio); }
  };
})();
