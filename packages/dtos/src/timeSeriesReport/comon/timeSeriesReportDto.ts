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

import { TransformToDate } from "@byndyusoft/class-validator-extended";
import { Type } from "class-transformer";
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from "class-validator";

import { TimeSeriesReportStatus } from "../enums";

import { TimeSeriesDto } from "./timeSeriesDto";

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

  @TransformToDate()
  @IsArray()
  @IsDate({ each: true })
  public readonly timestamp!: Date[];

  @Type(() => TimeSeriesDto)
  public readonly rawData!: TimeSeriesDto;

  @Type(() => TimeSeriesDto)
  @IsOptional()
  public readonly recoveredData?: TimeSeriesDto;

  @Type(() => TimeSeriesDto)
  @IsOptional()
  public readonly trainingSample?: TimeSeriesDto;
}
