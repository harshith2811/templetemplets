import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import templeHeroImage from "@/assets/bhtcc-vision-concept.jpg";
import {
  MapPin,
  Calendar,
  Clock,
  Compass,
  Heart,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Info,
  Building,
  Mail,
  Phone,
  CheckCircle2,
  Maximize2,
  X,
  Volume2,
  Copy,
  Check,
  Layers,
  Eye,
  Sliders,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: TemplePage,
});

function TemplePage() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [copiedBsb, setCopiedBsb] = useState(false);
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [donationTier, setDonationTier] = useState<number>(251);
  const [bellRinging, setBellRinging] = useState(false);

  // Pure Web Audio synthesized traditional Tibetan/Vedic temple bell chime
  const playTempleBell = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      setBellRinging(true);
      setTimeout(() => setBellRinging(false), 2400);

      // Fundamental and sacred harmonic overtones (golden ratio ratios)
      const freqs = [432, 864, 1296, 1728];
      const gains = [0.4, 0.2, 0.1, 0.05];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const decay = 2.8 - idx * 0.4;
        gain.gain.setValueAtTime(gains[idx] ?? 0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + decay);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + decay);
      });
    } catch {
      // Audio fallback without interrupting UI
    }
  };

  const copyToClipboard = (text: string, type: "bsb" | "acc") => {
    navigator.clipboard.writeText(text);
    if (type === "bsb") {
      setCopiedBsb(true);
      setTimeout(() => setCopiedBsb(false), 2000);
    } else {
      setCopiedAcc(true);
      setTimeout(() => setCopiedAcc(false), 2000);
    }
  };

  const hotspots = [
    {
      id: 0,
      title: "Maha Gopuram & Vimana",
      subtitle: "The Soaring Granite Spire",
      x: "80%",
      y: "32%",
      elevation: "45 ft (13.7 m)",
      shastra: "Dravidian Shilpa Shastra",
      description:
        "Multi-tiered granite and sandstone shikhara sculpted with Agamic motifs, capturing morning sunlight across Golden Plains Shire.",
      specs: ["Natural Sandstone & Granite", "East-facing solar alignment", "Hand-carved celestial guardians"],
    },
    {
      id: 1,
      title: "Sculpted Mukhamandapa",
      subtitle: "Open Pillared Congregation Hall",
      x: "64%",
      y: "65%",
      elevation: "Colonnade Level",
      shastra: "Vastu Mandala Layout",
      description:
        "Spacious stone colonnade designed for prayer assembly, sacred bhajans, and cooling natural cross-ventilation across the 5-acre estate.",
      specs: ["Hand-chiseled lotus pillars", "Integrated Parikrama path", "Acoustically tuned stone roof"],
    },
    {
      id: 2,
      title: "Garbhagriha & Sanctum",
      subtitle: "The Sacred Core Sanctuary",
      x: "48%",
      y: "68%",
      elevation: "Adhisthana Base",
      shastra: "9x9 Paramasayika Grid",
      description:
        "The sanctum sanctorum housing presiding consecrated shrines for Lord Shiva, Ganesha, Murugan, Venkateswara, and Goddess Durga.",
      specs: ["Vedic Vastu alignment", "Traditional abhishek drainage", "Dedicated priest prahara"],
    },
    {
      id: 3,
      title: "5-Acre Native Victorian Grounds",
      subtitle: "Gardens & Meditation Trails",
      x: "22%",
      y: "75%",
      elevation: "Landscape Grade",
      shastra: "Ecological Harmony",
      description:
        "Preserved Australian eucalyptus trees, walking trails, peaceful reflection ponds, and outdoor congregation lawns at 110 Vaggs Rd.",
      specs: ["Native flora preservation", "Ample community parking", "Children's cultural play area"],
    },
  ];

  const milestones = [
    {
      chapter: "I",
      year: "2016",
      title: "Legal Founding & Incorporation",
      status: "Ratified",
      body: "Ballarat Hindu Temple & Cultural Centre was formally incorporated as an Association in Victoria (ABN: 13 397 829 440) to support regional families.",
    },
    {
      chapter: "II",
      year: "2018",
      title: "Inaugural Ganesh Chaturthi",
      status: "Celebrated",
      body: "Ballarat's first landmark annual multicultural festival, attracting over 400 attendees and receiving formal civic appreciation.",
    },
    {
      chapter: "III",
      year: "2020",
      title: "5-Acre Ross Creek Land Acquisition",
      status: "Secured",
      body: "Unconditional acquisition of 110 Vaggs Rd, Ross Creek in Golden Plains Shire, chosen for ideal Vastu orientation and serene rural peace.",
    },
    {
      chapter: "IV",
      year: "2022",
      title: "$900,000 Government Commitments",
      status: "Parliamentary",
      body: "Victorian State and Commonwealth grant commitments formally recognized in the Parliament of Victoria for community infrastructure.",
    },
    {
      chapter: "V",
      year: "2024",
      title: "Historic Bhoomi Pooja Groundbreaking",
      status: "Consecrated",
      body: "Over 800 devotees, spiritual acharyas, and Victorian dignitaries gathered on-site for the sacred Vedic earth consecration rites.",
    },
    {
      chapter: "VI",
      year: "2025–2026",
      title: "Phase 1: Civil Works & Stone Fabrication",
      status: "Active Execution",
      body: "Master civil earthworks, access roads, utilities, and master stonecarvers fashioning authentic granite sanctum elements.",
    },
  ];

  const deities = [
    {
      name: "Lord Shiva",
      title: "Mahadeva & Somaskanda",
      shloka: "ॐ नमः शिवाय",
      translation: "Salutations to the Auspicious, Supreme Cosmic Preserver of Inner Peace.",
      role: "Presiding Sanctum Deity",
    },
    {
      name: "Lord Ganesha",
      title: "Vighnaharta & Prathama",
      shloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ",
      translation: "Remover of obstacles and guardian of every noble, auspicious undertaking.",
      role: "Auspicious Entrance Sanctum",
    },
    {
      name: "Lord Murugan",
      title: "Skanda & Karthikeya",
      shloka: "ॐ षण्मुखाय नमः",
      translation: "Embodiment of courage, righteous spiritual wisdom, and supreme clarity.",
      role: "Southern Flank Sanctum",
    },
    {
      name: "Lord Venkateswara",
      title: "Balaji / Maha Vishnu",
      shloka: "नमो भगवते वासुदेवाय",
      translation: "The compassionate guardian who bestows grace, harmony, and prosperity.",
      role: "Western Chamber Sanctum",
    },
    {
      name: "Goddess Durga",
      title: "Maha Shakti & Parvati",
      shloka: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके",
      translation: "Divine mother granting protection, strength, and boundless compassion.",
      role: "Northern Sanctuary Chamber",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F0D0C] text-[#FAF8F5] font-sans-body selection:bg-[#D4A359]/30 selection:text-[#F3D9A2]">
      {/* 1. TOP TECHNICAL & HERITAGE STATUS BAR */}
      <div className="bg-[#181514] border-b border-[#D4A359]/20 text-[#A89F91] px-4 py-2 text-[11px] font-mono tracking-widest uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4A359] animate-pulse" />
            <span className="text-[#FAF8F5]">
              BHTCC ARCHITECTURAL JOURNAL • 110 VAGGS RD, ROSS CREEK VIC 3351
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#8C8477]">
            <span>GEO: 37°38'S 143°49'E</span>
            <span>•</span>
            <span>ABN: 13 397 829 440</span>
            <span>•</span>
            <span className="text-[#D4A359]">GOVT CAPITAL COMMITMENT: $900K+</span>
          </div>
        </div>
      </div>

      {/* 2. FLOATING SANCTUARY NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0F0D0C]/85 backdrop-blur-xl border-b border-[#2C2623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-sm bg-[#7A1F2D] border border-[#D4A359]/50 flex items-center justify-center text-[#D4A359] shadow-inner transition-transform group-hover:scale-105">
              <span className="font-cinzel text-xl font-bold">ॐ</span>
            </div>
            <div>
              <span className="block font-cinzel text-base sm:text-lg font-bold tracking-wider text-[#FAF8F5] leading-tight">
                BALLARAT HINDU TEMPLE
              </span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#D4A359]">
                & Cultural Centre • Regional Victoria
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#B5ADA3]">
            <a href="#vision" className="hover:text-[#D4A359] transition-colors">
              // Vision
            </a>
            <a href="#explorer" className="hover:text-[#D4A359] transition-colors">
              // Masterplan
            </a>
            <a href="#sanctum" className="hover:text-[#D4A359] transition-colors">
              // Deities
            </a>
            <a href="#milestones" className="hover:text-[#D4A359] transition-colors">
              // Chronicle
            </a>
            <a href="#community" className="hover:text-[#D4A359] transition-colors">
              // Seva
            </a>
            <a href="#location" className="hover:text-[#D4A359] transition-colors">
              // Siting
            </a>
          </nav>

          {/* Interactive Sound & Donation Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={playTempleBell}
              title="Ring Temple Bell (Web Audio Chime)"
              className={`p-2.5 rounded-sm border transition-all text-xs font-mono flex items-center gap-2 ${
                bellRinging
                  ? "bg-[#D4A359] text-black border-[#D4A359] scale-105"
                  : "bg-[#1E1B19] hover:bg-[#2C2623] text-[#D4A359] border-[#3D352F]"
              }`}
            >
              <Volume2 className={`w-4 h-4 ${bellRinging ? "animate-bounce" : ""}`} />
              <span className="hidden sm:inline">Ring Bell</span>
            </button>

            <a
              href="#fund"
              className="inline-flex items-center gap-2 bg-[#7A1F2D] hover:bg-[#8F2334] text-[#FAF8F5] px-4 py-2.5 text-xs font-mono uppercase tracking-wider border border-[#D4A359]/40 transition-all shadow-md"
            >
              <Heart className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Temple Fund</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO VIEWPORT: IMMERSIVE IMAGE BACKGROUND */}
      <section
        id="vision"
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#2C2623]"
      >
        {/* Full-Bleed Image Background with Depth & Atmospheric Fog */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-[1.02]"
          style={{ backgroundImage: `url(${templeHeroImage})` }}
        />

        {/* Cinematic Vignettes & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D0C]/95 via-[#0F0D0C]/75 to-[#0F0D0C]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0C] via-transparent to-[#0F0D0C]/70" />
        <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 border border-[#D4A359]/50 bg-[#1A1614]/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-widest text-[#D4A359]">
                <Compass className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>Traditional Agamic & Shilpa Shastra Architecture</span>
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAF8F5] leading-[1.12]">
                A Sacred Sanctuary for <br className="hidden sm:inline" />
                <span className="text-gold-gradient font-cinzel">Ballarat & Regional Victoria</span>
              </h1>

              <p className="text-base sm:text-lg text-[#C8BEB2] leading-relaxed max-w-2xl font-light">
                Harmonizing ancient stone temple geometry with regional Victoria's golden countryside. Establishing the
                first traditional Vedic sanctuary, cultural learning academy, and community food-relief centre across 5
                pristine acres at Ross Creek.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#explorer"
                  className="inline-flex items-center gap-2 bg-[#D4A359] hover:bg-[#E5B76E] text-[#141211] font-semibold px-6 py-3 text-xs font-mono uppercase tracking-widest transition-all shadow-lg hover:shadow-[#D4A359]/20"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Masterplan</span>
                </a>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#1E1B19]/90 hover:bg-[#2A2522] border border-[#4A3F37] text-[#FAF8F5] px-6 py-3 text-xs font-mono uppercase tracking-widest transition-all"
                >
                  <Maximize2 className="w-4 h-4 text-[#D4A359]" />
                  <span>View Full Concept</span>
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-[#382F29] flex flex-wrap items-center gap-6 text-xs font-mono text-[#8C8477]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4A359]" />
                  <span>ABN 13 397 829 440</span>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#D4A359]" />
                  <span>$900k+ Govt Grant Allocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4A359]" />
                  <span>110 Vaggs Rd, Ross Creek VIC</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Glass Telemetry HUD */}
            <div className="lg:col-span-5">
              <div className="bg-[#171413]/85 backdrop-blur-xl border border-[#3D352F] p-6 sm:p-7 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-[#2C2623] pb-3 text-xs font-mono">
                  <span className="text-[#D4A359] font-bold tracking-widest uppercase">
                    // SANCTUARY SPECIFICATIONS
                  </span>
                  <span className="text-[#8C8477]">PARAMASAYIKA MANDALA</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1F1B19] border border-[#2D2622] p-3.5">
                    <span className="text-[10px] font-mono text-[#8C8477] uppercase block">Property Extent</span>
                    <span className="text-xl font-bold font-serif-heading text-[#FAF8F5]">5.00 Acres</span>
                    <span className="text-[10px] text-[#D4A359] block mt-0.5">Freehold Rural Title</span>
                  </div>
                  <div className="bg-[#1F1B19] border border-[#2D2622] p-3.5">
                    <span className="text-[10px] font-mono text-[#8C8477] uppercase block">Govt Grants</span>
                    <span className="text-xl font-bold font-serif-heading text-[#FAF8F5]">$900,000+</span>
                    <span className="text-[10px] text-[#D4A359] block mt-0.5">Victorian Parliament</span>
                  </div>
                  <div className="bg-[#1F1B19] border border-[#2D2622] p-3.5">
                    <span className="text-[10px] font-mono text-[#8C8477] uppercase block">Sanctum Height</span>
                    <span className="text-xl font-bold font-serif-heading text-[#FAF8F5]">45 Feet</span>
                    <span className="text-[10px] text-[#D4A359] block mt-0.5">Maha Shikhara Tower</span>
                  </div>
                  <div className="bg-[#1F1B19] border border-[#2D2622] p-3.5">
                    <span className="text-[10px] font-mono text-[#8C8477] uppercase block">Bhoomi Pooja</span>
                    <span className="text-xl font-bold font-serif-heading text-[#FAF8F5]">800+ Devotees</span>
                    <span className="text-[10px] text-[#D4A359] block mt-0.5">Groundbreaking Attendance</span>
                  </div>
                </div>

                <div className="bg-[#241F1C] border-l-2 border-[#D4A359] p-3.5 text-xs text-[#B5ADA3] leading-relaxed">
                  <p className="font-mono text-[11px] text-[#D4A359] font-semibold mb-1">
                    CONCEPT ARCHITECTURAL RENDERING NOTE:
                  </p>
                  Visual representation of the sacred complex currently progressing through site works at 110 Vaggs
                  Road, Ross Creek within the Golden Plains Shire.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Crossbar */}
        <div className="absolute inset-x-0 bottom-0 bg-[#0F0D0C]/90 border-t border-[#2C2623] py-3 px-4 text-center">
          <p className="text-[11px] font-mono text-[#8C8477] tracking-widest uppercase">
            Ballarat Hindu Temple & Cultural Centre Inc. • Reg No. A0096238K (VIC) • Registered Not-for-Profit Charity
          </p>
        </div>
      </section>

      {/* 4. INTERACTIVE ARCHITECTURAL EXPLORER & HOTSPOT ANALYZER */}
      <section id="explorer" className="py-20 bg-[#141211] border-b border-[#2C2623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359]">
                // SPATIAL ARCHITECTURE SPECIFICATION
              </span>
              <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
                Deconstruct the Architectural Masterplan
              </h2>
              <p className="mt-2 text-sm text-[#A89F91] max-w-xl">
                Click any coordinate marker on the conceptual architectural model to inspect traditional stone carving
                dimensions, structural components, and sacred Vastu alignments.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4A359]">
              <Layers className="w-4 h-4" />
              <span>INTERACTIVE SANCTUARY MAP</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Image with Positioned Hotspots */}
            <div className="lg:col-span-8 relative rounded-sm overflow-hidden border border-[#3D352F] bg-[#1E1B19]">
              <div className="relative">
                <img
                  src={templeHeroImage}
                  alt="Ballarat Hindu Temple architectural elements analyzer"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[580px] object-cover object-center"
                />

                {/* Hotspot Markers */}
                {hotspots.map((spot) => (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspot(spot.id)}
                    style={{ left: spot.x, top: spot.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none`}
                    aria-label={`Inspect ${spot.title}`}
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          activeHotspot === spot.id ? "bg-[#D4A359]" : "bg-white"
                        }`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-7 w-7 items-center justify-center text-xs font-bold font-mono transition-transform group-hover:scale-110 shadow-lg ${
                          activeHotspot === spot.id
                            ? "bg-[#D4A359] text-black ring-4 ring-[#D4A359]/30"
                            : "bg-[#1F1B19]/90 text-white border border-[#D4A359]"
                        }`}
                      >
                        0{spot.id + 1}
                      </span>
                    </span>
                  </button>
                ))}

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-[#3D352F] text-[10px] font-mono text-[#D4A359]">
                  SELECT HOTSPOT MARKER TO INSPECT
                </div>
              </div>
            </div>

            {/* Dynamic Element Spec Inspector Panel */}
            <div className="lg:col-span-4 bg-[#1A1715] border border-[#3D352F] p-6 sm:p-7 space-y-6">
              {activeHotspot !== null && (
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#D4A359] mb-2 border-b border-[#2E2824] pb-2">
                    <span>SPECIFICATION // 0{activeHotspot + 1}</span>
                    <span>{hotspots[activeHotspot]?.shastra}</span>
                  </div>

                  <h3 className="font-serif-heading text-2xl font-bold text-[#FAF8F5]">
                    {hotspots[activeHotspot]?.title}
                  </h3>
                  <span className="block text-xs font-mono text-[#D4A359] mt-1">
                    {hotspots[activeHotspot]?.subtitle}
                  </span>

                  <p className="mt-4 text-xs sm:text-sm text-[#C8BEB2] leading-relaxed">
                    {hotspots[activeHotspot]?.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#2E2824]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C8477] block mb-2">
                      Architectural Parameters:
                    </span>
                    <ul className="space-y-2 text-xs font-mono text-[#B5ADA3]">
                      {hotspots[activeHotspot]?.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A359] shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 p-3 bg-[#131110] border border-[#2E2824] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8C8477]">Elevation:</span>
                    <span className="text-[#FAF8F5] font-semibold">{hotspots[activeHotspot]?.elevation}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSECRATED DEITIES: SACRED SANCTUM SANCTORUM */}
      <section id="sanctum" className="py-20 bg-[#0F0D0C] border-b border-[#2C2623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359]">
              // SANCTUM SANCTORUM (GARBHAGRIHA)
            </span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
              Consecrated Shrines of the Ballarat Hindu Sanctuary
            </h2>
            <p className="mt-3 text-sm text-[#A89F91]">
              Architecturally positioned to receive sacred cosmic energies and host authentic daily aarti, abhishekams,
              and landmark holy celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deities.map((deity, idx) => (
              <div
                key={idx}
                className="bg-[#181514] border border-[#2C2623] hover:border-[#D4A359]/60 p-6 sm:p-7 flex flex-col justify-between transition-all group hover:bg-[#1E1B19]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-[#25201D] pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A359]">
                      {deity.role}
                    </span>
                    <span className="text-xs font-mono text-[#8C8477]">0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif-heading text-2xl font-bold text-[#FAF8F5] group-hover:text-[#F3D9A2] transition-colors">
                    {deity.name}
                  </h3>
                  <span className="block text-xs font-mono text-[#A89F91] mt-0.5">{deity.title}</span>

                  {/* Sacred Sanskrit Shloka */}
                  <div className="my-5 p-3.5 bg-[#12100F] border-l-2 border-[#7A1F2D] text-center">
                    <p className="font-serif text-sm font-semibold text-[#D4A359]">{deity.shloka}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A89F91] leading-relaxed italic">{deity.translation}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#25201D] flex items-center justify-between text-[11px] font-mono text-[#8C8477]">
                  <span>Vedic Agamic Rites</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A359]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HISTORICAL CHRONICLE (2016–2026) */}
      <section id="milestones" className="py-20 bg-[#141211] border-b border-[#2C2623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359]">
              // INSTITUTIONAL CHRONICLE
            </span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
              Decade of Grassroots Community Devotion
            </h2>
            <p className="mt-3 text-sm text-[#A89F91]">
              A journey of persistent community effort—from rented community halls in 2016 to our 5-acre consecrated
              grounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="bg-[#181514] border border-[#2A2421] p-6 flex flex-col justify-between hover:border-[#D4A359]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#D4A359] mb-3">
                    <span className="font-bold">CHAPTER // {m.chapter}</span>
                    <span className="bg-[#241F1C] px-2 py-0.5 border border-[#382F2A] text-[10px] text-[#A89F91]">
                      {m.status}
                    </span>
                  </div>

                  <span className="font-serif-heading text-3xl font-bold text-[#FAF8F5]">{m.year}</span>
                  <h4 className="mt-1 font-semibold text-base text-[#F3D9A2]">{m.title}</h4>

                  <p className="mt-3 text-xs sm:text-sm text-[#A89F91] leading-relaxed">{m.body}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#25201D] text-[10px] font-mono text-[#8C8477]">
                  BALLARAT HINDU TEMPLE RECORD
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY SEVA, ANNADHANAM & WELFARE */}
      <section id="community" className="py-20 bg-[#0F0D0C] border-b border-[#2C2623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359]">
                // SOCIAL WELFARE & SERVICE
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
                Living Service: Food Drives & Regional Care
              </h2>
              <p className="text-sm sm:text-base text-[#C8BEB2] leading-relaxed">
                Upholding the sacred Hindu value of <em>Seva</em> (selfless service), BHTCC actively serves western
                regional Victoria through continuous food security, language preservation, and intercultural dialogue.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Emergency Care Packages & Food Drives",
                    desc: "Monthly dry-ration hampers and direct food relief distributed to regional families in need and local crisis accommodation shelters.",
                  },
                  {
                    title: "Annadhanam Mahaprasad Kitchen",
                    desc: "Planned commercial community kitchen providing sanctified, nutritious vegetarian meals to all community visitors regardless of background.",
                  },
                  {
                    title: "Youth Cultural Heritage & Sanskrit Academy",
                    desc: "Structured weekend lessons preserving Vedic philosophy, classical Carnatic and Hindustani music, dance, and regional Indian languages.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-[#171413] border border-[#292320]">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm text-[#FAF8F5]">{item.title}</h4>
                      <p className="text-xs text-[#A89F91] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sacred Sanskrit Scripture & Ethics Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#181514] border-2 border-[#D4A359]/40 p-8 sm:p-10 relative shadow-2xl">
                <span className="font-serif text-6xl text-[#D4A359]/20 absolute top-4 left-6 leading-none">“</span>
                <div className="relative pt-6">
                  <p className="font-cinzel text-xl sm:text-2xl text-[#D4A359] font-bold leading-relaxed mb-4">
                    वसुधैव कुटुम्बकम्
                  </p>
                  <blockquote className="font-serif text-lg italic text-[#FAF8F5] leading-relaxed">
                    "The world is one family. True spiritual sanctuary is reflected not merely in carved stone, but in
                    our commitment to feed the hungry, comfort the weary, and preserve timeless wisdom for tomorrow's
                    children."
                  </blockquote>

                  <div className="mt-8 pt-4 border-t border-[#2C2623] flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="block font-bold text-[#D4A359] uppercase">BHTCC Constitutional Motto</span>
                      <span className="text-[#8C8477]">Maha Upanishad VI.71-73</span>
                    </div>
                    <Award className="w-6 h-6 text-[#D4A359]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SITING & VISITATION: 110 VAGGS RD */}
      <section id="location" className="py-20 bg-[#141211] border-b border-[#2C2623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359]">
              // GEOGRAPHIC SITING & ACCESS
            </span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
              Visiting the 5-Acre Ross Creek Sanctuary
            </h2>
            <p className="mt-3 text-sm text-[#A89F91]">
              Convenient regional access from Ballarat, Melbourne, Geelong, and western regional Victoria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#181514] border border-[#2C2623] p-6 flex flex-col justify-between">
              <div>
                <MapPin className="w-6 h-6 text-[#D4A359] mb-4" />
                <h3 className="font-serif-heading text-xl font-bold text-[#FAF8F5]">Sanctuary Address</h3>
                <p className="mt-2 text-sm text-[#C8BEB2] leading-relaxed">
                  <strong>110 Vaggs Road</strong>
                  <br />
                  Ross Creek VIC 3351
                  <br />
                  Golden Plains Shire, Australia
                </p>
                <div className="mt-4 pt-4 border-t border-[#25201D] text-xs font-mono text-[#8C8477] space-y-1">
                  <p>• 12 mins from Ballarat Railway Station</p>
                  <p>• 1 hr 20 mins from Western Melbourne</p>
                  <p>• Connected via Glenelg Highway</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=110+Vaggs+Rd,+Ross+Creek+VIC+3351"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 border border-[#D4A359] text-[#D4A359] hover:bg-[#D4A359] hover:text-black py-2.5 text-xs font-mono uppercase tracking-widest transition-all"
              >
                <span>Navigate in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-[#181514] border border-[#2C2623] p-6 flex flex-col justify-between">
              <div>
                <Clock className="w-6 h-6 text-[#D4A359] mb-4" />
                <h3 className="font-serif-heading text-xl font-bold text-[#FAF8F5]">Ceremony Access</h3>
                <p className="mt-2 text-sm text-[#C8BEB2] leading-relaxed">
                  As the site is under active Phase 1 civil development, congregational poojas occur on scheduled holy
                  tithis.
                </p>
                <div className="mt-4 pt-4 border-t border-[#25201D] text-xs font-mono text-[#8C8477] space-y-1">
                  <p>• Modest and respectful attire</p>
                  <p>• Designated on-site parking</p>
                  <p>• Sign-in required for site safety</p>
                </div>
              </div>
              <div className="mt-6 p-3 bg-[#131110] text-[11px] font-mono text-[#D4A359] border border-[#2E2824] text-center">
                CHECK MONTHLY BULLETIN FOR SERVICE DATES
              </div>
            </div>

            <div className="bg-[#181514] border border-[#2C2623] p-6 flex flex-col justify-between">
              <div>
                <Mail className="w-6 h-6 text-[#D4A359] mb-4" />
                <h3 className="font-serif-heading text-xl font-bold text-[#FAF8F5]">Official Contact</h3>
                <p className="mt-2 text-sm text-[#C8BEB2] leading-relaxed">
                  Connect with the BHTCC Executive Management Committee for pooja bookings, seva, or membership.
                </p>
                <div className="mt-4 pt-4 border-t border-[#25201D] text-xs font-mono text-[#8C8477] space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D4A359]" />
                    <span>info@ballarathindutemple.org.au</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4A359]" />
                    <span>+61 3 5300 0000</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-[#D4A359]" />
                    <span>Reg: A0096238K (Victoria)</span>
                  </p>
                </div>
              </div>
              <a
                href="mailto:info@ballarathindutemple.org.au"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[#7A1F2D] hover:bg-[#8F2334] text-[#FAF8F5] py-2.5 text-xs font-mono uppercase tracking-widest transition-colors"
              >
                <span>Email Committee</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TRANSPARENT GIVING & BUILDING FUND (EFT COPIER) */}
      <section id="fund" className="py-20 bg-[#0F0D0C] border-b border-[#2C2623]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#171413] border-2 border-[#D4A359]/60 p-8 sm:p-12 shadow-2xl text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359]">
              // SACRED BUILDING FUND (SEVA)
            </span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
              Contribute to the Temple Construction
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#A89F91] max-w-xl mx-auto leading-relaxed">
              Every stone carved and native garden path paved is made possible through devotee generosity. Support the
              Ballarat Hindu Temple construction via direct bank transfer (EFT).
            </p>

            {/* Interactive Dedication Tiers */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[108, 251, 501, 1008].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setDonationTier(amt)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all ${
                    donationTier === amt
                      ? "bg-[#D4A359] text-black border-[#D4A359] font-bold"
                      : "bg-[#1F1B19] text-[#FAF8F5] border-[#382F2A] hover:border-[#D4A359]"
                  }`}
                >
                  ${amt} Sacred Dedication
                </button>
              ))}
            </div>

            {/* Bank Transfer Details with 1-Click Copy */}
            <div className="mt-8 bg-[#1F1B19] border border-[#382F2A] p-6 max-w-lg mx-auto text-left space-y-3.5 text-xs sm:text-sm font-mono">
              <div className="flex justify-between items-center border-b border-[#2C2623] pb-2.5">
                <span className="text-[#8C8477]">Account Name:</span>
                <span className="font-semibold text-[#FAF8F5] text-right">Ballarat Hindu Temple Inc.</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#2C2623] pb-2.5">
                <span className="text-[#8C8477]">Bank:</span>
                <span className="font-semibold text-[#FAF8F5]">Commonwealth Bank</span>
              </div>

              {/* BSB with Copy Button */}
              <div className="flex justify-between items-center border-b border-[#2C2623] pb-2.5">
                <span className="text-[#8C8477]">BSB:</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#D4A359]">063-500</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("063-500", "bsb")}
                    className="p-1 hover:bg-[#2C2623] text-[#8C8477] hover:text-white rounded"
                    title="Copy BSB"
                  >
                    {copiedBsb ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Account Number with Copy Button */}
              <div className="flex justify-between items-center border-b border-[#2C2623] pb-2.5">
                <span className="text-[#8C8477]">Account No:</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#D4A359]">1089 4231</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("10894231", "acc")}
                    className="p-1 hover:bg-[#2C2623] text-[#8C8477] hover:text-white rounded"
                    title="Copy Account Number"
                  >
                    {copiedAcc ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-[#8C8477]">Reference:</span>
                <span className="text-[#D4A359] italic">YourName - ${donationTier}</span>
              </div>
            </div>

            <p className="mt-4 text-[11px] font-mono text-[#8C8477]">
              All funds managed under strict non-profit governance (ABN: 13 397 829 440). Tax receipts provided upon
              email confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#141211] border-b border-[#2C2623]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359]">
              // DEVOTEE INQUIRIES
            </span>
            <h2 className="mt-2 font-serif-heading text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
              Frequently Answered Questions
            </h2>
          </div>

          <div className="space-y-3 font-sans">
            {[
              {
                q: "What is the construction timeline for the temple?",
                a: "Phase 1 civil groundworks and access roads are currently underway at 110 Vaggs Rd. Master hand-carved stone elements are concurrently in artisan production, with initial sanctum consecration planned following completion of the primary infrastructure.",
              },
              {
                q: "Can interstate or Melbourne devotees sponsor specific pillars or stone carvings?",
                a: "Yes. Devotees may sponsor individual sanctum pillars, threshold stones, or permanent brass lamps. Please contact info@ballarathindutemple.org.au with your chosen dedication reference.",
              },
              {
                q: "Is BHTCC affiliated with any single denomination or regional group?",
                a: "No. BHTCC is a non-denominational, pan-Hindu cultural sanctuary welcoming devotees of Lord Shiva, Vishnu, Ganesha, Murugan, Devi, and all Hindu philosophical traditions across regional Victoria.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-[#181514] border border-[#2C2623] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#FAF8F5] hover:text-[#D4A359] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4A359] transition-transform duration-200 ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-[#A89F91] leading-relaxed border-t border-[#25201D] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. HIGH RESOLUTION LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#D4A359] p-2 focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={templeHeroImage}
              alt="Full resolution architectural concept rendering for Ballarat Hindu Temple and Cultural Centre"
              className="w-full max-h-[85vh] object-contain rounded-sm border border-[#3D352F]"
            />
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#A89F91]">
              <span>BALLARAT HINDU TEMPLE & CULTURAL CENTRE • CONCEPT VISUALIZATION</span>
              <span className="text-[#D4A359]">110 VAGGS RD, ROSS CREEK VIC 3351</span>
            </div>
          </div>
        </div>
      )}

      {/* 12. REVERENT EDITORIAL FOOTER */}
      <footer className="bg-[#0A0908] text-[#FAF8F5] border-t border-[#2C2623] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pb-12 border-b border-[#221D1A] max-w-2xl mx-auto">
            <p className="font-cinzel text-lg sm:text-2xl text-[#D4A359] tracking-widest font-semibold">
              ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।
            </p>
            <p className="mt-2 text-xs text-[#8C8477] italic font-serif">
              "May all beings everywhere be peaceful, happy, and free from discord."
            </p>
          </div>

          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-mono text-[#8C8477]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#7A1F2D] text-[#D4A359] flex items-center justify-center border border-[#D4A359]/40">
                  <span className="font-cinzel text-base font-bold">ॐ</span>
                </div>
                <span className="font-cinzel text-sm font-bold tracking-wider text-[#FAF8F5]">
                  BALLARAT HINDU TEMPLE & CULTURAL CENTRE
                </span>
              </div>
              <p className="text-xs text-[#8C8477] leading-relaxed max-w-md">
                An incorporated Victorian charity (ABN: 13 397 829 440) dedicated to establishing regional Victoria's
                first traditional Vedic stone temple, community food welfare kitchen, and cultural academy on 5 acres.
              </p>
              <div className="mt-4 text-[11px] text-[#D4A359]">
                110 Vaggs Rd, Ross Creek VIC 3351 | Golden Plains Shire
              </div>
            </div>

            <div>
              <span className="block font-semibold uppercase tracking-wider text-[#FAF8F5] mb-3">
                // Quick Navigation
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#vision" className="hover:text-[#D4A359] transition-colors">
                    The Vision
                  </a>
                </li>
                <li>
                  <a href="#explorer" className="hover:text-[#D4A359] transition-colors">
                    Architectural Explorer
                  </a>
                </li>
                <li>
                  <a href="#sanctum" className="hover:text-[#D4A359] transition-colors">
                    Consecrated Sanctum
                  </a>
                </li>
                <li>
                  <a href="#milestones" className="hover:text-[#D4A359] transition-colors">
                    Historical Timeline
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-[#D4A359] transition-colors">
                    Siting & Access
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="block font-semibold uppercase tracking-wider text-[#FAF8F5] mb-3">
                // Governance & Fund
              </span>
              <ul className="space-y-2 text-xs">
                <li>ABN: 13 397 829 440</li>
                <li>Victoria Reg: A0096238K</li>
                <li>info@ballarathindutemple.org.au</li>
                <li>+61 3 5300 0000</li>
                <li className="pt-2 text-[#D4A359]">
                  <a href="#fund" className="hover:underline">
                    Support the Building Fund →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#221D1A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#615B52]">
            <p>© {new Date().getFullYear()} Ballarat Hindu Temple & Cultural Centre Inc. All rights reserved.</p>
            <p>Designed under Vedic Vastu Shastra principles for Western Regional Victoria.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
