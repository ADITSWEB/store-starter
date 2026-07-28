export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
    };
}

export class ApiClient {

    constructor(
        private readonly baseUrl: string,
        private readonly resource: string
    ) {}

    async get<T>(params?: any): Promise<T> {
        const path = new URLSearchParams(
            {
                resource: this.resource,
                ...params
            });
        const apiPath = 
            `${this.baseUrl}${path ? `?${path}` : ''}`;
        const response = await fetch(apiPath);

        if (!response.ok) {
            throw new Error(
                `HTTP ${response.status}`
            );
        }

        const json =
            await response.json() as ApiResponse<T>;

        if (!json.success) {
            throw new Error(
                json.error?.message ??
                "Unknown server error"
            );
        }

        return json.data!;
    }

}