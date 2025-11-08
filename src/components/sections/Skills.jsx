import SectionHeader from "../ui/SectionHeader";

export default function Skills() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Skills"
          subtitle=""
          emoji="⚙️"
        />
        
        <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border border-gray-700">
          {/* terminal window header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer transition-colors"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer transition-colors"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 cursor-pointer transition-colors"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">terminal</span>
          </div>

          {/* terminal content (skills) */}
          <pre className="text-green-400 font-mono text-sm leading-relaxed overflow-x-auto">
            <code>
              <span className="text-cyan-400">caitlin@portfolio</span><span className="text-white">:</span><span className="text-yellow-400">~$</span> cat skills{"\n"}
              {"\n"}
              <span className="text-purple-400">const</span> <span className="text-blue-300">skills</span> <span className="text-white">=</span> <span className="text-gray-300">{"{"}</span>{"\n"}
              <span className="text-gray-300">  </span><span className="text-red-300">devopsAndAutomation</span><span className="text-white">:</span> <span className="text-gray-300">[</span><span className="text-green-300">{'Docker'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'Docker Compose'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'CI/CD'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'GitHub Actions'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'Linux'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'Infrastructure as Code'}</span><span className="text-gray-300">],</span>{"\n"}
              <span className="text-gray-300">  </span><span className="text-red-300">siteReliability</span><span className="text-white">:</span> <span className="text-gray-300">[</span><span className="text-green-300">{'Performance Optimization'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'System Monitoring'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'Distributed Systems'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'Health Checks'}</span><span className="text-gray-300">],</span>{"\n"}
              <span className="text-gray-300">  </span><span className="text-red-300">programming</span><span className="text-white">:</span> <span className="text-gray-300">[</span><span className="text-green-300">{'Go'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'Java'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'JavaScript'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'Python'}</span><span className="text-gray-300">],</span>{"\n"}
              <span className="text-gray-300">  </span><span className="text-red-300">infrastructure</span><span className="text-white">:</span> <span className="text-gray-300">[</span><span className="text-green-300">{'Linux (Ubuntu)'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'VMs'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'SysAdmin'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'Networking'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'TCP/IP'}</span><span className="text-gray-300">],</span>{"\n"}
              <span className="text-gray-300">  </span><span className="text-red-300">databases</span><span className="text-white">:</span> <span className="text-gray-300">[</span><span className="text-green-300">{'PostgreSQL'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'MySQL'}</span><span className="text-gray-300">]</span>{"\n"}
              <span className="text-gray-300">  </span><span className="text-red-300">backend</span><span className="text-white">:</span> <span className="text-gray-300">[</span><span className="text-green-300">{'Node.js'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'Express.js'}</span><span className="text-gray-300">,</span> <span className="text-green-300">{'REST APIs'}</span><span className="text-gray-300">]</span>{"\n"}
              <span className="text-gray-300">{"}"}</span>{"\n"}
              {"\n"}
              <span className="text-cyan-400">caitlin@portfolio</span><span className="text-white">:</span><span className="text-yellow-400">~$</span> <span className="animate-pulse text-white">█</span>
              {"\n"}
              <span className="text-green-300">Ready for internship opportunities! 🚀</span>{"\n"} 
              {"\n"}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};