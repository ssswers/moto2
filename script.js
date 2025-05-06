function sendEmailRequest() {
    const brand = document.getElementById("brand").value;
    if (brand) {
      const email = "perezxian778@email.com"; // Replace with your real email
      const subject = encodeURIComponent(`File Request for ${brand}`);
      const body = encodeURIComponent(`Hi, I would like to request the motorcycle file for: ${brand}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  }
  