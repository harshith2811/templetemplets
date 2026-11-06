import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

  // Pure Web Audio synthesized traditional Vedic temple bell chime
  const playTempleBell = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      setBellRinging(true);
      setTimeout(() => setBellRinging(false), 2400);

      // Harmonious golden ratio overtones (432Hz fundamental)
      const freqs = [432, 864, 1296, 1728];
      const gains = [0.35, 0.18, 0.08, 0.04];

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
      // Audio fallback without interrupting user flow
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
      color: "from-amber-500/10 to-stone-100",
    },
    {
      name: "Lord Ganesha",
      title: "Vighnaharta & Prathama",
      shloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ",
      translation: "Remover of obstacles and guardian of every noble, auspicious undertaking.",
      role: "Auspicious Entrance Sanctum",
      color: "from-orange-500/10 to-stone-100",
    },
    {
      name: "Lord Murugan",
      title: "Skanda & Karthikeya",
      shloka: "ॐ षण्मुखाय नमः",
      translation: "Embodiment of courage, righteous spiritual wisdom, and supreme clarity.",
      role: "Southern Flank Sanctum",
      color: "from-red-500/10 to-stone-100",
    },
    {
      name: "Lord Venkateswara",
      title: "Balaji / Maha Vishnu",
      shloka: "नमो भगवते वासुदेवाय",
      translation: "The compassionate guardian who bestows grace, harmony, and prosperity.",
      role: "Western Chamber Sanctum",
      color: "from-yellow-500/10 to-stone-100",
    },
    {
      name: "Goddess Durga",
      title: "Maha Shakti & Parvati",
      shloka: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके",
      translation: "Divine mother granting protection, strength, and boundless compassion.",
      role: "Northern Sanctuary Chamber",
      color: "from-rose-500/10 to-stone-100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1817] font-sans-body selection:bg-[#7A1F2D]/20 selection:text-[#7A1F2D]">
      {/* 1. TOP NOTICE RIBBON (LIGHT & REFINED) */}
      <div className="bg-[#F3ECE2] border-b border-[#E5DACD] text-[#6E645A] px-4 py-2.5 text-[11px] font-mono tracking-widest uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div className="flex items-center gap-2.5 justify-center">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C58A3E] animate-pulse shadow-sm" />
            <span className="font-semibold text-[#1C1817]">
              BHTCC SACRED ARCHITECTURAL JOURNAL • 110 VAGGS RD, ROSS CREEK VIC
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#7A7167]">
            <span>GEO: 37°38'S 143°49'E</span>
            <span>•</span>
            <span>ABN: 13 397 829 440</span>
            <span>•</span>
            <span className="text-[#7A1F2D] font-bold">GOVT GRANT: $900K+</span>
          </div>
        </div>
      </div>

      {/* 2. FLOATING CURVED NAVIGATION BAR */}
      <header className="sticky top-3 z-40 px-4 sm:px-6 lg:px-8 my-2">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-xl border border-[#E8DFD3] rounded-full px-5 sm:px-8 h-20 flex items-center justify-between shadow-lg shadow-[#7A1F2D]/5 transition-all duration-300 hover:shadow-xl hover:border-[#7A1F2D]/30">
          {/* Logo & Emblems */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-full bg-[#7A1F2D] border-2 border-[#D4A359]/60 flex items-center justify-center text-[#FAF8F5] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="font-cinzel text-xl font-bold">ॐ</span>
            </div>
            <div>
              <span className="block font-cinzel text-base sm:text-lg font-bold tracking-wider text-[#7A1F2D] leading-tight transition-colors group-hover:text-[#5E1521]">
                BALLARAT HINDU TEMPLE
              </span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#8C8477]">
                & Cultural Centre • Regional Victoria
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Rounded Pill Hover */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#5C534B]">
            <a
              href="#vision"
              className="rounded-full px-3.5 py-1.5 transition-all duration-200 hover:bg-[#7A1F2D]/10 hover:text-[#7A1F2D] hover:scale-105"
            >
              Vision
            </a>
            <a
              href="#explorer"
              className="rounded-full px-3.5 py-1.5 transition-all duration-200 hover:bg-[#7A1F2D]/10 hover:text-[#7A1F2D] hover:scale-105"
            >
              Masterplan
            </a>
            <a
              href="#sanctum"
              className="rounded-full px-3.5 py-1.5 transition-all duration-200 hover:bg-[#7A1F2D]/10 hover:text-[#7A1F2D] hover:scale-105"
            >
              Deities
            </a>
            <a
              href="#milestones"
              className="rounded-full px-3.5 py-1.5 transition-all duration-200 hover:bg-[#7A1F2D]/10 hover:text-[#7A1F2D] hover:scale-105"
            >
              Chronicle
            </a>
            <a
              href="#community"
              className="rounded-full px-3.5 py-1.5 transition-all duration-200 hover:bg-[#7A1F2D]/10 hover:text-[#7A1F2D] hover:scale-105"
            >
              Seva
            </a>
            <a
              href="#location"
              className="rounded-full px-3.5 py-1.5 transition-all duration-200 hover:bg-[#7A1F2D]/10 hover:text-[#7A1F2D] hover:scale-105"
            >
              Siting
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={playTempleBell}
              title="Ring Temple Bell (Web Audio Chime)"
              className={`px-4 py-2 rounded-full border transition-all duration-300 text-xs font-mono flex items-center gap-2 shadow-sm ${
                bellRinging
                  ? "bg-[#7A1F2D] text-white border-[#7A1F2D] scale-105 shadow-md"
                  : "bg-[#F3ECE2] hover:bg-[#EAE1D4] text-[#7A1F2D] border-[#DED4C7] hover:scale-105"
              }`}
            >
              <Volume2 className={`w-3.5 h-3.5 ${bellRinging ? "animate-bounce" : ""}`} />
              <span className="hidden sm:inline">Ring Bell</span>
            </button>

            <a
              href="#fund"
              className="inline-flex items-center gap-2 bg-[#7A1F2D] hover:bg-[#5E1521] text-[#FAF8F5] px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#7A1F2D]/25 hover:scale-105"
            >
              <Heart className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Temple Fund</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO VIEWPORT: LUMINOUS LIGHT THEME WITH IMAGE BACKGROUND */}
      <section id="vision" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10 pb-20">
        {/* Full-Bleed Temple Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105 opacity-85"
          style={{ backgroundImage: `url(${templeHeroImage})` }}
        />

        {/* Luminous Light Overlays (Atmospheric Sunlight & Ivory Sandstone) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/96 via-[#FAF8F5]/88 to-[#FAF8F5]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/80" />
        <div className="absolute inset-0 bg-arch-grid-light opacity-60 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 border border-[#C58A3E]/40 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#7A1F2D] shadow-sm transition-all hover:border-[#7A1F2D] hover:scale-105">
                <Sparkles className="w-3.5 h-3.5 text-[#C58A3E]" />
                <span>Agamic & Shilpa Shastra Architecture • 5-Acre Sanctuary</span>
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1C1817] leading-[1.12]">
                A Sacred Sanctuary for <br className="hidden sm:inline" />
                <span className="text-maroon-gradient font-cinzel">Ballarat & Regional Victoria</span>
              </h1>

              <p className="text-base sm:text-lg text-[#554D46] leading-relaxed max-w-2xl font-normal">
                Harmonizing traditional Vedic stone geometry with regional Victoria's golden rural landscape.
                Establishing the first Hindu temple, cultural academy, and community food-relief centre across 5 serene
                acres at Ross Creek.
              </p>

              {/* Action Buttons with Rounded Corners & Rich Hover */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#explorer"
                  className="inline-flex items-center gap-2 bg-[#7A1F2D] hover:bg-[#5E1521] text-white font-medium px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#7A1F2D]/20 hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  <Eye className="w-4 h-4 text-[#D4A359]" />
                  <span>Inspect Masterplan</span>
                </a>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#F5EFE6] border border-[#DED4C7] text-[#1C1817] px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
                >
                  <Maximize2 className="w-4 h-4 text-[#7A1F2D]" />
                  <span>View Concept Render</span>
                </button>
              </div>

              {/* Trust Badges Strip */}
              <div className="pt-6 border-t border-[#E8DFD3] flex flex-wrap items-center gap-6 text-xs font-mono text-[#6E645A]">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#E5DACD] transition-transform hover:scale-105">
                  <ShieldCheck className="w-4 h-4 text-[#7A1F2D]" />
                  <span>ABN 13 397 829 440</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#E5DACD] transition-transform hover:scale-105">
                  <Landmark className="w-4 h-4 text-[#7A1F2D]" />
                  <span>$900k+ Govt Grant Allocation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#E5DACD] transition-transform hover:scale-105">
                  <MapPin className="w-4 h-4 text-[#7A1F2D]" />
                  <span>110 Vaggs Rd, Ross Creek VIC</span>
                </div>
              </div>
            </div>

            {/* Right Curved Floating Glass HUD Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/85 backdrop-blur-xl border border-[#E5DACD] rounded-3xl p-7 shadow-2xl shadow-[#7A1F2D]/5 transition-all duration-300 hover:shadow-3xl hover:border-[#7A1F2D]/40 space-y-6">
                <div className="flex items-center justify-between border-b border-[#EFE8DD] pb-3 text-xs font-mono">
                  <span className="text-[#7A1F2D] font-bold tracking-widest uppercase">
                    // SANCTUARY SPECIFICATIONS
                  </span>
                  <span className="text-[#8C8477] bg-[#F5EFE6] px-2.5 py-1 rounded-full text-[10px]">
                    PARAMASAYIKA MANDALA
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FAF8F5] border border-[#EAE1D5] rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.03]">
                    <span className="text-[10px] font-mono text-[#8C8477] uppercase block">Property Extent</span>
                    <span className="text-2xl font-bold font-serif-heading text-[#7A1F2D]">5.00 Acres</span>
                    <span className="text-[10px] text-[#554D46] block mt-0.5">Freehold Rural Title</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#EAE1D5] rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.03]">
                    <span className="text-[10px] font-mono text-[#8C8477] uppercase block">Govt Grants</span>
                    <span className="text-2xl font-bold font-serif-heading text-[#7A1F2D]">$900,000+</span>
                    <span className="text-[10px] text-[#554D46] block mt-0.5">Victorian Parliament</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#EAE1D5] rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.03]">
                    <span className="text-[10px] font-mono text-[#8C8477] uppercase block">Sanctum Height</span>
                    <span className="text-2xl font-bold font-serif-heading text-[#7A1F2D]">45 Feet</span>
                    <span className="text-[10px] text-[#554D46] block mt-0.5">Maha Shikhara Tower</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#EAE1D5] rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.03]">
                    <span className="text-[10px] font-mono text-[#8C8477] uppercase block">Bhoomi Pooja</span>
                    <span className="text-2xl font-bold font-serif-heading text-[#7A1F2D]">800+ Devotees</span>
                    <span className="text-[10px] text-[#554D46] block mt-0.5">Groundbreaking Ceremony</span>
                  </div>
                </div>

                <div className="bg-[#F5EFE6] border-l-4 border-[#7A1F2D] rounded-r-2xl p-4 text-xs text-[#554D46] leading-relaxed">
                  <p className="font-mono text-[11px] text-[#7A1F2D] font-bold mb-1">
                    CONCEPT ARCHITECTURAL RENDERING:
                  </p>
                  Visual representation of the sacred stone complex currently progressing through active site works at 110
                  Vaggs Road, Ross Creek in Golden Plains Shire.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE MASTERPLAN EXPLORER (LIGHT THEME & CURVED) */}
      <section id="explorer" className="py-20 bg-[#F5EFE6] border-y border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2D] font-semibold">
                // SPATIAL ARCHITECTURE SPECIFICATION
              </span>
              <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1C1817]">
                Deconstruct the Architectural Masterplan
              </h2>
              <p className="mt-2 text-sm text-[#554D46] max-w-xl">
                Click any coordinate pin on the conceptual model to inspect hand-carved stone proportions, colonnades,
                and sacred Vastu orientations.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#DED4C7] text-xs font-mono text-[#7A1F2D] shadow-sm">
              <Layers className="w-4 h-4 text-[#C58A3E]" />
              <span>INTERACTIVE SANCTUARY MAP</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Image with Positioned Hotspots & Curved Frame */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border-2 border-white bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative group">
                <img
                  src={templeHeroImage}
                  alt="Ballarat Hindu Temple architectural elements analyzer"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[580px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
                />

                {/* Hotspot Markers */}
                {hotspots.map((spot) => (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspot(spot.id)}
                    style={{ left: spot.x, top: spot.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                    aria-label={`Inspect ${spot.title}`}
                  >
                    <span className="relative flex h-9 w-9 items-center justify-center">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          activeHotspot === spot.id ? "bg-[#7A1F2D]" : "bg-[#C58A3E]"
                        }`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-8 w-8 items-center justify-center text-xs font-bold font-mono transition-all duration-300 group-hover:scale-125 shadow-lg ${
                          activeHotspot === spot.id
                            ? "bg-[#7A1F2D] text-white ring-4 ring-[#7A1F2D]/30"
                            : "bg-white text-[#7A1F2D] border-2 border-[#7A1F2D]"
                        }`}
                      >
                        0{spot.id + 1}
                      </span>
                    </span>
                  </button>
                ))}

                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5DACD] text-[11px] font-mono text-[#7A1F2D] font-bold shadow-sm">
                  CLICK NUMBERED PIN TO INSPECT
                </div>
              </div>
            </div>

            {/* Dynamic Element Spec Inspector Panel */}
            <div className="lg:col-span-4 bg-white border border-[#E5DACD] rounded-3xl p-7 shadow-lg shadow-[#7A1F2D]/5 transition-all duration-300 hover:shadow-xl space-y-6">
              {activeHotspot !== null && (
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#7A1F2D] mb-3 border-b border-[#F0E8DE] pb-2.5">
                    <span className="font-bold">SPECIFICATION // 0{activeHotspot + 1}</span>
                    <span className="bg-[#F5EFE6] px-2.5 py-0.5 rounded-full text-[10px] text-[#554D46]">
                      {hotspots[activeHotspot]?.shastra}
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-2xl font-bold text-[#1C1817]">
                    {hotspots[activeHotspot]?.title}
                  </h3>
                  <span className="block text-xs font-mono text-[#C58A3E] font-semibold mt-1">
                    {hotspots[activeHotspot]?.subtitle}
                  </span>

                  <p className="mt-4 text-xs sm:text-sm text-[#554D46] leading-relaxed">
                    {hotspots[activeHotspot]?.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#F0E8DE]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C8477] font-bold block mb-2.5">
                      Architectural Parameters:
                    </span>
                    <ul className="space-y-2.5 text-xs font-mono text-[#38322D]">
                      {hotspots[activeHotspot]?.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#7A1F2D] shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-[#FAF8F5] border border-[#EAE1D5] rounded-2xl flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8C8477]">Elevation:</span>
                    <span className="text-[#7A1F2D] font-bold">{hotspots[activeHotspot]?.elevation}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSECRATED DEITIES: CURVED CARDS & SMOOTH HOVER */}
      <section id="sanctum" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2D] font-semibold">
              // SANCTUM SANCTORUM (GARBHAGRIHA)
            </span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1C1817]">
              Consecrated Shrines of the Ballarat Sanctuary
            </h2>
            <p className="mt-3 text-sm text-[#554D46]">
              Architecturally aligned to receive sacred cosmic energies and host authentic daily aartis, archana, and
              holy festival observances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deities.map((deity, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5DACD] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-[#7A1F2D] hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-[#F2EAE0] pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A1F2D] font-bold bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E8DFD3]">
                      {deity.role}
                    </span>
                    <span className="text-xs font-mono text-[#8C8477]">0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif-heading text-2xl font-bold text-[#1C1817] group-hover:text-[#7A1F2D] transition-colors">
                    {deity.name}
                  </h3>
                  <span className="block text-xs font-mono text-[#8C8477] mt-0.5">{deity.title}</span>

                  {/* Sacred Sanskrit Shloka Box */}
                  <div className="my-5 p-4 bg-[#FAF8F5] border-l-4 border-[#7A1F2D] rounded-r-2xl text-center group-hover:bg-[#FDFBF7] transition-colors">
                    <p className="font-serif text-sm font-bold text-[#7A1F2D]">{deity.shloka}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#554D46] leading-relaxed italic">{deity.translation}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2EAE0] flex items-center justify-between text-[11px] font-mono text-[#8C8477]">
                  <span>Vedic Agamic Rites</span>
                  <CheckCircle2 className="w-4 h-4 text-[#C58A3E] group-hover:scale-125 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HISTORICAL CHRONICLE (LIGHT CURVED CARDS) */}
      <section id="milestones" className="py-20 bg-[#F5EFE6] border-y border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2D] font-semibold">
              // INSTITUTIONAL CHRONICLE
            </span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1C1817]">
              Decade of Grassroots Community Devotion
            </h2>
            <p className="mt-3 text-sm text-[#554D46]">
              A journey of persistent community effort—from rented halls in 2016 to our permanent 5-acre consecrated
              grounds at Ross Creek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="bg-white border border-[#E5DACD] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#7A1F2D]/50 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#7A1F2D] mb-3">
                    <span className="font-bold">CHAPTER // {m.chapter}</span>
                    <span className="bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E8DFD3] text-[10px] text-[#554D46]">
                      {m.status}
                    </span>
                  </div>

                  <span className="font-serif-heading text-3xl font-bold text-[#7A1F2D]">{m.year}</span>
                  <h4 className="mt-1 font-semibold text-base text-[#1C1817]">{m.title}</h4>

                  <p className="mt-3 text-xs sm:text-sm text-[#554D46] leading-relaxed">{m.body}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2EAE0] text-[10px] font-mono text-[#8C8477]">
                  BALLARAT HINDU TEMPLE RECORD
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY SEVA & REGIONAL WELFARE */}
      <section id="community" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2D] font-semibold">
                // SOCIAL WELFARE & SERVICE
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#1C1817]">
                Living Service: Food Drives & Regional Care
              </h2>
              <p className="text-sm sm:text-base text-[#554D46] leading-relaxed">
                Upholding the sacred Hindu value of <em>Seva</em> (selfless service), BHTCC actively serves western
                regional Victoria through continuous food security, language preservation, and intercultural dialogue.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Emergency Care Packages & Food Relief",
                    desc: "Monthly dry-ration hampers and direct food relief distributed to regional families in need and local crisis accommodation shelters.",
                  },
                  {
                    title: "Annadhanam Mahaprasad Community Kitchen",
                    desc: "Planned commercial community kitchen providing sanctified, nutritious vegetarian meals to all community visitors regardless of background.",
                  },
                  {
                    title: "Youth Cultural Heritage & Sanskrit Academy",
                    desc: "Structured weekend lessons preserving Vedic philosophy, classical Carnatic and Hindustani music, dance, and regional Indian languages.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-white border border-[#E5DACD] rounded-2xl shadow-sm hover:shadow-md hover:border-[#7A1F2D]/40 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#7A1F2D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm text-[#1C1817]">{item.title}</h4>
                      <p className="text-xs text-[#554D46] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sacred Motto Quote Card */}
            <div className="lg:col-span-6">
              <div className="bg-white border-2 border-[#C58A3E]/40 rounded-3xl p-8 sm:p-11 relative shadow-xl shadow-[#7A1F2D]/5 transition-all duration-300 hover:shadow-2xl">
                <span className="font-serif text-6xl text-[#C58A3E]/20 absolute top-5 left-7 leading-none">“</span>
                <div className="relative pt-6">
                  <p className="font-cinzel text-xl sm:text-2xl text-[#7A1F2D] font-bold leading-relaxed mb-4">
                    वसुधैव कुटुम्बकम्
                  </p>
                  <blockquote className="font-serif text-lg italic text-[#1C1817] leading-relaxed">
                    "The world is one family. True spiritual sanctuary is reflected not merely in carved stone, but in
                    our commitment to feed the hungry, comfort the weary, and preserve timeless wisdom for tomorrow's
                    children."
                  </blockquote>

                  <div className="mt-8 pt-5 border-t border-[#F0E8DE] flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="block font-bold text-[#7A1F2D] uppercase">BHTCC Constitutional Motto</span>
                      <span className="text-[#8C8477]">Maha Upanishad VI.71-73</span>
                    </div>
                    <Award className="w-6 h-6 text-[#C58A3E]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SITING & ACCESS: 110 VAGGS RD */}
      <section id="location" className="py-20 bg-[#F5EFE6] border-y border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2D] font-semibold">
              // GEOGRAPHIC SITING & ACCESS
            </span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1C1817]">
              Visiting the 5-Acre Ross Creek Sanctuary
            </h2>
            <p className="mt-3 text-sm text-[#554D46]">
              Convenient regional access from Ballarat, Melbourne, Geelong, and western regional Victoria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E5DACD] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#7A1F2D] hover:-translate-y-1.5 transition-all duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#E5DACD] flex items-center justify-center text-[#7A1F2D] mb-4">
                  <MapPin className="w-5 h-5 text-[#7A1F2D]" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#1C1817]">Sanctuary Address</h3>
                <p className="mt-2 text-sm text-[#554D46] leading-relaxed">
                  <strong>110 Vaggs Road</strong>
                  <br />
                  Ross Creek VIC 3351
                  <br />
                  Golden Plains Shire, Australia
                </p>
                <div className="mt-4 pt-4 border-t border-[#F2EAE0] text-xs font-mono text-[#8C8477] space-y-1.5">
                  <p>• 12 mins from Ballarat Railway Station</p>
                  <p>• 1 hr 20 mins from Western Melbourne</p>
                  <p>• Connected via Glenelg Highway</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=110+Vaggs+Rd,+Ross+Creek+VIC+3351"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 border border-[#7A1F2D] text-[#7A1F2D] hover:bg-[#7A1F2D] hover:text-white py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:scale-105"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white border border-[#E5DACD] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#7A1F2D] hover:-translate-y-1.5 transition-all duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#E5DACD] flex items-center justify-center text-[#7A1F2D] mb-4">
                  <Clock className="w-5 h-5 text-[#7A1F2D]" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#1C1817]">Ceremony Access</h3>
                <p className="mt-2 text-sm text-[#554D46] leading-relaxed">
                  As the site is in active Phase 1 civil development, congregational poojas occur on scheduled holy
                  tithis.
                </p>
                <div className="mt-4 pt-4 border-t border-[#F2EAE0] text-xs font-mono text-[#8C8477] space-y-1.5">
                  <p>• Modest and respectful attire</p>
                  <p>• Designated on-site parking</p>
                  <p>• Devotee sign-in for safety</p>
                </div>
              </div>
              <div className="mt-6 p-3 bg-[#FAF8F5] text-[11px] font-mono text-[#7A1F2D] rounded-2xl border border-[#E8DFD3] text-center font-bold">
                CHECK MONTHLY BULLETIN FOR SERVICE DATES
              </div>
            </div>

            <div className="bg-white border border-[#E5DACD] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#7A1F2D] hover:-translate-y-1.5 transition-all duration-300">
              <div>
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#E5DACD] flex items-center justify-center text-[#7A1F2D] mb-4">
                  <Mail className="w-5 h-5 text-[#7A1F2D]" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#1C1817]">Official Contact</h3>
                <p className="mt-2 text-sm text-[#554D46] leading-relaxed">
                  Connect with the BHTCC Executive Management Committee for pooja bookings, seva, or membership.
                </p>
                <div className="mt-4 pt-4 border-t border-[#F2EAE0] text-xs font-mono text-[#8C8477] space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#7A1F2D]" />
                    <span>info@ballarathindutemple.org.au</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#7A1F2D]" />
                    <span>+61 3 5300 0000</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-[#7A1F2D]" />
                    <span>Reg: A0096238K (Victoria)</span>
                  </p>
                </div>
              </div>
              <a
                href="mailto:info@ballarathindutemple.org.au"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[#7A1F2D] hover:bg-[#5E1521] text-[#FAF8F5] py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:scale-105"
              >
                <span>Email Committee</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TRANSPARENT GIVING & BUILDING FUND (EFT DETAILS WITH COPIER) */}
      <section id="fund" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-[#7A1F2D]/20 rounded-3xl p-8 sm:p-12 shadow-xl shadow-[#7A1F2D]/5 transition-all duration-300 hover:shadow-2xl hover:border-[#7A1F2D]/40 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2D] font-bold">
              // SACRED BUILDING FUND (SEVA)
            </span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1C1817]">
              Contribute to the Temple Construction
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#554D46] max-w-xl mx-auto leading-relaxed">
              Every stone carved and native garden path paved is made possible through devotee generosity. Support the
              Ballarat Hindu Temple construction via direct bank transfer (EFT).
            </p>

            {/* Dedication Tiers with Rounded Buttons & Hover */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[108, 251, 501, 1008].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setDonationTier(amt)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-all duration-300 hover:scale-105 ${
                    donationTier === amt
                      ? "bg-[#7A1F2D] text-white border-[#7A1F2D] font-bold shadow-md shadow-[#7A1F2D]/20"
                      : "bg-[#FAF8F5] text-[#1C1817] border-[#DED4C7] hover:border-[#7A1F2D]"
                  }`}
                >
                  ${amt} Sacred Dedication
                </button>
              ))}
            </div>

            {/* Bank Transfer Details with 1-Click Copy */}
            <div className="mt-8 bg-[#FAF8F5] border border-[#E5DACD] rounded-2xl p-6 max-w-lg mx-auto text-left space-y-3.5 text-xs sm:text-sm font-mono shadow-inner">
              <div className="flex justify-between items-center border-b border-[#EAE1D5] pb-2.5">
                <span className="text-[#8C8477]">Account Name:</span>
                <span className="font-semibold text-[#1C1817] text-right">Ballarat Hindu Temple Inc.</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#EAE1D5] pb-2.5">
                <span className="text-[#8C8477]">Bank:</span>
                <span className="font-semibold text-[#1C1817]">Commonwealth Bank</span>
              </div>

              {/* BSB with Copy Button */}
              <div className="flex justify-between items-center border-b border-[#EAE1D5] pb-2.5">
                <span className="text-[#8C8477]">BSB:</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#7A1F2D] text-base">063-500</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("063-500", "bsb")}
                    className="p-1.5 hover:bg-white text-[#8C8477] hover:text-[#7A1F2D] rounded-full border border-transparent hover:border-[#DED4C7] transition-all hover:scale-110"
                    title="Copy BSB"
                  >
                    {copiedBsb ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Account Number with Copy Button */}
              <div className="flex justify-between items-center border-b border-[#EAE1D5] pb-2.5">
                <span className="text-[#8C8477]">Account No:</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#7A1F2D] text-base">1089 4231</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("10894231", "acc")}
                    className="p-1.5 hover:bg-white text-[#8C8477] hover:text-[#7A1F2D] rounded-full border border-transparent hover:border-[#DED4C7] transition-all hover:scale-110"
                    title="Copy Account Number"
                  >
                    {copiedAcc ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-[#8C8477]">Reference:</span>
                <span className="text-[#7A1F2D] font-bold italic">YourName - ${donationTier}</span>
              </div>
            </div>

            <p className="mt-4 text-[11px] font-mono text-[#8C8477]">
              All funds managed under strict non-profit governance (ABN: 13 397 829 440). Tax receipts issued upon email
              confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (ROUNDED ACCORDIONS) */}
      <section className="py-20 bg-[#F5EFE6] border-t border-[#E8DFD3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2D] font-semibold">
              // DEVOTEE INQUIRIES
            </span>
            <h2 className="mt-2 font-serif-heading text-2xl sm:text-3xl font-bold text-[#1C1817]">
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
              <div
                key={i}
                className="bg-white border border-[#E5DACD] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#1C1817] hover:text-[#7A1F2D] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#7A1F2D] transition-transform duration-300 ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-[#554D46] leading-relaxed border-t border-[#F2EAE0] pt-3">
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
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#D4A359] p-2 focus:outline-none rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={templeHeroImage}
              alt="Full resolution architectural concept rendering for Ballarat Hindu Temple and Cultural Centre"
              className="w-full max-h-[85vh] object-contain rounded-3xl border border-white/20 shadow-2xl"
            />
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-white/90 bg-black/60 px-6 py-3 rounded-full backdrop-blur-md">
              <span>BALLARAT HINDU TEMPLE & CULTURAL CENTRE • CONCEPT VISUALIZATION</span>
              <span className="text-[#D4A359] font-bold">110 VAGGS RD, ROSS CREEK VIC 3351</span>
            </div>
          </div>
        </div>
      )}

      {/* 12. REVERENT LIGHT FOOTER */}
      <footer className="bg-[#1C1817] text-[#FAF8F5] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pb-12 border-b border-white/10 max-w-2xl mx-auto">
            <p className="font-cinzel text-lg sm:text-2xl text-[#D4A359] tracking-widest font-semibold">
              ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।
            </p>
            <p className="mt-2 text-xs text-[#A89F91] italic font-serif">
              "May all beings everywhere be peaceful, happy, and free from discord."
            </p>
          </div>

          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-mono text-[#A89F91]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#7A1F2D] text-[#D4A359] flex items-center justify-center border border-[#D4A359]/40 shadow-sm">
                  <span className="font-cinzel text-base font-bold">ॐ</span>
                </div>
                <span className="font-cinzel text-sm font-bold tracking-wider text-[#FAF8F5]">
                  BALLARAT HINDU TEMPLE & CULTURAL CENTRE
                </span>
              </div>
              <p className="text-xs text-[#A89F91] leading-relaxed max-w-md">
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

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8C8477]">
            <p>© {new Date().getFullYear()} Ballarat Hindu Temple & Cultural Centre Inc. All rights reserved.</p>
            <p>Designed under Vedic Vastu Shastra principles for Western Regional Victoria.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
