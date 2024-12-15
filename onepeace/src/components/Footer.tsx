import { linkEl } from '@/consts';

const Footer = () => {
  return (
    <>
      <footer className='py-4 bg-dark text-center'>
        <div className='container text-center'>
          <ul className='nav justify-content-center mb-3'>
            <li className='nav-item'>
              <a className='nav-link' href={linkEl.top.url} aria-current='page'>
                {linkEl.top.name}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href={linkEl.todo.url} aria-current='page'>
                {linkEl.todo.name}
              </a>
            </li>
          </ul>

          <small className='navbar-dark'>
            <a className='navbar-brand' href={linkEl.top.url}>
              {linkEl.title.name}
            </a>
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
