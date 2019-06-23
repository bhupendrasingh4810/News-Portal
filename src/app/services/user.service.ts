import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { IHeadlines } from '../models/headlines.model';
import { APIConstants } from '../api/api.constants';
import { ISources } from '../models/sources.model';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) { }

    // Get top headlines

    getTopHeadlines({ q, category, country, sources, language, page, pageSize }) {
        let params = new HttpParams();
        if (q) params = params.append('q', q);
        if (category) params = params.append('category', category);
        if (country) params = params.append('country', country);
        if (sources) params = params.append('sources', sources);
        if (language) params = params.append('language', language);
        if (page) params = params.append('page', page);
        if (pageSize) params = params.append('pageSize', pageSize);
        return this.http.get<IHeadlines>(APIConstants.HEADLINES, { params: params });
    }

    // Get everything

    getEverything({ q, domains, sortBy, sources, language, from, to, page, pageSize }) {
        let params = new HttpParams();
        if (q) params = params.append('q', q);
        if (domains) params = params.append('category', domains);
        if (sortBy) params = params.append('sortBy', sortBy);
        if (sources) params = params.append('sources', sources);
        if (language) params = params.append('language', language);
        if (from) params = params.append('from', from);
        if (to) params = params.append('to', to);
        if (page) params = params.append('page', page);
        if (pageSize) params = params.append('pageSize', pageSize);
        return this.http.get<IHeadlines>(APIConstants.EVERYTHING, { params: params });
    }

    // Get Sources

    getSources({ category, country, language }) {
        let params = new HttpParams();
        if (category) params = params.append('category', category);
        if (country) params = params.append('country', country);
        if (language) params = params.append('language', language);
        return this.http.get<ISources>(APIConstants.SOURCES, { params: params });
    }
}