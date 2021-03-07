import { useState, useRef } from 'react'
import MainLayout from '@/layouts/MainLayout'
import FormulaBar from '@/components/FormulaBar'
import FormulaView from '@/components/FormulaView'

import { downloadSvg, downloadPng } from '@/lib/download'

export default function Home() {
  const [text, setText] = useState('ce{H_2O <=> H^+ + OH^-}')
  const texRef = useRef(null)
  const downloadRef = useRef(null)

  return (
    <MainLayout>
      <div className='flex flex-col items-center justify-center mx-auto space-y-5'>
        <h1 className='text-2xl'>
          Display beautiful <strong>mathematics</strong> and{' '}
          <strong>chemistry</strong> with the help of
        </h1>
        <div className='flex space-x-2'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://katex.org/'
            className='px-3 py-3 font-bold text-purple-500 no-underline bg-purple-100 rounded hover:underline'
          >
            KaTeX
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://mhchem.github.io/MathJax-mhchem/'
            className='px-3 py-3 font-bold text-purple-500 no-underline bg-purple-100 rounded hover:underline'
          >
            mhchem
          </a>
        </div>

        <FormulaBar text={text} onChange={setText} />
        <div className='relative w-3/5 border rounded-lg shadow-sm'>
          <span className='fixed absolute p-1.5 text-xs font-medium text-white bg-gray-700 rounded top-2 left-3'>
            Result
          </span>
          <div className='flex justify-center p-16 overflow-auto'>
            {/* <svg id='TeX' width='800' height='200' viewBox='0 0 800 200'>
            <foreignObject
              textAnchor='middle'
              x='0'
              y='0'
              width='100%'
              height='100%'
            >
              <FormulaView math={text} />
            </foreignObject>
          </svg> */}

            <FormulaView math={text} />
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
                <g fill-rule='evenodd'>
                  <path d='M.126 8.46H2.59V4.54H.126V3H4.41v5.46H7V10H.126z'></path>
                  <path d='M2.254 1.096a.99.99 0 0 1 .322-.742c.215-.205.513-.308.896-.308.392 0 .705.103.938.308.233.205.35.453.35.742a.908.908 0 0 1-.35.735c-.233.191-.546.287-.938.287-.383 0-.681-.096-.896-.287a.94.94 0 0 1-.322-.735z'></path>
                </g>
              </svg>
              <p>Enter a valid equation</p>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='inline-flex px-2 py-2 transition duration-300 ease-in-out hover:text-red-500 focus:outline-none'>
                <svg
                  className='w-4 h-4 fill-current'
                  height='16'
                  width='16'
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M15.732 10.245c-0.473-0.507-1.443-0.798-2.816-0.798-0.733 0-1.583 0.073-2.507 0.247-0.521-0.513-1.041-1.113-1.538-1.813-0.353-0.493-0.662-1.013-0.947-1.527 0.542-1.693 0.804-3.073 0.804-4.067 0-1.115-0.402-2.277-1.56-2.277-0.355 0-0.711 0.217-0.9 0.533-0.522 0.939-0.287 2.995 0.611 5.027-0.335 1.013-0.69 1.982-1.133 3.070-0.385 0.917-0.829 1.863-1.282 2.731-2.603 1.056-4.287 2.289-4.445 3.256-0.069 0.365 0.049 0.7 0.305 0.967 0.089 0.073 0.424 0.363 0.987 0.363 1.727 0 3.547-2.853 4.471-4.573 0.71-0.24 1.42-0.458 2.129-0.677 0.779-0.215 1.56-0.389 2.27-0.51 1.823 1.669 3.431 1.933 4.239 1.933 0.995 0 1.349-0.411 1.469-0.748 0.187-0.433 0.047-0.913-0.168-1.16zM14.809 10.948c-0.069 0.363-0.425 0.604-0.924 0.604-0.14 0-0.26-0.025-0.402-0.048-0.907-0.217-1.755-0.677-2.602-1.404 0.833-0.143 1.54-0.167 1.987-0.167 0.493 0 0.92 0.021 1.207 0.096 0.327 0.071 0.847 0.29 0.73 0.92zM9.793 9.81c-0.613 0.127-1.276 0.276-1.963 0.462-0.544 0.149-1.111 0.316-1.68 0.513 0.309-0.601 0.569-1.183 0.805-1.735 0.285-0.68 0.52-1.38 0.757-2.031 0.233 0.407 0.493 0.82 0.753 1.187 0.427 0.58 0.873 1.133 1.32 1.613zM6.693 0.82c0.097-0.193 0.287-0.291 0.452-0.291 0.497 0 0.591 0.579 0.591 1.040 0 0.779-0.236 1.961-0.64 3.311-0.708-1.88-0.757-3.453-0.403-4.061zM4.092 12.085c-1.207 2.029-2.365 3.289-3.075 3.289-0.14 0-0.258-0.050-0.353-0.122-0.143-0.144-0.213-0.315-0.165-0.507 0.142-0.727 1.491-1.742 3.594-2.66z' />
                </svg>
              </button>
              <button className='inline-flex px-2 py-2 transition duration-300 ease-in-out hover:text-yellow-500 focus:outline-none'>
                <svg
                  className='w-4 h-4 fill-current'
                  height='16'
                  width='16'
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M8 0c-0.998 0-1.833 0.643-2.165 1.447-0.102 0.25-0.161 0.541-0.161 0.845 0 0.035 0.001 0.070 0.002 0.104l-0-0.005c-0.214-0.233-0.473-0.421-0.764-0.55l-0.015-0.006c-0.261-0.109-0.564-0.173-0.882-0.173-0.033 0-0.066 0.001-0.098 0.002l0.005-0c-0.618 0.020-1.172 0.276-1.578 0.68l0-0c-0.707 0.705-0.842 1.75-0.509 2.553 0.119 0.288 0.313 0.547 0.547 0.769-0.019-0.001-0.042-0.001-0.064-0.001-0.314 0-0.613 0.062-0.886 0.175l0.015-0.006c-0.803 0.333-1.447 1.167-1.447 2.165s0.643 1.833 1.447 2.165c0.291 0.121 0.616 0.167 0.943 0.157-0.238 0.225-0.433 0.488-0.555 0.78-0.333 0.803-0.197 1.848 0.509 2.553 0.705 0.707 1.75 0.842 2.553 0.509 0.291-0.121 0.553-0.317 0.779-0.555-0.009 0.327 0.038 0.651 0.159 0.943 0.333 0.803 1.167 1.447 2.165 1.447s1.833-0.643 2.165-1.447c0.102-0.25 0.161-0.541 0.161-0.845 0-0.035-0.001-0.070-0.002-0.104l0 0.005c0.225 0.237 0.487 0.435 0.779 0.556 0.803 0.333 1.848 0.197 2.553-0.509 0.707-0.705 0.842-1.75 0.509-2.553-0.135-0.306-0.323-0.565-0.554-0.777l-0.002-0.002c0.030 0.001 0.064 0.002 0.099 0.002 0.304 0 0.595-0.059 0.86-0.166l-0.015 0.005c0.803-0.333 1.447-1.167 1.447-2.165s-0.643-1.833-1.447-2.165c-0.25-0.101-0.539-0.16-0.842-0.16-0.035 0-0.070 0.001-0.105 0.002l0.005-0c0.238-0.225 0.433-0.488 0.555-0.78 0.333-0.803 0.197-1.848-0.509-2.553-0.406-0.404-0.96-0.66-1.574-0.68l-0.004-0c-0.028-0.001-0.061-0.002-0.094-0.002-0.318 0-0.621 0.063-0.897 0.178l0.015-0.006c-0.291 0.121-0.553 0.317-0.779 0.555 0.001-0.029 0.002-0.063 0.002-0.098 0-0.304-0.059-0.594-0.166-0.86l0.005 0.015c-0.333-0.803-1.167-1.447-2.165-1.447zM7.973 1.075c0.008-0 0.018-0 0.028-0 0.7 0 1.268 0.568 1.268 1.268 0 0.35-0.142 0.667-0.371 0.896v0 2.595l1.835-1.835c0-0.7 0.568-1.268 1.268-1.268s1.268 0.568 1.268 1.268c0 0.7-0.568 1.268-1.268 1.268v0l-1.835 1.835h2.595c0.229-0.229 0.546-0.371 0.896-0.371 0.7 0 1.268 0.568 1.268 1.268s-0.568 1.268-1.268 1.268c-0.35 0-0.666-0.142-0.896-0.371l0 0h-2.595l1.835 1.835c0.7 0 1.268 0.568 1.268 1.268s-0.568 1.268-1.268 1.268c-0.7 0-1.268-0.568-1.268-1.268v0l-1.835-1.835v2.595c0.229 0.229 0.371 0.546 0.371 0.896 0 0.7-0.568 1.268-1.268 1.268s-1.268-0.568-1.268-1.268c0-0.35 0.142-0.666 0.371-0.896l-0 0v-2.595l-1.835 1.835c0 0.7-0.568 1.268-1.268 1.268s-1.268-0.568-1.268-1.268c0-0.7 0.568-1.268 1.268-1.268v0l1.835-1.835h-2.595c-0.229 0.229-0.546 0.371-0.896 0.371-0.7 0-1.268-0.568-1.268-1.268s0.568-1.268 1.268-1.268c0.35 0 0.667 0.142 0.896 0.371l-0-0h2.595l-1.835-1.835c-0.7 0-1.268-0.568-1.268-1.268s0.568-1.268 1.268-1.268c0.7 0 1.268 0.568 1.268 1.268l1.835 1.835v-2.595c-0.229-0.229-0.371-0.546-0.371-0.896 0-0.691 0.552-1.253 1.24-1.268l0.001-0z' />
                </svg>
              </button>
              <button className='inline-flex px-2 py-2 transition duration-300 ease-in-out hover:text-blue-500 focus:outline-none'>
                <svg
                  className='w-4 h-4 stroke-current'
                  height='24'
                  width='24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect height='18' width='18' rx='2' ry='2' x='3' y='3' />
                  <circle cx='8.5' cy='8.5' r='1.5' />
                  <path d='M21 15L16 10 5 21' />
                </svg>
              </button>
            </div>
          </div>
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
