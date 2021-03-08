const PanelBadge = ({ children }) => {
  return (
    <span className='fixed absolute p-1.5 text-xs font-medium text-white bg-gray-700 rounded top-2 left-3'>
      {children}
    </span>
  )
}

export default PanelBadge
