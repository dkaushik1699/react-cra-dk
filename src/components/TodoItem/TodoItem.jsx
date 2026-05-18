export const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 cursor-pointer accent-blue-500"
      />
      <span
        className={`flex-1 text-lg ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm font-medium"
      >
        Delete
      </button>
    </div>
  );
};
