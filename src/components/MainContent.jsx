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
             <h1>2025 인공지능 환경영재캠프</h1>
           </div>
           
           <motion.div 
             className="partner-logos-section"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
           >
             <div className="partner-logos-container">
               <div className="partner-logo-item">
                 <img 
                   src="/250726-yongin-camp/assets/logos/단국대.jpg" 
                   alt="단국대학교" 
                   className="partner-logo-img"
                   onError={(e) => {
                     e.target.style.display = 'none'
                     e.target.nextElementSibling.style.display = 'block'
                   }}
                 />
                 <span className="partner-logo-fallback">단국대학교</span>
               </div>
               <div className="partner-logo-item">
                 <img 
                   src="/250726-yongin-camp/assets/logos/용인교육지원청.jpg" 
                   alt="용인교육지원청" 
                   className="partner-logo-img"
                   onError={(e) => {
                     e.target.style.display = 'none'
                     e.target.nextElementSibling.style.display = 'block'
                   }}
                 />
                 <span className="partner-logo-fallback">용인교육지원청</span>
               </div>
               <div className="partner-logo-item">
                 <img 
                   src="/250726-yongin-camp/assets/logos/공학도서관.webp" 
                   alt="공학도서관" 
                   className="partner-logo-img"
                   onError={(e) => {
                     e.target.style.display = 'none'
                     e.target.nextElementSibling.style.display = 'block'
                   }}
                 />
                 <span className="partner-logo-fallback">공학도서관</span>
               </div>
             </div>
           </motion.div>
         </motion.header>

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
                className="session-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="session-number">1교시</div>
                <h3>데이터 분석과 시각화</h3>
                <p>구글 시트 및 오렌지3 활용</p>

                <div className="session-buttons">
                  <a
                    href="https://docs.google.com/presentation/d/1tvUsYvCe295TRPOYGTU-M4lZuiCYuJkum51yGj5VQWo/preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dataset-btn"
                  >
                    <span className="dataset-name">1교시 슬라이드</span>
                    <span className="dataset-type">.ppt</span>
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1RNGK9nsiiO5RSVE_dkeh0hXFMPnLoG6X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dataset-btn dataset-item-style"
                  >
                    <span className="dataset-name">1교시 데이터셋</span>
                    <span className="dataset-type">.csv</span>
                  </a>
                </div>
              </motion.div>

              {/* 2교시 */}
              <motion.div
                className={`session-card ${openDatasets.session2 ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="session-number">2교시</div>
                <h3>디자인 씽킹</h3>
                <p>환경 문제 해결을 위한 디자인 씽킹</p>
                <div className="session-buttons">
                  <a
                    href="https://docs.google.com/presentation/d/1Ag_qhrjSN6uTX_VwvnW2hu1aoj3xWqQq1zZ8oKxepC4/preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dataset-btn"
                  >
                    <span className="dataset-name">2교시 슬라이드</span>
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
                className={`session-card ${openDatasets.session3 ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="session-number">3교시</div>
                <h3>발표</h3>
                <p>Canva를 활용한 팀 발표</p>
                <div className="session-buttons">
                  <a
                    href="https://docs.google.com/presentation/d/12jAWrJGDxC7NtJ9MVMRUyHxDFuVsnLE7i3eFqXN883A/preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dataset-btn"
                  >
                    <span className="dataset-name">3교시 슬라이드</span>
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