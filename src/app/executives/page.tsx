"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/scroll-animation";
import ExecutiveModal, { Executive } from "@/components/ui/executive-modal";

const EXECUTIVES: Executive[] = [
  {
    name: "Mariam Tijani",
    position: "President",
    email: "president@unilagpress.com",
    image: "/images/executives/mariam.jpeg",
    description: `Mariam Tijani is a 400-level Finance major. She is a campus journalist and an award winning creative writer.\n\nHer works have appeared in Daily Akokite, Fiery Scribe Review, Lolwe, Ikike Arts and elsewhere. She is an alum of the 2024 Sprinng Writing Fellowship and 2024 Nwokike Creative Writing Workshop.\n\nMariam served as the head of the welfare team for the 8th Ngozi Agbo Media Lecture, and as the head of finance and business for the club's 2024/2025 administration,.\n\nMariam loves reading during her free time.`,
    department: "Executive Council",
  },
  {
    name: "Abdulkareem Abdulquadri",
    position: "Vice President",
    email: "vp@unilagpress.com",
    image: "/images/executives/kareem.jpg",
    description:
      "Abdulkareem is a third-year student in the Department of Library and Information Science. A former Head of the Research and Intelligence Team, he brings a disciplined and analytical approach to his work. \n\nDriven by his faith and a strong commitment to integrity, he is dedicated to the growth and excellence of the Press Club.",
    department: "Executive Council",
  },
  {
    name: "Olufisayo Sorungbe",
    position: "General Secretary",
    email: "gensec@unilagpress.com",
    image: "/images/executives/fisayo.jpeg",
    description:
      "Olufisayo is a final year student of mass communication with a passion for creative writing, storytelling, and the digital media space.\n\nShe loves the art of turning ideas into stories that inform, inspire, and connect people to drive change. For her, every story is an opportunity to make an impact and leave a lasting impression.\n\nIn her free time, she enjoys watching movies, scrolling through TikToks, and learning new things online.",
    department: "Executive Council",
  },
  {
    name: "Idowu Tayseerah",
    position: "Asst. General Secretary",
    email: "asst.gensec@unilagpress.com",
    image: "/images/executives/tessy.jpeg",
    description: `Idowu Tayseerah, fondly known as Smiling Tessy, is a poet, learner, and educator—a soul truly "inked in rhymes." \n\nKnown for being the calm within the chaos while maintaining a fiery passion for her craft, she is guided by the 4 Ls: Live, Love, Learn, and Laugh. \n\nAs the Assistant General Secretary of the Press Club, Tayseerah combines her intelligence with the art of meaningful expression, dedicated to turning the club's shared aspirations into reality with purpose and heart.`,
    department: "Executive Council",
  },
  {
    name: "Aliyah Isiaka",
    position: "Head. Finance Team",
    email: "finance@unilagpress.com",
    image: "/images/executives/aliyah.jpeg",
    description: `Aliyah Isiaka is a 500-level student at the University of Lagos and a multifaceted professional serving as a Legal and Creative Writer, Tech Marketer, and Advocate for the Energy, Oil, and Gas sectors. \n\nHaving previously served as the Head of Legal for the Press Club, she brings a wealth of institutional knowledge and regulatory expertise to the team. \n\nWhen she isn't navigating complex legal landscapes or marketing tech, she enjoys the creative storytelling found in video games and anime.`,
    department: "Finance",
  },
  {
    name: "Arowolo Feyisayo",
    position: "Head. Media Team",
    email: "media@unilagpress.com",
    image: "/images/executives/feyisayo.jpg",
    description:
      "A final-year student in the Department of Mass Communication at the University of Lagos, Feyisayo is a media enthusiast dedicated to the art of storytelling. \n\nShe possesses a deep passion for using words to inform, educate, and inspire. Driven by her core values of growth, excellence, and impact, she is a lifelong learner who thrives on connecting with brilliant minds and exploring the creative arts",
    department: "Media",
  },
  {
    name: "Abioye Wafeequah",
    position: "Head. Content & Publicity",
    email: "publicity@unilagpress.com",
    image: "/images/executives/waffy.jpeg",
    description:
      "Waffy is a dynamic creative and storyteller currently serving as the Head of Content and Publicity for the UNILAG Press Club. She is a 300 level student of English (ART).\n\nShe is a YouTuber, model, poet, actor, and host with a deep passion for expression through art and media. \n\nAs a Millennium Fellow and advocate for mental health, she uses her platform to promote awareness, inspire young minds, and drive meaningful conversations. \n\nWaffy is also a proud contestant in the Miss UNILAG 2025 pageant, embodying confidence, creativity, and purpose.",
    department: "Editorial",
  },
  {
    name: "Toluwalase Akinyemi",
    position: "Head. Tech Team",
    email: "tech@unilagpress.com",
    image: "/images/executives/hte.jpeg",
    description:
      "Toluwalase Akinyemi is a software developer, freelancer, and law student at the University of Lagos with a strong passion for technology, innovation, and scalable software design.\n\nToluwalase is an Aspire Institute alumnus, a Cowrywise and Cleva Student Ambassador, and is also the Director of Research, AI Bloc at the Forum for Emerging Technology, University of Lagos",
    department: "Tech",
  },
  {
    name: "Oluwatunmise Adekanbi",
    position: "Head. Social Impact",
    email: "social@unilagpress.com",
    image: "/images/executives/tunmise.jpg",
    description:
      "Driving community engagement initiatives and ensuring our journalism serves the student body.",
    department: "Social Impact",
  },
  {
    name: "Ajibola Oluwatimileyin ",
    position: "Head. People & Logistics",
    email: "logistics@unilagpress.com",
    image: "/images/executives/timi.jpeg",
    description:
      "Ajibola Oluwatimileyin Ayodeji is an English Education student at the University of Lagos with a deep-seated passion for the worlds of broadcasting and journalism. \n\nA true lover of art, creativity, and music, Ajibola brings a thoughtful and observant perspective to his work. \n\nWhile naturally introverted, he excels in people management, priding himself on his ability to connect with others and lead with empathy and precision.",
    department: "Logistics",
  },
  {
    name: "Gabriella Harrison",
    position: "Asst Head. Finance Team",
    email: "asst.finance@unilagpress.com",
    image: "/images/executives/gabriella.jpeg",
    description:
      "Assisting in financial planning and record-keeping for the club.",
    department: "Finance",
  },
  {
    name: "Grace Olaoluwa-David",
    position: "Asst Head. Media Team",
    email: "asst.media@unilagpress.com",
    image: "/images/executives/grace.jpeg",
    description:
      "Grace is a 300-level English Education student with a profound passion for exploring the power of language. Currently serving as the Assistant Head of Media for the Press Club, she is dedicated to leveraging her writing skills to drive the club's strategic objectives. \n\nShe seamlessly blends her academic background in education with her media responsibilities, aiming to create impactful content while pursuing her long-term career aspirations.",
    department: "Media",
  },
];

