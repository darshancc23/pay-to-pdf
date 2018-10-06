function pdf() {
  let name = window.localStorage.getItem("name");
  let email = window.localStorage.getItem("email");
  let doc = new jsPDF();
  doc.setFontSize(26);
  doc.setTextColor(92, 76, 76);
  doc.text(23, 12, "EVENT!");
  doc.text(23, 81, name);
  doc.text(23, 101, email);
  doc.save("payment_details.pdf");
  window.localStorage.clear();
}

(function() {
  let name = window.localStorage.getItem("name");
  let email = window.localStorage.getItem("email");
  let options = {
    key: "rzp_test_Y3ZqWJHAv7fVti",
    amount: "20000",
    name: "Organization name",
    description: "Event Name",
    image: "/your_logo.png",
    handler: response => {
      setTimeout(function() {
        pdf();
        window.location = "./index.html";
      }, 2000);
    },
    prefill: {
      email: email
    },
    theme: {
      color: "#222"
    }
  };
  let rzp1 = new Razorpay(options);

  document.getElementById("rzp-button1").onclick = function(e) {
    rzp1.open();
    e.preventDefault();
  };
})();
