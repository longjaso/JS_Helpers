function TaxBracket(ceiling, rate, tentativeAmt){
  this.ceiling=ceiling;
  this.rate=rate;
  this.tentativeAmt=tentativeAmt;
}

function fedTab(){
  return [
  	new TaxBracket(11900,0,0),
    new TaxBracket(31650,0.1,0),
    new TaxBracket(92150,0.12,1975),
    new TaxBracket(182950,0.22,9235),
    new TaxBracket(338500,0.24,2911),
    new TaxBracket(426600,0.32,66543),
    new TaxBracket(633950,0.35,94735),
    new TaxBracket(9999999,0.37,167307.5)
  ];
}

function stateTab(){
  return [
    new TaxBracket(7100,0.05,0),
    new TaxBracket(17800,0.07,355),
    new TaxBracket(250000,0.09,1104),
    new TaxBracket(9999999,0.099,22002)
  ];
}

function taxCalc(gross,level) {
  if(level.toLowerCase() !== 'f' && level.toLowerCase() !== 's') { return null; }
  let taxTable = (level.toLowerCase()==='f') ? fedTab() : stateTab();
  let annual = gross * 24;
  let index = taxTable.findIndex(bracket => bracket.ceiling > annual);
  return (taxTable[index].tentativeAmt + ((annual - taxTable[index-1].ceiling) * taxTable[index].rate))/24;
}
