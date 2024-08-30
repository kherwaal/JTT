const ReceiptInfo = [
  { id: "TourPackage", name: "Silda & Digha Exploration." },
  { id: "TravelsDates", name: "00/00/2024 - 00/00/2024" },
  { id: "DepartureLocation", name: "Kumabad Maingate, Maithon, Dhanbad, Jahrkhand-828207, India" },
  { id: "Destinations", name: "Silda & Digha, West Bengal, India" },
  { id: "Accommodation", name: "Bus Travel (Departure to Silda, Silda to Digha, Digha to Kumabad Maingate)" },
  { id: "Transport", name: "" },
  { id: "Tours&Activities", name: "" },
  { id: "Meals", name: "" },
  { id: "PackageCost", name: "₹0000.00" },
  { id: "Taxes&Fees", name: "₹00.00" },
  { id: "PaymentMethod", name: ['Cash', 'Online'] },
];

document.getElementById("TourPackage").textContent = ReceiptInfo[0].name;
document.getElementById("TravelsDates").textContent = ReceiptInfo[1].name;
document.getElementById("DepartureLocation").textContent = ReceiptInfo[2].name;
document.getElementById("Destinations").textContent = ReceiptInfo[3].name;
document.getElementById("Accommodation").textContent = ReceiptInfo[4].name;
document.getElementById("Transport").textContent = ReceiptInfo[5].name;
document.getElementById("Tours&Activities").textContent = ReceiptInfo[6].name;
document.getElementById("Meals").textContent = ReceiptInfo[7].name;
document.getElementById("PackageCost").textContent = ReceiptInfo[8].name;
document.getElementById("Taxes&Fees").textContent = ReceiptInfo[9].name;
document.getElementById("TotalAmount").textContent = ReceiptInfo[8].name;
document.getElementById("PaymentMethod").textContent = ReceiptInfo[10].name[1];
