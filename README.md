# To-Do List Application

This is a simple to-do list application built using PHP (without frameworks), SQLite, JavaScript, and Tailwind CSS. The application allows users to add, view, delete, and complete tasks, as well as prioritize tasks.

## Features

- **Add and view tasks**
- **Delete tasks**
- **Mark tasks as complete**
- **Set task priority** (Low, Medium, High)
- **View tasks sorted by priority and name**
- **View the total and completed task count**

## Technologies Used

- **PHP** (without frameworks)
- **SQLite** database
- **JavaScript** for front-end interactions
- **Tailwind CSS** for styling

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repository/todo-app.git
   cd todo-app
   ```

2. **Initialize the SQLite database:**

   Run `db_init.php` once to create the database file `db.sqlite` and the necessary table.

   ```bash
   php db_init.php
   ```

3. **Start a PHP server:**

   ```bash
   php -S localhost:8000
   ```

4. **Access the application:**

   Open your browser and go to `http://localhost:8000`.

5. **There is an alternative way, use docker-compose provided**

## API Endpoints

The endpoints for the tasks:

- **GET /api.php** - Retrieves all tasks
- **POST /api.php** - Adds a new task (parameters: `name`, `priority`)
- **DELETE /api.php?id={id}** - Deletes a task by ID
- **PUT /api.php** - Updates a task's completed status (parameters: `id`, `completed`)

## Release and Changelogs
- **Release it** - Simple release process and changelogs

## How to Use

1. **Add a Task**: Enter a task name and priority, then click "Add Task."
2. **Complete a Task**: Click the checkbox next to a task to mark it as completed.
3. **Delete a Task**: Click the "Delete" button next to a task to remove it.
4. **Sort Tasks**: Tasks are automatically sorted by priority (High to Low) and then alphabetically by name.

## If I could use a framework like laravel

I would expand the functionality of this to-do application if I was using a framework like Laravel, here are some additional feature ideas:

- **Feature Test**: This is very important part of me to be confident with the code I written that the feature I intended is working.
- **User Authentication**: Enable users to log in and manage their own to-do lists securely.
- **Advanced Table Views**: Add sortable, filterable, and paginated tables to manage large task lists.
- **Audit Logs**: Track all changes to tasks (e.g., edits, deletions) for better traceability.
- **Task Deadlines**: Allow users to set deadlines for tasks and prioritize based on urgency.
- **Notification System**:
  - **Email, SMS, Push, and Inbox Notifications**: Notify users about new tasks or approaching deadlines.
  - **Team Notifications**: Notify other team members when tasks are created or deadlines are near.
- **CI/CD**: From adding github actions for linting and formatting, running test and deployment. Aws codebuild or codepipeline is an alterntiave.
- **Use React for the views with its rich ecosystem, can be coupled using inertiajs or decoupled and just create api resources**
- **Better clean code where making the controllers as slim as possible, by using policies and gates, custom request, events, observers, models, and Api eloquent resources, if its a backend for api consumption only, api can be quickly generated and use laravel scribe to auto generate swagger openapi or postman documentation and following the convention of laravel**
  These features could enhance the usability and functionality of the application, making it suitable for larger teams and more complex task management.

---

Feel free to reach out if you want me this feature implementation using Laravel or any framework you want me to try!
