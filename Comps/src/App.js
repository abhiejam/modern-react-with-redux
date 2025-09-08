import Sidebar from './components/Sidebar';
import Route from './components/Route';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';

function App() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={1}/>
        </Route>
      </div>
    </div>
  )
}

export default App
