export const getTokenByAddress =
`
import Pickem from 0x985d410b577fd4a1
import NonFungibleToken from 0x631e88ae7f1d7c20

pub fun main(address: Address): [UInt64] {
  if let collection = getAccount(address).getCapability<&Pickem.Collection{NonFungibleToken.CollectionPublic, Pickem.PickemCollectionPublic}>(Pickem.CollectionPublicPath).borrow() {
    return collection.getIDs()
  }

  return []
}
`


//
// `
// import Pickem from 0x985d410b577fd4a1
// import NonFungibleToken from 0x631e88ae7f1d7c20
//
// pub fun main(address: Address): [UInt64] {
//   if let collection = getAccount(address).getCapability<&Pickem.Collection{NonFungibleToken.CollectionPublic, Pickem.PickemCollectionPublic}>(Pickem.CollectionPublicPath).borrow() {
//     return collection.getIDs()
//   }
//
//   return []
// }
// `
