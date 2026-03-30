import { useCallback, useEffect, useRef, useState } from 'react'
import { generateBlocks, type Block } from './blocks'
import { BoxEntity, Reality, SceneGraph, UnlitMaterial } from '@webspatial/react-sdk'

type BlockFieldProps = {
  isRunning: boolean
  durationSeconds: number
  blockCount: number
  topInset: number
  onScoreChange: (score: number) => void
  onTimeChange: (timeLeft: number) => void
  onFinish: () => void
}

const MOVE_INTERVAL_MS = 2000

function BlockField3D({
  isRunning,
  durationSeconds,
  blockCount,
  topInset,
  onScoreChange,
  onTimeChange,
  onFinish,
}: BlockFieldProps) {
  const [blocks, setBlocks] = useState<Block[]>([])
  const moveTimeoutIdRef = useRef<number | null>(null)
  const tickIntervalIdRef = useRef<number | null>(null)
  const scoreRef = useRef(0)
  const timeRef = useRef(durationSeconds)

  const clearMoveTimer = useCallback(() => {
    if (moveTimeoutIdRef.current != null) {
      window.clearTimeout(moveTimeoutIdRef.current)
      moveTimeoutIdRef.current = null
    }
  }, [])

  const clearTickTimer = useCallback(() => {
    if (tickIntervalIdRef.current != null) {
      window.clearInterval(tickIntervalIdRef.current)
      tickIntervalIdRef.current = null
    }
  }, [])

  const reshuffle = useCallback(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    setBlocks(generateBlocks(width, height, topInset, blockCount))
  }, [blockCount, topInset])

  const scheduleNextMove = useCallback(() => {
    clearMoveTimer()

    moveTimeoutIdRef.current = window.setTimeout(() => {
      reshuffle()
      scheduleNextMove()
    }, MOVE_INTERVAL_MS)
  }, [clearMoveTimer, reshuffle])

  const handleHit = useCallback(
    (block: Block) => {
      if (!isRunning) return
      scoreRef.current += block.kind === 'good' ? 3 : -1
      onScoreChange(scoreRef.current)
      reshuffle()
      scheduleNextMove()
    },
    [isRunning, onScoreChange, reshuffle, scheduleNextMove],
  )

  useEffect(() => {
    if (!isRunning) {
      clearMoveTimer()
      clearTickTimer()
      setBlocks([])
      return
    }

    scoreRef.current = 0
    timeRef.current = durationSeconds
    onScoreChange(0)
    onTimeChange(durationSeconds)
    reshuffle()
    scheduleNextMove()

    clearTickTimer()
    tickIntervalIdRef.current = window.setInterval(() => {
      timeRef.current = Math.max(0, timeRef.current - 1)
      onTimeChange(timeRef.current)
      if (timeRef.current === 0) {
        clearMoveTimer()
        clearTickTimer()
        onFinish()
      }
    }, 1000)

    return () => {
      clearMoveTimer()
      clearTickTimer()
    }
  }, [
    clearMoveTimer,
    clearTickTimer,
    durationSeconds,
    isRunning,
    onFinish,
    onScoreChange,
    onTimeChange,
    reshuffle,
    scheduleNextMove,
  ])

  return (
    <Reality
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      onSpatialTap={(event) => {
        const targetId = event.target.entity?.userData?.id
        if(!targetId) return
        const block = blocks.find((b) => b.id === targetId)
        if (block) {
          handleHit(block)
        }
      }}
    >
      <UnlitMaterial id="good" color="#00ff00" />
      <UnlitMaterial id="bad" color="#ff0000" />
      <SceneGraph>
        {blocks.map((block) => (
          <BoxEntity
            key={block.id}
            id={block.id}
            name={block.id}
            width={block.size / 1360}
            height={block.size / 1360}
            depth={block.size / 1360}
            cornerRadius={block.size / 2 / 1360}
            materials={[block.kind]}
            position={{ x: (block.x - window.innerWidth / 2) / 1360, y: (block.y - window.innerHeight / 2) / 1360, z: block.z }}
            enableInput={true}
          />
        ))}
      </SceneGraph>
    </Reality>
  )
}

export default BlockField3D