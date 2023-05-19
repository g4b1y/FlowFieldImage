# Dokumentation FlowField

FlowFields sind ein leistungsstarkes Konzept in der Computergrafik und der Simulation von Bewegungen. Sie finden Anwendung in verschiedenen Bereichen wie der Animation, der Spieleentwicklung und der Robotik. 

### Was sind FlowFields?
Ein FlowField ist eine Technik zur Darstellung von Vektoren, die die Bewegung von Objekten in einem bestimmten Raum beschreiben. Es wird häufig in Situationen eingesetzt, in denen Objekte auf natürliche Weise durch einen Raum navigieren müssen, wie z.B. Flüssigkeiten, Partikel oder Tiere in einer Simulation. Ein FlowField besteht aus einem Raster von Vektoren, die jedem Punkt im Raum zugeordnet sind. Diese Vektoren repräsentieren die Richtung und Geschwindigkeit, in die sich ein Objekt an diesem Punkt bewegen sollte.

### Nutzen von FlowFields
FlowFields bieten eine Reihe von Vorteilen und Anwendungsmöglichkeiten:

1. **Natürliche Bewegungen**: Durch die Verwendung von FlowFields können Bewegungen realistischer und natürlicher gestaltet werden. Objekte können fließende und organische Bewegungen ausführen, die den Gesetzen der Physik entsprechen.

2. **Kollisionserkennung**: FlowFields ermöglichen es Objekten, Hindernissen oder anderen Objekten in ihrer Umgebung auszuweichen. Die Vektoren im FlowField können so angepasst werden, dass sie Kollisionen vermeiden und alternative Wege finden.

3. **Zielverfolgung**: Mit FlowFields können Objekte ein bestimmtes Ziel verfolgen. Durch die Manipulation der Vektoren im FlowField können Objekte auf effiziente Weise zu einem bestimmten Punkt oder entlang einer gewünschten Route geleitet werden.

4. **Interaktive Steuerung**: FlowFields können auch für interaktive Steuerungszwecke eingesetzt werden. Benutzer können beispielsweise die Richtung oder Geschwindigkeit der Objekte beeinflussen, indem sie das FlowField in Echtzeit modifizieren.

#### Funktionsweise von FlowFields
Die Funktionsweise von FlowFields basiert auf der Berechnung der resultierenden Bewegungsrichtung für ein Objekt an einem bestimmten Punkt im Raum. Dazu werden verschiedene mathematische Konzepte verwendet:

1. **Gradientenfelder**: Ein FlowField kann als Gradientenfeld betrachtet werden, das die Änderung der Bewegungsrichtung und -geschwindigkeit im Raum angibt. Der Gradient eines FlowFields wird verwendet, um die Richtung und Intensität des resultierenden Vektors an einem bestimmten Punkt zu bestimmen.

2. **Potentialfunktionen**: Um den Gradienten des FlowFields zu berechnen, können Potentialfunktionen eingesetzt werden. Eine Potentialfunktion ordnet jedem Punkt im Raum einen Wert zu, der angibt, wie attraktiv oder abstoßend dieser Punkt für das Objekt ist. Durch Ableiten der Potentialfunktion kann der Gradient berechnet werden, der die Bewegungsrichtung angibt.

3. **Vektorinterpolation**: Bei der Anwendung von FlowFields auf ein Objekt wird der resultierende Bewegungsvektor durch Interpolation der umgebenden Vektoren im FlowField berechnet. Je nach gewünschtem Verhalten können verschiedene Interpolationsmethoden wie bilineare Interpolation oder kubische Interpolation verwendet werden.

4. **Integration**: Um die Bewegung des Objekts zu simulieren, wird der resultierende Vektor mit der aktuellen Position des Objekts integriert, um die neue Position zu berechnen. Die Integration kann auf verschiedene Weise erfolgen, z.B. durch Euler-Integration oder Runge-Kutta-Verfahren.

Die Kombination dieser Konzepte ermöglicht es, komplexe Bewegungen mit FlowFields zu simulieren und steuern.

Insgesamt bieten FlowFields eine leistungsstarke Methode zur Simulation von Bewegungen in einer Vielzahl von Anwendungsgebieten. Durch die Verwendung mathematischer Konzepte wie Gradientenfelder, Potentialfunktionen, Vektorinterpolation und Integration können Objekte natürliche und realistische Bewegungen ausführen. Die Anpassung der Vektoren im FlowField ermöglicht es, Hindernissen auszuweichen, Ziele zu verfolgen und interaktive Steuerungselemente bereitzustellen. 

## Klassen und Eigenschaften

## Klasse Effect
Diese Klasse repräsentiert den Effekt und enthält folgende Eigenschaften:

* `canvas: HTMLCanvasElement`: Das Canvas-Element, auf dem der Effekt gerendert wird.
* `context: CanvasRenderingContext2D`: Der 2D-Kontext des Canvas-Elements.
* `width: number`: Die Breite des Canvas-Elements.
* `height: number`: Die Höhe des Canvas-Elements.
* `particles: Particle[]`: Ein Array von Partikeln, die im Effekt verwendet werden.
* ``numberOfParticles: number``: Die Anzahl der Partikel im Effekt.
* ``curve: number``: Ein Wert, der die Krümmung des Effekts beeinflusst.
* ``zoom: number``: Ein Wert, der das Zoomniveau des Effekts bestimmt.
* ``rows: number``: Die Anzahl der Zeilen im Flussfeld des Effekts.
* ``cols: number``: Die Anzahl der Spalten im Flussfeld des Effekts.
* ``cellSize: number``: Die Größe einer Zelle im Flussfeld des Effekts.
* ``FlowField: any[]``: Ein Array, das das Flussfeld des Effekts enthält.
* ``image`` : Ein Bild, das für den Effekt verwendet wird.
* ``debug: boolean``: Ein Flag, das angibt, ob der Debug-Modus aktiviert ist.



