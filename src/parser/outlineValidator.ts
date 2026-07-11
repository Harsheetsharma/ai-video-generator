import { z } from "zod";
import { Outline } from "@/types/outline";

const OutlineSchema = z.object({
    id: z.number().int().positive(),
    title: z.string().min(1),
    description: z.string().min(1),
});

export class OutlineValidator {
    private schema = z.object({
        title: z.string().min(1),
        sections: z.array(OutlineSchema).min(1),
    });

    validate(data: unknown): Outline {
        return this.schema.parse(data);
    }
}