import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import teamData from '../data/team.json';
import { siteConfig } from '../config/site';
import styles from './Team.module.css';

interface Lawyer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
}

const team: Lawyer[] = teamData as unknown as Lawyer[];

const ceo = team[0];
const boardMembers = team.slice(1);

const SparkleBorderFrame = ({ strokeWidth, clipId }: { strokeWidth?: string; clipId?: string }) => (
  <svg
    className={styles.sparkleFrameSvg}
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 300 424"
  >
    {clipId && (
      <defs>
        <clipPath id={clipId}>
          <path
            d="M 260,82 L 260,50 C 260,25 240,10 215,10 L 65,10 C 40,10 20,25 20,50 L 20,250 L 20,335 L 20,374 C 20,399 40,414 65,414 L 215,414 C 240,414 260,399 260,374 L 260,165 Z"
            fill="currentColor"
          />
        </clipPath>
      </defs>
    )}
    <path
      d="M 260,82 L 260,50 C 260,25 240,10 215,10 L 65,10 C 40,10 20,25 20,50 L 20,250"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={strokeWidth || '2.2'}
    />
    <path
      d="M 20,335 L 20,374 C 20,399 40,414 65,414 L 215,414 C 240,414 260,399 260,374 L 260,165"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={strokeWidth || '2.2'}
    />
    <g fill="currentColor">
      <path d="M 260,98 Q 260,108 270,108 Q 260,108 260,118 Q 260,108 250,108 Q 260,108 260,98 Z" />
      <path d="M 260,126 Q 260,132 266,132 Q 260,132 260,138 Q 260,132 254,132 Q 260,132 260,126 Z" />
      <circle cx="260" cy="120" r="2.5" />
      <circle cx="260" cy="144" r="2.5" />
      <circle cx="274" cy="122" r="4.2" />
      <circle cx="274" cy="138" r="4.2" />
      <path d="M 20,300 Q 20,310 30,310 Q 20,310 20,320 Q 20,310 10,310 Q 20,310 20,300 Z" />
      <path d="M 20,272 Q 20,278 26,278 Q 20,278 20,284 Q 20,278 14,278 Q 20,278 20,272 Z" />
      <circle cx="20" cy="289" r="2.5" />
      <circle cx="20" cy="265" r="2.5" />
      <circle cx="6" cy="287" r="4.2" />
      <circle cx="6" cy="303" r="4.2" />
    </g>
  </svg>
);

const filterOptions = [
  { label: 'All Leadership', filter: 'all' },
  { label: 'Corporate Affairs & Governance', filter: 'corporate' },
  { label: 'Operations & Supply Chain', filter: 'operations' },
  { label: 'Legal & Regulatory', filter: 'legal' },
  { label: 'People & Culture', filter: 'people' },
  { label: 'Hardlines & Commerce', filter: 'commerce' },
];

