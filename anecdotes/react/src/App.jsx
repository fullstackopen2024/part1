import {useState} from 'react'

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const AnecdoteOfTheDay = ({text}) => {
    return (
        <>
            <h1>Anecdote of the day</h1>
            <div>{text}</div>
        </>
    )
}

const MostVotedAnecdote = ({text}) => {
    return (
        <>
            <h1>Anecdote with most votes</h1>
            <div>{text}</div>
        </>
    )
}

function App() {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const zeroVotes = Array(anecdotes.length).fill(0)

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(zeroVotes)
    const [mostVoted, setMostVoted] = useState(0)

    const randomNumber = () => {
        const maxIndex = anecdotes.length;
        return Math.floor(Math.random() * maxIndex)
    }

    function handleNextAnecdoteClick() {
        setSelected(randomNumber())
    }

    function handleVoteClick() {
        const copiedVotes = [...votes]
        copiedVotes[selected] += 1

        if (copiedVotes[selected] > Math.max(...votes)) {
            setMostVoted(selected)
        }
        setVotes(copiedVotes)
    }

    return (
        <>
            <AnecdoteOfTheDay text={anecdotes[selected]}/>
            <div>
                has {votes[selected]} votes
            </div>
            <div>
                <Button text="vote" handleClick={handleVoteClick}></Button>
                <Button text="next anecdote" handleClick={handleNextAnecdoteClick}/>
            </div>
            <MostVotedAnecdote text={anecdotes[mostVoted]}/>
        </>
    )
}

export default App
