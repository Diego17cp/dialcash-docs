export interface NavItem {
	label: string;
	href: string;
	description?: string;
	icon?: string;
}

export interface NavConfig {
	items: NavItem[];
}

export const navConfig: NavConfig = {
	items: [
		{
			label: "FAQ",
			href: "/faq",
			description: "Frequently asked questions",
			icon: "❓",
		},
		{
			label: "Guide",
			href: "/guide",
			description: "Complete documentation",
			icon: "📚",
		},
		{
			label: "Tutorials",
			href: "/tutorials",
			description: "Step-by-step tutorials",
			icon: "🎓",
		},
		{
			label: "Blog",
			href: "/blog",
			description: "Latest news and updates",
			icon: "📝",
		},
		{
			label: "Support",
			href: "/support",
			description: "Get help from our team",
			icon: "💬",
		},
	],
};
