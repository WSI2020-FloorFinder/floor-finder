# Floor Finder

### Problem
The human experience is to learn and experience new things. When a person goes to the IIT tower, they are usually going to a specific room or office. The problem is that the IIT tower has lots of offices and rooms in them. Finding which room, you have to go to can be a real hassle. The elevator does not help with this because it only tells floor numbers. You could look it up but finding which floor a room or office is, can take a long time. This is where the Floor Finder comes in.

### Appetite
This should take 6 weeks to complete.

### Solution v2
In the previous version, the thought was that people coming to the IIT Tower would benefit from an easy-to-use form that could be used to find the office. This was great but it was missing the discovery aspect. The thrill is experiencing the direction for oneself.

#### Version 2
When a person goes to a building, he or she should be able to discover the way to the office for himself or herself. The problem is finding the way. This is where the floor finder comes in.

When you first use the floor finder you will be greeted with an interactive picture of the IIT Tower. The different offices will be highlighted in the picture along with the name of the office.

![IMG_3401](https://user-images.githubusercontent.com/54689875/155069061-1a342d44-7b83-4aaf-931d-d04f118b217d.jpg)

When a person clicks on the highlighted picture, he or she will get a description of the office as a pop-up along with the office hours. There will be two buttons under the description. The first will be a return button and the next will be a direction button.

![IMG_3402](https://user-images.githubusercontent.com/54689875/155069244-9a36cbdc-ff9e-453a-bf66-9a8d8f35abf5.jpg)

When you click the direction button, the screen will clear, and you will see a gif of an elevator going up with the floor number on it.

![IMG_3403](https://user-images.githubusercontent.com/54689875/155069384-b9f238bd-75ad-4be9-8ece-7e2d2ac92313.jpg)

After 3 seconds, the screen will change to a street view of the floor that will interactively show you the directions. This will give the person using the floor finder the feeling of discovery.

![IMG_3404](https://user-images.githubusercontent.com/54689875/155069481-8f9f7432-9ac0-40f7-8b6c-74ca8729bb14.jpg)

To make this happen, the floor finder will need to have the address of every office in the IIT Tower. To get the address, I will need to do web scraping of the IIT website using the Fetch API. The floor finder will also need to have pictures of the floors so that the street view can be made. All this data will be stored in a database. This means that the floor finder could be a website, kiosk or an app.

![IMG_3405](https://user-images.githubusercontent.com/54689875/155069599-25f01fdc-7b99-4709-8d9d-068cda72b2fc.jpg)

This system will also provide a web API for searching IIT offices. 

### Rabbit Holes
1. A way to distinguish between IIT students, faculty, and the public. This would ensure that offices that are only available to one, but won’t be shown to all.

### No Goes
1.This will only give information about the offices. This will not allow you set appointments.

2.This will only show offices not all rooms.
