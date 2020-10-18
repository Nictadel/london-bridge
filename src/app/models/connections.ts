import { Accessibility } from './accessibility'
import { ConnectionEnd } from './connection-end';

export interface News {
    "id": number,
    "state_id": number,
    "name": string,
    "current_info": string,
    "lat": number,
    "long": number,
    "connection_ends": ConnectionEnd[],
    "accessibility": Accessibility[]
}
