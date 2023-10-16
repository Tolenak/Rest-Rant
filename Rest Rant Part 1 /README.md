# Project Rest-Rant 

Rest-Rant is an app where users can review restaurants. 


| Method      |        Path | Purpose   |
|:-----------:|:-----------:|:---------:|
|     Get        |     /        | Home Page
|       Get      |      /places       | Places Index Page
|      Post       |       /places      | Create New Place 
|     Get        |    /places/new         | Form Page for creating a new place
|       Get      |    /places/:id         | Details about a particular place
|     Put        |     /places/:id        | Update a particular place
|      Get       |     /places/:id/edit        | Form a page for editing an exisiting page
|     Delete        |    /places/:id         | Delete a particular place
|      Post       |     /places/:id/rant        | Create a rant (comment) about a particular place 
|        Delete     |     /places/:id/:rantid       | Delete a rant (comment) about a particular place 
|     Get        |       *      | 404 page (matches any route not defined above) 
