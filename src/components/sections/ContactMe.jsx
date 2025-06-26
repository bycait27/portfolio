import SectionHeader from "../ui/SectionHeader";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactMe() {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                {/* section header */}
                <SectionHeader 
                    title="Contact Me"
                    subtitle="Please feel free to reach out, I would love to chat!"
                    emoji="💬"
                />
                
                {/* contact information */}
                <div className="flex justify-center">
                    <div className="bg-background-secondary rounded-lg p-8 shadow-lg max-w-md w-full">
                        {/* info header */}
                        <p className="text-xl text-text-primary mb-6 text-center">
                            Let&apos;s connect!
                        </p>
                        
                        <div className="space-y-6">
                            {/* email */}
                            <a 
                                href="mailto:caitlinba27@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-lg hover:bg-text-highlight/10 transition-colors group"
                            >
                                <FaEnvelope className="text-text-secondary text-xl group-hover:text-text-highlight transition-colors" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">Email</h3>
                                    <p className="text-text-primary/70">caitlinba27@gmail.com</p>
                                </div>
                            </a>
                            
                            {/* LinkedIn */}
                            <a 
                                href="https://linkedin.com/in/caitlin-ash"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg hover:bg-text-highlight/10 transition-colors group"
                            >
                                <FaLinkedin className="text-text-secondary text-xl group-hover:text-text-highlight transition-colors" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">LinkedIn</h3>
                                    <p className="text-text-primary/70">Connect with me</p>
                                </div>
                            </a>
                            
                            {/* GitHub */}
                            <a 
                                href="https://github.com/bycait27"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg hover:bg-text-highlight/10 transition-colors group"
                            >
                                <FaGithub className="text-text-secondary text-xl group-hover:text-text-highlight transition-colors" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">GitHub</h3>
                                    <p className="text-text-primary/70">Check out my code</p>
                                </div>
                            </a>
                        </div>
                        
                        <div className="mt-8 text-center">
                            <p className="text-text-primary/70 text-sm">
                                Looking forward to hearing from you! 🚀
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}