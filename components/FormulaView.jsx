import { useEffect } from 'react'
import texStore from '@/lib/stores'
import TeX from '@matejmazur/react-katex'
require('katex/dist/contrib/mhchem.js')

const FormulaView = ({ math = '', output = 'htmlAndMathml' }) => {
  const setTexNode = texStore((state) => state.setTexNode)

  useEffect(() => {
    const texNode = document.getElementById('texDom')
    setTexNode(texNode)
  })

  return (
    <>
      <TeX
        block
        id='texDom'
        errorColor={'#cc0000'}
        settings={{
          macros: { '*': '\\cdot' },
          output: output,
        }}
      >
        {String.raw`\ce{${math}}`}
      </TeX>
    </>
  )
}

export default FormulaView
