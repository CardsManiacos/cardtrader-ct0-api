# CardTrader CT0 API (Final)

Scraper con Puppeteer Core y Chrome-AWS-Lambda, 100% compatible con Render Free.

## Endpoint

```
/precioCT0?carta=Nombre&expansion=Expansión
```

Ejemplo:

```
/precioCT0?carta=Carrot Cake&expansion=Bloomburrow
```

Devuelve:

```json
{
  "carta": "Carrot Cake",
  "expansion": "Bloomburrow",
  "precio": "1.25"
}
```