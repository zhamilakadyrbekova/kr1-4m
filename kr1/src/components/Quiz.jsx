import { useState } from "react";

export default function Quiz({ question, answers, correctAnswer }) {
    const [selected, setSelected] = useState(null);

    const isCorrect = selected === correctAnswer;

    return (
        <section className="quiz">
            <h1 className="quiz__question">{question}</h1>

                {isCorrect && <p className="quiz__hint">ПРАВИЛЬНО!</p>}

            <ul className="quiz__answers">
                {answers.map((answer) => (
                    <li key={answer}>
                        <button
                            className={
                                "quiz__answer" + (selected === answer ? " is-selected" : "")
                            }
                            onClick={() => setSelected(answer)}
                        >
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