Konstruktor
Der Konstruktor der Effect-Klasse akzeptiert zwei Parameter: canvas vom Typ HTMLCanvasElement und context vom Typ CanvasRenderingContext2D. Diese Parameter werden verwendet, um das Canvas-Element und den 2D-Kontext zu initialisieren.
Der Konstruktor initialisiert außerdem die anderen Eigenschaften der Klasse, wie z.B. die Partikel, das Flussfeld und den Debug-Modus.

### Konstruktor 
````typescript
constructor(canvas: HTMLCanvasElement, numParticles: number) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.particles = [];
    this.numParticles = numParticles;
    // Weitere Initialisierungen...
}
````

#### Methoden

<!--------------------------------------------------------------------------->
``drawText()``
Diese Methode zeichnet den Text auf dem Canvas-Element. Sie verwendet den 2D-Kontext, um den Text zu rendern.

1. this.context.font = '500px Impact'; - Setzt die Schriftart und -größe für den Text, der gezeichnet werden soll. In diesem Fall wird die Schriftart 'Impact' mit einer Größe von 500 Pixeln verwendet.

2. this.context.textAlign = 'center'; - Legt die Ausrichtung des Textes fest. Hier wird der Text horizontal zentriert, sodass er um den angegebenen Mittelpunkt ausgerichtet wird.

3. this.context.textBaseline = 'middle'; - Definiert die Baseline (Grundlinie) für den Text. Hier wird die Baseline in der Mitte des Textes positioniert.

4. Es werden drei Gradienten definiert, die als Füllfarbe für den Text verwendet werden sollen:

* gradient1 ist ein linearer Gradient, der von Weiß über Gelb und Türkis bis Blau verläuft.
* gradient2 ist ebenfalls ein linearer Gradient, der von Gelb über Rot und Türkis bis zu einem blassen Gelb verläuft.
* gradient3 ist ein radialer Gradient, der von Blau über ein blasses Grün bis Schwarz verläuft und vom Mittelpunkt des Canvas ausgeht.

5. this.context.fillStyle = gradient3; - Setzt die Füllfarbe des Textes auf gradient3, den radialen Gradienten.

6. this.context.fillText('安希子', this.width * 0.5, this.height * 0.5, this.width * 0.8); - Zeichnet den Text '安希子' auf das Canvas. Der Text wird an den angegebenen Koordinaten (horizontal: this.width * 0.5, vertikal: this.height * 0.5) platziert und hat eine maximale Breite von this.width * 0.8. 

````typescript
drawText() {
        this.context.font = '500px Impact'; 
        this.context.textAlign = 'center'; 
        this.context.textBaseline = 'middle';

        const gradient1 = this.context.createLinearGradient(0, 0, this.width, this.height);
        gradient1.addColorStop(0.2, 'rgb(255, 255,255)'); 
        gradient1.addColorStop(0.4, 'rgb(255, 255,0)'); 
        gradient1.addColorStop(0.6, 'rgb(0, 255,255)'); 
        gradient1.addColorStop(0.8, 'rgb(0, 0,255)'); 

        const gradient2 = this.context.createLinearGradient(0, 0, this.width, this.height);
        gradient2.addColorStop(0.2, 'rgb(255, 255, 0'); 
        gradient2.addColorStop(0.4, 'rgb(200, 5, 50'); 
        gradient2.addColorStop(0.6, 'rgb(150, 255, 255'); 
        gradient2.addColorStop(0.8, 'rgb(255, 255, 150'); 

        const gradient3 = this.context.createRadialGradient(
            this.width * 0.2, 
            this.height * 0.2, 
            10, 
            this.width * 0.2, 
            this.height * 0.2, 
            this.width); 
        gradient3.addColorStop(0.2, 'rgb(0, 0, 255)');
        gradient3.addColorStop(0.4, 'rgb(200, 255, 0)');
        gradient3.addColorStop(0.6, 'rgb(0, 0, 255)');
        gradient3.addColorStop(0.8, 'rgb(0, 0, 0)');


        this.context.fillStyle = gradient3;  
        this.context.fillText('安希子', this.width * 0.5, this.height * 0.5, this.width * 0.8);
    }
````

<!---------------------------------------------------------------------------> 

``drawFlowFieldImage()``
Diese Methode zeichnet ein Bild auf dem Canvas-Element. Das Bild wird aus der image-Eigenschaft geladen und an einer bestimmten Position und Größe platziert.

1. ``let imageSize = this.width * 0.7;`` - Berechnet die Größe des Bildes, das gezeichnet werden soll, indem es 70% der Breite des Canvas nimmt. Die Größe wird in der Variablen imageSize gespeichert.

2. ``if(!this.image) { throw new Error("Can't draw flow field image"); return; }`` - Überprüft, ob ein Bild zum Zeichnen vorhanden ist. Wenn kein Bild vorhanden ist, wird eine Fehlermeldung ("Can't draw flow field image") geworfen und die Methode wird vorzeitig beendet.

