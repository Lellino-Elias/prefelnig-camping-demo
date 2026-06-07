import type { CampsiteConfig } from "../types";

/**
 * Prefelnig Hof — Alt-Ossiach am Ossiacher See, Kärnten.
 * Alle Texte/Fakten belegt aus prefelnig.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Prefelnig-Hof-Fotos in /public/campsites/prefelnig/.
 * EHRLICH: der Hof ist ein typischer Kärntner BAUERNHOF und liegt ~1,3 km von der
 * Ossiacher See Ostbucht entfernt — NICHT direkt am See. Daher KEIN `see`-Feld,
 * keine "direkt am See"-Rahmung; die Seenähe wird in der Kopie offen mit Distanz
 * benannt. Glamping-Preise stehen auf der gescrapten Quelle nicht (eigene Domain,
 * nicht gescrapt) → Glamping ohne priceFrom, "auf Anfrage". Reiten/Ski sind
 * Drittangebote (Fremdfotos) → nicht als eigene Bilder verwendet.
 */
const IMG = "/campsites/prefelnig";

export const prefelnig: CampsiteConfig = {
  name: "Prefelnig Hof",
  shortName: "Prefelnig Hof",
  slug: "prefelnig",
  ort: "Alt-Ossiach",
  region: "Kärnten",
  brandKind: "Urlaub & Camping am Bauernhof",
  // KEIN see: der Hof liegt ~1,3 km von der Ossiacher See Ostbucht entfernt, nicht am Ufer.
  regionLong: "Ossiacher See · Kärnten · Österreich",

  claim: "Dein Bauernhof-Urlaub, nur 1,3 km zum Ossiacher See",
  claimEmphasis: "Bauernhof-Urlaub",
  intro:
    "Ferienwohnungen, Glamping Lodges und Kleincamping auf einem typischen Kärntner Bauernhof der Familie Huber — eingebettet in die Natur, nur rund 1,3 km von der Ossiacher See Ostbucht entfernt.",

  logo: { src: `${IMG}/logo-prefelnig.png`, alt: "Prefelnig Hof Logo" },

  statement: {
    text: "Bäuerliches Lebensgefühl wird hier nicht nur beobachtet, sondern hautnah miterlebt — echtes Hofleben für die ganze Familie.",
    emphasis: "hautnah miterlebt",
  },

  pillars: [
    {
      title: "Echtes Bauernhofleben",
      text: "Rund 70 Rinder, zwei Pferde, eine Zwergziege, Hühner und Katzen — Tiere füttern, streicheln und den Hofalltag hautnah miterleben.",
      image: { src: `${IMG}/stall-kuehe.webp`, alt: "Kind streichelt eine Kuh im Stall des Prefelnig Hofs" },
    },
    {
      title: "Natur am Ossiacher See",
      text: "Das Landschaftsschutzgebiet Bleistätter Moor mit Wanderweg entlang der Ossiacher See Ostbucht ist nur 10 Gehminuten entfernt — der Seeradweg führt direkt am Hof vorbei.",
      image: { src: `${IMG}/lage-ossiacher-see.webp`, alt: "Luftaufnahme des Prefelnig Hofs mit Forellenteich und Blick zum Ossiacher See" },
    },
    {
      title: "Camping & Glamping",
      text: "Direkt am Bauernhof campen oder in einer Glamping Lodge aus Vollholz mit Blick auf den Forellenteich übernachten — einzigartig am Ossiacher See.",
      image: { src: `${IMG}/glamping-lodge.webp`, alt: "Glamping Lodge aus Vollholz mit Terrasse am Prefelnig Hof" },
    },
  ],

  usps: [
    "Familiär geführt von Familie Huber",
    "Nur ~1,3 km zum Ossiacher See",
    "Echtes Hofleben mit vielen Tieren",
    "Gratis Eintritt ins Strandbad Ossiach",
    "Kostenloses WLAN",
    "Top-10 Bauernhof-Campingplatz (camping.info 2023)",
  ],

  trust: {
    heading: "Worauf Sie sich am Prefelnig Hof verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Huber, ehrliche Hofatmosphäre, ein gepflegter moderner Sanitärbereich und faire Preise — dazu gratis Zutritt ins Strandbad Ossiach und die kostenlose Erlebnis CARD zu jeder Buchung.",
  },

  // Belegte Auszeichnungen: Top-10-Listung camping.info 2023 (eigener News-Beitrag) +
  // auf der Website gezeigtes BeyondCamping-Siegel 2025.
  awards: [
    { label: "Top-10 Bauernhof-Campingplätze 2023 · camping.info" },
    {
      label: "Top Campingplätze 2025 · BeyondCamping",
      image: { src: `${IMG}/award-beyondcamping-2025.png`, alt: "BeyondCamping — Top Campingplätze 2025 Auszeichnung" },
    },
  ],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/luftbild-hof.webp`, alt: "Luftaufnahme des Prefelnig Hofs mit Campingplatz und Bauernhof in Alt-Ossiach" },
    sunset: { src: `${IMG}/camping-abendsonne.webp`, alt: "Camping am Prefelnig Hof in der Abendsonne mit Blick auf die Berge" },
  },

  camping: {
    heading: "Camping am Bauernhof",
    intro:
      "10 Wiesenstellplätze direkt auf dem Hof — einzigartig am Ossiacher See. Die Parzellen sind zwischen 29 m² und 118 m² groß, mit Anschlüssen für Strom, Wasser und Sat-TV.",
    features: [
      {
        title: "10 Wiesenstellplätze",
        text: "Direkt am Bauernhof, zwischen 29 m² und 118 m² groß — genug Platz für Caravan, Wohnwagen oder Zelt, mit Strom-, Wasser- und Sat-TV-Anschluss.",
        image: { src: `${IMG}/camping-luftbild.webp`, alt: "Luftaufnahme der Camping-Stellplätze am Prefelnig Hof" },
      },
      {
        title: "Familienzeit am Stellplatz",
        text: "Mitten in der Natur Urlaub machen: ebene Wiesenplätze für entspannte Campingtage mit der ganzen Familie.",
        image: { src: `${IMG}/camping-familie.webp`, alt: "Kinder spielen auf der Wiese vor dem Wohnwagen am Prefelnig Hof" },
      },
      {
        title: "Moderner Sanitärbereich",
        text: "Großzügiger, moderner Sanitärbereich mit getrennten Duschen und WCs für Frauen und Männer — stets sauber gehalten.",
        image: { src: `${IMG}/sanitaer-modern.webp`, alt: "Moderner Sanitärbereich am Campingplatz Prefelnig Hof" },
      },
      {
        title: "Barrierefrei & familienfreundlich",
        text: "Behindertengerechte Toiletten, Wickeltisch und Waschmaschine (gegen Gebühr); dazu Spülplatz, Gemeinschaftskühlschrank und Brötchenservice am Morgen.",
        image: { src: `${IMG}/sanitaer-barrierefrei.webp`, alt: "Barrierefreier Sanitärbereich mit Dusche und WC am Prefelnig Hof" },
      },
    ],
  },

  mobilheime: {
    heading: "Ferienwohnungen & Glamping",
    intro:
      "4 Ferienwohnungen für bis zu 6 Personen — alle mit Geschirrspüler, Bettwäsche, Handtüchern, Dusche/WC, Sat-TV sowie Balkon oder Garten. Dazu zwei Glamping Lodges aus Vollholz am Forellenteich.",
    items: [
      {
        name: "Ferienwohnung Seeblick",
        kind: "85 m² · Haupthaus (Dachgeschoss)",
        text: "Helle Dachgeschoss-Wohnung mit 2 Schlafzimmern und Balkon — mit Blick über den Garten und das Bleistätter Moor bis zum Ossiacher See.",
        image: { src: `${IMG}/fewo-seeblick.webp`, alt: "Wohn- und Essbereich der Ferienwohnung Seeblick am Prefelnig Hof" },
        priceFrom: 105,
        features: ["bis 5 Personen", "2 Schlafzimmer", "Balkon mit Seeblick"],
      },
      {
        name: "Ferienwohnung Feldkirchen",
        kind: "85 m² · Haupthaus (Dachgeschoss)",
        text: "Dachgeschoss-Wohnung mit 2 Schlafzimmern und privatem Balkon mit Aussicht über das Bleistätter Moor Richtung Feldkirchen.",
        image: { src: `${IMG}/fewo-feldkirchen.webp`, alt: "Küche und Essbereich der Ferienwohnung Feldkirchen am Prefelnig Hof" },
        priceFrom: 105,
        features: ["bis 5 Personen", "2 Schlafzimmer", "Balkon (Richtung Osten)"],
      },
      {
        name: "Ferienwohnung Ossiach",
        kind: "65 m² · Haupthaus (1. OG)",
        text: "Gemütliche Wohnung im ersten Obergeschoss mit 2 Schlafzimmern und Balkon — mit Blick über den Garten und das Bleistätter Moor bis zur Gerlitzen.",
        image: { src: `${IMG}/fewo-ossiach.webp`, alt: "Gemütliche Wohnküche der Ferienwohnung Ossiach am Prefelnig Hof" },
        priceFrom: 105,
        features: ["bis 5 Personen", "2 Schlafzimmer", "Balkon im Haupthaus"],
      },
      {
        name: "Ferienwohnung Ossiacher Tauern",
        kind: "75 m² · Nebengebäude",
        text: "Großzügig angelegte Wohnung im Nebengebäude mit 2 Schlafzimmern sowie Ess- und Wohnraum mit moderner Kochzeile.",
        image: { src: `${IMG}/fewo-ossiacher-tauern.webp`, alt: "Wohnküche der Ferienwohnung Ossiacher Tauern am Prefelnig Hof" },
        priceFrom: 105,
        features: ["bis 5 Personen", "2 Schlafzimmer", "modern ausgestattet"],
      },
      {
        name: "Glamping Lodges am Forellenteich",
        kind: "Tiny House aus Vollholz · ca. 33 m²",
        // Bewusst OHNE priceFrom: Glamping-Preise stehen nicht auf der gescrapten Quelle (eigene Domain).
        text: "Zwei in Zimmermannsarbeit aus Vollholz gefertigte Tiny Houses für bis zu 4 Personen, mit kleiner Terrasse und Blick auf den Forellenteich. Preise auf Anfrage.",
        image: { src: `${IMG}/glamping-innen.webp`, alt: "Wohnbereich einer Glamping Lodge aus Vollholz am Prefelnig Hof" },
        features: ["bis 4 Personen", "ca. 33 m²", "Blick auf den Forellenteich"],
      },
    ],
  },

  kinder: {
    heading: "Ein Urlaubstraum für Kinder",
    intro:
      "Kühe füttern, im Stall mithelfen, Kleintiere versorgen und die Katze streicheln — am Prefelnig Hof erleben Kinder den Bauernhofalltag hautnah.",
    features: [
      {
        title: "Tiere hautnah",
        text: "Rund 70 Rinder, Kälber, Hühner und Katzen warten darauf, gefüttert und gestreichelt zu werden — mitten im echten Hofalltag.",
        image: { src: `${IMG}/kinder-kalb.webp`, alt: "Kinder mit einem Kalb auf der Wiese am Prefelnig Hof" },
      },
      {
        title: "Pferde & Zwergziege",
        text: "Unsere zwei Pferde, die Zwergziege und viele weitere Tiere freuen sich über Besuch — hier dürfen Kinder Kinder sein.",
        image: { src: `${IMG}/kinder-pferd.webp`, alt: "Kinder streicheln ein Pferd am Prefelnig Hof" },
      },
      {
        title: "Grillabende",
        text: "Gemeinsame Grillabende am Hof machen Groß und Klein Freude — Feuerstellen und Grillplätze stehen bereit.",
        image: { src: `${IMG}/grillabend.webp`, alt: "Familie beim Grillabend am Lagerfeuer vor dem Prefelnig Hof" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Erleben rund um den Hof",
    intro:
      "Vom eigenen Forellenteich bis zum Slow Trail durchs Bleistätter Moor — am Ostufer des Ossiacher Sees beginnt das Naturerlebnis direkt vor der Haustür.",
    items: [
      {
        title: "Forellen selbst angeln",
        text: "Direkt an den Hof grenzt der Prefelnigteich mit der beliebten Forellenstation — einer kleinen Gastwirtschaft, in der man sich seine Forelle selbst fangen kann.",
        image: { src: `${IMG}/forellenteich.webp`, alt: "Forellenteich mit Forellenstation am Prefelnig Hof" },
      },
      {
        title: "Slow Trail Bleistätter Moor",
        text: "Der Hof liegt direkt am Slow Trail: eine flache Rundtour (ca. 7 km) durchs artenreiche Bleistätter Moor entlang des Ossiacher See Ostufers.",
        image: { src: `${IMG}/bleistaetter-moor.webp`, alt: "Blühende Wiese am Bleistätter Moor nahe dem Prefelnig Hof" },
      },
      {
        title: "Glamping-Auszeit am Teich",
        text: "Übernachten in den Vollholz-Lodges mit eigener Terrasse direkt am Forellenteich — Naturnähe mit Komfort.",
        image: { src: `${IMG}/glamping-lodges-teich.webp`, alt: "Zwei Glamping Lodges am Forellenteich des Prefelnig Hofs" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie zu uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Alt-Ossiach 2, 9570 Ossiach — am Ostufer des Ossiacher Sees. Vor Ort weisen die Schilder „Urlaub am Bauernhof Huber-Prefelnig“ den Weg.",
      },
      {
        title: "Lage & Natur",
        text: "Rund 1,3 km zur Ossiacher See Ostbucht; das Bleistätter Moor und der Ossiacher See Radweg (R2/R2A) liegen direkt vor der Tür.",
      },
      {
        title: "Im Winter",
        text: "Skifahren auf der Simonhöhe (ca. 25 km) und der Gerlitzen Alpe / Kanzelbahn (ca. 13 km) — auch Winterurlaub am Bauernhof ist möglich.",
      },
    ],
  },

  galerie: {
    heading: "Ein Hof zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Tiere, Wiesen, Glamping am Teich und echtes Hofleben — ein paar Eindrücke vom Prefelnig Hof in Alt-Ossiach.",
    tag: "Mai bis September",
    moreCount: 12,
    images: [
      { src: `${IMG}/willkommen-schilder.webp`, alt: "Handbemalte Willkommensschilder „Urlaub am Bauernhof“ am Prefelnig Hof" },
      { src: `${IMG}/glamping-schlafen.webp`, alt: "Schlafbereich einer Glamping Lodge mit Sat-TV am Prefelnig Hof" },
      { src: `${IMG}/garten-detail.webp`, alt: "Garten am Prefelnig Hof mit Blick auf die Berge" },
      { src: `${IMG}/lagerfeuer-abend.webp`, alt: "Lagerfeuerabend mit Gästen am Prefelnig Hof" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personen — Familie Huber meldet sich mit Ihrer persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise: Stellplatz ab € 50/Nacht (2 Pers., Nebensaison; Hauptsaison ab € 60–70), Ferienwohnung ab € 105/Nacht (Nebensaison; Zwischen-/Hauptsaison € 115/135). Zzgl. Ortstaxe € 2,70/Tag/Erw.; bei Ferienwohnungen zzgl. Endreinigung € 120 und Energie-/Abfallpauschale € 12/Nacht. Glamping Lodges auf Anfrage.",
    highlight: {
      title: "Gratis ins Strandbad Ossiach",
      text: "Haus- und Campinggäste haben für die Dauer ihres Aufenthalts kostenlosen Zutritt ins Strandbad Ossiach. Zu jeder Buchung gibt es zudem gratis die Erlebnis CARD der Region.",
    },
    categories: [
      // Reale Preise Prefelnig Hof Saison 2026 (Stellplatz 2 Pers., ab-Wert Nebensaison;
      // Ferienwohnung Startpreis "ab" = Nebensaison).
      { id: "stellplatz", label: "Camping-Stellplatz", perNight: 50, perExtraGuest: 7 },
      { id: "ferienwohnung", label: "Ferienwohnung", perNight: 105, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    coords: { lat: 46.688924, lng: 14.032985 },
    tel: "+43 4243 8226",
    telHref: "tel:+4342438226",
    mail: "hof@prefelnig.at",
    adresse: "Alt-Ossiach 2 · 9570 Ossiach · Kärnten",
    // KEINE coords: auf der Quelle stehen keine expliziten Koordinaten → Karte aus, Adresse zeigt.
  },

  story: {
    kicker: "Seit Generationen",
    heading: "Der Prefelnig Hof",
    intro:
      "Ein typischer Kärntner Bauernhof der Familie Huber — wo Urlaub und echtes Hofleben zusammenkommen.",
    chapters: [
      {
        no: "01",
        kicker: "Der Hof",
        title: "Echtes Bauernhofleben",
        text: "Rund 70 Rinder, zwei Pferde, eine Zwergziege, Hühner und Katzen: Bei Familie Huber wird bäuerliches Leben nicht nur beobachtet, sondern hautnah miterlebt.",
      },
      {
        no: "02",
        kicker: "Camping",
        title: "Einzigartig am Ossiacher See",
        text: "Direkt am Bauernhof campen — 10 Wiesenstellplätze, dazu seit Sommer 2018 zwei Glamping Lodges aus Vollholz am Forellenteich.",
      },
      {
        no: "03",
        kicker: "Natur",
        title: "Mitten in der Kärntner Seenlandschaft",
        text: "Nur rund 1,3 km zur Ossiacher See Ostbucht, direkt am Slow Trail durchs Bleistätter Moor und am Seeradweg — Natur beginnt vor der Haustür.",
      },
    ],
  },

  languages: ["DE"],

  nav: [
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Ferienwohnungen", href: "#mobilheime" },
        { label: "Glamping Lodges", href: "#mobilheime" },
        { label: "Ausstattung", href: "#mobilheime" },
      ],
    },
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär", href: "#camping" },
        { label: "Familienzeit", href: "#camping" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Tiere am Hof", href: "#kinder" },
        { label: "Für Kinder", href: "#kinder" },
        { label: "Grillabende", href: "#kinder" },
      ],
    },
    {
      label: "Erleben",
      href: "#aktivitaeten",
      children: [
        { label: "Forellenstation", href: "#aktivitaeten" },
        { label: "Slow Trail", href: "#aktivitaeten" },
        { label: "Glamping am Teich", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default prefelnig;
