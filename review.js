 const reviewsData = [
    { name: "Ama Boateng", review: "This toothpaste leaves my mouth fresh all day. I really love it.", stars: 5 },
    { name: "Kwame Mensah", review: "Very effective and affordable. My whole family uses it now.", stars: 4 },
    { name: "Efua Asare", review: "I noticed less sensitivity after just a few days of use.", stars: 5 },
    { name: "Daniel Owusu", review: "It gives a clean feeling and has a pleasant taste.", stars: 4 },
    { name: "Abena Kusi", review: "Great quality toothpaste. Highly recommended.", stars: 5 },
    { name: "Joseph Arthur", review: "Good toothpaste and easy to find in shops.", stars: 4 },
    { name: "Mary Ann Nyarko", review: "I’ve tried many brands, but this one stands out.", stars: 5 }
  ];

  function getRandomReviews(count = 3) {
    const shuffled = reviewsData.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  function generateStars(stars) {
    return "⭐".repeat(stars);
  }

  document.getElementById("reviewLink").addEventListener("click", function (e) {
    e.preventDefault();

    const selectedReviews = getRandomReviews(3);

    let reviewHTML = selectedReviews.map(r => `
      <div style="text-align:left; margin-bottom:12px;">
        <strong>${r.name}</strong><br>
        <span>${generateStars(r.stars)}</span><br>
        <em>${r.review}</em>
      </div>
    `).join("");

    swal({
      title: "Customer Reviews",
      content: {
        element: "div",
        attributes: {
          innerHTML: reviewHTML
        }
      },
      icon: "success",
      button: "Close"
    });
  });