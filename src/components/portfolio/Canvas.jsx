import { useEffect, useRef } from 'react'
import { decodeBlurHash } from 'fast-blurhash'

export function Canvas({ blurHash, width, height }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const pixels = decodeBlurHash(blurHash, width, height)
    const imageData = ctx.createImageData(width, height)
    imageData.data.set(pixels)
    ctx.putImageData(imageData, 0, 0)
  }, [])

  return <canvas ref={canvasRef} width={width} height={height} />
}
