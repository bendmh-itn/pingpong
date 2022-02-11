import axios from "axios";
var players = [];
var teams = [];
const URI_API = "https://tabt-rest.floca.be/v1/";

export function getPlayers() {
  return players;
}

export async function loadPlayers() {
  const data = await axios.get(URI_API + "members?club=N186", {
    headers: {
      "X-Application-For":
        "ttsauveniere (ttsauveniere.fr.nf; bdemahieu@gmail.com)",
    },
  });
  players = data.data;
  return data;
}

export function getTeams() {
  return teams;
}

export async function loadTeams() {
  const data = await axios.get(URI_API + "clubs/N186/teams", {
    headers: {
      "X-Application-For":
        "ttsauveniere (ttsauveniere.fr.nf; bdemahieu@gmail.com)",
    },
  });
  teams = data.data;
  return data;
}

export async function getClassement(divisionId) {
  const data = await axios.get(
    URI_API + "divisions/" + divisionId + "/ranking",
    {
      headers: {
        "X-Application-For":
          "ttsauveniere (ttsauveniere.fr.nf; bdemahieu@gmail.com)",
      },
    }
  );
  return data;
}
