package net.codejava.user.api;

public class AuthResponse {
	private String email;
	private String accessToken;
	private Boolean success;
	private String nameDisplay;

	public AuthResponse() {
	}

	public AuthResponse(String email, String nameDisplay, String accessToken, Boolean success) {
		this.email = email;
		this.nameDisplay = nameDisplay;
		this.accessToken = accessToken;
		this.success = success;
	}

	public AuthResponse(String email, String accessToken, Boolean success) {
		this.email = email;
		this.accessToken = accessToken;
		this.success = success;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public Boolean isSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	/**
	 * @return String return the nameDisplay
	 */
	public String getNameDisplay() {
		return nameDisplay;
	}

	/**
	 * @param nameDisplay the nameDisplay to set
	 */
	public void setNameDisplay(String nameDisplay) {
		this.nameDisplay = nameDisplay;
	}

}
