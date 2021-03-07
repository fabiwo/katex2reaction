const PngButton = ({ onClick }) => {
  return (
    <button
      disabled
      onClick={() => onClick()}
      className='inline-flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded bg-opacity-30'
    >
      <svg
        className='w-4 h-4 mr-2 stroke-current'
        height='24'
        width='24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='2'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect height='18' width='18' rx='2' ry='2' x='3' y='3' />
        <circle cx='8.5' cy='8.5' r='1.5' />
        <path d='M21 15L16 10 5 21' />
      </svg>
      <span>PNG</span>
    </button>
  )
}

export default PngButton
