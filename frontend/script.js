// Load user data from backend API
async function loadUserData() {
  try {
    const res = await fetch('http://localhost:5000/api/user');
    const data = await res.json();

    // Prefer saved name from login page
    const savedName = localStorage.getItem("internName") || data.name;

    document.getElementById('name').innerText = savedName;
    document.getElementById('code').innerText = data.referral_code;
    document.getElementById('amount').innerText = data.amount_raised;
  } catch (err) {
    console.error("Error fetching user data:", err);
  }
}

// Load leaderboard from backend API
async function loadLeaderboard() {
  try {
    const res = await fetch('http://localhost:5000/api/leaderboard');
    const data = await res.json();

    const tbody = document.getElementById('leaderboard');
    tbody.innerHTML = ""; // Clear any previous data

    data.forEach((user, index) => {
      const row = `<tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.referral_code}</td>
        <td>₹${user.amount_raised}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
  }
}
