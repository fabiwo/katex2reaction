const LinkBadge = ({ href, children }) => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className='px-3 py-3 font-bold text-purple-500 no-underline bg-purple-100 rounded hover:underline'
    >
      {children}
    </a>
  )
}

export default LinkBadge
