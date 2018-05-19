# TrainTime

Link to deployed version: https://szun.github.io/TrainTime/


Problem: Create a website that pushes train data to a Firebase database and correctly outputs new train data when a user inputs their own train data, as well as pushes this data to the same Firebase database. 

Solution: The first I took was finding an API that would give me a JSON response that was advantageous towards my objectives, as well as because I thought it would be better to have real, live train data versus simply hardcoding this information. I found this in the transport's live London Waterloo train station API. Beyond that I had to code the logic that would take the first train time and then output when the next train would arive based on the trains frequency. I used a combination of this API data as well as Moment.JS to perform this specific task. For the Firebase database, I created a new database for this activity and configured it in my app.js file. I then made sure that the train data was then pushed to the firebase database each time the site was accessed. I also allowed for people to input their own train information, that would then run through my Moment.JS algorithm and output the correct times and frequencies as well as push this new information to my Fiebase database.

Technical Approach: Using the education I have garnered from Northwestern University's Full Stack Web Development program, and more specifically with HTML5, CSS3, Bootstrap 4, Javascript ES5, jQuery, Firebase, Moment.JS and the transport API, I was able to complete a quality version of this assigment. 
