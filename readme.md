# Excel to Database Importer

## Description

**Excel to Database Importer** is a Node.js application designed to streamline the process of importing data from Excel spreadsheets into a MySQL database. The tool extracts data from `.xlsx` files, maps it to a specified database schema, and inserts it into the database, making data management and analysis more efficient.

## Features

- Extracts data from Excel files (.xlsx).
- Maps and formats data to match the target database schema.
- Inserts data into a MySQL database with error handling.
- Provides customizable configuration for database connection and data mapping.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/) database
- Excel file (.xlsx) with the data to import

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/excel-to-database-importer.git
   cd excel-to-database-importer

2. Install the necessary dependencies:

   ```bash
   npm install

### Configuration

1. Set up the database connection in config/database.js:
   
   ```javascript
   module.exports = {
     host: 'localhost',
     user: 'your_db_user',
     password: 'your_db_password',
     database: 'your_database_name'
   };

2. Define your data mapping and table schema in data_mapping.js.
   
### Usage
1. Run the import script:
   
   ```bash
   node import.js

2. Check the console output for details on the import process and any potential errors.
   
### Contributing
   Contributions are welcome! Please feel free to submit issues or pull requests.
   
   
   