export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center text-6xl text-text-primary font-bold p-8">
            <p className="p-4">I&apos;m Caitlin Ash 👋🏻</p>
            <p className="p-4">a <span className="bg-text-highlight rounded-md p-2">software engineer</span></p>
            <div className="flex flex-wrap m-10 justify-center items-center">
                <p className="text-2xl text-center">
                    and graduate CS student who<br /> 
                    loves everything tech!
                </p>
            </div>
        </div>
    );
};