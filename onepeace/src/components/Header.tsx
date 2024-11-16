import { linkEl } from '@/consts';

function Header() {
  return (
    <>
      <header className='py-3 text-bg-warning'>
        <div className='container text-center'>
          <a className='router-link-active router-link-exact-active' href={linkEl.title.url}>
            <h1>{linkEl.title.name}</h1>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
