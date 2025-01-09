import { SECOND_MS } from '@/constants/time-ms'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Color } from 'three'
import { NodeStatusSchema, getNodeData } from '@/data/requests'

const colors = [
    '#1DDCF2',
    '#AFDD79',
    '#FED83D',
    '#C740F2',
    '#9558FA',
    '#FEA56F',
    '#FF60B2',
    '#FEA56F',
    '#DBDE54',
]

export type NodeData = ReturnType<typeof useNodeData>[0]

export const useNodeData = ({ initialData }: { initialData?: NodeStatusSchema} = {}) => {
    const { data } = useQuery({
        queryKey: ['nodeStatus'],
        queryFn: () => getNodeData('omega'),
        refetchInterval: 30 * SECOND_MS,
        initialData,
    })

    const nodeConnections = useMemo(() => {
        const operators = new Set<string>()
        return (
            data?.nodes.map((n, i) => {
                operators.add(n.record.operator)
                const operatorIndex = Array.from(operators.values()).indexOf(n.record.operator)
                return {
                    id: n.record.url,
                    index: i,
                    nodeUrl: n.record.url,
                    statusText: n.record.status_text,
                    status: n.record.status,
                    operator: n.record.operator,
                    operatorIndex,
                    data: n,
                    color: new Color(
                        colors[Math.floor((i * colors.length) / data.nodes.length) % colors.length],
                    ),
                    operatorColor: new Color(colors[(3 + operatorIndex) % colors.length]),
                }
            }) ?? []
        )
    }, [data?.nodes])

    return nodeConnections
}
