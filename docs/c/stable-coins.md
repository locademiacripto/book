# Stable Coins

Como intro hay que decir que hay distintos tipos de stablecoins

1. Con respaldo no-crypto (tbills por ejemplo)
2. Con respaldo crypto (ETH por ejemplo)
3. Algorítmicas (respaldadas por un algoritmo transparente y su demanda)

## Respaldo No Cripto

Sus creadores son los responsables de mantener el equilibrio entre emisión/respaldo

El punto debil de este tipo de stableCoin es la centralizacion, ya que quienes la administran pueden corromperse o tener problemas regulatorios o cosas por el estilo

Ejemplos de este tipo pueden ser dos de las mas conocidas y usadas en crypto: USDC o USDT

USDC es mas transparente y con respaldo 1:1 (está auditada), USDT mas opaca pero tiene mas liquidez en infinidad de brokers cryptos

## Respaldo Cripto

Con respaldo crypto: Ejemplo DAI (les dicen colateralizadas)

La idea de estas es que los tenedores de ETH u otras cryptos puedan gastar USD sin tener que vender sus cryptos. El principal riesgo es de hack del contrato inteligente o de crash de la moneda principal de colateralizacion

Funcionan asi: Hay un algoritmo (contrato inteligente) que emite los USD cuando los usuarios bloquean por ejemplo ETH u otra crypto

