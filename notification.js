// make notification message with email
// take email as a input
// devide email from @

function sendNotification(email){
// const userName = email.split('@')[0]
// const domainName = email.split('@')[1]
if(!email.includes('@')){
    return 'invalid email'
}
 const [userName, domainName] = email.split('@')
  return `Notification sent to ${userName} at ${domainName}`
}

console.log(sendNotification('zihad@gmail.com'))

