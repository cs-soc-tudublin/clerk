import { App, Modal, Setting } from "obsidian";

export class blogModal extends Modal {
	title: string;
	tags: string;
	author: string;
	onSubmit: (result: { title: string; tags: string; author: string }) => void;

	constructor(
		app: App,
		onSubmit: (result: {
			title: string;
			tags: string;
			author: string;
		}) => void,
	) {
		super(app);
		this.onSubmit = onSubmit;
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.createEl("h1", { text: "Create a New Blog Post" });

		new Setting(contentEl).setName("Post Title").addText((text) =>
			text.onChange((value) => {
				this.title = value;
			}),
		);

		new Setting(contentEl)
			.setName("Post Tags (Separated by spaces)")
			.addText((text) =>
				text.onChange((value) => {
					this.tags = value;
				}),
			);

		new Setting(contentEl).setName("Author").addText((text) =>
			text.onChange((value) => {
				this.author = value;
			}),
		);

		new Setting(contentEl).addButton((btn) =>
			btn
				.setButtonText("Submit")
				.setCta()
				.onClick(() => {
					this.close();
					this.onSubmit({
						title: this.title,
						tags: this.tags,
						author: this.author,
					});
				}),
		);
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}
