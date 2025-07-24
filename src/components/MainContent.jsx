import { useState } from 'react'
import { motion } from 'framer-motion'
import './MainContent.css'

export default function MainContent({ onBackClick }) {
  const [openDatasets, setOpenDatasets] = useState({})

  const toggleDatasets = (sessionId) => {
    setOpenDatasets(prev => ({
      ...prev,
      [sessionId]: !prev[sessionId]
    }))
  }

  return (
    <div className="main-content">
      {/* Back to bubbles button */}
      <motion.button
        className="back-button"
        onClick={onBackClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        ← 버블 화면
      </motion.button>

      <div className="container">
                 <motion.header
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
         >
           <div className="logo">
             <h1 style={{ color: '#EA4335' }}>2025 인공지능 환경영재캠프</h1>
           </div>
           
           <motion.div 
             className="partner-logos-section"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
           >
             <div className="partner-logos-rolling-outer">
               <div className="partner-logos-rolling-inner">
                 {[
                   { src: 'assets/logos/로고 단국대 교육연구소.png', alt: '단국대 교육연구소' },
                   { src: 'assets/logos/로고 단국대.png', alt: '단국대' },
                   { src: 'assets/logos/로고 용인시.jpg', alt: '용인시' },
                   { src: 'assets/logos/로고 용인자원봉사센터.png', alt: '용인자원봉사센터' },
                   { src: 'assets/logos/로고 용인지원청.gif', alt: '용인지원청' },
                   { src: 'assets/logos/공학도서관.webp', alt: '공학도서관' },
                 ].map((logo, idx) => (
                   <div className="partner-logo-item" key={logo.src + idx}>
                     <img
                       src={logo.src}
                       alt={logo.alt}
                       className="partner-logo-img"
                       onError={e => {
                         e.target.style.display = 'none';
                         e.target.nextElementSibling.style.display = 'block';
                       }}
                     />
                     <span className="partner-logo-fallback" style={{ display: 'none' }}>{logo.alt}</span>
                   </div>
                 ))}
                 {/* 무한 롤링을 위해 한 번 더 반복 */}
                 {[
                   { src: 'assets/logos/로고 단국대 교육연구소.png', alt: '단국대 교육연구소' },
                   { src: 'assets/logos/로고 단국대.png', alt: '단국대' },
                   { src: 'assets/logos/로고 용인시.jpg', alt: '용인시' },
                   { src: 'assets/logos/로고 용인자원봉사센터.png', alt: '용인자원봉사센터' },
                   { src: 'assets/logos/로고 용인지원청.gif', alt: '용인지원청' },
                   { src: 'assets/logos/공학도서관.webp', alt: '공학도서관' },
                 ].map((logo, idx) => (
                   <div className="partner-logo-item" key={logo.src + '2' + idx}>
                     <img
                       src={logo.src}
                       alt={logo.alt}
                       className="partner-logo-img"
                       onError={e => {
                         e.target.style.display = 'none';
                         e.target.nextElementSibling.style.display = 'block';
                       }}
                     />
                     <span className="partner-logo-fallback" style={{ display: 'none' }}>{logo.alt}</span>
                   </div>
                 ))}
               </div>
             </div>
           </motion.div>
        </motion.header>
        <hr className="section-divider" />
        <div className="section-title">
          <h2>오늘의 프로그램</h2>
          <p>아래 필요한 교육 슬라이드와 실습 파일을 확인하세요.</p>
        </div>
        <main>
          <div className="materials-section">
            <motion.div
              className="sessions-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, staggerChildren: 0.1 }}
            >
              {/* 1교시 */}
              <motion.div
                className={`session-card session-blue${openDatasets.session1 ? ' expanded' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="session-number" style={{ background: '#4285F4' }}>1교시</div>
                <h3>데이터 분석과 시각화</h3>
                <p>구글 시트 및 오렌지3 활용</p>

                <div className="session-buttons">
                  <a
                    href="https://docs.google.com/presentation/d/1tvUsYvCe295TRPOYGTU-M4lZuiCYuJkum51yGj5VQWo/preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dataset-btn"
                  >
                    <span className="dataset-name">1교시 교육자료</span>
                    <span className="dataset-type">.ppt</span>
                  </a>
                  <button
                    className={`dataset-btn dataset-toggle ${openDatasets.session1 ? 'active' : ''}`}
                    onClick={() => toggleDatasets('session1')}
                  >
                    데이터셋 {openDatasets.session1 ? '▲' : '▼'}
                  </button>
                  {openDatasets.session1 && (
                    <motion.div
                      className="datasets-container"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="datasets-header">실습용 데이터셋</div>
                      <div className="datasets-grid">
                        <a href="https://drive.google.com/uc?export=download&id=1RNGK9nsiiO5RSVE_dkeh0hXFMPnLoG6X" className="dataset-item" target="_blank" rel="noopener noreferrer">
                          <span className="dataset-icon">📊</span>
                          <span className="dataset-name">구글시트-1교시 데이터셋</span>
                          <span className="dataset-type">.csv</span>
                        </a>
                        <a href="https://drive.google.com/uc?export=download&id=1Xxu5JCi78P4vzECZO4ocRK6bwN59MMW4" className="dataset-item" target="_blank" rel="noopener noreferrer">
                          <span className="dataset-icon">🍕</span>
                          <span className="dataset-name">오렌지3-야식 선호도</span>
                          <span className="dataset-type">.csv</span>
                        </a>
                        <a href="https://drive.google.com/uc?export=download&id=1SHkPV4OHFe5R-5xL4lT1FYYXt99R73F9" className="dataset-item" target="_blank" rel="noopener noreferrer">
                          <span className="dataset-icon">🍦</span>
                          <span className="dataset-name">오렌지3-온도와 아이스크림</span>
                          <span className="dataset-type">.csv</span>
                        </a>
                        <a href="https://drive.google.com/uc?export=download&id=1Rql50vcfEGrMJTAq9fSmGgfecOd580dL" className="dataset-item" target="_blank" rel="noopener noreferrer">
                          <span className="dataset-icon">🌡️</span>
                          <span className="dataset-name">오렌지3-온습도 데이터</span>
                          <span className="dataset-type">.csv</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                  
                </div>
              </motion.div>

              {/* 2교시 */}
              <motion.div
                className={`session-card session-blue${openDatasets.session2 ? ' expanded' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="session-number" style={{ background: '#4285F4' }}>2교시</div>
                <h3>디자인 씽킹</h3>
                <p>환경 문제 해결을 위한 디자인 씽킹</p>
                <div className="session-buttons">
                  <a
                    href="https://docs.google.com/presentation/d/1Ag_qhrjSN6uTX_VwvnW2hu1aoj3xWqQq1zZ8oKxepC4/preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dataset-btn"
                  >
                    <span className="dataset-name">2교시 교육자료</span>
                    <span className="dataset-type">.ppt</span>
                  </a>
                  <button
                    className={`dataset-btn dataset-toggle ${openDatasets.session2 ? 'active' : ''}`}
                    onClick={() => toggleDatasets('session2')}
                  >
                    데이터셋 {openDatasets.session2 ? '▲' : '▼'}
                  </button>

                  {openDatasets.session2 && (
                    <motion.div
                      className="datasets-container"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="datasets-header">환경 데이터 모음</div>
                      <div className="datasets-grid">
                        <a href="#" className="dataset-item">
                          <span className="dataset-icon">🌫️</span>
                          <span className="dataset-name">대기오염 데이터</span>
                          <span className="dataset-type">.csv</span>
                        </a>
                        <a href="#" className="dataset-item">
                          <span className="dataset-icon">💧</span>
                          <span className="dataset-name">물 오염 데이터</span>
                          <span className="dataset-type">.csv</span>
                        </a>
                        <a href="#" className="dataset-item">
                          <span className="dataset-icon">🌱</span>
                          <span className="dataset-name">토양오염 데이터</span>
                          <span className="dataset-type">.csv</span>
                        </a>
                        <a href="#" className="dataset-item">
                          <span className="dataset-icon">🌡️</span>
                          <span className="dataset-name">기후변화 데이터</span>
                          <span className="dataset-type">.csv</span>
                        </a>
                        <a href="#" className="dataset-item">
                          <span className="dataset-icon">🦋</span>
                          <span className="dataset-name">생태계 데이터</span>
                          <span className="dataset-type">.csv</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* 3교시 */}
              <motion.div
                className={`session-card session-blue${openDatasets.session3 ? ' expanded' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="session-number" style={{ background: '#4285F4' }}>3교시</div>
                <h3>발표</h3>
                <p>Canva를 활용한 팀 발표</p>
                <div className="session-buttons">
                  <a
                    href="https://docs.google.com/presentation/d/12jAWrJGDxC7NtJ9MVMRUyHxDFuVsnLE7i3eFqXN883A/preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dataset-btn"
                  >
                    <span className="dataset-name">3교시 교육자료</span>
                    <span className="dataset-type">.ppt</span>
                  </a>
                  <button
                    className={`dataset-btn dataset-toggle ${openDatasets.session3 ? 'active' : ''}`}
                    onClick={() => toggleDatasets('session3')}
                  >
                    Canva 발표 템플릿 {openDatasets.session3 ? '▲' : '▼'}
                  </button>

                  {openDatasets.session3 && (
                    <motion.div
                      className="datasets-container"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="datasets-header">팀별 Canva 발표 템플릿</div>
                      <div className="classes-grid">
                        {[
                          { name: '초3,4학년 A반', room: '402호', teams: ['1팀', '2팀', '3팀', '4팀'] },
                          { name: '초3,4학년 B반', room: '403호', teams: ['5팀', '6팀', '7팀', '8팀'] },
                          { name: '초5,6학년 A반', room: '404호', teams: ['9팀', '10팀', '11팀', '12팀'] },
                          { name: '초5,6학년 B반', room: '405호', teams: ['13팀', '14팀', '15팀', '16팀'] },
                          { name: '중1,2학년 A반', room: '406호', teams: ['17팀', '18팀', '19팀', '20팀', '21팀'] },
                        ].map((classGroup, index) => (
                          <div key={index} className="class-group">
                            <div className="class-header">
                              <span className="class-name">{classGroup.name}</span>
                              <span className="class-room">{classGroup.room}</span>
                            </div>
                            <div className="class-teams">
                              {classGroup.teams.map((team, teamIndex) => (
                                <a key={teamIndex} href="#" className="team-btn-small" target="_blank" rel="noopener noreferrer">
                                  {team}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              {/* 4교시 */}
              <motion.div
                className="session-card session-green"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="session-number" style={{ background: '#43a047' }}>4교시</div>
                <h3 style={{ color: '#388e3c' }}>청청 프로젝트</h3>
                <p style={{ color: '#388e3c' }}>환경을 위한 실천 프로젝트</p>
                <div className="session-buttons">
                  <a
                    href="https://docs.google.com/presentation/d/1drHbK9Sii0YBL4x5ZvwGPuHzZX1VtePz/preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dataset-btn"
                    style={{ background: 'linear-gradient(135deg, #43a047, #66bb6a)', color: 'white', borderColor: '#43a047' }}
                  >
                    <span className="dataset-name">4교시 교육자료</span>
                    <span className="dataset-type">.ppt</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-main">2025 AI 환경영재캠프</p>
            <p className="footer-orgs">단국대학교 | 용인교육지원청 | 공학도서관</p>
          </div>
          <div className="footer-contact">
            <p className="footer-developer">
              Developed by{' '}
              <a href="mailto:woobin@microschool.kr">woobin@microschool.kr</a>
            </p>
            <p className="footer-copyright">&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 