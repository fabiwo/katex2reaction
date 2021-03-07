import { useEffect, useState } from 'react'
import TeX from '@matejmazur/react-katex'
import KaTeX, { ParseError, KatexOptions } from 'katex'
import chemParse, { ceMacro, puMacro, trippleDashMacro } from '@/lib/mhchem'

import * as svgDownload from 'save-svg-as-png'
const FormulaView = ({ math }) => {
  const [texNode, setTexNode] = useState()

  useEffect(() => {
    const texNode = document.getElementById('TeX')
    //svgDownload.saveSvg(texNode, 'test.svg')
    //svgDownload.saveSvgAsPng(texNode, 'test.png')
  })

  return <TeX math={math} />
}

export default FormulaView
