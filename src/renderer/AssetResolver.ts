import { staticFile } from "remotion";
import { VisualType } from "@/types/blueprint";

export class AssetResolver {
    private static assets: Record<VisualType, string> = {
        ai: staticFile("videos/ai/ai.mp4"),
        tech: staticFile("videos/tech/tech.mp4"),
        news: staticFile("videos/news/news.mp4"),
        abstract: staticFile("videos/abstract/abstract.mp4"),
        warning: staticFile("videos/warning/warning.mp4"),
        stock_market: staticFile("videos/stock_market/stock_market.mp4"),
    };

    static getBackground(type: VisualType) {
        return this.assets[type];
    }
}