3. 
````typescript
this.context.drawImage((this.image as HTMLImageElement), 
                    this.width * 0.5 - imageSize * 0.5, 
                    this.height * 0.5 - imageSize * 0.5,
                    imageSize,
                    imageSize); 
```` 
platziert und hat eine Größe von imageSize in der Breite und Höhe.

````typescript 
drawFlowFieldImage() {
    let imageSize = this.width * 0.7; 
    if(!this.image) {
        throw new Error("Can't draw flow field image"); 
        return; 
    }
    this.context.drawImage((this.image as HTMLImageElement), 
                        this.width * 0.5 - imageSize * 0.5, 
                        this.height * 0.5 - imageSize * 0.5,
                        imageSize,
                        imageSize); 
}
````

<!--------------------------------------------------------------------------->

``init()``
Diese Methode initialisiert den Effekt. Sie erstellt das FlowField, liest die Pixel-Daten des Canvas-Elements, erstellt die Partikel und ruft reset() für jedes Partikel auf.

1. ``this.rows = Math.floor(this.height / this.cellSize);`` - Berechnet die Anzahl der Reihen im Flussfeld, indem die Höhe des Canvas durch die Zellengröße (this.cellSize) dividiert und auf die nächstniedrigere ganze Zahl gerundet wird.

2. ``this.cols = Math.floor(this.width / this.cellSize);`` - Berechnet die Anzahl der Spalten im Flussfeld, indem die Breite des Canvas durch die Zellengröße (this.cellSize) dividiert und auf die nächstniedrigere ganze Zahl gerundet wird.

3. ``this.FlowField = [];`` - Initialisiert ein leeres Array FlowField, das später die Informationen für jedes Zellenelement im Flussfeld enthalten wird.

4. ``this.drawFlowFieldImage();`` - Ruft die Methode drawFlowFieldImage() auf, um ein Bild auf dem Canvas zu zeichnen. Dieses Bild wird als Flussfeld verwendet.

5. ``const pixels: Uint8ClampedArray = this.context.getImageData(0, 0, this.width, this.height).data;`` - Ruft die Pixelinformationen für den gesamten Canvas-Bereich ab und speichert sie in einem Uint8ClampedArray namens pixels.

6. ``for(let y = 0; y < this.height; y += this.cellSize) { ... }`` - Durchläuft eine Schleife, um alle Zellen im Flussfeld zu erstellen. Die Schleife beginnt bei y = 0 und erhöht sich in Schritten der Zellengröße (this.cellSize) bis zur Höhe des Canvas.

7. ``const index = (y * this.width + x) * 4;`` - Berechnet den Indexwert im pixels-Array basierend auf den aktuellen Koordinaten x und y. Der Indexwert wird verwendet, um die Pixelinformationen für die aktuelle Zelle abzurufen.

8. ``const red = pixels[index];, const green = pixels[index + 1];, const blue = pixels[index + 2];, const alpha = pixels[index + 3];`` - Extrahiert die Farbwerte (rot, grün, blau und Alpha) für die aktuelle Zelle aus den Pixelinformationen.

9. ``const grayscale = (red + green + blue) / 3;`` - Berechnet den Grauwert für die aktuelle Zelle, indem die Farbwerte für rot, grün und blau gemittelt werden.

10. ``const colorAngle = ((grayscale / 255) * 6.28).toFixed(2);`` - Berechnet den Farbwinkel für die aktuelle Zelle, indem der Grauwert auf den Bereich von 0 bis 6.28 (entspricht dem vollen Kreis in Bogenmaß) skaliert wird und auf zwei Dezimalstellen gerundet wird.

11. ``this.FlowField.push({ ... })`` - Fügt ein Objekt zur FlowField-Array hinzu, das die Informationen für die aktuelle Zelle enthält, wie die Koordinaten, Farbwerte und Farbwinkel.

12. ``this.particles = [];`` - Initialisiert ein leeres Array particles, das später die Partikel des Systems enthalten wird.

13. ``for(let i = 0; i < this.numberOfParticles; i++) { ... }`` - Durchläuft eine Schleife, um die gewünschte Anzahl von Partikeln im System zu erstellen.

14. ``this.particles.push(new Particle(this));`` - Erzeugt ein neues Partikelobjekt und fügt es dem particles-Array hinzu. Das Partikelobjekt erhält das aktuelle System als Parameter.

15. ``this.particles.forEach(particle => particle.reset());`` - Ruft die reset()-Methode für jedes Partikel im particles-Array auf, um sie in ihren Ausgangszustand zurückzusetzen.

````typescript 
init() {
    //create flow field
    this.rows = Math.floor(this.height / this.cellSize); 
    this.cols = Math.floor(this.width / this.cellSize); 
    this.FlowField = [];

    // draw text 
    //this.drawText(); 
    this.drawFlowFieldImage(); 

    // scan pixel data
    const pixels: Uint8ClampedArray = this.context.getImageData(0, 0, this.width, this.height).data; 
    if(this.debug) { 
        console.log(pixels); 
    }
    for(let y = 0; y < this.height; y += this.cellSize) {
        for(let x = 0; x < this.width; x += this.cellSize) {
            const index = (y * this.width + x) * 4; 
            const red  = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            const alpha = pixels[index + 3];
            const grayscale = (red + green + blue) / 3; 
            const colorAngle = ((grayscale / 255) * 6.28).toFixed(2); 
            this.FlowField.push({
                x: x, 
                y: y, 
                red: red, 
                green: green, 
                blue: blue,
                alpha: alpha, 
                colorAngle: colorAngle
            }); 
        }
    }

    // create particles 
    this.particles = []; 
    for(let i = 0; i < this.numberOfParticles; i++) {
        this.particles.push(new Particle(this)); 
    }
    this.particles.forEach(particle => particle.reset()); 
}
````
<!--------------------------------------------------------------------------->
``drawGrid()``
Diese Methode zeichnet ein Gitter auf dem Canvas-Element. Das Gitter besteht aus horizontalen und vertikalen Linien, die das Flussfeld darstellen.

