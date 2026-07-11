export interface Outline {
    title: string;

    sections: OutlineSection[];
}

export interface OutlineSection {
    id: number;

    title: string;

    description: string;
}