const DomSvgWrapper = ({ width, height, children }) => {
  // Center Dom element inside svg
  return (
    <svg
      id='TeX'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <foreignObject width='100%' height='100%'>
        {children}
      </foreignObject>
    </svg>
  )
}

export default DomSvgWrapper
