import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Stellerindustries",
    description: "A business website built for a client — clean, responsive landing page with modern design",
    tags: ["HTML", "CSS", "Business"],
    url: "https://benjaminvantonder.github.io/Stellerindustries/",
    repo: "https://github.com/benjaminvantonder/Stellerindustries",
  },
  {
    title: "lokkie-bos",
    description: "Web application project showcasing interactive UI and responsive design patterns",
    tags: ["TypeScript", "React", "Web App"],
    url: "https://benjaminvantonder.github.io/lokkie-bos/",
    repo: "https://github.com/benjaminvantonder/lokkie-bos",
  },
  {
    title: "Orc-TD",
    description: "Tower defense game built from scratch — enemy waves, defense placement, and game mechanics",
    tags: ["JavaScript", "Game", "HTML5"],
    url: "https://orc-fbmnsyka3-jeprochs-projects.vercel.app/",
    repo: "https://github.com/benjaminvantonder/Orc-TD",
  },
  {
    title: "fuhri-server-coordinates",
    description: "Coordinate tracking utility for game servers — real-time position data visualization",
    tags: ["TypeScript", "Utility", "Real-time"],
    url: "https://benjaminvantonder.github.io/fuhri-server-coordinates/",
    repo: "https://github.com/benjaminvantonder/fuhri-server-coordinates",
  },
  {
    title: "Learn-html",
    description: "An interactive learning platform for HTML fundamentals — built to help beginners get started with web development",
    tags: ["TypeScript", "Education", "Interactive"],
    url: "https://html4u.vercel.app",
    repo: "https://github.com/benjaminvantonder/Learn-html",
  },
  {
    title: "To-Do App",
    description: "A clean, functional task management app with local storage persistence and intuitive UI",
    tags: ["JavaScript", "Productivity", "Vanilla JS"],
    url: "https://to-do-app-nu-snowy.vercel.app",
    repo: "https://github.com/benjaminvantonder/To-Do-app",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Projects & Work
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A selection of projects I've built — from client sites to open-source tools and games
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-40 flex items-center justify-center">
                  <Github className="w-16 h-16 text-slate-600" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-800"
                    >
                      <Github className="w-4 h-4" /> Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
