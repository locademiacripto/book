# CeFi

>Finanzas Centralizadas

### Auto Inversión

La "auto-inversión" es una forma de comprar una criptomoneda cada cierto tiempo determinado y de forma automática (no manual). Es decir, en una plataforma centralizada, vamos a configurar el sistema para que compra determinado activo (con dinero que tengamos ya sea en la plataforma, o en una tarjeta de crédito/débito si nos aceptan la misma) durante un plazo indeterminado (hasta que lo detengamos manualmente) y ciertos días que determinemos.

Ejemplo práctico:

- Quiero comprar $10 en Bitcoin todos los viernes a las 17 hs (horario de España). 
- Configuro la plataforma para que compre BTC todos los viernes a las 17 hs y pague con TC 10 dólares.
- Tomará dinero de mi tarjeta de crédito.
- Entonces, todos los viernes, la plataforma (casi todas las plataformas exchange de criptomonedas ofrecen esta alternativa), compra BTC por el importe de 10 dólares que serán cargados a la tarjeta de crédito.
- No importará a qué precio esté BTC, comprará igual sea el precio que sea. 

Con Binance Auto-Invest podemos comprar de forma automática y de manera regular las criptomonedas. Esto permite promediar el precio de compra, obteniendo así lo que se conoce como estrategia DCA. Sin embargo, como está el sistema actualmente configurado, comprará por arriba del precio promedio, aumentando de esta forma el riesgo de pérdida por volatilidad de la moneda que estemos comprando. Y esto es un problema! Los usuarios no ven con buenos ojos cuando el resultado del plan de inversión son números rojos.

!> Esta solución se la presenté a Binance para ver si mejoran el sistema de Auto-Inversión. Por el momento no han creado ninguna mejora al respecto. El otro sistema donde ví que tienen similar estrategia de auto-inversión, es [3commas](https://bit.ly/3criptos), aunque ellos le llaman [DCA Bot](https://bit.ly/3criptos), por el momento de Bot no tiene nada, ya que compra regularmente de forma automática días determinados, sin importar a qué precio esté el activo.

#### Propuesta de Solución: Win or Win
Para un sistema que invierta automáticamente, usando DCA “Win or win”, el sistema debe comprar únicamente en el precio promedio o bien por debajo de éste. De esta forma, cada vez que el precio de la criptomoneda baje, se podrá comprar. Si el precio de la misma está por encima del precio DCA del usuario, no debe comprar (salvo que el usuario así lo decida).

El usuario podrá crear un plan de inversión automática con éste método, o bien desactivarlo y comprar siempre que la frecuencia elegida se cumpla.


#### Beneficios
- Aumenta significativamente las posibilidades de ganar contra la volatilidad
- Disminuye significativamente la probabilidad de ver números rojos en el plan de inversión (en el resúmen)
- Los usuarios se van a ver más atraídos por un plan de inversión pensado para HODL que permite comprar cuando el precio baja (y no cuando el precio sube).
- Compra cuando el precio baja, NO compra cuando el precio sube.

**Análisis Gráfico** 

Suponiendo que estamos con Auto-Invest en Binance, para #BNB:

![](../assets/img/win-or-win.png)

Si el 10 de Enero creamos nuestro plan de auto inversión con Binance, habremos comprado BNB aproximadamente en 409 dólares. Si el precio está por arriba de ese valor, el sistema NO debe comprar. Si, en cambio, está por debajo, el sistema debe comprar.

Esto hará que nuestro DCA promedio sea menor con cada compra que el sistema realiza automáticamente.

Cuando el precio de BNB sea superior al DCA, el sistema NO debe comprar, por más que la periodicidad se cumpla. El usuario puede desactivar el método “win or win” si lo desea., pero ya será una decisión del usuario (no del sistema).
