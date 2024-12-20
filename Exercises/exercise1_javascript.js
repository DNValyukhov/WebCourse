"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const newTodoTextField = document.getElementById("new-todo-text-field");
    const newTodoForm = document.getElementById("new-todo-form");
    const goToPageButton = document.getElementById("go-to-page-button");



    newTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        newTodoTextField.classList.remove("invalid");

        const newTodoText = newTodoTextField.value.trim();

        if (newTodoText.length === 0) {
            newTodoTextField.classList.add("invalid");
            return;
        }

        const newTodoItem = document.createElement("li");
        newTodoItem.innerHTML = `
            <div>
                <span class="todo-text"></span>
                <button class="edit-button" type="button">Редактировать</button>
                <button class="delete-button" type="button">Удалить</button>
            </div>
        `;

        newTodoItem.querySelector(".todo-text").textContent = newTodoText;

        todoList.appendChild(newTodoItem);

        newTodoTextField.value = "";
    });

    goToPageButton.addEventListener("click", function () {
        console.log("Клик по клавише \"Перейти\"");
        // window.location = `https://rambler.ru`;
        console.log(location.href);
    });

    const buttons = document.getElementsByTagName("button");

    for(const el of buttons) {
        console.log(el);
    }

    [].forEach.call(buttons, function (button) {
         console.log(button);
    });
});