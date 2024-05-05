import {useState} from "react";

const Header = () => <h1>give feedback</h1>

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )

}

const StatisticLine = ({text, value, suffixText}) => {
    return (
        <div>{text} : {value}{suffixText}</div>
    )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
    return (
        <>
            <h1>statistics</h1>
            {all > 0
                ? (
                    <>
                        <StatisticLine text="good" value={good}/>
                        <StatisticLine text="neutral" value={neutral}/>
                        <StatisticLine text="bad" value={bad}/>
                        <StatisticLine text="all" value={all}/>
                        <StatisticLine text="average" value={average}/>
                        <StatisticLine text="positive" value={positive} suffixText="%"/>
                    </>
                )
                : (
                    <>
                        <div>No feedback given</div>
                    </>
                )}
        </>
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
            <Statistics all={all} average={average} good={good} bad={bad} positive={positive} neutral={neutral}/>
        </>
    )
}

export default App