1. ``this.context.save();`` - Speichert den aktuellen Zustand des Zeichenkontexts, einschließlich aller Eigenschaften wie Farbe und Linienbreite.

2. ``this.context.strokeStyle = 'grey';`` - Setzt die Farbe des Linienstils auf Grau.

3. ``this.context.lineWidth = 0.2;`` - Setzt die Breite der Linien auf 0.2 Einheiten.

4. ``for(let c = 0; c < this.cols; c++) { ... }`` - Durchläuft eine Schleife, um die senkrechten Linien des Rasters zu zeichnen. Die Schleife beginnt bei c = 0 und erhöht sich bis zur Anzahl der Spalten (this.cols) im Flussfeld.

5. ``this.context.beginPath();`` - Beginnt einen neuen Zeichenpfad.

6. ``this.context.moveTo(this.cellSize * c, 0);`` - Setzt den Startpunkt der Linie auf die entsprechenden Koordinaten, um von der oberen Kante des Canvas zur unteren Kante zu zeichnen. Der horizontale Koordinatenwert wird durch this.cellSize * c berechnet, wobei c der aktuelle Spaltenindex ist.

7. ``this.context.lineTo(this.cellSize * c, this.height);`` - Setzt den Endpunkt der Linie auf die entsprechenden Koordinaten, um von der oberen Kante zur unteren Kante des Canvas zu zeichnen.

8. ``this.context.stroke();`` - Zeichnet die Linie basierend auf den angegebenen Koordinaten und dem Linienstil.

9. ``for(let r = 0; r < this.rows; r++) { ... }`` - Durchläuft eine Schleife, um die waagerechten Linien des Rasters zu zeichnen. Die Schleife beginnt bei r = 0 und erhöht sich bis zur Anzahl der Reihen (this.rows) im Flussfeld.

10. ``this.context.beginPath(); ``- Beginnt einen neuen Zeichenpfad.

11. ``this.context.moveTo(0, this.cellSize * r);`` - Setzt den Startpunkt der Linie auf die entsprechenden Koordinaten, um von der linken Kante des Canvas zur rechten Kante zu zeichnen. Der vertikale Koordinatenwert wird durch this.cellSize * r berechnet, wobei r der aktuelle Reihenindex ist.

12. ``this.context.lineTo(this.width, this.cellSize * r);`` - Setzt den Endpunkt der Linie auf die entsprechenden Koordinaten, um von der linken Kante zur rechten Kante des Canvas zu zeichnen.

13. ``this.context.stroke();`` - Zeichnet die Linie basierend auf den angegebenen Koordinaten und dem Linienstil.

14. ``this.context.restore();`` - Stellt den vorherigen Zustand des Zeichenkontexts wieder her, einschließlich aller gespeicherten Eigenschaften.

````typescript 
drawGrid() {
    this.context.save(); 
    this.context.strokeStyle = 'grey';
    this.context.lineWidth = 0.2; 

    for(let c = 0; c < this.cols; c++) {
        this.context.beginPath();
        this.context.moveTo(this.cellSize * c, 0); 
        this.context.lineTo(this.cellSize * c, this.height); 
        this.context.stroke(); 
    }

    for(let r = 0; r < this.rows; r++) {
        this.context.beginPath();
        this.context.moveTo(0, this.cellSize * r); 
        this.context.lineTo(this.width, this.cellSize * r); 
        this.context.stroke(); 
    }
    this.context.restore();
}
````
<!--------------------------------------------------------------------------->
``resize(width: number, height: number)``
Diese Methode ändert die Größe des Canvas-Elements und aktualisiert die entsprechenden Eigenschaften des Effekts.

1. ``this.canvas.width = width;`` - Setzt die Breite des Canvas auf den übergebenen Wert width. Dadurch wird die tatsächliche Pixelbreite des Canvas geändert.

2. ``this.canvas.height = height;`` - Setzt die Höhe des Canvas auf den übergebenen Wert height. Dadurch wird die tatsächliche Pixelhöhe des Canvas geändert.

3. ``this.width = this.canvas.width;`` - Aktualisiert den Wert der Variablen width mit der neuen Breite des Canvas.

4. ``this.height = this.canvas.height;`` - Aktualisiert den Wert der Variablen height mit der neuen Höhe des Canvas.

5. ``this.init();`` - Ruft die Methode init() auf. Dies wird wahrscheinlich verwendet, um das System nach der Änderung der Canvas-Größe neu zu initialisieren. Die genaue Funktionalität der init()-Methode ist abhängig vom Kontext und nicht im gegebenen Codeausschnitt ersichtlich.

````typescript 
resize(width: number, height: number) {
    this.canvas.width = width; 
    this.canvas.height = height;
    this.width = this.canvas.width; 
    this.height = this.canvas.height;
    this.init(); 
}
````
<!--------------------------------------------------------------------------->
``render()``
Diese Methode rendert den Effekt auf dem Canvas-Element. Sie zeichnet die Partikel und ruft deren update()-Methode auf.

