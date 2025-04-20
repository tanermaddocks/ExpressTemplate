# Style Guide for Express Application

## Project Structure
- Organize files using the **MVC (Model-View-Controller)** pattern.
- Store business logic in a `controllers/` directory.
- Use a `models/` directory for database schemas or ORM models.
- Keep configuration files in a `config/` directory.

## Naming Conventions
- Use **camelCase** for variables and functions.
- Use **PascalCase** for class names.
- Use **kebab-case** for filenames (e.g., `user-routes.js`).

## Code Formatting
- Use 2 spaces for indentation.
- Limit lines to 80 characters where possible.
- End files with a newline.
- Use double quotes (`"`) for strings, unless using template literals.

## Best Practices
- Use `async/await` for asynchronous code.
- Handle errors centrally using an error-handling middleware.
- Avoid hardcoding configuration values; use environment variables.

## Dependencies
- Use `dotenv` for environment variables.

## Comments
- Write comments for complex logic or non-obvious code.
- Use `//` for single-line comments and for multi-line comments.

## Version Control
- Make small, logical commits with descriptive messages (e.g., conventional commits).
- Use a branching strategy like `main`, `feature/*`, or `bugfix/*`.

## Security
- Sanitize user inputs to prevent SQL injection and XSS.
- Use HTTPS in production.
- Regularly update dependencies to patch vulnerabilities.

