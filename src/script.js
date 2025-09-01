class Todo {
  selectors = {
    root: "[data-js-todo]",
    newTaskForm: "[data-js-todo-new-task-form]",
    newTaskInput: "[data-js-todo-new-task-input]",
    searchTaskForm: "[data-js-todo-search-task-form]",
    searchTaskInput: "[data-js-todo-search-task-input]",
    totalTasks: "[data-js-todo-total-tasks]",
    deleteAllButton: "[data-js-todo-delete-all-button]",
    list: "[data-js-todo-list]",
    item: "[data-js-todo-item]",
    itemCheckbox: "[data-js-todo-item-checkbox]",
    itemLabel: "[data-js-todo-item-label]",
    itemDeleteButton: "[data-js-todo-item-delete-button]",
    emptyMassage: "[data-js-todo-empty-massage]",
  };

  stateClasses = {
    isVisible: "is-active",
    isDisappearing: "is-disappearing",
  };

  localStorageKey = "todo-items";

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.newTaskFormElement = this.rootElement.querySelector(
      this.selectors.newTaskForm
    );
    this.newTaskInputElement = this.rootElement.querySelector(
      this.selrctors.newTaskInput
    );
    this.searchTaskFormElement = this.rootElement.querySelector(
      this.selectors.searchTaskForm
    );
    this.searchTaskInputElement = this.rootElement.querySelector(
      this.selectors.searchTaskInput
    );
    this.totalTasksElement = this.rootElement.querySelector(
      this.selectors.totalTasks
    );
    this.deleteAllButtonElement = this.rootElement.querySelector(
      this.selectors.deleteAllButton
    );
    this.listElement = this.rootElement.querySelector(this.selectors.list);
    this.emptyMassageElement = this.rootElement.querySelector(
      this.selectors.emptyMassage
    );
    this.state = {
      items: this.getItemsFromLocalStorage(),
      filteredItems: null,
      searchQuery: "",
    };
  }

  getItemsFromLocalStorage() {}
}

new Todo();
