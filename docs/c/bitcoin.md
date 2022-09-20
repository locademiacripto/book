# Bitcoin

> Un Sistema de Efectivo Electrónico Peer-to-Peer.

### Help Wanted! <!-- {docsify-ignore} -->

!> Se buscan **colaboradores**, si te interesa ayudar con el contenido o la difusión del mismo, mandame un privado al telegram: [Walddo](https://t.me/waLddo)

## Síntesis

¿?

## ¿Qué es Bitcoin (BTC)?
Bitcoin es una criptomoneda peer-to-peer que pretende funcionar como un medio de intercambio y es independiente de cualquier autoridad central. Los bitcoins se transfieren electrónicamente de forma segura, verificable e inmutable.

Los validadores de red, a los que a menudo se hace referencia como mineros , participan en el mecanismo de consenso de prueba de trabajo basado en SHA-256d para determinar el próximo estado global de la cadena de bloques.

El protocolo Bitcoin tiene un tiempo de bloque objetivo de 10 minutos y un suministro máximo de 21 millones de tokens. La única forma en que se pueden producir nuevos bitcoins es cuando un productor de bloques genera un nuevo bloque válido.

El protocolo tiene una tasa de emisión de tokens que se reduce a la mitad cada 210.000 bloques, o aproximadamente cada 4 años.

A diferencia de las infraestructuras públicas de blockchain que respaldan el desarrollo de aplicaciones descentralizadas (Ethereum), el protocolo Bitcoin se usa principalmente solo para pagos y solo tiene un soporte muy limitado para funcionalidades similares a contratos inteligentes (Bitcoin "Script" se usa principalmente para crear ciertas condiciones antes de que bitcoins se utilizan para gastar).

## Valor de Bitcoin

El tema es que Bitcoin es un activo muy volátil. Si el precio de bitcoin cae fuerte, nuestra billetera de Binance nos dirá cuánto dinero estamos perdiendo, pero CUIDADO aquí, esto no significa que sea pérdida real de dinero. Suponiendo que el precio de Bitcoin esté 10% más arriba que el momento de nuestra compra de bitcoin, la billetera de Binance nos dirá cuánto hemos ganado, y este importe tampoco representa la ganancia REAL en efectivo. Pues no habrá ganancia ni pérdida de dinero hasta que llevemos Bitcoin a una moneda estable, es decir, vendamos Bitcoin por USDT o una moneda que no sea volátil.

## Lightning Network

Lightning Network propone que la escritura sobre la cadena de bloques se utilice exclusivamente para gestionar la apertura y cierre de canales de pagos bidireccionales.

Un usuario puede enviar bitcoines a cualquier otro destino dentro de la red Lightning. Para ello, la red encamina cada transacción mediante enrutamiento «cebolla» entre nodos no confiables, siguiendo una ruta formada por varios canales de pagos contiguos hasta alcanzar al destinatario final. Los pagos se tramitan de manera casi instantánea y con comisiones reducidas. A su vez, el receptor de los fondos puede tener la certeza de que no va a sufrir un ataque de doble gasto, que ninguno de los nodos intermedios puede robar los fondos y que mantiene el control total de los nuevos bitcoines recibidos.

Las transacciones que se tramitan a través de los canales de pagos se hacen fuera de bloque, es decir, no se registran en la cadena de bloques. Cada entidad que mantenga abierto un canal de pagos tiene la responsabilidad de guardar el estado asociado a la última transacción que haya enviado o recibido a través de ese canal, desechando por innecesarias cualquier otra transacción que haya recibido previamente.​ De esta manera, los dispositivos adaptados para el internet de las cosas pueden tramitar miles de transacciones con unos requisitos de hardware mínimos, tanto en capacidad de procesamiento como en almacenamiento de datos.

La red Lightning también permite la interconexión entre distintas cadenas de bloques. En una definición flexible del término, se puede considerar que Lightning Network proporciona una funcionalidad similar a un bus de servicio empresarial para entornos de arquitectura orientada a servicios, aunque en este caso, de acceso abierto y orientado a la coordinación de cadenas de bloques heterogéneas, como cadenas laterales y otras.

Las bajas comisiones hacen que Lightning sea especialmente apropiado para el envío y recepción de micropagos. Como los pagos son fuera de cadena, al menos a nivel teórico, sería posible hacer pagos incluso inferiores a la unidad mínima aceptable en la cadena de bloques (un satoshi, una cienmillonésima de bitcóin).