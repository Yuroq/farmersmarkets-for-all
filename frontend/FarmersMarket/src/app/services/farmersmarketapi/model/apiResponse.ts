/**
 * Farmer's Markets - OpenAPI 3.0
 * Does cool stuff
 *
 * OpenAPI spec version: 1.0.11
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FarmersMarket } from './farmersMarket';

export interface ApiResponse { 
    code?: number;
    message?: string;
    farmersMarkets?: Array<FarmersMarket>;
}