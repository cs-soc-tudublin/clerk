import { App, Modal, Setting } from "obsidian";

export class minutesModal extends Modal {
    title: string;
    attending: string;
    chair: string;
    meetingGroup: string;
    meetingAuthor: string;
    onSubmit: (result: { title: string, attending: string, chair: string, meetingGroup: string, meetingAuthor: string }) => void;

    constructor(app: App, onSubmit: (result: { title: string, attending: string, chair: string, meetingGroup: string, meetingAuthor: string }) => void) {
        super(app);
        this.onSubmit = onSubmit;
    }

    onOpen() {
        const { contentEl } = this;

        contentEl.createEl("h1", { text: "Create New Meeting Minutes" });

        new Setting(contentEl)
            .setName("Meeting Title")
            .addText((text) =>
                text.onChange((value) => {
                    this.title = value
        }));

        new Setting(contentEl)
                .setName("Who is attending? (Separated by COMMAS!)")
                .addText((text) =>
                text.onChange((value) => {
                        this.attending = value
        }));

        new Setting(contentEl)
                .setName("Who is chairing the meeting?")
                .addText((text) =>
                text.onChange((value) => {
                        this.chair = value
        }));

        new Setting(contentEl)
                .setName("What group is meeting?")
                .addText((text) =>
                text.onChange((value) => {
                        this.meetingGroup = value
        }));

        new Setting(contentEl)
                .setName("Who is taking the meeting minutes?")
                .addText((text) =>
                text.onChange((value) => {
                        this.meetingAuthor = value
        }));

        new Setting(contentEl)
            .addButton((btn) =>
                btn
                    .setButtonText("Submit")
                    .setCta()
                    .onClick(() => {
                        this.close();
                        this.onSubmit({ title: this.title, attending: this.attending, chair: this.chair, meetingGroup: this.meetingGroup, meetingAuthor: this.meetingAuthor });
                    }));
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}
