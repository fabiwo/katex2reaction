import * as svgDownload from 'save-svg-as-png'
import * as domtoimage from '@/lib/domtoimage'

export const downloadSvg = (nodeRef) => {
  const node = nodeRef.current

  domtoimage.toStyledNodeClone(node).then((clone) => {
    console.log(clone)
  })

  // domtoimage.toSvgString(node).then(function (string) {
  //   console.log(string)
  //   const doc = new DOMParser().parseFromString(string, 'image/svg+xml')
  //   const svg = doc.children[0]
  //   svgDownload.saveSvg(svg, 'test.svg', {
  //     excludeUnusedCss: true,
  //     excludeCss: true,
  //   })
  // })
}
export const downloadPng = (nodeRef) => {
  const node = nodeRef.current

  domtoimage.toSvgString(node).then(function (string) {
    const doc = new DOMParser().parseFromString(string, 'image/svg+xml')
    const svg = doc.children[0]
    svgDownload.saveSvgAsPng(svg, 'test.png', {
      scale: 2.5,
      excludeUnusedCss: true,
      excludeCss: true,
    })
  })
}

export const downloadSvgNode = (node) => {
  domtoimage.toStyledNodeClone(node).then((clone) => {
    console.log(clone)
  })

  // domtoimage.toSvgString(node).then(function (string) {
  //   console.log(string)
  //   const doc = new DOMParser().parseFromString(string, 'image/svg+xml')
  //   const svg = doc.children[0]
  //   svgDownload.saveSvg(svg, 'test.svg', {
  //     excludeUnusedCss: true,
  //     excludeCss: true,
  //   })
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

export const replaceSvgsWithImg = (node) => {
  // Get all svgs inside the rendered tex
  const svgs = node.getElementsByTagName('svg')

  // Loop through all svgs and replace them with a <img src=dataUrl/>
  for (let svg of svgs) {
    let img = new Image()

    svgDownload.svgAsDataUri(svg).then((dataUrl) => {
      img.src = dataUrl

      // Replace the old node with img
      //svg.replaceWith(img)
    })
  }
}

export default downloadFileByType
