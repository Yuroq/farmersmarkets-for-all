/* tslint:disable */
/* eslint-disable */
/**
 * Farmer's Markets - OpenAPI 3.0
 * Farmer's Markets - OpenAPI 3.0 (ASP.NET 6)
 *
 * OpenAPI spec version: 1.0.11
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FarmersMarketApiModelsFarmersMarket } from './farmers-market-api-models-farmers-market';
/**
 * 
 * @export
 * @interface FarmersMarketApiModelsModelApiResponse
 */
export interface FarmersMarketApiModelsModelApiResponse {
    /**
     * 
     * @type {number}
     * @memberof FarmersMarketApiModelsModelApiResponse
     */
    code?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FarmersMarketApiModelsModelApiResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<FarmersMarketApiModelsFarmersMarket>}
     * @memberof FarmersMarketApiModelsModelApiResponse
     */
    farmersMarkets?: Array<FarmersMarketApiModelsFarmersMarket> | null;
}
