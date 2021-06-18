const fs = require("fs");
const { jsPDF } = require("jspdf");

module.exports = async () => {
  console.log("\n* * *\n* * *\nBEFORE\n* * *\n* * *\n");
  try {
    const filename = "./dist/resume/index.html";
    const data = fs.readFileSync(filename, "utf8");
    console.log(data);

    const doc = new jsPDF();
    doc.html(data);
    doc.save("resume.pdf");
  } catch (err) {
    console.error(err);
  }
};
