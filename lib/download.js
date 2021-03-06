import * as svgDownload from 'save-svg-as-png'
import * as domtoimage from '@/lib/domtoimage'

export const downloadSvg = (nodeRef) => {
  const node = nodeRef.current

  domtoimage.toSvgClone(node).then(function (clone) {
    console.log(clone)
  })

  // domtoimage.toSvg(node.current).then(function (dataUrl) {
  //   console.log(dataUrl)
  // })
}

const downloadFileByType = (type = '') => {
  let fn
  if (type === 'svg') {
    fn = domtoimage.toSvg
  } else if (type === 'png') {
    fn = domtoimage.toPng
  }

  fn(node).then((dataUrl) => {})
}

export default downloadFileByType
