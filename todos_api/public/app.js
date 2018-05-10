$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(function (data) {
            addTodos(data);
        });

    $("#todoInput").keypress(function (event) {
        if (event.which === 13) {
            createTodo();
        }
    });

    $(".list").on("click", "span", function (event) {
        event.stopPropagation();
        removeTodo($(this).parent());
    })

    $(".list").on("click", "li", function (event) {
        updateTodo($(this));
    })
});


function addTodos(todos) {
    todos.forEach(todo => {
        addTodo(todo);
    });
}

function addTodo(todo) {
    var newTodo = $('<li class = "task">' + todo.name + '<span>X</span></li>');
    newTodo.data("id", todo._id);
    newTodo.data("completed", todo.completed);
    if (todo.completed) {
        newTodo.addClass('done');
    }
    $(".list").append(newTodo);
}

function createTodo() {
    var newTodo = $("#todoInput").val();
    $.post("/api/todos", {
            name: newTodo
        })
        .then(function (data) {
            addTodo(data);
            $("#todoInput").val("");
        })
        .catch(function (err) {
            console.log(err);
        });
}

function removeTodo(todo) {
    var deleteURL = "/api/todos/" + todo.data("id");
    $.ajax({
            method: "DELETE",
            url: deleteURL
        })
        .then(function (data) {
            console.log(data);
            todo.remove();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function updateTodo(todo) {
    var updateURL = "/api/todos/" + todo.data("id");
    var isDone = !todo.data("completed");
    $.ajax({
            method: "PUT",
            url: updateURL,
            data: {
                completed: isDone
            }
        })
        .then(function (data) {
            console.log(data);
            todo.data("completed", isDone);
            todo.toggleClass("done");
        })
        .catch(function (err) {
            console.log(err);
        });
}