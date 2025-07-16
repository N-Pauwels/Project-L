const navLinks = [
  {
    name: "About Me",
    link: "#about-me",
  },
  {
    name: "Skills",
    link: "#my-skills",
  },
  {
    name: "My Music",
    link: "#work",
  },
  {
    name: "Social Media",
    link: "#social-media",
  },
];

const techStackIcons = [
  {
    name: "TikTok",
    modelPath: "/models/tiktok_logo.glb",
    scale: 8,
    rotation: [0, 0, 0],
    position:[-5.5,-2.5,0],
    url: "https://www.tiktok.com/@lamoon_music"
  },
  {
    name: "Spotify",
    modelPath: "/models/spotify.glb",
    scale: 2,
    rotation: [0, 0, 0],
    url: "https://open.spotify.com/artist/3IL8sptESmI5Si0OoerfH0"
  },
  {
    name: "Instagram",
    modelPath: "/models/instagram.glb",
    scale: 2,
    rotation: [0, -Math.PI / 2, 0],
    url: "https://www.instagram.com/lamoon_music/"
  },
];

const skillCards = [
  {
    name: 'singer',
    explanation:(<>A voice shaped by emotion and air, bending notes into meaning. A Singer channels the soul’s deepest tides into sound — not just to perform, but to feel out loud. Every breath becomes a canvas, every melody a confession.</>),
    title:'The Singer',
    imgPath:'/images/cards/singer.png',
    className:'bg-purple-500',
    color: '#6d45ce'
  },
  {
    name: 'writer',
    explanation:(<>Where silence finds structure, the Writer weaves truth and imagination into language<br/>Each word is a spell, every lyric a blade or a balm. The pen is not a tool, but a tuning fork for the heart’s secret frequencies.</>),
    title:'The Writer',
    imgPath:'/images/cards/writer.png',
    className:'bg-red-500',
    color: '#fd5c79'
  },
  {
    name: 'producer',
    explanation:(<>The unseen architect.<br/>A Producer is both sculptor and alchemist, transforming raw sound into atmosphere. Layers of rhythm, silence, and tone are arranged like constellations — guiding the listener through unseen worlds.</>),
    title:'The Producer',
    imgPath:'/images/cards/producer.png',
    className:'bg-green-500',
    color: '#36dc49'
  },
  {
    name: 'pianist',
    explanation:(<>Ten fingers, eighty-eight keys — yet infinite possibilities.<br/>A Pianist speaks without speaking, shaping harmony and tension into living sculpture. Their touch evokes landscapes: fragile, fierce, and filled with ghosts that dance between notes.</>),
    title:'The Pianist',
    imgPath:'/images/cards/pianist.png',
    className:'bg-blue-500',
    color: '#62e0ff'
  },
  {
    name: 'composer',
    explanation:(<>From chaos, form.<br/>A Composer listens to what isn’t yet real — drawing maps of feeling, time, and motion. They design sound like an architect drafts space: intentionally, spiritually, one heartbeat at a time.</>),
    title:'The Composer',
    imgPath:'/images/cards/composer.png',
    className:'bg-yellow-500',
    color: '#cece45'
  },
  {
    name: 'musician',
    explanation:(<>The sum of all the fragments.<br/>Being a Musician is a channel for movement, for memory, for mood. They are the conduit where instrument and instinct blur — creating not just music, but moment.</>),
    title:'The Musician',
    imgPath:'/images/cards/musician.png',
    className:'bg-orange-500',
    color: '#d2701b'
  }
]

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  skillCards,
  socialImgs,
  techStackIcons,
  navLinks,
};