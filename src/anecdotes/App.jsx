import {useState} from 'react'
const App = () => {
    const anecdotes = [
     'If it hurts, do it more often.',
     'Adding manpower to a late software project makes it later!',  
     'The first 90 percent of the code accounts for the first 10 percent of the development time...',
     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
     'Premature optimization is the root of all evil.',
     'Debugging is twice as hard as writing the code in the first place...',
     'The only way to go fast, is to go well.'
    ]
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    const handleNext = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomIndex);
    }
    const handleVote = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }
    const maxVotes = Math.max(...votes)
    const mostVotedIndex = votes.indexOf(maxVotes)

    return(
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={handleNext}>next anecdote</button>
            <button onClick={handleVote}>vote</button>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[mostVotedIndex]}</p>
            <p>has {votes[mostVotedIndex]} votes</p>
        </div>
    )
}
export default App