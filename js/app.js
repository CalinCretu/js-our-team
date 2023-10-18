console.log('Our Team')

const membri = [
  {
    nome: 'Wayne Barnet',
    ruolo: 'Founder & CEO'
    foto: 
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor'
    foto: 
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager'
    foto: 
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager'
    foto: 
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer'
    foto: 
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer'
    foto: 
  },
]
for (let i = 0; i < membri.length; i++) {
  const studenteCorrente = membri[i]
  // console.log(studenteCorrente)
  const member = `${studenteCorrente.nome} ${studenteCorrente.ruolo}`
  console.log(member)
}