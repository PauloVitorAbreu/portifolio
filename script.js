document.documentElement.classList.add("js");

const scrambleWord = document.querySelector("[data-scramble-word]");
const hero = document.querySelector(".hero");
const projectReveal = document.querySelector("[data-project-reveal]");
const projectGridReveal = document.querySelector("[data-project-grid-reveal]");
const portfolio = document.querySelector("[data-portfolio]");
const projectCards = Array.from(document.querySelectorAll("[data-project-card]"));
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const projectCaseDetails = {
  amadora: {
    number: "01",
    eyebrow: "Case imobiliário · Amadora",
    title: "Amadora: estratégia local",
    summary: "Landing page com tese local: preço, narrativa e negociação preparados antes do anúncio para atrair o comprador certo.",
    time: "Sprint estimado: 4–6 dias úteis",
    source: "Página pública + vídeo local",
    url: "https://alexandreverissimo.pt/amadora/",
    poster: "assets/previews/amadora.webp",
    video: "assets/previews/amadora.mp4",
    thinking: [
      "Arquitetura por território: mercado local, método, caso real e diagnóstico antes do contacto.",
      "Prova objetiva com leitura de Amadora, resultado de 48h até proposta aceite e CTA de baixo atrito.",
    ],
    tags: ["LP imobiliária", "SEO local", "Proposta de valor", "Copy de conversão", "Arquitetura de informação", "Design responsivo", "Core Web Vitals", "CTA estratégico"],
  },
  alexandre: {
    number: "02",
    eyebrow: "Consultoria imobiliária estratégica",
    title: "Alexandre: valor defendido",
    summary: "Página principal para reposicionar corretagem como consultoria estratégica: diagnóstico, narrativa e defesa de margem.",
    time: "Sprint estimado: 5–7 dias úteis",
    source: "Página pública + preview local",
    url: "https://alexandreverissimo.pt/",
    poster: "assets/previews/alexandre.webp",
    video: "assets/previews/alexandre.mp4",
    thinking: [
      "Autoridade por método: diagnóstico real, posicionamento, exposição controlada e defesa de valor.",
      "Hierarquia editorial conectando cases, promessa central e CTA sem parecer institucional.",
    ],
    tags: ["Brand positioning", "UX writing", "VSL estratégica", "Funil de conversão", "SEO on-page", "Design editorial", "Performance", "Confiança comercial"],
  },
  nemesius: {
    number: "03",
    eyebrow: "Imóvel premium · Aroeira",
    title: "Nemesius’ 28: potencial claro",
    summary: "Página para moradia T3 + T1 na Aroeira, vendendo autonomia, três pisos e potencial sem virar ficha técnica.",
    time: "Sprint estimado: 3–5 dias úteis",
    source: "Página pública + vídeo local",
    url: "https://alexandreverissimo.pt/nemesius28/",
    poster: "assets/previews/nemesius.webp",
    video: "assets/previews/nemesius.mp4",
    thinking: [
      "Atributos objetivos — T3 + T1, três pisos e exterior privado — convertidos em argumento de decisão.",
      "Leitura guiada por potencial, localização e autonomia, com CTA direto para visita privada.",
    ],
    tags: ["Página de imóvel", "Narrativa de valor", "Qualificação de lead", "UI premium", "Mobile-first", "SEO técnico", "Galeria orientada", "CTA de visita"],
  },
  ferreiras: {
    number: "04",
    eyebrow: "Moradia familiar · Aroeira",
    title: "Ferreiras’ 24: vida familiar",
    summary: "Landing page para moradia T5 na Aroeira, transformando piscina, garagem e praia/golf em narrativa familiar.",
    time: "Sprint estimado: 3–5 dias úteis",
    source: "Página pública + vídeo local",
    url: "https://alexandreverissimo.pt/ferreiras24/",
    poster: "assets/previews/ferreiras.webp",
    video: "assets/previews/ferreiras.mp4",
    thinking: [
      "Argumentos organizados por benefício percebido: família, exterior privado, estacionamento e localização.",
      "Copy para reduzir comparação por preço e acelerar a visita mental antes da visita física.",
    ],
    tags: ["Landing page T5", "Storytelling imobiliário", "Benefícios visuais", "UX de navegação", "Design responsivo", "SEO on-page", "CTA privado", "Escaneabilidade"],
  },
  sergius: {
    number: "05",
    eyebrow: "Apartamento T2 · Reboleira",
    title: "Sergius V: rotina pronta",
    summary: "Página para T2 de 70 m² na Reboleira, usando área, elevadores e ligação a Lisboa como argumento de rotina.",
    time: "Sprint estimado: 3–5 dias úteis",
    source: "Página pública + vídeo local",
    url: "https://alexandreverissimo.pt/sergiusv/",
    poster: "assets/previews/sergius.webp",
    video: "assets/previews/sergius.mp4",
    thinking: [
      "Acessibilidade urbana apresentada como prova de rotina: metro, comboio, serviços e ligação a Lisboa.",
      "Atributos técnicos — T2, 70 m², 2.º andar e dois elevadores — traduzidos em benefício de uso.",
    ],
    tags: ["LP imobiliária", "Argumento urbano", "UX writing", "SEO local", "Hierarquia visual", "Mobile-first", "Acessibilidade WCAG", "CTA de visita"],
  },
  navalbrands: {
    number: "06",
    eyebrow: "Engenharia web · Alto ticket",
    title: "Naval Brands: performance integrada",
    summary: "Site comercial para comunicar Branding, Engenharia Web e Tráfego como ecossistema integrado de alto valor.",
    time: "Sprint estimado: 7–10 dias úteis",
    source: "Site público + preview local",
    url: "https://navalbrands.com/",
    poster: "assets/previews/navalbrands.webp",
    video: "assets/previews/navalbrands.mp4",
    thinking: [
      "Posicionamento high-ticket com promessa forte e arquitetura para explicar uma oferta composta.",
      "Integração visual entre marca, tecnologia e tráfego com motion, contraste e clareza de CTA.",
    ],
    tags: ["Engenharia web", "Branding", "Performance marketing", "High-ticket", "Design system", "SEO técnico", "Core Web Vitals", "Motion UI"],
  },
  ml: {
    number: "07",
    eyebrow: "Landing page · Brindes premium",
    title: "ML Sistemas: brinde premium",
    summary: "Preview de LP para brindes personalizados premium, com produto em evidência, navegação objetiva e CTA comercial.",
    time: "Sprint estimado: 3–5 dias úteis",
    source: "Preview local disponível",
    url: "",
    poster: "assets/previews/ml.webp",
    video: "assets/previews/ml.mp4",
    thinking: [
      "Oferta acima da dobra: qualidade, personalização e serviços de impressão em leitura imediata.",
      "Produto aplicado, serviços, depoimentos e FAQ para reduzir objeções antes do contato.",
    ],
    tags: ["Landing page", "Hero de impacto", "CTA comercial", "Catálogo de serviços", "FAQ estratégico", "Design responsivo", "UX writing", "Identidade visual"],
  },
};

