import { useState, useRef } from 'react'
import MainLayout from '@/layouts/MainLayout'
import FormulaBar from '@/components/FormulaBar'
import FormulaView from '@/components/FormulaView'
import PdfButton from '@/components/Download/PdfButton'
import PngButton from '@/components/Download/PngButton'
import SvgButton from '@/components/Download/SvgButton'

import { downloadSvg, downloadPng } from '@/lib/download'

export default function Home() {
  const [text, setText] = useState('ce{H_2O <=> H^+ + OH^-}')
  const texRef = useRef(null)
  const downloadRef = useRef(null)

  return (
    <MainLayout>
      <div className='flex flex-col items-center justify-center mx-auto space-y-5'>
        <div>
          <FormulaBar text={text} onChange={setText} />
        </div>

        <div>
          <span className='latex'>LaTeX</span> Output:
        </div>
        <div id="texBlock" className='flex p-16 bg-white border rounded '>
          <FormulaView math={text} />
        </div>
        <div ref={texRef} className='p-3 text-white bg-gray-800 rounded'>
          Download as:
        </div>
        <div className='flex space-x-5'>
          <SvgButton onClick={() => downloadSvg(texRef, downloadRef)} />
          <PngButton onClick={() => downloadPng(texRef, downloadRef)} />
          {/* <PngButton onClick={downloadPng} />
          <PdfButton onClick={downloadPdf} /> */}
        </div>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
