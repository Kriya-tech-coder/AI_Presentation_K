/* =====================================================
   ARTIFICIAL INTELLIGENCE PRESENTATION
   Main JavaScript
===================================================== */


/* =====================================================
   SLIDES
===================================================== */

const slides = [

  {
    title: "Artificial Intelligence",

    accent: "#7fe3c4",

    shape: 0,

    lead:
      "A technology that enables computers and machines " +
      "to perform tasks that normally require human intelligence — " +
      "learning, reasoning, recognizing patterns, and making decisions."
  },

  {
    title: "History of Artificial Intelligence",

    accent: "#7fe3c4",

    shape: 1,

    items: [

      [
        "1950",
        "Alan Turing asked whether machines could think and introduced the idea behind the Turing Test."
      ],

      [
        "1956",
        "The term “Artificial Intelligence” was formally introduced at the Dartmouth workshop."
      ],

      [
        "1997",
        "IBM Deep Blue defeated world chess champion Garry Kasparov."
      ],

      [
        "2010s–Today",
        "Deep learning, generative AI, and large-scale models transformed everyday applications."
      ]

    ]
  },

  {
    title: "What is Artificial Intelligence?",

    accent: "#6fb8ff",

    shape: 2,

    items: [

      [
        "Learning",
        "AI systems can learn patterns from data."
      ],

      [
        "Reasoning",
        "They can analyze information and identify relationships."
      ],

      [
        "Problem-solving",
        "AI can search through possibilities to find useful solutions."
      ],

      [
        "Decision-making",
        "AI can make predictions or recommendations from learned patterns."
      ]

    ]
  },

  {
    title: "Types of Artificial Intelligence",

    accent: "#b79cff",

    shape: 3,

    items: [

      [
        "ANI — Narrow AI",
        "Designed for specific tasks such as recommendations, translation, or image recognition."
      ],

      [
        "AGI — General AI",
        "A theoretical form of AI that could perform a wide range of intellectual tasks like a human."
      ],

      [
        "ASI — Super AI",
        "A hypothetical intelligence that would surpass human capabilities across many areas."
      ]

    ]
  },

  {
    title: "Advantages of AI",

    accent: "#7fe3c4",

    shape: 4,

    items: [

      [
        "Speed & efficiency",
        "Automates repetitive work and processes information quickly."
      ],

      [
        "24/7 assistance",
        "Can operate continuously without fatigue."
      ],

      [
        "Data analysis",
        "Finds patterns in large datasets that may be difficult to spot manually."
      ],

      [
        "Healthcare & science",
        "Can support research, diagnosis, discovery, and complex simulations."
      ],

      [
        "Personalization",
        "Can tailor recommendations, learning, and services to individual needs."
      ],

      [
        "Innovation",
        "Creates new tools and possibilities for engineering, creativity, and research."
      ]

    ]
  },

  {
    title: "Disadvantages of AI",

    accent: "#ffb454",

    shape: 5,

    items: [

      [
        "Job disruption",
        "Automation can change or replace some types of work."
      ],

      [
        "Bias",
        "AI can reproduce unfair patterns present in its training data."
      ],

      [
        "Privacy",
        "AI systems may involve large amounts of personal or sensitive data."
      ],

      [
        "Wrong answers",
        "AI can produce inaccurate information with high confidence."
      ],

      [
        "Cost & energy",
        "Developing and running advanced AI can require significant computing resources."
      ],

      [
        "Misuse",
        "AI can be used irresponsibly for manipulation, fraud, or harmful automation."
      ]

    ]
  },

  {
    title: "About the Project",

    accent: "#b79cff",

    shape: 2,

    items: [

      [
        "Goal",
        "Present Artificial Intelligence in a visual, interactive, and easy-to-understand way."
      ],

      [
        "Built with",
        "HTML + CSS + JavaScript + Three.js."
      ],

      [
        "Interactive features",
        "3D particle animations, morphing visuals, keyboard navigation, swipe support, fullscreen, and progress tracking."
      ],

      [
        "Design idea",
        "A futuristic interface that combines presentation content with live 3D visualization."
      ]

    ]
  },

  {
    title: "Thank You",

    accent: "#7fe3c4",

    shape: 0,

    lead:
      "Thank you for exploring Artificial Intelligence.\n\n" +
      "Keep learning. Keep questioning. Keep building the future."
  }

];


