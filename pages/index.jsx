import { useState, useRef } from 'react'
import MainLayout from '@/layouts/MainLayout'
import FormulaBar from '@/components/FormulaBar'
import FormulaView from '@/components/FormulaView'
import LinkBadge from '@/components/LinkBadge'
import PanelBadge from '@/components/PanelBadge'
import DomSvgWrapper from '@/components/DomSvgWrapper'

import IconButton from '@/components/IconButton'
import Pdf from '../public/img/pdfIcon.svg'
import Png from '../public/img/pngIcon.svg'
import Svg from '../public/img/svgIcon.svg'

import { downloadSvg, downloadPng } from '@/lib/download'

export default function Home() {
  const [text, setText] = useState('ce{H_2O <=> H^+ + OH^-}')
  const texRef = useRef(null)
  const downloadRef = useRef(null)

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
      <FormulaBar text={text} onChange={setText} />
      <div className='relative w-3/5 border rounded-lg shadow-sm'>
        <div className='flex justify-center p-16 overflow-auto'>
          <DomSvgWrapper width='800' height='200'>
            <FormulaView math={text} />
          </DomSvgWrapper>
        </div>

        <div className='flex items-center justify-between w-full p-1 space-x-2 text-gray-500 bg-gray-50 bottom'>
          <div className='flex items-center px-2 py-2 space-x-2'>
            <svg
              width='7'
              height='10'
              viewBox='0 0 7 10'
              xmlns='http://www.w3.org/2000/svg'
              className='w-3 h-3 fill-current'
            >
              <g fillRule='evenodd'>
                <path d='M.126 8.46H2.59V4.54H.126V3H4.41v5.46H7V10H.126z'></path>
                <path d='M2.254 1.096a.99.99 0 0 1 .322-.742c.215-.205.513-.308.896-.308.392 0 .705.103.938.308.233.205.35.453.35.742a.908.908 0 0 1-.35.735c-.233.191-.546.287-.938.287-.383 0-.681-.096-.896-.287a.94.94 0 0 1-.322-.735z'></path>
              </g>
            </svg>
            <p>Enter a valid equation</p>
          </div>
          <div className='flex items-center space-x-1'>
            <IconButton
              icon={<Pdf className='w-4 h-4 fill-current' />}
              color='red'
            />
            <IconButton
              icon={<Svg className='w-4 h-4 fill-current' />}
              color='yellow'
            />
            <IconButton
              icon={<Png className='w-4 h-4 stroke-current' />}
              color='blue'
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
