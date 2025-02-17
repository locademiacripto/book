# TradingView

## Seguir ideas
Esta plataforma te brinda la posibilidad de seguir personas, y podrás seguirme para ver los análisis técnicos que comparto para  LocademiaCripto: https://bit.ly/LocademiaCriptoTV, con este enlace te crearás una cuenta gratis y podrás seguir mi usuario para estar al tanto de los análisis técnicos que analicemos en las clases y otras novedades.

>Si decidieras (es opcional) pasar a una cuenta paga, obtendrás un bonus de 30 dólares (únicamente usando nuestro enlace).

## Pine Script

Esto será "muy avanzado" para la mayoría de las personas (incluyéndome!) pero en TradingView han desarrollado una suerte de lenguaje de programación para que los desarrolladores del mundo puedan crear sus propios indicadores técnicos para los gráficos.

He probado varios indicadores "nuevos", creados por distintas personas. Y quiero inmortalizar el código que he probado en esta página, así no se te complica encontrar los códigos recomendados. Por supuesto, una vez que conoces este mundo, ya es cuestión de sumergirse en él, y encontrarás miles de indicadores.

### Códigos

Fuente: conocí este código estudiando sobre estrategias de trading para 3commas: el siguiente código es de "[Andrés Aristizábal](https://youtu.be/c3YxFz-72cU?t=748)"

```
//@version=4
//Basic Hull Ma Pack tinkered by InSilico 
//Converted to Strategy by DashTrader
//Converted to Study by Andrés Aristizábal
// strategy("Hull Suite Strategy", overlay=true, pyramiding=1, default_qty_type= strategy.percent_of_equity, default_qty_value = 100, calc_on_order_fills=false, slippage=0,commission_type=strategy.commission.percent,commission_value=0)
// strat_dir_input = input(title="Strategy Direction", defval="long", options=["long", "short", "all"])
// strat_dir_value = strat_dir_input == "long" ? strategy.direction.long : strat_dir_input == "short" ? strategy.direction.short : strategy.direction.all
// strategy.risk.allow_entry_in(strat_dir_value)

study("HS", overlay=true)

//////////////////////////////////////////////////////////////////////
// Testing Start dates
testStartYear = input(2016, "Backtest Start Year")
testStartMonth = input(1, "Backtest Start Month")
testStartDay = input(1, "Backtest Start Day")
testPeriodStart = timestamp(testStartYear,testStartMonth,testStartDay,0,0)
//Stop date if you want to use a specific range of dates
testStopYear = input(2030, "Backtest Stop Year")
testStopMonth = input(12, "Backtest Stop Month")
testStopDay = input(30, "Backtest Stop Day")
testPeriodStop = timestamp(testStopYear,testStopMonth,testStopDay,0,0)


testPeriod() =>
    time >= testPeriodStart and time <= testPeriodStop ? true : false
// Component Code Stop
//////////////////////////////////////////////////////////////////////
//INPUT
src = input(close, title="Source")
modeSwitch = input("Hma", title="Hull Variation", options=["Hma", "Thma", "Ehma"])
length = input(55, title="Length(180-200 for floating S/R , 55 for swing entry)")
switchColor = input(true, "Color Hull according to trend?")
candleCol = input(false,title="Color candles based on Hull's Trend?")
visualSwitch  = input(true, title="Show as a Band?")
thicknesSwitch = input(1, title="Line Thickness")
transpSwitch = input(40, title="Band Transparency",step=5)

//FUNCTIONS
//HMA
HMA(_src, _length) =>  wma(2 * wma(_src, _length / 2) - wma(_src, _length), round(sqrt(_length)))
//EHMA    
EHMA(_src, _length) =>  ema(2 * ema(_src, _length / 2) - ema(_src, _length), round(sqrt(_length)))
//THMA    
THMA(_src, _length) =>  wma(wma(_src,_length / 3) * 3 - wma(_src, _length / 2) - wma(_src, _length), _length)
    
//SWITCH
Mode(modeSwitch, src, len) =>
      modeSwitch == "Hma"  ? HMA(src, len) :
      modeSwitch == "Ehma" ? EHMA(src, len) : 
      modeSwitch == "Thma" ? THMA(src, len/2) : na
      
//OUT
HULL = Mode(modeSwitch, src, length)
MHULL = HULL[0]
SHULL = HULL[2]

//COLOR
hullColor = switchColor ? (HULL > HULL[2] ? #00ff00 : #ff0000) : #ff9800

//PLOT
///< Frame
Fi1 = plot(MHULL, title="MHULL", color=hullColor, linewidth=thicknesSwitch, transp=50)
Fi2 = plot(visualSwitch ? SHULL : na, title="SHULL", color=hullColor, linewidth=thicknesSwitch, transp=50)
///< Ending Filler
fill(Fi1, Fi2, title="Band Filler", color=hullColor, transp=transpSwitch)
///BARCOLOR
barcolor(color = candleCol ? (switchColor ? hullColor : na) : na)


// if HULL[0] > HULL[2] and testPeriod()
//    strategy.entry("buy", strategy.long)

alertcondition(strategy.long, "HS open long", "message")

// if HULL[0] < HULL[2] and testPeriod()
//    strategy.entry("sell", strategy.short)

alertcondition(strategy.short, "HS close long", "message")
```

