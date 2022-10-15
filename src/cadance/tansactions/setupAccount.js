export const setupAccountTx=
`

import NonFungibleToken from 0x631e88ae7f1d7c20
import Pickem from 0x985d410b577fd4a1
import MetadataViews from 0x631e88ae7f1d7c20
transaction 
 {
  prepare(acct: AuthAccount) 
  {
      if acct.borrow<&Pickem.Collection>(from: Pickem.CollectionStoragePath) == nil 
    {
       // create a new empty collection
       let collection <- Pickem.createEmptyCollection()
       // save it to the account
       acct.save(<-collection, to: Pickem.CollectionStoragePath)
       // create a public capability for the collection
      acct.link<&Pickem.Collection{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection,Pickem.PickemCollectionPublic}>
       (Pickem.CollectionPublicPath,target: Pickem.CollectionStoragePath,)
    }
   }

    execute {}
 }
`