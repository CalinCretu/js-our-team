console.log('Our Team');

const imagesSrc = [
  'img/wayne-barnett-founder-ceo.jpg',
  'img/angela-caroll-chief-editor.jpg',
  'img/walter-gordon-office-manager.jpg',
  'img/angela-lopez-social-media-manager.jpg',
  'img/scott-estrada-developer.jpg',
  'img/barbara-ramos-graphic-designer.jpg'
];

const membri = [
  {
    nome: 'Wayne Barnet',
    ruolo: 'Founder & CEO',
    foto: imagesSrc[0]
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: imagesSrc[1]
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: imagesSrc[2]
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: imagesSrc[3]
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: imagesSrc[4]
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: imagesSrc[5]
  },
]

for (let i = 0; i < membri.length; i++) {
  const currentMember = membri[i];
  const card = document.createElement('card');
  const containerDOMElement = document.querySelector('.container')
  const cardContent = `<div class='col'>${currentMember.foto} ${currentMember.nome} ${currentMember.ruolo}</div>`;
  console.log(cardContent);

  containerDOMElement.innerHTML += cardContent;

}