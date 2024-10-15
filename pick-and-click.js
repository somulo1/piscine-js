export function pick() {
    const body = document.body;
    const hslDisplay = createDiv('hsl');
    const hueDisplay = createDiv('hue');
    const luminosityDisplay = createDiv('luminosity');
    const svgNS = "http://www.w3.org/2000/svg";
    const svgElement = createSvgElement(svgNS, "svg", { width: "100%", height: "100%", style: "position: fixed; top: 0; left: 0; pointer-events: none;" });
    const xLine = createSvgElement(svgNS, "line", { id: "axisX", stroke: "white" });
    const yLine = createSvgElement(svgNS, "line", { id: "axisY", stroke: "white" });
  
    svgElement.appendChild(xLine);
    svgElement.appendChild(yLine);
    body.append(svgElement, hslDisplay, hueDisplay, luminosityDisplay);
  
    function createDiv(className) {
      const div = document.createElement('div');
      div.className = className;
      return div;
    }
  
    function createSvgElement(namespace, element, attributes) {
      const svgElement = document.createElementNS(namespace, element);
      Object.keys(attributes).forEach(key => {
        svgElement.setAttribute(key, attributes[key]);
      });
      return svgElement;
    }
  
    function updateDisplay(event) {
      const hue = Math.floor((event.clientX / window.innerWidth) * 360);
      const luminosity = Math.floor((1 - event.clientY / window.innerHeight) * 100);
      const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;
  
      body.style.background = hslValue;
      hslDisplay.textContent = hslValue;
      hueDisplay.textContent = `hue\n${hue}`;
      luminosityDisplay.textContent = `${luminosity}\nluminosity`;
  
      updateAxis(xLine, event.clientX, 0, event.clientX, "100%");
      updateAxis(yLine, 0, event.clientY, "100%", event.clientY);
    }
  
    function updateAxis(line, x1, y1, x2, y2) {
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
    }
  
    function copyHslToClipboard() {
      navigator.clipboard.writeText(hslDisplay.textContent);
    }
  
    body.addEventListener('mousemove', updateDisplay);
    body.addEventListener('click', copyHslToClipboard);
  
    updateDisplay({ clientX: 0, clientY: 0 });
  }
  