/* =====================================================
   THREE.JS SETUP
===================================================== */

const canvas = document.getElementById("gl");

const renderer =
  new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });

renderer.setPixelRatio(
  Math.min(window.devicePixelRatio, 2)
);


const scene = new THREE.Scene();


const camera =
  new THREE.PerspectiveCamera(
    50,
    1,
    0.1,
    100
  );

camera.position.z = 7;


const group = new THREE.Group();

scene.add(group);


/* =====================================================
   PARTICLES
===================================================== */

const N = 1400;

const rnd =
  Array.from(
    { length: N },
    () => [
      Math.random(),
      Math.random(),
      Math.random()
    ]
  );


const gauss = () =>
  Math.random() +
  Math.random() +
  Math.random() -
  1.5;


/* =====================================================
   SPHERE
===================================================== */

function onSphere(i, r) {

  const y =
    1 -
    2 * (i + 0.5) / N;

  const rad =
    Math.sqrt(
      1 - y * y
    );

  const a =
    i * 2.39996;

  return [

    Math.cos(a) * rad * r,

    y * r,

    Math.sin(a) * rad * r

  ];
}


/* =====================================================
   NEURAL NETWORK NODES
===================================================== */

const netNodes = [];


[5, 7, 7, 3].forEach(
  (n, l) => {

    for (
      let k = 0;
      k < n;
      k++
    ) {

      netNodes.push([
        -2.4 + l * 1.6,

        (k - (n - 1) / 2) * 0.62,

        0
      ]);

    }

  }
);


const layerStart =
  [0, 5, 12, 19];


/* =====================================================
   PARTICLE FORMATIONS
===================================================== */

const formations = [

  /* 0 — SPHERE */

  i =>
    onSphere(i, 2),


  /* 1 — TIMELINE HELIX */

  i => {

    const t =
      i / N;

    const a =
      t * Math.PI * 12;

    return [

      Math.cos(a) *
      (1.4 + 0.3 * rnd[i][0]),

      (t - 0.5) * 5.4,

      Math.sin(a) *
      (1.4 + 0.3 * rnd[i][1])

    ];

  },


  /* 2 — NEURAL NETWORK */

  i => {

    const n =
      netNodes[
        i % netNodes.length
      ];

    return [

      n[0] + gauss() * 0.14,

      n[1] + gauss() * 0.14,

      gauss() * 0.14

    ];

  },


  /* 3 — FIVE CLUSTERS */

  i => {

    const k =
      i % 5;

    const a =
      k / 5 * Math.PI * 2;

    return [

      Math.cos(a) * 2.1 +
      gauss() * 0.5,

      Math.sin(a) * 2.1 +
      gauss() * 0.5,

      gauss() * 0.5

    ];

  },


  /* 4 — GROWTH */

  i =>
    onSphere(
      i,
      1.3 +
      Math.pow(
        rnd[i][0],
        3
      ) * 1.6
    ),


  /* 5 — FRAGMENTING */

  i => {

    const p =
      onSphere(
        i,
        2 +
        (rnd[i][0] - 0.5) * 1.6
      );

    if (p[1] > 0.3) {

      p[1] +=
        1 +
        rnd[i][1];

    }

    return p;

  }

].map(
  f => {

    const a =
      new Float32Array(
        N * 3
      );

    for (
      let i = 0;
      i < N;
      i++
    ) {

      a.set(
        f(i),
        i * 3
      );

    }

    return a;

  }
);


/* =====================================================
   CURRENT PARTICLE POSITION
===================================================== */

const geo =
  new THREE.BufferGeometry();


const cur =
  new Float32Array(
    formations[0]
  );


geo.setAttribute(
  "position",
  new THREE.BufferAttribute(
    cur,
    3
  )
);


/* =====================================================
   PARTICLE MATERIAL
===================================================== */

const ptMat =
  new THREE.PointsMaterial({

    color: 0x7fe3c4,

    size: 0.055,

    transparent: true,

    opacity: 0.9,

    blending:
      THREE.AdditiveBlending,

    depthWrite: false

  });


const particles =
  new THREE.Points(
    geo,
    ptMat
  );


group.add(particles);


/* =====================================================
   NETWORK LINES
===================================================== */

const seg = [];


