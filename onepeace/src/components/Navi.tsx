import { linkEl } from '@/consts';
import NaviItem from './NaviiItem';

function Navi() {
  const links = Object.entries(linkEl.subNavi); // mapメソッドを使うので配列に変換
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
        <div className='container'>
          <a className='router-link-active router-link-exact-active navbar-brand' href={linkEl.subNavi.top.url}>
            {linkEl.title.name}
          </a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbar-content'>
            <ul className='navbar-nav mr-auto'>
              {links.map(([key, linkInfo]) => {
                return <NaviItem key={key} linkInfo={linkInfo} />;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navi;
