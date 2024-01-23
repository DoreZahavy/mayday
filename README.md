# mayday
mayday is a powerful project management tool built using Vue3, VueX, Node.js, Express, and MongoDB. It serves as a comprehensive Monday.com clone, providing an intuitive interface for managing boards, groups, and tasks. The project implements a complex UI with features like drag-and-drop functionality, in-place editing, and a customizable Kanban view. Additionally, it includes a robust backend with user authentication, encrypted session tokens, and secure password storage.

## Technologies Used
* Vue3 (Options API)
* VueX (State Management)
* Node.js
* Express
* MongoDB
* Cloudinary (for file uploads)

## Features
* Create a new board, delete a board, or manage existing boards.
* Drag-and-drop functionality for boards, groups, tasks, and columns.
* In-place editing for textual properties.
* Explore the various data columns and options available for each task, including priority, status, dates, members, numbers, and file uploads.
* Messaging system for communication.
* Activity log for tracking changes.
* Complex filtering system for efficient retrieval of data, including filtering by text, member, group, or task.
* Customizable Kanban view to display tasks organized by priority or status.


## Behind the scenes
* User authentication with encrypted session tokens and hashed passwords.
* Data is stored and managed in a MongoDB database, ensuring efficient and reliable data storage.
* Middleware functions, such as logger and authentication, enhance the backend functionality.
* Enable guest mode to easily open authentication for the sake of demonstrating the app.
* The backend includes a configuration file to store relevant data for production and development modes for easy switching.


