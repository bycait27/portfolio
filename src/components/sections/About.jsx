export default function About() {
  return (
    <div className="flex flex-col justify-center items-center p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-text-primary">
          About Me 👩🏻‍💻
        </h1>
        
        <div className="p-6\8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-text-primary">
              Hello, I&apos;m <span className="font-semibold text-indigo-500">Caitlin Ash</span> – 
              a software engineer and Master&apos;s student in Computer Science with a passion 
              for creating meaningful digital experiences.
            </p>
            
            <p className="text-lg leading-relaxed mb-8 text-text-primary">
              I believe great software comes from combining technical excellence with deep 
              understanding of user needs. Whether building a responsive web application or 
              architecting a complex backend system, I focus on writing clean, maintainable 
              code that solves real problems.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">
                What sets me apart:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-3 mt-1">•</span>
                  <span className="text-text-primary">
                    Full-stack applications with automated deployment pipelines
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-3 mt-1">•</span>
                  <span className="text-text-primary">
                    Enterprise development with Java, Spring Boot, and modern architectural patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-3 mt-1">•</span>
                  <span className="text-text-primary">
                    Strong foundation in computer science fundamentals and algorithmic thinking
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-3 mt-1">•</span>
                  <span className="text-text-primary">
                    Experience with the complete software development lifecycle
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-3 mt-1">•</span>
                  <span className="text-text-primary">
                    Proven ability to learn new technologies quickly and apply them effectively
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <p className="text-lg text-text-primary mb-0">
                I&apos;m actively seeking opportunities to contribute to innovative engineering 
                teams where I can continue learning, building impactful software, and growing 
                as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}