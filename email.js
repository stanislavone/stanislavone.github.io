const nodemailer = require('nodemailer');
let proxys = [
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
    '178.62.63.229',
]
let ports = [
    '33167',
    '36688',
    '33823',
    '36267',
    '33915',
    '40905',
    '36614',
    '37333',
    '44672',
    '44554',
    '44371',
    '44309',
    '43744',
    '40589',
    '41663',
    '42803',
    '42657',
    '42359',
]

let count = 0;
//let testEmailAccount = nodemailer.createTestAccount();
let email = ['s4day88@yandex.ru', 's4days88@yandex.ru', 's4deay88s@yandex.ru'];
let password = ['sF_ok2988', 'sF_ok29d88', 'sF_ok298s8'];
function checkEmail() {
for(let i = 0; i <= email.length; i++) {
    for(let k = 0; k <= i; k++) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            proxy: 'http://'+proxys[i]+':'+ports[i],
            auth: {
                user: email[i],
                pass: password[i],
            },
            tls: {
                rejectUnathorized: false,
            }
        });
        


        transporter.verify(function(error) {
            if(error) {
                console.log("Error");
            } else {
                console.log("OK");
                console.log(++count)
                console.log(email[i], password[i])
                return true;
                
            }
        });
    }
    }
}

checkEmail();
/*
let result = transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    to: 's4day88@yandex.ru, s4day88@yandex.ru',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server.',
    html:
      'This <i>message</i> was sent from <strong>Node js</strong> server.',
  })
  
  console.log(result)
  */
