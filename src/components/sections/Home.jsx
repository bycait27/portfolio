export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary font-bold p-4 sm:p-8">
            <p className="p-2 sm:p-4 text-center">I&apos;m Caitlin Ash 👋🏻</p>
            <p className="p-2 sm:p-4 text-center">a <span className="bg-text-highlight rounded-md p-2">Software Engineer</span></p>
            <div className="flex flex-wrap m-4 sm:m-10 justify-center items-center max-w-xs sm:max-w-lg">
                <p className="text-lg sm:text-xl md:text-2xl text-center">
                    and graduate CS student building backend systems and infrastructure
                </p>
            </div>
        </div>
    );
};