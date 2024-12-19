export const PieChart = (props: { percentage: number; gradient: 'red' | 'blue' }) => {
  const percentage = Math.min(Math.max(props.percentage, 0), 99.99)
  return (
    <svg viewBox="0 0 100 100" width={93} height={93}>
      <defs>
        <linearGradient id="pieGradient-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#82E4A3" />
          <stop offset="50%" stopColor="#E48290" />
          <stop offset="100%" stopColor="#8C84F7" />
        </linearGradient>
        <linearGradient id="pieGradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A163F1" />
          <stop offset="32.74%" stopColor="#6363F1" />
          <stop offset="67.75%" stopColor="#3498EA" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="#27272A" />
      <path
        d={`M 50 50
          L ${50 + 45 * Math.cos(-Math.PI / 2)} ${50 + 45 * Math.sin(-Math.PI / 2)}
          A 45 45 0 ${percentage > 50 ? 1 : 0} 1 
          ${50 + 45 * Math.cos((percentage / 100) * 2 * Math.PI - Math.PI / 2)}
          ${50 + 45 * Math.sin((percentage / 100) * 2 * Math.PI - Math.PI / 2)}
          Z`}
        fill={`url(#pieGradient-${props.gradient})`}
      />
    </svg>
  )
}
