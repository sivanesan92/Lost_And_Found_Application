package edu.infosys.lostAndFoundApplication.bean;

public class ChatMessage {
	
	private String sender;
    private String content;
	private String type;  // "QUESTION" or "ANSWER"
    public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public ChatMessage(String sender, String content, String type) {
		super();
		this.sender = sender;
		this.content = content;
		this.type = type;
	}

 

}
