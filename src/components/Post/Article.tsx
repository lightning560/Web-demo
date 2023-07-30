import { formatDate } from "@/utils/time";

interface ArticleProps {
    timestamp?: number;
    title?: string;
    content?: string;
}
const Article = (props: ArticleProps) => {
    const format = 'yyyy-MM-dd HH:mm:ss';
    console.log("props.timestamp:", props.timestamp);
    let date = new Date(props.timestamp as number);
    const formattedDate = formatDate(date, format);
    console.log(formattedDate);
    return (
        <article className="mt-8 prose prose-green mx-auto lg:prose-lg">
            <p className='text-sm text-slate-400 mx-6'>{formattedDate}</p>
            <h2>🚗{props.title} 🎁</h2>
            <p>🎄{props.content}</p>
            <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
            <p>It's important to cover all of these use cases for a few reasons:</p>
            <ol>
                <li>We want everything to look good out of the box.</li>
                <li>Really just the first reason, that's the whole point of the plugin.</li>
                <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
            </ol>
            <p>Now we're going to try out another header style.</p>
            <h4>Typography should be easy</h4>
        </article>
    )
}

export default Article