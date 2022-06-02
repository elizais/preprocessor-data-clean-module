/*
 * Copyright 2021 Byndyusoft
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

import { ApiTags } from "@byndyusoft/nest-swagger";
import { AddressDto, GetDataDto } from "@elizais/preprocessor-dtos";
import {
  Controller,
  Get,
  HttpStatus,
  NotImplementedException,
  Post,
  Query,
} from "@nestjs/common";

import { ApiCommonResponses } from "~/src";

import { PreprocessorService } from "./preprocessorService";

@ApiTags("Preprocessor")
@Controller({
  path: "preprocessor",
  version: "1",
})
export class PreprocessorController {
  public constructor(private readonly __service: PreprocessorService) {}

  @ApiCommonResponses(HttpStatus.BAD_REQUEST)
  @Post("/")
  public sendRecoveryData(): Promise<GetDataDto> {
    throw NotImplementedException;
    // return this.__service.getTrainingSample(query);
  }

  @ApiCommonResponses(HttpStatus.BAD_REQUEST, HttpStatus.NOT_FOUND)
  @Get("/rawData")
  public getRawData(@Query() query: AddressDto): Promise<GetDataDto> {
    return this.__service.getRawData(query);
  }

  @ApiCommonResponses(HttpStatus.BAD_REQUEST, HttpStatus.NOT_FOUND)
  @Get("/recoveredData")
  public getRecoveredData(): Promise<GetDataDto> {
    throw NotImplementedException;
    // return this.__service.getRecoveredData(query);
  }

  @ApiCommonResponses(HttpStatus.BAD_REQUEST, HttpStatus.NOT_FOUND)
  @Get("/recoveredData")
  public getTrainingSample(): Promise<GetDataDto> {
    throw NotImplementedException;
    // return this.__service.getTrainingSample(query);
  }
}
