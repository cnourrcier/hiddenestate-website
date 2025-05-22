export class RoutingService {
    static parseModalSlugFromPath(pathname) {
        const pathParts = pathname.split("/");
        return pathParts.length > 2 ? pathParts[2] : null;
    }

    static buildModalPath(basePath, slug) {
        // Always include the base path in the URL, defaulting to 'home' for root
        const finalBasePath = basePath || "home";
        return `/${finalBasePath}/${slug}`;
        // const cleanBasePath = basePath === "home" ? "" : basePath;
        // return `/${cleanBasePath}${cleanBasePath ? "/" : ""}${slug}`;
    }

    static getBasePathFromLocation(pathname) {
        const pathParts = pathname.split("/");
        const currentBase = pathParts.length > 1 ? pathParts[1] : "";
        // Default to 'home' when at root path, matching original logic
        return currentBase || "home";
        // return pathParts.length > 1 ? pathParts[1] : "home";
    }

    static buildClosePath(pathname) {
        const pathParts = pathname.split("/");
        if (pathParts.length >= 2 && pathParts[1] !== "home") {
            return `/${pathParts[1]}`;
        }
        return "/";
    }
}
