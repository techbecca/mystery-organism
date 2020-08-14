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
    // Replaces a random base with another base
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
    // Logs the percentage that the DNA of two objects have in common
    compareDNA(otherP) {
      let count = 0;
      for (var i = 0; i < dna.length; i++) {
        if (dna[i] === otherP.dna[i]) {
          count++;
        }
      }
      const percentage = (100*count/dna.length).toFixed();
      console.log(`Specimen #${specimenNum} and specimen #${otherP.specimenNum} has ${percentage}% DNA in common`);
    }
  }
}

let pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor.dna);
console.log('Mutating...');
pAequor.mutate();
console.log(pAequor.dna);

let p2 = pAequorFactory(2, mockUpStrand());
pAequor.compareDNA(p2);
