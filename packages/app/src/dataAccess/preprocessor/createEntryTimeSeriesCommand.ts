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

import { TracingService } from "@byndyusoft/nest-opentracing";
import {
  CreateTimeSeriesDto,
  CreateTimeSeriesResponseDto,
} from "@elizais/preprocessor-dtos";
import { TimeSeriesReportEntity } from "@elizais/preprocessor-entities";
import { Injectable } from "@nestjs/common";
import { Connection, EntityManager } from "typeorm";

@Injectable()
export class CreateEntryTimeSeriesCommand {
  public constructor(
    private readonly __connection: Connection,
    private readonly __tracingService: TracingService,
  ) {}

  public execute(
    options: CreateTimeSeriesDto,
  ): Promise<CreateTimeSeriesResponseDto> {
    return this.__tracingService.traceAsyncFunction(
      nameof(CreateEntryTimeSeriesCommand),
      () =>
        this.__connection.transaction((entityManager) =>
          this.__execute(entityManager, options),
        ),
    );
  }

  private async __execute(
    entityManager: EntityManager,
    options: CreateTimeSeriesDto,
  ): Promise<CreateTimeSeriesResponseDto> {
    const timeSeriesRepository = entityManager.getRepository(
      TimeSeriesReportEntity,
    );

    const insertResult = await timeSeriesRepository
      .createQueryBuilder()
      .insert()
      .values({
        ...options,
      })
      .returning([nameof(TimeSeriesReportEntity.prototype.id)])
      .execute();

    const [insertedEntity] =
      insertResult.generatedMaps as TimeSeriesReportEntity[];

    return {
      id: insertedEntity.id,
      address: insertedEntity.address,
      timestamp: insertedEntity.timestamp,
      rawData: insertedEntity.rawData,
    };
  }
}
