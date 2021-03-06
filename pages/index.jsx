import { useState, useRef } from 'react'
import MainLayout from '@/layouts/MainLayout'
import FormulaBar from '@/components/FormulaBar'
import FormulaView from '@/components/FormulaView'
import PdfButton from '@/components/Download/PdfButton'
import PngButton from '@/components/Download/PngButton'
import SvgButton from '@/components/Download/SvgButton'

import { downloadSvg } from '@/lib/download'

import domtoimage from 'dom-to-image'
import * as svgDownload from 'save-svg-as-png'

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
        <div className='flex p-16 bg-gray-100 border rounded '>
          <FormulaView math={text} />
        </div>
        <div className='p-3 text-white bg-gray-800 rounded' ref={texRef}>
          Download as:
        </div>
        <div className='flex space-x-5'>
          <SvgButton onClick={() => downloadSvg(texRef)} />
          {/* <PngButton onClick={downloadPng} />
          <PdfButton onClick={downloadPdf} /> */}
        </div>
        <a href='test12' ref={downloadRef}></a>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
