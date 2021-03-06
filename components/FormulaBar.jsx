const FormulaBar = ({ text, onChange }) => {
  return (
    <div className='relative text-gray-700'>
      <input
        aria-label='Search articles'
        type='text'
        onChange={(e) => onChange(e.target.value)}
        value={text}
        placeholder='enter LaTeX equation'
        className='w-full h-16 pl-12 pr-3 text-2xl placeholder-gray-600 border border-gray-300 rounded-lg shadow'
      />{' '}
      <div className='absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none'>
        <svg
          height='63'
          width='57'
          viewBox='0 0 57 63'
          xmlns='http://www.w3.org/2000/svg'
          className='fill-current w-7 h-7'
        >
          <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g
              stroke='#6B6C6E'
              strokeWidth='2'
              transform='translate(1.000000, 1.000000)'
            >
              <path d='M37 8C39.4 13.7 41 21.9 41 31 41 39.8 39.6 46.7 37.3 52.4 35.1 57.8 32.2 61 29 61 25.8 61 22.8 57.7 20.6 52.3 18.4 46.7 17 39.8 17 31 17 13.9 22.4 0 29 0 29.7 0 30.4.2 31.1.5M44.2 10.4C48.8 9.5 52.4 10.2 54 12.5 56.1 15.4 54.8 20.5 50.9 26.1M6 37.7C6.4 37.1 6.7 36.5 7.2 35.9M14.2 51.6C9.4 52.6 5.7 52 4 49.6 3.1 48.4 2.8 46.8 3.1 45M44.4 51.7C38.7 50.7 31.5 47.5 24.2 42.5' />
              <path d='M40.7 24.9C51.7 34.3 57.5 44.8 54 49.6 53.8 49.8 53.6 50.1 53.4 50.3M17.3 37.1C6.4 27.7.5 17.2 4 12.4 5.9 9.8 10.3 9.3 16 10.8 21 12.1 26.9 14.9 32.9 18.9' />
              <circle cx='4' cy='41' r='4' />
              <circle cx='49' cy='52' r='4' />
              <circle cx='34' cy='4' r='4' />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default FormulaBar
