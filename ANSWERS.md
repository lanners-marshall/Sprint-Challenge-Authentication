<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

Sessions can be used to persist data across requests. We used sessions in our homework to hold authentication requests on users for logging into a website. A sessions information is stored on the server and is unique to each device, (this also accounts for browsers). We worked through this process by having a user issue a request to log in, the server would then verify the username and password was correct, would then use express-session to create a session for the user with their current client, the server would then produce a cookie, containing a key value pair to the session in its header, to be stored in the browser. Then whenever a user would issue a request to view a resource the client he or she is using would send the cookie back containing their information and would verify it is valid before sending back a response. Essentially a session is a way to authenticate a user. To log out would just destroy the session. 

2. What does bcrypt do to help us store passwords in a secure manner.

A good rule of thumb is never store passwords as plain text in a database. This would be a huge breach of security. What bcrypt does is takes your plain text password and converts it into a hash. Then when a user issues a login request from a client, the server takes that users credentials and runs the same hashing algorithm to see if the two hashes match. If it does then a log will be a success. In this way the developer will only see a hash in the database and never the password. When attackers try to figure out a person's password they are essentially trying to figure out that persons hash. 

3. What does bcrypt do to slow down attackers?

Hashing itself is not enough to keep attackers at bay. To help provide further security bcrypt has an additional parameter when it is making a request. That additional parameter is referred to as a salt. When attackers try to figure out a users hash they run several different hashing algorithms to see if they can find your hash. To make this more difficult cybript adds a salt that further increases the complexity of the hash string. For example if I entered in 14 as the second parameter to bycript when making a hash I would then be running that hashing program over and over making a new hash based on the old hash 2 to the 14 power times.

4. What are the three parts of the JSON Web Token?

Header, payload, signature.



