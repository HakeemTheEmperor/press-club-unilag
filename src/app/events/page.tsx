import { Calendar, MapPin, Users } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Monthly Editorial Meeting",
      date: "Every First Monday",
      time: "3:00 PM - 5:00 PM",
      location: "Press Club Office",
      description:
        "Gather with fellow members to discuss upcoming articles, plan stories, and share ideas.",
    },
    {
      title: "Journalism Workshop",
      date: "December 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Main Auditorium",
      description:
        "Learn advanced reporting techniques from experienced journalists. Open to all students.",
    },
    {
      title: "Photography Contest",
      date: "January 2026",
      time: "Submission Deadline",
      location: "Online",
      description:
        "Showcase your photography skills and compete with other talented students for amazing prizes.",
    },
    {
      title: "Press Conference Coverage",
      date: "January 20, 2026",
      time: "1:00 PM - 3:00 PM",
      location: "Senate Building",
      description:
        "Live coverage of the university leadership press conference. Get hands-on reporting experience.",
    },
    {
      title: "Blog Writing Masterclass",
      date: "February 5, 2026",
      time: "4:00 PM - 6:00 PM",
      location: "Conference Room",
      description:
        "Develop your blogging skills with tips on engaging writing, SEO, and audience engagement.",
    },
    {
      title: "Annual Press Club Awards",
      date: "March 15, 2026",
      time: "6:00 PM - 9:00 PM",
      location: "Grand Hall",
      description:
        "Celebrate outstanding journalism contributions and honor our most prolific members.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
              Upcoming <span className="text-primary">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join us for workshops, contests, and community gatherings
              throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Users className="h-5 w-5 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
