const contractName = "Pickem";

export const getNftMetadata =
`
import Pickem from 0x985d410b577fd4a1
// This script returns the NFT data at a given wallet address
// Returns:
// The nft data
pub fun main(addr: Address, tokenID: UInt64): Pickem.ItemData 
{
   let recipient = getAccount(addr)
   // get the Collection reference for the receiver
   let accountRef = recipient.getCapability(Pickem.CollectionPublicPath).borrow<&{Pickem.PickemCollectionPublic}>()
   ?? panic("Cannot borrow a reference to the recipient's Pickemcollection")
   let itemRef = accountRef.borrowPickem(id: tokenID)
   ?? panic("Cannot borrow a reference to the Collection's Pickem")

   return itemRef.getData()
}
`
