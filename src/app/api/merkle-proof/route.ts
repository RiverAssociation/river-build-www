import { NextResponse } from 'next/server'

const merkleProofApiUrl = process.env.AIRDROP_MERKLE_PROOF_API_URL
const merkleRoot = process.env.AIRDROP_MERKLE_ROOT
const conditionId = process.env.AIRDROP_CONDITION_ID

export async function POST(request: Request) {
  const body = await request.json()

  const { claim } = body

  if (!merkleProofApiUrl) {
    return NextResponse.json({ error: 'MERKLE_PROOF_API_URL is not set' }, { status: 500 })
  }

  if (!merkleRoot) {
    return NextResponse.json({ error: 'AIRDROP_MERKLE_ROOT is not set' }, { status: 500 })
  }

  if (!conditionId) {
    return NextResponse.json({ error: 'AIRDROP_CONDITION_ID is not set' }, { status: 500 })
  }

  try {
    const merkleProof = await fetch(merkleProofApiUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        conditionId,
        merkleRoot,
        merkleTree: 'merkleRoot',
        claim,
      }),
    })

    const merkleProofData = await merkleProof.json()

    console.log(merkleProofData)

    return NextResponse.json(merkleProofData)
  } catch (e) {
    console.log(e)
  }
}
