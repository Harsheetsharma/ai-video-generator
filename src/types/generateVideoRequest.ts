export type TargetType = "short" | "long";

export interface GenerateVideoRequest {
    script: string;
    targetType: TargetType;
}