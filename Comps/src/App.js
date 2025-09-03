import Sidebar from './components/Sidebar';
import Route from './components/Route';
import TablePage from './pages/TablePage';

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
      </div>
    </div>
  )
}

export default App
