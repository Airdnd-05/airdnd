import clsx from 'clsx'

function HeaderNavItem({ nav, selected, onSelected }) {
  return (
    <li
      className={clsx(
        'cursor-pointer p-4 transition-transform hover:rounded-3xl hover:bg-gray-100',
        {
          'font-bold': selected === nav.key,
        },
      )}
      onClick={() => onSelected(nav.key)}>
      {nav.title}
    </li>
  )
}

export default HeaderNavItem
