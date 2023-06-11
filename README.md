# Markdown Generator

This Node.js script reads data from a CSV file and generates a markdown file for each row.

## Getting Started

1. Ensure that you have Node.js and npm installed on your machine. If not, you can download and install from https://nodejs.org/en/download/.

2. Clone this repository to your local machine.

3. Navigate to the project directory and install the necessary packages:

    ```
    npm install
    ```

4. Run the script:

    ```
    node index.js
    ```

The script will read from `items.csv` in the project directory, and generate markdown files in the `markdown-files` directory.

## CSV Schema

The CSV file should have the following columns:

- `title`: The title of the content. This is also used as the filename for the markdown file.
- `description`: A short description of the content.
- `category`: The category of the content.
- `image`: A URL to an image for the content.
- `content`: The main markdown content.

