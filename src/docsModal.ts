import { App, Modal, Setting } from "obsidian";

export class docsModal extends Modal {
    title: string;
    tags: string;
    onSubmit: (result: { title: string, tags: string }) => void;

    constructor(app: App, onSubmit: (result: { title: string, tags: string }) => void) {
        super(app);
        this.onSubmit = onSubmit;
    }

    onOpen() {
        const { contentEl } = this;

        contentEl.createEl("h1", { text: "Create a New Help Doc" });

        new Setting(contentEl)
            .setName("Post Title")
            .addText((text) =>
                text.onChange((value) => {
                    this.title = value
        }));

        new Setting(contentEl)
                .setName("Post Tags (Separated by spaces)")
                .addText((text) =>
                text.onChange((value) => {
                        this.tags = value
        }));

        new Setting(contentEl)
            .addButton((btn) =>
                btn
                    .setButtonText("Submit")
                    .setCta()
                    .onClick(() => {
                        this.close();
                        this.onSubmit({ title: this.title, tags: this.tags });
                    }));
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}
