let nbaPlayers = [];

  function addPlayer(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const team = document.getElementById('team').value;
      const position = document.getElementById('position').value;
      const player = { name, team, position };
      nbaPlayers.push(player);
      displayPlayers();
      document.getElementById('playerForm').reset();
  }

  function displayPlayers() {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';
      nbaPlayers.forEach(player => {
          const playerDiv = document.createElement('div');
          playerDiv.innerHTML = `
              <h3>${player.name}</h3>
              <p>Team: ${player.team}</p>
              <p>Position: ${player.position}</p>
              <button onclick="deletePlayer('${player.name}')">Delete</button>
          `;
          outputDiv.appendChild(playerDiv);
      });
  }

  function deletePlayer(name) {
      nbaPlayers = nbaPlayers.filter(player => player.name !== name);
      displayPlayers();
  }

  document.getElementById('playerForm').addEventListener('submit', addPlayer);