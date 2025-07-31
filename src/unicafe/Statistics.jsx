const Statistics = ({ good, neutral, bad}) => {
    const total = good + neutral + bad
    if(total === 0) {
        return <p>No feedback given</p>
    }

    const average = (good - bad) / total
    const positive = (good / total) * 100

    return(
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Average: {average.toFixed(1)}</p>
            <p>Positive: {positive.toFixed(1)} %</p>
        </div>
    )
}

export default Statistics