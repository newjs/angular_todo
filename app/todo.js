angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [];
    todoList.viewMode = 'all';

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.deleteTodo = function(index) {
      todoList.todos.splice(index, 1);
    };

    todoList.completeTodo = function(index) {
      todoList.todos[index].done = true;
    };

    todoList.toggleViewMode = function(mode){
      todoList.viewMode = mode;
    };

    todoList.isVisible = function(index) {
      switch(todoList.viewMode) {
        case 'all':
          return true;
        case 'active':
          return !todoList.todos[index].done;
        case 'completed':
          return todoList.todos[index].done; 
      }
      return true;
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });