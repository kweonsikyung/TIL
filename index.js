import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD
 */
 
let text = `### Today I Learned..🔥👩🏻‍💻🌈🧩🎁
### 📕 Blog Posts
`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    const feed = await parser.parseURL('https://sikyung.tistory.com/rss');

    for (let i = 0; i < 50; i++) {
        if (feed.items[i]) {
            const { title, link } = feed.items[i];
            text += `<a href=${link}>${title}</a></br>`;
        }
    }

    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

})();
