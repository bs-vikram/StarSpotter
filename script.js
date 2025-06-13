const pages = [
      { number: 1, actors: ["Mahesh Babu", "Hrithik Roshan", "Ritesh Deshmukh", "Akshay Kumar", "Vijay Thalapati", "Vicky Kaushal"] },
      { number: 2, actors: ["Hrithik Roshan", "Mahesh Babu", "Ritesh Deshmukh", "Allu Arjun", "Salman Khan"] },
      { number: 3, actors: ["Shahrukh Khan", "Salman Khan", "Vijay Thalapati", "Vicky Kaushal", "Mahesh Babu", "Hrithik Roshan"] },
      { number: 4, actors: ["Varun Dhawan", "Salman Khan", "Vijay Thalapati", "Mahesh Babu", "Shahrukh Khan", "Vicky Kaushal"] }
    ];

    const actorMap = {
      1: "Akshay Kumar",
      2: "Allu Arjun",
      3: "Ritesh Deshmukh",
      4: "Varun Dhawan",
      5: "Vicky Kaushal",
      6: "Hrithik Roshan",
      7: "Shahrukh Khan",
      8: "Vijay Thalapati",
      9: "Salman Khan",
      10: "Mahesh Babu"
    };

    let currentPage = 0;
    let total = 0;

    function startGame() {
      currentPage = 0;
      total = 0;
      document.getElementById("result").innerText = "";
      renderPage();
    }

    function renderPage() {
      if (currentPage >= pages.length) {
        const guess = actorMap[total] || "Unknown Actor";
        document.getElementById("game").innerHTML = "";
        document.getElementById("result").innerText = `🎯 You were thinking of: ${guess}`;
        return;
      }

      const page = pages[currentPage];
      const gameDiv = document.getElementById("game");

      gameDiv.innerHTML = `
        <div class="page-box">
          <strong>Page ${page.number}</strong><br><br>
          <div class="page-actors">
            ${page.actors.map((a, i) => `<div>${i + 1}. ${a}</div>`).join("")}
          </div>
          <br><strong>Is your actor on this page?</strong><br><br>
          <div class="btn-group">
            <button onclick="submitAnswer(true)">Yes</button>
            <button onclick="submitAnswer(false)">No</button>
          </div>
        </div>
      `;
    }

    function submitAnswer(answer) {
      if (answer) total += pages[currentPage].number;
      currentPage++;
      renderPage();
    }

    function toggleTheme() {
      const body = document.body;
      const theme = body.getAttribute("data-theme");
      body.setAttribute("data-theme", theme === "light" ? "dark" : "light");
    }