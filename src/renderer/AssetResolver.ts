import { VisualType } from "@/types/blueprint";

export class AssetResolver {
    private static assets: Record<VisualType, string> = {
        ai: "videos/ai/ai.mp4",
        tech: "videos/tech/tech.mp4",
        news: "videos/news/news.mp4",
        abstract: "videos/abstract/abstract.mp4",
        warning: "videos/warning/warning.mp4",
        stock_market: "videos/stock_market/stock_market.mp4",
    };

    static getBackground(type: VisualType): string {
        return this.assets[type];
    }
}