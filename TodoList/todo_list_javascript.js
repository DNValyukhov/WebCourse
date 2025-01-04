"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const newTodoTextField = document.getElementById("new-todo-text-field");
    const warningMassage = document.getElementById("warning-massage");
    const notesTableBody = document.getElementById("notes-table-body");

    document.querySelector("#add-button").addEventListener("click", function () {
        let newTodoText = newTodoTextField.value.trim();

        if (newTodoText.length === 0) {
            warningMassage.textContent = "Необходимо заполнить поле заметки";
            return;
        }

        newTodoTextField.value = "";

        warningMassage.textContent = "";

        let todoRow = document.createElement("tr");

        todoRow.innerHTML = `
            <td><textarea class="todo-text-field background-color-gray"></textarea></td>
            <td class="edit-toggle">Редактировать</td>
            <td class="delete-toggle">Удалить</td>
        `;

        notesTableBody.appendChild(todoRow);

        let todoTextField;

        let initialTodoTextFieldValue;

        function setViewMode() {
            todoTextField = todoRow.querySelector(".todo-text-field");
            todoTextField.value = newTodoText;
            todoTextField.readOnly = true;

            todoRow.querySelector(".edit-toggle").addEventListener("click", function () {
                todoRow.innerHTML = `
                    <td><textarea class="todo-text-field background-color-white"></textarea></td>
                    <td class="save-toggle">Сохранить</td>
                    <td class="cancel-toggle">Отмена</td>
                `;

                todoTextField = todoRow.querySelector(".todo-text-field");
                initialTodoTextFieldValue = newTodoText;
                todoTextField.value = newTodoText;

                todoRow.querySelector(".save-toggle").addEventListener("click", function () {
                    newTodoText = todoTextField.value;

                    todoRow.innerHTML = `
                        <td><textarea class="todo-text-field background-color-gray"></textarea></td>
                        <td class="edit-toggle">Редактировать</td>
                        <td class="delete-toggle">Удалить</td>
                    `;

                    setViewMode();
                });

                todoRow.querySelector(".cancel-toggle").addEventListener("click", function () {
                    newTodoText = initialTodoTextFieldValue;

                    todoRow.innerHTML = `
                        <td><textarea class="todo-text-field background-color-gray"></textarea></td>
                        <td class="edit-toggle">Редактировать</td>
                        <td class="delete-toggle">Удалить</td>
                    `;

                    setViewMode();
                });
            });

            todoRow.querySelector(".delete-toggle").addEventListener("click", function () {
                todoRow.remove();
            });
        }

        setViewMode();
    });
});