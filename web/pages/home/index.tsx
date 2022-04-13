import type { NextPage } from 'next'
import { useState } from 'react'

const home: NextPage = () => {
    const [word, setWord] = useState("Home");


    return (
        <h1 className="text-3xl font-bold underline bg-blue-300">
            {word}
        </h1>
    )
}

export default home