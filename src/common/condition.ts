import { ConditionEntity } from "../../generated/src/Types.gen";

export function createCondition(
    version: string,
    coreAddress: string,
    conditionId: BigInt,
    gameEntityId: string,
    margin: BigInt,
    reinforcement: BigInt,
    outcomes: BigInt[],
    funds: BigInt[],
    winningOutcomesCount: i32,
    isExpressForbidden: boolean,
    provider: BigInt,
    txHash: string,
    createBlock: ethereum.Block,
    startsAt: BigInt | null = null,
  ): ConditionEntity {
    
    const conditionEntityId = coreAddress + "_" + conditionId.toString()

    const conditionEntity: ConditionEntity = {
      id: conditionEntityId,
      core: coreAddress,
    }

    // const conditionEntity = new Condition(conditionEntityId)
  
    // conditionEntity.core = coreAddress
    // conditionEntity.coreAddress = coreAddress
  
    // conditionEntity.conditionId = conditionId
    // conditionEntity.game = gameEntityId
    // conditionEntity._winningOutcomesCount = winningOutcomesCount
  
    // conditionEntity.isExpressForbidden = isExpressForbidden
  
    // conditionEntity.createdTxHash = txHash
  
    // conditionEntity.createdBlockNumber = createBlock.number
    // conditionEntity.createdBlockTimestamp = createBlock.timestamp
  
    // conditionEntity.status = CONDITION_STATUS_CREATED.toString()
    // conditionEntity.margin = margin
    // conditionEntity.reinforcement = reinforcement
    // conditionEntity.turnover = BigInt.zero()
    // conditionEntity.provider = provider
  
    // conditionEntity._updatedAt = createBlock.timestamp
  
    // const newOdds = getOdds(
    //   version,
    //   funds,
    //   conditionEntity.margin,
    //   conditionEntity._winningOutcomesCount,
    // )
  
    // if (newOdds === null) {
    //   log.error('createCondition getOdds returned null, conditionId {}', [
    //     conditionId.toString(),
    //   ])
  
    //   return null
    // }
  
    // conditionEntity.save()
  
    // let outcomeIds: BigInt[] = []
  
    // for (let i = 0; i < outcomes.length; i++) {
    //   outcomeIds = outcomeIds.concat([outcomes[i]])
  
    //   const outcomeId = outcomes[i].toString()
  
    //   const outcomeEntityId = getOutcomeEntityId(conditionEntityId, outcomeId)
    //   const outcomeEntity = new Outcome(outcomeEntityId)
  
    //   outcomeEntity.core = coreAddress
    //   outcomeEntity.outcomeId = outcomes[i]
    //   outcomeEntity.condition = conditionEntity.id
    //   outcomeEntity.sortOrder = i
    //   outcomeEntity.fund = funds[i]
    //   outcomeEntity.rawCurrentOdds = newOdds[i]
  
    //   outcomeEntity._betsEntityIds = []
    //   outcomeEntity.currentOdds = toDecimal(
    //     outcomeEntity.rawCurrentOdds,
    //     BASES_VERSIONS.mustGetEntry(version).value,
    //   )
    //   outcomeEntity._updatedAt = createBlock.timestamp
  
    //   outcomeEntity.save()
    // }
  
    // conditionEntity.outcomesIds = outcomeIds
  
    // if (startsAt) {
    //   conditionEntity.internalStartsAt = startsAt
    // }
  
    // conditionEntity._updatedAt = createBlock.timestamp
    // conditionEntity.save()
  
    // const gameEntity = Game.load(gameEntityId)!
  
    // gameEntity._activeConditionsEntityIds = gameEntity._activeConditionsEntityIds!.concat([conditionEntityId])
    // gameEntity.hasActiveConditions = true
    // gameEntity.status = GAME_STATUS_CREATED.toString()
  
    // gameEntity._updatedAt = createBlock.timestamp
  
    // gameEntity.save()
  
    // const leagueEntity = League.load(gameEntity.league)!
  
    // if (!leagueEntity.activeGamesEntityIds!.includes(gameEntityId)) {
    //   leagueEntity.activeGamesEntityIds = leagueEntity.activeGamesEntityIds!.concat([gameEntityId])
    //   leagueEntity.hasActiveGames = true
    //   leagueEntity.save()
  
    //   const countryEntity = Country.load(leagueEntity.country)!
  
    //   if (!countryEntity.activeLeaguesEntityIds!.includes(leagueEntity.id)) {
    //     countryEntity.activeLeaguesEntityIds = countryEntity.activeLeaguesEntityIds!.concat([leagueEntity.id])
    //     countryEntity.hasActiveLeagues = true
    //     countryEntity.save()
    //   }
    // }
  
    // return conditionEntity
  }