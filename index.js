const NFTs = [
    {
        name: "Chanel",
        size: "M",
        properties: "Canvas",
        color: "Black",
        brand: "Chanel"
    }
];

function mintNFT(nft) {
    NFTs.push(nft);
    return nft;
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log(NFTs[i]);
    }
    console.log("------------------");
}

function getTotalSupply() {
    console.log(`Total Supply: ${NFTs.length}`);
    console.log("------------------");
}

// Call your functions below this line

listNFTs();

mintNFT({name: "Coach", size: "XL", properties: "Leather", color: "Brown", brand: "Coach"});
mintNFT({name: "Louis Vuitton", size: "XXL", properties: "Canvas", color: "Monogram", brand: "Louis Vuitton"});
mintNFT({name: "Hermes", size: "XXXL", properties: "Crocodile", color: "Black", brand: "Hermes"});
listNFTs();

getTotalSupply();
