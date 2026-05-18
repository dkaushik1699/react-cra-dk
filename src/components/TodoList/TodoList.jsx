import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = ({ todos, onToggle, onDelete, onClearCompleted }) => {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  if (totalCount === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No todos yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          {totalCount - completedCount} of {totalCount} tasks remaining
        </p>
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-sm text-red-500 hover:text-red-700 font-medium transition"
          >
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
};
