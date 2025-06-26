export default function SectionHeader({title, subtitle, emoji}) {
    return (
        <div className="text-center mb-12">
            {/* section header */}
            <h1 className="text-5xl font-bold text-text-primary mb-4">
                {title} {emoji}
            </h1>
            {/* section subtitle */}
            <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>
    );
}