/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.7.0.0 (NJsonSchema v10.1.24.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class Client     {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * Gets a Video Management View Model
     * @return Success
     */
    getVideoManagementVm(version: string): Promise<VideoManagementVmQueryResponseWrapper> {
        let url_ = this.baseUrl + "/api/v{version}/VideoManagement";
        if (version === undefined || version === null)
            throw new Error("The parameter 'version' must be defined.");
        url_ = url_.replace("{version}", encodeURIComponent("" + version));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetVideoManagementVm(_response);
        });
    }

    protected processGetVideoManagementVm(response: Response): Promise<VideoManagementVmQueryResponseWrapper> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 400) {
            return response.text().then((_responseText) => {
            let result400: any = null;
            let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result400 = ProblemDetails.fromJS(resultData400);
            return throwException("Bad Request", status, _responseText, _headers, result400);
            });
        } else if (status === 406) {
            return response.text().then((_responseText) => {
            let result406: any = null;
            let resultData406 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result406 = ProblemDetails.fromJS(resultData406);
            return throwException("Not Acceptable", status, _responseText, _headers, result406);
            });
        } else if (status === 500) {
            return response.text().then((_responseText) => {
            return throwException("Server Error", status, _responseText, _headers);
            });
        } else if (status === 401) {
            return response.text().then((_responseText) => {
            let result401: any = null;
            let resultData401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result401 = ProblemDetails.fromJS(resultData401);
            return throwException("Unauthorized", status, _responseText, _headers, result401);
            });
        } else if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = VideoManagementVmQueryResponseWrapper.fromJS(resultData200);
            return result200;
            });
        } else {
            return response.text().then((_responseText) => {
            let resultdefault: any = null;
            let resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            resultdefault = ProblemDetails.fromJS(resultDatadefault);
            return throwException("Error", status, _responseText, _headers, resultdefault);
            });
        }
    }
}

export class ProblemDetails implements IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    constructor(data?: IProblemDetails) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.type = _data["type"];
            this.title = _data["title"];
            this.status = _data["status"];
            this.detail = _data["detail"];
            this.instance = _data["instance"];
        }
    }

    static fromJS(data: any): ProblemDetails {
        data = typeof data === 'object' ? data : {};
        let result = new ProblemDetails();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["type"] = this.type;
        data["title"] = this.title;
        data["status"] = this.status;
        data["detail"] = this.detail;
        data["instance"] = this.instance;
        return data; 
    }
}

export interface IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;
}

export class VideoManagementNetforumItemInfo implements IVideoManagementNetforumItemInfo {
    netforumKey?: string;
    netforumType?: string | undefined;

    constructor(data?: IVideoManagementNetforumItemInfo) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.netforumKey = _data["NetforumKey"];
            this.netforumType = _data["NetforumType"];
        }
    }

    static fromJS(data: any): VideoManagementNetforumItemInfo {
        data = typeof data === 'object' ? data : {};
        let result = new VideoManagementNetforumItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["NetforumKey"] = this.netforumKey;
        data["NetforumType"] = this.netforumType;
        return data; 
    }
}

export interface IVideoManagementNetforumItemInfo {
    netforumKey?: string;
    netforumType?: string | undefined;
}

export class VideoManagementVideoDetailsDto implements IVideoManagementVideoDetailsDto {
    key?: string;
    startDateTime?: Date;
    startedByUsername?: string | undefined;
    status?: string | undefined;
    originalFileName?: string | undefined;
    title?: string | undefined;
    keywords?: string[] | undefined;
    videoHostUrl?: string | undefined;
    netforumItemLink?: VideoManagementNetforumItemInfo;
    finalizedDateTime?: Date;
    canEdit?: boolean;
    isProcessing?: boolean;

    constructor(data?: IVideoManagementVideoDetailsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.key = _data["Key"];
            this.startDateTime = _data["StartDateTime"] ? new Date(_data["StartDateTime"].toString()) : <any>undefined;
            this.startedByUsername = _data["StartedByUsername"];
            this.status = _data["Status"];
            this.originalFileName = _data["OriginalFileName"];
            this.title = _data["Title"];
            if (Array.isArray(_data["Keywords"])) {
                this.keywords = [] as any;
                for (let item of _data["Keywords"])
                    this.keywords!.push(item);
            }
            this.videoHostUrl = _data["VideoHostUrl"];
            this.netforumItemLink = _data["NetforumItemLink"] ? VideoManagementNetforumItemInfo.fromJS(_data["NetforumItemLink"]) : <any>undefined;
            this.finalizedDateTime = _data["FinalizedDateTime"] ? new Date(_data["FinalizedDateTime"].toString()) : <any>undefined;
            this.canEdit = _data["CanEdit"];
            this.isProcessing = _data["IsProcessing"];
        }
    }

    static fromJS(data: any): VideoManagementVideoDetailsDto {
        data = typeof data === 'object' ? data : {};
        let result = new VideoManagementVideoDetailsDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Key"] = this.key;
        data["StartDateTime"] = this.startDateTime ? this.startDateTime.toISOString() : <any>undefined;
        data["StartedByUsername"] = this.startedByUsername;
        data["Status"] = this.status;
        data["OriginalFileName"] = this.originalFileName;
        data["Title"] = this.title;
        if (Array.isArray(this.keywords)) {
            data["Keywords"] = [];
            for (let item of this.keywords)
                data["Keywords"].push(item);
        }
        data["VideoHostUrl"] = this.videoHostUrl;
        data["NetforumItemLink"] = this.netforumItemLink ? this.netforumItemLink.toJSON() : <any>undefined;
        data["FinalizedDateTime"] = this.finalizedDateTime ? this.finalizedDateTime.toISOString() : <any>undefined;
        data["CanEdit"] = this.canEdit;
        data["IsProcessing"] = this.isProcessing;
        return data; 
    }
}

