import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNavigation } from "@/components/SiteNavigation";
import { SiteFooter } from "@/components/SiteFooter";
import templeHeroImage from "@/assets/bhtcc-vision-concept.jpg";
import shivaImage from "@/assets/sanctum-shiva.jpg";
import ganeshaImage from "@/assets/sanctum-ganesha.jpg";
import lampImage from "@/assets/temple-brass-lamp.jpg";
import bellImage from "@/assets/temple-bell-brass.jpg";
import prasadamImage from "@/assets/annadhanam-prasadam.jpg";
import gardensImage from "@/assets/vastu-gardens.jpg";
import {
  Image as ImageIcon,
  Maximize2,
  X,
  Info,
  Layers,
  Sparkles,
  Building,
  Heart,
  Trees,
} from "lucide-react";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<{
    id: string;
    title: string;
    category: string;
    src: string;
    tag: string;
    provenance: string;
    description: string;
  } | null>(null);

  const galleryItems = [
    {
      id: "g1",
      title: "Sacred Architectural Concept",
      category: "architecture",
      src: templeHeroImage,
      tag: "Proposed Masterplan",
      provenance: "Conceptual Architectural Rendering • Phase 1 Civil Works Active",
      description:
        "Proposed masterplan visualization of the traditional stone shikhara, entrance Rajagopuram, and pillared mandapa hall at 110 Vaggs Rd, Ross Creek VIC. Conceived strictly along classical Shilpa Shastra axes.",
    },
    {
      id: "g2",
      title: "Consecrated Lord Shiva Sanctum",
      category: "deities",
      src: shivaImage,
      tag: "Presiding Sanctum",
      provenance: "Vedic Sanctum Photography",
      description:
        "Sacred black granite Shivalinga enshrined in the garbhagriha, adorned with freshly harvested Bilva leaves, pure white jasmine garlands, and sacred vibhuti for daily Rudrabhishekam.",
    },
    {
      id: "g3",
      title: "Lord Ganesha Agamic Shrine",
      category: "deities",
      src: ganeshaImage,
      tag: "Vighnaharta",
      provenance: "Agamic Shrine Photography",
      description:
        "Carved south-Indian granite idol of Sri Vighnaharta Ganesha in sanctum niche, adorned with fragrant yellow and orange marigold garlands, red sindoor, and sacred offerings.",
    },
    {
      id: "g4",
      title: "Handcrafted Brass Kuthu Vilakku",
      category: "traditions",
      src: lampImage,
      tag: "Sacred Deepam",
      provenance: "Traditional Artifact Photography",
      description:
        "Multi-tiered South Indian ceremonial bronze oil lamp glowing with pure cotton wicks fed by organic sesame oil and ghee for daily Sandhya Deepa Aarti ceremonies.",
    },
    {
      id: "g5",
      title: "Resonant Bronze Temple Bell (Ghanta)",
      category: "traditions",
      src: bellImage,
      tag: "Sacred Ghanta",
      provenance: "Traditional Artifact Photography",
      description:
        "Traditional heavy brass hanging temple bell with ornate Nandi and lotus reliefs. Its chime produces a deep, harmonically rich 432Hz acoustic tone to clear mental distractions during prayer.",
    },
    {
      id: "g6",
      title: "Satvik Annadhanam Mahaprasadam",
      category: "community",
      src: prasadamImage,
      tag: "Food Seva",
      provenance: "Community Seva Photography",
      description:
        "Pure vegetarian Mahaprasad prepared with sacred mindfulness and served traditionally on fresh banana leaves — fragrant steamed rice, aromatic sambar, vegetable kootu, and payasam.",
    },
    {
      id: "g7",
      title: "5-Acre Vastu Meditation Parkland",
      category: "landscape",
      src: gardensImage,
      tag: "Ross Creek Sanctuary",
      provenance: "Landscape Photography",
      description:
        "The tranquil natural grounds at 110 Vaggs Rd, Ross Creek. Native Australian eucalyptus trees, walking trails, and reflection ponds integrated seamlessly with traditional Vastu geomancy.",
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1817] flex flex-col">
      <SiteNavigation />

      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#F3ECE2] border-b border-[#E5DACD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DED4C7] text-[#7A1F2D] text-xs font-mono uppercase tracking-widest mb-6">
              <ImageIcon className="w-3.5 h-3.5 text-[#C49A45]" />
              Visual Sanctuary Archives
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1817] tracking-tight leading-tight">
              Visual <span className="text-maroon-gradient">Gallery</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#554D46] leading-relaxed">
              Explore the architectural vision, consecrated granite sanctums, sacred brass ceremonial instruments, Annadhanam kitchen seva, and 5-acre native Victorian grounds.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Media Provenance Banner */}
      <div className="bg-white border-b border-[#E5DACD] py-3.5 px-4 text-xs font-mono text-[#554D46]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#7A1F2D] shrink-0" />
            <span>
              <strong>Provenance Notice:</strong> The temple exterior perspective is an artist's conceptual architectural rendering. Deities, brassware, prasadam, and native landscapes reflect authentic Sanatana Dharma traditions.
            </span>
          </div>
          <span className="text-[#7A1F2D] font-bold shrink-0">Click Any Image for High-Resolution Lightbox</span>
        </div>
      </div>

      {/* Filter Buttons & Gallery Grid */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Works" },
              { id: "architecture", label: "Masterplan Concept" },
              { id: "deities", label: "Sanctum Deities" },
              { id: "traditions", label: "Sacred Traditions" },
              { id: "community", label: "Annadhanam Seva" },
              { id: "landscape", label: "5-Acre Parkland" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === tab.id
                    ? "bg-[#7A1F2D] text-white shadow-md scale-105"
                    : "bg-white text-[#554D46] border border-[#E5DACD] hover:bg-[#F3ECE2]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid of Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#E5DACD] shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#F3ECE2]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-[#1C1817] text-xs font-mono font-medium shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#7A1F2D]" />
                      Expand View
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#7A1F2D] font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1C1817] group-hover:text-[#7A1F2D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#554D46] mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F3ECE2] text-[10px] font-mono text-[#7A1F2D]">
                    {item.provenance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] sm:max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-[60vh] sm:max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 bg-white space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F3ECE2] text-[#7A1F2D] font-mono text-xs font-bold uppercase tracking-wider">
                  {activeItem.tag}
                </span>
                <span className="text-xs font-mono text-[#554D46]">
                  {activeItem.provenance}
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#1C1817]">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#554D46] leading-relaxed">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
