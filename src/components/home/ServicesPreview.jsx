import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    category: "DIGITAL PRESENCE",
    title: "Website Development",
    shortTitle: "WEB",
    description:
      "High-performance websites designed to make your business credible, visible, and ready to grow.",
  },
  {
    number: "02",
    category: "SOFTWARE",
    title: "App Development",
    shortTitle: "APP",
    description:
      "Purpose-built applications engineered around your workflows, users, and business requirements.",
  },
  {
    number: "03",
    category: "QUALITY ENGINEERING",
    title: "Quality Assurance",
    shortTitle: "QA",
    description:
      "Structured testing that identifies problems early and gives your software the confidence to go live.",
  },
];

function ServicesPreview() {
  return (
    <section className="services-preview">

      <div className="container">

        {/* HEADER */}

        <div className="services-header">

          <div className="services-label">
            <span></span>
            WHAT WE DO
          </div>

          <div className="services-heading">

            <h2>
              Technology
              <span>built with purpose.</span>
            </h2>

            <p>
              From your first idea to the final product, Forgepoint
              combines development and quality engineering to create
              digital solutions that work in the real world.
            </p>

          </div>

        </div>


        {/* SERVICES */}

        <div className="services-list">

          {services.map((service) => (
            <article className="service-item" key={service.number}>

              <div className="service-item-number">
                {service.number}
              </div>

              <div className="service-item-main">

                <div className="service-item-meta">
                  {service.category}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="service-item-link"
                >
                  Explore service
                  <span>↗</span>
                </Link>

              </div>


              {/* LARGE BACKGROUND LETTER */}

              <div className="service-watermark">
                {service.shortTitle}
              </div>


              {/* ARROW */}

              <div className="service-item-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>


        {/* FOOTER */}

        <div className="services-footer">

          <span>
            FORGEPOINT
          </span>

          <span>
            DEVELOPMENT • SOFTWARE • QUALITY
          </span>

          <Link to="/services">
            View all services →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;