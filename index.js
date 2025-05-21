const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

function normalizar(str) {
  return str
    .toLowerCase()
    .replace(/’|'/g, "")
    .replace(/[:,.&()—–]/g, "")
    .replace(/\s+/g, "-");
}

app.get("/precioCT0", async (req, res) => {
  const { carta, expansion } = req.query;

  if (!carta || !expansion) {
    return res.status(400).json({ error: "Faltan parámetros" });
  }

  const url = `https://www.cardtrader.com/es/cards/${normalizar(carta)}-${normalizar(expansion)}`;

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });
    await page.waitForTimeout(2500);

    const precio = await page.evaluate(() => {
      const span = document.querySelector(".ct-zero-price .price");
      return span ? span.innerText.replace(" €", "").replace(",", ".") : "CT0 no encontrado";
    });

    await browser.close();
    res.json({ carta, expansion, precio });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