for (
  let l = 0;
  l < 3;
  l++
) {

  for (
    let a = layerStart[l];
    a < layerStart[l + 1];
    a++
  ) {

    for (
      let b = layerStart[l + 1];

      b <
      (
        layerStart[l + 2] ??
        netNodes.length
      );

      b++
    ) {

      seg.push(
        ...netNodes[a],
        ...netNodes[b]
      );

    }

  }

}


const lineGeo =
  new THREE.BufferGeometry();


lineGeo.setAttribute(
  "position",

  new THREE.Float32BufferAttribute(
    seg,
    3
  )
);


const lineMat =
  new THREE.LineBasicMaterial({

    color: 0x6fb8ff,

    transparent: true,

    opacity: 0

  });


const networkLines =
  new THREE.LineSegments(
    lineGeo,
    lineMat
  );


group.add(networkLines);


/* =====================================================
   STARS
===================================================== */

const starPos =
  new Float32Array(
    800 * 3
  );


for (
  let i = 0;
  i < starPos.length;
  i++
) {

  starPos[i] =
    (Math.random() - 0.5) * 50;

}


const sg =
  new THREE.BufferGeometry();


sg.setAttribute(
  "position",

  new THREE.BufferAttribute(
    starPos,
    3
  )
);


const stars =
  new THREE.Points(

    sg,

    new THREE.PointsMaterial({

      color: 0x8896b8,

      size: 0.03

    })

  );


scene.add(stars);


/* =====================================================
   RESIZE
===================================================== */

function resize() {

  renderer.setSize(
    window.innerWidth,
    window.innerHeight,
    false
  );

  camera.aspect =
    window.innerWidth /
    window.innerHeight;

  const wide =
    window.innerWidth > 800;


  group.position.set(

    wide ? 2.7 : 0,

    wide ? 0 : 2.1,

    0

  );


  group.scale.setScalar(
    wide ? 1 : 0.7
  );


  camera.updateProjectionMatrix();

}


window.addEventListener(
  "resize",
  resize
);

resize();


/* =====================================================
   MOUSE
===================================================== */

let mx = 0;
let my = 0;

window.addEventListener(
  "pointermove",
  event => {

    mx =
      event.clientX /
      window.innerWidth -
      0.5;

    my =
      event.clientY /
      window.innerHeight -
      0.5;

  }
);


/* =====================================================
   ANIMATION VARIABLES
===================================================== */

let spin = 0;

let shape = 0;

let burst = 0;

const accent =
  new THREE.Color(
    0x7fe3c4
  );

const reduce =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


/* =====================================================
   THREE.JS ANIMATION LOOP
===================================================== */

function loop(t) {

  requestAnimationFrame(loop);


  const goal =
    formations[shape];


  const k =
    reduce ? 1 : 0.045;


  for (
    let i = 0;
    i < cur.length;
    i++
  ) {

    cur[i] +=
      (goal[i] - cur[i]) * k;

  }


  burst *= 0.94;


  if (burst > 0.01) {

    for (
      let i = 0;
      i < cur.length;
      i++
    ) {

      cur[i] +=
        (Math.random() - 0.5) *
        burst *
        0.15;

    }

  }


  geo.attributes
    .position
    .needsUpdate = true;


  if (!reduce) {

    spin += 0.0035;

    stars.rotation.y += 0.0003;

  }


  group.rotation.y +=
    (
      spin *
      (shape === 2 ? 0 : 1) +
      mx * 1.6 -
      group.rotation.y
    ) * 0.05;


  group.rotation.x +=
    (
      my * 0.9 -
      group.rotation.x
    ) * 0.05;


  ptMat.color.lerp(
    accent,
    0.06
  );


  lineMat.color.lerp(
    accent,
    0.06
  );


  const targetOpacity =
    shape === 2
      ? 0.35 +
        0.2 *
        Math.sin(t / 400)
      : 0;


  lineMat.opacity +=
    (
      targetOpacity -
      lineMat.opacity
    ) * 0.08;


  renderer.render(
    scene,
    camera
  );

}


requestAnimationFrame(loop);


/* =====================================================
   PRESENTATION UI
===================================================== */

const panel =
  document.getElementById(
    "panel"
  );

const dotsEl =
  document.getElementById(
    "dots"
  );


/* CREATE DOTS */

