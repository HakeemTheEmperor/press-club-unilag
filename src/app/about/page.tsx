import { ArrowLeft, Newspaper, Users, Zap } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/scroll-animation";

export const metadata: Metadata = {
  title: "Unilag Press Club | About",
  description:
    "Unilag Press Club is a vibrant community of student journalists and media enthusiasts dedicated to excellence in reporting and storytelling.",
};

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Back Link */}
{/*       <div className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative border-b border-border py-20 bg-background overflow-hidden">
         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <ScrollAnimation direction="right" className="flex flex-col gap-6 z-10">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                    About <span className="text-primary">Unilag Press Club</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                    We are a dynamic community of student journalists and media
                    enthusiasts dedicated to excellence in reporting, storytelling,
                    and media literacy at the University of Lagos.
                    </p>
                 </ScrollAnimation>
                 
                 <ScrollAnimation direction="left" delay={0.2} className="relative">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl group">
                        <Image 
                            src="/images/about/excos.jpeg" 
                            alt="Press Club Studio" 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                         <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none" />
                    </div>
                     {/* Decorative Blob */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
                 </ScrollAnimation>
            </div>
         </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="border-b border-border py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Newspaper,
                title: "Our Mission",
                description:
                  "We are committed to promoting excellent journalism and media literacy among students. Our mission is to create a platform where voices are heard, stories matter, and the truth is reported with integrity.",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                icon: Users,
                title: "Our Community",
                description:
                  "Build connections with fellow journalists, writers, and media enthusiasts. We foster a supportive environment where members collaborate, learn from each other, and grow together in their creative and professional pursuits.",
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                icon: Zap,
                title: "Our Excellence",
                description:
                  "We strive for excellence in every story we tell. Through workshops, mentorship programs, and hands-on projects, we develop the next generation of innovative and responsible journalists.",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
            ].map((item, index) => (
               <ScrollAnimation key={index} delay={index * 0.1} className="flex flex-col gap-6 p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`h-14 w-14 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`h-7 w-7 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
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

      {/* History */}
      <section className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <ScrollAnimation className="lg:col-span-4">
                <div className="sticky top-24">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                    Our Story
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mb-8" />
                    <p className="text-lg text-muted-foreground">
                        From humble beginnings to a campus institution.
                    </p>
                </div>
            </ScrollAnimation>
            <div className="lg:col-span-8">
                <ScrollAnimation delay={0.2} className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px]">
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
                    related fields, carrying with them the values and skills honed
                    right here.
                  </p>
                  <p>
                    Today, we continue our mission to amplify student voices,
                    promote media literacy, and foster a culture of excellence in
                    journalism. We remain committed to covering stories that matter
                    and engaging with our community in meaningful ways, adapting
                    to the ever-changing landscape of digital media while staying
                    true to our core principles.
                  </p>
                </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
