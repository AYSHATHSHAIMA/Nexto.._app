import React from 'react'

export abstract class ServiceBase{
    //base url
    static API_URL='https://fakestoreapi.com';

    static getUrl(path:string){
        return `${this.API_URL}${path}`;
    }
}

