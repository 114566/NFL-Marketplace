export const listTx=
`
import Pickem from 0x985d410b577fd4a1
import FungibleToken from 0x9a0766d93b6608b7
import NonFungibleToken from 0x631e88ae7f1d7c20
import DapperUtilityCoin from 0x82ec283f88a62e65
import NFTStorefront from 0x94b06cfca1d8a476
transaction(saleItemID: UInt64, saleItemPrice: UFix64)
{

let ducReceiver: Capability<&{FungibleToken.Receiver}>
let PickemProvider: Capability<&Pickem.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>
let storefront: &NFTStorefront.Storefront

prepare(acct: AuthAccount)
{
 // If the account doesn't already have a Storefront
  if acct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath) == nil 
   {
    // Create a new empty .Storefront
    let storefront <- NFTStorefront.createStorefront() as! @NFTStorefront.Storefront
    // save it to the account
    acct.save(<-storefront, to: NFTStorefront.StorefrontStoragePath)
    // create a public capability for the .Storefront
    acct.link<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(NFTStorefront.StorefrontPublicPath, target: NFTStorefront.StorefrontStoragePath)
   }

  self.ducReceiver = acct.getCapability<&{FungibleToken.Receiver}>(/public/dapperUtilityCoinReceiver)
  assert(self.ducReceiver.borrow() != nil, message: "Missing or mis-typed DUC receiver")

  if !acct.getCapability<&Pickem.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(/private/PickemCollection)!.check() 
  {
    acct.link<&Pickem.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(/private/PickemCollection, target: /storage/PickemCollection)
  }

  self.PickemProvider = acct.getCapability<&Pickem.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(/private/PickemCollection)!
  assert(self.PickemProvider.borrow() != nil, message: "Missing or mis-typed Pickem.Collection provider")
  self.storefront = acct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath) ?? panic("Missing or mis-typed NFTStorefront Storefront")
  let existingOffers = self.storefront.getListingIDs()
   if existingOffers.length > 0
    {
      for listingResourceID in existingOffers
       {
         let listing: &NFTStorefront.Listing{NFTStorefront.ListingPublic}? = self.storefront.borrowListing(listingResourceID: listingResourceID)
          if listing != nil && listing!.getDetails().nftID == saleItemID && listing!.getDetails().nftType == Type<@Pickem.NFT>()
          {
             self.storefront.removeListing(listingResourceID: listingResourceID)
          }
       }
    }
 }
 
 pre {}

 execute {
    let saleCut = NFTStorefront.SaleCut(
      receiver: self.ducReceiver,
      amount: saleItemPrice
    )

    self.storefront.createListing(
      nftProviderCapability: self.PickemProvider,
      nftType: Type<@Pickem.NFT>(),
      nftID: saleItemID,
      salePaymentVaultType: Type<@DapperUtilityCoin.Vault>(),
      saleCuts: [saleCut]
    )
  }

}

`