***

Mi propio código PineScript bajo desarrollo 

```
//@version=5
indicator("RSI Estocástico y MACD con señales ajustadas", overlay=true)

// Parámetros para el RSI Estocástico
lengthRSI = 14
lengthStoch = 14
smoothK = 3
smoothD = 3
overbought = 80
oversold = 20

// Calculando el RSI Estocástico
rsi = ta.rsi(close, lengthRSI)
k = ta.sma(ta.stoch(rsi, rsi, rsi, lengthStoch), smoothK)
d = ta.sma(k, smoothD)

// Condición para la primera señal (señal de compra existente)
crossUpLow = ta.crossover(k, d) and k < 31

// Nueva condición para la segunda señal (D cruza K hacia abajo con D > 75)
crossDownHigh = ta.crossunder(k, d) and d > 75

// Cálculo del MACD
[macdLine, signalLine, _] = ta.macd(close, 12, 26, 9)

// Señales de MACD
macdCrossUp = ta.crossover(macdLine, signalLine)
macdCrossDown = ta.crossunder(macdLine, signalLine)

// Plotear el ícono cuando se cumple la condición de compra existente
plotshape(series=crossUpLow, title="Señal de Compra Debajo de 31", location=location.belowbar, color=color.green, style=shape.triangleup, size=size.small)

// Plotear el ícono cuando se cumple la nueva condición de venta
plotshape(series=crossDownHigh, title="Señal de Venta Encima de 75", location=location.abovebar, color=color.red, style=shape.triangledown, size=size.small)

// Plotear las señales de compra del MACD
plotshape(series=macdCrossUp, title="MACD Compra", location=location.belowbar, color=color.green, style=shape.xcross, size=size.small)

// Plotear las señales de venta del MACD
plotshape(series=macdCrossDown, title="MACD Venta", location=location.abovebar, color=color.red, style=shape.xcross, size=size.small)
```

Versión Mejorada:

```
//@version=5
indicator("RSI Estocástico y MACD con señales optimizadas", overlay=true)

// Parámetros RSI Estocástico
lengthRSI = 14
lengthStoch = 14
smoothK = 3
smoothD = 3
overbought = 80
oversold = 20

// Calculando el RSI Estocástico
rsi = ta.rsi(close, lengthRSI)
k = ta.sma(ta.stoch(rsi, rsi, rsi, lengthStoch), smoothK)
d = ta.sma(k, smoothD)

// Condiciones mejoradas para señales de RSI Estocástico
crossUpLow = ta.crossover(k, d) and k < 31
crossDownHigh = ta.crossunder(k, d) and d > 75

// Cálculo del MACD
[macdLine, signalLine, macdHist] = ta.macd(close, 12, 26, 9)

// Señales de MACD con filtro de tendencia
macdCrossUp = ta.crossover(macdLine, signalLine) and macdHist > ta.sma(macdHist, 3)
macdCrossDown = ta.crossunder(macdLine, signalLine) and macdHist < ta.sma(macdHist, 3)

// Validación con EMA para confirmar señales de RSI Estocástico
emaFilter = ta.ema(close, 50)
buyCondition = crossUpLow and close > emaFilter
sellCondition = crossDownHigh and close < emaFilter

// Plot de señales con confirmación EMA
plotshape(series=buyCondition, title="Compra RSI", location=location.belowbar, color=color.green, style=shape.triangleup, size=size.small)
plotshape(series=sellCondition, title="Venta RSI", location=location.abovebar, color=color.red, style=shape.triangledown, size=size.small)

// Plot de señales de MACD con filtro de histograma
plotshape(series=macdCrossUp, title="MACD Compra", location=location.belowbar, color=color.blue, style=shape.xcross, size=size.small)
plotshape(series=macdCrossDown, title="MACD Venta", location=location.abovebar, color=color.orange, style=shape.xcross, size=size.small)

// Fondo de sobrecompra/sobreventa
bgcolor(k > overbought ? color.red : k < oversold ? color.green : na, transp=90)

// Alertas para notificaciones en TradingView
alertcondition(buyCondition, title="Alerta Compra", message="Señal de compra confirmada")
alertcondition(sellCondition, title="Alerta Venta", message="Señal de venta confirmada")

```
