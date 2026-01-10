"use client";

export default function Project() {
  const projects = [
    {
      title: "E-Commerce Platform Transformation",
      desc:
        "Built a scalable e-commerce platform handling 1M+ daily transactions with 99.99% uptime.",
      stats: ["400% Growth", "1M+ Users", "0.3s Load Time"],
      tags: ["React", "Node.js", "PostgreSQL", "Cloud"],
    },
    {
      title: "AI-Powered Analytics Dashboard",
      desc:
        "Developed an intelligent analytics platform using machine learning for real-time insights.",
      stats: ["98% Accuracy", "500+ Metrics", "Real-time"],
      tags: ["Python", "TensorFlow", "React", "BigQuery"],
    },
    {
      title: "Mobile Banking Application",
      desc:
        "Created a secure mobile banking app serving 2M+ users across iOS and Android.",
      stats: ["2M+ Users", "Bank-grade Security", "4.9★ Rating"],
      tags: ["React Native", "Security", "Firebase", "Payment APIs"],
    },
  ];

  return (
    <section className="relative w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our <span className="text-sky-400">Portfolio</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped companies
            achieve their goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                group rounded-2xl overflow-hidden
                bg-black/40 backdrop-blur-xl
                border border-sky-400/20
                hover:border-sky-400/50
                transition-all duration-300
              "
            >
              {/* Top image placeholder */}
              <div className="h-48 bg-gradient-to-br from-sky-400/20 to-cyan-500/10" />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {p.title}
                </h3>

                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  {p.desc}
                </p>

                <div className="my-4 h-px w-full bg-white/10" />

                <div className="flex flex-wrap gap-4 text-xs text-sky-400">
                  {p.stats.map((s, idx) => (
                    <span key={idx}>{s}</span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1 rounded-full text-xs
                        border border-sky-400/30
                        text-sky-400
                        bg-sky-400/5
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
