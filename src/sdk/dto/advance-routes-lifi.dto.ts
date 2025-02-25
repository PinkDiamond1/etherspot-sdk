import { BigNumber } from 'ethers';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive } from 'class-validator';
import { IsAddress, IsBigNumberish } from './validators';

export class GetAdvanceRoutesLiFiDto {
  @IsAddress()
  fromTokenAddress: string;

  @IsAddress()
  toTokenAddress: string;

  @IsPositive()
  @IsInt()
  @Type(() => Number)
  fromChainId: number | null;

  @IsPositive()
  @IsInt()
  @Type(() => Number)
  toChainId: number;

  @IsBigNumberish()
  fromAmount: BigNumber;

  @IsOptional()
  @IsAddress()
  toAddress?: string;
}