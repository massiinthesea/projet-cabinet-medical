

## A la récupération des patients, les patients sont placés dans la listePatients des infirmiers s'ils leur sont affectés ou sur un tableau contenant les patients non affectés.

## Nous avons un component pour afficher les infirmiers avec leur patients et un pour afficher les patients non affectés. Nous avons un composant ajout qui permet de récupérer des informations sur le patient à ajouter à l'aide d'un formulaire, cest informations sont récupérées puis utiliser pour construire un patientInterface qui sera ajouté à l'aide de addPatient, le problème est que nous n'avons pas réussi à ajouter le patient lors du click, il ne reconnaît pas addPatient, j'ai essayé en ajoute un attribut cabinetMedicalService et en mettant this mais cela na pas marché, je peux seulement appeler la fonction au chargement de la page, ainsi les données sur le patient ne sont pas encore définies, alors un patient typé en brute est ajouté.
