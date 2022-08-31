

const tituloH1 = document.getElementById('header-container');
tituloH1.style.backgroundColor = 'rgb(76,164,46)';

const emergencyTask = document.getElementsByClassName('emergency-tasks')[0];
emergencyTask.style.backgroundColor = 'rgb(255,178,102)';

const noEmergencyTask = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTask.style.backgroundColor = 'rgb(255,204,153)';

const h3UrgEImport = document.getElementsByTagName('h3')[0];
h3UrgEImport.style.backgroundColor = 'rgb(204,0,204)';

const h3NonImport = document.getElementsByTagName('h3')[1];
h3NonImport.style.backgroundColor = 'rgb(204,0,204)';

const h3NonUImport = document.getElementsByTagName('h3')[2];
h3NonUImport.style.backgroundColor = 'black';

const h3NonUrgentImpor = document.getElementsByTagName('h3')[3];
h3NonUrgentImpor.style.backgroundColor = 'black';

const footer = document.querySelectorAll('footer')[0];
footer.style.backgroundColor = 'black';
