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
            student at DePaul University focused on backend software development with full-stack capabilities. I write code for 
            applications in Java and JavaScript, with a focus on building robust backend systems and REST APIs.
          </p>

          <p className="text-xl leading-relaxed mb-8 text-text-primary">
            I started with full-stack web development through a bootcamp, then pursued my master&apos;s to deepen 
            my programming fundamentals. I discovered my passion for Java and backend engineering through coursework 
            in distributed systems and algorithms. Now I&apos;m building Spring Boot applications and focusing on 
            enterprise Java development.
          </p>

          <p className="text-xl leading-relaxed mb-8 text-text-primary">
            When I&apos;m not coding, I am most likely getting lost in a book, playing video games, or hanging out with
            my dog!
          </p>

          <div className="bg-background-secondary rounded-lg p-6 border-l-4 border-text-highlight">
            <p className="text-lg text-text-primary mb-0"> 
              Currently seeking Summer 2026 internships in <strong>Backend Software Engineering or Full-Stack Development</strong>. <br></br><br></br>

              <strong>Focus areas:</strong> Java/Spring Boot, REST APIs, backend systems, and full-stack applications. <br></br><br></br>

              📍 Based in Chicago
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