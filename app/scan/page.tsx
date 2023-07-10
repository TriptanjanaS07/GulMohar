
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';


const ActiveEvent = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return <EmptyState
        title="Unauthorized"
        subtitle="Please login"
        />
    }

    const listings = await getListings({ userId: currentUser.id });

    if (listings.length === 0) {
        return (
          <ClientOnly>
            <EmptyState
              title="No active event at the moment :("
              subtitle="Looks your events are yet to be held!."
            />
          </ClientOnly>
        );
      }
      const tokens = listings[0];
      console.log(tokens);
      (async () => {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    
        const fromWallet = Keypair.fromSecretKey(Uint8Array.from([168,64,200,53,9,16,64,151,57,52,235,86,76,126,213,123,81,76,62,105,139,238,232,155,135,98,216,251,9,171,121,164,29,6,128,171,45,221,190,187,127,155,16,4,149,227,205,119,119,85,202,53,188,181,254,127,35,122,35,39,207,244,59,77]));
    
        const toWalletPublicKey = new PublicKey('AkpYgFPZ3yQZGyT7b93JnAk1hjBpJtgmHFXKoWwSqkQP');
    
        const mint = new PublicKey('BrkvAuEPyiN3fqZp17KHw6Xc5mxQhJZ36MRdoXxjQq7A');
    
        const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            fromWallet,
            mint,
            fromWallet.publicKey
        );
    
        const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, mint, toWalletPublicKey);
    
        // Transfer the new token to the "toTokenAccount" we just created
        let transfer_tx = await transfer(
            connection,
            fromWallet,
            fromTokenAccount.address,
            toTokenAccount.address,
            fromWallet,
            1000000000 * tokens
        );
        console.log('transfer tx:', transfer_tx);
    })();
    return (
      <div className="flex mt-8 flex-col items-center h-screen">
      <h2 className="mt-8">Transaction was successful! {tokens} Mohra was rewarded!</h2>
      </div>
    );
}

export default ActiveEvent;