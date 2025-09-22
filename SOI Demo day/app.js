let rawData = [
  {Vendor_ID: "V001", Vendor_Name: "ABC Traders", Contact_Person: "Rajesh Kumar", Phone: "9876543210", Email: "rajesh@abc.com", Country: "India", Status: "Active"},
  {Vendor_ID: "V002", Vendor_Name: "abc traders", Contact_Person: "R. Kumar", Phone: "9876543210", Email: "rajesh@abc.com", Country: "india", Status: "Active"},
  {Vendor_ID: "V003", Vendor_Name: "Global Supplies", Contact_Person: "Anita Sharma", Phone: "9845098450", Email: "anita@globalsup.com", Country: "India", Status: "Active"},
  {Vendor_ID: "V004", Vendor_Name: "XYZ Enterprises", Contact_Person: "John Doe", Phone: "", Email: "john.doe@xyz.com", Country: "USA", Status: "Inactive"},
  {Vendor_ID: "V005", Vendor_Name: "XYZ Enterprises", Contact_Person: "J. Doe", Phone: "9999999999", Email: "johndoe@xyz.com", Country: "usa", Status: "Active"},
  {Vendor_ID: "V006", Vendor_Name: "Future Tech", Contact_Person: "Mary Thomas", Phone: "8888888888", Email: "mary@futuretech.com", Country: "Germany", Status: "Active"},
  {Vendor_ID: "V007", Vendor_Name: "ABC Traders", Contact_Person: "Rajesh Kumar", Phone: "9876543210", Email: "rajesh@abc.com", Country: "INDIA", Status: "Active"}
];

function loadTableData(tableId, data) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = "";
  data.forEach(row => {
    let tr = "<tr>";
    for (let key in row) {
      tr += <td>${row[key] || "-"}</td>;
    }
    tr += "</tr>";
    tbody.innerHTML += tr;
  });
}
loadTableData("rawTable", rawData);

function parseCSV(content) {
  const lines = content.split("\n").map(line => line.trim()).filter(line => line.length > 0);
  const headers = lines[0].split(",");
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(",");
    headers.forEach((h, j) => {
      const key = h.trim();
      obj[key] = currentline[j] ? currentline[j].trim() : "";
    });
    data.push(obj);
  }
  return data;
}

document.getElementById("fileInput").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      rawData = parseCSV(event.target.result);
      loadTableData("rawTable", rawData);
    };
    reader.readAsText(file);
  }
});

function cleanData() {
  let cleaned = [];
  let duplicates = 0, missing = 0, standardized = 0, inactive = 0;

  rawData.forEach(vendor => {
    let name = vendor.Vendor_Name.trim().toLowerCase();
    let country = vendor.Country.trim().toLowerCase();

    if (!vendor.Phone || vendor.Phone === "-") {
      vendor.Phone = "N/A";
      missing++;
    }

    let stdName = vendor.Vendor_Name.charAt(0).toUpperCase() + vendor.Vendor_Name.slice(1).toLowerCase();
    let stdCountry = country.charAt(0).toUpperCase() + country.slice(1);
    standardized++;

    if (!cleaned.some(v => v.Vendor_Name.toLowerCase() === name && v.Phone === vendor.Phone)) {
      cleaned.push({...vendor, Vendor_Name: stdName, Country: stdCountry});
    } else {
      duplicates++;
    }

    if (vendor.Status.toLowerCase() === "inactive") inactive++;
  });

  loadTableData("cleanedTable", cleaned);

  const report = {duplicates, missing, standardized, inactive};
  localStorage.setItem("vendorReport", JSON.stringify(report));

  alert("✅ Data cleaned! View results in Dashboard.");
}