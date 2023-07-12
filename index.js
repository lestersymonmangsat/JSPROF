let collectionNFT = [];

function mintNFT(name, size, properties, color,  brand, ) {
  const nft = {
    name: name,
    size: size,
    properties: properties,
    color: color,
    brand: brand,
    
  };
  collectionNFT.push(nft);
}

function listNFTs() {
  for (let i = 0; i < collectionNFT.length; i++) {
    console.log(collectionNFT[i]);
  }
}

function getTotalSupply() {
  return collectionNFT.length;
}

mintNFT("Coach", "XL", "Leather", "Brown", "Coach");
mintNFT("Louis Vuitton","XXL", "Canvas", "Monogram", "Louis Vuitton");
mintNFT("Hermes", "XXXL", "Crocodile", "Black", "Hermes");

listNFTs();

console.log("TOTAL NFT:", getTotalSupply());
