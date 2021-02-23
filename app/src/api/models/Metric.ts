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
 * @interface Metric
 */
export interface Metric {
    /**
     * 
     * @type {string}
     * @memberof Metric
     */
    name: string;
    /**
     * can contain latex math expressions denoted by surrounding dollar symbols ($<math expression>$)
     * @type {string}
     * @memberof Metric
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof Metric
     */
    value: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof Metric
     */
    range: Array<number>;
}

export function MetricFromJSON(json: any): Metric {
    return MetricFromJSONTyped(json, false);
}

export function MetricFromJSONTyped(json: any, ignoreDiscriminator: boolean): Metric {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'value': json['value'],
        'range': json['range'],
    };
}

export function MetricToJSON(value?: Metric | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'value': value.value,
        'range': value.range,
    };
}


