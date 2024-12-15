import type { LinkType } from '@/type/types.ts';

function NaviItem(props: LinkType) {
  const { linkInfo } = props;
  return (
    <>
      <li className='nav-item'>
        <a className='router-link-active router-link-exact-active nav-link' href={linkInfo.url} aria-current='page'>
          {linkInfo.name}
        </a>
      </li>
    </>
  );
}

export default NaviItem;