export interface IVideoManagementVideoDetailsDto {
    key?: string;
    startDateTime?: Date;
    startedByUsername?: string | undefined;
    status?: string | undefined;
    originalFileName?: string | undefined;
    title?: string | undefined;
    keywords?: string[] | undefined;
    videoHostUrl?: string | undefined;
    netforumItemLink?: VideoManagementNetforumItemInfo;
    finalizedDateTime?: Date;
    canEdit?: boolean;
    isProcessing?: boolean;
}

export class VideoManagementVm implements IVideoManagementVm {
    finalizedVideoDetailsDtos?: VideoManagementVideoDetailsDto[] | undefined;
    pendingVideoDetailsDto?: VideoManagementVideoDetailsDto[] | undefined;

    constructor(data?: IVideoManagementVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["FinalizedVideoDetailsDtos"])) {
                this.finalizedVideoDetailsDtos = [] as any;
                for (let item of _data["FinalizedVideoDetailsDtos"])
                    this.finalizedVideoDetailsDtos!.push(VideoManagementVideoDetailsDto.fromJS(item));
            }
            if (Array.isArray(_data["PendingVideoDetailsDto"])) {
                this.pendingVideoDetailsDto = [] as any;
                for (let item of _data["PendingVideoDetailsDto"])
                    this.pendingVideoDetailsDto!.push(VideoManagementVideoDetailsDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): VideoManagementVm {
        data = typeof data === 'object' ? data : {};
        let result = new VideoManagementVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.finalizedVideoDetailsDtos)) {
            data["FinalizedVideoDetailsDtos"] = [];
            for (let item of this.finalizedVideoDetailsDtos)
                data["FinalizedVideoDetailsDtos"].push(item.toJSON());
        }
        if (Array.isArray(this.pendingVideoDetailsDto)) {
            data["PendingVideoDetailsDto"] = [];
            for (let item of this.pendingVideoDetailsDto)
                data["PendingVideoDetailsDto"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IVideoManagementVm {
    finalizedVideoDetailsDtos?: VideoManagementVideoDetailsDto[] | undefined;
    pendingVideoDetailsDto?: VideoManagementVideoDetailsDto[] | undefined;
}

export class ErrorInfo implements IErrorInfo {
    userErrorMessage?: string | undefined;

    constructor(data?: IErrorInfo) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.userErrorMessage = _data["UserErrorMessage"];
        }
    }

    static fromJS(data: any): ErrorInfo {
        data = typeof data === 'object' ? data : {};
        let result = new ErrorInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["UserErrorMessage"] = this.userErrorMessage;
        return data; 
    }
}

export interface IErrorInfo {
    userErrorMessage?: string | undefined;
}

export class StringStringKeyValuePair implements IStringStringKeyValuePair {
    readonly key?: string | undefined;
    readonly value?: string | undefined;

    constructor(data?: IStringStringKeyValuePair) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).key = _data["Key"];
            (<any>this).value = _data["Value"];
        }
    }

    static fromJS(data: any): StringStringKeyValuePair {
        data = typeof data === 'object' ? data : {};
        let result = new StringStringKeyValuePair();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Key"] = this.key;
        data["Value"] = this.value;
        return data; 
    }
}

export interface IStringStringKeyValuePair {
    key?: string | undefined;
    value?: string | undefined;
}

export class VideoManagementVmQueryResponseWrapper implements IVideoManagementVmQueryResponseWrapper {
    result?: VideoManagementVm;
    errorInfo?: ErrorInfo;
    errors?: StringStringKeyValuePair[] | undefined;

    constructor(data?: IVideoManagementVmQueryResponseWrapper) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.result = _data["Result"] ? VideoManagementVm.fromJS(_data["Result"]) : <any>undefined;
            this.errorInfo = _data["ErrorInfo"] ? ErrorInfo.fromJS(_data["ErrorInfo"]) : <any>undefined;
            if (Array.isArray(_data["Errors"])) {
                this.errors = [] as any;
                for (let item of _data["Errors"])
                    this.errors!.push(StringStringKeyValuePair.fromJS(item));
            }
        }
    }

    static fromJS(data: any): VideoManagementVmQueryResponseWrapper {
        data = typeof data === 'object' ? data : {};
        let result = new VideoManagementVmQueryResponseWrapper();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Result"] = this.result ? this.result.toJSON() : <any>undefined;
        data["ErrorInfo"] = this.errorInfo ? this.errorInfo.toJSON() : <any>undefined;
        if (Array.isArray(this.errors)) {
            data["Errors"] = [];
            for (let item of this.errors)
                data["Errors"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IVideoManagementVmQueryResponseWrapper {
    result?: VideoManagementVm;
    errorInfo?: ErrorInfo;
    errors?: StringStringKeyValuePair[] | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}