1. ``if(this.debug) { ... }`` - Überprüft, ob der Debug-Modus aktiviert ist. Wenn ja, werden die folgenden Schritte ausgeführt. Andernfalls werden sie übersprungen.

2. ``this.drawFlowFieldImage();`` - Ruft die Methode drawFlowFieldImage() auf, um das Flussfeldbild auf dem Canvas zu zeichnen. Dies könnte ein visuelles Feedback für das Flussfeld im Debug-Modus sein.

3. ``this.drawGrid();`` - Ruft die Methode drawGrid() auf, um ein Raster auf dem Canvas zu zeichnen. Dies könnte ebenfalls ein visuelles Feedback für das Flussfeld im Debug-Modus sein.

4. ``this.particles.forEach(particle => { ... });`` - Durchläuft eine Schleife für jedes Partikel im particles-Array.

5. ``particle.draw(this.context);`` - Ruft die Methode draw() für das aktuelle Partikel auf und übergibt den Zeichenkontext context als Parameter. Dadurch wird das Partikel auf dem Canvas gezeichnet.

6. ``particle.update();`` - Ruft die Methode update() für das aktuelle Partikel auf. Dadurch wird der interne Zustand des Partikels aktualisiert, z. B. seine Position oder Geschwindigkeit.

````typescript
render() {
    if(this.debug) { 
        //this.drawText(); 
        this.drawFlowFieldImage(); 
        this.drawGrid();
    } 
    this.particles.forEach(particle => {
        particle.draw(this.context); 
        particle.update(); 
    }); 
}
````

### Klasse Particle

``effect: Effect``: Eine Referenz auf das Effect-Objekt, dem das Partikel gehört.
``position: Vector``: Die aktuelle Position des Partikels.
``velocity: Vector``: Die Geschwindigkeit des Partikels.
``acceleration: Vector``: Die Beschleunigung des Partikels.
``maxSpeed: number``: Die maximale Geschwindigkeit des Partikels.
``size: number``: Die Größe des Partikels.

Der Konstruktor der Particle-Klasse akzeptiert zwei Parameter: effect vom Typ Effect und position vom Typ Vector. Diese Parameter werden verwendet, um das Effect-Objekt und die Startposition des Partikels zu initialisieren.

1. ``this.maxLength = Math.floor(Math.random() * 50 + 20);`` - Setzt maxLength auf einen zufälligen Wert zwischen 20 und 69 (50 + 20). Dieser Wert repräsentiert die maximale Länge des Partikelverlaufs.

2. ``this.speedModifier = Math.random() * 3 + 1;`` - Setzt speedModifier auf einen zufälligen Wert zwischen 1 und 4. Dieser Wert beeinflusst die Geschwindigkeit des Partikels.

3. ``this.angleCorrection = Math.random() + 0.05 + 0.01;`` - Setzt angleCorrection auf einen zufälligen Wert zwischen 0.06 und 1.06. Dieser Wert wird zur Berechnung der Korrektur des Partikelwinkels verwendet.

4. ``this.effect = effect;`` - Weist der Eigenschaft effect den übergebenen Effekt zu. Dies ermöglicht dem Partikel den Zugriff auf die Eigenschaften und Methoden des Effekts.

5. ``this.x = Math.floor(Math.random() * this.effect.width);`` - Setzt die x-Koordinate des Partikels auf einen zufälligen ganzzahligen Wert zwischen 0 und der Breite des Effekts.

6. ``this.y = Math.floor(Math.random() * this.effect.height);`` - Setzt die y-Koordinate des Partikels auf einen zufälligen ganzzahligen Wert zwischen 0 und der Höhe des Effekts.

7. ``this.history = [{x: this.x, y: this.y} as IPoint];`` - Initialisiert das history-Array mit einem Objekt, das die aktuelle Position des Partikels repräsentiert. Dieses Array wird verwendet, um den Verlauf des Partikels zu speichern.

8. ``this.angle = 0;`` - Setzt den aktuellen Winkel des Partikels auf 0 Grad.

9. ``this.newAngle = 0;`` - Setzt den Zielwinkel des Partikels auf 0 Grad.

10. ``this.timer = this.maxLength * 2;`` - Setzt den Timer des Partikels auf das Doppelte der maximalen Länge. Dieser Timer wird verwendet, um die Lebensdauer des Partikels zu begrenzen.

11. ``this.speedX = 0;`` - Setzt die Geschwindigkeit des Partikels in horizontaler Richtung auf 0.

12. ``this.speedY = 0;`` - Setzt die Geschwindigkeit des Partikels in vertikaler Richtung auf 0.

13. ``this.colors = ['#2c026b', '#730d9e', '#9622c7', '#b44ae0', '#cd72f2', 'white'];`` - Initialisiert das colors-Array mit einer Liste von Farbcodes. Diese Farben werden zur Darstellung des Partikels verwendet.

14. ``this.red = 0``; - Setzt den Wert für den Rotanteil der Partikelfarbe auf 0.

15. ``this.green = 250;`` - Setzt den Wert für den Grünanteil der Partikelfarbe auf 250.

16. ``this.blue = 0;`` - Setzt den Wert für den Blauanteil der Partikelfarbe auf 0.

17. ``this.color = 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';`` - Erzeugt eine Farbzeichenfolge im RGB-Format basierend auf den aktuellen Werten für Rot, Grün und Blau. Diese Farbe wird zur Darstellung des Partikels verwendet.

