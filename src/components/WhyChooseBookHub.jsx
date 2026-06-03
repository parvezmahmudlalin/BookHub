const WhyChooseBookHub = () => {
  const features = [
    {
      title: "Extensive Collection",
      description:
        "Explore books across Story, Tech, and Science categories.",
      icon: "📚",
    },
    {
      title: "Easy Borrowing",
      description:
        "Borrow books in seconds with a simple and user-friendly experience.",
      icon: "⚡",
    },
    {
      title: "Always Available",
      description:
        "Access your favorite books anytime from anywhere.",
      icon: "🌍",
    },
    {
      title: "Smart Discovery",
      description:
        "Find your next favorite read through curated selections.",
      icon: "🔍",
    },
  ];

  return (
    <section className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose BookHub?</h2>
        <p className="text-gray-500 mt-2">
          Designed to make reading easier, smarter, and more enjoyable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>

            <h3 className="text-xl font-semibold mb-2">
              {feature.title}
            </h3>

            <p className="text-sm text-gray-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseBookHub;