import { useEffect } from 'react'
import texStore from '@/lib/stores'
import TeX from '@matejmazur/react-katex'
require('katex/dist/contrib/mhchem.js')

import * as svgDownload from 'save-svg-as-png'
const FormulaView = ({ math }) => {
  const setTexNode = texStore((state) => state.setTexNode)

  useEffect(() => {
    const texNode = document.getElementById('TeX')
    setTexNode(texNode)
    //svgDownload.saveSvg(texNode, 'test.svg')
    //svgDownload.saveSvgAsPng(texNode, 'test.png')
  })

  return <TeX math={math} />
}

export default FormulaView
