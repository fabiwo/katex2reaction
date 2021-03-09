import { useState, useRef } from 'react'
// Import Lib Functions
import texStore from '@/lib/stores'
// Import UI Components
import MainLayout from '@/layouts/MainLayout'
import FormulaBar from '@/components/FormulaBar'
import FormulaView from '@/components/FormulaView'
import LinkBadge from '@/components/LinkBadge'
import PanelBadge from '@/components/PanelBadge'
import DomSvgWrapper from '@/components/DomSvgWrapper'
// Import Icons
import IconButton from '@/components/IconButton'
import Pdf from '../public/img/pdfIcon.svg'
import Png from '../public/img/pngIcon.svg'
import Svg from '../public/img/svgIcon.svg'
import Info from '../public/img/info.svg'

import { downloadSvg, downloadPng, replaceSvgsWithImg } from '@/lib/download'
import * as svgDownload from 'save-svg-as-png'
import domtoimage from 'dom-to-image'

export default function Home() {
  const [text, setText] = useState('H_2O <=> H^+ + OH^-')
  const texNode = texStore((state) => state.texNode)

  return (
    <MainLayout>
      <h1 className='text-2xl'>
        Display beautiful <strong>mathematics</strong> and{' '}
        <strong>chemistry</strong> with the help of
      </h1>
      <div className='flex space-x-2'>
        <LinkBadge href='https://katex.org/'>KaTeX</LinkBadge>
        <LinkBadge href='https://mhchem.github.io/MathJax-mhchem/'>
          mhchem
        </LinkBadge>
      </div>
      <h1 className='text-2xl'>Formula Cheatsheet</h1>
      <LinkBadge href='https://katex.org/docs/supported.html'>
        Cheatsheet
      </LinkBadge>
      <FormulaBar text={text} onChange={setText} />
      {/* Display the math markup
      <FormulaView math={text} output='mathml' /> */}
      <div className='relative w-3/5 border rounded-lg shadow-sm'>
        <div className='flex justify-center p-16 overflow-auto'>
          {/* Download is currently not working. The arrow isnt showing up */}
          {/* <DomSvgWrapper width='800' height='100'>
            <FormulaView math={text} />
          </DomSvgWrapper> */}
          <FormulaView math={text} />
        </div>
        <div className='flex items-center justify-between w-full p-1 space-x-2 text-gray-500 bg-gray-50'>
          <div className='flex items-center px-2 py-2 space-x-2'>
            <Info className='w-4 h-4 fill-current' />
            <p>Enter a valid equation</p>
          </div>
          <div className='flex items-center space-x-1'>
            <IconButton
              icon={<Svg className='w-4 h-4 fill-current' />}
              color='yellow'
              onClick={() => {
                // replaceSvgsWithImg(texNode)
                svgDownload.saveSvg(texNode, 'formula.svg', {
                  excludeUnusedCss: true,
                  excludeCss: false,
                })
              }}
            />
            <IconButton
              icon={<Pdf className='w-4 h-4 fill-current' />}
              color='red'
              onClick={() => console.log(texNode)}
            />
            <IconButton
              icon={<Png className='w-4 h-4 stroke-current' />}
              color='blue'
              onClick={() => svgDownload.saveSvgAsPng(texNode, 'formula.png')}
            />
          </div>
        </div>
        <PanelBadge>Result</PanelBadge>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
