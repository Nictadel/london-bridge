export interface Service {
    'id': number;
    'title': string;
    'description': string;
    'current_info': string;
    'type': {
        'id': number,
        'name': string,
        'icon_url': string
    };
    'state': {
        'id': number,
        'name': string,
        'icon_url': string
    };
}
