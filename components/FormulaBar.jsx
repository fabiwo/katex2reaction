import PanelBadge from '@/components/PanelBadge'

const FormulaBar = ({ text, onChange }) => {
  return (
    <div className='relative text-gray-700'>
      <PanelBadge>Input</PanelBadge>
      <input
        aria-label='Search articles'
        type='text'
        onChange={(e) => onChange(e.target.value)}
        value={text}
        placeholder='Enter formula'
        className='w-full max-w-3xl pl-12 pr-12 text-2xl text-center placeholder-gray-300 border border-gray-200 rounded-lg shadow-sm h-28 focus:outline-none'
      />{' '}
    </div>
  )
}

export default FormulaBar
