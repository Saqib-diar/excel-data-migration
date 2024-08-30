// Import required libraries
const xlsx = require('xlsx');
const mysql = require('mysql2');

// Load the workbook
const workbook = xlsx.readFile('./file/Lahore_weapon_license.xlsx');

// Get the first sheet
const sheet_name = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheet_name];

// Convert sheet to JSON
const data = xlsx.utils.sheet_to_json(worksheet);

// Set up the MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: null,
  database: 'test',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  // Insert data into MySQL
 //  data.forEach((row) => {
  //   const sql = 'INSERT INTO lahore_weapon_licence SET ?';

  //   connection.query(sql, row, (err, result) => {
  //     if (err) {
  //       console.error('Error inserting data:', err);
  //       return;
  //     }
 //      console.log(`Inserted row with ID: ${result.insertId}`);
  //   });
  // });


  data.forEach((row) => {
    const sql = `
        INSERT INTO lahore_weapon_licence (
            \`License No.\`, \`Applicant Name\`, \`CNIC\`, 
            \`Mobile No.\`, \`Category\`, \`Type\`, 
            \`Issuance District\`, \`Weapon Type\`, 
            \`Weapon Number\`, \`Temporary Address\`, 
            \`Permanent Address\`
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        row['License No.'],
        row['Applicant Name'],
        row['CNIC'],
        row['Mobile No.'],
        row['Category'],
        row['Type'],
        row['Issuance District'],
        row['Weapon Type'],
        row['Weapon Number'],
        row['Temporary Address'],
        row['Permanent Address']
    ];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return;
        }
        console.log(`Inserted row with ID: ${result.insertId}`);
    });
});

  connection.end((err) => {
    if (err) {
      console.error('Error closing the connection:', err);
      return;
    }
    console.log('Connection closed');
  });
});