const SCRAMBLE_START = 1080;
const STEP_DURATION = 58;
const TICK_DURATION = 18;
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>/\\|#$%&*@+=?";

const randomChar = () => {
  const index = Math.floor(Math.random() * SCRAMBLE_CHARS.length);
  return SCRAMBLE_CHARS[index];
};

const setFinalWord = (word) => {
  const target = Array.from(word.dataset.target || word.textContent.trim());

  word.textContent = target.join("");
  word.classList.add("is-active", "is-complete");
};

const runScramble = (word) => {
  const letters = Array.from(word.querySelectorAll(".hero__scramble-char"));
  const target = Array.from(word.dataset.target || "");

  if (!letters.length || !target.length) {
    return;
  }

  if (reduceMotionQuery.matches) {
    setFinalWord(word);
    return;
  }

  letters.forEach((letter) => {
    letter.textContent = randomChar();
  });

  window.setTimeout(() => {
    word.classList.add("is-active");

    target.forEach((finalChar, index) => {
      window.setTimeout(() => {
        let elapsed = 0;

        letters.forEach((letter, letterIndex) => {
          letter.classList.toggle("is-active-char", letterIndex === index);
        });

        const timer = window.setInterval(() => {
          elapsed += TICK_DURATION;

          letters.forEach((letter, letterIndex) => {
            if (letterIndex < index) {
              letter.textContent = target[letterIndex];
              return;
            }

            letter.textContent = randomChar();
          });

          if (elapsed >= STEP_DURATION) {
            window.clearInterval(timer);
            letters[index].textContent = finalChar;
            letters[index].classList.remove("is-active-char");
            letters[index].classList.add("is-locked");

            if (index === target.length - 1) {
              letters.forEach((letter, letterIndex) => {
                letter.textContent = target[letterIndex];
                letter.classList.remove("is-active-char");
                letter.classList.add("is-locked");
              });

              word.classList.add("is-complete");

              window.setTimeout(() => {
                word.textContent = target.join("");
              }, 80);
            }
          }
        }, TICK_DURATION);
      }, index * STEP_DURATION);
    });
  }, SCRAMBLE_START);
};

if (scrambleWord) {
  runScramble(scrambleWord);
}

if (hero) {
  window.setTimeout(() => {
    hero.classList.add("is-intro-complete");
  }, reduceMotionQuery.matches ? 0 : 2420);
}

const setupHeroDepth = () => {
  if (!hero) {
    return;
  }

  const visual = hero.querySelector(".hero__visual");

  if (!visual) {
    return;
  }

  let rafId = 0;
  let targetX = 0;
  let targetY = 0;

  const resetDepth = () => {
    targetX = 0;
    targetY = 0;
    hero.style.setProperty("--hero-tilt-x", "0deg");
    hero.style.setProperty("--hero-tilt-y", "0deg");
    hero.style.setProperty("--hero-shift-x", "0px");
    hero.style.setProperty("--hero-shift-y", "0px");
  };

  const paintDepth = () => {
    rafId = 0;

    hero.style.setProperty("--hero-tilt-x", `${(targetX * 4.2).toFixed(2)}deg`);
    hero.style.setProperty("--hero-tilt-y", `${(-targetY * 3.4).toFixed(2)}deg`);
    hero.style.setProperty("--hero-shift-x", `${(targetX * 12).toFixed(2)}px`);
    hero.style.setProperty("--hero-shift-y", `${(targetY * 9).toFixed(2)}px`);
  };

  const requestDepth = () => {
    if (!rafId) {
      rafId = window.requestAnimationFrame(paintDepth);
    }
  };

  hero.addEventListener("pointermove", (event) => {
    if (reduceMotionQuery.matches || event.pointerType === "touch") {
      return;
    }

    const rect = hero.getBoundingClientRect();

    targetX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    targetY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    requestDepth();
  }, { passive: true });

  hero.addEventListener("pointerleave", resetDepth);
  reduceMotionQuery.addEventListener?.("change", resetDepth);
};

