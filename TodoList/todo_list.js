"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const newTodoTextField = document.getElementById("new-todo-text-field");
    const warningMassage = document.getElementById("warning-massage");
    const notesTableBody = document.getElementById("notes-table-body");
    const addButton = document.getElementById("add-button");

    document.querySelector("#add-button").addEventListener("click", function () {
        let newTodoText = newTodoTextField.value.trim();

        if (newTodoText.length === 0) {
            warningMassage.textContent = "Необходимо заполнить поле заметки";
            newTodoTextField.classList.add("red-boarder");
            return;
        }

        newTodoTextField.value = "";
        newTodoTextField.classList.remove("red-boarder");

        warningMassage.textContent = "";

        const todoRow = document.createElement("tr");

        notesTableBody.appendChild(todoRow);

        function setViewMode() {
            todoRow.innerHTML = `
                <td class="text-cell"><textarea class="todo-text-field background-color-gray"></textarea></td>
                <td class="button-cell"><button class="button edit-button">Редактировать</button></td>
                <td class="button-cell"><button class="button delete-button">Удалить</button></td>
            `;

            let todoTextField = todoRow.querySelector(".todo-text-field");
            todoTextField.value = newTodoText;
            todoTextField.readOnly = true;

            todoRow.querySelector(".edit-button").addEventListener("click", function () {
                todoRow.innerHTML = `
                    <td class="text-cell"><textarea class="todo-text-field background-color-white"></textarea></td>
                    <td class="button-cell"><button class="button save-button">Сохранить</button></td>
                    <td class="button-cell"><button class="button cancel-button">Отмена</button></td>
                `;

                todoTextField = todoRow.querySelector(".todo-text-field");
                todoTextField.value = newTodoText;
                const initialTodoTextFieldValue = newTodoText;

                todoRow.querySelector(".save-button").addEventListener("click", function () {
                    newTodoText = todoTextField.value.trim();

                    if (newTodoText.length === 0) {
                        newTodoText = initialTodoTextFieldValue;
                    }

                    setViewMode();
                });

                todoTextField.addEventListener("keydown", function (event) {
                    if (event.key === `Enter` && event.ctrlKey === true) {
                        const clickEvent = new Event("click");
                        todoRow.querySelector(".save-button").dispatchEvent(clickEvent);
                    }
                });

                todoRow.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });
            });

            todoRow.querySelector(".delete-button").addEventListener("click", function () {
                todoRow.remove();
            });
        }

        setViewMode();
    });

    newTodoTextField.addEventListener("focus", function () {
        newTodoTextField.classList.remove("red-boarder");
        warningMassage.textContent = "";
    });

    newTodoTextField.addEventListener("keydown", function (event) {
        if (event.key === `Enter` && event.ctrlKey === true) {
            const clickEvent = new Event("click");
            addButton.dispatchEvent(clickEvent);
        }
    });
});