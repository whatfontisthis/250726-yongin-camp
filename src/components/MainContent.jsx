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
            <h1 className="main-camp-title">2025 인공지능 환경영재캠프</h1>
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
          <h2 className="main-program-title">오늘의 프로그램</h2>
          <p className="main-program-desc">아래 필요한 교육 슬라이드와 실습 파일을 확인하세요.</p>
        </div>
        <main>
          <div className="materials-section">
            <motion.div
              className="sessions-grid-horizontal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, staggerChildren: 0.1 }}
            >
              {/* 1~3교시 가로 정렬 */}
              {[1,2,3].map((num, idx) => (
                <motion.div
                  key={num}
                  className={`session-card session-blue${openDatasets[`session${num}`] ? ' expanded' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <div className="session-number" style={{ background: '#4285F4', marginBottom: 0 }}>
                      {num}교시
                    </div>
                    <span className="session-time-inline">
                      {num === 1 && '시간: 9:10 - 10:00'}
                      {num === 2 && '시간: 10:10 - 11:30'}
                      {num === 3 && '시간: 11:40 - 12:30'}
                    </span>
                  </div>
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
                      className={`dataset-btn dataset-toggle ${openDatasets[`session${num}`] ? 'active' : ''}`}
                      onClick={() => toggleDatasets(`session${num}`)}
                    >
                      데이터셋 {openDatasets[`session${num}`] ? '▲' : '▼'}
                    </button>
                    {openDatasets[`session${num}`] && (
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
              ))}
            </motion.div>
            <motion.div
              className="sessions-grid-single"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* 4교시 */}
              <motion.div
                className="session-card session-green"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                  <div className="session-number" style={{ background: '#43a047', marginBottom: 0 }}>4교시</div>
                  <span className="session-time-inline">시간: 12:30 - 13:00</span>
                </div>
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