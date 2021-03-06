import TeX from '@matejmazur/react-katex'
import chemParse, { ceMacro, puMacro, trippleDashMacro } from '@/lib/mhchem'

const FormulaView = ({ math }) => {
  return <TeX math={math} />
}

export default FormulaView
