import { BrowserRouter as Router, Routes, Route, NavLink, Link, useParams } from 'react-router-dom';
import postsData from './data/posts.json';
import './App.css';

interface PostBlock {
  type: 'text' | 'image' | 'video';
  value?: string;
  url?: string;
  caption?: string;
}

interface Post {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  blocks: PostBlock[];
}

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-placeholder" title="Ethical Expertise for Innovation / Accelerating with Artificial Intelligence">
          <span className="color-primary">EEI</span>/<span className="color-secondary">AAI</span>
        </div>
        <nav>
          <ul className="nav-menu">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Merlijn Dumarey</p>
    </footer>
  );
}

function Home() {
  return (
    <main className="content">
      <section className="hero-section">
        <h1>Merlijn Dumarey: Where Ethics Meet Acceleration in AI</h1>
        <p className="intro-text">
          Welcome to <strong>EEIAAI.com</strong>. As an AI student, my domain name is a tribute to the core of my passion: 
          it is the <strong><i>Flemish</i> pronunciation of AI</strong>, embodying the blend of local roots and global technology.
        </p>
        
        <div className="acronym-explanation">
          <h2>The Meaning Behind <strong>EEI/AAI</strong></h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.8 }}>
            More than just a logo, EEI/AAI represents the two fundamental pillars guiding my work in Artificial Intelligence:
          </p>
          
          <div className="pillars">
            <div className="pillar">
              <h3 className="color-primary">EEI: Ethical Expertise for Innovation</h3>
              <p>
                I believe the future of technology must be built on a foundation of <strong>responsibility and moral integrity</strong>. 
                This pillar focuses on developing AI solutions that are fair, transparent, and beneficial for society.
              </p>
            </div>
            <div className="pillar">
              <h3 className="color-secondary">AAI: Accelerating with Artificial Intelligence</h3>
              <p>
                This is the drive to push boundaries. It represents my commitment to leveraging cutting-edge AI technologies to <strong>solve complex problems, optimize processes, and drive genuine, impactful innovation</strong>.
              </p>
            </div>
          </div>
          
          <p style={{ textAlign: 'center', margin: '2rem 0', fontStyle: 'italic' }}>
            Join me as I explore the intersection of advanced technology and responsible development.
          </p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link to="/blog" className="cta-button">Explore My Insights on the Blog</Link>
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="content">
      <section className="about-section">
        <h1>About Merlijn Dumarey</h1>
        <div style={{ textAlign: 'center' }}>
          <img src="/images/merlijn-dumarey-profile.jpg" alt="Profile of Merlijn Dumarey" className="profile-picture" />
        </div>
        <p className="intro-text" style={{ textAlign: 'center' }}>
          I am a final-year <strong>Applied Informatics student</strong> specializing in <strong>Artificial Intelligence</strong>, driven by the intersection of innovation and ethics. I am highly motivated to gain my first professional experience as a <strong>Data Scientist</strong> or <strong>AI Engineer</strong>.
        </p>
        
        <div className="acronym-explanation">
          <h2>Education & AI Expertise</h2>
          <div className="pillars">
            <div className="pillar" style={{ borderLeft: '4px solid var(--color-400)' }}>
              <h3 style={{ color: 'var(--color-400)' }}>Bachelor of Applied Informatics (AI Specialization)</h3>
              <p>Howest Bruges | 2024–2026</p>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li><strong>Core Subjects:</strong> Python, Machine Learning, Deep Learning, Reinforcement Learning, MLOps</li>
                <li><strong>Focus:</strong> AI Ethics, AI Security, Cloud Computing, Web3, Java, PHP, Data</li>
              </ul>
            </div>
            <div className="pillar" style={{ borderLeft: '4px solid var(--color-600)' }}>
              <h3 style={{ color: 'var(--color-600)' }}>Programming Graduate Degree</h3>
              <p>Howest Bruges | 2022–2024</p>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li><strong>Focus:</strong> Programming in <strong>C#</strong>, Databases, HTML, CSS, JavaScript, MVC</li>
              </ul>
            </div>
          </div>
          
          <h2>Professional Experience</h2>
          <div className="job-list">
            <article className="card">
              <div className="post-meta">Spring 2026 • 13 Weeks</div>
              <h2>MLOps Internship | AVR</h2>
              <p>Focused on building and expanding an internal <strong>MLOps platform</strong> to support the full AI lifecycle. This stage will cover Python, API integration, containerization, deployment, model management, evaluation, and the <strong>automation of machine learning workflows</strong>.</p>
            </article>
            
            <article className="card">
              <div className="post-meta">2024 • 10 Weeks</div>
              <h2>Web Development Internship | Up Solutions bv</h2>
              <p>Developed a <strong>Laravel</strong> application for the Brugge supporters' association "The Locals 78." This provided valuable experience beyond my curriculum's primary focus on .NET.</p>
            </article>
          </div>
        </div>
        
        <h2 style={{ marginTop: '4rem', textAlign: 'center' }}>Key Skills & Personal Drive</h2>
        <div className="pillars">
          <div className="pillar">
            <h3 className="color-primary">Drive & Punctuality</h3>
            <p>I complete assignments quickly and to a high standard, breaking larger tasks into subtasks using <strong>Agile principles</strong> like Scrum.</p>
          </div>
          <div className="pillar">
            <h3 className="color-primary">Problem-Solving</h3>
            <p>I enjoy creative and practical problem-solving. I am a strong team player, eager to help colleagues and unafraid to seek help when necessary.</p>
          </div>
          <div className="pillar">
            <h3 className="color-primary">Entrepreneurial Spirit</h3>
            <p>I actively seek out and seize opportunities when they arise.</p>
          </div>
        </div>

        <h2 style={{ marginTop: '4rem', textAlign: 'center' }}>Interests Beyond Code</h2>
        <div className="pillars">
          <div className="pillar">
            <h3 className="color-secondary">Running</h3>
            <p>A passionate runner, having completed several marathons. It’s a journey that teaches perseverance and focus.</p>
          </div>
          <div className="pillar">
            <h3 className="color-secondary">IoT</h3>
            <p>The intersection of hardware and software allows me to channel my creativity through iterative development.</p>
          </div>
          <div className="pillar">
            <h3 className="color-secondary">Vegetable Garden</h3>
            <p>Maintaining a garden offers peace and satisfaction through continuous planning and adjustment—much like MLOps.</p>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="mailto:merlijn.dumarey@gmail.com" className="cta-button">Email Me</a>
          <a href="https://www.linkedin.com/in/merlijn-dumarey" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ background: '#0077b5' }}>LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

