import { Service } from './service';

export interface ConnectionEnd {
    "id": number,
    "shore": {
        "id": number,
        "name": string,
        "short_name": string
    },
    "lat": number,
    "long": number,
    "image_url": string,
    "services": Service[]
}