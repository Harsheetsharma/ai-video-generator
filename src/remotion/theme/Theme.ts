export const Theme = {
    colors: {
        background: "#080808",

        text: "#ffffff",

        secondaryText: "#d1d5db",

        glass: "rgba(18,18,22,.58)",

        glassBorder: "rgba(255,255,255,.12)",

        accent: "#5B8CFF",

        success: "#10B981",

        warning: "#F59E0B",

        danger: "#EF4444",
    },

    spacing: {
        xs: 8,
        sm: 16,
        md: 24,
        lg: 40,
        xl: 60,
        xxl: 80,
    },

    radius: {
        sm: 12,
        md: 20,
        lg: 32,
        xl: 44,
    },

    typography: {
        hero: 96,

        title: 72,

        subtitle: 42,

        body: 32,

        small: 24,
    },

    shadow: {
        glass: "0 30px 80px rgba(0,0,0,.45)",
    },
} as const;