function Blog() {
  const posts = postsData as Post[];
  
  return (
    <main className="content">
      <section className="blog-list-section">
        <h1 style={{ textAlign: 'center' }}>Merlijn's Blog</h1>
        <p className="intro-text" style={{ textAlign: 'center' }}>
          Explore my latest insights on the intersection of ethical expertise (EEI) and accelerating with artificial intelligence (AAI).
        </p>

        <div className="job-list" style={{ marginTop: '3rem' }}>
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="card blog-card">
                <div className="post-meta">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <h2>{post.title}</h2>
                <p style={{ marginTop: '0.5rem', color: '#555' }}>{post.excerpt}</p>
                <span className="read-more">Read Full Post &rarr;</span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogDetail() {
  const { id } = useParams();
  const post = (postsData as Post[]).find((p) => p.id === id);

  if (!post) {
    return (
      <main className="content">
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <h2>Post not found</h2>
          <Link to="/blog" className="cta-button" style={{ marginTop: '2rem' }}>Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="content">
      <article className="blog-detail">
        <Link to="/blog" className="back-link">&larr; Back to all posts</Link>
        <div className="post-meta" style={{ marginTop: '2rem' }}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        <h1 style={{ textAlign: 'left', marginBottom: '2rem' }}>{post.title}</h1>
        
        <div className="blog-content">
          {post.blocks.map((block, index) => {
            switch(block.type) {
              case 'text':
                return <p key={index}>{block.value}</p>;
              case 'image':
                return (
                  <figure key={index} className="post-media-block">
                    <img src={block.url} alt={block.caption || post.title} />
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                  </figure>
                );
              case 'video':
                return (
                  <figure key={index} className="post-media-block">
                    <video controls width="100%">
                      <source src={block.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                  </figure>
                );
              default:
                return null;
            }
          })}
        </div>
      </article>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;