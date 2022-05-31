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

import { MigrationInterface, QueryRunner } from "typeorm";

// eslint-disable-next-line @typescript-eslint/naming-convention
export class createTableTimeSeriesReport1654028130835
  implements MigrationInterface
{
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  name = "createTableTimeSeriesReport1654028130835";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."time_series_report_status" AS ENUM('CREATED', 'IN_PROCESS', 'DONE', 'DELETED')`,
    );
    await queryRunner.query(
      `CREATE TABLE "time_series_report" ("id" BIGSERIAL NOT NULL, "address" text NOT NULL, "status" "public"."time_series_report_status" NOT NULL, "sample_mean" double precision, "dispersion" double precision, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "raw_data" jsonb NOT NULL, "recovered_data" jsonb, "training_sample" jsonb, CONSTRAINT "PK_990dde6ebd0b811f7e58e95736a" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "time_series_report"`);
    await queryRunner.query(`DROP TYPE "public"."time_series_report_status"`);
  }
}
