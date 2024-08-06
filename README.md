# Clerk

Clerk is CS++'s Obsidian plugin which makes it easy to create new Blog Posts and Docs Pages.

## Usage Instructions
Clone or download this plugin and put the extracted folder in `.obsidian/plugins`.
Enable community plugins, and enable `Clerk`

Open the Command Pallette with `CTRL + P` or `CMD + P` and search 'docs' or 'blog'.

Fill in the modal that appears with the relevant information.

Then write your blog post / docs page as usual

## Development Instructions
Prerequisites:
1. Obsidian
2. Node.JS

1. Clone the repository
```bash
cd .obsidian
mkdir plugins
cd plugins
git clone https://github.com/cs-soc-tudublin/clerk.git
```

2. Install dependencies
```bash
npm i
```

3. (Optional) Install the Hot Reload Plugin
Follow the instructions [here](https://github.com/pjeby/hot-reload).

4. Enable community plugins, Clerk and (if installed) Hot Reload
In Obsidian Settings

5. Start the development environment
```bash
npm run dev
```