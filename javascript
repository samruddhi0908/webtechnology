function bookTicket() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var quantity = document.getElementById("quantity").value;

  if (from === to) {
    alert("From and To stations cannot be the same.");
    return;
  }

  var totalCost = 5 * quantity;

  var confirmation = confirm(
    "Are you sure you want to book " +
      quantity +
      " tickets from " +
      from +
      " to " +
      to +
      " for a total cost of $" +
      totalCost +
      "?"
  );

  if (confirmation) {
    alert("Tickets booked successfully!");
    document.getElementById("quantity").value = 1;
  }
