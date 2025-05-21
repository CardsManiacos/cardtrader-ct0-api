# CardTrader CT0 API

Una pequeña API hecha con Node.js, Express y Puppeteer que devuelve el precio mínimo de vendedores CardTrader 0 para una carta de Magic.

## Uso

Consulta tipo:

```
/precioCT0?carta=Carrot Cake&expansion=Bloomburrow
```

Devuelve:

```json
{
  "carta": "Carrot Cake",
  "expansion": "Bloomburrow",
  "precio": "1.35"
}
```
