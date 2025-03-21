// Using ES2015 module syntax instead of namespaces

declare global {
    interface Window {
        google: typeof google;
    }
}

// Export interfaces and types instead of using namespaces
export interface LatLngLiteral {
    lat: number;
    lng: number;
}

export interface MapOptions {
    zoom?: number | null;
    center?: LatLng | LatLngLiteral | null;
}

export interface MarkerOptions {
    position?: LatLng | LatLngLiteral | null;
    map?: Map | null;
    draggable?: boolean | null;
}

export interface GeocoderRequest {
    location?: LatLng | LatLngLiteral | null;
}

export interface GeocoderResult {
    address_components: GeocoderAddressComponent[];
    formatted_address: string;
}

export interface GeocoderAddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface MapMouseEvent {
    latLng: LatLng | null;
}

// Enum as constant object (alternative to enum)
export const ControlPosition = {
    TOP_RIGHT: 0,
    TOP_LEFT: 1,
    TOP_CENTER: 2,
    BOTTOM_RIGHT: 3,
    BOTTOM_LEFT: 4,
    BOTTOM_CENTER: 5
} as const;
export type ControlPosition = typeof ControlPosition[keyof typeof ControlPosition];

export const GeocoderStatus = {
    OK: "OK",
    ZERO_RESULTS: "ZERO_RESULTS",
    OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
    REQUEST_DENIED: "REQUEST_DENIED",
    INVALID_REQUEST: "INVALID_REQUEST",
    UNKNOWN_ERROR: "UNKNOWN_ERROR"
} as const;
export type GeocoderStatus = typeof GeocoderStatus[keyof typeof GeocoderStatus];

// Class declarations
export class Map {
    constructor() {}
    setCenter(): void {}
    controls: {
        [index: number]: MVCArray<MVCObject>;
    } = {};
 
}

export class Marker {
    constructor() {}
    setPosition(): void {}
    getPosition(): LatLng { return new LatLng(0, 0); }
}

export class Geocoder {
    geocode(
    ): void {}
}

export class LatLng {
    constructor(_lat: number, _lng: number) {
        console.log("LatLng constructor",_lat,_lng);
    }
    
    lat(): number { return 0; }
    lng(): number { return 0; }
}

export class MVCObject {
    constructor() {}
}

export class MVCArray<T> {
    push(_element: T): number { console.log(_element);return 0; }
}

// Replace event namespace with an object containing functions
export const event = {
    // Fix the any types with proper type definitions
    addListener: <T>(
        _instance: T, 
        _eventName: string, 
        _handler: (e: unknown) => void
    ): { remove: () => void } => {
        console.log(_instance, _eventName, _handler);
        return { remove: () => {} };
    }
};

// Export a "maps" container to maintain API structure
export const maps = {
    Map,
    Marker,
    Geocoder,
    LatLng,
    MVCObject,
    MVCArray,
    ControlPosition,
    GeocoderStatus,
    event
};

// Make all exports available under customGoogle.maps
export const customGoogle = {
    maps
};

// For module augmentation
export {};