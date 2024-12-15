import { linkEl } from '@/consts';
import NaviItem from './NaviItem';

const Footer = () => {
  const links = Object.entries(linkEl.subNavi); // mapメソッドを使うので配列に変換
  return (
    <>
      <footer className='py-4 bg-dark text-center'>
        <div className='container text-center'>
          <ul className='nav justify-content-center mb-3'>
            {links.map(([key, linkInfo]) => {
              return <NaviItem key={key} linkInfo={linkInfo} />;
            })}
          </ul>

          <small className='navbar-dark'>
            <a className='navbar-brand' href={linkEl.subNavi.top.url}>
              {linkEl.title.name}
            </a>
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
