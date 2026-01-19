import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import ScrollAnimation from "@/components/ui/scroll-animation";

export const metadata: Metadata = {
  title: "Unilag Press Club - Student Journalism & Media",
  description:
    "Unilag Press Club is a vibrant community of student journalists and media enthusiasts dedicated to excellence in reporting and storytelling.",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative border-b border-border bg-background selection:bg-primary/20">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollAnimation
              direction="right"
              className="flex flex-col gap-8 z-10"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Recruiting New Members
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center md:text-left font-bold tracking-tight text-balance leading-[1.1]">
                  Amplify{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
                    Student Voices
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg text-center md:text-left text-balance leading-relaxed">
                  Join Unilag Press Club and tell stories that matter. Report
                  with integrity, write with passion, and engage with your
                  community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
                >
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-base font-semibold text-foreground hover:bg-muted hover:border-primary/50 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              direction="left"
              delay={0.2}
              className="relative group"
            >
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay" />
                <Image
                  src="/images/home/hero.jpg"
                  alt="Press Club Members"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl -z-10" />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative border-b border-border py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Empowering Student Journalists
            </h2>
            <p className="text-xl text-muted-foreground">
              We offer a range of activities and opportunities to help you
              develop your journalism and media skills in a professional
              environment.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "News Articles",
                description:
                  "Report on campus events and important stories from our community.",
                color: "bg-blue-500/10 text-blue-500",
              },
              {
                title: "Workshops",
                description:
                  "Learn from experienced journalists and media professionals.",
                color: "bg-green-500/10 text-green-500",
              },
              {
                title: "Blog Posts",
                description:
                  "Share your perspectives and insights on topics that matter.",
                color: "bg-purple-500/10 text-purple-500",
              },
              {
                title: "Multimedia",
                description:
                  "Create podcasts, videos, and visual stories that engage.",
                color: "bg-orange-500/10 text-orange-500",
              },
            ].map((item, index) => (
              <ScrollAnimation
                key={index}
                delay={index * 0.1}
                className="group h-full"
              >
                <div className="h-full rounded-2xl border border-border bg-background p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6`}
                  >
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Carousel Section */}
      {/*       <section className="py-24 sm:py-32 border-b border-border bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation className="mb-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Recent Highlights
                    </h2>
                    <div className="h-px flex-1 bg-border ml-8 hidden sm:block" />
                </div>
                <Carousel />
            </ScrollAnimation>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <ScrollAnimation
          direction="up"
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight">
            Ready to Make Your Mark?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re an experienced journalist or just getting
            started, there&apos;s a place for you in Unilag Press Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-primary/20"
            >
              Join the Club
            </Link>
            <Link
              href="https://blog.unilagpress.com"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-10 py-4 text-lg font-semibold text-foreground hover:bg-background hover:border-primary/50 transition-all"
            >
              Read Our Blogs
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