````typescript 
constructor(effect: Effect) {
    this.maxLength = Math.floor(Math.random() * 50 + 20); 
    this.speedModifier = Math.random() * 3 + 1; 
    this.angleCorrection =  Math.random() + 0.05 + 0.01; //0.27;

    this.effect = effect;
    this.x = Math.floor(Math.random() * this.effect.width); 
    this.y = Math.floor(Math.random() * this.effect.height);

    this.history = [{x : this.x, y : this.y} as IPoint]; 
    this.angle = 0;  
    this.newAngle = 0; 
    this.timer = this.maxLength * 2; 
    this.speedX  = 0; 
    this.speedY  = 0;

    this.colors = ['#2c026b', '#730d9e', '#9622c7', '#b44ae0', '#cd72f2', 'white']; 
    this.red = 0; 
    this.green = 250; 
    this.blue = 0; 
    this.color = 'rgb('+ this.red + ',' + this.green + ',' + this.blue + ')'; 
}
````

#### Methoden
``draw()``
Diese Methode zeichnet das Partikel auf dem Canvas-Element. Sie verwendet den 2D-Kontext und die aktuellen Position und Größe des Partikels, um es zu rendern.

1. ``context.beginPath();`` - Beginnt einen neuen Pfad im angegebenen Zeichenkontext context. Dies wird verwendet, um einen neuen Zeichenzug für das Partikel zu beginnen.

2. ``context.moveTo(this.history[0].x, this.history[0].y);`` - Setzt den Startpunkt des Zeichenzugs auf die x- und y-Koordinaten des ersten Punkts im history-Array des Partikels. Dies bestimmt den Anfangspunkt des Zeichenzugs.

3. ``for(let i = 0; i < this.history.length; i++) { ... }`` - Durchläuft eine Schleife für jeden Punkt im history-Array des Partikels.

4. ``context.lineTo(this.history[i].x, this.history[i].y);`` - Zeichnet eine Linie vom aktuellen Zeichenposition zum Punkt mit den x- und y-Koordinaten des aktuellen Elements im history-Array. Dies erzeugt den Zeichenzug des Partikels, der aus mehreren verbundenen Linien besteht.

5. ``context.strokeStyle = this.color;`` - Setzt die Linienfarbe des Zeichenkontexts auf die im Partikel gespeicherte Farbe. Dadurch wird festgelegt, mit welcher Farbe der Partikel gezeichnet wird.

6. ``context.stroke();`` - Zeichnet den definierten Zeichenzug mit den aktuellen Einstellungen des Zeichenkontexts. Dadurch wird der Partikel auf dem Canvas gezeichnet.

````typescript 
draw(context: CanvasRenderingContext2D) {
    context.beginPath(); 
    context.moveTo(this.history[0].x, this.history[0].y);
    for(let i = 0; i < this.history.length; i++) {
        context.lineTo(this.history[i].x, this.history[i].y); 
    }
    context.strokeStyle = this.color; 
    context.stroke();
}
````
``update()``
Diese Methode aktualisiert die Position des Partikels basierend auf seiner Geschwindigkeit und Beschleunigung. Sie überprüft auch, ob das Partikel den Rand des Canvas-Elements erreicht hat, und passt seine Position entsprechend an.

1. ``this.timer--;`` - Verringert den Wert des Timers (timer) um 1. Der Timer wird verwendet, um die Lebensdauer des Partikels zu verfolgen und zu steuern.

2. ``if(this.timer >= 1) { ... }`` - Überprüft, ob der Timer größer oder gleich 1 ist. Dies stellt sicher, dass das Partikel noch aktiv ist und aktualisiert werden soll.

3. ``let x = Math.floor(this.x / this.effect.cellSize);`` - Berechnet die Rasterkoordinate x basierend auf der aktuellen x-Position des Partikels und der Größe einer Zelle (cellSize) im Effekt.

4. ``let y = Math.floor(this.y / this.effect.cellSize);`` - Berechnet die Rasterkoordinate y basierend auf der aktuellen y-Position des Partikels und der Größe einer Zelle (cellSize) im Effekt.

5. ``let index = y * this.effect.cols + x;`` - Berechnet den Index im FlowField-Array basierend auf den Rasterkoordinaten x und y. Dies gibt den Index des entsprechenden FlowField-Eintrags für die aktuelle Position des Partikels.

6. ``let flowFieldIndex = this.effect.FlowField[index];`` - Ruft den FlowField-Eintrag für den berechneten Index ab. Dieser Eintrag enthält Informationen über die Farbe und Richtung des Feldes an dieser Position im Effekt.

7. ``this.newAngle = flowFieldIndex.colorAngle; ``- Weist dem newAngle-Eigenschaft des Partikels den Farbwinkel (colorAngle) des FlowField-Eintrags zu. Dies bestimmt die Richtung, in die sich das Partikel bewegen soll.

8. ``if(this.angle > this.newAngle) { ... } else if(this.angle < this.newAngle) { ... } else { ... }`` - Überprüft die Beziehung zwischen dem aktuellen Winkel (angle) des Partikels und dem neuen Winkel (newAngle). Je nachdem, ob der Winkel größer, kleiner oder gleich ist, wird der Winkel angepasst, um sich dem neuen Winkel anzunähern.

9. ``if(flowFieldIndex.alpha > 0) { ... }`` - Überprüft, ob der Alpha-Wert des FlowField-Eintrags größer als 0 ist. Dies bedeutet, dass an dieser Position im Effekt eine Farbe vorhanden ist und das Partikel diese Farbe übernehmen soll.

