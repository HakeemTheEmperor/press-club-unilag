import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unilag Press Club - Student Journalism & Media",
  description:
    "Unilag Press Club is a vibrant community of student journalists and media enthusiasts dedicated to excellence in reporting and storytelling.",
};
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
                Amplify <span className="text-primary">Student Voices</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg text-balance">
                Join Unilag Press Club and tell stories that matter. Report with
                integrity, write with passion, and engage with your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-4 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <BookOpen className="h-32 w-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border py-20 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We offer a range of activities and opportunities to help you
              develop your journalism and media skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "News Articles",
                description:
                  "Report on campus events and important stories from our community.",
              },
              {
                title: "Workshops",
                description:
                  "Learn from experienced journalists and media professionals.",
              },
              {
                title: "Blog Posts",
                description:
                  "Share your perspectives and insights on topics that matter.",
              },
              {
                title: "Multimedia",
                description:
                  "Create podcasts, videos, and visual stories that engage.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-background p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-border py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an experienced journalist or just getting
            started, there&apos;s a place for you in Unilag Press Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Become a Member
            </Link>
            <Link
              href="https://blog.unilagpress.com"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Read Our Blogs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
