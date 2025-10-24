import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="About Me"
          subtitle=""
          emoji="👩🏻‍💻" 
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed mb-8 text-text-primary">
            Hello, I&apos;m <span className="font-semibold text-text-secondary">Caitlin Ash</span> – 
            a graduate Computer Science student specializing in backend systems and infrastructure. I'm currently 
            building a distributed system in <strong>Java</strong> with layered, client-server architecture, and 
            developing DevOps automation tools and backend services in <strong>Go</strong>.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-text-primary">
            When I'm not coding, I am most likely getting lost in a book, playing video games, or hanging out with
            my dog.
          </p>

          <div className="bg-background-secondary rounded-lg p-6 border-l-4 border-text-highlight">
            <p className="text-lg text-text-primary mb-0"> 
              Currently seeking Summer 2026 internships in backend engineering, DevOps, or SRE roles.
              Based in Chicago, open to remote opportunities.
            </p>
          </div>

          <div className="flex text-text-primary font-bold justify-center items-center w-full px-4 py-4 mt-4">
            <a className="text-text-secondary rounded-md border border-text-secondary px-3 py-1 hover:bg-text-secondary hover:text-background-primary transition-colors flex items-center gap-2" href="/files/resume.pdf" target="_blank">
                <span>View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}