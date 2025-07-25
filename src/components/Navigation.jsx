import './Navigation.css'

export default function Navigation() {
  return (
    <nav className="fixed-nav">
      <div className="nav-container">
        <div className="nav-brand">
                     <img
             src="assets/images/logo.png"
             alt="🌱"
             className="nav-logo"
             onError={(e) => {
               e.target.style.display = 'none'
               e.target.nextElementSibling.style.display = 'inline'
             }}
           />
          <span className="nav-fallback" style={{display: 'none'}}>🌱</span>
                     <span className="nav-title" style={{ fontWeight: '900', color: '#ffffff', fontSize: '1.6rem' }}>공학도서관</span>
        </div>
        <div className="nav-tools">
          <a
            href="http://220.116.149.66:3000/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-tool"
            title="AI로 데이터 분석하고 질문하기"
          >
            <span className="tool-icon">
                             <img
                 src="assets/images/tools/OpenWebUI.png"
                 alt="ChatGPT"
                 onError={(e) => {
                   e.target.style.display = 'none'
                   e.target.nextElementSibling.style.display = 'inline'
                 }}
               />
              <span className="icon-fallback" style={{display: 'none'}}>🤖</span>
            </span>
            <span className="tool-name">공도GPT</span>
          </a>
          <a
            href="https://sheets.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-tool"
            title="데이터 정리하고 계산하기"
          >
            <span className="tool-icon">
                             <img
                 src="assets/images/tools/google-sheets.png"
                 alt="구글 시트"
                 onError={(e) => {
                   e.target.style.display = 'none'
                   e.target.nextElementSibling.style.display = 'inline'
                 }}
               />
              <span className="icon-fallback" style={{display: 'none'}}>📊</span>
            </span>
            <span className="tool-name">구글 시트</span>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1PnKpqIZGUt5ryzeb6KB3X5kW7hMQn03U"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-tool"
            title="데이터 시각화하고 분석하기"
          >
            <span className="tool-icon">
                             <img
                 src="assets/images/tools/orange3.jpg"
                 alt="오렌지3"
                 onError={(e) => {
                   e.target.style.display = 'none'
                   e.target.nextElementSibling.style.display = 'inline'
                 }}
               />
              <span className="icon-fallback" style={{display: 'none'}}>📈</span>
            </span>
            <span className="tool-name">오렌지3</span>
          </a>
          <a
            href="https://canva.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-tool"
            title="발표자료 만들고 디자인하기"
          >
            <span className="tool-icon">
                             <img
                 src="assets/images/tools/canva.svg"
                 alt="캔바"
                 onError={(e) => {
                   e.target.style.display = 'none'
                   e.target.nextElementSibling.style.display = 'inline'
                 }}
               />
              <span className="icon-fallback" style={{display: 'none'}}>🎨</span>
            </span>
            <span className="tool-name">캔바</span>
          </a>
        </div>
      </div>
    </nav>
  )
} 