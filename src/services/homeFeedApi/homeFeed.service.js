// This format isn't working yet
export function test() {

    const connection = mysql.createPool({
        host     : '192.168.100.121', // Your connection adress (localhost).
        user     : 'test_user',     // Your database's username.
        password : '123456',        // Your database's password.
        database : 'crud_test'   // Your database's name.
      });
      
      // Starting our app.
      const app = express();
      
      // Creating a GET route that returns data from the 'users' table.
      app.get('/users', function (req, res) {
          // Connecting to the database.
          connection.getConnection(function (err, connection) {
      
          // Executing the MySQL query (select all data from the 'users' table).
          connection.query('SELECT * FROM users', function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;
      
            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
          });
        });
      });
      
      // Starting our server.
      app.listen(3000, () => {
       console.log('Go to http://localhost:3000/users so you can see the data.');
      });
}

