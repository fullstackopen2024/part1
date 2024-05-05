import {useState} from "react";

const Header = () => <h1>give feedback</h1>

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )

}

const Display = ({feedback, value, suffixText}) => {
    return (
        <div>{feedback} : {value}{suffixText}</div>
    )
}



function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const handleGoodClick = () => {
        let updatedGood = good + 1;
        let updatedAll = updatedGood + neutral + bad;
        let updatedPositive = updatedGood / updatedAll * 100;

        setGood(updatedGood)
        setAll(updatedAll)
        setAverage((updatedGood - bad) / updatedAll)
        setPositive(updatedPositive);
    }

    const handleBadClick = () => {
        let updatedBadClick = bad + 1;
        let updatedAll = good + neutral + updatedBadClick;
        let updatedPositive = good / updatedAll * 100;

        setBad(updatedBadClick)
        setAll(updatedAll)
        setAverage((good - updatedBadClick) / updatedAll)
        setPositive(updatedPositive);
    }

    const handleNeutralClick = () => {
        let updatedNeutral = neutral + 1;
        let updatedAll = good + updatedNeutral + bad;
        let updatedPositive = good / updatedAll * 100;

        setNeutral(updatedNeutral)
        setAll(updatedAll)
        setAverage((good - bad) / updatedAll)
        setPositive(updatedPositive);
    }

    const handleClick = (feedback) => {
        switch (feedback) {
            case 'good':
                handleGoodClick();
                break
            case 'neutral':
                handleNeutralClick()
                break
            case 'bad':
                handleBadClick()
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
            <Display feedback="all" value={all}/>
            <Display feedback="average" value={average}/>
            <Display feedback="positive" value={positive} suffixText="%"/>
        </>
    )
}

export default App
