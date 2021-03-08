const IconButton = ({ icon, color }) => {
  const colorClasses = `hover:text-${color}-500`
  return (
    <button
      className={`inline-flex px-2 py-2 transition duration-300 ease-in-out focus:outline-none ${colorClasses}`}
    >
      {icon}
    </button>
  )
}

export default IconButton
