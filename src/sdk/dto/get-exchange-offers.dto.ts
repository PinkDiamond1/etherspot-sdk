import { IsOptional } from 'class-validator';
import { BigNumberish } from 'ethers';
import { IsAddress, IsBigNumberish } from './validators';

export class GetExchangeOffersDto {
  @IsAddress()
  fromTokenAddress: string;

  @IsAddress()
  toTokenAddress: string;

  @IsBigNumberish({
    positive: true,
  })
  fromAmount: BigNumberish;

  @IsOptional()
  fromChainId?: number;
}
