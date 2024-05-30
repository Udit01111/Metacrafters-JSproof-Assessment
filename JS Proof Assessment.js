/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFTs_container=[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_haircolor,_age,_mothertongue, _bling) {
    const NFT_details={
        "name" :_name,
        "haircolor" :_haircolor,
        "age" :_age,
        "mothertongue" :_mothertongue,
        "bling" :_bling
    }
    NFTs_container.push(NFT_details);
    console.log("MINTED:\t" + _name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
 for(let i=0;i< NFTs_container.length; i++){
    console.log("\nNFT no. :" + (i+1));
    console.log("Name:\t\t\t\t\t" + NFTs_container[i].name);
    console.log("Haircolor:\t\t" + NFTs_container[i].haircolor);
    console.log("Age:\t\t\t\t\t" + NFTs_container[i].age);
    console.log("Mothertongue:\t" + NFTs_container[i].mothertongue);
    console.log("Bling:\t\t\t\t" + NFTs_container[i].bling);
 }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log(NFTs_container.length);
}

// call your functions below this line
mintNFT ("Udit", "black", 21, "Hindi","Gold Chain");
mintNFT ("Raam", "brown", 20, "Hindi","Gold Chain");
mintNFT ("Aadi", "black", 13, "Tamil","Gold Chain");
mintNFT ("Ritu", "black", 16, "English","Gold Chain");
listNFTs ();
getTotalSupply();