![](https://pbs.twimg.com/media/FP67s1kWQAMcp8n?format=png&name=360x360)

## Algorítmicas

No tienen respaldo en activos, sino mecanismos automáticos que ligan su emisión/contracción a la oferta-demanda de una segunda moneda que absorbe en el precio la volatilidad de la oferta/demanda de la stable para que la stable mantenga el 1:1 con el dolar

Ejemplo: UST
Aquí la estable está ligada a la suerte de la moneda nativa de una blockchain que captura el valor /y volatilidad de la oferta/demanda de la misma (en el caso de UST es LUNA)

El riesgo es que la stablecoin crezca mucho y luego, SU blockchain quede en desuso

## Complementos y Aclaraciones

### 1. **Respaldo No-Cripto: Más allá de USDC y USDT**

**USDC (Circle):**
- Auditada mensualmente por Grant Thornton
- Reservas en bancos estadounidenses regulados
- Respaldo 100% en cash y T-Bills de corto plazo
- **Riesgo bancario:** Si quiebra el banco custodio, ¿qué pasa? (vimos esto con Silicon Valley Bank en 2023)

**USDT (Tether):**
- Históricamente opaca, mejoró su transparencia
- Reservas incluyen: commercial paper, préstamos garantizados, otros activos (no solo cash)
- Mayor liquidez pero mayor riesgo de contraparte
- **Analogía bancaria:** Es como un banco con requisitos de encaje más laxos

**Riesgo adicional que falta:** **Congelamiento de fondos.** Tanto USDC como USDT pueden congelar wallets por orden judicial o compliance. Esto pasó con direcciones vinculadas a Tornado Cash.

### 2. **Respaldo Cripto: El tema de la Sobrecolateralización**

El paper menciona DAI correctamente, pero falta un detalle crucial:

**¿Por qué necesitás bloquear $150 de ETH para sacar $100 de DAI?**

Porque ETH es volátil. Si cae 30% de repente y solo tuvieras colateral 1:1, el sistema quedaría insolvente (subcapitalizado).

**Mecanismos de protección:**
- **Ratio mínimo de colateralización:** típicamente 150% (algunos protocolos exigen más)
- **Liquidaciones automáticas:** Si tu ETH cae y tu ratio baja de 150%, el contrato inteligente vende tu ETH automáticamente para recuperar el DAI prestado
- **Incentivos de liquidadores:** Bots que monitorean 24/7 buscando posiciones para liquidar y ganarse una comisión

**Riesgo adicional:** **Cascadas de liquidación.** Si el precio de ETH cae muy rápido, miles de posiciones se liquidan simultáneamente, vendiendo más ETH, bajando más el precio... efecto dominó. Pasó en el "Black Thursday" de marzo 2020.

### 3. **Algorítmicas: La Lección de UST/LUNA**

El paper menciona UST, que colapsó espectacularmente en mayo 2022. Vale la pena explicar **por qué falló:**

**El mecanismo era así:**
- 1 UST siempre podía canjearse por $1 de LUNA
- Si UST caía a $0.95, arbitrajistas compraban UST barato, lo canjeaban por $1 de LUNA, y vendían LUNA con ganancia
- Esto reducía el supply de UST (sube precio) y aumentaba el de LUNA (baja precio)

**El problema: Espiral de muerte**
1. Perdió el peg (bajó a $0.98)
2. Pánico masivo → todos vendiendo UST
3. Para mantener el peg, se emitió LUNA exponencialmente
4. LUNA pasó de ~$80 a $0.0001 en días
5. Se destruyeron $60 mil millones de valor

**Analogía bancaria:** Es como si un banco prometiera cambiar sus billetes por oro, pero en realidad emitiera más billetes cada vez que alguien pedía oro. Eventualmente, inflación infinita.

### 4. **Una Categoría que Falta: Híbridas**

Ejemplos: **FRAX, sUSD**

Combinan respaldo parcial en activos + mecanismos algorítmicos. Intentan balancear descentralización con estabilidad.

### 5. **Comparación con tu Mundo Bancario**

| Tipo | Se parece a... | Riesgo principal |
|------|----------------|------------------|
| **USDC/USDT** | Money market fund | Riesgo de custodia, regulatorio |
| **DAI** | Préstamo con garantía hipotecaria | Volatilidad del colateral |
| **UST (algorítmica)** | Esquema Ponzi con extra steps | Espiral de muerte |

### 6. **Casos de Uso Reales (Desde Perspectiva Bancaria)**

**Remesas:**
- Enviar $100 de Argentina a Venezuela con USDT: minutos, ~$1 de comisión
- Western Union tradicional: días, 5-10% de comisión

**Treasury corporativo:**
Empresas cripto guardan reservas en USDC para:
- Evitar volatilidad de BTC/ETH
- Poder operar 24/7
- Ganar yield en protocolos DeFi (5-10% APY vs 0.5% en banco tradicional)

**Trading:**
Todos los exchanges usan stablecoins como "par base" (como el dólar en Forex). Comprás BTC con USDT, no con pesos o dólares físicos.

### 7. **Riesgos Sistémicos que No Están en el Paper**

**Depegging (pérdida del ancla):**
Incluso USDC perdió temporalmente su peg a $0.88 cuando colapsó Silicon Valley Bank (marzo 2023) porque tenían $3.3B ahí depositados.

**Regulación inminente:**
- Europa: MiCA (Markets in Crypto-Assets) regulará stablecoins desde 2024
- USA: Proyectos de ley que podrían prohibir stablecoins no-bancarias
- **Impacto:** USDT podría ser ilegal en ciertos países

**Dependencia de infraestructura:**
Todas dependen de que Ethereum (o su blockchain base) funcione correctamente. Si Ethereum tiene un bug crítico, todas las stablecoins construidas sobre él están en riesgo.

### 8. **Señales de Alarming para Identificar Stablecoins Riesgosas**

🚩 Prometen intereses muy altos (>15% APY "garantizado")  
🚩 No publican auditorías de reservas  
🚩 El mecanismo de peg no está claro  
🚩 Baja liquidez (menos de $10M en volumen diario)  
🚩 Equipo anónimo  
🚩 No están en exchanges principales (Binance, Coinbase, Kraken)  

### 9. **Pregunta Clave que Deberías Hacerte**

**¿Esta stablecoin sobreviviría una corrida bancaria?**

- **USDC:** Probablemente sí (respaldo 1:1 verificable)
- **USDT:** Zona gris (depende de qué tan líquidas sean sus reservas)
- **DAI:** Sí, mientras ETH no caiga >70% instantáneamente
- **Algorítmicas:** Históricamente, NO

## Conclusión Práctica

El paper de LocademiaCripto es sólido. Lo que agregaría es:

1. **Énfasis en riesgos de liquidación** para las colateralizadas
2. **El caso UST como advertencia existencial** para las algorítmicas
3. **Riesgo regulatorio creciente** para todas
4. **Preferencia por USDC sobre USDT** si buscás seguridad (aunque USDT tiene más liquidez)
5. **Nunca guardes grandes sumas en stablecoins** que no sean top 3 por marketcap
