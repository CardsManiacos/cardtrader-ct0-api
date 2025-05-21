# CardTrader CT0 API

Scraper con Puppeteer Core y Chrome-AWS-Lambda (compatible con Render y AWS).

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