setupHeroDepth();

const setupPortfolioReveal = () => {
  if (!projectReveal) {
    return;
  }

  const revealTarget = projectGridReveal || projectReveal;

  const startProjectReveal = () => {
    projectReveal.classList.add("is-revealing");
  };

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startProjectReveal();
          revealObserver.disconnect();
        }
      });
    }, { rootMargin: "0px 0px -16% 0px", threshold: 0.12 });

    revealObserver.observe(revealTarget);
  } else {
    startProjectReveal();
  }

  window.requestAnimationFrame(() => {
    const isProjectTarget = window.location.hash === "#work" || window.location.hash === "#portfolio";
    const revealTop = revealTarget.getBoundingClientRect().top + window.scrollY;
    const isAlreadyAtProject = window.scrollY >= revealTop - window.innerHeight * 0.72;

    if (isProjectTarget || isAlreadyAtProject) {
      startProjectReveal();
    }
  });
};

setupPortfolioReveal();

const setupPortfolio = () => {
  if (!portfolio || !projectCards.length) {
    return;
  }

  const ambientCanvas = portfolio.querySelector("[data-ambient-canvas]");
  const ambientContext = ambientCanvas?.getContext("2d", { willReadFrequently: true });
  const coarsePointerQuery = window.matchMedia("(hover: none), (pointer: coarse)");
  const projectGrid = portfolio.querySelector(".portfolio__grid");
  const projectDetail = portfolio.querySelector("[data-project-detail]");
  const detailVideo = portfolio.querySelector("[data-project-detail-video]");
  const detailNumber = portfolio.querySelector("[data-project-detail-number]");
  const detailTitle = portfolio.querySelector("[data-project-detail-title]");
  const detailEyebrow = portfolio.querySelector("[data-project-detail-eyebrow]");
  const detailSummary = portfolio.querySelector("[data-project-detail-summary]");
  const detailTime = portfolio.querySelector("[data-project-detail-time]");
  const detailSource = portfolio.querySelector("[data-project-detail-source]");
  const detailThinking = portfolio.querySelector("[data-project-detail-thinking]");
  const detailTags = portfolio.querySelector("[data-project-detail-tags]");
  const detailVisit = portfolio.querySelector("[data-project-detail-visit]");
  const detailClose = portfolio.querySelector("[data-project-detail-close]");
  let activeCard = null;
  let interactionCard = null;
  let desiredVideoCard = null;
  let viewportRafId = 0;
  let ambientVideo = null;
  let ambientFrameId = 0;
  let ambientAnalysisTick = 0;
  let expandedSourceCard = null;

  const getDetailOriginRect = (card) => {
    const media = card?.querySelector(".portfolio-card__media");
    const rect = (media || card)?.getBoundingClientRect();

    if (!rect) return null;

    return {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
  };

  const getDetailInsertAnchor = (card) => {
    const cardRect = card?.getBoundingClientRect();

    if (!cardRect) {
      return card;
    }

    const sameRowCards = projectCards
      .map((projectCard) => ({
        card: projectCard,
        rect: projectCard.getBoundingClientRect(),
      }))
      .filter(({ card: projectCard, rect }) => {
        if (
          projectCard !== card &&
          (projectCard.hidden || projectCard.classList.contains("is-expanded-source"))
        ) {
          return false;
        }

        return rect.width > 0 && rect.height > 0 && Math.abs(rect.top - cardRect.top) <= 6;
      })
      .sort((a, b) => a.rect.left - b.rect.left);

    return sameRowCards[0]?.card || card;
  };

  const getVisibleProjectCardRects = () => {
    const rects = new Map();

    projectCards.forEach((card) => {
      if (
        !card.isConnected ||
        card.hidden ||
        card.classList.contains("is-expanded-source")
      ) {
        return;
      }

      const rect = card.getBoundingClientRect();

      if (rect.width > 0 && rect.height > 0) {
        rects.set(card, rect);
      }
    });

    return rects;
  };

  const animatePortfolioLayout = (mutate) => {
    if (!projectGrid) {
      mutate();
      return;
    }

    if (
      reduceMotionQuery.matches ||
      typeof Element === "undefined" ||
      typeof Element.prototype.animate !== "function"
    ) {
      mutate();
      return;
    }

    const firstRects = getVisibleProjectCardRects();

    mutate();
    projectGrid.getBoundingClientRect();

    const lastRects = getVisibleProjectCardRects();
    const motionOptions = {
      duration: 620,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "none",
    };

    lastRects.forEach((lastRect, card) => {
      const firstRect = firstRects.get(card);

      if (!firstRect) {
        card.animate(
          [
            { opacity: 0, transform: "translate3d(0, 18px, 0) scale(0.985)" },
            { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
          ],
          {
            duration: 420,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "none",
          },
        );
        return;
      }

      const deltaX = firstRect.left - lastRect.left;
      const deltaY = firstRect.top - lastRect.top;

      if (Math.abs(deltaX) < 0.5 && Math.abs(deltaY) < 0.5) {
        return;
      }

      card.animate(
        [
          { transform: `translate3d(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px, 0)` },
          { transform: "translate3d(0, 0, 0)" },
        ],
        motionOptions,
      );
    });
  };

  const guideViewportToProjectDetail = () => {
    if (!projectDetail || projectDetail.hidden) {
      return;
    }

    let layoutTop = 0;
    let offsetNode = projectDetail;

    while (offsetNode) {
      layoutTop += offsetNode.offsetTop;
      offsetNode = offsetNode.offsetParent;
    }

    const topOffset = Math.min(Math.max(window.innerHeight * 0.1, 28), 96);
    const bottomOffset = Math.min(Math.max(window.innerHeight * 0.08, 24), 72);
    const viewportTop = window.scrollY;
    const layoutHeight = projectDetail.scrollHeight || projectDetail.offsetHeight;
    const availableHeight = window.innerHeight - topOffset - bottomOffset;
    const detailTopInViewport = layoutTop - viewportTop;
    const detailBottomInViewport = detailTopInViewport + layoutHeight;
    const detailFitsViewport = layoutHeight <= availableHeight;
    const isComfortablyVisible =
      detailTopInViewport >= topOffset &&
      detailTopInViewport <= window.innerHeight * 0.38 &&
      (!detailFitsViewport || detailBottomInViewport <= window.innerHeight - bottomOffset);

    if (isComfortablyVisible) {
      return;
    }

    const maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const targetTop = Math.min(
      maxScroll,
      Math.max(0, layoutTop - topOffset),
    );

    window.scrollTo({
      top: targetTop,
      behavior: reduceMotionQuery.matches ? "auto" : "smooth",
    });
  };

  const analyzeAmbientFrame = () => {
    if (!ambientContext || !ambientCanvas) {
      return;
    }

    let pixels;

    try {
      pixels = ambientContext.getImageData(
        0,
        0,
        ambientCanvas.width,
        ambientCanvas.height,
      ).data;
    } catch (error) {
      return;
    }

    const width = ambientCanvas.width;
    const height = ambientCanvas.height;
    let colorRed = 0;
    let colorGreen = 0;
    let colorBlue = 0;
    let colorSamples = 0;
    let brightRed = 0;
    let brightGreen = 0;
    let brightBlue = 0;
    let brightWeight = 0;
    let weightedX = 0;
    let weightedY = 0;
    let totalWeight = 0;
    let totalLuminance = 0;
    let totalSaturation = 0;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = (y * width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const max = Math.max(red, green, blue);
        const min = Math.min(red, green, blue);
        const saturation = max - min;
        const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
        const normalizedLight = luminance / 255;
        const weight = 0.025 + normalizedLight ** 2 * 1.35 + (saturation / 255) * 0.3;

        colorRed += red;
        colorGreen += green;
        colorBlue += blue;
        colorSamples += 1;
        brightRed += red * weight;
        brightGreen += green * weight;
        brightBlue += blue * weight;
        brightWeight += weight;
        weightedX += x * weight;
        weightedY += y * weight;
        totalWeight += weight;
        totalLuminance += luminance;
        totalSaturation += saturation;
      }
    }

    if (!colorSamples || !totalWeight || !brightWeight) {
      return;
    }

    const baseRed = colorRed / colorSamples;
    const baseGreen = colorGreen / colorSamples;
    const baseBlue = colorBlue / colorSamples;
    const frameRed = Math.round(baseRed * 0.54 + (brightRed / brightWeight) * 0.46);
    const frameGreen = Math.round(baseGreen * 0.54 + (brightGreen / brightWeight) * 0.46);
    const frameBlue = Math.round(baseBlue * 0.54 + (brightBlue / brightWeight) * 0.46);
    const frameX = Math.min(Math.max((weightedX / totalWeight / width) * 100, 8), 92);
    const frameY = Math.min(Math.max((weightedY / totalWeight / height) * 100, 8), 92);
    const averageLuminance = totalLuminance / colorSamples / 255;
    const averageSaturation = totalSaturation / colorSamples / 255;
    const strength = Math.min(0.82, 0.34 + averageLuminance * 0.4 + averageSaturation * 0.18);

    portfolio.style.setProperty("--ambient-frame", `${frameRed}, ${frameGreen}, ${frameBlue}`);
    portfolio.style.setProperty("--ambient-x", `${frameX.toFixed(1)}%`);
    portfolio.style.setProperty("--ambient-y", `${frameY.toFixed(1)}%`);
    portfolio.style.setProperty("--ambient-strength", strength.toFixed(3));
  };

  const drawAmbientSource = (source, forceAnalysis = false) => {
    if (!ambientContext || !ambientCanvas || !source) {
      return;
    }

    const sourceWidth = source.videoWidth || source.naturalWidth;
    const sourceHeight = source.videoHeight || source.naturalHeight;

    if (!sourceWidth || !sourceHeight) {
      return;
    }

    const canvasWidth = ambientCanvas.width;
    const canvasHeight = ambientCanvas.height;
    const scale = Math.min(canvasWidth / sourceWidth, canvasHeight / sourceHeight);
    const drawWidth = sourceWidth * scale;
    const drawHeight = sourceHeight * scale;
    const drawX = (canvasWidth - drawWidth) / 2;
    const drawY = (canvasHeight - drawHeight) / 2;

    ambientContext.clearRect(0, 0, canvasWidth, canvasHeight);
    ambientContext.drawImage(source, drawX, drawY, drawWidth, drawHeight);
    ambientCanvas.classList.add("is-active");
    ambientAnalysisTick += 1;

    if (forceAnalysis || ambientAnalysisTick % 2 === 0) {
      analyzeAmbientFrame();
    }
  };

  const stopAmbientVideo = () => {
    if (ambientFrameId) {
      window.cancelAnimationFrame(ambientFrameId);
    }

    ambientFrameId = 0;
    ambientVideo = null;
  };

  const drawPosterAmbient = (card) => {
    const poster = card?.querySelector(".portfolio-card__poster");

    if (!poster) {
      return;
    }

    const drawPoster = () => {
      if (activeCard === card && !card.classList.contains("is-playing")) {
        drawAmbientSource(poster, true);
      }
    };

    if (poster.complete && poster.naturalWidth) {
      drawPoster();
    } else {
      poster.addEventListener("load", drawPoster, { once: true });
    }
  };

  const startAmbientVideo = (video) => {
    stopAmbientVideo();
    ambientVideo = video;
    let lastPaint = 0;

    const renderFrame = (timestamp) => {
      if (!ambientVideo || ambientVideo !== video || video.paused || video.ended) {
        return;
      }

      if (timestamp - lastPaint >= 48) {
        drawAmbientSource(video);
        lastPaint = timestamp;
      }

      ambientFrameId = window.requestAnimationFrame(renderFrame);
    };

    drawAmbientSource(video, true);
    ambientFrameId = window.requestAnimationFrame(renderFrame);
  };

  const setAmbient = (card) => {
    if (!card) {
      return;
    }

    projectCards.forEach((projectCard) => {
      projectCard.classList.toggle("is-active", projectCard === card);
    });

    portfolio.style.setProperty(
      "--ambient-primary",
      card.dataset.ambientPrimary || "217, 177, 100",
    );
    portfolio.style.setProperty(
      "--ambient-secondary",
      card.dataset.ambientSecondary || "7, 54, 43",
    );

    const didChange = activeCard !== card;
    activeCard = card;

    if (didChange && !card.classList.contains("is-playing")) {
      stopAmbientVideo();
      drawPosterAmbient(card);
    }
  };

  const loadVideo = (video) => {
    if (!video || video.dataset.loaded === "true") {
      return;
    }

    const source = video.querySelector("source[data-src]");

    if (!source) {
      return;
    }

    source.src = source.dataset.src;
    video.dataset.loaded = "true";
    video.load();
  };

  const fillList = (element, items) => {
    if (!element) {
      return;
    }

    element.replaceChildren(...items.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    }));
  };

  const fillTags = (element, items = []) => {
    if (!element) {
      return;
    }

    element.replaceChildren(...items.map((item) => {
      const tag = document.createElement("span");
      tag.textContent = item;
      return tag;
    }));
  };

  const setVisitButton = (caseData) => {
    if (!detailVisit) {
      return;
    }

    const icon = document.createElement("span");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "↗";
    detailVisit.replaceChildren(
      document.createTextNode(caseData.url ? "Visitar página" : "Página pública indisponível"),
      icon,
    );

    if (caseData.url) {
      detailVisit.href = caseData.url;
      detailVisit.target = "_blank";
      detailVisit.rel = "noopener noreferrer";
      detailVisit.removeAttribute("aria-disabled");
      detailVisit.removeAttribute("tabindex");
      detailVisit.classList.remove("is-disabled");
      return;
    }

    detailVisit.removeAttribute("href");
    detailVisit.removeAttribute("target");
    detailVisit.setAttribute("aria-disabled", "true");
    detailVisit.setAttribute("tabindex", "-1");
    detailVisit.classList.add("is-disabled");
  };

  const playDetailVideo = async (caseData, startTime = 0) => {
    if (!detailVideo) {
      return;
    }

    detailVideo.pause();
    detailVideo.replaceChildren();
    detailVideo.poster = caseData.poster;

    const source = document.createElement("source");
    source.src = caseData.video;
    source.type = "video/mp4";
    detailVideo.append(source);
    detailVideo.load();

    const applyStartTime = () => {
      if (!Number.isFinite(startTime) || startTime <= 0) {
        return;
      }

      try {
        const safeTime = detailVideo.duration
          ? Math.min(startTime, Math.max(detailVideo.duration - 0.12, 0))
          : startTime;
        detailVideo.currentTime = safeTime;
      } catch (error) {
        // Some browsers delay seeking until enough metadata is available.
      }
    };

    if (detailVideo.readyState >= 1) {
      applyStartTime();
    } else {
      await new Promise((resolve) => {
        const done = () => {
          detailVideo.removeEventListener("loadedmetadata", done);
          detailVideo.removeEventListener("error", done);
          resolve();
        };

        detailVideo.addEventListener("loadedmetadata", done);
        detailVideo.addEventListener("error", done);
      });
      applyStartTime();
    }

    if (reduceMotionQuery.matches) {
      return;
    }

    try {
      await detailVideo.play();
    } catch (error) {
      // Autoplay can be blocked by some browsers; controls remain available.
    }
  };

  const closeProjectDetail = () => {
    if (!projectDetail || projectDetail.hidden) {
      return;
    }

    const sourceCard = expandedSourceCard;
    projectDetail.classList.remove("is-open");

    projectCards.forEach((card) => {
      card.classList.remove("is-selected");
      card.setAttribute("aria-expanded", "false");
    });

    detailVideo?.pause();
    window.setTimeout(() => {
      if (!projectDetail.classList.contains("is-open")) {
        animatePortfolioLayout(() => {
          projectDetail.hidden = true;
          projectDetail.removeAttribute("style");
          sourceCard?.classList.remove("is-expanded-source");
          sourceCard?.removeAttribute("aria-hidden");
          expandedSourceCard = null;
        });
      }
    }, reduceMotionQuery.matches ? 0 : 520);
  };

  const openProjectDetail = (card) => {
    const caseData = projectCaseDetails[card?.dataset.projectId];

    if (!projectDetail || !projectGrid || !caseData) {
      return;
    }

    const previewVideo = card.querySelector("[data-project-video]");
    const originRect = getDetailOriginRect(card);
    const detailAnchor = getDetailInsertAnchor(card);
    const startTime = previewVideo?.currentTime || 0;

    projectReveal?.classList.add("is-revealing");
    setAmbient(card);
    pauseOtherPreviews(null);

    if (detailNumber) detailNumber.textContent = caseData.number;
    if (detailTitle) detailTitle.textContent = caseData.title;
    if (detailEyebrow) detailEyebrow.textContent = caseData.eyebrow;
    if (detailSummary) detailSummary.textContent = caseData.summary;
    if (detailTime) detailTime.textContent = caseData.time;
    if (detailSource) detailSource.textContent = caseData.source;
    fillList(detailThinking, caseData.thinking);
    fillTags(detailTags, caseData.tags);
    setVisitButton(caseData);

    projectDetail.classList.remove("is-open");
    projectDetail.classList.add("is-measuring");

    animatePortfolioLayout(() => {
      if (expandedSourceCard && expandedSourceCard !== card) {
        expandedSourceCard.classList.remove("is-expanded-source");
        expandedSourceCard.removeAttribute("aria-hidden");
      }

      expandedSourceCard = card;
      projectGrid.insertBefore(projectDetail, detailAnchor);
      projectDetail.hidden = false;
      card.classList.add("is-expanded-source");
      card.setAttribute("aria-hidden", "true");

      projectCards.forEach((projectCard) => {
        const isCurrent = projectCard === card;
        projectCard.classList.toggle("is-selected", isCurrent);
        projectCard.setAttribute("aria-expanded", String(isCurrent));
      });
    });

    const finalRect = projectDetail.getBoundingClientRect();
    const startScaleX = originRect && finalRect.width ? originRect.width / finalRect.width : 1;
    const startScaleY = originRect && finalRect.height ? originRect.height / finalRect.height : 1;
    const startX = originRect ? originRect.left - finalRect.left : 0;
    const startY = originRect ? originRect.top - finalRect.top : 0;
    const startHeight = originRect?.height || finalRect.height;
    const openHeight = projectDetail.scrollHeight;

    projectDetail.style.setProperty("--detail-start-x", `${startX.toFixed(1)}px`);
    projectDetail.style.setProperty("--detail-start-y", `${startY.toFixed(1)}px`);
    projectDetail.style.setProperty("--detail-start-scale-x", startScaleX.toFixed(4));
    projectDetail.style.setProperty("--detail-start-scale-y", startScaleY.toFixed(4));
    projectDetail.style.setProperty("--detail-start-height", `${startHeight.toFixed(1)}px`);
    projectDetail.style.setProperty("--detail-open-height", `${openHeight.toFixed(1)}px`);

    projectDetail.classList.remove("is-measuring");
    playDetailVideo(caseData, startTime);

    window.requestAnimationFrame(() => {
      projectDetail.classList.add("is-open");
      projectDetail.focus({ preventScroll: true });
      window.requestAnimationFrame(guideViewportToProjectDetail);
    });
  };

  const pausePreview = (card, reset = true) => {
    const video = card?.querySelector("[data-project-video]");

    if (!video) {
      return;
    }

    if (desiredVideoCard === card) {
      desiredVideoCard = null;
    }

    video.pause();
    card.classList.remove("is-playing");

    if (activeCard === card) {
      stopAmbientVideo();
      drawPosterAmbient(card);
    }

    if (reset && video.dataset.loaded === "true") {
      try {
        video.currentTime = 0;
      } catch (error) {
        // Some browsers block seeking until enough metadata is available.
      }
    }
  };

  const pauseOtherPreviews = (exception) => {
    projectCards.forEach((card) => {
      if (card !== exception) {
        pausePreview(card);
      }
    });
  };

  const playPreview = async (card) => {
    if (!card || reduceMotionQuery.matches) {
      return;
    }

    const video = card.querySelector("[data-project-video]");

    if (!video || (card.classList.contains("is-playing") && !video.paused)) {
      return;
    }

    setAmbient(card);
    desiredVideoCard = card;
    pauseOtherPreviews(card);
    loadVideo(video);

    try {
      await video.play();

      if (desiredVideoCard !== card) {
        video.pause();
        return;
      }

      card.classList.add("is-playing");
      startAmbientVideo(video);
    } catch (error) {
      card.classList.remove("is-playing");
      drawPosterAmbient(card);
    }
  };

  const getVisibility = (card) => {
    const rect = card.getBoundingClientRect();
    const visibleHeight = Math.max(
      0,
      Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
    );

    return {
      card,
      distance: Math.abs((rect.top + rect.bottom) / 2 - window.innerHeight / 2),
      ratio: rect.height ? visibleHeight / rect.height : 0,
    };
  };

  const updateFromViewport = () => {
    viewportRafId = 0;

    if (interactionCard && !coarsePointerQuery.matches) {
      setAmbient(interactionCard);
      return;
    }

    const visibleCards = projectCards
      .map(getVisibility)
      .filter(({ ratio }) => ratio > 0.16)
      .sort((a, b) => a.distance - b.distance);

    if (!visibleCards.length) {
      if (coarsePointerQuery.matches) {
        pauseOtherPreviews(null);
      }

      return;
    }

    const closest = visibleCards[0];
    setAmbient(closest.card);

    if (coarsePointerQuery.matches && closest.ratio >= 0.48) {
      playPreview(closest.card);
    } else if (coarsePointerQuery.matches) {
      pauseOtherPreviews(null);
    }
  };

  const requestViewportUpdate = () => {
    if (!viewportRafId) {
      viewportRafId = window.requestAnimationFrame(updateFromViewport);
    }
  };

  projectCards.forEach((card) => {
    const trigger = card.querySelector(".portfolio-card__link");
    const cardTitle = card.querySelector(".portfolio-card__meta strong")?.textContent?.trim() || "projeto";

    card.setAttribute("aria-expanded", "false");
    trigger?.setAttribute("aria-label", `Abrir detalhes do projeto ${cardTitle}`);
    trigger?.addEventListener("click", (event) => {
      event.preventDefault();
      openProjectDetail(card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      openProjectDetail(card);
    });

    card.addEventListener("pointerenter", () => {
      if (!coarsePointerQuery.matches) {
        interactionCard = card;
        playPreview(card);
      }
    });

    card.addEventListener("pointerleave", () => {
      if (!coarsePointerQuery.matches && !card.contains(document.activeElement)) {
        interactionCard = null;
        pausePreview(card);
        requestViewportUpdate();
      }
    });

    card.addEventListener("focusin", () => {
      interactionCard = card;
      playPreview(card);
    });
    card.addEventListener("focusout", () => {
      window.requestAnimationFrame(() => {
        if (!card.contains(document.activeElement)) {
          interactionCard = null;
          pausePreview(card);
          requestViewportUpdate();
        }
      });
    });
  });

  window.addEventListener("scroll", requestViewportUpdate, { passive: true });
  window.addEventListener("resize", requestViewportUpdate, { passive: true });
  window.addEventListener("load", requestViewportUpdate, { once: true });
  coarsePointerQuery.addEventListener?.("change", requestViewportUpdate);
  reduceMotionQuery.addEventListener?.("change", () => {
    pauseOtherPreviews(null);
    requestViewportUpdate();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pauseOtherPreviews(null);
      detailVideo?.pause();
    } else {
      requestViewportUpdate();
    }
  });

  detailClose?.addEventListener("click", closeProjectDetail);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectDetail();
    }
  });

  setAmbient(projectCards[0]);
  requestViewportUpdate();
};

