declare module "react-simple-maps" {
    import * as React from "react";

    export interface GeographyProps extends React.SVGProps<SVGPathElement> {
        geography: any;
    }

    export const Geography: React.FC<GeographyProps>;

    export interface GeographiesProps extends React.SVGProps<SVGGElement> {
        geography: string | object;
        children?: (props: { geographies: any[]; projection: any }) => React.ReactNode;
    }

    export const Geographies: React.FC<GeographiesProps>;

    export const ComposableMap: React.FC<any>;

    export const Marker: React.FC<{
        coordinates: [number, number];
        [key: string]: any;
    }>;

    export const Line: React.FC<{
        from: [number, number];
        to: [number, number];
        [key: string]: any;
    }>;

    export const Annotation: React.FC<AnnotationProps>;

}
