const IconButton = ({ icon, color, onClick }) => {
  const colorClasses = `hover:text-${color}-500`
  return (
    <button
      className={`inline-flex px-2 py-2 transition duration-300 ease-in-out focus:outline-none ${colorClasses}`}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default IconButton
