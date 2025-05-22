import { getItemBySlug as originalGetItemBySlug } from "../data/imagesData";
import { MODAL_COMPONENTS, IMAGE_MAP } from "../config/modalConfig";

export class DataService {
    static async getModalItemBySlug(slug) {
        const item = originalGetItemBySlug(slug);

        if (!item) return null;

        const modalComponent =
            MODAL_COMPONENTS[item.interaction?.modalComponent];

        // Handle image mapping
        let source = item.source;
        if (typeof source === "string" && IMAGE_MAP[source]) {
            source = await IMAGE_MAP[source]();
        }

        return {
            ...item,
            source,
            modalComponent,
        };
    }

    static validateItemStructure(item) {
        const requiredFields = ["id", "source", "alt", "titles", "navigation"];
        return requiredFields.every(field => item[field]);
    }
}
