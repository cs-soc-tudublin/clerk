export function createBlogFrontMatter(title: string, tags: string, author: string) {
    const tagsArray: string[] = tags.split(' ');
    const frontmatterDashes = '---';
    const frontMatterTitle = `title: ${title}`;
    const frontmatterAuthor = `author: ${author}`;
    const created = `created: ${new Date().toISOString()}`;
    const tagsIndent = tagsArray.map((tag: string) => `   - ${tag}`).join('\n');
    const tagsString = `tags:\n${tagsIndent}`;

    return `${frontmatterDashes}\n${frontMatterTitle}\n${created}\n${tagsString}\n${frontmatterAuthor}\n${frontmatterDashes}`;
}

export function createDocsFrontmatter(title: string, tags: string) {
    const tagsArray: string[] = tags.split(' ');
    const frontmatterDashes = '---';
    const frontMatterTitle = `title: ${title}`;
    const created = `created: ${new Date().toISOString()}`;
    const tagsIndent = tagsArray.map((tag: string) => `   - ${tag}`).join('\n');
    const tagsString = `tags:\n${tagsIndent}`;

    return `${frontmatterDashes}\n${frontMatterTitle}\n${created}\n${tagsString}\n${frontmatterDashes}`;
}