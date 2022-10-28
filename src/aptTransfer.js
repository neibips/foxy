import {AptosClient, AptosAccount, CoinClient, FaucetClient, HexString, TokenClient} from "aptos";


export default async function apto () {
    const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
    const FAUCET_URL = "https://faucet.devnet.aptoslabs.com";

    const client = new AptosClient(NODE_URL);
    const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

    const tokenClient = new TokenClient(client);

    const coinClient = new CoinClient(client);



    console.log("===  uint8array wallet ===");
    const myWallet = new AptosAccount(new HexString('ee6baa8c40379367d4e86f1493eb402e9740a43860e526fff8d77787b113b185').toUint8Array())
    console.log(myWallet)

    // await faucetClient.fundAccount(myWallet.address(), 100_000_000);

    //create collection token
    const collectionName = "Aptos Foxy 2";
    const tokenName = "Hello prolay 2";
    const tokenPropertyVersion = 0;

    const tokenId = {
        token_data_id: {
            creator: myWallet.address().hex(),
            collection: collectionName,
            name: tokenName,
        },
        property_version: `${tokenPropertyVersion}`,
    };

    // const txnHash1 = await tokenClient.createCollection(
    //     myWallet,
    //     collectionName,
    //     "Alice's simple collection",
    //     "https://alice.com",
    // ); // <:!:section_4
    // await client.waitForTransaction(txnHash1, { checkSuccess: true });
    //
    // const txnHash2 = await tokenClient.createToken(
    //     myWallet,
    //     collectionName,
    //     tokenName,
    //     "Nft for prolay 2",
    //     10,
    //     "../public/sneakpeek.jpeg",
    // ); // <:!:section_5
    // await client.waitForTransaction(txnHash2, { checkSuccess: true });

    // Print the collection data.
    // :!:>section_6
    const collectionData = await tokenClient.getCollectionData(myWallet.address(), collectionName);
    console.log(`Alice's collection: ${JSON.stringify(collectionData, null, 4)}`);

    const aliceBalance1 = await tokenClient.getToken(
        myWallet.address(),
        collectionName,
        tokenName,
        `${tokenPropertyVersion}`,
    );
    console.log(`Alice's token balance: ${aliceBalance1["amount"]}`);

    const collectionDat = await tokenClient.getCollectionData(myWallet.address(), collectionName);
    console.log(`Alice's collection: ${JSON.stringify(collectionDat, null, 4)}`);

    // 0xb66063f94cd38c533c5aa12b27bf332c8c1fbd9e0b73377e44788594d77de329

    const tokenData = await tokenClient.getTokenData(myWallet.address(), collectionName, tokenName);
    console.log(`Alice's token data: ${JSON.stringify(tokenData, null, 4)}`);

    console.log("\n=== Transferring the token to Bob ===");
    const walletGet = new AptosAccount(new HexString('4cebee931c8f10d1b3372a7d76ff9b0bec4cd12b888665fbca63cf0759553835').toUint8Array())
    console.log(walletGet.address())
    // :!:>section_9
    // const txnHash3 = await tokenClient.offerToken(
    //     myWallet,
    //     walletGet.address(),
    //     myWallet.address(),
    //     collectionName,
    //     tokenName,
    //     1,
    //     tokenPropertyVersion,
    // ); // <:!:section_9
    // await client.waitForTransaction(txnHash3, { checkSuccess: true });
    //
    // console.log('offered')
    //
    // const txnHash4 = await tokenClient.claimToken(
    //     walletGet,
    //     myWallet.address(),
    //     myWallet.address(),
    //     collectionName,
    //     tokenName,
    //     tokenPropertyVersion,
    // ); // <:!:section_10
    // await client.waitForTransaction(txnHash4, { checkSuccess: true });

    // let txnHash5 = await tokenClient.directTransferToken(
    //     myWallet,
    //     walletGet,
    //     walletGet.address(),
    //     collectionName,
    //     tokenName,
    //     1,
    //     tokenPropertyVersion,
    // ); // <:!:section_11
    // await client.waitForTransaction(txnHash5, { checkSuccess: true });
    console.log('sended')


};
