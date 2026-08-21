import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="cta-section">

      <div className="container">

        {/* =====================================================
            TOP LABEL
            ===================================================== */}

        <div className="cta-top">

          <span className="cta-index">
            04
          </span>

          <span className="cta-label">
            LET'S BUILD SOMETHING
          </span>

          <span className="cta-line"></span>

        </div>


        {/* =====================================================
            MAIN CONTENT
            ===================================================== */}

        <div className="cta-content">

          <h2>
            Your next
            <span>digital move</span>
            starts here.
          </h2>


          <div className="cta-side">

            <p>
              Have an idea, a business problem, or a product
              that needs to be built properly?
            </p>

            <p>
              Forgepoint turns ideas into reliable digital
              solutions through development, design, and
              quality engineering.
            </p>


            <Link
              to="/contact"
              className="cta-button"
            >
              <span>
                Start a Conversation
              </span>

              <span className="cta-arrow">
                ↗
              </span>
            </Link>

          </div>

        </div>


        {/* =====================================================
            BOTTOM SYSTEM BAR
            ===================================================== */}

        <div className="cta-bottom">

          <div className="cta-services">

            <span>
              SOFTWARE
            </span>

            <span>
              WEBSITES
            </span>

            <span>
              QUALITY ASSURANCE
            </span>

          </div>


          <div className="cta-status">

            <span className="status-dot"></span>

            <span>
              READY TO BUILD
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CallToAction;