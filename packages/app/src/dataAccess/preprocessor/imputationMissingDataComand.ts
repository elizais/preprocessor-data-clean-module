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

// import { NumberNullType } from "@elizais/preprocessor-dtos";
import { Injectable } from "@nestjs/common";
// import DTW = require("dynamic-time-warping");

@Injectable()
export class ImputationMissingDataComand {
  // private distanceCalculation(query: number[], candidate: number[]): number {
  //   // eslint-disable-next-line unicorn/consistent-function-scoping
  //   const distFunction = (a: number, b: number): number => Math.abs(a - b);
  //
  //   const dtw = new DTW(query, candidate, distFunction);
  //   return dtw.getDistance();
  // }
  //
  // private searchIndexMissingValue(timesiries: NumberNullType[]): NumberNullType[]{
  //   const index = timesiries.indexOf(null);
  //   return timesiries.slice(index);
  // }
}
