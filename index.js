const express = require('express');
//let productList = require('./products.json');
const newConnection = require('./DBConnection');

const app = express();

// serve static contents


// dynamic handling
app.get('/add-time', (req,res) => {
    let conn = newConnection();
    conn.connect();
    // Update Time set BookedBy = 'Jane' Where StartTime ="6pm"`
    
    // conn.query(`insert into Product values ('${req.query.desc}',${req.query.price},'${req.query.imgPath}')`
    conn.query(`Update Time set BookedBy = '${req.query.bookName}' Where StartTime ='${req.query.startTimeBook}'`
            ,(err,rows,fields) => {
                res.redirect('/AllDates');        
            } );

    conn.end();
})




app.get('/prod-img', (request,response) =>{
    let content = '';
    let imgpath = request.query.path;
    let desc = request.query.desc;
    content += `<h1>${desc}</h1>`
    content += `<img src='${imgpath}'/>`
    response.send(content);
} )



app.get('/AvailableDates', (request, response) => {
    let conn=newConnection();
    conn.connect();
    let timeList;
    conn.query(`select * from Time`, (err,rows,fields) => {
        if (err)
            response.send('ERROR: ' +err)
        else
        {
            timeList = rows;

            let content ='';
            for (p of timeList)
            {
                content += `<form action='/add-time'>`;
                // ?startTimeBook=${p.StartTime}&endTimeBook=${p.EndTime}'
                // <input type="hidden" name="var" value="..." />
                content += '<div>';
                content += `<input type="hidden" name="startTimeBook" value="${p.StartTime}" />`;
                content += '<p>';
                content += p.StartTime + ":" + p.EndTime;
                content += ' book with your name:  <input name="bookName"/>';
                content += '</p>';
                content += '<input type="submit"></form></div>';
                content += '\n';
            }
            response.send(content);
        }
    })    
    conn.end();
})



app.get('/AllDates', (request, response) => {
    let conn=newConnection();
    conn.connect();
    let timeList;
    conn.query(`select * from Time`, (err,rows,fields) => {
        if (err)
            response.send('ERROR: ' +err)
        else
        {
            timeList = rows;

            let content ='';
            for (p of timeList)
            {
                content += '<div>';
                content += p.StartTime + ":" + p.EndTime +":"+p.BookedBy
                content += '</div>'
                content += '\n';
            }
            response.send(content);
        }
    })    
    conn.end();
})


app.use(express.urlencoded({
    extended:true
}))


app.post('/user-log', (req,res) => {
    let userNa = req.body.userN;
    let userPa = req.body.userP;
    let message = 'Access Denied';
    if(userNa == 'admin' && userPa == '123')
    { // console.log("admin get");
        message = '<p>Welcome Admin</p>\n';
        res.redirect('/AllDates');    
    }
    res.send(message);
});

app.post('/guest-log', (req,res) => {
    let message = 'Welcome Guest';
    
    res.redirect('/AvailableDates');   
    res.send(message);
});

app.use(express.static('static'));

app.listen(80);