export const dListTx=
`
import NFTStorefront from 0x94b06cfca1d8a476
import Pickem from 0x985d410b577fd4a1

transaction(saleItemID: UInt64)
 {

  let storefront: &NFTStorefront.Storefront 
   prepare(acct: AuthAccount)
    {
     self.storefront = acct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath)
     ?? panic("Missing or NO Nft with this id token is on list")
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

 execute {}

}

`