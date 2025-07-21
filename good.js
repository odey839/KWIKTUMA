
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


   const states = [
      "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
      "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
      "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
      "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
      "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
    ];

    const baseRates = {
      "same": 1000,
      "near": 2000,
      "far": 3000
    };

    function populateStates() {
      const pickup = document.getElementById('pickup');
      const delivery = document.getElementById('delivery');
      states.forEach(state => {
        pickup.innerHTML += `<option value="${state}">${state}</option>`;
        delivery.innerHTML += `<option value="${state}">${state}</option>`;
      });
    }

    function calculateCost() {
      const pickup = document.getElementById("pickup").value;
      const delivery = document.getElementById("delivery").value;
      const weight = parseFloat(document.getElementById("weight").value);

      if (!pickup || !delivery || !weight || weight <= 0) {
        document.getElementById("result").innerText = "Please fill all fields correctly.";
        return;
      }

      let distanceRate;
      if (pickup === delivery) {
        distanceRate = baseRates.same;
      } else if (
        (pickup === "Lagos" && delivery === "Ogun") ||
        (pickup === "Abuja" && delivery === "Nasarawa") ||
        (pickup === "Enugu" && delivery === "Anambra")
      ) {
        distanceRate = baseRates.near;
      } else {
        distanceRate = baseRates.far;
      }

      // Add price based on weight
      let weightRate = 0;
      if (weight <= 5) {
        weightRate = 2500;
      } else if (weight <= 10) {
        weightRate = 5000;
      } else if (weight <= 20) {
        weightRate = 10000;
      } else {
        weightRate = 15000;
      }

      const totalCost = distanceRate + weightRate;
      document.getElementById("result").innerText = `Estimated Cost: ₦${totalCost.toLocaleString()} only`;
    }

    populateStates();

    

    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('open'));
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

        // Toggle current answer
        if (!isOpen) {
          answer.classList.add('open');
          question.classList.add('active');
        }
      });
    });

    const trackingData = {
  "KW123456": "📦 In transit – Lagos to Abuja",
  "KW654321": "✅ Delivered – Abuja",
  "KW111222": "🕒 Pending Pickup – Lagos",
  "KW998877": "❌ Cancelled by sender",
  "KW202311": "🛫 Shipped from warehouse",
  "KW558899": "🛬 Arrived at hub – Kaduna",
  "KW300101": "📦 Out for delivery – Port Harcourt",
  "KW447788": "✅ Delivered – Benin City",
  "KW889977": "📦 Held at customs",
  "KW712345": "🛫 Awaiting flight – International",
  "KW101010": "📦 Sorting at warehouse – Kano",
  "KW449304": "🛫 Departed – Enugu hub",
  "KW000999": "🛬 Arrived – Jos distribution center",
  "KW202244": "📦 In customs – Murtala Mohammed Airport",
  "KW556677": "📦 Assigned to delivery agent – Ilorin",
  "KW334455": "✅ Package received by customer – Ibadan",
  "KW112233": "🛫 On flight – International route",
  "KW667788": "📦 Failed delivery – No recipient available",
  "KW990011": "📦 Rescheduled for next delivery attempt",
  "KW443322": "📦 Awaiting pickup – Abeokuta office",
  "KW880011": "📦 Arrived at sorting center – Lagos",
  "KW234567": "✅ Delivered – Uyo",
  "KW765432": "🕒 Awaiting pickup – Calabar",
  "KW192837": "📦 In transit – Warri to Lagos",
  "KW384756": "🛫 Shipped – Port Harcourt hub",
  "KW009988": "✅ Delivered – Enugu",
  "KW445566": "📦 Package delayed due to weather",
  "KW776655": "❌ Returned to sender – Address not found",
  "KW998800": "📦 Processing at customs – Abuja",
  "KW123789": "📦 In transit – Lagos to Jos",
  "KW789321": "🛬 Arrived at Ikeja distribution center",
  "KW543210": "✅ Delivered – Makurdi",
  "KW321123": "📦 Package received – Asaba",
  "KW135790": "🛫 On flight – Lagos to London",
  "KW246801": "📦 En route to delivery hub – Kano",
  "KW369258": "🕒 Rescheduled for tomorrow",
  "KW987654": "✅ Delivered – Ibadan",
  "KW654987": "📦 Out for delivery – Yola",
  "KW147258": "🛬 Received at PHX Airport – Intl",
  "KW258369": "📦 Awaiting final scan – Kaduna",
  "KW159753": "🛫 Shipped from global warehouse",
  "KW753159": "📦 Delayed – Under investigation",
  "KW888000": "✅ Received by customer – Awka",
  "KW000111": "📦 Scanned at gate – Aba",
  "KW111223": "🛬 Arrived – Ikeja hub",
  "KW112200": "🕒 Delayed – Sorting resumed",
  "KW990000": "✅ Cleared customs – Lagos",
  "KW443311": "📦 Package confirmed – Minna",
  "KW223344": "📦 In Transit Enugu to Rivers",
  "KW556600": "✅ Delivered to neighbor – signed by 'John'"
};
 document.getElementById("trackForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const number = document.getElementById("trackingNumber").value.trim().toUpperCase();
    const result = document.getElementById("trackingResult");

    if (trackingData[number]) {
      result.textContent = `Status: ${trackingData[number]}`;
      result.style.color = "green";
    } else {
      result.textContent = "Tracking number not found. Please check and try again.";
      result.style.color = "red";
    }
  });


  