10. ``this.red === flowFieldIndex.red ? this.red: this.red += (flowFieldIndex.red - this.red) * 0.1;`` - Überprüft, ob der aktuelle R-Wert der Partikelfarbe bereits dem R-Wert des FlowField-Eintrags entspricht. Wenn ja, wird der R-Wert beibehalten. Andernfalls wird der R-Wert allmählich dem R-Wert des FlowField-Eintrags angenähert.

11. Ähnliche Berechnungen werden für den G-Wert (green) und den B-Wert (blue) der Partikelfarbe durchgeführt.

12. ``this.color = 'rgb('+ this.red + ',' + this.green + ',' + this.blue + ')';`` - Aktualisiert die Partikelfarbe basierend auf den berechneten R-, G- und B-Werten.

13. ``this.speedX = Math.cos(this.angle);`` - Berechnet die X-Komponente der Geschwindigkeit des Partikels basierend auf dem aktuellen Winkel (angle) des Partikels.

14. ``this.speedY = Math.sin(this.angle);``- Berechnet die Y-Komponente der Geschwindigkeit des Partikels basierend auf dem aktuellen Winkel (angle) des Partikels.

15. ``this.x += this.speedX * this.speedModifier;`` - Aktualisiert die x-Position des Partikels, indem die X-Komponente der Geschwindigkeit mit dem Geschwindigkeitsmodifikator (speedModifier) multipliziert wird.

16. ``this.y += this.speedY * this.speedModifier;`` - Aktualisiert die y-Position des Partikels, indem die Y-Komponente der Geschwindigkeit mit dem Geschwindigkeitsmodifikator (speedModifier) multipliziert wird.

17. ``this.history.push({x : this.x, y : this.y} as IPoint);`` - Fügt ein neues Objekt mit den aktuellen x- und y-Koordinaten des Partikels zum history-Array hinzu. Dies speichert den Verlauf des Partikels, um seine Bewegung zu verfolgen.

18. ``if(this.history.length > this.maxLength) { this.history.shift(); }`` - Überprüft, ob die Länge des history-Arrays größer als die maximale Länge (maxLength) ist. Wenn ja, wird das erste Element aus dem Array entfernt, um sicherzustellen, dass der Verlauf nicht über die maximale Länge wächst.

19. ``else if(this.history.length > 1) { this.history.shift(); }`` - Überprüft, ob die Länge des history-Arrays größer als 1 ist. Wenn ja, wird das erste Element aus dem Array entfernt. Dies geschieht, wenn der Timer abgelaufen ist, aber der Verlauf des Partikels noch nicht die maximale Länge erreicht hat.

20. ``else { this.reset(); }`` - Wenn der Timer abgelaufen ist und der Verlauf des Partikels nur aus einem einzigen Punkt besteht, wird die Methode reset() aufgerufen, um das Partikel zurückzusetzen.

````typescript 
update() {
        this.timer--; 

        if(this.timer >= 1) {
            let x = Math.floor(this.x / this.effect.cellSize); 
            let y = Math.floor(this.y / this.effect.cellSize); 
            let index = y * this.effect.cols + x;
            
            let flowFieldIndex = this.effect.FlowField[index]; 
            if(flowFieldIndex) {
                // motion
                this.newAngle = flowFieldIndex.colorAngle; 
                if(this.angle > this.newAngle) {
                    this.angle -= this.angleCorrection; 
                } 
                else if(this.angle < this.newAngle) {
                    this.angle += this.angleCorrection;
                }
                else {
                    this.angle = this.newAngle; 
                }
                // color 
                if(flowFieldIndex.alpha > 0) {
                    this.red    === flowFieldIndex.red      ?   this.red:   this.red    += (flowFieldIndex.red   - this.red)   * 0.1; 
                    this.green  === flowFieldIndex.green    ?   this.green: this.green  += (flowFieldIndex.green - this.green) * 0.1;  
                    this.blue   === flowFieldIndex.blue     ?   this.blue:  this.blue   += (flowFieldIndex.blue  - this.blue)  * 0.1; 

                    this.color = 'rgb('+ this.red + ',' + this.green + ',' + this.blue + ')'; 
                }
            }

            this.speedX = Math.cos(this.angle); 
            this.speedY = Math.sin(this.angle);
            this.x += this.speedX * this.speedModifier;
            this.y += this.speedY * this.speedModifier;
    
            this.history.push({x : this.x, y : this.y} as IPoint);
            if(this.history.length > this.maxLength) {
                this.history.shift(); 
            } 
        } else if(this.history.length > 1) {
            this.history.shift(); 
        } else {
            this.reset(); 
        }
    }
````


<!--------------------------------------------------------------------------->
``reset()``
1. ``let attemps = 0;`` - Initialisiert eine Variable attemps mit dem Wert 0. Diese Variable wird verwendet, um die Anzahl der Versuche beim Zurücksetzen des Partikels zu zählen.

2. ``let resetSuccess = false; ``- Initialisiert eine Variable resetSuccess mit dem Wert false. Diese Variable wird verwendet, um den Erfolg des Zurücksetzens zu verfolgen.

3. ``while(attemps < 50 && !resetSuccess) { ... }`` - Eine Schleife, die solange wiederholt wird, wie die Anzahl der Versuche kleiner als 50 ist und das Zurücksetzen des Partikels nicht erfolgreich war.

4. ``attemps++ ; ``- Inkrementiert den Wert der attemps-Variable um 1 bei jedem Durchlauf der Schleife.

