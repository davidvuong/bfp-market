import { wei } from '@synthetixio/wei';
import { ethers } from 'ethers';
import type { GeneratedBootstrap } from '../bootstrap';

export const bn = (n: number) => wei(n).toBN();

// Below is a collection of reasonably realistic market parameters for BTC, ETH, SOL, OP, and ARB.
//
// These markets are deliberately hardcoded. Market configured params are very particular and lots of
// unexpected behaviours are mitigated simply by having correctly configured markets. As such, bootstrapped
// markets shuffle between the 5 below here (see `genBootstrap()`).
//
// If you're looking for a completely random market, see `genMarket()`.
export const MARKETS: GeneratedBootstrap['markets'] = [
  {
    name: ethers.utils.formatBytes32String('BTCPERP'),
    initialPrice: bn(30_000),
    specific: {
      oracleNodeId: '',
      pythPriceFeedId: '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
      makerFee: bn(0.0002),
      takerFee: bn(0.0006),
      maxMarketSize: bn(2000),
      maxFundingVelocity: bn(9),
      skewScale: bn(100_000),
      minCreditPercent: bn(1),
      minMarginUsd: bn(50),
      minMarginRatio: bn(0.02),
      incrementalMarginScalar: bn(1),
      maintenanceMarginScalar: bn(0.5),
      liquidationRewardPercent: bn(0.00002),
      liquidationLimitScalar: bn(1),
      liquidationWindowDuration: 30,
      liquidationMaxPd: bn(0.0016),
    },
  },
  {
    name: ethers.utils.formatBytes32String('ETHPERP'),
    initialPrice: bn(1800),
    specific: {
      oracleNodeId: '',
      pythPriceFeedId: '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace',
      makerFee: bn(0.0002),
      takerFee: bn(0.0006),
      maxMarketSize: bn(27_000),
      maxFundingVelocity: bn(9),
      skewScale: bn(1_000_000),
      minCreditPercent: bn(1),
      minMarginUsd: bn(50),
      minMarginRatio: bn(0.05),
      incrementalMarginScalar: bn(1),
      maintenanceMarginScalar: bn(0.5),
      liquidationRewardPercent: bn(0.00002),
      liquidationLimitScalar: bn(1),
      liquidationWindowDuration: 30,
      liquidationMaxPd: bn(0.0016),
    },
  },
  {
    name: ethers.utils.formatBytes32String('SOLPERP'),
    initialPrice: bn(20),
    specific: {
      oracleNodeId: '',
      pythPriceFeedId: '0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d',
      makerFee: bn(0.0002),
      takerFee: bn(0.0008),
      maxMarketSize: bn(220_000),
      maxFundingVelocity: bn(36),
      skewScale: bn(7_500_000),
      minCreditPercent: bn(1),
      minMarginUsd: bn(50),
      minMarginRatio: bn(0.05),
      incrementalMarginScalar: bn(1),
      maintenanceMarginScalar: bn(0.5),
      liquidationRewardPercent: bn(0.00002),
      liquidationLimitScalar: bn(1),
      liquidationWindowDuration: 30,
      liquidationMaxPd: bn(0.002),
    },
  },
  {
    name: ethers.utils.formatBytes32String('OPPERP'),
    initialPrice: bn(1.5),
    specific: {
      oracleNodeId: '',
      pythPriceFeedId: '0x385f64d993f7b77d8182ed5003d97c60aa3361f3cecfe711544d2d59165e9bdf',
      makerFee: bn(0.0002),
      takerFee: bn(0.001),
      maxMarketSize: bn(4_100_000),
      maxFundingVelocity: bn(36),
      skewScale: bn(30_000_000),
      minCreditPercent: bn(1),
      minMarginUsd: bn(50),
      minMarginRatio: bn(0.05),
      incrementalMarginScalar: bn(1),
      maintenanceMarginScalar: bn(0.5),
      liquidationRewardPercent: bn(0.00002),
      liquidationLimitScalar: bn(1),
      liquidationWindowDuration: 30,
      liquidationMaxPd: bn(0.0024),
    },
  },
  {
    name: ethers.utils.formatBytes32String('ARBPERP'),
    initialPrice: bn(1.1365),
    specific: {
      oracleNodeId: '',
      pythPriceFeedId: '0x3fa4252848f9f0a1480be62745a4629d9eb1322aebab8a791e344b3b9c1adcf5',
      makerFee: bn(0.0002),
      takerFee: bn(0.001),
      maxMarketSize: bn(4_600_000),
      maxFundingVelocity: bn(36),
      skewScale: bn(75_000_000),
      minCreditPercent: bn(1),
      minMarginUsd: bn(50),
      minMarginRatio: bn(0.05),
      incrementalMarginScalar: bn(1),
      maintenanceMarginScalar: bn(0.5),
      liquidationRewardPercent: bn(0.00002),
      liquidationLimitScalar: bn(1),
      liquidationWindowDuration: 30,
      liquidationMaxPd: bn(0.0024),
    },
  },
];
