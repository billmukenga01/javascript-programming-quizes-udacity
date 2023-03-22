/*
 * Programming Quiz: Facebook Friends
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// your code goes here
const facebookProfile = {
    name: 'Bill',
    friends : 10,
    messages :['message1', 'message2', 'message3', 'message4', 'message5', 'message6'],

    postMessage: function(){
        facebookProfile.messages.push('message9');
    },
    deleteMessage: function(index){
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends += 1;
    },
    removeFriend: function(){
        facebookProfile.friends -= 1;
    }
}


// text code
console.log("Name: ", facebookProfile.name);
console.log("Messages: ", facebookProfile.messages);
facebookProfile.postMessage("New message!");
console.log("Messages: ",  facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log("Messages: ",  facebookProfile.messages);
console.log("Friends: ", facebookProfile.friends);
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.friends);
facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.friends);