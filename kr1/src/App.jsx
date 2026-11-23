import Quiz from "./components/Quiz.jsx";

export default function App() {
    return (
        <main className="page">
            <Quiz
                question="Какая планета Солнечной системы самая большая?"
                answers={["Земля", "Сатурн", "Юпитер", "Нептун"]}
                correctAnswer="Юпитер"
            />
        </main>
    );
}
