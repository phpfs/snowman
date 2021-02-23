/* tslint:disable */
/* eslint-disable */
/**
 * Snowman API
 * _This document describes the REST API of the snowman data matching benchmark tool._  Comparing data matching algorithms is still an unsolved topic in both industry and research.  With snowman, developers and researchers will be able to compare the performance of different data matching  solutions or improve new algorithms. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: snowman@groups.sap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DatasetAllOf
 */
export interface DatasetAllOf {
    /**
     * 
     * @type {number}
     * @memberof DatasetAllOf
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof DatasetAllOf
     */
    numberOfUploadedRecords?: number;
}

export function DatasetAllOfFromJSON(json: any): DatasetAllOf {
    return DatasetAllOfFromJSONTyped(json, false);
}

export function DatasetAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'numberOfUploadedRecords': !exists(json, 'numberOfUploadedRecords') ? undefined : json['numberOfUploadedRecords'],
    };
}

export function DatasetAllOfToJSON(value?: DatasetAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'numberOfUploadedRecords': value.numberOfUploadedRecords,
    };
}


