import {  Editor, MarkdownView, Plugin } from 'obsidian';
import { blogModal } from 'src/blogModal';
import { docsModal } from 'src/docsModal';
import { createBlogFrontMatter, createDocsFrontMatter, createMinutesFrontMatter } from 'src/createFrontMatter';
import { minutesModal } from 'src/minutesModal';

interface PluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: PluginSettings = {
	mySetting: 'default'
}

export default class Clerk extends Plugin {
	settings: PluginSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: 'open-blog-modal',
			name: 'Create a new blog post',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				new blogModal(this.app, (result) => {
					editor.replaceSelection(createBlogFrontMatter(result.title, result.tags, result.author));
				}).open();
			}
		});

		this.addCommand({
			id: 'open-docs-modal',
			name: 'Create a docs page',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				new docsModal(this.app, (result) => {
					editor.replaceSelection(createDocsFrontMatter(result.title, result.tags));
				}).open();
			}
		});

		this.addCommand({
			id: 'open-meetings-modal',
			name: 'Create meeting minutes',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				new minutesModal(this.app, (result) => {
					editor.replaceSelection(createMinutesFrontMatter(result.title, result.attending, result.chair, result.meetingGroup, result.meetingAuthor));
				}).open();
			}
		});
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}