import {useState} from "react";

const Header = () => <h1>give feedback</h1>

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )

}

const Display = ({feedback, value}) => {
    return (
        <div>{feedback} : {value}</div>
    )
}


function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleClick = (feedback) => {
        switch (feedback) {
            case 'good':
                setGood(good + 1)
                break
            case 'neutral':
                setNeutral(neutral + 1)
                break
            case 'bad':
                setBad(bad + 1)
                break
            default:
                break
        }
    }

    return (
        <>
            <Header></Header>
            <Button text="good" handleClick={() => handleClick('good')}></Button>
            <Button text="neutral" handleClick={() => handleClick('neutral')}></Button>
            <Button text="bad" handleClick={() => handleClick('bad')}></Button>
            <p/>
            <Display feedback="good" value={good}/>
            <Display feedback="neutral" value={neutral}/>
            <Display feedback="bad" value={bad}/>
        </>
    )
}

export default App
