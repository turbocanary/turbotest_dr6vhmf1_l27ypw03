const crypto = require('crypto');

function anotherInsecurePassword() {
  // GOOD: the random suffix is now cryptographically secure
  var suffix = crypto.randomBytes(4).toString('hex');  // Generate a secure random hexadecimal string
  var password = "sssAAAA" + suffix;
  return password;
}