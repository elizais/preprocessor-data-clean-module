/*
 * Copyright 2022 Byndyusoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Type } from "class-transformer";
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

import { TimeSeriesReportStatus } from "../enums";

import { TimeSeriesElementDto } from "./timeSeriesElementDto";

export class TimeSeriesReportDto {
  @IsNumberString({ no_symbols: true })
  public readonly id!: string;

  @IsString()
  public readonly address!: string;

  @IsEnum(TimeSeriesReportStatus)
  public readonly status!: TimeSeriesReportStatus;

  @IsNumber()
  @IsOptional()
  public readonly sampleMean?: number;

  @IsNumber()
  @IsOptional()
  public readonly dispersion?: number;

  @Type(() => TimeSeriesElementDto)
  @IsArray()
  @ValidateNested({ each: true })
  public readonly rawData!: TimeSeriesElementDto[];

  @Type(() => TimeSeriesElementDto)
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  public readonly recoveredData?: TimeSeriesElementDto;

  @Type(() => TimeSeriesElementDto)
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  public readonly trainingSample?: TimeSeriesElementDto;
}
