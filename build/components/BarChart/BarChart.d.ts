import React from 'react';
export interface BarChartProps {
    data: BarChartDatum[];
    barType?: 'round' | 'square';
    barPadding?: number;
    barColour?: string;
    overridingClass?: string;
    showBackgroundColumns?: boolean;
}
interface BarChartDatum {
    bin: any;
    value: number;
}
export declare class BarChart extends React.Component<BarChartProps, {}> {
    chartGen: any;
    chartGenRef: any;
    containerRef: any;
    constructor(props: BarChartProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export {};
