const trafficData = [
    { id: 1, color: "red", interval: 500 },
    { id: 2, color: "yellow", interval: 1000 },
    { id: 3, color: "green", interval: 5000 },
  ];
  
  const initiateTrafficLight = trafficData[2];
  const trafficContainer = document.getElementById("traffic");
  
  const createLights = () => {
    let innerhtml = "";
    for (let signal of trafficData) {
      innerhtml += `<div data-id = ${signal.id} id =${signal.id} class = "trafficEachLight" style ='background-color: white'></div>`;
    }
    trafficContainer.innerHTML = innerhtml;
  };
  
  const setPreviousSignalOFF = (signal) => {
    const currentSignal = document.getElementById(signal.id);
    currentSignal.style.backgroundColor = "white";
  };
  
  const getcCurrentOnSignal = (signal) => {
    const key = trafficData.indexOf(signal);
    return trafficData[(key + 1) % trafficData.length];
  };
  
  const setCurrentSignalOn = (signal = initiateTrafficLight) => {
    const currentSignal = document.getElementById(signal.id);
    currentSignal.style.backgroundColor = signal.color;
  };
  
  const predicteCurrentsignal = (signal = initiateTrafficLight) => {
    let timeout = setTimeout(() => {
      clearTimeout(timeout);
      setPreviousSignalOFF(signal);
      const newSignal = getcCurrentOnSignal(signal);
      setCurrentSignalOn(newSignal);
      predicteCurrentsignal(newSignal);
    }, signal.interval);
  };
  
  createLights();
  setCurrentSignalOn();
  predicteCurrentsignal();
  
  