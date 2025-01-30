"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const newTodoTextField = document.getElementById("new-todo-text-field");
    const warningMassage = document.getElementById("warning-massage");
    const notesTableBody = document.getElementById("notes-table-body");
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", function () {
        let newTodoText = newTodoTextField.value.trim();

        if (newTodoText.length === 0) {
            warningMassage.textContent = "Необходимо заполнить поле заметки";
            newTodoTextField.classList.add("red-border");
            return;
        }

        newTodoTextField.value = "";
        newTodoTextField.classList.remove("red-border");

        warningMassage.textContent = "";

        const todoRow = document.createElement("tr");

        notesTableBody.appendChild(todoRow);

        function setViewMode() {
            todoRow.innerHTML = `
                <td class="text-cell"><textarea class="todo-text-field background-color-gray" readonly></textarea></td>
                <td class="button-cell"><button class="button edit-button">Редактировать</button></td>
                <td class="button-cell"><button class="button delete-button">Удалить</button></td>
            `;

            let todoTextField = todoRow.querySelector(".todo-text-field");
            todoTextField.value = newTodoText;

            todoRow.querySelector(".edit-button").addEventListener("click", function () {
                todoRow.innerHTML = `
                    <td class="text-cell"><textarea class="todo-text-field background-color-white" placeholder="Это поле не должно быть пустым!"></textarea></td>
                    <td class="button-cell"><button class="button save-button">Сохранить</button></td>
                    <td class="button-cell"><button class="button cancel-button">Отмена</button></td>
                `;

                todoTextField = todoRow.querySelector(".todo-text-field");
                todoTextField.value = newTodoText;

                const saveButton = todoRow.querySelector(".save-button");

                todoTextField.addEventListener("input", function () {
                    if (todoTextField.value.trim().length === 0) {
                        saveButton.classList.add("not-active");
                    } else {
                        saveButton.classList.remove("not-active");
                    }
                });

                saveButton.addEventListener("click", function () {
                    newTodoText = todoTextField.value.trim();

                    setViewMode();
                });

                todoTextField.addEventListener("keydown", function (event) {
                    if (event.key === "Enter" && event.ctrlKey === true && !saveButton.classList.contains("not-active")) {
                        saveButton.click();
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

    newTodoTextField.addEventListener("input", function () {
        newTodoTextField.classList.remove("red-border");
        warningMassage.textContent = "";
    });

    newTodoTextField.addEventListener("focus", function () {
        newTodoTextField.classList.remove("red-border");
        warningMassage.textContent = "";
    });

    newTodoTextField.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && event.ctrlKey === true) {
            newTodoTextField.blur();
            addButton.click();
        }
    });
});