const express=require('express')
const app=express()
const path=require('path')
const nodemailer = require('nodemailer');


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended :true}))

app.get('/',(req,res)=>{
     
   res.render('form')
})
app.post("/sendmail",(req,res)=>{
    let{name,donataion}=req.body
var transpoter=nodemailer.createTransport({
    service: 'gmail',

    auth:{
        user:"rk0346101@gmail.com",
        pass:"jamu jxey inin kcst"
    }
})
var mailOptions ={
    from:"rk0346101@gmail.com",
    to:req.body.to,
    cc:"rk0346101@gmail.com",
    subject:  ` ${name}`,
    text:`Thanks for your message  
             Name:${name}
            Donation: ${donataion} `      
};
transpoter.sendMail(mailOptions,function(error,info){
if(error) {
    console.log(error)
}
else{
    res.redirect('/');
    console.log('mail send  : ' + info.response);
}

})
})



app.listen(8080,()=>{
    console.log('connected')
})
