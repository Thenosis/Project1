public with sharing class orderChatter {
    //declaration of variables to hold the body of the chatter post and user ID
    public string body { get; set;}
	public string userID { get; set;}

    //method to post the feed as a new feed item to the chatter object
	public void postFeed(){
	FeedItem post = new FeedItem();
	post.ParentId = userID;
	post.Body = body;
	insert post;
	}
}