export default function Executives() {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(
    null,
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(EXECUTIVES.map((ex) => ex.department))),
  ];

  const filteredExecutives =
    selectedCategory === "All"
      ? EXECUTIVES
      : EXECUTIVES.filter((ex) => ex.department === selectedCategory);

  return (
    <div className="overflow-x-hidden min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border py-20 bg-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(var(--foreground-rgb), 0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.1,
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
              Meet Our <span className="text-primary">Executives</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The dedicated team leading Unilag Press Club and driving our
              mission forward with passion and integrity.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-background border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Executives Grid */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredExecutives.map((executive, _index) => (
              <ScrollAnimation
                key={executive.name}
                className="group"
              >
                <button
                  onClick={() => setSelectedExecutive(executive)}
                  className="w-full text-left h-full flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-muted">
                    <Image
                      src={executive.image}
                      alt={executive.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-foreground font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Profile
                      </div>
                    </div>

                    {/* Department Badge */}
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-border shadow-sm">
                        {executive.department}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col grow border-t border-border">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {executive.name}
                    </h3>
                    <p className="text-primary/80 font-medium text-sm mb-4">
                      {executive.position}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border/50 w-full">
                      <span className="text-sm text-muted-foreground truncate block">
                        {executive.email}
                      </span>
                    </div>
                  </div>
                </button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <ExecutiveModal
        executive={selectedExecutive}
        onClose={() => setSelectedExecutive(null)}
      />
    </div>
  );
}
