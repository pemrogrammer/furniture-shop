import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
    const [word, setWord] = useState<string>("hello world");


    return (
        <h1 className="text-3xl font-bold underline bg-blue-300">
            {word}
        </h1>
    )
}

export default Home