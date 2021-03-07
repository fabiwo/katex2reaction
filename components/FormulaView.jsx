import { useEffect, useState } from 'react'
import TeX from '@matejmazur/react-katex'
import { downloadSvgNode } from '@/lib/download'
import KaTeX, { ParseError, KatexOptions } from 'katex'
import chemParse, { ceMacro, puMacro, trippleDashMacro } from '@/lib/mhchem'

const FormulaView = ({ math }) => {
  const [texNode, setTexNode] = useState()

  useEffect(() => {
    const texNode = document.getElementById('TeX').childNodes[0]
    setTexNode(texNode)
  })

  return (
    <>
      <div id='TeX'>
        <TeX math={math} />
      </div>
      <button
        className='p-5 bg-blue-500'
        onClick={() => downloadSvgNode(texNode)}
      >
        test
      </button>
    </>
  )
}

export default FormulaView
