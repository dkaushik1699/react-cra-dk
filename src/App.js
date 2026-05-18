import { useTodo } from './hooks/useTodo';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Todos</h1>
          <p className="text-gray-600 mb-6">Stay organized and productive</p>
          
          <div className="space-y-6">
            <TodoForm onAddTodo={addTodo} />
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onClearCompleted={clearCompleted}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
