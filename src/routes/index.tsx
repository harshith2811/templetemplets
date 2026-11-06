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
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: TemplePage,
});

function TemplePage() {
  const [activeTab, setActiveTab] = useState<"architecture" | "facilities" | "worship" | "community">("architecture");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: "5.0 Acres", label: "Freehold Rural Sanctuary", desc: "110 Vaggs Rd, Ross Creek VIC" },
    { value: "$900,000+", label: "Capital Grants Secured", desc: "Victorian & Federal Support" },
    { value: "800+ Devotees", label: "Groundbreaking Attendance", desc: "Historic Bhoomi Pooja Ceremony" },
    { value: "Est. 2016", label: "Community Non-Profit", desc: "Registered Charity (ABN 13 397 829 440)" },
  ];

  const milestones = [
    {
      year: "2016",
      title: "Foundation & Incorporation",
      status: "Completed",
      description:
        "BHTCC was formally incorporated as an Association in Victoria with constitutional bylaws to serve Ballarat and the regional Indian diaspora.",
    },
    {
      year: "2018",
      title: "First Regional Ganesh Chaturthi",
      status: "Completed",
      description:
        "Inaugural flagship multicultural festival attracting hundreds of residents, fostering civic recognition and cultural unity in Ballarat.",
    },
    {
      year: "2020",
      title: "Ross Creek 5-Acre Land Secured",
      status: "Completed",
      description:
        "Acquired 5 pristine acres at 110 Vaggs Rd within the peaceful Golden Plains Shire, aligned strictly with sacred Vedic Vastu orientations.",
    },
    {
      year: "2022",
      title: "$900,000 Government Commitments",
      status: "Secured",
      description:
        "Secured Victorian State and Commonwealth funding commitments officially recognized in the Victorian Parliament for multicultural construction.",
    },
    {
      year: "2024",
      title: "Sacred Bhoomi Pooja & Groundbreaking",
      status: "Milestone",
      description:
        "Over 800 devotees, regional dignitaries, and spiritual leaders gathered on site for traditional groundbreaking rites and sacred Vedic consecration.",
    },
    {
      year: "2025–2026",
      title: "Phase 1: Civil Works & Sanctum Carving",
      status: "Active Execution",
      description:
        "Master earthworks, access roads, utility infrastructure, and traditional hand-carved stone temple sanctum fabrication.",
    },
  ];

  const pillars = [
    {
      title: "The Maha Gopuram & Vimana",
      category: "Sacred Architecture",
      desc: "Rising high into the regional sky, the traditional multi-tiered stone shikhara is drafted following ancient Shilpa Shastras and Agamic temple geometry, radiating serenity across the countryside.",
      highlight: "Hand-Carved Stone Proportions",
    },
    {
      title: "Pillared Mukhamandapa",
      category: "Open Colonnade",
      desc: "A wide, sculpted stone prayer hall welcoming natural cross-breezes and sunlight across the gardens, designed for circumambulation (Pradakshina) and spiritual congregation.",
      highlight: "Classical Vedic Masonry",
    },
    {
      title: "Consecrated Garbhagriha",
      category: "Sanctum Sanctorum",
      desc: "Dedicated holy shrines consecrated for Lord Shiva, Lord Ganesha, Lord Murugan, Lord Venkateswara, and Goddess Durga, upholding authentic daily Vedic rituals.",
      highlight: "Vastu Shastra Alignment",
    },
    {
      title: "Community Annadhanam Hall",
      category: "Mahaprasad & Service",
      desc: "Commercial-grade community kitchen serving sanctified vegetarian meals to hundreds of devotees and nourishing local food relief efforts in western Victoria.",
      highlight: "Pure Vegetarian Seva",
    },
    {
      title: "Vedic Academy & Library",
      category: "Cultural Education",
      desc: "Classrooms and an expansive learning center providing Sanskrit, Indian classical music, Carnatic vocal, yoga, and language lessons for children and youth.",
      highlight: "Intergenerational Heritage",
    },
    {
      title: "5-Acre Meditation Trails",
      category: "Ecological Harmony",
      desc: "Native Victorian landscape grounds featuring peaceful walking trails, lotus reflection ponds, herbal gardens, and quiet outdoor meditation spaces.",
      highlight: "Native Flora Preservation",
    },
  ];

  const faqs = [
    {
      q: "Where is the temple located and when can I visit the grounds?",
      a: "The temple sanctuary is located at 110 Vaggs Rd, Ross Creek VIC 3351, approximately 12 minutes from central Ballarat. As site civil works are actively progressing, public gatherings and special monthly poojas are announced through our community bulletin.",
    },
    {
      q: "What architectural style is being used for the temple?",
      a: "The complex is designed according to authentic Dravidian and Nagara stone temple architecture under strict Vedic Vastu Shastra principles, crafted from durable hand-sculpted granite and sandstone suited for regional Victoria's climate.",
    },
    {
      q: "How can I contribute to the temple construction fund?",
      a: "Devotees can support the ongoing civil infrastructure, sanctum stone carving, and community hall via direct Electronic Funds Transfer (EFT). All funds are transparently managed by BHTCC Incorporated (ABN: 13 397 829 440).",
    },
    {
      q: "Does BHTCC provide community welfare services?",
      a: "Yes. In addition to spiritual worship, BHTCC runs emergency food relief drives, dry-ration care packages for regional families in need, and provides cultural orientation for international students and newly arrived families in Ballarat.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#231F20] font-sans-body">
      {/* Top Heritage Notice Bar */}
      <div className="bg-[#7A1F2D] text-[#FAF8F5] px-4 py-2 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4A359] animate-pulse" />
            <span className="font-serif">Vedic Vastu Masterplan Milestone • 110 Vaggs Rd, Ross Creek VIC</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#FAF8F5]/80">
            <span>ABN: 13 397 829 440</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Registered Victorian Charity & Incorporated Association</span>
          </div>
        </div>
      </div>

      {/* Main Sanctuary Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Emblems */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-full bg-[#7A1F2D] text-[#D4A359] flex items-center justify-center border-2 border-[#D4A359]/40 shadow-sm transition-transform group-hover:scale-105">
              <span className="font-cinzel text-xl font-bold">ॐ</span>
            </div>
            <div>
              <span className="block font-cinzel text-base sm:text-lg font-bold tracking-wider text-[#7A1F2D] leading-tight">
                BALLARAT HINDU TEMPLE
              </span>
              <span className="block text-[11px] font-medium tracking-widest uppercase text-[#736B63]">
                & Cultural Centre • Victoria
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#3D3732]">
            <a href="#vision" className="hover:text-[#7A1F2D] transition-colors">
              The Vision
            </a>
            <a href="#architecture" className="hover:text-[#7A1F2D] transition-colors">
              Architecture
            </a>
            <a href="#sanctum" className="hover:text-[#7A1F2D] transition-colors">
              Sanctum
            </a>
            <a href="#milestones" className="hover:text-[#7A1F2D] transition-colors">
              Timeline
            </a>
            <a href="#community" className="hover:text-[#7A1F2D] transition-colors">
              Community Seva
            </a>
            <a href="#visit" className="hover:text-[#7A1F2D] transition-colors">
              Location
            </a>
          </nav>

          {/* Header Action */}
          <div className="flex items-center gap-3">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 bg-[#7A1F2D] hover:bg-[#5E1521] text-[#FAF8F5] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all hover:shadow-md"
            >
              <span>Temple Fund</span>
              <Heart className="w-3.5 h-3.5 text-[#D4A359]" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section Featuring the Architectural Concept Rendering */}
      <section id="vision" className="relative pt-8 pb-16 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Eyebrow */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 border border-[#D4A359]/60 bg-[#F5EFE6] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#7A1F2D] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Sacred Architectural Journal • Ross Creek Sanctuary</span>
            </div>
            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F1B1A] leading-[1.15] tracking-tight">
              A Sacred Sanctuary for Ballarat & Regional Victoria
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5C554E] leading-relaxed">
              Establishing regional Victoria's first traditional Vedic Hindu Temple, cultural education academy, and
              multipurpose community sanctuary across 5 peaceful rural acres at 110 Vaggs Road.
            </p>
          </div>

          {/* Grand Architectural Image Container */}
          <div className="relative rounded-sm overflow-hidden border border-[#DCD5C9] bg-[#EFE9DF] shadow-2xl">
            <div className="relative group cursor-pointer" onClick={() => setLightboxOpen(true)}>
              <img
                src={templeHeroImage}
                alt="Ballarat Hindu Temple and Cultural Centre traditional Vedic stone architectural concept rendering at Ross Creek"
                className="w-full h-[400px] sm:h-[520px] lg:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Architectural Label Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#1F1B1A]/85 backdrop-blur-md text-[#FAF8F5] px-4 py-2 border-l-2 border-[#D4A359] text-xs">
                <span className="block font-cinzel text-[#D4A359] font-bold tracking-widest text-[11px]">
                  ARCHITECTURAL CONCEPT RENDERING
                </span>
                <span className="text-[11px] text-[#FAF8F5]/80">
                  Vedic Vastu Shastra Proportions • Traditional Dravidian & Nagara Elements
                </span>
              </div>

              {/* Expand View Prompt */}
              <button
                type="button"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 hover:bg-white text-[#231F20] p-2.5 rounded-full shadow-md transition-all hover:scale-110"
                aria-label="View high-resolution rendering"
              >
                <Maximize2 className="w-4 h-4 text-[#7A1F2D]" />
              </button>

              {/* Bottom Context Banner */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1F1B1A]/95 via-[#1F1B1A]/75 to-transparent p-5 sm:p-7 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D4A359] mb-1">
                      Concept Visualization • Golden Plains Shire
                    </span>
                    <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                      Traditional carved Gopuram tower, pillared meditation mandapa, and expansive perimeter gardens
                      harmonized with native Victorian countryside eucalyptus trees during sacred morning sunlight.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-end text-xs text-[#D4A359] font-semibold tracking-wider uppercase bg-black/40 px-3 py-1.5 border border-[#D4A359]/30">
                    <Compass className="w-3.5 h-3.5" />
                    <span>East-Facing Vedic Orientation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5EFE6] border border-[#E4DDD1] p-5 text-center transition-all hover:border-[#7A1F2D]/40 hover:shadow-sm"
              >
                <span className="block font-serif-heading text-2xl sm:text-3xl font-bold text-[#7A1F2D]">
                  {item.value}
                </span>
                <span className="block mt-1 font-semibold text-xs uppercase tracking-wider text-[#231F20]">
                  {item.label}
                </span>
                <span className="block mt-0.5 text-[11px] text-[#736B63]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Pillars & Masterplan Details */}
      <section id="architecture" className="py-16 bg-[#F5EFE6] border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7A1F2D]">
                Architectural Compendium
              </span>
              <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1F1B1A]">
                Crafted by Vastu Principles & Timeless Shilpa Shastra
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#5C554E] leading-relaxed">
                Every component visible in the architectural vision has been carefully sited to adhere to ancient
                cosmic geometry while harmonizing with regional Victoria's native climate and topography.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#visit"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A1F2D] hover:text-[#5E1521] border-b border-[#7A1F2D] pb-0.5"
              >
                <span>Site Plan & Vaggs Rd Location</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Grid of Architectural Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-[#FAF8F5] border border-[#E6E0D4] p-6 flex flex-col justify-between transition-all hover:border-[#7A1F2D] hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7A1F2D] mb-3">
                    <span className="font-semibold uppercase tracking-wider">{pillar.category}</span>
                    <span className="text-[10px] bg-[#F5EFE6] px-2 py-0.5 border border-[#E0D7C8] font-mono">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-[#231F20] group-hover:text-[#7A1F2D] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#5C554E] leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#EFE9DF] flex items-center justify-between text-[11px] font-medium text-[#736B63]">
                  <span>{pillar.highlight}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A359]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Sanctum Deities & Temple Living Traditions */}
      <section id="sanctum" className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A1F2D]">Consecrated Shrines</span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1F1B1A]">
              Spiritual Center of Western Regional Victoria
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5C554E]">
              Designed to host authentic daily prayers, sacred homams, holy Hindu celebrations, and cultural rites for
              generations to come.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                deity: "Lord Shiva",
                form: "Mahadeva & Somaskanda",
                desc: "Supreme consciousness and eternal stillness; primary consecrated sanctum.",
              },
              {
                deity: "Lord Ganesha",
                form: "Vighnaharta",
                desc: "Remover of obstacles and guardian of every auspicious commencement.",
              },
              {
                deity: "Lord Murugan",
                form: "Karthikeya & Skanda",
                desc: "Protector of righteousness and embodiment of divine wisdom.",
              },
              {
                deity: "Lord Venkateswara",
                form: "Balaji / Maha Vishnu",
                desc: "Preserver of universal balance, blessing devotees with prosperity.",
              },
              {
                deity: "Goddess Durga",
                form: "Maha Shakti & Parvati",
                desc: "Divine feminine strength, compassion, and nurturing energy.",
              },
            ].map((d, index) => (
              <div
                key={index}
                className="bg-[#F5EFE6] border border-[#E4DDD1] p-5 text-center flex flex-col justify-between hover:bg-[#EFE7DC] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#7A1F2D]/10 text-[#7A1F2D] flex items-center justify-center mb-3">
                    <Sparkles className="w-4 h-4 text-[#D4A359]" />
                  </div>
                  <h4 className="font-serif-heading text-base font-bold text-[#1F1B1A]">{d.deity}</h4>
                  <span className="block text-[11px] font-medium text-[#7A1F2D] mt-0.5">{d.form}</span>
                  <p className="mt-2 text-xs text-[#5C554E] leading-relaxed">{d.desc}</p>
                </div>
                <div className="mt-4 text-[10px] uppercase font-bold tracking-widest text-[#736B63] pt-2 border-t border-[#E0D7C8]">
                  Vedic Consecration
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Traditions & Worship schedule box */}
          <div className="mt-12 bg-[#F5EFE6] border-l-4 border-[#7A1F2D] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A1F2D]">
                  Devotee Observances & Pujas
                </span>
                <h3 className="font-serif-heading text-xl font-bold text-[#1F1B1A] mt-1">
                  Major Holy Festivals & Monthly Congregations
                </h3>
                <p className="text-xs sm:text-sm text-[#5C554E] mt-1.5 max-w-2xl leading-relaxed">
                  Regular community poojas are held during landmark occasions including Maha Shivaratri, Ganesh
                  Chaturthi, Diwali, Navaratri, and Karthigai Deepam, featuring traditional bhajans, aarti, and pure
                  Mahaprasad.
                </p>
              </div>
              <a
                href="#visit"
                className="shrink-0 bg-[#7A1F2D] hover:bg-[#5E1521] text-[#FAF8F5] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Join Devotee Circle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Roadmap & Historical Milestones */}
      <section id="milestones" className="py-16 bg-[#F5EFE6] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A1F2D]">
              Historical Narrative & Progress
            </span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1F1B1A]">
              Journey of the Ballarat Hindu Community
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5C554E]">
              From grassroots community prayer gatherings in 2016 to parliamentary grant recognition and our 5-acre
              sanctuary groundbreaking.
            </p>
          </div>

          <div className="relative border-l border-[#D4A359]/60 ml-4 md:ml-32 space-y-8 pl-6 md:pl-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#FAF8F5] border-2 border-[#7A1F2D] group-hover:scale-125 transition-transform" />

                <div className="bg-[#FAF8F5] border border-[#E4DDD1] p-5 sm:p-6 transition-all hover:border-[#7A1F2D] hover:shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-serif-heading text-xl font-bold text-[#7A1F2D]">{m.year}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#231F20]">
                        {m.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F5EFE6] text-[#7A1F2D] px-2.5 py-0.5 border border-[#E0D7C8]">
                      {m.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Welfare, Education & Harmony */}
      <section id="community" className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7A1F2D]">Community & Seva</span>
              <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1F1B1A]">
                Beyond a Temple: A Living Centre for Regional Welfare
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#5C554E] leading-relaxed">
                The Ballarat Hindu Temple & Cultural Centre is committed to uplifting regional Victoria through
                practical social service, multicultural education, and crisis care.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Emergency Food Relief & Dry Rations",
                    desc: "Organizing dedicated food drives and nutritional packages for regional families and emergency shelters across the Golden Plains Shire.",
                  },
                  {
                    title: "Language & Intergenerational Heritage",
                    desc: "Preserving Sanskrit, Hindi, Tamil, Telugu, and Vedic philosophical teachings through structured youth classes and mentorship.",
                  },
                  {
                    title: "Multicultural Dialogue & Senior Care",
                    desc: "Collaborating with local councils, interfaith bodies, and regional healthcare groups to foster warmth, respect, and social inclusion.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#7A1F2D]/10 text-[#7A1F2D] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7A1F2D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#231F20]">{item.title}</h4>
                      <p className="text-xs text-[#5C554E] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote / Vision Card */}
            <div className="bg-[#F5EFE6] border-2 border-[#D4A359]/40 p-8 sm:p-10 relative">
              <span className="font-serif text-5xl text-[#D4A359]/40 absolute top-4 left-6 leading-none">“</span>
              <div className="relative pt-6">
                <blockquote className="font-serif-heading text-lg sm:text-xl italic text-[#1F1B1A] leading-relaxed">
                  To establish and maintain a traditional Hindu Temple and Cultural Centre serving Ballarat and Regional
                  Victoria, creating a peaceful sanctuary that nurtures spiritual growth, cultural heritage, and
                  harmonious multicultural community development.
                </blockquote>
                <div className="mt-6 pt-4 border-t border-[#E0D7C8] flex items-center justify-between">
                  <div>
                    <span className="block font-semibold text-xs uppercase tracking-wider text-[#7A1F2D]">
                      BHTCC Institutional Vision
                    </span>
                    <span className="block text-[11px] text-[#736B63]">
                      Adopted by Ballarat Hindu Community (2016–2026)
                    </span>
                  </div>
                  <Landmark className="w-6 h-6 text-[#D4A359]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting & Geographic Siting (110 Vaggs Rd) */}
      <section id="visit" className="py-16 bg-[#F5EFE6] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A1F2D]">Location & Visiting</span>
            <h2 className="mt-2 font-serif-heading text-3xl sm:text-4xl font-bold text-[#1F1B1A]">
              Visiting the 5-Acre Ross Creek Sanctuary
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5C554E]">
              Peacefully tucked within the Golden Plains Shire, easily accessible from Ballarat CBD and western
              metropolitan Melbourne.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#FAF8F5] border border-[#E6E0D4] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#7A1F2D]/10 text-[#7A1F2D] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-[#7A1F2D]" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#231F20]">Sanctuary Address</h3>
                <p className="mt-2 text-sm text-[#5C554E] leading-relaxed">
                  <strong>110 Vaggs Road</strong>
                  <br />
                  Ross Creek VIC 3351
                  <br />
                  Golden Plains Shire, Australia
                </p>
                <div className="mt-4 pt-4 border-t border-[#EFE9DF] text-xs text-[#736B63] space-y-1">
                  <p>• 12 minutes from Ballarat Railway Station</p>
                  <p>• 1 hour 20 minutes from Western Melbourne</p>
                  <p>• Connected via Glenelg Hwy / Sebastopol</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=110+Vaggs+Rd,+Ross+Creek+VIC+3351"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 border border-[#7A1F2D] text-[#7A1F2D] hover:bg-[#7A1F2D] hover:text-[#FAF8F5] py-2 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E6E0D4] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#7A1F2D]/10 text-[#7A1F2D] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-[#7A1F2D]" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#231F20]">Visiting Guidelines</h3>
                <p className="mt-2 text-sm text-[#5C554E] leading-relaxed">
                  As the sanctuary is in active construction phase, community congregational gatherings are conducted on
                  scheduled auspicious dates.
                </p>
                <div className="mt-4 pt-4 border-t border-[#EFE9DF] text-xs text-[#736B63] space-y-1">
                  <p>• Modest, respectful attire recommended</p>
                  <p>• Footwear removed prior to entering sanctum</p>
                  <p>• Ample parking available on-site</p>
                </div>
              </div>
              <div className="mt-6 p-3 bg-[#F5EFE6] text-[11px] text-[#7A1F2D] border border-[#E0D7C8] font-medium text-center">
                Check monthly newsletter for ceremonial dates
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E6E0D4] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#7A1F2D]/10 text-[#7A1F2D] flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-[#7A1F2D]" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#231F20]">Community Office</h3>
                <p className="mt-2 text-sm text-[#5C554E] leading-relaxed">
                  Reach out to the BHTCC management committee for pooja bookings, volunteer registrations, or general
                  inquiries.
                </p>
                <div className="mt-4 pt-4 border-t border-[#EFE9DF] text-xs text-[#736B63] space-y-2">
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
                    <span>Reg. No: A0096238K (Victoria)</span>
                  </p>
                </div>
              </div>
              <a
                href="mailto:info@ballarathindutemple.org.au"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[#7A1F2D] hover:bg-[#5E1521] text-[#FAF8F5] py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Send An Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Building Fund & Transparent Giving */}
      <section id="donate" className="py-16 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5EFE6] border-2 border-[#7A1F2D] p-8 sm:p-10 shadow-lg text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A1F2D]">
              Sacred Building Fund (Seva)
            </span>
            <h2 className="mt-2 font-serif-heading text-2xl sm:text-3xl font-bold text-[#1F1B1A]">
              Support the Ballarat Hindu Temple Construction
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#5C554E] max-w-xl mx-auto leading-relaxed">
              Every brick, stone carving, and native planting on our 5-acre property is made possible through the
              generous dedication of devotees, families, and community patrons.
            </p>

            {/* Direct Bank Transfer Details */}
            <div className="mt-8 bg-[#FAF8F5] border border-[#E0D7C8] p-6 max-w-lg mx-auto text-left space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-[#EFE9DF] pb-2">
                <span className="text-[#736B63] font-medium">Account Name:</span>
                <span className="font-semibold text-[#1F1B1A] text-right">
                  Ballarat Hindu Temple & Cultural Centre Inc.
                </span>
              </div>
              <div className="flex justify-between border-b border-[#EFE9DF] pb-2">
                <span className="text-[#736B63] font-medium">Bank:</span>
                <span className="font-semibold text-[#1F1B1A]">Commonwealth Bank of Australia</span>
              </div>
              <div className="flex justify-between border-b border-[#EFE9DF] pb-2">
                <span className="text-[#736B63] font-medium">BSB:</span>
                <span className="font-mono font-bold text-[#7A1F2D]">063-500</span>
              </div>
              <div className="flex justify-between border-b border-[#EFE9DF] pb-2">
                <span className="text-[#736B63] font-medium">Account Number:</span>
                <span className="font-mono font-bold text-[#7A1F2D]">1089 4231</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#736B63] font-medium">Reference:</span>
                <span className="font-medium text-[#1F1B1A] italic">YourName - TempleFund</span>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-[#736B63]">
              All contributions directly support the civil works, traditional temple stonemasonry, and community
              centre construction. Receipts issued upon email confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-[#F5EFE6] border-t border-[#E8E2D8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A1F2D]">Devotee Inquiries</span>
            <h2 className="mt-1 font-serif-heading text-2xl sm:text-3xl font-bold text-[#1F1B1A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#FAF8F5] border border-[#E6E0D4] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#231F20] hover:text-[#7A1F2D] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#7A1F2D] transition-transform duration-200 ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-[#5C554E] leading-relaxed border-t border-[#EFE9DF] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#D4A359] p-2"
            aria-label="Close modal"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={templeHeroImage}
              alt="High-resolution Ballarat Hindu Temple architectural vision rendering"
              className="w-full max-h-[85vh] object-contain rounded-sm"
            />
            <p className="mt-3 text-center text-xs text-[#FAF8F5]/80 font-sans">
              Ballarat Hindu Temple & Cultural Centre Architectural Vision Rendering • 110 Vaggs Rd, Ross Creek VIC
            </p>
          </div>
        </div>
      )}

      {/* Reverent Architectural Footer */}
      <footer className="bg-[#1F1B1A] text-[#FAF8F5] border-t border-[#D4A359]/30 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sanskrit Benediction */}
          <div className="text-center pb-12 border-b border-[#3D3732] max-w-2xl mx-auto">
            <p className="font-cinzel text-lg sm:text-xl text-[#D4A359] tracking-widest font-semibold">
              ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।
            </p>
            <p className="mt-2 text-xs text-[#A89F91] italic font-serif">
              "May all sentient beings be peaceful, healthy, and free from suffering."
            </p>
          </div>

          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-[#A89F91]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#7A1F2D] text-[#D4A359] flex items-center justify-center border border-[#D4A359]/40">
                  <span className="font-cinzel text-base font-bold">ॐ</span>
                </div>
                <span className="font-cinzel text-sm font-bold tracking-wider text-[#FAF8F5]">
                  BALLARAT HINDU TEMPLE & CULTURAL CENTRE
                </span>
              </div>
              <p className="text-xs text-[#A89F91] leading-relaxed max-w-md">
                An incorporated not-for-profit association (ABN: 13 397 829 440) dedicated to serving the spiritual,
                educational, and social welfare needs of western regional Victoria across our 5-acre rural sanctuary.
              </p>
              <div className="mt-4 text-[11px] text-[#736B63]">
                110 Vaggs Rd, Ross Creek VIC 3351 | Golden Plains Shire
              </div>
            </div>

            <div>
              <span className="block font-semibold uppercase tracking-wider text-[#FAF8F5] mb-3">
                Quick Navigation
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#vision" className="hover:text-[#D4A359] transition-colors">
                    The Vision
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="hover:text-[#D4A359] transition-colors">
                    Temple Architecture
                  </a>
                </li>
                <li>
                  <a href="#sanctum" className="hover:text-[#D4A359] transition-colors">
                    Sacred Sanctum
                  </a>
                </li>
                <li>
                  <a href="#milestones" className="hover:text-[#D4A359] transition-colors">
                    Timeline & History
                  </a>
                </li>
                <li>
                  <a href="#visit" className="hover:text-[#D4A359] transition-colors">
                    Location & Siting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="block font-semibold uppercase tracking-wider text-[#FAF8F5] mb-3">
                Governance & Contact
              </span>
              <ul className="space-y-2 text-xs">
                <li>ABN: 13 397 829 440</li>
                <li>Victoria Reg: A0096238K</li>
                <li>info@ballarathindutemple.org.au</li>
                <li>+61 3 5300 0000</li>
                <li className="pt-2 text-[#D4A359]">
                  <a href="#donate" className="hover:underline">
                    Support the Building Fund →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#3D3732] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#736B63]">
            <p>© {new Date().getFullYear()} Ballarat Hindu Temple & Cultural Centre Incorporated. All rights reserved.</p>
            <p>Designed under Vedic Vastu Shastra principles for Regional Victoria.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
