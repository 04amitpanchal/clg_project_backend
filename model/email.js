var nodemailer = require('nodemailer');

var demo={

 sendMail:function(demo,callback){   
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '04amitpanchal@gmail.com',
    pass: 'Amit@tamana'
  }
});

var mailOptions = {
  from: '04amitpanchal@gmail.com',
  to: demo.to,
  subject: 'sfasdfsdf',
  text: 'sgfsafgsfdsgsgsdfsdfsdfsdf'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
}
module.exports=demo;