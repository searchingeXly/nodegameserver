const mongoose = require('mongoose');

// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useNewUrlParser', true);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
}
// mongoose.connect('mongodb://127.0.0.1:27017/testdb');

const Schema = mongoose.Schema;

const ChatLineSchema = new Schema({
    username: String,
    chatLine: String
});

const ChatLine = mongoose.model('ChatLine', ChatLineSchema);

ChatLine.create(
    {
        username: "searchingeXly",
        chatLine: "Hello chat!"
    },
    (error, chatLine) => {
        console.log("Error was: " + error);
        console.log(chatLine);
    }
);