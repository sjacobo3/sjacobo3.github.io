// load github projects
const username = "sjacobo3";
const container = document.getElementById("projects-grid");

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            // only show projects that have a description
            if (repo.description !== null) {
                const card = document.createElement("div");
                card.className = "project-card";
                card.innerHTML = `
                    <h5 class="project-title">${repo.name}</h3>
                    <p class="project-description">${repo.description || "No description provided."}</p>
                    <a href="${repo.html_url}" target="_blank" class="btn btn-primary">View on Github</a>
                `;
                container.appendChild(card);
            }
        })
    })
    .catch( err => {
        container.innerHTML = "<p>Unable to load projects at this time.</p>";
        console.error("GitHub API error:", err);
    })