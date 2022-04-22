import { BigInt } from "@graphprotocol/graph-ts"
import {
  Feed,
  Reclaim,
} from "../generated/Sacredbsc/Sacredbsc"
import {food,foodlist } from "../generated/schema"


export function handleFeed(event: Feed): void {
  let entity = food.load(event.params.tokenId.toString())
  if (entity== null) {
    entity = new food(event.params.tokenId.toString())
  }
  let foods = new foodlist(event.params.unlockTime.toString())
  foods.amount = event.params.amount
  foods.TokenID = event.params.tokenId
  foods.isclaim = false
}
export function handleReclaim(event: Reclaim): void {
  let food = foodlist.load(event.params.unlockTime.toString())
  food!.isclaim = true
}
