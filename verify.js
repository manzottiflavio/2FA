const speakeasy=require('speakeasy');

var verified=speakeasy.totp.verify({
    secret: 'Dw^Th$a$Q.OJ9QKp9yPb>prRVXnp@B(D',
    encoding:'ascii',
    token:'132810'
    
});

console.log(verified)