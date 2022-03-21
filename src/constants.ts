import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  RINKEBY = 4,
  FUJI = 43113,
  AVALANCHE = 43114
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

/**
 * DEX SDK
 */
export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x86f83be9770894d8e46301b12E88e14AdC6cdb5F',
  [ChainId.FUJI]: '0x7eeccb3028870540EEc3D88C2259506f2d34fEE0',
  [ChainId.AVALANCHE]: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10'
}

export const JOE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xce347E069B68C53A9ED5e7DA5952529cAF8ACCd4',
  [ChainId.FUJI]: '0xcee9d937E3627E55F08240072D63f32c3a60fF2D',
  [ChainId.AVALANCHE]: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd'
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x1F51b7697A1919cF301845c93D4843FD620ad7Cc',
  [ChainId.FUJI]: '0x2d388F47c3Ae5CC0C7F8ad73296B208cfaCd35ae',
  [ChainId.AVALANCHE]: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
}

export const MASTERCHEF_V3_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xEedf119022F1Bb5F63676BbE855c82151B7198AF',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x188bED1968b795d5c9022F6a0bb5931Ac4c18F00'
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x33A86aFC0f728882F48E5105bc98758b3eAe2081',
  [ChainId.FUJI]: '0x171B28d39De22EF001029117F3d241fF78c7DC5C',
  [ChainId.AVALANCHE]: '0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33'
}

export const ZAP_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x70c949152D2AC84FbB809228606db4654773D994',
  [ChainId.FUJI]: '0x5BBFA5f49EC557eABA9427Ac434F21b69113Fe20',
  [ChainId.AVALANCHE]: '0x2C7B8e971c704371772eDaf16e0dB381A8D02027'
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x7E2528476b14507f003aE9D123334977F5Ad7B14',
  [ChainId.FUJI]: '0x5db0735cf88F85E78ed742215090c465979B5006',
  [ChainId.AVALANCHE]: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4'
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xbEFE1d0756Da706B3F0EbaEa7b4ae10D0AdF2f3F',
  [ChainId.FUJI]: '0x0529719e33AA2f15c13b12be01D7E876454Caf02',
  [ChainId.AVALANCHE]: '0x861726BFE27931A4E22a7277bDe6cb8432b65856'
}

export const ROLL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xD6344FF98d12adD998cBcfaC16A215396e9bCb8c',
  [ChainId.FUJI]: '0x41d5f5F66e4cEd197Ff273308A1c194E9E249f4F',
  [ChainId.AVALANCHE]: '0xacFF0fBf56bAeb9Ef677DE19ADED8F7A950BCb58'
}

export const BORINGHELPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x73B35Bab1aFD869E3738464b3bE97999e80E8458',
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x1dd4D86180EEe39ac4fB35ECa67CACF608Ab5741'
}

export const BORINGHELPER_MCV3_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xC0B09dB79846A610bc1f0C9e04542912548226DC',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xce63ECA0C8A2084C1BaEcE7737dB88f10c412c5E'
}

export const BORINGHELPER_BMCJ_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x27c2FD2c3aC57C356Bd11A73CD7c84FB573C641B',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x80242b13F37eEB5B59fFe0e988d69133f1b19747'
}

export const BORINGTOKENSCANNER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xdd5C40b5f0f5Df9c8BF0aA4703d73867ea7f022D',
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c'
}

export const BORINGDASHBOARD_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xeC208ef9F8aEDbbF28722286E334a3939acEA646',
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x1Af353148F2316487b5311Fcd522c037842D232c'
}

export const LOCKING_WRAPPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x60CB8E40B815fa7FF24Ab8a0603BF0afAcb49Cc0',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xDc3B37B5F0Fe5d3f8b8701a3F8d81A02EE8A1E1a'
}

export const FARMLENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x926E833c27284f7f633E461FcE6Dd17ccb2030e1',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xc1b83cE1573984Dcf4115e983F9c28748a0F350E'
}

export const FARMLENSV2_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xA177af6c5158DE02915a6b03a980E28ada6Bc43F',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xb2897b2f68a4949190803cF229523D722Bf3318f'
}

export const ROCKET_JOE_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x3Be901d05584dc7900461a1b538ce24F7989cD65',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x5483ce08659fABF0277f9314868Cc4f78687BD08'
}

export const LAUNCH_EVENT_LENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xfa31cDA014bA4e1A2CfF02EA94a7B9E6DB6BcbC5',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x039AA5d3FC07f6f265656793A8c437055b653d68'
}

export const ROCKET_JOE_STAKING_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xc1108bda59F2A66843833d5B801bF40C966d34ca',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x102D195C3eE8BF8A9A89d63FB3659432d3174d81'
}

export const STABLE_JOE_STAKING_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x12ba94D04a7a7F0882155b2c55b88e269428227B',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x1a731B2299E22FbAC282E7094EdA41046343Cb51'
}

export const MONEY_MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xCB1A7684374A281253adAA246d17a3fA6Bba7E3a',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x63C0CF90aE12190B388F9914531369aC1e4e4e47'
}

export const SJOE_REWARD_TOKEN: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
}

export const VEJOE_STAKING_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x1c3C3424439e4A97802d29861cf8DA8A70d51A0e',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x25D85E17dD9e544F6E9F8D44F99602dbF5a97341'
}

export const VEJOE_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x15E190De4889c5f2D3AB601D72B6d21709133781',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x3cabf341943Bc8466245e4d6F1ae0f8D071a1456'
}

export const BOOSTED_MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x460d978831afd5Af99738E060C3ad8a76e592beA',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x4483f0b6e2F5486D06958C20f8C39A7aBe87bf8F'
}

export const INIT_CODE_HASH = '0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

/**
 * Lending SDK
 */

export const UNITROLLER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x5b0a2Fa14808E34C5518E19f0DBc39F61d080B11',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xdc13687554205E5b89Ac783db14bb5bba4A1eDaC'
}

export const JOELENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x4234528B4707d9c5F992FE63b514fd1dC7aFf42E',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x994Ed0698F5145211Fd5DAE458dD7d91c2da6CEC'
}

export const JOELENSVIEW_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x51fBdc8FCa72CeF1E1b558DB0c502e874DB5602A',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0x0000000000000000000000000000000000000000'
}

export const JAVAX_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x0444dcF838055493519F26021dE63Afa72EEe0D2',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xC22F01ddc8010Ee05574028528614634684EC29e'
}

export const MAXIMILLION_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xC48B0159d3e7F240ac76cc3Ce39dF62fCd4656b0',
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.AVALANCHE]: '0xe5cDdAFd0f7Af3DEAf4bd213bBaee7A5927AB7E7'
}
