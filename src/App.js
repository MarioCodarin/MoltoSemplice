import React from 'react';
import Flashcard from './Flashcard';
import { rules } from './rules';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>È molto semplice</h1>
        <p>Ispirato dalla filosofia calcistica di Massimiliano Allegri</p>
      </header>
      <main className="flashcards-container">
        {rules.map(rule => (
          <Flashcard key={rule.id} rule={rule} />
        ))}
      </main>
    </div>
  );
}

export default App;
