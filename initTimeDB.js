const mysql = require('mysql');

let conn = mysql.createConnection({
    host: '34.139.247.88',
    user: 'root',
    password: 'mypassword',
    database: 'MyStoreDB'
});

conn.connect();

conn.query(`Drop Table If Exists Time`,
    (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('Table Dropped');
    }
)
conn.query(`CREATE TABLE Time
            (
                StartTime varchar(100),
                EndTime varchar(100),
                BookedBy varchar(100)
            )
            `
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('Table Created');
    })
// {"desc":"Table","price":"200","imgPath":"/imgs/Table.jpg"}
conn.query(`insert into Time values ("9am","10am","Joe")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});
conn.query(`insert into Time values ("10am","11am","")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});
conn.query(`insert into Time values ("11am","12pm","")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});
conn.query(`insert into Time values ("12pm","1pm","")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});
conn.query(`insert into Time values ("1pm","2pm","")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});
conn.query(`insert into Time values ("2pm","3pm","")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});
conn.query(`insert into Time values ("3pm","4pm","")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});
conn.query(`insert into Time values ("4pm","5pm","")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});
conn.query(`insert into Time values ("5pm","6pm","")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});
conn.query(`insert into Time values ("6pm","7pm","")`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
});

conn.query(`Update Time set BookedBy = 'Jane' Where StartTime ="6pm"`
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row updated');
});


conn.query(`select * from Time `
    , (err, rows, fields) => {
        if (err)
            console.log(err);
        else
            console.log('One row inserted');
        for (r of rows)
            console.log(r);
    });

conn.end();
