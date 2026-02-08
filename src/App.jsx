import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>React Card Component</h1>
      <div className="card-container">
        <Card title="Mountain Adventure" />
        <Card title="Beach Vacation" />
        <Card title="City Explorer" />
      </div>
    </div>
  );
}

export default App;
