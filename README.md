# CardTrader CT0 API

Scraper usando puppeteer-core y la ruta correcta de Chromium en Render.

## Endpoint

```
/precioCT0?carta=Nombre&expansion=Expansión
```

Devuelve:

```json
{
  "carta": "Carrot Cake",
  "expansion": "Bloomburrow",
  "precio": "1.25"
}
```