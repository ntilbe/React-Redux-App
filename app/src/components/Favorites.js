import React from 'react'
import { connect } from 'react-redux'

import { addToFavorites } from '../actions/actions'


const Favorites = (props) => {

    return (
        <div>
            <h2>Favorite Jokes</h2>
            {props.favoriteJokes.map(joke => (
                <div className='joke' key={joke.id}>
                    <p className='setup' key={`setup${joke.id}`} >{joke.setup}</p>
                    <p className='punchline' key={`punchline${joke.id}`}>{joke.punchline}</p>
                </div>

            ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        favoriteJokes: state.favoriteJokes
    }
}

export default connect(mapStateToProps, {addToFavorites})(Favorites)