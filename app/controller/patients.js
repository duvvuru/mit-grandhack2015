var gcm = require('node-gcm');

module.exports = {
  putNotification: function(req, res) {

    var message = new gcm.Message();
    message.addData('alertType', 'afib');
    
    var sender = new gcm.Sender('AIzaSyDWirjKFkST4K3XLzzLUs2r3u6GrwEsK-g');
    var regIds = [''];

    sender.sendNoRetry(message, regIds, function(err, result) {
      if (err) {
        console.error(err);
      }
      else {
        console.log(result);
      }
    });
  }
};