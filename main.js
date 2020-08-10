// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns a pAequor objecy
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randBase = Math.floor(Math.random()*this.dna.length);
      console.log('RandBase: ' + randBase);
      let newBase = returnRandBase();
      while (newBase === dna[randBase]) {
        newBase = returnRandBase();
      }
      dna[randBase] = newBase;
      console.log('newBase at index ' + randBase + ': ' + newBase);
    },
    compareDNA() {
      
    }
  }
}

let pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor.dna);
console.log('Mutating...');
pAequor.mutate();
console.log(pAequor.dna);
