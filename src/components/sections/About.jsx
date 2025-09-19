import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="A little bit about me and my tech journey."
          emoji="👩🏻‍💻" 
        />

        <div className='text-center font-bold pt-20'>
            Coming soon...stay tuned!
        </div>
        {/* TODO: maybe mention journey into tech */}
        {/* <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed mb-8 text-text-primary">
            Hello, I&apos;m <span className="font-semibold text-text-secondary">Caitlin Ash</span> – 
            a DevOps Engineer and Master&apos;s student in Computer Science with a passion 
            for building reliable, scalable infrastructure and automation systems.
          </p>
          
          <p className="text-lg leading-relaxed mb-8 text-text-primary">
            I believe great software delivery comes from combining robust infrastructure with 
            seamless deployment processes. Whether containerizing applications, designing CI/CD pipelines,
            or architecting cloud infrastructure, I focus on creating automated, maintainable systems that 
            enable teams to deploy confidently and frequently. 
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">
              What sets me apart:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-text-secondary mr-3 mt-1">•</span>
                <span className="text-text-primary">
                  Infrastructure as Code and automated deployment pipelines with Docker and cloud platforms
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-text-secondary mr-3 mt-1">•</span>
                <span className="text-text-primary">
                  Distributed systems expertise from both academic coursework and hands-on implementation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-text-secondary mr-3 mt-1">•</span>
                <span className="text-text-primary">
                  Programming in Go for infrastructure tools and automation scripts
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-text-secondary mr-3 mt-1">•</span>
                <span className="text-text-primary">
                  Strong foundation in Linux systems administration and networking concepts
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-text-secondary mr-3 mt-1">•</span>
                <span className="text-text-primary">
                  Experience with monitoring, logging, and incident response methodologies
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-text-secondary mr-3 mt-1">•</span>
                <span className="text-text-primary">
                  Self-driven learner who builds production-ready projects to master new technologies
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-background-secondary rounded-lg p-6 border-l-4 border-text-highlight">
            <p className="text-lg text-text-primary mb-0">
              I&apos;m actively seeking opportunities to contribute to engineering teams focused on 
              DevOps, Site Reliability, or Platform Engineering where I can help build the infrastructure 
              that powers reliable software delivery. 
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}