'use client'

import { useGlobeTexture } from '@/lib/hooks/use-globe-texture'
import { NodeDataWithStatus, useRiverNodes } from '@/lib/hooks/use-river-nodes'
import { createNoise } from '@/lib/utils'
import { animated, useSpring } from '@react-spring/three'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react'
import { useCallback, useMemo, useRef, useState } from 'react'
import seedrandom from 'seedrandom'
import { Euler, Object3D } from 'three'
import { GradientRing } from './gradient-ring'
import { HomeDot } from './home-dot'
import { NodeTooltips } from './node-tooltips'

export const NodeAnimationScene = () => {
  const [{ noise, mapSize }] = useState(() => ({
    noise: createNoise(seedrandom('towns2')),
    mapSize: [200, 100] as [number, number],
  }))

  const containerRef = useRef<HTMLCanvasElement>(null)

  const [hoveredNode, setHoveredNode] = useState<NodeDataWithStatus | null>(null)

  const onNodeHover = useCallback((node: NodeDataWithStatus | null) => {
    setHoveredNode(node)
  }, [])

  const [hovered, setHovered] = useState(false)
  const onHover = useCallback((h: boolean) => {
    setHovered(h)
  }, [])

  return (
    <>
      <Canvas
        style={{ cursor: hovered ? 'grab' : hoveredNode ? 'pointer' : undefined }}
        ref={containerRef}
      >
        <GlobeScene noise={noise} mapSize={mapSize} onNodeHover={onNodeHover} onHover={onHover} />
      </Canvas>

      <NodeTooltips hoveredNode={hoveredNode} containerRef={containerRef} />
    </>
  )
}

const GlobeScene = (props: {
  noise: ReturnType<typeof createNoise>
  mapSize: [number, number]
  onNodeHover: (node: NodeDataWithStatus | null) => void
  onHover: (hovered: boolean) => void
}) => {
  const { mapSize, noise } = props
  const { canvas, relevantPoints } = useGlobeTexture(noise, mapSize)

  const globeRef = useRef<Object3D>(null)
  const nodeConnections = useRiverNodes({ liveQuery: true })

  const nodes = useMemo(() => {
    return nodeConnections.map((n, index) => ({
      ...n,
      offset: (1 / 3) * index + Math.random() * (0.9 / 3),
    }))
  }, [nodeConnections])

  const size = {
    width: 300,
    height: 300,
  }

  const [[worldRotation, cameraRotation]] = useState(() => [new Euler(), new Euler()])

  const [cameraSpring, setCameraSpring] = useSpring(() => ({
    x: 0,
    y: 0,
    z: 7,
  }))

  const [worldSpring, setWorldSpring] = useSpring(() => ({
    rotationX: 0,
    rotationY: 0,
    config: { mass: 1, tension: 200, friction: 40 },
  }))

  const bindDrag = useDrag(({ delta: [dx, dy], offset, active }) => {
    if (active) {
      cameraRotation.x = Math.min(0.5, Math.max(-0.5, cameraRotation.x + (dx / size.width) * -1))
      cameraRotation.y = Math.min(0.5, Math.max(-0.5, cameraRotation.y + (dy / size.width) * 1))

      worldRotation.y += (dx / size.width) * 2
    } else {
      cameraRotation.x = 0
      cameraRotation.y = 0
      worldRotation.y = 0
    }

    setWorldSpring({
      rotationY: worldRotation.y,
    })

    setCameraSpring({
      x: Math.sin(cameraRotation.x) * 7,
      y: Math.sin(cameraRotation.y) * 7,
      z: Math.cos(cameraRotation.x) * Math.cos(cameraRotation.y) * 7,
      config: active
        ? { mass: 1, tension: 200, friction: 20 }
        : { mass: 1, tension: 40, friction: 20 },
    })
  })

  useFrame((state) => {
    state.camera.lookAt(0, 0, 0)
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
  })

  const onPointerEnter = useCallback(() => {
    props.onHover(true)
  }, [props])

  const onPointerLeave = useCallback(() => {
    props.onHover(false)
  }, [props])

  return (
    <>
      <animated.group
        position-x={cameraSpring.x}
        position-y={cameraSpring.y}
        position-z={cameraSpring.z}
      >
        <PerspectiveCamera makeDefault />
      </animated.group>

      <ambientLight intensity={0.45} />

      <directionalLight intensity={2} position={[-10, 0, 5]} rotation={[-Math.PI, 0, 0]} />

      <GradientRing animating nodes={nodes} radius={2.5} onNodeHover={props.onNodeHover} />

      {/* @ts-ignore */}
      <animated.object3D
        {...bindDrag()}
        rotation-x={worldSpring.rotationX}
        rotation-y={worldSpring.rotationY}
      >
        <object3D ref={globeRef} rotation-y={-0.1}>
          {relevantPoints.map((dot) => (
            <HomeDot key={dot.id} dot={dot} />
          ))}
          <mesh onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
            <sphereGeometry args={[2, 120, 60]} />
            <meshPhysicalMaterial roughness={1}>
              <canvasTexture attach="map" image={canvas} />
            </meshPhysicalMaterial>
          </mesh>
        </object3D>
      </animated.object3D>
    </>
  )
}
