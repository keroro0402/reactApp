import { linkEl } from '@/consts';

function Navi() {
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
        <div className='container'>
          <a className='router-link-active router-link-exact-active navbar-brand' href={linkEl.top.url}>
            {linkEl.title.name}
          </a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbar-content'>
            <ul className='navbar-nav mr-auto'>
              <li v-for='item in naviLists' className='nav-item'>
                <a className='router-link-active router-link-exact-active nav-link' href={linkEl.top.url} aria-current='page'>
                  {linkEl.top.name}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navi;
