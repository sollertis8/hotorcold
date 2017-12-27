import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        if (this.props.onGuessMade) {
            const value = this.input.value;
            this.props.onGuessMade(value);
    }
    this.input.value = '';
    this.input.focus();
}
render() {
    return (
        <form onSubmit={e => this.onSubmit(e)}>
            <label htmlFor="guess"></label>
            &emsp;
            <input
                type="number"
                id="userGuess"
                name="userGuess"
                className="text"
                placeholder="Enter Your Guess"
                min="1"
                max="100"
                aria-labelledby="feedback"
                ref={input => (this.input = input)}
                required
            />
            <button 
                type="submit"
                id="guessButton"
                name="submit"
                className="button"
            >
            Guess
            </button>
        </form>
    );
}
}