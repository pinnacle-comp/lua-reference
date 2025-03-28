import { defineConfig } from "vitepress"
import { generateSidebar } from "vitepress-sidebar"
import { SidebarItem } from "vitepress-sidebar/types"

let sidebar = generateSidebar({
    collapsed: true,
    manualSortFileNameByPriority: ["versions", "classes", "aliases", "enums", "main"],
    excludePattern: ["README.md"],
    rootGroupText: "Versions",
})

function processEntry(sidebar: SidebarItem) {
    if (sidebar.text === "aliases" || sidebar.text === "classes" || sidebar.text === "enums") {
        sidebar.collapsed = false;
        sidebar.text = sidebar.text.charAt(0).toUpperCase() + sidebar.text.slice(1);
    }
    if (sidebar.items) {
        sidebar.items.forEach(item => processEntry(item))
    }
}

if (Array.isArray(sidebar)) {
    sidebar.forEach(processEntry);
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Lua Reference",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
        ],

        sidebar: sidebar,

        socialLinks: [
            { icon: "github", link: "https://github.com/pinnacle-comp/pinnacle" }
        ],
        search: {
            provider: "local"
        },
        docFooter: {
            prev: false,
            next: false,
        },
        footer: {
            message: "Generated with <a href=\"https://github.com/Ottatop/lcat\">lcat</a>",
        },
    },
    lastUpdated: true,
    base: "/lua-reference/",
    vite: {
        ssr: {
            noExternal: [
                "@nolebase/vitepress-plugin-highlight-targeted-heading",
            ],
        },
    },
})
