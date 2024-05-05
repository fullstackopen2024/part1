const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.topic} {props.numberOfCredits}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part topic={props.parts[0]} numberOfCredits={props.credits[0]}/>
            <Part topic={props.parts[1]} numberOfCredits={props.credits[1]}/>
            <Part topic={props.parts[2]} numberOfCredits={props.credits[2]}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.sum}</p>

    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}></Header>
            <Content parts={[part1, part2, part3]} credits={[exercises1, exercises2, exercises3]}></Content>
            <Total sum={exercises1 + exercises2 + exercises3}></Total>
        </div>
    )
}

export default App
