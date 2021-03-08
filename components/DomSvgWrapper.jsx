const DomSvgWrapper = ({ width, height, children }) => {
  // Center Dom element inside svg
  return (
    <svg
      id='TeX'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <foreignObject x='0' y='0' width='100%' height='100%'>
        {children}
      </foreignObject>
    </svg>
  )
}

export default DomSvgWrapper
