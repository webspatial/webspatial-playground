import { useEffect, useRef, type CSSProperties } from 'react'
import './ImageCard.css'
import { appInfo, type Tile } from '../../../utils/utils'
import { Model } from '@webspatial/react-sdk'

type ImageCardProps = {
  tile: Tile
  liked: boolean
  onToggleLike: (tileId: string) => void
}

function ImageCard({ tile, liked, onToggleLike }: ImageCardProps) {
  const backRef = useRef(0)
  const targetBack = useRef(0)
  const xrBackElRef = useRef<HTMLDivElement | null>(null)
  //ts-ignore
  const modelRef = useRef<Model | null>(null)
  const modelRafRef = useRef(0)
  const modelRotationRef = useRef(0)
  
  const tileStyle = {
    height: tile.height,
    backgroundColor: tile.color,
  } as CSSProperties

  useEffect(() => {
    targetBack.current = liked ? 20 : 0
    if(liked){
      modelRafRef.current = requestAnimationFrame(updateModel)
    }
    else{
      cancelAnimationFrame(modelRafRef.current)
      modelRafRef.current = 0
    }
    return () => cancelAnimationFrame(modelRafRef.current)
  }, [liked])

  const updateModel = () => {
    if(modelRef.current){
      modelRef.current.style.transform = `translateY(10px) rotateX(90deg) rotateZ(${modelRotationRef.current}deg)`
      modelRotationRef.current += 2
    }
    modelRafRef.current = requestAnimationFrame(updateModel)
  }

  useEffect(() => {
    let rafId = 0

    const updateBack = () => {
      backRef.current += (targetBack.current - backRef.current) * 0.3
      xrBackElRef.current?.style.setProperty('--xr-back', String(backRef.current))
      rafId = requestAnimationFrame(updateBack)
    }
    rafId = requestAnimationFrame(updateBack)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="tile" style={tileStyle}>
      <div className="tileOverlay" />
      <div className="tileLabel">
        <span className="tileName">{tile.label}</span>
        <div ref={xrBackElRef} enable-xr>
          <button
            type="button"
            className={`likeButton${liked ? ' isLiked' : ''}`}
            style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            }}
            onClick={(e) => {
              e.stopPropagation()
              onToggleLike(tile.id)
            }}
          >
            <Model
              ref={modelRef}
              enable-xr
              src="/heart.usd"
              style={{
                position:"absolute",
                width: '28px',
                height: '28px',
                transform: 'translateY(10px) rotateX(90deg)',
                visibility: (appInfo.isWebSpatial && liked) ? 'visible' : 'hidden',
              }}
            />
            <span style={{position:"absolute", visibility: (!appInfo.isWebSpatial && liked) ? 'visible' : 'hidden'}}>♥</span>
            <span style={{ visibility: liked ? 'hidden' : 'visible' }}>♡</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageCard