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

export function createDocsFrontMatter(title: string, tags: string) {
    const tagsArray: string[] = tags.split(' ');
    const frontmatterDashes = '---';
    const frontMatterTitle = `title: ${title}`;
    const created = `created: ${new Date().toISOString()}`;
    const tagsIndent = tagsArray.map((tag: string) => `   - ${tag}`).join('\n');
    const tagsString = `tags:\n${tagsIndent}`;

    return `${frontmatterDashes}\n${frontMatterTitle}\n${created}\n${tagsString}\n${frontmatterDashes}`;
}

export function createMinutesFrontMatter( title: string, attending: string, chair: string, meetingGroup: string, meetingAuthor: string) {
    const attendingArray: string[] = attending.split(',');
    const frontmatterDashes = '---';
    const frontMatterTitle = `title: ${title}`;
    const frontMatterChair = `chaired by: ${chair}`;
    const frontMatterMeetingGroup = `meeting group: ${meetingGroup}`;
    const frontMatterMeetingAuthor = `minutes by: ${meetingAuthor}`;
    const created = `timestamp: ${new Date().toISOString()}`;
    const attendingIndent = attendingArray.map((attendant: string) => `   - ${attendant}`).join('\n');
    const attendingString = `attending:\n${attendingIndent}`;

    return `${frontmatterDashes}\n${frontMatterTitle}\n${created}\nstart time: 00:00\nend time: 00:00\n${attendingString}\n${frontMatterChair}\n${frontMatterMeetingGroup}\n${frontMatterMeetingAuthor}\n${frontmatterDashes}`;
}