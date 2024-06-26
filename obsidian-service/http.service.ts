import { requestUrl } from 'obsidian'

export class ObsidianHttpService {
	private headers: Record<string, string>
	constructor(private baseUrl: string) {}

	setHeaders(headers: Record<string, string>) {
		this.headers = headers
	}

	async get<T>(subPath: string) {
		const reponse = await requestUrl({
			url: `${this.baseUrl}/${subPath}`,
			method: 'GET',
			headers: this.headers,
		})
		return reponse.json as T
	}

	async post<T>(subPath: string, body?: any) {
		const reponse = await requestUrl({
			url: `${this.baseUrl}/${subPath}`,
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(body),
		})
		return reponse.json as T
	}
}
