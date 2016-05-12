# Demo postMessage
Demo de API Javascript para enviar datos a iframes (same-origin/cross-origin) descritos en <a href="">el articulo de mi blog</a>, para correr estos ejemplos te recomiendo usar un servidor local como *[SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html)* de esta forma:

## Dentro de la carpeta origen
```
python -m SimpleHTTPServer 5555 -p
```

## Dentro de la carpeta remoto
```bash
python -m SimpleHTTPServer 4444 -p
```

## Demos en vivo (jsfiddle)
- [Demostración de uso sencilla de postMessage](http://fiddle.jshell.net/davidjsalazarmoreno/jtybdyet/34/ "Demostración de uso sencilla de postMessage")
- [postMessage pasando distintos tipo de argumentos](https://jsfiddle.net/qjv0fqj3/8/ "postMessage pasando distintos tipo de argumentos")
