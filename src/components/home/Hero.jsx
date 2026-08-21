import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        {/* =====================================================
            HERO CONTENT
            ===================================================== */}

        <div className="hero-content">

          <span className="hero-label">
            SOFTWARE & DIGITAL SOLUTIONS
          </span>

          <h1>
            We build digital solutions
            <span> that move businesses forward.</span>
          </h1>

          <p>
            Forgepoint helps businesses turn ideas into reliable,
            scalable, and user-friendly digital products through
            software development, websites, and quality assurance.
          </p>


          {/* ===================================================
              HERO ACTIONS
              =================================================== */}

          <div className="hero-actions">

            <Link
              to="/contact"
              className="hero-primary-action"
            >
              <span>Start a Project</span>

              <span className="action-arrow">
                ↗
              </span>
            </Link>


            <Link
              to="/portfolio"
              className="hero-secondary-action"
            >
              View Our Work

              <span>
                →
              </span>
            </Link>

          </div>


          {/* ===================================================
              HERO PRINCIPLES
              =================================================== */}

          <div className="hero-principles">

            <div className="hero-principle">

              <span className="principle-number">
                01
              </span>

              <div>
                <strong>
                  QUALITY
                </strong>

                <span>
                  ENGINEERED
                </span>
              </div>

            </div>


            <div className="hero-principle">

              <span className="principle-number">
                02
              </span>

              <div>
                <strong>
                  BUSINESS
                </strong>

                <span>
                  FOCUSED
                </span>
              </div>

            </div>


            <div className="hero-principle">

              <span className="principle-number">
                03
              </span>

              <div>
                <strong>
                  SCALE
                </strong>

                <span>
                  READY
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            HERO VISUAL
            ===================================================== */}

        <div className="hero-visual">

          <div className="hero-system">

            {/* =================================================
                SYSTEM HEADER
                ================================================= */}

            <div className="system-top">

              <span>
                FORGEPOINT
              </span>

              <span>
                FP / 001
              </span>

            </div>


            {/* =================================================
                ANIMATED SYSTEM
                ================================================= */}

            <div className="system-main">

              {/* Animated orbit paths */}

              <div className="system-orbit orbit-one">
                <span className="orbit-particle"></span>
              </div>

              <div className="system-orbit orbit-two">
                <span className="orbit-particle"></span>
              </div>

              <div className="system-orbit orbit-three">
                <span className="orbit-particle"></span>
              </div>


              {/* =================================================
                  CENTRAL FORGEPOINT CORE
                  ================================================= */}

              <div className="system-core">

                <span className="system-core-small">
                  DIGITAL
                </span>

                <strong>
                  FP
                </strong>

                <span className="system-core-small">
                  SYSTEMS
                </span>

              </div>


              {/* =================================================
                  PROCESS NODES
                  ================================================= */}

              <div className="system-node node-one">

                <span>
                  01
                </span>

                <strong>
                  IDEA
                </strong>

              </div>


              <div className="system-node node-two">

                <span>
                  02
                </span>

                <strong>
                  BUILD
                </strong>

              </div>


              <div className="system-node node-three">

                <span>
                  03
                </span>

                <strong>
                  TEST
                </strong>

              </div>


              <div className="system-node node-four">

                <span>
                  04
                </span>

                <strong>
                  DELIVER
                </strong>

              </div>


              {/* =================================================
                  FLOATING TECHNICAL MARKERS
                  ================================================= */}

              <span className="system-marker marker-one">
                +01
              </span>

              <span className="system-marker marker-two">
                98%
              </span>

              <span className="system-marker marker-three">
                FP//
              </span>

            </div>


            {/* =================================================
                SYSTEM FOOTER
                ================================================= */}

            <div className="system-bottom">

              <div>

                <span>
                  SOFTWARE
                </span>

                <span>
                  WEBSITES
                </span>

                <span>
                  QUALITY
                </span>

              </div>


              <span className="system-status">

                <i></i>

                SYSTEM ACTIVE

              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;