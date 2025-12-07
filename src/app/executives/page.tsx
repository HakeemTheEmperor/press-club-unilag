import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Unilag Press Club | Executives",
  description:
    "Meet the leadership team of the Unilag Press Club, responsible for guiding the organization’s programs, editorial direction, and student initiatives.",
};

export default function Executives() {
  const executives = [
    {
      name: "Mariam Tijani",
      position: "President",
      email: "chioma@unilagpress.com",
    },
    {
      name: "Abdulkareem Abdulquadri",
      position: "Vice President",
      email: "tunde@unilagpress.com",
    },
    {
      name: "Olufisayo Sorungbe",
      position: "General Secretary",
      email: "zainab@unilagpress.com",
    },
    {
      name: "Idowu Tayseerah",
      position: "Asst. General Secretary",
      email: "zainab@unilagpress.com",
    },
    {
      name: "Aliyah Isiaka",
      position: "Head. Finance Team",
      email: "amara@unilagpress.com",
    },
    {
      name: "Arowolo Feyisayo",
      position: "Head. Media Team",
      email: "ikechukwu@unilagpress.com",
    },
    {
      name: "Abioye Wafeequah",
      position: "Head. Content & Publicity",
      email: "david@unilagpress.com",
    },
    {
      name: "Toluwalase Akinyemi",
      position: "Head. Tech Team",
      email: "david@unilagpress.com",
    },
    {
      name: "Oluwatunmise Adekanbi",
      position: "Head. Social Impact",
      email: "david@unilagpress.com",
    },
    {
      name: "Ajibola Ayodeji",
      position: "Head. People & Logistics",
      email: "david@unilagpress.com",
    },
    {
      name: "Gabriella Harrison",
      position: "Asst Head. Finance Team",
      email: "david@unilagpress.com",
    },
    {
      name: "Grace Olaoluwa-David",
      position: "Asst Head. Media Team",
      email: "david@unilagpress.com",
    },
  ];

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
              Meet Our <span className="text-primary">Executives</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              The dedicated team leading Unilag Press Club and driving our
              mission forward.
            </p>
          </div>
        </div>
      </section>

      {/* Executives Grid */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow"
              >
                <div className="h-24 w-24 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {executive.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {executive.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {executive.position}
                </p>
                <a
                  href={`mailto:${executive.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {executive.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