setupPortfolio();

const setupMethod = () => {
  const method = document.querySelector("[data-method]");
  const experience = method?.querySelector("[data-method-experience]");
  const steps = Array.from(method?.querySelectorAll("[data-method-step]") || []);
  const jumpButtons = Array.from(method?.querySelectorAll("[data-method-jump]") || []);
  const status = method?.querySelector("[data-method-status]");
  const visual = method?.querySelector("[data-method-visual]");
  const intro = method?.querySelector(".method__intro");
  const titlePrimary = method?.querySelector("[data-method-title-primary]");
  const titleSecondary = method?.querySelector("[data-method-title-secondary]");

  if (!method || !experience || !steps.length) {
    return;
  }

  const splitIntoWords = (element) => {
    if (!element) {
      return [];
    }

    const words = element.textContent.trim().split(/\s+/);
    element.textContent = "";

    return words.map((word, index) => {
      const mask = document.createElement("span");
      const content = document.createElement("span");

      mask.className = "method__word";
      content.className = "method__word-inner";
      content.textContent = word;
      mask.append(content);
      element.append(mask);

      if (index < words.length - 1) {
        element.append(document.createTextNode(" "));
      }

      return mask;
    });
  };

  const primaryWords = splitIntoWords(titlePrimary);
  const secondaryWords = splitIntoWords(titleSecondary);
  let titleTimingRafId = 0;

  const assignLineDelays = (words, startDelay, lineGap) => {
    const lineTops = [];

    words.forEach((word) => {
      const top = Math.round(word.offsetTop);
      let lineIndex = lineTops.findIndex((lineTop) => Math.abs(lineTop - top) <= 2);

      if (lineIndex === -1) {
        lineTops.push(top);
        lineIndex = lineTops.length - 1;
      }

      word.style.setProperty("--word-delay", `${startDelay + lineIndex * lineGap}ms`);
    });

    return startDelay + Math.max(0, lineTops.length - 1) * lineGap;
  };

  const measureTitleTiming = () => {
    titleTimingRafId = 0;
    const primaryLastDelay = assignLineDelays(primaryWords, 120, 135);
    const secondaryLastDelay = assignLineDelays(
      secondaryWords,
      primaryLastDelay + 260,
      135,
    );

    method.style.setProperty(
      "--method-lead-delay",
      `${secondaryLastDelay + 520}ms`,
    );
  };

  const requestTitleTiming = () => {
    if (!titleTimingRafId) {
      titleTimingRafId = window.requestAnimationFrame(measureTitleTiming);
    }
  };

  const revealMethodIntro = () => {
    method.classList.add("is-intro-visible");
  };

  if (reduceMotionQuery.matches || !("IntersectionObserver" in window) || !intro) {
    revealMethodIntro();
  } else {
    const introObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        revealMethodIntro();
        introObserver.disconnect();
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -16% 0px" });

    introObserver.observe(intro);
  }

  requestTitleTiming();

  if (document.fonts) {
    document.fonts.ready.then(requestTitleTiming).catch(() => {});
  }

  const labels = [
    "01 / Estratégia",
    "02 / Experiência",
    "03 / Identidade",
    "04 / Engenharia",
  ];
  let activeStep = -1;
  let scrollRafId = 0;

  const setActiveStep = (nextStep) => {
    const safeStep = Math.max(0, Math.min(steps.length - 1, nextStep));

    if (safeStep === activeStep) {
      return;
    }

    activeStep = safeStep;
    method.dataset.methodActive = String(safeStep);

    steps.forEach((step, index) => {
      step.classList.toggle("is-active", index === safeStep);
    });

    jumpButtons.forEach((button, index) => {
      if (index === safeStep) {
        button.setAttribute("aria-current", "step");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    if (status) {
      status.textContent = labels[safeStep];
    }
  };

  const updateMethod = () => {
    scrollRafId = 0;

    if (reduceMotionQuery.matches) {
      method.style.setProperty("--method-progress", "1");
      setActiveStep(steps.length - 1);
      return;
    }

    const rect = experience.getBoundingClientRect();
    const scrollDistance = Math.max(1, experience.offsetHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(1, -rect.top / scrollDistance));
    const nextStep = Math.min(steps.length - 1, Math.floor(progress * steps.length));

    method.style.setProperty("--method-progress", progress.toFixed(4));
    setActiveStep(nextStep);
  };

  const requestMethodUpdate = () => {
    if (!scrollRafId) {
      scrollRafId = window.requestAnimationFrame(updateMethod);
    }
  };

  jumpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.methodJump || 0);
      const scrollDistance = Math.max(0, experience.offsetHeight - window.innerHeight);
      const targetProgress = Math.min(0.98, (index + 0.08) / steps.length);
      const experienceTop = window.scrollY + experience.getBoundingClientRect().top;

      window.scrollTo({
        top: experienceTop + scrollDistance * targetProgress,
        behavior: reduceMotionQuery.matches ? "auto" : "smooth",
      });
    });
  });

  visual?.addEventListener("pointermove", (event) => {
    if (reduceMotionQuery.matches) {
      return;
    }

    const rect = visual.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

    visual.style.setProperty("--pointer-x", `${(x * 100).toFixed(2)}%`);
    visual.style.setProperty("--pointer-y", `${(y * 100).toFixed(2)}%`);
    visual.style.setProperty("--grid-x", `${((x - 0.5) * 12).toFixed(2)}px`);
    visual.style.setProperty("--grid-y", `${((y - 0.5) * 12).toFixed(2)}px`);
  });

  visual?.addEventListener("pointerleave", () => {
    visual.style.setProperty("--pointer-x", "50%");
    visual.style.setProperty("--pointer-y", "50%");
    visual.style.setProperty("--grid-x", "0px");
    visual.style.setProperty("--grid-y", "0px");
  });

  window.addEventListener("scroll", requestMethodUpdate, { passive: true });
  window.addEventListener("resize", () => {
    requestMethodUpdate();
    requestTitleTiming();
  }, { passive: true });
  reduceMotionQuery.addEventListener?.("change", requestMethodUpdate);
  requestMethodUpdate();
};

setupMethod();

const setupFooterSeo = () => {
  const toggle = document.querySelector("[data-seo-toggle]");
  const panel = document.getElementById("footer-seo-panel");

  if (!toggle || !panel) {
    return;
  }

  const setOpen = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    panel.hidden = !isOpen;
    panel.classList.toggle("is-open", isOpen);

    if (isOpen) {
      panel.scrollIntoView({
        block: "nearest",
        behavior: reduceMotionQuery.matches ? "auto" : "smooth",
      });
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
};

setupFooterSeo();
