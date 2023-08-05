import React, { useEffect, useState } from 'react'
import { Nosft } from 'nosft-core'

// Create an object with the exported module constants
const localConfig = {}

const nosft = Nosft({ ...localConfig })
const { getInscription } = nosft.inscriptions

export interface IHelloWorld {
  inscriptionId: string
}
export const Helloworld = ({ inscriptionId }: IHelloWorld) => {
  const [inscriptionNum, setInscriptionNum] = useState()
  useEffect(() => {
    const getInscriptionNum = async () => {
      const inscription = await getInscription(inscriptionId)
      setInscriptionNum(inscription.inscription.num)
    }
    getInscriptionNum()
  }, [])

  return <div className="text">Inscription num: {inscriptionNum}</div>
}
