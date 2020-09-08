import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchJokes } from '../actions/actions'
import { addToFavorites } from '../actions/actions'

const Jokes = (props) => {
    useEffect(() => {
        props.fetchJokes()
    }, [])

    return (
        <section>
            <h2>Random Jokes</h2>
            <button onClick={props.fetchJokes}>GET NEW JOKES</button>
            {props.isLoading ? <h4>Just a minute...</h4> : null}
            {props.error ? (
                <p style={{ color: "red" }}>
                    Uh oh... something happened 😟 {props.error}
                </p>
            ) : null}
            {props.jokes.map(joke => (
                <div className='joke' key={joke.id}>
                    <p className='setup' key={`setup${joke.id}`} >{joke.setup}</p>
                    <p className='punchline' key={`punchline${joke.id}`}>{joke.punchline}</p>
                    <button onClick={() => props.addToFavorites(joke)}> ADD TO FAVORITES </button>
                </div>

            ))}
        </section>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        jokes: state.jokes,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchJokes, addToFavorites })(Jokes)