5. ``let testIndex = Math.floor(Math.random() * this.effect.FlowField.length);`` - Generiert einen zufälligen Index (testIndex) basierend auf der Länge des FlowField-Arrays im Effekt.

6. ``if(this.effect.FlowField[testIndex].alpha > 0) { ... }`` - Überprüft, ob der Alpha-Wert des FlowField-Eintrags an der generierten Indexposition größer als 0 ist. Dies stellt sicher, dass an dieser Position im Effekt eine Farbe vorhanden ist.

7. ``this.x = this.effect.FlowField[testIndex].x;`` - Weist dem x-Eigenschaft des Partikels den x-Wert des FlowField-Eintrags an der generierten Indexposition zu.

8. ``this.y = this.effect.FlowField[testIndex].y;`` - Weist dem y-Eigenschaft des Partikels den y-Wert des FlowField-Eintrags an der generierten Indexposition zu.

9. ``this.history = [{x: this.x, y : this.y} as IPoint];`` - Setzt den Verlauf des Partikels auf ein Array mit einem einzelnen Punkt zurück, der den aktuellen x- und y-Werten des Partikels entspricht.

10. ``this.timer = this.maxLength * 2;`` - Setzt den Timer (timer) des Partikels auf das doppelte der maximalen Länge (maxLength) zurück. Dadurch erhält das Partikel eine neue Lebensdauer.

11. ``resetSuccess = true; ``- Setzt resetSuccess auf true, um anzuzeigen, dass das Zurücksetzen erfolgreich war.

12. ``if(!resetSuccess) { ... }`` - Wird ausgeführt, wenn das Zurücksetzen des Partikels nicht erfolgreich war (nach 50 Versuchen).

13. ``this.x = Math.random() * this.effect.width;`` - Weist dem x-Eigenschaft des Partikels einen zufälligen x-Wert zwischen 0 und der Breite des Effekts zu.

14. ``this.y = Math.random() * this.effect.height;`` - Weist dem y-Eigenschaft des Partikels einen zufälligen y-Wert zwischen 0 und der Höhe des Effekts zu.

15. ``this.history = [{x: this.x, y: this.y} as IPoint];`` - Setzt den Verlauf des Partikels auf ein Array mit einem einzelnen Punkt zurück, der den aktuellen x- und y-Werten des Partikels entspricht.

16. ``resetSuccess = true;`` - Setzt resetSuccess auf true, um anzuzeigen, dass das Zurücksetzen erfolgreich war.

Die Methode reset() wird verwendet, um das Partikel zurückzusetzen, falls es außerhalb des FlowFields platziert wurde oder keinen gültigen Farbwert im FlowField hat. Es versucht, das Partikel an einer zufälligen Position im FlowField zu platzieren und seinen Verlauf und Timer zurückzusetzen. Wenn nach 50 Versuchen kein gültiger Platz gefunden wurde, wird das Partikel stattdessen an einer zufälligen Position im gesamten Effekt platziert.

````typescript
reset() {
    let attemps = 0; 
    let resetSuccess = false;

    while(attemps < 50 && !resetSuccess) {
        attemps++ ; 
        let testIndex = Math.floor(Math.random() * this.effect.FlowField.length);
        if(this.effect.FlowField[testIndex].alpha > 0) {
            this.x = this.effect.FlowField[testIndex].x;
            this.y = this.effect.FlowField[testIndex].y; 
            this.history = [{x: this.x, y : this.y} as IPoint]; 
            this.timer = this.maxLength * 2;  
            resetSuccess = true; 
        }
    }
    if(!resetSuccess) {
        this.x = Math.random() * this.effect.width; 
        this.y = Math.random() * this.effect.height;
        this.history = [{x: this.x, y: this.y} as IPoint]; 
        resetSuccess = true; 
    }
}
````

## Funktionen
#### animate()
Die Funktion ``animate()`` hat die folgenden Aufgaben:

1. `context.clearRect(0, 0, canvas.width, canvas.height);` - Löscht den Inhalt des Canvas, indem ein Rechteck mit den Maßen des gesamten Canvas-Bereichs gelöscht wird.

2. `effect.render();` - Ruft eine Methode namens `render()` auf,  visuelle  Animation auf dem Canvas erzeugt.

3. `requestAnimationFrame(animate);` - Fordert den Browser auf, die Funktion `animate()` bei der nächsten Aktualisierung des Bildschirms erneut aufzurufen, um eine Endlosschleife für die Animation zu erstellen.


## Pre-Requisites 
- Webpack 
- Typescript 
- Go-Live extension oder python 

1. run ``tsc -w`` in einem Terminal (VSCode). 
2. run ``npx webpack`` in einem anderen Terminal Fenster 
3. starte einen lokalen webserver mit der Go-Live Extension für VSCode. 
oder nutze python  ``python -m http.server`` und öffne den erhaltenen Link in einem Webbrowser deiner Wahl. 

## Quellen
- https://observablehq.com/@ada-lovecraft/playing-with-noise-flow-fields-and-autonomous-agents
- https://leifnode.com/2013/12/flow-field-pathfinding/
- https://www.youtube.com/watch?v=na7LuZsW2UM
- https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=9d19157fa8da0a7d216f44d6a45a73b59b6da23f
- https://github.com/vonWolfehaus/flow-field
- https://medium.com/@bit101/flow-fields-part-i-3ebebc688fd8
- https://tylerxhobbs.com/essays/2020/flow-fields

Stackoverflow für Debugging und Optimierungen von Code-snippets
- https://stackoverflow.com/
