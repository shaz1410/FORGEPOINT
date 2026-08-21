function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Quality First",
      text: "Reliable, maintainable, and thoughtfully engineered solutions.",
    },
    {
      number: "02",
      title: "Business Focused",
      text: "Technology designed around your goals, users, and business needs.",
    },
    {
      number: "03",
      title: "Modern Technology",
      text: "Modern development practices that keep your solutions ready to grow.",
    },
    {
      number: "04",
      title: "Clear Communication",
      text: "A transparent process where you always know what is happening.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">

        <div className="why-header">

          <span className="why-label">
            WHY CHOOSE US
          </span>

          <h2>
            We build with
            <span>purpose.</span>
            <span>precision.</span>
            <span>quality.</span>
          </h2>

          <p>
            Technology should solve real problems. Our approach combines
            thoughtful development, quality engineering, and a clear
            understanding of your business.
          </p>

        </div>

        <div className="why-reasons">

          {reasons.map((reason) => (
            <article className="why-reason" key={reason.number}>

              <span className="why-reason-number">
                {reason.number}
              </span>

              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>

              <span className="why-arrow">↗</span>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;