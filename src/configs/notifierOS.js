const notifier = require('node-notifier');
const path = require('path');

function NotificationOS(title, message){
    this.title = title;
    this.message = message;
    this.icon = path.resolve(__dirname, '..', 'assets', 'favicon.png');
    this.sendNotification = () => {
      notifier.notify({
        title: this.title,
        message: this.message,
        icon: this.icon,
        sound: true,
        wait: true 
      });
    }
}

module.exports = NotificationOS;
