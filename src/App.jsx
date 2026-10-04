const interests = [
  {
    number: "01",
    icon: "⌘",
    title: "Technology",
    description:
      "Taking apart how things work and imagining what technology could do next.",
    color: "lavender",
  },
  {
    number: "02",
    icon: "⌁",
    title: "Electronics",
    description:
      "Curious about circuits, cool gadgets, and turning little ideas into real things.",
    color: "mint",
  },
  {
    number: "03",
    icon: "↗",
    title: "Sports",
    description:
      "Getting out there, playing hard, and learning that teamwork makes everything better.",
    color: "peach",
  },
  {
    number: "04",
    icon: "◎",
    title: "The big wide world",
    description:
      "Exploring new places, meeting different people, and staying open to fresh perspectives.",
    color: "blue",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Agilesh home">
          agilesh<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">A little about me</a>
          <a href="#interests">Things I love</a>
          <a className="nav-cta" href="#hello">
            Say hello <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              STUDENT · DREAMER · DOER
            </div>
            <h1>
              Hi, I’m
              <br />
              <span className="name-highlight">Agilesh</span>
              <span className="wave" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <p className="hero-intro">
              A 9th grader with a curious mind, a love for technology, and a
              whole world left to explore.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#about">
                Get to know me <ArrowIcon />
              </a>
              <span className="scroll-note">
                <span aria-hidden="true">↓</span> A little scroll, a lot of me
              </span>
            </div>
          </div>

          <div className="hero-art" aria-label="A playful illustration of a student">
            <div className="art-sun" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✦</div>
            <div className="art-note note-top">always wondering...</div>
            <div className="art-card">
              <div className="avatar-hair" />
              <div className="avatar-face">
                <span className="avatar-eye eye-left" />
                <span className="avatar-eye eye-right" />
                <span className="avatar-smile" />
              </div>
              <div className="avatar-neck" />
              <div className="avatar-shirt">
                <span className="shirt-badge">A</span>
              </div>
            </div>
            <div className="art-sticker sticker-tech">
              <span>⌘</span> curious mind
            </div>
            <div className="art-sticker sticker-sports">
              <span>⚡</span> full of energy
            </div>
            <div className="art-note note-bottom">currently learning →</div>
          </div>
          <div className="hero-bottom">
            <span>BASED ON EARTH 🌍</span>
            <span>CLASS 9 · BIG IDEAS</span>
          </div>
        </section>

        <section className="intro-section section-wrap" id="about">
          <div className="section-label">
            <span>01</span> THE SHORT VERSION
          </div>
          <div className="intro-content">
            <h2>
              Still figuring it all out.
              <br />
              <span>That’s the fun part.</span>
            </h2>
            <div className="intro-aside">
              <p>
                I’m Agilesh, a student in 9th standard who believes every day
                has something new to teach. I love asking questions, trying
                things out, and seeing where a little curiosity can take me.
              </p>
              <p className="handwritten">One day at a time. ✳</p>
            </div>
          </div>
        </section>

        <section className="interests-section" id="interests">
          <div className="section-wrap">
            <div className="interests-heading">
              <div>
                <div className="section-label">
                  <span>02</span> MY KIND OF THINGS
                </div>
                <h2>
                  A few things
                  <br />
                  that make me <span>me.</span>
                </h2>
              </div>
              <p>
                From tiny circuits to the big wide world—there’s always
                something worth getting excited about.
              </p>
            </div>
            <div className="interest-grid">
              {interests.map((interest) => (
                <article
                  className={`interest-card ${interest.color}`}
                  key={interest.number}
                >
                  <div className="card-topline">
                    <span>{interest.number}</span>
                    <span className="interest-icon" aria-hidden="true">
                      {interest.icon}
                    </span>
                  </div>
                  <div>
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                  </div>
                  <span className="card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-section section-wrap">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            Every day is a chance to learn something, meet someone, or see the
            world a little differently.
          </blockquote>
          <span className="quote-caption">MY EVERYDAY KIND OF ADVENTURE</span>
          <span className="quote-doodle" aria-hidden="true">
            ✳
          </span>
        </section>

        <section className="hello-section" id="hello">
          <div className="section-wrap hello-inner">
            <div className="section-label">
              <span>03</span> YOUR TURN
            </div>
            <h2>
              Got something
              <br />
              <span>cool to share?</span>
            </h2>
            <p>
              I’m always up for a new idea, a fun fact, or a conversation about
              the things you love.
            </p>
            <a className="button button-light" href="#interests">
              See what I love <ArrowIcon />
            </a>
            <span className="hello-spark spark-left" aria-hidden="true">
              ✳
            </span>
            <span className="hello-spark spark-right" aria-hidden="true">
              ✦
            </span>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          agilesh<span>.</span>
        </a>
        <p>Made with curiosity & a little bit of code.</p>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </>
  );
}

export default App;
