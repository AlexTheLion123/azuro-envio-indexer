import { CoreContractEntity } from "../../generated/src/Types.gen";


export function createCoreContractEntity(
    coreAddress: string,
    liquidityPoolContractAddress: string,
    coreType: string,
  ): CoreContractEntity {

    const coreContractEntity: CoreContractEntity = {
      id : coreAddress,
      liquidityPool_id: liquidityPoolContractAddress,
      address: coreAddress,
      type_: coreType
    }
    


    // const coreContractEntity = new CoreContract(coreAddress)
    // coreContractEntity.liquidityPool = liquidityPoolContractEntity.id
    // coreContractEntity.address = coreAddress
    // coreContractEntity.type = coreType
    // coreContractEntity.save()
  
    return coreContractEntity
  }