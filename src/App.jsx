import "./static/App.css";

const experience = [
  {
    company: "Frame Film & Audio Production LLC",
    time: "April 2026",
    location: "Wyoming, USA",
    type: "Startup / Production Company",
    text: "Worked with a creative production company environment, gaining experience around digital presentation, brand image and business-facing online presence.",
  },
  {
    company: "DNZ Construction & Development LTD",
    time: "June 2024",
    location: "London, UK",
    type: "Construction & Development Company",
    text: "Experience around a property and construction-focused business, helping understand how service companies need trust, clarity and strong enquiry paths online.",
  },
];

const projects = [
  {
    title: "Kingsman Barbers Project",
    type: "Barbershop Website Exemplar",
    goal: "Designed to increase appointment bookings and make the shop look more premium online.",
    features: [
      "Booking CTA",
      "Services & prices",
      "Gallery section",
      "Mobile-first layout",
    ],
    link: "https://kingsmanbarber.netlify.app",
  },
  {
    title: "Property Maintenance Exemplar",
    type: "Trade / Property Maintenance Website",
    goal: "Built around quote requests, local trust and practical service information.",
    features: [
      "Quote form",
      "Areas covered",
      "Service breakdown",
      "Job case notes",
    ],
    link: "https://greenpropertymaintenance.netlify.app/",
  },
];

const packages = [
  {
    name: "Starter Site",
    price: "£149",
    text: "A clean one-page website for small businesses that need a better online presence.",
    items: [
      "1-page website",
      "Mobile responsive",
      "Contact section",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business Site",
    price: "£249",
    text: "A fuller website for businesses that need more sections and stronger credibility.",
    items: [
      "Up to 5 pages",
      "Services / Gallery / Contact",
      "Mobile responsive",
      "Clear enquiry CTAs",
    ],
  },
  {
    name: "Premium Site",
    price: "£399",
    text: "A more polished website with stronger design direction and better conversion structure.",
    items: [
      "Custom design direction",
      "Animations where useful",
      "Before/after redesign",
      "3 revision rounds",
    ],
  },
];

function App() {
  return (
    <main className="site">
      <nav className="navbar">
        <a href="#" className="brand">
          gokcedevv
        </a>

        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="navButton">
          Book a Call
        </a>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Websites for businesses</p>

          <h1 className="interactiveTitle" aria-label="gokcedevv">
            {"gokcedevv".split("").map((letter, index) => (
              <span key={`${letter}-${index}`} style={{ "--i": index }}>
                {letter}
              </span>
            ))}
          </h1>

          <p className="heroText">
            Modern, mobile-friendly websites for businesses aimed at increasing
            their online presence. Built with React and designed around calls,
            bookings and quote requests.
          </p>

          <div className="heroActions">
            <a href="#work" className="button primary">
              View My Work
            </a>
            <a href="#contact" className="button secondary">
              Get a Website
            </a>
          </div>
        </div>

        <div className="heroPanel">
          <div className="panelTop">
            <span>Available from</span>
            <strong>18 June</strong>
          </div>

          <div className="panelMiddle">
            <p>Current offer</p>
            <h2>Starter websites from £149</h2>
            <span>
              Ideal for local businesses with outdated or weak websites.
            </span>
          </div>

          <div className="panelBottom">
            <p>Mobile responsive</p>
            <p>Fast turnaround</p>
            <p>Clear pricing</p>
          </div>
        </div>
      </section>

      <section className="credibilityStrip">
        <p>React-built</p>
        <p>Mobile-first</p>
        <p>Local business focused</p>
        <p>Clear enquiry structure</p>
      </section>

      <section id="work" className="workSection">
        <div className="sectionHeader">
          <p className="eyebrow">Selected work</p>
          <h2>Different websites for different business goals.</h2>
          <p>
            Each exemplar uses a different layout and conversion goal, instead
            of repeating the same template with new colours.
          </p>
        </div>

        <div className="projectStack">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className={`projectVisual visual${index + 1}`}>
                <span>{project.type}</span>
              </div>

              <div className="projectInfo">
                <p className="projectType">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.goal}</p>

                <div className="featureList">
                  {project.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="projectLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="servicesSection">
        <div className="servicesIntro">
          <p className="eyebrow">What I do</p>
          <h2>
            I redesign weak local business websites into clean, professional
            sites.
          </h2>
        </div>

        <div className="serviceGrid">
          <div>
            <span>01</span>
            <h3>Better first impression</h3>
            <p>
              Cleaner layout, stronger visuals and a website that does not look
              outdated.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Mobile-friendly structure</h3>
            <p>
              Most customers check local businesses on phones, so the mobile
              layout matters.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Clear enquiry path</h3>
            <p>
              Buttons, contact sections and calls-to-action built around the
              business goal.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Industry-specific design</h3>
            <p>
              A barber site should not look like a property maintenance site.
              Each layout is planned around the business.
            </p>
          </div>
        </div>
      </section>

      <section className="experienceSection">
        <div className="experienceIntro">
          <p className="eyebrow">Experience</p>
          <h2>
            From startups to companies, I understand how businesses need to
            present themselves online.
          </h2>
          <p>
            I have experience working around startups and established companies,
            giving me a stronger understanding of how real businesses need to
            build trust, explain their services clearly and turn visitors into
            enquiries.
          </p>
        </div>

        <div className="experienceGrid">
          {experience.map((item) => (
            <article className="experienceCard" key={item.company}>
              <div>
                <h3>{item.company}</h3>
                <p>
                  {item.time} - {item.location}
                </p>
                <p>{item.type}</p>
              </div>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="pricingSection">
        <div className="sectionHeader">
          <p className="eyebrow">Packages</p>
          <h2>Simple pricing for small businesses.</h2>
          <p>
            Hosting and domain setup can be discussed separately depending on
            what the business already has.
          </p>
        </div>

        <div className="pricingGrid">
          {packages.map((item) => (
            <article className="priceCard" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>

              <strong>{item.price}</strong>

              <ul>
                {item.items.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a href="#contact" className="packageButton">
                Enquire about {item.name}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="processSection">
        <div className="sectionHeader">
          <p className="eyebrow">Process</p>
          <h2>Simple process. No overcomplication.</h2>
        </div>

        <div className="processList">
          <div>
            <span>01</span>
            <h3>Quick call</h3>
            <p>
              We discuss the business, current website and what needs improving.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Design direction</h3>
            <p>
              I plan the layout around the business goal: calls, bookings or
              quote requests.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Build</h3>
            <p>
              I build the website and make sure it works cleanly on mobile and
              desktop.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Launch</h3>
            <p>
              I help connect the website to a domain or provide the files for
              deployment.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Want a cleaner website for your business?</h2>
          <p>
            I’m taking on website clients from 18 June onwards. Send your current
            website link and what you want improved.
          </p>
        </div>

        <div className="contactCard">
          <h3>Start with a free 15-minute call.</h3>
          <p>
            Good for businesses requiring an online presence or a modern website.
          </p>

          <a
            href="https://calendly.com/gokcedevv/30min"
            className="button primary full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Calendly Call
          </a>

          <a href="mailto:gokcedevv@gmail.com" className="emailLink">
            gokcedevv@gmail.com
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 gokcedevv</p>
        <a href="#">Back to top</a>
      </footer>
    </main>
  );
}

export default App;