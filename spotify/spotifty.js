const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "9b413863ed954f3a8c448feb12c50c45";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;