slides.forEach(
  (_, i) => {

    const d =
      document.createElement(
        "i"
      );

    d.onclick = () =>
      go(i);

    dotsEl.appendChild(d);

  }
);


let index = 0;


/* =====================================================
   CHANGE SLIDE
===================================================== */

function go(i) {

  index =
    (i + slides.length) %
    slides.length;


  const s =
    slides[index];


  let body;


  if (s.lead) {

    body =
      `<p class="lead">
        ${s.lead.replace(
          /\n/g,
          "<br>"
        )}
      </p>`;

  } else {

    body =
      `<ul>

        ${s.items.map(
          (it, n) =>

          `<li style="--i:${n}">
            <b>${it[0]}</b>
            ${it[1]}
          </li>`

        ).join("")}

      </ul>`;

  }


  panel.innerHTML =
    `<h2>${s.title}</h2>
     ${body}`;


  [
    ...dotsEl.children
  ].forEach(
    (d, k) => {

      d.classList.toggle(
        "on",
        k === index
      );

    }
  );


  document.getElementById(
    "count"
  ).textContent =
    `${index + 1} / ${slides.length}`;


  document.getElementById(
    "bar"
  ).style.width =
    (
      (index + 1) /
      slides.length *
      100
    ) + "%";


  accent.set(
    s.accent
  );


  document.documentElement
    .style
    .setProperty(
      "--accent",
      s.accent
    );


  shape =
    s.shape;


  burst = 1.2;

}


/* =====================================================
   NEXT / BACK
===================================================== */

document.getElementById(
  "next"
).onclick =
  () => go(index + 1);


document.getElementById(
  "prev"
).onclick =
  () => go(index - 1);


/* =====================================================
   KEYBOARD
===================================================== */

window.addEventListener(
  "keydown",
  event => {

    if (
      [
        "ArrowRight",
        "ArrowDown",
        " ",
        "PageDown"
      ].includes(event.key)
    ) {

      go(index + 1);

    }


    if (
      [
        "ArrowLeft",
        "ArrowUp",
        "PageUp"
      ].includes(event.key)
    ) {

      go(index - 1);

    }


    /* FULLSCREEN */

    if (
      event.key === "f" ||
      event.key === "F"
    ) {

      if (
        document.fullscreenElement
      ) {

        document.exitFullscreen();

      } else {

        document.documentElement
          .requestFullscreen();

      }

    }

  }
);


/* =====================================================
   MOBILE SWIPE
===================================================== */

let x0 = null;


window.addEventListener(
  "touchstart",
  event => {

    x0 =
      event.touches[0].clientX;

  }
);


window.addEventListener(
  "touchend",
  event => {

    if (x0 !== null) {

      const d =
        event.changedTouches[0]
          .clientX - x0;


      if (
        Math.abs(d) > 50
      ) {

        go(
          index +
          (d < 0 ? 1 : -1)
        );

      }


      x0 = null;

    }

  }
);


/* =====================================================
   INTRO + SCANNER
===================================================== */

let entered = false;

let remaining = 7;

const timerEl =
  document.getElementById(
    "timer"
  );


/* =====================================================
   START PRESENTATION
===================================================== */

function enterPresentation() {

  if (entered) return;

  entered = true;


  clearInterval(
    autoTimer
  );


  const intro =
    document.getElementById(
      "intro"
    );


  const scanner =
    document.getElementById(
      "finalScanner"
    );


  /* HIDE INTRO */

  intro.classList.add(
    "gone"
  );


  /* SHOW SCANNER */

  scanner.classList.add(
    "active"
  );


  /* START SLIDE */

  setTimeout(
    () => {

      go(0);

    },
    1150
  );


  /* HIDE SCANNER */

  setTimeout(
    () => {

      scanner.classList.remove(
        "active"
      );

    },
    1900
  );

}


/* START BUTTON */

document.getElementById(
  "start"
).onclick =
  enterPresentation;


/* =====================================================
   AUTO START
===================================================== */

const autoTimer =
  setInterval(
    () => {

      if (entered) {

        clearInterval(
          autoTimer
        );

        return;

      }


      remaining--;


      if (timerEl) {

        timerEl.textContent =
          remaining;

      }


      if (
        remaining <= 0
      ) {

        clearInterval(
          autoTimer
        );

        enterPresentation();

      }

    },
    1000
  );


/* =====================================================
   INITIAL SLIDE
===================================================== */

go(0);