const apiUrl = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    const list = document.getElementById("user-list");
    list.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Erreur lors du chargement :", error);
  }
}

async function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await response.json();
    alert("Utilisateur ajouté : " + JSON.stringify(data));
    fetchUsers();
  } catch (error) {
    console.error("Erreur lors de l'ajout :", error);
  }
}

async function updateUser() {
  const name = document.getElementById("edit-name").value;
  const email = document.getElementById("edit-email").value;

  try {
    const response = await fetch(`${apiUrl}/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await response.json();
    alert("Utilisateur modifié : " + JSON.stringify(data));
    fetchUsers();
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
  }
}

async function deleteUser() {
  try {
    await fetch(`${apiUrl}/1`, { method: "DELETE" });
    alert("Utilisateur avec ID 1 supprimé");
    fetchUsers();
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
  }
}

// Chargement initial
fetchUsers();
