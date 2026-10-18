import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Compass,
  HeartHandshake,
  Languages,
  Lightbulb,
  MessageCircle,
  Mic,
  Palette,
  Play,
  ShieldCheck,
  Sparkles,
  Video,
  Wifi,
} from "lucide-react";

const topics = [
  { name: "Technology", detail: "Code, AI & the future", icon: Code2 },
  { name: "Science", detail: "Big questions, clear answers", icon: BrainCircuit },
  { name: "Career & work", detail: "Learn from lived experience", icon: Compass },
  { name: "Languages", detail: "Practice by actually talking", icon: Languages },
  { name: "Creative thinking", detail: "Art, writing & ideas", icon: Palette },
  { name: "Personal growth", detail: "Make sense of yourself", icon: HeartHandshake },
  { name: "Study help", detail: "Untangle tricky concepts", icon: BookOpen },
  { name: "Something else", detail: "Your curiosity sets the topic", icon: Sparkles },
];

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Talkwise home">
      <span className="brand-mark"><MessageCircle size={19} strokeWidth={2.7} /></span>
      <span>talkwise<span style={{ color: "#76974f" }}>.</span></span>
    </Link>
  );
}

function PersonIllustration({ peach = false }: { peach?: boolean }) {
  return (
    <div className={`person-art${peach ? " peach" : ""}`} aria-hidden="true">
      {peach ? (
        <svg viewBox="0 0 110 128" fill="none">
          <path d="M20 128c2-26 14-39 35-39s33 13 35 39" fill="#A8B7CE" />
          <path d="M39 87V72h32v15c-8 10-24 10-32 0Z" fill="#D9A17E" />
          <ellipse cx="55" cy="51" rx="29" ry="34" fill="#E8B797" />
          <path d="M26 49C20 25 34 7 57 9c20 1 32 15 27 36-7-6-11-18-12-24-10 11-26 16-46 15v13Z" fill="#48332E" />
          <path d="M43 54h1m22 0h1" stroke="#49352C" strokeWidth="4" strokeLinecap="round" />
          <path d="M49 68c4 3 9 3 13 0" stroke="#A55F50" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M41 92l14 13 14-13" fill="#F7F5F0" />
        </svg>
      ) : (
        <svg viewBox="0 0 110 128" fill="none">
          <path d="M17 128c3-27 16-41 38-41s35 14 38 41" fill="#6A8B64" />
          <path d="M39 87V72h32v15c-8 10-24 10-32 0Z" fill="#A76F4D" />
          <ellipse cx="55" cy="51" rx="29" ry="34" fill="#C68D67" />
          <path d="M26 47C22 22 37 8 57 9c24 1 31 18 27 39l-7-14c-13 1-26-4-37-13-3 10-8 17-14 26Z" fill="#242923" />
          <path d="M43 54h1m22 0h1" stroke="#302720" strokeWidth="4" strokeLinecap="round" />
          <path d="M48 68c5 4 10 4 15 0" stroke="#7B4939" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M42 92l13 13 13-13" fill="#F0E9DE" />
        </svg>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="container site-header">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="#how-it-works">How it works</Link>
          <Link href="#topics">Explore topics</Link>
          <Link href="#ways-to-talk">Ways to talk</Link>
        </nav>
        <div className="header-actions">
          <Link className="header-login" href="#get-started">Log in</Link>
          <Link className="button" href="#get-started">Find your person <ArrowRight size={15} /></Link>
        </div>
      </header>

      <section className="container hero">
        <div>
          <span className="eyebrow"><span className="eyebrow-dot" /> A little curiosity goes a long way</span>
          <h1>Big questions.<br /><span>Better together.</span></h1>
          <p className="hero-copy">Some things are easier when you talk them through. Meet curious people, untangle complicated ideas, and see a topic in a whole new way.</p>
          <div className="hero-actions">
            <Link href="#get-started" className="button button-green">Start a conversation <ArrowRight size={16} /></Link>
            <Link href="#how-it-works" className="button button-light"><Play size={14} fill="currentColor" /> See how it works</Link>
          </div>
          <div className="trust-row">
            <div className="avatar-stack" aria-hidden="true"><span className="avatar">AL</span><span className="avatar">JM</span><span className="avatar">SK</span><span className="avatar">RD</span></div>
            <span>A space for every question, every point of view.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Illustration of two people connecting over a shared topic">
          <div className="visual-glow" />
          <div className="orbit">
            <div className="floating-note top"><span className="pulse" /> Same curiosity, different perspectives</div>
            <article className="person-card one">
              <PersonIllustration />
              <div className="person-name">Alex, the curious one</div>
              <div className="person-role">Trying to make sense of AI</div>
              <span className="topic-chip"><BrainCircuit size={12} /> Artificial intelligence</span>
            </article>
            <div className="connection"><MessageCircle size={38} strokeWidth={1.8} /></div>
            <article className="person-card two">
              <PersonIllustration peach />
              <div className="person-name">Jamie, happy to help</div>
              <div className="person-role">Loves explaining big ideas</div>
              <span className="topic-chip"><Lightbulb size={12} /> Learning together</span>
            </article>
            <div className="floating-note bottom"><Wifi size={14} /> A real conversation starts here</div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="how-it-works">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">A simple way to get unstuck</span>
            <h2>You bring the question.<br />We find the conversation.</h2>
            <p>No perfect wording required. Just show up with something you want to understand, and take it from there.</p>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <div className="step-number"><Compass size={21} /></div>
              <h3>01. Bring your curiosity</h3>
              <p>Pick a topic, explain what you are figuring out, and choose whether you want to learn, help, or do a bit of both.</p>
            </article>
            <article className="step-card">
              <div className="step-number"><Sparkles size={21} /></div>
              <h3>02. Meet a new perspective</h3>
              <p>Talkwise looks for someone with a compatible interest and goal, so the conversation has a reason to begin.</p>
            </article>
            <article className="step-card">
              <div className="step-number"><Lightbulb size={21} /></div>
              <h3>03. Make the idea click</h3>
              <p>Ask the little questions, compare how you think, and work toward that satisfying “oh, now I get it” moment.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="topics">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Follow the question, not a syllabus</span>
            <h2>One world. A million things to talk about.</h2>
            <p>From a tricky line of code to a question about life, start with what is on your mind. These are starting points, not boundaries.</p>
          </div>
          <div className="topics-grid">
            {topics.map(({ name, detail, icon: Icon }) => (
              <Link className="topic-card" href="#get-started" key={name}>
                <span className="topic-icon"><Icon size={20} strokeWidth={1.8} /></span>
                <span><strong>{name}</strong><small>{detail}</small></span>
                <ArrowDownRight size={15} color="#969c94" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="ways-to-talk">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Your conversation, your way</span>
            <h2>Some ideas need words.<br />Some need a voice.</h2>
            <p>Choose the format that feels right for the topic and for you. Start simple, then switch things up when you are ready.</p>
          </div>
          <div className="mode-grid">
            <article className="mode-card">
              <span className="mode-icon"><MessageCircle size={23} /></span>
              <div><h3>Text it out</h3><p>Think before you send. Share links, work through a question at your own pace, and keep useful explanations close.</p></div>
            </article>
            <article className="mode-card">
              <span className="mode-icon"><Mic size={23} /></span>
              <div><h3>Talk it through</h3><p>Use your voice to ask follow-up questions, explain your thinking, and get into the details together.</p></div>
            </article>
            <article className="mode-card">
              <span className="mode-icon"><Video size={23} /></span>
              <div><h3>See the thinking</h3><p>Meet face to face when expressions, demonstrations, or a more personal conversation help the idea land.</p></div>
            </article>
            <article className="mode-card">
              <span className="mode-icon"><ShieldCheck size={23} /></span>
              <div><h3>Feel in control</h3><p>Leave a conversation whenever you need to. Blocking and reporting are core safety features, not afterthoughts.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="get-started">
        <div className="container">
          <div className="cta-panel">
            <div>
              <span className="eyebrow" style={{ color: "#d4f69a" }}><span className="eyebrow-dot" /> Your next “aha” could be one chat away</span>
              <h2>There is no such thing as a question too big.</h2>
              <p>Bring what you are curious about. Find someone who wants to explore it with you. Figure out the rest together.</p>
            </div>
            <Link href="mailto:hello@talkwise.example?subject=Talkwise%20early%20access" className="button button-green">Get early access <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <footer className="container footer">
        <div className="footer-inner">
          <div><Brand /><div className="footer-note">Different minds. Shared understanding.</div></div>
          <div className="footer-links"><Link href="#how-it-works">How it works</Link><Link href="#topics">Topics</Link><Link href="#ways-to-talk">Communication</Link></div>
          <div className="footer-copy">© {new Date().getFullYear()} Talkwise</div>
        </div>
      </footer>
    </main>
  );
}
