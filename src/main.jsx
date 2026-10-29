import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { experience, posts, postBodies, profile, projects } from './config.js'
import './styles.css'

const Arrow = ({ diagonal = false }) => <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
const Eyebrow = ({ children }) => <div className="eyebrow"><span className="eyebrow-line" />{children}</div>

function Header({ page, go }) {
  return <header className="site-header"><a className="wordmark" href="#home" onClick={(e) => { e.preventDefault(); go('home') }}><span className="avatar">{profile.initials}</span><span>{profile.name}</span></a><nav aria-label="Main navigation"><a className={page === 'home' ? 'active' : ''} href="#home" onClick={(e) => { e.preventDefault(); go('home') }}>Home</a><a className={page !== 'home' ? 'active' : ''} href="#writing" onClick={(e) => { e.preventDefault(); go('writing') }}>Writing <span className="nav-count">03</span></a></nav><a className="header-contact" href={`mailto:${profile.email}`}>Let’s talk <Arrow diagonal /></a></header>
}

function ProjectCard({ project }) {
  return <article className="project-card"><div className={`project-art ${project.color}`}><span className="project-index">{project.number} / SELECTED WORK</span><span className="project-mark">{project.mark}</span><span className="art-caption">{project.title.toUpperCase()} · {project.year}</span></div><div className="project-meta"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><p className="project-description">{project.description}</p></div><div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.caseStudy} target="_blank" rel="noreferrer">Case study <Arrow diagonal /></a><a href={project.href} target="_blank" rel="noreferrer">Live project <Arrow diagonal /></a></div></article>
}

function PostRow({ post, go }) {
  return <a className="post-row" href={`#post/${post.slug}`} onClick={(e) => { e.preventDefault(); go(`post/${post.slug}`) }}><div className="post-date">{post.date}<span>{post.read}</span></div><div className="post-content"><span className="post-category">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p></div><span className="post-arrow"><Arrow diagonal /></span></a>
}

function Footer() {
  return <footer className="footer"><a className="footer-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><div className="socials">{profile.socials.map((item) => <a href={item.href} key={item.label} target="_blank" rel="noreferrer">{item.label}<Arrow diagonal /></a>)}</div><span className="built-note">Designed with care · Built for the web</span></div></footer>
}

function Home({ go }) {
  return <><main>
    <section className="hero wrap"><div className="hero-copy"><Eyebrow>{profile.role}</Eyebrow><h1>{profile.heroBefore}<em>{profile.heroAccent}</em>{profile.heroAfter}</h1><p className="hero-sub">{profile.bio}</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <Arrow /></a><a className="text-link" href={`mailto:${profile.email}`}>Get in touch <Arrow diagonal /></a></div></div><div className="hero-side"><div className="portrait-card"><div className="portrait-grid"/><div className="portrait-sun"/><div className="portrait-shape shape-one"/><div className="portrait-shape shape-two"/><div className="portrait-shape shape-three"/><span className="portrait-label">A LITTLE ABOUT ME</span><span className="portrait-signature">{profile.initials}</span></div><div className="availability"><span className="status-dot"/><span>{profile.availability}</span></div><p className="location">↳ &nbsp;{profile.location}</p></div><div className="hero-index">01 <span /> 04</div></section>
    <section id="work" className="section wrap"><div className="section-heading"><div><Eyebrow>A FEW GOOD THINGS</Eyebrow><h2>Selected work<span className="heading-dot">.</span></h2></div><span className="section-aside">A selection of things I’ve helped bring to life.</span></div><div className="projects-grid">{projects.map((project) => <ProjectCard project={project} key={project.number} />)}</div></section>
    <section className="about-band"><div className="wrap about-layout"><div><Eyebrow>A BIT ABOUT ME</Eyebrow><h2>Curious by nature.<br/><em>Intentional</em> by design.</h2></div><div className="about-copy"><p>{profile.bio}</p><p>I enjoy working across the whole product: finding the right problem, making the interface feel intuitive, and sweating the details that make it feel complete.</p><div className="skills">{profile.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></div></section>
    <section className="section wrap experience-section"><div className="section-heading"><div><Eyebrow>WHERE I’VE BEEN</Eyebrow><h2>Experience<span className="heading-dot">.</span></h2></div><span className="section-aside">A few chapters along the way.</span></div><div className="experience-list">{experience.map((item) => <div className="experience-row" key={item.company}><div className="exp-period">{item.period}</div><div className="exp-main"><h3>{item.role}</h3><p>{item.detail}</p></div><div className="exp-company">{item.company}</div><span className="exp-mark">↗</span></div>)}</div></section>
    <section className="section wrap writing-section" id="writing"><div className="section-heading"><div><Eyebrow>THINGS ON MY MIND</Eyebrow><h2>Recent writing<span className="heading-dot">.</span></h2></div><button className="text-link all-posts" onClick={() => go('writing')}>All writing <Arrow /></button></div><div className="post-list">{posts.map((post) => <PostRow post={post} go={go} key={post.slug} />)}</div></section>
  </main><Footer /></>
}

function Writing({ go, selected }) {
  const post = selected ? posts.find((item) => item.slug === selected) : null
  if (post) return <><main className="article wrap"><button className="back-link" onClick={() => go('writing')}>← &nbsp;Back to writing</button><div className="article-head"><span className="post-category">{post.category}</span><h1>{post.title}</h1><div className="article-byline">{post.date}<span>·</span>{post.read}<span>·</span>By {profile.name}</div><p className="article-deck">{post.excerpt}</p></div><div className="article-rule"/><div className="article-body">{(postBodies[post.slug] || []).map((paragraph, index) => <p key={index}>{paragraph}</p>)}<blockquote>Good work feels simple because someone cared about the details.</blockquote></div><div className="article-end"><span>Thanks for reading.</span><button className="text-link" onClick={() => go('writing')}>More writing <Arrow /></button></div></main><Footer /></>
  return <><main className="writing-page wrap"><div className="writing-intro"><Eyebrow>NOTES & IDEAS</Eyebrow><h1>A space for<br/><em>thinking out loud.</em></h1><p>Occasional notes on design, building useful things, and the little details in between.</p></div><div className="writing-page-list">{posts.map((item) => <PostRow post={item} go={go} key={item.slug} />)}</div><div className="newsletter"><span className="newsletter-icon">✳</span><div><h3>A thoughtful note, now and then.</h3><p>New writing, no noise. Reach out if you’d like to stay in touch.</p></div><a className="button button-dark" href={`mailto:${profile.email}?subject=Keep%20me%20posted`}>Say hello <Arrow /></a></div></main><Footer /></>
}

function App() {
  const readRoute = () => { const hash = window.location.hash.replace(/^#\/?/, ''); return hash || 'home' }
  const [route, setRoute] = useState(readRoute)
  useEffect(() => { const onHash = () => setRoute(readRoute()); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash) }, [])
  const go = (next) => { window.location.hash = next === 'home' ? 'home' : next; window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const isHome = route === 'home' || route === ''
  const selected = route.startsWith('post/') ? route.slice(5) : null
  return <div className="app-shell"><Header page={isHome ? 'home' : 'writing'} go={go} />{isHome ? <Home go={go} /> : <Writing go={go} selected={selected} />}</div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
