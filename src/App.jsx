import './styles.scss';
import Board from './components/Board';

function App() {
  return (
    <div className="app">
      <button
        onClick={() => {
          console.log('fello');
        }}
      >
        Click me please
      </button>
    </div>
  );
}
export default App;