export function Team() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTeam = activeFilter === 'all'
    ? boardMembers
    : boardMembers.filter((m) => {
        const categoryMap: Record<string, string[]> = {
          corporate: ['Corporate Law'],
          operations: ['Real Estate Law'],
          legal: ['Family Law', 'Civil Litigation'],
          people: ['Family Law'],
          commerce: ['Corporate Law'],
        };
        return categoryMap[activeFilter]?.includes(m.specialty) ?? false;
      });

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>
        {siteConfig.name} | Executive Leadership & Governance
      </title>

      <main className={styles.pageMain}>
        <div className={styles.pageWrapper}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
              <div className={styles.heroContent}>
                <div className={styles.heroLeft}>
                  <div className={styles.heroEyebrow}>
                    <span className={styles.heroEyebrowLine} />
                    <span className={styles.heroEyebrowText}>
                      Executive Leadership & Governance
                    </span>
                  </div>
                  <h1 className={styles.heroTitle}>
                    Guiding Vision,{' '}
                    <span className={styles.heroTitleEm}>
                      Principled Stewardship.
                    </span>
                  </h1>
                  <p className={styles.heroDesc}>
                    Meet the executive stewards steering our global mission,
                    transformative commerce infrastructure, and foundational
                    technological scale.
                  </p>
                  <div className={styles.heroStats}>
                    <div className={styles.heroStat}>
                      <span className={styles.heroStatValue}>
                        {team.length * 20}+
                      </span>
                      <span className={styles.heroStatLabel}>
                        Years Combined Experience
                      </span>
                    </div>
                    <div className={styles.heroStat}>
                      <span className={styles.heroStatValue}>
                        {team.length}
                      </span>
                      <span className={styles.heroStatLabel}>
                        Principal Officers
                      </span>
                    </div>
                    <div className={styles.heroStat}>
                      <span className={styles.heroStatValue}>40+</span>
                      <span className={styles.heroStatLabel}>
                        Countries Served
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.heroRight}>
                  <div className={styles.heroBadge}>
                    <div className={styles.heroBadgeCorners} />
                    <div className={styles.heroBadgeInner}>
                      <span className={styles.heroBadgeLabel}>Fiscal Year</span>
                      <span className={styles.heroBadgeYear}>2026</span>
                      <span className={styles.heroBadgeTitle}>
                        Executive Board Directorate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CEO Section */}
          <section className={styles.ceoSection}>
            <div className={styles.ceoContainer}>
              <div className={styles.ceoHeader}>
                <div className={styles.ceoHeaderLeft}>
                  <div className={styles.ceoEyebrow}>
                    <span className={styles.ceoEyebrowDot} />
                    <span className={styles.ceoEyebrowText}>
                      Office of the Chief Executive Officer
                    </span>
                  </div>
                  <h2 className={styles.ceoSectionTitle}>
                    The Principal Steward
                  </h2>
                </div>
              </div>

              <div className={styles.ceoGrid}>
                <div className={styles.ceoImageWrapper}>
                  <div className={styles.ceoImageAccent} />
                  <div className={styles.ceoImageFrame}>
                    <SparkleBorderFrame strokeWidth="2.2" clipId="clip-ceo" />
                    <img
                      alt={`${ceo.name} - Chief Executive Officer`}
                      className={styles.ceoPortraitImg}
                      src={ceo.image}
                    />
                    <div className={styles.ceoImageOverlay}>
                      <span className={styles.ceoImageName}>
                        {ceo.name}
                      </span>
                      <span className={styles.ceoImageRole}>
                        Chief Executive Officer
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.ceoContent}>
                  <div className={styles.ceoQuoteBlock}>
                    <span className={styles.ceoQuoteMark}>&quot;</span>
                    <p className={styles.ceoQuoteText}>
                      Our commitment to sustainable scale and community
                      empowerment fuels every breakthrough we engineer. We build
                      infrastructure not for fiscal quarters, but for generational
                      resilience.
                    </p>
                    <span className={styles.ceoQuoteAttr}>
                      Annual Letter to Enterprise Shareholders, 2025
                    </span>
                  </div>

                  <div className={styles.ceoBio}>
                    <p>{ceo.bio}</p>
                    <p>
                      Prior to this role, our leadership served in senior
                      principal investment capacities and pivotal leadership
                      operations, championing structural capital efficiency and
                      client-first counsel across international markets.
                    </p>
                  </div>

                  <div className={styles.ceoPillars}>
                    <div className={styles.ceoPillar}>
                      <span className={styles.ceoPillarNum}>01</span>
                      <span className={styles.ceoPillarLabel}>Pillar</span>
                      <span className={styles.ceoPillarText}>
                        Democratized Commerce & Micro-Enterprise
                      </span>
                    </div>
                    <div className={styles.ceoPillar}>
                      <span className={styles.ceoPillarNum}>02</span>
                      <span className={styles.ceoPillarLabel}>Pillar</span>
                      <span className={styles.ceoPillarText}>
                        End-to-End Sovereign Logistics Grid
                      </span>
                    </div>
                    <div className={styles.ceoPillar}>
                      <span className={styles.ceoPillarNum}>03</span>
                      <span className={styles.ceoPillarLabel}>Pillar</span>
                      <span className={styles.ceoPillarText}>
                        Algorithmic Governance & AI Integrity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Board Section */}
          <section className={styles.boardSection}>
            <div className={styles.boardContainer}>
              <div className={styles.boardHeader}>
                <div className={styles.boardHeaderLeft}>
                  <div className={styles.boardEyebrow}>
                    <span className={styles.boardEyebrowLine} />
                    <span className={styles.boardEyebrowText}>
                      Governance Architecture
                    </span>
                  </div>
                  <h2 className={styles.boardTitle}>
                    Executive Leadership Board
                  </h2>
                  <p className={styles.boardSubtitle}>
                    Senior Vice Presidents & Corporate Officers leading
                    strategic operations, people culture, legal governance, and
                    institutional expansion.
                  </p>
                </div>
                <div className={styles.boardCount}>
                  <span className={styles.boardCountValue}>
                    {team.length}
                  </span>
                  <span className={styles.boardCountLabel}>
                    Principal Officers
                  </span>
                </div>
              </div>

              <div className={styles.filters}>
                {filterOptions.map((opt) => (
                  <button
                    key={opt.filter}
                    className={`${styles.filterBtn} ${
                      activeFilter === opt.filter
                        ? styles.filterBtnActive
                        : styles.filterBtnInactive
                    }`}
                    type="button"
                    onClick={() => setActiveFilter(opt.filter)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className={styles.leadershipGrid}>
                {filteredTeam.map((member) => (
                  <article
                    key={member.id}
                    className={styles.leaderCard}
                  >
                    <div className={styles.leaderCardImage}>
                      <SparkleBorderFrame strokeWidth="2.2" clipId={`clip-${member.id}`} />
                      <img
                        alt={`Portrait of ${member.name}`}
                        className={styles.memberImg}
                        src={member.image}
                      />
                      <span className={styles.leaderCardCategory}>
                        {member.specialty}
                      </span>
                    </div>
                    <div className={styles.leaderCardContent}>
                      <h3 className={styles.leaderCardName}>
                        {member.name}
                      </h3>
                      <p className={styles.leaderCardRole}>
                        {member.specialty}
                      </p>
                      <span className={styles.leaderCardDivider} />
                      <p className={styles.leaderCardBio}>
                        {member.bio}
                      </p>
                      <div className={styles.leaderCardFooter}>
                        <span className={styles.leaderCardExp}>
                          {member.experience}
                        </span>
                        <Link to="/contact2" className={styles.leaderCardLink}>
                          Consult
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

        {/* Principles Section */}
        <section className={styles.principlesSection}>
          <div className={styles.principlesContainer}>
            <div className={styles.principlesHeader}>
              <div className={styles.principlesEyebrow}>
                <span className={styles.principlesEyebrowDot} />
                <span className={styles.principlesEyebrowText}>
                  Institutional Philosophy
                </span>
              </div>
              <h2 className={styles.principlesTitle}>
                Principles Guiding Corporate Stewardship
              </h2>
              <p className={styles.principlesDesc}>
                Our governing ethos balances immediate commercial execution with
                multigenerational responsibility, ensuring trust remains our
                preeminent asset.
              </p>
            </div>

            <div className={styles.principlesGrid}>
              <div className={styles.principleCard}>
                <span className={styles.principleNum}>I</span>
                <h3 className={styles.principleName}>
                  Fiduciary Integrity & Transparent Governance
                </h3>
                <p className={styles.principleText}>
                  We uphold uncompromising standards of public reporting, board
                  oversight, and independent audit integrity. Every capital
                  allocation decision is measured against rigorous stakeholder
                  return criteria.
                </p>
                <div className={styles.principleFooter}>
                  <span className={styles.principleProtocol}>
                    Codified Protocol
                  </span>
                  <span className={styles.principleDetail}>
                    Audit Committee Charter • Sarbanes-Oxley Compliant
                  </span>
                </div>
              </div>
              <div className={styles.principleCard}>
                <span className={styles.principleNum}>II</span>
                <h3 className={styles.principleName}>
                  Customer Obsession & Operational Excellence
                </h3>
                <p className={styles.principleText}>
                  Innovation exists to simplify commerce for consumers and small
                  business partners. We measure operational health through
                  relentless reduction of latency and continuous defect
                  minimization.
                </p>
                <div className={styles.principleFooter}>
                  <span className={styles.principleProtocol}>
                    Service Standard
                  </span>
                  <span className={styles.principleDetail}>
                    ISO 9001 Aligned • Client-First Delivery
                  </span>
                </div>
              </div>
              <div className={styles.principleCard}>
                <span className={styles.principleNum}>III</span>
                <h3 className={styles.principleName}>
                  Ethical Leadership & Fiduciary Duty
                </h3>
                <p className={styles.principleText}>
                  Counsel is exercised with candor, loyalty, and discretion.
                  Client confidences are safeguarded under the strictest
                  professional conduct rules and regulatory frameworks.
                </p>
                <div className={styles.principleFooter}>
                  <span className={styles.principleProtocol}>
                    Professional Conduct
                  </span>
                  <span className={styles.principleDetail}>
                    Bar Council Guidelines • Client Privilege
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}

export default Team;
