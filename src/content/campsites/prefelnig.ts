import type { CampsiteConfig } from "../types";

/**
 * Prefelnig Hof — Alt-Ossiach am Ossiacher See (Ostufer), Kärnten.
 * Familie Huber: aktiver Bauernhof mit 10 Wiesenstellplätzen, 4 Ferienwohnungen
 * und 2 Vollholz-Glamping-Lodges am eigenen Fischteich.
 * Alle Texte/Fakten belegt aus prefelnig.at (Stand-Scrape 2026-06, lokal in
 * raw/pages/ + verify-raw/). Quell-Belege siehe REPORT.md / verify.json.
 *
 * EHRLICH:
 *  - NICHT am See gebaut: ~1,3 km zur Ossiacher See Ostbucht → `see` weggelassen,
 *    Seenähe überall mit Distanz benannt.
 *  - Glamping-Preise stehen auf prefelnig.at NICHT (eigene, nicht gescrapte Domain)
 *    → Glamping ohne `priceFrom`, "Preise auf Anfrage". Nichts erfunden.
 *  - Alle 24 Bilder = eigene Prefelnig-Hof-Fotos (own-domain), je 1× genutzt,
 *    vision-geprüft, motivtreu, keine Dubletten/Collagen.
 *  - `coords` aus der realen Adresse geokodiert (nicht auf der Quelle) — Pin bitte
 *    bestätigen.
 */
const IMG = "/campsites/prefelnig";

