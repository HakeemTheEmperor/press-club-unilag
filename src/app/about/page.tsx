import { ArrowLeft, Newspaper, Users, Zap } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unilag Press Club | About",
  description:
    "Unilag Press Club is a vibrant community of student journalists and media enthusiasts dedicated to excellence in reporting and storytelling.",
};

export default function About() {
  return (
    <>
      {/* Back Link */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
              About <span className="text-primary">Unilag Press Club</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We are a dynamic community of student journalists and media
              enthusiasts dedicated to excellence in reporting, storytelling,
              and media literacy at the University of Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="border-b border-border py-20 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Newspaper className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to promoting excellent journalism and media
                  literacy among students. Our mission is to create a platform
                  where voices are heard, stories matter, and the truth is
                  reported with integrity.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Our Community
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build connections with fellow journalists, writers, and media
                  enthusiasts. We foster a supportive environment where members
                  collaborate, learn from each other, and grow together in their
                  creative and professional pursuits.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Our Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive for excellence in every story we tell. Through
                  workshops, mentorship programs, and hands-on projects, we
                  develop the next generation of innovative and responsible
                  journalists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="border-b border-border py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Unilag Press Club was founded with the vision of creating a
                vibrant community of student journalists and media professionals
                at the University of Lagos. What started as a small group of
                passionate writers and reporters has grown into one of the most
                active student organizations on campus.
              </p>
              <p>
                Over the years, we have published countless articles, organized
                engaging workshops, and created multimedia content that
                resonates with the university community. Our members have gone
                on to pursue careers in journalism, media, communications, and
                related fields.
              </p>
              <p>
                Today, we continue our mission to amplify student voices,
                promote media literacy, and foster a culture of excellence in
                journalism. We remain committed to covering stories that matter
                and engaging with our community in meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
