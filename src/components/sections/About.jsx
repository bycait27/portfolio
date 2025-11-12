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
            Hello, I&apos;m <span className="font-semibold text-text-secondary">Caitlin</span> – a Computer Science master&apos;s
            student at DePaul University specializing in DevOps Engineering and Site Reliability Engineering. I build reliable, 
            automated systems through CI/CD pipelines, containerization, and performance optimization.
          </p>

          <p className="text-xl leading-relaxed mb-8 text-text-primary">
            When I&apos;m not coding, I am most likely getting lost in a book, playing video games, or hanging out with
            my dog!
          </p>

          <div className="bg-background-secondary rounded-lg p-6 border-l-4 border-text-highlight">
            <p className="text-lg text-text-primary mb-0"> 
              Currently seeking Summer 2026 internships in <strong>DevOps Engineering, Site Reliability Engineering (SRE), or Platform Engineering</strong>. <br></br><br></br>

              <strong>Focus areas:</strong> CI/CD automation, containerization, system reliability, and performance optimization. <br></br><br></br>

              📍 Based in Chicago | Open to remote opportunities.
            </p>
          </div>

          <div className="flex text-text-primary font-bold justify-center items-center w-full px-4 py-4 mt-4">
            <a className="text-text-secondary rounded-md border border-text-secondary px-3 py-1 hover:bg-text-secondary hover:text-background-primary transition-colors flex items-center gap-2" href="/files/resume-2025.pdf" target="_blank">
                <span>View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}