export const prefelnig: CampsiteConfig = {
  name: "Prefelnig Hof",
  shortName: "Prefelnig Hof",
  slug: "prefelnig",
  ort: "Ossiach",
  region: "Kärnten",
  brandKind: "Urlaub am Bauernhof",
  // Kein See am Platz → `see` bewusst weggelassen (Ossiacher See Ostbucht ~1,3 km).
  regionLong: "Alt-Ossiach · Ossiacher See · Kärnten · Österreich",

  claim: "Echter Bauernhof-Urlaub nah am Ossiacher See",
  claimEmphasis: "Bauernhof-Urlaub",
  intro:
    "Ein typischer Kärntner Bauernhof der Familie Huber in Alt-Ossiach: 10 Wiesenstellplätze, 4 Ferienwohnungen und 2 Vollholz-Glamping-Lodges am eigenen Fischteich — mit rund 70 Rindern und Tieren zum Anfassen. Die Ossiacher See Ostbucht liegt nur etwa 1,3 km, der Slow Trail Bleistätter Moor direkt vor der Tür.",

  logo: { src: `${IMG}/logo-prefelnig.png`, alt: "Prefelnig Hof Logo" },

  statement: {
    text: "Bei uns ist Urlaub noch echt — ein lebendiger Bauernhof zum Mitleben, mit Tieren zum Anfassen und Kärntner Natur ringsum.",
    emphasis: "Tieren zum Anfassen",
  },

  pillars: [
    { title: "Echter Bauernhof", text: "Ein aktiver Landwirtschaftsbetrieb mit rund 70 Rindern, zwei Pferden, einer Zwergziege sowie Hühnern und Katzen — Hofalltag zum Miterleben.", image: { src: `${IMG}/stall-kuehe.webp`, alt: "Kind streichelt eine Kuh im Stall des Prefelnig Hofs" } },
    { title: "Natur am Ossiacher See", text: "Mitten im Grünen am Ostufer: rund 1,3 km zur Ossiacher See Ostbucht und nur 10 Gehminuten zum Landschaftsschutzgebiet Bleistätter Moor.", image: { src: `${IMG}/lage-ossiacher-see.webp`, alt: "Luftbild des Prefelnig Hofs mit Fischteich und dem Ossiacher See in der Ferne" } },
    { title: "Glamping am Teich", text: "Zwei in Vollholz gefertigte Tiny Houses am eigenen Fischteich — Glamping mit Komfort für bis zu 4 Personen, seit Sommer 2018.", image: { src: `${IMG}/glamping-lodge.webp`, alt: "Vollholz-Glamping-Lodge mit Terrasse am Prefelnig Hof" } },
  ],

  usps: [
    "Strandbad Ossiach gratis für Gäste",
    "Erlebnis CARD zu jeder Buchung inklusive",
    "Brötchenservice & gratis WLAN",
    "Moderne, barrierefreie Sanitäranlagen",
    "10 Wiesenstellplätze (29–118 m²)",
    "4 Ferienwohnungen für bis zu 5 Personen",
    "2 Glamping-Lodges am Fischteich",
    "Slow Trail Bleistätter Moor direkt am Hof",
  ],

  trust: {
    heading: "Worauf du dich verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Familie Huber führt den Prefelnig Hof als echten Bauernhof: ehrliche Direktpreise, moderne und barrierefreie Sanitäranlagen, Strandbad und Erlebnis CARD gratis zu jeder Buchung — und 2023 unter den Top-10 der beliebtesten Bauernhof-Campingplätze auf camping.info gelistet.",
  },

  awards: [
    { label: "BeyondCamping · Top Camping Plätze 2025", image: { src: `${IMG}/award-beyondcamping-2025.png`, alt: "BeyondCamping Siegel Top Camping Plätze 2025" } },
  ],

  // Buchbar in der warmen Jahreszeit: 1. Mai bis 30. September (Camping- & FeWo-Seiten).
  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/luftbild-hof.webp`, alt: "Luftaufnahme des Prefelnig Hofs mit Campingwiese, Bauernhof und Bergen im Abendlicht" },
  },

  camping: {
    heading: "Camping am Bauernhof",
    intro:
      "Zehn großzügige Wiesenstellplätze von 29 bis 118 m², direkt am aktiven Bauernhof — mit Anschluss für Strom, Wasser und Sat-TV, modernem Sanitärbereich und allem Komfort für entspanntes Campen in Kärnten.",
    features: [
      { title: "10 Wiesenstellplätze", text: "Parzellen von 29 bis 118 m² auf gepflegter Wiese, jeweils mit Anschluss für Strom, Wasser und Sat-TV — viel Platz mitten in der Natur.", image: { src: `${IMG}/camping-stellplaetze.webp`, alt: "Kinder spielen vor einem Wohnwagen auf der Campingwiese am Prefelnig Hof" } },
      { title: "Moderner Sanitärbereich", text: "Großzügiger, moderner Sanitärbereich mit separaten Duschen und WCs, Wickeltisch und behindertengerechten Toiletten — familienfreundlich und barrierefrei.", image: { src: `${IMG}/sanitaer-modern.webp`, alt: "Heller, moderner Sanitärraum mit Wickeltisch am Prefelnig Hof" } },
      { title: "Komfort am Platz", text: "Eine Waschmaschine gegen Gebühr, Brötchenservice am Morgen und kostenloses WLAN sorgen für Komfort während des ganzen Aufenthalts.", image: { src: `${IMG}/camping-service.webp`, alt: "Camping-Küche mit Waschmaschine und Spülbereich am Prefelnig Hof" } },
    ],
  },

  mobilheime: {
    heading: "Ferienwohnungen & Glamping",
    intro:
      "Vier komfortable Ferienwohnungen für bis zu fünf Personen und zwei Vollholz-Glamping-Lodges am Fischteich — alle mit Geschirrspüler, Dusche, WC und Sat-TV, dazu Balkon oder Garten.",
    items: [
      { name: "Ferienwohnung Seeblick", kind: "Ferienwohnung", text: "Helle Wohnung mit Geschirrspüler, Dusche, WC, Sat-TV und Balkon — bis zu 5 Personen.", image: { src: `${IMG}/fewo-seeblick.webp`, alt: "Wohnbereich der Ferienwohnung Seeblick mit blauem Sofa" }, priceFrom: 105, features: ["85 m²", "bis 5 Personen", "Balkon"] },
      { name: "Ferienwohnung Feldkirchen", kind: "Ferienwohnung", text: "Geräumige Wohnung mit voll ausgestatteter Küche, Dusche, WC und Sat-TV — bis zu 5 Personen.", image: { src: `${IMG}/fewo-feldkirchen.webp`, alt: "Küche der Ferienwohnung Feldkirchen am Prefelnig Hof" }, priceFrom: 105, features: ["85 m²", "bis 5 Personen", "Balkon oder Garten"] },
      { name: "Ferienwohnung Ossiach", kind: "Ferienwohnung", text: "Gemütliche Wohnung im Bauernstube-Stil mit kompletter Ausstattung — bis zu 5 Personen.", image: { src: `${IMG}/fewo-ossiach.webp`, alt: "Bauernstube-Küche der Ferienwohnung Ossiach am Prefelnig Hof" }, priceFrom: 105, features: ["65 m²", "bis 5 Personen", "voll ausgestattet"] },
      { name: "Ferienwohnung Ossiacher Tauern", kind: "Ferienwohnung", text: "Freundliche Wohnung mit Geschirrspüler, Dusche, WC, Sat-TV und Balkon oder Garten — bis zu 5 Personen.", image: { src: `${IMG}/fewo-ossiacher-tauern.webp`, alt: "Essbereich der Ferienwohnung Ossiacher Tauern mit roten Stühlen" }, priceFrom: 105, features: ["75 m²", "bis 5 Personen", "Balkon oder Garten"] },
      { name: "Glamping-Lodge", kind: "Tiny House", text: "In wertvoller Zimmermannsarbeit aus Vollholz gefertigtes Tiny House mit kleiner Terrasse und Blick auf den Fischteich — seit Sommer 2018.", image: { src: `${IMG}/glamping-innen.webp`, alt: "Wohnraum aus Vollholz in einer Glamping-Lodge am Prefelnig Hof" }, features: ["33 m²", "bis 4 Personen", "Preise auf Anfrage"] },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Tiere zum Anfassen, weite Wiesen zum Toben und gemeinsame Grillabende — am Bauernhof wird der Familienurlaub für Kinder zum Erlebnis.",
    features: [
      { title: "Tiere zum Anfassen", text: "Kälber, Kühe, Pferde, eine Zwergziege, Hühner und Katzen — am aktiven Bauernhof kommen Kinder den Tieren ganz nah.", image: { src: `${IMG}/kinder-kalb.webp`, alt: "Kinder mit einem Kalb auf der Wiese am Prefelnig Hof" } },
      { title: "Pferde zum Streicheln", text: "Unsere zwei Pferde freuen sich über Streicheleinheiten — reine Streicheltiere, keine Reitpferde.", image: { src: `${IMG}/kinder-pferd.webp`, alt: "Kinder streicheln ein Pferd am Prefelnig Hof" } },
      { title: "Gemeinsame Grillabende", text: "Gemeinsame Grillabende machen Groß und Klein Freude — gemütlich zusammensitzen unter freiem Himmel.", image: { src: `${IMG}/grillabend.webp`, alt: "Familie beim Grillabend am Prefelnig Hof" } },
    ],
  },

  aktivitaeten: {
    heading: "Natur rund um den Hof",
    intro:
      "Vom eigenen Fischteich über den Slow Trail am Bleistätter Moor bis zur idyllischen Lage am Ossiacher See — Natur und Erholung beginnen direkt vor der Haustür.",
    items: [
      { title: "Forellenteich", text: "Direkt an den Hof grenzt der Prefelnigteich mit Forellenstation — wer möchte, fängt sich seine Forelle selbst.", image: { src: `${IMG}/forellenteich.webp`, alt: "Forellenteich mit Forellenstation am Prefelnig Hof" } },
      { title: "Slow Trail Bleistätter Moor", text: "Der Hof liegt direkt am Slow Trail Bleistätter Moor, der nach rund 7 Kilometern entlang der Ossiacher See Ostbucht wieder zurückführt.", image: { src: `${IMG}/bleistaetter-moor.webp`, alt: "Blühende Sommerwiese rund um den Prefelnig Hof" } },
      { title: "Idylle am Fischteich", text: "Zwei Glamping-Lodges liegen am ruhigen Fischteich des Hofs — ein stiller Platz zum Durchatmen mitten in der Natur.", image: { src: `${IMG}/glamping-lodges-teich.webp`, alt: "Zwei Glamping-Lodges am Fischteich des Prefelnig Hofs" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Alt-Ossiach 2, 9570 Ossiach — am Ostufer des Ossiacher Sees. Der Ossiacher See Radweg (R2 und R2A) führt direkt am Hof vorbei." },
      { title: "Lage & Umgebung", text: "Rund 1,3 km zur Ossiacher See Ostbucht, 10 Gehminuten zum Bleistätter Moor; die Talstation der Kanzelbahn (Gerlitzen) liegt etwa 13 km, das Skigebiet Simonhöhe rund 25 km entfernt." },
      { title: "Saison", text: "Buchbar in der warmen Jahreszeit von 1. Mai bis 30. September; im Winter sind die Ferienwohnungen für Skiurlaub an Gerlitzen und Simonhöhe buchbar." },
    ],
  },

  galerie: {
    heading: "Ein paar Eindrücke vom Hof",
    headingEmphasis: "Eindrücke",
    intro:
      "Lange Sommerabende am Lagerfeuer, gemütliche Glamping-Lodges, blühende Gärten und handbemalte Hofschilder — ein paar Eindrücke vom Prefelnig Hof.",
    tag: "Frühling bis Herbst",
    images: [
      { src: `${IMG}/lagerfeuer-abend.webp`, alt: "Lagerfeuer-Runde am Abend am Prefelnig Hof" },
      { src: `${IMG}/glamping-schlafen.webp`, alt: "Schlafbereich einer Glamping-Lodge mit Sat-TV am Prefelnig Hof" },
      { src: `${IMG}/garten-detail.webp`, alt: "Blühender Garten mit Topfpflanzen und Bergblick am Prefelnig Hof" },
      { src: `${IMG}/willkommen-schilder.webp`, alt: "Handbemalte Hofschilder „Alt-Ossiach 2“ am Prefelnig Hof" },
    ],
  },

  booking: {
    heading: "Preise & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personenzahl — wir melden uns mit deiner persönlichen Verfügbarkeit. Den besten Preis gibt es immer bei der Direktanfrage.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise · Camping-Stellplatz Nebensaison ab € 50,-/Nacht für 2 Personen (Hauptsaison € 60–70), jede weitere Person ab € 7,-. Ferienwohnungen Nebensaison ab € 105,- (Zwischensaison € 115, Hauptsaison € 135). Zzgl. Ortstaxe € 2,70/Tag/Erwachsenem; FeWo zzgl. Endreinigung € 120,- und Energie-/Abfallpauschale € 12,-/Nacht. Glamping-Preise auf Anfrage.",
    highlight: {
      title: "Strandbad & Erlebnis CARD gratis",
      text: "Für Haus- und Campinggäste ist das Strandbad Ossiach während des Aufenthalts kostenlos — die Erlebnis CARD der Region gibt es zu jeder Buchung gratis dazu.",
    },
    categories: [
      // Reale Preise lt. prefelnig.at "Preise Saison 2026" (verify-raw): Stellplatz Nebensaison
      // ab € 50,- (2 Pers.) + € 7,-/weitere Person; Ferienwohnung Nebensaison ab € 105,-.
      { id: "stellplatz", label: "Camping-Stellplatz", perNight: 50, perExtraGuest: 7 },
      { id: "ferienwohnung", label: "Ferienwohnung", perNight: 105 },
    ],
  },

  kontakt: {
    tel: "+43 4243 8226",
    telHref: "tel:+4342438226",
    mail: "hof@prefelnig.at",
    adresse: "Alt-Ossiach 2 · 9570 Ossiach · Kärnten",
    // Aus der realen Adresse geokodiert (steht nicht auf der Quelle) — Pin bitte bestätigen.
    coords: { lat: 46.688924, lng: 14.032985 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Wiesenstellplätze", href: "#camping" },
        { label: "Sanitärbereich", href: "#camping" },
        { label: "Komfort am Platz", href: "#camping" },
      ],
    },
    {
      label: "Wohnen",
      href: "#mobilheime",
      children: [
        { label: "Ferienwohnungen", href: "#mobilheime" },
        { label: "Glamping-Lodges", href: "#mobilheime" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Tiere zum Anfassen", href: "#kinder" },
        { label: "Pferde zum Streicheln", href: "#kinder" },
        { label: "Grillabende", href: "#kinder" },
      ],
    },
    {
      label: "Natur & Lage",
      href: "#anreise",
      children: [
        { label: "Forellenteich", href: "#aktivitaeten" },
        { label: "Slow Trail", href: "#aktivitaeten" },
        { label: "Anreise & Umgebung", href: "#anreise" },
      ],
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anfrage", href: "#booking" },
      ],
    },
  ],
};

export default prefelnig;
