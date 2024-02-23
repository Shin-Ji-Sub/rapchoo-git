import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import './App.css';

const NavBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

function App() {
  return (
    <div className="App">
      <header>
        <h2>
          주랩추
        </h2>
        <div className='user-container'>
          <span className='login-btn'>로그인</span>
          <span className='signup-btn'>회원가입</span>
        </div>
      </header>

      <nav>
        <div className='sidebar-container'>
          <NavBtn className='closeSide-btn' onClick={() => {
            const sidebar = document.querySelector('.sidebar-container');
            const openBtn = document.querySelector('.openSide-btn');
            if(sidebar instanceof HTMLDivElement && openBtn instanceof HTMLButtonElement){
              sidebar.style.left = '-20rem';
              openBtn.style.visibility = 'visible';
            }
          }}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </NavBtn>
          <ul className='side-content'>
            <li>해외축구</li>
            <li>국내축구</li>
            <li>대표팀</li>
            <li>해외 클럽팀</li>
            <li>국내 클럽팀</li>
          </ul>
        </div>
        <NavBtn className='openSide-btn' onClick={() => {
          const sidebar = document.querySelector('.sidebar-container');
          const openBtn = document.querySelector('.openSide-btn');
          if(sidebar instanceof HTMLDivElement && openBtn instanceof HTMLButtonElement){
            sidebar.style.left = '0';
            openBtn.style.visibility = 'hidden';
          } 
        }}>
          <FontAwesomeIcon icon={faAnglesRight} />
        </NavBtn>
      </nav>

      <div className='left-ad'>
        AD
      </div>
      <div className='right-ad'>
        AD
      </div>

      <main>
        Main
      </main>

    </div>
  );
}

export default App;
