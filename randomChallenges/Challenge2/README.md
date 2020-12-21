Llega al aeropuerto solo para darse cuenta de que obtuvo sus credenciales del Polo Norte en lugar de su pasaporte. Si bien estos documentos son extremadamente similares, las credenciales del Polo Norte no las emite ningún país y, por lo tanto, no son documentos válidos para viajar en la mayor parte del mundo.

Sin embargo, parece que no eres el único que tiene problemas; Se ha formado una fila muy larga para los escáneres automáticos de pasaportes y el retraso podría alterar su itinerario de viaje.

Debido a una seguridad de red cuestionable, se da cuenta de que es posible que pueda resolver estos dos problemas al mismo tiempo.

Los escáneres automáticos de pasaportes son lentos porque tienen problemas para detectar qué pasaportes tienen todos los campos obligatorios. Los campos esperados son los siguientes:

    byr (año de nacimiento)
    iyr (año de emisión)
    eyr (año de vencimiento)
    hgt (altura)
    hcl (Color de pelo)
    ecl (color de ojos)
    pid (ID de pasaporte)
    cid (ID de país)

Los datos del pasaporte se validan en archivos por lotes (su entrada de rompecabezas). Cada pasaporte se representa como una secuencia de pares clave: valor separados por espacios o líneas nuevas. Los pasaportes están separados por líneas en blanco.

A continuación, se muestra un archivo por lotes de ejemplo que contiene cuatro pasaportes:

ecl: gry pid: 860033327 eyr: 2020 hcl: #FFFFFD
byr: 1937 iyr: 2017 cid: 147 hgt: 183cm

iyr: 2013 ecl: amb cid: 350 eyr: 2023 pid: 028048884
hcl: # cfa07d byr: 1929

hcl: # ae17e1 iyr: 2013
eyr: 2024
ecl: brn pid: 760753108 byr: 1931
altura: 179cm

hcl: # cfa07d eyr: 2025 pid: 166559648
iyr: 2011 ecl: brn hgt: 59in

El primer pasaporte es válido: los ocho campos están presentes. El segundo pasaporte no es válido; le falta hgt (el campo Altura).

El tercer pasaporte es interesante; el único campo que falta es cid, por lo que parece datos de North Pole Credentials, ¡no un pasaporte en absoluto! Seguramente a nadie le importaría si hiciera que el sistema ignorara temporalmente los campos cid faltantes. Trate este "pasaporte" como válido.

Al cuarto pasaporte le faltan dos campos, cid y byr. Falta el cid está bien, pero faltar cualquier otro campo no lo es, por lo que este pasaporte no es válido.
De acuerdo con las reglas anteriores, su sistema mejorado reportará 2 pasaportes válidos.

Cuente el número de pasaportes válidos, aquellos que tienen todos los campos obligatorios. Trate el cid como opcional. En su archivo por lotes, ¿cuántos pasaportes son válidos?
